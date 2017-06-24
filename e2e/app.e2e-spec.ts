import { ChallengePxnwPage } from './app.po';

describe('challenge-pxnw App', () => {
  let page: ChallengePxnwPage;

  beforeEach(() => {
    page = new ChallengePxnwPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
