document.addEventListener('scroll', function() {
    const navBar = document.getElementById('nav-bar');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 1) {
        navBar.style.filter = 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);'
    }
    else {
        navBar.style.filter = 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0);'
    }

    

})

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
        console.log("**")
    })
    
})

document.addEventListener('scroll', function() {
    const titleBlock = document.getElementById('title-block');
    const scrollPosition = window.scrollY;

    const movement = scrollPosition / 1.5;

    titleBlock.style.top = `${movement}px`;
})

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

