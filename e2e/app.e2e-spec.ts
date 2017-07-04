import { TimelineAng4Page } from './app.po';

describe('timeline-ang4 App', () => {
  let page: TimelineAng4Page;

  beforeEach(() => {
    page = new TimelineAng4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
