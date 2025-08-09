document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');
    const articles = document.querySelectorAll('.articles-grid article');

    function filterArticles() {
        const searchTerm = searchBar.value.toLowerCase();

        articles.forEach(article => {
            const title = article.querySelector('h4').textContent.toLowerCase();
            const paragraph = article.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchTerm) || paragraph.includes(searchTerm)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

    if (searchButton && searchBar) {
        searchButton.addEventListener('click', filterArticles);

        searchBar.addEventListener('keyup', function(event) {
            // Real-time search as user types
            filterArticles();
        });
    }
});
