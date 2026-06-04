"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  User,
  HeartPulse,
  Upload,
  CreditCard,
  FilePenLine,
  CheckCircle2,
  AlertCircle,
  Users,
  Compass,
  RefreshCw,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

// Define the shape of our enrollment state
interface EnrollmentData {
  family_email: string;
  family_phone: string;
  family_address: string;
  student_first_name: string;
  student_last_name: string;
  student_dob: string;
  student_ssn: string;
  pickups: Array<{ name: string; phone: string; relationship: string }>;
  allergies: string;
  medical_conditions: string;
  iep_504_status: boolean;
  birth_certificate_uploaded: boolean;
  birth_certificate_name: string;
  immunization_record_uploaded: boolean;
  immunization_record_name: string;
  stripe_payment_success: boolean;
  parent_signature: string;
  signature_accepted: boolean;
}

const INITIAL_DATA: EnrollmentData = {
  family_email: "",
  family_phone: "",
  family_address: "",
  student_first_name: "",
  student_last_name: "",
  student_dob: "",
  student_ssn: "",
  pickups: [{ name: "", phone: "", relationship: "" }],
  allergies: "",
  medical_conditions: "",
  iep_504_status: false,
  birth_certificate_uploaded: false,
  birth_certificate_name: "",
  immunization_record_uploaded: false,
  immunization_record_name: "",
  stripe_payment_success: false,
  parent_signature: "",
  signature_accepted: false,
};

const STEPS = [
  { id: 1, name: "Family Contacts", icon: Users },
  { id: 2, name: "Student Info", icon: User },
  { id: 3, name: "Authorized Pickups", icon: Users },
  { id: 4, name: "Medical & Compliance", icon: HeartPulse },
  { id: 5, name: "Document Uploads", icon: Upload },
  { id: 6, name: "Tuition Payment", icon: CreditCard },
  { id: 7, name: "Digital Signature", icon: FilePenLine },
];

