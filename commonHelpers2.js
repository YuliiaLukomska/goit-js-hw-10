import"./assets/reset-a3b7b90b.js";import{i as o}from"./assets/vendor-651d7991.js";const l=document.querySelector("form");l.addEventListener("submit",t=>{a(t).then(e=>o.success({title:"OK",message:`Fulfilled promise in ${e}ms`,position:"topRight",titleColor:"white",messageColor:"white",timeout:!1,backgroundColor:"#59A10D",iconUrl:"./img/check-mark.svg"})).catch(e=>o.error({title:"Error",message:`Rejected promise in ${e}ms`,position:"topRight",iconUrl:"./img/left-close.svg",titleColor:"white",messageColor:"white",timeout:!1,backgroundColor:"#EF4040"}))});function a(t){t.preventDefault();const e=t.currentTarget.elements.delay.value,r=t.currentTarget.elements.state.value;return new Promise((i,s)=>{setTimeout(()=>{r==="fulfilled"?i(e):s(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
