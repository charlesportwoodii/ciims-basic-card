;(function() {
	var BasicCard;

	BasicCard.prototype.init = function() {
		console.log("init");
	}

	BasicCard.prototype.render = function() {
		console.log("render");
	}

	function BasicCard() {
		console.log("Initialize BasicCard");
	};

	// Export the object to the global namespace
	if (typeof module !== "undefined" && module !== null)
    	module.exports = BasicCard;
  	else
    	window.BasicCard = BasicCard;
}(this));