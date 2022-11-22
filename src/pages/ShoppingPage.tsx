import { ProductCard, ProductButtons, ProductImage, ProductName } from '../components';
import '../styles/customStyles.css';
import { onChangeArgs, Product } from '../interfaces/index';
import { useState } from 'react';

const product1 = {
	id: '1',
	name: 'Coffee Mug 1',
	img: './coffee-mug.png'
};
const product2 = {
	id: '2',
	name: 'Coffee Mug 2',
	img: './coffee-mug2.png'
};

interface ProductQuantity extends Product {
	quantity: number;
}

const products: Product[] = [product1, product2];

export const ShoppingPage = () => {
	const [productQty, setproductQty] = useState<{ [key: string]: ProductQuantity }>({});

	const onProductQuatityChange = ({ counter, product }: onChangeArgs) => {
		setproductQty((previusCartState) => {
			if (counter === 0) {
				const { [product.id]: toDelete, ...rest } = previusCartState;

				return { ...rest };
			}

			return {
				...previusCartState,
				[product.id]: { ...product, quantity: counter }
			};
		});
	};

	return (
		<div>
			<h1>Shopping Page</h1>
			<hr />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap'
				}}
			>
				{products.map((product) => (
					<ProductCard
						style={{ fontStyle: 'italic' }}
						className="bg-black"
						product={product}
						key={product.id}
						onChange={onProductQuatityChange}
						value={productQty[product.id]?.quantity || 0}
					>
						<ProductImage className="customImage" />
						<ProductName className="textWhite" />
						<ProductButtons className="customButtons" />
					</ProductCard>
				))}

				<div className="shopping-cart">
					{Object.entries(productQty).map(([key, product]) => (
						<ProductCard
							key={key}
							style={{ width: '100px' }}
							className="bg-black"
							product={product}
							onChange={onProductQuatityChange}
							value={product.quantity}
						>
							<ProductImage className="customImage" />
							<ProductButtons className="customButtons" />
						</ProductCard>
					))}
				</div>
				{JSON.stringify(productQty, null, 2)}
			</div>
		</div>
	);
};
