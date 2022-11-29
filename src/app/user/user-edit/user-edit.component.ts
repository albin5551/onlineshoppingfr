import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit{
  userid: any;
  userdetail: any;
  
  
  constructor(private userService:UserServiceService){}

  useredit:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
   this.userid=localStorage.getItem('userid');
    
   this.userService.getUserId(this.userid).subscribe(result=>{
    this.userdetail=result;
    console.log(this.userdetail);
   })

  }
  onSubmit(){}

}
