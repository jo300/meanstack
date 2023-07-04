import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCartComponent } from 'src/app/component/product/product-cart/product-cart.component';
import { ProductDetailsComponent } from 'src/app/component/product/product-details/product-details.component';

const routes: Routes = [
  { path: 'details', component: ProductDetailsComponent },
  { path: 'cart', component: ProductCartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
