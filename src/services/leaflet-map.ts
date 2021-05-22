import * as L from 'leaflet';
import Map = L.Map;
import Layer = L.Layer;
import LayersObject = L.Control.LayersObject;
import LayerGroup = L.LayerGroup;
import LayerControl = L.Control.Layers;

export interface Location {
    lat: number;
    lng: number;
}

export interface MapConfig {
    location: Location;
    zoom: number;
    minZoom: number;
}

export class LeafletMap {
    imap: Map;
    control: LayerControl;
    overlays = {
        Wind : L.tileLayer('http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png?appid={apiKey}', {
            maxZoom: 19,
            attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
            apiKey: "d5891296b7768edd9f570dec3aa42a4f",
            opacity: 0.5
        }),
        Clouds : L.tileLayer('http://{s}.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=(apiKey)', {
            maxZoom: 19,
            attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
            apiKey: "d5891296b7768edd9f570dec3aa42a4f",
            opacity: 0.5
        }),
        Pressure : L.tileLayer('http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png?appid={apiKey}', {
            maxZoom: 19,
            attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
            apiKey: "d5891296b7768edd9f570dec3aa42a4f",
            opacity: 0.5
        })
    };

    // https://leaflet-extras.github.io/leaflet-providers/preview/

    baseLayers = {
        Terrain: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 17,
            attribution:
                'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        }),
        Satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution:
                'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        }),
    };

    constructor(id: string, descriptor: MapConfig, activeLayer = '') {
        let defaultLayer = this.baseLayers.Terrain;
        if (activeLayer) {
            defaultLayer = this.baseLayers[activeLayer];
        }
        this.imap = L.map(id, {
            center: [descriptor.location.lat, descriptor.location.lng],
            zoom: descriptor.zoom,
            minZoom: descriptor.minZoom,
            zoomControl: false,
            layers: [defaultLayer]
        });
    }

    addLayer(title: string, layer: Layer) {
        this.overlays[title] = layer;
        this.imap.addLayer(layer);
    }

    addLayerGroup(title: string) {
        this.overlays[title] = L.layerGroup([]);
        this.imap.addLayer(this.overlays[title]);
    }

    showLayerControl() {
        this.control = L.control.layers(this.baseLayers, this.overlays).addTo(this.imap);
    }

    showZoomControl(position = 'topleft') {
        L.control
            .zoom({
                position: position
            })
            .addTo(this.imap);
    }

    moveTo(zoom: number, location: Location) {
        this.imap.setZoom(zoom);
        this.imap.panTo(new L.LatLng(location.lat, location.lng));
    }

    zoomTo(location: Location) {
        this.imap.setView(new L.LatLng(location.lat, location.lng), 8);
    }

    addMarker(location: Location, popupText = '', layerTitle = 'default') {
        let group: LayerGroup;
        let marker = L.marker([location.lat, location.lng]);
        if (popupText) {
            var popup = L.popup({ autoClose: false, closeOnClick: false });
            popup.setContent(popupText);
            marker.bindPopup(popup);
        }
        if (!this.overlays[layerTitle]) {
            group = L.layerGroup([]);
            this.overlays[layerTitle] = group;
            this.imap.addLayer(group);
        } else {
            group = this.overlays[layerTitle] as LayerGroup;
        }
        marker.addTo(group);
    }



    invalidateSize() {
        this.imap.invalidateSize();
        let hiddenMethodMap = this.imap as any;
        hiddenMethodMap._onResize();
    }
}