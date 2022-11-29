import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/service/admin-service.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  userDetail: any;

  constructor( private adminService:AdminServiceService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.getUsers().subscribe(results=>{
      this.userDetail=results;
      console.log(this.userDetail);
    })
  }

  status(id:any){
    this.adminService.status(id).subscribe(result=>{
      if(result==null){
        console.log(result);
        alert("Succesful");
        window.location.reload();
      }
    })

  }



}
