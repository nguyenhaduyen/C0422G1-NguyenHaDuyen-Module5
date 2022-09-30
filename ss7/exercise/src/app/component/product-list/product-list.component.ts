import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products : Product [];
  constructor(private serviceProduct : ProductService) {
    this.products = serviceProduct.getAll();
  }

  ngOnInit() {
  }

  delete(id: number) {
    this.serviceProduct.delete(id)
  }
}
