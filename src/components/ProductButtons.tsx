import { useContext, useEffect } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

interface Props {
	className?: string;
}

export const ProductButtons = ({ className }: Props) => {
	const { counter, increaseBy } = useContext(ProductContext);

	return (
		<div className={`${styles.buttonsContainer} ${className}`}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>
			<div className={styles.countLabel}>{counter}</div>
			<button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
				+
			</button>
		</div>
	);
};
