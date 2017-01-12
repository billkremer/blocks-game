$(function () {
  var howManyBlocks = 0;
  var formData = {};

  $('form').change('#numberOfBlocks', function () {
    event.preventDefault();

    var formAsArray = $(this).serializeArray();
    formAsArray.forEach(function (input) {
    formData[input.name] = input.value;
    }); // moves info from form into an array


    console.log(formData.howManyBlocks);

    $('#putBlocksHere').children().remove();
    for (var i = 0; i < formData.howManyBlocks; i++ ) {
    $('#putBlocksHere').append('<div class="newBox" style="background-color:' + randColor(colors) + '"></div>');
    };
  });  // appends however many newBoxes to the DOM

});


  // $('button').click( function () {
  //
  //
  //
  //
  //   for (var i = 0, )
  //   $('#putBlocksHere').append('<div class="newBox" style="background-color:' + randColor(colors) +'""><p>x</p></div>');
  // });  // appends a newBox to the DOM
  //
  // $('#putBlocksHere').on('click','.newBox' ,function () {
  //   $(this).css('background-color', 'black');
  // }); // changes the blocks black when clicked
  //
  // $('#putBlocksHere').on('click', 'p', function () {
  //   $(this).parents('div').fadeOut(2000, function () {
  //        $(this).remove();
  //   });  // fades out block, then removes 'div'
  // });    // when the paragraph (x) is clicked
// });


colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'brown', 'gray', 'white', 'pink', 'tan'];

function randColor (colorArray) {
  return  colorArray[Math.floor(Math.random() * colorArray.length)];
};  // don't forget that .length will be one greater than the final index.
    // this function returns a common color in a string name.

randColor(colors); // tests colors
