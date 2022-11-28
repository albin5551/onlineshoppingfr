import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  addCategory(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/category',data)
  }
  addProduct(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/product',data)
  }
  loadCategory(){
    return this.http.get('http://localhost:8080/category')
  }
}
