import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/store/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: ProductModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
