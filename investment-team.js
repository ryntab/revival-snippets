document.addEventListener('DOMContentLoaded', function () {
    var columns = document.querySelectorAll('.col.sqs-col-3.span-3');
    columns.forEach(function (column, index) {
        
        generateColumnContent(column, index)
  
      var imageCaption = column.querySelector('.image-caption');
      var imageBlockWrapper = column.querySelector('.image-block-wrapper');
      var bioLink = column.querySelector('#bio-link');
  
      if (bioLink && imageBlockWrapper) {
        var linkHref = bioLink.getAttribute('href');
        var bioLinkElement = document.createElement('a');
        bioLinkElement.setAttribute('href', linkHref);
        bioLinkElement.setAttribute('data-src', `#profile-popup-${index + 1}`);
        bioLinkElement.setAttribute('data-fancybox', 'profile-gallery'); // Set the
        imageBlockWrapper.parentNode.insertBefore(bioLinkElement, imageBlockWrapper);
        bioLinkElement.appendChild(imageBlockWrapper);
      }
  
      if (imageCaption && false) {
        var bioLinker = document.createElement('span');
        bioLinker.classList.add('bio-linker', 'animate-link');
  
        var bioLink = column.querySelector('#bio-link');
        if (bioLink) {
          var linkText = "View";
          var linkHref = bioLink.getAttribute('href');
          var bioLinkElement = document.createElement('a');
          bioLinkElement.textContent = linkText;
          bioLinkElement.setAttribute('href', '#');
          bioLinkElement.setAttribute('data-src', `#profile-popup-${index + 1}`);
          bioLinkElement.setAttribute('data-fancybox', 'profile-gallery');
          bioLinker.appendChild(bioLinkElement);
        }
  
        imageCaption.appendChild(bioLinker);
      }
  
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
  
    Fancybox.bind('[data-fancybox="profile-gallery"]', {
        type: 'inline',
        src: function (fancybox, slide) {
          return slide.src;
        },
        Thumbs: false,
        Hash: false,
      	Toolbar: false,
    });
  
  });
  
  const generateColumnContent = (column, index) => {
    const columnID = 'profile-popup-' + (index + 1);
    //const dataSourceDiv = column.querySelector('#data-source');
    const dataSourceDiv = $(column).find('#data-source');
    const destinationContainer = $('#hidden-data');
    
      const image = $(column).find(".sqs-image-shape-container-element img"); 
      const imageSrc = image.attr("src");
    
    if (dataSourceDiv) {
        const profileName = $(dataSourceDiv).find('#profile-name').html();
        const profileSource = $(dataSourceDiv).find('#profile-source').attr('href')
      const profileMiniElement = $(dataSourceDiv).find('#profile-mini').html();
      const profileLongElement = $(dataSourceDiv).find('#long-bio').html();
      
      // Find the image element in the column
      const imageElement = column.querySelector('.sqs-block-image-figure img');
  
      if (profileMiniElement && profileLongElement && imageSrc) {
        const profileMiniContent = profileMiniElement
        const profileLongContent = profileLongElement
      
        const fancyboxContent = `
              <div id="${columnID}">
              <div class="popup-container">
                <div class="popup-row">
                  <div class="popup-column">
                    <div class="inner-popup-row">
                      <div class="inner-column">
                        <h2 class="profile-name">${profileName}</h2>
                        <div class="popup-mini-bio">${profileMiniContent}</div>
                      </div>
                      <div class="inner-column">
                        <img id="popup-image" src="${imageSrc}" alt="Profile Image" style="width:100%">
                      </div>
                    </div>
                    <div class="inner-popup-row">
                      <div class="inner-popup-text">${profileLongContent}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `;
        $(dataSourceDiv).append(fancyboxContent);
      }
    }
  };