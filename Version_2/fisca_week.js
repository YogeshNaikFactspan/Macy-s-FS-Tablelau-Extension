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
            if (p.name === 'Fiscal Week ' || p.name === 'Fiscal Month ' || p.name === 'Fiscal Year ') {
                options += `<option value='${p.name}'>${p.name}</option>`;
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

function test() {

	    let param = document.getElementById('pickparam').value;

    tableau.extensions.settings.set('configured', 'true');
    tableau.extensions.settings.set('parameter', param);
    tableau.extensions.settings.saveAsync().then(result => {
        tableau.extensions.ui.closeDialog(param);
				 

		
    });
}
