let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe('Github page tests', () => {
  beforeEach(async () => {
    await page.goto('https://github.com/team');
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$('header div div a');
    await firstLink.click();
    await page.waitForSelector('h1');
    const title = await page.title();
    expect(title).toEqual(
      'GitHub for teams · Build like the best teams on the planet · GitHub'
    );
  }, 3000);

  test('The first link attribute', async () => {
    const actual = await page.$eval('a', (link) => link.getAttribute('href'));
    expect(actual).toEqual('#start-of-content');
  }, 2000);

  test('The page contains Sign in button', async () => {
    const btnSelector = '.btn-large-mktg.btn-mktg';
    await page.waitForSelector(btnSelector, {
      visible: true
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain('Sign up for free');
  }, 2000);
});

describe('Github education page tests', () => {
  beforeEach(async () => {
    await page.goto('https://education.github.com/');
    await page.waitForSelector('h1');
  }, 10000);

  test('Should check the h1 header content', async () => {
    const title2 = await page.title();
    expect(title2).toEqual(
      'Engaged students are the result of using real-world tools - GitHub Education'
    );
  }, 3000);

  test('Should go to ivents', async () => {
    const btnSelector2 = '.menu-desktop [href="/events"]';
    await page.waitForSelector(btnSelector2, {
      visible: true
    });
    await page.click(btnSelector2);
    const title3 = await page.title();
    expect(title3).toEqual('Events - GitHub Education');
  }, 3000);

  test('Should show student programs', async () => {
    await page.waitForSelector('div:nth-child(1) > button > svg > path');
    await page.click('div:nth-child(1) > div > div > a:nth-child(1)');
    await page.waitForSelector('h1');
    const title4 = await page.title();
    expect(title4).toEqual(
      'Engaged students are the result of using real-world tools - GitHub Education'
    );
  }, 3000);
});
