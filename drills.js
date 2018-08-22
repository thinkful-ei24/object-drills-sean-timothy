
function createObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'hello';
    }
  };
}

const testObject = createObject();
console.log(testObject.foo);
console.log(testObject.sayHello());
