import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share(product: Product) {
    window.alert(product.name + ' product has been shared by Ankit!');
  }

  onNotify(product: Product) {
    window.alert(
      product.name + ' will be notified when the product goes on sale'
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
