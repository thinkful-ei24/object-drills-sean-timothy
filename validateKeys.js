function validateKeys(object, expectedKeys) {
    const objectKeys = Object.keys(object);
    return expectedKeys.length === objectKeys.length && !objectKeys.find(key => !expectedKeys.includes(key));
  }
  
  //passed repl.it tests