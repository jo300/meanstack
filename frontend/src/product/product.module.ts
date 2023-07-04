import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from 'src/app/component/product/product-details/product-details.component';
import { ProductCartComponent } from 'src/app/component/product/product-cart/product-cart.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductDetailsComponent, ProductCartComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
