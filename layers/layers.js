var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_HereWegoSatellite_1 = new ol.layer.Tile({
            'title': 'Here Wego Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://developer.here.com/documentation/map-tile/dev_guide/topics/resource-copyright.html">Map tiles by Here Wego</a>',
                url: 'https://2.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png8?app_id=eAdkWGYRoc4RfxVo0Z4B&app_code=TrLJuXVK62IQk0vuXFzaig&lg=eng'
            })
        });

        var lyr_ESRITopo_2 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRISatellite_3 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_HPH_AREA_DBKBI_CLUSTER_4 = new ol.format.GeoJSON();
var features_HPH_AREA_DBKBI_CLUSTER_4 = format_HPH_AREA_DBKBI_CLUSTER_4.readFeatures(json_HPH_AREA_DBKBI_CLUSTER_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HPH_AREA_DBKBI_CLUSTER_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HPH_AREA_DBKBI_CLUSTER_4.addFeatures(features_HPH_AREA_DBKBI_CLUSTER_4);
var lyr_HPH_AREA_DBKBI_CLUSTER_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HPH_AREA_DBKBI_CLUSTER_4, 
                style: style_HPH_AREA_DBKBI_CLUSTER_4,
                popuplayertitle: 'HPH_AREA_DBK-BI_CLUSTER',
                interactive: true,
                title: '<img src="styles/legend/HPH_AREA_DBKBI_CLUSTER_4.png" /> HPH_AREA_DBK-BI_CLUSTER'
            });
var format_WIUP_5 = new ol.format.GeoJSON();
var features_WIUP_5 = format_WIUP_5.readFeatures(json_WIUP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUP_5.addFeatures(features_WIUP_5);
var lyr_WIUP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUP_5, 
                style: style_WIUP_5,
                popuplayertitle: 'WIUP',
                interactive: true,
                title: '<img src="styles/legend/WIUP_5.png" /> WIUP'
            });
var format_IUP_OP_BI_6 = new ol.format.GeoJSON();
var features_IUP_OP_BI_6 = format_IUP_OP_BI_6.readFeatures(json_IUP_OP_BI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUP_OP_BI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUP_OP_BI_6.addFeatures(features_IUP_OP_BI_6);
var lyr_IUP_OP_BI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUP_OP_BI_6, 
                style: style_IUP_OP_BI_6,
                popuplayertitle: 'IUP_OP_BI',
                interactive: true,
                title: '<img src="styles/legend/IUP_OP_BI_6.png" /> IUP_OP_BI'
            });
var format_IUP_OP_DBK_7 = new ol.format.GeoJSON();
var features_IUP_OP_DBK_7 = format_IUP_OP_DBK_7.readFeatures(json_IUP_OP_DBK_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUP_OP_DBK_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUP_OP_DBK_7.addFeatures(features_IUP_OP_DBK_7);
var lyr_IUP_OP_DBK_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUP_OP_DBK_7, 
                style: style_IUP_OP_DBK_7,
                popuplayertitle: 'IUP_OP_DBK',
                interactive: true,
                title: '<img src="styles/legend/IUP_OP_DBK_7.png" /> IUP_OP_DBK'
            });
var format_JETTY_DBK_BI_CLUSTER_8 = new ol.format.GeoJSON();
var features_JETTY_DBK_BI_CLUSTER_8 = format_JETTY_DBK_BI_CLUSTER_8.readFeatures(json_JETTY_DBK_BI_CLUSTER_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JETTY_DBK_BI_CLUSTER_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JETTY_DBK_BI_CLUSTER_8.addFeatures(features_JETTY_DBK_BI_CLUSTER_8);
var lyr_JETTY_DBK_BI_CLUSTER_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JETTY_DBK_BI_CLUSTER_8, 
                style: style_JETTY_DBK_BI_CLUSTER_8,
                popuplayertitle: 'JETTY_DBK_BI_CLUSTER',
                interactive: true,
                title: '<img src="styles/legend/JETTY_DBK_BI_CLUSTER_8.png" /> JETTY_DBK_BI_CLUSTER'
            });
var format_Koridor_Jalan_IPPKH_BI_9 = new ol.format.GeoJSON();
var features_Koridor_Jalan_IPPKH_BI_9 = format_Koridor_Jalan_IPPKH_BI_9.readFeatures(json_Koridor_Jalan_IPPKH_BI_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Koridor_Jalan_IPPKH_BI_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Koridor_Jalan_IPPKH_BI_9.addFeatures(features_Koridor_Jalan_IPPKH_BI_9);
var lyr_Koridor_Jalan_IPPKH_BI_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Koridor_Jalan_IPPKH_BI_9, 
                style: style_Koridor_Jalan_IPPKH_BI_9,
                popuplayertitle: 'Koridor_Jalan_IPPKH_BI',
                interactive: true,
                title: '<img src="styles/legend/Koridor_Jalan_IPPKH_BI_9.png" /> Koridor_Jalan_IPPKH_BI'
            });
var format_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10 = new ol.format.GeoJSON();
var features_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10 = format_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10.readFeatures(json_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10.addFeatures(features_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10);
var lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10, 
                style: style_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10,
                popuplayertitle: 'Koridor_Jalan_FINAL_9-4-2012_rev_18_10_2012',
                interactive: true,
                title: '<img src="styles/legend/Koridor_Jalan_FINAL_942012_rev_18_10_2012_10.png" /> Koridor_Jalan_FINAL_9-4-2012_rev_18_10_2012'
            });
var format_SaranaPrasaranaIPPKHDBKPolygon_11 = new ol.format.GeoJSON();
var features_SaranaPrasaranaIPPKHDBKPolygon_11 = format_SaranaPrasaranaIPPKHDBKPolygon_11.readFeatures(json_SaranaPrasaranaIPPKHDBKPolygon_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaranaPrasaranaIPPKHDBKPolygon_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaranaPrasaranaIPPKHDBKPolygon_11.addFeatures(features_SaranaPrasaranaIPPKHDBKPolygon_11);
var lyr_SaranaPrasaranaIPPKHDBKPolygon_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaranaPrasaranaIPPKHDBKPolygon_11, 
                style: style_SaranaPrasaranaIPPKHDBKPolygon_11,
                popuplayertitle: 'Sarana Prasarana IPPKH DBK Polygon',
                interactive: true,
                title: '<img src="styles/legend/SaranaPrasaranaIPPKHDBKPolygon_11.png" /> Sarana Prasarana IPPKH DBK Polygon'
            });
