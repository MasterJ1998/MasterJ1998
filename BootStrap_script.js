// code for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  document.getElementById("openResumeButton").addEventListener("click", function () {
    // Set the source of the iframe to your resume PDF URL
    document.querySelector(".modal-body").innerHTML = `<iframe src="file:///C:/Users/jarre/OneDrive/Desktop/resume(updated).pdf" frameborder="0" width="100%" height="500px"></iframe>`;
    
    // Show the modal pop-up
    $("#resumeModal").modal("show");
  });
  