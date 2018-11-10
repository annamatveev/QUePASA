/*
 * IntroductionView Messages
 *
 * This contains all the text for the IntroductionView component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.IntroductionView';

export default defineMessages({
  introductionTitle: {
    id: `${scope}.introduction-title`,
    defaultMessage: "So, we've been super-busy building our spaceship",
  },
});