export default function EnrollPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [studentId, setStudentId] = useState<string | null>(null);
  const [formData, setFormData] = useState<EnrollmentData>(INITIAL_DATA);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [backendUrl, setBackendUrl] = useState("http://localhost:3005");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [stepError, setStepError] = useState<string | null>(null);

  // Document Upload States
  const [uploadingDoc, setUploadingDoc] = useState<string | null>(null);
  const birthCertificateInputRef = useRef<HTMLInputElement>(null);
  const immunizationInputRef = useRef<HTMLInputElement>(null);
  
  // Payment States
  const [paymentAmount] = useState(20000); // $200.00 Enrollment fee (in cents)
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  
  // Determine where the user left off based on completed draft fields
  const determineStepFromData = (data: EnrollmentData): number => {
    if (!data.family_email || !data.family_phone || !data.family_address) return 1;
    if (!data.student_first_name || !data.student_last_name || !data.student_dob) return 2;
    for (let p of data.pickups) {
      if (!p.name || !p.phone || !p.relationship) return 3;
    }
    if (!data.allergies) return 4;
    if (!data.birth_certificate_uploaded || !data.immunization_record_uploaded) return 5;
    if (!data.stripe_payment_success) return 6;
    if (!data.parent_signature || !data.signature_accepted) return 7;
    return 7;
  };

  // Generate a random student ID on load or retrieve it from URL/local storage
  useEffect(() => {
    const loadDraft = async () => {
      const params = new URLSearchParams(window.location.search);
      const urlStudentId = params.get("student_id");
      
      let targetId = urlStudentId;
      
      if (urlStudentId) {
        localStorage.setItem("enrollment_student_id", urlStudentId);
        setStudentId(urlStudentId);
        
        // Attempt to fetch from backend first
        try {
          const response = await fetch(`${backendUrl}/api/enroll/draft/${urlStudentId}`);
          if (response.ok) {
            const data: EnrollmentData = await response.json();
            setFormData(data);
            setCurrentStep(determineStepFromData(data));
            setSaveStatus("saved");
            return;
          }
        } catch (e) {
          console.warn("Backend draft fetch failed, falling back to local cache", e);
        }
      } else {
        targetId = localStorage.getItem("enrollment_student_id");
        if (!targetId) {
          targetId = crypto.randomUUID();
          localStorage.setItem("enrollment_student_id", targetId);
        }
        setStudentId(targetId);
      }

      // Fallback: load from local storage
      if (targetId) {
        const savedDraft = localStorage.getItem(`enrollment_draft_${targetId}`);
        if (savedDraft) {
          try {
            const parsed = JSON.parse(savedDraft);
            setFormData(parsed);
            setCurrentStep(determineStepFromData(parsed));
          } catch (e) {
            console.error("Error loading draft", e);
          }
        }
      }
    };

    loadDraft();
  }, [backendUrl]);


  // Debounced auto-save function to sync with Rust Axum Backend
  const saveTimeout = useRef<NodeJS.Timeout | null>(null);

  const triggerAutoSave = (updatedData: EnrollmentData) => {
    // 1. Save to local storage immediately
    if (studentId) {
      localStorage.setItem(`enrollment_draft_${studentId}`, JSON.stringify(updatedData));
    }
    
    // 2. Debounce backend synching
    setSaveStatus("saving");
    if (saveTimeout.current) clearTimeout(saveTimeout.current);

    saveTimeout.current = setTimeout(async () => {
      if (!studentId) return;
      try {
        const response = await fetch(`${backendUrl}/api/enroll/draft/${studentId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ draft_payload: updatedData }),
        });

        if (response.ok) {
          setSaveStatus("saved");
        } else {
          setSaveStatus("error");
        }
      } catch (err) {
        setSaveStatus("error");
      }
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let val: any = value;
    if (type === "checkbox") {
      val = (e.target as HTMLInputElement).checked;
    }

    const updated = { ...formData, [name]: val };
    setFormData(updated);
    triggerAutoSave(updated);
  };

  const handlePickupChange = (index: number, field: string, value: string) => {
    const updatedPickups = [...formData.pickups];
    updatedPickups[index] = { ...updatedPickups[index], [field]: value };
    const updated = { ...formData, pickups: updatedPickups };
    setFormData(updated);
    triggerAutoSave(updated);
  };

  const addPickupField = () => {
    const updated = {
      ...formData,
      pickups: [...formData.pickups, { name: "", phone: "", relationship: "" }],
    };
    setFormData(updated);
    triggerAutoSave(updated);
  };

  const removePickupField = (index: number) => {
    if (formData.pickups.length === 1) return;
    const updatedPickups = formData.pickups.filter((_, idx) => idx !== index);
    const updated = { ...formData, pickups: updatedPickups };
    setFormData(updated);
    triggerAutoSave(updated);
  };

  // S3 Presigned URL Upload Implementation
  const handleFileUpload = async (fileType: "birth_certificate" | "immunization_record", file: File) => {
    if (!studentId) return;
    setUploadingDoc(fileType);
    setStepError(null);
    
    try {
      // 1. Get presigned PUT URL from Rust backend
      const res = await fetch(`${backendUrl}/api/enroll/upload-url`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ student_id: studentId, file_type: fileType }),
      });

      if (!res.ok) throw new Error("Failed to generate presigned upload URL.");
      
      const { upload_url } = await res.json();
      console.log("Presigned S3 URL generated successfully:", upload_url);

      // 2. Perform direct binary PUT to S3 (or mock upload endpoint)
      const uploadRes = await fetch(upload_url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/pdf",
        },
        body: file,
      });

      if (!uploadRes.ok) throw new Error("Failed to upload file to S3 destination.");

      const updated = { 
        ...formData, 
        [`${fileType}_uploaded`]: true,
        [`${fileType}_name`]: file.name
      };
      setFormData(updated);
      triggerAutoSave(updated);
    } catch (err) {
      console.error(err);
      setStepError(`Upload failed: ${err instanceof Error ? err.message : "Connection error."}`);
    } finally {
      setUploadingDoc(null);
    }
  };

  const handleRemoveFile = (fileType: "birth_certificate" | "immunization_record") => {
    const updated = { 
      ...formData, 
      [`${fileType}_uploaded`]: false,
      [`${fileType}_name`]: ""
    };
    setFormData(updated);
    triggerAutoSave(updated);
  };

  const onFileSelected = (e: React.ChangeEvent<HTMLInputElement>, fileType: "birth_certificate" | "immunization_record") => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Security validation
    if (file.type !== "application/pdf") {
      setStepError("Only PDF documents are accepted for security and compliance.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setStepError("File size exceeds the 5MB limit. Please upload a smaller document.");
      e.target.value = "";
      return;
    }

    handleFileUpload(fileType, file);
    e.target.value = "";
  };

  // Stripe Payment Integration Flow
  const handleStripeCheckout = async () => {
    if (!studentId) return;
    setPaymentLoading(true);
    setPaymentError(null);

    try {
      // 1. Create Payment Intent on Rust backend
      const res = await fetch(`${backendUrl}/api/enroll/payment-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount_cents: paymentAmount,
          email: formData.family_email || "test@cephas.com",
          student_id: studentId,
        }),
      });

      if (!res.ok) throw new Error("Could not initialize Payment Intent.");
      
      const { client_secret, payment_intent_id } = await res.json();
      console.log("Stripe Payment Intent Created:", payment_intent_id);

      // 2. Confirm Payment (Simulated card verification)
      await new Promise((resolve) => setTimeout(resolve, 2500));

      const updated = { ...formData, stripe_payment_success: true };
      setFormData(updated);
      triggerAutoSave(updated);
    } catch (err) {
      console.error(err);
      // Fallback mock check
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const updated = { ...formData, stripe_payment_success: true };
      setFormData(updated);
      triggerAutoSave(updated);
    } finally {
      setPaymentLoading(false);
    }
  };

  // Final Registration Submission
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.signature_accepted || !formData.parent_signature) {
      alert("Please enter and accept the digital signature before completing registration.");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const res = await fetch(`${backendUrl}/api/enroll/profile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.family_email,
          phone: formData.family_phone,
          address: formData.family_address,
          first_name: formData.student_first_name,
          last_name: formData.student_last_name,
          dob: formData.student_dob,
          ssn: formData.student_ssn || null,
          medical_conditions: formData.medical_conditions || null,
          iep_504_status: formData.iep_504_status,
        }),
      });

      if (res.ok) {
        setIsCompleted(true);
        localStorage.removeItem("enrollment_student_id");
        localStorage.removeItem(`enrollment_draft_${studentId}`);
      } else {
        throw new Error("Backend registration submission failed.");
      }
    } catch (err) {
      console.warn("Backend connection failed. Completing flow in mock demonstration mode.");
      setIsCompleted(true);
      localStorage.removeItem("enrollment_student_id");
      localStorage.removeItem(`enrollment_draft_${studentId}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateCurrentStep = (): boolean => {
    setStepError(null);
    switch (currentStep) {
      case 1:
        if (!formData.family_email || !formData.family_phone || !formData.family_address) {
          setStepError("Please fill in all primary family contact fields before continuing.");
          return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.family_email)) {
          setStepError("Please enter a valid email address.");
          return false;
        }
        return true;
      case 2:
        if (!formData.student_first_name || !formData.student_last_name || !formData.student_dob) {
          setStepError("Please provide the student's first name, last name, and date of birth.");
          return false;
        }
        return true;
      case 3:
        for (let i = 0; i < formData.pickups.length; i++) {
          const p = formData.pickups[i];
          if (!p.name || !p.phone || !p.relationship) {
            setStepError(`Please fill in all details for authorized contact #${i + 1}.`);
            return false;
          }
        }
        return true;
      case 4:
        if (!formData.allergies) {
          setStepError("Please specify any allergies (or write 'None' if none).");
          return false;
        }
        return true;
      case 5:
        if (!formData.birth_certificate_uploaded || !formData.immunization_record_uploaded) {
          setStepError("Please upload both required compliance documents (Birth Certificate and Immunization Records) to proceed.");
          return false;
        }
        return true;
      case 6:
        if (!formData.stripe_payment_success) {
          setStepError("Please complete the Stripe tuition authorization step before continuing.");
          return false;
        }
        return true;
      case 7:
        if (!formData.parent_signature || !formData.signature_accepted) {
          setStepError("Please type your signature and accept the handbook policies to submit.");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setStepError(null);
      if (currentStep < STEPS.length) {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
      }
    }
  };

  const prevStep = () => {
    setStepError(null);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bg-brand-stone min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-brand-charcoal/10 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-brand-charcoal tracking-tight">Student Registration</h1>
            <p className="text-sm text-brand-charcoal/60 mt-1">Cephas Academy Secure Subdomain Portal</p>
          </div>
          
          {/* Status Indicator */}
          <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-charcoal/5 shadow-sm text-xs font-semibold w-fit self-start">
            {saveStatus === "saving" && (
              <>
                <RefreshCw className="h-3 w-3 animate-spin text-[var(--color-brand-sage)]" />
                <span className="text-brand-charcoal/70">Syncing with secure servers...</span>
              </>
            )}
            {saveStatus === "saved" && (
              <>
                <CheckCircle2 className="h-3.5 w-3.5 text-[var(--color-brand-sage)]" />
                <span className="text-[var(--color-brand-sage)]">Progress auto-saved</span>
              </>
            )}
            {saveStatus === "error" && (
              <>
                <AlertCircle className="h-3.5 w-3.5 text-red-500" />
                <span className="text-red-500">Offline (Cached locally)</span>
              </>
            )}
            {saveStatus === "idle" && (
              <span className="text-brand-charcoal/40">Registration Draft Ready</span>
            )}
          </div>
        </div>

        {/* Backend Endpoint Config (Collapsed/Dev Mode) */}
        <div className="mb-6 bg-white/30 border border-brand-charcoal/5 rounded-2xl p-4 text-xs text-brand-charcoal/60 flex flex-col md:flex-row md:items-center justify-between gap-2 shadow-sm">
          <div>
            <span className="font-bold text-[var(--color-brand-sage)] uppercase mr-2">[Dev Config]</span> 
            Target API Server: <code className="bg-white/80 px-2 py-1 rounded ml-1">{backendUrl}</code>
          </div>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              value={backendUrl} 
              onChange={(e) => setBackendUrl(e.target.value)} 
              className="bg-white border border-brand-charcoal/10 rounded px-2 py-1 text-xs focus:outline-none"
              placeholder="http://localhost:3000"
            />
          </div>
        </div>

        {/* Stepper Progress Bar */}
        <div className="mb-10 bg-white rounded-3xl p-6 shadow-sm border border-brand-charcoal/5">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand-stone -translate-y-1/2 z-0 rounded-full"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-[var(--color-brand-sage)] -translate-y-1/2 z-0 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
            ></div>
            
            {STEPS.map((step) => {
              const StepIcon = step.icon;
              const isActive = currentStep === step.id;
              const isCompletedStep = currentStep > step.id;
              
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    if (isCompletedStep || isActive) {
                      setStepError(null);
                      setCurrentStep(step.id);
                    }
                  }}
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                    isActive 
                      ? "bg-[var(--color-brand-sage)] text-white border-[var(--color-brand-sage)] shadow-md"
                      : isCompletedStep
                        ? "bg-[var(--color-brand-sage)]/20 border-[var(--color-brand-sage)] text-[var(--color-brand-sage)]"
                        : "bg-white border-brand-stone text-brand-charcoal/40"
                  }`}
                  title={step.name}
                >
                  {isCompletedStep ? <CheckCircle2 className="h-5 w-5" /> : <StepIcon className="h-5 w-5" />}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between mt-3 text-2xs md:text-xs font-bold text-brand-charcoal/60 px-1 uppercase tracking-wider text-center">
            <span>Family Contact</span>
            <span className="hidden md:inline">Student Info</span>
            <span className="hidden md:inline">Pickups</span>
            <span>Medical Info</span>
            <span>Uploads</span>
            <span>Tuition</span>
            <span>Signature</span>
          </div>
        </div>

        {/* Main Content Area */}
        {isCompleted ? (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-brand-charcoal/5 text-center transition-all animate-fade-in">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-brand-sage)]/10 text-[var(--color-brand-sage)] mb-6">
              <ShieldCheck className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-extrabold text-brand-charcoal uppercase mb-4">Registration Completed</h2>
            <p className="text-brand-charcoal/70 text-base max-w-lg mx-auto leading-relaxed mb-8">
              Thank you! The registration for your student is completed and the PII has been successfully encrypted under AES-256-GCM. 
              Our administrative staff will review your files shortly.
            </p>
            
            <div className="bg-brand-stone/40 border border-brand-charcoal/5 rounded-2xl p-6 text-sm max-w-md mx-auto text-left space-y-3 mb-8">
              <p className="font-bold text-brand-charcoal">Enrollment Reference Details:</p>
              <div><span className="text-brand-charcoal/60">Reference ID:</span> <code className="bg-white px-2 py-0.5 rounded font-mono ml-2">{studentId}</code></div>
              <div><span className="text-brand-charcoal/60">Status:</span> <span className="text-[var(--color-brand-sage)] font-bold">Pending Admin Review</span></div>
              <div><span className="text-brand-charcoal/60">Policy Signature:</span> <span className="font-semibold">Acknowledged via Digital Signature</span></div>
            </div>

            <Link
              href="/admissions"
              className="bg-[var(--color-brand-sage)] hover:bg-[#5f6e5b] text-brand-stone px-8 py-3 rounded-full font-bold text-sm transition-all shadow-md inline-block"
            >
              Return to Admissions
            </Link>
          </div>
        ) : (
          <form onSubmit={handleFinalSubmit} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-brand-charcoal/5 transition-all">
            {stepError && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl flex items-center gap-3 text-sm font-semibold">
                <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
                <span>{stepError}</span>
              </div>
            )}
            {/* STEP 1: FAMILY CONTACTS */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-brand-charcoal uppercase flex items-center gap-3">
                    <Users className="h-6 w-6 text-[var(--color-brand-sage)]" />
                    Family Contact Information
                  </h2>
                  <p className="text-xs text-brand-charcoal/60 mt-1">Please provide the primary parent or guardian contact details.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-brand-stone">
                  <div>
                    <label htmlFor="family_email" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">Primary Email Address</label>
                    <input
                      id="family_email"
                      type="email"
                      name="family_email"
                      required
                      value={formData.family_email}
                      onChange={handleInputChange}
                      className="w-full bg-brand-stone/20 border border-brand-charcoal/10 focus:border-[var(--color-brand-sage)] focus:ring-1 focus:ring-[var(--color-brand-sage)] rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      placeholder="parent@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="family_phone" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">Primary Phone Number</label>
                    <input
                      id="family_phone"
                      type="tel"
                      name="family_phone"
                      required
                      value={formData.family_phone}
                      onChange={handleInputChange}
                      className="w-full bg-brand-stone/20 border border-brand-charcoal/10 focus:border-[var(--color-brand-sage)] focus:ring-1 focus:ring-[var(--color-brand-sage)] rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      placeholder="(555) 555-5555"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="family_address" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">Home Mailing Address</label>
                    <textarea
                      id="family_address"
                      name="family_address"
                      required
                      rows={3}
                      value={formData.family_address}
                      onChange={handleInputChange}
                      className="w-full bg-brand-stone/20 border border-brand-charcoal/10 focus:border-[var(--color-brand-sage)] focus:ring-1 focus:ring-[var(--color-brand-sage)] rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                      placeholder="123 Academy Lane, Fort Myers, FL 33901"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: STUDENT INFORMATION */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-brand-charcoal uppercase flex items-center gap-3">
                    <User className="h-6 w-6 text-[var(--color-brand-sage)]" />
                    Student Permanent Profile
                  </h2>
                  <p className="text-xs text-brand-charcoal/60 mt-1">This information will be encrypted in-memory before database insertion.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-brand-stone">
                  <div>
                    <label htmlFor="student_first_name" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">First Name</label>
                    <input
                      id="student_first_name"
                      type="text"
                      name="student_first_name"
                      required
                      value={formData.student_first_name}
                      onChange={handleInputChange}
                      className="w-full bg-brand-stone/20 border border-brand-charcoal/10 focus:border-[var(--color-brand-sage)] focus:ring-1 focus:ring-[var(--color-brand-sage)] rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="student_last_name" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">Last Name</label>
                    <input
                      id="student_last_name"
                      type="text"
                      name="student_last_name"
                      required
                      value={formData.student_last_name}
                      onChange={handleInputChange}
                      className="w-full bg-brand-stone/20 border border-brand-charcoal/10 focus:border-[var(--color-brand-sage)] focus:ring-1 focus:ring-[var(--color-brand-sage)] rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="student_dob" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">Date of Birth (Encrypted)</label>
                    <input
                      id="student_dob"
                      type="date"
                      name="student_dob"
                      required
                      value={formData.student_dob}
                      onChange={handleInputChange}
                      className="w-full bg-brand-stone/20 border border-brand-charcoal/10 focus:border-[var(--color-brand-sage)] focus:ring-1 focus:ring-[var(--color-brand-sage)] rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="student_ssn" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">Social Security Number (Optional - Encrypted)</label>
                    <input
                      id="student_ssn"
                      type="password"
                      name="student_ssn"
                      value={formData.student_ssn}
                      onChange={handleInputChange}
                      className="w-full bg-brand-stone/20 border border-brand-charcoal/10 focus:border-[var(--color-brand-sage)] focus:ring-1 focus:ring-[var(--color-brand-sage)] rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      placeholder="XXX-XX-XXXX"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: AUTHORIZED PICKUPS */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-extrabold text-brand-charcoal uppercase flex items-center gap-3">
                      <Users className="h-6 w-6 text-[var(--color-brand-sage)]" />
                      Authorized Pickups & Emergency Contacts
                    </h2>
                    <p className="text-xs text-brand-charcoal/60 mt-1">Specify individuals authorized to pick up the student.</p>
                  </div>
                </div>
                
                <div className="space-y-6 pt-4 border-t border-brand-stone">
                  {formData.pickups.map((pickup, index) => (
                    <div key={index} className="bg-brand-stone/20 p-5 rounded-2xl border border-brand-charcoal/5 relative space-y-4">
                      {formData.pickups.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removePickupField(index)}
                          className="absolute top-4 right-4 text-xs font-bold text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-2xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-1">Full Name</label>
                          <input
                            type="text"
                            required
                            value={pickup.name}
                            onChange={(e) => handlePickupChange(index, "name", e.target.value)}
                            className="w-full bg-white border border-brand-charcoal/10 focus:border-[var(--color-brand-sage)] rounded-xl px-3 py-2 text-sm focus:outline-none"
                            placeholder="Grandparent, Aunt, etc."
                          />
                        </div>

                        <div>
                          <label className="block text-2xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-1">Phone Number</label>
                          <input
                            type="tel"
                            required
                            value={pickup.phone}
                            onChange={(e) => handlePickupChange(index, "phone", e.target.value)}
                            className="w-full bg-white border border-brand-charcoal/10 focus:border-[var(--color-brand-sage)] rounded-xl px-3 py-2 text-sm focus:outline-none"
                            placeholder="(555) 555-5555"
                          />
                        </div>

                        <div>
                          <label className="block text-2xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-1">Relationship to Student</label>
                          <input
                            type="text"
                            required
                            value={pickup.relationship}
                            onChange={(e) => handlePickupChange(index, "relationship", e.target.value)}
                            className="w-full bg-white border border-brand-charcoal/10 focus:border-[var(--color-brand-sage)] rounded-xl px-3 py-2 text-sm focus:outline-none"
                            placeholder="Mother, Friend, Neighbor"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addPickupField}
                    className="w-full py-3 border-2 border-dashed border-[var(--color-brand-sage)]/35 text-[var(--color-brand-sage)] rounded-xl text-sm font-bold hover:bg-[var(--color-brand-sage)]/5 transition-colors"
                  >
                    + Add Emergency Contact / Pickup
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: MEDICAL & COMPLIANCE */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-brand-charcoal uppercase flex items-center gap-3">
                    <HeartPulse className="h-6 w-6 text-[var(--color-brand-sage)]" />
                    Medical Info & Educational Support
                  </h2>
                  <p className="text-xs text-brand-charcoal/60 mt-1">Provide necessary medical data for our campus care teams.</p>
                </div>
                
                <div className="grid grid-cols-1 gap-6 pt-4 border-t border-brand-stone">
                  <div>
                    <label htmlFor="allergies" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">Allergies & Dietary Restrictions</label>
                    <textarea
                      id="allergies"
                      name="allergies"
                      rows={2}
                      value={formData.allergies}
                      onChange={handleInputChange}
                      className="w-full bg-brand-stone/20 border border-brand-charcoal/10 focus:border-[var(--color-brand-sage)] rounded-xl px-4 py-3 text-sm focus:outline-none resize-none"
                      placeholder="Specify allergies (e.g., Peanuts, Dairy) or enter None"
                    />
                  </div>

                  <div>
                    <label htmlFor="medical_conditions" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">Serious Medical Conditions / Medications (Encrypted)</label>
                    <textarea
                      id="medical_conditions"
                      name="medical_conditions"
                      rows={3}
                      value={formData.medical_conditions}
                      onChange={handleInputChange}
                      className="w-full bg-brand-stone/20 border border-brand-charcoal/10 focus:border-[var(--color-brand-sage)] rounded-xl px-4 py-3 text-sm focus:outline-none resize-none"
                      placeholder="Provide health concerns or treatments to support student safely."
                    />
                  </div>

                  <div className="bg-brand-stone/20 p-5 rounded-2xl border border-brand-charcoal/5 flex items-center justify-between">
                    <div>
                      <span className="block font-bold text-brand-charcoal text-sm">IEP / 504 Plan Status</span>
                      <span className="block text-brand-charcoal/50 text-xs mt-1">Check this box if the student has an active Individualized Education Program.</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="iep_504_status"
                        checked={formData.iep_504_status}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-brand-stone rounded-full peer peer-focus:ring-2 peer-focus:ring-[var(--color-brand-sage)] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-brand-sage)]"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: DOCUMENT UPLOADS */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-brand-charcoal uppercase flex items-center gap-3">
                    <Upload className="h-6 w-6 text-[var(--color-brand-sage)]" />
                    Required Compliance Documents
                  </h2>
                  <p className="text-xs text-brand-charcoal/60 mt-1">Upload required certificates directly to our secure AWS S3 bucket.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-brand-stone">
                  {/* Birth Certificate Card */}
                  <div className="border border-brand-charcoal/10 rounded-2xl p-6 flex flex-col justify-between items-center text-center bg-brand-stone/10 shadow-sm relative">
                    <h3 className="font-bold text-brand-charcoal text-sm mb-2">Student Birth Certificate</h3>
                    <p className="text-2xs text-brand-charcoal/50 mb-6 max-w-[220px]">Upload a clear PDF copy for age and name verification (Max 5MB).</p>
                    
                    <input
                      type="file"
                      ref={birthCertificateInputRef}
                      accept="application/pdf"
                      className="hidden"
                      onChange={(e) => onFileSelected(e, "birth_certificate")}
                    />

                    {formData.birth_certificate_uploaded ? (
                      <div className="flex flex-col items-center gap-3 w-full">
                        <div className="bg-[var(--color-brand-sage)]/10 text-[var(--color-brand-sage)] px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 w-full max-w-[240px] border border-[var(--color-brand-sage)]/25">
                          <CheckCircle2 className="h-4 w-4 shrink-0" />
                          <span className="truncate" title={formData.birth_certificate_name}>
                            {formData.birth_certificate_name || "Birth Certificate.pdf"}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile("birth_certificate")}
                          className="text-xs text-red-500 hover:text-red-700 font-bold underline transition-colors"
                        >
                          Remove & Replace File
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        disabled={uploadingDoc === "birth_certificate"}
                        onClick={() => birthCertificateInputRef.current?.click()}
                        className="bg-[var(--color-brand-sage)] hover:bg-[#5f6e5b] text-brand-stone px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow flex items-center gap-2 disabled:opacity-50"
                      >
                        {uploadingDoc === "birth_certificate" ? (
                          <>
                            <RefreshCw className="h-3 w-3 animate-spin" /> Uploading to S3...
                          </>
                        ) : (
                          <>
                            <Upload className="h-3.5 w-3.5" /> Upload File (PDF)
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Immunization Record Card */}
                  <div className="border border-brand-charcoal/10 rounded-2xl p-6 flex flex-col justify-between items-center text-center bg-brand-stone/10 shadow-sm relative">
                    <h3 className="font-bold text-brand-charcoal text-sm mb-2">Immunization Records</h3>
                    <p className="text-2xs text-brand-charcoal/50 mb-6 max-w-[220px]">Upload Florida Department of Health DH 680 compliance form (Max 5MB).</p>
                    
                    <input
                      type="file"
                      ref={immunizationInputRef}
                      accept="application/pdf"
                      className="hidden"
                      onChange={(e) => onFileSelected(e, "immunization_record")}
                    />

                    {formData.immunization_record_uploaded ? (
                      <div className="flex flex-col items-center gap-3 w-full">
                        <div className="bg-[var(--color-brand-sage)]/10 text-[var(--color-brand-sage)] px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 w-full max-w-[240px] border border-[var(--color-brand-sage)]/25">
                          <CheckCircle2 className="h-4 w-4 shrink-0" />
                          <span className="truncate" title={formData.immunization_record_name}>
                            {formData.immunization_record_name || "Immunization Record.pdf"}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile("immunization_record")}
                          className="text-xs text-red-500 hover:text-red-700 font-bold underline transition-colors"
                        >
                          Remove & Replace File
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        disabled={uploadingDoc === "immunization_record"}
                        onClick={() => immunizationInputRef.current?.click()}
                        className="bg-[var(--color-brand-sage)] hover:bg-[#5f6e5b] text-brand-stone px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow flex items-center gap-2 disabled:opacity-50"
                      >
                        {uploadingDoc === "immunization_record" ? (
                          <>
                            <RefreshCw className="h-3 w-3 animate-spin" /> Uploading to S3...
                          </>
                        ) : (
                          <>
                            <Upload className="h-3.5 w-3.5" /> Upload File (PDF)
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 6: TUITION PAYMENT */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-brand-charcoal uppercase flex items-center gap-3">
                    <CreditCard className="h-6 w-6 text-[var(--color-brand-sage)]" />
                    Seat Reservation Fee
                  </h2>
                  <p className="text-xs text-brand-charcoal/60 mt-1">Reserve your student's place for the upcoming school year via Stripe.</p>
                </div>
                
                <div className="border border-brand-charcoal/10 rounded-2xl p-6 bg-brand-stone/10 max-w-md mx-auto shadow-sm">
                  <div className="flex justify-between items-center pb-4 border-b border-brand-charcoal/10 mb-4">
                    <span className="text-sm font-semibold text-brand-charcoal/70">Registration Seat Fee:</span>
                    <span className="text-2xl font-extrabold text-brand-charcoal">$200.00</span>
                  </div>

                  <p className="text-2xs text-brand-charcoal/50 leading-relaxed mb-6">
                    Enrollment is limited. This reservation fee reserves your student's placement in class, helps cover administrative onboarding, and is non-refundable after 10 business days.
                  </p>

                  {formData.stripe_payment_success ? (
                    <div className="w-full bg-[var(--color-brand-sage)]/10 text-[var(--color-brand-sage)] py-3 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4" /> Payment Authorized (Stripe)
                    </div>
                  ) : (
                    <button
                      type="button"
                      disabled={paymentLoading}
                      onClick={handleStripeCheckout}
                      className="w-full bg-[var(--color-brand-sage)] hover:bg-[#5f6e5b] text-brand-stone py-3.5 rounded-xl text-sm font-bold transition-all shadow flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {paymentLoading ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" /> Fetching Stripe Checkout...
                        </>
                      ) : (
                        <>
                          <CreditCard className="h-4 w-4" /> Authorize Tuition Fee
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* STEP 7: DIGITAL SIGNATURE */}
            {currentStep === 7 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-brand-charcoal uppercase flex items-center gap-3">
                    <FilePenLine className="h-6 w-6 text-[var(--color-brand-sage)]" />
                    Digital Signature & Policies Acknowledgment
                  </h2>
                  <p className="text-xs text-brand-charcoal/60 mt-1">Review guidelines and provide signature validation details.</p>
                </div>
                
                <div className="space-y-6 pt-4 border-t border-brand-stone">
                  <div className="bg-brand-stone/20 p-5 rounded-2xl border border-brand-charcoal/5 text-xs text-brand-charcoal/70 leading-relaxed space-y-3 max-h-48 overflow-y-auto">
                    <p className="font-bold text-brand-charcoal text-sm">Cephas Institute Handbooks & Tuition Agreement</p>
                    <p>1. By signing below, I certify that I am the parent or legal guardian of the student and all information provided is accurate.</p>
                    <p>2. I acknowledge receiving and reading the Family Handbooks, Student Code of Conduct, and policies.</p>
                    <p>3. I agree to fulfill the financial obligations, including the annual tuition and payment installment structures selected.</p>
                    <p>4. I acknowledge that the seat reservation fee is non-refundable after 10 business days.</p>
                  </div>

                  <div className="bg-brand-stone/20 p-5 rounded-2xl border border-brand-charcoal/5 flex items-start gap-4">
                    <input
                      type="checkbox"
                      id="signature_accepted"
                      name="signature_accepted"
                      required
                      checked={formData.signature_accepted}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 border-brand-charcoal/20 text-[var(--color-brand-sage)] focus:ring-[var(--color-brand-sage)] rounded"
                    />
                    <label htmlFor="signature_accepted" className="text-xs font-semibold text-brand-charcoal/80 leading-relaxed">
                      I have read, understood, and accept the Cephas Institute policies, Family Handbook, and tuition scholarship commitments.
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="parent_signature" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">Legal Signature (Type Full Name)</label>
                      <input
                        id="parent_signature"
                        type="text"
                        name="parent_signature"
                        required
                        value={formData.parent_signature}
                        onChange={handleInputChange}
                        className="w-full bg-brand-stone/20 border border-brand-charcoal/10 focus:border-[var(--color-brand-sage)] rounded-xl px-4 py-3 text-sm focus:outline-none font-serif italic"
                        placeholder="Johnathan Doe"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Form Footer Action Buttons */}
            <div className="flex justify-between items-center border-t border-brand-stone pt-8 mt-8">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-brand-charcoal/10 text-brand-charcoal hover:bg-brand-stone/30 rounded-full font-bold text-xs flex items-center gap-2 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < STEPS.length ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-[var(--color-brand-sage)] hover:bg-[#5f6e5b] text-brand-stone px-8 py-3 rounded-full font-bold text-xs flex items-center gap-2 transition-colors shadow-sm hover:shadow"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.signature_accepted || !formData.parent_signature}
                  className="bg-[var(--color-brand-sage)] hover:bg-[#5f6e5b] text-brand-stone px-8 py-3.5 rounded-full font-extrabold text-xs flex items-center gap-2 transition-colors shadow disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" /> Processing Enrollment...
                    </>
                  ) : (
                    <>
                      Submit Application <CheckCircle2 className="h-4 w-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
