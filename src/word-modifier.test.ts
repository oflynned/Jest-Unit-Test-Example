import {intensifyPhrase} from "./word-modifier";

describe("#intensityPhrase", () => {
    it('should blah blah', () => {
        expect(intensifyPhrase("hello world")).toEqual("HELLO WORLD!!!")
    });

    it('should throw an error with zero characters', () => {
        expect(() => intensifyPhrase("")).toThrowError("phrase was not defined")
    });

    it('should throw an error when undefined', () => {
        expect(() => intensifyPhrase(undefined)).toThrowError("phrase was not defined")
    });

    it('should append exclamation points with more than one character', () => {
        const actual = intensifyPhrase("hello world").split("!");
        expect(actual.length > 3).toBeTruthy();
    });

    it('should transform to uppercase with more than one character', () => {
        const actual = intensifyPhrase("hello world");
        expect(/^[a-z]+/.test(actual)).toBeFalsy();
    });
});
