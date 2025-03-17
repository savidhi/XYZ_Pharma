import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  fullName: string;
  email: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  usernameError: string = '';
  passwordError: string = '';
  loginError: string = '';  // Add this for general login errors

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  onSubmit() {
    // Reset error messages
    this.usernameError = '';
    this.passwordError = '';
    this.loginError = '';

    if (!this.username) {
      this.usernameError = 'Username is required';
      return;
    }

    if (!this.password) {
      this.passwordError = 'Password is required';
      return;
    }

    this.http.get<User[]>('http://localhost:3000/users').subscribe(
      users => {
        const user = users.find(u => 
          u.username === this.username && u.password === this.password
        );

        if (user) {
          localStorage.setItem('isLoggedIn', 'true');
          window.location.reload(); // This will refresh the navbar state
          this.router.navigate(['/home']);
        } else {
          this.loginError = 'Invalid username or password!';
        }
      },
      error => {
        this.loginError = 'Login failed. Please try again.';
        console.error('Login error:', error);
      }
    );
  }
}
