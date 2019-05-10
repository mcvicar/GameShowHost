var map;

$(function(){
    $.ajax({
        'async': false,
        'global': false,
        type:'GET',
        dataType:'json',
        url:'/javascripts/board.json',
        success:function(data){
            map = data;
            loadBoard();
        }
    });
    $('.unanswered').click(function(){
        var selection = $(this);
        var category = selection.parent().data('category');
        var question = selection.data('question');
        var value = map[category].questions[question].value;
        var answers = $('#answers');
        var team = $('#team-question').val();
        selection.removeClass("unanswered");

        $('#cat-title').empty().text(map[category].name);
        $('#cat-question').empty().text(map[category].questions[question].question);

        answers.empty();
        socket.emit('team question', map, category, question, team, 1);
        socket.emit('show question', selection, "something else");
    });

});

function loadBoard(){
    var board = $('#main-board');
    var columns = map.length;
    var column_width = parseInt(12/columns);
    $.each(map, function(i,category){
        //load category name
        var header_class = 'text-center col-md-' + column_width;
        if (i === 0 && columns % 2 != 0){
            header_class += ' col-md-offset-1';
        }
        $('.panel-heading').append(
            '<div class="'+header_class+'"><h4>'+category.name+'</h4></div>'
        );
        //add column
        var div_class = 'category col-md-' + column_width;
        if (i === 0 && columns % 2 != 0){
            div_class += ' col-md-offset-1';
        }
        board.append('<div class="'+div_class+'" id="cat-'+i+'" data-category="'+i+'"></div>');
        var column = $('#cat-'+i);
        $.each(category.questions, function(n,question){
            column.append('<div class="well question unanswered" data-question="'+n+'">'+question.value+'</div>')
        });
    });
    $('.panel-heading').append('<div class="clearfix"></div>')
}

function handleAnswer(){
    $('.answer').click(function(){
        var tile= $('div[data-category="'+$(this).data('category')+'"]>[data-question="'+$(this).data('question')+'"]')[0];
        $(tile).empty().removeClass('unanswered').unbind().css('cursor','not-allowed');
    })
}
