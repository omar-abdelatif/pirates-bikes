// PRELOADER //
const preloader = document.querySelector(".preloader")
function vanish() {
    preloader.classList.add("disappear")
}
window.addEventListener("load", vanish);

// FORMS //
const success = document.querySelector(".toast-bg");
const submit = document.querySelector(".btn-submit");
const body = document.querySelector(".toast-body");
const close = document.querySelector(".close");
const pass = document.querySelector(".pass");
const send = document.querySelector("#subbtn");
const confirm = document.querySelector(".repeat-password");
send.addEventListener("click", (eo) => {
    success.style.display = "block";
    body.style.display = "block";
});
success.addEventListener("click", (eo) => {
    success.style.display = "none";
    body.style.display = "none";
});
close.addEventListener("click", (eo) => {
    success.style.display = "none";
    body.style.display = "none";
});
const activeBtn = () => {
    if (
        psw.classList.contains("good") &&
        pswrepeat.classList.contains("good")
    ) {
        subbtn.removeAttribute("disabled");
    } else {
        subbtn.setAttribute("disabled", "disabled");
    }
}
psw.addEventListener("keyup", (eo) => {
    const regPassword =
        /(?=.{8,})/;
    if (regPassword.test(psw.value)) {
        psw.classList.add("good");
        pswmessage.style.display = "none";
    } else {
        psw.classList.remove("good");
        psw.classList.add("error");
        pswmessage.style.display = "block";
    }
    activeBtn()
});
pswrepeat.addEventListener("keyup", (eo) => {
    if (pswrepeat.value === psw.value) {
        pswrepeat.classList.add("good");
        pswmessage.style.display = "none";
        repeatmessage.style.display = "none";
    } else {
        pswrepeat.classList.remove("good");
        pswrepeat.classList.add("error");
        repeatmessage.style.display = "block";
    }
    activeBtn()
});




const fetchTweetsFromUser = async (user) => { //fetching tweets from user
    const response = await fetch(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${user}&count=10&tweet_mode=extended`);
    const data = await response.json();
    return data;
}