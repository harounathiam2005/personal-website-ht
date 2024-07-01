document.addEventListener('scroll', function() {
    // telemetry
    console.log(window.scrollY)
})

document.addEventListener('scroll', function() {
    const navBar = document.getElementById('nav-bar');
    const shadowClass = 'shadow';
    const scrollThreshold = 10; // Adjust this value as needed

    if (window.scrollY > scrollThreshold) {
        navBar.classList.add(shadowClass);
    } else {
        navBar.classList.remove(shadowClass);
    }
});

document.addEventListener('scroll', function() {
    const titleBlock = document.getElementById('title-block');
    const statements = document.querySelectorAll('.statement');
    const scrollPosition = window.scrollY;
    const maxBlur = 2; // maximum blur value

    // Calculate blur amount based on scroll position
    const blurAmount = Math.min(scrollPosition / 100, maxBlur);
    titleBlock.style.filter = `blur(${blurAmount}px)`;

    statements.forEach(function(statement) {
        statement.style.filter = `blur(${blurAmount}px)`;
    })
    
})

document.addEventListener('scroll', function() {
    const titleBlock = document.getElementById('title-block');
    const scrollPosition = window.scrollY;

    const movement = scrollPosition / 1.5;

    titleBlock.style.top = `${movement}px`;
})

document.addEventListener('scroll', function() {
    const shapes = document.querySelectorAll('.shape');
    const scrollPosition = window.scrollY;
    const maxBlur = 2; // maximum blur value

    const blurAmount = Math.min(scrollPosition / 100, maxBlur);
    
    shapes.forEach((shape, index) => {
        const rotation = scrollPosition / 3; // Adjust this value for desired rotation speed
        shape.style.transform = `rotate(${rotation}deg)`;
        shape.style.filter = `blur(${blurAmount}px)`;
    });
});

document.addEventListener('scroll', function() {
    const triangle = document.querySelector('.triangle');
    const scrollPosition = window.scrollY;

    // Adjust the movement factor as needed
    const movementFactor = .1;

    // Calculate the new top position for the triangle
    const newTopPosition = scrollPosition * movementFactor;

    // Apply the new top position
    triangle.style.top = `${newTopPosition}px`;
});

document.addEventListener('scroll', function() {
    const circle = document.querySelector('.circle');
    const scrollPosition = window.scrollY;

    // Adjust the movement factor as needed
    const movementFactor = .05;

    // Calculate the new top position for the triangle
    const newTopPosition = scrollPosition * movementFactor;

    // Apply the new top position
    circle.style.top = `${newTopPosition}px`;
});


document.addEventListener('scroll', function() {
    const logoBoxes = document.querySelectorAll('.company-logo-box');
    const scrollPosition = window.scrollY;
    const triggerPositionVisible = 800;
    const triggerPositionInvisible = 3700;

    logoBoxes.forEach(function(logoBox, index) {

        if (scrollPosition >= triggerPositionVisible  && scrollPosition <= triggerPositionInvisible) {
            logoBox.classList.add('visible');
        } else {
            logoBox.classList.remove('visible');
        }

    });
});

document.addEventListener('scroll', function() {
    const numbersText = document.getElementById('numbers-text');
    const scrollPosition = window.scrollY;
    const triggerPositionVisible = 1400;
    const triggerPositionInvisible = 3800;
    const triggerPositionUnstick = 5000;
    const triggerPosition = 1400;
    const move = 20;

    const elementTop = numbersText.getBoundingClientRect().top + scrollPosition;
/*
    if ((scrollPosition >= triggerPosition) && (scrollPosition <= triggerPositionUnstick)) {
        numbersText.classList.add('stick');
        const newTopPosition = elementTop - scrollPosition;
        numbersText.style.top = `${newTopPosition}px`;
    }
    else {
        numbersText.classList.remove('stick');
        numbersText.style.top = '';
    }
    */

    if ((scrollPosition >= triggerPositionVisible) && (scrollPosition <= triggerPositionInvisible)) {
        numbersText.classList.add('visible-move');
        //numbersText.style.animation = 'moveLeft, 0.5s, forward'
    }
    else {
        numbersText.classList.remove('visible-move');
        //numbersText.style.animation = '';
    }

});

