import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
resdata:any

// uname: any;
// pass: any;
  constructor(private authService:AuthServiceService ,private router:Router){ }
  // pattern='[a-zA-z0-9]{5,20}$'
  // p="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,15}$";
  newform:FormGroup=new FormGroup(
    {
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
    }
  )

  onsubmit() {
    if(this.newform.valid){
      this.authService.login(this.newform.value).subscribe(result=>{
        if(result.userId){
          this.resdata=result;
          localStorage.setItem('token',this.resdata.accessToken.value);
          localStorage.setItem('name',this.resdata.name);
          localStorage.setItem('userid',this.resdata.userId);
          console.log(result);

          alert("login sucessful");
          
          this.router.navigate(['/home']);
        }
        else{
          alert("login not sucessful");
        }
      })
    }
    }

    add() {
    this.router.navigate(['/userreg'])
      }

  ngOnInit(): void {
  }

}
