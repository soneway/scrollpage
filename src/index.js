// @koala-prepend 'soneway/soneway.js';
// @koala-prepend 'soneway/plugin/carousel.js';

(function (window, $) {
    var document = window.document;

    //焦点图特效
    var $carousel = $('#carousel');
    $carousel.carousel({
        isVertical: true,
        isAutoPlay: false
    });


    //文档加载完成
    $(function () {
        $(document.body).addClass('loaded');
    });

})(this, $);