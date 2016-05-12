'use strict';

document.addEventListener('DOMContentLoaded', function() { // This waits for the content to load before running the JavaScript.
// -------------------------------------------------------





  
  var getTags = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, div, span, a'); 

  for(var i = 0; i < getTags.length; i++) {
    var current = getTags[i].innerHTML;
    // console.log(current);

    var fluffaliser = {
      'isis': 'Misunderstood People',
      'isil': 'Misunderstood People',
      'gun': 'metal thingy',
      'drugs': 'sweets',
      'murder': 'regretable nastiness',
      'drunk': 'a bit wobbly',
      'manslaughter': 'silly accident'
    };
    
    var vitriol = {
      'david cameron':'Pig-head fucker',
      'isis':'bunch of twats',
      'katie hopkins':'Foul Stain on Humanity',
      'donald trump':'Twat-Haired Lunatic',
      'trump':'Racist'
    };

    var villa = {
      'aston villa':'Shitty Midland Club',
      'fabian delph':'The Snake',
      'delph':'Mr.Snake',
      'villa':'crappy Villa',
      'david moyes':'Dour Scot',
      'moyes':'Dour Scot',
      'nigel pearson':'Angry Lunatic',
      'steve bruce':'Lumpy Nose',
      'remi garde':'The French Manager',
      'relegation':'extermination',
      'relegated':'exterminated',
      'gabby agbonlahor':'disgraceful player',
      'shaun dyche': 'Ginger Goatee man'
    };


    function replaceAll(current,mapObj){
      var res = new RegExp(Object.keys(mapObj).join("|"),"gi");

      return current.replace(res, function(matched){
        return mapObj[matched.toLowerCase()];
      });
    }


    // console.log(replaceAll(current,mapObj2));

    getTags[i].innerHTML = replaceAll(current,villa);
  }






// -------------------------------------------------------
})