import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 {path:'',pathMatch:'full',redirectTo:'login'},
 {path:'login',component:LoginComponent},
 
 {path:'create',component:ProductAddComponent},
 
 {path:'products',component:ProductListComponent},
 {path:'edit/:id',component:ProductEditComponent},
 {path:'Details/:id',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
