import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Loginuser } from '../loginuser';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  isSubmitted=false;
  loginuser:Loginuser;

  constructor(private authService:AuthService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.loginform=this.formBuilder.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      Password:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]]
    
    });
  }

get formControls()
{
  return this.loginform.controls;
}

login()
{
  console.log(this.loginform.value);
  this.isSubmitted=true;
  if(this.loginform.invalid)
  {
    return;

  }
  this.authService.login(this.loginform.value);
  this.router.navigateByUrl('/admin');
}

  
}


  


