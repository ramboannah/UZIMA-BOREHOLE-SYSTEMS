const paymentForm = document.getElementById("paymentForm");
const paymentList = document.getElementById("paymentList");

let payments = JSON.parse(localStorage.getItem("payments")) || [];
displayPayments();

function displayPayments() {
    paymentList.innerHTML = "";

    payments.forEach(function(payment, index) {
        const li = document.createElement("li");
        li.textContent = payment.payer + " - KES " + payment.amount;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.background = "red";

        deleteBtn.addEventListener("click", function() {
            payments.splice(index, 1);
            localStorage.setItem("payments", JSON.stringify(payments));
            displayPayments();
            updateDashboard();
        });

        li.appendChild(deleteBtn);
        paymentList.appendChild(li);
    });
}
paymentForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const payer = document.getElementById("payer").value;
    const amount = document.getElementById("paymentAmount").value;

    const payment = { payer, amount };

    payments.push(payment);

    localStorage.setItem("payments", JSON.stringify(payments));

    displayPayments();
    updateDashboard();

    paymentForm.reset();
});

const form = document.getElementById("usageForm");
const list = document.getElementById("recordsList");

// Load saved data OR start empty
let records = JSON.parse(localStorage.getItem("records")) || [];

// Show saved records when page loads
displayRecords();
updateDashboard();
form.addEventListener("submit", function(e) {
    e.preventDefault();
displayRecords();
updateDashboard();
    const borehole = document.getElementById("borehole").value;
    const amount = document.getElementById("amount").value;

    const record = {
        borehole: borehole,
        amount: amount
let totalPayments = 0;
payments.forEach(function(payment) {
    totalPayments += Number(payment.amount);
});

document.getElementById("totalWater").textContent = totalWater + " L";
    };

    records.push(record);

    // Save to local storage
    localStorage.setItem("records", JSON.stringify(records));

    displayRecords();
    displayRecords();
updateDashboard();

    form.reset();
});

function displayRecords() {
    list.innerHTML = "";

    records.forEach(function(record, index) {
        const li = document.createElement("li");

        li.textContent = record.borehole + " - " + record.amount + "L ";

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.background = "red";

        deleteBtn.addEventListener("click", function() {
            // Remove item from array
            records.splice(index, 1);

            // Update local storage
            localStorage.setItem("records", JSON.stringify(records));

            // Refresh display
            displayRecords();
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}
function updateDashboard() {
    const totalRecords = records.length;

    let totalWater = 0;
    records.forEach(function(record) {
        totalWater += Number(record.amount);
    });

    document.getElementById("totalRecords").textContent = totalRecords;
    ddocument.getElementById("totalPayments").textContent = "KES " + totalPayments;ocument.getElementById("totalWater").textContent = totalWater + " L";

}