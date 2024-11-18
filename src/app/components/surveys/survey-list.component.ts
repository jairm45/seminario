import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Survey } from '../../models/survey.model';

@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>Listado de Encuestas</h2>
        <button class="btn-primary">
          <i class="fas fa-plus"></i> Nueva Encuesta
        </button>
      </div>
      <div class="card">
        <table class="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Fecha Creación</th>
              <th>Última Actualización</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let survey of surveys">
              <td>{{ survey.title }}</td>
              <td>{{ survey.description }}</td>
              <td>{{ survey.createdAt | date:'dd/MM/yyyy HH:mm' }}</td>
              <td>{{ survey.updatedAt | date:'dd/MM/yyyy HH:mm' }}</td>
              <td class="actions">
                <button class="btn-icon" title="Editar">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon delete" title="Eliminar">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrls: ['./surveys.css'],
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSurveys().subscribe(
      surveys => this.surveys = surveys
    );
  }
}