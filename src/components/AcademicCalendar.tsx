"use client";

import React, { useState } from "react";
import { Calendar, Info, Printer } from "lucide-react";

interface CalendarEvent {
  type: "closed" | "enrichment" | "boundary" | "planning";
  label: string;
}

const EVENTS: Record<string, CalendarEvent> = {
  // August 2026
  "2026-08-03": { type: "planning", label: "Teacher Preparations (No school for students)" },
  "2026-08-04": { type: "planning", label: "Teacher Preparations (No school for students)" },
  "2026-08-05": { type: "planning", label: "Teacher Preparations (No school for students)" },
  "2026-08-06": { type: "planning", label: "Teacher Preparations (No school for students)" },
  "2026-08-07": { type: "planning", label: "Teacher Preparations (No school for students)" },
  "2026-08-10": { type: "planning", label: "Teacher Preparations (No school for students)" },
  "2026-08-11": { type: "planning", label: "Teacher Preparations (No school for students)" },
  "2026-08-12": { type: "planning", label: "Teacher Preparations (No school for students)" },
  "2026-08-13": { type: "planning", label: "Teacher Preparations (No school for students)" },
  "2026-08-14": { type: "planning", label: "Teacher Preparations (No school for students)" },
  "2026-08-17": { type: "boundary", label: "Students' First Day" },
  "2026-08-21": { type: "enrichment", label: "Optional Enrichment Day" },

  // September 2026
  "2026-09-04": { type: "enrichment", label: "Optional Enrichment Day" },
  "2026-09-07": { type: "closed", label: "Labor Day Holiday (No School)" },

  // October 2026
  "2026-10-02": { type: "enrichment", label: "Optional Enrichment Day" },
  "2026-10-16": { type: "enrichment", label: "Optional Enrichment Day (End of Quarter 1)" },
  "2026-10-30": { type: "enrichment", label: "Optional Enrichment Day" },

  // November 2026
  "2026-11-06": { type: "enrichment", label: "Optional Enrichment Day" },
  "2026-11-11": { type: "closed", label: "Veteran's Day (No School)" },
  "2026-11-20": { type: "enrichment", label: "Optional Enrichment Day" },
  "2026-11-23": { type: "closed", label: "Thanksgiving Break (No School)" },
  "2026-11-24": { type: "closed", label: "Thanksgiving Break (No School)" },
  "2026-11-25": { type: "closed", label: "Thanksgiving Break (No School)" },
  "2026-11-26": { type: "closed", label: "Thanksgiving Break (No School)" },
  "2026-11-27": { type: "closed", label: "Thanksgiving Break (No School)" },

  // December 2026
  "2026-12-04": { type: "enrichment", label: "Optional Enrichment Day" },
  "2026-12-18": { type: "enrichment", label: "Optional Enrichment Day (End of Quarter 2)" },
  "2026-12-21": { type: "closed", label: "Winter Break (No School)" },
  "2026-12-22": { type: "closed", label: "Winter Break (No School)" },
  "2026-12-23": { type: "closed", label: "Winter Break (No School)" },
  "2026-12-24": { type: "closed", label: "Winter Break (No School)" },
  "2026-12-25": { type: "closed", label: "Winter Break (No School)" },
  "2026-12-28": { type: "closed", label: "Winter Break (No School)" },
  "2026-12-29": { type: "closed", label: "Winter Break (No School)" },
  "2026-12-30": { type: "closed", label: "Winter Break (No School)" },
  "2026-12-31": { type: "closed", label: "Winter Break (No School)" },

  // January 2027
  "2027-01-01": { type: "closed", label: "Winter Break (No School)" },
  "2027-01-04": { type: "planning", label: "Teacher Preparation Day (No School)" },
  "2027-01-05": { type: "boundary", label: "Students Return / Classes Resume" },
  "2027-01-08": { type: "enrichment", label: "Optional Enrichment Day" },
  "2027-01-18": { type: "closed", label: "Martin Luther King Jr. Day Holiday (No School)" },
  "2027-01-22": { type: "enrichment", label: "Optional Enrichment Day" },

  // February 2027
  "2027-02-05": { type: "enrichment", label: "Optional Enrichment Day" },
  "2027-02-15": { type: "closed", label: "Presidents' Day Holiday (No School)" },
  "2027-02-19": { type: "enrichment", label: "Optional Enrichment Day" },

  // March 2027
  "2027-03-05": { type: "enrichment", label: "Optional Enrichment Day" },
  "2027-03-19": { type: "enrichment", label: "Optional Enrichment Day (End of Quarter 3)" },
  "2027-03-22": { type: "closed", label: "Spring Break (School Closed)" },
  "2027-03-23": { type: "closed", label: "Spring Break (School Closed)" },
  "2027-03-24": { type: "closed", label: "Spring Break (School Closed)" },
  "2027-03-25": { type: "closed", label: "Spring Break (School Closed)" },
  "2027-03-26": { type: "closed", label: "Spring Break (School Closed)" },
  "2027-03-29": { type: "closed", label: "No School (Easter/Spring Break Extension)" },
  "2027-03-30": { type: "closed", label: "No School (Easter/Spring Break Extension)" },
  "2027-03-31": { type: "closed", label: "No School (Easter/Spring Break Extension)" },

  // April 2027
  "2027-04-02": { type: "enrichment", label: "Optional Enrichment Day" },
  "2027-04-16": { type: "enrichment", label: "Optional Enrichment Day" },
  "2027-04-30": { type: "enrichment", label: "Optional Enrichment Day" },

  // May 2027
  "2027-05-14": { type: "enrichment", label: "Optional Enrichment Day" },
  "2027-05-20": { type: "boundary", label: "Last day of school; End of Quarter 4" },
  "2027-05-21": { type: "planning", label: "Teacher Planning" },
  "2027-05-24": { type: "planning", label: "Teacher Planning" },
  "2027-05-25": { type: "planning", label: "Teacher Planning" },
  "2027-05-26": { type: "planning", label: "Teacher Planning" },
  "2027-05-27": { type: "planning", label: "Teacher Planning" },
  "2027-05-28": { type: "planning", label: "Teacher Planning" },
};

