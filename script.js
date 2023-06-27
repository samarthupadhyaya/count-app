const incr = document.getElementById("increment");
const decrem = document.getElementById("decrement");
const resetValue = document.getElementById("reset");
const displayVal = document.getElementById("displayval");

incr.addEventListener("click", () => {
  const val = Number(displayVal.innerText);
  if (val >= 10) {
    alert("10+ values are not allowed");
  } else {
    displayVal.innerText = val + 1;
  }
});


decrem.addEventListener("click", () => {
  const val = Number(displayVal.innerText);
  if (val > 0) {
    displayVal.innerText = val - 1;
  } else {
    alert("Negative values are not allowed");
  }
});


resetValue.addEventListener("click", () => {
  displayVal.innerText = 0;
});

displayVal.addEventListener("click",()=>{
   displayVal.innerText=val;

});



