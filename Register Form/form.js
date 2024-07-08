const signinbtn =document.querySelector('.signinbtn');
const signupbtn =document.querySelector('.signupbtn');
const formBx =document.querySelector('.formBx');
const body =document.querySelector('body');



signupbtn.onclick = function () {
    formBx.classList.add('active')
    body.classList.add('active')

}

signinbtn.onclick = function () {
    formBx.classList.remove('active')
    body.classList.remove('active')
}