var dropLocation = [-117.84085222076442, 33.6479851816371];


const defaultIcon = new ol.style.Icon({
	src: "img/petr.png",
})

const defaultIconStyle = new ol.style.Style({
	image: defaultIcon,
});

var vectorSource = new ol.source.Vector({});

const mapSource = new ol.source.TileJSON({
	url: 'https://api.maptiler.com/tiles/satellite/tiles.json?key=BfFUEVfEbY8lOap6pZTK',
	tileSize: 256,
	crossOrigin: 'anonymous'
});

const minimapSource = new ol.source.TileJSON({
	url: 'https://api.maptiler.com/maps/outdoor/tiles.json?key=BfFUEVfEbY8lOap6pZTK',
	tileSize: 256,
	crossOrigin: 'anonymous'
});

const googleMapSource = new ol.source.TileImage({
	url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga',
	tileSize: 256,
	crossOrigin: 'anonymous'
});

function createMap() {
	map = new ol.Map({
		layers: [
				new ol.layer.Tile({
					source: googleMapSource,
					preload: 21
				}),
				new ol.layer.Vector({
					source: vectorSource
				})
		],
		interactions: ol.interaction.defaults({
		altShiftDragRotate: false,
		onFocusOnly: false,
		doubleClickZoom: false,
		keyboard: true,
		mouseWheelZoom: false,
		shiftDragZoom: false,
		dragPan: false,
		pinchRotate: false,
		pinchZoom: false,
		zoomDelta: false,
		}),
		controls: ol.control.defaults({
			zoom: false,
			attribution: false,
			rotate: false
		}),
		target: 'map',
		view: new ol.View({
			constrainResolution: true,
			center: ol.proj.fromLonLat([-117.84085222076442, 33.6479851816371]),
			minZoom: 21,
			maxZoom: 21,
			zoom: 21
			//extent: ol.proj.fromLonLat([ -117.84970090913413, 33.641083605077476]).concat(ol.proj.fromLonLat([-117.83388660606677, 33.65473064332417]))
		})
	});
	return map;
}

function createMinimap() {
	minimap = new ol.Map({
		layers: [
				new ol.layer.Tile({
				source: minimapSource,
				preload: 21
			})
		],
		interactions: ol.interaction.defaults({
		altShiftDragRotate: false,
		onFocusOnly: false,
		doubleClickZoom: false,
		keyboard: true,
		mouseWheelZoom: false,
		shiftDragZoom: false,
		dragPan: false,
		pinchRotate: false,
		pinchZoom: false,
		zoomDelta: false,
		}),
		controls: ol.control.defaults({
			zoom: false,
			attribution: false,
			rotate: false
		}),
		target: 'minimap',
		view: new ol.View({
			constrainResolution: true,
			center: ol.proj.fromLonLat([-117.84085222076442, 33.6479851816371]),
			minZoom: 17,
			maxZoom: 17,
			zoom: 17
			//extent: ol.proj.fromLonLat([ -117.84970090913413, 33.641083605077476]).concat(ol.proj.fromLonLat([-117.83388660606677, 33.65473064332417]))
		})
	});
	return minimap;
}

function createPlayerFeature(id) {
	var iconFeature = new ol.Feature({
		geometry: new ol.geom.Point(ol.proj.fromLonLat(dropLocation))
	});
	iconFeature.setStyle(defaultIconStyle);
	iconFeature.setId(id);
	vectorSource.addFeature(iconFeature);
}

function createDrop(map, e) {
	var drop = [];
	var iconFeature = new ol.Feature({
		geometry: new ol.geom.Point(ol.proj.fromLonLat(dropLocation)),
		name: 'Null Island',
		population: 4000,
		rainfall: 500
	});

/* 	var overlay = new ol.Overlay({
		position: ol.proj.fromLonLat(dropLocation),
		element: e
	});
	map.addOverlay(overlay); */
	return drop;
}