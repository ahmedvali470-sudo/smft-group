const body=document.body;
const theme=document.getElementById("theme");
if(localStorage.getItem("smft-theme")==="dark") body.classList.add("dark");
theme.onclick=()=>{body.classList.toggle("dark");localStorage.setItem("smft-theme",body.classList.contains("dark")?"dark":"light")};
document.getElementById("menu").onclick=()=>document.getElementById("nav").classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>document.getElementById("nav").classList.remove("open"));
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("form").onsubmit=e=>{e.preventDefault();document.getElementById("status").textContent="Form interface is ready. Connect it to your chosen free form endpoint before launch.";};
