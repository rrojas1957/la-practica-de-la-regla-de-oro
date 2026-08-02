import { HelpCategory, StepConfig, AforismoOutput, adaptPunto1Es, toInfinitiveEs, toGerundEs, combineWithPorEs, suboA, haciendoPartEs } from "./helpLists";

export interface TranslationDict {
  logoTitle: string;
  logoSubtitle: string;
  tabIntro: string;
  tabPractice: string;
  tabHistory: string;
  tabSupport: string;
  themeToggleDark: string;
  themeToggleLight: string;
  toastThemeChanged: string;
  toastFormReset: string;
  toastPracticeSaved: string;
  toastPracticeLoaded: string;
  toastPracticeDeleted: string;
  toastExampleLoaded: string;
  toastPracticeReady: string;
  toastFormCheck: string;
  toastDownloadSuccess: string;
  
  // Intro section
  introTagline: string;
  introTitle: string;
  introSubtitle: string;
  introPrivacyTitle: string;
  introPrivacyText: string;
  introPrincipleTitle: string;
  introSiloQuote: string;
  introInspiration: string;
  introSiloAuthor: string;
  introBenefitsTitle: string;
  introBenefits: string[];
  introPurposeTitle: string;
  introPurposes: string[];
  introExplanation: string;
  introPurposesExtra: string;
  introBtnStart: string;
  introBtnExample: string;

  // Practice Section
  practiceTitleLabel: string;
  practiceTitlePlaceholder: string;
  practiceProgressLabel: string;
  practiceCompletedCount: string;
  practicePrivacyTitle: string;
  practicePrivacyText: string;
  practiceQuestionLabel: string;
  practiceTypeLuminous: string;
  practiceTypeDark: string;
  practiceTypeTransition: string;
  practiceInputWordLabel: string;
  practiceBtnPrev: string;
  practiceBtnNext: string;
  practiceBtnLastPrompt: string;
  practiceHelpPrompt: string;
  practiceBtnHelp: string;
  practiceBtnHideHelp: string;
  practiceHelpSuffix: string;
  practiceHelpOptional: string;
  
  // Simultaneous Preview
  previewTitle: string;
  previewMainTitle: string;
  previewGoldenTitle: string;
  previewGoldenTemplate: string;
  previewHint: string;

  // Workspace Actions
  actionTitle: string;
  actionSubtitle: string;
  actionBtnReset: string;
  actionBtnSave: string;
  actionResetConfirm: string;

  // Results Section
  resultsCompletedTitle: string;
  resultsCompletedSubtitle: string;
  resultsBtnSaveHistory: string;
  resultsSynthesisTitle: string;
  resultsSynthesisSubtitle: string;

  // Aphorismos Display
  aforismosTitle: string;
  aforismosSubtitle: string;
  aforismosBtnDownload: string;
  aforismosCopiedTitle: string;
  aforismosCopiedMessage: string;

  // History Section
  historyTitle: string;
  historySubtitle: string;
  historyEmptyTitle: string;
  historyEmptyText: string;
  historyBtnStartNew: string;
  historyCardDate: string;
  historyBtnLoad: string;
  historyBtnDelete: string;
  historyDeleteConfirm: string;

  // Support Section
  supportTitle: string;
  supportSubtitle: string;
  supportTabExamples: string;
  supportTabGlossary: string;
  supportTabResources: string;
  supportTabMailbox: string;
  
  // Support Examples
  supportExamplesTitle: string;
  supportExamplesSubtitle: string;
  supportExamplesBtnLoad: string;
  supportExamplesAforismoLabel: string;
  supportExamplesCommentaryLabel: string;

  // Support Glossary
  supportGlossarySearchPlaceholder: string;
  supportGlossaryEmpty: string;

  // Support Resources
  supportResourcesTitle: string;
  supportResourcesSubtitle: string;
  supportResourcesAuthor: string;
  supportResourcesPublisher: string;
  supportResourcesYear: string;
  supportResourcesTypeBook: string;
  supportResourcesTypeConference: string;
  supportResourcesTypeSpeech: string;
  supportResourcesTypeManual: string;
  supportResourcesTypeVideo: string;
  supportResourcesTypePdf: string;

  // Support Mailbox
  supportMailboxTitle: string;
  supportMailboxSubtitle: string;
  supportMailboxPrivateCheckTitle: string;
  supportMailboxPrivateCheckText: string;
  supportMailboxLabelCategory: string;
  supportMailboxCategoryOpinion: string;
  supportMailboxCategoryError: string;
  supportMailboxCategoryQuestion: string;
  supportMailboxCategoryOther: string;
  supportMailboxLabelMessage: string;
  supportMailboxPlaceholderMessage: string;
  supportMailboxBtnSend: string;
  supportMailboxBtnSending: string;
  supportMailboxSuccessTitle: string;
  supportMailboxSuccessText: string;
  supportMailboxBtnSendAnother: string;

  // Download Output File Format
  downloadHeader: string;
  downloadPracticeTitle: string;
  downloadDate: string;
  downloadResponsesHeader: string;
  downloadAforismosHeader: string;
  downloadNotesHeader: string;
  downloadNotesEmpty: string;
  downloadFooterQuote: string;
}

