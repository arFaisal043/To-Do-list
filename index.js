const input = document.querySelector('.todo-input');
        const todoList = document.querySelector('.todo-list');

        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && this.value.trim() !== '') {
                const listItem = document.createElement('li');
                listItem.textContent = this.value.trim();
                listItem.addEventListener('click', function() {
                    this.classList.toggle('completed');
                });
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'X';
                deleteBtn.className = 'delete-btn';
                deleteBtn.addEventListener('click', function() {
                    this.parentElement.remove();
                });
                listItem.appendChild(deleteBtn);
                todoList.appendChild(listItem);
                input.value = '';
            }
        });

