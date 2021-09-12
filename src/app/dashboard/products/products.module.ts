import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog'; 
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsListContainerComponent } from './containers/products-list-container/products-list-container.component';
import { ProductsListComponent } from './components/products-list/products-list.component';


@NgModule({
  declarations: [ProductsComponent, AddProductComponent, ProductsListContainerComponent, ProductsListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MatDialogModule
  ]
})
export class ProductsModule { }
