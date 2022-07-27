const allHeaders = document.querySelectorAll('h1');

function resetCounter() {
  allHeaders.forEach((elem) => {
    elem.style.counterReset = 'section'
  });
}
