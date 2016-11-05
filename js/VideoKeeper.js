/**
 * Created by rjr910 on 05.11.16.
 */
var VideoKeeper = (function () {

    var videos = [];

    this.addVideo = function (videoString) {
        var vs = addAutoplay(videoString);

        videos.push(vs);
    };

    var addAutoplay = function (videoString) {
        return videoString;
    };

    this.getVideos = function () {
        return videos;
    }
})();