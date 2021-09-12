import { ProductModel } from "../models/product.model";

export class AddProduct {
  static readonly type = '[Product] Add';

  constructor(public payload: ProductModel) {}
}

export class GetProducts {
  static readonly type = '[Product] Get All';

  constructor() {}
}

export class GetProduct {
  static readonly type = '[Product] Get One';

  constructor(public payload: string) {}
}

export class UpdateProduct {
  static readonly type = '[Product] Update One';

  constructor(public payload: string) {}
}

export class RemoveProduct {
  static readonly type = '[Product] Remove';

  constructor(public payload: string) {}
}


