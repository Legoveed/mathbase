document.getElementById('search').addEventListener('input', function() {
  let filter = this.value.toLowerCase();
  let items = document.querySelectorAll('#category-list li');
  items.forEach(function(item) {
    if (item.textContent.toLowerCase().includes(filter)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});
