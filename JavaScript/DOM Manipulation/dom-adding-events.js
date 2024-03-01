const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

  function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  const btn3 = document.querySelector('#btn')
  
  // METHOD 2
  btn3.onclick = alertFunction;
  
  // METHOD 3
  btn3.addEventListener('click', alertFunction);
  


  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });