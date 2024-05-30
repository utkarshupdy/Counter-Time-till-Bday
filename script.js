const daysElement = document.querySelector(".days")
const hourElement = document.querySelector(".hours")
const minuteElement = document.querySelector(".minutes")
const secondElement = document.querySelector(".seconds")
const heading = document.querySelector("h1")
const counterTimer = document.querySelector(".counterTimer")


const second = 1000;
const minute = 60 *second
const hour = 60*minute
const day = 24*hour

const timerFunction = ()=>{
    let now = new Date();
    let dd = String(now.getDate()).padStart(2 , "0");
    let mm = String(now.getMonth()+1).padStart(2 , "0");
    let yyyy = now.getFullYear()

    // const enteredDay = prompt("Enter Day").padStart(2 , "0")
    // const enteredMonth = prompt("Enter Month").padStart(2 , "0")
    // // const enteredYear = prompt("Enter Year").padStart(2 , "0")

    // let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

    now = `${mm}/${dd}/${yyyy}`;
    // if(now > targetDate){
    //     targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;

    // }
    const intervalID = setInterval(() => {
        const timer = new Date("06/29/2024").getTime()
        const today = new Date().getTime();

        const difference = timer - today
        const leftDay = Math.floor(difference/day)
        const leftHour = Math.floor((difference % day) / hour)
        const leftMinute = Math.floor((difference % hour) / minute)
        const leftSecond = Math.floor((difference % minute) / second)

        daysElement.innerText = leftDay ;
        hourElement.innerText = leftHour;
        minuteElement.innerText = leftMinute;
        secondElement.innerText = leftSecond;
        if(difference < 0){
            counterTimer.style.display = "none"
            heading.innerText = "Happy Birthday Jaan ❤️❤️!! WELCOME IN YOUR 20's !! I Love U Soo Much That U can't Imagine ❤️! I want to see you achive everything you have ever told me , even if I'm not there . BY : YOUR UTKARSH ❤️";
            
            heading.style.paddingLeft = "110px"
            
            clearInterval(intervalID);
        }

        
    }, 0);

}
timerFunction()
