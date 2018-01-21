/* eslint-disable */
import _ from 'lodash';

const globalizeSelectors = (mountPoint, selectors) =>
	_.mapValues(selectors, selector => (state, ...args) =>
		selector(state[mountPoint], ...args)
	);

const combineSelectors = localizedSelectorMapsByMountPoint =>
	_.assign(
		{},
		..._.values(
			_.mapValues(
				localizedSelectorMapsByMountPoint,
				(selectors, mountPoint) =>
					globalizeSelectors(mountPoint, selectors)
			)
		)
	);

export default combineSelectors;