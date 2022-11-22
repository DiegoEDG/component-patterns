import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

interface Props {
	nameProps?: string;
	idProps?: string;
	className?: string;
}

export const ProductName = ({ nameProps = '', idProps = '', className }: Props) => {
	const { product } = useContext(ProductContext);
	let name;
	let id;

	if (nameProps) {
		name = nameProps;
	} else {
		name = product.name;
	}
	if (idProps) {
		id = idProps;
	} else {
		id = product.id;
	}

	return (
		<span className={`${styles.productDescription} ${className}`}>
			{id} - {name}
		</span>
	);
};
