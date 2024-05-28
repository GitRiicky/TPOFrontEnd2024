function validarPhone() {
	//Permitir sólo números del 0 al 9, sin espacios, ni signos
	let phoneNumber = document.getElementById('phone').event;
    if (event.keyCode < 48 || event.keyCode > 57 || event.altKey !false || event.ctrlKey !false || event.metaKey !false || event.shiftKey !false) {
		alert("Por favor, sólo ingresar números del 0 al 9, sin espacios, ni signos.");
		event.returnValue = false;
	} else {
		event.returnValue = true;
	}
}

/* Event Dump obtenido de: https://www.toptal.com/developers/keycode
{
 "key": "9",
 "keyCode": 57,
 "which": 57,
 "code": "Digit9",
 "location": 0,
 "altKey": false,
 "ctrlKey": false,
 "metaKey": false,
 "shiftKey": false,
 "repeat": false
}
*/

function trimForm() {
  const items = [name, email, phone, message, reason];
  for (const item of items) {
    const text = document.getElementById(item);
    text.value = text.value.trim();
  }
}

// Para agregar al /../templates/js/validation.js que se ejecuta al enviar el Form de contacto.html según la linea 37: <form id="contactForm" action="#" method="post" onsubmit="return validateForm()">