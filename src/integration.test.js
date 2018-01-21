import combineSelectors from "../dist";

const misterWorld = {
	name: "Rohit Khandelwal"
};
const fromMisterWorld = { getMisterWorldName: ({ name }) => name };
const state = {
	misterWorld
};
const selectors = combineSelectors({
	misterWorld: fromMisterWorld
});

describe("combine-redux-selectors npm package", () => {
	it("exports a function", () => {
		const mapStateToProps = state => ({
			misterWorld: selectors.getMisterWorldName(state)
		});
		expect(mapStateToProps(state)).toEqual({
			misterWorld: "Rohit Khandelwal"
		});
	});
});
