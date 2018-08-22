function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      fullName: function() {
          return this.firstName + " " + this.lastName;
      },
    };
    return person;
  }
  
  console.log(personMaker().fullName());