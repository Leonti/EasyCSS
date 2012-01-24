$(function() {
    $.get('navigation.inc.html', function(content) {
        $('body').append(content);
        
        var links = $('div#navigationContent a');
        var count = links.size();
        var page = 0;
        for (var i = 0; i < count; i++) {
            if ($(links.get(i)).prop('href') == window.location.href) {
                page = i;
            }
        }
        
        
     if (page != count) {
         $("#navigationNext").html('<a href="' + $(links.get(page + 1)).attr('href') + '">' + $(links.get(page + 1)).text() + '</a>');
     }
     
     if (page > 0) {
         $("#navigationPrev").html('<a href="' + $(links.get(page - 1)).attr('href') + '">' + $(links.get(page - 1)).text() + '</a>');
     }
     
    });
}); 
