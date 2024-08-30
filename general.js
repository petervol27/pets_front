// Production URL:  https://pets-2hb2.onrender.com/pets/
// Development URL: http://127.0.0.1:5000
const hostName = 'https://pets-2hb2.onrender.com/pets/';

const deletePet = async (id) => {
  const response = await axios.delete(`${hostName}${id}/`);
  alert(response.data.response);
  getPets();
};
const goToEdit = (id) => {
  window.location.href = `https://pets-front.onrender.com/editPet?id=${id}`;
};
const petCall = (type) => {
  const animalCry = type.toLowerCase();
  if (animalCry == 'cat') {
    alert('Meow!!!');
  } else {
    alert('WOOF!!!!');
  }
};
