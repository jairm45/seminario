import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/survey.model';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>Listado de Preguntas</h2>
        <button class="btn-primary">
          <i class="fas fa-plus"></i> Nueva Pregunta
        </button>
      </div>
      <div class="card">
        <table class="table">
          <thead>
            <tr>
              <th>Texto</th>
              <th>Tipo</th>
              <th>Requerido</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let question of questions">
              <td>{{ question.text }}</td>
              <td>{{ question.questionTypeId }}</td>
              <td>{{ question.required ? 'Sí' : 'No' }}</td>
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
 styleUrls: ['./questions.css'],
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getQuestions().subscribe(
      questions => this.questions = questions
    );
  }
}