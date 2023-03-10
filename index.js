
		//loading the page
	window.addEventListener('load', () => {
		//getting the elements needed from HTML file
		const form = document.querySelector("#new-task-form");
		const input = document.querySelector("#new-task-input");
		const list_el = document.querySelector("#tasks");
	//adding an event listener to our submit button

		form.addEventListener('submit', (e) => {
		//prevent default koo ke stisnes kopceto da ne refreshire
			//tava e inputo so treba da napraam da ode u local storage
			let task = input.value;
			if(localStorage.getItem('task') == null){

				localStorage.setItem('task', '[]');
			}
			const oldData= JSON.parse(localStorage.getItem('task'));
			oldData.push(task);
			e.preventDefault()
			window.localStorage.setItem('task',JSON.stringify(oldData));

					
		
			//making a key to store multiple times evrytime with different key in local storage
			// const timestamp = Date.now();
			// localStorage.setItem('task', task);
			// e.preventDefault();
			// localStorage.getItem("task",task)

			// const storedTasks = Object.entries(localStorage);

			// console.log(storedTasks)

			const task_el = document.createElement('div');
			task_el.classList.add('task');

			const task_content_el = document.createElement('div');
			task_content_el.classList.add('content');

			task_el.appendChild(task_content_el);

			const task_input_el = document.createElement('input');
			task_input_el.classList.add('text');
			task_input_el.type = 'text';
			task_input_el.value = task;
			task_input_el.setAttribute('readonly', 'readonly');

			task_content_el.appendChild(task_input_el);

			const task_actions_el = document.createElement('div');
			task_actions_el.classList.add('actions');
			
			const task_edit_el = document.createElement('button');
			task_edit_el.classList.add('edit');
			task_edit_el.innerText = 'Edit';

			const task_delete_el = document.createElement('button');
			task_delete_el.classList.add('delete');
			task_delete_el.innerText = 'Delete';

			task_actions_el.appendChild(task_edit_el);
			task_actions_el.appendChild(task_delete_el);

			task_el.appendChild(task_actions_el);

			list_el.appendChild(task_el);

			input.value = '';

			task_edit_el.addEventListener('click', (e) => {
				if (task_edit_el.innerText.toLowerCase() == "edit") {
					task_edit_el.innerText = "Save";
					task_input_el.removeAttribute("readonly");
					task_input_el.focus();
				} else {
					task_edit_el.innerText = "Edit";
					task_input_el.setAttribute("readonly", "readonly");
				}
			});

			task_delete_el.addEventListener('click', (e) => {
				list_el.removeChild(task_el);
			});
		});
	});