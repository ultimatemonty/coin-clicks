import $ from 'jquery';
export function initialize(/* container, application */) {
	$(window).on('click', addCoin);
}

export default {
  name: 'coin-clicks',
  initialize: initialize
};

function addCoin(event) {
	const $img = $('<img>')
		.attr('src', '/coin-clicks/img/coin.gif')
		.css({
			position: 'absolute',
			left: `${event.pageX}px`,
			top: `${event.pageY}px`,
			zIndex: 100000
		})
		.appendTo(document.body);

	const $audio = $('<audio>')
		.attr('src', '/coin-clicks/sounds/coin.wav')
		.attr('autoplay', true)
		.appendTo(document.body);

	setTimeout(() => {
		$img.fadeOut(100);
		$audio.remove();
	}, 500);
}