const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    // length is the amount of circles - treat like an array because it has node list (4)
    // stay at 4
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    // if current active is less than '1' - let current active be '1' - can't go less than '1'
    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    // if circle is greater than index, add class 'active' to circle
    // otherwise remove class
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })


    const actives = document.querySelectorAll('.active')

    // change the css styling width %
    // change it to 33%, 66% ... etc.
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    console.log(progress.style.width)

    // prev will be disabled if active is on 1
    // next will be disabled if active is on 4
    // other wise both will be active
    if(currentActive === 1){
        prev.disable = true
    } else if(currentActive === circles.length) {
        next.disable = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}