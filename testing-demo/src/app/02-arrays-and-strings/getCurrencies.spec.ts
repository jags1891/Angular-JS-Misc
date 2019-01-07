import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => { // suite
    it('should return the supported currencies', () => {
       const result= getCurrencies();
       expect(result).toContain('USD');
       expect(result).toContain('AUD');
       expect(result).toContain('EUR');
    } );
});

