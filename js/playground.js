$(function() {
    
    $('div.playground').each(function(i, element) {
        
        var showButton = $('<div class="showPlayground button">Play with it!</div>');
        showButton.click(function() {
            $(element).toggle();
        });
        $(element).before(showButton);
        $(element).append('<div style="clear: both;">');
        
        var htmlContainer = $('pre.exampleHtml', $(element));
        var exampleHtml = htmlContainer.html();
        htmlContainer.text(exampleHtml);
        
        var resultArea = $('<div class="resultArea">');
        resultArea.html(exampleHtml);
        $(element).append(resultArea);        
        
        var userCodeArea = $('<div class="userCodeArea">');
        var userCodeTextArea = $('<textarea class="userCode"></textarea>');
        userCodeTextArea.tabby({tabString: '    '});
        userCodeTextArea.text($('pre.exampleCss', $(element)).text());
        
        var applyCss = $('<div class="applyCss button">Apply Css!</div>');
        var randomKey = 'userCode' + Math.ceil(Math.random()*100);
        applyCss.click(function() {
            $('head style#' + randomKey).remove();
            
            $('head').prepend('<style id="' + randomKey + '">' + userCodeTextArea.val() + '</style>');
        });
        userCodeArea.append(applyCss);
        userCodeArea.append(userCodeTextArea);
        $(element).append(userCodeArea);
        $(element).append('<div style="clear: both;">');
    });
});