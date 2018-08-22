const newObject = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5
};

for(const property in newObject){
    console.log(property);
}