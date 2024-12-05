var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_HereWegoSatellite_1 = new ol.layer.Tile({
            'title': 'Here Wego Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://developer.here.com/documentation/map-tile/dev_guide/topics/resource-copyright.html">Map tiles by Here Wego</a>',
                url: 'https://2.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png8?app_id=eAdkWGYRoc4RfxVo0Z4B&app_code=TrLJuXVK62IQk0vuXFzaig&lg=eng'
            })
        });
var lyr_DroneDBK_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://api.ellipsis-drive.com/v3/ogc/wms/77a7b4eb-9fe7-4c1f-8416-fba849555df0?request%3DgetCapabilities%26token%3Depat_gZkhQ3lZ9SdP5cAo9GEBj5k1dpaNuwyKTNMCxZzsFnLixk9123idyhLjGKvlA2D7",
    attributions: ' ',
                              params: {
                                "LAYERS": "6ba6960c-01fc-492a-a1de-42dd3ed8fb72_7b92f0d2-5fff-44da-8921-c7be1b8270d0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Drone DBK",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DroneDBK_2, 0]);
var format_IUP_OP_BI_3 = new ol.format.GeoJSON();
var features_IUP_OP_BI_3 = format_IUP_OP_BI_3.readFeatures(json_IUP_OP_BI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUP_OP_BI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUP_OP_BI_3.addFeatures(features_IUP_OP_BI_3);
var lyr_IUP_OP_BI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUP_OP_BI_3, 
                style: style_IUP_OP_BI_3,
                popuplayertitle: "IUP_OP_BI",
                interactive: true,
                title: '<img src="styles/legend/IUP_OP_BI_3.png" /> IUP_OP_BI'
            });
var format_IUP_OP_DBK_4 = new ol.format.GeoJSON();
var features_IUP_OP_DBK_4 = format_IUP_OP_DBK_4.readFeatures(json_IUP_OP_DBK_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUP_OP_DBK_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUP_OP_DBK_4.addFeatures(features_IUP_OP_DBK_4);
var lyr_IUP_OP_DBK_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUP_OP_DBK_4, 
                style: style_IUP_OP_DBK_4,
                popuplayertitle: "IUP_OP_DBK",
                interactive: true,
                title: '<img src="styles/legend/IUP_OP_DBK_4.png" /> IUP_OP_DBK'
            });
var format_IPPKH_PIT_DBK_5 = new ol.format.GeoJSON();
var features_IPPKH_PIT_DBK_5 = format_IPPKH_PIT_DBK_5.readFeatures(json_IPPKH_PIT_DBK_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPPKH_PIT_DBK_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPPKH_PIT_DBK_5.addFeatures(features_IPPKH_PIT_DBK_5);
var lyr_IPPKH_PIT_DBK_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IPPKH_PIT_DBK_5, 
                style: style_IPPKH_PIT_DBK_5,
                popuplayertitle: "IPPKH_PIT_DBK",
                interactive: true,
                title: '<img src="styles/legend/IPPKH_PIT_DBK_5.png" /> IPPKH_PIT_DBK'
            });
var format_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6 = new ol.format.GeoJSON();
var features_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6 = format_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6.readFeatures(json_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6.addFeatures(features_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6);
var lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6, 
                style: style_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6,
                popuplayertitle: "Koridor_Jalan_FINAL_9-4-2012_rev_18_10_2012",
                interactive: true,
                title: '<img src="styles/legend/Koridor_Jalan_FINAL_942012_rev_18_10_2012_6.png" /> Koridor_Jalan_FINAL_9-4-2012_rev_18_10_2012'
            });
var format_SaranaPrasaranaIPPKHDBKPolygon_7 = new ol.format.GeoJSON();
var features_SaranaPrasaranaIPPKHDBKPolygon_7 = format_SaranaPrasaranaIPPKHDBKPolygon_7.readFeatures(json_SaranaPrasaranaIPPKHDBKPolygon_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaranaPrasaranaIPPKHDBKPolygon_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaranaPrasaranaIPPKHDBKPolygon_7.addFeatures(features_SaranaPrasaranaIPPKHDBKPolygon_7);
var lyr_SaranaPrasaranaIPPKHDBKPolygon_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaranaPrasaranaIPPKHDBKPolygon_7, 
                style: style_SaranaPrasaranaIPPKHDBKPolygon_7,
                popuplayertitle: "Sarana Prasarana IPPKH DBK Polygon",
                interactive: true,
                title: '<img src="styles/legend/SaranaPrasaranaIPPKHDBKPolygon_7.png" /> Sarana Prasarana IPPKH DBK Polygon'
            });
