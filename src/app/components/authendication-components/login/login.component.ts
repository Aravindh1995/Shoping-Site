import { Component } from '@angular/core';
import { SharedImports } from '../../../shared-files/shared-imports';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { LoginService } from '../../../shared-files/services/auth.service';
import { SharedService } from '../../../shared-files/services/shared.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedImports, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private fb: NonNullableFormBuilder, private loginService: LoginService,
    private router: Router, private sharedService: SharedService
  ) {}

  loginForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    // remember: FormControl<boolean>;
  }> = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    // remember: [true]
  });

  submitForm(): void {
    if (this.loginForm.valid) {
      console.log('submit', this.loginForm.value);
      this.loginService.login(this.loginForm.value).subscribe((data)=>{
        // console.log(data);
        localStorage.setItem('token', data.token);
        // this.loginService.isLoggedIn();
        this.router.navigateByUrl('layout');
      })
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  
}
