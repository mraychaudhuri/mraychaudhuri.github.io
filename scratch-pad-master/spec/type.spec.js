describe('#type', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  describe('isArray', () => {
    it('should return true if given Array, otherwise false', () => {
      expect(isArray([])).to.be.true;
      expect(isArray({})).to.be.false;
      expect(isArray(new Date())).to.be.false;
      expect(isArray(1)).to.be.false;
      expect(isArray(null)).to.be.false;
      expect(isArray('a')).to.be.false;
      expect(isArray(true)).to.be.false;
    });
  });

  describe('isObject', () => {
    it('should return true if given Object as collection, otherwise false', () => {
      expect(isObject({})).to.be.true;
      expect(isObject([])).to.be.false;
      expect(isObject(new Date())).to.be.false;
      expect(isObject(1)).to.be.false;
      expect(isObject(null)).to.be.false;
      expect(isObject('a')).to.be.false;
      expect(isObject(true)).to.be.false;
    });
  });

  describe('isCollection', () => {
    it('should return true if given Array or Object as collection, otherwise false', () => {
      expect(isCollection({})).to.be.true;
      expect(isCollection([])).to.be.true;
      expect(isCollection(new Date())).to.be.false;
      expect(isCollection(1)).to.be.false;
      expect(isCollection(null)).to.be.false;
      expect(isCollection('a')).to.be.false;
      expect(isCollection(true)).to.be.false;
    });
  });

  describe('typeOf', () => {
    it('should return a String representing the type of the value provided', () => {
      expect(typeOf([])).to.equal('array');
      expect(typeOf('a')).to.equal('string');
      expect(typeOf(null)).to.equal('null');
      expect(typeOf(NaN)).to.equal('number');
      expect(typeOf(1)).to.equal('number');
      expect(typeOf(new Date())).to.equal('date');
      expect(typeOf(function () {})).to.equal('function');
    });
  });
});
