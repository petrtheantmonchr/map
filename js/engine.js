const startLocation = [-117.84085222076442, 33.6479851816371]
const defaultSpeed = 0.00001;
const defaultSprite = "img/petr.png";
const defaultAnimationState = "stand left"


var timePing = 0;
var position = [-117.84085222076442, 33.6479851816371];
var vector = [0, 0];
var wDown, aDown, sDown, dDown = false;
var facing = "left"

class Player {
	constructor(feature) {
		this.position = startLocation;
		this.x = startLocation[0];
		this.y = startLocation[1];
		this.speed = defaultSspeed;
		this.facing = "left";
		this.animationState = "stand left";
	}
}

function keyPress(event) {
	switch (event.code) {
		case "KeyW":
			if (!wDown) {
				vector[1]++;
				wDown = true;
			}
			break;
		case "KeyS":
			if (!sDown) {
				vector[1]--;
				sDown = true;
			}
			break;
		case "KeyA":
			if (!aDown) {
				vector[0]--;
				aDown = true;
			}
			break;
		case "KeyD":
			if (!dDown) {
				vector[0]++;
				dDown = true;
			}
			break;
	}
}
function keyRelease(event) {
	switch (event.code) {
		case "KeyW":
			vector[1]--;
			wDown = false;
			break;
		case "KeyS":
			vector[1]++;
			sDown = false;
			break;
		case "KeyA":
			vector[0]++;
			aDown = false;
			break;
		case "KeyD":
			vector[0]--;
			dDown = false;
			break;
	}
}
function moveLocalPlayer() {
	var magnitude;
	if (vector[0] != 0 && vector[1] != 0) {
		magnitude = 0.5 * Math.sqrt(3);
	} else {
		magnitude = 1;
	}
	if (vector[0] == -1) {
		localPlayer.facing = "left";
	} else if (vector[0] == 1) {
		localPlayer.facing = "right";
	}

	localPlayer.x+=magnitude * speed * vector[0];
	localPlayer.y+=magnitude * speed * vector[1];
	console.log(players);
}
function debugTime() {
	date = new Date();
	time = date.getTime();
	diff = date - timePing;
	console.log(diff);
	timePing = date
}

function playerUpdateGlobal() {
	for (i = 0; i < players.length; i++) {
		
	}
}

/* function updateAnim(e) {
	
	if (vector[0] == 0 && vector[1] == 0) {
		e.style.animation = "none";
		if (facing == "left") {
			e.style.transform = "scaleX(1)";
		} else if (facing == "right") {
			e.style.transform = "scaleX(-1)";
		}
	} else {
		if (facing == "left") {
			e.style.animation = "runLeft 8ms infinite linear";
		} else if (facing == "right") {
			e.style.animation = "runRight 8ms infinite linear";
		}
	}
} */

function createPlayer() {
	const player = {
		position: startLocation,
		x: startLocation[0],
		y: startLocation[1],
		speed: defaultSpeed,
		animationState: defaultAnimationState,
		sprite: defaultSprite,
	}
	createPlayerData(player);
	createPlayerFeature(localId);
}