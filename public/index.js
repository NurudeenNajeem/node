const btn = document.getElementById('btn');
const btn1 = document.querySelector('.btn1');
const h2 = document.querySelector('.count')
const save_btn = document.getElementById('save')
console.log(btn1);
var counts = 0;
function increment(){
     counts = counts + 1;
     h2.innerHTML = counts;
};

function save(){
     let countStr = counts + " - "
     console.log(counts)
     save_btn.innerHTML +=countStr
     h2.textContent = 0;
     counts = 0
}