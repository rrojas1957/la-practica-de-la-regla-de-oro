import { useState } from "react";
import { Sparkles, Check, Info, Copy } from "lucide-react";
import { AforismoOutput } from "../data/helpLists";

type Lang = "es" | "en" | "fr" | "de" | "pt" | "ru" | "hi";

const LOCALES: Record<Lang, string> = {
  es: "es-ES",
  en: "en-US",
  fr: "fr-FR",
  de: "de-DE",
  pt: "pt-PT",
  ru: "ru-RU",
  hi: "hi-IN"
};

interface WorksheetStrings {
  pending: string;
  txtHeader: string;
  txtBasedOn: string;
  txtSection1: string;
  txtSection2: string;
  txtSection3: string;
  txtSection4: string;
  txtQ1: string;
  txtQ2: string;
  txtQ3: string;
  txtQ4: string;
  txtQ5: string;
  txtQ6: string;
  txtQ7: string;
  txtQ8: string;
  txtAfMain: string;
  txtAfOpt1: string;
  txtAfOpt2: string;
  txtAfOpt3: string;
  txtGeneratedOn: string;
  headerTitle: string;
  headerDesc: string;
  btnCopiedWorksheet: string;
  btnCopyWorksheet: string;
  btnGenerating: string;
  btnDownloaded: string;
  btnDownloadPng: string;
  guideTitle: string;
  guideIntro: string;
  guideStep1Title: string;
  guideStep1Text: string;
  guideStep2Title: string;
  guideStep2Text: string;
  guideOpenTabTitle: string;
  guideOpenTabText: string;
  guideClipboardTitle: string;
  guideClipboardText: string;
  guideRightClickTitle: string;
  guideRightClickText: string;
  cardTitle: string;
  cardMethod: string;
  zoneTop: string;
  zoneBottom: string;
  q1Label: string;
  q2Label: string;
  q3Label: string;
  q4Label: string;
  q5Label: string;
  q6Label: string;
  q7Label: string;
  q8Label: string;
  aforismosHeader: string;
  afMainLabel: string;
  afOpt1Label: string;
  afOpt2Label: string;
  afOpt3Label: string;
  footCopyright: string;
  footDeveloped: string;
  modalTitle: string;
  errBlockedTitle: string;
  errBlockedText: string;
  errOpenNewWindowTitle: string;
  errOpenNewWindowText: string;
  errCopyTextTitle: string;
  errCopyTextText: string;
  altTitle: string;
  altIntro: string;
  alt1Title: string;
  alt1Text: string;
  alt2Title: string;
  alt2Text: string;
  alt3Title: string;
  alt3Text: string;
  tabImage: string;
  tabText: string;
  textReadyLabel: string;
  copied: string;
  copy: string;
  captureFailedFallback: string;
  btnOpenNewTab: string;
  btnImageCopied: string;
  btnCopyImage: string;
  btnTextCopied: string;
  btnCopyTextWs: string;
  btnRetryDownload: string;
  btnClose: string;
}

