export interface IProduct {
  _id: string;
  image: string;
  categoryType: string;
  parentCategory: string;
  title: string;
  description: string;
  price: number;
  discountAmount: number;
  rating?: number;
  tags: string[];
}

export interface ICategory {
  _id: string;
  title: string;
  type: string;
  image: string;
  tags: string[];
}

export interface IINVOICE {
  _id: string;
  products: IProduct[];
  status: OrderActionTypes;
  date: string;
  address: string;
  paymentMethod: string;
  shippingCost: number;
  discount: number;
  totalCost: number;
}

export interface IOrder {
  _id: string;
  time: string;
  shippingAddress: string;
  method: string;
  phone: string;
  amount: number;
  status: OrderActionTypes;
}

export type OrderActionTypes = {
  DELIVERED: 'delivered';
  PENDING: 'pending';
  PROCESSING: 'processing';
  CANCEL: 'cancel';
};
