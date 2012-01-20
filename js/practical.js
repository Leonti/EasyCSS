$(function() {
    practicalTest .init();
});

var practicalTest = {

    init: function() {
        $("textarea#userCss").tabby({tabString: '    '});
        
        var randomKey = 'userCode' + Math.ceil(Math.random()*100);
        $('#applyCss').bind('click', function() {

            $('head style#' + randomKey).remove();
            $('head').prepend('<style id="' + randomKey + '">' + $('textarea#userCss').val() + '</style>');             
        });

        $('#viewCss').bind('click', function() {
            $('div#solution').show();
        });        
    }
};

