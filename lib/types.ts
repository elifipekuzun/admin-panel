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
  type: string;
  image: string;
  childTags: string[];
}
