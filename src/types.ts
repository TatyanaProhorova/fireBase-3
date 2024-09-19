export enum Roles {
    Student = "student",
    Teacher = "teacher"
}

export type Student = {
    role: Roles.Student,
    surname: string,
    name: string,
    form: string,
    biology?: boolean,
    chemistry?: boolean
};

export type Teacher = {
    role: Roles.Teacher,
    surname: string,
    name: string,
}