var format_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8 = new ol.format.GeoJSON();
var features_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8 = format_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8.readFeatures(json_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8.addFeatures(features_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8);
var lyr_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8, 
                style: style_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8,
                popuplayertitle: "Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas",
                interactive: false,
                title: '<img src="styles/legend/Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8.png" /> Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas'
            });
var format_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9 = new ol.format.GeoJSON();
var features_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9 = format_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9.readFeatures(json_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9.addFeatures(features_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9);
var lyr_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9, 
                style: style_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9,
                popuplayertitle: "Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas",
                interactive: false,
                title: '<img src="styles/legend/Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9.png" /> Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas'
            });
var format_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10 = new ol.format.GeoJSON();
var features_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10 = format_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10.readFeatures(json_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10.addFeatures(features_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10);
var lyr_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10, 
                style: style_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10,
                popuplayertitle: "Lahan_Trase_Jalan_Ampar_Belum_Bebas",
                interactive: false,
                title: '<img src="styles/legend/Lahan_Trase_Jalan_Ampar_Belum_Bebas_10.png" /> Lahan_Trase_Jalan_Ampar_Belum_Bebas'
            });
var format_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11 = new ol.format.GeoJSON();
var features_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11 = format_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11.readFeatures(json_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11.addFeatures(features_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11);
var lyr_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11, 
                style: style_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11,
                popuplayertitle: "Lahan_Trase_Jalan_Ampar_Sudah_Bebas",
                interactive: false,
                title: '<img src="styles/legend/Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11.png" /> Lahan_Trase_Jalan_Ampar_Sudah_Bebas'
            });
var format_GeotaggedPhotoWeb_12 = new ol.format.GeoJSON();
var features_GeotaggedPhotoWeb_12 = format_GeotaggedPhotoWeb_12.readFeatures(json_GeotaggedPhotoWeb_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeotaggedPhotoWeb_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeotaggedPhotoWeb_12.addFeatures(features_GeotaggedPhotoWeb_12);cluster_GeotaggedPhotoWeb_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GeotaggedPhotoWeb_12
});
var lyr_GeotaggedPhotoWeb_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GeotaggedPhotoWeb_12, 
                style: style_GeotaggedPhotoWeb_12,
                popuplayertitle: "Geotagged Photo Web",
                interactive: true,
                title: '<img src="styles/legend/GeotaggedPhotoWeb_12.png" /> Geotagged Photo Web'
            });
var format_DBKRoadHaulingSTALine_13 = new ol.format.GeoJSON();
var features_DBKRoadHaulingSTALine_13 = format_DBKRoadHaulingSTALine_13.readFeatures(json_DBKRoadHaulingSTALine_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBKRoadHaulingSTALine_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBKRoadHaulingSTALine_13.addFeatures(features_DBKRoadHaulingSTALine_13);
var lyr_DBKRoadHaulingSTALine_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DBKRoadHaulingSTALine_13,
maxResolution:2.8004466152261966,
 
                style: style_DBKRoadHaulingSTALine_13,
                popuplayertitle: "DBK Road Hauling STA Line",
                interactive: false,
    title: 'DBK Road Hauling STA Line<br />\
    <img src="styles/legend/DBKRoadHaulingSTALine_13_0.png" /> C-ROAD-CNTR<br />\
    <img src="styles/legend/DBKRoadHaulingSTALine_13_1.png" /> C-ROAD-STAN-MAJR<br />'
        });
var format_DBKRoadHaulingSTAText_14 = new ol.format.GeoJSON();
var features_DBKRoadHaulingSTAText_14 = format_DBKRoadHaulingSTAText_14.readFeatures(json_DBKRoadHaulingSTAText_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBKRoadHaulingSTAText_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBKRoadHaulingSTAText_14.addFeatures(features_DBKRoadHaulingSTAText_14);
var lyr_DBKRoadHaulingSTAText_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DBKRoadHaulingSTAText_14,
maxResolution:1.4002233076130983,
 
                style: style_DBKRoadHaulingSTAText_14,
                popuplayertitle: "DBK Road Hauling STA Text",
                interactive: false,
                title: '<img src="styles/legend/DBKRoadHaulingSTAText_14.png" /> DBK Road Hauling STA Text'
            });
