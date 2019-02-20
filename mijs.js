function main() {
  console.log("Hola");

  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var display = document.getElementById('display');

  uno.onclick = () => {
    display.innerHTML = display.innerHTML + "1";
  }
  dos.onclick = () => {
    display.innerHTML = display.innerHTML + "2";
  }
}
