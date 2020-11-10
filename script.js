var containerDiv = document.getElementById("container");
var charArray = containerDiv.innerHTML.split("");

function divWrapper(x, index) {
  return `<div class="text" style="animation-delay: ${index}s">${x}</div>`
}

var result = charArray.map(divWrapper).join("")

containerDiv.innerHTML = result