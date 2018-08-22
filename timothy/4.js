function Person(name, jobTitle){
    this.name = name;
    this.jobTitle = jobTitle;
}

const personsArray = [
    new Person("Sherlock Holmes", "Detective"),
    new Person("Abraham Lincoln", "U.S. President"),
    new Person("Martin Luther King Jr", "Civil Rights Leader")
];

personsArray.forEach(person => console.log(`${person.name} is a ${person.jobTitle}.`));
