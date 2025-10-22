// ==UserScript==
// @name         Vehicle_Number_Input
// @version      1.2
// @author       You
// @match        https://onlinebooking.sand.telangana.gov.in/Order/NEWBOOKING.aspx?KLM=*
// @grant        none
// ==/UserScript==

var pg = 2;
var vehicles = 

{
    "3888": {number: "TS07UL3888", delivery: RKK},
    "3864": {number: "TS07UH3864", delivery: RKK},
    "0909": {number: "TS07UF0909", delivery: RKK},
	"1458": {number: "AP39U1458", delivery: RKK},
	"1155": {number: "TS08UD1155", delivery: MKK},
	"3949": {number: "TS24T3949", delivery: JPP},
	"4438": {number: "TS36T4438", delivery: JPP},
	"4867": {number: "AP16TE4867", delivery: JPP},
	"6469": {number: "TS26TA6469", delivery: JPP},
	"6459": {number: "TS26TA6459", delivery: JPP},
	"9360": {number: "TS07UE9360", delivery: RAA},
	"3599": {number: "TS30T3599", delivery: MMM},
    "4676": {number: "AP31TF4676", delivery: HMDA},
    "3546": {number: "ts07ul3546", delivery: RRA},
    "3929": {number: "TS24T3929", delivery: MMM},
    "1355": {number: "TG08T1355", delivery: HMDA},
    "4568": {number: "TS07UL4568", delivery: RKK},
    "9227": {number: "AP16TY9227", delivery: MTT},
    "2525": {number: "TS08UL2525", delivery: HMDA},
    "2345": {number: "TS08UM2345", delivery: HMDA},
    "8199": {number: "TS01UB8199", delivery: MKK},
    "2444": {number: "TS08UL2444", delivery: HMDA},
    "": {number: "", delivery: KAM},
    "": {number: "", delivery: KAM},
    
};

function setVehicleNumber(veh) {
        var txt = document.getElementById("ccMain_txtVehzNo");
        if (!txt) {
            console.error("Vehicle number input not found");
            return;
        }
        txt.value = veh;
        if (typeof ChangeVehicleNo === 'function') {
            ChangeVehicleNo(veh);
        } else {
            console.warn("ChangeVehicleNo() handler not found");
        }
    }
    function setupInput() {
        var inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.style.height = '60px';
        inputElement.style.width = '130px';
        inputElement.style.fontSize = '50px';
        inputElement.style.fontWeight = 'normal';
        inputElement.style.position = 'fixed';
        inputElement.style.top = '3.5rem';
        inputElement.style.left = '18rem';
        inputElement.style.color = '#f00';

        var parentElement = document.querySelector('#ccMain_txtVehzNo').parentNode;
        parentElement.insertBefore(inputElement, document.querySelector('#ccMain_txtVehzNo'));

        inputElement.addEventListener('change', function() {
            var vehicleKey = inputElement.value.trim();
            var vehicleDetails = vehicles[vehicleKey];
            if (vehicleDetails) {
                setVehicleNumber(vehicleDetails.number);
                vehicleDetails.delivery();
            }
        });
    }

function HYD() {
    $('#ccMain_ddldeldistrict').val('16');
    $("#ccMain_ddldelMandal").append('<option value ="69">Amberpet</option>').val('69');
    $('#ccMain_ddldelvillage').append('<option value="115">AMBERPET</option>').val('115');
    $('#ccMain_ddlsandpurpose').val('2');
    document.getElementById('ccMain_rbtPG_' + pg).click();
}

function VIK() {
    $('#ccMain_ddldeldistrict').val('41');
    $("#ccMain_ddldelMandal").append('<option value ="04">Vikarabad</option>').val('04');
    $('#ccMain_ddldelvillage').append('<option value="031">Vikarabad</option>').val('031');
    $('#ccMain_ddlsandpurpose').val('2');
    document.getElementById('ccMain_rbtPG_' + pg).click();
}

