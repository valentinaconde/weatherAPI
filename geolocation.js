function geoFindMe() {
    let output = document.getElementById('out')
    
    let lat
    let long

    if (!navigator.geolocation) {
        output.innerHTML = '<p>No se puede establecer la conexion con la ubicacion de su computadora</p>'
    }

    function success(position) {
        lat = position.coords.latitude
        long = position.coords.longitude

        output.innerHTML = `<p>Latitude is ${lat} and Longitude is ${long}</p>`
        console.log(lat,long)


        fetch(`https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}&limit=1`)
        .then(response => response.json())
        .then(data => console.log(data));

    }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    };

    navigator.geolocation.getCurrentPosition(success, error);


    















}




