const url = 'https://jsonplaceholder.typicode.com/users';
const input = document.getElementById("input");
const result = document.getElementById("result");
const select = document.getElementById("select");

const userFetch  = async () => {
    const response = await fetch(`${url}?q=${input.value}`);
    const risultato = await response.json();
    result.innerHTML = ""
    risultato.forEach(element => {
        const {name, username, email} = element;
        console.log(risultato)   
        const emailFilter = typeof email === "string" ? email : null;
        const nameFilter = typeof name === "string" ? name : null;
        const usernameFilter = typeof username === "string" ? username : null;

        if (nameFilter) {
            resultCard(`Name: ${nameFilter}`, result);
        }

        if (emailFilter) {
            resultCard(`Email: ${emailFilter}`, result);
        }

        if (usernameFilter) {
            resultCard(`Username: ${usernameFilter}`, result);
        }
    });
};
input.addEventListener("input", userFetch);
select.addEventListener("change", userFetch);

const resultCard = (dataCard, sezione) => {
    const card = document.createElement("div");
    card.classList.add("card", "col-6");
    card.innerText = dataCard;
    sezione.appendChild(card);
};
