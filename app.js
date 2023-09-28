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

const table = document.getElementById("salesData");
const trafficControlCurve = [
  0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6,
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CookieStore(location, minCust, maxCust, average) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = average;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSold = 0;
  this.staffPerHour = [];
}

CookieStore.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    const hourCustomers = Math.floor(
      randomNumber(this.minCust, this.maxCust) * trafficControlCurve[i]
    );
    this.customersPerHour.push(hourCustomers);
    const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust);
    this.cookiesPerHour.push(hourCookiesSold);
    this.totalCookieSold += hourCookiesSold;

    // Calculate staff needed for this hour
    const tossersNeeded = Math.ceil(hourCustomers / 20);
    this.staffPerHour.push(Math.max(tossersNeeded, 2)); // Ensure a minimum of 2 tossers
  }
};

CookieStore.prototype.render = function () {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = this.location;
  tr.appendChild(th);

  // Add cookies per hour to the table
  this.cookiesPerHour.forEach((cookieCount) => {
    const td = document.createElement("td");
    td.textContent = cookieCount;
    tr.appendChild(td);
  });

  // Add total cookies sold to the table
  const totalTd = document.createElement("td");
  totalTd.textContent = this.totalCookieSold;
  tr.appendChild(totalTd);

  // Add the row to the table
  table.appendChild(tr);

  // Render staff required
  const staffTr = document.createElement("tr");
  const staffTh = document.createElement("th");
  staffTh.textContent = this.location + " Staff";
  staffTr.appendChild(staffTh);
  this.staffPerHour.forEach((staffCount) => {
    const td = document.createElement("td");
    td.textContent = staffCount;
    staffTr.appendChild(td);
  });
  table.appendChild(staffTr);
};

// Create header row
const headerRow = document.createElement("tr");
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(locationHeader);
hours.forEach((hour) => {
  const th = document.createElement("th");
  th.textContent = hour;
  headerRow.appendChild(th);
});
const totalHeader = document.createElement("th");
totalHeader.textContent = "Daily Location Total";
headerRow.appendChild(totalHeader);
table.appendChild(headerRow);

const seattle = new CookieStore("Seattle", 23, 65, 6.3);
const tokyo = new CookieStore("Tokyo", 3, 24, 1.2);
const dubai = new CookieStore("Dubai", 11, 38, 3.7);
const paris = new CookieStore("Paris", 20, 38, 2.3);
const lima = new CookieStore("Lima", 2, 16, 4.6);

seattle.calculateSales();
seattle.render();
tokyo.calculateSales();
tokyo.render();
dubai.calculateSales();
dubai.render();
paris.calculateSales();
paris.render();
lima.calculateSales();
lima.render();

/*
CookieStore.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    // get the number of customers for this hour
    const hourCustomers = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(hourCustomers);

    // get the number of cookies sold this hour
    const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust);
    this.cookiesPerHour.push(hourCookiesSold);

    // increase the total cookies by adding this hours sales to it
    this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
  }
};

CookieStore.prototype.render = function () {
  // calculating sales data before rendering
  this.calculateSales();

  // create a row
  const tr = document.createElement("tr");

  // add the store name to the row
  const th = document.createElement("th");
  th.textContent = this.location;
  tr.appendChild(th);

  // add this store's data to that row
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    // create a new td and put the sales number in it
    const td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  // add the total to the end of the row
  const totalTd = document.createElement("td");
  totalTd.textContent = this.totalCookieSold;
  tr.appendChild(totalTd);

  // add that row to the table
  table.appendChild(tr);
};

// create our store objects
const seattle = new CookieStore("Seattle", 23, 65, 6.3);
const tokyo = new CookieStore("Tokyo", 3, 24, 1.2);
const dubai = new CookieStore("Dubai", 11, 38, 3.7);
const paris = new CookieStore("Paris", 20, 38, 2.3);
const lima = new CookieStore("Lima", 2, 16, 4.6);

// claculate sales for each store (commented out because the calculate sales in the render method)
// seattle.calculateSales()
// tokyo.calculateSales()
// dubai.calculateSales()
// paris.calculateSales()
// lima.calculateSales()

// render the header row
// create the tr
const headerRow = document.createElement("tr");
const blankTd = document.createElement("td");
headerRow.appendChild(blankTd);

// add each time in a th
for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");
  th.textContent = hours[i];
  headerRow.appendChild(th);
}

// add a total heading
const totalHeading = document.createElement("th");
totalHeading.textContent = "Total";
headerRow.appendChild(totalHeading);

// add the row to the table
table.appendChild(headerRow);

// render each store on the page
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();*/
