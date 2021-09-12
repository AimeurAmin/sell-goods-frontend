import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { ProductsService } from "src/app/services/products.service";
import { AddProduct, GetProducts, RemoveProduct } from "../actions/product.actions";
import { ProductModel, ProductStateModel } from "../models/product.model";


@State<ProductStateModel>({
  name: 'ProductStateModule',
  defaults: {
    products: []
  }
})
@Injectable()
export class ProductStateModule {

  constructor(private service: ProductsService) {}

  @Selector()
  static getProducts(state: ProductStateModel) {
    return state.products;
  }

  @Action(AddProduct)
  addProduct({getState, patchState}: StateContext<ProductStateModel>, {payload}: AddProduct){
    const state = getState();
    patchState({
      products: [...state.products, payload]
    })
  }

  @Action(GetProducts)
  getProducts({getState, patchState}: StateContext<ProductStateModel>){
    const state = getState();
    return this.service.getProducts().pipe(
      tap({
        next: (res: ProductModel[]) => {
          patchState({
            products: res
          })
        },
        error: (err) => {
          console.error(err);
        }
      })
    )
  }

  @Action(RemoveProduct)
  removeProduct({getState, patchState}: StateContext<ProductStateModel>, {payload}: RemoveProduct){
    const state = getState();

    return this.service.removeProduct(payload).pipe(
      tap({
        next: (res: ProductModel) => {
          patchState({
            products: [...state.products.filter((product) => product.id !== res.id)]
          });
        },
        error: (err) => {
          console.error(err);
        }
      })
    )
  }

}
