import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Console } from 'console';
import { productService } from 'src/service/productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;

  imageLoaded: boolean = false;
  iconColor: any;
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

  dragging: boolean = false;
  loaded: boolean = false;
  imageSrc: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private service: productService,
    public router: Router
  ) {
    this.productForm = this.formBuilder.group({
      productTitle: [''],
      imageurl: [''],
      description: [''],
    });
  }

  ngOnInit(): void {}
  addProduct() {
    // const product = {
    //   productTitle: this.productForm.value.productTitle,
    //   imageUrl: this.imageSrc,
    //   description: this.productForm.value.description,
    // };
    // console.log(product);
    // this.service.create(product).subscribe((res) => {
    //   if (res) {
    //     this.router.navigate(['/home']);
    //     console.log(res);
    //   } else {
    //     console.error('error in product adding');
    //   }
    // });
  }

  handleImageLoad() {
    this.imageLoaded = true;
    this.iconColor = this.overlayColor;
  }

  handleInputChange(e: any) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e: any) {
    console.log('_handleReaderLoaded');
    var reader = e.target;
    console.log(reader.result);
    this.imageSrc = reader.result;

    this.loaded = true;
  }

  cancel() {
    this.imageSrc = '';
  }
}
