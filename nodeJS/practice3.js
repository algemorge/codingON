function cgBgColor(newColor) {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         document.body.style.backgroundColor = newColor;
         resolve();
      }, 1000)
   })
}

cgBgColor('red')
   .then(function () {
      return cgBgColor('orange');
   })
   .then(function () {
      return cgBgColor('yellow')
   })
   .then(function () {
      return cgBgColor('grenn')
   })
   .then(function () {
      return cgBgColor('blue')
   })