export const translations: Record<"es" | "en" | "fr" | "de" | "pt", TranslationDict> = {
  es: {
    logoTitle: "La Regla de Oro",
    logoSubtitle: "Práctica Interactiva",
    tabIntro: "Introducción",
    tabPractice: "Práctica",
    tabHistory: "Historial",
    tabSupport: "Biblioteca y Enlaces",
    themeToggleDark: "Cambiar a Tema Oscuro",
    themeToggleLight: "Cambiar a Tema Claro",
    toastThemeChanged: "Tema cambiado a: ",
    toastFormReset: "Formulario reiniciado con éxito.",
    toastPracticeSaved: "¡Práctica guardada con éxito en tu historial!",
    toastPracticeLoaded: "Cargada práctica: ",
    toastPracticeDeleted: "Práctica eliminada de tu historial.",
    toastExampleLoaded: "Se ha cargado un ejemplo resuelto completo. Revisa el mapa y las ideas fuerza.",
    toastPracticeReady: "Ejemplo cargado con éxito en tu espacio de trabajo. ¡Compáralo con el mapa!",
    toastFormCheck: "Por favor, responde al menos las primeras preguntas antes de guardar.",
    toastDownloadSuccess: "Archivo de texto descargado correctamente.",
    
    // Intro section
    introTagline: "Transformación Personal y No Violencia",
    introTitle: "La Práctica de la Regla de Oro",
    introSubtitle: "Un camino práctico para superar la reacción mecánica, comprender tus estados internos y elegir el buen trato de manera consciente.",
    introPrivacyTitle: "🔒 Espacio 100% Seguro y Privado",
    introPrivacyText: "Este ejercicio es una herramienta de autoconocimiento y estrictamente personal. Para tu total tranquilidad, las respuestas que introduzcas a lo largo de estos puntos no se almacenan en ningún servidor externo ni quedan registradas en ninguna base de datos accesible por terceros. Todo lo que escribas se procesa de forma temporal y local en tu pantalla para tu propio trabajo interior. Practica con absoluta libertad.",
    introPrincipleTitle: "Principio Central",
    introSiloQuote: "Cuando tratas a los demás como quieres que te traten, te liberas.",
    introInspiration: "Esta práctica se inspira en la Regla de Oro del Nuevo Humanismo, recogida en \"La Regla de Oro de la No Violencia\" de Roberto Kohanoff e Isabel Lazzaroni.",
    introSiloAuthor: "— Silo, Humanismo Universalista",
    introBenefitsTitle: "La práctica de la Regla de Oro nos ayuda a:",
    introBenefits: [
      "Detener la reacción compulsiva y elegir cómo queremos actuar (respuesta diferida).",
      "Comprender por qué ciertas actitudes o comportamientos de otros nos afectan tanto.",
      "Liberarnos de tensiones internas, contradicciones y estados de ánimo (climas) negativos.",
      "Mejorar nuestras relaciones, porque dejamos de pedir que el otro cambie y empezamos a cambiar nosotros.",
      "Construir un estilo de vida más coherente, más amable y más libre.",
      "No se trata de ser perfectos ni de \"portarse bien\". Se trata de aprender a vivir con más conciencia y menos violencia interna, paso a paso."
    ],
    introPurposeTitle: "Esta práctica sirve para:",
    introPurposes: [
      "Comprendernos mejor y reconocer qué nos duele y por qué.",
      "Detectar patrones repetidos que vienen de nuestra historia personal.",
      "Romper la cadena de violencia interna y externa.",
      "Actuar desde nuestras mejores virtudes, no desde el impulso del momento.",
      "Elevar nuestro nivel de conciencia, lo que mejora nuestra vida y la de quienes nos rodean.",
      "Con el tempo, esta práctica se convierte en una herramienta para vivir con más unidad interna: pensar, sentir y actuar en la misma dirección.",
      "Esta aplicación te acompañará paso a paso para que puedas practicarla de manera sencilla, profunda y accesible. No importa tu edad, tu cultura, tu historia o tu situación actual: Todos podemos aprender a vivir con menos violencia y más libertad interna."
    ],
    introExplanation: "Todas las personas experimentamos momentos de tensión, enojo, frustración o confusión. A veces reaccionamos de forma puramente mecánica o compulsiva desde un bajo nivel de conciencia. Esta práctica es una herramienta de autoconocimiento y transformación personal diseñada para ayudarte a detener la reacción automática, comprender tus estados internos y elegir el buen trato de manera consciente. No es una norma rígida ni una obligación moral, sino un camino hacia una vida con menos sufrimiento, más unidad interna y verdadera libertad.",
    introPurposesExtra: "Esta aplicación te acompañará paso a paso para que puedas practicarla de manera sencilla, profunda y accesible. No importa tu edad, tu cultura, tu historia o tu situación actual: Todos podemos aprender a vivir con menos violencia y más libertad interna.",
    introBtnStart: "Iniciar Nueva Práctica",
    introBtnExample: "Ver un Ejemplo Resuelto",

    // Practice Section
    practiceTitleLabel: "Práctica en curso",
    practiceTitlePlaceholder: "Asigna un título a tu reflexión (Ej: Superación de conflicto laboral)",
    practiceProgressLabel: "Progreso global:",
    practiceCompletedCount: " completados",
    practicePrivacyTitle: "Garantía de Confidencialidad y Privacidad Absoluta",
    practicePrivacyText: "Tu práctica de reflexión es absolutamente privada. Todo lo que escribes se almacena localmente y de manera cifrada en la base de datos de tu propio navegador (localStorage). Ningún dato personal, reflexión o respuesta se envía a servidores externos ni a bases de datos en la nube. Tu intimidad emocional está completamente resguardada.",
    practiceQuestionLabel: "Pregunta ",
    practiceTypeLuminous: "Espacio Luminoso",
    practiceTypeDark: "Espacio Climático",
    practiceTypeTransition: "Transición",
    practiceInputWordLabel: "Tu palabra o frase corta:",
    practiceBtnPrev: "Anterior",
    practiceBtnNext: "Siguiente",
    practiceBtnLastPrompt: "¡Última pregunta!",
    practiceHelpPrompt: "Si no encuentras la palabra adecuada, puedes buscar la respuesta adecuada en este botón de ayuda.",
    practiceBtnHelp: "Ver ayuda",
    practiceBtnHideHelp: "Ocultar sugerencias de ayuda",
    practiceHelpSuffix: " Haz clic en cualquiera de estas sugerencias para seleccionarla:",
    practiceHelpOptional: "También puedes escribir cualquier otra palabra que represente mejor tu sentir.",
    
    // Simultaneous Preview
    previewTitle: "Idea Fuerza en Construcción",
    previewMainTitle: "Aforismo Principal (Camino de Subidas 6 + 8):",
    previewGoldenTitle: "Fórmula de Superación (Opcional I):",
    previewGoldenTemplate: "Para evitar {p2} ante {p1}, doy el trato de {p3}, haciendo {p4}.",
    previewHint: "✨ Mira cómo tus reflexiones se integran dinámicamente en tiempo real en estas sentencias lógicas.",

    // Workspace Actions
    actionTitle: "¿Quieres conservar tu sesión?",
    actionSubtitle: "Guarda tus respuestas en tu historial privado para revisarlas más tarde.",
    actionBtnReset: "Reiniciar",
    actionBtnSave: "Guardar Práctica",
    actionResetConfirm: "¿Estás seguro de que deseas reiniciar las respuestas actuales? Se perderá el borrador actual.",

    // Results Section
    resultsCompletedTitle: "¡Completaste todos los 8 puntos de la práctica!",
    resultsCompletedSubtitle: "Tu mente ha transitado de la reactividad a la autoconciencia. Abajo puedes contemplar tus aforismos listos.",
    resultsBtnSaveHistory: "Guardar en Historial",
    resultsSynthesisTitle: "Tu síntesis está en camino",
    resultsSynthesisSubtitle: "Responde las {totalSteps} preguntas del cuestionario para generar el conjunto de aforismos interactivos y de superación personal. Actualmente llevas {answeredCount} de {totalSteps}.",

    // Aforismos Display
    aforismosTitle: "Tus Ideas Fuerza y Aforismos Generados",
    aforismosSubtitle: "Fórmulas y sentencias lógicas construidas de forma simultánea a partir de tu reflexión.",
    aforismosBtnDownload: "Descargar Todas",
    aforismosCopiedTitle: "Copiar aforismo",
    aforismosCopiedMessage: "Aforismo copiado al portapapeles",

    // History Section
    historyTitle: "Tu Historial de Prácticas Guardadas",
    historySubtitle: "Aquí residen tus trabajos anteriores de autoconocimiento. Se guardan localmente en tu propio dispositivo.",
    historyEmptyTitle: "Historial de Prácticas Vacío",
    historyEmptyText: "Todavía no tienes reflexiones guardadas en tu navegador. Completa el cuestionario en la pestaña de Práctica y presiona 'Guardar Práctica' para empezar a construir tu bitácora personal.",
    historyBtnStartNew: "Comenzar Primera Práctica",
    historyCardDate: "Fecha de registro: ",
    historyBtnLoad: "Cargar en Workspace",
    historyBtnDelete: "Eliminar",
    historyDeleteConfirm: "¿Seguro que deseas eliminar esta práctica del historial? No se puede deshacer.",

    // Support Section
    supportTitle: "Biblioteca y Material de Apoyo",
    supportSubtitle: "Profundiza en la Regla de Oro con las referencias bibliográficas originales y el glosario de términos del Nuevo Humanismo.",
    supportTabExamples: "Ejemplos y Testimonios",
    supportTabGlossary: "Glosario de Términos",
    supportTabResources: "Biblioteca de Enlaces",
    supportTabMailbox: "Buzón y Contacto",
    
    // Support Examples
    supportExamplesTitle: "Casos de Estudio y Prácticas de Inspiración",
    supportExamplesSubtitle: "Revisa estos ejercicios reales y anónimos resueltos para guiarte en tu propia reflexión interior.",
    supportExamplesBtnLoad: "Cargar este Ejemplo en el Espacio de Trabajo",
    supportExamplesAforismoLabel: "Aforismo clave resultante:",
    supportExamplesCommentaryLabel: "Comentario del ejercicio:",

    // Support Glossary
    supportGlossarySearchPlaceholder: "Buscar término o definición...",
    supportGlossaryEmpty: "No se encontraron términos para la búsqueda.",

    // Support Resources
    supportResourcesTitle: "Libros y Conferencias de Consulta",
    supportResourcesSubtitle: "Accede de forma directa a la literatura fundacional del pensamiento humanista y la metodología de la no violencia.",
    supportResourcesAuthor: "Autor: ",
    supportResourcesPublisher: "Editorial: ",
    supportResourcesYear: "Año: ",
    supportResourcesTypeBook: "Libro",
    supportResourcesTypeConference: "Conferencia",
    supportResourcesTypeSpeech: "Arenga",
    supportResourcesTypeManual: "Manual",
    supportResourcesTypeVideo: "Canal de YouTube",
    supportResourcesTypePdf: "Libro en PDF",

    // Support Mailbox
    supportMailboxTitle: "Buzón y Sugerencias",
    supportMailboxSubtitle: "Envía tus opiniones, dudas o reportes directamente al equipo de desarrollo de forma totalmente anónima.",
    supportMailboxPrivateCheckTitle: "Garantía de Anonimato Completo",
    supportMailboxPrivateCheckText: "Tu privacidad está blindada. Este buzón no recopila tu correo, tu IP, tu geolocalización, ni ningún dato que pueda identificarte. El mensaje se transmite de forma encriptada directamente al servidor de recopilación para revisión exclusivamente técnica y de contenidos. Si deseas una respuesta personalizada, por favor incluye opcionalmente un medio de contacto al final de tu mensaje.",
    supportMailboxLabelCategory: "Categoría del mensaje:",
    supportMailboxCategoryOpinion: "Opinión o Sugerencia",
    supportMailboxCategoryError: "Reportar un Fallo técnico",
    supportMailboxCategoryQuestion: "Duda conceptual o metodológica",
    supportMailboxCategoryOther: "Otro asunto",
    supportMailboxLabelMessage: "Contenido de tu mensaje:",
    supportMailboxPlaceholderMessage: "Escribe aquí tus ideas, sugerencias o comentarios con total libertad...",
    supportMailboxBtnSend: "Enviar Mensaje Anónimo",
    supportMailboxBtnSending: "Enviando de forma segura...",
    supportMailboxSuccessTitle: "¡Mensaje Enviado con Éxito!",
    supportMailboxSuccessText: "Muchas gracias por tu contribución. Tu mensaje ha sido incorporado a nuestra hoja de cálculo de gestión y será analizado con profundo respeto por el equipo técnico. Tu aporte nos ayuda a mejorar la experiencia de todos.",
    supportMailboxBtnSendAnother: "Enviar Otro Mensaje",

    // Download Output File Format
    downloadHeader: "LA PRÁCTICA DE LA REGLA DE ORO",
    downloadPracticeTitle: "Título de la práctica: ",
    downloadDate: "Fecha de descarga: ",
    downloadResponsesHeader: "RESPUESTAS AL CUESTIONARIO:",
    downloadAforismosHeader: "IDEAS FUERZA Y AFORISMOS GENERADOS:",
    downloadNotesHeader: "NOTAS PERSONALES / DIARIO DE TRABAJO:",
    downloadNotesEmpty: "Sin notas adicionales.",
    downloadFooterQuote: "Cuando tratas a los demás como quieres que te traten, te liberas. — Silo"
  },
  en: {
    logoTitle: "The Golden Rule",
    logoSubtitle: "Interactive Practice",
    tabIntro: "Introduction",
    tabPractice: "Practice",
    tabHistory: "History",
    tabSupport: "Library & Links",
    themeToggleDark: "Switch to Dark Theme",
    themeToggleLight: "Switch to Light Theme",
    toastThemeChanged: "Theme changed to: ",
    toastFormReset: "Form reset successfully.",
    toastPracticeSaved: "Practice saved successfully to your history!",
    toastPracticeLoaded: "Practice loaded: ",
    toastPracticeDeleted: "Practice deleted from history.",
    toastExampleLoaded: "Full solved example loaded. Check the map and key ideas.",
    toastPracticeReady: "Example successfully loaded in your workspace. Compare it on the map!",
    toastFormCheck: "Please answer at least the first questions before saving.",
    toastDownloadSuccess: "Text file downloaded successfully.",
    
    // Intro section
    introTagline: "Personal Transformation and Nonviolence",
    introTitle: "The Practice of the Golden Rule",
    introSubtitle: "A practical path to overcome mechanical reactions, understand your internal states, and consciously choose kind treatment.",
    introPrivacyTitle: "🔒 100% Secure and Private Space",
    introPrivacyText: "This exercise is a self-knowledge tool and is strictly personal. For your complete peace of mind, the answers you enter throughout these points are not stored on any external server nor recorded in any database accessible by third parties. Everything you write is processed temporarily and locally on your screen for your own inner work. Practice with absolute freedom.",
    introPrincipleTitle: "Central Principle",
    introSiloQuote: "When you treat others as you want to be treated, you liberate yourself.",
    introInspiration: "This practice is inspired by the Golden Rule of New Humanism, as presented in \"The Golden Rule of Nonviolence\" by Roberto Kohanoff and Isabel Lazzaroni.",
    introSiloAuthor: "— Silo, Universalist Humanism",
    introBenefitsTitle: "Practicing the Golden Rule helps us to:",
    introBenefits: [
      "Stop compulsive reactions and choose how we want to act (deferred response).",
      "Understand why certain attitudes or behaviors of others affect us so much.",
      "Free ourselves from internal tensions, contradictions, and negative moods (climates).",
      "Improve our relationships, because we stop asking the other to change and start changing ourselves.",
      "Build a more coherent, kinder, and freer lifestyle.",
      "It is not about being perfect or \"behaving well.\" It is about learning to live with more awareness and less internal violence, step by step."
    ],
    introPurposeTitle: "This practice is useful to:",
    introPurposes: [
      "Understand ourselves better and recognize what hurts us and why.",
      "Detect repeated patterns that stem from our personal history.",
      "Break the chain of internal and external violence.",
      "Act from our best virtues, not from the impulse of the moment.",
      "Raise our level of consciousness, which improves our lives and the lives of those around us.",
      "Over time, this practice becomes a tool to live with more internal unity: thinking, feeling, and acting in the same direction.",
      "This application will guide you step by step so you can practice it in a simple, deep, and accessible way. No matter your age, culture, history, or current situation: We can all learn to live with less violence and more internal freedom."
    ],
    introExplanation: "We all experience moments of tension, anger, frustration, or confusion. Sometimes we react in a purely mechanical or compulsive way from a low level of consciousness. This practice is a self-knowledge and personal transformation tool designed to help you stop the automatic reaction, understand your internal states, and consciously choose kind treatment. It is not a rigid norm or a moral obligation, but a path toward a life with less suffering, more internal unity, and true freedom.",
    introPurposesExtra: "This application will guide you step by step so you can practice it in a simple, deep, and accessible way. No matter your age, culture, history, or current situation: We can all learn to live with less violence and more internal freedom.",
    introBtnStart: "Start New Practice",
    introBtnExample: "View a Solved Example",

    // Practice Section
    practiceTitleLabel: "Practice in progress",
    practiceTitlePlaceholder: "Give a title to your reflection (e.g., Overcoming a work conflict)",
    practiceProgressLabel: "Global progress:",
    practiceCompletedCount: " completed",
    practicePrivacyTitle: "Guarantee of Complete Confidentiality and Privacy",
    practicePrivacyText: "Your reflection practice is absolutely private. Everything you write is stored locally and securely in your browser's database (localStorage). No personal data, reflection, or response is sent to external servers or cloud databases. Your emotional intimacy is fully protected.",
    practiceQuestionLabel: "Question ",
    practiceTypeLuminous: "Luminous Space",
    practiceTypeDark: "Perturbed Space",
    practiceTypeTransition: "Transition",
    practiceInputWordLabel: "Your word or short phrase:",
    practiceBtnPrev: "Previous",
    practiceBtnNext: "Next",
    practiceBtnLastPrompt: "Last question!",
    practiceHelpPrompt: "If you can't find the right word, you can look for help in this panel.",
    practiceBtnHelp: "Show help",
    practiceBtnHideHelp: "Hide help suggestions",
    practiceHelpSuffix: " Click on any of these suggestions to select it:",
    practiceHelpOptional: "You can also write any other word that better represents your feelings.",
    
    // Simultaneous Preview
    previewTitle: "Key Idea in Construction",
    previewMainTitle: "Main Aphorism (Rising Paths 6 + 8):",
    previewGoldenTitle: "Formula of Overcoming (Optional I):",
    previewGoldenTemplate: "To avoid {p2} before {p1}, I offer the treatment of {p3}, by doing {p4}.",
    previewHint: "✨ Watch how your reflections are dynamically integrated in real time into these logical sentences.",

    // Workspace Actions
    actionTitle: "Do you want to save your session?",
    actionSubtitle: "Save your answers to your private history to review them later.",
    actionBtnReset: "Reset",
    actionBtnSave: "Save Practice",
    actionResetConfirm: "Are you sure you want to reset the current answers? Your active draft will be lost.",

    // Results Section
    resultsCompletedTitle: "You have completed all 8 points of the practice!",
    resultsCompletedSubtitle: "Your mind has moved from reactivity to self-awareness. Below you can contemplate your final aphorisms.",
    resultsBtnSaveHistory: "Save in History",
    resultsSynthesisTitle: "Your synthesis is on the way",
    resultsSynthesisSubtitle: "Answer the {totalSteps} questions of the questionnaire to generate the set of interactive and self-improvement aphorisms. Currently you have {answeredCount} of {totalSteps}.",

    // Aforismos Display
    aforismosTitle: "Your Key Ideas and Generated Aphorisms",
    aforismosSubtitle: "Formulas and logical statements built simultaneously from your reflection.",
    aforismosBtnDownload: "Download All",
    aforismosCopiedTitle: "Copy aphorism",
    aforismosCopiedMessage: "Aphorism copied to clipboard",

    // History Section
    historyTitle: "Your History of Saved Practices",
    historySubtitle: "Here reside your previous self-knowledge works. They are saved locally on your own device.",
    historyEmptyTitle: "Saved Practices History is Empty",
    historyEmptyText: "You don't have any saved reflections in your browser yet. Complete the questionnaire in the Practice tab and click 'Save Practice' to start building your personal journal.",
    historyBtnStartNew: "Start First Practice",
    historyCardDate: "Date recorded: ",
    historyBtnLoad: "Load into Workspace",
    historyBtnDelete: "Delete",
    historyDeleteConfirm: "Are you sure you want to delete this practice from your history? This action cannot be undone.",

    // Support Section
    supportTitle: "Library and Support Material",
    supportSubtitle: "Deepen your understanding of the Golden Rule with original literature references and the New Humanism glossary.",
    supportTabExamples: "Examples & Testimonials",
    supportTabGlossary: "Glossary of Terms",
    supportTabResources: "Links Library",
    supportTabMailbox: "Mailbox & Contact",
    
    // Support Examples
    supportExamplesTitle: "Case Studies and Inspiring Practices",
    supportExamplesSubtitle: "Review these real and anonymous resolved exercises to guide you in your own inner reflection.",
    supportExamplesBtnLoad: "Load this Example into Workspace",
    supportExamplesAforismoLabel: "Resulting key aphorism:",
    supportExamplesCommentaryLabel: "Exercise commentary:",

    // Support Glossary
    supportGlossarySearchPlaceholder: "Search term or definition...",
    supportGlossaryEmpty: "No terms found matching your search.",

    // Support Resources
    supportResourcesTitle: "Books and Lectures for Consultation",
    supportResourcesSubtitle: "Directly access the foundational literature of humanist thought and the active nonviolence methodology.",
    supportResourcesAuthor: "Author: ",
    supportResourcesPublisher: "Publisher: ",
    supportResourcesYear: "Year: ",
    supportResourcesTypeBook: "Book",
    supportResourcesTypeConference: "Conference",
    supportResourcesTypeSpeech: "Silo's Address",
    supportResourcesTypeManual: "Manual",
    supportResourcesTypeVideo: "YouTube Channel",
    supportResourcesTypePdf: "PDF Book",

    // Support Mailbox
    supportMailboxTitle: "Mailbox and Feedback",
    supportMailboxSubtitle: "Send your opinions, doubts, or technical reports directly to the development team completely anonymously.",
    supportMailboxPrivateCheckTitle: "Guarantee of Complete Anonymity",
    supportMailboxPrivateCheckText: "Your privacy is shielded. This mailbox does not collect your email, IP, geolocation, or any data that could identify you. Messages are encrypted directly to the spreadsheet for technical and content review. If you'd like a response, please optionally include a contact method at the end of your message.",
    supportMailboxLabelCategory: "Message category:",
    supportMailboxCategoryOpinion: "Opinion or Suggestion",
    supportMailboxCategoryError: "Report a technical bug",
    supportMailboxCategoryQuestion: "Conceptual/methodological doubt",
    supportMailboxCategoryOther: "Other matter",
    supportMailboxLabelMessage: "Your message content:",
    supportMailboxPlaceholderMessage: "Write your ideas, suggestions, or comments here with total freedom...",
    supportMailboxBtnSend: "Send Anonymous Message",
    supportMailboxBtnSending: "Sending securely...",
    supportMailboxSuccessTitle: "Message Sent Successfully!",
    supportMailboxSuccessText: "Thank you very much for your contribution. Your message has been safely integrated into our management spreadsheet and will be analyzed with deep respect by the technical team. Your input helps us improve the experience for everyone.",
    supportMailboxBtnSendAnother: "Send Another Message",

    // Download Output File Format
    downloadHeader: "THE PRACTICE OF THE GOLDEN RULE",
    downloadPracticeTitle: "Reflection Title: ",
    downloadDate: "Download date: ",
    downloadResponsesHeader: "QUESTIONNAIRE ANSWERS:",
    downloadAforismosHeader: "KEY IDEAS AND GENERATED APHORISMS:",
    downloadNotesHeader: "PERSONAL NOTES / WORK DIARY:",
    downloadNotesEmpty: "No additional notes.",
    downloadFooterQuote: "When you treat others as you want to be treated, you liberate yourself. — Silo"
  },
  fr: {
    logoTitle: "La Règle d'Or",
    logoSubtitle: "Pratique Interactive",
    tabIntro: "Introduction",
    tabPractice: "Pratique",
    tabHistory: "Historique",
    tabSupport: "Bibliothèque et Liens",
    themeToggleDark: "Passer au thème sombre",
    themeToggleLight: "Passer au thème clair",
    toastThemeChanged: "Thème changé en : ",
    toastFormReset: "Formulaire réinitialisé avec succès.",
    toastPracticeSaved: "Pratique enregistrée avec succès dans votre historique !",
    toastPracticeLoaded: "Pratique chargée : ",
    toastPracticeDeleted: "Pratique supprimée de votre historique.",
    toastExampleLoaded: "Un exemple résolu complet a été chargé. Consultez la carte et les idées forces.",
    toastPracticeReady: "Exemple chargé avec succès dans votre espace de travail. Comparez-le sur la carte !",
    toastFormCheck: "Veuillez répondre au moins aux premières questions avant d'enregistrer.",
    toastDownloadSuccess: "Fichier texte téléchargé avec succès.",
    
    // Intro section
    introTagline: "Transformation personnelle et non-violence",
    introTitle: "La Pratique de la Règle d'Or",
    introSubtitle: "Un chemin pratique pour surmonter les réactions mécaniques, comprendre vos états intérieurs et choisir consciemment un traitement bienveillant.",
    introPrivacyTitle: "🔒 Espace 100% sécurisé et privé",
    introPrivacyText: "Cet exercice est un outil de connaissance de soi strictement personnel. Pour votre totale tranquillité d'esprit, les réponses que vous saisissez tout au long de ces points ne sont stockées sur aucun serveur externe ni enregistrées dans aucune base de données accessible par des tiers. Tout ce que vous écrivez est traité de manière temporaire et locale sur votre écran pour votre propre travail intérieur. Pratiquez en toute liberté.",
    introPrincipleTitle: "Principe central",
    introSiloQuote: "Lorsque tu traites les autres comme tu veux qu'ils te traitent, tu te libères.",
    introInspiration: "Cette pratique s'inspire de la Règle d'Or du Nouvel Humanisme, présentée dans \"La Règle d'Or de la Non-Violence\" de Roberto Kohanoff et Isabel Lazzaroni.",
    introSiloAuthor: "— Silo, Humanisme Universaliste",
    introBenefitsTitle: "La pratique de la Règle d'Or nous aide à :",
    introBenefits: [
      "Arrêter les réactions compulsives et choisir comment nous voulons agir (réponse différée).",
      "Comprendre pourquoi certaines attitudes ou certains comportements d'autrui nous affectent autant.",
      "Nous libérer des tensions internes, des contradictions et des humeurs (climats) négatives.",
      "Améliorer nos relations, car nous cessons de demander à l'autre de changer et commençons à changer nous-mêmes.",
      "Construire un mode de vie plus cohérent, plus bienveillant et plus libre.",
      "Il ne s'agit pas d'être parfait ni de \"bien se comporter\". Il s'agit d'apprendre à vivre avec plus de conscience et moins de violence interne, étape par étape."
    ],
    introPurposeTitle: "Cette pratique est utile pour :",
    introPurposes: [
      "Mieux nous comprendre et reconnaître ce qui nous blesse et pourquoi.",
      "Détecter des schémas répétitifs issus de notre histoire personnelle.",
      "Briser la chaîne de la violence interne et externe.",
      "Agir selon nos meilleures vertus, et non sous l'impulsion du moment.",
      "Élever notre niveau de conscience, ce qui améliore notre vie et celle de notre entourage.",
      "Avec le temps, cette pratique devient un outil pour vivre avec plus d'unité interne : penser, sentir et agir dans la même direction.",
      "Cette application vous accompagnera pas à pas afin que vous puissiez la pratiquer de manière simple, profonde et accessible. Peu importe votre âge, votre culture, votre histoire ou votre situation actuelle : nous pouvons tous apprendre à vivre avec moins de violence et plus de liberté intérieure."
    ],
    introExplanation: "Nous traversons tous des moments de tension, de colère, de frustration ou de confusion. Parfois, nous réagissons de manière purement mécanique ou compulsive à partir d'un bas niveau de conscience. Cette pratique est un outil de connaissance de soi et de transformation personnelle conçu pour vous aider à arrêter la réaction automatique, comprendre vos états intérieurs et choisir consciemment un traitement bienveillant. Ce n'est ni une norme rigide ni une obligation morale, mais un chemin vers une vie avec moins de souffrance, plus d'unité interne et une véritable liberté.",
    introPurposesExtra: "Cette application vous accompagnera pas à pas afin que vous puissiez la pratiquer de manière simple, profonde et accessible. Peu importe votre âge, votre culture, votre histoire ou votre situation actuelle : nous pouvons tous apprendre à vivre avec moins de violence et plus de liberté intérieure.",
    introBtnStart: "Démarrer une nouvelle pratique",
    introBtnExample: "Voir un exemple résolu",

    // Practice Section
    practiceTitleLabel: "Pratique en cours",
    practiceTitlePlaceholder: "Donnez un titre à votre réflexion (ex: Surmonter un conflit de travail)",
    practiceProgressLabel: "Progression globale :",
    practiceCompletedCount: " terminés",
    practicePrivacyTitle: "Garantie de confidentialité et de vie privée absolue",
    practicePrivacyText: "Votre pratique de réflexion est absolument privée. Tout ce que vous écrivez est stocké localement et de manière chiffrée dans la base de données de votre propre navigateur (localStorage). Aucune donnée personnelle, réflexion ou réponse n'est envoyée à des serveurs externes ou à des bases de données dans le cloud. Votre intimité émotionnelle est entièrement protégée.",
    practiceQuestionLabel: "Question ",
    practiceTypeLuminous: "Espace Lumineux",
    practiceTypeDark: "Espace Perturbé",
    practiceTypeTransition: "Transition",
    practiceInputWordLabel: "Votre mot ou phrase courte :",
    practiceBtnPrev: "Précédent",
    practiceBtnNext: "Suivant",
    practiceBtnLastPrompt: "Dernière question !",
    practiceHelpPrompt: "Si vous ne trouvez pas le mot approprié, vous pouvez chercher de l'aide dans ce panneau.",
    practiceBtnHelp: "Afficher l'aide",
    practiceBtnHideHelp: "Masquer les suggestions d'aide",
    practiceHelpSuffix: " Cliquez sur l'une de ces suggestions pour la sélectionner :",
    practiceHelpOptional: "Vous pouvez également écrire n'importe quel autre mot qui représente mieux votre ressenti.",
    
    // Simultaneous Preview
    previewTitle: "Idée Force en Construction",
    previewMainTitle: "Aphorisme Principal (Chemins de Montée 6 + 8) :",
    previewGoldenTitle: "Formule de Dépassement (Optionnel I) :",
    previewGoldenTemplate: "Pour éviter {p2} face à {p1}, j'offre le traitement de {p3}, en faisant {p4}.",
    previewHint: "✨ Regardez comment vos réflexions s'intègrent dynamiquement en temps réel dans ces énoncés logiques.",

    // Workspace Actions
    actionTitle: "Voulez-vous conserver votre session ?",
    actionSubtitle: "Enregistrez vos réponses dans votre historique privé pour les revoir plus tard.",
    actionBtnReset: "Réinitialiser",
    actionBtnSave: "Enregistrer la pratique",
    actionResetConfirm: "Êtes-vous sûr de vouloir réinitialiser les réponses actuelles ? Votre brouillon actif sera perdu.",

    // Results Section
    resultsCompletedTitle: "Vous avez complété les 8 points de la pratique !",
    resultsCompletedSubtitle: "Votre esprit est passé de la réactivité à la conscience de soi. Vous pouvez contempler vos aphorismes finaux ci-dessous.",
    resultsBtnSaveHistory: "Enregistrer dans l'historique",
    resultsSynthesisTitle: "Votre synthèse est en route",
    resultsSynthesisSubtitle: "Répondez aux {totalSteps} questions du questionnaire pour générer l'ensemble des aphorismes interactifs et de développement personnel. Vous avez actuellement répondu à {answeredCount} sur {totalSteps}.",

    // Aforismos Display
    aforismosTitle: "Vos Idées Forces et Aphorismes Générés",
    aforismosSubtitle: "Formules et énoncés logiques construits simultanément à partir de votre réflexion.",
    aforismosBtnDownload: "Télécharger tout",
    aforismosCopiedTitle: "Copier l'aphorisme",
    aforismosCopiedMessage: "Aphorisme copié dans le presse-papiers",

    // History Section
    historyTitle: "Votre historique de pratiques enregistrées",
    historySubtitle: "Ici résident vos travaux antérieurs de connaissance de soi. Ils sont enregistrés localement sur votre propre appareil.",
    historyEmptyTitle: "L'historique des pratiques enregistrées est vide",
    historyEmptyText: "Vous n'avez pas encore de réflexions enregistrées dans votre navigateur. Remplissez le questionnaire dans l'onglet Pratique et cliquez sur 'Enregistrer la pratique' pour commencer à construire votre journal personnel.",
    historyBtnStartNew: "Démarrer la première pratique",
    historyCardDate: "Date d'enregistrement : ",
    historyBtnLoad: "Charger dans l'espace de travail",
    historyBtnDelete: "Supprimer",
    historyDeleteConfirm: "Êtes-vous sûr de vouloir supprimer cette pratique de votre historique ? Cette action est irréversible.",

    // Support Section
    supportTitle: "Bibliothèque et matériel de soutien",
    supportSubtitle: "Approfondissez votre compréhension de la Règle d'Or avec les références bibliographiques originales et le glossaire des termes du Nouvel Humanisme.",
    supportTabExamples: "Exemples et Témoignages",
    supportTabGlossary: "Glossaire des Termes",
    supportTabResources: "Bibliothèque de Liens",
    supportTabMailbox: "Boîte aux lettres et Contact",
    
    // Support Examples
    supportExamplesTitle: "Études de cas et pratiques inspirantes",
    supportExamplesSubtitle: "Consultez ces exercices réels et anonymes résolus pour vous guider dans votre propre réflexion intérieure.",
    supportExamplesBtnLoad: "Charger cet exemple dans l'espace de travail",
    supportExamplesAforismoLabel: "Aphorisme clé résultant :",
    supportExamplesCommentaryLabel: "Commentaire de l'exercice :",

    // Support Glossary
    supportGlossarySearchPlaceholder: "Rechercher un terme ou une définition...",
    supportGlossaryEmpty: "Aucun terme ne correspond à votre recherche.",

    // Support Resources
    supportResourcesTitle: "Livres et conférences de consultation",
    supportResourcesSubtitle: "Accédez directement à la littérature fondatrice de la pensée humaniste et de la méthodologie de la non-violence active.",
    supportResourcesAuthor: "Auteur : ",
    supportResourcesPublisher: "Éditeur : ",
    supportResourcesYear: "Année : ",
    supportResourcesTypeBook: "Livre",
    supportResourcesTypeConference: "Conférence",
    supportResourcesTypeSpeech: "Allocution de Silo",
    supportResourcesTypeManual: "Manuel",
    supportResourcesTypeVideo: "Chaîne YouTube",
    supportResourcesTypePdf: "Livre au format PDF",

    // Support Mailbox
    supportMailboxTitle: "Boîte aux lettres et retours",
    supportMailboxSubtitle: "Envoyez vos avis, questions ou rapports techniques directement à l'équipe de développement de manière totalement anonyme.",
    supportMailboxPrivateCheckTitle: "Garantie d'anonymat complet",
    supportMailboxPrivateCheckText: "Votre vie privée est blindée. Cette boîte de réception ne collecte ni votre adresse e-mail, ni votre adresse IP, ni votre géolocalisation, ni aucune donnée pouvant vous identifier. Les messages sont transmis de façon cryptée directement au tableau de gestion pour révision technique et éditoriale. Si vous souhaitez une réponse, veuillez éventuellement inclure un moyen de contact à la fin de votre message.",
    supportMailboxLabelCategory: "Catégorie du message :",
    supportMailboxCategoryOpinion: "Avis ou Suggestion",
    supportMailboxCategoryError: "Signaler un bug technique",
    supportMailboxCategoryQuestion: "Doute conceptuel ou méthodologique",
    supportMailboxCategoryOther: "Autre sujet",
    supportMailboxLabelMessage: "Contenu de votre message :",
    supportMailboxPlaceholderMessage: "Écrivez ici vos idées, suggestions ou commentaires en toute liberté...",
    supportMailboxBtnSend: "Envoyer un message anonyme",
    supportMailboxBtnSending: "Envoi sécurisé en cours...",
    supportMailboxSuccessTitle: "Message envoyé avec succès !",
    supportMailboxSuccessText: "Merci beaucoup pour votre contribution. Votre message a été intégré en toute sécurité dans notre feuille de calcul de gestion et sera analysé avec le plus profond respect par l'équipe technique. Votre contribution nous aide à améliorer l'expérience de tous.",
    supportMailboxBtnSendAnother: "Envoyer un autre message",

    // Download Output File Format
    downloadHeader: "LA PRATIQUE DE LA REGLE D'OR",
    downloadPracticeTitle: "Titre de la réflexion : ",
    downloadDate: "Date de téléchargement : ",
    downloadResponsesHeader: "REPONSES AU QUESTIONNAIRE :",
    downloadAforismosHeader: "IDEES FORCES ET APHORISMES GENERES :",
    downloadNotesHeader: "NOTES PERSONNELLES / JOURNAL DE TRAVAIL :",
    downloadNotesEmpty: "Aucune note supplémentaire.",
    downloadFooterQuote: "Lorsque tu traites les autres comme tu veux qu'ils te traitent, tu te libères. — Silo"
  },
  de: {
    logoTitle: "Die Goldene Regel",
    logoSubtitle: "Interaktive Praxis",
    tabIntro: "Einführung",
    tabPractice: "Praxis",
    tabHistory: "Verlauf",
    tabSupport: "Bibliothek & Links",
    themeToggleDark: "Zu dunklem Thema wechseln",
    themeToggleLight: "Zu hellem Thema wechseln",
    toastThemeChanged: "Thema geändert zu: ",
    toastFormReset: "Formular erfolgreich zurückgesetzt.",
    toastPracticeSaved: "Praxis erfolgreich in Ihrem Verlauf gespeichert!",
    toastPracticeLoaded: "Praxis geladen: ",
    toastPracticeDeleted: "Praxis aus Ihrem Verlauf gelöscht.",
    toastExampleLoaded: "Ein vollständig gelöstes Beispiel wurde geladen. Überprüfen Sie die Karte und die Leitgedanken.",
    toastPracticeReady: "Beispiel erfolgreich in Ihren Arbeitsbereich geladen. Vergleichen Sie es auf der Karte!",
    toastFormCheck: "Bitte beantworten Sie mindestens die ersten Fragen, bevor Sie speichern.",
    toastDownloadSuccess: "Textdatei erfolgreich heruntergeladen.",
    
    // Intro section
    introTagline: "Persönliche Transformation und Gewaltfreiheit",
    introTitle: "Die Praxis der Goldenen Regel",
    introSubtitle: "Ein praktischer Weg, um mechanische Reaktionen zu überwinden, Ihre inneren Zustände zu verstehen und sich bewusst für eine gütige Behandlung zu entscheiden.",
    introPrivacyTitle: "🔒 100% sicherer und privater Bereich",
    introPrivacyText: "Diese Übung ist ein rein persönliches Werkzeug zur Selbsterkenntnis. Zur Ihrer vollständigen Beruhigung werden die Antworten, die Sie in diesen Punkten eingeben, auf keinem externen Server gespeichert und in keiner für Dritte zugänglichen Datenbank registriert. Alles, was Sie schreiben, wird vorübergehend und lokal auf Ihrem Bildschirm für Ihre eigene innere Arbeit verarbeitet. Praktizieren Sie mit absoluter Freiheit.",
    introPrincipleTitle: "Zentrales Prinzip",
    introSiloQuote: "Wenn du andere so behandelst, wie du selbst behandelt werden möchtest, befreist du dich.",
    introInspiration: "Diese Praxis ist von der Goldenen Regel des Neuen Humanismus inspiriert, wie sie in „Die Goldene Regel der Gewaltfreiheit“ von Roberto Kohanoff und Isabel Lazzaroni dargelegt ist.",
    introSiloAuthor: "— Silo, Universalistischer Humanismus",
    introBenefitsTitle: "Die Praxis der Goldenen Regel hilft uns dabei:",
    introBenefits: [
      "Kompulsive Reaktionen zu stoppen und selbst zu wählen, wie wir handeln wollen (verzögerte Antwort).",
      "Zu verstehen, warum uns bestimmte Einstellungen oder Verhaltensweisen anderer so sehr betreffen.",
      "Uns von inneren Spannungen, Widersprüchen und negativen Stimmungen (Klimata) zu befreien.",
      "Unsere Beziehungen zu verbessern, weil wir aufhören, den anderen um Veränderung zu bitten, und anfangen, uns selbst zu verändern.",
      "Einen kohärenteren, gütigeren und freieren Lebensstil aufzubauen.",
      "Es geht nicht darum, perfekt zu sein oder sich „gut zu benehmen“. Es geht darum zu lernen, Schritt für Schritt mit mehr Bewusstsein und weniger innerer Gewalt zu leben."
    ],
    introPurposeTitle: "Diese Praxis dient dazu:",
    introPurposes: [
      "Uns selbst besser zu verstehen und zu erkennen, was uns schmerzt und warum.",
      "Sich wiederholende Muster zu erkennen, die aus unserer persönlichen Geschichte stammen.",
      "Die Kette der inneren und äußeren Gewalt zu durchbrechen.",
      "Aus unseren besten Tugenden heraus zu handeln, nicht aus dem Impuls des Augenblicks.",
      "Unser Bewusstseinsniveau zu erhöhen, was unser Leben und das Leben der Menschen um uns herum verbessert.",
      "Mit der Zeit wird diese Praxis zu einem Werkzeug, um mit mehr innerer Einheit zu leben: Denken, Fühlen und Handeln in dieselbe Richtung zu lenken.",
      "Diese Anwendung wird Sie Schritt für Schritt begleiten, damit Sie sie auf einfache, tiefe und zugängliche Weise praktizieren können. Unabhängig von Ihrem Alter, Ihrer Kultur, Ihrer Geschichte oder Ihrer aktuellen Situation: Wir alle können lernen, mit weniger Gewalt und mehr innerer Freiheit zu leben."
    ],
    introExplanation: "Wir alle erleben Momente der Spannung, des Ärgers, der Frustration oder der Verwirrung. Manchmal reagieren wir rein mechanisch oder compulsiv auf einem niedrigen Bewusstseinsniveau. Diese Praxis ist ein Werkzeug zur Selbsterkenntnis und zur persönlichen Transformation, das Ihnen helfen soll, die automatische Reaktion zu stoppen, Ihre inneren Zustände zu verstehen und sich bewusst für eine gütige Behandlung zu entscheiden. Es ist weder eine starre Norm noch eine moralische Verpflichtung, sondern un chemin vers une vie avec moins de souffrance, mehr innerer Einheit und wahrer Freiheit.",
    introPurposesExtra: "Diese Anwendung wird Sie Schritt für Schritt begleiten, damit Sie sie auf einfache, tiefe und zugängliche Weise praktizieren können. Unabhängig von Ihrem Alter, Ihrer Kultur, Ihrer Geschichte oder Ihrer aktuellen Situation: Wir alle können lernen, mit weniger Gewalt und mehr innerer Freiheit zu leben.",
    introBtnStart: "Neue Praxis starten",
    introBtnExample: "Ein gelöstes Beispiel ansehen",

    // Practice Section
    practiceTitleLabel: "Praxis läuft",
    practiceTitlePlaceholder: "Geben Sie Ihrer Reflexion einen Titel (z. B. Überwindung eines Arbeitskonflikts)",
    practiceProgressLabel: "Gesamtfortschritt:",
    practiceCompletedCount: " abgeschlossen",
    practicePrivacyTitle: "Garantie für absolute Vertraulichkeit und Privatsphäre",
    practicePrivacyText: "Ihre Reflexionspraxis ist absolut privat. Alles, was Sie schreiben, wird lokal und verschlüsselt in der Datenbank Ihres eigenen Browsers (localStorage) gespeichert. Es werden keine persönlichen Daten, Reflexionen oder Antworten an externe Server oder Cloud-Datenbanken gesendet. Ihre emotionale Privatsphäre ist vollständig geschützt.",
    practiceQuestionLabel: "Frage ",
    practiceTypeLuminous: "Lichter Raum",
    practiceTypeDark: "Gestörter Raum",
    practiceTypeTransition: "Übergang",
    practiceInputWordLabel: "Ihr Wort oder kurzer Satz:",
    practiceBtnPrev: "Zurück",
    practiceBtnNext: "Weiter",
    practiceBtnLastPrompt: "Letzte Frage!",
    practiceHelpPrompt: "Wenn Sie nicht das richtige Wort finden, können Sie in diesem Hilfebereich nach Vorschlägen suchen.",
    practiceBtnHelp: "Hilfe anzeigen",
    practiceBtnHideHelp: "Hilfevorschläge ausblenden",
    practiceHelpSuffix: " Klicken Sie auf einen dieser Vorschläge, um ihn auszuwählen:",
    practiceHelpOptional: "Sie können auch jedes andere Wort schreiben, das Ihre Gefühle am besten wiedergibt.",
    
    // Simultaneous Preview
    previewTitle: "Leitgedanke im Aufbau",
    previewMainTitle: "Hauptaphorismus (Aufsteigende Pfade 6 + 8):",
    previewGoldenTitle: "Überwindungsformel (Optional I):",
    previewGoldenTemplate: "Um {p2} angesichts von {p1} zu vermeiden, schenke ich die Behandlung von {p3}, indem ich {p4} tue.",
    previewHint: "✨ Sehen Sie, wie Ihre Reflexionen dynamisch in Echtzeit in diese logischen Sätze integriert werden.",

    // Workspace Actions
    actionTitle: "Möchten Sie Ihre Sitzung speichern?",
    actionSubtitle: "Speichern Sie Ihre Antworten in Ihrem privaten Verlauf, um sie später zu überprüfen.",
    actionBtnReset: "Zurücksetzen",
    actionBtnSave: "Praxis speichern",
    actionResetConfirm: "Sind Sie sicher, dass Sie die aktuellen Antworten zurücksetzen möchten? Ihr aktiver Entwurf geht verloren.",

    // Results Section
    resultsCompletedTitle: "Sie haben alle 8 Punkte der Praxis abgeschlossen!",
    resultsCompletedSubtitle: "Ihr Geist hat sich von der Reaktivität zur Selbsterkenntnis bewegt. Unten können Sie Ihre endgültigen Aphorismen betrachten.",
    resultsBtnSaveHistory: "Im Verlauf speichern",
    resultsSynthesisTitle: "Ihre Synthese ist auf dem Weg",
    resultsSynthesisSubtitle: "Beantworten Sie die {totalSteps} Fragen des Fragebogens, um die interaktiven und selbstverbessernden Aphorismen zu generieren. Derzeit haben Sie {answeredCount} von {totalSteps} beantwortet.",

    // Aforismos Display
    aforismosTitle: "Ihre Leitgedanken und generierten Aphorismen",
    aforismosSubtitle: "Formeln und logische Aussagen, die gleichzeitig aus Ihrer Reflexion erstellt wurden.",
    aforismosBtnDownload: "Alle herunterladen",
    aforismosCopiedTitle: "Aphorismus kopieren",
    aforismosCopiedMessage: "Aphorismus in die Zwischenablage kopiert",

    // History Section
    historyTitle: "Ihr Verlauf gespeicherter Praktiken",
    historySubtitle: "Hier befinden sich Ihre früheren Arbeiten zur Selbsterkenntnis. Sie werden lokal auf Ihrem eigenen Gerät gespeichert.",
    historyEmptyTitle: "Verlauf der gespeicherten Praktiken ist leer",
    historyEmptyText: "Sie haben noch keine gespeicherten Reflexionen in Ihrem Browser. Füllen Sie den Fragebogen im Reiter Praxis aus und klicken Sie auf 'Praxis speichern', um Ihr persönliches Tagebuch aufzubauen.",
    historyBtnStartNew: "Erste Praxis starten",
    historyCardDate: "Registrierungsdatum: ",
    historyBtnLoad: "In den Arbeitsbereich laden",
    historyBtnDelete: "Löschen",
    historyDeleteConfirm: "Sind Sie sicher, dass Sie diese Praxis aus Ihrem Verlauf löschen möchten? Dies kann nicht rückgängig gemacht werden.",

    // Support Section
    supportTitle: "Bibliothek und Begleitmaterial",
    supportSubtitle: "Vertiefen Sie Ihr Verständnis der Goldenen Regel mit den originalen Literaturreferenzen und dem Glossar der Begriffe des Neuen Humanismus.",
    supportTabExamples: "Beispiele & Erfahrungsberichte",
    supportTabGlossary: "Glossary der Begriffe",
    supportTabResources: "Links-Bibliothek",
    supportTabMailbox: "Briefkasten & Kontakt",
    
    // Support Examples
    supportExamplesTitle: "Fallstudien und inspirierende Praktiken",
    supportExamplesSubtitle: "Überprüfen Sie diese echten und anonymen gelösten Übungen, um sich bei Ihrer eigenen inneren Reflexion leiten zu lassen.",
    supportExamplesBtnLoad: "Dieses Beispiel in den Arbeitsbereich laden",
    supportExamplesAforismoLabel: "Resultierender Hauptaphorismus:",
    supportExamplesCommentaryLabel: "Kommentar zur Übung:",

    // Support Glossary
    supportGlossarySearchPlaceholder: "Begriff oder Definition suchen...",
    supportGlossaryEmpty: "Keine Begriffe gefunden, die Ihrer Suche entsprechen.",

    // Support Resources
    supportResourcesTitle: "Bücher und Vorträge zum Nachschlagen",
    supportResourcesSubtitle: "Greifen Sie direkt auf die grundlegende Literatur des humanistischen Denkens und der Methodik der aktiven Gewaltfreiheit zu.",
    supportResourcesAuthor: "Autor: ",
    supportResourcesPublisher: "Herausgeber: ",
    supportResourcesYear: "Jahr: ",
    supportResourcesTypeBook: "Buch",
    supportResourcesTypeConference: "Konferenz",
    supportResourcesTypeSpeech: "Silos Ansprache",
    supportResourcesTypeManual: "Handbuch",
    supportResourcesTypeVideo: "YouTube-Kanal",
    supportResourcesTypePdf: "PDF-Buch",

    // Support Mailbox
    supportMailboxTitle: "Briefkasten und Feedback",
    supportMailboxSubtitle: "Senden Sie Ihre Meinungen, Zweifel oder technischen Berichte völlig anonym direkt an das Entwicklungsteam.",
    supportMailboxPrivateCheckTitle: "Garantie für vollständige Anonymität",
    supportMailboxPrivateCheckText: "Ihre Privatsphäre ist geschützt. Dieser Briefkasten erfasst weder Ihre E-Mail, Ihre IP, Ihren Standort noch sonstige Daten, die Sie identifizieren könnten. Die Nachricht wird verschlüsselt direkt an das Verwaltungstabellen-Dokument gesendet, um eine rein technische und inhaltliche Überprüfung zu ermöglichen. Wenn Sie eine Antwort wünschen, geben Sie bitte optional eine Kontaktmöglichkeit am Ende Ihrer Nachricht an.",
    supportMailboxLabelCategory: "Kategorie der Nachricht:",
    supportMailboxCategoryOpinion: "Meinung oder Vorschlag",
    supportMailboxCategoryError: "Einen technischen Fehler melden",
    supportMailboxCategoryQuestion: "Konzeptionelle/methodische Frage",
    supportMailboxCategoryOther: "Anderes Anliegen",
    supportMailboxLabelMessage: "Inhalt Ihrer Nachricht:",
    supportMailboxPlaceholderMessage: "Schreiben Sie hier völlig frei Ihre Ideen, Vorschläge oder Kommentare...",
    supportMailboxBtnSend: "Anonyme Nachricht senden",
    supportMailboxBtnSending: "Sicheres Senden läuft...",
    supportMailboxSuccessTitle: "Nachricht erfolgreich gesendet!",
    supportMailboxSuccessText: "Vielen Dank für Ihren Beitrag. Ihre Nachricht wurde sicher in unsere Verwaltungstabelle integriert und wird vom technischen Team mit tiefem Respekt analysiert. Ihr Beitrag hilft uns, die Erfahrung für alle zu verbessern.",
    supportMailboxBtnSendAnother: "Eine weitere Nachricht senden",

    // Download Output File Format
    downloadHeader: "DIE PRAXIS DER GOLDENEN REGEL",
    downloadPracticeTitle: "Titel der Reflexion: ",
    downloadDate: "Download-Datum: ",
    downloadResponsesHeader: "ANTWORTEN AUF DEN FRAGEBOGEN:",
    downloadAforismosHeader: "GENERIERTE LEITGEDANKEN UND APHORISMEN:",
    downloadNotesHeader: "PERSÖNLICHE NOTIZEN / ARBEITSTAGEBUCH:",
    downloadNotesEmpty: "Keine zusätzlichen Notizen.",
    downloadFooterQuote: "Wenn du andere so behandelst, wie du selbst behandelt werden möchtest, befreist du dich. — Silo"
  },
  pt: {
    logoTitle: "A Regra de Ouro",
    logoSubtitle: "Prática Interativa",
    tabIntro: "Introdução",
    tabPractice: "Prática",
    tabHistory: "Histórico",
    tabSupport: "Biblioteca & Links",
    themeToggleDark: "Mudar para Tema Escuro",
    themeToggleLight: "Mudar para Tema Claro",
    toastThemeChanged: "Tema alterado para: ",
    toastFormReset: "Formulário reiniciado com sucesso.",
    toastPracticeSaved: "Prática guardada com sucesso no seu histórico!",
    toastPracticeLoaded: "Prática carregada: ",
    toastPracticeDeleted: "Prática eliminada do seu histórico.",
    toastExampleLoaded: "Um exemplo resolvido completo foi carregado. Reveja o mapa e as ideias-força.",
    toastPracticeReady: "Exemplo carregado com sucesso no seu espaço de trabalho. Compare-o no mapa!",
    toastFormCheck: "Por favor, responda a pelo menos as primeiras perguntas antes de guardar.",
    toastDownloadSuccess: "Ficheiro de texto descarregado com sucesso.",
    
    // Intro section
    introTagline: "Transformação Pessoal e Não-Violência",
    introTitle: "A Prática da Regra de Ouro",
    introSubtitle: "Um caminho prático para superar a reação mecânica, compreender os seus estados internos e escolher o bom trato de forma consciente.",
    introPrivacyTitle: "🔒 Espaço 100% Seguro e Privado",
    introPrivacyText: "Este exercício é uma ferramenta de autoconhecimento estritamente pessoal. Para a sua total tranquilidade, as respostas que introduzir ao longo destes pontos não são armazenadas em nenhum servidor externo nem ficam registadas em nenhuma base de dados acessível por terceiros. Tudo o que escrever é processado de forma temporária e local no seu ecrã para o seu próprio trabalho interior. Pratique com absoluta liberdade.",
    introPrincipleTitle: "Princípio Central",
    introSiloQuote: "Quando tratas os outros como queres que te tratem, libertas-te.",
    introInspiration: "Esta prática inspira-se na Regra de Ouro do Novo Humanismo, recolhida em \"A Regra de Ouro da Não-Violência\" de Roberto Kohanoff e Isabel Lazzaroni.",
    introSiloAuthor: "— Silo, Humanismo Universalista",
    introBenefitsTitle: "A prática da Regra de Ouro ajuda-nos a:",
    introBenefits: [
      "Deter a reação compulsiva e escolher como queremos agir (resposta diferida).",
      "Compreender por que razão certas atitudes ou comportamentos dos outros nos afetam tanto.",
      "Libertar-nos de tensões internas, contradições e estados de espírito (climas) negativos.",
      "Melhorar as nossas relações, porque deixamos de pedir que o outro mude e começamos a mudar nós mesmos.",
      "Construir um estilo de vida mais coerente, mais amável e mais livre.",
      "Não se trata de ser perfeito nem de \"comportar-se bem\". Trata-se de aprender a viver com mais consciência e menos violência interna, passo a passo."
    ],
    introPurposeTitle: "Esta prática serve para:",
    introPurposes: [
      "Compreender-nos melhor e reconhecer o que nos magoa e porquê.",
      "Detetar padrões repetidos que provêm da nossa história pessoal.",
      "Quebrar a cadeia de violência interna e externa.",
      "Agir a partir das nossas melhores virtudes, não do impulso do momento.",
      "Elevar o nosso nível de consciência, o que melhora a nossa vida e a das pessoas ao nosso redor.",
      "Com o tempo, esta prática torna-se uma ferramenta para viver com mais unidade interna: pensar, sentir e agir na mesma direção.",
      "Esta aplicação irá acompanhar-te passo a passo para que possas praticá-la de forma simples, profunda e acessível. Não importa a tua idade, cultura, história ou situação atual: todos podemos aprender a viver com menos violência e mais liberdade interna."
    ],
    introExplanation: "Todas as pessoas experimentam momentos de tensão, raiva, frustração ou confusão. Às vezes reagimos de forma puramente mecânica ou compulsiva a partir de um baixo nível de consciência. Esta prática é uma ferramenta de autoconhecimento e transformação pessoal desenhada para te ajudar a deter a reação automática, compreender os teus estados internos e escolher o bom trato de forma consciente. Não é uma norma rígida nem uma obrigação moral, mas sim um caminho para uma vida com menos sofrimento, mais unidade interna e verdadeira liberdade.",
    introPurposesExtra: "Esta aplicação irá acompanhar-te passo a passo para que possas praticá-la de forma simples, profunda e acessível. Não importa a tua idade, cultura, história ou situação atual: todos podemos aprender a viver com menos violência e mais liberdade interna.",
    introBtnStart: "Iniciar Nova Prática",
    introBtnExample: "Ver um Exemplo Resolvido",

    // Practice Section
    practiceTitleLabel: "Prática em curso",
    practiceTitlePlaceholder: "Atribui um título à tua reflexão (Ex: Superação de conflito de trabalho)",
    practiceProgressLabel: "Progresso global:",
    practiceCompletedCount: " completados",
    practicePrivacyTitle: "Garantia de Confidencialidade e Privacidade Absoluta",
    practicePrivacyText: "A tua prática de reflexão é absolutamente privada. Tudo o que escreves é guardado localmente e de forma encriptada na base de dados do teu próprio navegador (localStorage). Nenhum dado pessoal, reflexão ou resposta é enviado para servidores externos ou bases de dados na nuvem. A tua intimidade emocional está completamente protegida.",
    practiceQuestionLabel: "Pergunta ",
    practiceTypeLuminous: "Espaço Luminoso",
    practiceTypeDark: "Espaço Perturbado",
    practiceTypeTransition: "Transição",
    practiceInputWordLabel: "A tua palavra ou frase curta:",
    practiceBtnPrev: "Anterior",
    practiceBtnNext: "Seguinte",
    practiceBtnLastPrompt: "Última pergunta!",
    practiceHelpPrompt: "Se não encontrares a palavra adequada, podes procurar sugestões neste painel de ajuda.",
    practiceBtnHelp: "Ver ajuda",
    practiceBtnHideHelp: "Ocultar sugestões de ajuda",
    practiceHelpSuffix: " Clica em qualquer uma destas sugestões para a selecionar:",
    practiceHelpOptional: "Também podes escrever qualquer outra palavra que represente melhor o teu sentir.",
    
    // Simultaneous Preview
    previewTitle: "Ideia-Força em Construção",
    previewMainTitle: "Aforismo Principal (Caminhos de Subida 6 + 8):",
    previewGoldenTitle: "Fórmula de Superação (Opcional I):",
    previewGoldenTemplate: "Para evitar {p2} perante {p1}, dou o trato de {p3}, fazendo {p4}.",
    previewHint: "✨ Vê como as tuas reflexões se integram dinamicamente em tempo real nestas sentenças lógicas.",

    // Workspace Actions
    actionTitle: "Queres conservar a tua sessão?",
    actionSubtitle: "Guarda as tuas respostas no teu histórico privado para as reveres mais tarde.",
    actionBtnReset: "Reiniciar",
    actionBtnSave: "Guardar Prática",
    actionResetConfirm: "Tens a certeza de que desejas reiniciar as respostas atuais? O teu rascunho ativo será perdido.",

    // Results Section
    resultsCompletedTitle: "Completaste todos os 8 pontos da prática!",
    resultsCompletedSubtitle: "A tua mente transitou da reatividade para a autoconsciência. Abaixo podes contemplar os teus aforismos finais.",
    resultsBtnSaveHistory: "Guardar no Histórico",
    resultsSynthesisTitle: "A tua síntese está a caminho",
    resultsSynthesisSubtitle: "Responde às {totalSteps} perguntas do questionário para gerares o conjunto de aforismos interativos e de superação pessoal. Atualmente levas {answeredCount} de {totalSteps}.",

    // Aforismos Display
    aforismosTitle: "As Tuas Ideias-Força e Aforismos Gerados",
    aforismosSubtitle: "Fórmulas e sentenças lógicas construídas de forma simultânea a partir da tua reflexão.",
    aforismosBtnDownload: "Descarregar Todas",
    aforismosCopiedTitle: "Copiar aforismo",
    aforismosCopiedMessage: "Aforismo copiado para a área de transferência",

    // History Section
    historyTitle: "O Teu Histórico de Práticas Guardadas",
    historySubtitle: "Aqui residem os teus trabalhos anteriores de autoconhecimento. São guardados localmente no teu próprio dispositivo.",
    historyEmptyTitle: "Histórico de Práticas Vazio",
    historyEmptyText: "Ainda não tens reflexões guardadas no teu navegador. Completa o questionário no separador Prática e clica em 'Guardar Prática' para começares a construir a tua bitácula pessoal.",
    historyBtnStartNew: "Começar Primeira Prática",
    historyCardDate: "Data de registo: ",
    historyBtnLoad: "Carregar no Espaço de Trabalho",
    historyBtnDelete: "Eliminar",
    historyDeleteConfirm: "Tens a certeza de que desejas eliminar esta prática do histórico? Esta ação não pode ser desfeita.",

    // Support Section
    supportTitle: "Biblioteca e Material de Apoio",
    supportSubtitle: "Aprofunda a tua compreensão da Regra de Ouro com as referências bibliográficas originais e o glossário de termos do Novo Humanismo.",
    supportTabExamples: "Exemplos & Testemunhos",
    supportTabGlossary: "Glossário de Termos",
    supportTabResources: "Biblioteca de Links",
    supportTabMailbox: "Caixa de Correio & Contacto",
    
    // Support Examples
    supportExamplesTitle: "Casos de Estudo e Práticas de Inspiração",
    supportExamplesSubtitle: "Reveja estes exercícios reais e anónimos resolvidos para te guiar na tua própria reflexão interior.",
    supportExamplesBtnLoad: "Carregar este Exemplo no Espaço de Trabalho",
    supportExamplesAforismoLabel: "Aforismo-chave resultante:",
    supportExamplesCommentaryLabel: "Comentário do exercício:",

    // Support Glossary
    supportGlossarySearchPlaceholder: "Procurar termo ou definição...",
    supportGlossaryEmpty: "Não foram encontrados termos para a pesquisa.",

    // Support Resources
    supportResourcesTitle: "Livros e Conferências de Consulta",
    supportResourcesSubtitle: "Acede de forma direta à literatura fundacional do pensamento humanista e à metodologia da não-violência ativa.",
    supportResourcesAuthor: "Autor: ",
    supportResourcesPublisher: "Editora: ",
    supportResourcesYear: "Ano: ",
    supportResourcesTypeBook: "Livro",
    supportResourcesTypeConference: "Conferência",
    supportResourcesTypeSpeech: "Discurso de Silo",
    supportResourcesTypeManual: "Manual",
    supportResourcesTypeVideo: "Canal de YouTube",
    supportResourcesTypePdf: "Livro em PDF",

    // Support Mailbox
    supportMailboxTitle: "Caixa de Correio e Sugestões",
    supportMailboxSubtitle: "Envia as tuas opiniões, dúvidas ou relatórios técnicos diretamente para a equipa de desenvolvimento de forma totalmente anónima.",
    supportMailboxPrivateCheckTitle: "Garantia de Anonimato Completo",
    supportMailboxPrivateCheckText: "A tua privacidade está protegida. Esta caixa de correio não recolhe o teu e-mail, o teu IP, a tua geolocalização, nem qualquer dado que te possa identificar. A mensagem é transmitida de forma encriptada diretamente para a folha de cálculo de gestão para revisão técnica e editorial. Se desejares uma resposta, por favor inclui opcionalmente um meio de contacto no final da tua mensagem.",
    supportMailboxLabelCategory: "Categoria da mensagem:",
    supportMailboxCategoryOpinion: "Opinião ou Sugestão",
    supportMailboxCategoryError: "Reportar um erro técnico",
    supportMailboxCategoryQuestion: "Dúvida conceptual ou metodológica",
    supportMailboxCategoryOther: "Outro assunto",
    supportMailboxLabelMessage: "Conteúdo da tua mensagem:",
    supportMailboxPlaceholderMessage: "Escreve aqui as tuas ideias, sugestões ou comentários com total liberdade...",
    supportMailboxBtnSend: "Enviar Mensagem Anónima",
    supportMailboxBtnSending: "A enviar de forma segura...",
    supportMailboxSuccessTitle: "Mensagem Enviada com Sucesso!",
    supportMailboxSuccessText: "Muito obrigado pela tua contribuição. A tua mensagem foi integrada de forma segura na nossa folha de cálculo de gestão e será analisada com profundo respeito pela equipa técnica. O teu contributo ajuda-nos a melhorar a experiência de todos.",
    supportMailboxBtnSendAnother: "Enviar Outra Mensagem",

    // Download Output File Format
    downloadHeader: "A PRÁTICA DA REGRA DE OURO",
    downloadPracticeTitle: "Título da reflexão: ",
    downloadDate: "Data de descarregamento: ",
    downloadResponsesHeader: "RESPOSTAS AO QUESTIONÁRIO:",
    downloadAforismosHeader: "IDEAS-FORÇA E AFORISMOS GERADOS:",
    downloadNotesHeader: "NOTAS PESSOAIS / DIÁRIO DE TRABAHO:",
    downloadNotesEmpty: "Sem notas adicionais.",
    downloadFooterQuote: "Quando tratas os outros como queres que te tratem, libertas-te. — Silo"
  }
};

