import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms'
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm !: FormGroup;
  submitted=false

  constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.resetForm=this.fb.group({
      newpassword: ['', Validators.required],
      confirmpassword: ['', [Validators.required]]
    })
  }

  get f(){ return this.resetForm.controls;}
  onSubmit(){
    this.submitted=true;

    if (this.resetForm.invalid){
      return;
    }

    console.log('Reset Api starts ');
    let data={
      password:this.resetForm.value.password
    }
    this.user.resetPassword(data).subscribe((res:any) =>{
      console.log(res);
    })


  }
}
