# Logger.js
This little javascript framework allows custom log outputs.


// How to use:

<head>
...
<script type="text/javascript" src="logger.js"></script>
...
</head>

// initialize
var logger = new ClassLogger();


logger.Trace('message', anydata); // text-color is gray

		or

logger.Error('message', anydata); // text-color is red

		or

logger.Warn('message', anydata); // text-color is orange

		or

logger.Info('message', anydata); // text-color is green

		or

logger.Debug('message', anydata); // text-color is black
