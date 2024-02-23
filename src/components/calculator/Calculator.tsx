// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store"; // Предположим, что вы импортируете RootState из вашего хранилища
import {
	setResult,
	clearResult,
	backspaceResult,
	calculateResult,
} from "../../store/calculatorSlice"; // Предположим, что у вас есть slice с именем calculatorSlice

import scss from "./Calculator.module.scss";

const Calculator = () => {
	const dispatch = useDispatch();
	const result = useSelector((state: RootState) => state.calculator.result);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(setResult(result.concat(e.currentTarget.name)));
	};

	const handleClear = () => {
		dispatch(clearResult());
	};

	const handleBackspace = () => {
		dispatch(backspaceResult());
	};

	const handleCalculate = () => {
		try {
			dispatch(calculateResult(eval(result).toString()));
		} catch (error) {
			dispatch(setResult("error"));
		}
	};

	return (
		<div className={scss.calculator}>
			<form>
				<input
					type="text"
					value={result}
					onChange={(e) => dispatch(setResult(e.target.value))}
				/>
			</form>

			<div className={scss.keypad}>
				<button
					className={scss.highlight}
					onClick={handleClear}
					id={scss.clear}>
					Clear
				</button>
				<button
					className={scss.highlight}
					onClick={handleBackspace}
					id={scss.backspace}>
					C
				</button>
				<button className={scss.highlight} name="/" onClick={handleClick}>
					&divide;
				</button>
				<button name="7" onClick={handleClick}>
					7
				</button>
				<button name="8" onClick={handleClick}>
					8
				</button>
				<button name="9" onClick={handleClick}>
					9
				</button>
				<button className={scss.highlight} name="*" onClick={handleClick}>
					&times;
				</button>
				<button name="4" onClick={handleClick}>
					4
				</button>
				<button name="5" onClick={handleClick}>
					5
				</button>
				<button name="6" onClick={handleClick}>
					6
				</button>
				<button className={scss.highlight} name="-" onClick={handleClick}>
					&ndash;
				</button>
				<button name="1" onClick={handleClick}>
					1
				</button>
				<button name="2" onClick={handleClick}>
					2
				</button>
				<button name="3" onClick={handleClick}>
					3
				</button>
				<button className={scss.highlight} name="+" onClick={handleClick}>
					+
				</button>
				<button name="0" onClick={handleClick}>
					0
				</button>

				<button className={scss.highlight} name="." onClick={handleClick}>
					.
				</button>
				<button
					className={scss.highlight}
					onClick={handleCalculate}
					id={scss.result}>
					=
				</button>
			</div>
		</div>
	);
};

export default Calculator;
