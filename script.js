screen = document.getElementById("i")
buttons = document.querySelectorAll("button")
for(ele of buttons){
    ele.addEventListener('click', (e) => {
        buttontext = e.target.innerText
        if(buttontext != 'C'&& buttontext != '=')
            screen.value += buttontext
        else if(buttontext == 'C')
            screen.value = ""
        else
            screen.value = eval(screen.value)
    })
}

 