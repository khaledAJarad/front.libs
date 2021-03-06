(function () {
    window.vtex = window.vtex || {};
    window.vtex.events = window.vtex.events || {};
    window.vtex.events = (function () {

        var listeners = window.vtex.events.listeners || {};

        var addEvent = function (name, eventType, data) {
            if (typeof eventType === "string") {
                data = data || {};
            } else {
                data = eventType || {};
                eventType = 'click';
            }

            $('body').on(eventType, '[data-event=' + name + ']', function (event) {
                var variables = {};

                for (var key in data) {
                    variables[key] = data[key](event.target);
                }

                sendEvent(name, variables);
            });
        };

        var sendEvent = function (name, variables) {
            variables = variables || {};

            for (var id in listeners) {
            	listeners[id].callback(name, variables);
            };
        };

        var addData = function (variables) {
            if (typeof variables === "object") {
            	sendEvent(null, variables);
            }
        };

        var onHashChange = function (callback) {
            $(window).on('hashchange', debounce(function (event) {
                var newUrl = event.originalEvent.newURL || window.location.href;
                callback(newUrl);
            }, 200));
        };

        var subscribe = function (id, callback, options) {
        	options = options || {};

    		listeners[id] = {
    			callback: callback,
    			whitelist: options.whitelist || [],
    			blacklist: options.blacklist || []
    		};
        };

        var unsubscribe = function (id) {
        	delete listeners[id];
        };

        return {
            listeners: listeners,
            addEvent: addEvent,
            sendEvent: sendEvent,
            addData: addData,
            subscribe: subscribe,
            unsubscribe: unsubscribe,
            actions: {
                onHashChange: onHashChange
            }
        };
    })();
    
    /* todo: alias provisório */
    var portalContext = vtex.portal && vtex.portal.context;
    vtex.portal = vtex.events;
    vtex.portal.context = portalContext;
    /* endtodo */

    window.eventData = function (attributeName) {
        return {
            closest: function (sender) {
                return $(sender).closest('[data-' + attributeName + ']').attr('data-' + attributeName);
            }
        }
    };

    vtex.events.actions.onHashChange(function (newUrl) {
        var path = newUrl.substring(newUrl.indexOf(location.pathname));

        window.ga && ga(function() {
            var trackers = ga.getAll(),
                tracker = trackers[0];

            ga(tracker.get('name') + '.send', 'pageview', path);
        });

        if (window._gat) {
            var tracker = _gat._getTrackers()[0];

            tracker._trackPageview(path);
        }
    });

    // From: http://remysharp.com/2010/07/21/throttling-function-calls/
    function debounce(fn, delay) {
        var timer = null;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        };
    }

})();
