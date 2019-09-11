/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },
  employee: {
    id: `${scope}.header`,
    defaultMessage: 'Никита Middle',
  },
  manager: {
    id: `${scope}.header`,
    defaultMessage: 'Илья не Middle',
  },
});
