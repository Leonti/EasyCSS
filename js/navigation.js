$(function() {
    $.get('navigation.inc.html', function(content) {
        $('body').append(content);
    });
}); 
