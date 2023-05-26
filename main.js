const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.indicator');
const buttons = document.querySelectorAll('button');

let currentStep = 1;
//function that update the current steps and update the DOM
const updateSteps = (e) => {
    //update current step based on the button clicked
    currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

    //loop through all circles and add/remove 'active' classes based on their index and current step
    circles.forEach((circle, index) => {
        circle.classList[`${index < currentStep? 'add':'remove'}`]('active');
    })

    //update progress bar width based on current step
    progressBar.style.width = `${(currentStep-1) / (circles.length - 1) * 100}%`;

    //check if current step is last step or first step and disable corrosponding buttons
    if (currentStep === circles.length) {
        buttons[1].disabled = true;
    } else if (currentStep === 1) {
        buttons[0].disabled = true;
    } else {
        buttons.forEach((button) => (button.disabled = false))
    }
}


// add click event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener('click', updateSteps);
})