export const GLOSSARY_TERMS_EN = [
  {
    term: "Aphorism",
    definition: "It is a short phrase or sentence that functions as a statement of the actions we want to put into practice to overcome the contradiction or suffering worked on during the exercise. We rely on this aphorism, reading it or repeating it whenever necessary, to remind ourselves how it is possible to escape low states of consciousness. Silo says: 'Thoughts repeated with faith produce and attract the maximum force in actions.' He adds: 'The more an action or thought is repeated, the more it is written in memory, the stronger habits become, and the more one is predisposed to future actions in that direction.'",
    tag: "Action" as const
  },
  {
    term: "Coenesthesis",
    definition: "One of the internal senses, also known as interoception (perception of the internal state of the body). It provides data regarding pressure, temperature, moisture, acidity, alkalinity, tension, relaxation, etc., and any other sensation coming from inside the body. It also registers the work of the centers (for instance, emotions, intellectual operations, etc.).",
    tag: "States" as const
  },
  {
    term: "Response Centers",
    definition: "A conceptual synthesis referring to a mechanism of the psyche that responds to the world of sensation. The response is the manifestation toward the external and/or internal environment of the center's activity. We can differentiate response centers by their activity or the function they perform. The centers are: intellectual, motor, emotive, sexual, and vegetative.",
    tag: "Methodology" as const
  },
  {
    term: "Climate (Mood)",
    definition: "We call this the emotional background in which any object takes on the characteristics of that background or mood when falling into that field. Climates can be situational, or become fixed in the psyche and disrupt the entire structure, preventing movement to other appropriate climates. Fixed climates circulate through different levels, subtracting operational freedom from consciousness.",
    tag: "States" as const
  },
  {
    term: "Compulsion",
    definition: "An intense or vehement impulse or desire to do something. In psychology, it is an uncontrollable urge to say or do something without obvious motive or reason.",
    tag: "States" as const
  },
  {
    term: "Consciousness (Levels of)",
    definition: "The different ways in which the consciousness-senses-memory-centers circuit works. According to 'Self-Liberation', we distinguish: 1) Level of deep sleep: minimal work of external senses. 2) Level of semi-sleep: increased work of external senses, but with interference from daydreams and internal sensations. 3) Level of waking: when the external senses provide the greatest flow of information, inhibiting the internal senses and making it possible to orient oneself to the world to compensate for stimuli.",
    tag: "States" as const
  },
  {
    term: "Daydreams",
    definition: "In the waking state, numerous images, ideas, and thoughts appear, separate from the main idea or thought being developed. These formalizations of stimuli, coming from other levels, the external environment, or bodily stimuli, manifest as images that pressure the waking level; we call them daydreams. They are unstable and changing and represent the greatest obstacles to the work of attention.",
    tag: "States" as const
  },
  {
    term: "Inner Guide",
    definition: "An allegory created by consciousness, embodying specific attributes: goodness, wisdom, and strength. It is highly personal. It can be one's god; it may have a religious or sacred context, or not; it can be a saintly figure, someone known in life, an inspiring historical figure, presence, force, or image. It is highly personal, and it is not for anyone to judge another's Guide.",
    tag: "Action" as const
  },
  {
    term: "Universalist Humanism",
    definition: "Also called New Humanism. It is characterized by highlighting the humanist attitude. This attitude is not a philosophy but a perspective, a sensitivity, and a way of living one's relationship with other human beings.",
    tag: "Methodology" as const
  },
  {
    term: "Kinesthesis",
    definition: "Another of the internal senses, also called proprioception (the brain's ability to know the exact position of all parts of our body at any given moment). It provides data regarding movement, body posture, and physical balance or imbalance.",
    tag: "States" as const
  },
  {
    term: "Mechanicalness",
    definition: "A repetitive, cold, unconscious, and routine attitude that turns human beings into automata, lacking reflection and empathy.",
    tag: "States" as const
  },
  {
    term: "Daydream Nucleus",
    definition: "There are daydreams of greater fixity or repetition, which, even when varying, denote the same mental climate. The main characteristic of this climate is its permanence. This fixed nucleus manifests as an image, and that image has the property of orienting the body and activities in a direction that is not noticed by consciousness.",
    tag: "States" as const
  },
  {
    term: "Biographical Knot",
    definition: "An internal conflict that appeared in childhood. Silo describes it as a 'knot of pain'. It is usually associated with a permanent and generalized climate (daydream nucleus), and without internal work, it can remain unresolved for a long time.",
    tag: "States" as const
  },
  {
    term: "Operative",
    definition: "Refers to operations that can modify, convert, or redirect behavior.",
    tag: "Action" as const
  },
  {
    term: "Formative Landscape",
    definition: "Refers to the events experienced by a human being from birth and in relation to an environment. The influence of the formative landscape is not simply given by a biographically formed intellectual perspective from which the present is observed, but is a continuous adjustment of situation based on experience. It acts as a background for interpretation and action, as a sensitivity, and as a set of beliefs and values with which an individual or generation lives.",
    tag: "Methodology" as const
  },
  {
    term: "External Landscape",
    definition: "Configuration of reality that corresponds to the perception of external senses weighted by the contents of consciousness itself. Since consciousness is an active structure and not a simple reflection of 'external' reality, the latter appears as a structured 'landscape', by no means as a sum of perceptions or as a structure isolated from external senses.",
    tag: "Methodology" as const
  },
  {
    term: "Human Landscape",
    definition: "Configuration of human reality based on the perception of the-other, society, and objects produced with intentional meaning. The human landscape is not simple object perception, but a revealing of meanings and intentions in which the human being recognizes themselves.",
    tag: "Methodology" as const
  },
  {
    term: "Internal Landscape",
    definition: "Configuration of reality corresponding to the perception of internal senses weighted by memory data and by the intentional stance of consciousness, which varies according to states of sleep, waking, emotion, etc. It is experienced in the stance of consciousness 'turned inward', having as reference the internal register of the tactile-coenesthetic limit.",
    tag: "Methodology" as const
  },
  {
    term: "Perception",
    definition: "The register of data plus the activity of the sense in motion. It is a structure: data plus the activity of the sense that abstracts and structures.",
    tag: "Methodology" as const
  },
  {
    term: "Projection",
    definition: "In psychology, a defense mechanism that consists of placing outside, whether in a person or an object, those internal attributes, desires, feelings, or aspects of ourselves that we are unable to accept.",
    tag: "States" as const
  },
  {
    term: "Register",
    definition: "The experience of sensation produced by stimuli detected by external or internal senses, including memories and images.",
    tag: "Methodology" as const
  },
  {
    term: "Representation",
    definition: "Any memory phenomenon that touches the field of presence of consciousness. Different from the memory data that can act subliminally in co-presence, and of course, from perception.",
    tag: "Methodology" as const
  },
  {
    term: "Reversibility",
    definition: "The faculty of consciousness to direct itself, through attention, to its sources of information. For example, when we speak of reversibility of thought, we refer to the ability to return to a starting point or an initial situation.",
    tag: "Methodology" as const
  }
];

