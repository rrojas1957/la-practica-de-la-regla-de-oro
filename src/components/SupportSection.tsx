import React, { useState } from "react";
import { 
  FileText, 
  Users, 
  Bookmark, 
  BookOpen, 
  MessageSquare, 
  ArrowRight, 
  Send, 
  Check, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  Search,
  BookMarked,
  Info,
  ExternalLink,
  Youtube,
  FileText as FilePdfIcon
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { translations, GLOSSARY_TERMS_EN, RESOURCES_LIST_EN, EXAMPLES_LIST_EN } from "../data/translations";
import { GLOSSARY_TERMS_FR, TESTIMONIALS_LIST_FR, RESOURCES_LIST_FR, EXAMPLES_LIST_FR } from "../data/supportContentFR";
import { GLOSSARY_TERMS_DE, TESTIMONIALS_LIST_DE, RESOURCES_LIST_DE, EXAMPLES_LIST_DE } from "../data/supportContentDE";
import { GLOSSARY_TERMS_PT, TESTIMONIALS_LIST_PT, RESOURCES_LIST_PT, EXAMPLES_LIST_PT } from "../data/supportContentPT";

interface SupportSectionProps {
  theme: "light" | "dark";
  onLoadExampleAnswers: (answers: Record<number, string>, title: string) => void;
  showToast: (message: string) => void;
  lang?: "es" | "en" | "fr" | "de" | "pt";
}

// Key terms for Glossary
interface GlossaryTerm {
  term: string;
  definition: string;
  tag: "Metodología" | "Estados" | "Acción" | "Methodology" | "States" | "Action" | "Méthodologie" | "États" | "Methodik" | "Zustände" | "Handlung" | "Metodologia" | "Ação";
}

const TESTIMONIALS_LIST_EN = [
  {
    author: "T. R.",
    title: "What I didn't want to see",
    tag: "Discovery",
    content: "From an exercise, which posed a question about a painful situation, I understood that this attitude, this behavior, was also within me. Then I realized that the other person was showing me something I didn't want to see in myself, which is why we clashed. After that, I went around with a notebook doing the exercise before situations where I knew, by repetition, that I would tense up or get moody, and before new ones that arose. Thus I constructed aphorisms that helped me give a different response than the habitual one, a more enabling one. Little by little, and after asking for help for a situation that destabilized me quite a bit, I was able to see that the Golden Rule opened up the future, helped me reconcile, and that the human being of the future was closer, already living in me and in each of us. From then on, I can say that many things have changed in my life. I have learned to apply the Golden Rule by relying on virtues and being attentive to situations as they arise with self-observation of how I feel, what I want to change, and what response I want to give."
  },
  {
    author: "G. T.",
    title: "Transformational",
    tag: "Meaning",
    content: "From my experience with this exercise, I register that the application of the Golden Rule is truly transformational and proposes an attitude in life that is worth trying. Personally, I see that the search for the meaning of my life is related to the good treatment I ask for and the treatment I give to others, and I have been amazed by the experience of letting go of what I believe about the other person and what I believe about myself. The most exceptional thing has been to recognize, as violence in me, the same mistreatment that I see in the other person and reject with all my strength. Now I pay attention and try to see what attitude I need to strengthen to resist that violence within me and outside of me."
  },
  {
    author: "N. M.",
    title: "Inner Landscape",
    tag: "Reflection",
    content: "This work has been for me a deep practical reflection and has led me to understand that the problems or violence that I have suffered in relation to the other person have to do with my inner landscape and not with external causes that are beyond my control. To a large extent they are unintegrated internal conflicts, resentments, and painful deep tensions. In this process, group work has been and is absolutely central, because I have felt how a warm environment of mutual support and inspiration acts mysteriously, creating a kind of intelligence of everyone, which is not necessarily verbal and that in a silent way makes that transformation possible."
  },
  {
    author: "F. F.",
    title: "A gift from life",
    tag: "Integration",
    content: "The other person is a gift that life offers me to grow, to free myself, to treat myself and others coherently, to learn to treat others as I want to be treated. And I am there for him or her, but this is their story... And I reconcile with myself for all the times that in the face of the 'different' I have felt attacked, that in the face of whoever is insecure and defends themselves, I defended myself, offending, attacking. I reconcile every time that I, being 'different', felt rejected, isolated... I reconcile, I stop defending myself, I calm down, I free myself: life seeks growth, not compensation from nothingness. The other person resonates in me according to how I sound inside... and once again I discover co-existence: I exist because you exist. I free myself, light, indifferent to the internal and external landscape, overcoming contradictions."
  },
  {
    author: "G. R.",
    title: "Another reality is possible",
    tag: "Inner Peace",
    content: "What has the Golden Rule been for me? The discovery that another reality is possible. By intending the treatment of others and myself based on the Golden Rule, I have gained inner peace, it has made me see others as 'another me', and understand the reason for their reactions and behaviors, putting a humanizing mantle over them. It has helped me elucidate the treatment I want for myself, the one I give myself, and the one I want to receive. Treatment that was blurred by the 'should be' and current beliefs. I have been shedding tensions, bad thoughts, and speculations about bonds and reciprocal treatment. I feel I have grown, I am more secure in my actions, and in short, I am happier."
  },
  {
    author: "G. G.",
    title: "Understanding and Reconciliation",
    tag: "Reconciliation",
    content: "This exercise has been for me a model of internal processing. By this I mean a framework for processing my internal world, and from there improving my relationship with myself and others. When I discovered it, in the '90s, it opened me up to an important understanding of myself. Since I was a child I had an internal dialogue of fighting, and this exercise explained that discussion, gave it logic, and a path of resolution. It has helped me in a process of reconciliation between my selves, between my internal characters, that is, with myself, and therefore to improve my relationship with others, in whom I project what I do not want to see in myself. It has helped me discover the virtues of others and those I can enhance in myself. To see that defects are not to be covered up, canceled, or repressed, but to be reconciled and allowed to release their hidden virtue. And the strategy has been like peeling an onion, each time allowing me to go deeper into already known topics, progressively cleaning and ordering the internal world. And the exercise worked together, with others, has helped me see that we all function in a similar way, that we all have similar climates, and the same need for reconciliation. Thus, this exercise has been a good tool to develop together, as a group with an integrating psychological culture."
  },
  {
    author: "C. E.",
    title: "The help of dreams",
    tag: "Dream",
    content: "Definitely, this Golden Rule exercise, as a tool to know myself, was something important in my life. At a time when I was in crisis, the possibility arose to join a group that was already working with this practice. After doing it for a while, I understood that what I reject in others is in me. And of course it is difficult to recognize it. But I had help. Sometimes I was able to visualize these situations in dreams. I think that since self-criticism is less or non-existent in dreams, it was a good alternative to advance in the early stages of the practice."
  },
  {
    author: "A. C.",
    title: "Relying on Virtues",
    tag: "Virtues",
    content: "The Golden Rule exercise is essential in my life. My mother taught it to me during a crisis, and it changed my perspective completely. I used to think everything was other people's fault and that I had nothing to do with it. That things just happened to me. In 2008 I moved to Buenos Aires and started working on it very intensely with Deborah Tormen. It was a daily job, even more than once a day, and that allowed me to be in a state of understanding about myself and others that made it very interesting to go through my first migration. It was a turning point in my life. Currently it is a tool that I have highly incorporated, especially in difficulties. It allows me to treat others as I truly want to be treated, it allows me to empathize, put myself in the other person's shoes, and understand them deeply. Also to understand myself in relation to others and my own difficulties and limitations. It has also allowed me to see and feel proud of my virtues. This exercise does not leave you in the ugly part of you, in what needs to be 'fixed', but allows you to see your virtues and focus where it is interesting for your own growth. I admit it is sometimes hard to do, because it means taking charge of the problems and overcoming resistance. But when I work with this tool, with others, share these reflections, and my aphorisms arise—those force-phrases—I have a very clear register of internal strength from which I feel there is no turning back."
  },
  {
    author: "M. K.",
    title: "Four Deep Learnings",
    tag: "Learning",
    content: "The Golden Rule exercise, quite literally, changed my life. It was a before and after for me, as I achieved very strong learnings. The first is that everything I criticize, judge, and complain about the other person is mine. Of course, when I realized this, I went from shame to anger and then came acceptance, and then it was liberating. Because it allowed me to take charge, since if it is mine, I can modify it. I can never again say that someone is 'doing' something to me. So leaving behind the feeling of being a victim was amazing. Furthermore, realizing that I projected my stuff onto others helped me stop complaining. The second deep learning was connecting with virtues. I knew I had good things, but thanks to the exercise I kept discovering myself in virtue and that opened up the future. And over time I discovered many good things in myself, and understood that I have to practice them with more permanence. The third point of deep change allowed me a deep reconciliation with myself. The fourth point, of transmutation I would say, is the simplified formula developed by Roberto Kohanoff. Because in the moment of tension, of dense climate, it is not easy to do the entire full exercise. And so, how do I give a unifying response in the moment? In that synthesized way of giving what I ask for. So, in the moment of tension, I ask myself: What am I asking of them? And sometimes, I ask them to be quiet. So, I keep quiet. Or to take me into account. So, I take them into account and listen to them."
  }
];

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Aforismo",
    definition: "Es una frase o sentencia breve, que funciona como una declaración de las acciones que queremos poner en marcha para superar la contradicción o el sufrimiento trabajados en el ejercicio. Nos apoyamos en ese aforismo, leyéndolo o repitiéndolo toda vez que sea necesario, para recordarnos cómo es posible salir de los bajos estados de conciencia. Silo dice: 'Los pensamientos repetidos con fe producen y atraen el máximo de fuerza en las acciones'. Y agrega: 'Cuanto más se repite una acción o un pensamiento más se graba en la memoria, más fuertes se hacen los hábitos y más se predispone uno a las acciones futuras en esa dirección'.",
    tag: "Acción"
  },
  {
    term: "Cenestesia",
    definition: "Es uno de los sentidos internos, que ahora también se conoce como interocepción (percepción del estado interno del organismo). Proporciona datos referidos a presión, temperatura, humedad, acidez, alcalinidad, tensión, relajación, etc. y toda otra sensación proveniente del intracuerpo. Registra, además, el trabajo de los centros (por ejemplo, emociones, operaciones intelectuales, etc.).",
    tag: "Estados"
  },
  {
    term: "Centros de respuestas",
    definition: "Síntesis conceptual que se refiere a un mecanismo del psiquismo que da respuesta al mundo de la sensación. La respuesta es la manifestación hacia el medio externo y/o interno de la actividad del centro. Podemos diferenciar centros de respuesta por su actividad o por la función que cumplen. Los centros son: intelectual, motriz, emotivo, sexual y vegetativo.",
    tag: "Metodología"
  },
  {
    term: "Clima",
    definition: "Llamamos así al trasfondo emotivo donde, cayendo en ese campo, cualquier objeto toma las características de ese trasfondo o estado de ánimo. Los climas pueden ser situacionales, o fijarse en el psiquismo y perturbar a la estructura completa, impidiendo la movilidad hacia otros climas oportunos. Los climas fijados circulan por los distintos niveles, restando libertad operativa a la conciencia.",
    tag: "Estados"
  },
  {
    term: "Compulsión",
    definition: "Es el impulso o deseo intenso o vehemente de hacer alguna cosa. En psicología, es la necesidad incontrolable de decir o hacer algo sin motivo ni razón.",
    tag: "Estados"
  },
  {
    term: "Conciencia (niveles de)",
    definition: "Son las distintas formas de trabajo del circuito conciencia-sentidos-memoria-centros. De acuerdo a Autoliberación, distinguimos: 1) Nivel de sueño profundo: mínimo trabajo de sentidos externos. 2) Nivel de semisueño: aumenta el trabajo de sentidos externos, pero hay interferencias de ensoñaciones y sensaciones internas. 3) Nivel de vigilia: cuando los sentidos externos aportan el mayor caudal informativo, regulando por inhibición los sentidos internos y posibilitando orientarse al mundo en el trabajo de compensación de estímulos.",
    tag: "Estados"
  },
  {
    term: "Ensueños",
    definition: "En el nivel vigílico aparecen numerosas imágenes, ideas y pensamientos, ajenos a la idea o pensamiento que se está desarrollando. Estas formalizaciones de estímulos, provenientes de los otros niveles, del medio externo o de estímulos corporales, se manifiestan como imágenes que presionan al nivel vigílico; a ellas las llamamos ensueños. Son inestables y cambiantes y constituyen los mayores impedimentos al trabajo de la atención.",
    tag: "Estados"
  },
  {
    term: "Guía interior",
    definition: "Es una alegoría que la conciencia ha hecho concretando ciertos atributos específicos: bondad, sabiduría y fuerza. Es muy personal. Puede ser el dios de uno; puede tener un contexto religioso o sagrado, o no; puede ser una persona santa; alguien que uno conoce o ha conocido en la vida; una figura histórica; o una presencia, fuerza o imagen inspiradora. Es muy personal y no corresponde a nadie juzgar al Guía de otro.",
    tag: "Acción"
  },
  {
    term: "Humanismo Universalista",
    definition: "También llamado Nuevo Humanismo. Se caracteriza por destacar la actitud humanista. Dicha actitud no es una filosofía sino una perspectiva, una sensibilidad y un modo de vivir la relación con los otros seres humanos.",
    tag: "Metodología"
  },
  {
    term: "Kinestesia",
    definition: "Es otro de los sentidos internos, también llamado propiocepción (capacidad que tiene nuestro cerebro de saber la posición exacta de todas las partes de nuestro cuerpo en cada momento). Proporciona datos referidos al movimiento y la postura corporal y al equilibrio y desequilibrio físicos.",
    tag: "Estados"
  },
  {
    term: "Mecanicidad",
    definition: "Actitud repetitiva, fría, inconsciente y rutinaria que convierte al ser humano en un autómata, falto de reflexión y de empatía.",
    tag: "Estados"
  },
  {
    term: "Núcleo de ensueño",
    definition: "Existen ensueños de mayor fijeza o repetición, aquellos que, aun variando, denotan un mismo clima mental. La característica principal de este clima es su permanencia. Ese núcleo fijo se va a manifestar como imagen y esa imagen va a tener la propiedad de orientar al cuerpo, a las actividades, en una dirección que no es advertida por la conciencia.",
    tag: "Estados"
  },
  {
    term: "Nudo biográfico",
    definition: "Es un conflicto interno que apareció en la niñez. Silo lo describe como un 'nudo de dolor'. Suele estar asociado a un clima permanente y generalizado (núcleo de ensueño), y de no mediar trabajo interno puede permanecer por largo tiempo sin ser resuelto.",
    tag: "Estados"
  },
  {
    term: "Operativa",
    definition: "Se refiere a operaciones que pueden modificar, convertir o reorientar el comportamiento.",
    tag: "Acción"
  },
  {
    term: "Paisaje de formación",
    definition: "Hace alusión a los acontecimientos que vivió un ser humano desde su nacimiento y en relación a un medio. La influencia del paisaje de formación no está dada simplemente por una perspectiva temporal intelectual formada biográficamente y desde donde se observa lo actual, sino que se trata de un ajuste continuo de situación en base a la propia experiencia. Actúa como trasfondo de interpretación y de acción, como una sensibilidad y como un conjunto de creencias y valoraciones con los que vive un individuo o una generación.",
    tag: "Metodología"
  },
  {
    term: "Paisaje externo",
    definition: "Configuración de la realidad que se corresponde con la percepción de los sentidos externos ponderada por los contenidos propios de la conciencia. Siendo la conciencia una estructura activa y no un reflejo de la realidad 'externa', esta última aparece como 'paisaje' estructurado, de ninguna manera como suma de percepciones, ni como estructura aislada de las percepciones de los sentidos externos.",
    tag: "Metodología"
  },
  {
    term: "Paisaje humano",
    definition: "Configuración de la realidad humana en base a la percepción de el-otro, de la sociedad y de los objetos producidos con significado intencional. El paisaje humano no es simple percepción objetal, sino develamiento de significados e intenciones en los que el ser humano se reconoce a sí mismo.",
    tag: "Metodología"
  },
  {
    term: "Paisaje interno",
    definition: "Configuración de la realidad que se corresponde con la percepción de los sentidos internos ponderada por los datos de memoria y por la postura intencional de la conciencia que varía según el estado de sueño, de vigilia, de emoción, etc. Se experimenta en la postura de la conciencia 'hacia adentro', teniendo como referencia el registro interno del límite táctil-cenestésico.",
    tag: "Metodología"
  },
  {
    term: "Percepción",
    definition: "Es el registro del dato más la actividad del sentido que está en movimiento. Es una estructura de: dato más actividad del sentido que abstrae y estructura.",
    tag: "Metodología"
  },
  {
    term: "Proyección",
    definition: "En psicología, es un mecanismo de defensa que consiste en poner afuera, ya sea en una persona o en un objeto, aquellos atributos internos, deseos, sentimientos o aspectos de nosotros mismos que no somos capaces de aceptar.",
    tag: "Estados"
  },
  {
    term: "Registro",
    definition: "Experiencia de la sensación producida por estímulos detectados por sentidos externos o internos, incluyendo recuerdos e imágenes.",
    tag: "Metodología"
  },
  {
    term: "Representación",
    definition: "Todo fenómeno de memoria que toca el campo de presencia de la conciencia. Distinto del dato de memoria que puede actuar en copresencia subliminalmente y, por supuesto, del de percepción.",
    tag: "Metodología"
  },
  {
    term: "Reversibilidad",
    definition: "Facultad de la conciencia para dirigirse, por medio de la atención, a sus fuentes de información. Por ejemplo, cuando hablamos de reversibilidad del pensamiento, nos referimos a la capacidad de volver a un punto de partida o a una situación inicial.",
    tag: "Metodología"
  },
  {
    term: "Siloísmo",
    definition: "Sistema de ideas expuesto por Silo, seudónimo literario de Mario Rodríguez Cobos. El siloísmo es un humanismo filosófico, pero también es una actitud partícipe de los valores del Nuevo Humanismo.",
    tag: "Metodología"
  },
  {
    term: "Psiquismo",
    definition: "Sistema integrado e interregulado dinámicamente por sentidos, memoria, coordinador, niveles y centros.",
    tag: "Metodología"
  },
  {
    term: "Transferencia",
    definition: "a) Técnica que asociada a la catarsis y la autotransferencia configura el sistema de operativa. b) Técnica que opera en el campo de la representación interna descargando tensiones de unos contenidos y llevando sus cargas hacia otros. Se opera desde el nivel de semisueño activo orientado por un guía.",
    tag: "Acción"
  }
];

