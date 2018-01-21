import combineSelectors from "./";

// problem being solved: http://www.datchley.name/scoped-selectors-for-redux-modules/

// mister world
const misterWorld = {
	name: "Rohit Khandelwal"
};
const fromMisterWorld = { getMisterWorldName: ({ name }) => name };

// miss world
const missWorld = {
	name: "Stephanie Del Valle",
	birthYear: 1996
};
const fromMissWorld = {
	getMissWorldName: ({ name }) => name,
	isMissWorldOlderThan: ({ birthYear }, age) =>
		new Date().getFullYear() - birthYear > age
};

// combineReducers({ misterWorld, missWorld })()
const state = {
	misterWorld,
	missWorld
};

// now just call combineSelectors near combineReducers
const selectors = combineSelectors({
	misterWorld: fromMisterWorld,
	missWorld: fromMissWorld
});

describe("combineSelectors()", () => {
	it("is designed to be called from mapStateToProps", () => {
		const mapStateToProps = state => ({
			misterWorld: selectors.getMisterWorldName(state),
			missWorld: selectors.getMissWorldName(state),
			isMissWorldAdult: selectors.isMissWorldOlderThan(state, 18)
		});
		expect(mapStateToProps(state)).toEqual({
			misterWorld: "Rohit Khandelwal",
			missWorld: "Stephanie Del Valle",
			isMissWorldAdult: true
		});
	});

	it("works smoothly when nested", () => {
		const veryGlobalState = {
			contestWinners: state
		};
		const veryGlobalSelectors = combineSelectors({
			contestWinners: selectors
		});
		expect(veryGlobalSelectors.getMisterWorldName(veryGlobalState)).toBe(
			"Rohit Khandelwal"
		);
		expect(veryGlobalSelectors.getMissWorldName(veryGlobalState)).toBe(
			"Stephanie Del Valle"
		);
		expect(
			veryGlobalSelectors.isMissWorldOlderThan(veryGlobalState, 18)
		).toBe(true);
	});
});
