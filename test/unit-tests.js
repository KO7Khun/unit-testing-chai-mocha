const chai = require('chai')
const assert = chai.assert;

function weirdNumbers(delta) {
  return (1 + delta - Math.random());
}

const winterMonths = ['dec,', 'jan', 'feb', 'mar'];
const backendLanguages = ['php', 'python', 'javascript', 'ruby', 'asp'];

const formatPeople = function (name, age) {
  return '# name: ' + name + ', age: ' + age + '\n';
};

const Car = function () {
  this.model = 'cedan';
  this.engines = 1;
  this.wheels = 4;
};

const Plane = function () {
  this.model = '737';
  this.engines = ['left', 'right'];
  this.wheels = 6;
  this.wings = 2;
};

const myCar = new Car();
const airlinePlane = new Plane();

describe('Unit Tests', () => {

  // Basic Assertions
  describe('Basic Assertions', () => {
    it('#isNull, #isNotNull', function () {
      assert.isNull(null, 'this is an optional error description - e.g. null is null');
      assert.isNotNull(1, '1 is not null');
    });

    it('#isDefined, #isUndefined', function () {
      assert.isDefined(null, 'null is not undefined');
      assert.isUndefined(undefined, 'undefined IS undefined');
      assert.isDefined('hello', 'a string is not undefined');
    });

    it('#isOk, #isNotOk', function () {
      assert.isNotOk(null, 'null is falsey');
      assert.isOk ("I'm truthy", 'a string is truthy');
      assert.isOk(true, 'true is truthy');
    });

    it('#isTrue, #isNotTrue', function () {
      assert.isTrue(true, 'true is true');
      assert.isTrue(!!'double negation', 'double negation of a truthy is true');
      assert.isNotTrue({ value: 'truthy' }, 'A truthy object is NOT TRUE (neither is false...)');
    });
  })

  describe('Equality', () => {
    
    it('#equal, #notEqual', () => {
      assert.equal(12, '12', 'numbers are coerced into strings with ==')
      assert.notEqual({value : 1}, {value : 1}, '== compares object references')
      assert.equal(6 * '2', '12', 'no more hints...');
      assert.notEqual(6 + '2', '12', 'type your error message if you want');
    })

    it('#strictEqual, #notStrictEqual', function () {
      assert.notStrictEqual(6, '6');
      assert.strictEqual(6, 3 * 2);
      assert.strictEqual(6 * '2', 12);
      assert.notStrictEqual([1, 'a', {}], [1, 'a', {}]);
    });
 
    it('#deepEqual, #notDeepEqual', function () {
      assert.deepEqual({ a: '1', b: 5 }, { b: 5, a: '1' }, "keys order doesn't matter");
      assert.notDeepEqual({ a: [5, 6] }, { a: [6, 5] }, "array elements position does matter !!");
    });
  })  

  describe('Comparisons', () => {
    it('#isAbove, #isAtMost', () => {
      assert.isAtMost('hello'.length, 5);
      assert.isAbove(1, 0);
      assert.isAbove(Math.PI, 3);
      assert.isAtMost(1 - Math.random(), 1);
    })
    
    it('#isBelow, #istAtLeast', () => {
        assert.isAtLeast('world'.length, 5);
        assert.isAtLeast(2 * Math.random(), 0);
        assert.isBelow(5 % 2, 2);
        assert.isBelow(2 / 3, 1);
    })

    it("#approximately", () => {
      assert.approximately(weirdNumbers(0.5), 1, 0.5);
      assert.approximately(weirdNumbers(0.2), 1, 0.8);
    })
  })

  describe('Arrays',() => {
    it('#isArray, #isNotArray', () => {
      assert.isArray('isThisAnArray'.split(''), 'String.prototype.split() returns an Array')
      assert.isNotArray([1, 2, 3].indexOf(2), 'indexOf returns a number.')
    })

    it('Array #include, #notInclude', () => {
      assert.notInclude(winterMonths, 'jul', "It's summer in july...");
      assert.include(backendLanguages, 'javascript', 'JS is a backend language !!');
    })
  })

  describe('Strings',() => {
    it('#isString, #isNotString', () => {
      assert.isNotString(Math.sin(Math.PI / 4), 'a float is not a string');
      assert.isString(process.env.PATH, 'env vars are strings (or undefined)');
      assert.isString(JSON.stringify({ type: 'object' }), 'a JSON is a string');
    })

    it('String #include, #notInclude', function () {
      assert.include('Arrow', 'row', "Arrow contains row...");
      assert.notInclude('dart', 'queue', "But a dart doesn't contain a queue");
    });

    it('#match, #notMatch', function () {
      const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
      assert.match(formatPeople('John Doe', 35), regex);
      assert.notMatch(formatPeople('Paul Smith III', 'twenty-four'), regex);
    });
  })

  describe('Objects', () => {
    it('#property, #notPropery', () => {
      assert.notProperty(myCar, 'wings', 'A car has not wings');
      assert.property(airlinePlane, 'engines', 'planes have engines');
      assert.property(myCar, 'wheels', 'Cars have wheels');
    })

    it('#typeOf, #notTypeOf', function () {
      assert.typeOf(myCar, 'object');
      assert.typeOf(myCar.model, 'string');
      assert.notTypeOf(airlinePlane.wings, 'string');
      assert.typeOf(airlinePlane.engines, 'array');
      assert.typeOf(myCar.wheels, 'number');
    });

    it('#instanceOf, #notInstanceOf', function () {
      assert.notInstanceOf(myCar, Plane);
      assert.instanceOf(airlinePlane, Plane);
      assert.instanceOf(airlinePlane, Object, 'everything is an Object');
      assert.notInstanceOf(myCar.wheels, String);
    });

  })



});
// 


