(function() {
    var widget = WAF.require('waf-core/widget');
    var CreatingMyOwnNode = widget.create('CreatingMyOwnNode');
  
  	CreatingMyOwnNode.prototype.init = function() {
 
 		//creating my own html node		 
		this.node.innerHTML = 
		        '    <div>' +
		        '        <span></span>' +
		        '        <button class="waf-buttonAdd"><span>   +   </span></button>' +
		        '        <button class="waf-buttonSub"><span>   -   </span></button>' 
		        '    </div>';
		        
		        
		$('.waf-buttonAdd',  this.node).on('click', this.add.bind(this));
		$('.waf-buttonSub',  this.node).on('click', this.sub.bind(this));
		$('>div>span', this.node).html('0');        
	}
	
	CreatingMyOwnNode.prototype.add = function() {
		var total = parseInt($('>div>span', this.node).html());
		$('>div>span', this.node).html(++total);		
    };
	
	CreatingMyOwnNode.prototype.sub = function() {
		var total = parseInt($('>div>span', this.node).html());
		$('>div>span', this.node).html(--total);		
    };	
})();

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