export const STEPS_EN: StepConfig[] = [
  {
    id: 1,
    label: "Point 1: The mistreatment I reject",
    shortName: "Mistreatment I reject",
    question: "What is the mistreatment I reject?",
    description: "Identify that attitude, action, or behavior of others that you find violent, painful, or unacceptable. It is the external situation that disturbs your well-being.",
    helpDescription: "Select the type of mistreatment that resonates most with you, or write your own word:",
    placeholder: "e.g., Excluding, Indifference, Dismissal...",
    type: "dark",
    categories: [
      {
        categoryName: "Exclusion and Indifference",
        words: ["Excluding", "Indifference", "Ignored", "Rejection", "Isolation", "Contempt", "Neglect", "Marginality", "Invisibility"]
      },
      {
        categoryName: "Aggression and Disparagement",
        words: ["Aggression", "Insults", "Screaming", "Humiliation", "Teasing", "Dismissal", "Criticism", "Judgment", "Belittlement", "Disdain"]
      },
      {
        categoryName: "Control and Domination",
        words: ["Subjugation", "Manipulation", "Demanding", "Injustice", "Control", "Abuse of power", "Imposition", "Authoritarianism", "Lying", "Betrayal"]
      }
    ]
  },
  {
    id: 2,
    label: "Point 2: My reaction and state",
    shortName: "My reaction / state",
    question: "How do I feel and what do I do in response to that mistreatment?",
    description: "Recognize your mechanical response to Point 1. It reflects your disturbed state, the defensive, angry, or suffering response that arises automatically.",
    helpDescription: "Select how you usually react or feel in response to that disturbance:",
    placeholder: "e.g., I suffer and distance myself, I scream with rage, I blame myself...",
    type: "dark",
    categories: [
      {
        categoryName: "Withdrawal and Suffering",
        words: ["I suffer and withdraw", "I isolate myself", "I get depressed", "I shut down with rancor", "I feel guilty", "I resign myself", "I feel helpless"]
      },
      {
        categoryName: "Anger and Counterattack",
        words: ["I scream with rage", "I attack back", "I seek revenge", "I get irritated", "I complain violently", "I argue without listening", "I pay back in kind"]
      },
      {
        categoryName: "Anxiety and Paralysis",
        words: ["I feel fear and flee", "I freeze", "I get anxious", "I tense up physically", "I feel abandoned", "I seek submissive approval"]
      }
    ]
  },
  {
    id: 3,
    label: "Point 3: The treatment I ask for and give",
    shortName: "Treatment I ask / give",
    question: "What treatment do I ask from those who mistreated me so that I can give it myself?",
    description: "The opposite virtue to Point 1. It is the kind treatment that you would like to receive and that you commit to giving first, raising your level of consciousness.",
    helpDescription: "Select the inspiring kind treatment that opposes the mistreatment in Point 1:",
    placeholder: "e.g., Consideration & inclusion, Genuine appreciation, Active listening...",
    type: "luminous",
    categories: [
      {
        categoryName: "Inclusion and Welcoming",
        words: ["Consideration and inclusion", "Acceptance", "Sincere welcoming", "Attentive listening", "Recognition", "Integration", "Closeness"]
      },
      {
        categoryName: "Affection and Valuation",
        words: ["Genuine appreciation", "Deep respect", "Kindness", "Tolerance", "Mutual care", "Compassion", "Empathy", "Valuation"]
      },
      {
        categoryName: "Freedom and Peace",
        words: ["Freedom", "Absolute trust", "Unconditional support", "Justice", "Understanding", "Sincerity", "Inner peace"]
      }
    ]
  },
  {
    id: 4,
    label: "Point 4: The alternative kind treatment",
    shortName: "Alternative kind treatment",
    question: "How do I do it? (Kind treatment opposed to my reaction in Point 2)",
    description: "The opposite virtue to Point 2. It is the conscious and constructive action that you carry out instead of your usual reactive response.",
    helpDescription: "Select the virtuous action that neutralizes the negative reaction of Point 2:",
    placeholder: "e.g., I approach & appreciate others, I dialogue calmly, I set healthy boundaries...",
    type: "luminous",
    categories: [
      {
        categoryName: "Approach and Valuation",
        words: ["I approach and appreciate others", "I dialogue honestly", "I express my affection", "I accompany with patience", "I value others' virtues"]
      },
      {
        categoryName: "Calm and Serenity",
        words: ["I breathe calmly", "I listen with openness", "I act without haste", "I seek to understand before judging", "I forgive sincerely", "I reconcile"]
      },
      {
        categoryName: "Firmness and Self-Care",
        words: ["I set healthy boundaries with love", "I express myself firmly and calmly", "I value myself", "I trust my inner strength", "I open up without fear"]
      }
    ]
  },
  {
    id: 5,
    label: "Point 5: My falling path (From 3 to 2)",
    shortName: "Falling path 3 ➔ 2",
    question: "How do I fall from the virtuous treatment (3) to the mechanical reaction (2)?",
    description: "Identify what attitude, belief, fear, expectation, or vulnerability sabotages your kind intentions and makes you slide back into suffering or anger.",
    helpDescription: "Select the internal factor that makes you descend to the reactivity of Point 2:",
    placeholder: "e.g., Insecurity, Frustrated expectations, Pride...",
    type: "transition",
    direction: "down",
    fromId: 3,
    toId: 2,
    categories: [
      {
        categoryName: "Insecurity and Doubt",
        words: ["Insecurity", "Distrust", "Self-doubts", "Jealousy", "Wounded vulnerability", "Fear of rejection"]
      },
      {
        categoryName: "Expectations and Pride",
        words: ["Excessive expectations", "Wounded pride", "Soberbia/Arrogance", "Vanity", "Selfishness", "Perfectionist demands"]
      },
      {
        categoryName: "Weakness and Fear",
        words: ["Fear of failure", "Fear of pain", "Social cowardice", "Passive comfort", "Internal laziness", "Apathy"]
      }
    ]
  },
  {
    id: 6,
    label: "Point 6: My rising path (From 2 to 3)",
    shortName: "Rising path 2 ➔ 3",
    question: "How do I rise from the disturbed state (2) to the virtuous treatment (3)?",
    description: "Recognize the intentional action that allows you to raise your level of consciousness, break the loop of suffering or anger, and reconnect with virtue.",
    helpDescription: "Select the bridge that helps you return to the luminous state of Point 3:",
    placeholder: "e.g., I express what I feel and think, I become aware, I breathe...",
    type: "transition",
    direction: "up",
    fromId: 2,
    toId: 3,
    categories: [
      {
        categoryName: "Honest Communication",
        words: ["I express what I feel and think", "I ask for help with humility", "I tell what happens honestly", "I dialogue with frankness", "I speak from the heart"]
      },
      {
        categoryName: "Awareness and Reflection",
        words: ["I reflect in silence", "I realize the mechanicalness", "I breathe deeply and observe", "I accept my part", "I meditate in calm"]
      },
      {
        categoryName: "Courageous Action",
        words: ["I take the initiative to repair", "I risk myself to change", "I act with courage", "I take responsibility for myself", "I decide not to harm"]
      }
    ]
  },
  {
    id: 7,
    label: "Point 7: My falling path (From 4 to 1)",
    shortName: "Falling path 4 ➔ 1",
    question: "How do I fall from alternative kind treatment (4) to reactive mistreatment (1)?",
    description: "Identify what wears you down or frustrates you when trying to maintain kind treatment, making you lose patience and fall back into a violent or rejecting attitude.",
    helpDescription: "Select what dampens your motivation and makes you slip back into harmful behavior:",
    placeholder: "e.g., Burnout, Extreme fatigue, Frustration...",
    type: "transition",
    direction: "down",
    fromId: 4,
    toId: 1,
    categories: [
      {
        categoryName: "Fatigue and Saturation",
        words: ["Burnout", "Accumulated fatigue", "Mental saturation", "Overwhelm of routine", "Stress", "Energy depletion"]
      },
      {
        categoryName: "Frustration and Disappointment",
        words: ["Disappointment in the other", "Frustration of seeing no change", "Pessimism", "Disinterest", "Spite", "Feeling it is not worth it"]
      },
      {
        categoryName: "Impatience and Irritability",
        words: ["Impatience", "Contained rage", "Zero tolerance", "Accumulated annoyance", "Constant irritation", "Desire to punish"]
      }
    ]
  },
  {
    id: 8,
    label: "Point 8: My rising path (From 1 to 4)",
    shortName: "Rising path 1 ➔ 4",
    question: "How do I rise from the rejecting attitude/mistreatment (1) to alternative kind treatment (4)?",
    description: "Discover the deep intention or action that allows you to overcome rejection, reconcile, and commit to the constructive action of Point 4.",
    helpDescription: "Select the deep bridge that reconnects you with the benevolent treatment of Point 4:",
    placeholder: "e.g., I connect with the Human in me and others, I forgive, I feel empathy...",
    type: "transition",
    direction: "up",
    fromId: 1,
    toId: 4,
    categories: [
      {
        categoryName: "Human Connection",
        words: ["I connect with the Human in me and others", "I look at the other as an equal", "I feel empathy with their pain", "I seek what unites us, not what separates us"]
      },
      {
        categoryName: "Reconciliation and Compassion",
        words: ["I forgive and let go of rancor", "I reconcile intimately", "I feel compassion for their ignorance", "I accept that we all make mistakes"]
      },
      {
        categoryName: "Love in Action",
        words: ["I act with benevolence", "I wish others' well-being from the heart", "I seek unity and peace", "I commit to nonviolence"]
      }
    ]
  }
];

