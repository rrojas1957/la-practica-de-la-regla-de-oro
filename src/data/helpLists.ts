export interface HelpCategory {
  categoryName: string;
  words: string[];
}

export interface StepConfig {
  id: number;
  label: string;
  shortName: string;
  question: string;
  description: string;
  helpDescription: string;
  placeholder: string;
  type: 'dark' | 'luminous' | 'transition';
  direction?: 'down' | 'up';
  fromId?: number;
  toId?: number;
  categories: HelpCategory[];
}

export const INTRODUCTION_TEXT = {
  title: "La Práctica de la Regla de Oro",
  inspiration: "Esta práctica se inspira en la Regla de Oro del Nuevo Humanismo, recogida en \"La Regla de Oro de la No Violencia\" de Roberto Kohanoff e Isabel Lazzaroni.",
  siloQuote: "Principio central de Silo: \"Cuando tratas a los demás como quieres que te traten, te liberas.\"",
  fullExplanation: "Todas las personas experimentamos momentos de tensión, enojo, frustración o confusión. A veces reaccionamos de forma puramente mecánica o compulsiva desde un bajo nivel de conciencia. Esta práctica es una herramienta de autoconocimiento y transformación personal diseñada para ayudarte a detener la reacción automática, comprender tus estados internos y elegir el buen trato de manera consciente. No es una norma rígida ni una obligación moral, sino un camino hacia una vida con menos sufrimiento, más unidad interna y verdadera libertad.",
  benefitsTitle: "La práctica de la Regla de Oro nos ayuda a:",
  benefits: [
    "Detener la reacción compulsiva y elegir cómo queremos actuar (respuesta diferida).",
    "Comprender por qué ciertas actitudes o comportamientos de otros nos afectan tanto.",
    "Liberarnos de tensiones internas, contradicciones y estados de ánimo (climas) negativos.",
    "Mejorar nuestras relaciones, porque dejamos de pedir que el otro cambie y empezamos a cambiar nosotros.",
    "Construir un estilo de vida más coherente, más amable y más libre.",
    "No se trata de ser perfectos ni de \"portarse bien\". Se trata de aprender a vivir con más conciencia y menos violencia interna, paso a paso."
  ],
  purposeTitle: "Esta práctica sirve para:",
  purposes: [
    "Comprendernos mejor y reconocer qué nos duele y por qué.",
    "Detectar patrones repetidos que vienen de nuestra historia personal.",
    "Romper la cadena de violencia interna y externa.",
    "Actuar desde nuestras mejores virtudes, no desde el impulso del momento.",
    "Elevar nuestro nivel de conciencia, lo que mejora nuestra vida y la de quienes nos rodean.",
    "Con el tiempo, esta práctica se convierte en una herramienta para vivir con más unidad interna: pensar, sentir y actuar en la misma dirección.",
    "Esta aplicación te acompañará paso a paso para que puedas practicarla de manera sencilla, profunda y accesible. No importa tu edad, tu cultura, tu historia o tu situación actual: Todos podemos aprender a vivir con menos violencia y más libertad interna."
  ]
};

