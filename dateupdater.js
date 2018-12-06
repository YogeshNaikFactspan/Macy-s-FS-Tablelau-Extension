let selParam
let today = new Date();
let date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

$(document).ready(function() {
    tableau.extensions.initializeAsync({ 'configure': configure }).then(() => {
        console.log(tableau.extensions.settings.getAll());
		        updateParam(tableau.extensions.settings.getAll());

		
        let configured = (tableau.extensions.settings.get('configured') === 'true');
        if (!configured) {
            configure();
        } else {
            updateParam(tableau.extensions.settings.get('parameter'));
        }
    });
});

function configure() {
    const popupUrl = `http://localhost:8765/Tutorial/Date-Updater_Client/config.html`
    let payload;
    tableau.extensions.ui.displayDialogAsync(popupUrl, payload, { height: 200, width: 500 }).then((closePayload) => {
        updateParam(closePayload);
    }).catch((error) => {
        switch (error.errorCode) {
            case tableau.ErrorCodes.DialogClosedByUser:
                console.log("Dialog was closed by user.");
                break;
            default:
                console.error(error.message);
        }
    });
}

function updateParam(pname) {
		    let param1234 = document.getElementById('pickparam12').value;

	
    tableau.extensions.dashboardContent.dashboard.getParametersAsync().then(params => {
        let selParam = params.find(p => p.name == pname);
		
		
		
        selParam.changeValueAsync(param1234);
		
		
    });
}