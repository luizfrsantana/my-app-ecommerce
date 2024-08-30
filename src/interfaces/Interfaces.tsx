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


export interface SidebarProps {
    onFilterChange: (filter: string, value: string | number) => void;
    onSortChange: (sortBy: string, order: 'asc' | 'desc') => void;
  }