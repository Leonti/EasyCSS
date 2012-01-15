$(function() {
    playground.init();

});

var playground = {
    
    init: function() {
        $('div.playground').each(function(i, element) {

            if (!$(element).data('show')) {
                var showButton = $('<div class="showPlayground button">Play with it!</div>');
                showButton.click(function() {
                    $(element).toggle();
                });
                $(element).before(showButton);               
            } else {
                $(element).show();
            }

            
            
            $(element).append('<div style="clear: both;">');

            var htmlContainer = $('pre.exampleHtml', $(element));        
            var exampleHtml = htmlContainer.html();
            htmlContainer.text(exampleHtml);

            var resultArea = $('<div class="resultArea">');
            resultArea.html(exampleHtml);
            if ($(element).data('width')) {
                resultArea.css('width', $(element).data('width'));
            }

            if ($(element).data('height')) {
                resultArea.css('height', $(element).data('height'));
            }        
            $(element).append(resultArea);        

            var userCodeArea = $('<div class="userCodeArea">');
            var userCodeTextArea = $('<textarea class="userCode"></textarea>');
            userCodeTextArea.tabby({tabString: '    '});
            userCodeTextArea.text($('pre.exampleCss', $(element)).text());

            if  ($(element).data('show')) {
                var showEditor = $('<div class="showEditor button">Show Editor</div>');
                showEditor.click(function() {
                    playground.toggleEditor(userCodeTextArea);
                });
                userCodeArea.append(showEditor);
            }

            var applyCss = $('<div class="applyCss button">Apply Css!</div>');
            var randomKey = 'userCode' + Math.ceil(Math.random()*100);
            applyCss.click(function() {
                playground.applyCss(userCodeTextArea, randomKey);
            });
            playground.applyCss(userCodeTextArea, randomKey);
            userCodeArea.append(applyCss);
                       
            userCodeArea.append(userCodeTextArea);
     
            $(element).append(userCodeArea);
            if  ($(element).data('show')) {
                playground.toggleEditor(userCodeTextArea);
            }  
            $(element).append('<div style="clear: both;">');
        });        
    },
    
    applyCss: function(userCodeTextArea, randomKey) {
                $('head style#' + randomKey).remove();

                $('head').prepend('<style id="' + randomKey + '">' + userCodeTextArea.val() + '</style>');        
    },
    
    toggleEditor: function(userCodeTextArea) {

        userCodeTextArea.toggle();
        $('.applyCss', userCodeTextArea.parent()).toggle();
        if (userCodeTextArea.css('display') == 'none') {
            $('.showEditor', userCodeTextArea.parent()).text('Show Editor'); 
        } else {
            $('.showEditor', userCodeTextArea.parent()).text('Hide Editor'); 
        }
    }
};