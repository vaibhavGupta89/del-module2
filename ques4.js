function convertToCamelCase(inputText) {
  let camelCase = "";

  let nextCharCapital = false;

  for (let i = 0; i < inputText.length; i++) {
    const char = inputText[i];

    if (char === "_") {
      nextCharCapital = true;
    } else {
      camelCase += nextCharCapital ? char.toUpperCase() : char.toLowerCase();

      nextCharCapital = false;
    }
  }

  console.log(camelCase);
}

function inputArea() {
  const textarea = document.querySelector("textarea");

  const text = textarea.value;

  convertToCamelCase(text);
}
