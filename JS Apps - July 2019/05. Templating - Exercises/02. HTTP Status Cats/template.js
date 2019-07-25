(() => {
     renderCatTemplate();

     async function renderCatTemplate() {
          const catsTemplate = await fetch('catsTemplate.html')
              .then(function (response) {
                   return response.text();
              });

          const compiledTemplate = Handlebars.compile(catsTemplate);
          const context = {
               cats: window.cats
          };

          const allCats = document.getElementById('allCats');
          allCats.innerHTML = compiledTemplate(context);
     }
})();

function showInfo(id) {
     const infoDiv = document.getElementById(id);
     const infoButton = infoDiv.previousElementSibling;

     if (infoButton.textContent === 'Show status code') {
          infoDiv.style.display = 'block';
          infoButton.textContent = 'Hide status code';

     } else {
          infoDiv.style.display = 'none';
          infoButton.textContent = 'Show status code';
     }
}