var format_IPPKH_PIT_BI_12 = new ol.format.GeoJSON();
var features_IPPKH_PIT_BI_12 = format_IPPKH_PIT_BI_12.readFeatures(json_IPPKH_PIT_BI_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPPKH_PIT_BI_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPPKH_PIT_BI_12.addFeatures(features_IPPKH_PIT_BI_12);
var lyr_IPPKH_PIT_BI_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IPPKH_PIT_BI_12, 
                style: style_IPPKH_PIT_BI_12,
                popuplayertitle: 'IPPKH_PIT_BI',
                interactive: true,
                title: '<img src="styles/legend/IPPKH_PIT_BI_12.png" /> IPPKH_PIT_BI'
            });
var format_IPPKH_PIT_DBK_13 = new ol.format.GeoJSON();
var features_IPPKH_PIT_DBK_13 = format_IPPKH_PIT_DBK_13.readFeatures(json_IPPKH_PIT_DBK_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPPKH_PIT_DBK_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPPKH_PIT_DBK_13.addFeatures(features_IPPKH_PIT_DBK_13);
var lyr_IPPKH_PIT_DBK_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IPPKH_PIT_DBK_13, 
                style: style_IPPKH_PIT_DBK_13,
                popuplayertitle: 'IPPKH_PIT_DBK',
                interactive: true,
                title: '<img src="styles/legend/IPPKH_PIT_DBK_13.png" /> IPPKH_PIT_DBK'
            });
var format_Lahan_Trase_Jalan_Muara_Laung_14 = new ol.format.GeoJSON();
var features_Lahan_Trase_Jalan_Muara_Laung_14 = format_Lahan_Trase_Jalan_Muara_Laung_14.readFeatures(json_Lahan_Trase_Jalan_Muara_Laung_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_Trase_Jalan_Muara_Laung_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_Trase_Jalan_Muara_Laung_14.addFeatures(features_Lahan_Trase_Jalan_Muara_Laung_14);
var lyr_Lahan_Trase_Jalan_Muara_Laung_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_Trase_Jalan_Muara_Laung_14, 
                style: style_Lahan_Trase_Jalan_Muara_Laung_14,
                popuplayertitle: 'Lahan_Trase_Jalan_Muara_Laung',
                interactive: true,
    title: 'Lahan_Trase_Jalan_Muara_Laung<br />\
    <img src="styles/legend/Lahan_Trase_Jalan_Muara_Laung_14_0.png" /> Belum Bebas<br />\
    <img src="styles/legend/Lahan_Trase_Jalan_Muara_Laung_14_1.png" /> Sudah Bebas<br />' });
var format_Lahan_Trase_Jalan_Ampar_15 = new ol.format.GeoJSON();
var features_Lahan_Trase_Jalan_Ampar_15 = format_Lahan_Trase_Jalan_Ampar_15.readFeatures(json_Lahan_Trase_Jalan_Ampar_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_Trase_Jalan_Ampar_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_Trase_Jalan_Ampar_15.addFeatures(features_Lahan_Trase_Jalan_Ampar_15);
var lyr_Lahan_Trase_Jalan_Ampar_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_Trase_Jalan_Ampar_15, 
                style: style_Lahan_Trase_Jalan_Ampar_15,
                popuplayertitle: 'Lahan_Trase_Jalan_Ampar',
                interactive: true,
    title: 'Lahan_Trase_Jalan_Ampar<br />\
    <img src="styles/legend/Lahan_Trase_Jalan_Ampar_15_0.png" /> Belum Bebas<br />\
    <img src="styles/legend/Lahan_Trase_Jalan_Ampar_15_1.png" /> Sudah Bebas<br />' });
var format_LA_DBK_2025_Updated_20250804_16 = new ol.format.GeoJSON();
var features_LA_DBK_2025_Updated_20250804_16 = format_LA_DBK_2025_Updated_20250804_16.readFeatures(json_LA_DBK_2025_Updated_20250804_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LA_DBK_2025_Updated_20250804_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LA_DBK_2025_Updated_20250804_16.addFeatures(features_LA_DBK_2025_Updated_20250804_16);
var lyr_LA_DBK_2025_Updated_20250804_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LA_DBK_2025_Updated_20250804_16, 
                style: style_LA_DBK_2025_Updated_20250804_16,
                popuplayertitle: 'LA_DBK_2025_Updated_20250804',
                interactive: true,
                title: '<img src="styles/legend/LA_DBK_2025_Updated_20250804_16.png" /> LA_DBK_2025_Updated_20250804'
            });
var format_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17 = new ol.format.GeoJSON();
var features_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17 = format_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17.readFeatures(json_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17.addFeatures(features_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17);
var lyr_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17, 
                style: style_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17,
                popuplayertitle: 'Rencana_Pembebasan_Lahan_Updated_20250608_R0',
                interactive: false,
                title: '<img src="styles/legend/Rencana_Pembebasan_Lahan_Updated_20250608_R0_17.png" /> Rencana_Pembebasan_Lahan_Updated_20250608_R0'
            });
var format_Borrow_Area_Permit_EPC_18 = new ol.format.GeoJSON();
var features_Borrow_Area_Permit_EPC_18 = format_Borrow_Area_Permit_EPC_18.readFeatures(json_Borrow_Area_Permit_EPC_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Borrow_Area_Permit_EPC_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Borrow_Area_Permit_EPC_18.addFeatures(features_Borrow_Area_Permit_EPC_18);
var lyr_Borrow_Area_Permit_EPC_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Borrow_Area_Permit_EPC_18, 
                style: style_Borrow_Area_Permit_EPC_18,
                popuplayertitle: 'Borrow_Area_Permit_EPC',
                interactive: false,
                title: '<img src="styles/legend/Borrow_Area_Permit_EPC_18.png" /> Borrow_Area_Permit_EPC'
            });
var format_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19 = new ol.format.GeoJSON();
var features_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19 = format_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19.readFeatures(json_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19.addFeatures(features_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19);
var lyr_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19, 
                style: style_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19,
                popuplayertitle: 'STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER',
                interactive: true,
    title: 'STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER<br />\
    <img src="styles/legend/STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19_0.png" /> Segment A DBK<br />\
    <img src="styles/legend/STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19_1.png" /> Segment B<br />\
    <img src="styles/legend/STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19_2.png" /> Segment C DBK<br />' });
