const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],r=["A","J","Q","K"],a=[],l=document.querySelector("#btnPedir"),n=document.querySelector("#btnDetener");document.querySelector("#btnNuevo");let d=document.querySelectorAll(".divCartas"),o=document.querySelectorAll("small"),s=(t=2)=>{e=i(),a=[];for(let r=0;r<t;r++)a.push(0);o.forEach(e=>e.innerText=0),d.forEach(e=>e.innerText=""),n.disabled=!1,l.disabled=!1},i=()=>{e=[];for(let a=2;a<=10;a++)for(let l of t)e.push(a+l);for(let n of t)for(let d of r)e.push(d+n);return _.shuffle(e)},u=()=>{if(0===e.length)throw"Ya no hay cartas en el deck";return e.pop()},c=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},$=(e,t)=>(a[t]=a[t]+c(e),o[t].innerText=a[t],a[t]),f=(e,t)=>{let r=document.createElement("img");r.src=`assets/cartas/${e}.png`,r.classList.add("carta"),d[t].append(r)},h=()=>{let[e,t]=a;setTimeout(()=>{t===e?alert("Nadie Gana"):e>21?alert("Computadora Gana"):t>21?alert("Jugador Gana"):alert("Computadora Gana")},130)},b=e=>{let t=0;do{let r=u();t=$(r,a.length-1),f(r,a.length-1)}while(t<e&&e<=21);h()};return l.addEventListener("click",()=>{let e=u(),t=$(e,0);f(e,0),t>21?(console.warn("Lo siento, perdiste"),l.disabled=!0,n.disabled=!0,b(t)):21===t&&(console.warn("21, genial!"),l.disabled=!0,n.disabled=!0,b(t))}),n.addEventListener("click",()=>{l.disabled=!0,n.disabled=!0,b(a[0])}),{nuevoJuego:s}})();