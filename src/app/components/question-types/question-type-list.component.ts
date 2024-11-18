import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { QuestionType } from '../../models/survey.model';

@Component({
  selector: 'app-question-type-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>Tipos de Pregunta</h2>
        <button class="btn-primary">
          <i class="fas fa-plus"></i> Nuevo Tipo
        </button>
      </div>
      <div class="card">
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let type of questionTypes">
              <td>{{ type.name }}</td>
              <td>{{ type.description }}</td>
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
   styleUrls: ['./question.type.css'],
})
export class QuestionTypeListComponent implements OnInit {
  questionTypes: QuestionType[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getQuestionTypes().subscribe(
      types => this.questionTypes = types
    );
  }
}