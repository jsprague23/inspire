function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()

	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}
	
	
	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var template = `<ul><li class="counter">#of To-dos ${todos.length}</li>`
			//DONT FORGET TO LOOP
		for (let i = 0; i < todos.length; i++) {
			const todo = todos[i];
			template += `
			
			<li class="description">${todo.description}<button onclick="app.controllers.todoController.removeTodo('${todo._id}')"type="button"id="" class="btn btn-light btn-sm"><span class="fas fa-trash"></span></button></li>
			`
			
		}
		document.getElementById("todo-list").innerHTML=template+"</ul>"
	}

	var coll = document.getElementsByClassName("collapsible");
	var i;
	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			}
		});
	}
	
	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			description: form.description.value,      //has to be a string
		}
		todoService.addTodo(todo,getTodos)
	}

	//PASSES THE NEW TODO TO YOUR SERVICE
	//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
	//YOU SHOULDN'T NEED TO CHANGE THIS
	//todoService.addTodo(draw, getTodos)
	//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	// }
	
	this.toggleTodoStatus = function (todoId) {

		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
		
	}

this.removeTodo= function(todoId){
	todoService.removeTodo(todoId,getTodos)
}
	

	
	// ask the service to run the remove todo with this id
	
	// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	
	
	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	
	getTodos()
}
