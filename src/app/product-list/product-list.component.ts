import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  PRODUCT:Observable<Product[]>
 

  public popoverTitle:string='Delete';
  public popoverMessage:string=' Do you want to Delete';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  constructor(private productservice:ProductService,
              private route:Router,private toastr:ToastrService) { }

  ngOnInit() {
  this.reloadData();

  }
    reloadData()
    {
      this.PRODUCT=this.productservice.GetProductList();
    }
    deleteProduct(id:number)
    {
      this.productservice.deleteProduct(id).subscribe(x=>{
        this.toastr.error('Product Deleted');
      });
    }


  }


