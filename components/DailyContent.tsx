"use client";

import { useState, useEffect } from "react";
import { BookOpen, Flame, User } from "lucide-react";
import dailyData from "@/data/daily.json";

export default function DailyContent() {
  const [entry, setEntry] = useState<typeof dailyData[0] | null>(null);
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const index = dayOfYear % dailyData.length;
    setEntry(dailyData[index]);
    setDateStr(now.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" }));
  }, []);

  if (!entry) return null;

  return (
    <div className="space-y-6">
      {/* Date */}
      <p className="text-center text-sm text-gray-500 capitalize">{dateStr}</p>

      {/* Priere du jour */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
        <div className="flex items-center gap-2 mb-3">
          <Flame size={20} className="text-amber-500" />
          <h3 className="font-bold text-gray-900">Priere du jour</h3>
        </div>
        <p className="text-gray-600 leading-relaxed italic">{entry.prayer}</p>
      </div>

      {/* Verset du jour */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={20} className="text-amber-500" />
          <h3 className="font-bold text-gray-900">Verset du jour</h3>
        </div>
        <blockquote className="text-gray-700 leading-relaxed border-l-4 border-amber-300 pl-4">
          &laquo; {entry.verse} &raquo;
        </blockquote>
        <p className="text-sm text-amber-600 font-semibold mt-2">{entry.verseRef}</p>
      </div>

      {/* Saint du jour */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
        <div className="flex items-center gap-2 mb-3">
          <User size={20} className="text-amber-500" />
          <h3 className="font-bold text-gray-900">Saint du jour</h3>
        </div>
        <p className="font-semibold text-gray-900 mb-1">{entry.saint}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{entry.saintDesc}</p>
      </div>
    </div>
  );
}
