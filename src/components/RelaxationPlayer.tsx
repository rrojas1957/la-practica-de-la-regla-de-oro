import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Sparkles, Headphones, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface RelaxationPlayerProps {
  theme?: "light" | "dark";
  lang?: "es" | "en" | "fr" | "de" | "pt";
  onClose?: () => void;
}

export default function RelaxationPlayer({ theme = "light", lang = "es", onClose }: RelaxationPlayerProps) {
  const isDark = theme === "dark";

  // Player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<number>(0); // 0: Intro, 1: Externa, 2: Interna, 3: Mental, 4: Listo
  const [breathState, setBreathState] = useState<"in" | "hold" | "out">("in");

  // Audio refs & state
  const realAudioRef = useRef<HTMLAudioElement | null>(null);
  const currentPhaseRef = useRef(currentPhase);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    currentPhaseRef.current = currentPhase;
  }, [currentPhase]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Real start time (in seconds) of each phase within each language's recording.
  // Measured from the actual MP3 files: forced alignment (en) and effective
  // speech-time analysis snapped to the real pauses between sentences (es/fr/de/pt).
  const PHASE_STARTS: Record<"es" | "en" | "fr" | "de" | "pt", number[]> = {
    es: [0, 27, 184, 260, 321],
    en: [0, 14.31, 38.20, 59.01, 82.03],
    fr: [0, 15.31, 47.21, 73.65, 100.94],
    de: [0, 18.05, 44.75, 73.28, 97.12],
    pt: [0, 13.51, 38.91, 61.57, 88.21]
  };
  // Show the text slightly before the voice starts the phrase (perceptual sync)
  const PHASE_LEAD = 0.35;

  // Phase texts in Spanish, English, French, German, Portuguese
  const phases = [
    {
      title: {
        es: "Preparación",
        en: "Preparation",
        fr: "Préparation",
        de: "Vorbereitung",
        pt: "Preparação"
      },
      subtitle: {
        es: "Acomódate en una postura confortable",
        en: "Settle into a comfortable posture",
        fr: "Installez-vous dans une posture confortable",
        de: "Machen Sie es sich bequem",
        pt: "Acomode-se numa postura confortável"
      },
      text: {
        es: "Cierra los ojos y siente tu cuerpo. Donde sientas tenso, comienza a aumentar la tensión. Aprieta más y después de un ratito, suelta de una vez la tensión que aumentaste. Ahora, respira hondo y tómate un corto tiempo.",
        en: "Find a comfortable position, gently close your eyes if you wish, and prepare to release the noise and tension of the day. Breathe slowly and deeply.",
        fr: "Trouvez une position confortable, fermez doucement les yeux si vous le souhaitez et préparez-vous à libérer le bruit et la tension de la journée. Respirez lentement et profondément.",
        de: "Finden Sie eine bequeme Position, schließen Sie sanft die Augen, wenn Sie möchten, und bereiten Sie sich darauf vor, den Lärm und die Spannungen des Tages loszulassen. Atmen Sie langsam und tief.",
        pt: "Encontre uma posição confortável, feche suavemente os olhos se desejar e prepare-se para libertar o ruído e as tensões do dia. Respire lenta e profundamente."
      }
    },
    {
      title: {
        es: "1. Relajación Externa",
        en: "1. External Relaxation",
        fr: "1. Relaxation Externe",
        de: "1. Äußere Entspannung",
        pt: "1. Relaxamento Externo"
      },
      subtitle: {
        es: "Aquietar el cuerpo físico",
        en: "Quieting the physical body",
        fr: "Calmer le corps physique",
        de: "Den physischen Körper beruhigen",
        pt: "Aquietar o corpo físico"
      },
      text: {
        es: "Siente tu cabeza, el cuero cabelludo, los músculos de la cara, la mandíbula. Siente cómo están tus dos ojos al mismo tiempo, los dos lados de tu nariz, el borde de tus labios, tus mejillas. Y baja sintiendo los dos lados de tu cuello al mismo tiempo. Siente cómo están tus dos hombros. Desde allí, poco a poco, baja por tus brazos, antebrazos, manos, hasta llegar a la punta de los dedos, sintiendo todas estas partes bien relajadas. Vuelve y siente tu cabeza, el cuero cabelludo, los músculos de la cara, la mandíbula. Siente de nuevo cómo están tus dos ojos, los dos lados de tu nariz, el borde de tus labios, tus mejillas. Ahora, vas a sentir que bajas por delante de tu cuerpo como siguiendo dos líneas imaginarias. Baja por los músculos de tu pecho y sigue hasta tu panza. Sigue bajando y ahí, donde termina tu tronco, debe quedar todo completamente bien relajado. Vuelve a tu cabeza y esta vez, comienza a sentir que bajas por atrás de tu cuerpo. Baja por dos líneas imaginarias pasando por tu cuello, tus hombros, tus omóplatos, tu cintura y la parte baja de tu espalda. Sigue por tus dos piernas al mismo tiempo a lo largo de ellas hasta llegar a la punta de los dedos de los pies.",
        en: "We begin by relaxing the muscles of the body. Relax your forehead, cheeks, jaws, tongue, and throat. Let your eyes fall heavy. Feel your neck loose, your shoulders and arms falling heavy. Relax your chest, abdomen, legs, and feet. Feel your entire body completely loose and at peace.",
        fr: "Nous commençons par détendre les muscles du corps. Relâchez votre front, vos joues, vos mâchoires, votre langue et votre gorge. Laissez vos yeux devenir lourds. Sentez votre cou souple, vos épaules et vos bras tomber lourdement. Relâchez votre poitrine, votre abdomen, vos jambes et vos pieds. Sentez tout votre corps complètement relâché et en paix.",
        de: "Wir beginnen mit der Entspannung der Körpermuskeln. Entspannen Sie Stirn, Wangen, Kiefer, Zunge und Rachen. Lassen Sie Ihre Augen schwer werden. Fühlen Sie den Nacken locker, Schultern und Arme schwer herabsinken. Entspannen Sie Brust, Bauch, Beine und Füße. Fühlen Sie Ihren ganzen Körper vollkommen locker und in Frieden.",
        pt: "Começamos por relaxar os músculos do corpo. Relaxe a testa, as bochechas, as mandíbulas, a língua e a garganta. Deixe os olhos caírem pesados. Sinta o pescoço solto, os ombros e os braços a cair pesados. Relaxe o peito, o abdómen, as pernas e os pés. Sinta todo o seu corpo completamente solto e em paz."
      }
    },
    {
      title: {
        es: "2. Relajación Interna",
        en: "2. Internal Relaxation",
        fr: "2. Relaxation Interne",
        de: "2. Innere Entspannung",
        pt: "2. Relaxamento Interno"
      },
      subtitle: {
        es: "Aquietar el pecho y órganos",
        en: "Quieting the chest and organs",
        fr: "Calmer la poitrine et les organes",
        de: "Brust und Organe beruhigen",
        pt: "Aquietar o peito e os órgãos"
      },
      text: {
        es: "Vuelve a tu cabeza. Siente tus ojos por dentro y los músculos que lo rodean. Continúa sintiéndolos por dentro, relajándolos profundamente. Ahora, cae hacia dentro de tu cabeza. Deslízate al interior y anda relajando completamente. Sigue como cayendo por un tobogán hacia los pulmones. Respira profundo y suelta el aire despacito para sentir cómo los pulmones se mueven al mismo ritmo de tu respiración y se van relajando. Sigue bajando hacia la panza, siempre tratando de relajar todas tus tensiones. Sigue bajando internamente, aflojando por dentro, en profundidad, hasta la terminación de tu tronco, dejando todo en perfecto relax.",
        en: "Now we relax internal tensions. Feel your chest inside, relax your lungs, and calm your heart. Feel your stomach and intestines, releasing any knots, tension, or tightness. Notice your soft, warm, and luminous interior, like a refuge of peace.",
        fr: "Maintenant, nous relâchons les tensions internes. Sentez l'intérieur de votre poitrine, détendez vos poumons et calmez votre cœur. Sentez votre estomac et vos intestins, libérant tout nœud, tension ou crispation. Prenez conscience de votre intérieur doux, chaleureux et lumineux, comme un refuge de paix.",
        de: "Jetzt entspannen wir die inneren Spannungen. Fühlen Sie Ihre Brust von innen, entspannen Sie Ihre Lungen und beruhigen Sie Ihr Herz. Fühlen Sie Ihren Magen und Darm und lösen Sie jeden Knoten, jede Spannung oder Verkrampfung. Nehmen Sie Ihr Inneres weich, warm und leuchtend wahr, wie einen Zufluchtsort des Friedens.",
        pt: "Agora relaxamos as tensões internas. Sinta o peito por dentro, relaxe os pulmões e acalme o coração. Sinta o estômago e os intestinos, soltando qualquer nó, tensão ou contração. Registe o seu interior suave, caloroso e luminoso, como um refúgio de paz."
      }
    },
    {
      title: {
        es: "3. Relajación Mental",
        en: "3. Mental Relaxation",
        fr: "3. Relaxation Mentale",
        de: "3. Mentale Entspannung",
        pt: "3. Relaxamento Mental"
      },
      subtitle: {
        es: "Silencio y paz mental",
        en: "Silence and mental peace",
        fr: "Silence et paix mentale",
        de: "Stille und geistiger Frieden",
        pt: "Silêncio e paz mental"
      },
      text: {
        es: "Nuevamente, siente tu cabeza, el cuero cabelludo y más abajo el cráneo. Siente tu cerebro como si estuviera tenso. Anda aflojando esa tensión hacia dentro de tu cerebro y hacia abajo, como si fuera descendiendo la relajación. La tensión va bajando, siempre bajando, bajando hacia el centro de tu cerebro, más abajo del centro, mucho más abajo. Suelta esa tensión e imagina que se disuelve y desaparece. Eso que estaba tenso se va haciendo cada vez más algodonoso, más suave, más tibio.",
        en: "Finally, relax your mind. Let worries and thoughts pass by like clouds in the wind. Do not dwell on any of them. If an image appears, gently let it go. Feel your mind silent, empty, and peaceful, like a crystal-clear lake in absolute stillness.",
        fr: "Enfin, détendez votre esprit. Laissez passer les soucis et les pensées comme des nuages dans le vent. Ne vous arrêtez sur aucun d'eux. Si une image apparaît, laissez-la partir doucement. Sentez votre esprit silencieux, vide et tranquille, comme un lac cristallin dans un calme absolu.",
        de: "Schließlich entspannen Sie Ihren Geist. Lassen Sie Sorgen und Gedanken wie Wolken im Wind vorüberziehen. Verweilen Sie bei keinem von ihnen. Wenn ein Bild erscheint, lassen Sie es sanft gehen. Fühlen Sie Ihren Geist still, leer und friedlich, wie einen kristallklaren See in absoluter Windstille.",
        pt: "Finalmente, relaxe a mente. Deixe passar as preocupações e pensamentos como nuvens ao vento. Não se detenha em nenhum deles. Si aparecer uma imagem, deixe-a ir suavemente. Sinta a mente silenciosa, vazia e tranquila, como um lago cristalino em absoluta calma."
      }
    },
    {
      title: {
        es: "Estado de Paz Listo",
        en: "Peaceful State Ready",
        fr: "État de Paix Prêt",
        de: "Friedlicher Zustand bereit",
        pt: "Estado de Paz Pronto"
      },
      subtitle: {
        es: "Unidad interna para la práctica",
        en: "Internal unity for your practice",
        fr: "Unité interne pour la pratique",
        de: "Innere Einheit für die Praxis",
        pt: "Unidade interna para a prática"
      },
      text: {
        es: "¿Cómo te sientes? ¿Sientes que tu cuerpo está más relajado, más blandito? Puedes quedarte sintiendo tu cuerpo el tiempo que necesites. Cuando lo desees, continúa hacia el ejercicio de la Regla de Oro.",
        en: "You have reached a state of calm, silence, and coherence. You are in the best condition to begin your reflection on the Golden Rule. Whenever you are ready, continue to the exercise.",
        fr: "Vous avez atteint un état de calme, de silence et de cohérence. Vous êtes dans les meilleures dispositions pour commencer votre réflexion sur la Règle d'Or. Quand vous le souhaitez, continuez vers l'exercice.",
        de: "Sie haben einen Zustand der Ruhe, Stille und Kohärenz erreicht. Sie sind bestens vorbereitet, um Ihre Reflexion über die Goldene Regel zu beginnen. Wenn Sie möchten, fahren Sie mit der Übung fort.",
        pt: "Alcançou um estado de calma, silêncio e coerência. Está na melhor disposição para iniciar a sua reflexão sobre a Regra de Ouro. Quando desejar, continue para o exercício."
      }
    }
  ];

  // Breath Cycle Animation (4s inhale, 4s hold, 4s exhale)
  useEffect(() => {
    if (!isPlaying || currentPhase === 4) return;

    const interval = setInterval(() => {
      setBreathState((prev) => {
        if (prev === "in") return "hold";
        if (prev === "hold") return "out";
        return "in";
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, currentPhase]);

  // Reload audio on language change
  useEffect(() => {
    if (realAudioRef.current) {
      realAudioRef.current.pause();
      realAudioRef.current.currentTime = 0;
      setCurrentPhase(0);
      currentPhaseRef.current = 0;
      realAudioRef.current.load();
      if (isPlaying) {
        realAudioRef.current.playbackRate = 0.80;
        realAudioRef.current.play().catch(err => {
          console.warn("Language switch audio play error:", err);
          speakPhase(0);
        });
      }
    }
  }, [lang]);

  const speakPhase = (phaseIdx: number) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const text = phases[phaseIdx].text[lang] || phases[phaseIdx].text["es"];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 
      lang === "es" ? "es-ES" :
      lang === "en" ? "en-US" :
      lang === "fr" ? "fr-FR" :
      lang === "de" ? "de-DE" : "pt-PT";
    utterance.rate = 0.72;

    utterance.onend = () => {
      if (isPlayingRef.current && phaseIdx < 4) {
        const nextPhase = phaseIdx + 1;
        setCurrentPhase(nextPhase);
        currentPhaseRef.current = nextPhase;
        if (nextPhase < 4) {
          setTimeout(() => {
            if (isPlayingRef.current) {
              speakPhase(nextPhase);
            }
          }, 4500);
        }
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePlayPause = () => {
    const nextPlaying = !isPlaying;
    setIsPlaying(nextPlaying);
    isPlayingRef.current = nextPlaying;

    if (nextPlaying) {
      if (realAudioRef.current) {
        realAudioRef.current.playbackRate = 0.80;
        realAudioRef.current.play().then(() => {
          if (realAudioRef.current) {
            realAudioRef.current.playbackRate = 0.80;
          }
        }).catch(err => {
          console.warn("Failed to play audio element, falling back to speech synthesis:", err);
          speakPhase(currentPhase);
        });
      } else {
        speakPhase(currentPhase);
      }
    } else {
      if (realAudioRef.current) {
        realAudioRef.current.pause();
      }
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    }
  };

  const handlePhaseSelect = (num: number) => {
    setCurrentPhase(num);
    currentPhaseRef.current = num;
    const audio = realAudioRef.current;
    if (audio) {
      const starts = PHASE_STARTS[lang] || PHASE_STARTS["es"];
      audio.currentTime = starts[num];
      if (isPlaying) {
        audio.playbackRate = 0.80;
        audio.play().catch(err => console.warn(err));
      }
    } else if (isPlaying) {
      speakPhase(num);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    isPlayingRef.current = false;
    setCurrentPhase(0);
    currentPhaseRef.current = 0;
    setBreathState("in");
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    if (realAudioRef.current) {
      realAudioRef.current.currentTime = 0;
      realAudioRef.current.pause();
    }
  };

  const activeText = phases[currentPhase].text[lang] || phases[currentPhase].text["es"];
  const activeTitle = phases[currentPhase].title[lang] || phases[currentPhase].title["es"];
  const activeSubtitle = phases[currentPhase].subtitle[lang] || phases[currentPhase].subtitle["es"];

  return (
    <div 
      className={`rounded-2xl border p-6 shadow-md transition-all relative overflow-hidden ${
        isDark 
          ? "bg-slate-900/90 border-slate-800 text-slate-100 shadow-slate-950/20" 
          : "bg-white border-slate-150 text-slate-900 shadow-slate-100/50"
      }`}
      id="relaxation-meditation-player"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -ml-12 -mb-12 pointer-events-none" />

      {/* Header section */}
      <div className="flex items-center justify-between gap-4 border-b pb-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-500/10 rounded-xl text-amber-500">
            <Headphones className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-tight uppercase flex items-center gap-1">
              <span>{lang === "es" ? "Paz Mental: Relajación Guiada" : "Mental Peace: Guided Relaxation"}</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </h4>
            <p className="text-[10px] text-slate-400">
              {lang === "es" && "Relajación Externa, Interna y Mental de Silo"}
              {lang === "en" && "Silo's External, Internal, and Mental Relaxation"}
              {lang === "fr" && "Relaxation externe, interne et mentale de Silo"}
              {lang === "de" && "Silos äußere, innere und mentale Entspannung"}
              {lang === "pt" && "Relaxamento Externo, Interno e Mental de Silo"}
            </p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className={`text-xs px-2.5 py-1 rounded-lg border transition ${
              isDark 
                ? "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700" 
                : "bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200"
            }`}
          >
            {lang === "es" && "Cerrar"}
            {lang === "en" && "Close"}
            {lang === "fr" && "Fermer"}
            {lang === "de" && "Schließen"}
            {lang === "pt" && "Fechar"}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left Side: Visual Breathing Circle Guidance */}
        <div className="md:col-span-5 flex flex-col items-center justify-center py-4 space-y-4 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800/60 pr-0 md:pr-6">
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Pulsing Breathing Circle */}
            <AnimatePresence>
              <motion.div
                animate={{
                  scale: currentPhase === 4 ? 1.0 : isPlaying ? (breathState === "in" ? 1.4 : breathState === "hold" ? 1.4 : 0.95) : 1.0,
                  opacity: isPlaying ? [0.15, 0.25, 0.15] : 0.1,
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
                className="absolute inset-0 bg-amber-500 rounded-full"
              />
            </AnimatePresence>

            <motion.div
              animate={{
                scale: currentPhase === 4 ? 1.0 : isPlaying ? (breathState === "in" ? 1.25 : breathState === "hold" ? 1.25 : 0.85) : 1.0,
                backgroundColor: currentPhase === 4 ? "#10b981" : isPlaying ? (breathState === "in" ? "#f59e0b" : breathState === "hold" ? "#d97706" : "#f59e0b") : "#cbd5e1"
              }}
              transition={{
                duration: 4,
                ease: "easeInOut"
              }}
              className="w-24 h-24 rounded-full flex flex-col items-center justify-center text-slate-950 shadow-md text-xs font-bold z-10 transition-colors"
            >
              {currentPhase === 4 ? (
                <Check className="w-8 h-8 text-white" />
              ) : isPlaying ? (
                <span className="text-white text-center text-[10px] leading-tight uppercase tracking-wider">
                  {breathState === "in" && (
                    <>
                      {lang === "es" && "Inhala"}
                      {lang === "en" && "Inhale"}
                      {lang === "fr" && "Inspirer"}
                      {lang === "de" && "Einatmen"}
                      {lang === "pt" && "Inalar"}
                    </>
                  )}
                  {breathState === "hold" && (
                    <>
                      {lang === "es" && "Retén"}
                      {lang === "en" && "Hold"}
                      {lang === "fr" && "Retenir"}
                      {lang === "de" && "Anhalten"}
                      {lang === "pt" && "Reter"}
                    </>
                  )}
                  {breathState === "out" && (
                    <>
                      {lang === "es" && "Exhala"}
                      {lang === "en" && "Exhale"}
                      {lang === "fr" && "Expirer"}
                      {lang === "de" && "Ausatmen"}
                      {lang === "pt" && "Exalar"}
                    </>
                  )}
                </span>
              ) : (
                <Play className="w-8 h-8 text-slate-500 fill-slate-500/20 translate-x-0.5" />
              )}
            </motion.div>
          </div>

          <div className="text-center">
            <span className={`text-[10px] font-bold tracking-widest uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {lang === "es" && "Ritmo Respiratorio"}
              {lang === "en" && "Breathing Rhythm"}
              {lang === "fr" && "Rythme respiratoire"}
              {lang === "de" && "Atemrhythmus"}
              {lang === "pt" && "Ritmo Respiratório"}
            </span>
            <p className="text-xs font-semibold text-amber-500 mt-1">
              {currentPhase === 4 
                ? (
                  <>
                    {lang === "es" && "Disposición de calma lograda"}
                    {lang === "en" && "State of calm achieved"}
                    {lang === "fr" && "Disposition de calme obtenue"}
                    {lang === "de" && "Zustand der Ruhe erreicht"}
                    {lang === "pt" && "Disposição de calma alcançada"}
                  </>
                )
                : isPlaying 
                  ? (
                    <>
                      {lang === "es" && "Respiración profunda..."}
                      {lang === "en" && "Deep breathing..."}
                      {lang === "fr" && "Respiration profonde..."}
                      {lang === "de" && "Tiefes Atmen..."}
                      {lang === "pt" && "Respiração profunda..."}
                    </>
                  ) 
                  : (
                    <>
                      {lang === "es" && "Pulsa Escuchar para iniciar"}
                      {lang === "en" && "Click Listen to begin"}
                      {lang === "fr" && "Appuyez sur Écouter pour commencer"}
                      {lang === "de" && "Drücken Sie Anhören zum Starten"}
                      {lang === "pt" && "Pressione Ouvir para iniciar"}
                    </>
                  )}
            </p>
          </div>
        </div>

        {/* Right Side: Text narration & Controls */}
        <div className="md:col-span-7 flex flex-col justify-between h-full space-y-4">
          
          {/* Phase Track Indicator */}
          <div className="flex gap-1.5 justify-between">
            {[0, 1, 2, 3, 4].map((num) => {
              const isActive = currentPhase === num;
              const isPast = currentPhase > num;
              return (
                <button
                  key={num}
                  onClick={() => handlePhaseSelect(num)}
                  className={`flex-1 h-2 rounded-full transition-all cursor-pointer ${
                    isActive 
                      ? "bg-amber-500 ring-2 ring-amber-500/30 scale-y-125" 
                      : isPast 
                        ? "bg-emerald-500/80" 
                        : isDark ? "bg-slate-800" : "bg-slate-200"
                  }`}
                  title={`Fase ${num + 1}`}
                />
              );
            })}
          </div>

          {/* Current Phase Title & Text */}
          <div className="space-y-2 min-h-[140px]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">
                {activeTitle}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {currentPhase + 1} / 5
              </span>
            </div>

            <h5 className="text-base font-bold tracking-tight">
              {activeSubtitle}
            </h5>

            <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {activeText}
            </p>
          </div>

          {/* Simplified Controls: ONLY Play/Pause and Reset buttons */}
          <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/40">
            <button
              onClick={handlePlayPause}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-xl text-xs tracking-wider uppercase transition flex items-center gap-2 shadow-sm cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current translate-x-0.5" />}
              <span>
                {isPlaying ? (
                  <>
                    {lang === "es" && "Pausar"}
                    {lang === "en" && "Pause"}
                    {lang === "fr" && "Pause"}
                    {lang === "de" && "Pause"}
                    {lang === "pt" && "Pausar"}
                  </>
                ) : (
                  <>
                    {lang === "es" && "Escuchar"}
                    {lang === "en" && "Listen"}
                    {lang === "fr" && "Écouter"}
                    {lang === "de" && "Anhören"}
                    {lang === "pt" && "Ouvir"}
                  </>
                )}
              </span>
            </button>

            <button
              onClick={handleReset}
              title={
                lang === "es" ? "Reiniciar relajación" :
                lang === "en" ? "Restart relaxation" :
                lang === "fr" ? "Réinitialiser la relaxation" :
                lang === "de" ? "Entspannung zurücksetzen" :
                "Reiniciar relaxamento"
              }
              className={`p-2.5 rounded-xl border transition cursor-pointer flex items-center justify-center ${
                isDark ? "bg-slate-850 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800" : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Human Voice Audio Element */}
      <audio
        ref={realAudioRef}
        src={`/relax_${lang}.mp3`}
        preload="auto"
        onPlay={() => {
          if (realAudioRef.current) {
            realAudioRef.current.playbackRate = 0.80;
          }
        }}
        onCanPlay={() => {
          if (realAudioRef.current) {
            realAudioRef.current.playbackRate = 0.80;
          }
        }}
        onError={(e) => {
          const el = e.currentTarget;
          if (!el.src.includes(`/relax/${lang}.mp3`)) {
            el.src = `/relax/${lang}.mp3`;
            el.load();
            if (isPlaying) {
              el.playbackRate = 0.80;
              el.play().catch(err => console.warn(err));
            }
          }
        }}
        onTimeUpdate={() => {
          const audio = realAudioRef.current;
          if (!audio || audio.seeking) return;
          
          if (audio.playbackRate !== 0.80) {
            audio.playbackRate = 0.80;
          }

          const time = audio.currentTime;
          const starts = PHASE_STARTS[lang] || PHASE_STARTS["es"];

          let targetPhase = 0;
          for (let k = 4; k >= 1; k--) {
            if (time >= starts[k] - PHASE_LEAD) {
              targetPhase = k;
              break;
            }
          }

          if (targetPhase !== currentPhaseRef.current) {
            setCurrentPhase(targetPhase);
            currentPhaseRef.current = targetPhase;
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          isPlayingRef.current = false;
          setCurrentPhase(4);
          currentPhaseRef.current = 4;
        }}
      />

    </div>
  );
}