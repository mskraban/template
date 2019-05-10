//Spreminjanje pisave
var size = 18; // Navadno besedilo paragrafi
var heading1 = 42; // H1
var heading2 = 36; // H2
var heading3 = 30; // H3
var heading4 = 26; // H4
var heading5 = 22; // H5
var heading6 = 20; // H6
var li = 20;
var form = 20;

$(document).ready(function() {

    fontSize = JSON.parse(localStorage.getItem("fontSize"));
    console.log(fontSize); //[1, 2, 3]
    var pSize = fontSize[0];
    var h1 = fontSize[1];
    var h2 = fontSize[2];
    var h3 = fontSize[3];
    var h4 = fontSize[4];
    var h5 = fontSize[5];
    var h6 = fontSize[6];
    var liSize = fontSize[7];
    var formSize = fontSize[8];


    $('p').css("font-size", pSize + "px");

    $("#big").click(function() {
        $("h1").css("font-size", heading1 + 2 + "px");
        $("h2").css("font-size", heading2 + 2 + "px");
        $("h3").css("font-size", heading3 + 2 + "px");
        $("h4").css("font-size", heading4 + 2 + "px");
        $("h5").css("font-size", heading5 + 2 + "px");
        $("h6").css("font-size", heading6 + 2 + "px");
        $("p").css("font-size", size + 2 + "px");
        $("li").css("font-size", size + 2 + "px");
        $("label").css("font-size", size + 2 + "px");
        $("form, input, legend, select, textarea, label, a").css("font-size", form + 2 + "px");
        size++;heading1++;heading2++;heading3++;heading4++;heading5++;heading6++;li++;form++;
        var fontSize = [size, heading1, heading2, heading3, heading4, heading5, heading6, li, form];

        localStorage.setItem("fontSize", JSON.stringify(fontSize));
        fontSize = JSON.parse(localStorage.getItem("fontSize"));
        console.log(fontSize); //[1, 2, 3]
    });
    $("#small").click(function() {
        $("h1").css("font-size", heading1 - 2 + "px");
        $("h2").css("font-size", heading2 - 2 + "px");
        $("h3").css("font-size", heading3 - 2 + "px");
        $("h4").css("font-size", heading4 - 2 + "px");
        $("h5").css("font-size", heading5 - 2 + "px");
        $("h6").css("font-size", heading6 - 2 + "px");
        $("p").css("font-size", size - 2 + "px");
        $("li").css("font-size", size - 2 + "px");
        $("label").css("font-size", size - 2 + "px");
        $("form, input, legend, select, textarea, label, a").css("font-size", form - 2 + "px");
        size--;heading1--;heading2--;heading3--;heading4--;heading5--;heading6--;li--;form--;

        var fontSize = [size, heading1, heading2, heading3, heading4, heading5, heading6, li, form];

        localStorage.setItem("fontSize", JSON.stringify(fontSize));
        fontSize = JSON.parse(localStorage.getItem("fontSize"));
        console.log(fontSize); //[1, 2, 3]
    });

    //Privzeta CSS tema
    var tema = "assets/css/main.css";
    $("head link#tema").attr("href", "assets/css/main.css");

    //Funkcija za preverjanje piskotkov
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    //CSS teme
    var css1 = "assets/css/main.css";
    var css2 = "assets/css/modra.css";
    var css3 = "assets/css/crna.css";
    var css4 = "assets/css/kontrast.css";

    var keks=getCookie("tema");
    if (keks != "") {
        console.log("Najdena tema:" + keks);
    }
    if (keks == "css1") {
        $("head link#tema").attr("href", css1);
        console.log("Nastavljena tema 1")
    }
    if (keks == "css2") {
        $("head link#tema").attr("href", css2);
        console.log("Nastavljena tema 2")
    }
    if (keks == "css3") {
        $("head link#tema").attr("href", css3);
        console.log("Nastavljena tema 3")
    }
    if (keks == "css4") {
        $("head link#tema").attr("href", css4);
        console.log("Nastavljena tema 4")
    }

    $('#cssSelector').change(function(){
        var izbranaTema = $(this).val();
        console.log(izbranaTema);
        if (izbranaTema == 1){
            $("head link#tema").attr("href", css1);
            document.cookie = "tema=css1";
        }
        else if (izbranaTema == 2){
            $("head link#tema").attr("href", css2);
            document.cookie = "tema=css2";
        }
        else if (izbranaTema == 3){
            $("head link#tema").attr("href", css3);
            document.cookie = "tema=css3";
        }
        else if (izbranaTema == 4){
            $("head link#tema").attr("href", css4);
            document.cookie = "tema=css4";
        }
    });


});