export interface ProductInterface {
    id: number,
    name: string,
    img: string,
    category: string,
    price: number,
    quantity: number,
    rating: number,
    date: Date
}

export interface ProductProps extends ProductInterface {
    isInCart: boolean;
    onAddToCart: (product: ProductInterface) => void;
    onRemoveFromCart: (productId: number) => void;
    isCartPage: boolean;
  }

export interface SidebarProps {
    onFilterChange: (filter: string, value: string | number) => void;
    onSortChange: (sortBy: string, order: 'asc' | 'desc') => void;
    onHomePage: () => void;
    onProductPage: () => void;
    onCartPage: () => void;
  }