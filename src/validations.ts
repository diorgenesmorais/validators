export class Validations {
    static isCpfInvalid(cpf: string): boolean {
        if (!cpf) {
            return true;
        }

        return false;
    }
}