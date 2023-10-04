interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

let studentA: Student = {
  firstName: "MIike",
  lastName: "Pence",
  age: 20,
  location: "Nairobi"
}

let studentB: Student = {
  firstName: "CHarity",
  lastName: "Gaidi",
  age: 20,
  location: "Nairobi"
}

const studentsList: Array<Student> = [studentA, studentB];

const body: HTMLBodyElement = document.querySelector('body');
const table: HTMLTableElement = document.createElement('table');
const row: HTMLTableRowElement = document.createElement('tr');

row.innerHTML = `<tr><th>Firstname</th><th>Location</th></tr>`;
table.appendChild(row);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(row);
})

body.appendChild(table);
