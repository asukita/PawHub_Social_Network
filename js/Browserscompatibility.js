
			var BrowserDetect = {
				init : function() {
					this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
					this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
					this.OS = this.searchString(this.dataOS) || "an unknown OS";
				},
				searchString : function(data) {
					for (var i = 0; i < data.length; i++) {
						var dataString = data[i].string;
						var dataProp = data[i].prop;
						this.versionSearchString = data[i].versionSearch || data[i].identity;
						if (dataString) {
							if (dataString.indexOf(data[i].subString) != -1)
								return data[i].identity;
						} else if (dataProp)
							return data[i].identity;
					}
				},
				searchVersion : function(dataString) {
					var index = dataString.indexOf(this.versionSearchString);
					if (index == -1)
						return;
					return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
				},
				dataBrowser : [{
					string : navigator.userAgent,
					subString : "Chrome",
					identity : "Chrome"
				}, {
					string : navigator.userAgent,
					subString : "OmniWeb",
					versionSearch : "OmniWeb/",
					identity : "OmniWeb"
				}, {
					string : navigator.vendor,
					subString : "Apple",
					identity : "Safari",
					versionSearch : "Version"
				}, {
					prop : window.opera,
					identity : "Opera",
					versionSearch : "Version"
				}, {
					string : navigator.vendor,
					subString : "iCab",
					identity : "iCab"
				}, {
					string : navigator.vendor,
					subString : "KDE",
					identity : "Konqueror"
				}, {
					string : navigator.userAgent,
					subString : "Firefox",
					identity : "Firefox"
				}, {
					string : navigator.vendor,
					subString : "Camino",
					identity : "Camino"
				}, {// for newer Netscapes (6+)
					string : navigator.userAgent,
					subString : "Netscape",
					identity : "Netscape"
				}, {
					string : navigator.userAgent,
					subString : "MSIE",
					identity : "Explorer",
					versionSearch : "MSIE"
				}, {
					string : navigator.userAgent,
					subString : "Gecko",
					identity : "Mozilla",
					versionSearch : "rv"
				}, {// for older Netscapes (4-)
					string : navigator.userAgent,
					subString : "Mozilla",
					identity : "Netscape",
					versionSearch : "Mozilla"
				}],
				dataOS : [{
					string : navigator.platform,
					subString : "Win",
					identity : "Windows"
				}, {
					string : navigator.platform,
					subString : "Mac",
					identity : "Mac"
				}, {
					string : navigator.userAgent,
					subString : "iPhone",
					identity : "iPhone/iPod"
				}, {
					string : navigator.platform,
					subString : "Linux",
					identity : "Linux"
				}]

			};
			BrowserDetect.init();


			$(document).ready(function() {
				var br = BrowserDetect.browser;
				if (br == 'Explorer') {
					$('#typepostSel').css('padding-left', '25px');
					$('.publifrm_activities').css('width', '280px');
				}
				
				if ((br == 'Explorer')&&(BrowserDetect.version = 7)) {
					//$('.post_line').css('top', '4px');
				}
				
				if(br == 'Firefox'){
					$('.navigation .active').css('padding-bottom', '5px');
					$('#typepostSel').css('text-indent', '0');
					$('#typepostSel').css('padding-left', '25px');
					$('#typepostSel').css('padding-top', '3px'); 
					$('.userimg_post').css('margin-top', '8px');
					$('.user_name').css('padding-top', '8px');
					$('.user_msg').css('margin-top', '-4px'); 
					$('.post_line').css('top', '5px');
				}
			});
