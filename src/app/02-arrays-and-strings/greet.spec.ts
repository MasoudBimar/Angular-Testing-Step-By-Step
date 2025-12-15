import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the message', () => {
    const result = greet('masoud');
    // expect(result).toBe('Welcome masoud'); verrrry specific
    expect(result).toContain('masoud');
  });
});