var format_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20 = new ol.format.GeoJSON();
var features_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20 = format_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20.readFeatures(json_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20.addFeatures(features_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20);
var lyr_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20, 
                style: style_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20,
                popuplayertitle: 'RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF',
                interactive: true,
                title: '<img src="styles/legend/RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20.png" /> RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF'
            });
var format_KORIDOR_KDP_21 = new ol.format.GeoJSON();
var features_KORIDOR_KDP_21 = format_KORIDOR_KDP_21.readFeatures(json_KORIDOR_KDP_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KORIDOR_KDP_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KORIDOR_KDP_21.addFeatures(features_KORIDOR_KDP_21);
var lyr_KORIDOR_KDP_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KORIDOR_KDP_21, 
                style: style_KORIDOR_KDP_21,
                popuplayertitle: 'KORIDOR_KDP',
                interactive: true,
                title: '<img src="styles/legend/KORIDOR_KDP_21.png" /> KORIDOR_KDP'
            });
var format_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22 = new ol.format.GeoJSON();
var features_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22 = format_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22.readFeatures(json_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22.addFeatures(features_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22);
var lyr_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22, 
                style: style_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22,
                popuplayertitle: 'TRACK_SURVEY_ROAD_DBK_BI_CLUSTER',
                interactive: true,
                title: '<img src="styles/legend/TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22.png" /> TRACK_SURVEY_ROAD_DBK_BI_CLUSTER'
            });
var format_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23 = new ol.format.GeoJSON();
var features_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23 = format_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23.readFeatures(json_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23.addFeatures(features_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23);
var lyr_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23, 
                style: style_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23,
                popuplayertitle: 'TRACK_HAULING_ROAD_DBK_BI_CLUSTER',
                interactive: true,
    title: 'TRACK_HAULING_ROAD_DBK_BI_CLUSTER<br />\
    <img src="styles/legend/TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23_0.png" /> Jalan Hauling PT. BP<br />\
    <img src="styles/legend/TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23_1.png" /> Jalan Hauling PT. Cokal<br />\
    <img src="styles/legend/TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23_2.png" /> Jalan Hauling PT. DBK<br />' });
var format_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24 = new ol.format.GeoJSON();
var features_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24 = format_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24.readFeatures(json_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24.addFeatures(features_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24);
var lyr_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24, 
                style: style_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24,
                popuplayertitle: 'TRACK_LOGGING_ROAD_DBK_BI_CLUSTER',
                interactive: true,
    title: 'TRACK_LOGGING_ROAD_DBK_BI_CLUSTER<br />\
    <img src="styles/legend/TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24_0.png" /> Jalan Logging PT. KAJR<br />\
    <img src="styles/legend/TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24_1.png" /> Jalan Logging PT. KDP<br />\
    <img src="styles/legend/TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24_2.png" /> Jalan Logging PT. KTA<br />\
    <img src="styles/legend/TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24_3.png" /> Jalan Logging PT. MPP<br />\
    <img src="styles/legend/TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24_4.png" /> Jalan Logging PT. NARS<br />' });
var format_DBKRoadHaulingSTAText_25 = new ol.format.GeoJSON();
var features_DBKRoadHaulingSTAText_25 = format_DBKRoadHaulingSTAText_25.readFeatures(json_DBKRoadHaulingSTAText_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBKRoadHaulingSTAText_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBKRoadHaulingSTAText_25.addFeatures(features_DBKRoadHaulingSTAText_25);
var lyr_DBKRoadHaulingSTAText_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DBKRoadHaulingSTAText_25,
maxResolution:0.7001116538065492,
 
                style: style_DBKRoadHaulingSTAText_25,
                popuplayertitle: 'DBK Road Hauling STA Text',
                interactive: false,
                title: '<img src="styles/legend/DBKRoadHaulingSTAText_25.png" /> DBK Road Hauling STA Text'
            });
var format_DBKRoadHaulingSTALine_26 = new ol.format.GeoJSON();
var features_DBKRoadHaulingSTALine_26 = format_DBKRoadHaulingSTALine_26.readFeatures(json_DBKRoadHaulingSTALine_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBKRoadHaulingSTALine_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBKRoadHaulingSTALine_26.addFeatures(features_DBKRoadHaulingSTALine_26);
var lyr_DBKRoadHaulingSTALine_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DBKRoadHaulingSTALine_26,
maxResolution:0.7001116538065492,
 
                style: style_DBKRoadHaulingSTALine_26,
                popuplayertitle: 'DBK Road Hauling STA Line',
                interactive: true,
                title: '<img src="styles/legend/DBKRoadHaulingSTALine_26.png" /> DBK Road Hauling STA Line'
            });
var format_PotensiQuarryBatu_27 = new ol.format.GeoJSON();
var features_PotensiQuarryBatu_27 = format_PotensiQuarryBatu_27.readFeatures(json_PotensiQuarryBatu_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiQuarryBatu_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiQuarryBatu_27.addFeatures(features_PotensiQuarryBatu_27);
var lyr_PotensiQuarryBatu_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotensiQuarryBatu_27, 
                style: style_PotensiQuarryBatu_27,
                popuplayertitle: 'Potensi Quarry Batu',
                interactive: true,
                title: '<img src="styles/legend/PotensiQuarryBatu_27.png" /> Potensi Quarry Batu'
            });
var format_lom_pit_2507_28 = new ol.format.GeoJSON();
var features_lom_pit_2507_28 = format_lom_pit_2507_28.readFeatures(json_lom_pit_2507_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lom_pit_2507_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lom_pit_2507_28.addFeatures(features_lom_pit_2507_28);
var lyr_lom_pit_2507_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lom_pit_2507_28, 
                style: style_lom_pit_2507_28,
                popuplayertitle: 'lom_pit_2507',
                interactive: false,
                title: '<img src="styles/legend/lom_pit_2507_28.png" /> lom_pit_2507'
            });
var format_DUMP_LOM_48M_29 = new ol.format.GeoJSON();
var features_DUMP_LOM_48M_29 = format_DUMP_LOM_48M_29.readFeatures(json_DUMP_LOM_48M_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DUMP_LOM_48M_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DUMP_LOM_48M_29.addFeatures(features_DUMP_LOM_48M_29);
var lyr_DUMP_LOM_48M_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DUMP_LOM_48M_29, 
                style: style_DUMP_LOM_48M_29,
                popuplayertitle: 'DUMP_LOM_48M',
                interactive: false,
                title: '<img src="styles/legend/DUMP_LOM_48M_29.png" /> DUMP_LOM_48M'
            });
