import { InvertoryAppPage } from './app.po';

describe('invertory-app App', function() {
  let page: InvertoryAppPage;

  beforeEach(() => {
    page = new InvertoryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
