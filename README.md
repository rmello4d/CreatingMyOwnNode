## Custom Widget for [Wakanda](http://wakanda.org)
The __CreatingMyOwnNode__ widget is an example of how to define your own HTML node for the widget 


### Goals
The __CreatingMyOwnNode__ has a counter and 2 buttons created entirely by overriding the widget node html. 


### widget.js

```
		//creating my own html node		 
		this.node.innerHTML = 
		        '    <div>' +
		        '        <span></span>' +
		        '        <button class="waf-buttonAdd"><span>   +   </span></button>' +
		        '        <button class="waf-buttonSub"><span>   -   </span></button>' 
		        '    </div>';
		        

```



### Wakanda Studio

1. Drag the widget to your Wakanda page. 
2. Add or subtract values to your widget

### CSS
The __CreatingMyOwnNode__ CSS was changed to better show the div, span and button elements. 
You can adjust its color by changing directly in the Studio OR by changing the /css/widget.css file.  


### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.

