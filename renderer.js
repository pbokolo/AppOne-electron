const info = document.querySelector("#info");
const btn = document.querySelector("#btn");
info.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const queryMain = async () => {
  const response = await window.versions.ping();
  console.log(response);
};

btn.addEventListener("click", queryMain);
