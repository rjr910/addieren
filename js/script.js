/**
 * Created by rjr910 on 28.10.2016.
 */

function init() {
    $("#zahl1").val(genNumber($('#maxValue').val()));
    $("#zahl2").val(genNumber($('#maxValue').val()));
    $("#eingabe").val(null);
}

init();

$("#eingabe").on("input",function () {
   if($("#eingabe").val()){
       var erge = Number($("#zahl1").val()) + Number($("#zahl2").val());
        if( erge == $("#eingabe").val()){
            $("#richtige").append("<div style='display: none'>" + $("#zahl1").val() + "+" + $("#zahl2").val() + "=" + erge +"</div>");
            $('#richtige div').fadeIn('slow');
            $("#progress").val($("#progress").val()+10);
            if(Number($("#progress").val()) >= 100){
                $(".aufgabe").hide();
                $("#richtige").hide();
                var videoString;
                switch (genNumber(2)+1){
                    case 1 : videoString = '<iframe width="853" height="480" src="https://www.youtube.com/embed/EIiBbUkRckE?autoplay=1" frameborder="0" allowfullscreen></iframe>';
                    break;
                    case 2 : videoString = '<iframe width="853" height="480" src="https://www.youtube.com/embed/Q_VpkXd1TKA?autoplay=1" frameborder="0" allowfullscreen></iframe>';
                    break;
                    case 3 : videoString = '<iframe width="853" height="480" src="https://www.youtube.com/embed/eo6i32yWbOY?autoplay=1" frameborder="0" allowfullscreen></iframe>';
                        break;
                    default: videoString = '<iframe width="853" height="480" src="https://www.youtube.com/embed/n-1YjVy2ZTs?autoplay=1" frameborder="0" allowfullscreen></iframe>';
                }
                $("#video").append(videoString);
            }
            init();
        }
   }
});


function genNumber(zahl){
    return Math.round(Math.random() * zahl);
}