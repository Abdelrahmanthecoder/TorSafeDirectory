// Get the search input element
const searchInput = document.getElementById('search-input');

// Add an event listener for the keyup event
searchInput.addEventListener('keyup', function(event) {
  // Get the search query
  const query = searchInput.value;

  // Find all occurrences of the query on the page
  const matches = document.querySelectorAll(`*:*contains(${query})`);

  // Highlight all of the matches
  for (const match of matches) {
    match.classList.add('highlight');
  }

  // Remove the highlight class from all of the matches when the user stops typing
  searchInput.addEventListener('blur', function(event) {
    for (const match of matches) {
      match.classList.remove('highlight');
    }
  });
});