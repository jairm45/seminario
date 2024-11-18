import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SurveyListComponent } from './components/surveys/survey-list.component';
import { QuestionListComponent } from './components/questions/question-list.component';
import { QuestionTypeListComponent } from './components/question-types/question-type-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'surveys', pathMatch: 'full' },
      { path: 'surveys', component: SurveyListComponent },
      { path: 'questions', component: QuestionListComponent },
      { path: 'question-types', component: QuestionTypeListComponent }
    ]
  }
];