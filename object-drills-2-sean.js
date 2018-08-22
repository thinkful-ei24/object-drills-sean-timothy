
function makeStudentsReport(data) {
  let studentReport = [];
  for(let student of data) {
    studentReport.push(`${student.name}: ${student.grade}`);
  }
  return studentReport;
}

let students = [{name: 'Johnny Robot', grade: 'C'}]
console.log(makeStudentsReport(students));

function findById(items, idNum) {
  for(let item of items) {
    if(item.id === idNum) {
      return item;
    }
  }
  return null;
}
