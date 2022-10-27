/* exported defaults */

/* Define a function with two parameters, target and source
Define a for...in loop w/ conditions: (var prop1 in source)
  Define a nested for...in loop w/ conditions: (var prop2 in target)
    Define a nested if statement w/ conditions: if (source[prop1] in target === undefined), target[prop1] = source[prop1] */

function defaults(target, source) {
  for (var property in source) {
    if (property in target === false) {
      target[property] = source[property];
    }
  }
}

/* Define defaults(target, source)
Define for...in statement w/ conditions: (var property in source)
  Define a nested if statement w/conditons: if (property in target === flase), assign property value of source to property of target */
