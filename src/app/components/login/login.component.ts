import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <form (ngSubmit)="onSubmit()" #loginForm="ngForm" class="login-form">
        <h2>Iniciar Sesión</h2>
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            [(ngModel)]="username"
            required
            placeholder="Ingrese su usuario"
          />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            [(ngModel)]="password"
            required
            placeholder="Ingrese su contraseña"
          />
        </div>
        <button type="submit" [disabled]="!loginForm.form.valid">
          Ingresar
        </button>
      </form>
    </div>
  `,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.username, this.password)
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}