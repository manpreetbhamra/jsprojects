window.addEventListener("load", () => {
  let long;
  let lat;
  let description = document.querySelector(".description h1");
  let degree = document.querySelector(".degree");
  let timezone = document.querySelector(".timezone");
  let icon = document.querySelector(".icon");
  let section = document.querySelector(".section");
  let temp;
  let unit = document.querySelector(".unit");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      // console.log(position);

      const proxy = "https://cors-anywhere.herokuapp.com/";

      const apikey = "0dcd1f0abe1a3cbd311186340c1dd62a";

      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0dcd1f0abe1a3cbd311186340c1dd62a`;
      // const api = `http://api.openweathermap.org/data/2.5/weather?lat=-78.085439&lon=71.544315&appid=0dcd1f0abe1a3cbd311186340c1dd62a`;

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          // const { temperature, summary } = data.currently;

          //Set DOM elements
          //Degree
          degree.textContent = Math.round(
            ((data["main"]["temp"] - 273.15) * 9) / 5 + 32
          );

          section.addEventListener("click", () => {
            if (unit.innerText === "F") {
              degree.textContent = Math.round(data["main"]["temp"] - 273.15);
              unit.innerText = "C";
            } else if (unit.innerText === "C") {
              degree.textContent = data["main"]["temp"];
              unit.innerText = "K";
            } else {
              degree.textContent = Math.round(
                ((data["main"]["temp"] - 273.15) * 9) / 5 + 32
              );
              unit.innerText = "F";
            }
          });
          //Weather Description
          description.textContent = data["weather"][0][
            "description"
          ].toUpperCase();
          //Current TimeZone
          timezone.textContent = data["name"];
          //Weather Icon
          icon.src = `http://openweathermap.org/img/wn/${data["weather"][0]["icon"]}@2x.png`;
        });
    });
  }
});
