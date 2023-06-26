export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'production') //Check the value
            return "https://www.proudction-website.com"; //return desired url
        else if (envi == 'staging')
            return "https://staging-website.com";
        else if (envi == 'qa')
            return "http://qa-website.com";
    }
}