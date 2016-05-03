// map controller //
angular.module('ResQ', []);
	
resQ.run(function($rootScope) {
        $rootScope.logLatLng = function(e) {
          console.log('loc', e.latLng);
        }
        $rootScope.wayPoints = [
          {location: {lat:39.7392, lng: -104.0}, stopover: true},
          {location: {lat:39.0, lng: -105.0}, stopover: true},
        ];
      });
    
    
// responder function //
class Responder{
	constructor(name, skillLevel, availability, location, radioId) {
	this.name= name
	this.skillLevel= skillLevel
	this.availability= availability
	this.location= location
	this.radioId= radioId
}

	stringify() {
		console.log('\nName:' + this.name)
		console.log('\nSkill Level:' + this.skillLevel)
		console.log('\nAvailability:' + this.avialability)
		console.log('\nLocation:' + this.location)
		console.log('\nRadio ID:' + this.radioId)

	}
}

// Configure Kandy for calls.
(function (k, a, n, d, y) { 
s = a.createElement(n); 
y = a.getElementsByTagName(n)[0]; 
s.async = 1; 
s.src = d; 
y.parentNode.insertBefore(s, y) 
}  )(window, document, 'script', '//developer.kandy.io/javascripts/kandy/widgets/KandyPhone.js', 'kandy'); 
/*global kandy*/
//
//kandy.setup({
    // Designate HTML elements to be stream containers.
    ///remoteVideoContainer: document.getElementById('remote-stream'),
    ///localVideoContainer: document.getElementById('local-stream'),
    // Register listeners to call events.
    ///listeners: {
        ///media: onMedia,
        // Call events.
        ///callinitiated: onCallInitiated,
        ///callinitiatefailed: onCallInitiateFail,
        ///callrejected: onCallRejected,
        ///callrejectfailed: onCallRejectFailed,
        ///callignored: onCallIgnored,
       ///callignorefailed: onCallIgnoreFailed,
        ///callincoming: onCallIncoming,
        ///callanswered: onCallAnswered,
        ///callansweredFailed: onCallAnsweredFailed,
        ///oncall: onCall,
        ///callended: onCallEnded,
        ///callendedfailed: onCallEndedFailed
    ///}
//});//


// Responsive Design /
(function($) {

	var settings = {

		// Speed to resize panel.
			resizeSpeed: 600,

		// Speed to fade in/out.
			fadeSpeed: 300,

		// Size factor.
			sizeFactor: 11.5,

		// Minimum point size.
			sizeMin: 15,

		// Maximum point size.
			sizeMax: 20

	};

	var $window = $(window);

	$window.on('load', function() {

		skel
			.breakpoints({
				desktop: '(min-width: 737px)',
				mobile: '(max-width: 736px)'
			})
			.viewport({
				breakpoints: {
					desktop: {
						width: 1080,
						scalable: false
					}
				}
			})
			.on('+desktop', function() {

				var	$body = $('body'),
					$main = $('#main'),
					$panels = $main.find('.panel'),
					$hbw = $('html,body,window'),
					$footer = $('#footer'),
					$wrapper = $('#wrapper'),
					$nav = $('#nav'), $nav_links = $nav.find('a'),
					$jumplinks = $('.jumplink'),
					$form = $('form'),
					panels = [],
					activePanelId = null,
					firstPanelId = null,
					isLocked = false,
					hash = window.location.hash.substring(1);

				if (skel.vars.touch) {

					settings.fadeSpeed = 0;
					settings.resizeSpeed = 0;
					$nav_links.find('span').remove();

				}

				// Body.
					$body._resize = function() {
						var factor = ($window.width() * $window.height()) / (1440 * 900);
						$body.css('font-size', Math.min(Math.max(Math.floor(factor * settings.sizeFactor), settings.sizeMin), settings.sizeMax) + 'pt');
						$main.height(panels[activePanelId].outerHeight());
						$body._reposition();
					};

					$body._reposition = function() {
						if (skel.vars.touch && (window.orientation == 0 || window.orientation == 180))
							$wrapper.css('padding-top', Math.max((($window.height() - (panels[activePanelId].outerHeight() + $footer.outerHeight())) / 2) - $nav.height(), 30) + 'px');
						else
							$wrapper.css('padding-top', ((($window.height() - panels[firstPanelId].height()) / 2) - $nav.height()) + 'px');
					};

				// Panels.
					$panels.each(function(i) {
						var t = $(this), id = t.attr('id');

						panels[id] = t;

						if (i == 0) {

							firstPanelId = id;
							activePanelId = id;

						}
						else
							t.hide();

						t._activate = function(instant) {

							// Check lock state and determine whether we're already at the target.
								if (isLocked
								||	activePanelId == id)
									return false;

							// Lock.
								isLocked = true;

							// Change nav link (if it exists).
								$nav_links.removeClass('active');
								$nav_links.filter('[href="#' + id + '"]').addClass('active');

							// Change hash.
								if (i == 0)
									window.location.hash = '#';
								else
									window.location.hash = '#' + id;

							// Add bottom padding.
								var x = parseInt($wrapper.css('padding-top')) +
										panels[id].outerHeight() +
										$nav.outerHeight() +
										$footer.outerHeight();

								if (x > $window.height())
									$wrapper.addClass('tall');
								else
									$wrapper.removeClass('tall');

							// Fade out active panel.
								$footer.fadeTo(settings.fadeSpeed, 0.0001);
								panels[activePanelId].fadeOut(instant ? 0 : settings.fadeSpeed, function() {

									// Set new active.
										activePanelId = id;

										// Force scroll to top.
											$hbw.animate({
												scrollTop: 0
											}, settings.resizeSpeed, 'swing');

										// Reposition.
											$body._reposition();

										// Resize main to height of new panel.
											$main.animate({
												height: panels[activePanelId].outerHeight()
											}, instant ? 0 : settings.resizeSpeed, 'swing', function() {

												// Fade in new active panel.
													$footer.fadeTo(instant ? 0 : settings.fadeSpeed, 1.0);
													panels[activePanelId].fadeIn(instant ? 0 : settings.fadeSpeed, function() {

														// Unlock.
															isLocked = false;

													});
											});

								});

						};

					});

				// Nav + Jumplinks.
					$nav_links.add($jumplinks).click(function(e) {
						var t = $(this), href = t.attr('href'), id;

						if (href.substring(0,1) == '#') {

							e.preventDefault();
							e.stopPropagation();

							id = href.substring(1);

							if (id in panels)
								panels[id]._activate();

						}

					});

				// Window.
					$window
						.resize(function() {

							if (!isLocked)
								$body._resize();

						});

					$window
						.on('orientationchange', function() {

							if (!isLocked)
								$body._reposition();

						});

					if (skel.vars.IEVersion < 9)
						$window
							.on('resize', function() {
								$wrapper.css('min-height', $window.height());
							});

				// Fix: Placeholder polyfill.
					$('form').placeholder();

				// Prioritize "important" elements on mobile.
					skel.on('+mobile -mobile', function() {
						$.prioritize(
							'.important\\28 mobile\\29',
							skel.breakpoint('mobile').active
						);
					});

				// CSS polyfills (IE<9).
					if (skel.vars.IEVersion < 9)
						$(':last-child').addClass('last-child');

				// Init.
					$window
						.trigger('resize');

					if (hash && hash in panels)
						panels[hash]._activate(true);

					$wrapper.fadeTo(400, 1.0);

			})
			.on('-desktop', function() {

				window.setTimeout(function() {
					location.reload(true);
				}, 50);

			});

	});

})(jQuery);