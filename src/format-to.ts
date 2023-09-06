export const removeNonDigits = (value: string | null): string | null => {
    if (typeof value !== 'string') {
        return null
    }
    return value.replace(/\D/g, '')
}