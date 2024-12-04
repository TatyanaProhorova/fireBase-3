export type Task = {
  description: string;
  class: number;
  options: string[];
  type: TypeTask;
  theme: string[];
};

 enum TypeTask {
   Multi = "multi"
 };
