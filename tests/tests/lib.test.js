// The number of tests you need for a given function should be greater than or equal to
// the amount of execution paths you have. 

const lib = require('../lib');

describe('absolute', () => {
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
    
        // matcher function
        expect(result).toBe(1);
    });
    
    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
    
        // matcher function
        expect(result).toBe(1);
    });
    
    it('should return 0 if input is 0', () => {
        const result = lib.absolute(0);
    
        // matcher function
        expect(result).toBe(0);
    });
})

describe('greet', () => {
    it('should return the greeting message', () => {
        const result = lib.greet('Mosh');
        expect(result).toMatch(/Mosh/);
        expect(result).toContain('Mosh');
    })
});

describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();

        // Too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        // Too specific
        expect(result[0]).toBe('USD');

        // Proper
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');

        // Ideal
        expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
    })
});

describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);

        // To be matcher compares reference to memory so it doesn't work with objects
        // expect(result).toEqual({id: 1, price: 10 }); => toEqual to specific for obj

        expect(result).toMatchObject({ id: 1, price: 10 });

        // Value types matter here string !== num etc. 
        expect(result).toHaveProperty('id', 1);
    });
});

describe('registerUser', () => {
    it('should throw if username is falsy', () => {
        // null, undefined, nan, '', 0, false
        
        const args = [null, undefined, NaN, '', 0, false];
        args.forEach(a => {
            expect(() => { lib.registerUser(a) }).toThrow();
        })
    });
});

// Tests should be considered first class citizens in your source code
// As important as your production code