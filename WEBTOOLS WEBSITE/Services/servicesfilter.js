document.addEventListener('DOMContentLoaded', function () {
    const btns = [
      { id: 1, name: 'ID' },
      { id: 2, name: 'Tarpulin' },
      { id: 3, name: 'Photo Restoration' },
      { id: 4, name: 'Print' },
      { id: 5, name: 'Lamination' },
    ];
  
    const filters = [...new Set(btns.map((btn) => btn))];
  
    document.querySelector('.btns').innerHTML = filters
      .map((btn) => {
        const { name, id } = btn;
        return `<button class='fil-p' onclick='filterItems(${id})'>${name}</button>`;
      })
      .join('');
  });
  