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

  constructor( private categoryService: CategoryService) { 
    this.categories = []
  }

  ngOnInit(): void { 
    this.categoryService.listCategories().subscribe((data)=>{
      this.categories = data
    })
  }

}
