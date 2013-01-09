var map;
var show_map_info;
var cards = new Cards();

var king_on_display = false;
var king_counter = 0;

$(document).ready(function(){
	layout();
	$("#next_btn").click(function(){
		nextCard();
		$("#next_btn").hide();
	});
	cards.init();
	$("#card_graphic").click(function(){
		nextCard();
	});
});
var setClicker = function(){

};
var layout = function(){
	surface = $(window).height()-8;
	$("#surface").css({height:surface});
};
$("#index").live("pageshow", function(){

	if( cards.started ){
		$("#card_graphic").html('');	
		var card = cards.pickCard();
		var str = "Empty Deck Bro";
		if( card != -1 ){
			oCard = cards.displayCard( card );
			if( oCard.suit == "H" ){
				$("#card_graphic").css({'background-image':'url(images/H.png)'});
			}
			if( oCard.suit == "D" ){
				$("#card_graphic").css({'background-image':'url(images/D.png)'});
			}
			if( oCard.suit == "C" ){
				$("#card_graphic").css({'background-image':'url(images/C.png)'});
			}
			if( oCard.suit == "S" ){
				$("#card_graphic").css({'background-image':'url(images/S.png)'});
			}
			if( oCard.number == 13 ){
				king_on_display = true;
				oCard.number = "K";
			}
			if( oCard.number == 12 ){
				oCard.number = "Q";
			}
			if( oCard.number == 11 ){
				oCard.number = "J";
			}
			if( oCard.number == 1 ){
				oCard.number = "A";
			}
			// if( oCard.number > 6 ){
				// oCard.number = "K";
			// }
			if( oCard.number != "K" ){
				$("#card_graphic").html( oCard.number );
				$("#card_graphic").show();
			}else{
				kingSlider( oCard.suit );
			}
			str = oCard.number + " " + oCard.suit;
		}
		//$("#card_number").html( str );
	}
});
var nextCard = function(){
	if( king_counter == 4 ){
		alert( "Game Over" );
		return;
	}
	if( king_on_display ){
		$("#card_graphic").show();
		$("#card_graphic").css({'padding-top':120});
	}
	$("#card_graphic").hide();
	$.mobile.changePage( "#index", { allowSamePageTransition: true, transition:"flip" } );
};
var kingSlider = function(_suit){
	++king_counter;
	king = new Image();
	src = "images/K"+_suit+".png";
	king.src = src;
	$("#card_graphic").css({'padding-top':20});
	$("#card_graphic").hide();
	$("#card_graphic").append( king );
	$("#card_graphic").show("slow");
	king_on_display = true;
	if( king_counter == 4 ){
		$("#game_over").show("slow");
	}
};