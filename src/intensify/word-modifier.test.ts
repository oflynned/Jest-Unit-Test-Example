import wordModifier from ".";

describe("word-modifier", () => {
    describe("with zero characters", () => {
        it('should throw an error', function () {
            expect(() => wordModifier.intensifyPhrase("")).toThrowError("phrase was not defined")
        });
    });

    describe("when undefined", () => {
        it('should throw an error', function () {
            expect(() => wordModifier.intensifyPhrase(undefined)).toThrowError("phrase was not defined")
        });
    });

    describe("with more than one character", () => {
        const payload = "hello world";

        it('should append exclamation points', function () {
            const actual = wordModifier.intensifyPhrase(payload).split("!");
            expect(actual.length > 3).toBeTruthy();
        });

        it('should transform to uppercase', function () {
            const actual = wordModifier.intensifyPhrase(payload);
            expect(/^[a-z]+/.test(actual)).toBeFalsy();
        });
    })
});
