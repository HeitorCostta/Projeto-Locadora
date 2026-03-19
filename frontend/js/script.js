const form = document.getElementById('form');
const userList = document.getElementById('userList');

// 🔹 CADASTRAR USUÁRIO
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3000/user', {
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

    // 🔥 tratamento de erro
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }

    const data = await response.json();

    console.log('Resposta da API:', data);

    alert('Usuário cadastrado com sucesso!');

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

      const button = document.createElement('button');
      button.textContent = 'Deletar';

      button.addEventListener('click', () => {
        const confirmDelete = confirm('Tem certeza que deseja deletar?');

        if (confirmDelete) {
          deleteUser(user.id);
        }
      });

      li.appendChild(text);
      li.appendChild(button);

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