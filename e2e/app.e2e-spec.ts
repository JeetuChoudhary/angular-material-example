import { AngularMaterialExamplePage } from './app.po';

describe('angular-material-example App', () => {
  let page: AngularMaterialExamplePage;

  beforeEach(() => {
    page = new AngularMaterialExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
