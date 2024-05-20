import { Component } from '@angular/core';
import './login-component.component.css';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'] 
})
export class LoginComponentComponent { 
   constructor(private authService: AuthService, private router: Router) { }

   onSubmit(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      response => {
        console.log('Login successful');
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed', error);
        this.router.navigate(['/home']);
      }
    );
  }
}
