import { Component } from '@angular/core';
import './login-component.component.css';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'] 
})
export class LoginComponentComponent { 
   constructor(private authService: AuthService) { }

  onSubmit(username: string, password: string) {
    this.authService.login(username, password).subscribe(response => {

    }, error => {

    });
  }
}
