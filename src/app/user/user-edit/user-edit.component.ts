import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit{
  userid: any;
  userdetail: any;
  
  
  constructor(private userService:UserServiceService,private router:Router){}

  useredit:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    // password:new FormControl('',[Validators.required]),
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
  onSubmit(){
    let udata={
      name:this.useredit.controls['name'].value,
      email:this.useredit.controls['email'].value,
      address:this.useredit.controls['address'].value,
      phone:this.useredit.controls['phone'].value,
      // password:this.userdetail.password
    }

    if(this.useredit.valid){
      this.userService.userEdit(this.userid,this.useredit.value).subscribe(result=>{
        if(result){
          console.log(result);
          alert("Updated");
        }
        else{
          alert("Not updated");
        }
      })

    }
  }

}
