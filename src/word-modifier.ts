export const intensifyPhrase = (phrase: string): string => {
    if (!phrase || phrase.length === 0) {
        throw new Error("phrase was not defined")
    }

    return `${phrase.toUpperCase()}!!!`;
};
