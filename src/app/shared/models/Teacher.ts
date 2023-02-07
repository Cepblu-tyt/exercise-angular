export class Teacher {
  firstName: string;

  lastName: string;
  age: string;

  role: string;

  email: string;


  constructor(firstName: string, lastName: string, age: string, role: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.role = role;
    this.email = email;
  }
}
