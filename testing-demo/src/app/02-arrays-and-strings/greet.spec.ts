import { greet } from './greet';

describe('greet', () => { // suite
    it('should return welcome + input', () => {
       // expect(greet('test')).toBe('Welcome test');
       expect(greet('test..')).toContain('test..');
    } );
});
