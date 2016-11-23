import { browser, element, by } from 'protractor';

export class OneblogsPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('one-root h1')).getText();
  }

  clickBlogEntry(index: number) {
    element.all(by.css('ul li')).get(index).click();
  }

  getBlogDetailsTitle() {
    return element(by.css('one-blog-detail h2')).getText();
  }

  getBlogDetailsBody() {
    return element(by.css('one-blog-detail p')).getText();  
  }

  clickFavoriteButton() {
    element(by.css('.fav-button')).click();
  }

  isFavorite(index) {
    let blogEntry = element.all(by.css('ul li')).get(index);
    return !!blogEntry.element(by.css('i'));
  }
}
