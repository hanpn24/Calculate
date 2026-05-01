let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string="";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string ="";
            input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length - 1);
            input.value = string;
        }
        else if(e.target.innerHTML == "x"){
            string += '*';
            input.value = string;
        }      
      
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
// function(e) == (e) =>{}
input.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        string = input.value;
        string = eval(string);
        input.value = string;
    }
});
input.addEventListener('input', function () {
    input.value = input.value.replace(/[^0-9+\-*/%=.x]/g, '');
    string = input.value;
});
let clickSound = new Audio('audio/voice_click.mp3');

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        clickSound.currentTime = 0; // phát lại từ đầu
        clickSound.play();

        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        // ... phần code còn lại của bạn
    });
});


