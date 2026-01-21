import puppeteer from "puppeteer";

async function generatePDF() {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "pagina.pdf",
    format: "A4",
    printBackground: true,
  });

  await browser.close();
}

generatePDF();
