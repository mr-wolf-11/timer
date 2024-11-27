let seconds = 0
let centiseconds = 0
let minutes = 0

let index1;
let index2;

function start() {
    const btn = document.getElementById("buttons")
    btn.innerHTML = `
                    <button id="start" onclick="pause()">Pause</button>
                    <button id="reset" onclick="reset()">Reset</button>
                    `
    const min = document.getElementById("minutes").getElementsByClassName("top")[0]
    const sec = document.getElementById("seconds").getElementsByClassName("top")[0]
    const sc = document.getElementById("centiseconds").getElementsByClassName("top")[0]

    index1 = setInterval(()=>centiseconds = (centiseconds+1),90)
    index2 = setInterval(()=>{
        min.innerHTML = `<h1>${minutes}</h1>`
        sec.innerHTML = `<h1>${seconds}</h1>`
        sc.innerHTML = `<h1>${centiseconds}</h1>`
        // console.log(`${minutes}:${seconds}:${centiseconds}`)
        if (centiseconds == 10){
            centiseconds = 0
            seconds++
        }
        if (seconds == 60){
            seconds = 0
            minutes++
            pause()
        }
        if (minutes == 60){
            seconds = 0
            minutes = 0
            centiseconds = 0
        }
},1)
}

function pause() {
    clearInterval(index1)
    clearInterval(index2)
    const btn = document.getElementById("buttons")
    btn.innerHTML = `
                    <button id="start" onclick="start()">Resume</button>
                    <button id="reset" onclick="reset()">Reset</button>
                    `
}
                
function reset() {
    pause()
    const min = document.getElementById("minutes").getElementsByClassName("top")[0]
    const sec = document.getElementById("seconds").getElementsByClassName("top")[0]
    const sc = document.getElementById("centiseconds").getElementsByClassName("top")[0]
    const btn = document.getElementById("buttons")
    btn.innerHTML = `
    <button id="start" onclick="start()">Start</button>
    <button id="reset" onclick="reset()">Reset</button>
    `
    seconds = 0
    centiseconds = 0
    minutes = 0
    min.innerHTML = `<h1>${minutes}</h1>`
    sec.innerHTML = `<h1>${seconds}</h1>`
    sc.innerHTML = `<h1>${centiseconds}</h1>`
}