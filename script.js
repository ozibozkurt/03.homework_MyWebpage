var view;


view = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg'];


document.getElementById('next1').addEventListener('click', (event) => {
  view.push(view.shift());
  let element_myphotos = document.getElementById('myphotos');
  element_myphotos.setAttribute("src", view[0]);

});

document.getElementById('previous1').addEventListener('click', (event) => {
  view.unshift(view.pop());
  let element_myphotos2 = document.getElementById('myphotos');
  element_myphotos2.setAttribute("src", view[0]);

});