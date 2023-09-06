import * as FormatTo from '../src/format-to'

describe('FormatTo', () => {
    it('should create function', () => {
        expect(FormatTo.removeNonDigits).toBeTruthy();
    })

    it('should remove no-digits', () => {
        const actual = FormatTo.removeNonDigits('002.485.733-53');

        expect(actual).toBe('00248573353');
    })

    it('should returns empty string', () => {
        const actual = FormatTo.removeNonDigits('');
        
        expect(actual).toBe('');
    })
})