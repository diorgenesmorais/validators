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

    it('should be not a string of the same characters', () => {
        const actual = Validations.isCpfInvalid('22222222222');

        expect(actual).toBeTruthy();
    })

    it('should contain 11 characters', () => {
        const actual = Validations.isCpfInvalid('95216670017');

        expect(actual).toBeFalsy();
    })

    it('should be invalid when contains different amount than 11 characters', () => {
        const actual = Validations.isCpfInvalid('93.762.735/0001-33');

        expect(actual).toBeTruthy();
    })

    it('should be cpf invalid', () => {
        expect(Validations.isCpfInvalid('95216670018')).toBeTruthy();
        expect(Validations.isCpfInvalid('95216660017')).toBeTruthy();
        expect(Validations.isCpfInvalid('478.215.841-88')).toBeTruthy();
    })

    it('should be cpf valid', () => {
        expect(Validations.isCpfInvalid('478.215.840-88')).toBeFalsy();
    })
})