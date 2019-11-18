import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  productform:FormGroup
  product:Product=new Product();
 

  constructor(private formBuilder:FormBuilder,private service:ProductService,private toastr:ToastrService) { }

  ngOnInit() {
 this.productform=this.formBuilder.group({
   productname:['',Validators.compose([Validators.required])],
   productdescription:['',Validators.compose([Validators.required])],
   manfdate:['',Validators.compose([Validators.required])],
   productprice:['',Validators.compose([Validators.required])],

 });

  }
  get formcontrol()
  {
    return this.productform.controls;
  }

   AddProduct()
   {

   /**  this.product.productname=this.productform.controls.productname.value;
    this.product.productdescription=this.productform.controls.productdescription.value;
    this.product.manfdate=this.productform.controls.manfdate.value;
    this.product.productprice=this.productform.controls.productprice.value;*/
     this.product=this.productform.value;
     console.log(this.product)
     this.service.AddProducts(this.product).subscribe(x=>{this.toastr.success('Product Added')});
     this.ngOnInit();

   }
}
