import { info } from '../common/logger';
import { startPooling } from '../common/telegram';
import { useUpdates } from '../common/telegram/updates';

startPooling().then(() => {
  info('jinshinroku.start', { message: 'Starting pooling messages' });
  useUpdates();
});
