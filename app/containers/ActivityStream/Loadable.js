/**
 *
 * Asynchronously loads the component for ActivityStream
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
