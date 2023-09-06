import { removeNonDigits } from "./format-to";

export class Validations {

    /**
     * Valida se o valor é uma sequência de caracteres iguais
     * @returns true se for uma sequência igual
     */
    static rejectSequence(value: string | null): boolean {
        if (value) {
            const newValue = value.replace(/\D/g, '')
            return /^(\d)\1+$/.test(newValue)
        }
        return false
    }

    /**
     * Valida se o CPF é válido
     * @returns true se inválido
     */
    static isCpfInvalid(cpf: string | null): boolean {
        cpf = removeNonDigits(cpf);
    
        if (!cpf) {
            return true;
        }

        if (this.rejectSequence(cpf)) {
            return true;
        }

        const length = cpf.length
        if (length !== 11) {
            return true;
        }

        const getIndexNumber = (cpf: string, index: number) => Number(cpf.charAt(index));

        const accumulator = (cpf: string, dv: number) => {
            let acc = 0;
            for(let i = 0; i < 9; i++) {
                acc += getIndexNumber(cpf, i) * dv;
                dv--;
            }
            return acc;
        }
    
        let sum = accumulator(cpf, 10);

        let weight = 11 - (sum % 11);

        const getWeight = (weight: number) => (weight >= 10) ? 0 : weight;

        let ten = getWeight(weight);

        sum = accumulator(cpf, 11);
        weight = 11 - ((sum + (ten * 2)) % 11);

        let unit = getWeight(weight);

        if (ten != getIndexNumber(cpf, length - 2) || unit != getIndexNumber(cpf, length - 1)) {
            return true;
        }

        return false;
    }
}