var format_BoundaryProgressClearing_15 = new ol.format.GeoJSON();
var features_BoundaryProgressClearing_15 = format_BoundaryProgressClearing_15.readFeatures(json_BoundaryProgressClearing_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoundaryProgressClearing_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoundaryProgressClearing_15.addFeatures(features_BoundaryProgressClearing_15);
var lyr_BoundaryProgressClearing_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoundaryProgressClearing_15,
maxResolution:2.8004466152261966,
 
                style: style_BoundaryProgressClearing_15,
                popuplayertitle: "Boundary Progress Clearing",
                interactive: true,
    title: 'Boundary Progress Clearing<br />\
    <img src="styles/legend/BoundaryProgressClearing_15_0.png" /> ACCESS TO BM<br />\
    <img src="styles/legend/BoundaryProgressClearing_15_1.png" /> CAMP AND OFFICE<br />\
    <img src="styles/legend/BoundaryProgressClearing_15_2.png" /> DOCKING AREA<br />\
    <img src="styles/legend/BoundaryProgressClearing_15_3.png" /> HAULING ROAD<br />\
    <img src="styles/legend/BoundaryProgressClearing_15_4.png" /> JETTY AREA<br />\
    <img src="styles/legend/BoundaryProgressClearing_15_5.png" /> LAYDOWN AREA<br />\
    <img src="styles/legend/BoundaryProgressClearing_15_6.png" /> TEMPORARY MAGAZINE AREA<br />\
    <img src="styles/legend/BoundaryProgressClearing_15_7.png" /> OTHER<br />'
        });
var group_Progress = new ol.layer.Group({
                                layers: [lyr_BoundaryProgressClearing_15,],
                                fold: "open",
                                title: "Progress"});
var group_RoadDesign = new ol.layer.Group({
                                layers: [lyr_DBKRoadHaulingSTALine_13,lyr_DBKRoadHaulingSTAText_14,],
                                fold: "open",
                                title: "Road Design"});
var group_BatasLahan = new ol.layer.Group({
                                layers: [lyr_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8,lyr_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9,lyr_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10,lyr_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11,],
                                fold: "open",
                                title: "Batas Lahan"});
var group_IPPKH = new ol.layer.Group({
                                layers: [lyr_IUP_OP_BI_3,lyr_IUP_OP_DBK_4,lyr_IPPKH_PIT_DBK_5,lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6,lyr_SaranaPrasaranaIPPKHDBKPolygon_7,],
                                fold: "open",
                                title: "IPPKH"});
var group_Imagery = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,lyr_HereWegoSatellite_1,lyr_DroneDBK_2,],
                                fold: "open",
                                title: "Imagery"});