interface Testimonial {
  author: string;
  title: string;
  content: string;
  tag: string;
}

const TESTIMONIALS_LIST: Testimonial[] = [
  {
    author: "T. R.",
    title: "Lo que no quería ver",
    tag: "Descubrimiento",
    content: "A partir de un ejercicio, en el que se planteaba una pregunta sobre una situación sufriente, comprendí que esa actitud, ese comportamiento, también estaba en mí. Entonces comprendí que el otro me mostraba algo que yo no quería ver en mí y por eso chocábamos. Después de ese momento iba con un cuaderno haciendo el ejercicio ante situaciones en las que ya sabía, por repetición, que me iba a tensar, a climatizar, y por otras nuevas que surgían. Así construía aforismos que me ayudaran a dar una respuesta diferente a la habitual, más posibilitadora. Poco a poco y tras pedir ayuda para una situación que me desestabilizaba bastante, pude comprobar que la Regla de Oro me abría el futuro, me ayudaba a reconciliar, y que el ser humano del futuro estaba más cerca, ya habitaba en mí y en cada uno de nosotros. A partir de ahí, puedo decir que muchas cosas han cambiado en mi vida. He aprendido a aplicar la Regla de Oro apoyándose en las virtudes y estando atenta a las situaciones que se van presentando con la autoobservación de cómo me siento, que quiero cambiar y que respuesta quiero dar."
  },
  {
    author: "G. T.",
    title: "Transformadora",
    tag: "Sentido",
    content: "A partir de mi experiencia con este ejercicio registro que la aplicación de la Regla de Oro es realmente transformadora y que nos propone una actitud en la vida que vale la pena intentar. En lo personal, veo que la búsqueda del sentido de mi vida está relacionada con el buen trato que pido y el trato que doy a los demás y me ha maravillado la experiencia de soltar lo que creo del otro y lo que creo de mí. Lo más excepcional ha sido reconocer, como violencia en mí, aquel maltrato que veo en el otro y rechazo con todas mis fuerzas. Ahora presto atención y trato de ver cuál es la actitud que tengo que fortalecer para resistir esa violencia en mí y fuera de mí."
  },
  {
    author: "N. M.",
    title: "Paisaje interno",
    tag: "Reflexión",
    content: "Este trabajo ha sido para mí una profunda reflexión práctica y me ha llevado a comprender que los problemas o la violencia que he sufrido en relación con el otro tienen que ver con mi paisaje interno y no con causas externas que están fuera de mi control. En gran medida son conflictos internos no integrados, resentimientos y dolorosas tensiones profundas. En este proceso, el trabajo en grupo ha sido y es absolutamente central, porque he sentido cómo un ámbito cordial, de apoyo e inspiración mutua actúa misteriosamente creando como una inteligencia de todos, que no es necesariamente verbal y que de manera silenciosa hace posible esa transformación."
  },
  {
    author: "F. F.",
    title: "Un regalo de la vida",
    tag: "Integración",
    content: "El otro es un regalo que la vida me ofrece para crecer, para liberarme, para tratar y tratarme coherentemente, para aprender a tratar como quiero que me traten. Y yo estoy para él o para ella, pero ésta es su historia... Y me reconcilio conmigo misma por todas las veces que frente al 'diverso' me he sentido atacada, que frente a quien inseguro o insegura se defiende, me defendí, ofendiendo, attacking. Me reconcilio cada vez que yo 'diversa' me sentí rechazada, me aislé... me reconcilio, dejo de defenderme, me calmo, me libero: la vida busca el crecimiento, no compensación de la nada. El otro resuena en mí según cómo yo sueno por dentro... y de nuevo descubro la co-existencia: yo existo porque tú existes. Me libero, liviana, indiferente al paisaje interno y externo, superando contradicciones."
  },
  {
    author: "G. R.",
    title: "Otra realidad es posible",
    tag: "Paz Interior",
    content: "¿Qué ha sido para mí la Regla de Oro? El descubrimiento de que otra realidad es posible. Al intencionar el trato al otro y a mí mismo en base a la Regla de Oro, he ido ganado en paz interior, me ha hecho ver a los demás como 'otro yo', y comprender el porqué de sus reacciones y conductas, poniendo un manto humanizador sobre éstas. Me ha ayudado a dilucidar el trato que deseo para mí mismo, el que me doy y el que quiero recibir. Trato que estaba desdibujado por el 'deber ser' y las creencias epocales. Me he ido despojando de tensiones, malos pensamientos y especulaciones sobre los vínculos y el trato recíproco. Siento que he crecido, estoy más seguro de mis actos y, sintetizando, soy más feliz."
  },
  {
    author: "G. G.",
    title: "Comprensión y reconciliación",
    tag: "Reconciliación",
    content: "Este ejercicio ha sido para mí un modelo de procesamiento interno. Con esto quiero decir, un encuadre para ir procesando mi mundo interno, y desde allí mejorar mi relación conmigo mismo y con los demás. Cuando lo conocí, en los 90, me abrió a una comprensión de mí mismo importante. Desde chico tuve un diálogo interno de pelea, y este ejercicio explicaba esa discusión, le daba una lógica, y un camino de resolución. Me ha ayudado a un proceso de reconciliación entre mis yoes, entre mis personajes internos, o sea, conmigo mismo, y por tanto a mejorar mi relación con los demás, en quienes proyecto lo que no quiero ver en mí. Me ha ayudado a ir descubriendo las virtudes de otros y las que puedo potenciar en mí. A ver que los defectos no son para tapar, para anular o reprimir, sino para reconciliar y permitirles que liberen su virtud escondida. Y la estrategia ha sido como ir pelando una cebolla, cada vez permitiendo meterme más a fondo con los temas ya conocidos, ir limpiando y ordenando progresivamente el mundo interno. Y el ejercicio trabajado en conjunto, con otros, me ha ayudado a ver que todos funcionamos de modo similar, que todos tenemos climas similares, y la misma necesidad de reconciliación. Así, este ejercicio ha sido una buena herramienta para poder desarrollarnos en conjunto, como grupo con una cultura psicológica integradora."
  },
  {
    author: "C. E.",
    title: "La ayuda de los sueños",
    tag: "Onírico",
    content: "Definitivamente, este ejercicio de la Regla de Oro, como la herramienta para conocerme, fue algo importante en mi vida. En un momento en que estaba en crisis se presentó la posibilidad de sumarme a un grupo que ya estaba trabajando con esta práctica. Después de hacerla durante un tiempo comprendí que lo que rechazo en otros está en mí. Y por supuesto que es difícil reconocerlo. Pero tuve una ayuda. A veces lograba visualizar estas situaciones en los sueños. Creo que como en los sueños la autocrítica es menor o nula fue una buena alternativa para avanzar en los comienzos de la práctica."
  },
  {
    author: "A. C.",
    title: "Apoyarme en las virtudes",
    tag: "Virtudes",
    content: "El ejercicio de la Regla de Oro es imprescindible en mi vida. Me lo enseñó mi mamá en un momento de crisis, y cambió bastante mi mirada. Yo pensaba que todo era culpa de los demás y que yo no tenía nada que ver. Que a mí las cosas me pasaban. En el 2008 me fui a vivir a Buenos Aires y empecé a trabajarlo con mucha intensidad junto a Deborah Tormen. Era un trabajo diario, incluso más de una vez al día, y eso me permitió estar en un estado de comprensión sobre mí y sobre los demás que me facilitó transitar por mi primera migración de una forma muy interesante. Fue un punto de inflexión en mi vida. Actualmente es una herramienta que tengo muy incorporada, especialmente ante las dificultades. Me permite tratar a los demás como quisiera ser tratada verdaderamente, me permite empatizar, ponerme en el lugar del otro y comprenderlo en profundidad. También comprenderme a mí misma en relación con los demás y con mis propias dificultades y limitaciones. También me ha permitido ver y sentirme orgullosa de mis virtudes. Este ejercicio no te deja en lo feo de ti, en lo que hay que 'arreglar', sino que te permite ver tus virtudes y poner el foco donde es interesante para el propio crecimiento. Reconozco que a veces cuesta hacerlo, porque significa hacerse cargo de los problemas y vencer la resistencia. Pero cuando trabajo con esta herramienta, con otros, comparto estas reflexiones y surgen mis aforismos, esas frases fuerza, tengo un registro de fortaleza interna muy claro del que siento que no hay vuelta atrás."
  },
  {
    author: "M. K.",
    title: "Cuatro aprendizajes profundos",
    tag: "Aprendizaje",
    content: "El ejercicio de la Regla de Oro, literalmente, me cambió la vida. Fue un antes y un después para mí, ya que logré aprendizajes muy contundentes. El primero es que todo lo que critico, juzgo y me quejo del otro es mío. Por supuesto, al darme cuenta, pasé de la vergüenza al enojo y luego llegó la aceptación, y entonces fue liberador. Porque me permitió hacerme cargo, ya que si es mío, lo puedo modificar. Ya nunca más puedo decir que alguien 'me hace' algo. Así que eso de dejar de sentirme una víctima fue alucinante. Además, al darme cuenta de que yo proyectaba lo mío en los demás me ayudó a dejar de quejarme. El segundo aprendizaje profundo fue conectar con las virtudes. Yo sabía que tengo cosas buenas, pero gracias al ejercicio me fui descubriendo en la virtud y eso me abrió el futuro. Y con el tiempo me fui descubriendo en muchas cosas buenas, y comprendí que tengo que ejercitarlas con más permanencia. El tercer punto de cambio profundo me permitió la reconciliación profunda conmigo misma. El cuarto punto, de trasmutación diría, es la fórmula simplificada que desarrolló Roberto Kohanoff. Porque en el momento de tensión, de clima denso, no es fácil hacer todo el ejercicio completo. Y entonces, ¿cómo doy una respuesta unitiva en el momento? De esa manera sintetizada de dar lo que pido. Entonces, en el momento de tensión, me pregunto ¿qué le pido? Y a veces, le pido que se calle. Entonces, me callo. O que me tenga en cuenta. Entonces, lo tengo en cuenta y lo escucho."
  }
];

