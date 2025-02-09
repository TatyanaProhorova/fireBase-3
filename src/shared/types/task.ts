export type Task = {
  description: string;
  class: number;
  options: string[];
  type: TypeTask;
  theme: string[];
};

export enum TypeTask {
  Multi = 'multi',
  Single = 'single',
  TextTask = 'textTask'
}
