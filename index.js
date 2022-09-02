let userData;
fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((data) => {
    userData = data.users;
    console.log(userData);
  });
const range = document.querySelector("#range").value;
console.log(userData);
function rangeSelected() {
  userData.slice(range).forEach((userData) => {
    console.log(userData);
    const div = document.createElement("div");
    document.querySelector(".content").appendChild(div);
    div.classList.add("card-box");
    div.innerHTML = ` <div class ="img">
    <img src="${userData.image}" alt="" />
    </div>
    <div>
    <h1>${userData.firstName} ${userData.lastName}</h1>
    <p>Birthdate: ${userData.birthDate}</p>
    <p>Email: ${userData.email}</p>
    </div>
    <div class="decoration-box"></div>
    `;
  });
}

for (let index = 0; index < 10; index++) {
  console.log(userData);
}
