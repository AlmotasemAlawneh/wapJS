$(function() {
    $(document).keypress(cheer);
});

function cheer(e) {
    $("<li>")
        .text(String.fromCharCode(e.which).toUpperCase() + "!")
        .appendTo(REPLACE THIS WITH APPROPRIATE CODE);
    //setTimeout(removeCheer, 2000);
}

function removeCheer() {
    $(REPLACE THIS WITH APPROPRIATE CODE).first().remove();
}