const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function Shop(location, minCust, maxCust, avgCookiesPerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSold = 0;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Shop.prototype.render = function () {
  for (let i = 0; i < hours.length; i++) {
    const hourCustomers = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(hourCustomers);
    const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust);
    this.cookiesPerHour.push(hourCookiesSold);
    this.totalCookieSold += hourCookiesSold;
  }
};

const seattle = new Shop("Seattle", 23, 65, 6.3);

seattle.render();

const tokyo = new Shop("Tokyo", 3, 24, 1.2);
tokyo.render();

const dubai = new Shop("Dubai", 11, 38, 3.7);
dubai.render();

const paris = new Shop("Paris", 20, 38, 2.3);
paris.render();

const lima = new Shop("Lima", 2, 16, 4.6);
lima.render();
