(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework

var carImg = document.querySelectorAll('.data-ref'),
    carName = document.querySelector('.modelName'),
    carPrice = document.querySelector('.priceInfo'),
    carDesc = document.querySelector('.modelDetails'),
    appliedClass;

    function changeElements(){
      let objectIndex = carData[this.id];

      carName.firstChild.nodeValue = objectIndex.car;
      carPrice.firstChild.nodeValue = objectIndex.price;
      carDesc.firstChild.nodeValue = objectIndex.text;

    }

    // carImg.forEach(function(image, index) {
    // image.addEventlistener('click', changeElements, false);

    for (var i=0; i < carImg.lenght; i++){
     carImg[i].addEventlistener('click', changeElements, false);
  }





})();
