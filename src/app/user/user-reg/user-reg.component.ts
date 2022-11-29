import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user/user-service.service';



@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.scss']
})
export class UserRegComponent implements OnInit{
  
  constructor(private router:Router,private userService:UserServiceService){}
  
  userreg:FormGroup=new FormGroup(
    {
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required])
    }
  )
  
  ngOnInit(): void {

  }

  onSubmit(){
    if(this.userreg.valid){
      this.userService.addUser(this.userreg.value).subscribe(result=>{
        if(result.userId){
          console.log(result);
          alert("user added");
          this.router.navigate(['/login'])
        }
      })
    }
  }

}
