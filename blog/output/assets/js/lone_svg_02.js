(function() {
  var fn = function() {
    var loadSvgImage = null;
    var move1 = null;
    var move2 = null;

    loadSvgImage = function(uri,width,height,className,imageName) {
      var deferred = Q.defer();
      var imageElement = null;

      imageElement = document.createElementNS("http://www.w3.org/2000/svg", "image");
        imageElement.addEventListener('load', function() { 
          console.log(imageName + ' loaded by loadSvgImage');
          deferred.resolve(imageElement); 
        });

        if (typeof className === 'string') {
          imageElement.setAttribute('class',className);
        }
        if (typeof imageName === 'string') {
          imageElement.setAttribute('name',imageName);
          imageElement.setAttribute('id','image' + imageName);
        }

        imageElement.width.baseVal.value = width;
        imageElement.height.baseVal.value = height;
        imageElement.href.baseVal = uri; // This triggers the image load from the uri

        return deferred.promise;
    };
    loadSvgImage( '/assets/images/The_Spaniards_101-El_Estudiante_de_la_tuna.jpg',
      557, 987,
      'The_Spaniards',
      'El_Estudiante_de_la_tuna'
    ).then(
      function(theImage) {
        var svgele = null;
        document.getElementById('svgdefs').appendChild(theImage);

        svgele = document.createElementNS("http://www.w3.org/2000/svg", "use");
          svgele.setAttribute("id", "EstudianteScaled");
          svgele.setAttributeNS("http://www.w3.org/1999/xlink","href", "#imageEl_Estudiante_de_la_tuna");
            svgele.setAttributeNS(null,"transform", "scale(0.2)");
            document.getElementById('svgdefs').appendChild(svgele);

            svgele = document.createElementNS("http://www.w3.org/2000/svg", "use");
              svgele.setAttribute("id", "Estudiante");
              svgele.setAttributeNS("http://www.w3.org/1999/xlink","href", "#EstudianteScaled");
                document.getElementById('g2').appendChild(svgele);

                move1();
      });
      move1 = function() {
        var at = null;
        var endHandler = null;
        var target = document.getElementById('Estudiante');

        at = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");

          endHandler = function() {
            var agr = document.getElementById('animations');
            target.x.baseVal.value = 200; 
            target.y.baseVal.value = 100; 
            at.removeEventListener('endEvent',endHandler);
            while (agr.hasChildNodes()) {
              agr.removeChild(agr.firstChild);
            };
            move2();
          };
          at.setAttributeNS(null,"attributeName", "transform");
          at.setAttributeNS(null,"attributeType", "XML");
          at.setAttributeNS(null,"type", "translate");
          //at.setAttributeNS(null,"from", "0 0");
          at.setAttributeNS(null,"to", "200 100");
          at.setAttributeNS(null,"dur", "6s");
          at.setAttributeNS(null,"fill", "freeze");
          at.addEventListener('endEvent',endHandler);
          document.getElementById('animations').appendChild(at);
          at.setAttributeNS("http://www.w3.org/1999/xlink","href", "#Estudiante");
      };
      move2 = function() {
        var at = null;
        var endHandler = null;
        var target = document.getElementById('Estudiante');

        at = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");

          endHandler = function() {
            var agr = document.getElementById('animations');
            target.x.baseVal.value = 0; 
            target.y.baseVal.value = 0; 
            at.removeEventListener('endEvent',endHandler);
            while (agr.hasChildNodes()) {
              agr.removeChild(agr.firstChild);
            };
            move1();
          };
          at.setAttributeNS(null,"attributeName", "transform");
          at.setAttributeNS(null,"attributeType", "XML");
          at.setAttributeNS(null,"type", "translate");
          //at.setAttributeNS(null,"from", "0 0");
          at.setAttributeNS(null,"to", "0 0");
          at.setAttributeNS(null,"dur", "6s");
          at.setAttributeNS(null,"fill", "freeze");
          at.addEventListener('endEvent',endHandler);
          document.getElementById('animations').appendChild(at);
          at.setAttributeNS("http://www.w3.org/1999/xlink","href", "#Estudiante");
      };
  };
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
})();

