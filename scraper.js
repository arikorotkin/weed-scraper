const puppeteer = require('puppeteer')

async function scrapeSite(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    await page.evaluate(() => {
        document.querySelector('a#av-yes').click()
    })

    await page.waitFor(5000)
    
    const content = await page.content()

    console.log(/end \.header/.test(content))
    // const [price] = await page.$x('/html/body/div/div/div/div[2]/div[2]/div/div/main/div/div/div/div[2]/div[3]/div/div[2]/div/div[2]/div/a[1]/div/div/div/div[3]/div[8]/div')
    // const nameText = await name.getProperty('textContent')
    // const priceText = await price.getProperty('textContent')
    // const rawName = await nameText.jsonValue()
    // const rawPrice = await priceText.jsonValue()

    // console.log(`The flower ${rawName} costs ${rawPrice}.`)

    // console.log(rawName)

    browser.close()
}

scrapeSite('https://risecannabis.com/dispensary-menu/pennsylvania/erie-medical-menu/')