var format_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30 = new ol.format.GeoJSON();
var features_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30 = format_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30.readFeatures(json_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30.addFeatures(features_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30);
var lyr_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30, 
                style: style_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30,
                popuplayertitle: 'Realisasi_Bukaan_Lahan_DBK_2024_TW_IV_-_2025_TW_II_R2',
                interactive: true,
    title: 'Realisasi_Bukaan_Lahan_DBK_2024_TW_IV_-_2025_TW_II_R2<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30_0.png" /> Bukaan Tambang Aktif<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30_1.png" /> Gudang Handak Sementara<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30_2.png" /> Jalan Hauling<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30_3.png" /> Pelabuhan<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30_4.png" /> Perumahan Karyawan Tambang<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30_5.png" /> Rencana Mess<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30_6.png" /> Timbunan OB (OPD)<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30_7.png" /> Timbunan Tanah Pucuk<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30_8.png" /> Workshop<br />' });
var group_Realisasi_Bukaan_Lahan = new ol.layer.Group({
                                layers: [lyr_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30,],
                                fold: 'close',
                                title: 'Realisasi_Bukaan_Lahan'});
                      
var group_Batas_LOM = new ol.layer.Group({
                                layers: [lyr_lom_pit_2507_28,lyr_DUMP_LOM_48M_29,],
                                fold: 'close',
                                title: 'Batas_LOM'});

var group_RoadDesign = new ol.layer.Group({
                                layers: [lyr_DBKRoadHaulingSTAText_25,lyr_DBKRoadHaulingSTALine_26,],
                                fold: 'close',
                                title: 'Road Design'});
  
var group_Existing = new ol.layer.Group({
                                layers: [lyr_KORIDOR_KDP_21,lyr_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22,lyr_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23,lyr_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24,],
                                fold: 'open',
                                title: 'Existing'});
var group_PlanStagging = new ol.layer.Group({
                                layers: [lyr_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19,lyr_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20,],
                                fold: 'open',
                                title: 'Plan Stagging'});

var group_Plan_LA_2025 = new ol.layer.Group({
                                layers: [lyr_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17,lyr_Borrow_Area_Permit_EPC_18,],
                                fold: 'close',
                                title: 'Plan_LA_2025'});
var group_Database_Lahan_2025 = new ol.layer.Group({
                                layers: [lyr_LA_DBK_2025_Updated_20250804_16,],
                                fold: 'close',
                                title: 'Database_Lahan_2025'});
var group_Database_Lahan_2014 = new ol.layer.Group({
                                layers: [lyr_Lahan_Trase_Jalan_Muara_Laung_14,lyr_Lahan_Trase_Jalan_Ampar_15,],
                                fold: 'close',
                                title: 'Database_Lahan_2014'});

var group_PPKH_SK2014 = new ol.layer.Group({
                                layers: [lyr_Koridor_Jalan_IPPKH_BI_9,lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10,lyr_SaranaPrasaranaIPPKHDBKPolygon_11,lyr_IPPKH_PIT_BI_12,lyr_IPPKH_PIT_DBK_13,],
                                fold: 'close',
                                title: 'PPKH_SK2014'});
var group_BatasITR = new ol.layer.Group({
                                layers: [lyr_JETTY_DBK_BI_CLUSTER_8,],
                                fold: 'close',
                                title: 'Batas ITR'});
var group_BatasLainnya = new ol.layer.Group({
                                layers: [lyr_HPH_AREA_DBKBI_CLUSTER_4,lyr_WIUP_5,lyr_IUP_OP_BI_6,lyr_IUP_OP_DBK_7,],
                                fold: 'close',
                                title: 'Batas Lainnya'});
var group_Basemap_Imagery = new ol.layer.Group({
                                layers: [lyr_GoogleHybrid_0,lyr_HereWegoSatellite_1,lyr_ESRITopo_2,lyr_ESRISatellite_3,],
                                fold: 'open',
                                title: 'Basemap_Imagery'});

var group_Mining = new ol.layer.Group({
                                    layers: [group_Batas_LOM,],
                                    fold: "close",
                                    title: "Mining"})  
                                     
var group_Infrastrcuture = new ol.layer.Group({
                                layers: [lyr_PotensiQuarryBatu_27,group_RoadDesign],
                                fold: 'close',
                                title: 'Infrastrcuture'});

var group_TraseJalan = new ol.layer.Group({
                                    layers: [group_Existing,group_PlanStagging],
                                    fold: "open",
                                    title: "Trase Jalan"}) 

var group_BatasLahan = new ol.layer.Group({
                                    layers: [group_Plan_LA_2025,group_Database_Lahan_2025,group_Database_Lahan_2014,],
                                    fold: "close",
                                    title: "Batas Lahan"})

var group_BatasIjin = new ol.layer.Group({
                                    layers: [group_PPKH_SK2014,group_BatasITR,group_BatasLainnya,],
                                    fold: "open",
                                    title: "Batas Ijin"})

