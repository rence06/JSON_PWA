fetch('imageData.json') // Replace 'your-data.json' with the URL or file path to your JSON data
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var imageData = data;

    displayImages(imageData);
  })
  .catch(function(error) {
    console.log('Error:', error);
  });

function displayImages(imageData) {
  var gridContainer = document.getElementById('gridContainer');

  imageData.forEach(function(image) {
    var column = document.createElement('div');
    column.className = 'col-md-3';

    var imageElement = document.createElement('img');
    imageElement.style = 'margin-top: 20px;'
    imageElement.src = image.thumbnailUrl;
    imageElement.className = 'img-fluid';

    var caption = document.createElement('div');
    caption.style = 'margin-top: 20px; font-size: 16px; text-transform: uppercase;'
    caption.className = 'caption';
    caption.textContent = image.title;

    column.appendChild(imageElement);
    column.appendChild(caption);
    gridContainer.appendChild(column);
  });
}
