import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-container">
      <nav class="sidebar">
        <div class="sidebar-header">
          <h2>Sistema de Encuestas</h2>
        </div>
        <ul>
          <li>
            <a routerLink="surveys" routerLinkActive="active">
              <i class="fas fa-poll"></i>
              Gestión de Encuestas
            </a>
          </li>
          <li>
            <a routerLink="questions" routerLinkActive="active">
              <i class="fas fa-question-circle"></i>
              Gestión de Preguntas
            </a>
          </li>
          <li>
            <a routerLink="question-types" routerLinkActive="active">
              <i class="fas fa-list-ul"></i>
              Tipos de Pregunta
            </a>
          </li>
        </ul>
      </nav>
      <main class="content">
        <header class="content-header">
          <h1></h1>
        </header>
        <div class="content-body">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  
  styleUrls: ['./home.compenent.css'], // Apunta al archivo externo
})
export class HomeComponent {}