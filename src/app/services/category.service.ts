import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeCategory } from '../types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // Khai báo http để có đối tượng HttpClient tương tác với các phương thức của API
  constructor(private http:HttpClient) { }

  // Kiểu dữ liệu Observale sẽ giúp lắng nghe API trả về kết quả
  listCategories(): Observable<TypeCategory[]> {
    return this.http.get<TypeCategory[]>(environment.category)
  }
}
