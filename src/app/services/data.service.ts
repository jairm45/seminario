import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { faker } from '@faker-js/faker';
import { Survey, Question, QuestionType } from '../models/survey.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private surveys: Survey[] = Array(10).fill(null).map((_, index) => ({
    id: index + 1,
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }));

  private questionTypes: QuestionType[] = [
    { id: 1, name: 'Multiple Choice', description: 'Choose one from multiple options' },
    { id: 2, name: 'Text', description: 'Free text response' },
    { id: 3, name: 'Rating', description: 'Rate on a scale' }
  ];

  private questions: Question[] = Array(20).fill(null).map((_, index) => ({
    id: index + 1,
    surveyId: Math.floor(Math.random() * 10) + 1,
    questionTypeId: Math.floor(Math.random() * 3) + 1,
    text: faker.lorem.sentence(),
    required: faker.datatype.boolean()
  }));

  getSurveys(): Observable<Survey[]> {
    return of(this.surveys);
  }

  getQuestions(): Observable<Question[]> {
    return of(this.questions);
  }

  getQuestionTypes(): Observable<QuestionType[]> {
    return of(this.questionTypes);
  }

  addSurvey(survey: Omit<Survey, 'id'>): Observable<Survey> {
    const newSurvey = {
      ...survey,
      id: this.surveys.length + 1
    };
    this.surveys.push(newSurvey);
    return of(newSurvey);
  }

  updateSurvey(survey: Survey): Observable<Survey> {
    const index = this.surveys.findIndex(s => s.id === survey.id);
    if (index !== -1) {
      this.surveys[index] = survey;
    }
    return of(survey);
  }

  deleteSurvey(id: number): Observable<boolean> {
    const index = this.surveys.findIndex(s => s.id === id);
    if (index !== -1) {
      this.surveys.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}