import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CategoryService} from '../../../service/category.service';
import {Category} from '../../../model/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[] = [];

  constructor(private serviceProduct: ProductService, private http: HttpClient, private categoryService1: CategoryService, private router : Router) {
    this.categoryService1.getAll().subscribe(category => {
      this.categories = category;
      console.log(this.categories);
    })
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }

  create() {
    let id = +this.productForm.value.category;
    this.categoryService1.findById(id).subscribe(n =>{
          this.productForm.value.category = n;
    },error => {

    },() => {
      this.serviceProduct.create(this.productForm.value).subscribe(next=>{
        this.router.navigateByUrl("")
      })

    })

  }
}
