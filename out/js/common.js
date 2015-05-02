(function() {

    // console.log('test');

    var win = $(window);
    var dim = {
        hei : 0,
        wid : 0
    };

    win
        .on('scroll.window', function() {
            dim.hei = win.height();
            dim.wid = win.width();


            $('header')
                .find('.inner')
                .text("width : "+ dim.hei +" " +
                      "height : "+ dim.wid +"");
        });

    setTimeout(function() {
        win.trigger('scroll.window');
        console.log('tttt');
    }, 1500);

})();