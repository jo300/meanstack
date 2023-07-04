import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  count = 0;
  products = [
    {
      title: 'Product1',
      imageUrl:
        'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
      description: 'this is a description1',
    },
    {
      title: 'Product2',
      imageUrl:
        'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
      description: 'this is a description2',
    },
    {
      title: 'Product2',
      imageUrl:
        'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
      description: 'this is a description2',
    },
    {
      title: 'Product2',
      imageUrl:
        'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
      description: 'this is a description2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
 
}
