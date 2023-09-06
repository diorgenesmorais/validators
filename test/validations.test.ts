import { Validations } from '../src/validations';

describe('Validations', () => {
    it('should create Validations class', () => {

        expect(Validations).toBeTruthy();
    })

    it('should to be invalid to vazio', () => {
        const actual = Validations.isCpfInvalid(null);

        expect(actual).toBeTruthy();
    })

    it('should be a string of the same characters', () => {
        const actual = Validations.rejectSequence('22222222222');

        expect(actual).toBeTruthy();
    })

    it('should be not a string of the same characters', () => {
        const actual = Validations.rejectSequence(null);

        expect(actual).toBeFalsy();
    })
})