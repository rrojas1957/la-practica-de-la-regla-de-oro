import { Calendar, Trash2, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { translations } from "../data/translations";

export interface SavedPractice {
  id: string;
  date: string;
  title: string;
  answers: Record<number, string>;
  notes?: string;
  customAforismos?: Record<string, string>;
}

interface HistorySectionProps {
  practices: SavedPractice[];
  onSelectPractice: (practice: SavedPractice) => void;
  onDeletePractice: (id: string) => void;
  onStartNew: () => void;
  theme?: "light" | "dark";
  lang?: "es" | "en" | "fr" | "de" | "pt";
}

export default function HistorySection({
  practices,
  onSelectPractice,
  onDeletePractice,
  onStartNew,
  theme = "light",
  lang = "es",
}: HistorySectionProps) {
  const isDark = theme === "dark";
  const t = translations[lang];

  if (practices.length === 0) {
    return (
      <div className="text-center py-12 px-4 max-w-md mx-auto space-y-6" id="history-empty-state">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto border ${
          isDark ? "bg-slate-900 border-slate-850 text-slate-400" : "bg-slate-50 border-slate-100 text-slate-400"
        }`}>
          <BookOpen className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t.historyEmptyTitle}</h3>
          <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            {t.historyEmptyText}
          </p>
        </div>
        <button
          onClick={onStartNew}
          className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl text-sm transition duration-150 cursor-pointer"
        >
          {t.historyBtnStartNew}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto py-2" id="history-section-container">
      <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-4 ${
        isDark ? "border-slate-800" : "border-slate-100"
      }`}>
        <div>
          <h3 className={`text-xl font-bold flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
            <BookOpen className={`w-5 h-5 ${isDark ? "text-slate-400" : "text-slate-700"}`} />
            {t.historyTitle}
          </h3>
          <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            {t.historySubtitle}
          </p>
        </div>
        <button
          onClick={onStartNew}
          className="w-full sm:w-auto px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition duration-150 cursor-pointer animate-pulse"
        >
          <Sparkles className="w-4 h-4" />
          <span>{{ es: "Nueva Práctica", en: "New Practice", fr: "Nouvelle Pratique", de: "Neue Praxis", pt: "Nova Prática" }[lang]}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {practices.map((practice, idx) => {
          const maltrato = practice.answers[1] || { es: "No especificado", en: "Unspecified", fr: "Non spécifié", de: "Nicht angegeben", pt: "Não especificado" }[lang];
          const reaccion = practice.answers[2] || { es: "No especificado", en: "Unspecified", fr: "Non spécifié", de: "Nicht angegeben", pt: "Não especificado" }[lang];
          const virtud = practice.answers[3] || { es: "No especificado", en: "Unspecified", fr: "Non spécifié", de: "Nicht angegeben", pt: "Não especificado" }[lang];

          return (
            <motion.div
              key={practice.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`rounded-xl border p-5 shadow-sm hover:shadow-md transition duration-150 flex flex-col justify-between group ${
                isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"
              }`}
            >
              <div className="space-y-3">
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.historyCardDate}{practice.date}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm(t.historyDeleteConfirm)) {
                        onDeletePractice(practice.id);
                      }
                    }}
                    title={{ es: "Eliminar práctica", en: "Delete practice", fr: "Supprimer la pratique", de: "Praxis löschen", pt: "Eliminar prática" }[lang]}
                    className={`p-1 rounded-md transition duration-150 cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100 ${
                      isDark 
                        ? "text-slate-500 hover:text-red-400 hover:bg-red-950/40" 
                        : "text-slate-400 hover:text-red-600 hover:bg-red-50"
                    }`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Title / Description of the case */}
                <div className="space-y-1">
                  <h4 className={`font-bold group-hover:text-amber-500 transition duration-150 text-sm ${
                    isDark ? "text-slate-100" : "text-slate-900"
                  }`}>
                    {practice.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className={`p-2 rounded-lg border ${
                      isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-100"
                    }`}>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 block">
                        {{ es: "Maltrato recibido", en: "Mistreatment received", fr: "Maltraitance reçue", de: "Erlittene Fehlbehandlung", pt: "Maltrato recebido" }[lang]}
                      </span>
                      <span className={`font-semibold line-clamp-1 ${isDark ? "text-slate-200" : "text-slate-700"}`}>{maltrato}</span>
                    </div>
                    <div className={`p-2 rounded-lg border ${
                      isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-100"
                    }`}>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 block">
                        {{ es: "Mi reacción", en: "My reaction", fr: "Ma réaction", de: "Meine Reaktion", pt: "A minha reação" }[lang]}
                      </span>
                      <span className={`font-semibold line-clamp-1 ${isDark ? "text-slate-200" : "text-slate-700"}`}>{reaccion}</span>
                    </div>
                  </div>
                </div>

                {/* Preview Aforismo */}
                <div className={`p-3 rounded-lg text-xs italic font-medium ${
                  isDark 
                    ? "bg-amber-950/20 border border-amber-900/30 text-amber-200" 
                    : "bg-amber-50/40 border border-amber-100/50 text-amber-950"
                }`}>
                  "{virtud}" {{ es: "como opuesto a", en: "as opposed to", fr: "en opposition à", de: "im Gegensatz zu", pt: "como oposto a" }[lang]} "{maltrato}"
                </div>

                {practice.notes && (
                  <p className={`text-xs line-clamp-2 leading-relaxed border-t pt-2 ${
                    isDark ? "border-slate-850 text-slate-400" : "border-slate-100 text-slate-500"
                  }`}>
                    <span className="font-bold">{{ es: "Notas:", en: "Notes:", fr: "Notes :", de: "Notizen:", pt: "Notas:" }[lang]}</span> {practice.notes}
                  </p>
                )}
              </div>

              {/* Action button */}
              <div className={`pt-4 mt-2 border-t flex items-center justify-end ${
                isDark ? "border-slate-850" : "border-slate-50"
              }`}>
                <button
                  onClick={() => onSelectPractice(practice)}
                  className="text-xs font-bold text-amber-500 hover:text-amber-400 flex items-center gap-1 cursor-pointer"
                >
                  <span>{{ es: "Ver práctica completa", en: "View full practice", fr: "Voir la pratique complète", de: "Vollständige Praxis ansehen", pt: "Ver prática completa" }[lang]}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition group-hover:translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
