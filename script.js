document.addEventListener("DOMContentLoaded", () => {
    const addItemBtn = document.querySelector('#addItemBtn');
    const itemInput = document.querySelector('#itemInput');
    const shoppingList = document.querySelector('#shoppingList');

    // Lägg till vara när knappen klickas
    addItemBtn.addEventListener('click', addItem);

    function addItem() {
        const itemText = itemInput.value.trim();

        if (itemText === "") return; // Ingen tom inmatning

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            ${itemText}
            <div>
                <button class="btn btn-success markBtn">Markera som köpt</button>
                <button class="btn btn-danger removeBtn">Ta bort</button>
            </div>
        `;

        shoppingList.appendChild(listItem);
        itemInput.value = ""; // Töm input-fältet

        // Funktioner för att markera som köpt och ta bort vara
        const markBtn = listItem.querySelector('.markBtn');
        const removeBtn = listItem.querySelector('.removeBtn');

        markBtn.addEventListener('click', () => {
            listItem.classList.toggle('completed');
            markBtn.textContent = listItem.classList.contains('completed') ? 'Ångra' : 'Markera som köpt';
        });

        removeBtn.addEventListener('click', () => {
            shoppingList.removeChild(listItem);
        });
    }
});
