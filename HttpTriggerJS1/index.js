const puppeteer = require('puppeteer');
const fs = require('fs');

const puppeteerOptions = {
    executablePath: 'google-chrome-unstable',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
};

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
       

        context.log("launching puppeteer...");
        const browser = await puppeteer.launch( puppeteerOptions ); // skip options if running outside the docker container
        const page = await browser.newPage();
        await page.goto('https://azure.microsoft.com/en-us/', {
            waitUntil: 'networkidle2'
        });

        await page.emulateMedia('screen');

        await page.pdf({
            path: '/output/result.pdf',
            format: 'letter',
            printBackground: true
        });

        context.log("Closing puppeteer browser...");
        await browser.close();

        context.log("Reading PDF...");
        
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };

    } else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }

    //context.done();
};