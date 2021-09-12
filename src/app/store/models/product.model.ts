export interface ProductStateModel {
  products: ProductModel[];
}

export interface ProductModel {
  id: string;
  reference: string;
  barcodes: string[];
  brand: string;
  type: string;
  category: string;
  createdAt: Date;
}
