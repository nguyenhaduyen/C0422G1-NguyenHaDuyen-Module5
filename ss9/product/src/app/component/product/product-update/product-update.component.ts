import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../service/category.service';
import {Category} from '../../../model/category';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productNew: Product;
  productNew1: FormGroup;
  categories: Category[] = [];
  id: number;

  constructor(private serviceProduct: ProductService,
              private activatedRoute: ActivatedRoute,
              private serviceCategory: CategoryService,
              private categoryService: CategoryService,
              private router: Router) {
    activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
    })

  }

  ngOnInit() {
    this.serviceProduct.findById(this.id).subscribe(data => {
      this.productNew = data;
      console.log(this.productNew);

    },error => {

    },() =>{
      this.serviceCategory.getAll().subscribe(category=>{
        this.categories = category;
        console.log(this.categories);
      }, error => {

      }, () => {
        this.showUpdateForm();
      })
    });
  }

  showUpdateForm(){
    this.productNew1 = new FormGroup({
      id: new FormControl(this.productNew.id),
      name: new FormControl(this.productNew.name),
      price: new FormControl(this.productNew.price),
      description: new FormControl(this.productNew.description),
      category: new FormControl(this.productNew.category.id)
    })
  }
  update() {
    let id = +this.productNew1.value.category;
    this.categoryService.findById(id).subscribe(n =>{
      this.productNew1.value.category = n;
    },error => {

    },() => {
      this.serviceProduct.update(id,this.productNew1.value).subscribe(next=>{
      }, error => {

      }, () => {
        this.router.navigateByUrl("");
      })
    })
  }
}
