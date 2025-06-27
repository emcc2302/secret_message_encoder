const messageInput = document.getElementById("message");
const resultBox = document.getElementById("result");
const methodSelect = document.querySelector("select.option");
const buttons = document.querySelectorAll(".buttons button");

// Assign buttons
buttons[0].addEventListener("click", encode);
buttons[1].addEventListener("click", decode);
buttons[2].addEventListener("click", clear);

function encode() {
  const originalText = messageInput.value;
  const method = methodSelect.value;
  let encodedText = "";

  switch (method) {
    case "reverse":
      encodedText = originalText.split("").reverse().join("");
      break;

    case "Caesar":
      encodedText = originalText.replace(/[a-z]/gi, (char) => {
        const shift = 3;
        const base = char >= "a" ? 97 : 65;
        return String.fromCharCode(
          ((char.charCodeAt(0) - base + shift) % 26) + base
        );
      });
      break;

    case "symbol":
      const map = {
        A: "@",
        E: "3",
        I: "!",
        O: "0",
        S: "$",
        N: "4",
        "F":"()",
        "L":">",
        "D":"%",
        a: "@",
        e: "3",
        i: "!",
        o: "0",
        s: "$",
        n: "4",
        "f":"()",
        "l": ">",
         "d":"%":
        
      };
      encodedText = originalText.replace(/[aeiosnfldAEIOSNFLD]/g, (c) => map[c] || c);
      break;
  }

  resultBox.textContent = encodedText;
  messageInput.value = ""; // ✅ Clear input after encoding
}

function decode() {
  const encodedText = messageInput.value;
  const method = methodSelect.value;
  let decodedText = "";

  switch (method) {
    case "reverse":
      decodedText = encodedText.split("").reverse().join("");
      break;

    case "Caesar":
      decodedText = encodedText.replace(/[a-z]/gi, (char) => {
        const shift = -3;
        const base = char >= "a" ? 97 : 65;
        return String.fromCharCode(
          ((char.charCodeAt(0) - base + shift + 26) % 26) + base
        );
      });
      break;

    case "symbol":
      const reverseMap = {
        "@": "a",
        3: "e",
        "!": "i",
        0: "o",
        $: "s",
        4: "n",
        "()":"f",
          ">":"l",
        "%":"d"
      };
      decodedText = encodedText.replace(/[@3!0$4()>%]/g, (c) => reverseMap[c] || c);
      break;
  }

  resultBox.textContent = decodedText;
  messageInput.value = ""; // ✅ Clear input after decoding
}

function clear() {
  messageInput.value = "";
  resultBox.textContent = "";
}



// const messageInput=document.getElementById("message");
// const resultBox=document.getElementById("result");
// const methodSelect = document.querySelector("select.option");
// const buttons = document.querySelectorAll(".buttons button");


// buttons[0].addEventListener("click",encode);
// buttons[1].addEventListener("click",decode);
// buttons[2].addEventListener("click",clear);

// function encode(){
//     const text=messageInput.value;
//     const method=methodSelect.value;
//     let encode=" ";

// switch(method){
//     case "reverse":
//         encode=text.split("").reverse().join("");
//         break;

//      case "Caesar":
//       encode = text.replace(/[a-z]/gi, char => {
//         const shift = 3;
//         const base = char >= 'a' ? 97 : 65;
//         return String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
//       });
//       break;

//       case "symbol":
//       const map = { A: "@", E: "3", I: "!", O: "0", S: "$",N:"4", a: "@", e: "3", i: "!", o: "0", s: "$",n:"4" };
//       encode = text.replace(/[aeiosnAEIOSN]/g, c => map[c] || c);
//       break;
// }
// resultBox.textContent=encode;

// }


// // function decode() {
// //   const method = methodSelect.value;
// //   const encoded = resultBox.textContent;
// //   let decoded = "";

// //   switch (method) {
// //     case "reverse":
// //       decode = encoded.split("").reverse().join("");
// //       break;

// //     case "Caesar":
// //       decode = encoded.replace(/[a-z]/gi, char => {
// //         const shift = -3;
// //         const base = char >= 'a' ? 97 : 65;
// //         return String.fromCharCode((char.charCodeAt(0) - base + shift + 26) % 26 + base);
// //       });
// //       break;

// //     case "symbol":
// //       const reverseMap = { "@": "a", "3": "e", "!": "i", "0": "o", "$": "s","4":"n" };
// //       decode = encoded.replace(/[@3!0$4]/g, c => reverseMap[c] || c);
// //       break;
// //   }

// //   resultBox.textContent = decode;
// // }

// function decode() {
//   const method = methodSelect.value;
//   const encode = messageInput.value; 
//   let decode = "";

//   switch (method) {
//     case "reverse":
//       decode = encode.split("").reverse().join("");
//       break;

//     case "Caesar":
//       decode = encode.replace(/[a-z]/gi, (char) => {
//         const shift = -3;
//         const base = char >= "a" ? 97 : 65;
//         return String.fromCharCode(
//           ((char.charCodeAt(0) - base + shift + 26) % 26) + base
//         );
//       });
//       break;

//     case "symbol":
//       const reverseMap = { "@": "a", 3: "e", "!": "i", 0: "o", $: "s" };
//       decode = encode.replace(/[@3!0$]/g, (c) => reverseMap[c] || c);
//       break;
//   }

//   resultBox.textContent = decode;
// }


// function clear() {
//   messageInput.value = "";
//   resultBox.textContent = "";
// }
