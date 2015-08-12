$(function(){

    if (!localStorage['connected']){ // If a user is not connected
        $('nav').css("margin-left", "-43px").hide();
        $('header #title, main div').hide();
        $('header .connect, main #connect').show();

    } else { // if a user is connected

        // Set the defaults for when logged in
        $('body').css('height','540px');
        $('main #connect, #header .connect').hide();
        $('#sToggle').show();

        // Use sidebar state of last time
        if(localStorage['sidebar'] == 'false'){ $('nav').css("margin-left", "-43px").hide();}
        else if (localStorage['sidebar'] == 'true' || !localStorage['sidebar']) { $('nav').show(); }

        // Sidebar, open and close
        $('#sToggle').click(function(){
            if(localStorage['sidebar'] == 'false'){
                $('nav').show().animate({"margin-left": '+=43'}, 100);
                localStorage['sidebar'] = 'true';
            } else if (localStorage['sidebar'] == 'true' || !localStorage['sidebar']) {
                $('nav').animate({"margin-left": '-=43'}, 100, function(){$('nav').hide();});
                localStorage['sidebar'] = 'false';
            }
        });

        // Change tabs
        if(localStorage['tabs']){ // Check and change to tab from last time
            var tabs = localStorage['tabs'];
            $("main > div, header #title").hide();
            $("nav #top div").removeClass('on'); $("nav #top #"+tabs).addClass('on');
            $("header #title."+tabs+", main #"+tabs).show();
        }

        $("nav #top div").click(function(){ // Change tabs
            if($(this).attr('id') != "account"){
                $("header #title, main > div").hide();
                $("nav #top div").removeClass('on'); $(this).addClass('on');
                $("header #title."+$(this).attr('id')+", main #"+$(this).attr('id')).show();
                localStorage['tabs'] = $(this).attr('id');
            }
        });

        // Resize textarea
        var txt = $('textarea'), hiddenDiv = $(document.createElement('div')), content = null; txt.addClass('txtstuff'); hiddenDiv.addClass('hiddendiv common'); $('body').append(hiddenDiv);
        txt.on('keyup', function () { content = $(this).val(); content = content.replace(/\n/g, '<br>'); hiddenDiv.html(content + '<br class="lbr">'); $(this).css('height', hiddenDiv.height()); });
    }
});
