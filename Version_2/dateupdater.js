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
    const popupUrl = `http://localhost:8765/Tutorial/Date-Updater_Client/test/config.html`
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
					    
						let paramyear = document.getElementById('Year').value;
						let paramweek = document.getElementById('Week').value;

			
    tableau.extensions.dashboardContent.dashboard.getParametersAsync().then(params => {
        let selParam = params.find(p => p.name == pname);
		
		$('#choose_sheet_title').text(selParam);
		//let selParam1 = 'Fiscal Year';
        //selParam1.changeValueAsync('2017');
        selParam.changeValueAsync(param1234);
		selParam.changeValueAsync(parammonth);
		selParam.changeValueAsync(paramyear);
		selParam.changeValueAsync(paramweek);
			}
			);
}

function fiscal_week(pname){
	let param1234 = document.getElementById('pickparam12').value;
	const popupUrl = `http://localhost:8765/Tutorial/Date-Updater_Client/test/fisca_week.html`
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
	tableau.extensions.dashboardContent.dashboard.getParametersAsync().then(params => {
        let selParam = params.find(p => p.name == pname);
       // selParam.changeValueAsync(param1234);
		selParam.changeValueAsync('May');
		selParam.changeValueAsync('2018');
		selParam.changeValueAsync('11');
			});
}

function fiscal_month(pname){
	let param1234 = document.getElementById('pickparam12').value;
	//const popupUrl = `http://localhost:8765/Tutorial/Date-Updater_Client/test/fisca_month.html`
    //let payload;
    //tableau.extensions.ui.displayDialogAsync(popupUrl, payload, { height: 200, width: 500 }).then((closePayload) => {
    //    updateParam(closePayload);
    //}).catch((error) => {
    //    switch (error.errorCode) {
    //        case tableau.ErrorCodes.DialogClosedByUser:
    //            console.log("Dialog was closed by user.");
    //            break;
    //        default:
    //            console.error(error.message);
    //    }
    //});
	tableau.extensions.dashboardContent.dashboard.getParametersAsync().then(params => {
        let selParam = params.find(p => p.name == pname);
        selParam.changeValueAsync('1');
		//selParam.changeValueAsync('2018');


			});
}
function hideBoth()  
{  
   document.getElementById("Year").style.visibility="hidden";  
   document.getElementById("month").style.visibility="hidden" ; 
   document.getElementById("Week").style.visibility="hidden" ; 
   document.getElementById("season").style.visibility="hidden" ; 
   document.getElementById("Quarter").style.visibility="hidden" ;    
}


   function hola(x) {
				$('#choose_sheet_title').text(x);
				if(x == 'Current Fiscal Week'){
                    document.getElementById("Week").style.visibility="hidden";
                    document.getElementById("month").style.visibility="hidden";
					document.getElementById("Year").style.visibility="hidden";
					document.getElementById("season").style.visibility="hidden" ; 
					document.getElementById("Quarter").style.visibility="hidden" ; 
					//updateParam(x);
                }
				if(x == 'Current Fiscal Month'){
                    document.getElementById("Week").style.visibility="hidden";
                    document.getElementById("month").style.visibility="hidden";
					document.getElementById("Year").style.visibility="hidden";
					document.getElementById("season").style.visibility="hidden" ; 
					document.getElementById("Quarter").style.visibility="hidden" ; 
					//updateParam(x);
                }
				if(x == 'Current Fiscal Year'){
                    document.getElementById("Week").style.visibility="hidden";
                    document.getElementById("month").style.visibility="hidden";
					document.getElementById("season").style.visibility="hidden" ; 
					document.getElementById("Quarter").style.visibility="hidden" ; 
					document.getElementById("Year").style.visibility="hidden";
					//updateParam(x);
                }				
                if(x == 'Fiscal Week') {
                    document.getElementById("Week").style.visibility="visible";
                    document.getElementById("month").style.visibility="visible";
					document.getElementById("Year").style.visibility="visible";
					document.getElementById("season").style.visibility="hidden" ; 
					document.getElementById("Quarter").style.visibility="hidden" ; 
					//updateParam(x);
                }

                if(x == 'Fiscal Month') {
                    document.getElementById("Year").style.visibility="visible";
                    document.getElementById("month").style.visibility="visible"; 
					document.getElementById("Week").style.visibility="hidden"; 
					document.getElementById("season").style.visibility="hidden" ; 
					document.getElementById("Quarter").style.visibility="hidden" ; 
                }

                if(x == 'Fiscal Year')  {
                    document.getElementById("Week").style.visibility="hidden";
					document.getElementById("month").style.visibility="hidden";
                    document.getElementById("Year").style.visibility="visible"; 
					document.getElementById("season").style.visibility="hidden" ; 
					document.getElementById("Quarter").style.visibility="hidden" ; 
				}
				if(x == 'Fiscal Quarter')  {
                    document.getElementById("Week").style.visibility="hidden";
					document.getElementById("month").style.visibility="hidden";
                    document.getElementById("Year").style.visibility="visible"; 
					document.getElementById("season").style.visibility="hidden" ; 
					document.getElementById("Quarter").style.visibility="visible" ; 
				}
				if(x == 'Fiscal Season')  {
                    document.getElementById("Week").style.visibility="hidden";
					document.getElementById("month").style.visibility="hidden";
                    document.getElementById("Year").style.visibility="visible"; 
					document.getElementById("season").style.visibility="visible" ; 
					document.getElementById("Quarter").style.visibility="hidden" ; 
				}
            }
