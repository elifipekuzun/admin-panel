export interface IProduct {
  image: string;
  title: string;
  price: number;
  categoryName: string;
  discountAmount: number;
  rating: number;
}

export interface ICategory {
  title: string;
  category_type: string;
  parent: ICategory[];
  image: string;
  children: ICategory[];
}
