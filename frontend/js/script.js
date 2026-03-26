const form = document.getElementById('form');
const userList = document.getElementById('userList');

// 🔹 CADASTRAR OU EDITAR USUÁRIO
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const editingId = form.dataset.editingId; // 🔥 pega se está editando

  try {
    let response;

    if (editingId) {
      // 🔥 MODO EDITAR (PUT)
      response = await fetch(`http://localhost:3000/user/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });

      delete form.dataset.editingId; // 🔥 sai do modo edição

    } else {
      // 🔥 MODO CADASTRO (POST)
      response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });
    }

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }

    const data = await response.json();

    console.log('Resposta da API:', data);

    alert(editingId ? 'Usuário atualizado!' : 'Usuário cadastrado!');

    loadUsers();
    form.reset();

  } catch (error) {
    console.error('Erro:', error);
    alert(error.message);
  }
});

// 🔹 LISTAR USUÁRIOS
async function loadUsers() {
  try {
    const response = await fetch('http://localhost:3000/user');
    const users = await response.json();

    userList.innerHTML = '';

    users.forEach(user => {
      const li = document.createElement('li');

      li.style.display = 'flex';
      li.style.justifyContent = 'space-between';
      li.style.marginBottom = '8px';

      const text = document.createElement('span');
      text.textContent = `${user.name} - ${user.email}`;

      // 🔥 BOTÃO EDITAR
      const editButton = document.createElement('button');
      editButton.textContent = 'Editar';

      editButton.addEventListener('click', () => {
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;

        form.dataset.editingId = user.id; // 🔥 ativa modo edição
      });

      // 🔥 BOTÃO DELETE (o seu já tava top)
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Deletar';

      deleteButton.addEventListener('click', () => {
        const confirmDelete = confirm('Tem certeza que deseja deletar?');

        if (confirmDelete) {
          deleteUser(user.id);
        }
      });

      li.appendChild(text);
      li.appendChild(editButton);
      li.appendChild(deleteButton);

      userList.appendChild(li);
    });

  } catch (error) {
    console.error('Erro ao carregar usuários:', error);
  }
}

// 🔹 DELETAR USUÁRIO
async function deleteUser(id) {
  try {
    const response = await fetch(`http://localhost:3000/user/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar usuário');
    }

    alert('Usuário deletado com sucesso!');

    loadUsers();

  } catch (error) {
    console.error('Erro ao deletar:', error);
    alert(error.message);
  }
}

// 🔹 INICIALIZAÇÃO
loadUsers();