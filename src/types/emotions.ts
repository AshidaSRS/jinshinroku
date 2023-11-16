export const emotions = [
  'ira',
  'miedo',
  'sorpresa',
  'alegria',
  'calma',
  'tristeza',
  'asco',
] as const;
export type MainEmotion = (typeof emotions)[number];
export const iraEmotions = [
  'herido',
  'amenzado',
  'odio',
  'locura',
  'agresividad',
  'frustacion',
  'distante',
  'critico',
] as const;
export type IraEmotion = (typeof iraEmotions)[number];

export const miedoEmotions = [
  'envidia',
  'susto',
  'ansiedad',
  'inseguridad',
  'sumision',
  'rechazo',
  'humillacion',
] as const;
export type MiedoEmotion = (typeof miedoEmotions)[number];

export const sorpresaEmotions = [
  'sorprendido',
  'confusion',
  'asombro',
  'entusiasmo',
] as const;
export type SorpresaEmotion = (typeof sorpresaEmotions)[number];

export const alegriaEmotions = [
  'optimismo',
  'poder',
  'orgullo',
  'creatividad',
  'ilusion',
  'interes',
  'euforia',
] as const;
export type AlegriaEmotion = (typeof alegriaEmotions)[number];

export const calmaEmotions = [
  'concentracion',
  'tranquilidad',
  'seguridad',
  'agradecimiento',
  'plenitud',
  'pacifico',
  'conexion',
  'paz-interior',
] as const;
export type CalmaEmotion = (typeof calmaEmotions)[number];

export const tristezaEmotions = [
  'culpable',
  'abandono',
  'desesperacion',
  'decaimiento',
  'pena',
  'apatia',
] as const;
export type TristezaEmotion = (typeof tristezaEmotions)[number];

export const ascoEmotions = [
  'disconforme',
  'decepcion',
  'horrible',
  'abstinencia',
] as const;
export type AscoEmotion = (typeof ascoEmotions)[number];

