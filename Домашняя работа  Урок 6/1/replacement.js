window.onload = function () {
    var image = document.getElementsByTagName('img');
    console.log(image);
    for (var i = 0; i < image.length; i++) {
        image[i].onclick = alternativeBigPicture;
    }

};

function alternativeBigPicture(alt) {
    var bigDiv = document.getElementById('bigPicture'); // огромная картинка
        bigDiv.innerHTML = '';
    var eventElement = event.target;
        console.log(eventElement);

    var imageParts = eventElement.id.split('_');

    var insert = imageParts[1];
    var imageElement = document.createElement('img');
        imageElement.insert = insert;
    
    imageElement.onload = function () {alert('Картинка присутствует!')};
    imageElement.onerror = function () {alert('Картинка отсутствует')};
    
    appDiv.appendChild(imageElement);
};