const incomeId = document.getElementById("incomeId");
const foodId = document.getElementById("foodId");
const rentId = document.getElementById("rentId");
const clothId = document.getElementById("clothId");
const calBtn = document.getElementById("calBtn");
const totalId = document.getElementById("totalId");
const balanceId = document.getElementById("balanceId");
const saveId = document.getElementById("saveId");
const savePercentId = document.getElementById("savePercentId");
const savingAmountId = document.getElementById("savingAmountId");
const remainAmountId = document.getElementById("remainAmountId");
var totalFinalBalance;
var remainBalance;
function getVal() {
    if (incomeId.value < 0) {
        alert("it is a negative value. please enter a position value");
    }
}

const foodVal = () => {
    if (foodId.value < 0) {
        alert("it is a negative value. please enter a position value");
    }
};
const rentVal = () => {
    if (rentId.value < 0) {
        alert("it is a negative value. please enter a position value");
    }
};
const clothVal = () => {
    if (clothId.value < 0) {
        alert("it is a negative value. please enter a position value");
    }
};
const saveVal = () => {
    if (saveId.value < 0) {
        alert("it is a negative value. please enter a position value");
    }
};

// calculation function

calBtn.addEventListener("click", function (e) {
    const expenseCost = +foodId.value + +rentId.value + +clothId.value;
    totalId.innerText = expenseCost;
    totalFinalBalance = +incomeId.value - expenseCost;
    balanceId.innerText = totalFinalBalance;
    lastFinalBalance(totalFinalBalance);

    if (incomeId.value < expenseCost) {
        alert("your expenses is already reach your income.");
        balanceId.innerText = 0;
    }
});

const lastFinalBalance = (t) => {
    const percentCount = saveId.value / 100;
    const afterPercentageTotal = incomeId.value * percentCount;

    if (incomeId.value < afterPercentageTotal) {
        alert("You cannot save this amount of money.");
    }
    savingAmountId.innerText = afterPercentageTotal;

    remainBalance = totalFinalBalance - afterPercentageTotal;
    if (remainBalance <= 0) {
        alert("You cannot save this amount of money.");
        // break;
        remainAmountId.innerText = 0;
    }
    remainAmountId.innerText = remainBalance;
};

savePercentId.addEventListener("click", function (p) {
    lastFinalBalance();
});
