// variaveis
var array;
var soma;
// mudança de cores
function mudaCorVermelho(obj){
	obj.style.background = "red";
	obj.style.color = "black";
}
function mudaCorAzul(obj){
	obj.style.background = "blue";
	obj.style.color = "black";
}
function mudaCorVerde(obj){
	obj.style.background = "green";
	obj.style.color = "black"; 
}
function mudaCorAmarelo(obj){
	obj.style.background = "yellow";
	obj.style.color = "black";
}
function voltaCor(obj){
	obj.style.background = "black";
	obj.style.color = "#4682b4";
}
// verificações
function verificaLogin(obj){
	if (obj.value == "" || obj.value == null) {
		alert("Preencha o nome do usuário");

	}
}
function verificaSenha(obj){
	if (obj.value == "" || obj.value == null) {
		alert("Preencha a Senha");
	}
}

function autorizaLogin(){
	if (document.getElementById("username").value == "GabrielAraujo" && document.getElementById("password").value == "turista") {
		alert("logado com sucesso");
		open("index.html");
	}else{
		alert("senha ou usuário incorretos!");
	}
}
//mudanças onchange
function mudaLinhaVerde(){
	if (document.getElementById("seletor").value == "342"){
		document.getElementById("linha").innerHTML = "Linha - 342";
		document.foto.src = "img/img342.png";
	}
	if (document.getElementById("seletor").value == "639") {
		document.getElementById("linha").innerHTML = "Linha - 639";
		document.foto.src = "img/img639.png";
		document.horario.horaChegada.value = "NUNCA";
		document.horario.horaSaida.value = "ETERNIDADE";
	}
		if (document.getElementById("seletor").value == "semnada") {
		document.getElementById("linha").innerHTML = "Linha - ";
		document.foto.src = "";
	}
}
function mudaLinhaAzul(){
	if (document.getElementById("seletor").value == "775"){
		document.getElementById("linha").innerHTML = "Linha - 775";
		document.foto.src = "img/img775.png";
	}
	if (document.getElementById("seletor").value == "774") {
		document.getElementById("linha").innerHTML = "Linha - 774";
		document.foto.src = "img/img774.png";
	}
		if (document.getElementById("seletor").value == "semnada") {
		document.getElementById("linha").innerHTML = "Linha - ";
		document.foto.src = "";
	}
}
function mudaLinhaVermelha(){
	if (document.getElementById("seletor").value == "397"){
		document.getElementById("linha").innerHTML = "Linha - 397";
		document.foto.src = "img/img397.png";
	}
	if (document.getElementById("seletor").value == "393") {
		document.getElementById("linha").innerHTML = "Linha - 393";
		document.foto.src = "img/img393.png";
	}
		if (document.getElementById("seletor").value == "semnada") {
		document.getElementById("linha").innerHTML = "Linha - ";
		document.foto.src = "";
	}
}
function mudaLinhaAmarela(){
	if (document.getElementById("seletor").value == "474"){
		document.getElementById("linha").innerHTML = "Linha - 474";
		document.foto.src = "img/img474.png";
	}
	if (document.getElementById("seletor").value == "432") {
		document.getElementById("linha").innerHTML = "Linha - 432";
		document.foto.src = "img/img432.png";
	}
		if (document.getElementById("seletor").value == "semnada") {
		document.getElementById("linha").innerHTML = "Linha - ";
		document.foto.src = "";
	}
}
// mudanças onkeydown
function verificaNumeros(){
	if (!(event.keyCode >= 48 && event.keyCode<= 58)) {
		alert("informe somente números!!");
		return false;
	}
}
function colocaPonto(){
	if(document.horario.horaSaida.value.length == 2){
		document.horario.horaSaida.value = document.horario.horaSaida.value + ":";
	}
}

