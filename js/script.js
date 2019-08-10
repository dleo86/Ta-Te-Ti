
	$(document).ready(function(){
	var x= 'x';
    var o = 'o';
    var turns = 0;
    var cant1 = 0;
    var cant2 = 0;
    //Spot vars
    var spot1 = $('#spot1');
    var spot2 = $('#spot2');
    var spot3 = $('#spot3');
    var spot4 = $('#spot4');
    var spot5 = $('#spot5');
    var spot6 = $('#spot6');
    var spot7 = $('#spot7');
    var spot8 = $('#spot8');
    var spot9 = $('#spot9');
    $('#board li').on('click', jugar);
    $('#reset').on('click', reset);
    $('#turno').text('Jugador 1');
    function jugar(){
    	//Condicional para saber si ganó el primer jugador
        if (spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
    		spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
    		spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
    		spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
    		spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
    		spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
    		spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
    		spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')) 
    	{
    		alert('El ganador es el primer jugador');
            cant1++;
            $('#puntos1').text(cant1);
    		$('#board li').text('-');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
            reset();
    	} //Condicional para saber si ganó el segundo jugador
         else if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') || 
    		spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
    		spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
    		spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
    		spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
    		spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
    		spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
    		spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')) 
    	{
            alert('El ganador es el segundo jugador');
            cant2++;
            $('#puntos2').text(cant2);
    		$('#board li').text('-');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
            reset();
    	} else if (turns == 9) { //Si el turno supera los ocho intentos, entonces es un empate
    		alert('¡Empate!');
    		$('#board li').text('-');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
            turns = 0;
    	} else if ($(this).hasClass('disable')) { //impido que se juegue en una casilla que se ha jugado
    		alert('Esta casilla ya ha sido jugada');
    	} 
    	//Administro los turnos
    	else if (turns % 2 == 0) {
    		turns++;
    		$(this).text(o);
    		$(this).addClass('disable o');
            $('#turno').text('Jugador 2');
    		if (spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
    		spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
    		spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
    		spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
    		spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
    		spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
    		spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
    		spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')) 
    	    {
                turns = 0;
    	    	alert('El ganador es el primer jugador');
                cant1++;
                $('#puntos1').text(cant1);
    	    	reset();
    	    } 
    	    
            }else {
    	    	turns++;
    		    $(this).text(x);
    		    $(this).addClass('disable x');
                $('#turno').text('Jugador 1');
    		    if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
    		    spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
    		    spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
    		    spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
    		    spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
    		    spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
    		    spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
    		    spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x'))
    		    {
                   turns = 0;
                   alert('El ganador es el segundo jugador');
                   cant2++;
                   $('#puntos2').text(cant2);
                   reset();
    	        } 
    	    }
    	}
     function reset(){
     	$('#board li').text('-');
        $('#board li').removeClass('disable');
        $('#board li').removeClass('o');
        $('#board li').removeClass('x');
        turns = 0;
        $('#turno').text('Jugador 1');
     }
 });
