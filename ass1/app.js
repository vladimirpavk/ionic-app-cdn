window.onload = function(){

     //Objects    
    const nameInput = document.getElementById('nameInput');
    const ratingInput = document.getElementById('ratingInput');    
    const addButton = document.getElementById('addButton');  
    const courseList = document.getElementById('courseList');
    const ionAlertCtrl = document.getElementById('alertCtrl');

    async function showAlert(alertConfig){
        let alertCtrl = await ionAlertCtrl.componentOnReady();
        let alert = await alertCtrl.create(alertConfig);
        alert.present();
    } 

    const clear = ()=>{
        nameInput.value = '';
        ratingInput.value = '';
    }

    //Object event listeners
    //HTML Global Event   
    addButton.addEventListener('click',function(){
        if(
            nameInput.value.trim().length <= 0  ||
            ratingInput.value.trim().length <= 0 ||
            ratingInput.value < 1 ||
            ratingInput.value > 5
        ){               
            showAlert({
                header: 'Alert',
                subHeader: 'Invalid values entered...',
                message: 'Please enter valid values',
                buttons: ['OK']
            });
            return;
        }       
        const newIonItem = document.createElement('ion-item');        
        newIonItem.innerHTML = "<b>" + nameInput.value + "</b>" + ' - ' + ratingInput.value + '/' +ratingInput.value;

        courseList.appendChild(newIonItem);
        
        clear();
    });
};