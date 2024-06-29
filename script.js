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
    const triggerPositionInvisible = 2500;
    const triggerPosition = 1100;
    const movement = scrollPosition / 1.5;

    logoBoxes.forEach(function(logoBox, index) {
        const elementTop = logoBox.getBoundingClientRect().top + scrollPosition; // Element's top position in the document
        
        if (scrollPosition >= triggerPositionVisible  && scrollPosition <= triggerPositionInvisible) {
            logoBox.classList.add('visible');
            logoBox.style.top = `${movement}px`;
            // Adjust the fixed position to move with the viewport
        } else {
            logoBox.classList.remove('visible');
        }

        if (scrollPosition >= triggerPosition) {
            logoBox.classList.add('stick');
            // Adjust the fixed position to move with the viewport
            const newTopPosition = elementTop - scrollPosition;
            logoBox.style.top = `${newTopPosition}px`;
        } else {
            logoBox.classList.remove('stick');
            logoBox.style.top = ''; // Reset to initial position
        }
    });
});

document.addEventListener('scroll', function() {
    const numbersText = document.getElementById('numbers-text');
    const scrollPosition = window.scrollY;
    const triggerPositionVisible = 1400;
    const triggerPositionInvisible = 2100;
    const triggerPositionUnstick = 3000;
    const triggerPosition = 1400;

    const elementTop = numbersText.getBoundingClientRect().top + scrollPosition;

    if ((scrollPosition >= triggerPositionVisible) && (scrollPosition <= triggerPositionInvisible)) {
        numbersText.classList.add('visible-move');
    }
    else {
        numbersText.classList.remove('visible-move');
    }

    if (scrollPosition >= triggerPosition  && scrollPosition <= triggerPositionUnstick) {
        numbersText.classList.add('stick');
        const newTopPosition = elementTop - scrollPosition;
        numbersText.style.top = `${newTopPosition}px`;
    }
    else {
        numbersText.classList.remove('stick');
        numbersText.style.top = '';
    }

});

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
        console.log("true");
    }
    else {
        scholarshipBox.classList.remove('visible');
        console.log("false");
    }

});

document.addEventListener('scroll', function() {
    const backgroundSheet = document.getElementById('background-sheet');
    const scrollPosition = window.scrollY;
    let targetPosition = 2800;

    if (scrollPosition >= targetPosition) {
        backgroundSheet.style.animation = 'reduceWidth 2s forwards';
    }
    else {
        backgroundSheet.style.animation = 'increaseWidth 3s backwards';
    }

});

document.addEventListener('scroll', function() {
    const body = document.body;
    const scrollPosition = window.scrollY;
    let targetPosition = 2800;

    if (scrollPosition >= targetPosition) {
        body.style.backgroundColor = 'blue';
    }

});
