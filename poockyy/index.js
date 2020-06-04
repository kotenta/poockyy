const btn = document.getElementById("get");
const area = document.getElementById("get_area");
btn.addEventListener("click",function(){
  let countPocky = area.childElementCount;
  if(countPocky < 22){
    const pky = document.createElement("p");
    area.appendChild(pky);
  } else {
    alert("もう全部出た");
  }
});

