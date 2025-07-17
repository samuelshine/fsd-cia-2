function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        document.getElementById("output").innerText = "Geolocation is not supported by this browser.";
      }
      return false;
    }

    function showPosition(pos) {
      var latitude = pos.coords.latitude;
      var longitude = pos.coords.longitude;
      var coords = latitude + ',' + longitude;
      document.getElementById('google_map').setAttribute('src', 'https://maps.google.co.uk?q=' + coords + '&z=15&output=embed');
    }