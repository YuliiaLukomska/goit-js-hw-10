import{c as m}from"./assets/left-close-b991437f.js";import{f,i as h}from"./assets/vendor-651d7991.js";let s,i=null;const e=document.querySelector("button[data-start]");e.disabled=!0;const n=document.querySelectorAll(".value");e.addEventListener("click",b);f("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),s=t[0],s-new Date<0?(e.disabled=!0,e.classList.remove("active-btn"),h.error({title:"Error",message:"Please choose a date in the future",class:"toast",position:"topRight",iconUrl:m,titleColor:"white",messageColor:"white",timeout:!1,backgroundColor:"#EF4040"})):(e.disabled=!1,e.classList.add("active-btn"))}});function v(t){const c=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:l,minutes:d,seconds:u}}function r(t){return t.toString().padStart(2,"0")}function b(){e.disabled=!0,e.classList.remove("active-btn"),i=setInterval(()=>{const t=Date.now(),a=s-t;a<1e3&&clearInterval(i);const o=v(a);n[0].textContent=r(o.days),n[1].textContent=r(o.hours),n[2].textContent=r(o.minutes),n[3].textContent=r(o.seconds)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
