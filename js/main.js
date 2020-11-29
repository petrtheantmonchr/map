import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import ZoomSlider from 'ol/control/ZoomSlider';
import {defaults as defaultControls} from 'ol/control';
import {useGeographic} from 'ol/proj';

useGeographic();

const origin = [33.64589280268697, -117.84272984827626];

var view = new View({
  center: origin,
  zoom: 8,
});

new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }) ],
  keyboardEventTarget: document,
  target: 'map',
  view: view,
  controls: defaultControls(),
});
