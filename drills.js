
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

function updateObject(obj) {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
}

const testObject = createObject();
console.log(testObject.foo);
console.log(testObject.sayHello());

updateObject(testObject);
console.log(testObject.bizz);
