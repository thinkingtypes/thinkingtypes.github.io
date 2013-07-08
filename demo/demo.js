var isPanelOpended = true;
var switcher = '<div id="style-switcher"><div id="toggle-button"></div>';
switcher += '<h3 class="demo"><i class="icon-tint"></i> Colors</h3>';
switcher += '<ul class="color-list">';
switcher += '<li><a id="default" href="javascript:;">Default (Blue)</a></li>';
switcher += '<li><a id="green" href="javascript:;">Green</a></li>';
switcher += '<li><a id="red" href="javascript:;">Red</a></li>';
switcher += '<li><a id="orange" href="javascript:;">Orange</a></li>';
switcher += '<li><a id="yellow" href="javascript:;">Yellow</a></li>';
switcher += '<li><a id="purple" href="javascript:;">Purple</a></li>';
switcher += '</ul><br/>';
switcher += '<h3 class="demo"><i class="icon-magic"></i> Backgrounds</h3>';
switcher += '<ul id="bg-list">';
switcher += '<li><a id="bg1" href="javascript:;"><img src="images/bg/skelatal_weave.png" alt=""></a></li>';
switcher += '<li><a id="bg2" href="javascript:;"><img src="images/bg/egg_shell.png" alt=""></a></li>';
switcher += '<li><a id="bg3" href="javascript:;"><img src="images/bg/gplaypattern.png" alt=""></a></li>';
switcher += '<li><a id="bg4" href="javascript:;"><img src="images/bg/pyramid.png" alt=""></a></li>';
switcher += '<li><a id="bg5" href="javascript:;"><img src="images/bg/shattered.png" alt=""></a></li>';
switcher += '<li><a id="bg6" href="javascript:;"><img src="images/bg/diagonal_striped_brick.png" alt=""></a></li>';
switcher += '<li><a id="bg7" href="javascript:;"><img src="images/bg/hexellence.png" alt=""></a></li>';
switcher += '<li><a id="bg8" href="javascript:;"><img src="images/bg/squairy_light.png" alt=""></a></li>';
switcher += '<li id="no-bg"><a href="javascript:;">No background</a></li>';
switcher += '</ul>';
switcher += '</div>';
$('body').append(switcher);
$('#toggle-button').click(function() {
    if (isPanelOpended) {
        isPanelOpended = false;
        $('#style-switcher').stop().animate({
            left : '-153px'
        }, 1800, 'easeOutQuint')
    } else {
        isPanelOpended = true;
        $('#style-switcher').stop().animate({
            left : '0'
        }, 1000, 'easeOutQuint')
    }
});
$('ul.color-list a').click(function() {
    var path = window.location.pathname;
    var link = 'css/colors/' + $(this).attr('id') + '.css';
    if (path.indexOf('elements/') > 0) {
        link = '../css/colors/' + $(this).attr('id') + '.css';
    }
    if ($('#template-color').length > 0) {
        if ($(this).attr('id') != 'default') {
            $('#template-color').attr('href', link);
        } else {
            $('#template-color').remove();
        }
    } else {
        if ($(this).attr('id') != 'default') {
            $('head').append('<link id="template-color" rel="stylesheet" href="' + link + '" />');
        }
    }
});

$('#bg-list li').click(function() {
    if($(this).attr('id') != 'no-bg') {
        $('body, .testimonial-corner').css('background', 'url(' + $(this).find('img').attr('src') + ')');
    } else {
        $('body, .testimonial-corner').removeAttr('style');
    }
    
});
