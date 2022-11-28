import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/service/admin-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  loaddata: any;
  categoryId:any;


  constructor(private adminService:AdminServiceService,private router:Router) { }
  products:FormGroup=new FormGroup(
  {
    productName:new FormControl('',[Validators.required]),
    categoryId:new FormControl('',[Validators.required]),
    productDescription:new FormControl('',[Validators.required]),
    productPrice:new FormControl('',[Validators.required]),
    productStock:new FormControl('',[Validators.required])

  }
)

  
  ngOnInit(): void {
    this.adminService.loadCategory().subscribe((data:any)=>{
      this.loaddata=data;
      console.log(this.loaddata);
    })
  }

  onSubmit() {
      if(this.products.valid){
        this.adminService.addProduct(this.products.value).subscribe(result=>{
          if(result.productId){
            console.log(result);
            alert("Product Added")
          }
          else{
            alert("Not added")
          }
        })
      }
    }

}
