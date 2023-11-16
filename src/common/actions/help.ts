import { HTML, MarkdownV2, ParseMode } from 'puregram';
import { TelegramAction } from '../../types/telegram';

const AUDIT = 'command.help';

export const helpCommand: TelegramAction = async (context) => {
  const message = `
Commands:
/help: this text,
/emotions: list of possible emotions
/list: list the registry of today
/add: Start the next flow:

* ${MarkdownV2.code('SITUACION')}:
    *   Definicion del lugar, las personas que están y lo que está ocurriendo
* ${MarkdownV2.code('PENSAMIENTO')}:
    *   La forma de interpretar la situación Qué te dices en esa situación
* ${MarkdownV2.code('EMOCION')}:
    *   Lo que sentimos en el momento definido a través de un adjetivo
* ${MarkdownV2.code('SENSACION')}:
    *   Estado fisico, como nerviosismo, intranquilidad, inquietud, etc es decir, qué te dicen tus sentidos y tus síntomas fisicos, describiendo las sensaciones corporales
* ${MarkdownV2.code('CONDUCTA')}:
    *   Es la forma en la que actúas, es decir, como te comportas en ese momento
* ${MarkdownV2.code('CONSECUENCIAS')}:
    *   Que pasa positivo o negativo a raiz de esa situcion y de la forma en la que has actuado
* ${MarkdownV2.code('RELACION CON EXPERIENCIAS ANTERIORES')}:
    *   Aquellas situaciones del pasado que puedan tener relacion con lo que esta ocurriendo en el presente
* ${MarkdownV2.code('PENSAMIENTOS RACIONALIZADORES')}:
    *   Son las interpretaciones objetivas o más contextualizadas acerca de la situación, llevar a juicio aquellos pensamientos que pudieran ser irracionales y/o descontextualizados
  `;
  context.send(message, { parse_mode: ParseMode.MarkdownV2 });
};