export const STEPS_FR: StepConfig[] = [
  {
    id: 1,
    label: "Point 1 : Le mauvais traitement que je rejette",
    shortName: "Mauvais traitement rejeté",
    question: "Quel est le mauvais traitement que je rejette ?",
    description: "Identifiez cette attitude, action ou comportement d'autrui que vous trouvez violent, douloureux ou inacceptable. C'est la situation externe qui perturbe votre bien-être.",
    helpDescription: "Sélectionnez le type de mauvais traitement qui résonne le plus en vous, ou écrivez votre propre mot :",
    placeholder: "Ex: Exclusion, Indifférence, Rejet...",
    type: "dark",
    categories: [
      {
        categoryName: "Exclusion et Indifférence",
        words: ["Exclusion", "Indifférence", "Ignoré", "Rejet", "Isolement", "Mépris", "Oubli", "Marginalité", "Invisibilité"]
      },
      {
        categoryName: "Agression et Dénigrement",
        words: ["Agression", "Insultes", "Cris", "Humiliation", "Moqueries", "Dénigrement", "Critique", "Jugement", "Sous-estimation", "Dédain"]
      },
      {
        categoryName: "Contrôle et Domination",
        words: ["Assujettissement", "Manipulation", "Exigence", "Injustice", "Contrôle", "Abus de pouvoir", "Imposition", "Autoritarisme", "Mensonge", "Trahison"]
      }
    ]
  },
  {
    id: 2,
    label: "Point 2 : Ma réaction et mon état",
    shortName: "Ma réaction / état",
    question: "Comment est-ce que je me sens et que fais-je face à ce mauvais traitement ?",
    description: "Reconnaissez votre réponse mécanique au Point 1. Elle reflète votre état perturbé, la réponse défensive, de colère ou de souffrance qui surgit automatiquement.",
    helpDescription: "Sélectionnez comment vous réagissez ou vous vous sentez habituellement face à cette perturbation :",
    placeholder: "Ex: Je souffre et je m'isole, Je crie de rage, Je me sens coupable...",
    type: "dark",
    categories: [
      {
        categoryName: "Retrait et Souffrance",
        words: ["Je souffre et je m'isole", "Je m'isole", "Je déprime", "Je me tais avec rancœur", "Je me sens coupable", "Je me résigne", "Je me sens impuissant"]
      },
      {
        categoryName: "Colère et Contre-attaque",
        words: ["Je crie de rage", "J'attaque en retour", "Je cherche à me venger", "Je m'irrite", "Je proteste avec violence", "Je discute sans écouter", "Je rends la monnaie de la pièce"]
      },
      {
        categoryName: "Anxiété et Paralysie",
        words: ["Je ressens de la peur et je fuis", "Je me paralyse", "Je m'angoisse", "Je me crispe physiquement", "Je me sens abandonné", "Je cherche une approbation soumise"]
      }
    ]
  },
  {
    id: 3,
    label: "Point 3 : Le traitement que je demande et que je donne",
    shortName: "Traitement demandé / donné",
    question: "Quel traitement est-ce que je demande à ceux qui m'ont maltraité afin de pouvoir le donner moi-même ?",
    description: "La vertu opposée au Point 1. C'est le traitement bienveillant que vous aimeriez recevoir et que vous vous engagez à donner en premier, élevant ainsi votre niveau de conscience.",
    helpDescription: "Sélectionnez le traitement bienveillant inspirant qui s'oppose au mauvais traitement du Point 1 :",
    placeholder: "Ex: Considération & inclusion, Appréciation sincère, Écoute active...",
    type: "luminous",
    categories: [
      {
        categoryName: "Inclusion et Accueil",
        words: ["Considération et inclusion", "Acceptation", "Accueil sincère", "Écoute attentive", "Reconnaissance", "Intégration", "Proximité"]
      },
      {
        categoryName: "Affection et Valorisation",
        words: ["Appréciation sincère", "Respect profond", "Bienveillance", "Tolérance", "Soin mutuel", "Compassion", "Empathie", "Valorisation"]
      },
      {
        categoryName: "Liberté et Paix",
        words: ["Liberté", "Confiance absolue", "Soutien inconditionnel", "Justice", "Compréhension", "Sincérité", "Paix intérieure"]
      }
    ]
  },
  {
    id: 4,
    label: "Point 4 : Le traitement bienveillant alternatif",
    shortName: "Traitement bienveillant alternatif",
    question: "Comment faire ? (Traitement bienveillant opposé à ma réaction au Point 2)",
    description: "La vertu opposée au Point 2. C'est l'action consciente et constructive que vous menez à bien au lieu de votre réponse réactive habituelle.",
    helpDescription: "Sélectionnez l'action vertueuse qui neutralise la réaction négative du Point 2 :",
    placeholder: "Ex: Je m'approche & apprécie les autres, Je dialogue calmement...",
    type: "luminous",
    categories: [
      {
        categoryName: "Approche et Valorisation",
        words: ["Je m'approche et apprécie les autres", "Je dialogue honnêtement", "J'exprime mon affection", "J'accompagne avec patience", "Je valorise les vertus d'autrui"]
      },
      {
        categoryName: "Calme et Sérénité",
        words: ["Je respire calmement", "J'écoute avec ouverture", "J'agis sans hâte", "Je cherche à comprendre avant de juger", "Je pardonne sincèrement", "Je me réconcilie"]
      },
      {
        categoryName: "Fermeté et Autoprotection",
        words: ["Je pose des limites saines avec amour", "Je m'exprime avec fermeté et calme", "Je me valorise", "Je fais confiance à ma force intérieure", "Je m'ouvre sans crainte"]
      }
    ]
  },
  {
    id: 5,
    label: "Point 5 : Mon chemin de descente (De 3 à 2)",
    shortName: "Chemin de descente 3 ➔ 2",
    question: "Comment est-ce que je tombe du traitement vertueux (3) à la réaction mécanique (2) ?",
    description: "Identifiez quelle attitude, croyance, peur, attente ou vulnérabilité sabote vos intentions bienveillantes et vous fait glisser à nouveau vers la souffrance ou la colère.",
    helpDescription: "Sélectionnez le facteur interne qui vous fait descendre vers la réactivité du Point 2 :",
    placeholder: "Ex: Insécurité, Attentes déçues, Orgueil...",
    type: "transition",
    direction: "down",
    fromId: 3,
    toId: 2,
    categories: [
      {
        categoryName: "Insécurité et Doute",
        words: ["Insécurité", "Méfiance", "Doutes de soi", "Jalousie", "Vulnérabilité blessée", "Peur du rejet"]
      },
      {
        categoryName: "Attentes et Orgueil",
        words: ["Attentes excessives", "Orgueil blessé", "Superbe/Arrogance", "Vanité", "Égoïsme", "Exigences perfectionnistes"]
      },
      {
        categoryName: "Faiblesse et Peur",
        words: ["Peur de l'échec", "Peur de la souffrance", "Lâcheté sociale", "Confort passif", "Paresse intérieure", "Apathie"]
      }
    ]
  },
  {
    id: 6,
    label: "Point 6 : Mon chemin de montée (De 2 à 3)",
    shortName: "Chemin de montée 2 ➔ 3",
    question: "Comment est-ce que je m'élève de l'état perturbé (2) au traitement vertueux (3) ?",
    description: "Reconnaissez l'action intentionnelle qui vous permet d'élever votre niveau de conscience, de briser la boucle de souffrance ou de colère, et de vous reconnecter à la vertu.",
    helpDescription: "Sélectionnez le pont qui vous aide à retourner à l'état lumineux du Point 3 :",
    placeholder: "Ex: J'exprime ce que je ressens et pense, Je prends conscience...",
    type: "transition",
    direction: "up",
    fromId: 2,
    toId: 3,
    categories: [
      {
        categoryName: "Communication Hononête",
        words: ["J'exprime ce que je ressens et pense", "Je demande de l'aide avec humilité", "Je raconte ce qui se passe honnêtement", "Je dialogue avec franchise", "Je parle avec le cœur"]
      },
      {
        categoryName: "Prise de Conscience",
        words: ["Je réfléchis en silence", "Je me rends compte de la mécanicité", "Je respire profondément et j'observe", "J'accepte ma part", "Je médite dans le calme"]
      },
      {
        categoryName: "Action Courageuse",
        words: ["Je prends l'initiative de réparer", "Je prends le risque de changer", "J'agis avec courage", "Je me responsabilise", "Je décide de ne pas nuire"]
      }
    ]
  },
  {
    id: 7,
    label: "Point 7 : Mon chemin de descente (De 4 à 1)",
    shortName: "Chemin de descente 4 ➔ 1",
    question: "Comment est-ce que je tombe du traitement bienveillant alternatif (4) au mauvais traitement réactif (1) ?",
    description: "Identifiez ce qui vous use ou vous frustre lorsque vous essayez de maintenir un traitement bienveillant, vous faisant perdre patience et retomber dans une attitude violente ou de rejet.",
    helpDescription: "Sélectionnez ce qui émousse votre motivation et vous fait glisser à nouveau vers des comportements nuisibles :",
    placeholder: "Ex: Lassitude, Fatigue extrême, Frustration...",
    type: "transition",
    direction: "down",
    fromId: 4,
    toId: 1,
    categories: [
      {
        categoryName: "Fatigue et Saturation",
        words: ["Lassitude", "Fatigue accumulée", "Saturation mentale", "Accablement de la routine", "Stress", "Épuisement énergétique"]
      },
      {
        categoryName: "Frustration et Déception",
        words: ["Déception envers l'autre", "Frustration de ne voir aucun changement", "Pessimisme", "Désintérêt", "Dépit", "Sentiment que cela n'en vaut pas la peine"]
      },
      {
        categoryName: "Impatience et Irritabilité",
        words: ["Impatience", "Colère contenue", "Tolérance zéro", "Agacement accumulé", "Irritation constante", "Désir de punir"]
      }
    ]
  },
  {
    id: 8,
    label: "Point 8 : Mon chemin de montée (De 1 à 4)",
    shortName: "Chemin de montée 1 ➔ 4",
    question: "Comment est-ce que je m'élève de l'attitude de rejet/mauvais traitement (1) au traitement bienveillant alternatif (4) ?",
    description: "Découvrez l'intention ou l'action profonde qui vous permet de surmonter le rejet, de vous réconcilier et de vous engager dans l'action constructive du Point 4.",
    helpDescription: "Sélectionnez le pont profond qui vous reconnecte au traitement bienveillant du Point 4 :",
    placeholder: "Ex: Je me connecte à l'Humain en moi et en l'autre, Je pardonne...",
    type: "transition",
    direction: "up",
    fromId: 1,
    toId: 4,
    categories: [
      {
        categoryName: "Connexion Humaine",
        words: ["Je me connecte à l'Humain en moi et en l'autre", "Je regarde l'autre comme un égal", "Je ressens de l'empathie pour sa douleur", "Je cherche ce qui nous unit, non ce qui nous sépare"]
      },
      {
        categoryName: "Réconciliation et Compassion",
        words: ["Je pardonne et libère la rancœur", "Je me réconcilie intimement", "Je ressens de la compassion pour son ignorance", "J'accepte que nous faisons tous des erreurs"]
      },
      {
        categoryName: "Amour en Action",
        words: ["J'agis avec bienveillance", "Je souhaite le bien d'autrui de tout cœur", "Je cherche l'unité et la paix", "Je m'engage dans la non-violence"]
      }
    ]
  }
];