export const heridoEmotions = ['devastacion', 'destrozo'] as const;
export type GeridoEmotion = (typeof heridoEmotions)[number];
export const amenzadoEmotions = ['celos', 'atascado'] as const;
export type AmenzadoEmotion = (typeof amenzadoEmotions)[number];
export const odioEmotions = ['traicion', 'resentimiento'] as const;
export type OdioEmotion = (typeof odioEmotions)[number];
export const locuraEmotions = ['rabia', 'furia'] as const;
export type LocuraEmotion = (typeof locuraEmotions)[number];
export const agresividadEmotions = ['provocacion', 'hostil'] as const;
export type AgresividadEmotion = (typeof agresividadEmotions)[number];
export const frustacionEmotions = ['impaciencia', 'irritacion'] as const;
export type FrustacionEmotion = (typeof frustacionEmotions)[number];
export const distanteEmotions = ['suspicacia', 'desconfianza'] as const;
export type DistanteEmotion = (typeof distanteEmotions)[number];
export const criticoEmotions = ['escepticismo', 'sarcasmo'] as const;
export type CriticoEmotion = (typeof criticoEmotions)[number];
export const envidiaEmotions = ['comparacion', 'recelo'] as const;
export type EnvidiaEmotion = (typeof envidiaEmotions)[number];
export const sustoEmotions = ['espanto', 'terror'] as const;
export type SustoEmotion = (typeof sustoEmotions)[number];
export const ansiedadEmotions = ['preocupacion', 'agobio'] as const;
export type AnsiedadEmotion = (typeof ansiedadEmotions)[number];
export const inseguridadEmotions = ['inferior', 'insuficiente'] as const;
export type InseguridadEmotion = (typeof inseguridadEmotions)[number];
export const sumisionEmotions = ['insignificante', 'inutil'] as const;
export type SumisionEmotion = (typeof sumisionEmotions)[number];
export const rechazoEmotions = ['alineacion', 'marginacion'] as const;
export type RechazoEmotion = (typeof rechazoEmotions)[number];
export const humillacionEmotions = ['ridiculo', 'desprecio'] as const;
export type HumillacionEmotion = (typeof humillacionEmotions)[number];
export const sorprendidoEmotions = ['conmocion', 'alucinar'] as const;
export type SorprendidoEmotion = (typeof sorprendidoEmotions)[number];
export const confusionEmotions = ['deslusion', 'preplejidad'] as const;
export type ConfusionEmotion = (typeof confusionEmotions)[number];
export const asombroEmotions = ['estupefaccion', 'impresion'] as const;
export type AsombroEmotion = (typeof asombroEmotions)[number];
export const entusiasmoEmotions = ['entusiasta', 'energico'] as const;
export type EntusiasmoEmotion = (typeof entusiasmoEmotions)[number];
export const optimismoEmotions = ['bromista', 'jugueton'] as const;
export type OptimismoEmotion = (typeof optimismoEmotions)[number];
export const poderEmotions = ['provocacion', 'valentia'] as const;
export type PoderEmotion = (typeof poderEmotions)[number];
export const orgulloEmotions = ['presuntuoso', 'importante'] as const;
export type OrgulloEmotion = (typeof orgulloEmotions)[number];
export const creatividadEmotions = ['insipiracion', 'ingenio'] as const;
export type CreatividadEmotion = (typeof creatividadEmotions)[number];
export const ilusionEmotions = ['esperanza', 'expectacion'] as const;
export type IlusionEmotion = (typeof ilusionEmotions)[number];
export const interesEmotions = ['entretenimiento', 'curiosidad'] as const;
export type InteresEmotion = (typeof interesEmotions)[number];
export const euforiaEmotions = ['liberacion', 'exhaltacion'] as const;
export type EuforiaEmotion = (typeof euforiaEmotions)[number];
export const concentracionEmotions = [
  'contemplacion',
  'atencion-plena',
] as const;
export type ConcentracionEmotion = (typeof concentracionEmotions)[number];
export const tranquilidadEmotions = ['relajacion', 'serenidad'] as const;
export type TranquilidadEmotion = (typeof tranquilidadEmotions)[number];
export const seguridadEmotions = ['aceptacion', 'respeto'] as const;
export type SeguridadEmotion = (typeof seguridadEmotions)[number];
export const agradecimientoEmotions = ['compasion', 'autocompasion'] as const;
export type AgradecimientoEmotion = (typeof agradecimientoEmotions)[number];
export const plenitudEmotions = ['satisfaccion', 'placidez'] as const;
export type PlenitudEmotion = (typeof plenitudEmotions)[number];
export const pacificoEmotions = ['dulzura', 'compresion'] as const;
export type PacificoEmotion = (typeof pacificoEmotions)[number];
export const conexionEmotions = ['armonia', 'fluir'] as const;
export type ConexionEmotion = (typeof conexionEmotions)[number];
export const pazInteriorEmotions = ['equilibrio', 'dicha'] as const;
export type PazInteriorEmotion = (typeof pazInteriorEmotions)[number];
export const culpableEmotions = ['arrepentimiento', 'verguenza'] as const;
export type CulpableEmotion = (typeof culpableEmotions)[number];
export const abandonoEmotions = ['ignorado', 'victimizado'] as const;
export type AbandonoEmotion = (typeof abandonoEmotions)[number];
export const desesperacionEmotions = ['desvalido', 'vulnerable'] as const;
export type DesesperacionEmotion = (typeof desesperacionEmotions)[number];
export const decaimientoEmotions = ['melancolia', 'vacio'] as const;
export type DecaimientoEmotion = (typeof decaimientoEmotions)[number];
export const penaEmotions = ['desamparo', 'abatimiento'] as const;
export type PenaEmotion = (typeof penaEmotions)[number];
export const apatiaEmotions = ['aburrimiento', 'indiferente'] as const;
export type ApatiaEmotion = (typeof apatiaEmotions)[number];
export const disconformeEmotions = ['moralista', 'reacio'] as const;
export type DisconformeEmotion = (typeof disconformeEmotions)[number];
export const decepcionEmotions = ['repugnante', 'enganiado'] as const;
export type decepcionEmotion = (typeof decepcionEmotions)[number];
export const horribleEmotions = ['atascado', 'odioso'] as const;
export type HorribleEmotion = (typeof horribleEmotions)[number];
export const abstinenciaEmotions = ['aversion', 'vacilante'] as const;
export type AbstinenciaEmotion = (typeof abstinenciaEmotions)[number];

