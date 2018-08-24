let array = [];

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
   if (i === 1) {
    array.push(`I am ${i} strange loop.`);
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  let theNumber = n;
  while (theNumber > 0) {
    console.log(theNumber);
    theNumber = theNumber - 1;
  }
  return "done";
}


function doWhileLoop(array) {
  function incrementVariable() {
  var i = 0;
  i = i + 1;
}
  do {
  array.pop();
  incrementVariable();
  }
  while (array.length > 0 && incrementVariable());
}