export const STEPS_DE: StepConfig[] = [
  {
    id: 1,
    label: "Punkt 1: Die Fehlbehandlung, die ich ablehne",
    shortName: "Abgelehnte Fehlbehandlung",
    question: "Welche Fehlbehandlung lehne ich ab?",
    description: "Identifizieren Sie jene Haltung, Handlung oder Verhaltensweise anderer, die Sie als gewalttätig, schmerzhaft oder inakzeptabel empfinden. Es ist die äußere Situation, die Ihr Wohlbefinden stört.",
    helpDescription: "Wählen Sie die Art der Fehlbehandlung aus, die Sie am meisten anspricht, oder schreiben Sie Ihr eigenes Wort:",
    placeholder: "z.B. Ausgrenzung, Gleichgültigkeit, Abwertung...",
    type: "dark",
    categories: [
      {
        categoryName: "Ausgrenzung und Gleichgültigkeit",
        words: ["Ausgrenzung", "Gleichgültigkeit", "Ignoriert-Werden", "Ablehnung", "Isolierung", "Verachtung", "Vernachlässigung", "Marginalisierung", "Unsichtbarkeit"]
      },
      {
        categoryName: "Aggression und Abwertung",
        words: ["Aggression", "Beleidigungen", "Schreien", "Demütigung", "Spott", "Abwertung", "Kritik", "Verurteilung", "Herabsetzung", "Geringschätzung"]
      },
      {
        categoryName: "Kontrolle und Dominanz",
        words: ["Unterwerfung", "Manipulation", "Forderung", "Ungerechtigkeit", "Kontrolle", "Machtmissbrauch", "Auferlegung", "Autoritarismus", "Lüge", "Verrat"]
      }
    ]
  },
  {
    id: 2,
    label: "Punkt 2: Meine Reaktion und mein Zustand",
    shortName: "Meine Reaktion / Zustand",
    question: "Wie fühle ich mich und was tue ich als Reaktion auf diese Fehlbehandlung?",
    description: "Erkennen Sie Ihre mechanische Reaktion auf Punkt 1. Sie spiegelt Ihren gestörten Zustand wider – die defensive, wütende oder leidende Reaktion, die automatisch entsteht.",
    helpDescription: "Wählen Sie aus, wie Sie gewöhnlich auf diese Störung reagieren oder sich dabei fühlen:",
    placeholder: "z.B. Ich leide und ziehe mich zurück, Ich schreie vor Wut, Ich gebe mir die Schuld...",
    type: "dark",
    categories: [
      {
        categoryName: "Rückzug und Leiden",
        words: ["Ich leide und ziehe mich zurück", "Ich isoliere mich", "Ich werde depressiv", "Ich schweige voller Groll", "Ich fühle mich schuldig", "Ich resigniere", "Ich fühle mich hilflos"]
      },
      {
        categoryName: "Wut und Gegenangriff",
        words: ["Ich schreie vor Wut", "Ich greife zurück an", "Ich suche Rache", "Ich werde gereizt", "Ich beklage mich heftig", "Ich streite, ohne zuzuhören", "Ich zahle mit gleicher Münze heim"]
      },
      {
        categoryName: "Angst und Lähmung",
        words: ["Ich fühle Angst und fliehe", "Ich erstarre", "Ich werde ängstlich", "Ich verkrampfe mich körperlich", "Ich fühle mich schutzlos", "Ich suche unterwürfige Anerkennung"]
      }
    ]
  },
  {
    id: 3,
    label: "Punkt 3: Die Behandlung, um die ich bitte und die ich gebe",
    shortName: "Erbatene / gegebene Behandlung",
    question: "Um welche Behandlung bitte ich diejenigen, die mich fehlbehandelt haben, damit ich sie selbst geben kann?",
    description: "Die gegenteilige Tugend zu Punkt 1. Es ist die gütige Behandlung, die Sie gerne erhalten würden und die Sie sich verpflichtet, zuerst zu geben, um Ihr Bewusstseinsniveau zu erhöhen.",
    helpDescription: "Wählen Sie die inspirierende gütige Behandlung aus, die der Fehlbehandlung in Punkt 1 entgegensteht:",
    placeholder: "z.B. Rücksicht & Einbeziehung, Aufrichtige Wertschätzung, Aktives Zuhören...",
    type: "luminous",
    categories: [
      {
        categoryName: "Einbeziehung und Annahme",
        words: ["Rücksicht und Einbeziehung", "Akzeptanz", "Aufrichtige Annahme", "Aufmerksames Zuhören", "Anerkennung", "Integration", "Nähe"]
      },
      {
        categoryName: "Zuneigung und Wertschätzung",
        words: ["Aufrichtige Wertschätzung", "Tiefen Respekt", "Freundlichkeit", "Toleranz", "Gegenseitige Fürsorge", "Mitgefühl", "Empathie", "Wertschätzung"]
      },
      {
        categoryName: "Freiheit und Frieden",
        words: ["Freiheit", "Absolutes Vertrauen", "Bedingungslose Unterstützung", "Gerechtigkeit", "Verständnis", "Aufrichtigkeit", "Inneren Frieden"]
      }
    ]
  },
  {
    id: 4,
    label: "Punkt 4: Die alternative gütige Behandlung",
    shortName: "Alternative gütige Behandlung",
    question: "Wie mache ich es? (Gütige Behandlung im Gegensatz zu meiner Reaktion in Punkt 2)",
    description: "Die gegenteilige Tugend zu Punkt 2. Es ist die gütige und konstruktive Handlung, die Sie anstelle Ihrer üblichen reaktiven Antwort ausführen.",
    helpDescription: "Wählen Sie die tugendhafte Handlung aus, die die negative Reaktion aus Punkt 2 neutralisiert:",
    placeholder: "z.B. Ich gehe auf andere zu & schätze sie, Ich dialogisiere ruhig...",
    type: "luminous",
    categories: [
      {
        categoryName: "Annäherung und Wertschätzung",
        words: ["Ich gehe auf andere zu und schätze sie", "Ich dialogisiere ehrlich", "Ich drücke meine Zuneigung aus", "Ich begleite mit Geduld", "Ich schätze die Tugenden anderer"]
      },
      {
        categoryName: "Ruhe und Gelassenheit",
        words: ["Ich atme ruhig", "Ich höre mit Offenheit zu", "Ich handle ohne Eile", "Ich suche zu verstehen, bevor ich urteile", "Ich vergebe aufrichtig", "Ich versöhne mich"]
      },
      {
        categoryName: "Festigkeit und Selbstfürsorge",
        words: ["Ich setze gesunde Grenzen mit Liebe", "Ich drücke mich bestimmt und ruhig aus", "Ich schätze mich selbst", "Ich vertraue auf meine innere Kraft", "Ich öffne mich ohne Angst"]
      }
    ]
  },
  {
    id: 5,
    label: "Punkt 5: Mein absteigender Pfad (Von 3 nach 2)",
    shortName: "Absteigender Pfad 3 ➔ 2",
    question: "Wie falle ich von der tugendhaften Behandlung (3) in die mechanische Reaktion (2) zurück?",
    description: "Identifizieren Sie, welche Einstellung, welcher Glaube, welche Angst, welche Erwartung oder welche Verwundbarkeit Ihre gütigen Absichten sabotiert und Sie wieder in Leiden oder Wut abgleiten lässt.",
    helpDescription: "Wählen Sie den inneren Faktor, der Sie zur Reaktivität von Punkt 2 absteigen lässt:",
    placeholder: "z.B. Unsicherheit, Enttäuschte Erwartungen, Stolz...",
    type: "transition",
    direction: "down",
    fromId: 3,
    toId: 2,
    categories: [
      {
        categoryName: "Unsicherheit und Zweifel",
        words: ["Unsicherheit", "Misstrauen", "Selbstzweifel", "Eifersucht", "Verletzte Verwundbarkeit", "Angst vor Ablehnung"]
      },
      {
        categoryName: "Erwartungen und Stolz",
        words: ["Übermäßige Erwartungen", "Verletzter Stolz", "Stolz/Arroganz", "Eitelkeit", "Egoismus", "Perfektionistische Ansprüche"]
      },
      {
        categoryName: "Schwäche und Angst",
        words: ["Angst vor dem Scheitern", "Angst vor Schmerz", "Soziale Feigheit", "Passive Bequemlichkeit", "Innere Trägheit", "Apathie"]
      }
    ]
  },
  {
    id: 6,
    label: "Punkt 6: Mein aufsteigender Pfad (Von 2 nach 3)",
    shortName: "Aufsteigender Pfad 2 ➔ 3",
    question: "Wie erhebe ich mich aus dem gestörten Zustand (2) zur tugendhaften Behandlung (3)?",
    description: "Erkennen Sie die absichtliche Handlung, die es Ihnen ermöglicht, Ihr Bewusstseinsniveau zu erhöhen, die Schleife von Leiden oder Wut zu durchbrechen und sich wieder mit der Tugend zu verbinden.",
    helpDescription: "Wählen Sie die Brücke, die Ihnen hilft, in den lichten Zustand von Punkt 3 zurückzukehren:",
    placeholder: "z.B. Ich drücke aus, was ich fühle und denke, Ich werde mir bewusst...",
    type: "transition",
    direction: "up",
    fromId: 2,
    toId: 3,
    categories: [
      {
        categoryName: "Ehrliche Kommunikation",
        words: ["Ich drücke aus, was ich fühle und denke", "Ich bitte mit Demut um Hilfe", "Ich erzähle ehrlich, was los ist", "Ich dialogisiere mit Offenheit", "Ich spreche von Herzen"]
      },
      {
        categoryName: "Bewusstsein und Reflexion",
        words: ["Ich reflektiere in Stille", "Ich erkenne die Mechanik", "Ich atme tief durch und beobachte", "Ich akzeptiere meinen Teil", "Ich meditiere in aller Ruhe"]
      },
      {
        categoryName: "Mutiges Handeln",
        words: ["Ich ergreife die Initiative zur Wiedergutmachung", "Ich riskiere es, mich zu verändern", "Ich handle mit Mut", "Ich übernehme Verantwortung für mich", "Ich entscheide mich, nicht zu schaden"]
      }
    ]
  },
  {
    id: 7,
    label: "Punkt 7: Mein absteigender Pfad (Von 4 nach 1)",
    shortName: "Absteigender Pfad 4 ➔ 1",
    question: "Wie falle ich von der alternativen gütigen Behandlung (4) in die reaktive Fehlbehandlung (1) zurück?",
    description: "Identifizieren Sie, was Sie ermüdet oder frustriert, wenn Sie versuchen, eine gütige Behandlung aufrechtzuerhalten, sodass Sie die Geduld verlieren und wieder in eine gewalttätige oder ablehnende Haltung verfallen.",
    helpDescription: "Wählen Sie aus, was Ihre Motivation dämpft und Sie wieder in schädliche Verhaltensweisen abgleiten lässt:",
    placeholder: "z.B. Erschöpfung, Extreme Müdigkeit, Frustration...",
    type: "transition",
    direction: "down",
    fromId: 4,
    toId: 1,
    categories: [
      {
        categoryName: "Müdigkeit und Sättigung",
        words: ["Erschöpfung", "Angestaute Müdigkeit", "Mentale Sättigung", "Überforderung durch Routine", "Stress", "Energieverlust"]
      },
      {
        categoryName: "Frustration und Enttäuschung",
        words: ["Enttäuschung über den anderen", "Frustration, keine Veränderung zu sehen", "Pessimismus", "Desinteresse", "Groll/Trotz", "Das Gefühl, dass es sich nicht lohnt"]
      },
      {
        categoryName: "Ungeduld und Reizbarkeit",
        words: ["Ungeduld", "Unterdrückte Wut", "Null Toleranz", "Angestauter Ärger", "Ständige Reizung", "Wunsch zu bestrafen"]
      }
    ]
  },
  {
    id: 8,
    label: "Punkt 8: Mein aufsteigender Pfad (Von 1 nach 4)",
    shortName: "Aufsteigender Pfad 1 ➔ 4",
    question: "Wie erhebe ich mich aus der ablehnenden Haltung/Fehlbehandlung (1) zur alternativen gütigen Behandlung (4)?",
    description: "Entdecken Sie die tiefe Absicht oder Handlung, die es Ihnen ermöglicht, Ablehnung zu überwinden, sich zu versöhnen und sich auf die konstruktive Handlung von Punkt 4 einzulassen.",
    helpDescription: "Wählen Sie die tiefe Brücke aus, die Sie wieder mit der wohlwollenden Behandlung von Punkt 4 verbindet:",
    placeholder: "z.B. Ich verbinde mich mit dem Menschlichen in mir und anderen, Ich vergebe...",
    type: "transition",
    direction: "up",
    fromId: 1,
    toId: 4,
    categories: [
      {
        categoryName: "Menschliche Verbindung",
        words: ["Ich verbinde mich mit dem Menschlichen in mir und anderen", "Ich betrachte den anderen als ebenbürtig", "Ich fühle Empathie für seinen Schmerz", "Ich suche das, was uns verbindet, nicht was uns trennt"]
      },
      {
        categoryName: "Versöhnung und Mitgefühl",
        words: ["Ich vergebe und lasse den Groll los", "Ich versöhne mich innerlich zutiefst", "Ich empfinde Mitgefühl für seine Unwissenheit", "Ich akzeptiere, dass wir alle Fehler machen"]
      },
      {
        categoryName: "Liebe in Aktion",
        words: ["Ich handle mit Wohlwollen", "Ich wünsche dem anderen von Herzen alles Gute", "Ich suche Einheit und Frieden", "Ich verpflichte mich zur Gewaltfreiheit"]
      }
    ]
  }
];

