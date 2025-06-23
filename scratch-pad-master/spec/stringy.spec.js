describe('#stringy', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  describe('length()', () => {
    it('should return the length of the input String', () => {
      expect(length('hello')).to.equal(5);
      expect(length('you')).to.equal(3);
    });
  });

  describe('toLowerCase()', () => {
    it('should return a lowercase version of the input String', () => {
      expect(toLowerCase('HELLO')).to.equal('hello');
      expect(toLowerCase('GOODBYE')).to.equal('goodbye');
    });
  });

  describe('toUpperCase()', () => {
    it('should return an uppercase version of the input String', () => {
      expect(toUpperCase('hello')).to.equal('HELLO');
      expect(toUpperCase('goodbye')).to.equal('GOODBYE');
    });
  });

  describe('toDashCase()', () => {
    it('should return a dash-cased version of the input String', () => {
      expect(toDashCase('Hello World')).to.equal('hello-world');
      expect(toDashCase('Should Work With Many Words')).to.equal(
        'should-work-with-many-words'
      );
    });
  });

  describe('beginsWith()', () => {
    it('should return true if the input String begins with the input character, false otherwise', () => {
      expect(beginsWith('Hello World', 'h')).to.be.true;
      expect(beginsWith('Hello World', 'H')).to.be.true;
      expect(beginsWith('Hello World', 'a')).to.be.false;
    });
  });

  describe('endsWith()', () => {
    it('should return true if the input String ends with the input character, false otherwise', () => {
      expect(endsWith('Hello World', 'd')).to.be.true;
      expect(endsWith('Hello World', 'D')).to.be.true;
      expect(endsWith('Hello World', 'a')).to.be.false;
    });
  });

  describe('concat()', () => {
    it('should return the two input Strings concatenated', () => {
      expect(concat('Hello ', 'World')).to.equal('Hello World');
      expect(concat('Operation ', 'Spark')).to.equal('Operation Spark');
    });
  });

  describe('join()', () => {
    it('should return all input Strings concatenated', () => {
      expect(join('Hello ', 'there, ', 'you ', 'prince!')).to.equal(
        'Hello there, you prince!'
      );
      expect(join('Hello ', 'there, ', 'you ', 'princess!')).to.equal(
        'Hello there, you princess!'
      );
    });
  });

  describe('longest()', () => {
    it('should return the longest of two input Strings', () => {
      expect(longest('abc', 'z')).to.equal('abc');
      expect(longest('a', 'xyz')).to.equal('xyz');
    });
  });

  describe('sortAscending()', () => {
    it('should return 1 if stringOne is alphabetically higher than stringTwo', () => {
      expect(sortAscending('abc', 'acb')).to.equal(1);
    });
    it('should return -1 if stringOne is alphabetically lower than stringTwo', () => {
      expect(sortAscending('acb', 'abc')).to.equal(-1);
    });
    it('should return 0 if stringOne is alphabetically equivalent to stringTwo', () => {
      expect(sortAscending('abc', 'abc')).to.equal(0);
    });
  });

  describe('sortDescending()', () => {
    it('should return -1 if stringOne is alphabetically lower than stringTwo', () => {
      expect(sortDescending('abc', 'acb')).to.equal(-1);
    });
    it('should return 1 if stringOne is alphabetically higher than stringTwo', () => {
      expect(sortDescending('acb', 'abc')).to.equal(1);
    });
    it('should return 0 if stringOne is alphabetically equivalent to stringTwo', () => {
      expect(sortDescending('abc', 'abc')).to.equal(0);
    });
  });
});
