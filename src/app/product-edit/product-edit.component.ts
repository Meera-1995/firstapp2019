import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product:Product=new Product();
  productform:FormGroup;
  

  constructor(private service:ProductService,private route:ActivatedRoute,private formBuilder:FormBuilder,private toastr:ToastrService) { }
  id:number;

  ngOnInit() {

    this.id=this.route.snapshot.params["id"];
    console.log(this.id);
    this.service.GetProduct(this.id).subscribe(x=>{
      this.product=x;
      });
        
      this.productform=this.formBuilder.group({
        productid:[Validators.compose([Validators.required])],
        productname:[Validators.compose([Validators.required])],
        productdescription:[Validators.compose([Validators.required])],
        manfdate:[Validators.compose([Validators.required])],
        productprice:[Validators.compose([Validators.required])],


      });
    }
    get formControl(){
      return this.productform.controls;
    }
    UpdateProduct()
    {
     this.product.productid=this.productform.controls.productid.value;
     this.product.productname=this.productform.controls.productname.value;
     this.product.productdescription=this.productform.controls.productdescription.value;
     this.product.manfdate=this.productform.controls.manfdate.value;
     this.product.productprice=this.productform.controls.productprice.value;
     this.service.updateProduct(this.id,this.product).subscribe(res=>{
      this.toastr.success("update Successfull")
     })


    }

  }


