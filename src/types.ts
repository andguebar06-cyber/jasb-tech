export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  promoPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviewsCount: number;
  specs: { [key: string]: string };
  features: string[];
  isNew?: boolean;
  isPromo?: boolean;
  stock: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  code: string;
  discount: string;
  image: string;
  endsInDays: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