lyr_GoogleHybrid_0.setVisible(false);lyr_HereWegoSatellite_1.setVisible(false);lyr_ESRITopo_2.setVisible(true);lyr_ESRISatellite_3.setVisible(false);lyr_HPH_AREA_DBKBI_CLUSTER_4.setVisible(true);lyr_WIUP_5.setVisible(true);lyr_IUP_OP_BI_6.setVisible(true);lyr_IUP_OP_DBK_7.setVisible(true);lyr_JETTY_DBK_BI_CLUSTER_8.setVisible(true);lyr_Koridor_Jalan_IPPKH_BI_9.setVisible(true);lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10.setVisible(true);lyr_SaranaPrasaranaIPPKHDBKPolygon_11.setVisible(true);lyr_IPPKH_PIT_BI_12.setVisible(true);lyr_IPPKH_PIT_DBK_13.setVisible(true);lyr_Lahan_Trase_Jalan_Muara_Laung_14.setVisible(false);lyr_Lahan_Trase_Jalan_Ampar_15.setVisible(false);lyr_LA_DBK_2025_Updated_20250804_16.setVisible(false);lyr_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17.setVisible(false);lyr_Borrow_Area_Permit_EPC_18.setVisible(false);lyr_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19.setVisible(false);lyr_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20.setVisible(true);lyr_KORIDOR_KDP_21.setVisible(true);lyr_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22.setVisible(true);lyr_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23.setVisible(true);lyr_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24.setVisible(true);lyr_DBKRoadHaulingSTAText_25.setVisible(true);lyr_DBKRoadHaulingSTALine_26.setVisible(true);lyr_PotensiQuarryBatu_27.setVisible(true);lyr_lom_pit_2507_28.setVisible(true);lyr_DUMP_LOM_48M_29.setVisible(true);lyr_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30.setVisible(false);
var layersList = [group_Basemap_Imagery,group_BatasIjin,group_BatasLahan,group_TraseJalan,group_Infrastrcuture,group_Mining,group_Realisasi_Bukaan_Lahan];
lyr_HPH_AREA_DBKBI_CLUSTER_4.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'Perusahaan': 'Perusahaan', 'No': 'No', 'Komoditas': 'Komoditas', 'Luas': 'Luas', 'SK': 'SK', 'Data_Modif': 'Data_Modif', 'Kabupaten': 'Kabupaten', });
lyr_WIUP_5.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', });
lyr_IUP_OP_BI_6.set('fieldAliases', {'LAYER': 'LAYER', 'Perusahaan': 'Perusahaan', 'Luas': 'Luas', 'No_SK': 'No_SK', 'Status_Izi': 'Status_Izi', });
lyr_IUP_OP_DBK_7.set('fieldAliases', {'LAYER': 'LAYER', 'Perusahaan': 'Perusahaan', 'Luas': 'Luas', 'No_SK': 'No_SK', 'Status_Izi': 'Status_Izi', });
lyr_JETTY_DBK_BI_CLUSTER_8.set('fieldAliases', {'Nama': 'Nama', 'Deskripsi': 'Deskripsi', 'Luas': 'Luas', });
lyr_Koridor_Jalan_IPPKH_BI_9.set('fieldAliases', {'Id': 'Id', });
lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10.set('fieldAliases', {'LENGTH': 'LENGTH', 'Id': 'Id', 'ket': 'ket', 'Lebar': 'Lebar', 'Buffer': 'Buffer', 'Label': 'Label', });
lyr_SaranaPrasaranaIPPKHDBKPolygon_11.set('fieldAliases', {'FID': 'FID', 'Name': 'Name', 'area': 'area', });
lyr_IPPKH_PIT_BI_12.set('fieldAliases', {'LAYER': 'LAYER', 'PINJAM': 'PINJAM', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'NAME': 'NAME', });
lyr_IPPKH_PIT_DBK_13.set('fieldAliases', {'LAYER': 'LAYER', 'Id': 'Id', 'area': 'area', });
lyr_Lahan_Trase_Jalan_Muara_Laung_14.set('fieldAliases', {'LAYER': 'LAYER', 'OBJECTID': 'OBJECTID', 'No_Pendata': 'No_Pendata', 'Pemilik': 'Pemilik', 'Luas_Dig': 'Luas_Dig', 'Luas_Text': 'Luas_Text', 'Prog_Lap': 'Prog_Lap', 'Prog_Acc': 'Prog_Acc', 'Ket_Lap': 'Ket_Lap', 'Ket_Acc': 'Ket_Acc', 'Stat_Lah_C': 'Stat_Lah_C', 'Prog_Lah_C': 'Prog_Lah_C', 'Status_Lhn': 'Status_Lhn', 'Kecamatan': 'Kecamatan', 'Peruntukan': 'Peruntukan', 'Nomor_BA': 'Nomor_BA', 'Reconcile': 'Reconcile', 'Keterangan': 'Keterangan', 'Bts_Area': 'Bts_Area', 'Note_Lap': 'Note_Lap', 'Segment': 'Segment', 'NoU': 'NoU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Foto_Pemil': 'Foto_Pemil', 'Ket_DJR': 'Ket_DJR', });
lyr_Lahan_Trase_Jalan_Ampar_15.set('fieldAliases', {'LAYER': 'LAYER', 'OBJECTID': 'OBJECTID', 'No_Pendata': 'No_Pendata', 'Pemilik': 'Pemilik', 'Luas_Dig': 'Luas_Dig', 'Luas_Text': 'Luas_Text', 'Prog_Lap': 'Prog_Lap', 'Prog_Acc': 'Prog_Acc', 'Ket_Lap': 'Ket_Lap', 'Ket_Acc': 'Ket_Acc', 'Stat_Lah_C': 'Stat_Lah_C', 'Prog_Lah_C': 'Prog_Lah_C', 'Status_Lhn': 'Status_Lhn', 'Kecamatan': 'Kecamatan', 'Peruntukan': 'Peruntukan', 'Nomor_BA': 'Nomor_BA', 'Reconcile': 'Reconcile', 'Keterangan': 'Keterangan', 'Bts_Area': 'Bts_Area', 'Note_Lap': 'Note_Lap', 'Segment': 'Segment', 'NoU': 'NoU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Foto_Pemil': 'Foto_Pemil', 'Ket_DJR': 'Ket_DJR', });
lyr_LA_DBK_2025_Updated_20250804_16.set('fieldAliases', {'LAYER': 'LAYER', 'OBJECTID': 'OBJECTID', 'No_Pendata': 'No_Pendata', 'Pemilik': 'Pemilik', 'Luas_Dig': 'Luas_Dig', 'Luas_Text': 'Luas_Text', 'Prog_Lap': 'Prog_Lap', 'Prog_Acc': 'Prog_Acc', 'Ket_Lap': 'Ket_Lap', 'Ket_Acc': 'Ket_Acc', 'Stat_Lah_C': 'Stat_Lah_C', 'Prog_Lah_C': 'Prog_Lah_C', 'Status_Lhn': 'Status_Lhn', 'Kecamatan': 'Kecamatan', 'Peruntukan': 'Peruntukan', 'Nomor_BA': 'Nomor_BA', 'Reconcile': 'Reconcile', 'Keterangan': 'Keterangan', 'Bts_Area': 'Bts_Area', 'Note_Lap': 'Note_Lap', 'Segment': 'Segment', 'NoU': 'NoU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Foto_Pemil': 'Foto_Pemil', 'Ket_DJR': 'Ket_DJR', 'path': 'path', });
lyr_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17.set('fieldAliases', {'FID_': 'FID_', 'NO': 'NO', 'NAME': 'NAME', 'AREA': 'AREA', 'AREA_TEXT': 'AREA_TEXT', });
lyr_Borrow_Area_Permit_EPC_18.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'MAP_NAME': 'MAP_NAME', 'DXF_HATCH_': 'DXF_HATCH_', 'ELEVATION': 'ELEVATION', 'CLOSED': 'CLOSED', 'BORDER_STY': 'BORDER_STY', 'BORDER_COL': 'BORDER_COL', 'BORDER_WID': 'BORDER_WID', 'FILL_STYLE': 'FILL_STYLE', 'FILL_COLOR': 'FILL_COLOR', });
lyr_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19.set('fieldAliases', {'Nama': 'Nama', 'Deskripsi': 'Deskripsi', 'PjgRuas': 'PjgRuas', 'PjgTotal': 'PjgTotal', });
lyr_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20.set('fieldAliases', {'Nama': 'Nama', 'Deskripsi': 'Deskripsi', 'PjgRuas': 'PjgRuas', 'PjgTotal': 'PjgTotal', });
lyr_KORIDOR_KDP_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', });
lyr_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22.set('fieldAliases', {'Nama': 'Nama', 'Deskripsi': 'Deskripsi', 'PjgRuas': 'PjgRuas', 'PjgTotal': 'PjgTotal', });
lyr_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23.set('fieldAliases', {'Nama': 'Nama', 'Deskripsi': 'Deskripsi', 'PjgRuas': 'PjgRuas', 'PjgTotal': 'PjgTotal', });
lyr_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24.set('fieldAliases', {'Nama': 'Nama', 'Deskripsi': 'Deskripsi', 'PjgRuas': 'PjgRuas', 'PjgTotal': 'PjgTotal', });
lyr_DBKRoadHaulingSTAText_25.set('fieldAliases', {'TEXTSTRING': 'TEXTSTRING', 'TEXT_SIZE': 'TEXT_SIZE', 'TEXT_ANGLE': 'TEXT_ANGLE', });
lyr_DBKRoadHaulingSTALine_26.set('fieldAliases', {});
lyr_PotensiQuarryBatu_27.set('fieldAliases', {'no': 'no', 'easting': 'easting', 'northing': 'northing', 'nama_lokas': 'nama_lokas', 'jenis_mtr': 'jenis_mtr', 'volume': 'volume', 'satuan': 'satuan', 'akses_jln': 'akses_jln', 'segment': 'segment', });
lyr_lom_pit_2507_28.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_DUMP_LOM_48M_29.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', 'Bulan': 'Bulan', 'Keterangan': 'Keterangan', 'Luas': 'Luas', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HPH_AREA_DBKBI_CLUSTER_4.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'Perusahaan': 'TextEdit', 'No': 'Range', 'Komoditas': 'TextEdit', 'Luas': 'TextEdit', 'SK': 'TextEdit', 'Data_Modif': 'TextEdit', 'Kabupaten': 'TextEdit', });
lyr_WIUP_5.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_IUP_OP_BI_6.set('fieldImages', {'LAYER': 'TextEdit', 'Perusahaan': 'TextEdit', 'Luas': 'TextEdit', 'No_SK': 'TextEdit', 'Status_Izi': 'TextEdit', });
lyr_IUP_OP_DBK_7.set('fieldImages', {'LAYER': 'TextEdit', 'Perusahaan': 'TextEdit', 'Luas': 'TextEdit', 'No_SK': 'TextEdit', 'Status_Izi': 'TextEdit', });
lyr_JETTY_DBK_BI_CLUSTER_8.set('fieldImages', {'Nama': 'TextEdit', 'Deskripsi': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Koridor_Jalan_IPPKH_BI_9.set('fieldImages', {'Id': 'Range', });
lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10.set('fieldImages', {'LENGTH': 'TextEdit', 'Id': 'TextEdit', 'ket': 'TextEdit', 'Lebar': 'TextEdit', 'Buffer': 'TextEdit', 'Label': 'TextEdit', });
lyr_SaranaPrasaranaIPPKHDBKPolygon_11.set('fieldImages', {'FID': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', });
lyr_IPPKH_PIT_BI_12.set('fieldImages', {'LAYER': 'TextEdit', 'PINJAM': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'NAME': 'TextEdit', });
lyr_IPPKH_PIT_DBK_13.set('fieldImages', {'LAYER': 'TextEdit', 'Id': 'Range', 'area': 'TextEdit', });
lyr_Lahan_Trase_Jalan_Muara_Laung_14.set('fieldImages', {'LAYER': 'TextEdit', 'OBJECTID': 'Range', 'No_Pendata': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas_Dig': 'TextEdit', 'Luas_Text': 'TextEdit', 'Prog_Lap': 'TextEdit', 'Prog_Acc': 'TextEdit', 'Ket_Lap': 'TextEdit', 'Ket_Acc': 'TextEdit', 'Stat_Lah_C': 'TextEdit', 'Prog_Lah_C': 'TextEdit', 'Status_Lhn': 'TextEdit', 'Kecamatan': 'TextEdit', 'Peruntukan': 'TextEdit', 'Nomor_BA': 'TextEdit', 'Reconcile': 'TextEdit', 'Keterangan': 'TextEdit', 'Bts_Area': 'TextEdit', 'Note_Lap': 'TextEdit', 'Segment': 'TextEdit', 'NoU': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Foto_Pemil': 'TextEdit', 'Ket_DJR': 'TextEdit', });
lyr_Lahan_Trase_Jalan_Ampar_15.set('fieldImages', {'LAYER': 'TextEdit', 'OBJECTID': 'Range', 'No_Pendata': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas_Dig': 'TextEdit', 'Luas_Text': 'TextEdit', 'Prog_Lap': 'TextEdit', 'Prog_Acc': 'TextEdit', 'Ket_Lap': 'TextEdit', 'Ket_Acc': 'TextEdit', 'Stat_Lah_C': 'TextEdit', 'Prog_Lah_C': 'TextEdit', 'Status_Lhn': 'TextEdit', 'Kecamatan': 'TextEdit', 'Peruntukan': 'TextEdit', 'Nomor_BA': 'TextEdit', 'Reconcile': 'TextEdit', 'Keterangan': 'TextEdit', 'Bts_Area': 'TextEdit', 'Note_Lap': 'TextEdit', 'Segment': 'TextEdit', 'NoU': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Foto_Pemil': 'TextEdit', 'Ket_DJR': 'TextEdit', });
lyr_LA_DBK_2025_Updated_20250804_16.set('fieldImages', {'LAYER': 'TextEdit', 'OBJECTID': 'Range', 'No_Pendata': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas_Dig': 'TextEdit', 'Luas_Text': 'TextEdit', 'Prog_Lap': 'TextEdit', 'Prog_Acc': 'TextEdit', 'Ket_Lap': 'TextEdit', 'Ket_Acc': 'TextEdit', 'Stat_Lah_C': 'TextEdit', 'Prog_Lah_C': 'TextEdit', 'Status_Lhn': 'TextEdit', 'Kecamatan': 'TextEdit', 'Peruntukan': 'TextEdit', 'Nomor_BA': 'TextEdit', 'Reconcile': 'TextEdit', 'Keterangan': 'TextEdit', 'Bts_Area': 'TextEdit', 'Note_Lap': 'TextEdit', 'Segment': 'TextEdit', 'NoU': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Foto_Pemil': 'TextEdit', 'Ket_DJR': 'TextEdit', 'path': 'TextEdit', });
lyr_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17.set('fieldImages', {'FID_': 'TextEdit', 'NO': 'Range', 'NAME': 'TextEdit', 'AREA': 'TextEdit', 'AREA_TEXT': 'TextEdit', });
lyr_Borrow_Area_Permit_EPC_18.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'MAP_NAME': 'TextEdit', 'DXF_HATCH_': 'Range', 'ELEVATION': 'Range', 'CLOSED': 'TextEdit', 'BORDER_STY': 'TextEdit', 'BORDER_COL': 'TextEdit', 'BORDER_WID': 'Range', 'FILL_STYLE': 'TextEdit', 'FILL_COLOR': 'TextEdit', });
lyr_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19.set('fieldImages', {'Nama': 'TextEdit', 'Deskripsi': 'TextEdit', 'PjgRuas': 'TextEdit', 'PjgTotal': 'TextEdit', });
lyr_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20.set('fieldImages', {'Nama': 'TextEdit', 'Deskripsi': 'TextEdit', 'PjgRuas': 'TextEdit', 'PjgTotal': 'TextEdit', });
lyr_KORIDOR_KDP_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22.set('fieldImages', {'Nama': 'TextEdit', 'Deskripsi': 'TextEdit', 'PjgRuas': 'TextEdit', 'PjgTotal': 'TextEdit', });
lyr_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23.set('fieldImages', {'Nama': 'TextEdit', 'Deskripsi': 'TextEdit', 'PjgRuas': 'TextEdit', 'PjgTotal': 'TextEdit', });
lyr_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24.set('fieldImages', {'Nama': 'TextEdit', 'Deskripsi': 'TextEdit', 'PjgRuas': 'TextEdit', 'PjgTotal': 'TextEdit', });
lyr_DBKRoadHaulingSTAText_25.set('fieldImages', {'TEXTSTRING': 'TextEdit', 'TEXT_SIZE': 'TextEdit', 'TEXT_ANGLE': 'TextEdit', });
lyr_DBKRoadHaulingSTALine_26.set('fieldImages', {});
lyr_PotensiQuarryBatu_27.set('fieldImages', {'no': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', 'nama_lokas': 'TextEdit', 'jenis_mtr': 'TextEdit', 'volume': 'TextEdit', 'satuan': 'TextEdit', 'akses_jln': 'TextEdit', 'segment': 'TextEdit', });
lyr_lom_pit_2507_28.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_DUMP_LOM_48M_29.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30.set('fieldImages', {'Id': 'TextEdit', 'Nama': 'TextEdit', 'Bulan': 'TextEdit', 'Keterangan': 'TextEdit', 'Luas': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HPH_AREA_DBKBI_CLUSTER_4.set('fieldLabels', {'NAME': 'inline label - visible with data', 'LAYER': 'inline label - visible with data', 'Perusahaan': 'inline label - visible with data', 'No': 'inline label - visible with data', 'Komoditas': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'SK': 'inline label - visible with data', 'Data_Modif': 'inline label - visible with data', 'Kabupaten': 'inline label - visible with data', });
lyr_WIUP_5.set('fieldLabels', {'objectid': 'inline label - visible with data', 'pulau': 'inline label - visible with data', 'pejabat': 'inline label - visible with data', 'id_prov': 'inline label - visible with data', 'nama_prov': 'inline label - visible with data', 'id_kab': 'inline label - visible with data', 'nama_kab': 'inline label - visible with data', 'jenis_izin': 'inline label - visible with data', 'badan_usah': 'inline label - visible with data', 'nama_usaha': 'inline label - visible with data', 'kode_wiup': 'inline label - visible with data', 'sk_iup': 'inline label - visible with data', 'tgl_berlak': 'inline label - visible with data', 'tgl_akhir': 'inline label - visible with data', 'kegiatan': 'inline label - visible with data', 'luas_sk': 'inline label - visible with data', 'komoditas': 'inline label - visible with data', 'kode_golon': 'inline label - visible with data', 'kode_jnsko': 'inline label - visible with data', 'cnc': 'inline label - visible with data', 'generasi': 'inline label - visible with data', 'kode_wil': 'inline label - visible with data', 'lokasi': 'inline label - visible with data', });
lyr_IUP_OP_BI_6.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'Perusahaan': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'No_SK': 'inline label - visible with data', 'Status_Izi': 'inline label - visible with data', });
lyr_IUP_OP_DBK_7.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'Perusahaan': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'No_SK': 'inline label - visible with data', 'Status_Izi': 'inline label - visible with data', });
lyr_JETTY_DBK_BI_CLUSTER_8.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', 'Luas': 'inline label - visible with data', });
lyr_Koridor_Jalan_IPPKH_BI_9.set('fieldLabels', {'Id': 'inline label - visible with data', });
lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_10.set('fieldLabels', {'LENGTH': 'inline label - visible with data', 'Id': 'inline label - visible with data', 'ket': 'inline label - visible with data', 'Lebar': 'inline label - visible with data', 'Buffer': 'inline label - visible with data', 'Label': 'inline label - visible with data', });
lyr_SaranaPrasaranaIPPKHDBKPolygon_11.set('fieldLabels', {'FID': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_IPPKH_PIT_BI_12.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'PINJAM': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'PERIMETER': 'inline label - visible with data', 'NAME': 'inline label - visible with data', });
lyr_IPPKH_PIT_DBK_13.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'Id': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_Lahan_Trase_Jalan_Muara_Laung_14.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'OBJECTID': 'inline label - visible with data', 'No_Pendata': 'inline label - visible with data', 'Pemilik': 'inline label - visible with data', 'Luas_Dig': 'inline label - visible with data', 'Luas_Text': 'inline label - visible with data', 'Prog_Lap': 'inline label - visible with data', 'Prog_Acc': 'inline label - visible with data', 'Ket_Lap': 'inline label - visible with data', 'Ket_Acc': 'inline label - visible with data', 'Stat_Lah_C': 'inline label - visible with data', 'Prog_Lah_C': 'inline label - visible with data', 'Status_Lhn': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Peruntukan': 'inline label - visible with data', 'Nomor_BA': 'inline label - visible with data', 'Reconcile': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'Bts_Area': 'inline label - visible with data', 'Note_Lap': 'inline label - visible with data', 'Segment': 'inline label - visible with data', 'NoU': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'Foto_Pemil': 'inline label - visible with data', 'Ket_DJR': 'inline label - visible with data', });
lyr_Lahan_Trase_Jalan_Ampar_15.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'OBJECTID': 'inline label - visible with data', 'No_Pendata': 'inline label - visible with data', 'Pemilik': 'inline label - visible with data', 'Luas_Dig': 'inline label - visible with data', 'Luas_Text': 'inline label - visible with data', 'Prog_Lap': 'inline label - visible with data', 'Prog_Acc': 'inline label - visible with data', 'Ket_Lap': 'inline label - visible with data', 'Ket_Acc': 'inline label - visible with data', 'Stat_Lah_C': 'inline label - visible with data', 'Prog_Lah_C': 'inline label - visible with data', 'Status_Lhn': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Peruntukan': 'inline label - visible with data', 'Nomor_BA': 'inline label - visible with data', 'Reconcile': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'Bts_Area': 'inline label - visible with data', 'Note_Lap': 'inline label - visible with data', 'Segment': 'inline label - visible with data', 'NoU': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'Foto_Pemil': 'inline label - visible with data', 'Ket_DJR': 'inline label - visible with data', });
lyr_LA_DBK_2025_Updated_20250804_16.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'OBJECTID': 'inline label - visible with data', 'No_Pendata': 'inline label - visible with data', 'Pemilik': 'inline label - visible with data', 'Luas_Dig': 'inline label - visible with data', 'Luas_Text': 'inline label - visible with data', 'Prog_Lap': 'inline label - visible with data', 'Prog_Acc': 'inline label - visible with data', 'Ket_Lap': 'inline label - visible with data', 'Ket_Acc': 'inline label - visible with data', 'Stat_Lah_C': 'inline label - visible with data', 'Prog_Lah_C': 'inline label - visible with data', 'Status_Lhn': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Peruntukan': 'inline label - visible with data', 'Nomor_BA': 'inline label - visible with data', 'Reconcile': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'Bts_Area': 'inline label - visible with data', 'Note_Lap': 'inline label - visible with data', 'Segment': 'inline label - visible with data', 'NoU': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'Foto_Pemil': 'inline label - visible with data', 'Ket_DJR': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_Rencana_Pembebasan_Lahan_Updated_20250608_R0_17.set('fieldLabels', {'FID_': 'inline label - visible with data', 'NO': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'AREA_TEXT': 'inline label - visible with data', });
lyr_Borrow_Area_Permit_EPC_18.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'GM_TYPE': 'inline label - visible with data', 'MAP_NAME': 'inline label - visible with data', 'DXF_HATCH_': 'inline label - visible with data', 'ELEVATION': 'inline label - visible with data', 'CLOSED': 'inline label - visible with data', 'BORDER_STY': 'inline label - visible with data', 'BORDER_COL': 'inline label - visible with data', 'BORDER_WID': 'inline label - visible with data', 'FILL_STYLE': 'inline label - visible with data', 'FILL_COLOR': 'inline label - visible with data', });
lyr_STAGE_DEVELOPMENT_HAULING_ROAD_DBK_BI_CLUSTER_19.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', 'PjgRuas': 'inline label - visible with data', 'PjgTotal': 'inline label - visible with data', });
lyr_RENCANA_BUKAAN_JALAN_HAULING_ALTERNATIF_20.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', 'PjgRuas': 'inline label - visible with data', 'PjgTotal': 'inline label - visible with data', });
lyr_KORIDOR_KDP_21.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_22.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', 'PjgRuas': 'inline label - visible with data', 'PjgTotal': 'inline label - visible with data', });
lyr_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_23.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', 'PjgRuas': 'inline label - visible with data', 'PjgTotal': 'inline label - visible with data', });
lyr_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_24.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', 'PjgRuas': 'inline label - visible with data', 'PjgTotal': 'inline label - visible with data', });
lyr_DBKRoadHaulingSTAText_25.set('fieldLabels', {'TEXTSTRING': 'inline label - visible with data', 'TEXT_SIZE': 'inline label - visible with data', 'TEXT_ANGLE': 'inline label - visible with data', });
lyr_DBKRoadHaulingSTALine_26.set('fieldLabels', {});
lyr_PotensiQuarryBatu_27.set('fieldLabels', {'no': 'inline label - visible with data', 'easting': 'inline label - visible with data', 'northing': 'inline label - visible with data', 'nama_lokas': 'inline label - visible with data', 'jenis_mtr': 'inline label - visible with data', 'volume': 'inline label - visible with data', 'satuan': 'inline label - visible with data', 'akses_jln': 'inline label - visible with data', 'segment': 'inline label - visible with data', });
lyr_lom_pit_2507_28.set('fieldLabels', {'FID_': 'inline label - visible with data', 'Entity': 'inline label - visible with data', 'Layer': 'inline label - visible with data', 'Color': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'Elevation': 'inline label - visible with data', 'LineWt': 'inline label - visible with data', 'RefName': 'inline label - visible with data', });
lyr_DUMP_LOM_48M_29.set('fieldLabels', {'FID_': 'inline label - visible with data', 'Entity': 'inline label - visible with data', 'Layer': 'inline label - visible with data', 'Color': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'Elevation': 'inline label - visible with data', 'LineWt': 'inline label - visible with data', 'RefName': 'inline label - visible with data', });
lyr_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30.set('fieldLabels', {'Id': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'Bulan': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_Realisasi_Bukaan_Lahan_DBK_2024_TW_IV__2025_TW_II_R2_30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});