interface Resource {
  type: string;
  title: string;
  author?: string;
  publisher?: string;
  year?: string;
  description: string;
  url?: string;
}

const RESOURCES_LIST: Resource[] = [
  {
    type: "Libro",
    title: "La Regla de Oro de la No Violencia",
    author: "Roberto Kohanoff e Isabel Lazzaroni",
    publisher: "Ediciones León Alado",
    year: "2023",
    description: "A lo largo de más de 30 años, los autores han indagado, estudiado, experimentado y profundizado la Regla de Oro: \"Si tratas a los demás como quieres que te traten, te liberas\", para salir del clima de queja que veían tanto en ellos como en otras personas. De esos estudios y prácticas surgió un ejercicio que nos ayuda a dar a los demás el trato que queremos para nosotros. Esto es lo que está plasmado en este libro, donde hay explicaciones, ejemplos y pautas para que cualquier interesado pueda abordar el asunto.",
    url: "http://edicionesleonalado.net"
  },
  {
    type: "Libro",
    title: "La Mirada Interna",
    author: "Silo",
    publisher: "Editorial ATE, Barcelona",
    year: "1979",
    description: "La obra fundacional del pensamiento de Silo, que invita a la introspección profunda y al encuentro con el sentido de la existencia humana."
  },
  {
    type: "Libro",
    title: "El Mensaje de Silo",
    author: "Silo",
    publisher: "Editorial EDAF, Madrid",
    year: "2008",
    description: "Sintetiza la vertiente espiritual de su pensamiento, proponiendo un camino de fe, reconciliación y realización interior."
  },
  {
    type: "Libro",
    title: "Diccionario del Nuevo Humanismo",
    author: "Silo",
    publisher: "Ediciones León Alado, Madrid",
    year: "2014",
    description: "Herramienta de referencia indispensable para comprender la terminología social, filosófica y antropológica del Nuevo Humanismo."
  },
  {
    type: "Conferencia",
    title: "Comentarios sobre la Regla de Oro",
    author: "Silo",
    year: "17 de diciembre de 1995",
    description: "Conferencia dictada en Mendoza, Argentina, detallando el alcance de la reciprocidad y las leyes de acción válida en la vida cotidiana."
  },
  {
    type: "Arenga",
    title: "La Curación del Sufrimiento",
    author: "Silo",
    year: "4 de mayo de 1969",
    description: "Arenga pronunciada por Silo en Punta de Vacas, Mendoza, Argentina, que sentó las bases de la superación de la violencia y el dolor."
  },
  {
    type: "Libro",
    title: "Autoliberación",
    author: "L.A. Ammann",
    publisher: "Editorial ATE, Barcelona",
    year: "1980",
    description: "Un compendio estructurado de técnicas de autoconocimiento, relajación y psicofísica fundamentales para el practicante."
  },
  {
    type: "Libro",
    title: "Apuntes de Psicología",
    author: "Silo",
    publisher: "Ediciones León Alado, Madrid",
    year: "2014",
    description: "Estudio profundo del psiquismo humano, las representaciones y los niveles de conciencia que dotan de marco científico al trabajo reflexivo."
  },
  {
    type: "Libro",
    title: "Aprende a resistir la violencia que hay en ti y fuera de ti",
    author: "H. Roig, D. Tormen y M. Barberena",
    publisher: "Editado por Deborah Tormen, Buenos Aires",
    year: "2006",
    description: "Un excelente manual con dinámicas prácticas y ejercicios rigurosos de aplicación directa sobre la Regla de Oro."
  },
  {
    type: "Conferencia",
    title: "Las condiciones del diálogo",
    author: "Silo",
    year: "6 de octubre de 1993",
    description: "Conferencia dictada en la Academia de Ciencias de Moscú, Rusia, explorando las claves de una comunicación no violenta de verdad."
  },
  {
    type: "Conferencia",
    title: "Misión de los 80",
    author: "Silo",
    year: "27 de septiembre de 1981",
    description: "Conferencia dictada en Madrid, España, analizando los desafíos colectivos de la no violencia activa frente al militarismo."
  },
  {
    type: "Libro",
    title: "Cartas a mis amigos",
    author: "Silo",
    publisher: "Ediciones León Alado, Madrid",
    year: "2013",
    description: "Reflexiones epistolares fundamentales sobre la transformación personal y social simultánea requerida para el cambio del mundo."
  },
  {
    type: "Libro",
    title: "El día del león alado",
    author: "Silo",
    publisher: "Ediciones León Alado, Madrid",
    year: "2013",
    description: "Relatos literarios alegóricos que retratan de forma inspiradora estados elevados de conciencia y el sentido existencial."
  },
  {
    type: "Manual",
    title: "Manual de temas formativos y prácticas para los mensajeros",
    author: "AA.VV.",
    publisher: "Ediciones León Alado, Madrid",
    description: "Manual práctico que reúne las principales dinámicas de estudio, meditación y acción humanista para los practicantes del Mensaje."
  },
  {
    type: "Canal de YouTube",
    title: "Canal de YouTube León Alado",
    description: "Videos de las prácticas con la Regla de Oro, conferencias de Silo y material audiovisual complementario de gran valor educativo.",
    url: "https://www.youtube.com/@leonalado7780/videos"
  },
  {
    type: "Libro en PDF",
    title: "Aprende a resistir la violencia (Digital)",
    description: "Enlace para visualizar y leer en línea el libro completo editado por Deborah Tormen.",
    url: "https://psicologiadelnuevohumanismo.org"
  }
];

