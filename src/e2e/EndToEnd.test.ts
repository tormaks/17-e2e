import puppeteer from 'puppeteer';

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  return { page, browser };
}

//Большинство тестов можно запихнуть в один, тем самым сократить количество кода, но именно в дз я захотел их полностью разделить
describe('E2E tests', () => {
  it('should load about page and create screenshot', async () => {
    const { page, browser } = await start();
    await page.goto('http://localhost:3000/about');

    await page.screenshot({path: './src/e2e/aboutPage.jpg'});

    await browser.close();
  })

  it('should load main page', async () => {
    const { page, browser } = await start();
    await page.goto('http://localhost:3000/about');

    await page.click('#root > div > a');
    await page.goto('http://localhost:3000/chars');
    await page.waitForTimeout(3000);

    await page.screenshot({path: './src/e2e/mainPage.jpg'});

    await browser.close();
  })

  it('should load chars list and create screenshot', async () => {
    const { page, browser } = await start();
    await page.goto('http://localhost:3000/chars');
    await page.waitForTimeout(3000);

    await page.click('#root > main > section > div > div > a:nth-child(2)');

    const listItemText = await page.evaluate(() => document.body.textContent);
    expect(listItemText).toContain('Показать ещё');

    await page.screenshot({path: './src/e2e/charsListPage.jpg'});

    await browser.close();
  })

  it('should load chars card and create screenshot', async () => {
    const { page, browser } = await start();
    await page.goto('http://localhost:3000/chars');
    await page.waitForTimeout(3000);

    await page.click('#root > main > section > div > div > a:nth-child(3)');

    const buttonShowMoreText = await page.evaluate(() => document.body.textContent);
    expect(buttonShowMoreText).toContain('Показать ещё');

    await page.screenshot({path: './src/e2e/charsCardsPage.jpg'});

    await browser.close();
  })

  it('should hidden chars and create screenshot', async () => {
    const { page, browser } = await start();
    await page.goto('http://localhost:3000/chars');
    await page.waitForTimeout(3000);

    await page.click('#root > main > section > div > div > button');

    await page.screenshot({path: './src/e2e/hiddenChars.jpg'});

    await browser.close();
  })

  it('should chars graph and create screenshot', async () => {
    const { page, browser } = await start();
    await page.goto('http://localhost:3000/chars');
    await page.waitForTimeout(3000);

    await page.click('#root > main > section > div > div > a:nth-child(4)');

    const graphItemText = await page.evaluate(() => document.body.textContent);
    expect(graphItemText).toContain('In progress...');

    await page.screenshot({path: './src/e2e/graphCharsPage.jpg'});

    await browser.close();
  })

  it('should check header text in about page', async () => {
    const { page, browser } = await start();
    await page.goto('http://localhost:3000/about');

    const header = await page.evaluate(() => document.body.textContent);
    expect(header).toContain('Найди своего любимого персонажа из вселенной MARVEL');

    await browser.close();
  })

  it('should check description text in about page', async () => {
    const { page, browser } = await start();
    await page.goto('http://localhost:3000/about');

    const description = await page.evaluate(() => document.body.textContent);
    expect(description).toContain('Проект посвящен фанатам вселенной MARVEL, которые хотят найти своего любимого персонажа.');

    await browser.close();
  })

  it('should check button text in about page', async () => {
    const { page, browser } = await start();
    await page.goto('http://localhost:3000/about');

    const button = await page.evaluate(() => document.body.textContent);
    expect(button).toContain('Найти');

    await browser.close();
  })

  it('should return to about page', async () => {
    const { page, browser } = await start();
    await page.goto('http://localhost:3000/chars');

    await page.click('#root > main > a');

    const description = await page.evaluate(() => document.body.textContent);
    expect(description).toContain('Проект посвящен фанатам вселенной MARVEL, которые хотят найти своего любимого персонажа.');

    await browser.close();
  })


  it('should check text new element', async () => {
    const { page, browser } = await start();
    await page.goto('http://localhost:3000/chars');

    await page.waitForSelector('#root > main > section > div:nth-child(3) > button');
    await page.click('#root > main > section > div:nth-child(3) > button');

    const newElementText = await page.evaluate(() => document.body.textContent);
    expect(newElementText).toContain('Captain Universe');

    await browser.close();
  })
})
