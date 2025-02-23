const API_KEY = '$2a$10$m/YziK56MZbOfhWYz6tYAeLHqSe3nqIGRx0iTE8JagYsOWNfAP.5i'; // Замените здесь!

async function createBin() {
  try {
    const response = await fetch('https://api.jsonbin.io/v3/b', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY
      },
      body: JSON.stringify({ products: [] }) // Начальные данные
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Неизвестная ошибка');
    }

    const data = await response.json();
    console.log('Бин создан! ID:', data.metadata.id);
    return data.metadata.id;

  } catch (error) {
    console.error('Ошибка создания бина:', error.message);
    return null;
  }
}

// Запустите функцию
createBin();
