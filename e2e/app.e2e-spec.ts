import { NgxCurrencyInputMaskPage } from './app.po';

describe('ngx-currency-input-mask App', () => {
  let page: NgxCurrencyInputMaskPage;

  beforeEach(() => {
    page = new NgxCurrencyInputMaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
