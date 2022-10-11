const text = document.getElementById('circulate');

text.innerHTML= text.textContent.replace(/\S/g,"<span>$&</span>");
const ele = document.querySelectorAll('#circulate span');

for (let i = 0; i < ele.length; i++) {
    ele[i].style.transform = "rotate("+i*16+"deg)";  
}

function navegador() {
    const nav = document.querySelector('.navegation-ico');
    const navegation = document.querySelector('.navegation_nav')

    nav.classList.toggle('active')
    navegation.classList.toggle('active')
}



