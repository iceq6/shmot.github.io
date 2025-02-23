const API_KEY = '$2a$10$m/YziK56MZbOfhWYz6tYAeLHqSe3nqIGRx0iTE8JagYsOWNfAP.5i';

// Создать новый бин
async function createBin(data) {
  const response = await fetch('https://api.jsonbin.io/v3/b', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': API_KEY
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

// Пример использования
createBin({ products: [] })
  .then(data => console.log('Bin ID:', data.metadata.id))
  .catch(error => console.error('Ошибка:', error));
