describe('#contact-list', () => {
  describe('makeContact()', () => {
    it("should expose a Function called makeContact that returns an Object with structure: {id: '1', nameFirst: 'Max', nameLast: 'Gaudin'}", () => {
      expect(makeContact('1', 'Max', 'Gaudin')).to.eql({
        id: '1',
        nameFirst: 'Max',
        nameLast: 'Gaudin',
      });
      expect(makeContact('2', 'John', 'Fraboni')).to.eql({
        id: '2',
        nameFirst: 'John',
        nameLast: 'Fraboni',
      });
    });
  });

  describe('makeContactList()', () => {
    it('should expose a Function called makeContactList that returns an Object specialized for contact management', () => {
      const contacts = makeContactList();
      expect(contacts).to.be.instanceof(Object);
    });
    it('should properly add a contact thru the addContact API', () => {
      const contacts = makeContactList();
      contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
      expect(contacts.length()).to.equal(1);
      contacts.addContact(makeContact('2', 'John', 'Fraboni'));
      expect(contacts.length()).to.equal(2);
    });
    it('should properly find a contact by full name thru the findContact API', () => {
      const contacts = makeContactList();
      contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
      expect(contacts.findContact('Max Gaudin')).to.eql({
        id: '1',
        nameFirst: 'Max',
        nameLast: 'Gaudin',
      });
      expect(contacts.findContact('John Fraboni')).to.equal(undefined);
    });
    it('should properly remove a contact thru the removeContact API', () => {
      const contacts = makeContactList();
      contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
      expect(contacts.length()).to.equal(1);
      contacts.addContact(makeContact('2', 'Berta', 'Gaudin'));
      contacts.removeContact(contacts.findContact('Max Gaudin'));
      expect(contacts.length()).to.equal(1);
      contacts.removeContact(contacts.findContact('Berta Gaudin'));
      expect(contacts.length()).to.equal(0);
    });
    it('Should have an printAllContactNames APIt that returns new-line separated String of all full-names of contacts', () => {
      const contacts = makeContactList();
      contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
      contacts.addContact(makeContact('2', 'John', 'Fraboni'));
      expect(contacts.printAllContactNames()).to.equal(
        'Max Gaudin\nJohn Fraboni'
      );
      contacts.addContact(makeContact('3', 'Olivia', 'Sabo-Rush'));
      expect(contacts.printAllContactNames()).to.equal(
        'Max Gaudin\nJohn Fraboni\nOlivia Sabo-Rush'
      );
    });
  });
});
