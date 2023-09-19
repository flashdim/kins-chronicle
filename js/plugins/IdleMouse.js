//=============================================================================
// IdleMouse
//=============================================================================
/*:
* @plugindesc Automatically hides mouse if it hasn't been moved for a while.
* @author Nolonar
*
* @param Idle timeout
* @desc How long the mouse can remain idle before it is hidden (in milliseconds).
* @default 3000
* @type number
*
*
* @help This plugin does not provide plugin commands.
*
* Note:
* The mouse cursor will only be hidden if it is above the game window.
*/
(function() {
    var timeoutDelay = Number(PluginManager.parameters('IdleMouse')['Idle timeout']) || 3000;
    var mouseIdleTimeout = null;
    var defaultCursor = document.body.style.cursor;
    hideMouse(); // Hidden by default.
    var window_onmousemove = window.onmousemove;
    window.onmousemove = function() {
        if (window_onmousemove) window_onmousemove.call(this); // Just in case the event is not yet set.
        showMouse();
        clearTimeout(mouseIdleTimeout);
        mouseIdleTimeout = setTimeout(function() {
            hideMouse();
        }, timeoutDelay);
    };
    function showMouse() {
        document.body.style.cursor = defaultCursor;
    };
    function hideMouse() {
        document.body.style.cursor = 'none';
    };
})();