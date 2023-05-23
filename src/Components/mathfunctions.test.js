import { sum, div, mul, sub } from './mathfunctions';

describe('Call sum w [7, 11]:18',() =>{
    const result = sum(7,11);

    it('Should not return undefined', () =>{
        expect(result).not.toBe(undefined);
    })

    it('Should return number greater than 17.5', () =>{
        expect(result).toBeGreaterThan(17.5);
    })

    it('Should return 18', ()=>{
        expect(result).toBe(18);
    }
    )
});


describe('Call div w [15, 3]:5',() =>{
    const result = div(15,3);

    it('Should not return undefined', () =>{
        expect(result).not.toBe(undefined);
    })
    
    it('Should return number greater than 4', () =>{
        expect(result).toBeGreaterThan(4);
    })
    it('Should return 5', ()=>{
        expect(result).toBe(5);
    }
    )
});


describe('Call div w [5, 0]:Infinity',() =>{
    const result = div(5,0);

    it('Should not return undefined', () =>{
        expect(result).not.toBe(undefined);
    })
    
    it('Should return number greater than 1', () =>{
        expect(result).toBeGreaterThan(1);
    })
    it('Should return Infinity', ()=>{
        expect(result).toBe(Infinity);})

});

describe('Call div w [0, 0]:NaN',() =>{
    const result = div(0,0);

    it('Should not return undefined', () =>{
        expect(result).not.toBe(undefined);
    })

    it('Should not return 0', () =>{
        expect(result).not.toBe(0);
    })
    
    it('Should return NaN', ()=>{
        expect(result).toBe(NaN);})

});


describe('Call mul w [7, 3]:21',() =>{
    const result = mul(7,3);

    it('Should not return undefined', () =>{
        expect(result).not.toBe(undefined);
    })
    
    it('Should return number greater than 9', () =>{
        expect(result).toBeGreaterThan(9);

    })

    it('Should return 21', ()=>{
        expect(result).toBe(21);})

});


describe('Call sub w [9, 5]:4',() =>{
    const result = sub(9,5);

    it('Should not return undefined', () =>{
        expect(result).not.toBe(undefined);
    })

    it('Should return number less than 44', () =>{
        expect(result).toBeLessThan(44);

    })

    it('Should return a number less than 14', () =>{
        expect(result).toBeLessThan(14);

    })

    it('Should return 4', ()=>{
        expect(result).toBe(4);})
    

});

