import"./assets/reset-a3b7b90b.js";import{f as r}from"./assets/vendor-992cd48f.js";let a;const e=document.querySelector("button[data-start]");e.disabled=!0;r("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),a=t[0],a-new Date<0?(e.disabled=!0,alert("Please choose a date in the future")):e.disabled=!1}});function n(){setInterval(()=>{},1e3)}e.addEventListener("click",n);
//# sourceMappingURL=commonHelpers.js.map
