export const removeNonDigits = (value: string): string => {
    if (!value) {
        return ''
    }
    return value.replace(/\D/g, '')
}