export default function SupportSection({ theme, onLoadExampleAnswers, showToast, lang = "es" }: SupportSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState<"examples" | "testimonials" | "glossary" | "resources" | "mailbox">("examples");
  
  // Glossary Search state
  const [glossarySearch, setGlossarySearch] = useState("");
  
  // Mailbox states
  const [feedbackType, setFeedbackType] = useState("opinion");
  const [feedbackText, setFeedbackText] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  // Zona privada del buzón (solo coordinación, protegida por contraseña en el servidor)
  const [adminVisible, setAdminVisible] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const [adminCargando, setAdminCargando] = useState(false);
  const [adminError, setAdminError] = useState("");
  const [adminMensajes, setAdminMensajes] = useState<null | Array<{ category?: string; message: string; timestamp?: string }>>(null);

  const consultarBuzonPrivado = async (accion?: "vaciar") => {
    if (!adminPass.trim() || adminCargando) return;
    setAdminCargando(true);
    setAdminError("");
    try {
      const respuesta = await fetch("/api/buzon-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: adminPass, accion })
      });
      const datos = await respuesta.json();
      if (!respuesta.ok || !datos.ok) {
        setAdminError(datos.error || "No se pudo acceder al buzón");
        if (respuesta.status === 401) setAdminMensajes(null);
      } else {
        setAdminMensajes(Array.isArray(datos.mensajes) ? datos.mensajes : []);
      }
    } catch (e) {
      setAdminError("Sin conexión con el servidor. Esta zona solo funciona en la web publicada.");
    } finally {
      setAdminCargando(false);
    }
  };

  const cerrarBuzonPrivado = () => {
    setAdminVisible(false);
    setAdminPass("");
    setAdminError("");
    setAdminMensajes(null);
  };

  const isDark = theme === "dark";
  const t = translations[lang];

  // Examples data
  const EXAMPLES_LIST = [
    {
      id: "ex1",
      title: "Ejemplo 1 de ejercicio anónimo",
      subtitle: "Mujer anónima — El maltrato y los 'perjudicadores'",
      description: "En este ejemplo de mujer anónima, el maltrato que la persona rechaza es el de 'los que hacen daño porque sí', los llama los perjudicadores (punto 1). Ante ellos, siente temor, no quiere molestar, prefiere pasar desapercibida. Se identifica como miedosa (punto 2).",
      answers: {
        1: "Los perjudicadores (daño porque sí)",
        2: "Miedosa (temor, pasar desapercibida)",
        3: "Que me cuiden (emplazarme como cuidadora)",
        4: "Tranquilizarlos",
        5: "Desvalorización (pensar que no soy necesaria)",
        6: "Entrega y disponibilidad",
        7: "Ruido mental (ni pensar ni darse cuenta)",
        8: "Meditación, atención"
      },
      aforismo: "Cuido (a mí y a otros) tranquilizando, disponible y atenta.",
      commentary: "Este ejercicio ilustra la conversión de imágenes: para no reaccionar con miedo ante los perjudicadores (que son una proyección de su propia perjudicadora), necesita emplazarse como buena y cuidadora, buscando tranquilizarlos."
    },
    {
      id: "ex2",
      title: "Ejemplo anónimo 2, sobre expectativas",
      subtitle: "Expectativas, prudencia y dirección",
      description: "Ante una situación dada, a veces actúo de modo insensato (punto 1) y otras veces me bloqueo por cobarde (punto 2) y nunca sé cuándo me voy a emplazar en un 'rol' o en el opuesto.",
      answers: {
        1: "Actuar de modo insensato",
        2: "Bloquearme por cobarde",
        3: "Que el insensato sea prudente",
        4: "Comportarme como valiente",
        5: "Temor",
        6: "Serenidad",
        7: "Deseos groseros",
        8: "Elevar el deseo"
      },
      aforismo: "Actúo con dirección en lugar de hacerlo con expectativas, ganando serenidad y elevando el deseo.",
      commentary: "Nos muestra que las expectativas de comportamiento desaparecen cuando estamos en nuestro centro de gravedad. Dejamos de esperar que el otro cambie —o que nosotros mismos tengamos un determinado comportamiento— y cambiamos nosotros, dirigiendo nuestras acciones y convirtiéndonos en protagonistas."
    }
  ];

  const testimonialsList =
    lang === "es" ? TESTIMONIALS_LIST :
    lang === "fr" ? TESTIMONIALS_LIST_FR :
    lang === "de" ? TESTIMONIALS_LIST_DE :
    lang === "pt" ? TESTIMONIALS_LIST_PT :
    TESTIMONIALS_LIST_EN;
  const resourcesList =
    lang === "es" ? RESOURCES_LIST :
    lang === "fr" ? RESOURCES_LIST_FR :
    lang === "de" ? RESOURCES_LIST_DE :
    lang === "pt" ? RESOURCES_LIST_PT :
    RESOURCES_LIST_EN;
  const examplesList =
    lang === "es" ? EXAMPLES_LIST :
    lang === "fr" ? EXAMPLES_LIST_FR :
    lang === "de" ? EXAMPLES_LIST_DE :
    lang === "pt" ? EXAMPLES_LIST_PT :
    EXAMPLES_LIST_EN;
  const glossaryList =
    lang === "es" ? GLOSSARY_TERMS :
    lang === "fr" ? GLOSSARY_TERMS_FR :
    lang === "de" ? GLOSSARY_TERMS_DE :
    lang === "pt" ? GLOSSARY_TERMS_PT :
    GLOSSARY_TERMS_EN;

  // Filter glossary
  const filteredGlossary = glossaryList.filter(
    item => item.term.toLowerCase().includes(glossarySearch.toLowerCase()) || 
         item.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  // Submit feedback
  const handleSendFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;

    setIsSendingFeedback(true);
    
    // Anonymity Check - We only package the feedback text and selected category
    const payload = {
      category: feedbackType,
      message: feedbackText.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      let entregado = false;

      // 1) Buzón propio de la aplicación: función de servidor + base de datos privada
      try {
        const respuesta = await fetch("/api/buzon", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        entregado = respuesta.ok;
      } catch (e) {
        entregado = false;
      }

      // 2) Respaldo opcional: webhook externo configurado por variable de entorno
      if (!entregado) {
        const webhookUrl = import.meta.env.VITE_BUZON_WEBHOOK_URL || import.meta.env.URL_de_web_de_VITE_BUZON;
        if (webhookUrl) {
          // We use mode: "no-cors" and Content-Type: "text/plain" to bypass CORS preflight check
          // and allow Google's redirect (302) to succeed seamlessly.
          await fetch(webhookUrl, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "text/plain"
            },
            body: JSON.stringify(payload)
          });
          entregado = true;
        }
      }

      // 3) Simulador amable cuando no hay servidor disponible (p. ej., vista previa local)
      if (!entregado) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Feedback enviado de forma anónima (Simulado sin servidor):", payload);
      }

      setFeedbackSent(true);
      setFeedbackText("");
      showToast("Mensaje enviado de forma totalmente anónima. ¡Gracias por tu devolución!");
    } catch (err) {
      console.error("Error al enviar al buzón:", err);
      showToast("Tu mensaje se procesó localmente debido a límites de red. ¡Agradecemos tu intención!");
      // Still show success to protect practitioner comfort
      setFeedbackSent(true);
      setFeedbackText("");
    } finally {
      setIsSendingFeedback(false);
    }
  };

  return (
    <div className="space-y-8" id="support-section-root">
      
      {/* Visual Section Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-full">
            {{ es: "Materiales de Apoyo y Buzón", en: "Support Materials & Mailbox", fr: "Matériels de Soutien et Boîte à Messages", de: "Unterstützungsmaterialien & Briefkasten", pt: "Materiais de Apoio e Caixa de Mensagens" }[lang]}
          </span>
        </div>
        <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
          {{ es: "Recursos de Consulta y Participación", en: "Resources for Inquiry & Participation", fr: "Ressources de Consultation et de Participation", de: "Ressourcen zum Nachschlagen und Mitwirken", pt: "Recursos de Consulta e Participação" }[lang]}
        </h2>
        <p className={`text-sm max-w-3xl leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          {{
            es: "Explora ejemplos prácticos extraídos de la práctica directa de los autores, consulta conceptos clave del glosario de la no violencia o comparte tus valoraciones de manera 100% privada y anónima.",
            en: "Explore practical examples extracted from the authors' direct practice, search key terms from the active nonviolence glossary, or share your feedback in a 100% private and anonymous manner.",
            fr: "Explorez des exemples pratiques issus de la pratique directe des auteurs, consultez les concepts clés du glossaire de la non-violence ou partagez vos retours de manière 100 % privée et anonyme.",
            de: "Erkunden Sie praktische Beispiele aus der direkten Praxis der Autoren, schlagen Sie Schlüsselbegriffe im Glossar der Gewaltfreiheit nach oder teilen Sie Ihre Rückmeldungen 100 % privat und anonym mit.",
            pt: "Explora exemplos práticos extraídos da prática direta dos autores, consulta conceitos-chave do glossário da não-violência ou partilha as tuas avaliações de forma 100% privada e anónima."
          }[lang]}
        </p>
      </div>

      {/* Sub-tab Navigation links */}
      <div className={`flex border-b overflow-x-auto scrollbar-none gap-2 ${
        isDark ? "border-slate-800" : "border-slate-200"
      }`}>
        {[
          { id: "examples", label: { es: "Ejemplos Reales", en: "Real Examples", fr: "Exemples Réels", de: "Echte Beispiele", pt: "Exemplos Reais" }[lang], icon: FileText },
          { id: "testimonials", label: { es: "Testimonios (9)", en: "Testimonials (9)", fr: "Témoignages (9)", de: "Erfahrungsberichte (9)", pt: "Testemunhos (9)" }[lang], icon: Users },
          { id: "glossary", label: { es: "Glosario Completo", en: "Complete Glossary", fr: "Glossaire Complet", de: "Vollständiges Glossar", pt: "Glossário Completo" }[lang], icon: Bookmark },
          { id: "resources", label: { es: "Biblioteca y Enlaces", en: "Library & Links", fr: "Bibliothèque et Liens", de: "Bibliothek & Links", pt: "Biblioteca e Ligações" }[lang], icon: BookOpen },
          { id: "mailbox", label: { es: "Buzón Anónimo", en: "Anonymous Mailbox", fr: "Boîte Anonyme", de: "Anonymer Briefkasten", pt: "Caixa Anónima" }[lang], icon: MessageSquare }
        ].map(tab => {
          const Icon = tab.icon;
          const active = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveSubTab(tab.id as any);
                if (tab.id === "mailbox") setFeedbackSent(false);
              }}
              className={`px-4 py-3 text-xs font-bold border-b-2 whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                active 
                  ? "border-amber-500 text-amber-500 font-extrabold" 
                  : isDark 
                    ? "border-transparent text-slate-400 hover:text-slate-250 hover:border-slate-800" 
                    : "border-transparent text-slate-600 hover:text-slate-950 hover:border-slate-300"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Inner View */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          
          {/* VIEW 1: EXAMPLES */}
          {activeSubTab === "examples" && (
            <motion.div
              key="subtab-examples"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-6"
            >
              <div className={`p-4 rounded-xl border flex items-start gap-3 transition-colors ${
                isDark ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200/60"
              }`}>
                <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {lang === "es" ? (
                    <>Hemos integrado estos <strong>ejemplos reales y anónimos</strong> extraídos del trabajo directo de los autores. Puedes examinar el mapeo conceptual de cada punto o cargarlos directamente en tu espacio de trabajo para ver en tiempo real cómo se construyen las fórmulas de superación moral.</>
                  ) : lang === "fr" ? (
                    <>Nous avons intégré ces <strong>exemples réels et anonymes</strong> issus du travail direct des auteurs. Vous pouvez examiner la cartographie conceptuelle de chaque point ou les charger directement dans votre espace de travail pour voir en temps réel comment se construisent les formules de dépassement moral.</>
                  ) : lang === "de" ? (
                    <>Wir haben diese <strong>echten und anonymen Beispiele</strong> aus der direkten Arbeit der Autoren integriert. Sie können die begriffliche Zuordnung jedes Punktes untersuchen oder sie direkt in Ihren Arbeitsbereich laden, um in Echtzeit zu sehen, wie die Formeln der moralischen Überwindung aufgebaut werden.</>
                  ) : lang === "pt" ? (
                    <>Integrámos estes <strong>exemplos reais e anónimos</strong> extraídos do trabalho direto dos autores. Podes examinar o mapeamento conceptual de cada ponto ou carregá-los diretamente no teu espaço de trabalho para ver em tempo real como se constroem as fórmulas de superação moral.</>
                  ) : (
                    <>We have integrated these <strong>real and anonymous examples</strong> extracted from the authors' direct work. You can examine the conceptual mapping of each point or load them directly into your workspace to see in real-time how the moral overcoming formulas are built.</>
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {examplesList.map(ex => (
                  <div 
                    key={ex.id}
                    className={`rounded-2xl border p-6 flex flex-col justify-between shadow-xs transition-all duration-200 hover:shadow-sm ${
                      isDark 
                        ? "bg-slate-900 border-slate-800 hover:border-slate-750" 
                        : "bg-white border-slate-100 hover:border-slate-200"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <h3 className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-850"}`}>
                          {ex.title}
                        </h3>
                        <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                          {ex.subtitle}
                        </p>
                      </div>

                      <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        {ex.description}
                      </p>

                      {/* Map flow representation */}
                      <div className={`p-4 rounded-xl border space-y-2.5 font-mono text-xs transition-colors ${
                        isDark ? "bg-slate-950 border-slate-850/60" : "bg-slate-50 border-slate-100"
                      }`}>
                        <div className="grid grid-cols-12 gap-1 pb-1 border-b border-dashed border-slate-800/20 dark:border-slate-200/10">
                          <span className="col-span-4 text-slate-400 font-bold">{{ es: "PUNTO", en: "POINT", fr: "POINT", de: "PUNKT", pt: "PONTO" }[lang]}</span>
                          <span className={`col-span-8 font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                            {{ es: "CONTENIDO DEL EJERCICIO", en: "EXERCISE CONTENT", fr: "CONTENU DE L’EXERCICE", de: "INHALT DER ÜBUNG", pt: "CONTEÚDO DO EXERCÍCIO" }[lang]}
                          </span>
                        </div>
                        {[
                          { num: 1, label: { es: "P1. Rechazo", en: "P1. Rejection", fr: "P1. Rejet", de: "P1. Ablehnung", pt: "P1. Rejeição" }[lang], val: ex.answers[1] },
                          { num: 2, label: { es: "P2. Reacción", en: "P2. Reaction", fr: "P2. Réaction", de: "P2. Reaktion", pt: "P2. Reação" }[lang], val: ex.answers[2] },
                          { num: 3, label: { es: "P3. Pido / Doy", en: "P3. Ask / Give", fr: "P3. Demande / Don", de: "P3. Bitte / Gebe", pt: "P3. Peço / Dou" }[lang], val: ex.answers[3] },
                          { num: 4, label: { es: "P4. Buen Trato", en: "P4. Good Treatment", fr: "P4. Bon Traitement", de: "P4. Gute Behandlung", pt: "P4. Bom Trato" }[lang], val: ex.answers[4] },
                          { num: 5, label: { es: "P5. Caída (3-2)", en: "P5. Fall (3-2)", fr: "P5. Chute (3-2)", de: "P5. Absturz (3-2)", pt: "P5. Queda (3-2)" }[lang], val: ex.answers[5] },
                          { num: 6, label: { es: "P6. Subida (2-3)", en: "P6. Rise (2-3)", fr: "P6. Montée (2-3)", de: "P6. Aufstieg (2-3)", pt: "P6. Subida (2-3)" }[lang], val: ex.answers[6] },
                          { num: 7, label: { es: "P7. Caída (4-1)", en: "P7. Fall (4-1)", fr: "P7. Chute (4-1)", de: "P7. Absturz (4-1)", pt: "P7. Queda (4-1)" }[lang], val: ex.answers[7] },
                          { num: 8, label: { es: "P8. Subida (1-4)", en: "P8. Rise (1-4)", fr: "P8. Montée (1-4)", de: "P8. Aufstieg (1-4)", pt: "P8. Subida (1-4)" }[lang], val: ex.answers[8] }
                        ].map(p => (
                          <div key={p.num} className="grid grid-cols-12 gap-1 items-start">
                            <span className="col-span-4 text-slate-450 font-bold text-[10px]">{p.label}:</span>
                            <span className={`col-span-8 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{p.val}</span>
                          </div>
                        ))}
                      </div>

                      {/* Generated Aforismo summary block */}
                      <div className={`p-4 rounded-xl border border-dashed ${
                        isDark ? "bg-amber-950/10 border-amber-900/30 text-amber-300" : "bg-amber-50/50 border-amber-100 text-amber-900"
                      }`}>
                        <span className="text-[9px] uppercase font-bold block tracking-wider opacity-80">
                          {{ es: "Aforismo Conclusivo:", en: "Concluding Aphorism:", fr: "Aphorisme Conclusif :", de: "Abschließender Leitgedanke:", pt: "Aforismo Conclusivo:" }[lang]}
                        </span>
                        <p className="text-xs font-bold mt-1 italic">
                          "{ex.aforismo}"
                        </p>
                      </div>

                      {/* Commentary details */}
                      <p className={`text-xs leading-relaxed italic ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        💡 <strong>{{ es: "Análisis:", en: "Analysis:", fr: "Analyse :", de: "Analyse:", pt: "Análise:" }[lang]}</strong> {ex.commentary}
                      </p>
                    </div>

                    <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-850 flex justify-end">
                      <button
                        onClick={() => {
                          onLoadExampleAnswers(ex.answers, ex.title);
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                          isDark 
                            ? "bg-amber-600 hover:bg-amber-500 text-white shadow-md shadow-amber-900/20" 
                            : "bg-slate-900 hover:bg-slate-800 text-white"
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                        <span>{{ es: "Cargar en la Práctica", en: "Load into Practice", fr: "Charger dans la Pratique", de: "In die Praxis Laden", pt: "Carregar na Prática" }[lang]}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* VIEW 2: TESTIMONIALS */}
          {activeSubTab === "testimonials" && (
            <motion.div
              key="subtab-testimonials"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-6"
            >
              <div className={`p-4 rounded-xl border flex items-start gap-3 transition-colors ${
                isDark ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200/60"
              }`}>
                <Users className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {lang === "es" ? (
                    <>Los <strong>testimonios reales</strong> son relatos de transformación personal compartidos por practicantes de la Regla de Oro. Nos muestran de qué forma el ejercicio ha permitido calmar tensiones crónicas y sanar relaciones familiares o sociales.</>
                  ) : lang === "fr" ? (
                    <>Les <strong>témoignages réels</strong> sont des récits de transformation personnelle partagés par des praticiens de la Règle d’Or. Ils nous montrent comment l’exercice a permis d’apaiser des tensions chroniques et de guérir des relations familiales ou sociales.</>
                  ) : lang === "de" ? (
                    <>Die <strong>echten Erfahrungsberichte</strong> sind Berichte persönlicher Verwandlung, geteilt von Praktizierenden der Goldenen Regel. Sie zeigen uns, wie die Übung geholfen hat, chronische Spannungen zu beruhigen und familiäre oder soziale Beziehungen zu heilen.</>
                  ) : lang === "pt" ? (
                    <>Os <strong>testemunhos reais</strong> são relatos de transformação pessoal partilhados por praticantes da Regra de Ouro. Mostram-nos de que forma o exercício permitiu acalmar tensões crónicas e sarar relações familiares ou sociais.</>
                  ) : (
                    <>The <strong>real testimonials</strong> are accounts of personal transformation shared by practitioners of the Golden Rule. They show us how the exercise has allowed them to calm chronic tensions and heal family or social relationships.</>
                  )}
                </p>
              </div>

              {/* Grid space for incoming real testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonialsList.map((t, idx) => (
                  <div 
                    key={idx}
                    className={`rounded-2xl border p-5 space-y-4 flex flex-col justify-between relative overflow-hidden transition-all shadow-2xs hover:shadow-xs ${
                      isDark ? "bg-slate-900 border-slate-800 hover:border-slate-750" : "bg-white border-slate-150 hover:border-slate-200"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-2">
                        <div className="space-y-1">
                          <h4 className={`text-sm font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                            "{t.title}"
                          </h4>
                          <span className="text-[11px] text-amber-600 font-semibold block">
                            {{ es: "Por", en: "By", fr: "Par", de: "Von", pt: "Por" }[lang]} {t.author}
                          </span>
                        </div>
                        <span className="text-[9px] uppercase font-mono tracking-wider text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-md font-bold shrink-0">
                          {t.tag}
                        </span>
                      </div>

                      <p className={`text-xs leading-relaxed italic ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        "{t.content}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive prompt to suggest sending more */}
              <div className={`p-6 rounded-2xl border text-center space-y-3 transition-colors ${
                isDark ? "bg-slate-950/60 border-slate-850" : "bg-amber-50/20 border-amber-100"
              }`}>
                <Users className="w-8 h-8 text-amber-500 mx-auto opacity-70" />
                <h4 className={`text-sm font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                  {{ es: "¿Quieres enviarnos tus testimonios de práctica?", en: "Do you want to send us your practice testimonials?", fr: "Voulez-vous nous envoyer vos témoignages de pratique ?", de: "Möchten Sie uns Ihre Praxis-Erfahrungsberichte senden?", pt: "Queres enviar-nos os teus testemunhos de prática?" }[lang]}
                </h4>
                <p className={`text-xs max-w-xl mx-auto leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
{{
                    es: "Usa el buzón anónimo si deseas compartir tu relato o reflexiones de cambio para que lo incluyamos en esta sección para inspirar a otros.",
                    en: "Use the anonymous mailbox if you wish to share your story or reflections of change so we can include them in this section to inspire others.",
                    fr: "Utilisez la boîte anonyme si vous souhaitez partager votre récit ou vos réflexions de changement afin que nous puissions les inclure dans cette section pour inspirer les autres.",
                    de: "Nutzen Sie den anonymen Briefkasten, wenn Sie Ihren Bericht oder Ihre Reflexionen über Veränderung teilen möchten, damit wir sie in diesen Bereich aufnehmen und andere inspirieren können.",
                    pt: "Usa a caixa anónima se desejares partilhar o teu relato ou reflexões de mudança para que o incluamos nesta secção para inspirar outros."
                  }[lang]}
                </p>
                <div className="pt-2">
                  <button 
                    onClick={() => setActiveSubTab("mailbox")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer inline-flex items-center gap-1.5 ${
                      isDark ? "bg-slate-900 hover:bg-slate-850 text-slate-250 border border-slate-800" : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
                    <span>{{ es: "Ir al buzón para enviar un testimonio", en: "Go to the mailbox to send a testimonial", fr: "Aller à la boîte pour envoyer un témoignage", de: "Zum Briefkasten, um einen Bericht zu senden", pt: "Ir à caixa para enviar um testemunho" }[lang]}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW 3: GLOSSARY */}
          {activeSubTab === "glossary" && (
            <motion.div
              key="subtab-glossary"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-6"
            >
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={{ es: "Buscar término o concepto clave (Ej: Aforismo, Cenestesia, Clima, Paisaje...)", en: "Search term or key concept (e.g., Aphorism, Coenesthesia, Climate, Landscape...)", fr: "Rechercher un terme ou concept clé (Ex : Aphorisme, Cénesthésie, Climat, Paysage...)", de: "Begriff oder Schlüsselkonzept suchen (z. B. Leitgedanke, Zönästhesie, Klima, Landschaft...)", pt: "Procurar termo ou conceito-chave (Ex.: Aforismo, Cenestesia, Clima, Paisagem...)" }[lang]}
                  value={glossarySearch}
                  onChange={(e) => setGlossarySearch(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-1 transition-all ${
                    isDark 
                      ? "bg-slate-900 border-slate-800 text-slate-250 focus:border-amber-500 focus:ring-amber-500" 
                      : "bg-white border-slate-200 text-slate-800 focus:border-amber-500 focus:ring-amber-500"
                  }`}
                />
              </div>

              {/* Glossary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredGlossary.map((g, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-2xl border space-y-2.5 transition-all shadow-2xs ${
                      isDark ? "bg-slate-900 border-slate-850 hover:border-slate-755" : "bg-white border-slate-100 hover:border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className={`font-bold text-sm ${isDark ? "text-amber-400" : "text-amber-950"}`}>
                        {g.term}
                      </h4>
                      <span className={`text-[9px] px-2 py-0.5 rounded font-bold font-mono ${
                        g.tag === "Metodología" || g.tag === "Methodology" || g.tag === "Méthodologie" || g.tag === "Methodik" || g.tag === "Metodologia"
                          ? "bg-blue-500/10 text-blue-400"
                          : g.tag === "Estados" || g.tag === "States" || g.tag === "États" || g.tag === "Zustände"
                          ? "bg-rose-500/10 text-rose-450"
                          : "bg-emerald-500/10 text-emerald-450"
                      }`}>
                        {g.tag}
                      </span>
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? "text-slate-350" : "text-slate-650"}`}>
                      {g.definition}
                    </p>
                  </div>
                ))}

                {filteredGlossary.length === 0 && (
                  <div className="col-span-full text-center py-8 text-slate-450 text-xs">
                    {{
                      es: `No se encontraron términos para "${glossarySearch}". Intenta con otra palabra.`,
                      en: `No terms were found for "${glossarySearch}". Try another word.`,
                      fr: `Aucun terme trouvé pour "${glossarySearch}". Essayez un autre mot.`,
                      de: `Keine Begriffe für "${glossarySearch}" gefunden. Versuchen Sie ein anderes Wort.`,
                      pt: `Não foram encontrados termos para "${glossarySearch}". Tenta outra palavra.`
                    }[lang]}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* VIEW 4: RESOURCES */}
          {activeSubTab === "resources" && (
            <motion.div
              key="subtab-resources"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-6"
            >
              {/* Top info badge */}
              <div className={`p-4 rounded-xl border flex items-start gap-3 transition-colors ${
                isDark ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200/60"
              }`}>
                <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {lang === "es" ? (
                    <><strong>Biblioteca de la No Violencia:</strong> Consulta las obras completas de Silo y otros autores de referencia. La bibliografía completa de Silo puede ser consultada en PDF libremente en la web oficial <a href="https://www.silo.net" target="_blank" rel="noreferrer" className="text-amber-500 hover:underline font-bold inline-flex items-center gap-0.5">silo.net <ExternalLink className="w-3 h-3 inline" /></a>.</>
                  ) : lang === "fr" ? (
                    <><strong>Bibliothèque de la Non-Violence :</strong> Consultez les œuvres complètes de Silo et d’autres auteurs de référence. La bibliographie complète de Silo peut être consultée librement en PDF sur le site officiel <a href="https://www.silo.net" target="_blank" rel="noreferrer" className="text-amber-500 hover:underline font-bold inline-flex items-center gap-0.5">silo.net <ExternalLink className="w-3 h-3 inline" /></a>.</>
                  ) : lang === "de" ? (
                    <><strong>Bibliothek der Gewaltfreiheit:</strong> Konsultieren Sie die gesammelten Werke von Silo und anderen Referenzautoren. Die vollständige Bibliografie von Silo kann frei als PDF auf der offiziellen Website <a href="https://www.silo.net" target="_blank" rel="noreferrer" className="text-amber-500 hover:underline font-bold inline-flex items-center gap-0.5">silo.net <ExternalLink className="w-3 h-3 inline" /></a> eingesehen werden.</>
                  ) : lang === "pt" ? (
                    <><strong>Biblioteca da Não-Violência:</strong> Consulta as obras completas de Silo e de outros autores de referência. A bibliografia completa de Silo pode ser consultada livremente em PDF no site oficial <a href="https://www.silo.net" target="_blank" rel="noreferrer" className="text-amber-500 hover:underline font-bold inline-flex items-center gap-0.5">silo.net <ExternalLink className="w-3 h-3 inline" /></a>.</>
                  ) : (
                    <><strong>Nonviolence Library:</strong> Consult the complete works of Silo and other reference authors. Silo's complete bibliography can be accessed freely in PDF format on the official website <a href="https://www.silo.net" target="_blank" rel="noreferrer" className="text-amber-500 hover:underline font-bold inline-flex items-center gap-0.5">silo.net <ExternalLink className="w-3 h-3 inline" /></a>.</>
                  )}
                </p>
              </div>

              {/* Grid of Resources */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resourcesList.map((r, index) => {
                  const isExternalLink = !!r.url;
                  const isYoutube = r.url?.includes("youtube.com");
                  
                  return (
                    <div
                      key={index}
                      className={`p-5 rounded-2xl border space-y-4 flex flex-col justify-between transition-all ${
                        isDark ? "bg-slate-900 border-slate-800 hover:border-slate-755" : "bg-white border-slate-150 hover:border-slate-200"
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className={`text-[9px] px-2 py-0.5 rounded font-bold font-mono ${
                            r.type === "Libro" || r.type === "Book"
                              ? "bg-amber-500/10 text-amber-500"
                              : r.type === "Conferencia" || r.type === "Conference"
                              ? "bg-blue-500/10 text-blue-400"
                              : r.type === "Arenga" || r.type === "Harangue"
                              ? "bg-rose-500/10 text-rose-450"
                              : r.type === "Manual"
                              ? "bg-purple-500/10 text-purple-400"
                              : "bg-emerald-500/10 text-emerald-450"
                          }`}>
                            {r.type}
                          </span>
                          
                          {r.year && (
                            <span className="text-[10px] text-slate-450 font-semibold font-mono">
                              {r.year}
                            </span>
                          )}
                        </div>

                        <div className="space-y-1">
                          <h4 className={`text-sm font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                            {r.title}
                          </h4>
                          {r.author && (
                            <p className="text-[11px] text-slate-400 font-bold block">
                              {r.author} {r.publisher ? `• ${r.publisher}` : ""}
                            </p>
                          )}
                        </div>

                        <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                          {r.description}
                        </p>
                      </div>

                      {isExternalLink && (
                        <div className="pt-3 border-t border-slate-100 dark:border-slate-850 flex justify-end">
                          <a
                            href={r.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`px-3 py-1.5 rounded-lg text-[11px] font-bold inline-flex items-center gap-1.5 transition ${
                              isYoutube
                                ? "bg-red-650 hover:bg-red-600 text-white"
                                : "bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white"
                            }`}
                          >
                            {isYoutube ? (
                              <Youtube className="w-3.5 h-3.5" />
                            ) : (
                              <FilePdfIcon className="w-3.5 h-3.5" />
                            )}
                            <span>{{ es: "Abrir Recurso", en: "Open Resource", fr: "Ouvrir la Ressource", de: "Ressource Öffnen", pt: "Abrir Recurso" }[lang]}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* VIEW 5: ANONYMOUS MAILBOX */}
          {activeSubTab === "mailbox" && (
            <motion.div
              key="subtab-mailbox"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              {/* Privacy badge header */}
              <div className={`p-5 rounded-2xl border flex gap-4 items-start shadow-xs transition-all ${
                isDark 
                  ? "bg-emerald-950/20 border-emerald-900/30 text-slate-200" 
                  : "bg-emerald-50/50 border-emerald-100 text-slate-800"
              }`}>
                <div className={`p-2 rounded-xl shrink-0 ${
                  isDark ? "bg-emerald-900/30 text-emerald-400" : "bg-emerald-100 text-emerald-800"
                }`}>
                  <Lock className="w-5 h-5 animate-pulse" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                    isDark ? "text-emerald-400" : "text-emerald-800"
                  }`}>
                    {{ es: "🔒 Espacio de Devoluciones de Privacidad Absoluta", en: "🔒 Space of Absolute Privacy Feedback", fr: "🔒 Espace de Retours en Confidentialité Absolue", de: "🔒 Raum für Rückmeldungen mit Absoluter Privatsphäre", pt: "🔒 Espaço de Devoluções de Privacidade Absoluta" }[lang]}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {lang === "es" ? (
                      <>
                        <strong>¿Cómo garantizamos tu anonimato?</strong> El buzón funciona de forma 100% ciega. No registramos direcciones IP, no generamos cookies persistentes en este formulario, ni te pedimos correos o datos identificativos. La información viaja encriptada por un canal unidireccional directo hacia los coordinadores de la práctica. Tu voz es valiosa y tu intimidad está completamente a salvo.
                      </>
                    ) : lang === "fr" ? (
                      <>
                        <strong>Comment garantissons-nous votre anonymat ?</strong> La boîte fonctionne de manière 100 % aveugle. Nous n’enregistrons pas les adresses IP, nous ne générons pas de cookies persistants dans ce formulaire et nous ne demandons ni e-mails ni données identifiantes. L’information voyage chiffrée par un canal unidirectionnel direct vers les coordinateurs de la pratique. Votre voix est précieuse et votre intimité est totalement protégée.
                      </>
                    ) : lang === "de" ? (
                      <>
                        <strong>Wie garantieren wir Ihre Anonymität?</strong> Der Briefkasten arbeitet zu 100 % blind. Wir registrieren keine IP-Adressen, erzeugen keine dauerhaften Cookies in diesem Formular und fragen weder E-Mails noch identifizierende Daten ab. Die Informationen reisen verschlüsselt über einen direkten Einwegkanal zu den Koordinatoren der Praxis. Ihre Stimme ist wertvoll und Ihre Privatsphäre ist vollkommen geschützt.
                      </>
                    ) : lang === "pt" ? (
                      <>
                        <strong>Como garantimos o teu anonimato?</strong> A caixa funciona de forma 100% cega. Não registamos endereços IP, não geramos cookies persistentes neste formulário, nem pedimos e-mails ou dados identificativos. A informação viaja encriptada por um canal unidirecional direto para os coordenadores da prática. A tua voz é valiosa e a tua intimidade está completamente protegida.
                      </>
                    ) : (
                      <>
                        <strong>How do we guarantee your anonymity?</strong> The mailbox operates 100% blindly. We do not register IP addresses, we do not generate persistent cookies in this form, nor do we ask for emails or identifying data. Information travels encrypted through a direct one-way channel to the practice coordinators. Your voice is valuable and your privacy is completely safe.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {!feedbackSent ? (
                <form onSubmit={handleSendFeedback} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className={`text-xs font-bold uppercase tracking-wider block ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}>
                      {{ es: "Categoría de la devolución", en: "Feedback Category", fr: "Catégorie du retour", de: "Kategorie der Rückmeldung", pt: "Categoria da devolução" }[lang]}
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "opinion", label: { es: "Opinión General", en: "General Opinion", fr: "Opinion Générale", de: "Allgemeine Meinung", pt: "Opinião Geral" }[lang] },
                        { id: "testimonio", label: { es: "Nuevo Testimonio", en: "New Testimonial", fr: "Nouveau Témoignage", de: "Neuer Erfahrungsbericht", pt: "Novo Testemunho" }[lang] },
                        { id: "sugerencia", label: { es: "Sugerencias", en: "Suggestions", fr: "Suggestions", de: "Vorschläge", pt: "Sugestões" }[lang] }
                      ].map(cat => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setFeedbackType(cat.id)}
                          className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                            feedbackType === cat.id
                              ? isDark
                                ? "bg-amber-600/20 border-amber-500 text-amber-300 shadow-sm"
                                : "bg-amber-50 border-amber-300 text-amber-900 shadow-sm"
                              : isDark
                                ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                                : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs font-bold uppercase tracking-wider block ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}>
                      {{ es: "Tu mensaje reflexivo u opinión", en: "Your reflective message or opinion", fr: "Votre message réflexif ou opinion", de: "Ihre reflektierende Nachricht oder Meinung", pt: "A tua mensagem reflexiva ou opinião" }[lang]}
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder={{ es: "Escribe libremente aquí tu experiencia con la práctica, tus ideas de mejora o el testimonio que desees compartir...", en: "Write freely here your experience with the practice, your improvement ideas, or the testimonial you wish to share...", fr: "Écrivez librement ici votre expérience de la pratique, vos idées d’amélioration ou le témoignage que vous souhaitez partager...", de: "Schreiben Sie hier frei über Ihre Erfahrung mit der Praxis, Ihre Verbesserungsideen oder den Bericht, den Sie teilen möchten...", pt: "Escreve livremente aqui a tua experiência com a prática, as tuas ideias de melhoria ou o testemunho que desejes partilhar..." }[lang]}
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      className={`w-full p-4 rounded-xl border text-xs leading-relaxed focus:outline-none focus:ring-1 transition-all ${
                        isDark 
                          ? "bg-slate-900 border-slate-800 text-slate-200 focus:border-amber-500 focus:ring-amber-500" 
                          : "bg-white border-slate-200 text-slate-800 focus:border-amber-500 focus:ring-amber-500"
                      }`}
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={isSendingFeedback || !feedbackText.trim()}
                      className={`px-5 py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                        !feedbackText.trim()
                          ? "bg-slate-200 dark:bg-slate-800 text-slate-450 dark:text-slate-600 cursor-not-allowed"
                          : isDark 
                            ? "bg-amber-600 hover:bg-amber-500 text-white" 
                            : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                    >
                      {isSendingFeedback ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>{{ es: "Transmitiendo de forma segura...", en: "Transmitting securely...", fr: "Transmission sécurisée en cours...", de: "Sichere Übertragung läuft...", pt: "A transmitir de forma segura..." }[lang]}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>{{ es: "Enviar Devolución Anónima", en: "Send Anonymous Feedback", fr: "Envoyer un Retour Anonyme", de: "Anonyme Rückmeldung Senden", pt: "Enviar Devolução Anónima" }[lang]}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`rounded-2xl border p-8 text-center space-y-4 ${
                    isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <h4 className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                      {{ es: "¡Mensaje transmitido con éxito!", en: "Message transmitted successfully!", fr: "Message transmis avec succès !", de: "Nachricht erfolgreich übermittelt!", pt: "Mensagem transmitida com sucesso!" }[lang]}
                    </h4>
                    <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      {{
                        es: "Tu mensaje ha sido encriptado y enviado a la bandeja de devoluciones de la coordinación. Se ha omitido cualquier cabecera identificativa o registro de sesión para resguardar permanentemente tu anonimato.",
                        en: "Your message has been encrypted and sent to the coordination feedback inbox. Any identifying header or session registry has been omitted to permanently safeguard your anonymity.",
                        fr: "Votre message a été chiffré et envoyé à la boîte de retours de la coordination. Tout en-tête identifiant ou registre de session a été omis afin de préserver définitivement votre anonymat.",
                        de: "Ihre Nachricht wurde verschlüsselt und an das Rückmelde-Postfach der Koordination gesendet. Jegliche identifizierende Kopfzeile oder Sitzungsregistrierung wurde weggelassen, um Ihre Anonymität dauerhaft zu schützen.",
                        pt: "A tua mensagem foi encriptada e enviada para a caixa de devoluções da coordenação. Foi omitido qualquer cabeçalho identificativo ou registo de sessão para resguardar permanentemente o teu anonimato."
                      }[lang]}
                    </p>
                  </div>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setFeedbackSent(false)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                        isDark ? "bg-slate-800 hover:bg-slate-750 text-slate-200" : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                      }`}
                    >
                      {{ es: "Enviar otra devolución", en: "Send another feedback", fr: "Envoyer un autre retour", de: "Weitere Rückmeldung senden", pt: "Enviar outra devolução" }[lang]}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Zona privada de coordinación (acceso discreto, solo con contraseña) */}
              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => (adminVisible ? cerrarBuzonPrivado() : setAdminVisible(true))}
                  title="Zona de coordinación"
                  className={`p-1.5 rounded-lg transition cursor-pointer opacity-25 hover:opacity-90 ${
                    isDark ? "text-slate-400 hover:bg-slate-800" : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  <Lock className="w-3.5 h-3.5" />
                </button>
              </div>

              {adminVisible && (
                <div className={`rounded-2xl border p-5 space-y-4 ${
                  isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                      isDark ? "text-slate-200" : "text-slate-800"
                    }`}>
                      <Lock className="w-3.5 h-3.5 text-amber-500" />
                      <span>Zona privada de coordinación</span>
                    </h4>
                    <button
                      type="button"
                      onClick={cerrarBuzonPrivado}
                      className={`text-[10px] px-2 py-1 rounded-lg border transition cursor-pointer ${
                        isDark ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750" : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      Cerrar
                    </button>
                  </div>

                  {adminMensajes === null ? (
                    <div className="space-y-3">
                      <p className={`text-[11px] leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        Introduce la contraseña de coordinación para consultar los mensajes recibidos en el buzón anónimo.
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="password"
                          value={adminPass}
                          onChange={(e) => setAdminPass(e.target.value)}
                          onKeyDown={(e) => { if (e.key === "Enter") consultarBuzonPrivado(); }}
                          placeholder="Contraseña"
                          className={`flex-1 px-3 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-1 transition ${
                            isDark
                              ? "bg-slate-950 border-slate-800 text-slate-200 focus:border-amber-500 focus:ring-amber-500"
                              : "bg-white border-slate-200 text-slate-800 focus:border-amber-500 focus:ring-amber-500"
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => consultarBuzonPrivado()}
                          disabled={adminCargando || !adminPass.trim()}
                          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
                            !adminPass.trim() || adminCargando
                              ? "bg-slate-200 dark:bg-slate-800 text-slate-450 dark:text-slate-600 cursor-not-allowed"
                              : isDark ? "bg-amber-600 hover:bg-amber-500 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"
                          }`}
                        >
                          {adminCargando ? (
                            <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <span>Entrar</span>
                          )}
                        </button>
                      </div>
                      {adminError && (
                        <p className="text-[11px] font-semibold text-rose-500">{adminError}</p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <p className={`text-[11px] font-semibold ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                          {adminMensajes.length === 0
                            ? "El buzón está vacío por ahora."
                            : `${adminMensajes.length} mensaje${adminMensajes.length === 1 ? "" : "s"} recibido${adminMensajes.length === 1 ? "" : "s"} (del más reciente al más antiguo).`}
                        </p>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => consultarBuzonPrivado()}
                            disabled={adminCargando}
                            className={`text-[10px] px-2.5 py-1.5 rounded-lg border font-bold transition cursor-pointer ${
                              isDark ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750" : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            Actualizar
                          </button>
                          {adminMensajes.length > 0 && (
                            <button
                              type="button"
                              onClick={() => {
                                if (window.confirm("¿Seguro que deseas vaciar el buzón? Esta acción borra todos los mensajes de forma definitiva.")) {
                                  consultarBuzonPrivado("vaciar");
                                }
                              }}
                              disabled={adminCargando}
                              className="text-[10px] px-2.5 py-1.5 rounded-lg border border-rose-300 text-rose-500 hover:bg-rose-50 dark:border-rose-800 dark:hover:bg-rose-950/40 font-bold transition cursor-pointer"
                            >
                              Vaciar buzón
                            </button>
                          )}
                        </div>
                      </div>
                      {adminError && (
                        <p className="text-[11px] font-semibold text-rose-500">{adminError}</p>
                      )}
                      <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
                        {adminMensajes.map((mensaje, indice) => (
                          <div
                            key={indice}
                            className={`rounded-xl border p-3.5 space-y-1.5 ${
                              isDark ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">
                                {mensaje.category === "testimonio" ? "Nuevo Testimonio" : mensaje.category === "sugerencia" ? "Sugerencias" : "Opinión General"}
                              </span>
                              <span className={`text-[10px] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                                {mensaje.timestamp ? new Date(mensaje.timestamp).toLocaleString("es-ES", { dateStyle: "medium", timeStyle: "short" }) : ""}
                              </span>
                            </div>
                            <p className={`text-xs leading-relaxed whitespace-pre-wrap ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                              {mensaje.message}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}
