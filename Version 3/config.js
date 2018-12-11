$(document).ready(function() {
    tableau.extensions.initializeDialogAsync().then(function(openPayload) {
        console.log(tableau.extensions.settings.getAll());
        getParams();

    });
});

function getParams() {
    tableau.extensions.dashboardContent.dashboard.getParametersAsync().then(params => {
        let options = '';
        let c = 0;
        for (let p of params) {
			// Take all the parameters
            if (p.name   === 'Select Time Period New' || p.name === 'Fiscal Year ' || p.name === 'Fiscal Month ' || p.name === 'Fiscal Week ' || p.name === 'Fiscal Quarter ' || p.name === 'Season ' || p.name === 'Custom Start Date' || p.name === 'Custom End Date') {
			
                options += `<option value='${p.name}'>${p.name}</option>`;
				//options += '${p.name}'
                c++
            }
        }
        if (c > 0) {
            document.getElementById('pickparam').innerHTML = options;
            document.getElementById('setparam').disabled = false;
        } else {
            document.getElementById('pickparam').innerHTML = "<option value='' disabled>No parameters found</option>";
        }
    });
}

function submit() {

	    let param = document.getElementById('pickparam').value;
	tableau.extensions.settings.set('configured', 'true');
    tableau.extensions.settings.set('parameter', param);
	tableau.extensions.settings.saveAsync().then(result => {
        tableau.extensions.ui.closeDialog(param);
				 	
    });
}
//function submit1() {

	//    let param = document.getElementById('pickparam1').value;
	//tableau.extensions.settings.set('configured', 'true');
    //tableau.extensions.settings.set('parameter', param);
	//tableau.extensions.settings.saveAsync().then(result => {
     //  tableau.extensions.ui.closeDialog(param);
				 	
   // });
//}
//function submit2() {

	//    let param = document.getElementById('pickparam2').value;
	// tableau.extensions.settings.set('configured', 'true');
    // tableau.extensions.settings.set('parameter', param);
	//tableau.extensions.settings.saveAsync().then(result => {
     //  tableau.extensions.ui.closeDialog(param);
				 	
    //});
// }
// function submit3() {

	//    let param = document.getElementById('pickparam3').value;
	//tableau.extensions.settings.set('configured', 'true');
    //tableau.extensions.settings.set('parameter', param);
	//tableau.extensions.settings.saveAsync().then(result => {
     //  tableau.extensions.ui.closeDialog(param);
				 	
    //});
//}
