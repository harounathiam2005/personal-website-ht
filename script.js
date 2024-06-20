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
    const newTopPosition = 590 + scrollPosition * movementFactor;

    // Apply the new top position
    triangle.style.top = `${newTopPosition}px`;
});

document.addEventListener('scroll', function() {
    const circle = document.querySelector('.circle');
    const scrollPosition = window.scrollY;

    // Adjust the movement factor as needed
    const movementFactor = .05;

    // Calculate the new top position for the triangle
    const newTopPosition = 590 + scrollPosition * movementFactor;

    // Apply the new top position
    circle.style.top = `${newTopPosition}px`;
});

document.addEventListener('scroll', function() {
    const logoBoxes = document.querySelectorAll('.company-logo-box');
    const scrollPosition = window.scrollY;
    const triggerPositionVisible = 800; // Adjust this value based on when you want the box to appear
    const triggerPositionStick = 1100;
    const movement = scrollPosition / 1.5;

    logoBoxes.forEach(function(logoBox, index) {
        const elementTop = logoBox.getBoundingClientRect().top + scrollPosition; // Element's top position in the document
        
        if (scrollPosition >= triggerPositionVisible) {
            logoBox.classList.add('visible');
            logoBox.style.top = `${movement}px`;
            // Adjust the fixed position to move with the viewport
        } else {
            logoBox.classList.remove('visible');
        }

        if (scrollPosition >= triggerPositionStick) {
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
    const triggerPositionStick = 1400;

    const elementTop = numbersText.getBoundingClientRect().top + scrollPosition;

    if (scrollPosition >= triggerPositionVisible) {
        numbersText.classList.add('visible-move');
    }
    else {
        numbersText.classList.remove('visible-move');
    }

    if (scrollPosition >= triggerPositionStick) {
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
    const scholarship = document.getElementById('scholarship-box');
    const scrollPosition = window.scrollY;
    const triggerPositionStick = 1500;

    const elementTop = scholarship.getBoundingClientRect().top + scrollPosition;

    if (scrollPosition >= triggerPositionStick) {
        scholarship.classList.add('stick');
        const newTopPosition = elementTop - scrollPosition;
        scholarship.style.top = `${newTopPosition}px`;
    }
    else {
        scholarship.classList.remove('stick');
        scholarship.style.top = '';
    }

});

