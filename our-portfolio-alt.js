document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        initGrid()
    }, 0);
    
    function initGrid() {
        var grid = document.querySelector('.grid');
        var iso = new Isotope(grid, {
            itemSelector: '.grid-item',
            percentPosition: true
        });

        var filterButtons = document.querySelectorAll('.filter-button-group button');
        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                // Add active class to the clicked button
                button.classList.add('active');

                var filterValue = button.getAttribute('data-filter');
                iso.arrange({ filter: filterValue });
            });
        });
    }
});