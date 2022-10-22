let addButton = document.getElementById('add-button');

addButton.onclick = function() {
    let div = document.createElement('div');
    div.classList.add('div');

    let note = document.createElement('p');
    let input = document.getElementById('input').value;
    note.innerHTML = input;

    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'x';
    removeButton.id = 'remove-button';

    document.getElementById('body').appendChild(div);
    div.append(note, removeButton);

    document.getElementById('input').value = '';

    removeButton.onclick = function() {
        removeButton.parentElement.remove();
    }
}