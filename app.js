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

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create our first shop
const seattle = {
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      // get the number of customers for this hour
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);

      // get the number of cookies sold this hour
      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);

      // increase the total cookies by adding this hours sales to it
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
      console.log(this.totalCookieSold);
    }
  },
};

const tokyo = {
  location: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      // get the number of customers for this hour
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);

      // get the number of cookies sold this hour
      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);

      // increase the total cookies by adding this hours sales to it
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
    }
  },
};

seattle.calculateSales();
tokyo.calculateSales();

// get the element on the page with the id salesData
const salesData = document.getElementById("salesData");

// add the title for the location
const seattleH2 = document.createElement("h2");
seattleH2.textContent = seattle.location;
salesData.appendChild(seattleH2);

// create a list to show the cookies sold at each hour
const seattleUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]} cookies`;
  seattleUl.appendChild(li);
}

salesData.appendChild(seattleUl);

// add the title for the location
const tokyoH2 = document.createElement("h2");
tokyoH2.textContent = tokyo.location;
salesData.appendChild(tokyoH2);

// create a list to show the cookies sold at each hour
const tokyoUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
  tokyoUl.appendChild(li);
}

salesData.appendChild(tokyoUl);

// ... [Önceki kodlarınız burada]

const dubai = {
  location: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);
      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);
      this.totalCookieSold += hourCookiesSold;
    }
  },
};

const paris = {
  location: "Paris",
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);
      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);
      this.totalCookieSold += hourCookiesSold;
    }
  },
};

const lima = {
  location: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);
      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);
      this.totalCookieSold += hourCookiesSold;
    }
  },
};

// Calculate sales and show results on web page
[dubai, paris, lima].forEach((shop) => {
  shop.calculateSales();
  const h2 = document.createElement("h2");
  h2.textContent = shop.location;
  salesData.appendChild(h2);
  const ul = document.createElement("ul");
  for (let i = 0; i < hours.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${hours[i]}: ${shop.cookiesPerHour[i]} cookies`;
    ul.appendChild(li);
  }
  salesData.appendChild(ul);
});
