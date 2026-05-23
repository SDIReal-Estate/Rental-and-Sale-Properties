var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Study_Area_1 = new ol.format.GeoJSON();
var features_Study_Area_1 = format_Study_Area_1.readFeatures(json_Study_Area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Study_Area_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Study_Area_1.addFeatures(features_Study_Area_1);var lyr_Study_Area_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Study_Area_1, 
                style: style_Study_Area_1,
                title: '<img src="styles/legend/Study_Area_1.png" /> Study_Area'
            });var format_Sale_properties_2 = new ol.format.GeoJSON();
var features_Sale_properties_2 = format_Sale_properties_2.readFeatures(json_Sale_properties_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sale_properties_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Sale_properties_2.addFeatures(features_Sale_properties_2);var lyr_Sale_properties_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sale_properties_2, 
                style: style_Sale_properties_2,
                title: '<img src="styles/legend/Sale_properties_2.png" /> Sale_properties'
            });var format_Rental_properties_3 = new ol.format.GeoJSON();
var features_Rental_properties_3 = format_Rental_properties_3.readFeatures(json_Rental_properties_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rental_properties_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Rental_properties_3.addFeatures(features_Rental_properties_3);var lyr_Rental_properties_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rental_properties_3, 
                style: style_Rental_properties_3,
                title: '<img src="styles/legend/Rental_properties_3.png" /> Rental_properties'
            });var format_Buildings_4 = new ol.format.GeoJSON();
var features_Buildings_4 = format_Buildings_4.readFeatures(json_Buildings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Buildings_4.addFeatures(features_Buildings_4);var lyr_Buildings_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_4, 
                style: style_Buildings_4,
                title: '<img src="styles/legend/Buildings_4.png" /> Buildings'
            });var format_Juliana_Park_5 = new ol.format.GeoJSON();
var features_Juliana_Park_5 = format_Juliana_Park_5.readFeatures(json_Juliana_Park_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Juliana_Park_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Juliana_Park_5.addFeatures(features_Juliana_Park_5);var lyr_Juliana_Park_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Juliana_Park_5, 
                style: style_Juliana_Park_5,
                title: '<img src="styles/legend/Juliana_Park_5.png" /> Juliana_Park'
            });var format_Trees_6 = new ol.format.GeoJSON();
var features_Trees_6 = format_Trees_6.readFeatures(json_Trees_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Trees_6.addFeatures(features_Trees_6);var lyr_Trees_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trees_6, 
                style: style_Trees_6,
                title: '<img src="styles/legend/Trees_6.png" /> Trees'
            });var format_Swimming_Pools_7 = new ol.format.GeoJSON();
var features_Swimming_Pools_7 = format_Swimming_Pools_7.readFeatures(json_Swimming_Pools_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Swimming_Pools_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Swimming_Pools_7.addFeatures(features_Swimming_Pools_7);var lyr_Swimming_Pools_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Swimming_Pools_7, 
                style: style_Swimming_Pools_7,
                title: '<img src="styles/legend/Swimming_Pools_7.png" /> Swimming_Pools'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Study_Area_1.setVisible(true);lyr_Sale_properties_2.setVisible(true);lyr_Rental_properties_3.setVisible(true);lyr_Buildings_4.setVisible(true);lyr_Juliana_Park_5.setVisible(true);lyr_Trees_6.setVisible(true);lyr_Swimming_Pools_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Study_Area_1,lyr_Sale_properties_2,lyr_Rental_properties_3,lyr_Buildings_4,lyr_Juliana_Park_5,lyr_Trees_6,lyr_Swimming_Pools_7];
