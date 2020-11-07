const puppeteer = require("puppeteer");
const Table = require("cli-table3");

const type = process.argv[2];

const query =
  String(type).length === 3
    ? String(type) === "all"
      ? "all"
      : "abbreviation"
    : "fullname";

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto("https://www.premierleague.com/tables");
    await page.waitForSelector(".cookie-notice-accept");

    await page.click(".cookie-notice-accept");

    const rows = await page.$$(".tableMid");

    console.log(rows.length);

    await browser.close();
  } catch (err) {
    console.log(err);
  }

  // await page.goto("https://www.premierleague.com/tables");
  // await page.screenshot({ path: "example.png" });
})();
