import { IbmworksPage } from './app.po';

describe('ibmworks App', function() {
  let page: IbmworksPage;

  beforeEach(() => {
    page = new IbmworksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
