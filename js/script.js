/**
 * Created by rjr910 on 28.10.2016.
 */
var init = (function () {

    function genNumber(zahl) {
        return Math.round(Math.random() * zahl);
    }

    var em = new ExcerciseMaker();
    em.fillNumberFields();


    $("#eingabe").on("input", function () {
        em.doCheck();
    });

    $('#maxValue').on("change", function (target) {
        em.setMaxNumber(this.value);
        em.fillNumberFields();
    });

})();