const MONTHS_CONFIG = [
  { name: "July 2026", year: 2026, month: 6, semester: 1 },
  { name: "August 2026", year: 2026, month: 7, semester: 1 },
  { name: "September 2026", year: 2026, month: 8, semester: 1 },
  { name: "October 2026", year: 2026, month: 9, semester: 1 },
  { name: "November 2026", year: 2026, month: 10, semester: 1 },
  { name: "December 2026", year: 2026, month: 11, semester: 1 },
  { name: "January 2027", year: 2027, month: 0, semester: 2 },
  { name: "February 2027", year: 2027, month: 1, semester: 2 },
  { name: "March 2027", year: 2027, month: 2, semester: 2 },
  { name: "April 2027", year: 2027, month: 3, semester: 2 },
  { name: "May 2027", year: 2027, month: 4, semester: 2 },
  { name: "June 2027", year: 2027, month: 5, semester: 2 },
];

const LEGEND_ITEMS = [
  {
    type: "boundary" as const,
    label: "First / Last Day / Classes Resume",
    colorClass: "bg-rose-500 text-white",
    borderColorClass: "border-rose-500",
    dotClass: "bg-rose-500",
  },
  {
    type: "closed" as const,
    label: "School & Admin Offices Closed",
    colorClass: "bg-[var(--color-brand-sage)] text-white",
    borderColorClass: "border-[var(--color-brand-sage)]",
    dotClass: "bg-[var(--color-brand-sage)]",
  },
  {
    type: "planning" as const,
    label: "Employee Planning (No School)",
    colorClass: "bg-[#d8b4fe] text-purple-950",
    borderColorClass: "border-purple-300",
    dotClass: "bg-purple-400",
  },
  {
    type: "enrichment" as const,
    label: "Optional Enrichment Day (Fridays)",
    colorClass: "bg-[#faebe4] text-[#c27a5d] border border-[#c27a5d]/30",
    borderColorClass: "border-[#c27a5d]",
    dotClass: "bg-[#c27a5d]",
  },
  {
    type: "at-home-friday" as const,
    label: "At-Home Fridays (No School)",
    colorClass: "bg-[#f5ebd6] text-brand-charcoal/60 border border-dashed border-brand-charcoal/20",
    borderColorClass: "border-brand-charcoal/20",
    dotClass: "bg-orange-300",
  },
];

