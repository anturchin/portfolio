export class WordShuffler {
    public static shuffle(words: string[]): string[] {
        const shuffledWords = [...words];
        for (let i = shuffledWords.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
        }
        return shuffledWords;
    }
}
