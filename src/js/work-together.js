axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';


function handleSubmit(event) {
  event.preventDefault();

  const email = document.querySelector('#user-email').value;
  const message = document.querySelector('#user-message').value;

  if (!email || !message) {
    alert('Please fill in both the email and message fields.');
    return;
  }

  const data = {
    email: email,
    comment: message, // змінено 'message' на 'comment'
  };

  // Використання async/await для відправки запиту
  async function sendRequest(data) {
    try {
      const response = await axios.post('/requests', data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      // Перевірка наявності полів у відповіді
      if (response.data.title && response.data.message) {
        openModal();
        form.reset();
      } else {
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  }

  sendRequest(data);
}

// Функція для відкриття модального вікна
function openModal() {
  const modalBackdrop = document.querySelector('.backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.add('is-open');
  }
}

// Додавання обробника подій до форми
const form = document.querySelector('#work-together-form');
if (form) {
  form.addEventListener('submit', handleSubmit);
}

// Додавання обробника подій до кнопки закриття модального вікна
const closeModalButton = document.querySelector('#closeModal');
if (closeModalButton) {
  closeModalButton.addEventListener('click', closeModal);
}