export const STEPS: StepConfig[] = [
  {
    id: 1,
    label: "Punto 1: El maltrato que rechazo",
    shortName: "Maltrato que rechazo",
    question: "¿Cuál es el maltrato que rechazo?",
    description: "Identifica aquella actitud, acción o comportamiento ajeno que te resulta violento, doloroso o inaceptable. Es la situación externa que perturba tu bienestar.",
    helpDescription: "Selecciona el tipo de maltrato que más te resuene, o escribe tu propia palabra:",
    placeholder: "Ej: Excluyentes, Indiferencia, Descalificación...",
    type: "dark",
    categories: [
      {
        categoryName: "Exclusión e Indiferencia",
        words: ["Excluyentes", "Indiferencia", "Ignorado", "Rechazo", "Aislamiento", "Desprecio", "Olvido", "Marginalidad", "Invisibilidad"]
      },
      {
        categoryName: "Agresión y Descalificación",
        words: ["Agresión", "Insultos", "Gritos", "Humillación", "Burlas", "Descalificación", "Crítica", "Juicio", "Menosprecio", "Desdén"]
      },
      {
        categoryName: "Control y Dominación",
        words: ["Sometimiento", "Manipulación", "Exigencia", "Injusticia", "Control", "Abuso de poder", "Imposición", "Autoritarismo", "Mentira", "Traición"]
      }
    ]
  },
  {
    id: 2,
    label: "Punto 2: Mi reacción y estado",
    shortName: "Mi reacción / estado",
    question: "¿Cómo me siento y qué hago frente a ese maltrato?",
    description: "Reconoce tu respuesta mecánica ante el Punto 1. Refleja tu estado perturbado, la respuesta de defensa, enojo o sufrimiento que surge automáticamente.",
    helpDescription: "Selecciona cómo reaccionas o te sientes habitualmente ante esa perturbación:",
    placeholder: "Ej: Sufro y me alejo aislándome, Grito con furia, Me culpo...",
    type: "dark",
    categories: [
      {
        categoryName: "Retraimiento y Sufrimiento",
        words: ["Sufro y me alejo aislándome", "Me aíslo", "Me deprimo", "Me silencio con rencor", "Siento culpa", "Me resigno", "Me siento impotente"]
      },
      {
        categoryName: "Enojo y Contraataque",
        words: ["Grito con furia", "Ataco de vuelta", "Busco venganza", "Me irrito", "Reclamo con violencia", "Discuto sin escuchar", "Pago con la misma moneda"]
      },
      {
        categoryName: "Ansiedad y Parálisis",
        words: ["Siento miedo y huyo", "Me paralizo", "Me angustio", "Me tenso corporalmente", "Siento desamparo", "Busco aprobación sumisa"]
      }
    ]
  },
  {
    id: 3,
    label: "Punto 3: El trato que pido y doy",
    shortName: "El trato que pido / doy",
    question: "¿Qué trato le pido a quien me maltrató para darlo yo mismo?",
    description: "La Virtud opuesta al Punto 1. Es el buen trato que te gustaría recibir y que te comprometes a dar primero, elevando tu nivel de conciencia.",
    helpDescription: "Selecciona el buen trato inspirador que se opone al maltrato del Punto 1:",
    placeholder: "Ej: Consideración e inclusión, Aprecio genuino, Escucha activa...",
    type: "luminous",
    categories: [
      {
        categoryName: "Inclusión y Acogida",
        words: ["Consideración e inclusión", "Aceptación", "Acogida sincera", "Escucha atenta", "Reconocimiento", "Integración", "Cercanía"]
      },
      {
        categoryName: "Afecto y Valoración",
        words: ["Aprecio genuino", "Respeto profundo", "Amabilidad", "Tolerancia", "Cuidado mutuo", "Compasión", "Empatía", "Valoración"]
      },
      {
        categoryName: "Libertad y Paz",
        words: ["Libertad", "Confianza absoluta", "Apoyo incondicional", "Justicia", "Comprensión", "Sinceridad", "Paz interior"]
      }
    ]
  },
  {
    id: 4,
    label: "Punto 4: El buen trato alternativo",
    shortName: "Buen trato alternativo",
    question: "¿Cómo lo hago? (Buen trato opuesto a mi reacción del Punto 2)",
    description: "La Virtud opuesta al Punto 2. Es la acción consciente y constructiva que realizas en lugar de tu reacción reactiva habitual.",
    helpDescription: "Selecciona la acción virtuosa que neutraliza la reacción negativa del Punto 2:",
    placeholder: "Ej: Me acerco y aprecio a los demás, Dialogo con calma, Pongo límites sanos...",
    type: "luminous",
    categories: [
      {
        categoryName: "Acercamiento y Valoración",
        words: ["Me acerco y aprecio a los demás", "Dialogo con honestidad", "Expreso mi afecto", "Acompaño con paciencia", "Valoro las virtudes del otro"]
      },
      {
        categoryName: "Calma y Serenidad",
        words: ["Respiro con calma", "Escucho con apertura", "Actúo sin prisa", "Busco comprender antes de juzgar", "Perdono sinceramente", "Reconcilio"]
      },
      {
        categoryName: "Firmeza y Autocuidado",
        words: ["Pongo límites sanos con amor", "Me expreso con firmeza y calma", "Me valoro a mí mismo", "Confío en mi fuerza interna", "Me abro sin miedo"]
      }
    ]
  },
  {
    id: 5,
    label: "Punto 5: Mi camino de caída (De 3 a 2)",
    shortName: "Camino de caída 3 ➔ 2",
    question: "¿Cómo caigo del trato virtuoso (3) a la reacción mecánica (2)?",
    description: "Identifica qué actitud, creencia, temor, expectativa o vulnerabilidad sabotea tus buenas intenciones de trato y te hace caer de nuevo en el sufrimiento o enojo.",
    helpDescription: "Selecciona el factor interno que te hace descender a la reactividad del Punto 2:",
    placeholder: "Ej: Inseguridad, Expectativas frustradas, Orgullo...",
    type: "transition",
    direction: "down",
    fromId: 3,
    toId: 2,
    categories: [
      {
        categoryName: "Inseguridad y Duda",
        words: ["Inseguridad", "Desconfianza", "Dudas sobre mí mismo", "Celos", "Vulnerabilidad herida", "Temor al rechazo"]
      },
      {
        categoryName: "Expectativas y Orgullo",
        words: ["Expectativas excesivas", "Orgullo herido", "Soberbia", "Vanidad", "Egoísmo", "Exigencia perfeccionista"]
      },
      {
        categoryName: "Debilidad y Miedo",
        words: ["Miedo al fracaso", "Miedo al dolor", "Cobardía social", "Comodidad pasiva", "Pereza interna", "Apatía"]
      }
    ]
  },
  {
    id: 6,
    label: "Punto 6: Mi camino de subida (De 2 a 3)",
    shortName: "Camino de subida 2 ➔ 3",
    question: "¿Cómo subo del estado perturbado (2) al trato virtuoso (3)?",
    description: "Reconoce la acción intencionada que te permite elevar tu nivel de conciencia, romper el bucle del sufrimiento o enojo y reconectarte con la virtud.",
    helpDescription: "Selecciona el puente que te ayuda a volver al estado luminoso del Punto 3:",
    placeholder: "Ej: Expreso lo que siento y pienso, Tomo conciencia, Respiro...",
    type: "transition",
    direction: "up",
    fromId: 2,
    toId: 3,
    categories: [
      {
        categoryName: "Comunicación Honesta",
        words: ["Expreso lo que siento y pienso", "Pido ayuda con humildad", "Digo lo que me pasa con honestidad", "Dialogo con franqueza", "Hablo desde el corazón"]
      },
      {
        categoryName: "Conciencia y Reflexión",
        words: ["Reflexiono en silencio", "Me doy cuenta de la mecanicidad", "Respiro profundo y observo", "Acepto mi parte", "Medito en calma"]
      },
      {
        categoryName: "Acción Valiente",
        words: ["Tomo la iniciativa para reparar", "Me arriesgo a cambiar", "Actúo con valentía", "Me hago responsable de mí", "Decido no dañar"]
      }
    ]
  },
  {
    id: 7,
    label: "Punto 7: Mi camino de caída (De 4 a 1)",
    shortName: "Camino de caída 4 ➔ 1",
    question: "¿Cómo caigo del buen trato alternativo (4) al maltrato reactivo (1)?",
    description: "Identifica qué te desgasta o frustra cuando intentas mantener un buen trato, haciéndote perder la paciencia y caer de nuevo en una actitud violenta o de rechazo.",
    helpDescription: "Selecciona qué apaga tu motivación y te hace caer de nuevo en conductas nocivas:",
    placeholder: "Ej: Hartazgo, Cansancio extremo, Frustración...",
    type: "transition",
    direction: "down",
    fromId: 4,
    toId: 1,
    categories: [
      {
        categoryName: "Cansancio y Saturación",
        words: ["Hartazgo", "Cansancio acumulado", "Saturación mental", "Agobio de la rutina", "Estrés", "Desgaste energético"]
      },
      {
        categoryName: "Frustración y Decepción",
        words: ["Decepción del otro", "Frustración al no ver cambios", "Pesimismo", "Desinterés", "Despecho", "Siento que no vale la pena"]
      },
      {
        categoryName: "Impaciencia e Irritabilidad",
        words: ["Impaciencia", "Ira contenida", "Tolerancia cero", "Fastidio acumulado", "Irritación constante", "Ganas de castigar"]
      }
    ]
  },
  {
    id: 8,
    label: "Punto 8: Mi camino de subida (De 1 a 4)",
    shortName: "Camino de subida 1 ➔ 4",
    question: "¿Cómo subo de la actitud de rechazo/maltrato (1) al buen trato alternativo (4)?",
    description: "Descubre la intención o acción profunda que te permite superar el rechazo, reconciliarte y comprometerte con la acción constructiva del Punto 4.",
    helpDescription: "Selecciona el puente profundo que te reconecta con el trato benevolente del Punto 4:",
    placeholder: "Ej: Conecto con lo Humano en mí y en otros, Perdono, Siento empatía...",
    type: "transition",
    direction: "up",
    fromId: 1,
    toId: 4,
    categories: [
      {
        categoryName: "Conexión Humana",
        words: ["Conecto con lo Humano en mí y en otros", "Miro al otro como a un igual", "Siento empatía con su dolor", "Busco lo que nos une y no lo que nos separa"]
      },
      {
        categoryName: "Reconciliación y Compasión",
        words: ["Perdono y suelto el rencor", "Me reconcilio íntimamente", "Siento compasión por su ignorancia", "Acepto que todos nos equivocamos"]
      },
      {
        categoryName: "Amor en Acción",
        words: ["Actúo con benevolencia", "Deseo el bienestar ajeno de corazón", "Busco la unidad y la paz", "Me comprometo con la no violencia"]
      }
    ]
  }
];

