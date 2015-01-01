;(function() {
	var BasicCard = new CardPrototype({
		name: "BasicCard",
		init: function(id) {
			console.log("MyInitOverride");
			console.log(id);
		},
		reload: function() {
			console.log("MyReloadOverride");
		},
		render: function() {
			console.log("MyRenderOverride");
		}
	});
}(this));