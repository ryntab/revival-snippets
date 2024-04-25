document.addEventListener('DOMContentLoaded', function () {
    var columns = document.querySelectorAll('.col.sqs-col-3.span-3');
    // Find the div with data-type="page"
    const pageDiv = document.querySelector('div[data-type="page"]');

    if (pageDiv) {
        // Create the background shimmer div
        const shimmerDiv = document.createElement('div');
        shimmerDiv.className = 'background-shimmer';

        // Create the background SVG div
        const svgDiv = document.createElement('div');
        svgDiv.className = 'background-svg';

        // Inject the divs as direct children of the page div
        pageDiv.appendChild(shimmerDiv);
        pageDiv.appendChild(svgDiv);

        // Set the height of the background shimmer and SVG divs to 100%
        setTimeout(function () {
            shimmerDiv.style.height = '100%';
            svgDiv.style.height = '100%';
        }, 500);
    }

    columns.forEach(function (column) {
        column.addEventListener('mouseover', function () {
            columns.forEach(function (col) {
                if (col !== column) {
                    col.classList.add('leader-focus');
                }
            });
        });

        column.addEventListener('mouseout', function () {
            columns.forEach(function (col) {
                col.classList.remove('leader-focus');
            });
        });
    });
});