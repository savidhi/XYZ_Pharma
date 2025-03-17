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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  fullNameError: string = '';
  emailError: string = '';
  usernameError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';

  onSubmit() {
    // Reset all error messages
    this.fullNameError = '';
    this.emailError = '';
    this.usernameError = '';
    this.passwordError = '';
    this.confirmPasswordError = '';

    // Validate full name
    if (!this.fullName || this.fullName.trim().length < 3) {
      this.fullNameError = 'Full name must be at least 3 characters long';
      return;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(this.email)) {
      this.emailError = 'Please enter a valid email address';
      return;
    }

    // Validate username
    const usernamePattern = /^[a-zA-Z0-9_]{4,20}$/;
    if (!usernamePattern.test(this.username)) {
      this.usernameError = 'Username must be 4-20 characters long and can only contain letters, numbers, and underscores';
      return;
    }

    // Validate password strength
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(this.password)) {
      this.passwordError = 'Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.confirmPasswordError = 'Passwords do not match';
      return;
    }

    // Check if username or email already exists
    this.http.get<User[]>('http://localhost:3000/users').subscribe(
      users => {
        if (users.some(user => user.username === this.username)) {
          alert('Username already exists! Please choose a different username.');
          return;
        }

        if (users.some(user => user.email === this.email)) {
          alert('Email already registered! Please use a different email address.');
          return;
        }

        // Create new user
        const newUser: User = {
          id: users.length + 1,
          fullName: this.fullName,
          email: this.email,
          username: this.username,
          password: this.password
        };

        // Save new user
        this.http.post('http://localhost:3000/users', newUser).subscribe(
          () => {
            alert('Registration successful!');
            this.router.navigate(['/login']);
          },
          error => {
            alert('Registration failed. Please try again.');
            console.error('Registration error:', error);
          }
        );
      },
      error => {
        alert('Registration failed. Please try again.');
        console.error('Registration error:', error);
      }
    );
  }
}
