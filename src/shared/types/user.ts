export enum Roles {
  Student = 'student',
  Teacher = 'teacher'
}

export type Student = {
  role: Roles.Student;
  id: string;
  surname: string;
  name: string;
  form: string;
  biology?: boolean;
  chemistry?: boolean;
};

export type Teacher = {
  role: Roles.Teacher;
  id: string;
  surname: string;
  name: string;
};

export type User = {
  email: string;
  password: string;
  accessToken?: string;
};
