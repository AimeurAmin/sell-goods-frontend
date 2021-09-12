import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetProducts } from 'src/app/store/actions/product.actions';
import { ProductStateModel } from 'src/app/store/models/product.model';
import { ProductStateModule } from 'src/app/store/state/product.state';

@Component({
  selector: 'app-products-list-container',
  templateUrl: './products-list-container.component.html',
  styleUrls: ['./products-list-container.component.scss']
})
export class ProductsListContainerComponent implements OnInit {

  @Select(ProductStateModule.getProducts) products$: Observable<ProductStateModel[]>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetProducts());
  }

}
