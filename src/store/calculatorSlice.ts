import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
	result: string;
}

const initialState: CalculatorState = {
	result: "",
};

const calculatorSlice = createSlice({
	name: "calculator",
	initialState,
	reducers: {
		setResult(state, action: PayloadAction<string>) {
			state.result = action.payload;
		},
		clearResult(state) {
			state.result = "";
		},
		backspaceResult(state) {
			state.result = state.result.slice(0, -1);
		},
		calculateResult(state, action: PayloadAction<string>) {
			state.result = action.payload;
		},
	},
});

export const { setResult, clearResult, backspaceResult, calculateResult } =
	calculatorSlice.actions;

export default calculatorSlice.reducer;