const WORKSHEET_T: Record<Lang, WorksheetStrings> = {
  es: {
    pending: "(Pendiente de responder)",
    txtHeader: "FICHA DE TRABAJO: LA REGLA DE ORO",
    txtBasedOn: "Basado en la Escuela de Silo",
    txtSection1: "I. CONCIENCIA DE SÍ, INSPIRADA E INTENCIONADA",
    txtSection2: "II. TRANSICIONES Y NIVELES",
    txtSection3: "III. CONCIENCIA PERTURBADA, COMPULSIVA, MECÁNICA",
    txtSection4: "IV. PEDIDOS O AFORISMOS",
    txtQ1: "1. ¿Qué maltrato rechazo? (Forma de maltrato):",
    txtQ2: "2. ¿Cómo me siento y qué hago frente a 1? (Sufrimiento/Reacción):",
    txtQ3: "3. ¿Cómo pido que me trate? (Virtud opuesta a 1 y ese trato doy):",
    txtQ4: "4. ¿Cómo lo hago? (Con la Virtud opuesta a 2):",
    txtQ5: "5. ¿Cómo caigo de nivel 3 a 2? (Sentimiento de caída):",
    txtQ6: "6. ¿Cómo subo de nivel 2 a 3? (Acción de subida):",
    txtQ7: "7. ¿Cómo caigo de nivel 4 a 1? (Sentimiento de caída):",
    txtQ8: "8. ¿Cómo subo de nivel 1 a 4? (Acción de subida):",
    txtAfMain: "AFORISMO PRINCIPAL (6+8):",
    txtAfOpt1: "OPCIONAL I (Superación de Crisis):",
    txtAfOpt2: "OPCIONAL II (Resolución Conflicto):",
    txtAfOpt3: "OPCIONAL III (Trascendencia del Rechazo):",
    txtGeneratedOn: "Generado el",
    headerTitle: "Ficha Resumen Oficial de la Práctica (Formato Descargable)",
    headerDesc: "Este esquema organiza visualmente la conciencia según la Escuela de Silo. Úsalo para repasar la coherencia del ejercicio.",
    btnCopiedWorksheet: "¡Ficha Copiada!",
    btnCopyWorksheet: "Copiar Ficha como Texto",
    btnGenerating: "Generando Imagen...",
    btnDownloaded: "¡Descargada!",
    btnDownloadPng: "Descargar Ficha en Imagen (PNG)",
    guideTitle: "💡 Guía para Guardar y Exportar tu Ficha",
    guideIntro: "Tienes varias alternativas infalibles para guardar tu Ficha de Trabajo con tus 3 aforismos opcionales ya integrados, incluso si estás en un entorno de pruebas o dispositivo móvil:",
    guideStep1Title: "1. Descarga Automática:",
    guideStep1Text: "Haz clic en el botón superior 'Descargar Ficha en Imagen (PNG)' para intentar guardarla de forma directa.",
    guideStep2Title: "2. Panel de Alternativas y Guardado Manual (Recomendado):",
    guideStep2Text: "Al hacer clic en el botón superior de descarga, también se abrirá automáticamente un panel emergente seguro. Desde allí podrás:",
    guideOpenTabTitle: "Abrir en Nueva Pestaña:",
    guideOpenTabText: "Visualiza la imagen a tamaño completo fuera del visor de la app para guardarla con el navegador de forma nativa.",
    guideClipboardTitle: "Copiar al Portapapeles:",
    guideClipboardText: "Copia la imagen al instante para pegarla directamente en WhatsApp, Telegram, correo electrónico o Word.",
    guideRightClickTitle: "Guardar con Clic Derecho:",
    guideRightClickText: "Haz clic derecho directamente sobre la vista previa de la imagen generada en el modal y elige 'Guardar imagen como...'.",
    cardTitle: "Ficha de Trabajo • La Regla de Oro",
    cardMethod: "Método No Violencia Activa",
    zoneTop: "CONCIENCIA DE SÍ, INSPIRADA E INTENCIONADA",
    zoneBottom: "CONCIENCIA PERTURBADA, COMPULSIVA, MECÁNICA Y COMPENSATORIA",
    q1Label: "1 ¿Qué maltrato rechazo?",
    q2Label: "2 ¿Cómo me siento y qué hago frente a 1?",
    q3Label: "3 ¿Cómo pido que me trate?: con la Virtud opuesta a 1 y ese trato doy.",
    q4Label: "4 ¿Cómo lo hago? Con la Virtud opuesta a 2.",
    q5Label: "5 ¿Cómo caigo de nivel 3 a 2?",
    q6Label: "6 ¿Cómo subo de nivel 2 a 3?",
    q7Label: "7 ¿Cómo caigo de nivel 4 a 1?",
    q8Label: "8 ¿Cómo subo de nivel 1 a 4?",
    aforismosHeader: "PEDIDOS O AFORISMOS",
    afMainLabel: "Aforismo Principal 6+8",
    afOpt1Label: "Opcional I: Para evitar 2 ante 1, doy el trato de 3, haciendo 4",
    afOpt2Label: "Opcional II: Por 5 caigo a 2, pero por 6 subo a 3",
    afOpt3Label: "Opcional III: Por 7 caigo a 1 pero por 8 subo a 4",
    footCopyright: "© 2026 - Ejercicio de Reflexión y Reconciliación",
    footDeveloped: "Desarrollado con humildad y bondad por R.E.R.H.",
    modalTitle: "Ficha de Trabajo Oficial",
    errBlockedTitle: "⚠️ Generación de Imagen Bloqueada por Seguridad de la Pestaña",
    errBlockedText: "El navegador está bloqueando la captura de pantalla debido a las restricciones de seguridad del visor (iframe) en este editor. ¡No te preocupes! Tu trabajo está totalmente seguro:",
    errOpenNewWindowTitle: "Abrir en Nueva Ventana (Recomendado):",
    errOpenNewWindowText: "Haz clic en el botón de pantalla completa (ícono de compartir o ventana externa) en la esquina superior derecha de la vista previa del editor para abrir la app en una nueva pestaña normal. Allí la descarga en PNG funcionará de inmediato de forma nativa.",
    errCopyTextTitle: "Copiar Ficha como Texto (Inmediato):",
    errCopyTextText: "Usa la pestaña 'Ficha en Texto (TXT)' de abajo para copiar un resumen perfectamente formateado de toda tu práctica y pegarlo en Word, WhatsApp, Telegram o Notas. ¡Así no perderás nada de tu trabajo!",
    altTitle: "💡 Alternativas eficientes de exportación si la descarga directa no responde:",
    altIntro: "Los visores incrustados (iframes) a veces restringen la descarga de archivos. Elige cualquiera de estas 3 alternativas instantáneas para guardar tus aforismos editados:",
    alt1Title: "Copiar al Portapapeles (Rápido):",
    alt1Text: "Haz clic en 'Copiar al Portapapeles' abajo para copiar la imagen y pegarla directamente en WhatsApp, Telegram o Word.",
    alt2Title: "Guardar imagen desde abajo:",
    alt2Text: "Haz clic derecho en la vista previa de la imagen y selecciona 'Guardar imagen como...' (o mantén pulsado en tu móvil).",
    alt3Title: "Copiar Ficha en Texto:",
    alt3Text: "Usa la pestaña de Texto para copiar de inmediato todos tus textos formateados en un formato listo para almacenar.",
    tabImage: "🖼️ Ficha en Imagen (PNG)",
    tabText: "📝 Ficha en Texto (TXT)",
    textReadyLabel: "Texto de la ficha listo para copiar y archivar:",
    copied: "¡Copiado!",
    copy: "Copiar",
    captureFailedFallback: "La imagen no está disponible en esta pestaña debido a las directivas de seguridad. Por favor, usa la pestaña '📝 Ficha en Texto (TXT)' de arriba para recuperar tus textos, o abre la app en una nueva pestaña normal.",
    btnOpenNewTab: "Abrir en Nueva Pestaña",
    btnImageCopied: "¡Imagen Copiada!",
    btnCopyImage: "Copiar Imagen",
    btnTextCopied: "¡Texto Copiado!",
    btnCopyTextWs: "Copiar Ficha de Texto",
    btnRetryDownload: "Reintentar Descarga",
    btnClose: "Cerrar"
  },
  en: {
    pending: "(Pending response)",
    txtHeader: "WORKSHEET: THE GOLDEN RULE",
    txtBasedOn: "Based on Silo's School",
    txtSection1: "I. SELF-CONSCIOUSNESS, INSPIRED AND INTENTIONAL",
    txtSection2: "II. TRANSITIONS AND LEVELS",
    txtSection3: "III. PERTURBED, COMPULSIVE, MECHANICAL AND COMPENSATORY",
    txtSection4: "IV. REQUESTS OR APHORISMS",
    txtQ1: "1. What mistreatment do I reject? (Form of mistreatment):",
    txtQ2: "2. How do I feel and what do I do about 1? (Suffering/Reaction):",
    txtQ3: "3. How do I ask to be treated? (Opposite Virtue to 1, and that treatment I give):",
    txtQ4: "4. How do I do it? (With the opposite Virtue to 2):",
    txtQ5: "5. How do I fall from level 3 to 2? (Feeling of falling):",
    txtQ6: "6. How do I rise from level 2 to 3? (Rising action):",
    txtQ7: "7. How do I fall from level 4 to 1? (Feeling of falling):",
    txtQ8: "8. How do I rise from level 1 to 4? (Rising action):",
    txtAfMain: "PRINCIPAL APHORISM (6+8):",
    txtAfOpt1: "OPTIONAL I (Overcoming Crisis):",
    txtAfOpt2: "OPTIONAL II (Conflict Resolution):",
    txtAfOpt3: "OPTIONAL III (Rejection Transcendence):",
    txtGeneratedOn: "Generated on",
    headerTitle: "Official Practice Worksheet (Downloadable Format)",
    headerDesc: "This schema visually organizes consciousness according to Silo's School. Use it to check the coherence of your exercise.",
    btnCopiedWorksheet: "Worksheet Copied!",
    btnCopyWorksheet: "Copy Worksheet as Text",
    btnGenerating: "Generating Image...",
    btnDownloaded: "Downloaded!",
    btnDownloadPng: "Download PNG Worksheet",
    guideTitle: "💡 Guidelines to Save and Export your Worksheet",
    guideIntro: "You have several foolproof alternatives to save your Worksheet with your 3 customized optional aphorisms already integrated, even inside testing sandbox environments or mobile devices:",
    guideStep1Title: "1. Automatic Download:",
    guideStep1Text: "Click the top button 'Download PNG Worksheet' to attempt a direct file download.",
    guideStep2Title: "2. Alternative Methods & Manual Save (Recommended):",
    guideStep2Text: "Clicking the top download button will also automatically open a secure pop-up. From there you can:",
    guideOpenTabTitle: "Open in New Tab:",
    guideOpenTabText: "View the image full screen outside the app's iframe sandbox to save it with your browser natively.",
    guideClipboardTitle: "Copy to Clipboard:",
    guideClipboardText: "Copy the image instantly to paste it directly into WhatsApp, Telegram, email, or Word.",
    guideRightClickTitle: "Save with Right-Click:",
    guideRightClickText: "Right-click directly over the generated image preview inside the modal and choose 'Save image as...'.",
    cardTitle: "Worksheet • The Golden Rule",
    cardMethod: "Active Nonviolence Method",
    zoneTop: "SELF-CONSCIOUSNESS, INSPIRED AND INTENTIONAL",
    zoneBottom: "PERTURBED, COMPULSIVE, MECHANICAL AND COMPENSATORY CONSCIOUSNESS",
    q1Label: "1 What mistreatment do I reject?",
    q2Label: "2 How do I feel and what do I do about 1?",
    q3Label: "3 How do I ask to be treated?: with the opposite Virtue to 1, and that's how I treat.",
    q4Label: "4 How do I do it? With the opposite Virtue to 2.",
    q5Label: "5 How do I fall from level 3 to 2?",
    q6Label: "6 How do I rise from level 2 to 3?",
    q7Label: "7 How do I fall from level 4 to 1?",
    q8Label: "8 How do I rise from level 1 to 4?",
    aforismosHeader: "REQUESTS OR APHORISMS",
    afMainLabel: "Principal Aphorism 6+8",
    afOpt1Label: "Optional I: To avoid 2 before 1, I offer 3 doing 4",
    afOpt2Label: "Optional II: Through 5 I fall to 2, but through 6 I rise to 3",
    afOpt3Label: "Optional III: Through 7 I fall to 1 but through 8 I rise to 4",
    footCopyright: "© 2026 - Reflection & Reconciliation Exercise",
    footDeveloped: "Developed with humility and kindness by R.E.R.H.",
    modalTitle: "Official Practice Worksheet",
    errBlockedTitle: "⚠️ Image Generation Blocked by Tab Security Policies",
    errBlockedText: "The browser is blocking screen capture due to safety restrictions of this iframe. Don't worry! Your work is fully safe:",
    errOpenNewWindowTitle: "Open in New Window (Recommended):",
    errOpenNewWindowText: "Click the full screen button (share icon or external window) on the top-right corner of the editor panel to open the app in a new regular tab. There, PNG downloads will work natively.",
    errCopyTextTitle: "Copy Worksheet as Text (Immediate):",
    errCopyTextText: "Use the 'Worksheet in Text (TXT)' tab below to copy a perfectly formatted summary of your practice and paste it anywhere.",
    altTitle: "💡 Efficient export alternatives if the direct download doesn't respond:",
    altIntro: "Embedded iframe viewers sometimes restrict direct file downloads. Choose any of these 3 instant alternatives to save your work:",
    alt1Title: "Copy to Clipboard (Fast):",
    alt1Text: "Click 'Copy to Clipboard' below to copy the image and paste it directly into WhatsApp, Telegram, or Word.",
    alt2Title: "Save image from preview:",
    alt2Text: "Right-click the image preview below and select 'Save image as...' (or tap and hold on mobile).",
    alt3Title: "Copy Worksheet as Text:",
    alt3Text: "Use the Text tab to instantly copy all your formatted texts in a format ready to store.",
    tabImage: "🖼️ Image Worksheet (PNG)",
    tabText: "📝 Text Worksheet (TXT)",
    textReadyLabel: "Worksheet text ready to copy and archive:",
    copied: "Copied!",
    copy: "Copy",
    captureFailedFallback: "The image is not available in this tab due to security settings. Please use the '📝 Text Worksheet (TXT)' tab above to get your texts, or open the app in a new regular tab.",
    btnOpenNewTab: "Open in New Tab",
    btnImageCopied: "Image Copied!",
    btnCopyImage: "Copy Image",
    btnTextCopied: "Text Copied!",
    btnCopyTextWs: "Copy Text Worksheet",
    btnRetryDownload: "Retry Download",
    btnClose: "Close"
  },
  fr: {
    pending: "(En attente de réponse)",
    txtHeader: "FICHE DE TRAVAIL : LA RÈGLE D'OR",
    txtBasedOn: "Basée sur l'École de Silo",
    txtSection1: "I. CONSCIENCE DE SOI, INSPIRÉE ET INTENTIONNELLE",
    txtSection2: "II. TRANSITIONS ET NIVEAUX",
    txtSection3: "III. CONSCIENCE PERTURBÉE, COMPULSIVE, MÉCANIQUE",
    txtSection4: "IV. DEMANDES OU APHORISMES",
    txtQ1: "1. Quelle maltraitance je rejette ? (Forme de maltraitance) :",
    txtQ2: "2. Comment je me sens et que fais-je face à 1 ? (Souffrance/Réaction) :",
    txtQ3: "3. Comment je demande à être traité ? (Vertu opposée à 1, et ce traitement je le donne) :",
    txtQ4: "4. Comment je le fais ? (Avec la Vertu opposée à 2) :",
    txtQ5: "5. Comment je tombe du niveau 3 au 2 ? (Sentiment de chute) :",
    txtQ6: "6. Comment je monte du niveau 2 au 3 ? (Action de montée) :",
    txtQ7: "7. Comment je tombe du niveau 4 au 1 ? (Sentiment de chute) :",
    txtQ8: "8. Comment je monte du niveau 1 au 4 ? (Action de montée) :",
    txtAfMain: "APHORISME PRINCIPAL (6+8) :",
    txtAfOpt1: "OPTIONNEL I (Dépassement de Crise) :",
    txtAfOpt2: "OPTIONNEL II (Résolution du Conflit) :",
    txtAfOpt3: "OPTIONNEL III (Transcendance du Rejet) :",
    txtGeneratedOn: "Généré le",
    headerTitle: "Fiche Résumé Officielle de la Pratique (Format Téléchargeable)",
    headerDesc: "Ce schéma organise visuellement la conscience selon l'École de Silo. Utilisez-le pour vérifier la cohérence de votre exercice.",
    btnCopiedWorksheet: "Fiche Copiée !",
    btnCopyWorksheet: "Copier la Fiche en Texte",
    btnGenerating: "Génération de l'Image...",
    btnDownloaded: "Téléchargée !",
    btnDownloadPng: "Télécharger la Fiche en Image (PNG)",
    guideTitle: "💡 Guide pour Sauvegarder et Exporter votre Fiche",
    guideIntro: "Vous disposez de plusieurs alternatives infaillibles pour sauvegarder votre Fiche de Travail avec vos 3 aphorismes optionnels déjà intégrés, même dans un environnement de test ou sur un appareil mobile :",
    guideStep1Title: "1. Téléchargement Automatique :",
    guideStep1Text: "Cliquez sur le bouton supérieur « Télécharger la Fiche en Image (PNG) » pour tenter de la sauvegarder directement.",
    guideStep2Title: "2. Panneau d'Alternatives et Sauvegarde Manuelle (Recommandé) :",
    guideStep2Text: "En cliquant sur le bouton de téléchargement supérieur, un panneau contextuel sécurisé s'ouvrira aussi automatiquement. Depuis là, vous pourrez :",
    guideOpenTabTitle: "Ouvrir dans un Nouvel Onglet :",
    guideOpenTabText: "Visualisez l'image en taille réelle en dehors du visualiseur de l'app pour la sauvegarder nativement avec votre navigateur.",
    guideClipboardTitle: "Copier dans le Presse-papiers :",
    guideClipboardText: "Copiez l'image instantanément pour la coller directement dans WhatsApp, Telegram, un e-mail ou Word.",
    guideRightClickTitle: "Sauvegarder par Clic Droit :",
    guideRightClickText: "Faites un clic droit directement sur l'aperçu de l'image générée dans la fenêtre et choisissez « Enregistrer l'image sous... ».",
    cardTitle: "Fiche de Travail • La Règle d'Or",
    cardMethod: "Méthode de Non-Violence Active",
    zoneTop: "CONSCIENCE DE SOI, INSPIRÉE ET INTENTIONNELLE",
    zoneBottom: "CONSCIENCE PERTURBÉE, COMPULSIVE, MÉCANIQUE ET COMPENSATOIRE",
    q1Label: "1 Quelle maltraitance je rejette ?",
    q2Label: "2 Comment je me sens et que fais-je face à 1 ?",
    q3Label: "3 Comment je demande à être traité ? : avec la Vertu opposée à 1, et ce traitement je le donne.",
    q4Label: "4 Comment je le fais ? Avec la Vertu opposée à 2.",
    q5Label: "5 Comment je tombe du niveau 3 au 2 ?",
    q6Label: "6 Comment je monte du niveau 2 au 3 ?",
    q7Label: "7 Comment je tombe du niveau 4 au 1 ?",
    q8Label: "8 Comment je monte du niveau 1 au 4 ?",
    aforismosHeader: "DEMANDES OU APHORISMES",
    afMainLabel: "Aphorisme Principal 6+8",
    afOpt1Label: "Optionnel I : Pour éviter 2 face à 1, je donne le traitement de 3, en faisant 4",
    afOpt2Label: "Optionnel II : Par 5 je tombe à 2, mais par 6 je monte à 3",
    afOpt3Label: "Optionnel III : Par 7 je tombe à 1 mais par 8 je monte à 4",
    footCopyright: "© 2026 - Exercice de Réflexion et de Réconciliation",
    footDeveloped: "Développé avec humilité et bonté par R.E.R.H.",
    modalTitle: "Fiche de Travail Officielle",
    errBlockedTitle: "⚠️ Génération de l'Image Bloquée par la Sécurité de l'Onglet",
    errBlockedText: "Le navigateur bloque la capture d'écran en raison des restrictions de sécurité du visualiseur (iframe) de cet éditeur. Ne vous inquiétez pas ! Votre travail est totalement en sécurité :",
    errOpenNewWindowTitle: "Ouvrir dans une Nouvelle Fenêtre (Recommandé) :",
    errOpenNewWindowText: "Cliquez sur le bouton plein écran (icône de partage ou de fenêtre externe) dans le coin supérieur droit de l'aperçu de l'éditeur pour ouvrir l'app dans un nouvel onglet normal. Là, le téléchargement en PNG fonctionnera immédiatement de façon native.",
    errCopyTextTitle: "Copier la Fiche en Texte (Immédiat) :",
    errCopyTextText: "Utilisez l'onglet « Fiche en Texte (TXT) » ci-dessous pour copier un résumé parfaitement formaté de toute votre pratique et le coller dans Word, WhatsApp, Telegram ou Notes. Ainsi, vous ne perdrez rien de votre travail !",
    altTitle: "💡 Alternatives d'exportation efficaces si le téléchargement direct ne répond pas :",
    altIntro: "Les visualiseurs intégrés (iframes) restreignent parfois le téléchargement de fichiers. Choisissez l'une de ces 3 alternatives instantanées pour sauvegarder vos aphorismes édités :",
    alt1Title: "Copier dans le Presse-papiers (Rapide) :",
    alt1Text: "Cliquez sur « Copier dans le Presse-papiers » ci-dessous pour copier l'image et la coller directement dans WhatsApp, Telegram ou Word.",
    alt2Title: "Sauvegarder l'image depuis l'aperçu :",
    alt2Text: "Faites un clic droit sur l'aperçu de l'image et sélectionnez « Enregistrer l'image sous... » (ou appuyez longuement sur votre mobile).",
    alt3Title: "Copier la Fiche en Texte :",
    alt3Text: "Utilisez l'onglet Texte pour copier immédiatement tous vos textes formatés dans un format prêt à archiver.",
    tabImage: "🖼️ Fiche en Image (PNG)",
    tabText: "📝 Fiche en Texte (TXT)",
    textReadyLabel: "Texte de la fiche prêt à copier et archiver :",
    copied: "Copié !",
    copy: "Copier",
    captureFailedFallback: "L'image n'est pas disponible dans cet onglet en raison des directives de sécurité. Veuillez utiliser l'onglet « 📝 Fiche en Texte (TXT) » ci-dessus pour récupérer vos textes, ou ouvrez l'app dans un nouvel onglet normal.",
    btnOpenNewTab: "Ouvrir dans un Nouvel Onglet",
    btnImageCopied: "Image Copiée !",
    btnCopyImage: "Copier l'Image",
    btnTextCopied: "Texte Copié !",
    btnCopyTextWs: "Copier la Fiche de Texte",
    btnRetryDownload: "Réessayer le Téléchargement",
    btnClose: "Fermer"
  },
  de: {
    pending: "(Antwort ausstehend)",
    txtHeader: "ARBEITSBLATT: DIE GOLDENE REGEL",
    txtBasedOn: "Basierend auf der Schule von Silo",
    txtSection1: "I. SELBSTBEWUSSTSEIN, INSPIRIERT UND INTENTIONAL",
    txtSection2: "II. ÜBERGÄNGE UND EBENEN",
    txtSection3: "III. GESTÖRTES, ZWANGHAFTES, MECHANISCHES BEWUSSTSEIN",
    txtSection4: "IV. BITTEN ODER LEITGEDANKEN",
    txtQ1: "1. Welche Fehlbehandlung lehne ich ab? (Form der Fehlbehandlung):",
    txtQ2: "2. Wie fühle ich mich und was tue ich angesichts von 1? (Leiden/Reaktion):",
    txtQ3: "3. Wie bitte ich, behandelt zu werden? (Zu 1 entgegengesetzte Tugend, und diese Behandlung gebe ich):",
    txtQ4: "4. Wie tue ich es? (Mit der zu 2 entgegengesetzten Tugend):",
    txtQ5: "5. Wie falle ich von Ebene 3 auf 2? (Gefühl des Absturzes):",
    txtQ6: "6. Wie steige ich von Ebene 2 auf 3? (Handlung des Aufstiegs):",
    txtQ7: "7. Wie falle ich von Ebene 4 auf 1? (Gefühl des Absturzes):",
    txtQ8: "8. Wie steige ich von Ebene 1 auf 4? (Handlung des Aufstiegs):",
    txtAfMain: "HAUPTLEITGEDANKE (6+8):",
    txtAfOpt1: "OPTIONAL I (Krisenbewältigung):",
    txtAfOpt2: "OPTIONAL II (Konfliktlösung):",
    txtAfOpt3: "OPTIONAL III (Transzendenz der Ablehnung):",
    txtGeneratedOn: "Erstellt am",
    headerTitle: "Offizielles Übersichts-Arbeitsblatt der Praxis (Herunterladbares Format)",
    headerDesc: "Dieses Schema organisiert das Bewusstsein visuell gemäß der Schule von Silo. Nutzen Sie es, um die Kohärenz Ihrer Übung zu überprüfen.",
    btnCopiedWorksheet: "Arbeitsblatt Kopiert!",
    btnCopyWorksheet: "Arbeitsblatt als Text Kopieren",
    btnGenerating: "Bild wird erstellt...",
    btnDownloaded: "Heruntergeladen!",
    btnDownloadPng: "Arbeitsblatt als Bild (PNG) Herunterladen",
    guideTitle: "💡 Anleitung zum Speichern und Exportieren Ihres Arbeitsblatts",
    guideIntro: "Sie haben mehrere zuverlässige Alternativen, um Ihr Arbeitsblatt mit Ihren 3 bereits integrierten optionalen Leitgedanken zu speichern, selbst in einer Testumgebung oder auf einem Mobilgerät:",
    guideStep1Title: "1. Automatischer Download:",
    guideStep1Text: "Klicken Sie oben auf die Schaltfläche 'Arbeitsblatt als Bild (PNG) Herunterladen', um es direkt zu speichern.",
    guideStep2Title: "2. Alternativen-Panel und Manuelles Speichern (Empfohlen):",
    guideStep2Text: "Beim Klick auf die obere Download-Schaltfläche öffnet sich außerdem automatisch ein sicheres Pop-up-Fenster. Von dort aus können Sie:",
    guideOpenTabTitle: "In Neuem Tab Öffnen:",
    guideOpenTabText: "Betrachten Sie das Bild in voller Größe außerhalb des App-Viewers, um es nativ mit Ihrem Browser zu speichern.",
    guideClipboardTitle: "In die Zwischenablage Kopieren:",
    guideClipboardText: "Kopieren Sie das Bild sofort, um es direkt in WhatsApp, Telegram, E-Mail oder Word einzufügen.",
    guideRightClickTitle: "Mit Rechtsklick Speichern:",
    guideRightClickText: "Klicken Sie mit der rechten Maustaste direkt auf die Vorschau des erzeugten Bildes im Fenster und wählen Sie 'Bild speichern unter...'.",
    cardTitle: "Arbeitsblatt • Die Goldene Regel",
    cardMethod: "Methode der Aktiven Gewaltfreiheit",
    zoneTop: "SELBSTBEWUSSTSEIN, INSPIRIERT UND INTENTIONAL",
    zoneBottom: "GESTÖRTES, ZWANGHAFTES, MECHANISCHES UND KOMPENSATORISCHES BEWUSSTSEIN",
    q1Label: "1 Welche Fehlbehandlung lehne ich ab?",
    q2Label: "2 Wie fühle ich mich und was tue ich angesichts von 1?",
    q3Label: "3 Wie bitte ich, behandelt zu werden?: mit der zu 1 entgegengesetzten Tugend, und diese Behandlung gebe ich.",
    q4Label: "4 Wie tue ich es? Mit der zu 2 entgegengesetzten Tugend.",
    q5Label: "5 Wie falle ich von Ebene 3 auf 2?",
    q6Label: "6 Wie steige ich von Ebene 2 auf 3?",
    q7Label: "7 Wie falle ich von Ebene 4 auf 1?",
    q8Label: "8 Wie steige ich von Ebene 1 auf 4?",
    aforismosHeader: "BITTEN ODER LEITGEDANKEN",
    afMainLabel: "Hauptleitgedanke 6+8",
    afOpt1Label: "Optional I: Um 2 angesichts von 1 zu vermeiden, gebe ich die Behandlung von 3, indem ich 4 tue",
    afOpt2Label: "Optional II: Durch 5 falle ich auf 2, aber durch 6 steige ich auf 3",
    afOpt3Label: "Optional III: Durch 7 falle ich auf 1, aber durch 8 steige ich auf 4",
    footCopyright: "© 2026 - Übung der Reflexion und Versöhnung",
    footDeveloped: "Mit Demut und Güte entwickelt von R.E.R.H.",
    modalTitle: "Offizielles Arbeitsblatt",
    errBlockedTitle: "⚠️ Bilderstellung durch Tab-Sicherheitsrichtlinien Blockiert",
    errBlockedText: "Der Browser blockiert die Bildschirmaufnahme aufgrund der Sicherheitsbeschränkungen des Viewers (iframe) in diesem Editor. Keine Sorge! Ihre Arbeit ist völlig sicher:",
    errOpenNewWindowTitle: "In Neuem Fenster Öffnen (Empfohlen):",
    errOpenNewWindowText: "Klicken Sie auf die Vollbild-Schaltfläche (Teilen-Symbol oder externes Fenster) in der oberen rechten Ecke der Editor-Vorschau, um die App in einem neuen normalen Tab zu öffnen. Dort funktioniert der PNG-Download sofort nativ.",
    errCopyTextTitle: "Arbeitsblatt als Text Kopieren (Sofort):",
    errCopyTextText: "Nutzen Sie den Tab 'Arbeitsblatt als Text (TXT)' unten, um eine perfekt formatierte Zusammenfassung Ihrer gesamten Praxis zu kopieren und in Word, WhatsApp, Telegram oder Notizen einzufügen. So verlieren Sie nichts von Ihrer Arbeit!",
    altTitle: "💡 Effiziente Export-Alternativen, falls der direkte Download nicht reagiert:",
    altIntro: "Eingebettete Viewer (iframes) schränken den Datei-Download manchmal ein. Wählen Sie eine dieser 3 sofortigen Alternativen, um Ihre bearbeiteten Leitgedanken zu speichern:",
    alt1Title: "In die Zwischenablage Kopieren (Schnell):",
    alt1Text: "Klicken Sie unten auf 'In die Zwischenablage Kopieren', um das Bild zu kopieren und direkt in WhatsApp, Telegram oder Word einzufügen.",
    alt2Title: "Bild aus der Vorschau Speichern:",
    alt2Text: "Klicken Sie mit der rechten Maustaste auf die Bildvorschau und wählen Sie 'Bild speichern unter...' (oder halten Sie auf dem Handy gedrückt).",
    alt3Title: "Arbeitsblatt als Text Kopieren:",
    alt3Text: "Nutzen Sie den Text-Tab, um sofort alle Ihre formatierten Texte in einem speicherbereiten Format zu kopieren.",
    tabImage: "🖼️ Arbeitsblatt als Bild (PNG)",
    tabText: "📝 Arbeitsblatt als Text (TXT)",
    textReadyLabel: "Text des Arbeitsblatts bereit zum Kopieren und Archivieren:",
    copied: "Kopiert!",
    copy: "Kopieren",
    captureFailedFallback: "Das Bild ist in diesem Tab aufgrund der Sicherheitsrichtlinien nicht verfügbar. Bitte nutzen Sie den Tab '📝 Arbeitsblatt als Text (TXT)' oben, um Ihre Texte abzurufen, oder öffnen Sie die App in einem neuen normalen Tab.",
    btnOpenNewTab: "In Neuem Tab Öffnen",
    btnImageCopied: "Bild Kopiert!",
    btnCopyImage: "Bild Kopieren",
    btnTextCopied: "Text Kopiert!",
    btnCopyTextWs: "Text-Arbeitsblatt Kopieren",
    btnRetryDownload: "Download Erneut Versuchen",
    btnClose: "Schließen"
  },
  pt: {
    pending: "(Resposta pendente)",
    txtHeader: "FICHA DE TRABALHO: A REGRA DE OURO",
    txtBasedOn: "Baseado na Escola de Silo",
    txtSection1: "I. CONSCIÊNCIA DE SI, INSPIRADA E INTENCIONAL",
    txtSection2: "II. TRANSIÇÕES E NÍVEIS",
    txtSection3: "III. CONSCIÊNCIA PERTURBADA, COMPULSIVA, MECÂNICA",
    txtSection4: "IV. PEDIDOS OU AFORISMOS",
    txtQ1: "1. Que maltrato rejeito? (Forma de maltrato):",
    txtQ2: "2. Como me sinto e o que faço perante 1? (Sofrimento/Reação):",
    txtQ3: "3. Como peço ser tratado? (Virtude oposta a 1, e esse trato dou):",
    txtQ4: "4. Como o faço? (Com a Virtude oposta a 2):",
    txtQ5: "5. Como caio do nível 3 ao 2? (Sentimento de queda):",
    txtQ6: "6. Como subo do nível 2 ao 3? (Ação de subida):",
    txtQ7: "7. Como caio do nível 4 ao 1? (Sentimento de queda):",
    txtQ8: "8. Como subo do nível 1 ao 4? (Ação de subida):",
    txtAfMain: "AFORISMO PRINCIPAL (6+8):",
    txtAfOpt1: "OPCIONAL I (Superação de Crise):",
    txtAfOpt2: "OPCIONAL II (Resolução de Conflito):",
    txtAfOpt3: "OPCIONAL III (Transcendência da Rejeição):",
    txtGeneratedOn: "Gerado em",
    headerTitle: "Ficha Resumo Oficial da Prática (Formato Descarregável)",
    headerDesc: "Este esquema organiza visualmente a consciência segundo a Escola de Silo. Usa-o para rever a coerência do exercício.",
    btnCopiedWorksheet: "Ficha Copiada!",
    btnCopyWorksheet: "Copiar Ficha como Texto",
    btnGenerating: "A Gerar Imagem...",
    btnDownloaded: "Descarregada!",
    btnDownloadPng: "Descarregar Ficha em Imagem (PNG)",
    guideTitle: "💡 Guia para Guardar e Exportar a tua Ficha",
    guideIntro: "Tens várias alternativas infalíveis para guardar a tua Ficha de Trabalho com os teus 3 aforismos opcionais já integrados, mesmo num ambiente de testes ou dispositivo móvel:",
    guideStep1Title: "1. Descarga Automática:",
    guideStep1Text: "Clica no botão superior 'Descarregar Ficha em Imagem (PNG)' para tentar guardá-la de forma direta.",
    guideStep2Title: "2. Painel de Alternativas e Guardado Manual (Recomendado):",
    guideStep2Text: "Ao clicar no botão superior de descarga, também se abrirá automaticamente um painel emergente seguro. A partir daí poderás:",
    guideOpenTabTitle: "Abrir em Novo Separador:",
    guideOpenTabText: "Visualiza a imagem em tamanho completo fora do visualizador da app para guardá-la nativamente com o navegador.",
    guideClipboardTitle: "Copiar para a Área de Transferência:",
    guideClipboardText: "Copia a imagem no instante para colá-la diretamente no WhatsApp, Telegram, e-mail ou Word.",
    guideRightClickTitle: "Guardar com Clique Direito:",
    guideRightClickText: "Clica com o botão direito diretamente sobre a pré-visualização da imagem gerada na janela e escolhe 'Guardar imagem como...'.",
    cardTitle: "Ficha de Trabalho • A Regra de Ouro",
    cardMethod: "Método de Não-Violência Ativa",
    zoneTop: "CONSCIÊNCIA DE SI, INSPIRADA E INTENCIONAL",
    zoneBottom: "CONSCIÊNCIA PERTURBADA, COMPULSIVA, MECÂNICA E COMPENSATÓRIA",
    q1Label: "1 Que maltrato rejeito?",
    q2Label: "2 Como me sinto e o que faço perante 1?",
    q3Label: "3 Como peço ser tratado?: com a Virtude oposta a 1, e esse trato dou.",
    q4Label: "4 Como o faço? Com a Virtude oposta a 2.",
    q5Label: "5 Como caio do nível 3 ao 2?",
    q6Label: "6 Como subo do nível 2 ao 3?",
    q7Label: "7 Como caio do nível 4 ao 1?",
    q8Label: "8 Como subo do nível 1 ao 4?",
    aforismosHeader: "PEDIDOS OU AFORISMOS",
    afMainLabel: "Aforismo Principal 6+8",
    afOpt1Label: "Opcional I: Para evitar 2 diante de 1, dou o trato de 3, fazendo 4",
    afOpt2Label: "Opcional II: Por 5 caio a 2, mas por 6 subo a 3",
    afOpt3Label: "Opcional III: Por 7 caio a 1 mas por 8 subo a 4",
    footCopyright: "© 2026 - Exercício de Reflexão e Reconciliação",
    footDeveloped: "Desenvolvido com humildade e bondade por R.E.R.H.",
    modalTitle: "Ficha de Trabalho Oficial",
    errBlockedTitle: "⚠️ Geração de Imagem Bloqueada pela Segurança do Separador",
    errBlockedText: "O navegador está a bloquear a captura de ecrã devido às restrições de segurança do visualizador (iframe) neste editor. Não te preocupes! O teu trabalho está totalmente seguro:",
    errOpenNewWindowTitle: "Abrir em Nova Janela (Recomendado):",
    errOpenNewWindowText: "Clica no botão de ecrã completo (ícone de partilha ou janela externa) no canto superior direito da pré-visualização do editor para abrir a app num novo separador normal. Aí, a descarga em PNG funcionará de imediato de forma nativa.",
    errCopyTextTitle: "Copiar Ficha como Texto (Imediato):",
    errCopyTextText: "Usa o separador 'Ficha em Texto (TXT)' abaixo para copiar um resumo perfeitamente formatado de toda a tua prática e colá-lo no Word, WhatsApp, Telegram ou Notas. Assim não perderás nada do teu trabalho!",
    altTitle: "💡 Alternativas eficientes de exportação se a descarga direta não responder:",
    altIntro: "Os visualizadores incorporados (iframes) por vezes restringem a descarga de ficheiros. Escolhe qualquer uma destas 3 alternativas instantâneas para guardar os teus aforismos editados:",
    alt1Title: "Copiar para a Área de Transferência (Rápido):",
    alt1Text: "Clica em 'Copiar para a Área de Transferência' abaixo para copiar a imagem e colá-la diretamente no WhatsApp, Telegram ou Word.",
    alt2Title: "Guardar imagem a partir da pré-visualização:",
    alt2Text: "Clica com o botão direito na pré-visualização da imagem e seleciona 'Guardar imagem como...' (ou mantém premido no telemóvel).",
    alt3Title: "Copiar Ficha em Texto:",
    alt3Text: "Usa o separador de Texto para copiar de imediato todos os teus textos formatados num formato pronto a arquivar.",
    tabImage: "🖼️ Ficha em Imagem (PNG)",
    tabText: "📝 Ficha em Texto (TXT)",
    textReadyLabel: "Texto da ficha pronto para copiar e arquivar:",
    copied: "Copiado!",
    copy: "Copiar",
    captureFailedFallback: "A imagem não está disponível neste separador devido às diretivas de segurança. Por favor, usa o separador '📝 Ficha em Texto (TXT)' acima para recuperar os teus textos, ou abre a app num novo separador normal.",
    btnOpenNewTab: "Abrir em Novo Separador",
    btnImageCopied: "Imagem Copiada!",
    btnCopyImage: "Copiar Imagem",
    btnTextCopied: "Texto Copiado!",
    btnCopyTextWs: "Copiar Ficha de Texto",
    btnRetryDownload: "Tentar Descarregar Novamente",
    btnClose: "Fechar"
  },
  ru: {
    pending: "(Ожидает ответа)",
    txtHeader: "РАБОЧИЙ ЛИСТ: ЗОЛОТОЕ ПРАВИЛО",
    txtBasedOn: "На основе Школы Сило",
    txtSection1: "I. САМОСОЗНАНИЕ, ВДОХНОВЛЁННОЕ И НАМЕРЕННОЕ",
    txtSection2: "II. ПЕРЕХОДЫ И УРОВНИ",
    txtSection3: "III. ВОЗМУЩЁННОЕ, КОМПУЛЬСИВНОЕ, МЕХАНИЧЕСКОЕ СОЗНАНИЕ",
    txtSection4: "IV. ПРОСЬБЫ ИЛИ АФОРИЗМЫ",
    txtQ1: "1. Какое плохое обращение я отвергаю? (Форма плохого обращения):",
    txtQ2: "2. Как я себя чувствую и что делаю перед лицом 1? (Страдание/Реакция):",
    txtQ3: "3. Какого обращения я прошу? (Добродетель, противоположная 1, и это обращение я даю):",
    txtQ4: "4. Как я это делаю? (С добродетелью, противоположной 2):",
    txtQ5: "5. Как я падаю с уровня 3 на 2? (Чувство падения):",
    txtQ6: "6. Как я поднимаюсь с уровня 2 на 3? (Действие подъёма):",
    txtQ7: "7. Как я падаю с уровня 4 на 1? (Чувство падения):",
    txtQ8: "8. Как я поднимаюсь с уровня 1 на 4? (Действие подъёма):",
    txtAfMain: "ГЛАВНЫЙ АФОРИЗМ (6+8):",
    txtAfOpt1: "ОПЦИОНАЛЬНО I (Преодоление кризиса):",
    txtAfOpt2: "ОПЦИОНАЛЬНО II (Разрешение конфликта):",
    txtAfOpt3: "ОПЦИОНАЛЬНО III (Преодоление отвержения):",
    txtGeneratedOn: "Сгенерировано",
    headerTitle: "Официальный сводный рабочий лист практики (формат для скачивания)",
    headerDesc: "Эта схема визуально организует сознание согласно Школе Сило. Используйте её, чтобы проверить согласованность вашего упражнения.",
    btnCopiedWorksheet: "Лист скопирован!",
    btnCopyWorksheet: "Копировать лист как текст",
    btnGenerating: "Создание изображения...",
    btnDownloaded: "Скачано!",
    btnDownloadPng: "Скачать лист в изображении (PNG)",
    guideTitle: "💡 Руководство по сохранению и экспорту вашего листа",
    guideIntro: "У вас есть несколько надёжных способов сохранить ваш рабочий лист с уже встроенными 3 опциональными афоризмами, даже в тестовой среде или на мобильном устройстве:",
    guideStep1Title: "1. Автоматическое скачивание:",
    guideStep1Text: "Нажмите верхнюю кнопку «Скачать лист в изображении (PNG)», чтобы попытаться сохранить его напрямую.",
    guideStep2Title: "2. Панель альтернатив и ручное сохранение (рекомендуется):",
    guideStep2Text: "При нажатии верхней кнопки скачивания также автоматически откроется безопасное всплывающее окно. Оттуда вы сможете:",
    guideOpenTabTitle: "Открыть в новой вкладке:",
    guideOpenTabText: "Просмотрите изображение в полном размере вне просмотрщика приложения, чтобы сохранить его нативно через браузер.",
    guideClipboardTitle: "Копировать в буфер обмена:",
    guideClipboardText: "Мгновенно скопируйте изображение, чтобы вставить его прямо в WhatsApp, Telegram, электронную почту или Word.",
    guideRightClickTitle: "Сохранить правым щелчком:",
    guideRightClickText: "Щёлкните правой кнопкой прямо по предпросмотру созданного изображения в окне и выберите «Сохранить изображение как...».",
    cardTitle: "Рабочий лист • Золотое правило",
    cardMethod: "Метод активного ненасилия",
    zoneTop: "САМОСОЗНАНИЕ, ВДОХНОВЛЁННОЕ И НАМЕРЕННОЕ",
    zoneBottom: "ВОЗМУЩЁННОЕ, КОМПУЛЬСИВНОЕ, МЕХАНИЧЕСКОЕ И КОМПЕНСАТОРНОЕ СОЗНАНИЕ",
    q1Label: "1 Какое плохое обращение я отвергаю?",
    q2Label: "2 Как я себя чувствую и что делаю перед лицом 1?",
    q3Label: "3 Какого обращения я прошу?: с добродетелью, противоположной 1, и это обращение я даю.",
    q4Label: "4 Как я это делаю? С добродетелью, противоположной 2.",
    q5Label: "5 Как я падаю с уровня 3 на 2?",
    q6Label: "6 Как я поднимаюсь с уровня 2 на 3?",
    q7Label: "7 Как я падаю с уровня 4 на 1?",
    q8Label: "8 Как я поднимаюсь с уровня 1 на 4?",
    aforismosHeader: "ПРОСЬБЫ ИЛИ АФОРИЗМЫ",
    afMainLabel: "Главный афоризм 6+8",
    afOpt1Label: "Опционально I: Чтобы избежать 2 перед лицом 1, я даю обращение 3, делая 4",
    afOpt2Label: "Опционально II: Через 5 я падаю к 2, но через 6 я поднимаюсь к 3",
    afOpt3Label: "Опционально III: Через 7 я падаю к 1, но через 8 я поднимаюсь к 4",
    footCopyright: "© 2026 — Упражнение размышления и примирения",
    footDeveloped: "Разработано со смирением и добротой R.E.R.H.",
    modalTitle: "Официальный рабочий лист",
    errBlockedTitle: "⚠️ Создание изображения заблокировано политиками безопасности вкладки",
    errBlockedText: "Браузер блокирует захват экрана из-за ограничений безопасности просмотрщика (iframe) в этом редакторе. Не волнуйтесь! Ваша работа полностью в безопасности:",
    errOpenNewWindowTitle: "Открыть в новом окне (рекомендуется):",
    errOpenNewWindowText: "Нажмите кнопку полного экрана (значок «поделиться» или внешнего окна) в правом верхнем углу предпросмотра редактора, чтобы открыть приложение в новой обычной вкладке. Там скачивание в PNG заработает сразу и нативно.",
    errCopyTextTitle: "Копировать лист как текст (немедленно):",
    errCopyTextText: "Используйте вкладку «Лист в тексте (TXT)» ниже, чтобы скопировать идеально отформатированное резюме всей вашей практики и вставить его в Word, WhatsApp, Telegram или Заметки. Так вы ничего не потеряете!",
    altTitle: "💡 Эффективные альтернативы экспорта, если прямое скачивание не отвечает:",
    altIntro: "Встроенные просмотрщики (iframe) иногда ограничивают скачивание файлов. Выберите любую из этих 3 мгновенных альтернатив, чтобы сохранить ваши отредактированные афоризмы:",
    alt1Title: "Копировать в буфер обмена (быстро):",
    alt1Text: "Нажмите «Копировать в буфер обмена» ниже, чтобы скопировать изображение и вставить его прямо в WhatsApp, Telegram или Word.",
    alt2Title: "Сохранить изображение из предпросмотра:",
    alt2Text: "Щёлкните правой кнопкой по предпросмотру изображения и выберите «Сохранить изображение как...» (или нажмите и удерживайте на телефоне).",
    alt3Title: "Копировать лист как текст:",
    alt3Text: "Используйте вкладку «Текст», чтобы мгновенно скопировать все ваши отформатированные тексты в готовом для хранения виде.",
    tabImage: "🖼️ Лист в изображении (PNG)",
    tabText: "📝 Лист в тексте (TXT)",
    textReadyLabel: "Текст листа готов для копирования и архивирования:",
    copied: "Скопировано!",
    copy: "Копировать",
    captureFailedFallback: "Изображение недоступно на этой вкладке из-за настроек безопасности. Пожалуйста, используйте вкладку «📝 Лист в тексте (TXT)» выше, чтобы получить ваши тексты, или откройте приложение в новой обычной вкладке.",
    btnOpenNewTab: "Открыть в новой вкладке",
    btnImageCopied: "Изображение скопировано!",
    btnCopyImage: "Копировать изображение",
    btnTextCopied: "Текст скопирован!",
    btnCopyTextWs: "Копировать текстовый лист",
    btnRetryDownload: "Повторить скачивание",
    btnClose: "Закрыть"
  },
  hi: {
    pending: "(उत्तर देना बाक़ी है)",
    txtHeader: "कार्य-पत्र: स्वर्णिम नियम",
    txtBasedOn: "सिलो के स्कूल पर आधारित",
    txtSection1: "I. आत्म-जागरूक, प्रेरित और संकल्पित चेतना",
    txtSection2: "II. बदलाव और स्तर",
    txtSection3: "III. विचलित, बाध्यकारी, यांत्रिक चेतना",
    txtSection4: "IV. निवेदन या सूक्तियाँ",
    txtQ1: "1. मुझे कौन-सा दुर्व्यवहार स्वीकार नहीं? (दुर्व्यवहार का रूप):",
    txtQ2: "2. 1 के सामने मुझे कैसा महसूस होता है और मेरी प्रतिक्रिया क्या होती है? (दुख/प्रतिक्रिया):",
    txtQ3: "3. मुझे अपने साथ कैसा व्यवहार चाहिए? (1 का विपरीत सद्गुण, और वही व्यवहार मैं दूँ):",
    txtQ4: "4. यह मैं कैसे करूँ? (2 के विपरीत सद्गुण से):",
    txtQ5: "5. स्तर 3 से 2 पर मेरा गिरना कैसे होता है? (गिरने की भावना):",
    txtQ6: "6. स्तर 2 से 3 पर मेरा ऊपर उठना कैसे होता है? (ऊपर उठने का कर्म):",
    txtQ7: "7. स्तर 4 से 1 पर मेरा गिरना कैसे होता है? (गिरने की भावना):",
    txtQ8: "8. स्तर 1 से 4 पर मेरा ऊपर उठना कैसे होता है? (ऊपर उठने का कर्म):",
    txtAfMain: "मुख्य सूक्ति (6+8):",
    txtAfOpt1: "ऐच्छिक I (संकट से उबरना):",
    txtAfOpt2: "ऐच्छिक II (टकराव का समाधान):",
    txtAfOpt3: "ऐच्छिक III (अस्वीकार से ऊपर उठना):",
    txtGeneratedOn: "तैयार करने की तारीख़",
    headerTitle: "अभ्यास का आधिकारिक सार-पत्र (डाउनलोड योग्य)",
    headerDesc: "यह रूपरेखा सिलो के स्कूल के अनुसार चेतना को चित्र के रूप में व्यवस्थित करती है। अभ्यास की आपसी संगति जाँचने के लिए इसका उपयोग कीजिए।",
    btnCopiedWorksheet: "कार्य-पत्र कॉपी हो गया!",
    btnCopyWorksheet: "कार्य-पत्र टेक्स्ट के रूप में कॉपी करें",
    btnGenerating: "चित्र बन रहा है...",
    btnDownloaded: "डाउनलोड हो गया!",
    btnDownloadPng: "कार्य-पत्र चित्र के रूप में डाउनलोड करें (PNG)",
    guideTitle: "💡 अपना कार्य-पत्र सहेजने और निर्यात करने की मार्गदर्शिका",
    guideIntro: "अपना कार्य-पत्र, उसमें जुड़ी 3 ऐच्छिक सूक्तियों के साथ, सहेजने के लिए आपके पास कई भरोसेमंद तरीक़े हैं — भले ही आप किसी परीक्षण-परिवेश में हों या मोबाइल पर:",
    guideStep1Title: "1. स्वचालित डाउनलोड:",
    guideStep1Text: "इसे सीधे सहेजने की कोशिश के लिए ऊपर के बटन «कार्य-पत्र चित्र के रूप में डाउनलोड करें (PNG)» पर क्लिक कीजिए।",
    guideStep2Title: "2. विकल्पों का पैनल और हाथ से सहेजना (सुझाया गया):",
    guideStep2Text: "ऊपर के डाउनलोड बटन पर क्लिक करने पर एक सुरक्षित पॉप-अप पैनल भी अपने-आप खुलेगा। वहाँ से आप ये कर सकेंगे:",
    guideOpenTabTitle: "नए टैब में खोलें:",
    guideOpenTabText: "चित्र को ऐप के दर्शक से बाहर पूरे आकार में देखिए, ताकि उसे ब्राउज़र से सीधे सहेज सकें।",
    guideClipboardTitle: "क्लिपबोर्ड पर कॉपी करें:",
    guideClipboardText: "चित्र को तुरंत कॉपी कीजिए और सीधे WhatsApp, Telegram, ईमेल या Word में चिपकाइए।",
    guideRightClickTitle: "राइट-क्लिक से सहेजें:",
    guideRightClickText: "खुली हुई खिड़की में बने चित्र के पूर्वावलोकन पर सीधे राइट-क्लिक कीजिए और «चित्र को इस रूप में सहेजें...» चुनिए।",
    cardTitle: "कार्य-पत्र • स्वर्णिम नियम",
    cardMethod: "सक्रिय अहिंसा की विधि",
    zoneTop: "आत्म-जागरूक, प्रेरित और संकल्पित चेतना",
    zoneBottom: "विचलित, बाध्यकारी, यांत्रिक और क्षतिपूरक चेतना",
    q1Label: "1 मुझे कौन-सा दुर्व्यवहार स्वीकार नहीं?",
    q2Label: "2 1 के सामने मुझे कैसा महसूस होता है और मेरी प्रतिक्रिया क्या होती है?",
    q3Label: "3 मुझे अपने साथ कैसा व्यवहार चाहिए?: 1 के विपरीत सद्गुण वाला, और वही व्यवहार मैं दूँ।",
    q4Label: "4 यह मैं कैसे करूँ? 2 के विपरीत सद्गुण से।",
    q5Label: "5 स्तर 3 से 2 पर मेरा गिरना कैसे होता है?",
    q6Label: "6 स्तर 2 से 3 पर मेरा ऊपर उठना कैसे होता है?",
    q7Label: "7 स्तर 4 से 1 पर मेरा गिरना कैसे होता है?",
    q8Label: "8 स्तर 1 से 4 पर मेरा ऊपर उठना कैसे होता है?",
    aforismosHeader: "निवेदन या सूक्तियाँ",
    afMainLabel: "मुख्य सूक्ति 6+8",
    afOpt1Label: "ऐच्छिक I: 1 के सामने 2 से बचने के लिए, मैं 3 का व्यवहार दूँ, 4 के ज़रिए",
    afOpt2Label: "ऐच्छिक II: 5 के कारण 2 में गिरना, पर 6 के ज़रिए 3 तक उठना",
    afOpt3Label: "ऐच्छिक III: 7 के कारण 1 में गिरना, पर 8 के ज़रिए 4 तक उठना",
    footCopyright: "© 2026 - चिंतन और मेल-मिलाप का अभ्यास",
    footDeveloped: "R.E.R.H. द्वारा विनम्रता और भलाई के साथ विकसित",
    modalTitle: "आधिकारिक कार्य-पत्र",
    errBlockedTitle: "⚠️ टैब की सुरक्षा के कारण चित्र बनाना रोक दिया गया",
    errBlockedText: "इस संपादक के दर्शक (iframe) की सुरक्षा-पाबंदियों के कारण ब्राउज़र स्क्रीन की तस्वीर लेने से रोक रहा है। चिंता न कीजिए! आपका काम पूरी तरह सुरक्षित है:",
    errOpenNewWindowTitle: "नई विंडो में खोलें (सुझाया गया):",
    errOpenNewWindowText: "ऐप को एक सामान्य नए टैब में खोलने के लिए संपादक के पूर्वावलोकन के ऊपरी दाएँ कोने में पूरी स्क्रीन वाले बटन (शेयर या बाहरी विंडो का चिह्न) पर क्लिक कीजिए। वहाँ PNG डाउनलोड तुरंत काम करेगा।",
    errCopyTextTitle: "कार्य-पत्र टेक्स्ट के रूप में कॉपी करें (तुरंत):",
    errCopyTextText: "अपने पूरे अभ्यास का सुव्यवस्थित सार कॉपी करके Word, WhatsApp, Telegram या नोट्स में चिपकाने के लिए नीचे का टैब «टेक्स्ट में कार्य-पत्र (TXT)» इस्तेमाल कीजिए। इस तरह आपका कोई काम नहीं खोएगा!",
    altTitle: "💡 अगर सीधा डाउनलोड काम न करे, तो निर्यात के कारगर विकल्प:",
    altIntro: "दूसरे पन्नों में जड़े हुए दर्शक (iframe) कभी-कभी फ़ाइलों का डाउनलोड रोक देते हैं। अपनी संपादित सूक्तियाँ सहेजने के लिए इन 3 तुरंत काम करने वाले विकल्पों में से कोई भी चुनिए:",
    alt1Title: "क्लिपबोर्ड पर कॉपी करें (तेज़):",
    alt1Text: "चित्र को कॉपी करके सीधे WhatsApp, Telegram या Word में चिपकाने के लिए नीचे «क्लिपबोर्ड पर कॉपी करें» पर क्लिक कीजिए।",
    alt2Title: "नीचे से चित्र सहेजें:",
    alt2Text: "चित्र के पूर्वावलोकन पर राइट-क्लिक कीजिए और «चित्र को इस रूप में सहेजें...» चुनिए (या मोबाइल पर देर तक दबाए रखिए)।",
    alt3Title: "कार्य-पत्र टेक्स्ट में कॉपी करें:",
    alt3Text: "अपने सारे पाठ तुरंत, सहेजने के लिए तैयार रूप में कॉपी करने के लिए «टेक्स्ट» टैब इस्तेमाल कीजिए।",
    tabImage: "🖼️ चित्र में कार्य-पत्र (PNG)",
    tabText: "📝 टेक्स्ट में कार्य-पत्र (TXT)",
    textReadyLabel: "कार्य-पत्र का पाठ, कॉपी करने और सँभालकर रखने के लिए तैयार:",
    copied: "कॉपी हो गया!",
    copy: "कॉपी करें",
    captureFailedFallback: "सुरक्षा-नियमों के कारण इस टैब में चित्र उपलब्ध नहीं है। कृपया अपने पाठ वापस पाने के लिए ऊपर का टैब «📝 टेक्स्ट में कार्य-पत्र (TXT)» इस्तेमाल कीजिए, या ऐप को एक सामान्य नए टैब में खोलिए।",
    btnOpenNewTab: "नए टैब में खोलें",
    btnImageCopied: "चित्र कॉपी हो गया!",
    btnCopyImage: "चित्र कॉपी करें",
    btnTextCopied: "टेक्स्ट कॉपी हो गया!",
    btnCopyTextWs: "कार्य-पत्र का टेक्स्ट कॉपी करें",
    btnRetryDownload: "डाउनलोड फिर से आज़माएँ",
    btnClose: "बंद करें"
  }
};

