function whereAMl(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok) throw new Error("Problem with the geocoding request");
      return response.json();
    })
    .then((data) => {
      const place = data.city;
      const country = data.country;
      //console.log(`You are in ${place}, ${country}`);
      console.log(`You are in ${place}, ${country}`);
    })
    .catch((error) => {
      if (error.message.includes("403"))
        console.error("Rate limit exceeded!!!!");
      else console.error("Error:", error.message);
    });
}

whereAMl(52.508, 13.381);
