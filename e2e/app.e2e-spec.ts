import { PointOfSaleAngular4Page } from './app.po';

describe('point-of-sale-angular4 App', () => {
  let page: PointOfSaleAngular4Page;

  beforeEach(() => {
    page = new PointOfSaleAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
