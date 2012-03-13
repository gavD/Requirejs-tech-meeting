require([
    'http://gavd.co.uk/huge-jquery.min.js',
    'js/trivial.jquery.plugin.js'
], function() {
    $('#intro').text($.trivial('Will this work now?'));
});