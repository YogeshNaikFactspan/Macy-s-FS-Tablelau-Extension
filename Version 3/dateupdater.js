//https://community.tableau.com/message/806481#806481
//https://community.tableau.com/thread/227660
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
			//updateParam1(tableau.extensions.settings.get('parameter'));
        }
    });
});

function configure() {
    const popupUrl = `http://localhost:8765/Tutorial/Date-Updater_Client/test/config.html`
    let payload;
    tableau.extensions.ui.displayDialogAsync(popupUrl, payload, { height: 500, width: 500 }).then((closePayload) => {
        updateParam(closePayload);
		// updateParam1(closePayload);
    }).catch((error) => {
        switch (error.errorCode) {
            case tableau.ErrorCodes.DialogClosedByUser:
                console.log("Dialog was closed by user.");
                break;
            default:
                //console.error(error.message);
        }
    });
}
function updateParam(pname) {
		    let param1234 = document.getElementById('pickparam12').value;
		    let parammonth = document.getElementById('month').value;
		    let paramyear = document.getElementById('Year').value;
		    let paramweek = document.getElementById('Week').value;
		    let paramseason = document.getElementById('season').value;
		    let paramquarter = document.getElementById('Quarter').value;

    tableau.extensions.dashboardContent.dashboard.getParametersAsync().then(params => {
        let selParam = params.find(p => p.name == pname);
		$('#choose_sheet_title').text(selParam);
		selParam.changeValueAsync(param1234);
		selParam.changeValueAsync(parammonth);
		selParam.changeValueAsync(paramyear);
		selParam.changeValueAsync(paramweek);
		selParam.changeValueAsync(paramseason);
		selParam.changeValueAsync(paramquarter);
			}
			);
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
