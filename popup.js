function set_indicator(val)
{
	var indicator = document.getElementById("indicator");
	if(val == 1)
	{
		indicator.className = 'text-center green-text';
		indicator.innerHTML = 'ENABLED';
	}
	else
	{
		indicator.className = 'text-center red-text';
		indicator.innerHTML = 'DISABLED';
	}
}

function set_dropmenu(val)
{
	var menu = document.getElementById("enb_drop");
	if(val == 1)
	{
		menu.innerHTML = '<option value="1" selected>ENABLED</option><option value="0">DISABLED</option>';

	}
	else
	{
		menu.innerHTML = '<option value="1">ENABLED</option><option value="0" selected>DISABLED</option>';
	}
}

//Auto-executes this function on load.
(function() {
	//Add event listener to the "SET" button.
	document.getElementById("save_button").addEventListener("click", function() {
		var val = document.getElementById("enb_drop").value;
		set_indicator(val);
		chrome.storage.sync.set({enabled: val}, function() {});
	});
	
	//Check to see if the extension is enabled or disabled, and set the 
	//elements on the popup accordingly.
	chrome.storage.sync.get(["enabled"], function(val) {
		set_indicator(val["enabled"]);
		set_dropmenu(val["enabled"]);
	});
})();