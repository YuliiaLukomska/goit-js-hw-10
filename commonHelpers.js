import"./assets/reset-a3b7b90b.js";import{f as m,i as f}from"./assets/vendor-651d7991.js";let r,i=null;const e=document.querySelector("button[data-start]");e.disabled=!0;e.classList.add("disable");const n=document.querySelectorAll(".value");e.addEventListener("click",b);m("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),r=t[0],r-new Date<0?(e.disabled=!0,e.classList.add("disable"),f.error({title:"Error",message:"Please choose a date in the future",class:"toast",position:"topRight",iconUrl:"../img/left-close.svg",titleColor:"white",messageColor:"white",timeout:!1,backgroundColor:"#EF4040"})):(e.disabled=!1,e.classList.remove("disable"))}});function h(t){const l=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:d,minutes:c,seconds:u}}function s(t){return t.toString().padStart(2,"0")}function b(){e.disabled=!0,e.classList.add("disable"),i=setInterval(()=>{const t=Date.now(),a=r-t;a<1e3&&clearInterval(i);const o=h(a);n[0].textContent=s(o.days),n[1].textContent=s(o.hours),n[2].textContent=s(o.minutes),n[3].textContent=s(o.seconds)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