export interface AforismoOutput {
  id: string;
  title: string;
  formula: string;
  text: string;
}

// Maps of standard catalog items for perfect Spanish grammar conversion
export const SPANISH_P1_MAP: Record<string, string> = {
  "excluyentes": "el trato excluyente",
  "indiferencia": "la indiferencia",
  "ignorado": "ser ignorado",
  "rechazo": "el rechazo",
  "aislamiento": "el aislamiento",
  "desprecio": "el desprecio",
  "olvido": "el olvido",
  "marginalidad": "la marginalidad",
  "invisibilidad": "la invisibilidad",
  "agresión": "la agresión",
  "insultos": "los insultos",
  "gritos": "los gritos",
  "humillación": "la humillación",
  "burlas": "las burlas",
  "descalificación": "la descalificación",
  "crítica": "la crítica",
  "juicio": "el juicio",
  "menosprecio": "el menosprecio",
  "desdén": "el desdén",
  "sometimiento": "el sometimiento",
  "manipulación": "la manipulación",
  "exigencia": "la exigencia",
  "injusticia": "la injusticia",
  "control": "el control",
  "abuso de poder": "el abuso de poder",
  "imposición": "la imposición",
  "autoritarismo": "el autoritarismo",
  "mentira": "la mentira",
  "traición": "la traición"
};

