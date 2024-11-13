import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  formSubmitted = false;  
  //router: any;

  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  
      password: ['', [Validators.required, Validators.minLength(6)]],  
    });
  }

  
  get email() {
    return this.form.get('email')!;
  }

  get password() {
    return this.form.get('password')!;
  }

  onSubmit(): void {
    this.formSubmitted = true;  

    
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      console.log('Form is invalid');
      return;
    }

    console.log('Form submitted successfully!', this.form.value);
  }
  // openRegistrationPage(){    
  //   console.log('coming signup');
  //   this.router.navigate(["/signup"]);
  // }
}
