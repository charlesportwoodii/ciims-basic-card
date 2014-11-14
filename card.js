;(function() {
	var BasicCard = new CardPrototype({
		name: "BasicCard",
		init: function() {
			console.log("MyInitOverride");
		},
		reload: function() {
			console.log("MyReloadOverride");
		},
		render: function() {
			console.log("MyRenderOverride");
		}
	});
}(this));