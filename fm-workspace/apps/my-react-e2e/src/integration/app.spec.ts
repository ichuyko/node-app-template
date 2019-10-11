import { getGreeting } from '../support/app.po';

describe('my-react', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to my-react!');
  });
});
