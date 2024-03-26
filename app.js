let elCard = document.querySelector("#card");
let URL = "http://localhost:3000/category"

fetch(URL).then((response) => {
    return response.json();
}).then((data) => {
    data.map((item) => {
        const {img} = item;
         elCard.innerHTML += `
                      <img src="${img}" alt="">

            `
    })
})