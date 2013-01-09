function Cards(){

	this.card_pile = [];
	this.size = 52;		// Size of card deck
	
	this.started = false;
	
	this.card_suit = [];
		
	this.init = function(){
		for(var i=0;i!=this.size;++i){
			this.card_pile.push(i);
		}
		this.started = true;
		this.card_suit = Array("H","D","C","S");
	};	
	this.pickCard = function(){
		if( this.card_pile.length == 0 ){
			return -1;
		}
		var card_index=Math.floor(Math.random()*this.card_pile.length);
		card = this.card_pile[card_index];
		this.card_pile.splice(card_index,1);
		return card;
	};
	this.displayCard = function(_card){
		card_suit = this.calcSuit( _card );
		start_point = card_suit * 13;
		card_number = _card - start_point + 1;
		//	str = _card + " " + start_point + " " + card_number + " " + card_suit;	// Debug stuff
		//card_result = card_number + " " + this.card_suit[card_suit];
		oCard = new Object();
		oCard.number = card_number;
		oCard.suit = this.card_suit[card_suit];
		return oCard;
	};
	this.calcSuit = function(_card){
		return Math.floor( _card / 13 );
	};
};