export const STEPS_PT: StepConfig[] = [
  {
    id: 1,
    label: "Ponto 1: O maltrato que rejeito",
    shortName: "Maltrato que rejeito",
    question: "Qual é o maltrato que rejeito?",
    description: "Identifique aquela atitude, ação ou comportamento alheio que considera violento, doloroso ou inaceitável. É a situação externa que perturba o seu bem-estar.",
    helpDescription: "Selecione o tipo de maltrato que mais ressoa consigo, ou escreva a sua própria palavra:",
    placeholder: "Ex: Exclusão, Indiferença, Desqualificação...",
    type: "dark",
    categories: [
      {
        categoryName: "Exclusão e Indiferença",
        words: ["Exclusão", "Indiferença", "Ignorado", "Rejeição", "Isolamento", "Desprezo", "Esquecimento", "Marginalidade", "Invisibilidade"]
      },
      {
        categoryName: "Agressão e Desqualificação",
        words: ["Agressão", "Insultos", "Gritos", "Humilhação", "Burlas", "Desqualificação", "Crítica", "Julgamento", "Menosprezo", "Desdém"]
      },
      {
        categoryName: "Controlo e Dominação",
        words: ["Submissão", "Manipulação", "Exigência", "Injustiça", "Controlo", "Abuso de poder", "Imposição", "Autoritarismo", "Mentira", "Traição"]
      }
    ]
  },
  {
    id: 2,
    label: "Ponto 2: Minha reação e estado",
    shortName: "Minha reação / estado",
    question: "Como me sinto e o que faço face a esse maltrato?",
    description: "Reconheça a sua resposta mecânica perante o Ponto 1. Reflete o seu estado perturbado, a resposta defensiva, de raiva ou de sofrimento que surge automaticamente.",
    helpDescription: "Selecione como costuma reagir ou sentir-se perante essa perturbação:",
    placeholder: "Ex: Sofro e afasto-me, Grito com fúria, Culpo-me...",
    type: "dark",
    categories: [
      {
        categoryName: "Retraimento e Sofrimento",
        words: ["Sofro e afasto-me", "Isolo-me", "Fico deprimido", "Calo-me com rancor", "Sinto culpa", "Resigno-me", "Sinto-me impotente"]
      },
      {
        categoryName: "Raiva e Contra-ataque",
        words: ["Grito com fúria", "Ataco de volta", "Busco vingança", "Irrito-me", "Reclamo com violência", "Discuto sem escutar", "Pago com a mesma moeda"]
      },
      {
        categoryName: "Ansiedade e Paralisia",
        words: ["Sinto medo e fujo", "Paraliso-me", "Fico angustiado", "Tensiono-me corporalmente", "Sinto desamparo", "Busco aprovação submissa"]
      }
    ]
  },
  {
    id: 3,
    label: "Ponto 3: O trato que peço e dou",
    shortName: "O trato que peço / dou",
    question: "Que trato peço a quem me maltratou para eu próprio o dar?",
    description: "A virtude oposta ao Ponto 1. É o bom trato que gostaria de receber e que se compromete a dar primeiro, elevando o seu nível de consciência.",
    helpDescription: "Selecione o bom trato inspirador que se opõe ao maltrato do Ponto 1:",
    placeholder: "Ex: Consideração & inclusão, Apreço genuíno, Escuta ativa...",
    type: "luminous",
    categories: [
      {
        categoryName: "Inclusão e Acolhimento",
        words: ["Consideração e inclusão", "Aceitação", "Acolhimento sincero", "Escuta atenta", "Reconhecimento", "Integração", "Proximidade"]
      },
      {
        categoryName: "Afeto e Valorização",
        words: ["Apreço genuíno", "Respeito profundo", "Amabilidade", "Tolerância", "Cuidado mútuo", "Compaixão", "Empatia", "Valorização"]
      },
      {
        categoryName: "Liberdade e Paz",
        words: ["Liberdade", "Confiança absoluta", "Apoio incondicional", "Justiça", "Compreensão", "Sinceridade", "Paz interior"]
      }
    ]
  },
  {
    id: 4,
    label: "Ponto 4: O bom trato alternativo",
    shortName: "Bom trato alternativo",
    question: "Como o faço? (Bom trato oposto à minha reação do Ponto 2)",
    description: "A virtude oposta ao Ponto 2. É a ação consciente e construtiva que realiza em vez da sua reação mecânica habitual.",
    helpDescription: "Selecione a ação virtuosa que neutraliza a reação negativa do Ponto 2:",
    placeholder: "Ex: Aproximo-me & aprecio os outros, Dialogo com calma...",
    type: "luminous",
    categories: [
      {
        categoryName: "Aproximação e Valorização",
        words: ["Aproximo-me e aprecio os outros", "Dialogo com honestidade", "Expresso o meu afeto", "Acompanho com paciência", "Valoro as virtudes do outro"]
      },
      {
        categoryName: "Calma e Serenidade",
        words: ["Respiro com calma", "Escuto com abertura", "Ajo sem pressa", "Procuro compreender antes de julgar", "Perdoo sinceramente", "Reconcilio-me"]
      },
      {
        categoryName: "Firmeza e Autocuidado",
        words: ["Defino limites saudáveis com amor", "Expresso-me com firmeza e calma", "Valoro-me a mim mesmo", "Confio na minha força interior", "Abro-me sem medo"]
      }
    ]
  },
  {
    id: 5,
    label: "Ponto 5: Meu caminho de queda (De 3 para 2)",
    shortName: "Caminho de queda 3 ➔ 2",
    question: "Como caio do trato virtuoso (3) para a reação mecânica (2)?",
    description: "Identifique que atitude, crença, temor, expectativa ou vulnerabilidade sabota as suas boas intenções de trato e o faz cair de novo no sofrimento ou raiva.",
    helpDescription: "Selecione o fator interno que o faz descender para a reatividade do Ponto 2:",
    placeholder: "Ex: Insegurança, Expectativas frustradas, Orgulho...",
    type: "transition",
    direction: "down",
    fromId: 3,
    toId: 2,
    categories: [
      {
        categoryName: "Insegurança e Dúvida",
        words: ["Insegurança", "Desconfiança", "Dúvidas sobre mim mesmo", "Ciúmes", "Vulnerabilidade ferida", "Temor de rejeição"]
      },
      {
        categoryName: "Expectativas e Orgulho",
        words: ["Expectativas excessivas", "Orgulho ferido", "Soberba/Arrogância", "Vaidade", "Egoísmo", "Exigência perfeccionista"]
      },
      {
        categoryName: "Fraqueza e Medo",
        words: ["Medo de falhar", "Medo da dor", "Cobardia social", "Comodismo passivo", "Preguiça interna", "Apatia"]
      }
    ]
  },
  {
    id: 6,
    label: "Ponto 6: Meu caminho de subida (De 2 para 3)",
    shortName: "Caminho de subida 2 ➔ 3",
    question: "Como subo do estado perturbado (2) para o trato virtuoso (3)?",
    description: "Reconheça a ação intencional que lhe permite elevar o seu nível de consciência, quebrar o ciclo de sofrimento ou raiva e reconectar-se com a virtude.",
    helpDescription: "Selecione a ponte que o ajuda a voltar ao estado luminoso do Ponto 3:",
    placeholder: "Ex: Expresso o que sinto e penso, Tomo consciência...",
    type: "transition",
    direction: "up",
    fromId: 2,
    toId: 3,
    categories: [
      {
        categoryName: "Comunicação Honesta",
        words: ["Expresso o que sinto e penso", "Peço ajuda com humildade", "Digo o que se passa com honestidade", "Dialogo com franqueza", "Falo a partir do coração"]
      },
      {
        categoryName: "Consciência e Reflexão",
        words: ["Reflicto em silêncio", "Dou-me conta da mecanicidade", "Respiro fundo e observo", "Aceito a minha parte", "Medito em calma"]
      },
      {
        categoryName: "Ação Corajosa",
        words: ["Tomo a iniciativa para reparar", "Arrisco-me a mudar", "Ajo com coragem", "Responsabilizo-me por mim", "Decido não causar dano"]
      }
    ]
  },
  {
    id: 7,
    label: "Ponto 7: Meu caminho de queda (De 4 para 1)",
    shortName: "Caminho de queda 4 ➔ 1",
    question: "Como caio do bom trato alternativo (4) para o maltrato reativo (1)?",
    description: "Identifique o que o desgasta ou frustra quando tenta manter um bom trato, fazendo-o perder a paciência e cair de novo numa atitude violenta ou de rejeição.",
    helpDescription: "Selecione o que desgasta a sua motivação e o faz cair de novo em condutas nocivas:",
    placeholder: "Ex: Saturação, Cansaço extremo, Frustração...",
    type: "transition",
    direction: "down",
    fromId: 4,
    toId: 1,
    categories: [
      {
        categoryName: "Cansaço e Saturação",
        words: ["Saturação", "Cansaço acumulado", "Saturação mental", "Sobrecarga da rotina", "Stresse", "Desgaste de energia"]
      },
      {
        categoryName: "Frustração e Deceção",
        words: ["Deceção com o outro", "Frustração por não ver mudanças", "Pessimismo", "Desinteresse", "Rancor", "Sinto que não vale a pena"]
      },
      {
        categoryName: "Impaciência e Irritabilidade",
        words: ["Impaciência", "Ira contida", "Tolerância zero", "Aborrecimento acumulado", "Irritação constante", "Vontade de castigar"]
      }
    ]
  },
  {
    id: 8,
    label: "Ponto 8: Meu caminho de subida (De 1 para 4)",
    shortName: "Caminho de subida 1 ➔ 4",
    question: "Como subo da atitude de rejeição/maltrato (1) para o bom trato alternativo (4)?",
    description: "Descubra a intenção ou ação profunda que lhe permite superar a rejeição, reconciliar-se e comprometer-se com a ação construtiva do Ponto 4.",
    helpDescription: "Selecione a ponte profunda que o reconecta com o trato benevolente do Ponto 4:",
    placeholder: "Ex: Conecto-me com o Humano em mim e nos outros, Perdoo...",
    type: "transition",
    direction: "up",
    fromId: 1,
    toId: 4,
    categories: [
      {
        categoryName: "Conexão Humana",
        words: ["Conecto-me com o Humano em mim e nos outros", "Miro o outro como um igual", "Sinto empatia com a sua dor", "Procuro o que nos une e não o que nos separa"]
      },
      {
        categoryName: "Reconciliação e Compaixão",
        words: ["Perdoo e liberto o rancor", "Reconcilio-me intimamente", "Sinto compaixão pela sua ignorância", "Aceito que todos falhamos"]
      },
      {
        categoryName: "Amor em Ação",
        words: ["Ajo com benevolência", "Desejo o bem-estar alheio de coração", "Procuro a unidade e a paz", "Comprometo-me com a não-violência"]
      }
    ]
  }
];

export const RESOURCES_LIST_EN = [
  {
    type: "Book",
    title: "La Regla de Oro de la No Violencia",
    author: "Roberto Kohanoff and Isabel Lazzaroni",
    publisher: "Ediciones León Alado",
    year: "2023",
    description: "Over the course of more than 30 years, the authors have investigated, studied, experimented, and deepened the Golden Rule: \"If you treat others as you want to be treated, you liberate yourself\", to escape the climate of complaint they saw in themselves and others. From these studies arose an exercise that helps us offer others the treatment we want for ourselves. This is what is embodied in this book, where there are explanations, examples, and guidelines for any interested person.",
    url: "http://edicionesleonalado.net"
  },
  {
    type: "Book",
    title: "The Inner Look",
    author: "Silo",
    publisher: "Editorial ATE, Barcelona",
    year: "1979",
    description: "The foundational work of Silo's thought, inviting deep introspection and an encounter with the meaning of human existence."
  },
  {
    type: "Book",
    title: "Silo's Message",
    author: "Silo",
    publisher: "Editorial EDAF, Madrid",
    year: "2008",
    description: "Synthesizes the spiritual dimension of his thought, proposing a path of faith, reconciliation, and inner realization."
  },
  {
    type: "Book",
    title: "Dictionary of New Humanism",
    author: "Silo",
    publisher: "Ediciones León Alado, Madrid",
    year: "2014",
    description: "Indispensable reference tool to understand the social, philosophical, and anthropological terminology of New Humanism."
  },
  {
    type: "Conference",
    title: "Comments on the Golden Rule",
    author: "Silo",
    year: "December 17, 1995",
    description: "Lecture delivered in Mendoza, Argentina, detailing the scope of reciprocity and the laws of valid action in daily life."
  },
  {
    type: "Arenga",
    title: "The Healing of Suffering",
    author: "Silo",
    year: "May 4, 1969",
    description: "Address delivered by Silo in Punta de Vacas, Mendoza, Argentina, which laid the foundations for overcoming violence and pain."
  },
  {
    type: "Book",
    title: "Self-Liberation",
    author: "L.A. Ammann",
    publisher: "Editorial ATE, Barcelona",
    year: "1980",
    description: "A structured compendium of self-knowledge, relaxation, and psychophysical techniques essential for the practitioner."
  },
  {
    type: "Book",
    title: "Psychology Notes",
    author: "Silo",
    publisher: "Ediciones León Alado, Madrid",
    year: "2014",
    description: "In-depth study of the human psyche, representations, and levels of consciousness, giving a scientific framework to reflective work."
  },
  {
    type: "Book",
    title: "Learn to resist the violence within and around you",
    author: "H. Roig, D. Tormen, and M. Barberena",
    publisher: "Edited by Deborah Tormen, Buenos Aires",
    year: "2006",
    description: "An excellent manual with practical dynamics and rigorous exercises directly applying the Golden Rule."
  },
  {
    type: "Conference",
    title: "The Conditions of Dialogue",
    author: "Silo",
    year: "October 6, 1993",
    description: "Lecture delivered at the Moscow Academy of Sciences, Russia, exploring the keys to truly nonviolent communication."
  },
  {
    type: "Conference",
    title: "Mission of the '80s",
    author: "Silo",
    year: "September 27, 1981",
    description: "Lecture delivered in Madrid, Spain, analyzing the collective challenges of active nonviolence against militarism."
  },
  {
    type: "Book",
    title: "Letters to my friends",
    author: "Silo",
    publisher: "Ediciones León Alado, Madrid",
    year: "2013",
    description: "Fundamental epistolary reflections on the simultaneous personal and social transformation required to change the world."
  },
  {
    type: "Book",
    title: "The Day of the Winged Lion",
    author: "Silo",
    publisher: "Ediciones León Alado, Madrid",
    year: "2013",
    description: "Allegorical literary stories that inspiringly portray elevated states of consciousness and existential meaning."
  },
  {
    type: "Manual",
    title: "Manual of formative topics and practices for messengers",
    author: "Various Authors",
    publisher: "Ediciones León Alado, Madrid",
    description: "Practical manual gathering the main study, meditation, and humanist action dynamics for the Message practitioners."
  },
  {
    type: "YouTube Channel",
    title: "León Alado YouTube Channel",
    description: "Videos of practices with the Golden Rule, lectures by Silo, and valuable complementary educational audiovisual material.",
    url: "https://www.youtube.com/@leonalado7780/videos"
  },
  {
    type: "PDF Book",
    title: "Learn to resist violence (Digital)",
    description: "Link to view and read online the complete book edited by Deborah Tormen.",
    url: "https://psicologiadelnuevohumanismo.org"
  }
];

export const EXAMPLES_LIST_EN = [
  {
    id: "ex1",
    title: "Anonymous Exercise Example 1",
    subtitle: "Anonymous Woman — Mistreatment and 'Harmers'",
    description: "In this example of an anonymous woman, the mistreatment she rejects is from 'those who do harm just because', whom she calls the harmers (point 1). In front of them, she feels fear, doesn't want to bother, and prefers to go unnoticed. She identifies as fearful (point 2).",
    answers: {
      1: "The harmers (harm just because)",
      2: "Fearful (fear, going unnoticed)",
      3: "To be cared for (emplacing myself as caretaker)",
      4: "Calming them down",
      5: "Self-devaluation (thinking I am not needed)",
      6: "Surrender and availability",
      7: "Mental noise (neither thinking nor realizing)",
      8: "Meditation, attention"
    },
    aforismo: "I take care (of myself and others) by calming down, available and attentive.",
    commentary: "This exercise illustrates the conversion of images: to avoid reacting with fear in front of the harmers (who are a projection of her own harmer), she needs to emplace herself as good and caring, seeking to calm them down."
  },
  {
    id: "ex2",
    title: "Anonymous Exercise Example 2, on Expectations",
    subtitle: "Expectations, prudence, and direction",
    description: "Before a given situation, sometimes I act in an foolish way (point 1) and other times I freeze out of cowardice (point 2) and I never know when I'm going to emplace myself in one 'role' or the opposite.",
    answers: {
      1: "Acting in a foolish way",
      2: "Freezing out of cowardice",
      3: "That the foolish one be prudent",
      4: "Behaving with courage",
      5: "Fear",
      6: "Serenity",
      7: "Gross desires",
      8: "Elevating the desire"
    },
    aforismo: "I act with direction instead of expectations, gaining serenity and elevating desire.",
    commentary: "It shows us that behavioral expectations disappear when we are in our center of gravity. We stop waiting for the other to change —or for ourselves to behave in a certain way— and we change ourselves, directing our actions and becoming protagonists."
  }
];

// Helper to format aphorisms in Spanish/English dynamically

export const ENGLISH_P1_MAP: Record<string, string> = {
  "excluding": "excluding behavior",
  "indifference": "indifference",
  "ignored": "being ignored",
  "rejection": "rejection",
  "isolation": "isolation",
  "contempt": "contempt",
  "neglect": "neglect",
  "marginality": "marginality",
  "invisibility": "invisibility",
  "aggression": "aggression",
  "insults": "insults",
  "screaming": "screaming",
  "humiliation": "humiliation",
  "teasing": "teasing",
  "dismissal": "dismissal",
  "criticism": "criticism",
  "judgment": "judgment",
  "belittlement": "belittlement",
  "disdain": "disdain",
  "subjugation": "subjugation",
  "manipulation": "manipulation",
  "demanding": "demanding behavior",
  "injustice": "injustice",
  "control": "control",
  "abuse of power": "abuse of power",
  "imposition": "imposition",
  "authoritarianism": "authoritarianism",
  "lying": "lying",
  "betrayal": "betrayal"
};

