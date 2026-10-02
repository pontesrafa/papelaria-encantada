export type ProductCategory = 'todos' | 'caixas' | 'topos' | 'adesivos' | 'kits';

export interface ProductItem {
  id: string;
  name: string;
  category: 'caixas' | 'topos' | 'adesivos' | 'kits';
  categoryLabel: string;
  tagline: string;
  description: string;
  minQuantity: number;
  image: string;
  badge?: string;
  dimensions?: string;
  paperType: string;
  finishDetails: string[];
}

export interface BudgetItemSelection {
  productId: string;
  quantity: number;
}

export interface BudgetCustomerData {
  customerName: string;
  eventName: string;
  eventTheme: string;
  eventDate: string;
  city: string;
  deliveryMethod: 'retirada' | 'correios';
  notes: string;
}
