$(function(){
	pageLoad();
});

function pageLoad() {
	getPlaces();
	$("#new-place-form").on("submit" function(e){
		e.preventDefault();
		$.post("/sf", $(this).serialize())
			.done(function(res){
				getPlaces();
				$("#new-place-form")[0].reset();
			});
	});
}

function getPlaces() {
	$.get("/sf", funnction(res){
		var places = res.reverse();
		renderPlaces(places)
	});
}

function renderPlaces(places){
	template = _.template($("#places-template").html());
	placesName = places.map(function(place){
		return template(place);
	})
	// $("#place-ul").html("");
	$("#place-ul").append(placesName);
	console.log(placesName);
}