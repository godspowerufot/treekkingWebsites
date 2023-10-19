const swiftUpElements = document.querySelectorAll('.swift-up-text');

swiftUpElements.forEach(elem => {

  const words = elem.textContent.split(' ');
  elem.innerHTML = '';

  words.forEach((el, index) => {
    words[index] = `<span><i>${words[index]}</i></span>`;
  });

  elem.innerHTML = words.join(' ');

  const children = document.querySelectorAll('span > i');
  children.forEach((node, index) => {
    node.style.animationDelay = `${index * .2}s`;
  });

});