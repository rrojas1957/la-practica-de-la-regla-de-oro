import { translations } from "../data/translations";
import { BookOpen, CheckCircle, Info, Sparkles, Heart, Lock, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import RelaxationPlayer from "./RelaxationPlayer";

interface IntroSectionProps {
  onStart: () => void;
  onLoadExample: () => void;
  theme: "light" | "dark";
  lang?: "es" | "en" | "fr" | "de" | "pt";
  showRelaxation: boolean;
  onToggleRelaxation: () => void;
}

type IntroLang = "es" | "en" | "fr" | "de" | "pt";

const INTRO_UI: Record<IntroLang, {
  heroTitlePre: string;
  heroTitleHighlight: string;
  relaxRecoTitle: string;
  relaxRecoText: string;
  relaxListenBtn: string;
}> = {
  es: {
    heroTitlePre: "La Práctica de la ",
    heroTitleHighlight: "Regla de Oro",
    relaxRecoTitle: "🧘 Recomendación: Relajación Guiada",
    relaxRecoText: "Antes de iniciar tu reflexión, te proponemos realizar una relajación guiada de 3 minutos (física externa, interna y mental). Es la mejor condición para acallar el ruido interno y reflexionar de corazón.",
    relaxListenBtn: "Escuchar Relajación"
  },
  en: {
    heroTitlePre: "The Practice of the ",
    heroTitleHighlight: "Golden Rule",
    relaxRecoTitle: "🧘 Recommended: Guided Relaxation",
    relaxRecoText: "Before starting your reflection, we suggest a 3-minute guided relaxation (external physical, internal, and mental). This is the best state to quiet internal noise and reflect deeply.",
    relaxListenBtn: "Listen to Relaxation"
  },
  fr: {
    heroTitlePre: "La Pratique de la ",
    heroTitleHighlight: "Règle d'Or",
    relaxRecoTitle: "🧘 Recommandation : Relaxation Guidée",
    relaxRecoText: "Avant de commencer votre réflexion, nous vous proposons une relaxation guidée de 3 minutes (physique externe, interne et mentale). C'est la meilleure condition pour apaiser le bruit intérieur et réfléchir avec le cœur.",
    relaxListenBtn: "Écouter la Relaxation"
  },
  de: {
    heroTitlePre: "Die Praxis der ",
    heroTitleHighlight: "Goldenen Regel",
    relaxRecoTitle: "🧘 Empfehlung: Geführte Entspannung",
    relaxRecoText: "Bevor Sie mit Ihrer Reflexion beginnen, schlagen wir Ihnen eine 3-minütige geführte Entspannung vor (äußerlich körperlich, innerlich und mental). Das ist die beste Voraussetzung, um den inneren Lärm zu beruhigen und von Herzen zu reflektieren.",
    relaxListenBtn: "Entspannung Anhören"
  },
  pt: {
    heroTitlePre: "A Prática da ",
    heroTitleHighlight: "Regra de Ouro",
    relaxRecoTitle: "🧘 Recomendação: Relaxamento Guiado",
    relaxRecoText: "Antes de iniciares a tua reflexão, propomos-te realizar um relaxamento guiado de 3 minutos (físico externo, interno e mental). É a melhor condição para silenciar o ruído interno e refletir de coração.",
    relaxListenBtn: "Ouvir o Relaxamento"
  }
};

export default function IntroSection({ 
  onStart, 
  onLoadExample, 
  theme, 
  lang = "es",
  showRelaxation,
  onToggleRelaxation
}: IntroSectionProps) {
  const isDark = theme === "dark";
  const t = translations[lang];
  const ui = INTRO_UI[lang];

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-4 px-2" id="intro-section">
      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm border ${
          isDark 
            ? "bg-amber-950/40 border-amber-800 text-amber-300" 
            : "bg-amber-50 border-amber-200 text-amber-800"
        }`}>
          <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
          <span>{t.introTagline}</span>
        </div>
        <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight balance ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
          <>
            {ui.heroTitlePre}<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-400">{ui.heroTitleHighlight}</span>
          </>
        </h1>
        <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${
          isDark ? "text-slate-300" : "text-slate-600"
        }`}>
          {t.introSubtitle}
        </p>
      </motion.div>

      {/* 🔒 Espacio 100% Seguro y Privado */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className={`rounded-2xl p-5 border flex gap-4 items-start shadow-xs transition-all duration-200 ${
          isDark 
            ? "bg-emerald-950/20 border-emerald-900/30 text-slate-200 shadow-emerald-950/5" 
            : "bg-emerald-50/50 border-emerald-100 text-slate-800"
        }`}
      >
        <div className={`p-2 rounded-xl shrink-0 ${
          isDark ? "bg-emerald-900/30 text-emerald-400" : "bg-emerald-100 text-emerald-800"
        }`}>
          <Lock className="w-5 h-5 animate-pulse" />
        </div>
        <div className="space-y-1.5 flex-1">
          <h3 className={`text-sm font-bold uppercase tracking-wider flex items-center gap-1.5 ${
            isDark ? "text-emerald-400" : "text-emerald-800"
          }`}>
            {t.introPrivacyTitle}
          </h3>
          <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t.introPrivacyText}
          </p>
        </div>
      </motion.div>

      {/* Inspirational Quote Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="relative overflow-hidden bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-8 -mt-8" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -ml-8 -mb-8" />
        
        <div className="relative space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wider uppercase">
            <Heart className="w-4 h-4 text-amber-400" />
            <span>{t.introPrincipleTitle}</span>
          </div>
          <blockquote className="text-xl sm:text-2xl font-medium tracking-tight italic text-amber-100 leading-snug">
            "{t.introSiloQuote}"
          </blockquote>
          <div className="pt-2 text-sm text-slate-400 flex flex-col sm:flex-row sm:items-center gap-2 justify-between border-t border-slate-800/80">
            <span>{t.introSiloAuthor}</span>
            <span className="text-slate-500 text-xs italic">{t.introInspiration}</span>
          </div>
        </div>
      </motion.div>

      {/* Main Pillars - Benefits & Purpose */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Column 1: Benefits */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className={`rounded-2xl p-6 shadow-sm border flex flex-col justify-between ${
            isDark ? "bg-slate-900 border-slate-850" : "bg-white border-slate-100"
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${isDark ? "bg-amber-950/40 text-amber-400" : "bg-amber-50 text-amber-600"}`}>
                <CheckCircle className="w-5 h-5" />
              </div>
              <h2 className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t.introBenefitsTitle}</h2>
            </div>
            
            <ul className="space-y-3.5 pt-2">
              {t.introBenefits.map((benefit, idx) => (
                <li key={idx} className={`flex gap-3 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  <span className="text-amber-500 font-bold select-none">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Column 2: Purpose & Deep Meaning */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className={`rounded-2xl p-6 shadow-sm border flex flex-col justify-between ${
            isDark ? "bg-slate-900 border-slate-850" : "bg-white border-slate-100"
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${isDark ? "bg-slate-800 text-slate-300" : "bg-slate-50 text-slate-700"}`}>
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t.introPurposeTitle}</h2>
            </div>
            
            <ul className="space-y-3.5 pt-2">
              {t.introPurposes.slice(0, 5).map((purpose, idx) => (
                <li key={idx} className={`flex gap-3 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  <span className="text-amber-500 font-bold select-none">•</span>
                  <span>{purpose}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Narrative block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`rounded-2xl p-6 border flex gap-4 items-start ${
          isDark ? "bg-amber-950/20 border-amber-900/40 text-slate-300" : "bg-amber-50/50 border-amber-100 text-slate-700"
        }`}
      >
        <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="text-sm leading-relaxed">
            {t.introExplanation}
          </p>
          <p className={`text-xs italic pt-1 border-t ${
            isDark ? "border-amber-900/30 text-slate-400" : "border-amber-200/40 text-slate-500"
          }`}>
            {t.introPurposesExtra}
          </p>
        </div>
      </motion.div>

      {/* Guided Relaxation Preparatory Card / Player */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="w-full"
      >
        <AnimatePresence mode="wait">
          {showRelaxation ? (
            <motion.div
              key="relaxation-player-active"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <RelaxationPlayer theme={theme} lang={lang} onClose={onToggleRelaxation} />
            </motion.div>
          ) : (
            <motion.div
              key="relaxation-card-inactive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`rounded-2xl p-6 border flex flex-col md:flex-row items-start md:items-center justify-between gap-5 transition-all duration-200 shadow-sm ${
                isDark 
                  ? "bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700" 
                  : "bg-slate-50/70 border-slate-200/60 text-slate-800 hover:border-slate-300/60"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3.5 rounded-2xl shrink-0 ${
                  isDark ? "bg-amber-500/10 text-amber-400" : "bg-amber-500/10 text-amber-600"
                }`}>
                  <Headphones className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <h3 className={`text-sm font-black uppercase tracking-wider flex items-center gap-2 ${
                    isDark ? "text-amber-400" : "text-amber-800"
                  }`}>
                    <span>{ui.relaxRecoTitle}</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  </h3>
                  <p className={`text-xs leading-relaxed max-w-2xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {ui.relaxRecoText}
                  </p>
                </div>
              </div>

              <button
                onClick={onToggleRelaxation}
                className={`w-full md:w-auto px-5 py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition duration-200 shrink-0 cursor-pointer ${
                  isDark
                    ? "bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/30"
                    : "bg-white hover:bg-amber-50 text-amber-700 border border-amber-200"
                }`}
              >
                <Headphones className="w-4 h-4" />
                <span>{ui.relaxListenBtn}</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
      >
        <button
          onClick={onStart}
          id="btn-start-practice"
          className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl shadow-md shadow-amber-600/10 hover:shadow-lg transition duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm"
        >
          {t.introBtnStart}
          <Sparkles className="w-4 h-4" />
        </button>
        <button
          onClick={onLoadExample}
          id="btn-load-example"
          className={`w-full sm:w-auto px-8 py-4 font-semibold rounded-xl border transition duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm ${
            isDark 
              ? "bg-slate-800 hover:bg-slate-750 text-slate-200 border-slate-700" 
              : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
          }`}
        >
          {t.introBtnExample}
        </button>
      </motion.div>
    </div>
  );
}
