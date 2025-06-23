describe('#reverse-string', () => {
  it('should return the input String, reversed', () => {
    expect(reverseString('hello')).to.equal('olleh');
    expect(reverseString('goodbye')).to.equal('eybdoog');
  });
});
