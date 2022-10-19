let addButton = document.getElementById('add-button');

addButton.onclick = function() {
    // add input value to ul
    let list = document.createElement('li');
    let input = document.getElementById('input').value;
    list.innerHTML = input;
    document.getElementById('ul').appendChild(list);

    // remove input value from input
    document.getElementById('input').value = '';
}