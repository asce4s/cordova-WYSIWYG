import { CordovaBuilderPage } from './app.po';

describe('cordova-builder App', function() {
  let page: CordovaBuilderPage;

  beforeEach(() => {
    page = new CordovaBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
