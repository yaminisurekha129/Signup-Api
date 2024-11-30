import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { SignupService } from '../signup.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signForm!: FormGroup;
  submitted = false;

  newEmail: string = '';
  newPassword: string = '';
  public items: { id: any, email: string, password: string }[] = [];

  constructor(private fb: FormBuilder, private signupService: SignupService) {}

  ngOnInit(): void {
    this.signForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirm_password: ['', Validators.required]
      },
      { validators: this.passwordMatchValidator }
    );
    this.getDetail();
  }

  // Custom validator to match password and confirm password fields
  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirm_password')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  get formControls() {
    return this.signForm.controls;
  }

  // Function to handle form submission
  call() {
    this.submitted = true;
    if (this.signForm.valid) {
      console.log(this.signForm.value);

      this.signupService.insertDetail(this.signForm.value).subscribe(
        response => {
          console.log('Signup successful:', response);
          this.getDetail();  // Refresh the list of users after signup
          this.signForm.reset();  // Reset the form after successful submission
        },
        error => {
          console.error('Signup failed:', error);
        }
      );
    }
  }

  getDetail() {
    this.signupService.getDetail().subscribe(res => {
      console.log(res);
      // Optional logic to update UI with retrieved data
    });
  }

  insertDetail() {
    if (this.newEmail.trim() !== '') {
      this.signupService.insertDetail({ email: this.newEmail, password: this.newPassword }).subscribe(() => {
        this.getDetail();
        this.newEmail = '';
        this.newPassword = '';
      });
    }
  }
}
