import { MentionMoviesPage } from './app.po';

describe('mention-movies App', function() {
  let page: MentionMoviesPage;

  beforeEach(() => {
    page = new MentionMoviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
