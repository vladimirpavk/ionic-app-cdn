window.onload = function(){

     //Objects
    const clearButton = document.getElementById('clearButton');
    const addButton = document.getElementById('addButton');
    const reasonInput = document.getElementById('reasonInput');
    const amountInput = document.getElementById('amountInput');
    const expensesList = document.getElementById('expensesList');

    //Object event listeners
    //HTML Global Event
    clearButton.addEventListener('click', function(){
        
    });
    //IONIC specific events
    /*clearButton.addEventListener('ionBlur', function(){
        console.log('Clear Button lost focus');
    });
    clearButton.addEventListener('click', function(){
        console.log('Clear Button has focus');
    });*/

    addButton.addEventListener('click',function(){
        if(
            reasonInput.value.trim().length <= 0  ||
            amountInput.value.trim().length <= 0 ||
            amountInput.value <= 0
        ){
            return;
        }
        //console.log(reasonInput.value, amountInput.value);
        const newIonItem = document.createElement('ion-item');
        newIonItem.innerHTML = reasonInput.value+' - $'+amountInput.value;

        expensesList.appendChild(newIonItem);
    });

};