describe('Compute addition of two numbers', () => {
    it ('Should add two numbers', () => {
        const a = 6;
        const b = 12;
        const result = add(a, b);
        expect(result).toBe(18);
    })
})