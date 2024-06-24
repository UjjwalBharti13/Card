let main = document.getElementById("main");
let arr =["https://i.pinimg.com/236x/1b/7b/bd/1b7bbd98f83916a52e9235aa0e981339.jpg","https://i.pinimg.com/564x/e7/30/9c/e7309cb51418a07a56bc358a80c4b7e8.jpg","https://i.pinimg.com/474x/fc/0e/29/fc0e29be590f0f41746af131237d9861.jpg","https://i.pinimg.com/236x/36/47/4a/36474a849cf61768d2b4171149bbf441.jpg","https://i.pinimg.com/236x/0e/5c/e7/0e5ce701d84826b4c966e8607a6fee25.jpg","https://i.pinimg.com/236x/51/20/6d/51206d0e5e34c95ba582b3b060e2b339.jpg","https://i.pinimg.com/236x/77/22/3f/77223f2536ed57fe37fa3587688f0cac.jpg","https://i.pinimg.com/236x/2e/af/be/2eafbe9f12ad0781095ac8f43cea7790.jpg","https://i.pinimg.com/474x/64/27/bb/6427bbfc54775e5fdfc846522cd3a5c1.jpg","https://i.pinimg.com/236x/78/ca/df/78cadfb8994a98fc79096a119a967c4f.jpg"];
let s = "";
for(let i=1;i<=65;i++){
    let r =Math.floor(Math.random()*arr.length);
    s +=  `<div class="class"><img src=${arr[r]}></div>`;
}
main.innerHTML =s;