function calculaHoraAmarelo(){
	array = document.horario.horaSaida.value.split('');
	if (array[0] > 2) {
		alert("hora inválida")
		document.horario.horaChegada.value = "--:--";
	}else if (array[0] == 2 && array[1] > 3 ) {
		alert("hora inválida")
		document.horario.horaChegada.value = "--:--";
	}else if (array[3] > 5) {
		alert("hora inválida")
		document.horario.horaChegada.value = "--:--";
	}else{
		if (array[3] < 4) {
			soma = 2 + parseInt(array[3]);

			array[3] = soma.toString();
		}
		if (array[3] >= 4) {
			soma =  parseInt(array[3]) - 4;

			array[3] = soma.toString();

			soma = 1 + parseInt(array[1]);

			array[1] = soma.toString();

		}
		if (array[1] < 9) {
			soma = 1 + parseInt(array[1]);

			array[1] = soma.toString();
		}
		if (array[1] >= 9) {
			soma = parseInt(array[1]) - 9;
			array[1] = soma.toString();

			soma = 1 + parseInt(array[0]);

			array[0] = soma.toString();
		}
		if (array[0] >= 2 && array[1] >= 4) {
			soma = parseInt(array[0]) - 2;
			array[0] = soma.toString();

			soma = parseInt(array[1]) - 4;
			array[1] = soma.toString();

			// soma = 1 + parseInt(array[1]);
			// array[1] = soma.toString();
		}
	
		document.horario.horaChegada.value = array.join("");
	}
	
}
function calculaHoraVerde(){
	array = document.horario.horaSaida.value.split('');
	if (array[0] > 2) {
		alert("hora inválida")
		document.horario.horaChegada.value = "--:--";
	}else if (array[0] == 2 && array[1] > 3 ) {
		alert("hora inválida")
		document.horario.horaChegada.value = "--:--";
	}else if (array[3] > 5) {
		alert("hora inválida")
		document.horario.horaChegada.value = "--:--";
	}else{
		if (array[3] < 5) {
			soma = 1 + parseInt(array[3]);

			array[3] = soma.toString();
		}
		if (array[3] >= 5) {
			soma =  parseInt(array[3]) - 5;

			array[3] = soma.toString();

			soma = 1 + parseInt(array[1]);

			array[1] = soma.toString();

		}
		if (array[1] < 9) {
			soma = 1 + parseInt(array[1]);

			array[1] = soma.toString();
		}
		if (array[1] >= 9) {
			soma = parseInt(array[1]) - 9;
			array[1] = soma.toString();

			soma = 1 + parseInt(array[0]);

			array[0] = soma.toString();
		}
		if (array[0] >= 2 && array[1] >= 4) {
			soma = parseInt(array[0]) - 2;
			array[0] = soma.toString();

			soma = parseInt(array[1]) - 4;
			array[1] = soma.toString();

			// soma = 1 + parseInt(array[1]);
			// array[1] = soma.toString();
		}
		document.horario.horaChegada.value = array.join(""); 	
 	} 	
}
function calculaHoraVermelho(){
	array = document.horario.horaSaida.value.split('');
	if (array[0] > 2) {
		alert("hora inválida")
		document.horario.horaChegada.value = "--:--";
	}else if (array[0] == 2 && array[1] > 3 ) {
		alert("hora inválida")
		document.horario.horaChegada.value = "--:--";
	}else if (array[3] > 5) {
		alert("hora inválida")
		document.horario.horaChegada.value = "--:--";
	}else{
		if (array[1] < 8) {
			soma = 2 + parseInt(array[1]);

			array[1] = soma.toString();
		}
		if (array[1] >= 8) {
			soma = parseInt(array[1]) -8;
			array[1] = soma.toString();

			soma = 1 + parseInt(array[0]);
			
			array[0] = soma.toString();

		}
		if (array[0] >= 2 && array[1] >= 4) {
			soma = parseInt(array[0]) - 2;
			array[0] = soma.toString();

			soma = parseInt(array[1]) - 4;
			array[1] = soma.toString();

			// soma = 1 + parseInt(array[1]);
			// array[1] = soma.toString();
		}
		document.horario.horaChegada.value = array.join("");
	}
}
function calculaHoraAzul(){
	array = document.horario.horaSaida.value.split("");
	if (array[0] > 2) {
		alert("hora inválida")
		document.horario.horaChegada.value = "--:--";
	}else if (array[0] == 2 && array[1] > 3 ) {
		alert("hora inválida")
		document.horario.horaChegada.value = "--:--";
	}else if (array[3] > 5) {
		alert("hora inválida")
		document.horario.horaChegada.value = "--:--";
	}else{
		if (array[3] == 0) {
			soma = 5 + parseInt(array[3]);

			array[3] = soma.toString();
		}else{
			if (array[3] >= 1) {
			soma =  parseInt(array[3]) - 1;

			array[3] = soma.toString();

			soma = 1 + parseInt(array[1]);

			array[1] = soma.toString();
			}
		}

		if (array[1] >= 9) {
			soma = parseInt(array[1]) - 10;
			array[1] = soma.toString();

			soma = 1 + parseInt(array[0]);

			array[0] = soma.toString();
		}

		if (array[0] >= 2 && array[1] >= 4) {
			soma = parseInt(array[0]) - 2;
			array[0] = soma.toString();

			soma = parseInt(array[1]) - 4;
			array[1] = soma.toString();

			// soma = 1 + parseInt(array[1]);
			// array[1] = soma.toString();
		}
		document.horario.horaChegada.value = array.join("");
	}
}