lyr_ESRISatellite_0.setVisible(true);lyr_HereWegoSatellite_1.setVisible(false);lyr_DroneDBK_2.setVisible(true);lyr_IUP_OP_BI_3.setVisible(true);lyr_IUP_OP_DBK_4.setVisible(true);lyr_IPPKH_PIT_DBK_5.setVisible(true);lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6.setVisible(true);lyr_SaranaPrasaranaIPPKHDBKPolygon_7.setVisible(true);lyr_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8.setVisible(true);lyr_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9.setVisible(true);lyr_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10.setVisible(true);lyr_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11.setVisible(true);lyr_GeotaggedPhotoWeb_12.setVisible(true);lyr_DBKRoadHaulingSTALine_13.setVisible(true);lyr_DBKRoadHaulingSTAText_14.setVisible(true);lyr_BoundaryProgressClearing_15.setVisible(true);
var layersList = [group_Imagery,group_IPPKH,group_BatasLahan,lyr_GeotaggedPhotoWeb_12,group_RoadDesign,group_Progress];
lyr_IUP_OP_BI_3.set('fieldAliases', {'LAYER': 'LAYER', 'Perusahaan': 'Perusahaan', 'Luas': 'Luas', 'No_SK': 'No_SK', 'Status_Izi': 'Status_Izi', });
lyr_IUP_OP_DBK_4.set('fieldAliases', {'LAYER': 'LAYER', 'Perusahaan': 'Perusahaan', 'Luas': 'Luas', 'No_SK': 'No_SK', 'Status_Izi': 'Status_Izi', });
lyr_IPPKH_PIT_DBK_5.set('fieldAliases', {'LAYER': 'LAYER', 'Id': 'Id', 'area': 'area', });
lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6.set('fieldAliases', {'LENGTH': 'LENGTH', 'Id': 'Id', 'ket': 'ket', 'Lebar': 'Lebar', 'Buffer': 'Buffer', 'Label': 'Label', });
lyr_SaranaPrasaranaIPPKHDBKPolygon_7.set('fieldAliases', {'FID': 'FID', 'Name': 'Name', });
lyr_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8.set('fieldAliases', {'LAYER': 'LAYER', 'OBJECTID': 'OBJECTID', 'No_Pendata': 'No_Pendata', 'Pemilik': 'Pemilik', 'Luas_Dig': 'Luas_Dig', 'Luas_Text': 'Luas_Text', 'Prog_Lap': 'Prog_Lap', 'Prog_Acc': 'Prog_Acc', 'Ket_Lap': 'Ket_Lap', 'Ket_Acc': 'Ket_Acc', 'Stat_Lah_C': 'Stat_Lah_C', 'Prog_Lah_C': 'Prog_Lah_C', 'Status_Lhn': 'Status_Lhn', 'Kecamatan': 'Kecamatan', 'Peruntukan': 'Peruntukan', 'Nomor_BA': 'Nomor_BA', 'Reconcile': 'Reconcile', 'Keterangan': 'Keterangan', 'Bts_Area': 'Bts_Area', 'Note_Lap': 'Note_Lap', 'Segment': 'Segment', 'NoU': 'NoU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Foto_Pemil': 'Foto_Pemil', 'Ket_DJR': 'Ket_DJR', });
lyr_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9.set('fieldAliases', {'LAYER': 'LAYER', 'OBJECTID': 'OBJECTID', 'No_Pendata': 'No_Pendata', 'Pemilik': 'Pemilik', 'Luas_Dig': 'Luas_Dig', 'Luas_Text': 'Luas_Text', 'Prog_Lap': 'Prog_Lap', 'Prog_Acc': 'Prog_Acc', 'Ket_Lap': 'Ket_Lap', 'Ket_Acc': 'Ket_Acc', 'Stat_Lah_C': 'Stat_Lah_C', 'Prog_Lah_C': 'Prog_Lah_C', 'Status_Lhn': 'Status_Lhn', 'Kecamatan': 'Kecamatan', 'Peruntukan': 'Peruntukan', 'Nomor_BA': 'Nomor_BA', 'Reconcile': 'Reconcile', 'Keterangan': 'Keterangan', 'Bts_Area': 'Bts_Area', 'Note_Lap': 'Note_Lap', 'Segment': 'Segment', 'NoU': 'NoU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Foto_Pemil': 'Foto_Pemil', 'Ket_DJR': 'Ket_DJR', });
lyr_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10.set('fieldAliases', {'LAYER': 'LAYER', 'OBJECTID': 'OBJECTID', 'No_Pendata': 'No_Pendata', 'Pemilik': 'Pemilik', 'Luas_Dig': 'Luas_Dig', 'Luas_Text': 'Luas_Text', 'Prog_Lap': 'Prog_Lap', 'Prog_Acc': 'Prog_Acc', 'Ket_Lap': 'Ket_Lap', 'Ket_Acc': 'Ket_Acc', 'Stat_Lah_C': 'Stat_Lah_C', 'Prog_Lah_C': 'Prog_Lah_C', 'Status_Lhn': 'Status_Lhn', 'Kecamatan': 'Kecamatan', 'Peruntukan': 'Peruntukan', 'Nomor_BA': 'Nomor_BA', 'Reconcile': 'Reconcile', 'Keterangan': 'Keterangan', 'Bts_Area': 'Bts_Area', 'Note_Lap': 'Note_Lap', 'Segment': 'Segment', 'NoU': 'NoU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Foto_Pemil': 'Foto_Pemil', 'Ket_DJR': 'Ket_DJR', });
lyr_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11.set('fieldAliases', {'LAYER': 'LAYER', 'OBJECTID': 'OBJECTID', 'No_Pendata': 'No_Pendata', 'Pemilik': 'Pemilik', 'Luas_Dig': 'Luas_Dig', 'Luas_Text': 'Luas_Text', 'Prog_Lap': 'Prog_Lap', 'Prog_Acc': 'Prog_Acc', 'Ket_Lap': 'Ket_Lap', 'Ket_Acc': 'Ket_Acc', 'Stat_Lah_C': 'Stat_Lah_C', 'Prog_Lah_C': 'Prog_Lah_C', 'Status_Lhn': 'Status_Lhn', 'Kecamatan': 'Kecamatan', 'Peruntukan': 'Peruntukan', 'Nomor_BA': 'Nomor_BA', 'Reconcile': 'Reconcile', 'Keterangan': 'Keterangan', 'Bts_Area': 'Bts_Area', 'Note_Lap': 'Note_Lap', 'Segment': 'Segment', 'NoU': 'NoU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Foto_Pemil': 'Foto_Pemil', 'Ket_DJR': 'Ket_DJR', });
lyr_GeotaggedPhotoWeb_12.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_DBKRoadHaulingSTALine_13.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_DBKRoadHaulingSTAText_14.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_BoundaryProgressClearing_15.set('fieldAliases', {'NO': 'NO', 'NAME': 'NAME', 'DATE': 'DATE', 'AREA': 'AREA', });
lyr_IUP_OP_BI_3.set('fieldImages', {'LAYER': 'TextEdit', 'Perusahaan': 'TextEdit', 'Luas': 'TextEdit', 'No_SK': 'TextEdit', 'Status_Izi': 'TextEdit', });
lyr_IUP_OP_DBK_4.set('fieldImages', {'LAYER': 'TextEdit', 'Perusahaan': 'TextEdit', 'Luas': 'TextEdit', 'No_SK': 'TextEdit', 'Status_Izi': 'TextEdit', });
lyr_IPPKH_PIT_DBK_5.set('fieldImages', {'LAYER': 'TextEdit', 'Id': 'Range', 'area': '', });
lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6.set('fieldImages', {'LENGTH': 'TextEdit', 'Id': 'TextEdit', 'ket': 'TextEdit', 'Lebar': 'TextEdit', 'Buffer': 'TextEdit', 'Label': 'TextEdit', });
lyr_SaranaPrasaranaIPPKHDBKPolygon_7.set('fieldImages', {'FID': 'TextEdit', 'Name': 'TextEdit', });
lyr_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8.set('fieldImages', {'LAYER': 'TextEdit', 'OBJECTID': 'Range', 'No_Pendata': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas_Dig': 'TextEdit', 'Luas_Text': 'TextEdit', 'Prog_Lap': 'TextEdit', 'Prog_Acc': 'TextEdit', 'Ket_Lap': 'TextEdit', 'Ket_Acc': 'TextEdit', 'Stat_Lah_C': 'TextEdit', 'Prog_Lah_C': 'TextEdit', 'Status_Lhn': 'TextEdit', 'Kecamatan': 'TextEdit', 'Peruntukan': 'TextEdit', 'Nomor_BA': 'TextEdit', 'Reconcile': 'TextEdit', 'Keterangan': 'TextEdit', 'Bts_Area': 'TextEdit', 'Note_Lap': 'TextEdit', 'Segment': 'TextEdit', 'NoU': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Foto_Pemil': 'TextEdit', 'Ket_DJR': 'TextEdit', });
lyr_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9.set('fieldImages', {'LAYER': 'TextEdit', 'OBJECTID': 'Range', 'No_Pendata': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas_Dig': 'TextEdit', 'Luas_Text': 'TextEdit', 'Prog_Lap': 'TextEdit', 'Prog_Acc': 'TextEdit', 'Ket_Lap': 'TextEdit', 'Ket_Acc': 'TextEdit', 'Stat_Lah_C': 'TextEdit', 'Prog_Lah_C': 'TextEdit', 'Status_Lhn': 'TextEdit', 'Kecamatan': 'TextEdit', 'Peruntukan': 'TextEdit', 'Nomor_BA': 'TextEdit', 'Reconcile': 'TextEdit', 'Keterangan': 'TextEdit', 'Bts_Area': 'TextEdit', 'Note_Lap': 'TextEdit', 'Segment': 'TextEdit', 'NoU': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Foto_Pemil': 'TextEdit', 'Ket_DJR': 'TextEdit', });
lyr_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10.set('fieldImages', {'LAYER': 'TextEdit', 'OBJECTID': 'Range', 'No_Pendata': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas_Dig': 'TextEdit', 'Luas_Text': 'TextEdit', 'Prog_Lap': 'TextEdit', 'Prog_Acc': 'TextEdit', 'Ket_Lap': 'TextEdit', 'Ket_Acc': 'TextEdit', 'Stat_Lah_C': 'TextEdit', 'Prog_Lah_C': 'TextEdit', 'Status_Lhn': 'TextEdit', 'Kecamatan': 'TextEdit', 'Peruntukan': 'TextEdit', 'Nomor_BA': 'TextEdit', 'Reconcile': 'TextEdit', 'Keterangan': 'TextEdit', 'Bts_Area': 'TextEdit', 'Note_Lap': 'TextEdit', 'Segment': 'TextEdit', 'NoU': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Foto_Pemil': 'TextEdit', 'Ket_DJR': 'TextEdit', });
lyr_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11.set('fieldImages', {'LAYER': 'TextEdit', 'OBJECTID': 'Range', 'No_Pendata': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas_Dig': 'TextEdit', 'Luas_Text': 'TextEdit', 'Prog_Lap': 'TextEdit', 'Prog_Acc': 'TextEdit', 'Ket_Lap': 'TextEdit', 'Ket_Acc': 'TextEdit', 'Stat_Lah_C': 'TextEdit', 'Prog_Lah_C': 'TextEdit', 'Status_Lhn': 'TextEdit', 'Kecamatan': 'TextEdit', 'Peruntukan': 'TextEdit', 'Nomor_BA': 'TextEdit', 'Reconcile': 'TextEdit', 'Keterangan': 'TextEdit', 'Bts_Area': 'TextEdit', 'Note_Lap': 'TextEdit', 'Segment': 'TextEdit', 'NoU': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Foto_Pemil': 'TextEdit', 'Ket_DJR': 'TextEdit', });
lyr_GeotaggedPhotoWeb_12.set('fieldImages', {'photo': 'TextEdit', 'filename': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_DBKRoadHaulingSTALine_13.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_DBKRoadHaulingSTAText_14.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_BoundaryProgressClearing_15.set('fieldImages', {'NO': 'TextEdit', 'NAME': 'TextEdit', 'DATE': 'TextEdit', 'AREA': 'TextEdit', });
lyr_IUP_OP_BI_3.set('fieldLabels', {'LAYER': 'inline label - always visible', 'Perusahaan': 'inline label - always visible', 'Luas': 'inline label - always visible', 'No_SK': 'inline label - always visible', 'Status_Izi': 'inline label - always visible', });
lyr_IUP_OP_DBK_4.set('fieldLabels', {'LAYER': 'inline label - always visible', 'Perusahaan': 'inline label - always visible', 'Luas': 'inline label - always visible', 'No_SK': 'inline label - always visible', 'Status_Izi': 'inline label - always visible', });
lyr_IPPKH_PIT_DBK_5.set('fieldLabels', {'LAYER': 'inline label - always visible', 'Id': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_6.set('fieldLabels', {'LENGTH': 'inline label - always visible', 'Id': 'inline label - always visible', 'ket': 'inline label - always visible', 'Lebar': 'inline label - always visible', 'Buffer': 'inline label - always visible', 'Label': 'inline label - always visible', });
lyr_SaranaPrasaranaIPPKHDBKPolygon_7.set('fieldLabels', {'FID': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8.set('fieldLabels', {'LAYER': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'No_Pendata': 'inline label - always visible', 'Pemilik': 'inline label - always visible', 'Luas_Dig': 'inline label - always visible', 'Luas_Text': 'inline label - always visible', 'Prog_Lap': 'inline label - always visible', 'Prog_Acc': 'inline label - always visible', 'Ket_Lap': 'inline label - always visible', 'Ket_Acc': 'inline label - always visible', 'Stat_Lah_C': 'inline label - always visible', 'Prog_Lah_C': 'inline label - always visible', 'Status_Lhn': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Peruntukan': 'inline label - always visible', 'Nomor_BA': 'inline label - always visible', 'Reconcile': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Bts_Area': 'inline label - always visible', 'Note_Lap': 'inline label - always visible', 'Segment': 'inline label - always visible', 'NoU': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'Foto_Pemil': 'inline label - always visible', 'Ket_DJR': 'inline label - always visible', });
lyr_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9.set('fieldLabels', {'LAYER': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'No_Pendata': 'inline label - always visible', 'Pemilik': 'inline label - always visible', 'Luas_Dig': 'inline label - always visible', 'Luas_Text': 'inline label - always visible', 'Prog_Lap': 'inline label - always visible', 'Prog_Acc': 'inline label - always visible', 'Ket_Lap': 'inline label - always visible', 'Ket_Acc': 'inline label - always visible', 'Stat_Lah_C': 'inline label - always visible', 'Prog_Lah_C': 'inline label - always visible', 'Status_Lhn': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Peruntukan': 'inline label - always visible', 'Nomor_BA': 'inline label - always visible', 'Reconcile': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Bts_Area': 'inline label - always visible', 'Note_Lap': 'inline label - always visible', 'Segment': 'inline label - always visible', 'NoU': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'Foto_Pemil': 'inline label - always visible', 'Ket_DJR': 'inline label - always visible', });
lyr_Lahan_Trase_Jalan_Ampar_Belum_Bebas_10.set('fieldLabels', {'LAYER': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'No_Pendata': 'inline label - always visible', 'Pemilik': 'inline label - always visible', 'Luas_Dig': 'inline label - always visible', 'Luas_Text': 'inline label - always visible', 'Prog_Lap': 'inline label - always visible', 'Prog_Acc': 'inline label - always visible', 'Ket_Lap': 'inline label - always visible', 'Ket_Acc': 'inline label - always visible', 'Stat_Lah_C': 'inline label - always visible', 'Prog_Lah_C': 'inline label - always visible', 'Status_Lhn': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Peruntukan': 'inline label - always visible', 'Nomor_BA': 'inline label - always visible', 'Reconcile': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Bts_Area': 'inline label - always visible', 'Note_Lap': 'inline label - always visible', 'Segment': 'inline label - always visible', 'NoU': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'Foto_Pemil': 'inline label - always visible', 'Ket_DJR': 'inline label - always visible', });
lyr_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_11.set('fieldLabels', {'LAYER': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'No_Pendata': 'inline label - always visible', 'Pemilik': 'inline label - always visible', 'Luas_Dig': 'inline label - always visible', 'Luas_Text': 'inline label - always visible', 'Prog_Lap': 'inline label - always visible', 'Prog_Acc': 'inline label - always visible', 'Ket_Lap': 'inline label - always visible', 'Ket_Acc': 'inline label - always visible', 'Stat_Lah_C': 'inline label - always visible', 'Prog_Lah_C': 'inline label - always visible', 'Status_Lhn': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Peruntukan': 'inline label - always visible', 'Nomor_BA': 'inline label - always visible', 'Reconcile': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Bts_Area': 'inline label - always visible', 'Note_Lap': 'inline label - always visible', 'Segment': 'inline label - always visible', 'NoU': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'Foto_Pemil': 'inline label - always visible', 'Ket_DJR': 'inline label - always visible', });
lyr_GeotaggedPhotoWeb_12.set('fieldLabels', {'photo': 'inline label - always visible', 'filename': 'inline label - always visible', 'altitude': 'inline label - always visible', 'direction': 'inline label - always visible', 'rotation': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', 'timestamp': 'inline label - always visible', });
lyr_DBKRoadHaulingSTALine_13.set('fieldLabels', {'Layer': 'inline label - always visible', 'PaperSpace': 'inline label - always visible', 'SubClasses': 'inline label - always visible', 'Linetype': 'inline label - always visible', 'EntityHand': 'inline label - always visible', 'Text': 'inline label - always visible', });
lyr_DBKRoadHaulingSTAText_14.set('fieldLabels', {'Layer': 'inline label - always visible', 'PaperSpace': 'inline label - always visible', 'SubClasses': 'inline label - always visible', 'Linetype': 'inline label - always visible', 'EntityHand': 'inline label - always visible', 'Text': 'inline label - always visible', });
lyr_BoundaryProgressClearing_15.set('fieldLabels', {'NO': 'inline label - always visible', 'NAME': 'inline label - always visible', 'DATE': 'inline label - always visible', 'AREA': 'inline label - always visible', });
lyr_BoundaryProgressClearing_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});