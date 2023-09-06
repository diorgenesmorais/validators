import { Validations } from '../src/validations';

describe('Validations', () => {
    it('should create Validations class', () => {

        expect(Validations).toBeTruthy();
    })

    it('should to be invalid to vazio', () => {
        const actual = Validations.isCpfInvalid('');

        expect(actual).toBeTruthy();
    })
})