var view;


view = ['https://i.ibb.co/bB7FDBN/9.jpg', 'https://i.ibb.co/pjr7xK1/1.jpg', 'https://i.ibb.co/60rRxw4/2.jpg', 'https://i.ibb.co/w0S6JqJ/4.jpg', 'https://i.ibb.co/StxLvzy/5.jpg', 'https://i.ibb.co/nB78zgL/6.jpg', 'https://i.ibb.co/xDbxm0n/7.jpg', 'https://i.ibb.co/GxGbmn0/8.jpg', 'https://i.ibb.co/SRpZSBd/22.jpg', 'https://i.ibb.co/yf4n5Ks/10.jpg', 'https://i.ibb.co/7nZGwc7/11.jpg', 'https://i.ibb.co/tMxDLFn/12.jpg', 'https://i.ibb.co/sCbvcd7/13.jpg', 'https://i.ibb.co/F6G5q4T/15.jpg', 'https://i.ibb.co/0tFqwVX/16.jpg', 'https://i.ibb.co/0spVWnR/17.jpg', 'https://i.ibb.co/D5NdDg9/18.jpg', 'https://i.ibb.co/wzfvj6S/19.jpg', 'https://i.ibb.co/vhcvYcG/20.jpg', 'https://i.ibb.co/dmNMd4S/21.jpg', 'https://i.ibb.co/SRpZSBd/22.jpg', 'https://i.ibb.co/J2JR8WW/25.jpg', 'https://i.ibb.co/34qKnSt/26.jpg', 'https://i.ibb.co/NLvJkQH/27.jpg'];


document.getElementById('next').addEventListener('click', (event) => {
  view.push(view.shift());
  let element_myphotos2 = document.getElementById('myphotos2');
  element_myphotos2.setAttribute("src", view[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  view.unshift(view.pop());
  let element_myphotos22 = document.getElementById('myphotos2');
  element_myphotos22.setAttribute("src", view[0]);

});