define(
    ['jquery'],
    function() {
        /**
         * Trivial jQuery plugin for demonstrating require.js
         */
        $.extend($, {
            trivial: function(foo) {
                return "Hello " + foo;
            }
        });
    }
);