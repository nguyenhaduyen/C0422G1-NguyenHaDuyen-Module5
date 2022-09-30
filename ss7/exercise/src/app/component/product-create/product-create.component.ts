import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
productNew : FormGroup
  constructor(private serviceProduct: ProductService, private router : Router) {
    this.productNew = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl()

    })
  }

  ngOnInit() {

  }

  create() {

    this.serviceProduct.create(this.productNew.value)

    this.router.navigateByUrl("/product")
  }
}
