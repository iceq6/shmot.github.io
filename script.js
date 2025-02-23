// Конфигурация
const API_KEY = '$2a$10$m/YziK56MZbOfhWYz6tYAeLHqSe3nqIGRx0iTE8JagYsOWNfAP.5i'; // Замените на ваш ключ
const BIN_ID = '67bb61cdacd3cb34a8edf23c';        // Замените на ID вашего бина

// Функция для сохранения данных
async function saveData(data) {
  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) throw new Error('Ошибка сохранения');
    console.log('Данные сохранены!');
    
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// Функция для загрузки данных
async function loadData() {
  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: { 'X-Master-Key': API_KEY }
    });
    
    if (!response.ok) throw new Error('Ошибка загрузки');
    const data = await response.json();
    return data.record;
    
  } catch (error) {
    console.error('Ошибка:', error);
    return null;
  }
}

// Пример использования
async function init() {
  // Загружаем данные при запуске
  const savedProducts = await loadData() || [];
  
  // Добавляем новый товар
  const newProduct = { id: Date.now(), name: "Куртка", price: 2999 };
  savedProducts.push(newProduct);
  
  // Сохраняем обновленные данные
  await saveData(savedProducts);
  
  // Выводим результат в консоль
  console.log('Текущие товары:', savedProducts);
}

// Запускаем при загрузке страницы
init();l;
  }
}

// Запустите функцию
createBin();
