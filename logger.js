
/**
 * This class handles the log messages.
 */
var ClassLogger = (function () {

    // Constructor.
    function ClassLogger() { };

    this.DEBUG = true;

    ClassLogger.prototype.Level = {
        Trace: 0, // grey
        Error: 1, // red
        Warn: 2, // orange
        Info: 3, // green
        Debug: 4 // black
    }

    /*
     * Log-Ausgabe Trace (Default).
     *
     * @param message 
     *          {String} Repräsentiert die consolen Nachricht.
     * @param slcObject 
     *          {Objekt} Repräsentiert das anzuzeigende Objekt.
     */
    ClassLogger.prototype.Trace = function (message, data) {

        if (DEBUG) {
            message = kendo.toString(new Date(), "G") + " - Trace:  " + message;

            if (arguments[1] != undefined) {
                console.log("%c" + message, "color: #D2D7D3;", data);
            } else {
                console.log("%c" + message, "color: #D2D7D3;");
            }
        }
    }

    /*
     * Log-Ausgabe Error.
     *
     * @param message 
     *          {String} Repräsentiert die consolen Nachricht.
     * @param slcObject 
     *          {Objekt} Repräsentiert das anzuzeigende Objekt.
     */
    ClassLogger.prototype.Error = function (message, data) {

        if (DEBUG) {
            message = kendo.toString(new Date(), "G") + " - Error:  " + message;

            if (arguments[1] != undefined) {
                console.log("%c" + message, "color: #CF000F;", data);
            } else {
                console.log("%c" + message, "color: #CF000F;");
            }
        }
    }

    /*
     * Log-Ausgabe Warnung.
     *
     * @param message 
     *          {String} Repräsentiert die consolen Nachricht.
     * @param slcObject 
     *          {Objekt} Repräsentiert das anzuzeigende Objekt.
     */
    ClassLogger.prototype.Warn = function (message, data) {

        if (DEBUG) {
            message = kendo.toString(new Date(), "G") + " - Warn:  " + message;

            if (arguments[1] != undefined) {
                console.log("%c" + message, "color: #F9690E;", data);
            } else {
                console.log("%c" + message, "color: #F9690E;");
            }
        }
    }

    /*
     * Log-Ausgabe Info.
     *
     * @param message 
     *          {String} Repräsentiert die consolen Nachricht.
     * @param slcObject 
     *          {Objekt} Repräsentiert das anzuzeigende Objekt.
     */
    ClassLogger.prototype.Info = function (message, data) {

        if (DEBUG) {
            message = kendo.toString(new Date(), "G") + " - Info:  " + message;

            if (arguments[1] != undefined) {
                console.log("%c" + message, "color: #2ECC71;", data);
            } else {
                console.log("%c" + message, "color: #2ECC71;");
            }
        }
    }

    /*
     * Log-Ausgabe Debug.
     *
     * @param message 
     *          {String} Repräsentiert die consolen Nachricht.
     * @param slcObject 
     *          {Objekt} Repräsentiert das anzuzeigende Objekt.
     */
    ClassLogger.prototype.Debug = function (message, data) {

        if (DEBUG) {
            message = kendo.toString(new Date(), "G") + " - Debug:  " + message;

            if (arguments[1] != undefined) {
                console.log("%c" + message, "color: #000000;", data);
            } else {
                console.log("%c" + message, "color: #000000;");
            }
        }
    }

    return ClassLogger;
})();
