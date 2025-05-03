
// const recipes = {
//     dish1: {
//         title: "Biryani",
//         content: "Biryani is a mixed rice dish originating from the Indian subcontinent, made with aromatic rice and meat, typically chicken, beef, or mutton."
//     },
    
// };

// const readButtons = document.querySelectorAll('.read-online');
// const modal = document.getElementById('recipeModal');
// const modalTitle = document.getElementById('recipeTitle');
// const modalContent = document.getElementById('recipeContent');
// const closeModal = document.getElementsByClassName('close')[0];

// readButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const dishKey = button.getAttribute('data-dish');
//         modalTitle.textContent = recipes[dishKey].title;
//         modalContent.textContent = recipes[dishKey].content;
//         modal.style.display = 'block';
//     });
// });

// closeModal.addEventListener('click', () => {
//     modal.style.display = 'none';
// });


// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });
// Script to show recipe on button click (for demonstration)
document.querySelectorAll('.read-online').forEach(button => {
    button.addEventListener('click', function() {
        const dish = this.dataset.dish;
        alert('You clicked on ' + dish + '. Display recipe for this dish.');
    });
});

