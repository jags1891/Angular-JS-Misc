import { AngularMaterialDemoPage } from './app.po';

describe('angular-material-demo App', () => {
  let page: AngularMaterialDemoPage;

  beforeEach(() => {
    page = new AngularMaterialDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
