let body = document.getElementsByTagName("BODY")[0];
// var overlay = document.getElementById("overlay");

let stonks = [];
let numStonks = 0;

let x = 0;
let y = 0;

stonkW = Math.floor(screen.width / 4);
stonkH = Math.floor(screen.height / 2)

function createElementFromHTML(htmlString) {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();

	// Change this to div.childNodes to support multiple top-level nodes
	return div.children; 
}

function addStonk(stonkID) {
	numStonks++;
	var template = "<div class=\"stonk\" id=\"" + stonkID + "\"></div>";
	var newDiv = document.createElement("div");
	newDiv.className = "stonk";
	newDiv.id = stonkID;
	newDiv.style.position = "absolute";

	if(numStonks % 2 == 0){
		y = (y + stonkH) % (2 * stonkH);
	}
	else if(numStonks > 1 && (numStonks - 1) % 2 == 0){
		x += stonkW;
		y = 0;
	}

	newDiv.style.left = x.toString() + "px";
	newDiv.style.top = y.toString() + "px";
	body.appendChild(newDiv);
	stonks.push(stonkID);
	new TradingView.widget(
		{
			"width": stonkW,
			"height": stonkH,
			"symbol": stonkID,
			"interval": "30",
			"timezone": "Etc/UTC",
			"theme": "dark",
			"style": "2",
			"locale": "en",
			"toolbar_bg": "#f1f3f6",
			"enable_publishing": false,
			"allow_symbiol_change": true,
			"container_id": stonkID
		}
	);
}

addStonk("AAPL");
addStonk("AMC");
addStonk("GME");
addStonk("NOK");
addStonk("BB");
