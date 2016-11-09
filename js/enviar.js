


$('#enviar').click(function() {

	var persona = $('#opciones');

	
    if ( opciones.value == "hola") {
           alert ("¿Qué tranza?");}
		   
		   
	if ( opciones.value == "adios") {
		   alert ("¡Pues bay!") ; }
		   
		   
	if ( opciones.value == "que pedo") {
		   alert ("Uy!") ; 	}
		   
	if ( opciones.value == "te amo") {
		  alert ("¡tranquilo viejo!") ; }    
		   
		    	   

});


function regresar(){
    window.location.reload();
} 






function runScript(e) {
    if (e.keyCode == 13) {

	var persona = $('#opciones');

	
    if ( opciones.value == "hola") {
           alert ("¿Qué tranza?");}
		   
		   
	if ( opciones.value == "adios") {
		   alert ("¡Pues bay!") ; }
		   
		   
	if ( opciones.value == "que pedo") {
		   alert ("Uy!") ; 	}
		   
	if ( opciones.value == "te amo") {
		alert ("Uououo ¡Tranquilo Viejo!") ; }    
		   
	}	    	   

}


