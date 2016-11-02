$(document).ready(function(){
  var randomlyGenerated = randomNumber(1,4);
  var color;
  switch(randomlyGenerated) {
    case 1:
      color = "Red";
      break;
    case 2:
      color = "Blue";
      break;
    case 3:
      color = "Purple";
      break;
    case 4:
      color = "Green";
      break;

    default:

  }
  var arrayRandom = []; //trying to make an array of random non-repeating numbers
  function randomArrray(){
  for(var i = 3; i >= 0; i--){
    arrayRandom.push(randomNumber(1,4))
  }
  randomArrray()
  console.log(arrayRandom);
  }

  $('#pickcolor').append('Which color is <div class="' + color + '"> ' + color + ' </div>?');
  $('h2').append('<div class="box red" name="Red"> </div>',
                  '<div class="box blue" name="Blue"> </div>',
                  '<div class="box purple" name="Purple"> </div>',
                  '<div class="box green" name="Green"> </div>');
  $('.box').hover(function(){
    $(this).animate({opacity: '1'}, 200);
  }, function(){
    $(this).animate({opacity: '.7'}, 200);
  });
  // $('.box').mouseover(hoverColor); //doesnt work
  $('.box').on("click", matchColor);

  // function hoverColor(){
  //   setTimeout(function(){
  //     $(this).animate(
  //       {marginTop: '-=15px'}
  //     ,
  //     function(){
  //
  //     });}, 2000);
  // }



  function matchColor(){
    var attrName = $(this).attr('name')
    if(color == attrName){
      $('#colorHeader').empty().append('Correct. Good Job I guess');



        $(this).fadeTo('slow', 0.33);
        $(this).animate({marginTop: '-=15px'});
        setTimeout(function(){location.reload()}, 2000);



    }else {
      $('#colorHeader').empty().append('Incorrect. Bad');

    }

  }


  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }




});
