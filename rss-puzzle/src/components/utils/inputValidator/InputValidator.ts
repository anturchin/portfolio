export class InputValidator {
    public static isAllowedCharacters(input: string): boolean {
        const regex = /^[a-zA-Z-]+$/;
        return regex.test(input);
    }

    public static isLetter(letter: string): boolean {
        const regex = /^[A-Za-z]$/;
        return regex.test(letter);
    }

    public static isFirstLetterUpperCase(input: string): boolean {
        const firstLetter = input.charAt(0);
        return InputValidator.isLetter(firstLetter) && firstLetter === firstLetter.toUpperCase();
    }

    public static hasMinimumLength(input: string, minLength: number): boolean {
        return input.length >= minLength;
    }
}
