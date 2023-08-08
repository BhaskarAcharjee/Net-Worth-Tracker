// --------------------- Switch tab based on Selection ---------------------

document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tab-link");
    const contentDiv = document.querySelector(".content");
  
    // Load default tab content
    loadContent("dashboard");
  
    tabLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const tabName = link.getAttribute("data-tab");
        loadContent(tabName);
      });
    });
  
    function loadContent(tabName) {
      fetch(`html/${tabName}.html`)
        .then((response) => response.text())
        .then((html) => {
          contentDiv.innerHTML = html;
        })
        .catch((error) => {
          console.error("Error loading content:", error);
        });
    }
  });