export const SPANISH_INFINITIVE_MAP: Record<string, string> = {
  // Punto 2
  "sufro y me alejo aislándome": "sufrir y alejarme aislándome",
  "me aíslo": "aislarme",
  "me deprimo": "deprimirme",
  "me silencio con rencor": "silenciarme con rencor",
  "siento culpa": "sentir culpa",
  "me resigno": "resignarme",
  "me siento impotente": "sentirme impotente",
  "grito con furia": "gritar con furia",
  "ataco de vuelta": "atacar de vuelta",
  "busco venganza": "buscar venganza",
  "me irrito": "irritarme",
  "reclamo con violencia": "reclamar con violencia",
  "discuto sin escuchar": "discutir sin escuchar",
  "pago con la misma moneda": "pagar con la misma moneda",
  "siento miedo y huyo": "sentir miedo y huir",
  "me paralizo": "paralizarme",
  "me angustio": "angustiarme",
  "me tenso corporalmente": "tensarme corporalmente",
  "siento desamparo": "sentir desamparo",
  "busco aprobación sumisa": "buscar aprobación sumisa",
  
  // Punto 4
  "me acerco y aprecio a los demás": "acercarme y apreciar a los demás",
  "dialogo con honestidad": "dialogar con honestidad",
  "expreso mi afecto": "expresar mi afecto",
  "acompaño con paciencia": "acompañar con paciencia",
  "valoro las virtudes del otro": "valorar las virtudes del otro",
  "respiro con calma": "respirar con calma",
  "escucho con apertura": "escuchar con apertura",
  "actúo sin prisa": "actuar sin prisa",
  "busco comprender antes de juzgar": "buscar comprender antes de juzgar",
  "perdono sinceramente": "perdonar sinceramente",
  "reconcilio": "reconciliar",
  "pongo límites sanos con amor": "poner límites sanos con amor",
  "me expreso con firmeza y calma": "expresarme con firmeza y calma",
  "me valoro a mí mismo": "valorarme a mí mismo",
  "confío en mi fuerza interna": "confiar en mi fuerza interna",
  "me abro sin miedo": "abrirme sin miedo",
  
  // Punto 6
  "expreso lo que siento y pienso": "expresar lo que siento y pienso",
  "pido ayuda con humildad": "pedir ayuda con humildad",
  "digo lo que me pasa con honestidad": "decir lo que me pasa con honestidad",
  "dialogo con franqueza": "dialogar con franqueza",
  "hablo desde el corazón": "hablar desde el corazón",
  "reflexiono en silencio": "reflexionar en silencio",
  "me doy cuenta de la mecanicidad": "darme cuenta de la mecanicidad",
  "respiro profundo y observo": "respirar profundo y observar",
  "acepto mi parte": "aceptar mi parte",
  "medito en calma": "meditar en calma",
  "tomo la iniciativa para reparar": "tomar la iniciativa para reparar",
  "me arriesgo a cambiar": "arriesgarme a cambiar",
  "actúo con valentía": "actuar con valentía",
  "me hago responsable de mí": "hacerme responsable de mí",
  "decido no dañar": "decidir no dañar",
  
  // Punto 8
  "conecto con lo Humano en mí y en otros": "conectar con lo Humano en mí y en otros",
  "miro al otro como a un igual": "mirar al otro como a un igual",
  "siento empatía con su dolor": "sentir empatía con su dolor",
  "busco lo que nos une y no lo que nos separa": "buscar lo que nos une y no lo que nos separa",
  "perdono y suelto el rencor": "perdonar y soltar el rencor",
  "me reconcilio íntimamente": "reconciliarme íntimamente",
  "siento compasión por su ignorancia": "sentir compasión por su ignorancia",
  "acepto que todos nos equivocamos": "aceptar que todos nos equivocamos",
  "actúo con benevolencia": "actuar con benevolencia",
  "deseo el bienestar ajeno de corazón": "desear el bienestar ajeno de corazón",
  "busco la unidad y la paz": "buscar la unidad y la paz",
  "me comprometo con la no violencia": "comprometerme con la no violencia"
};

