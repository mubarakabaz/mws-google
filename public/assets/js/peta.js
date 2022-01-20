  function findLocation(x,y) {
    // console.log(x,y);
    for (var i=0; i< places.length;i++) {
      if (places[i].lokasi[0]==x &&
        places[i].lokasi[1]==y) {
          return i;
        }
      }
      return -1;
    }

    function showLocation(e) {
      //console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);
      let ix= findLocation(e.latlng.lat, e.latlng.lng);
      if (ix >= 0) {
        img.src = places[ix].gambar;
        par.textContent=places[ix].review;
      }
    }

    (async function f(url) {
      try {
        const resp = await(fetch(url));
        const resp2 = await resp.json();
        localStorage.setItem('places');
      }
      catch (e) {
        console.log(e);
      }
    })();

    let gmb= document.getElementById("gmb");
    let rev= document.getElementById("review");
    let img= document.createElement('img');
    let par= document.createElement('p');
    gmb.appendChild(img);
    rev.appendChild(par);

    const URL = "../assets/data/peta.json";

    // f(URL);

    /*let places = [ ];
    fetch(URL).then(function(response){
      if(response.status !== 200){
        // HTTP status
        console.log('Ada Kesalaha. Status Code: ' + response.status);
        throw response.statusText;
      }
      return response.json()
    }).then(resp => {
      let places = resp.places;
      localStorage.setItem('places', JSON.stringify(resp.places));
    }).catch(function(error){
      console.log(error);
    });*/

      let places = JSON.parse(localStorage.getItem('places'));
      for (var p of places) {
        var marker= L.marker(p.lokasi).addTo(mymap).bindPopup(p.coffee);
        marker.on('click', showLocation);
      }
