import{c as h}from"./assets/left-close-b991437f.js";import{f as v,i as b}from"./assets/vendor-651d7991.js";let c,i=null;const t=document.querySelector("button[data-start]"),n=document.querySelector("#datetime-picker");t.disabled=!0;let l=!1;const a=document.querySelectorAll(".value");t.addEventListener("click",y);v("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){c=e[0],c-new Date<0?(t.disabled=!0,t.classList.remove("active-btn"),b.error({title:"Error",message:"Please choose a date in the future",position:"topRight",iconUrl:h,titleColor:"white",messageColor:"white",timeout:!1,backgroundColor:"#EF4040"})):(t.disabled=!1,t.classList.add("active-btn"))}});function p(e){const d=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:u,minutes:m,seconds:f}}function r(e){return e.toString().padStart(2,"0")}function y(){l&&clearInterval(i),l=!0,t.disabled=!0,t.classList.remove("active-btn"),n.disabled=!0,n.classList.add("disable-input"),i=setInterval(()=>{const e=Date.now(),s=c-e;s<1e3&&(clearInterval(i),n.disabled=!1,n.classList.remove("disable-input"));const o=p(s);a[0].textContent=r(o.days),a[1].textContent=r(o.hours),a[2].textContent=r(o.minutes),a[3].textContent=r(o.seconds)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
