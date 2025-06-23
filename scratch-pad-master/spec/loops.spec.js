describe('#loops', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  const array = [1, 2, 3];
  const arrayTwo = ['one', 'two', 'three', 'four'];
  const object = {
    one: 'one',
    two: 'two',
    three: 'three',
  };
  const objectTwo = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
  };
  describe('printArrayValues()', () => {
    it('should call log with the values in the Array', () => {
      printArrayValues(array);
      expect(console.log.firstCall.calledWith(1)).to.be.true;
      expect(console.log.secondCall.calledWith(2)).to.be.true;
      expect(console.log.thirdCall.calledWith(3)).to.be.true;
    });
    it('should call log with the values in the Array', () => {
      printArrayValues(arrayTwo);
      expect(console.log.firstCall.calledWith('one')).to.be.true;
      expect(console.log.secondCall.calledWith('two')).to.be.true;
      expect(console.log.thirdCall.calledWith('three')).to.be.true;
    });
  });

  describe('printArrayValuesInReverse()', () => {
    it('should call log with the values in the Array in reverse order', () => {
      printArrayValuesInReverse(array);
      expect(console.log.firstCall.calledWith(3)).to.be.true;
      expect(console.log.secondCall.calledWith(2)).to.be.true;
      expect(console.log.thirdCall.calledWith(1)).to.be.true;
    });
    it('should call log with the values in the Array in reverse order', () => {
      printArrayValuesInReverse(arrayTwo);
      expect(console.log.firstCall.calledWith('four')).to.be.true;
      expect(console.log.secondCall.calledWith('three')).to.be.true;
      expect(console.log.thirdCall.calledWith('two')).to.be.true;
    });
  });

  describe('getObjectKeys()', () => {
    it('should return an Array containing the Object keys', () => {
      expect(getObjectKeys(object)).to.eql(['one', 'two', 'three']);
    });
    it('should return an Array containing the Object keys', () => {
      expect(getObjectKeys(objectTwo)).to.eql(['one', 'two', 'three', 'four']);
    });
  });

  describe('printObjectKeys()', () => {
    it('should call log with the keys in the Object', () => {
      printObjectKeys(object);
      expect(console.log.firstCall.calledWith('one')).to.be.true;
      expect(console.log.secondCall.calledWith('two')).to.be.true;
      expect(console.log.thirdCall.calledWith('three')).to.be.true;
    });
    it('should call log with the keys in the Object', () => {
      printObjectKeys(objectTwo);
      expect(console.log.firstCall.calledWith('one')).to.be.true;
      expect(console.log.secondCall.calledWith('two')).to.be.true;
      expect(console.log.thirdCall.calledWith('three')).to.be.true;
    });
  });

  describe('getObjectValues()', () => {
    it('should return an Array containing the Object values', () => {
      expect(getObjectValues(object)).to.eql(['one', 'two', 'three']);
    });
    it('should return an Array containing the Object values', () => {
      expect(getObjectValues(objectTwo)).to.eql([1, 2, 3, 4]);
    });
  });

  describe('printObjectValues()', () => {
    it('should call log with the values in the Object', () => {
      printObjectValues(object);
      expect(console.log.firstCall.calledWith('one')).to.be.true;
      expect(console.log.secondCall.calledWith('two')).to.be.true;
      expect(console.log.thirdCall.calledWith('three')).to.be.true;
    });
    it('should call log with the values in the Object', () => {
      printObjectValues(objectTwo);
      expect(console.log.firstCall.calledWith(1)).to.be.true;
      expect(console.log.secondCall.calledWith(2)).to.be.true;
      expect(console.log.thirdCall.calledWith(3)).to.be.true;
    });
  });

  describe('getObjectLength()', () => {
    it('should return the number of key/value pairs in the Object', () => {
      expect(getObjectLength(object)).to.equal(3);
    });
    it('should return the number of key/value pairs in the Object', () => {
      expect(getObjectLength(objectTwo)).to.equal(4);
    });
  });

  describe('printObjectValuesInReverse()', () => {
    it('should call log with the values in the Object in reverse order', () => {
      printObjectValuesInReverse(object);
      expect(console.log.firstCall.calledWith('three')).to.be.true;
      expect(console.log.secondCall.calledWith('two')).to.be.true;
      expect(console.log.thirdCall.calledWith('one')).to.be.true;
    });
    it('should call log with the values in the Object in reverse order', () => {
      printObjectValuesInReverse(objectTwo);
      expect(console.log.firstCall.calledWith(4)).to.be.true;
      expect(console.log.secondCall.calledWith(3)).to.be.true;
      expect(console.log.thirdCall.calledWith(2)).to.be.true;
    });
  });
});
