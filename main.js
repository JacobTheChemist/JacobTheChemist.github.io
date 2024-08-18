function openModal(modalId, event) {
    // Prevent the default anchor click behavior
    if (event) {
        event.preventDefault();
    }

    // Close any open modals
    closeModal();

    // Open the specified modal
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }

    // Update the URL hash
    window.location.hash = modalId;
}

// Close the currently open modal
function closeModal() {
    const openModal = document.querySelector('.modal[style*="display: block"]');
    if (openModal) {
        openModal.style.display = "none";
    }
    // Clear the URL hash
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
}

// Check the URL hash on page load
window.onload = function() {
    const hash = window.location.hash.substring(1); // Remove the '#'
    if (hash) {
        openModal(hash);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside of it
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                closeModal();
            }
        });
    };

    // Define toggleNavbar function
    function toggleNavbar() {
        const navbarList = document.getElementById('navbar-list');
        navbarList.classList.toggle('collapsed');
    }

    // Attach the toggleNavbar function to the button
    const toggleButton = document.querySelector('.toggle-button');
    if (toggleButton) {
        toggleButton.onclick = toggleNavbar;
    }
});