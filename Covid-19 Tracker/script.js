window.addEventListener("load", () => {
  const country = document.querySelector("#country");
  //WORLD CASES
  const wcases = document.getElementById("wcase");
  const wdeaths = document.getElementById("wdeaths");
  const wrecovered = document.getElementById("wrecovered");
  const Wapi = `https://api.covid19api.com/summary`;
  fetch(Wapi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.Global);
      // console.log(data[data.length - 1].Confirmed);
      wcases.innerText = data.Global.TotalConfirmed;
      wdeaths.innerText = data.Global.TotalDeaths;
      wrecovered.innerText = data.Global.TotalRecovered;
    });

  //INDIA CASES
  const cases = document.getElementById("icase");
  const deaths = document.getElementById("ideaths");
  const recovered = document.getElementById("irecovered");
  const api = `https://api.covid19api.com/dayone/country/india`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[data.length - 1]);
      console.log(data[data.length - 1].Confirmed);
      cases.innerText = data[data.length - 1].Confirmed;
      deaths.innerText = data[data.length - 1].Deaths;
      recovered.innerText = data[data.length - 1].Recovered;
    });

  //SEARCH CASES
  const ccases = document.getElementById("case");
  const cdeaths = document.getElementById("deaths");
  const crecovered = document.getElementById("recovered");
  const clicked = document.getElementById("click");
  const result = document.getElementById("result");
  const cname = document.getElementById("cname");

  clicked.addEventListener("click", () => {
    console.log("clicked");
    value = document.getElementById("search").value;
    value = value.replace(/\s/g, "-");
    if (value != "") {
      console.log(value);
      const searchapi = `https://api.covid19api.com/dayone/country/${value}`;
      fetch(searchapi)
        .then((response) => response.json())
        .then((data) => {
          result.style.opacity = "1";
          console.log(data[data.length - 1]);
          console.log(data[data.length - 1].Confirmed);
          cname.innerText = data[data.length - 1].Country;
          ccases.innerText = data[data.length - 1].Confirmed;
          cdeaths.innerText = data[data.length - 1].Deaths;
          crecovered.innerText = data[data.length - 1].Recovered;

          document.getElementById("search").value = "";
        });
    } else {
      alert("Enter Some Country Name!!!!");
    }
  });
});
