const root=document.documentElement, toggle=document.getElementById('themeToggle');
const saved=localStorage.getItem('sakshi-theme');
if(saved){root.setAttribute('data-theme',saved)}
function updateButton(){const dark=root.getAttribute('data-theme')==='dark';toggle.textContent=dark?'☀ Light mode':'☾ Dark mode';}
updateButton();
toggle.addEventListener('click',()=>{const next=root.getAttribute('data-theme')==='dark'?'light':'dark';if(next==='light')root.removeAttribute('data-theme');else root.setAttribute('data-theme','dark');localStorage.setItem('sakshi-theme',next);updateButton();});
document.getElementById('year').textContent=new Date().getFullYear();
