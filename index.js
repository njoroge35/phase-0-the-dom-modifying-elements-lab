// Write your code here!// Write your code here!
const element = document.getElementById("main");
element.remove();

const newHeader= document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.setAttribute("id",'victory');

// const firstName= "Grace";
newHeader.innerHTML="Grace is the champion";