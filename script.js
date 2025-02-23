const API_KEY = '$2a$10$m/YziK56MZbOfhWYz6tYAeLHqSe3nqIGRx0iTE8JagYsOWNfAP.5i'; // Замените на ваш ключ

// Функция для создания нового бина
async function createBin(initialData = { products: [] }) {
  try {
    // Отправляем POST-запрос на создание бина
    const response = await fetch('https://api.jsonbin.io/v3/b', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY
      },
      body: JSON.stringify(initialData)
    });

    // Проверяем успешность запроса
    if (!response.ok) {
      throw new Error('Ошибка создания бина');
    }

    // Получаем данные ответа
    const data = await response.json();
    
    // Выводим ID созданного бина в консоль
    console.log('Бин создан! ID:', data.metadata.id);
    return data.metadata.id;

  } catch (error) {
    console.error('Ошибка:', error);
    return null;
  }
}

// Пример использования
createBin()
  .then(binId => {
    if (binId) {
      // Сохраняем ID бина для дальнейшего использования
      localStorage.setItem('BIN_ID', binId);
    }
  });
