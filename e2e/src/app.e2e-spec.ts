import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Pagina principal mostrada "Perfil" ', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Perfil');
  });
});
