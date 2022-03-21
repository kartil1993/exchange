let cpar = document.querySelector("#parid");
let inpnumber = document.querySelector("#inputNumber");
let result = document.querySelector("#theResult");
let selectValuetow = document.querySelector("#selectValuetow");
let selectValueone = document.querySelector("#selectvalueone");
let mybotton = document.querySelector("button");

mybotton.onclick = function click() {
  let num = inpnumber.value;
  result.style.display = "block";
  fetch(
    "http://data.fixer.io/api/latest?access_key=8703d4282b82b77e5637e0d9f466f51d&format=1"
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let a = Object.keys(data.rates);
      let b = Object.values(data.rates);
      for (i = 0; i < a.length; i++) {
        if (a[i] === selectValueone.value) {
          if (b[i] > 1) {
            let c = num / b[i];

            for (v = 0; v < a.length; v++) {
              if (a[v] === selectValuetow.value) {
                if (b[v] > c) {
                  let d = c * b[v];
                  
                  cpar.innerText = `${d} ${a[v]}`;
                } else {
                  let d = c * b[v];
                 
                  cpar.innerText = `${d} ${a[v]}`;
                }
              }
            }
          } else {
            let c = num / b[i];

            for (t = 0; t < a.length; t++) {
              if (a[t] === selectValuetow.value) {
                if (b[t] < c) {
                  let d = c * b[t];
                  cpar.innerText = `${d} ${a[t]} `;
                } else {
                  let d = c / b[t];
                  cpar.innerText = `${d} ${a[t]} `;
                }
              }
            }
          }
        }
      }
    });
};