export const SPANISH_GERUND_MAP: Record<string, string> = {
  // Punto 4
  "me acerco y aprecio a los demás": "acercándome y apreciando a los demás",
  "dialogo con honestidad": "dialogando con honestidad",
  "expreso mi afecto": "expresando mi afecto",
  "acompaño con paciencia": "acompañando con paciencia",
  "valoro las virtudes del otro": "valorando las virtudes del otro",
  "respiro con calma": "respirando con calma",
  "escucho con apertura": "escuchando con apertura",
  "actúo sin prisa": "actuando sin prisa",
  "busco comprender antes de juzgar": "buscando comprender antes de juzgar",
  "perdono sinceramente": "perdonando sinceramente",
  "reconcilio": "reconciliando",
  "pongo límites sanos con amor": "poniendo límites sanos con amor",
  "me expreso con firmeza y calma": "expresándome con firmeza y calma",
  "me valoro a mí mismo": "valorándome a mí mismo",
  "confío en mi fuerza interna": "confiando en mi fuerza interna",
  "me abro sin miedo": "abriéndome sin miedo"
};

export function adaptPunto1Es(text: string): string {
  const t = text.trim();
  const lower = t.toLowerCase();
  
  if (SPANISH_P1_MAP[lower]) {
    return SPANISH_P1_MAP[lower];
  }
  
  if (/^(el|la|los|las|ser|ante|por|un|una)\s/i.test(t)) {
    return t;
  }
  
  if (lower.endsWith("es") || lower.endsWith("as") || lower.endsWith("os")) {
    return `actitudes ${lower}`;
  }
  
  if (lower.endsWith("a") || lower.endsWith("ción") || lower.endsWith("dad") || lower.endsWith("tad")) {
    return `la ${lower}`;
  }
  
  if (lower.endsWith("o") || lower.endsWith("or") || lower.endsWith("ón") || lower.endsWith("al")) {
    return `el ${lower}`;
  }
  
  return `el trato de ${lower}`;
}

