const buttons = document.querySelectorAll('.button')
// console.log(buttons); NODE LIST RESULT
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target.id);
            body.style.backgroundColor = e.target.id
        
    })
})