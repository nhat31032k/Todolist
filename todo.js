window.addEventListener("load", () =>
{ 
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    // const submit = document.querySelector("#new-task-submit");

    const List = document.querySelector("#tasks");
    let todos = this.localStorage.length > 0 ? JSON.parse(localStorage.getItem("List")) : [];
    // if (Array.isArray(todos)) {
    //     [...todos].forEach(item => createTodo(item));
    // }
    // function createTodo()
    // { 
        
    // }
    form.addEventListener("submit", (e) =>
    {
        e.preventDefault(); 
        const task = input.value;
        if (!task) { 
            alert("Please enter a task");
            return;
        };
        // this.elements["todo"].value = "";
        // tạo template
        const task_el = document.createElement("div");
        task_el.classList.add("task");
        const task_el_content = document.createElement("div");
        task_el_content.classList.add("task-content");
        // task_el_content.innerText = task;
        task_el.appendChild(task_el_content);
        // tạo input 
        const task_el_input = document.createElement("input");
        task_el_input.classList.add("text");
        task_el_input.type = "text";
        task_el_input.value = task;
        task_el_input.setAttribute("readonly", "readonly");
        List.appendChild(task_el);
        task_el_content.appendChild(task_el_input);
        // tạo button
        const task_el_action = document.createElement("div");
        task_el_action.classList.add("actions");
        task_el.appendChild(task_el_action);
        const task_el_action_edit = document.createElement("button");
        task_el_action_edit.classList.add("edit");
        task_el_action_edit.innerHTML = "Edit";
        const task_el_action_delete = document.createElement("button");
        task_el_action_delete.classList.add("delete");
        task_el_action_delete.innerHTML = "delete";
        task_el_action.appendChild(task_el_action_edit);
        task_el_action.appendChild(task_el_action_delete);
        todos.push(task);
        localStorage.length > 0 && localStorage.setItem("List", JSON.stringify(todos));
        input.value = "";
        // sự kiện nút edit
        task_el_action_edit.addEventListener("click", () =>
        {
            if (task_el_action_edit.innerText.toLowerCase() === "edit") {
                task_el_input.removeAttribute("readonly");
                task_el_input.focus();
                task_el_action_edit.innerText = "Save";
            } else { 
                task_el_input.setAttribute("readonly", "readonly");
                task_el_action_edit.innerText = "Edit";
            }
        });
        // sự kiện nút delete
        task_el_action_delete.addEventListener("click", function (e)
        {
            console.log(e.target);
            if (e.target.matches(".delete")) { 
                const toDo = e.target.parentNode.parentNode;
                toDo.parentNode.removeChild(toDo);
                const todoText = e.target.previousElementSibling.textContent;
            const newTodo = todos.filter(item => item !== todoText);
            localStorage.setItem("List", JSON.stringify(newTodo));

            } 
            
        });
        //cách 2 
        // task_el_action_delete.addEventListener("click", () =>
        // { 
        //     List.remove(task_el);
        //     const todoText = e.target.previousElementSibling.textContent;
        //     const newTodo = todos.filter(item => item !== todoText);
        //     //đặt lại giá trị cho localStorage
        //     localStorage.setItem("List", JSON.stringify(newTodo));
        // })
    });

})