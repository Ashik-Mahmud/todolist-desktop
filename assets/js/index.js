/* 1. selections all of things   */
const todoField = document.querySelector("#todo-field"),
    lists = document.querySelector("#lists"),
    errorText = document.querySelector('.error'),
    clearAllBtn = document.querySelector(".clear-all");

/* 2. work with input field with validations  */
document.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        addedCommonToDos();
    }
})
/* 3. added toDos as well trough button  */
function addedToDos() {
    addedCommonToDos()
}

/* 4. is it a function which one control everything in this projects  */
function addedCommonToDos() {
    let value = todoField.value;
    if (todoField.classList.contains('editable-field')) {
        document.querySelector(".editable").innerText = value;
        todoField.classList.remove('editable-field');
        document.querySelector(".editable").className = '';
        todoField.value = '';
    } else {
        let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let valueArr = Array.from(value);
        let count = 0;
        for (var i = 0; i < valueArr.length; i++) {
            let element = valueArr[i];
            if (alphabets.includes(element)) {
                count++;
            }
        }
        if (count < 8) {
            todoField.style.border = '1px solid #ec4242';
            errorText.style.display = 'block';
            errorText.innerHTML = 'You should put minimum 10 alphabet words & whole field number not allowed';
        } else {
            todoField.style.border = '';
            errorText.style.display = 'none';
            errorText.innerHTML = '';
            insertToDos(value);
            todoField.value = '';           
        }
    }

}

/* 5. Insert toDos values in ui  */

function insertToDos(value) {

    let serial = lists.querySelectorAll('tr').length + 1;
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${serial}</td>
                    <td>${value}</td>
                    <td>
                        <button title="Done Task" onclick = "doneToDos(this)" class="done-btn">&check;</button>
                        <button title="Edit Task" onclick = "editToDos(this)" class="edit-btn">&plus;</button>
                        <button title="Delete Task" onclick = "deleteToDos(this)" class="close-btn">&times;</button>
                    </td>`;

    lists.appendChild(tr);
    document.querySelector("#todo-length").innerText = lists.querySelectorAll('tr').length;
    clearAllBtn.style.opacity = '1';
    clearAllBtn.style.pointerEvents = 'all';

}

/* 6. if users can click done button  */
function doneToDos(element) {
    if (confirm("Do you want to done it? If it's done didn't recovery again.")) {
        let targetedElement = element.parentNode.parentNode;
        targetedElement.classList.add('done');
    }
}

/* 7. if users click the delete  */

function deleteToDos(element) {
    if (confirm("Do you wanna delete it?")) {
        let targetedElement = element.parentNode.parentNode.parentNode;
        targetedElement.removeChild(element.parentNode.parentNode);
        document.querySelector("#todo-length").innerText = lists.querySelectorAll('tr').length;
        if (lists.querySelectorAll('tr').length === 0) {
            isEmptyToDos()
        }
    }
}

/* 8. if user click in edit button  */
function editToDos(element) {
    let targetedElement = element.parentNode.previousSibling.previousSibling.innerText;
    element.parentNode.previousSibling.previousSibling.classList.add("editable");
    todoField.value = targetedElement;
    todoField.classList.add("editable-field");
 
}

/* 9. If users click in clear all toDos button  */
clearAllBtn.onclick = () => {
    if (confirm("Do you want to delete all of toDos?")) {
        lists.innerHTML = '';
        document.querySelector("#todo-length").innerText = '';
        if (lists.querySelectorAll('tr').length === 0) {
            isEmptyToDos()
        }
    }
}


/* 10. for by default disabled clearAllBtn */

if (lists.querySelectorAll('tr').length === 0) {
    isEmptyToDos()
}


/*  function for hiding and visible clear all buttons  */
function isEmptyToDos() {
    clearAllBtn.style.opacity = '0.7';
    clearAllBtn.style.pointerEvents = 'none';
}


/* JavaScript code for date showing in UI  */
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date();
document.querySelector('#day').innerText = days[today.getDay()];

