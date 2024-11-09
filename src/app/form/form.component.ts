import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: FormGroup;  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  
      password: ['', [Validators.required]],  
    });
  }

  
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted successfully!', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
