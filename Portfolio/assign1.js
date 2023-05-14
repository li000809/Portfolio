function mySearch() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('user-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("search-list");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// filter
function filterCourses(filter) {
    const courseCards = document.querySelectorAll('#course-list .card');

    courseCards.forEach(card => {
      // Check if card matches filter
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    sortList(level1Elements);
    sortList(level2Elements);
  }

  // sort
  function descendSort(filter) {
    const courseCards = document.querySelectorAll('#course-list .card');

    courseCards.forEach(card => {
      if (card.classList.contains('level-2')) {
        card.style.display = 'block';
    }  else {
      card.style.display = 'none';
    } }
    );
  }

  function ascendSort(filter) {
    const courseCards = document.querySelectorAll('#course-list .card');
    const level1Elements = [];
    const level2Elements = [];
  
    courseCards.forEach(card => {
        // Check if card matches filter
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';
          
          // Determine the card's level
          if (card.classList.contains('level-1')) {
            card.style.display = 'block';
          } else if (card.classList.contains('level-2')) {
            card.style.display = 'block';
          } 
        } else {
          card.style.display = 'none';
        }
      });
    }
