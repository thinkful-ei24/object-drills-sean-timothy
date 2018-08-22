function Person(name, jobTitle, boss){
    this.name = name;
    this.jobTitle = jobTitle;
    this.boss = boss;
}

Person.prototype.getSuperior = function() {
      // if no boss is set assume that someone doesn't have a boss
      if (this.boss) {
        return `${this.jobTitle} ${this.name} reports to ${this.boss}.`;
      } else {
        return `${this.jobTitle} ${this.name} doesn't report to anybody.`;
      }
    }

const personsArray = [
    new Person("Sherlock Holmes", "Detective"),
    new Person("Abraham Lincoln", "U.S. President"),
    new Person("Martin Luther King Jr", "Civil Rights Leader"),
    new Person("Bob", "Software engineer", "somebody")
];

personsArray.forEach(person => console.log(person.getSuperior()));
