// TopBar (Header v8)
function handleTopBar() {
	jQuery(".topbar-toggler").on("click", function() {
	  if (jQuery(".topbar-toggler").hasClass("topbar-list-visible")) {
		jQuery(".topbar-menu").slideUp();
		jQuery(this).removeClass("topbar-list-visible");
	  } else {
		jQuery(".topbar-menu").slideDown();
		jQuery(this).addClass("topbar-list-visible");
	  }
	});
}

$( document ).ready(function() {
	handleTopBar();	
})

// Карусель

$(document).ready(function() {
	$('#myCarousel').carousel({
		interval: 10000
	});
	$(".top-contacts .search-close").on("click", function() {
		$(".top-contacts-search-block").slideUp();
		$(".top-contacts-search-block").removeClass("top-contacts-search-visible");
	});

	$(".my-search").click(function (event) {
		$(".top-contacts-search-block form").slideDown();
	});
});

