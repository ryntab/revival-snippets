document.addEventListener('DOMContentLoaded', function () {
    var columns = document.querySelectorAll('.col.sqs-col-3.span-3');
    columns.forEach(function (column, index) {
        
        // generateColumnContent(column, index)
  
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
  
      if (imageCaption) {
        var bioLinker = document.createElement('span');
        bioLinker.classList.add('bio-linker', 'animate-link');
  
        var bioLink = column.querySelector('#bio-link');
        if (bioLink) {
          var linkText = "View Bio";
          var linkHref = bioLink.getAttribute('href');
          var bioLinkElement = document.createElement('a');
          bioLinkElement.textContent = linkText;
          bioLinkElement.setAttribute('href', linkHref);
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
      Thumbs: {
      autoStart: false,
    },
    });
  
  });
  
  const generateColumnContent = (column, index) => {
    const columnID = 'profile-popup-' + (index + 1);
    const dataSourceDiv = column.querySelector('#data-source');
    const destinationContainer = $('#hidden-data');
    
    console.log(dataSourceDiv)
    
    if (dataSourceDiv) {
      const profileMiniElement = dataSourceDiv.querySelector('#profile-mini');
      // const profileImageElement = dataSourceDiv.querySelector('#profile-image');
      const profileLongElement = dataSourceDiv.querySelector('#long-bio');
  
      if (profileMiniElement && profileLongElement) {
        const profileMiniContent = profileMiniElement.innerHTML;
        //const profileImageSrc = profileImageElement.getAttribute('src');
        const profileLongContent = profileLongElement.innerHTML;
  
        const fancyboxContent = `
          <div id="${columnID}">
            <div class="popup-container">
              <div class="popup-row">
                <div class="popup-column w-25">
                  <div class="inner-popup-row">
                    <img id="popup-image" src="" alt="Profile Image" style="width:100%">
                  </div>
                </div>
                <div class="popup-column w-75">
                  <div class="inner-popup-row">
                    <div class="popup-mini-bio">${profileMiniContent}</div>
                    <div class="inner-popup-text">${profileLongContent}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        
        console.log(fancyboxContent)
  
        destinationContainer.append(fancyboxContent);
        
      
    }
    }
  }
  