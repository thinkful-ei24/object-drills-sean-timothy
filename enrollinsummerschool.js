function enrollInSummerSchool(students) {
    return students.map(student => {
        student.status = "In Summer School";
        return student;
    });
  }

  //passed repl.it tests