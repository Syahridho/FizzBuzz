let angka = document.getElementById("angka");
let btn = document.querySelector("button");
let hasil = document.getElementById("hasil");

btn.onclick = function () {
  for (let i = 0; i <= angka.value; i++) {
    if (i == 0) {
      hasil.innerHTML += `<li>0</li>`;
    } else if (i % 3 == 0 && i % 5 == 0) {
      hasil.innerHTML += `<li class="fizzbuzz">FizzBuzz</li>`;
    } else if (i % 3 == 0) {
      hasil.innerHTML += `<li class="fizz">Fizz</li>`;
    } else if (i % 5 == 0) {
      hasil.innerHTML += `<li class="buzz">Buzz</li>`;
    } else {
      hasil.innerHTML += `<li>${i}</li>`;
    }
  }
};
