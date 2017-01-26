import { TinterestPage } from './app.po';

describe('tinterest App', function() {
  let page: TinterestPage;

  beforeEach(() => {
    page = new TinterestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
