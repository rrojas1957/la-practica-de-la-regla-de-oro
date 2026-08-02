import { STEPS } from "../data/helpLists";
import { STEPS_EN, STEPS_FR, STEPS_DE, STEPS_PT } from "../data/translations";
import { ArrowDown, ArrowUp, Zap, HelpCircle, Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface InteractiveMapProps {
  answers: Record<number, string>;
  currentStepId?: number;
  onSelectStep?: (id: number) => void;
  interactive?: boolean;
  theme?: "light" | "dark";
  lang?: "es" | "en" | "fr" | "de" | "pt";
}

export default function InteractiveMap({
  answers,
  currentStepId,
  onSelectStep,
  interactive = true,
  theme = "light",
  lang = "es",
}: InteractiveMapProps) {
  const isDark = theme === "dark";
  const stepsList =
    lang === "es" ? STEPS :
    lang === "en" ? STEPS_EN :
    lang === "fr" ? STEPS_FR :
    lang === "de" ? STEPS_DE :
    STEPS_PT;
  
  // Helper to check if a step is answered
  const isAnswered = (id: number) => answers[id] && answers[id].trim() !== "";

  const renderCard = (id: number) => {
    const step = stepsList.find((s) => s.id === id)!;
    const value = answers[id];
    const active = currentStepId === id;
    const answered = isAnswered(id);

    // Styling based on point type
    let cardClass = "";
    let headerClass = "";
    let badgeClass = "";

    if (step.type === "luminous") {
      cardClass = active
        ? isDark
          ? "border-amber-400 bg-amber-950/40 ring-2 ring-amber-400/20 text-amber-200"
          : "border-amber-500 bg-amber-50/90 ring-2 ring-amber-500/20"
        : answered
        ? isDark
          ? "border-amber-900 bg-amber-950/20 hover:bg-amber-950/30 text-amber-300"
          : "border-amber-200 bg-amber-50/50 hover:bg-amber-100/40"
        : isDark
        ? "border-slate-800 bg-slate-900 hover:border-amber-800 text-slate-300"
        : "border-slate-200 bg-white hover:border-amber-200";
      headerClass = isDark ? "text-amber-400 font-semibold" : "text-amber-800 font-semibold";
      badgeClass = isDark ? "bg-amber-950 text-amber-300 border border-amber-800/40" : "bg-amber-100 text-amber-800";
    } else if (step.type === "dark") {
      cardClass = active
        ? isDark
          ? "border-indigo-400 bg-indigo-950/40 ring-2 ring-indigo-400/20 text-indigo-200"
          : "border-indigo-500 bg-indigo-50/90 ring-2 ring-indigo-500/20"
        : answered
        ? isDark
          ? "border-indigo-900 bg-indigo-950/20 hover:bg-indigo-950/30 text-indigo-300"
          : "border-indigo-200 bg-indigo-50/30 hover:bg-indigo-100/40"
        : isDark
        ? "border-slate-800 bg-slate-900 hover:border-indigo-800 text-slate-300"
        : "border-slate-200 bg-white hover:border-indigo-200";
      headerClass = isDark ? "text-indigo-400 font-semibold" : "text-indigo-950 font-semibold";
      badgeClass = isDark ? "bg-indigo-950 text-indigo-300 border border-indigo-800/40" : "bg-indigo-100 text-indigo-950";
    } else {
      // Transition node
      const isUp = step.direction === "up";
      if (isUp) {
        cardClass = active
          ? isDark
            ? "border-emerald-400 bg-emerald-950/40 ring-2 ring-emerald-400/20"
            : "border-emerald-500 bg-emerald-50/90 ring-2 ring-emerald-500/20"
          : answered
          ? isDark
            ? "border-emerald-900 bg-emerald-950/20 hover:bg-emerald-950/30 text-emerald-300"
            : "border-emerald-200 bg-emerald-50/30 hover:bg-emerald-100/40"
          : isDark
          ? "border-slate-800 bg-slate-900 hover:border-emerald-800 text-slate-300"
          : "border-slate-200 bg-white hover:border-emerald-200";
        headerClass = isDark ? "text-emerald-400 font-semibold" : "text-emerald-800 font-semibold";
        badgeClass = isDark ? "bg-emerald-950 text-emerald-300 border border-emerald-800/40" : "bg-emerald-100 text-emerald-800";
      } else {
        cardClass = active
          ? isDark
            ? "border-rose-400 bg-rose-950/40 ring-2 ring-rose-400/20"
            : "border-rose-500 bg-rose-50/90 ring-2 ring-rose-500/20"
          : answered
          ? isDark
            ? "border-rose-900 bg-rose-950/20 hover:bg-rose-950/30 text-rose-300"
            : "border-rose-200 bg-rose-50/30 hover:bg-rose-100/40"
          : isDark
          ? "border-slate-800 bg-slate-900 hover:border-rose-800 text-slate-300"
          : "border-slate-200 bg-white hover:border-rose-200";
        headerClass = isDark ? "text-rose-400 font-semibold" : "text-rose-800 font-semibold";
        badgeClass = isDark ? "bg-rose-950 text-rose-300 border border-rose-800/40" : "bg-rose-100 text-rose-800";
      }
    }

    return (
      <motion.div
        key={id}
        whileHover={interactive ? { y: -2, scale: 1.01 } : {}}
        onClick={() => interactive && onSelectStep && onSelectStep(id)}
        className={`relative overflow-hidden p-4 rounded-xl border transition-all duration-200 ${
          interactive ? "cursor-pointer" : ""
        } ${cardClass} flex flex-col justify-between h-32 shadow-sm`}
        id={`map-node-${id}`}
      >
        {/* Glow effect for current node */}
        {active && (
          <div className="absolute top-0 right-0 w-12 h-12 bg-amber-500/10 rounded-full blur-xl" />
        )}

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className={`text-[10px] uppercase tracking-wider font-bold ${headerClass}`}>
              {{ es: `Punto ${step.id}`, en: `Point ${step.id}`, fr: `Point ${step.id}`, de: `Punkt ${step.id}`, pt: `Ponto ${step.id}` }[lang]}
            </span>
            <div className="flex items-center gap-1.5">
              {answered && (
                <span className={`p-0.5 rounded-full ${isDark ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : "bg-emerald-100 text-emerald-700"}`}>
                  <Check className="w-3 h-3" />
                </span>
              )}
              {step.type === "transition" && (
                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${badgeClass}`}>
                  {step.direction === "up" ? { es: "Subida", en: "Rise", fr: "Montée", de: "Aufstieg", pt: "Subida" }[lang] : { es: "Caída", en: "Fall", fr: "Chute", de: "Absturz", pt: "Queda" }[lang]}
                </span>
              )}
            </div>
          </div>
          <p className={`text-xs font-bold line-clamp-1 ${isDark ? "text-slate-100" : "text-slate-800"}`}>{step.shortName}</p>
        </div>

        <div className={`mt-2 pt-2 border-t ${isDark ? "border-slate-800" : "border-slate-100/80"}`}>
          {answered ? (
            <p className={`text-sm font-bold line-clamp-2 italic ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              "{value}"
            </p>
          ) : (
            <span className="text-xs text-slate-400 italic flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 animate-pulse text-slate-400" />
              <span>{{ es: "Pendiente...", en: "Pending...", fr: "En attente...", de: "Ausstehend...", pt: "Pendente..." }[lang]}</span>
            </span>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-6 w-full" id="interactive-map-container">
      {/* Legend / Title */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-1">
        <h3 className={`text-sm font-bold flex items-center gap-2 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
          <Zap className="w-4 h-4 text-amber-500" />
          {{ es: "Mapa de los 8 Espacios de Conciencia", en: "Map of the 8 Spaces of Consciousness", fr: "Carte des 8 Espaces de Conscience", de: "Karte der 8 Bewusstseinsräume", pt: "Mapa dos 8 Espaços de Consciência" }[lang]}
        </h3>
        <div className={`flex flex-wrap gap-4 text-[11px] font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          <div className="flex items-center gap-1">
            <span className={`w-2.5 h-2.5 rounded border inline-block ${isDark ? "bg-amber-950/40 border-amber-800" : "bg-amber-100 border-amber-300"}`} />
            <span>{{ es: "Conciencia de Sí", en: "Self-Consciousness", fr: "Conscience de Soi", de: "Selbstbewusstsein", pt: "Consciência de Si" }[lang]}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className={`w-2.5 h-2.5 rounded border inline-block ${isDark ? "bg-emerald-950/40 border-emerald-850" : "bg-emerald-100 border-emerald-300"}`} />
            <span>{{ es: "Caminos de Subida", en: "Rising Paths", fr: "Chemins de Montée", de: "Aufstiegswege", pt: "Caminhos de Subida" }[lang]}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className={`w-2.5 h-2.5 rounded border inline-block ${isDark ? "bg-rose-950/40 border-rose-850" : "bg-rose-100 border-rose-300"}`} />
            <span>{{ es: "Caminos de Caída", en: "Falling Paths", fr: "Chemins de Chute", de: "Absturzwege", pt: "Caminhos de Queda" }[lang]}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className={`w-2.5 h-2.5 rounded border inline-block ${isDark ? "bg-indigo-950/40 border-indigo-850" : "bg-indigo-50 border-indigo-200"}`} />
            <span>{{ es: "Conciencia Perturbada", en: "Perturbed Consciousness", fr: "Conscience Perturbée", de: "Gestörtes Bewusstsein", pt: "Consciência Perturbada" }[lang]}</span>
          </div>
        </div>
      </div>

      {/* Grid representation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Invisible link lines for visual aesthetics on desktop */}
        <div className={`hidden md:block absolute inset-y-12 left-1/2 w-0.5 bg-dashed border-l -translate-x-1/2 z-0 ${
          isDark ? "border-slate-800" : "border-slate-200"
        }`} />

        {/* --- LEVEL A: LUMINOUS ROW (Points 3 and 4) --- */}
        <div className="space-y-2 md:col-span-2">
          <div className="text-center">
            <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold tracking-wider uppercase ${
              isDark ? "bg-amber-950/40 border-amber-900 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-800"
            }`}>
              {{ es: "Espacio Luminoso: Conciencia de Sí, Inspirada e Intencionada", en: "Luminous Space: Self-Consciousness, Inspired and Intentional", fr: "Espace Lumineux : Conscience de Soi, Inspirée et Intentionnelle", de: "Lichter Raum: Selbstbewusstsein, Inspiriert und Intentional", pt: "Espaço Luminoso: Consciência de Si, Inspirada e Intencional" }[lang]}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {renderCard(3)}
            {renderCard(4)}
          </div>
        </div>

        {/* --- LEVEL B: TRANSITION ROW (Points 5, 6, 7, and 8) --- */}
        {/* Left Transitions: Between 3 and 2 */}
        <div className={`space-y-4 p-4 rounded-xl border relative transition-colors ${
          isDark ? "bg-slate-900/40 border-slate-800" : "bg-slate-50/50 border-slate-100"
        }`}>
          <div className="text-center pb-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1">
              <ArrowDown className="w-3 h-3 text-rose-400" />
              <span>{{ es: "Transición Izquierda", en: "Left Transition", fr: "Transition Gauche", de: "Linker Übergang", pt: "Transição Esquerda" }[lang]}</span>
              <ArrowUp className="w-3 h-3 text-emerald-400" />
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {renderCard(5)}
            {renderCard(6)}
          </div>
        </div>

        {/* Right Transitions: Between 4 and 1 */}
        <div className={`space-y-4 p-4 rounded-xl border relative transition-colors ${
          isDark ? "bg-slate-900/40 border-slate-800" : "bg-slate-50/50 border-slate-100"
        }`}>
          <div className="text-center pb-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1">
              <ArrowDown className="w-3 h-3 text-rose-400" />
              <span>{{ es: "Transición Derecha", en: "Right Transition", fr: "Transition Droite", de: "Rechter Übergang", pt: "Transição Direita" }[lang]}</span>
              <ArrowUp className="w-3 h-3 text-emerald-400" />
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {renderCard(7)}
            {renderCard(8)}
          </div>
        </div>

        {/* --- LEVEL C: PERTURBED ROW (Points 2 and 1) --- */}
        <div className="space-y-2 md:col-span-2">
          <div className="text-center">
            <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold tracking-wider uppercase ${
              isDark ? "bg-indigo-950/40 border-indigo-900 text-indigo-300" : "bg-indigo-50 border-indigo-200 text-indigo-900"
            }`}>
              {{ es: "Espacio Climático: Conciencia Perturbada, Compulsiva y Mecánica", en: "Perturbed Space: Perturbed, Compulsive, and Mechanical Consciousness", fr: "Espace Climatique : Conscience Perturbée, Compulsive et Mécanique", de: "Klimatischer Raum: Gestörtes, Zwanghaftes und Mechanisches Bewusstsein", pt: "Espaço Climático: Consciência Perturbada, Compulsiva e Mecânica" }[lang]}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {renderCard(2)}
            {renderCard(1)}
          </div>
        </div>
      </div>

      {interactive && (
        <p className="text-center text-xs text-slate-400 italic">
          {{ es: "💡 Puedes pulsar sobre cualquier espacio en el mapa para ir directamente a responder o ver su ayuda.", en: "💡 Click on any space in the map to jump directly to its question or help suggestions.", fr: "💡 Vous pouvez cliquer sur n'importe quel espace de la carte pour aller directement répondre ou voir son aide.", de: "💡 Sie können auf jeden Raum der Karte klicken, um direkt zur Antwort oder zur Hilfe zu gelangen.", pt: "💡 Podes clicar em qualquer espaço do mapa para ir diretamente responder ou ver a sua ajuda." }[lang]}
        </p>
      )}
    </div>
  );
}
