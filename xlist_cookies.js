$(document).ready(function () {
//Main Cookie Variables
			var eCookie = $.cookie("eCookie");
			var dCookie = $.cookie("tCookie");
			var tCookie = $.cookie("dCookie");
//World Event Cookie Variables
			var jormagCookie = $.cookie("jormagCookie");
			var dredgeCookie = $.cookie("dredgeCookie");
			var zhaitanCookie = $.cookie("zhaitanCookie");
			var fireeleCookie = $.cookie("fireeleCookie");
			var shamanCookie = $.cookie("shamanCookie");
			var foulbearCookie = $.cookie("foulbearCookie");
			var arahCookie = $.cookie("arahCookie");
			var golemCookie = $.cookie("golemCookie");
			var wurmCookie = $.cookie("wurmCookie");
			var karkaCookie = $.cookie("karkaCookie");
			var destroyerCookie = $.cookie("destroyerCookie");
			var ulguthCookie = $.cookie("ulguthCookie");
			var sbCookie = $.cookie("sbCookie");
			var hydraCookie = $.cookie("hydraCookie");
			var teqCookie = $.cookie("teqCookie");
			var mawCookie = $.cookie("mawCookie");
			var shatCookie = $.cookie("shatCookie");
			var tripleCookie = $.cookie("tripleCookie");
			var rhendakCookie = $.cookie("rhendakCookie");
//Temples Cookie Variables
			var balthazarCookie = $.cookie("balthazarCookie");			
			var dwaynaCookie = $.cookie("dwaynaCookie");
			var grenthCookie = $.cookie("grenthCookie");
			var lyssaCookie = $.cookie("lyssaCookie");
			var melandruCookie = $.cookie("melandruCookie");
//Dungeons Cookie Variables
			var ac1Cookie = $.cookie("ac1Cookie");
			var ac2Cookie = $.cookie("ac2Cookie");
			var ac3Cookie = $.cookie("ac3Cookie");
			var cm1Cookie = $.cookie("cm1Cookie");
			var cm2Cookie = $.cookie("cm2Cookie");
			var cm3Cookie = $.cookie("cm3Cookie");
			var tauuCookie = $.cookie("tauuCookie");
			var taffCookie = $.cookie("taffCookie");
			var taaCookie = $.cookie("taaCookie");
			var se1Cookie = $.cookie("se1Cookie");
			var se2Cookie = $.cookie("se2Cookie");
			var se3Cookie = $.cookie("se3Cookie");
			var cof1Cookie = $.cookie("cof1Cookie");
			var cof2Cookie = $.cookie("cof2Cookie");
			var cof3Cookie = $.cookie("cof3Cookie");
			var hotw1Cookie = $.cookie("hotw1Cookie");
			var hotw2Cookie = $.cookie("hotw2Cookie");
			var hotw3Cookie = $.cookie("hotw3Cookie");
			var coe1Cookie = $.cookie("coe1Cookie");
			var coe2Cookie = $.cookie("coe2Cookie");
			var coe3Cookie = $.cookie("coe3Cookie");
			var arah1Cookie = $.cookie("arah1Cookie");
			var arah2Cookie = $.cookie("arah2Cookie");
			var arah3Cookie = $.cookie("arah3Cookie");
			var arah4Cookie = $.cookie("arah4Cookie");

//Main Checks		
			!( eCookie == "changed" ) || $('.eXbox').attr('checked',true);
			!( dCookie == "changed" ) || $('.tXbox').attr('checked',true);
			!( dCookie == "changed" ) || $('.dXbox').attr('checked',true);
//World Event Checks
			!( jormagCookie == "changed" ) || $('.jormagXbox').attr('checked',true);
			!( dredgeCookie == "changed" ) || $('.dredgeXbox').attr('checked',true);
			!( zhaitanCookie == "changed" ) || $('.zhaitanXbox').attr('checked',true);
			!( fireeleCookie == "changed" ) || $('.fireeleXbox').attr('checked',true);
			!( shamanCookie == "changed" ) || $('.shamanXbox').attr('checked',true);
			!( foulbearCookie == "changed" ) || $('.foulbearXbox').attr('checked',true);
			!( arahCookie == "changed" ) || $('.arahXbox').attr('checked',true);	
			!( golemCookie == "changed" ) || $('.golemXbox').attr('checked',true);
			!( wurmCookie == "changed" ) || $('.wurmXbox').attr('checked',true);
			!( karkaCookie == "changed" ) || $('.karkaXbox').attr('checked',true);
			!( destroyerCookie == "changed" ) || $('.destroyerXbox').attr('checked',true);
			!( ulguthCookie == "changed" ) || $('.ulguthXbox').attr('checked',true);
			!( sbCookie == "changed" ) || $('.sbXbox').attr('checked',true);
			!( hydraCookie == "changed" ) || $('.hydraXbox').attr('checked',true);
			!( teqCookie == "changed" ) || $('.teqXbox').attr('checked',true);
			!( mawCookie == "changed" ) || $('.mawXbox').attr('checked',true);
			!( shatCookie == "changed" ) || $('.shatXbox').attr('checked',true);
			!( tripleCookie == "changed" ) || $('.tripleXbox').attr('checked',true);
			!( rhendakCookie == "changed" ) || $('.rhendakXbox').attr('checked',true);			
//Temple Checks
			!( balthazarCookie == "changed" ) || $('.balthazarXbox').attr('checked',true);
			!( dwaynaCookie == "changed" ) || $('.dwaynaXbox').attr('checked',true);
			!( grenthCookie == "changed" ) || $('.grenthXbox').attr('checked',true);
			!( lyssaCookie == "changed" ) || $('.lyssaXbox').attr('checked',true);
			!( melandruCookie == "changed" ) || $('.melandruXbox').attr('checked',true);
//Dungeon Checks
			!( ac1Cookie == "changed" ) || $('.ac1Xbox').attr('checked',true);
			!( ac2Cookie == "changed" ) || $('.ac2Xbox').attr('checked',true);
			!( ac3Cookie == "changed" ) || $('.ac3Xbox').attr('checked',true);
			!( cm1Cookie == "changed" ) || $('.cm1Xbox').attr('checked',true);
			!( cm2Cookie == "changed" ) || $('.cm2Xbox').attr('checked',true);
			!( cm3Cookie == "changed" ) || $('.cm3Xbox').attr('checked',true);
			!( tauuCookie == "changed" ) || $('.tauuXbox').attr('checked',true);
			!( taffCookie == "changed" ) || $('.taffXbox').attr('checked',true);
			!( taaCookie == "changed" ) || $('.taaXbox').attr('checked',true);
			!( se1Cookie == "changed" ) || $('.se1Xbox').attr('checked',true);
			!( se2Cookie == "changed" ) || $('.se2Xbox').attr('checked',true);
			!( se3Cookie == "changed" ) || $('.se3Xbox').attr('checked',true);
			!( cof1Cookie == "changed" ) || $('.cof1Xbox').attr('checked',true);
			!( cof2Cookie == "changed" ) || $('.cof2Xbox').attr('checked',true);
			!( cof3Cookie == "changed" ) || $('.cof3Xbox').attr('checked',true);
			!( hotw1Cookie == "changed" ) || $('.hotw1Xbox').attr('checked',true);
			!( hotw2Cookie == "changed" ) || $('.hotw2Xbox').attr('checked',true);
			!( hotw3Cookie == "changed" ) || $('.hotw3Xbox').attr('checked',true);
			!( coe1Cookie == "changed" ) || $('.coe1Xbox').attr('checked',true);
			!( coe2Cookie == "changed" ) || $('.coe2Xbox').attr('checked',true);
			!( coe3Cookie == "changed" ) || $('.coe3Xbox').attr('checked',true);
			!( arah1Cookie == "changed" ) || $('.arah1Xbox').attr('checked',true);
			!( arah2Cookie == "changed" ) || $('.arah2Xbox').attr('checked',true);
			!( arah3Cookie == "changed" ) || $('.arah3Xbox').attr('checked',true);
			!( arah4Cookie == "changed" ) || $('.arah4Xbox').attr('checked',true);
			
//Main Cookie Maker
		$('.eXbox').change(function () {               
			$('#eSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("eCookie", "changed");
			} else {
				$.cookie("eCookie", null);
			}         
		}).change();
	
		$('.tXbox').change(function () {               
			$('#tSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("tCookie", "changed");
			} else {
				$.cookie("tCookie", null);
			}         
		}).change();
	
		$('.dXbox').change(function () {
			$('#dSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("dCookie", "changed");
			} else {
				$.cookie("dCookie", null);
			}         
		}).change();
		
//World Events Cookie Maker
		$('.jormagXbox').change(function () {               
			$('#jormagSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("jormagCookie", "changed", {expires : 24});
			} else {
				$.cookie("jormagCookie", null);
			}         
		}).change();
		
		$('.dredgeXbox').change(function () {               
			$('#dredgeSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("dredgeCookie", "changed", {expires : 24});
			} else {
				$.cookie("dredgeCookie", null);
			}         
		}).change();

		$('.zhaitanXbox').change(function () {               
			$('#zhaitanSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("zhaitanCookie", "changed", {expires : 24});
			} else {
				$.cookie("zhaitanCookie", null);
			}         
		}).change();
		
		$('.fireeleXbox').change(function () {               
			$('#fireeleSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("fireeleCookie", "changed", {expires : 24});
			} else {
				$.cookie("fireeleCookie", null);
			}         
		}).change();

		$('.shamanXbox').change(function () {               
			$('#shamanSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("shamanCookie", "changed", {expires : 24});
			} else {
				$.cookie("shamanCookie", null);
			}         
		}).change();

		$('.foulbearXbox').change(function () {               
			$('#foulbearSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("foulbearCookie", "changed", {expires : 24});
			} else {
				$.cookie("foulbearCookie", null);
			}         
		}).change();
		
		$('.arahXbox').change(function () {               
			$('#arahSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("arahCookie", "changed", {expires : 24});
			} else {
				$.cookie("arahCookie", null);
			}         
		}).change();

		$('.golemXbox').change(function () {               
			$('#golemSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("golemCookie", "changed", {expires : 24});
			} else {
				$.cookie("golemCookie", null);
			}         
		}).change();		
		
		$('.wurmXbox').change(function () {               
			$('#wurmSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("wurmCookie", "changed", {expires : 24});
			} else {
				$.cookie("wurmCookie", null);
			}         
		}).change();		
		
		$('.karkaXbox').change(function () {               
			$('#karkaSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("karkaCookie", "changed", {expires : 24});
			} else {
				$.cookie("karkaCookie", null);
			}         
		}).change();

		$('.destroyerXbox').change(function () {               
			$('#destroyerSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("destroyerCookie", "changed", {expires : 24});
			} else {
				$.cookie("destroyerCookie", null);
			}         
		}).change();

		$('.ulguthXbox').change(function () {               
			$('#ulguthSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("ulguthCookie", "changed", {expires : 24});
			} else {
				$.cookie("ulguthCookie", null);
			}         
		}).change();

		$('.sbXbox').change(function () {               
			$('#sbSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("sbCookie", "changed", {expires : 24});
			} else {
				$.cookie("sbCookie", null);
			}         
		}).change();
		
		$('.hydraXbox').change(function () {               
			$('#hydraSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("hydraCookie", "changed", {expires : 24});
			} else {
				$.cookie("hydraCookie", null);
			}         
		}).change();		

		$('.teqXbox').change(function () {               
			$('#teqSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("teqCookie", "changed", {expires : 24});
			} else {
				$.cookie("teqCookie", null);
			}         
		}).change();		
		
		$('.mawXbox').change(function () {               
			$('#mawSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("mawCookie", "changed", {expires : 24});
			} else {
				$.cookie("mawCookie", null);
			}         
		}).change();		

		$('.shatXbox').change(function () {               
			$('#shatSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("shatCookie", "changed", {expires : 24});
			} else {
				$.cookie("shatCookie", null);
			}         
		}).change();
		
	   $('.tripleXbox').change(function () {               
			$('#tripleSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("tripleCookie", "changed", {expires : 24});
			} else {
				$.cookie("tripleCookie", null);
			}         
		}).change();
		
	    $('.rhendakXbox').change(function () {               
			$('#rhendakSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("rhendakCookie", "changed", {expires : 24});
			} else {
				$.cookie("rhendakCookie", null);
			}         
		}).change();

//Temples Cookie Maker
		$('.balthazarXbox').change(function () {               
			$('#balthazarSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("balthazarCookie", "changed", {expires : 24});
			} else {
				$.cookie("balthazarCookie", null);
			}         
		}).change();

		$('.dwaynaXbox').change(function () {               
			$('#dwaynaSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("dwaynaCookie", "changed", {expires : 24});
			} else {
				$.cookie("dwaynaCookie", null);
			}         
		}).change();

		$('.grenthXbox').change(function () {               
			$('#grenthSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("grenthCookie", "changed", {expires : 24});
			} else {
				$.cookie("grenthCookie", null);
			}         
		}).change();

		$('.lyssaXbox').change(function () {               
			$('#lyssaSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("lyssaCookie", "changed", {expires : 24});
			} else {
				$.cookie("lyssaCookie", null);
			}         
		}).change();
	
		$('.melandruXbox').change(function () {               
			$('#melandruSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("melandruCookie", "changed", {expires : 24});
			} else {
				$.cookie("melandruCookie", null);
			}         
		}).change();
//Dungeons Cookie Maker
		$('.ac1Xbox').change(function () {   		
			$('#ac1Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("ac1Cookie", "changed", {expires : 24});
			} else {
				$.cookie("ac1Cookie", null);
			}         
		}).change();
		
		$('.ac2Xbox').change(function () {   		
			$('#ac2Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("ac2Cookie", "changed", {expires : 24});
			} else {
				$.cookie("ac2Cookie", null);
			}         
		}).change();
		
		$('.ac3Xbox').change(function () {   		
			$('#ac3Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("ac3Cookie", "changed", {expires : 24});
			} else {
				$.cookie("ac3Cookie", null);
			}         
		}).change();
		
		$('.cm1Xbox').change(function () {               
			$('#cm1Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("cm1Cookie", "changed", {expires : 24});
			} else {
				$.cookie("cm1Cookie", null);
			}         
		}).change();

		$('.cm2Xbox').change(function () {               
			$('#cm2Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("cm2Cookie", "changed", {expires : 24});
			} else {
				$.cookie("cm2Cookie", null);
			}         
		}).change();

		$('.cm3Xbox').change(function () {               
			$('#cm3Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("cm3Cookie", "changed", {expires : 24});
			} else {
				$.cookie("cm3Cookie", null);
			}         
		}).change();		
		
		$('.tauuXbox').change(function () {               
			$('#tauuSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("tauuCookie", "changed", {expires : 24});
			} else {
				$.cookie("tauuCookie", null);
			}         
		}).change();
		
		$('.taffXbox').change(function () {               
			$('#taffSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("taffCookie", "changed", {expires : 24});
			} else {
				$.cookie("taffCookie", null);
			}         
		}).change();

		$('.taaXbox').change(function () {               
			$('#taaSection').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("taaCookie", "changed", {expires : 24});
			} else {
				$.cookie("taaCookie", null);
			}         
		}).change();

		$('.se1Xbox').change(function () {               
			$('#se1Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("se1Cookie", "changed", {expires : 24});
			} else {
				$.cookie("se1Cookie", null);
			}         
		}).change();

		$('.se2Xbox').change(function () {               
			$('#se2Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("se2Cookie", "changed", {expires : 24});
			} else {
				$.cookie("se2Cookie", null);
			}         
		}).change();		
		
		$('.se3Xbox').change(function () {               
			$('#se3Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("se3Cookie", "changed", {expires : 24});
			} else {
				$.cookie("se3Cookie", null);
			}         
		}).change();		
		
		$('.cof1Xbox').change(function () {               
			$('#cof1Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("cof1Cookie", "changed", {expires : 24});
			} else {
				$.cookie("cof1Cookie", null);
			}         
		}).change();
		
		$('.cof2Xbox').change(function () {               
			$('#cof2Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("cof2Cookie", "changed", {expires : 24});
			} else {
				$.cookie("cof2Cookie", null);
			}         
		}).change();

		$('.cof3Xbox').change(function () {               
			$('#cof3Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("cof3Cookie", "changed", {expires : 24});
			} else {
				$.cookie("cof3Cookie", null);
			}         
		}).change();

		$('.hotw1Xbox').change(function () {               
			$('#hotw1Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("hotw1Cookie", "changed", {expires : 24});
			} else {
				$.cookie("hotw1Cookie", null);
			}         
		}).change();

		$('.hotw2Xbox').change(function () {               
			$('#hotw2Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("hotw2Cookie", "changed", {expires : 24});
			} else {
				$.cookie("hotw2Cookie", null);
			}         
		}).change();

		$('.hotw3Xbox').change(function () {               
			$('#hotw3Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("hotw3Cookie", "changed", {expires : 24});
			} else {
				$.cookie("hotw3Cookie", null);
			}         
		}).change();		
		
		$('.coe1Xbox').change(function () {               
			$('#coe1Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("coe1Cookie", "changed", {expires : 24});
			} else {
				$.cookie("coe1Cookie", null);
			}         
		}).change();
		
		$('.coe2Xbox').change(function () {               
			$('#coe2Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("coe2Cookie", "changed", {expires : 24});
			} else {
				$.cookie("coe2Cookie", null);
			}         
		}).change();
		
		$('.coe3Xbox').change(function () {               
			$('#coe3Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("coe3Cookie", "changed", {expires : 24});
			} else {
				$.cookie("coe3Cookie", null);
			}         
		}).change();

		$('.arah1Xbox').change(function () {               
			$('#arah1Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("arah1Cookie", "changed", {expires : 24});
			} else {
				$.cookie("arah1Cookie", null);
			}         
		}).change();
		
		$('.arah2Xbox').change(function () {               
			$('#arah2Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("arah2Cookie", "changed", {expires : 24});
			} else {
				$.cookie("arah2Cookie", null);
			}         
		}).change();
		
		$('.arah3Xbox').change(function () {               
			$('#arah3Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("arah3Cookie", "changed", {expires : 24});
			} else {
				$.cookie("arah3Cookie", null);
			}         
		}).change();
		
		$('.arah4Xbox').change(function () {               
			$('#arah4Section').toggle(!this.checked);
			if( this.checked ) {
				$.cookie("arah4Cookie", "changed", {expires : 24});
			} else {
				$.cookie("arah4Cookie", null);
			}         
		}).change();		
});  //end function