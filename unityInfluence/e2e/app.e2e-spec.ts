import { UnityInfluencePage } from './app.po';

describe('unity-influence App', () => {
  let page: UnityInfluencePage;

  beforeEach(() => {
    page = new UnityInfluencePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