export const ENGLISH_ING_MAP: Record<string, string> = {
  // Point 2
  "i suffer and withdraw": "suffering and withdrawing",
  "i isolate myself": "isolating myself",
  "i get depressed": "getting depressed",
  "i shut down with rancor": "shutting down with rancor",
  "i feel guilty": "feeling guilty",
  "i resign myself": "resigning myself",
  "i feel helpless": "feeling helpless",
  "i scream with rage": "screaming with rage",
  "i attack back": "attacking back",
  "i seek revenge": "seeking revenge",
  "i get irritated": "getting irritated",
  "i complain violently": "complaining violently",
  "i argue without listening": "arguing without listening",
  "i pay back in kind": "paying back in kind",
  "i feel fear and flee": "feeling fear and fleeing",
  "i freeze": "freezing",
  "i get anxious": "getting anxious",
  "i tense up physically": "tensing up physically",
  "i feel abandoned": "feeling abandoned",
  "i seek submissive approval": "seeking submissive approval",
  
  // Point 4
  "i approach and appreciate others": "approaching and appreciating others",
  "i dialogue honestly": "dialoguing honestly",
  "i express my affection": "expressing my affection",
  "i accompany with patience": "accompanying with patience",
  "i value others' virtues": "valuing others' virtues",
  "i breathe calmly": "breathing calmly",
  "i listen with openness": "listening with openness",
  "i act without haste": "acting without haste",
  "i seek to understand before judging": "seeking to understand before judging",
  "i forgive sincerely": "forgiving sincerely",
  "i reconcile": "reconciling",
  "i set healthy boundaries with love": "setting healthy boundaries with love",
  "i express myself firmly and calmly": "expressing myself firmly and calmly",
  "i value myself": "valuing myself",
  "i trust my inner strength": "trusting my inner strength",
  "i open up without fear": "opening up without fear",
  
  // Point 6
  "i express what i feel and think": "expressing what I feel and think",
  "i ask for help with humility": "asking for help with humility",
  "i tell what happens honestly": "telling what happens honestly",
  "i dialogue with frankness": "dialoguing with frankness",
  "i speak from the heart": "speaking from the heart",
  "i reflect in silence": "reflecting in silence",
  "i realize the mechanicalness": "realizing the mechanicalness",
  "i breathe deeply and observe": "breathing deeply and observing",
  "i accept my part": "accepting my part",
  "i meditate in calm": "meditating in calm",
  "i take the initiative to repair": "taking the initiative to repair",
  "i risk to change": "risking to change",
  "i act with courage": "acting with courage",
  "i make myself responsible of me": "making myself responsible for myself",
  "i decide not to harm": "deciding not to harm",
  
  // Point 8
  "i connect with the human in me and in others": "connecting with the human in myself and in others",
  "i look at the other as an equal": "looking at the other as an equal",
  "i feel empathy with their pain": "feeling empathy with their pain",
  "i seek what unites us and not what separates us": "seeking what unites us and not what separates us",
  "i forgive and let go of resentment": "forgiving and letting go of resentment",
  "i reconcile intimately": "reconciling intimately",
  "i feel compassion for their ignorance": "feeling compassion for their ignorance",
  "i accept that we all make mistakes": "accepting that we all make mistakes",
  "i act with benevolence": "acting with benevolence",
  "i wish others' well-being from the heart": "wishing others' well-being from the heart",
  "i seek unity and peace": "seeking unity and peace",
  "i commit to nonviolence": "committing to nonviolence"
};

// English helper maps for perfect grammar conversion

export function adaptPunto1En(text: string): string {
  const t = text.trim();
  const lower = t.toLowerCase();
  
  if (ENGLISH_P1_MAP[lower]) {
    return ENGLISH_P1_MAP[lower];
  }
  
  if (/^(being|the|a|an)\s/i.test(t)) {
    return t;
  }
  
  if (lower.endsWith("ing")) {
    return `being ${lower}`;
  }
  
  return lower;
}

export function toIngEn(text: string): string {
  const t = text.trim();
  const lower = t.toLowerCase();
  
  if (ENGLISH_ING_MAP[lower]) {
    return ENGLISH_ING_MAP[lower];
  }
  
  if (lower.endsWith("ing")) {
    return t;
  }
  
  if (/^i\s+/i.test(t)) {
    const verbPart = t.slice(2).trim();
    const words = verbPart.split(/\s+/);
    const firstWord = words[0];
    const firstLower = firstWord.toLowerCase();
    
    let ing = firstLower;
    if (firstLower.endsWith("e") && !firstLower.endsWith("ee")) {
      ing = firstLower.slice(0, -1) + "ing";
    } else if (firstLower.endsWith("t") && /^[aeiou][t]$/.test(firstLower.slice(-2))) {
      ing = firstLower + "ting";
    } else if (firstLower.endsWith("p") && /^[aeiou][p]$/.test(firstLower.slice(-2))) {
      ing = firstLower + "ping";
    } else {
      ing = firstLower + "ing";
    }
    
    words[0] = ing;
    return words.join(" ");
  }
  
  return t;
}

export function generateAforismosTranslated(answers: Record<number, string>, lang: 'es' | 'en' | 'fr' | 'de' | 'pt'): AforismoOutput[] {
  const clean = (val: string, placeholder = "___") => {
    return val && val.trim() !== "" ? val.trim() : placeholder;
  };

  const p1Raw = clean(answers[1], "");
  const p2Raw = clean(answers[2], "");
  const p3Raw = clean(answers[3], "");
  const p4Raw = clean(answers[4], "");
  const p5Raw = clean(answers[5], "");
  const p6Raw = clean(answers[6], "");
  const p7Raw = clean(answers[7], "");
  const p8Raw = clean(answers[8], "");

  function capitalizeFirst(str: string): string {
    const trimmed = str.trim();
    if (!trimmed) return "";
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  }

  if (lang === 'es') {
    // Adaptive conversion for Spanish values
    const p1 = p1Raw !== "" ? adaptPunto1Es(p1Raw) : "[Maltrato 1]";
    const p2Infinitive = p2Raw !== "" ? toInfinitiveEs(p2Raw) : "[Respuesta 2]";
    const p3 = p3Raw !== "" ? p3Raw : "[Virtud 3]";
    const p4Infinitive = p4Raw !== "" ? toInfinitiveEs(p4Raw) : "[Acción 4]";
    const p5 = p5Raw !== "" ? p5Raw : "[Caída 5]";
    const p6Infinitive = p6Raw !== "" ? toInfinitiveEs(p6Raw) : "[Subida 6]";
    const p7 = p7Raw !== "" ? p7Raw : "[Caída 7]";
    const p8Infinitive = p8Raw !== "" ? toInfinitiveEs(p8Raw) : "[Subida 8]";

    // Construct highly polished grammatically correct sentences
    const aforismoPrincipalText = capitalizeFirst(`${combineWithPorEs(p6Infinitive)} ${suboA(p3)} y ${combineWithPorEs(p8Infinitive)} ${suboA(p4Infinitive)}.`);
    const opcionalIText = capitalizeFirst(`para evitar ${p2Infinitive.toLowerCase()} ante ${p1.toLowerCase()}, doy el trato de ${p3.toLowerCase()}, ${haciendoPartEs(p4Raw).toLowerCase()}.`);
    const opcionalIIText = capitalizeFirst(`${combineWithPorEs(p5).toLowerCase()} caigo a ${p2Infinitive.toLowerCase()}, pero ${combineWithPorEs(p6Infinitive).toLowerCase()} ${suboA(p3).toLowerCase()}.`);
    const opcionalIIIText = capitalizeFirst(`${combineWithPorEs(p7).toLowerCase()} caigo ante ${p1.toLowerCase()}, pero ${combineWithPorEs(p8Infinitive).toLowerCase()} ${suboA(p4Infinitive).toLowerCase()}.`);

    return [
      {
        id: "6+8",
        title: "Aforismo de Subida (Integración de Caminos)",
        formula: "Por [Punto 6] subo a [Punto 3] y por [Punto 8] subo a [Punto 4]",
        text: aforismoPrincipalText
      },
      {
        id: "opcional-1",
        title: "Aforismo de Superación de Crisis (Opcional I)",
        formula: "Para evitar [Punto 2] ante [Punto 1], doy el trato de [Punto 3], haciendo [Punto 4]",
        text: opcionalIText
      },
      {
        id: "opcional-2",
        title: "Resolución del Conflicto Emocional (Opcional II)",
        formula: "Por [Punto 5] caigo a [Punto 2], pero por [Punto 6] subo a [Punto 3]",
        text: opcionalIIText
      },
      {
        id: "opcional-3",
        title: "Trascendencia del Rechazo Activo (Opcional III)",
        formula: "Por [Punto 7] caigo ante [Punto 1], pero por [Punto 8] subo a [Punto 4]",
        text: opcionalIIIText
      }
    ];
  } else if (lang === 'fr') {
    const p1 = p1Raw !== "" ? p1Raw : "[Maltraitance 1]";
    const p2 = p2Raw !== "" ? p2Raw : "[Réponse 2]";
    const p3 = p3Raw !== "" ? p3Raw : "[Vertu 3]";
    const p4 = p4Raw !== "" ? p4Raw : "[Action 4]";
    const p5 = p5Raw !== "" ? p5Raw : "[Chute 5]";
    const p6 = p6Raw !== "" ? p6Raw : "[Montée 6]";
    const p7 = p7Raw !== "" ? p7Raw : "[Chute 7]";
    const p8 = p8Raw !== "" ? p8Raw : "[Montée 8]";

    const aforismoPrincipalText = capitalizeFirst(`par ${p6.toLowerCase()} je m'élève à ${p3.toLowerCase()} et par ${p8.toLowerCase()} je m'élève à ${p4.toLowerCase()}.`);
    const opcionalIText = capitalizeFirst(`pour éviter de ${p2.toLowerCase()} face à ${p1.toLowerCase()}, je donne le traitement de ${p3.toLowerCase()}, en ${p4.toLowerCase()}.`);
    const opcionalIIText = capitalizeFirst(`par ${p5.toLowerCase()} je tombe dans ${p2.toLowerCase()}, mais par ${p6.toLowerCase()} je m'élève à ${p3.toLowerCase()}.`);
    const opcionalIIIText = capitalizeFirst(`par ${p7.toLowerCase()} je tombe face à ${p1.toLowerCase()}, mais par ${p8.toLowerCase()} je m'élève à ${p4.toLowerCase()}.`);

    return [
      {
        id: "6+8",
        title: "Aphorisme d'Élévation (Intégration des Chemins)",
        formula: "Par [Point 6] je m'élève à [Point 3] et par [Point 8] je m'élève à [Point 4]",
        text: aforismoPrincipalText
      },
      {
        id: "opcional-1",
        title: "Aphorisme de Dépassement de Crise (Optionnel I)",
        formula: "Pour éviter [Point 2] face à [Point 1], je donne le traitement de [Point 3], en faisant [Point 4]",
        text: opcionalIText
      },
      {
        id: "opcional-2",
        title: "Résolution du Conflit Émotionnel (Optionnel II)",
        formula: "Par [Point 5] je tombe dans [Point 2], mais par [Point 6] je m'élève à [Point 3]",
        text: opcionalIIText
      },
      {
        id: "opcional-3",
        title: "Transcendance du Rejet Actif (Optionnel III)",
        formula: "Par [Point 7] je tombe face à [Point 1], mais par [Point 8] je m'élève à [Point 4]",
        text: opcionalIIIText
      }
    ];
  } else if (lang === 'de') {
    const p1 = p1Raw !== "" ? p1Raw : "[Fehlbehandlung 1]";
    const p2 = p2Raw !== "" ? p2Raw : "[Reaktion 2]";
    const p3 = p3Raw !== "" ? p3Raw : "[Tugend 3]";
    const p4 = p4Raw !== "" ? p4Raw : "[Handlung 4]";
    const p5 = p5Raw !== "" ? p5Raw : "[Absturz 5]";
    const p6 = p6Raw !== "" ? p6Raw : "[Aufstieg 6]";
    const p7 = p7Raw !== "" ? p7Raw : "[Absturz 7]";
    const p8 = p8Raw !== "" ? p8Raw : "[Aufstieg 8]";

    const aforismoPrincipalText = capitalizeFirst(`durch ${p6.toLowerCase()} steige ich auf zu ${p3.toLowerCase()} und durch ${p8.toLowerCase()} steige ich auf zu ${p4.toLowerCase()}.`);
    const opcionalIText = capitalizeFirst(`um ${p2.toLowerCase()} angesichts von ${p1.toLowerCase()} zu vermeiden, schenke ich die Behandlung von ${p3.toLowerCase()}, indem ich ${p4.toLowerCase()}.`);
    const opcionalIIText = capitalizeFirst(`durch ${p5.toLowerCase()} falle ich in ${p2.toLowerCase()}, aber durch ${p6.toLowerCase()} steige ich auf zu ${p3.toLowerCase()}.`);
    const opcionalIIIText = capitalizeFirst(`durch ${p7.toLowerCase()} falle ich vor ${p1.toLowerCase()}, aber durch ${p8.toLowerCase()} steige ich auf zu ${p4.toLowerCase()}.`);

    return [
      {
        id: "6+8",
        title: "Aufsteigender Leitgedanke (Integration der Pfade)",
        formula: "Durch [Punkt 6] steige ich auf zu [Punkt 3] und durch [Punkt 8] steige ich auf zu [Punkt 4]",
        text: aforismoPrincipalText
      },
      {
        id: "opcional-1",
        title: "Leitgedanke zur Krisenbewältigung (Optional I)",
        formula: "Um [Punkt 2] angesichts von [Punkt 1] zu vermeiden, gebe ich die Behandlung von [Punkt 3], indem ich [Punkt 4] tue",
        text: opcionalIText
      },
      {
        id: "opcional-2",
        title: "Lösung des emotionalen Konflikts (Optional II)",
        formula: "Durch [Punkt 5] falle ich in [Punkt 2], aber durch [Punkt 6] steige ich auf zu [Punkt 3]",
        text: opcionalIIText
      },
      {
        id: "opcional-3",
        title: "Transzendenz der aktiven Ablehnung (Optional III)",
        formula: "Durch [Punkt 7] falle ich vor [Punkt 1], aber durch [Punkt 8] steige ich auf zu [Punkt 4]",
        text: opcionalIIIText
      }
    ];
  } else if (lang === 'pt') {
    const p1 = p1Raw !== "" ? p1Raw : "[Maltrato 1]";
    const p2 = p2Raw !== "" ? p2Raw : "[Reação 2]";
    const p3 = p3Raw !== "" ? p3Raw : "[Virtude 3]";
    const p4 = p4Raw !== "" ? p4Raw : "[Ação 4]";
    const p5 = p5Raw !== "" ? p5Raw : "[Queda 5]";
    const p6 = p6Raw !== "" ? p6Raw : "[Subida 6]";
    const p7 = p7Raw !== "" ? p7Raw : "[Queda 7]";
    const p8 = p8Raw !== "" ? p8Raw : "[Subida 8]";

    const aforismoPrincipalText = capitalizeFirst(`através de ${p6.toLowerCase()} subo a ${p3.toLowerCase()} e através de ${p8.toLowerCase()} subo a ${p4.toLowerCase()}.`);
    const opcionalIText = capitalizeFirst(`para evitar ${p2.toLowerCase()} diante de ${p1.toLowerCase()}, dou o trato de ${p3.toLowerCase()}, agindo com ${p4.toLowerCase()}.`);
    const opcionalIIText = capitalizeFirst(`por ${p5.toLowerCase()} caio em ${p2.toLowerCase()}, mas por ${p6.toLowerCase()} subo a ${p3.toLowerCase()}.`);
    const opcionalIIIText = capitalizeFirst(`por ${p7.toLowerCase()} caio diante de ${p1.toLowerCase()}, mas por ${p8.toLowerCase()} subo a ${p4.toLowerCase()}.`);

    return [
      {
        id: "6+8",
        title: "Aforismo de Subida (Integração de Caminhos)",
        formula: "Através de [Ponto 6] subo a [Ponto 3] e através de [Ponto 8] subo a [Ponto 4]",
        text: aforismoPrincipalText
      },
      {
        id: "opcional-1",
        title: "Aforismo de Superação de Crise (Opcional I)",
        formula: "Para evitar [Ponto 2] diante de [Ponto 1], dou o trato de [Ponto 3], agindo com [Ponto 4]",
        text: opcionalIText
      },
      {
        id: "opcional-2",
        title: "Resolução do Conflito Emocional (Opcional II)",
        formula: "Por [Ponto 5] caio em [Ponto 2], mas por [Ponto 6] subo a [Ponto 3]",
        text: opcionalIIText
      },
      {
        id: "opcional-3",
        title: "Transcendência de Rejeição Ativa (Opcional III)",
        formula: "Por [Ponto 7] caio diante de [Ponto 1], mas por [Ponto 8] subo a [Ponto 4]",
        text: opcionalIIIText
      }
    ];
  } else {
    // English version with perfect gerund (-ing) constructions
    const p1 = p1Raw !== "" ? adaptPunto1En(p1Raw) : "[Mistreatment 1]";
    const p2Ing = p2Raw !== "" ? toIngEn(p2Raw) : "[Response 2]";
    const p3 = p3Raw !== "" ? p3Raw : "[Virtue 3]";
    const p4Ing = p4Raw !== "" ? toIngEn(p4Raw) : "[Action 4]";
    const p5 = p5Raw !== "" ? p5Raw : "[Fall 5]";
    const p6Ing = p6Raw !== "" ? toIngEn(p6Raw) : "[Rise 6]";
    const p7 = p7Raw !== "" ? p7Raw : "[Fall 7]";
    const p8Ing = p8Raw !== "" ? toIngEn(p8Raw) : "[Rise 8]";

    const aforismoPrincipalText = capitalizeFirst(`through ${p6Ing.toLowerCase()} I rise to ${p3.toLowerCase()} and through ${p8Ing.toLowerCase()} I rise to ${p4Ing.toLowerCase()}.`);
    const opcionalIText = capitalizeFirst(`to avoid ${p2Ing.toLowerCase()} in the face of ${p1.toLowerCase()}, I offer the treatment of ${p3.toLowerCase()}, by ${p4Ing.toLowerCase()}.`);
    const opcionalIIText = capitalizeFirst(`through ${p5.toLowerCase()} I fall into ${p2Ing.toLowerCase()}, but through ${p6Ing.toLowerCase()} I rise to ${p3.toLowerCase()}.`);
    const opcionalIIIText = capitalizeFirst(`through ${p7.toLowerCase()} I fall into ${p1.toLowerCase()}, but through ${p8Ing.toLowerCase()} I rise to ${p4Ing.toLowerCase()}.`);

    return [
      {
        id: "6+8",
        title: "Rising Aphorism (Paths Integration)",
        formula: "Through [Point 6] I rise to [Point 3] and through [Point 8] I rise to [Point 4]",
        text: aforismoPrincipalText
      },
      {
        id: "opcional-1",
        title: "Overcoming Crisis Aphorism (Optional I)",
        formula: "To avoid [Point 2] in the face of [Point 1], I offer the treatment of [Point 3], by [Point 4]",
        text: opcionalIText
      },
      {
        id: "opcional-2",
        title: "Emotional Conflict Resolution (Optional II)",
        formula: "Through [Point 5] I fall into [Point 2], but through [Point 6] I rise to [Point 3]",
        text: opcionalIIText
      },
      {
        id: "opcional-3",
        title: "Active Rejection Transcendence (Optional III)",
        formula: "Through [Point 7] I fall into [Point 1], but through [Point 8] I rise to [Point 4]",
        text: opcionalIIIText
      }
    ];
  }
}
