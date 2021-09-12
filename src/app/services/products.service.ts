import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../store/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products : ProductModel[] = [{
    id: '23DSDF3FDSFsdocvj',
    reference: 'Galaxy M51',
    barcodes: ['23523462345345', '2345234523452'],
    brand: 'Samsung',
    type: 'Phone',
    category: 'Electronics',
    createdAt: new Date()
  }];

  constructor() { }

  getProducts(): Observable<ProductModel[]>  {
    return of(this.products);
  }

  removeProduct(productId: string): Observable<ProductModel> {
    const deletedProduct = this.products.find((product) => product.id === productId);
    this.products = this.products.filter((product) => product.id !== productId);
    return of(deletedProduct);
  }
}
