window.onload = function(){

     //Objects
    const clearButton = document.getElementById('clearButton');
    const addButton = document.getElementById('addButton');
    const reasonInput = document.getElementById('reasonInput');
    const amountInput = document.getElementById('amountInput');
    const expensesList = document.getElementById('expensesList');
    const totalExpenses = document.getElementById('totalExpenses');
    const ionAlertCtrl = document.getElementById('alertCtrl');

    let expense = 0;

    const clear = ()=>{        
        reasonInput.value='';
        amountInput.value='';
    }

    //Object event listeners
    //HTML Global Event
    clearButton.addEventListener('click', function(){
        clear();
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
            ionAlertCtrl.componentOnReady().then(
                (alertCtrl)=>{
                    alertCtrl.create({
                        header: 'Alert',
                        subHeader: 'Invalid values entered...',
                        message: 'Please enter valid values',
                        buttons: ['OK']
                    }).then(
                        (alert)=>{
                            console.log('Present alert');
                            alert.present();
                        }
                    )
                }
            )           

            return;
        }       
        const newIonItem = document.createElement('ion-item');
        //newIonItem.setAttribute('color', 'primary');
        newIonItem.innerHTML = reasonInput.value+' - $'+amountInput.value;

        expensesList.appendChild(newIonItem);
        expense += +amountInput.value;
        console.log(expense);

        totalExpenses.textContent=expense;
        clear();
    });

};