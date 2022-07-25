import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms'
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm !: FormGroup;
  submitted=false
  
  constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.forgotForm= this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })

  
  }
  get f(){return this.forgotForm.controls;}

  onSubmit(){
    this.submitted=true;

    if (this.forgotForm.invalid){
      return;
    }

    console.log('Forgot Api starts ');
    let data={
      email:this.forgotForm.value.email
    }
    this.user.forgot(data).subscribe((res:any) =>{
      console.log(res);
    })

  }
}