export const FIRST_PERSON_VERB_TO_INFINITIVE: Record<string, string> = {
  "siento": "sentir",
  "pido": "pedir",
  "acerco": "acercar",
  "menosprecio": "menospreciar",
  "silencio": "silenciar",
  "deprimo": "deprimir",
  "aislo": "aislar",
  "aíslo": "aislar",
  "irrito": "irritar",
  "paralizo": "paralizar",
  "angustio": "angustiar",
  "tenso": "tensar",
  "valoro": "valorar",
  "expreso": "expresar",
  "abro": "abrir",
  "arriesgo": "arriesgar",
  "hago": "hacer",
  "comprometo": "comprometer",
  "reconcilio": "reconciliar",
  "sufro": "sufrir",
  "grito": "gritar",
  "ataco": "atacar",
  "busco": "buscar",
  "reclamo": "reclamar",
  "discuto": "discutir",
  "pago": "pagar",
  "huyo": "huir",
  "respiro": "respirar",
  "dialogo": "dialogar",
  "acompaño": "acompañar",
  "escucho": "escuchar",
  "actúo": "actuar",
  "actuo": "actuar",
  "perdono": "perdonar",
  "pongo": "poner",
  "confío": "confiar",
  "confio": "confiar",
  "hablo": "hablar",
  "reflexiono": "reflexionar",
  "tomo": "tomar",
  "acepto": "aceptar",
  "medito": "meditar",
  "miro": "mirar",
  "suelto": "soltar",
  "deseo": "desear",
  "conecto": "conectar",
  "digo": "decir",
  "intento": "intentar",
  "trato": "tratar",
  "evito": "evitar"
};

export function toInfinitiveEs(text: string): string {
  const t = text.trim();
  if (!t) return "";
  
  const lower = t.toLowerCase();
  if (SPANISH_INFINITIVE_MAP[lower]) {
    return SPANISH_INFINITIVE_MAP[lower];
  }

  // Already an infinitive or prepositional phrase
  if (/^([a-z]+(ar|er|ir)(me|te|se|nos|os|les)?)$/i.test(t)) {
    return t;
  }
  
  const words = t.split(/\s+/);
  const firstLower = words[0].toLowerCase();
  const pronouns = ["me", "te", "se", "nos", "le", "les", "lo", "la", "los", "las"];
  
  // Check if starts with a pronoun followed by a first-person verb
  if (pronouns.includes(firstLower) && words.length > 1) {
    const secondWord = words[1].toLowerCase().replace(/[^a-záéíóúüñ]/g, "");
    if (FIRST_PERSON_VERB_TO_INFINITIVE[secondWord]) {
      const inf = FIRST_PERSON_VERB_TO_INFINITIVE[secondWord];
      const merged = inf + firstLower;
      words.splice(0, 2, merged);
      return words.join(" ");
    }
  }
  
  // Check if first word is in our verb map
  const firstWordClean = firstLower.replace(/[^a-záéíóúüñ]/g, "");
  if (FIRST_PERSON_VERB_TO_INFINITIVE[firstWordClean]) {
    const inf = FIRST_PERSON_VERB_TO_INFINITIVE[firstWordClean];
    words[0] = inf;
    return words.join(" ");
  }
  
  return t;
}