document.addEventListener('scroll', function() {
    const numbersText = document.getElementById('description-box');
    const scrollPosition = window.scrollY;
    const triggerPosition = 1350;
    const triggerPositionInvisible = 2300;

    if ((scrollPosition >= triggerPosition) && (scrollPosition < triggerPositionInvisible)) {
        numbersText.classList.add('visible-move');
    } else {
        numbersText.classList.remove('visible-move');
    }
});

document.addEventListener('DOMContentLoaded', function() {
     
    const descriptionBox = document.getElementById('description-box');

    descriptionBox.addEventListener('mouseover', function() {
        descriptionBox.style.boxShadow = '0 4px 6px -1px rgba(0.5, 0.5, 0.5, 0.5)';
    });

    descriptionBox.addEventListener('mouseout', function() {
        descriptionBox.style.boxShadow = '0 4px 6px -1px rgba(0.2, 0.2, 0.2, 0.2)';
    });

});

document.addEventListener('scroll', function() {
    const numbersText = document.getElementById('linkedin-figure');
    const scrollPosition = window.scrollY;
    const triggerPosition = 2700;
    const triggerPositionInvisible = 3800;

    if ((scrollPosition >= triggerPosition) && (scrollPosition < triggerPositionInvisible)) {
        numbersText.classList.add('visible-move');
    } else {
        numbersText.classList.remove('visible-move');
    }
});

document.addEventListener('scroll', function() {
    const numbersText = document.getElementById('amazon-figure');
    const scrollPosition = window.scrollY;
    const triggerPosition = 2900;
    const triggerPositionInvisible = 3800;

    if ((scrollPosition >= triggerPosition) && (scrollPosition < triggerPositionInvisible)) {
        numbersText.classList.add('visible-move');
    } else {
        numbersText.classList.remove('visible-move');
    }
});

/*
document.addEventListener('scroll', function() {
    const scholarshipBox = document.getElementById('scholarship-box');
    const scrollPosition = window.scrollY;
    const triggerPositionStick = 1600;
    const triggerPositionVisible = 1600;
    const triggerPositionInvisible = 2100;
    const triggerPositionUnstick = 4000;

    const elementTop = scholarshipBox.getBoundingClientRect().top + scrollPosition;

    if ((scrollPosition >= triggerPositionStick) && (scrollPosition <= triggerPositionUnstick)) {
        scholarshipBox.classList.add('stick');
        const newTopPosition = elementTop - scrollPosition;
        scholarshipBox.style.top = `${newTopPosition}px`;
    }
    else {
        scholarshipBox.classList.remove('stick');
        scholarshipBox.style.top = '';
    }

    if ((scrollPosition >= triggerPositionVisible) && (scrollPosition <= triggerPositionInvisible)) {
        scholarshipBox.classList.add('visible');
    }
    else {
        scholarshipBox.classList.remove('visible');
    }

});
*/
document.addEventListener('scroll', function() {
    const backgroundSheet = document.getElementById('background-sheet');
    const scrollPosition = window.scrollY;
    let targetPosition = 4300;

    if (scrollPosition >= targetPosition) {
        backgroundSheet.style.animation = 'reduceWidth .5s forwards';
    }
    else {
        backgroundSheet.style.animation = 'increaseWidth .5s forwards';
    }

});

let hasAnimated = false;

document.addEventListener('scroll', function() {
    const body = document.body;
    const navBar = document.getElementById('nav-bar');
    const scrollPosition = window.scrollY;
    let targetPosition = 4300;

    if (scrollPosition >= targetPosition && !hasAnimated) {
        body.style.animation = 'colorShift 0s forwards';
        navBar.style.animation = 'colorShift 2s forwards';
        hasAnimated = true;
    } else if (scrollPosition < targetPosition && hasAnimated) {
        body.style.animation = 'colorShiftBack 1s forwards';
        navBar.style.animation = 'colorShiftBack 1s forwards';
        hasAnimated = false;
    }
});
