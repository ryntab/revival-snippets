
document.addEventListener('DOMContentLoaded', function() {
    var columns = document.querySelectorAll('.col.sqs-col-3.span-3');

    columns.forEach(function(column) {
      column.addEventListener('mouseover', function() {
        columns.forEach(function(col) {
          if (col !== column) {
            col.classList.add('leader-focus');
          }
        });
      });

      column.addEventListener('mouseout', function() {
        columns.forEach(function(col) {
          col.classList.remove('leader-focus');
        });
      });
    });
  });
