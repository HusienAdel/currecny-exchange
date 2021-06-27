const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");
const amount_one = document.getElementById("amount-one");
const amount_two = document.getElementById("amount-two");
const ratelement = document.getElementById("rate");
const swap = document.getElementById("swap");

// fetch curr rates & update Dom
function calculate() {}

currency_one.addEventListener("change", calculate);
currency_two.addEventListener("change", calculate);
amount_one.addEventListener("input", calculate);
amount_two.addEventListener("input", calculate);

function calculate() {
	const chosen_currency_one = currency_one.value;
	const chosen_currency_two = currency_two.value;

	fetch(
		`https://v6.exchangerate-api.com/v6/541e4ef34fd5296a99ab0adf/latest/${chosen_currency_one}`,
	)
		.then((res) => res.json())
		.then((data) => {
			const rate = data.conversion_rates[chosen_currency_two];

			ratelement.innerText = `1 ${chosen_currency_one} = ${rate} ${chosen_currency_two}`;
			amount_two.value = (amount_one.value * rate).toFixed(2);
		});
}

swap.addEventListener("click", () => {
	const tempone = currency_one.value;
	const temptwo = currency_two.value;

	currency_two.value = tempone;
	currency_one.value = temptwo;

	calculate();
});
