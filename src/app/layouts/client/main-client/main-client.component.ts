import { ProductService } from './../../../services/product.service';
import { TypeProduct } from './../../../types/Product';
import { TypeCategory } from './../../../types/Category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-main-client',
  templateUrl: './main-client.component.html',
  styleUrls: ['./main-client.component.css']
})
export class MainClientComponent implements OnInit {
  categories: TypeCategory[]
  products: TypeProduct[]

  constructor( 
    private categoryService: CategoryService,
    private productService: ProductService
    ) { 
    this.categories = []
    this.products = []
  }

  ngOnInit(): void { 
    this.categoryService.listCategories().subscribe((data)=>{
      this.categories = data
    })
    this.productService.listProduct().subscribe((data) =>{
      this.products = data
    })
  }

}
