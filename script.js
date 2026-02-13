let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const addBtn = document.getElementById("addBtn");
const list = document.getElementById("transactions");
const totalEl = document.getElementById("total");

function saveData() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function render() {
    list.innerHTML = "";
    let total = 0;

    transactions.forEach((t) => {
        total += Number(t.amount);

        const div = document.createElement("div");
        div.className = "transaction";
        div.innerHTML = `
            <div>
                <div>${t.title}</div>
                <div class="date">${t.date}</div>
            </div>
            <div class="amount">- ${t.amount} ₽</div>
        `;
        list.appendChild(div);
    });

    totalEl.textContent = total;
}

addBtn.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;

    if (!title || !amount) {
        alert("Заполни все поля");
        return;
    }

    const transaction = {
        title: title,
        amount: amount,
        date: new Date().toLocaleDateString()
    };

    transactions.push(transaction);
    saveData();
    render();

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
});

render();