export default function AcademicCalendar() {
  const [semesterFilter, setSemesterFilter] = useState<0 | 1 | 2>(0); // 0 = All, 1 = Semester 1, 2 = Semester 2
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handlePrint = () => {
    window.print();
  };

  // Helper to format date key YYYY-MM-DD
  const getDateKey = (year: number, month: number, day: number) => {
    const mm = String(month + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
  };

  // Generate weeks for a month grid
  const getMonthGrid = (year: number, month: number) => {
    const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Sun, 1 = Mon...
    const totalDays = new Date(year, month + 1, 0).getDate();

    const gridCells: { dayNum: number | null; dateKey: string | null }[] = [];

    // Fill leading empty cells
    for (let i = 0; i < firstDayIndex; i++) {
      gridCells.push({ dayNum: null, dateKey: null });
    }

    // Fill actual month days
    for (let day = 1; day <= totalDays; day++) {
      gridCells.push({ dayNum: day, dateKey: getDateKey(year, month, day) });
    }

    // Pad trailing cells to make a multiple of 7
    while (gridCells.length % 7 !== 0) {
      gridCells.push({ dayNum: null, dateKey: null });
    }

    return gridCells;
  };

  // Filter months based on semester selection
  const filteredMonths = MONTHS_CONFIG.filter((m) => {
    if (semesterFilter === 0) return true;
    return m.semester === semesterFilter;
  });

  // Extract text events for a specific month for list view
  const getMonthTextEvents = (year: number, month: number) => {
    const list: { dayRange: string; label: string; type: string }[] = [];
    const monthKeyPrefix = `${year}-${String(month + 1).padStart(2, "0")}-`;
    
    // Group adjacent same-type events
    const daysWithEvents = Object.keys(EVENTS)
      .filter((k) => k.startsWith(monthKeyPrefix))
      .sort();

    const processed = new Set<string>();

    for (let i = 0; i < daysWithEvents.length; i++) {
      const key = daysWithEvents[i];
      if (processed.has(key)) continue;

      const event = EVENTS[key];
      const day = parseInt(key.split("-")[2], 10);
      
      // Look forward to find continuous range of the same event label
      let endDay = day;
      let nextIdx = i + 1;
      while (nextIdx < daysWithEvents.length) {
        const nextKey = daysWithEvents[nextIdx];
        const nextDay = parseInt(nextKey.split("-")[2], 10);
        const nextEvent = EVENTS[nextKey];
        
        if (nextEvent.label === event.label && nextDay === endDay + 1) {
          endDay = nextDay;
          processed.add(nextKey);
          nextIdx++;
        } else {
          break;
        }
      }
      
      const dayRange = day === endDay ? `${day}` : `${day}-${endDay}`;
      list.push({ dayRange, label: event.label, type: event.type });
      processed.add(key);
    }

    return list;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-md border-t border-brand-charcoal/5 print:bg-white print:p-0 print:border-none print-calendar-section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 print:mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[var(--color-brand-sage)] font-semibold uppercase tracking-wider text-xs">
              <Calendar className="h-4 w-4" />
              <span>Academic Schedule</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal tracking-tight">
              2026&ndash;2027 ACADEMIC CALENDAR
            </h2>
          </div>
          
          <div className="flex items-center gap-3 shrink-0 print:hidden">
            {/* Semester Tabs */}
            <div className="inline-flex bg-brand-stone/50 p-1.5 rounded-full border border-brand-charcoal/5">
              <button
                onClick={() => setSemesterFilter(0)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                  semesterFilter === 0
                    ? "bg-[var(--color-brand-sage)] text-white shadow-sm"
                    : "text-brand-charcoal/70 hover:text-brand-charcoal"
                }`}
              >
                Full Year
              </button>
              <button
                onClick={() => setSemesterFilter(1)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                  semesterFilter === 1
                    ? "bg-[var(--color-brand-sage)] text-white shadow-sm"
                    : "text-brand-charcoal/70 hover:text-brand-charcoal"
                }`}
              >
                Sem 1 (Jul-Dec)
              </button>
              <button
                onClick={() => setSemesterFilter(2)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                  semesterFilter === 2
                    ? "bg-[var(--color-brand-sage)] text-white shadow-sm"
                    : "text-brand-charcoal/70 hover:text-brand-charcoal"
                }`}
              >
                Sem 2 (Jan-Jun)
              </button>
            </div>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="p-2.5 bg-brand-stone hover:bg-brand-stone/80 text-brand-charcoal border border-brand-charcoal/10 rounded-full transition-all hover:scale-105 cursor-pointer"
              title="Print Calendar"
            >
              <Printer className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Legend */}
        <div className="mb-12 p-6 rounded-3xl bg-brand-stone/30 border border-brand-charcoal/5 print:mb-8 print:p-4 print:bg-transparent">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/60 mb-4 flex items-center gap-1.5 print:hidden">
            <Info className="h-3.5 w-3.5" />
            <span>Interactive Legend (Click to filter events)</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {LEGEND_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveCategory(activeCategory === item.type ? null : item.type)}
                className={`flex items-center gap-3 p-3 rounded-2xl border text-left transition-all text-xs font-semibold print:pointer-events-none cursor-pointer ${
                  activeCategory === item.type
                    ? "ring-2 ring-[var(--color-brand-sage)] scale-[1.02] shadow-sm bg-white"
                    : activeCategory !== null
                    ? "opacity-40 bg-transparent border-transparent"
                    : "bg-white hover:bg-brand-stone/20 hover:scale-[1.01] border-brand-charcoal/5"
                }`}
              >
                <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${item.dotClass} border border-brand-charcoal/10`} />
                <span className="text-brand-charcoal leading-snug">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Calendar Months Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 print:grid-cols-2 print:gap-4 print:text-black">
          {filteredMonths.map((month) => {
            const grid = getMonthGrid(month.year, month.month);
            const textEvents = getMonthTextEvents(month.year, month.month);
            
            return (
              <div
                key={month.name}
                className="bg-[#f9f9f7]/80 rounded-3xl border border-brand-charcoal/10 overflow-hidden flex flex-col p-6 shadow-sm hover:shadow-md transition-shadow print:shadow-none print:bg-white print:border print:border-black/20 break-inside-avoid"
              >
                {/* Month Name */}
                <h3 className="text-lg font-extrabold text-brand-charcoal mb-4 border-b border-brand-charcoal/10 pb-2 flex justify-between items-center">
                  <span>{month.name}</span>
                </h3>

                {/* Calendar Days Table */}
                <div className="grid grid-cols-7 gap-1 text-center font-semibold text-xs mb-4">
                  {/* Headers */}
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((dayName) => (
                    <div key={dayName} className="text-brand-charcoal/50 py-1 font-bold">
                      {dayName}
                    </div>
                  ))}

                  {/* Grid Cells */}
                  {grid.map((cell, idx) => {
                    const isDayInMonth = cell.dayNum !== null;
                    const dateKey = cell.dateKey;
                    
                    let event = dateKey ? EVENTS[dateKey] : null;
                    const isFriday = idx % 7 === 5; // Friday column index
                    const isWeekend = idx % 7 === 0 || idx % 7 === 6;

                    // Standardize Fridays that are not colored to "at-home-friday"
                    if (isDayInMonth && isFriday && !event) {
                      event = { type: "enrichment", label: "At-Home Day (No School)" }; // Styled like at-home-friday
                    }

                    // Apply active filtering classes
                    let isDimmed = false;
                    if (activeCategory) {
                      if (activeCategory === "at-home-friday") {
                        const match = isDayInMonth && isFriday && (!dateKey || !EVENTS[dateKey]);
                        isDimmed = !match;
                      } else {
                        isDimmed = !event || event.type !== activeCategory;
                      }
                    }

                    // Compute styling classes
                    let cellStyle = "text-brand-charcoal/90 hover:bg-brand-sage/10";
                    if (isWeekend) {
                      cellStyle = "text-brand-charcoal/30";
                    }

                    if (event) {
                      if (event.label === "At-Home Day (No School)") {
                        cellStyle = "bg-[#f5ebd6] text-brand-charcoal/60 border border-dashed border-brand-charcoal/20 font-bold shadow-sm";
                      } else if (event.type === "closed") {
                        cellStyle = "bg-[var(--color-brand-sage)] text-white font-bold shadow-sm hover:bg-[#5f6e5b]";
                      } else if (event.type === "enrichment") {
                        cellStyle = "bg-[#faebe4] text-[#c27a5d] font-bold border border-[#c27a5d]/30 shadow-sm hover:scale-105";
                      } else if (event.type === "boundary") {
                        cellStyle = "bg-rose-500 text-white font-bold shadow-sm hover:bg-rose-600 hover:scale-105";
                      } else if (event.type === "planning") {
                        cellStyle = "bg-[#d8b4fe] text-purple-950 font-bold shadow-sm hover:bg-purple-300";
                      }
                    }

                    return (
                      <div
                        key={idx}
                        className={`aspect-square flex items-center justify-center rounded-full text-xs font-semibold select-none relative transition-all duration-300 ${
                          isDayInMonth ? cellStyle : "text-transparent pointer-events-none"
                        } ${isDimmed ? "opacity-20 blur-[0.5px]" : "opacity-100"} group`}
                      >
                        {cell.dayNum}
                        
                        {/* Interactive hover tooltip (Desktop only) */}
                        {isDayInMonth && event && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-brand-charcoal text-brand-stone text-[10px] leading-tight p-2.5 rounded-xl shadow-xl border border-brand-stone/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 transition-all font-medium text-center">
                            <p className="font-bold text-white mb-0.5">{month.name.split(" ")[0]} {cell.dayNum}</p>
                            <p className="text-brand-stone/80">{event.label}</p>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-brand-charcoal w-0 h-0" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Event Text List for this Month */}
                {textEvents.length > 0 && (
                  <div className="mt-auto border-t border-brand-charcoal/5 pt-3">
                    <ul className="space-y-2 text-[11px] text-brand-charcoal/80">
                      {textEvents.map((evt, eIdx) => {
                        let dotColor = "bg-[var(--color-brand-sage)]";
                        if (evt.type === "enrichment") dotColor = "bg-[#c27a5d]";
                        if (evt.type === "boundary") dotColor = "bg-rose-500";
                        if (evt.type === "planning") dotColor = "bg-purple-400";
                        
                        return (
                          <li key={eIdx} className="flex gap-2 items-start font-medium leading-relaxed">
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${dotColor}`} />
                            <div>
                              <strong className="text-brand-charcoal mr-1">{evt.dayRange}</strong>
                              <span>{evt.label}</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Reminder Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[var(--color-brand-stone)]/40 border border-[var(--color-brand-sage)]/20 text-center text-sm text-brand-charcoal/80">
          <p className="font-bold mb-1 text-brand-charcoal uppercase tracking-wider text-xs">
            * Operational Note
          </p>
          <p className="font-medium">
            Cephas Institute operates on a <strong className="text-brand-charcoal">Monday&ndash;Thursday schedule</strong>. All Fridays that are not marked peach are at-home days. Fridays marked in peach are optional in-person enrichment days.
          </p>
        </div>
      </div>
    </section>
  );
}
