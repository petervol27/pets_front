// Production URL:  https://pets-2hb2.onrender.com/pets/
// Development URL: http://127.0.0.1:5000
const hostName = 'https://pets-2hb2.onrender.com/pets/';

// const searchBtn = document
//   .getElementById('searchBtn')
//   .addEventListener('click', () => search(event));
// const search = async (event) => {
//   event.preventDefault();
//   const searchValue = document.getElementById('searchForm').value;
//   const response = await axios.get(`${hostName}search/`, {
//     params: {
//       searchValue: searchValue,
//     },
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//   });

//   const pets = response.data;
//   let finalHTML = '';
//   petList.classList.remove('card-group');
//   for (pet of pets) {
//     const petHTML = `<div class="card mx-auto" style="width: 18rem;">
//                       <img src="${pet.img}" class="card-img-top" alt="${pet.name}" style="height:17rem;">
//                       <div class="card-body">
//                         <h5 class="card-title">${pet.name}</h5>
//                         <p class="card-text">${pet.name} is a ${pet.animal} and is ${pet.age} years old</p>
//                         <a class="btn btn-success" id="editBtn-${pet.id}" data-id="${pet.id}">Edit</a>
//                         <a class="btn btn-danger" id="deleteBtn-${pet.id}" data-id="${pet.id}">Delete</a>
//                       </div>
//                     </div>`;
//     finalHTML += petHTML;
//   }
//   petList.innerHTML = finalHTML;
//   pets.forEach((pet) => {
//     document
//       .getElementById(`deleteBtn-${pet.id}`)
//       .addEventListener('click', () => deletePet(pet.id));
//     document
//       .getElementById(`editBtn-${pet.id}`)
//       .addEventListener('click', () => goToEdit(pet.id));
//   });
//   if (petList.innerHTML == '') {
//     petList.innerHTML =
//       '<div class="text-center mx-auto"><h1 class=" text-danger">NO PET FOUND!!!!</h1></div>';
//   }
// };
