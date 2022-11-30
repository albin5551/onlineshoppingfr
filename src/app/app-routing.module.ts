import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CategoryComponent } from './admin/category/category.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { ProductComponent } from './admin/product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserRegComponent } from './user/user-reg/user-reg.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  {path: 'admin', component: AdminHomeComponent},
  { path: 'category', component: CategoryComponent },
  {path:'product',component:ProductComponent},
  {path:'manageuser',component:ManageUserComponent},

  {path:'userreg',component:UserRegComponent},

  {path:'useredit',component:UserEditComponent}
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
