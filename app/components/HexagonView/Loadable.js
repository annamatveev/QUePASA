/**
 *
 * Asynchronously loads the component for HexagonView
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
