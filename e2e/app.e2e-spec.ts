import { Boot419Page } from './app.po';

describe('boot419 App', function() {
  let page: Boot419Page;

  beforeEach(() => {
    page = new Boot419Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
