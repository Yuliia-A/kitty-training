function addNewTask() {
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
        li.setAttribute('class', 'checkbox-group');
    var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check' + [document.getElementsByTagName('li').length + 1]);   
        checkbox.setAttribute('name', 'check' + [document.getElementsByTagName('li').length + 1]);
    var inputTask = document.getElementById("inputForNewTask");
    var label = document.createElement('label');
        label.setAttribute('for', 'check' + [document.getElementsByTagName('li').length + 1]);
    /*var removeButton = document.createElement('button');
        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('class', 'removeButton');
        removeButton.setAttribute('id', 'rmbutton' + [document.getElementsByTagName('li').length + 1]);
        removeButton.setAttribute('onclick', 'clearItem(removeButton.id)');*/

    if (inputTask.value == null || inputTask.value.trim() == "") {
        alert("Enter your task");
    } else {
        ul.appendChild(label);                  
        li.appendChild(checkbox);        
        label.appendChild(document.createTextNode(inputTask.value));
        li.appendChild(label);
        ul.appendChild(li);
    
        inputTask.value = "";
    }
}

/*function clearItem(idItem) {
    var a = document.getElementById(idItem);
    a.parentNode.remove();
}*/



