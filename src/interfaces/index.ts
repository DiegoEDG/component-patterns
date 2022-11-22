export interface Product {
	id: string;
	name: string;
	img?: string;
}

export interface IProductContext {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
}

export interface onChangeArgs{
	counter: number;
	product: Product;
}