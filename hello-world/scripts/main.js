var myImage = document.querySelector('img');

myImage.onclick = function() {
  var imgSrc = myImage.getAttribute('src');
  if (imgSrc === 'images/hello_world.png') {
    myImage.setAttribute('src', 'images/hello_world2.png');
  } else {
    myImage.setAttribute('src', 'images/hello_world.png');
  }
}

