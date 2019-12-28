//Auto-executes this function on load.
(function() {
	chrome.storage.sync.get(["enabled"], function(val) {
		var menu = document.getElementById("enb_drop");
		if(val["enabled"] == 1)
		{
			menu.innerHTML = '<option value="1" selected>ENABLED</option><option value="0">DISABLED</option>';
		}
		else
		{
			menu.innerHTML = '<option value="1">ENABLED</option><option value="0" selected>DISABLED</option>';
		}
	});
})();

document.getElementById("save_button").addEventListener("click", function() {
	var val = document.getElementById("enb_drop").value;
	chrome.storage.sync.set({enabled: val}, function() {});
});