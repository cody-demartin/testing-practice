const exercise1 = require('../exercise1');

describe('FizzBuzz', () => {
    it('should throw an error if the input is not a number', () => {

        expect( () => { exercise1.fizzBuzz('one') }).toThrow();
    });

    it('should return FizzBuzz if divisible by both 5 and 3', () => {
        
        const result = exercise1.fizzBuzz(15);
        expect(result).toContain('FizzBuzz');
    });

    it('should return Fizz if the input is divisible by 3', () => {

        const result = exercise1.fizzBuzz(3);
        expect(result).toContain('Fizz');
    });

    it('should return Buzz if the input is divisible by 5', () => {

        const result = exercise1.fizzBuzz(5);
        expect(result).toContain('Buzz');
    });

    it('should return the input itself for any other case', () => {

        const result = exercise1.fizzBuzz(1);
        expect(result).toEqual(1);
    });


});
