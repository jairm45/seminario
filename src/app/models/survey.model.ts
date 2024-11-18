export interface Survey {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Question {
  id: number;
  surveyId: number;
  questionTypeId: number;
  text: string;
  required: boolean;
}

export interface QuestionType {
  id: number;
  name: string;
  description: string;
}