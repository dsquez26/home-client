export interface formSection1Types {
  label1?: string;
  label2?: string;
}

export interface formSection2Types {
  label1?: string;
  label2?: string;
}

export interface ApplicationFormData {
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: Number;
  title: Number;
}

export interface CardProps1 {
  icon?: string;
  content: string;
}

export interface formSection3T {
  label1: string;
  title: string; //why did i have to do this?? dont leave...fix later
}

export type FormData = {
  userName: string;
  password: number;
};

export interface RegisterFormData {
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: Number;
  employeeID: Number;
}
