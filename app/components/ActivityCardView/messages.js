/*
 * ActivityCardView Messages
 *
 * This contains all the text for the ActivityCardView component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ActivityCardView';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Activity creator',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Activity description',
  },
});
