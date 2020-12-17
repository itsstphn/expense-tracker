// ****Selectors
const addBtn = document.querySelector('.submit-input');
const input = document.querySelector('.exp-input');
const expList = document.querySelector('.exp-list');
const budgetInput = document.querySelector('.budget-input');
const budgetSubmit = document.querySelector('.submit-budget');
const budgetDisplay = document.querySelector('.display-budget');



let budgetMoney = 0;
// const expenses = [];
let expTotal = 0;


const displayBudget = (e) => {
    // prevent form from submitting
    e.preventDefault();

    if (budgetInput.value) {
        budgetMoney = parseFloat(budgetInput.value);
        budgetDisplay.innerText = currencyFormat(budgetMoney);

        updateBudget(expTotal, budgetMoney);
        budgetInput.value = '';
    }
    
}

 



// ****functions
const addExpense = (e) => {
    // prevent form from submitting
    e.preventDefault();

    if(input.value) {


        const expMoney = parseFloat(input.value);
        const newItem = document.createElement('li');
        newItem.classList.add('item');
        newItem.innerText = '-' + currencyFormat(expMoney);
        expList.appendChild(newItem);

        // expenses.push(expMoney);
        expTotal += expMoney;
 

        updateBudget(expTotal, budgetMoney);
     
        input.value='';
    }
}

const updateBudget = (total, budget) => {




    budget -= total;  


    budgetDisplay.innerText = currencyFormat(budget);
}









function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' PHP'
  }


// EventListeners
addBtn.addEventListener('click', addExpense);
budgetSubmit.addEventListener('click', displayBudget)