export function toGerundEs(text: string): string {
  const t = text.trim();
  if (!t) return "";
  
  const lower = t.toLowerCase();
  if (SPANISH_GERUND_MAP[lower]) {
    return SPANISH_GERUND_MAP[lower];
  }
  
  if (lower.endsWith("ando") || lower.endsWith("iendo") || lower.endsWith("ándose") || lower.endsWith("éndose")) {
    return t;
  }
  
  const words = t.split(/\s+/);
  const firstLower = words[0].toLowerCase();
  const pronouns = ["me", "te", "se", "nos", "le", "les", "lo", "la", "los", "las"];
  
  // Check if starts with a pronoun followed by a first-person verb
  if (pronouns.includes(firstLower) && words.length > 1) {
    const secondWord = words[1].toLowerCase().replace(/[^a-záéíóúüñ]/g, "");
    if (FIRST_PERSON_VERB_TO_INFINITIVE[secondWord]) {
      const inf = FIRST_PERSON_VERB_TO_INFINITIVE[secondWord];
      let gerund = inf;
      if (inf.endsWith("ar")) gerund = inf.slice(0, -2) + "ando";
      else if (inf.endsWith("er") || inf.endsWith("ir")) gerund = inf.slice(0, -2) + "iendo";
      
      let accentedMerged = "";
      if (firstLower === "me") {
        if (gerund.endsWith("ando")) accentedMerged = gerund.slice(0, -4) + "ándome";
        else if (gerund.endsWith("iendo")) accentedMerged = gerund.slice(0, -5) + "iéndome";
      } else {
        if (gerund.endsWith("ando")) accentedMerged = gerund.slice(0, -4) + "ándole";
        else if (gerund.endsWith("iendo")) accentedMerged = gerund.slice(0, -5) + "iéndole";
      }
      
      words.splice(0, 2, accentedMerged || (gerund + firstLower));
      return words.join(" ");
    }
  }
  
  // Check if first word is in our verb map
  const firstWordClean = firstLower.replace(/[^a-záéíóúüñ]/g, "");
  if (FIRST_PERSON_VERB_TO_INFINITIVE[firstWordClean]) {
    const inf = FIRST_PERSON_VERB_TO_INFINITIVE[firstWordClean];
    let gerund = inf;
    if (inf.endsWith("ar")) gerund = inf.slice(0, -2) + "ando";
    else if (inf.endsWith("er") || inf.endsWith("ir")) gerund = inf.slice(0, -2) + "iendo";
    words[0] = gerund;
    return words.join(" ");
  }
  
  return t;
}

export function combineWithPorEs(text: string): string {
  const t = text.trim();
  if (!t) return "";
  
  const lower = t.toLowerCase();
  
  // If already starts with "por", "con", "de", "en", "mediante", "a través de"
  if (/^(por|con|de|en|mediante|a\s+través\s+de)\s+/i.test(t)) {
    return t;
  }
  
  // If starts with a gerund
  const words = t.split(/\s+/);
  const firstLower = words[0].toLowerCase();
  if (firstLower.endsWith("ando") || firstLower.endsWith("iendo") || 
      firstLower.endsWith("ándome") || firstLower.endsWith("iéndome") || 
      firstLower.endsWith("ándose") || firstLower.endsWith("éndose") ||
      firstLower.endsWith("ándole") || firstLower.endsWith("iéndole")) {
    return t;
  }
  
  return `por ${t}`;
}

export function suboA(phrase: string): string {
  const t = phrase.trim();
  if (!t) return "subo";
  
  const firstLower = t.split(/\s+/)[0].toLowerCase();
  if (firstLower.endsWith("ando") || firstLower.endsWith("iendo") || 
      firstLower.endsWith("ándome") || firstLower.endsWith("iéndome") || 
      firstLower.endsWith("ándose") || firstLower.endsWith("éndose") ||
      firstLower.endsWith("ándole") || firstLower.endsWith("iéndole")) {
    return `subo ${t}`;
  }
  return `subo a ${t}`;
}

export function haciendoPartEs(phrase: string): string {
  const g = toGerundEs(phrase);
  const firstWord = g.split(/\s+/)[0].toLowerCase();
  if (firstWord.endsWith("ando") || firstWord.endsWith("iendo") || 
      firstWord.endsWith("ándome") || firstWord.endsWith("iéndome") || 
      firstWord.endsWith("ándose") || firstWord.endsWith("éndose") ||
      firstWord.endsWith("ándole") || firstWord.endsWith("iéndole")) {
    return g;
  }
  return `haciendo ${g}`;
}

// Format utility to safely clean words or apply placeholders
const clean = (val: string, placeholder = "___") => {
  return val && val.trim() !== "" ? val.trim() : placeholder;
};

export function generateAforismos(answers: Record<number, string>): AforismoOutput[] {
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
}
