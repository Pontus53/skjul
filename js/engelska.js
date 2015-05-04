$(document).ready(function () {
	var currentLocation = window.location.href;
	console.log(currentLocation);

	if (docCookies.hasItem("language")) {
    	var languageSelected = docCookies.getItem("language");

    	if (languageSelected = "english") {
    		engelska();
    	};
    	if (languageSelected = "svenska") {
    		svenska();
    	};
    }

    $("#english").click(function() {
    	docCookies.setItem("language", "english", 2592000);
    });
    $("#svenska").click(function() {
    	docCookies.setItem("language", "svenska", 2592000);
    });
});

function engelska() {
	if (currentLocation = "") {
		$("title").html("Home &middot TomorrowShed");
		$("#H1").html("Home");
		$("#H2").html("Images");
		$("#H3").html("Contact");
		$("#VIDARE1").html("Continue &raquo");
		$("#VIDARE2").html("Continue &raquo");
		$("#VIDARE3").html("Continue &raquo");
		$("#L1").html("Pictures");
		$("#L1D").html("More pictures of the shed, inside and outside.");
		$("#L2").html("Specifications");
		$("#L2D").html("Everything you need to know about our shed.");
		$("#L3").html("Price");
		$("#L3D").html("What's the price of the shed?");
		$("#F1").html('Robotic lawn mower. <span class="muted">Your lawn will take care of itself.</span>');
		$("#F1D").html("Our shed has enough space for just your lawn mower. Let our shed take care of the charging and lawn mowing while you relax and enjoy the wonderful climate.");
		$("#F2").html('Cylindrical storage. <span class="muted">A lot of space for your tools.</span>');
		$("#F2D").html("With our smart storage solutions is space no longer a problem. All your tools and equipment will find its place in our shed.");
		$("#F3").html('Solar panels. <span class="muted">For a sustainable future.</span>');
		$("#F3D").html("We think about the future and coming generations ability to sustain their needs. With our smart solar panels no other energy source is needed. Your robotic lawn mower will charge itself with green energy.");
		$("#BACK").html("Return to the top");
	}

	if (currentLocation = "") {
		$("title").html("Images &middot TomorrowShed");
		$("#H1").html("Home");
		$("#H2").html("Images");
		$("#H3").html("Contact");
	}
	
	if (currentLocation = "") {
		$("title").html("Price &middot TomorrowShed");
		$("#H1").html("Home");
		$("#H2").html("Images");
		$("#H3").html("Contact");
	}
}

function svenska() {
	if (currentLocation = "") {
		$("title").html("Hem &middot TomorrowShed");
		$("#H1").html("Hem");
		$("#H2").html("Bilder");
		$("#H3").html("Kontakta oss");
		$("#VIDARE1").html("Vidare &raquo");
		$("#VIDARE2").html("Vidare &raquo");
		$("#VIDARE3").html("Vidare &raquo");
		$("#L1").html("Bilder");
		$("#L1D").html("Fler bilder av skjulet, insida och utsida.");
		$("#L2").html("Specifikationer");
		$("#L2D").html("Lär dig allt du behöver veta om vårat trädgårdsskjul.");
		$("#L3").html("Pris");
		$("#L3D").html("Vad kostar detta skjul?");
		$("#F1").html('Robotgräsklippare. <span class="muted">Din gräsmatta har aldrig klippt sig själv så lätt.</span>');
		$("#F1D").html("Vårt skjul har plats för just din robotgräsklippare. Låt skjulet sköta laddning och gräsklippande medan du tar det lugnt och njuter av det underbara klimatet.");
		$("#F2").html('Cylindrisk förvaring. <span class="muted">Massor med plats för dina verktyg.</span>');
		$("#F2D").html("Med våra smarta förvaringslösningar är utrymme inte längre något problem. Alla dina verktyg och tillbehör får lätt plats någonstans bland alla förvaringsplatser.");
		$("#F3").html('Solpaneler. <span class="muted">För en hållbar utveckling.</span>');
		$("#F3D").html("Vi tänker på miljön och kommande generationers möjligheter att tillfredställa sina behov. Med våra smarta solpaneler behövs ingen annan strömförsörjning. Din robotgräsklippare kommer laddas med grön energi.");
		$("#BACK").html("Tillbaka upp");
	}

	if (currentLocation = "") {
		$("title").html("Bilder &middot TomorrowShed");
		$("#H1").html("Hem");
		$("#H2").html("Bilder");
		$("#H3").html("Kontakta oss");
	}
	
	if (currentLocation = "") {
		$("title").html("Pris &middot TomorrowShed");
		$("#H1").html("Hem");
		$("#H2").html("Bilder");
		$("#H3").html("Kontakta oss");
	}
}