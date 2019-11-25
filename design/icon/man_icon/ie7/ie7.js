/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'man_icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-kennziffer': '&#xe952;',
		'icon-epaper': '&#xe953;',
		'icon-web-format': '&#xe954;',
		'icon-van': '&#xe94d;',
		'icon-translation-wf': '&#xe955;',
		'icon-original-format': '&#xe956;',
		'icon-office-format': '&#xe957;',
		'icon-industriemotor': '&#xe958;',
		'icon-pannenruf': '&#xe94e;',
		'icon-schiffsmotor': '&#xe959;',
		'icon-level': '&#xe95a;',
		'icon-sign-out': '&#xe95b;',
		'icon-formular-zuruecksetzen': '&#xe95c;',
		'icon-icon-fax': '&#xe95d;',
		'icon-icon-filter': '&#xe94c;',
		'icon-ergebnisliste-sortierung': '&#xe95e;',
		'icon-search-save': '&#xe95f;',
		'icon-ok_logo': '&#xe967;',
		'icon-vk_logo': '&#xe968;',
		'icon-arrow_lefttoright': '&#xe965;',
		'icon-arrow_uptodown': '&#xe966;',
		'icon-configurator': '&#xe950;',
		'icon-service_dealer': '&#xe90d;',
		'icon-services': '&#xe911;',
		'icon-quote-end': '&#xe946;',
		'icon-quote-start': '&#xe947;',
		'icon-communication': '&#xe94b;',
		'icon-bus': '&#xe91b;',
		'icon-truck': '&#xe91c;',
		'icon-cart': '&#xe960;',
		'icon-truck_half': '&#xe93f;',
		'icon-stopwatch': '&#xe940;',
		'icon-zoom': '&#xe941;',
		'icon-lock': '&#xe942;',
		'icon-crosshair': '&#xe943;',
		'icon-gearwheels': '&#xe944;',
		'icon-copy': '&#xe948;',
		'icon-thumb': '&#xe93b;',
		'icon-eye': '&#xe93c;',
		'icon-download': '&#xe939;',
		'icon-minus': '&#xe917;',
		'icon-info': '&#xe91a;',
		'icon-checkbox-deselect': '&#xe914;',
		'icon-checkbox-select': '&#xe915;',
		'icon-turn-left': '&#xe93d;',
		'icon-video_replay': '&#xe913;',
		'icon-video_play': '&#xe912;',
		'icon-phone': '&#xe618;',
		'icon-checkmark_bold': '&#xe611;',
		'icon-language': '&#xe605;',
		'icon-link_arrow_full_up': '&#xe607;',
		'icon-link_arrow_full_right': '&#xe608;',
		'icon-link_arrow_full_left': '&#xe609;',
		'icon-link_arrow_full_down': '&#xe60a;',
		'icon-link_arrow_outline_up': '&#xe60b;',
		'icon-link_arrow_outline_down': '&#xe60c;',
		'icon-link_arrow_outline_right': '&#xe60d;',
		'icon-link_arrow_outline_left': '&#xe60f;',
		'icon-arrow-maximise': '&#xe90e;',
		'icon-globe': '&#xe900;',
		'icon-mail': '&#xe002;',
		'icon-image': '&#xe010;',
		'icon-printer': '&#xe020;',
		'icon-file-pdf': '&#xe919;',
		'icon-document': '&#xe034;',
		'icon-microphone': '&#xe048;',
		'icon-folder': '&#xe059;',
		'icon-open': '&#xe128;',
		'icon-calendar': '&#xe901;',
		'icon-pause': '&#xe918;',
		'icon-volume-high': '&#xe90f;',
		'icon-volume-low': '&#xe910;',
		'icon-volume-mute2': '&#xe91d;',
		'icon-video': '&#xe902;',
		'icon-zoom-in': '&#xe904;',
		'icon-zoom-out': '&#xe90b;',
		'icon-phone2': '&#xe91e;',
		'icon-pin': '&#xe932;',
		'icon-pin-filled': '&#xe962;',
		'icon-video-link': '&#xe93a;',
		'icon-play': '&#xe933;',
		'icon-trash': '&#xe934;',
		'icon-magnifier': '&#xe935;',
		'icon-cv': '&#xe936;',
		'icon-fullscreen': '&#xe937;',
		'icon-social-youtube': '&#xe931;',
		'icon-social-facebook': '&#xe91f;',
		'icon-social-flickr': '&#xe921;',
		'icon-social-google': '&#xe925;',
		'icon-social-instagram': '&#xe927;',
		'icon-social-linkedin': '&#xe929;',
		'icon-social-twitter': '&#xe92b;',
		'icon-social-xing': '&#xe92d;',
		'icon-map-cursor': '&#xe938;',
		'icon-share': '&#xe963;',
		'icon-rss': '&#xe90c;',
		'icon-xing': '&#xe964;',
		'icon-google-plus': '&#xe903;',
		'icon-facebook': '&#xe905;',
		'icon-instagram': '&#xe906;',
		'icon-twitter': '&#xe907;',
		'icon-youtube': '&#xe908;',
		'icon-flickr': '&#xe909;',
		'icon-linkedin': '&#xe90a;',
		'icon-favourite_outline': '&#xe945;',
		'icon-favourite_filled': '&#xe93e;',
		'icon-plus': '&#xe916;',
		'icon-applicationfield-distribution_traffic': '&#xe94f;',
		'icon-applicationfield-long_distance_traffic': '&#xe951;',
		'icon-applicationfield-roadworks': '&#xe961;',
		'icon-balloon_bottom': '&#xe94a;',
		'icon-balloon_top': '&#xe949;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