interface SiloSchemaTableProps {
  answers: Record<number, string>;
  aforismos: AforismoOutput[];
  customAforismos: Record<string, string>;
  theme?: "light" | "dark";
  lang?: Lang;
}

export default function SiloSchemaTable({
  answers,
  aforismos,
  customAforismos,
  theme = "light",
  lang = "es"
}: SiloSchemaTableProps) {
  const isDark = theme === "dark";
  const s = WORKSHEET_T[lang];
  const [copyTextSuccess, setCopyTextSuccess] = useState(false);

  // Retrieve individual answers or defaults
  const getAns = (num: number) => {
    return answers[num] || s.pending;
  };

  // Get active aforismo text (original or customized)
  const getAfText = (id: string) => {
    if (customAforismos[id] !== undefined) {
      return customAforismos[id];
    }
    const af = aforismos.find(a => a.id === id);
    return af ? af.text : "";
  };

  // Formatted strings for optional aforismos
  const af_6_8 = getAfText("6+8");
  const af_opt_1 = getAfText("opcional-1");
  const af_opt_2 = getAfText("opcional-2");
  const af_opt_3 = getAfText("opcional-3");

  const getFormattedTextWorksheet = () => {
    return `==================================================
${s.txtHeader}
${s.txtBasedOn}
==================================================

${s.txtSection1}
--------------------------------------------------
${s.txtQ3}
   "${getAns(3)}"

${s.txtQ4}
   "${getAns(4)}"

${s.txtSection2}
--------------------------------------------------
${s.txtQ5}
   "${getAns(5)}"

${s.txtQ6}
   "${getAns(6)}"

${s.txtQ7}
   "${getAns(7)}"

${s.txtQ8}
   "${getAns(8)}"

${s.txtSection3}
--------------------------------------------------
${s.txtQ2}
   "${getAns(2)}"

${s.txtQ1}
   "${getAns(1)}"

--------------------------------------------------
${s.txtSection4}
--------------------------------------------------
* ${s.txtAfMain}
  "${af_6_8}"

* ${s.txtAfOpt1}
  "${af_opt_1}"

* ${s.txtAfOpt2}
  "${af_opt_2}"

* ${s.txtAfOpt3}
  "${af_opt_3}"

==================================================
${s.txtGeneratedOn}: ${new Date().toLocaleDateString(LOCALES[lang])}
`;
  };

  const handleCopyTextWorksheet = () => {
    const text = getFormattedTextWorksheet();
    navigator.clipboard.writeText(text).then(() => {
      setCopyTextSuccess(true);
      setTimeout(() => setCopyTextSuccess(false), 3000);
    }).catch((err) => {
      console.error("Failed to copy text: ", err);
      // Fallback using legacy selection if navigator.clipboard is blocked
      const el = document.getElementById("fallback-textarea") as HTMLTextAreaElement;
      if (el) {
        try {
          el.select();
          document.execCommand("copy");
          setCopyTextSuccess(true);
          setTimeout(() => setCopyTextSuccess(false), 3000);
        } catch (copyErr) {
          console.error("ExecCommand fallback failed:", copyErr);
        }
      }
    });
  };

  return (
    <div className="space-y-6" id="silo-schema-section">
      
      {/* Visual Header / Actions bar */}
      <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b pb-4 ${
        isDark ? "border-slate-800" : "border-slate-100"
      }`}>
        <div className="space-y-1">
          <h3 className={`text-base font-bold flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
            <Sparkles className="w-4 h-4 text-amber-500" />
            {s.headerTitle}
          </h3>
          <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            {s.headerDesc}
          </p>
        </div>

        <button
          onClick={handleCopyTextWorksheet}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition duration-150 cursor-pointer shadow-sm border ${
            copyTextSuccess
              ? "bg-emerald-600 border-emerald-600 text-white"
              : isDark
              ? "bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200"
              : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700"
          }`}
        >
          {copyTextSuccess ? (
            <>
              <Check className="w-4 h-4" />
              <span>{s.btnCopiedWorksheet}</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>{s.btnCopyWorksheet}</span>
            </>
          )}
        </button>
      </div>

      {/* SCHEMA WORKSPACE — hidden on mobile, visible on tablet/desktop */}
      <div className={`hidden sm:block p-4 sm:p-6 border rounded-2xl shadow-md ${
        isDark 
          ? "bg-slate-950 border-slate-800 text-slate-100" 
          : "bg-white border-slate-200 text-slate-900"
      }`}
      >
          {/* Main Title Metadata in the captured card */}
          <div className="flex justify-between items-center border-b pb-4 mb-4 border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-lg font-black tracking-tight uppercase text-amber-500">
                {s.cardTitle}
              </h2>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-0.5">
                {s.txtBasedOn}
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono uppercase bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-800 text-slate-500 font-bold">
                {s.cardMethod}
              </span>
            </div>
          </div>

          {/* TWO COLUMN GRID TABLE STRUCTURE MATCHING THE USER ATTACHMENT */}
          <div className="grid grid-cols-12 border-2 border-slate-900 dark:border-slate-700">
            
            {/* COLUMN 1 (SPAN 8): CONCIENCIA DE SÍ & PERTURBADA GRID */}
            <div className="col-span-8 flex flex-col border-r-2 border-slate-900 dark:border-slate-700">
              
              {/* TOP HEADER LEFT: CONCIENCIA DE SÍ, INSPIRADA E INTENCIONADA */}
              <div className="bg-slate-100 dark:bg-slate-900 border-b-2 border-slate-900 dark:border-slate-700 py-2.5 px-3 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 block">
                  {s.zoneTop}
                </span>
              </div>

              {/* ROW 1: Points 3 and 4 */}
              <div className="grid grid-cols-2 border-b-2 border-slate-900 dark:border-slate-700 min-h-[140px]">
                {/* Point 3 */}
                <div className="p-4 border-r-2 border-slate-900 dark:border-slate-700 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase text-amber-600 block">
                      {s.q3Label}
                    </span>
                  </div>
                  <p className="text-sm font-bold italic text-indigo-600 dark:text-amber-300 leading-relaxed pt-2">
                    "{getAns(3)}"
                  </p>
                </div>

                {/* Point 4 */}
                <div className="p-4 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase text-amber-600 block">
                      {s.q4Label}
                    </span>
                  </div>
                  <p className="text-sm font-bold italic text-indigo-600 dark:text-amber-300 leading-relaxed pt-2">
                    "{getAns(4)}"
                  </p>
                </div>
              </div>

              {/* ROW 2: Middle Transitions (Points 5, 6, X Spacer, 7, 8) */}
              <div className="grid grid-cols-11 border-b-2 border-slate-900 dark:border-slate-700 min-h-[140px]">
                
                {/* Point 5 (Span 2) */}
                <div className="col-span-2 p-3 border-r-2 border-slate-900 dark:border-slate-700 flex flex-col justify-between">
                  <span className="text-[9px] font-black uppercase text-rose-500 block leading-tight">
                    {s.q5Label}
                  </span>
                  <p className="text-xs font-bold italic text-slate-800 dark:text-slate-200 leading-normal pt-1.5 line-clamp-4">
                    {getAns(5)}
                  </p>
                </div>

                {/* Point 6 (Span 3) */}
                <div className="col-span-3 p-3 border-r-2 border-slate-900 dark:border-slate-700 flex flex-col justify-between bg-emerald-500/5">
                  <span className="text-[9px] font-black uppercase text-emerald-600 block leading-tight">
                    {s.q6Label}
                  </span>
                  <p className="text-xs font-bold italic text-indigo-600 dark:text-amber-300 leading-normal pt-1.5 line-clamp-4">
                    {getAns(6)}
                  </p>
                </div>

                {/* DOUBLE LINE / CROSS "X" SPACER (Span 1) */}
                <div className="col-span-1 border-r-2 border-slate-900 dark:border-slate-700 flex items-center justify-center bg-slate-50 dark:bg-slate-900 relative">
                  <svg className="w-full h-full absolute inset-0 text-slate-400 dark:text-slate-600 opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="10" y1="10" x2="90" y2="90" stroke={isDark ? "#475569" : "#94a3b8"} strokeWidth="2.5" />
                    <line x1="90" y1="10" x2="10" y2="90" stroke={isDark ? "#475569" : "#94a3b8"} strokeWidth="2.5" />
                  </svg>
                  <span className="text-[9px] font-black uppercase text-slate-400 dark:text-slate-600 bg-white dark:bg-slate-950 px-0.5 z-10 select-none">
                    X
                  </span>
                </div>

                {/* Point 7 (Span 2) */}
                <div className="col-span-2 p-3 border-r-2 border-slate-900 dark:border-slate-700 flex flex-col justify-between">
                  <span className="text-[9px] font-black uppercase text-rose-500 block leading-tight">
                    {s.q7Label}
                  </span>
                  <p className="text-xs font-bold italic text-slate-800 dark:text-slate-200 leading-normal pt-1.5 line-clamp-4">
                    {getAns(7)}
                  </p>
                </div>

                {/* Point 8 (Span 3) */}
                <div className="col-span-3 p-3 flex flex-col justify-between bg-emerald-500/5">
                  <span className="text-[9px] font-black uppercase text-emerald-600 block leading-tight">
                    {s.q8Label}
                  </span>
                  <p className="text-xs font-bold italic text-indigo-600 dark:text-amber-300 leading-normal pt-1.5 line-clamp-4">
                    {getAns(8)}
                  </p>
                </div>

              </div>

              {/* ROW 3: Points 2 and 1 */}
              <div className="grid grid-cols-2 min-h-[140px]">
                {/* Point 2 */}
                <div className="p-4 border-r-2 border-slate-900 dark:border-slate-700 flex flex-col justify-between bg-slate-900/5 dark:bg-slate-900/10">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 block">
                      {s.q2Label}
                    </span>
                  </div>
                  <p className="text-sm font-bold italic text-slate-700 dark:text-slate-300 leading-relaxed pt-2">
                    "{getAns(2)}"
                  </p>
                </div>

                {/* Point 1 */}
                <div className="p-4 flex flex-col justify-between bg-slate-900/5 dark:bg-slate-900/10">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 block">
                      {s.q1Label}
                    </span>
                  </div>
                  <p className="text-sm font-bold italic text-slate-700 dark:text-slate-300 leading-relaxed pt-2">
                    "{getAns(1)}"
                  </p>
                </div>
              </div>

              {/* BOTTOM FOOTER LEFT: CONCIENCIA PERTURBADA, COMPULSIVA, MECÁNICA Y COMPENSATORIA */}
              <div className="bg-slate-100 dark:bg-slate-900 border-t-2 border-slate-900 dark:border-slate-700 py-2.5 px-3 text-center mt-auto">
                <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 block">
                  {s.zoneBottom}
                </span>
              </div>

            </div>

            {/* COLUMN 2 (SPAN 4): PEDIDOS O AFORISMOS */}
            <div className="col-span-4 flex flex-col bg-slate-100 dark:bg-slate-900 border-l-2 border-slate-900 dark:border-slate-700">
              
              {/* TOP HEADER RIGHT: PEDIDOS O AFORISMOS */}
              <div className="bg-slate-250 dark:bg-slate-800 border-b-2 border-slate-900 dark:border-slate-700 py-2.5 px-3 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-amber-400 block">
                  {s.aforismosHeader}
                </span>
              </div>

              {/* 4 Rows of Aforismos */}
              <div className="flex-1 flex flex-col justify-between divide-y-2 divide-slate-900 dark:divide-slate-700">
                
                {/* Row 1: Aforismo 6+8 */}
                <div className="p-3.5 flex-1 flex flex-col justify-center bg-amber-500/10 dark:bg-amber-950/40">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-amber-700 dark:text-amber-400 block mb-1.5">
                    {s.afMainLabel}
                  </span>
                  <p className="text-xs font-bold text-amber-950 dark:text-amber-200 leading-relaxed">
                    {af_6_8}
                  </p>
                </div>

                {/* Row 2: Opcional I */}
                <div className="p-3.5 flex-1 flex flex-col justify-center bg-slate-50 dark:bg-slate-900">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-indigo-700 dark:text-indigo-400 block mb-1.5 leading-tight">
                    {s.afOpt1Label}
                  </span>
                  <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                    {af_opt_1}
                  </p>
                </div>

                {/* Row 3: Opcional II */}
                <div className="p-3.5 flex-1 flex flex-col justify-center bg-slate-50 dark:bg-slate-900">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-indigo-700 dark:text-indigo-400 block mb-1.5 leading-tight">
                    {s.afOpt2Label}
                  </span>
                  <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                    {af_opt_2}
                  </p>
                </div>

                {/* Row 4: Opcional III */}
                <div className="p-3.5 flex-1 flex flex-col justify-center bg-slate-50 dark:bg-slate-900">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-indigo-700 dark:text-indigo-400 block mb-1.5 leading-tight">
                    {s.afOpt3Label}
                  </span>
                  <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                    {af_opt_3}
                  </p>
                </div>

              </div>

              {/* BOTTOM FOOTER RIGHT: PEDIDOS O AFORISMOS */}
              <div className="bg-slate-250 dark:bg-slate-800 border-t-2 border-slate-900 dark:border-slate-700 py-2.5 px-3 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-amber-400 block">
                  {s.aforismosHeader}
                </span>
              </div>

            </div>

          </div>

          {/* Footer citation inside the image itself */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-150 dark:border-slate-850 text-[9px] text-slate-400 dark:text-slate-500">
            <span>{s.footCopyright}</span>
            <span>{s.footDeveloped}</span>
          </div>
        </div>

      {/* TEXT WORKSHEET — visible directly, no modal needed */}
      <div className={`rounded-2xl border p-4 sm:p-6 space-y-3 ${
        isDark ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-200"
      }`}>
        <div className="flex justify-between items-center">
          <span className={`text-xs font-bold ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {s.textReadyLabel}
          </span>
          <button
            onClick={handleCopyTextWorksheet}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              copyTextSuccess
                ? "bg-emerald-600 text-white"
                : isDark
                ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
                : "bg-slate-200 hover:bg-slate-300 text-slate-700"
            }`}
          >
            {copyTextSuccess ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copyTextSuccess ? s.btnCopiedWorksheet : s.btnCopyWorksheet}</span>
          </button>
        </div>
        <textarea
          id="fallback-textarea"
          readOnly
          value={getFormattedTextWorksheet()}
          className={`w-full h-64 p-3.5 font-mono text-xs rounded-xl border leading-relaxed focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none ${
            isDark
              ? "bg-slate-950 border-slate-800 text-slate-300"
              : "bg-white border-slate-200 text-slate-800"
          }`}
          onClick={(e) => {
            (e.target as HTMLTextAreaElement).select();
          }}
        />
      </div>

    </div>
  );
}
