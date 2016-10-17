import { MusikaCliPage } from './app.po';

describe('musika-cli App', function() {
  let page: MusikaCliPage;

  beforeEach(() => {
    page = new MusikaCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