export const alegriaRecord: Record<AlegriaEmotion, readonly string[]> = {
  creatividad: creatividadEmotions,
  euforia: euforiaEmotions,
  ilusion: ilusionEmotions,
  interes: interesEmotions,
  optimismo: optimismoEmotions,
  orgullo: orgulloEmotions,
  poder: poderEmotions,
};
export const ascoRecord: Record<AscoEmotion, readonly string[]> = {
  abstinencia: abstinenciaEmotions,
  decepcion: decepcionEmotions,
  disconforme: disconformeEmotions,
  horrible: horribleEmotions,
};
export const calmaRecord: Record<CalmaEmotion, readonly string[]> = {
  agradecimiento: agradecimientoEmotions,
  concentracion: concentracionEmotions,
  conexion: conexionEmotions,
  pacifico: pacificoEmotions,
  'paz-interior': pazInteriorEmotions,
  plenitud: plenitudEmotions,
  seguridad: seguridadEmotions,
  tranquilidad: tranquilidadEmotions,
};
export const iraRecord: Record<IraEmotion, readonly string[]> = {
  agresividad: agresividadEmotions,
  amenzado: amenzadoEmotions,
  critico: criticoEmotions,
  distante: distanteEmotions,
  frustacion: frustacionEmotions,
  herido: heridoEmotions,
  locura: locuraEmotions,
  odio: odioEmotions,
};
export const miedoRecord: Record<MiedoEmotion, readonly string[]> = {
  ansiedad: ansiedadEmotions,
  envidia: envidiaEmotions,
  humillacion: humillacionEmotions,
  inseguridad: inseguridadEmotions,
  rechazo: rechazoEmotions,
  sumision: sumisionEmotions,
  susto: sustoEmotions,
};
export const sorpresaRecord: Record<SorpresaEmotion, readonly string[]> = {
  asombro: asombroEmotions,
  confusion: confusionEmotions,
  entusiasmo: entusiasmoEmotions,
  sorprendido: sorprendidoEmotions,
};
export const tristezaRecord: Record<TristezaEmotion, readonly string[]> = {
  abandono: abandonoEmotions,
  apatia: apatiaEmotions,
  culpable: culpableEmotions,
  decaimiento: decaimientoEmotions,
  desesperacion: desesperacionEmotions,
  pena: penaEmotions,
};

export const emotionsRecord: Record<
  MainEmotion,
  Record<any, readonly string[]>
> = {
  alegria: alegriaRecord,
  asco: ascoRecord,
  calma: calmaRecord,
  ira: iraRecord,
  miedo: miedoRecord,
  sorpresa: sorpresaRecord,
  tristeza: tristezaRecord,
};

export const allEmotions = [
  ...heridoEmotions,
  ...amenzadoEmotions,
  ...odioEmotions,
  ...locuraEmotions,
  ...agresividadEmotions,
  ...frustacionEmotions,
  ...distanteEmotions,
  ...criticoEmotions,
  ...envidiaEmotions,
  ...sustoEmotions,
  ...ansiedadEmotions,
  ...inseguridadEmotions,
  ...sumisionEmotions,
  ...rechazoEmotions,
  ...humillacionEmotions,
  ...sorprendidoEmotions,
  ...confusionEmotions,
  ...asombroEmotions,
  ...entusiasmoEmotions,
  ...optimismoEmotions,
  ...poderEmotions,
  ...orgulloEmotions,
  ...creatividadEmotions,
  ...ilusionEmotions,
  ...interesEmotions,
  ...euforiaEmotions,
  ...concentracionEmotions,
  ...tranquilidadEmotions,
  ...seguridadEmotions,
  ...agradecimientoEmotions,
  ...plenitudEmotions,
  ...pacificoEmotions,
  ...conexionEmotions,
  ...pazInteriorEmotions,
  ...culpableEmotions,
  ...abandonoEmotions,
  ...desesperacionEmotions,
  ...decaimientoEmotions,
  ...penaEmotions,
  ...apatiaEmotions,
  ...disconformeEmotions,
  ...decepcionEmotions,
  ...horribleEmotions,
  ...abstinenciaEmotions,
] as const;

export type Emotion = (typeof allEmotions)[number];
