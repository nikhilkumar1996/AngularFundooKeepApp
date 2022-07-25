import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup;
  submitted = false;
 

  constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      cPassword: ['', Validators.required],
      service:['advance']
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.submitted=true;
    if (this.registerForm.invalid){
      return;
    }
    console.log('form is valid');
    let data={
      firstName: this.registerForm.value.firstname,
      lastName: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      password: this.registerForm.value.Password,
      service: this.registerForm.value.service
    }
    this.user.register(data).subscribe((res:any)=>{
      console.log(res);
    })
  }
}




