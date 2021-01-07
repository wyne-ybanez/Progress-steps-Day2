const panels = document.querySelectorAll('.panel')

// loop through panels
// add click event
// active list of classes - method add on class list - add 'active' class
// remove active classes first - put 'active' class on selected card
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// to remove 'active' class
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}