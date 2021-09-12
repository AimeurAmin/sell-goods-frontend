import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './components/add-product/add-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.dialog.open(AddProductComponent, {
      height: '100vh',
      width: 'calc(846/16 * var(--default-size-unit))',
      position: { right: '0' },
      disableClose: false,
      data: {client: null},
      panelClass: [
        'animate__animated',
        'animate__fadeInRight',
        'px-0',
        'animate__fast',
      ],
    });
  }
}
