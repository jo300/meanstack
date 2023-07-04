import { Component, OnInit } from '@angular/core';
import { productService } from 'src/service/productservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  count: any;
  products: any = [];
  buttonLabel: string = 'Add Cart';
  constructor(private service: productService) {}

  ngOnInit(): void {
    this.count = 0;
    this.service.getProducts().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }
  add(id: any, index: number) {
    this.buttonLabel = 'Add Cart' ? 'Remove Cart' : 'Add Cart';
    this.count++;
    console.log(this.count);
    const addItem = this.products.filter((item: any) => item._id === id);
    this.service.addCart(addItem).subscribe((data: any) => {
      this.products = data;
      console.log(data);
    });

    console.log(addItem);
  }
  sub() {
    this.count--;
  }
}