function HMDA() {
    $('#ccMain_ddldeldistrict').val('16');
    $("#ccMain_ddldelMandal").append('<option value ="82">HMDA</option>').val('82');
    $('#ccMain_ddldelvillage').append('<option value="167">HMDA</option>').val('167');
    $('#ccMain_ddlsandpurpose').val('2');
    document.getElementById('ccMain_rbtPG_' + pg).click();
}

function MMM() {
    $('#ccMain_ddldeldistrict').val('31');
    $("#ccMain_ddldelMandal").append('<option value ="01">Mahabubabad</option>').val('01');
    $('#ccMain_ddldelvillage').append('<option value="020">Mahabubabad</option>').val('020');
    $('#ccMain_ddlsandpurpose').val('2');
    document.getElementById('ccMain_rbtPG_' + pg).click();
}

function RAA() {
    $('#ccMain_ddldeldistrict').val('15');
    $("#ccMain_ddldelMandal").append('<option value ="87">Amangal</option>').val('87');
    $('#ccMain_ddldelvillage').append('<option value="100">Amangal</option>').val('100');
    $('#ccMain_ddlsandpurpose').val('2');
    document.getElementById('ccMain_rbtPG_' + pg).click();
}

function RRA() {
    $('#ccMain_ddldeldistrict').val('15');
    $("#ccMain_ddldelMandal").append('<option value ="73">Rajendranagar</option>').val('73');
    $('#ccMain_ddldelvillage').append('<option value="100">Attapur</option>').val('100');
    $('#ccMain_ddlsandpurpose').val('2');
    document.getElementById('ccMain_rbtPG_' + pg).click();
}

function MTT() {
    $('#ccMain_ddldeldistrict').val('31');
    $("#ccMain_ddldelMandal").append('<option value ="12">Thorrur</option>').val('12');
    $('#ccMain_ddldelvillage').append('<option value="020">Thorrur (CT)</option>').val('020');
    $('#ccMain_ddlsandpurpose').val('2');
    document.getElementById('ccMain_rbtPG_' + pg).click();
}

function JPP() {
    $('#ccMain_ddldeldistrict').val('26');
    $("#ccMain_ddldelMandal").append('<option value ="12">Palakurthy </option>').val('12');
    $('#ccMain_ddldelvillage').append('<option value="011">Palakurthy </option>').val('011');
    $('#ccMain_ddlsandpurpose').val('2');
    document.getElementById('ccMain_rbtPG_' + pg).click();
}

function MKK() {
    $('#ccMain_ddldeldistrict').val('31');
    $("#ccMain_ddldelMandal").append('<option value ="03">Kesamudram</option>').val('03');
    $('#ccMain_ddldelvillage').append('<option value="006">Kesamudram</option>').val('006');
    $('#ccMain_ddlsandpurpose').val('2');
    document.getElementById('ccMain_rbtPG_' + pg).click();
}

function RKK() {
    $('#ccMain_ddldeldistrict').val('15');
    $("#ccMain_ddldelMandal").append('<option value ="77">Kothur</option>').val('77');
    $('#ccMain_ddldelvillage').append('<option value="100">Kothur (CT)</option>').val('100');
    $('#ccMain_ddlsandpurpose').val('2');
    document.getElementById('ccMain_rbtPG_' + pg).click();
}

function KAM() {
    $('#ccMain_ddldeldistrict').val('29');
    $("#ccMain_ddldelMandal").append('<option value ="01">KAMAREDDY</option>').val('01');
    $('#ccMain_ddldelvillage').append('<option value="081">KAMAREDDY</option>').val('081');
    $('#ccMain_ddlsandpurpose').val('2');
    document.getElementById('ccMain_rbtPG_' + pg).click();
}
function SAG() {
    $('#ccMain_ddldeldistrict').val('38');
    $("#ccMain_ddldelMandal").append('<option value ="04">Sadasivpet</option>').val('04');
    $('#ccMain_ddldelvillage').append('<option value="028">Sadasivpet(M+OG)</option>').val('028');
    $('#ccMain_ddlsandpurpose').val('2');
    document.getElementById('ccMain_rbtPG_' + pg).click();
}
setupInput();
