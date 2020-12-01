const step = 60;

function init() {
	map = createMap();
	minimap = createMinimap();
	localPlayer = createPlayer();
	mapView = map.getView();
	minimapView = minimap.getView();
}

function mainLoop() {
	moveLocalPlayer();
	playerUpdateGlobal();
	mapView.animate(
		{
		center: ol.proj.fromLonLat([localPlayer.x, localPlayer.y]),
		duration: step,
		easing: ol.easing.linear
		},
	);
	minimapView.animate(
		{
		center: ol.proj.fromLonLat([localPlayer.x, localPlayer.y]),
		duration: step,
		easing: ol.easing.linear
		},
	);
	//debugTime();
}

document.addEventListener("keydown", keyPress);
document.addEventListener("keyup", keyRelease);
document.addEventListener('DOMContentLoaded', init);


async function connectClient() {
	await masterClient.connect();
	initData();
	createPlayer();
}

connectClient();
setInterval(mainLoop, step);