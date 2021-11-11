var photos = [];
var from = 0;
var to = 7;

function getImages() {
    $.ajax({
        url: "memes"
    })
        .done(function (data) {
            $(data).find(".ipfs-hash").each(function (i, e) {
                var url = $(e).attr("href");
                if (url && (url.endsWith(".jpg") || url.endsWith(".png") || url.endsWith(".gif"))) {
                    photos.push({ url: url });
                }
            });
            if (photos.length > 0) {
                photos = photos.reverse();
                showPhotos(photos, from, to);
            }
        });
}

var showPhotos = function (photos, from, to) {
    var photosToAppend = photos.slice(from, to);
    photosToAppend.forEach(el => {
        $('#image-container').append(`<a href='${el.url}'><img alt='${el.url}' src='${el.url}'/></a>`);
    });
    $('#image-container').justifiedGallery({
        rowHeight: 300,
        maxRowHeight: 300,
        captions: false
    });
}

getImages();
