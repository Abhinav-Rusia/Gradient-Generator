const colorInput = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const textarea = document.querySelector("textarea");
const body = document.querySelector("body");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
  const randomHex = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
  return `#${randomHex}`;
};

const generateGradient = (isRandom) => {
  if (isRandom) {
    colorInput[0].value = getRandomColor();
    colorInput[1].value = getRandomColor();
  }
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInput[0].value}, ${colorInput[1].value})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`;
  body.style.background = gradient;
};

const copyCode = () => {
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = "Code Copied";
  setTimeout(() => (copyBtn.innerText = "Copy Code"), 1000);
};

colorInput.forEach((input) => {
  input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));

refreshBtn.addEventListener("click", () => {
  generateGradient(true);
});

copyBtn.addEventListener("click", copyCode);
