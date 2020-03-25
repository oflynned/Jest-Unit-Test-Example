export const intensifyPhrase = (phrase: string): string => {
    if (!phrase || phrase.length === 0) {
        throw new Error("phrase was not defined")
    }

    return `${phrase.toUpperCase()}!!!`;
};

export const asyncFetchData = async (delay: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            reject(new Error(''));
            return;
        }

        setTimeout(() => {
            resolve('cool');
        }, delay)
    })
};
