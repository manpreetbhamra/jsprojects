const modetoggle = document.getElementById("butn");
const darkmode = document.getElementById("box");
const body = document.body;

modetoggle.addEventListener('click', () => {
    modetoggle.classList.toggle('active');
    body.classList.toggle('dark');
    darkmode.classList.toggle('active');
    if(body.classList.contains('dark')){
        modetoggle.src = "sun.png";
    }
    else{
        modetoggle.src = "moon.png";
    }
});
