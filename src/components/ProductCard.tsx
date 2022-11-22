import styles from '../styles/styles.module.css';
import { useProductCounter } from '../hooks/useProductCounter';
import { createContext, CSSProperties, ReactElement } from 'react';
import { IProductContext, onChangeArgs, Product } from '../interfaces';

export interface ProductCardProps {
	product: Product;
	children: ReactElement | ReactElement[];
	className?: string;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const ProductContext = createContext({} as IProductContext);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value }: ProductCardProps) => {
	const { counter, increaseBy } = useProductCounter({ onChange, product, value });

	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product
			}}
		>
			<div style={style} className={`${styles.productCard} ${className}`}>
				{children}
			</div>
		</Provider>
	);
};
