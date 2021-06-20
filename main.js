var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);

var itemsList = document.getElementById('items');

itemsList.addEventListener('click',removeItem);

var filter = document.getElementById('filter');
filter.addEventListener('keyup',filterItem);


// ADDING ITEM

function addItem(e){

    e.preventDefault();
    // form value
    var newItem = document.getElementById('item').value;

    // creating li element
    var newLi = document.createElement('li');
    newLi.className = 'list-group-item';

    // appending item value to li
    newLi.appendChild(document.createTextNode(newItem));

    // creating button element
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    // appending deleteBtn to li
    newLi.appendChild(deleteBtn);

    // appending newitem to itemslist
    itemsList.appendChild(newLi);
}


// REMOVE ITEM

function removeItem(e){

    if(e.target.classList.contains('delete'))
    {
        if(confirm('Do you want to delete this item?'))
        {
            var li = e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
    
}

// FILTER ITEMS

function filterItem(e)
{
    // Convert text to lower case
    var text = e.target.value.toLowerCase();

    // Get list items
    var items = itemsList.getElementsByTagName('li');

    // Convert to array and filtering
    Array.from(items).forEach(function(item){

        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1)
            item.style.display = 'block';
        else
            item.style.display = 'none';

    })
}