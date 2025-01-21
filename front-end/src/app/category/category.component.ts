import { Component } from '@angular/core';
import { Category } from '../models/Category';

const CATEGORY_DATA: Category[] = [
  { guid: '8bc6367a-d39a-493a-a6d8-695b3500c335', name: 'Conta' },
  { guid: 'c87b2b4b-85c9-4389-925a-6865149f8b0d', name: 'Educação' },
  { guid: 'b8f95a50-5131-40c8-9410-89e3baf77ba2', name: 'Investimento' },
  { guid: '755b5a02-6c97-4fdb-8809-f733dd4bbd3b', name: 'Outro' },
  { guid: '5ea3f756-604d-4828-a32f-5325d5da6d5c', name: 'Trabalho' },
  { guid: 'c97eb09a-3fac-4314-9981-1181686c09a4', name: 'Saúde' },
];
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  public displayedColumns: string[] = ['position', 'name', 'actions'];
  public categories: Category[] = CATEGORY_DATA;

  public createNewCategory(): void {
    console.log('Add category');
  }

  public editCategory(category: Category): void {
    console.log(category);
  }

  public deleteCategory(category: Category): void {
    console.log(category);
  }
}
