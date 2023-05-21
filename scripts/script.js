fetch('userData.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var userData = [];

    data.forEach(function(item) {
      var id = item.id;
      var name = item.name;
      var username = item.username;
      var email = item.email;
      var street = item.address.street;
      var suite = item.address.suite;
      var city = item.address.city;
      var zipcode = item.address.zipcode;
      var lat = item.address.geo.lat;
      var lng = item.address.geo.lng;
      var phone = item.phone;
      var website = item.website;
      var companyName = item.company.name;
      var catchPhrase = item.company.catchPhrase;
      var bs = item.company.bs;

      userData.push({
        id: id,
        name: name,
        username: username,
        email: email,
        street: street,
        suite: suite,
        city: city,
        zipcode: zipcode,
        lat: lat,
        lng: lng,
        phone: phone,
        website: website,
        companyName: companyName,
        catchPhrase: catchPhrase,
        bs: bs
      });
    });

    createTable(userData);
  })
  .catch(function(err) {
    console.log(err);
  });

function createTable(dataInfo) {
  var table = document.getElementById('userTable');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < dataInfo.length; i++) {
    var row = document.createElement('tr');

    row.innerHTML = `
      <td>${dataInfo[i].id}</td>
      <td>${dataInfo[i].name}</td>
      <td>${dataInfo[i].username}</td>
      <td>${dataInfo[i].email}</td>
      <td>${dataInfo[i].street}</td>
      <td>${dataInfo[i].suite}</td>
      <td>${dataInfo[i].city}</td>
      <td>${dataInfo[i].zipcode}</td>
      <td>${dataInfo[i].lat}</td>
      <td>${dataInfo[i].lng}</td>
      <td>${dataInfo[i].phone}</td>
      <td>${dataInfo[i].website}</td>
      <td>${dataInfo[i].companyName}</td>
      <td>${dataInfo[i].catchPhrase}</td>
      <td>${dataInfo[i].bs}</td>
    `;

    fragment.appendChild(row);
  }

  table.appendChild(fragment);
}