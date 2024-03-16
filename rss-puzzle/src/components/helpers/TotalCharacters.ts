export class TotalCharacters {
    public static sum(word: string): number {
        return [...word.split(' ')].reduce((total, _word) => total + _word.length, 0);
    }
}
