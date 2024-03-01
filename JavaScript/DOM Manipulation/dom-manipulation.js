const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const red = document.querySelector('#red');

const content1 = document.createElement('p');
content1.classList.add('content1');
content1.textContent = "Hey I'm red!";
content1.style.cssText = 'color: red';

container.appendChild(content1);

const blue = document.querySelector('#blue');

const content2 = document.createElement('h3');
content2.classList.add('content2');
content2.textContent = "I'm a blue h3!";
content2.style.cssText = 'color: blue';

container.appendChild(content2);



const pink= document.querySelector('#pink');

const content3 = document.createElement('div', 'h1', 'p');
content3.classList.add('content3');
let h1= document.createElement('content3');
   h1.innerHTML = "I'm in a div!";
let p= document.createElement('content3');
p.textContent = "Me too!"  
content3.textContent = "I'm in a div!";
content3.style.cssText = 'color: black; background: pink;';
content3.style.border = "thick solid black";

container.appendChild(content3);