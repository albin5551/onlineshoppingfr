import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TokenServiceService } from './service/token-service.service';
import { HomeComponent } from './home/home.component';

import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CategoryComponent } from './admin/category/category.component';
import { ProductComponent } from './admin/product/product.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { UserRegComponent } from './user/user-reg/user-reg.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { OrderHistoryComponent } from './admin/order-history/order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminHomeComponent,
    CategoryComponent,
    ProductComponent,
    ManageUserComponent,
    UserRegComponent,

    UserEditComponent,
     OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenServiceService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
