// get needed elements 
const e_validation = document.getElementById("email")
const submit=document.getElementById("submit-btn")
const main_div=document.querySelector(".child")
const result=document.querySelector(".main-sucess")
const success_message=document.querySelector(".success-message")
const success_btn=document.querySelector(".success-btn")
console.log(success_btn)
console.log(success_message)

// Create the Expression
var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// add the event Listener to the input field 
e_validation.addEventListener("input", (e) => {
    if (e.target.value === "") {
        e_validation.classList.remove("fail", "success");
    } else if (regex.test(e_validation.value)) {
        e_validation.classList.remove("fail");
        e_validation.classList.add("success");
    } else {
        e_validation.classList.remove("success");
        e_validation.classList.add("fail");
    }
});

submit.addEventListener("click",(e)=>
{
    if (e_validation.value === "") {
        e.preventDefault()
    } else if (regex.test(e_validation.value)) {
       main_div.classList.add("hide")
       result.classList.remove("hide")
        const conformation_Text=document.createElement("p")
       conformation_Text.innerHTML=`A conformation email has been sent to <b> ${e_validation.value}</b> please open it and click the button inside to confirm Your subscribtion`
        success_message.appendChild(conformation_Text)
    } else {
        e_validation.classList.remove("success");
        e_validation.classList.add("fail");
    }
})

success_btn.addEventListener("click",(e)=>
{
    result.classList.add("hide")
    main_div.classList.remove("hide")
    e_validation.value=""
})