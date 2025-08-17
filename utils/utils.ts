export const shortenSentences = (sent: string, maxWords: number = 5): string => {
    const words = sent.split(' ');
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + ' ...' : sent;
};