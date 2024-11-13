import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.signForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        cp: ['', [Validators.required, Validators.minLength(8)]],
        confirm: ['', Validators.required]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('cp')?.value;
    const confirmPassword = form.get('confirm')?.value;
    return password === confirmPassword ? null : { mismatch: true }; 
  }

  ngOnInit(): void {}

  call() {
    this.submitted = true;  
    if (this.signForm.valid) {
      console.log(this.signForm.value);
    }
  }

  get formControls() {
    return this.signForm.controls;
  }
}
