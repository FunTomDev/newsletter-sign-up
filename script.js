let email = ""

function sendVerificationEmail(){

    document.querySelector(".message-email").innerHTML = email

    const mainBlock = document.querySelector(".main-block")

    const mainContent = document.querySelector(".main-content")
    const sideImage = document.querySelector(".side-image")

    const messageBlock = document.querySelector(".message-block")

    setTimeout(()=>{

        sideImage.classList.add("invisible")
        mainContent.classList.add("invisible")

    }, 0)

    mainBlock.style.width = "31.5rem"
    mainBlock.style.height = "40rem"

    mainBlock.classList.remove("flex-column-reversed")
    mainBlock.classList.add("global-size")

    setTimeout(()=>{

        mainBlock.style.height = "32.5rem"

    }, 0)

    messageBlock.classList.remove("invisible")
    setTimeout(()=>{

        messageBlock.style.opacity = 1

    }, 500)
    
    


}


function emailValidator(){

    const emailInput = document.querySelector(".input-email")
    const warningLabel = document.querySelector(".label-warning")

    let pattern = /[a-z0-9]+[@][a-z0-9]+[.][a-z0-9]+/i
    let text = emailInput.value

    if(!text.match(pattern)){
        
        warningLabel.classList.remove("invisible")
        emailInput.classList.remove("input-primary")
        emailInput.classList.add("input-warning")

    }
    else{

        sendVerificationEmail()

    }

}

function removeInputWarning(input){

    email = input.value

    const warningLabel = document.querySelector(".label-warning")

    warningLabel.classList.add("invisible")

    input.classList.add("input-primary")
    input.classList.remove("input-warning")

}