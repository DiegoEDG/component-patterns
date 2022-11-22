import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useContext } from 'react';
import { ProductContext } from './ProductCard';

interface Props {
	imgProps?: string;
	className?: string;
}

export const ProductImage = ({ imgProps = '', className }: Props) => {
	const { product } = useContext(ProductContext);
	let img;

	if (imgProps) {
		img = imgProps;
	} else if (product.img) {
		img = product.img;
	} else {
		img = noImage;
	}

	return <img className={`${styles.productImg} ${className}`} src={img} alt="coffee mug" />;
};
