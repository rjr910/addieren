/**
 * Created by rjr910 on 05.11.16.
 */




var VideoKeeper = function () {
    "use strict";
    var videos = [];

    var addAutoplay = function (videoString) {

        var src = "'https://www.youtube.com/embed/" + videoString + "?autoplay=1'";

        var result = "<iframe src=" + src + " frameborder=\"0\" allowfullscreen></iframe>";
        return result;
    };

    this.addVideo = function (videoString) {
        var vs = addAutoplay(videoString);

        videos.push(vs);
    };

    this.getVideos = function () {
        return videos;
    };
};