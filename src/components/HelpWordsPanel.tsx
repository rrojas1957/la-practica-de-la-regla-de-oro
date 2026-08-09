import { HelpCategory } from "../data/helpLists";
import { Lightbulb, Info, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HelpWordsPanelProps {
  categories: HelpCategory[];
  helpDescription: string;
  helpTitle: string;
  helpSuffix: string;
  helpOptional: string;
  onSelectWord: (word: string) => void;
  selectedWord?: string;
  theme: "light" | "dark";
}

export default function HelpWordsPanel({
  categories,
  helpDescription,
  helpTitle,
  helpSuffix,
  helpOptional,
  onSelectWord,
  selectedWord,
  theme,
}: HelpWordsPanelProps) {
  const isDark = theme === "dark";

  return (
    <div className={`rounded-2xl p-5 border space-y-4 transition-colors duration-200 ${
      isDark ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-200/60"
    }`} id="help-words-panel">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className={`p-1.5 rounded-lg ${isDark ? "bg-amber-950/40 text-amber-400" : "bg-amber-100 text-amber-700"}`}>
          <Lightbulb className={`w-4 h-4 ${isDark ? "text-amber-400" : "text-amber-600"}`} />
        </div>
        <h4 className={`font-bold text-sm ${isDark ? "text-slate-100" : "text-slate-800"}`}>{helpTitle}</h4>
      </div>

      <p className={`text-xs leading-relaxed flex items-start gap-1.5 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
        <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
        <span>{helpDescription}{helpSuffix}</span>
      </p>

      {/* Categories */}
      <div className="space-y-4 pt-1">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-2">
            <span className={`text-[10px] font-bold uppercase tracking-wider block ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}>
              {cat.categoryName}
            </span>
            <div className="flex flex-wrap gap-2">
              {cat.words.map((word, wIdx) => {
                const isSelected = selectedWord?.toLowerCase() === word.toLowerCase();
                return (
                  <motion.button
                    key={wIdx}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectWord(word)}
                    type="button"
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition duration-150 cursor-pointer ${
                      isSelected
                        ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                        : isDark
                        ? "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 hover:border-slate-650"
                        : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {word}
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className={`pt-2 text-[10px] text-slate-400 border-t flex items-center gap-1 ${
        isDark ? "border-slate-800" : "border-slate-200/60"
      }`}>
        <Sparkles className="w-3 h-3 text-amber-500" />
        <span>{helpOptional}</span>
      </div>
    </div>
  );
}
