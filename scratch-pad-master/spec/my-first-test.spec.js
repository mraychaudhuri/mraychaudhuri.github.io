describe('#my-first-test', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  describe('print', () => {
    it('should log the given value', () => {
      print('Operation Spark');
      expect(console.log.firstCall.calledWith('Operation Spark')).to.be.true;
      print('Hello World');
      expect(console.log.secondCall.calledWith('Hello World')).to.be.true;
    });
  });
});
