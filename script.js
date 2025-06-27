const messageInput = document.getElementById("message");
const resultBox = document.getElementById("result");
const methodSelect = document.querySelector("select.option");
const buttons = document.querySelectorAll(".buttons button");

// Button bindings
buttons[0].addEventListener("click", encode);
buttons[1].addEventListener("click", decode);
buttons[2].addEventListener("click", clear);

function encode() {
  const text = messageInput.value;
  const method = methodSelect.value;
  let encode = "";

  switch (method) {
    case "reverse":
      encode = text.split("").reverse().join("");
      break;

    case "Caesar":
      encode = text.replace(/[a-z]/gi, (char) => {
        const shift = 3;
        const base = char >= "a" ? 97 : 65;
        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
      });
      break;

    case "symbol":
      const map = {
        A: "@", E: "3", I: "!", O: "0", S: "$", N: "4", F: "()", L: ">", D: "%",
        a: "@", e: "3", i: "!", o: "0", s: "$", n: "4", f: "()", l: ">", d: "%"
      };
      encode = text.replace(/[aeiosnfldAEIOSNFLD]/g, (c) => map[c] || c);
      break;
  }

  resultBox.textContent = encode;
  messageInput.value = "";
}

function decode() {
  const encode = messageInput.value;
  const method = methodSelect.value;
  let decode = "";

  switch (method) {
    case "reverse":
      decode = encode.split("").reverse().join("");
      break;

    case "Caesar":
      decode = encode.replace(/[a-z]/gi, (char) => {
        const shift = -3;
        const base = char >= "a" ? 97 : 65;
        return String.fromCharCode(((char.charCodeAt(0) - base + shift + 26) % 26) + base);
      });
      break;

    case "symbol":
      const reverseMap = {
        "@": "a", "3": "e", "!": "i", "0": "o", "$": "s", "4": "n", "()": "f", ">": "l", "%": "d"
      };
      decode = encode.replace(/\(\)|[@3!0$4>%]/g, (c) => reverseMap[c] || c);
      break;
  }

  resultBox.textContent = decode;
  messageInput.value = "";
}

function clear() {
  messageInput.value = "";
  resultBox.textContent = "";
}
