export class Validations {

    /**
     * @description Valida se o valor é uma sequência de caracteres iguais
     * @returns true se for uma sequência igual
     */
    static rejectSequence(value: string | null): boolean {
        if (value) {
            const newValue = value.replace(/\D/g, '')
            return /^(\d)\1+$/.test(newValue)
        }
        return false
    }

    static isCpfInvalid(cpf: string | null): boolean {
        if (!cpf) {
            return true;
        }

        if (this.rejectSequence(cpf)) {
            return true;
        }

        return false;
    }
}