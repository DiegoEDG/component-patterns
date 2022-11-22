import { useEffect, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/index';

interface useProductCounterArgs {
	onChange?: (args: onChangeArgs) => void;
	product: Product;
	value?: number;
}

export const useProductCounter = ({ onChange, product, value = 0 }: useProductCounterArgs) => {
	const [counter, setCounter] = useState(value);
	useEffect(() => {
		setCounter(value);
	}, [value]);

	const increaseBy = (value: number) => {
		const quantity = Math.max(counter + value, 0);
		setCounter(quantity);

		onChange && onChange({ counter: quantity, product });
	};

	return { counter, increaseBy };
};
