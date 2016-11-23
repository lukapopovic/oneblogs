import { OneblogsPage } from './app.po';

describe('oneblogs App', function() {
  let page: OneblogsPage;

  beforeEach(() => {
    page = new OneblogsPage();
  });

  it('should display message saying ', () => {
    let blogEntry = 0;
    let blogEntryTitle = 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
    let blogEntryBody = 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit '+
                        'molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto';
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Blog Post Reader');

    page.clickBlogEntry(blogEntry);
    expect(page.getBlogDetailsTitle()).toEqual(blogEntryTitle);
    expect(page.getBlogDetailsBody()).toEqual(blogEntryBody);

    page.clickFavoriteButton();

    expect(page.isFavorite(blogEntry)).toBeTruthy();
  });
});
