(function (window) {

    var $ = require('jq');
    require('base');
    //require('ui');
    //require('customalert');
    //require('scroll');


    ////面板显示回调函数
    //$.panelLoaded = function ($this, isInit) {
    //    var load = loader[$this.attr('id')];
    //    typeof load === 'function' && load($this, isInit);
    //};
    ////面板隐藏回调函数
    //$.panelUnloaded = function ($this) {
    //    var unload = (loader[$this.attr('id')] || {}).unload;
    //    typeof unload === 'function' && unload($this);
    //};


    //页面模块加载对象
    var loader = {
        carousel: require('./page/carousel.js')
    };

})(window);