lyr_Study_Area_1.set('fieldAliases', {'id': 'id', 'shape_area': 'shape_area', });
lyr_Sale_properties_2.set('fieldAliases', {'id': 'id', 'propertynu': 'propertynu', 'streetnumb': 'streetnumb', 'streetname': 'streetname', 'bedrooms': 'bedrooms', 'bathrooms': 'bathrooms', 'dining_roo': 'dining_roo', 'lounges': 'lounges', 'garages': 'garages', 'open_plan': 'open_plan', 'ownerid': 'ownerid', 'ownerfirst': 'ownerfirst', 'ownersurna': 'ownersurna', 'valyear': 'valyear', 'valuations': 'valuations', });
lyr_Rental_properties_3.set('fieldAliases', {'id': 'id', 'propertynu': 'propertynu', 'streetnumb': 'streetnumb', 'streetname': 'streetname', 'bedrooms': 'bedrooms', 'bathrooms': 'bathrooms', 'dining_roo': 'dining_roo', 'lounges': 'lounges', 'garages': 'garages', 'open_plan': 'open_plan', 'ownerid': 'ownerid', 'ownerfirst': 'ownerfirst', 'ownersurna': 'ownersurna', 'rentable': 'rentable', });
lyr_Buildings_4.set('fieldAliases', {'id': 'id', 'bldng_id': 'bldng_id', 'name': 'name', 'zoning': 'zoning', 'shape_leng': 'shape_leng', 'buff_dist': 'buff_dist', 'orig_fid': 'orig_fid', 'shape_le_1': 'shape_le_1', 'shape_le_2': 'shape_le_2', 'shape_area': 'shape_area', });
lyr_Juliana_Park_5.set('fieldAliases', {'id': 'id', });
lyr_Trees_6.set('fieldAliases', {'id': 'id', });
lyr_Swimming_Pools_7.set('fieldAliases', {'id': 'id', 'pool': 'pool', });
lyr_Study_Area_1.set('fieldImages', {'id': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Sale_properties_2.set('fieldImages', {'id': 'TextEdit', 'propertynu': 'TextEdit', 'streetnumb': 'TextEdit', 'streetname': 'TextEdit', 'bedrooms': 'TextEdit', 'bathrooms': 'TextEdit', 'dining_roo': 'TextEdit', 'lounges': 'TextEdit', 'garages': 'TextEdit', 'open_plan': 'TextEdit', 'ownerid': 'TextEdit', 'ownerfirst': 'TextEdit', 'ownersurna': 'TextEdit', 'valyear': 'TextEdit', 'valuations': 'TextEdit', });
lyr_Rental_properties_3.set('fieldImages', {'id': 'TextEdit', 'propertynu': 'TextEdit', 'streetnumb': 'TextEdit', 'streetname': 'TextEdit', 'bedrooms': 'TextEdit', 'bathrooms': 'TextEdit', 'dining_roo': 'TextEdit', 'lounges': 'TextEdit', 'garages': 'TextEdit', 'open_plan': 'TextEdit', 'ownerid': 'TextEdit', 'ownerfirst': 'TextEdit', 'ownersurna': 'TextEdit', 'rentable': 'TextEdit', });
lyr_Buildings_4.set('fieldImages', {'id': 'TextEdit', 'bldng_id': 'TextEdit', 'name': 'TextEdit', 'zoning': 'TextEdit', 'shape_leng': 'TextEdit', 'buff_dist': 'TextEdit', 'orig_fid': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_le_2': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Juliana_Park_5.set('fieldImages', {'id': 'Range', });
lyr_Trees_6.set('fieldImages', {'id': 'Range', });
lyr_Swimming_Pools_7.set('fieldImages', {'id': 'TextEdit', 'pool': 'TextEdit', });
lyr_Study_Area_1.set('fieldLabels', {'id': 'no label', 'shape_area': 'inline label', });
lyr_Sale_properties_2.set('fieldLabels', {'id': 'no label', 'propertynu': 'inline label', 'streetnumb': 'inline label', 'streetname': 'inline label', 'bedrooms': 'inline label', 'bathrooms': 'inline label', 'dining_roo': 'inline label', 'lounges': 'inline label', 'garages': 'inline label', 'open_plan': 'inline label', 'ownerid': 'inline label', 'ownerfirst': 'inline label', 'ownersurna': 'inline label', 'valyear': 'inline label', 'valuations': 'inline label', });
lyr_Rental_properties_3.set('fieldLabels', {'id': 'no label', 'propertynu': 'inline label', 'streetnumb': 'inline label', 'streetname': 'inline label', 'bedrooms': 'inline label', 'bathrooms': 'inline label', 'dining_roo': 'inline label', 'lounges': 'inline label', 'garages': 'inline label', 'open_plan': 'inline label', 'ownerid': 'inline label', 'ownerfirst': 'inline label', 'ownersurna': 'inline label', 'rentable': 'inline label', });
lyr_Buildings_4.set('fieldLabels', {'id': 'no label', 'bldng_id': 'inline label', 'name': 'no label', 'zoning': 'inline label', 'shape_leng': 'no label', 'buff_dist': 'no label', 'orig_fid': 'no label', 'shape_le_1': 'no label', 'shape_le_2': 'no label', 'shape_area': 'inline label', });
lyr_Juliana_Park_5.set('fieldLabels', {'id': 'no label', });
lyr_Trees_6.set('fieldLabels', {'id': 'no label', });
lyr_Swimming_Pools_7.set('fieldLabels', {'id': 'no label', 'pool': 'inline label', });
lyr_Swimming_Pools_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});