document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        const allLangElements = document.querySelectorAll('.lang');

       
        allLangElements.forEach(el => {
            el.style.display = 'none';
        });

        
        const selectedLangElements = document.querySelectorAll(`.lang.${selectedLanguage}`);
        selectedLangElements.forEach(el => {
            el.style.display = 'block';
        });
    });

    
    languageSelect.value = 'en'; 
    languageSelect.dispatchEvent(new Event('change'));
});
