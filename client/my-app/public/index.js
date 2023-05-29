/**
 * Moves the map to display over Berlin
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersToMap(map, lat, log) {
  var parisMarker = new H.map.Marker({ lat: lat, lng: log });
  map.addObject(parisMarker);
}

function setMapDetails(log, lat) {
  var platform = new H.service.Platform({
    apikey: "cVKuqf_WlxXYkKJ4QTUXLZfuJAXpsyI7DcHBuwEqupE",
  });
  var defaultLayers = platform.createDefaultLayers();

  var map = new H.Map(
    document.getElementById("map"),
    defaultLayers.vector.normal.map,
    {
      center: { lat: lat, lng: log },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1,
    }
  );

  window.addEventListener("resize", () => map.getViewPort().resize());

  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

  var ui = H.ui.UI.createDefault(map, defaultLayers);

  addMarkersToMap(map, lat, log);
}

function fetchCoordinates() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const day = date.getDay();

  const time = `${hours}:${minutes}`;
  var url = `http://cms-env.eba-bqgbv5gm.us-east-1.elasticbeanstalk.com/get`;
  const params = {
    dist: "Noida",
    state: "Uttar Pradesh",
    day: day,
    time: time,
  };

  const searchParams = new URLSearchParams(params).toString();

  fetch(`${url}?${searchParams}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.Location.addresses);
      var address = data.Address;
      var log = data.Location.addresses.longitude;
      var lat = data.Location.addresses.latitude;
      document.getElementById(
        "address"
      ).innerText = `The hotspot for the district is ${address}`;
      document.getElementById("time").innerText = `Last updated at : ${date}`;
      setMapDetails(log, lat);
    })
    .catch((error) => console.error(error));
}
fetchCoordinates();
