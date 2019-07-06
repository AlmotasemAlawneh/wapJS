$(attachHandlers);

function attachHandlers() {
    sBlock = $('#start');
    eBlock = $('#end');
    boundaries = $('#maze .boundary'); /*array of boundaries*/
    announcement = $('#status');
    boundaries.mouseover(boundaryTouched);
    sBlock.click(boundaryReset);
    eBlock.mouseover(announce);
}

function boundaryTouched() {
    boundaries.addClass('youlose');
    announce();
}

function boundaryReset() {
    $('#status')[0].innerHTML = "Click the \"S\" to begin.";
    boundaries.removeClass('youlose');
}

function announce() {
    // var color = );
    if (boundaries[0].className == 'boundary') {
        if (boundaries.css('background-color') == 'rgb(238, 238, 238)') {
            $('#status')[0].innerHTML = "You Win :)";
        }
    } else {
        $('#status')[0].innerHTML = "You Lose :(";
    }
}