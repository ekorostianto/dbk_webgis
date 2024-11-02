var wms_layers = [];


        var lyr_HereWegoSatellite_0 = new ol.layer.Tile({
            'title': 'Here Wego Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://developer.here.com/documentation/map-tile/dev_guide/topics/resource-copyright.html">Map tiles by Here Wego</a>',
                url: 'https://2.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png8?app_id=eAdkWGYRoc4RfxVo0Z4B&app_code=TrLJuXVK62IQk0vuXFzaig&lg=eng'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_IUP_OP_DBK_2 = new ol.format.GeoJSON();
var features_IUP_OP_DBK_2 = format_IUP_OP_DBK_2.readFeatures(json_IUP_OP_DBK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUP_OP_DBK_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUP_OP_DBK_2.addFeatures(features_IUP_OP_DBK_2);
var lyr_IUP_OP_DBK_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUP_OP_DBK_2, 
                style: style_IUP_OP_DBK_2,
                popuplayertitle: "IUP_OP_DBK",
                interactive: true,
                title: '<img src="styles/legend/IUP_OP_DBK_2.png" /> IUP_OP_DBK'
            });
var format_IPPKH_PIT_DBK_3 = new ol.format.GeoJSON();
var features_IPPKH_PIT_DBK_3 = format_IPPKH_PIT_DBK_3.readFeatures(json_IPPKH_PIT_DBK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPPKH_PIT_DBK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPPKH_PIT_DBK_3.addFeatures(features_IPPKH_PIT_DBK_3);
var lyr_IPPKH_PIT_DBK_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IPPKH_PIT_DBK_3, 
                style: style_IPPKH_PIT_DBK_3,
                popuplayertitle: "IPPKH_PIT_DBK",
                interactive: true,
                title: '<img src="styles/legend/IPPKH_PIT_DBK_3.png" /> IPPKH_PIT_DBK'
            });
var format_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4 = new ol.format.GeoJSON();
var features_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4 = format_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4.readFeatures(json_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4.addFeatures(features_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4);
var lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4, 
                style: style_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4,
                popuplayertitle: "Koridor_Jalan_FINAL_9-4-2012_rev_18_10_2012",
                interactive: true,
                title: '<img src="styles/legend/Koridor_Jalan_FINAL_942012_rev_18_10_2012_4.png" /> Koridor_Jalan_FINAL_9-4-2012_rev_18_10_2012'
            });
var format_SaranaPrasaranaIPPKHDBKPolygon_5 = new ol.format.GeoJSON();
var features_SaranaPrasaranaIPPKHDBKPolygon_5 = format_SaranaPrasaranaIPPKHDBKPolygon_5.readFeatures(json_SaranaPrasaranaIPPKHDBKPolygon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaranaPrasaranaIPPKHDBKPolygon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaranaPrasaranaIPPKHDBKPolygon_5.addFeatures(features_SaranaPrasaranaIPPKHDBKPolygon_5);
var lyr_SaranaPrasaranaIPPKHDBKPolygon_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaranaPrasaranaIPPKHDBKPolygon_5, 
                style: style_SaranaPrasaranaIPPKHDBKPolygon_5,
                popuplayertitle: "Sarana Prasarana IPPKH DBK Polygon",
                interactive: true,
                title: '<img src="styles/legend/SaranaPrasaranaIPPKHDBKPolygon_5.png" /> Sarana Prasarana IPPKH DBK Polygon'
            });
var format_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6 = new ol.format.GeoJSON();
var features_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6 = format_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6.readFeatures(json_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6.addFeatures(features_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6);
var lyr_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6, 
                style: style_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6,
                popuplayertitle: "Lahan_Trase_Jalan_Ampar_Belum_Bebas",
                interactive: true,
                title: '<img src="styles/legend/Lahan_Trase_Jalan_Ampar_Belum_Bebas_6.png" /> Lahan_Trase_Jalan_Ampar_Belum_Bebas'
            });
var format_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7 = new ol.format.GeoJSON();
var features_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7 = format_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7.readFeatures(json_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7.addFeatures(features_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7);
var lyr_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7, 
                style: style_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7,
                popuplayertitle: "Lahan_Trase_Jalan_Ampar_Sudah_Bebas",
                interactive: true,
                title: '<img src="styles/legend/Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7.png" /> Lahan_Trase_Jalan_Ampar_Sudah_Bebas'
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
                interactive: true,
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
                interactive: true,
                title: '<img src="styles/legend/Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9.png" /> Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas'
            });
var group_BatasLahan = new ol.layer.Group({
                                layers: [lyr_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6,lyr_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7,lyr_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8,lyr_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9,],
                                fold: "open",
                                title: "Batas Lahan"});
var group_IPPKH = new ol.layer.Group({
                                layers: [lyr_IUP_OP_DBK_2,lyr_IPPKH_PIT_DBK_3,lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4,lyr_SaranaPrasaranaIPPKHDBKPolygon_5,],
                                fold: "open",
                                title: "IPPKH"});
var group_CitraSatelit = new ol.layer.Group({
                                layers: [lyr_HereWegoSatellite_0,lyr_ESRISatellite_1,],
                                fold: "open",
                                title: "Citra Satelit"});

lyr_HereWegoSatellite_0.setVisible(false);lyr_ESRISatellite_1.setVisible(true);lyr_IUP_OP_DBK_2.setVisible(true);lyr_IPPKH_PIT_DBK_3.setVisible(true);lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4.setVisible(true);lyr_SaranaPrasaranaIPPKHDBKPolygon_5.setVisible(true);lyr_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6.setVisible(true);lyr_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7.setVisible(true);lyr_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8.setVisible(true);lyr_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9.setVisible(true);
var layersList = [group_CitraSatelit,group_IPPKH,group_BatasLahan];
lyr_IUP_OP_DBK_2.set('fieldAliases', {'LAYER': 'LAYER', 'Perusahaan': 'Perusahaan', 'Luas': 'Luas', 'No_SK': 'No_SK', 'Status_Izi': 'Status_Izi', });
lyr_IPPKH_PIT_DBK_3.set('fieldAliases', {'LAYER': 'LAYER', 'Id': 'Id', });
lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4.set('fieldAliases', {'LENGTH': 'LENGTH', 'Id': 'Id', 'ket': 'ket', 'Lebar': 'Lebar', 'Buffer': 'Buffer', 'Label': 'Label', });
lyr_SaranaPrasaranaIPPKHDBKPolygon_5.set('fieldAliases', {'FID': 'FID', 'Name': 'Name', });
lyr_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6.set('fieldAliases', {'LAYER': 'LAYER', 'OBJECTID': 'OBJECTID', 'No_Pendata': 'No_Pendata', 'Pemilik': 'Pemilik', 'Luas_Dig': 'Luas_Dig', 'Luas_Text': 'Luas_Text', 'Prog_Lap': 'Prog_Lap', 'Prog_Acc': 'Prog_Acc', 'Ket_Lap': 'Ket_Lap', 'Ket_Acc': 'Ket_Acc', 'Stat_Lah_C': 'Stat_Lah_C', 'Prog_Lah_C': 'Prog_Lah_C', 'Status_Lhn': 'Status_Lhn', 'Kecamatan': 'Kecamatan', 'Peruntukan': 'Peruntukan', 'Nomor_BA': 'Nomor_BA', 'Reconcile': 'Reconcile', 'Keterangan': 'Keterangan', 'Bts_Area': 'Bts_Area', 'Note_Lap': 'Note_Lap', 'Segment': 'Segment', 'NoU': 'NoU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Foto_Pemil': 'Foto_Pemil', 'Ket_DJR': 'Ket_DJR', });
lyr_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7.set('fieldAliases', {'LAYER': 'LAYER', 'OBJECTID': 'OBJECTID', 'No_Pendata': 'No_Pendata', 'Pemilik': 'Pemilik', 'Luas_Dig': 'Luas_Dig', 'Luas_Text': 'Luas_Text', 'Prog_Lap': 'Prog_Lap', 'Prog_Acc': 'Prog_Acc', 'Ket_Lap': 'Ket_Lap', 'Ket_Acc': 'Ket_Acc', 'Stat_Lah_C': 'Stat_Lah_C', 'Prog_Lah_C': 'Prog_Lah_C', 'Status_Lhn': 'Status_Lhn', 'Kecamatan': 'Kecamatan', 'Peruntukan': 'Peruntukan', 'Nomor_BA': 'Nomor_BA', 'Reconcile': 'Reconcile', 'Keterangan': 'Keterangan', 'Bts_Area': 'Bts_Area', 'Note_Lap': 'Note_Lap', 'Segment': 'Segment', 'NoU': 'NoU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Foto_Pemil': 'Foto_Pemil', 'Ket_DJR': 'Ket_DJR', });
lyr_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8.set('fieldAliases', {'LAYER': 'LAYER', 'OBJECTID': 'OBJECTID', 'No_Pendata': 'No_Pendata', 'Pemilik': 'Pemilik', 'Luas_Dig': 'Luas_Dig', 'Luas_Text': 'Luas_Text', 'Prog_Lap': 'Prog_Lap', 'Prog_Acc': 'Prog_Acc', 'Ket_Lap': 'Ket_Lap', 'Ket_Acc': 'Ket_Acc', 'Stat_Lah_C': 'Stat_Lah_C', 'Prog_Lah_C': 'Prog_Lah_C', 'Status_Lhn': 'Status_Lhn', 'Kecamatan': 'Kecamatan', 'Peruntukan': 'Peruntukan', 'Nomor_BA': 'Nomor_BA', 'Reconcile': 'Reconcile', 'Keterangan': 'Keterangan', 'Bts_Area': 'Bts_Area', 'Note_Lap': 'Note_Lap', 'Segment': 'Segment', 'NoU': 'NoU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Foto_Pemil': 'Foto_Pemil', 'Ket_DJR': 'Ket_DJR', });
lyr_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9.set('fieldAliases', {'LAYER': 'LAYER', 'OBJECTID': 'OBJECTID', 'No_Pendata': 'No_Pendata', 'Pemilik': 'Pemilik', 'Luas_Dig': 'Luas_Dig', 'Luas_Text': 'Luas_Text', 'Prog_Lap': 'Prog_Lap', 'Prog_Acc': 'Prog_Acc', 'Ket_Lap': 'Ket_Lap', 'Ket_Acc': 'Ket_Acc', 'Stat_Lah_C': 'Stat_Lah_C', 'Prog_Lah_C': 'Prog_Lah_C', 'Status_Lhn': 'Status_Lhn', 'Kecamatan': 'Kecamatan', 'Peruntukan': 'Peruntukan', 'Nomor_BA': 'Nomor_BA', 'Reconcile': 'Reconcile', 'Keterangan': 'Keterangan', 'Bts_Area': 'Bts_Area', 'Note_Lap': 'Note_Lap', 'Segment': 'Segment', 'NoU': 'NoU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Foto_Pemil': 'Foto_Pemil', 'Ket_DJR': 'Ket_DJR', });
lyr_IUP_OP_DBK_2.set('fieldImages', {'LAYER': 'TextEdit', 'Perusahaan': 'TextEdit', 'Luas': 'TextEdit', 'No_SK': 'TextEdit', 'Status_Izi': 'TextEdit', });
lyr_IPPKH_PIT_DBK_3.set('fieldImages', {'LAYER': 'TextEdit', 'Id': 'Range', });
lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4.set('fieldImages', {'LENGTH': 'TextEdit', 'Id': 'TextEdit', 'ket': 'TextEdit', 'Lebar': 'TextEdit', 'Buffer': 'TextEdit', 'Label': 'TextEdit', });
lyr_SaranaPrasaranaIPPKHDBKPolygon_5.set('fieldImages', {'FID': 'TextEdit', 'Name': 'TextEdit', });
lyr_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6.set('fieldImages', {'LAYER': 'TextEdit', 'OBJECTID': 'Range', 'No_Pendata': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas_Dig': 'TextEdit', 'Luas_Text': 'TextEdit', 'Prog_Lap': 'TextEdit', 'Prog_Acc': 'TextEdit', 'Ket_Lap': 'TextEdit', 'Ket_Acc': 'TextEdit', 'Stat_Lah_C': 'TextEdit', 'Prog_Lah_C': 'TextEdit', 'Status_Lhn': 'TextEdit', 'Kecamatan': 'TextEdit', 'Peruntukan': 'TextEdit', 'Nomor_BA': 'TextEdit', 'Reconcile': 'TextEdit', 'Keterangan': 'TextEdit', 'Bts_Area': 'TextEdit', 'Note_Lap': 'TextEdit', 'Segment': 'TextEdit', 'NoU': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Foto_Pemil': 'TextEdit', 'Ket_DJR': 'TextEdit', });
lyr_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7.set('fieldImages', {'LAYER': 'TextEdit', 'OBJECTID': 'Range', 'No_Pendata': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas_Dig': 'TextEdit', 'Luas_Text': 'TextEdit', 'Prog_Lap': 'TextEdit', 'Prog_Acc': 'TextEdit', 'Ket_Lap': 'TextEdit', 'Ket_Acc': 'TextEdit', 'Stat_Lah_C': 'TextEdit', 'Prog_Lah_C': 'TextEdit', 'Status_Lhn': 'TextEdit', 'Kecamatan': 'TextEdit', 'Peruntukan': 'TextEdit', 'Nomor_BA': 'TextEdit', 'Reconcile': 'TextEdit', 'Keterangan': 'TextEdit', 'Bts_Area': 'TextEdit', 'Note_Lap': 'TextEdit', 'Segment': 'TextEdit', 'NoU': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Foto_Pemil': 'TextEdit', 'Ket_DJR': 'TextEdit', });
lyr_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8.set('fieldImages', {'LAYER': 'TextEdit', 'OBJECTID': 'Range', 'No_Pendata': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas_Dig': 'TextEdit', 'Luas_Text': 'TextEdit', 'Prog_Lap': 'TextEdit', 'Prog_Acc': 'TextEdit', 'Ket_Lap': 'TextEdit', 'Ket_Acc': 'TextEdit', 'Stat_Lah_C': 'TextEdit', 'Prog_Lah_C': 'TextEdit', 'Status_Lhn': 'TextEdit', 'Kecamatan': 'TextEdit', 'Peruntukan': 'TextEdit', 'Nomor_BA': 'TextEdit', 'Reconcile': 'TextEdit', 'Keterangan': 'TextEdit', 'Bts_Area': 'TextEdit', 'Note_Lap': 'TextEdit', 'Segment': 'TextEdit', 'NoU': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Foto_Pemil': 'TextEdit', 'Ket_DJR': 'TextEdit', });
lyr_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9.set('fieldImages', {'LAYER': 'TextEdit', 'OBJECTID': 'Range', 'No_Pendata': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas_Dig': 'TextEdit', 'Luas_Text': 'TextEdit', 'Prog_Lap': 'TextEdit', 'Prog_Acc': 'TextEdit', 'Ket_Lap': 'TextEdit', 'Ket_Acc': 'TextEdit', 'Stat_Lah_C': 'TextEdit', 'Prog_Lah_C': 'TextEdit', 'Status_Lhn': 'TextEdit', 'Kecamatan': 'TextEdit', 'Peruntukan': 'TextEdit', 'Nomor_BA': 'TextEdit', 'Reconcile': 'TextEdit', 'Keterangan': 'TextEdit', 'Bts_Area': 'TextEdit', 'Note_Lap': 'TextEdit', 'Segment': 'TextEdit', 'NoU': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Foto_Pemil': 'TextEdit', 'Ket_DJR': 'TextEdit', });
lyr_IUP_OP_DBK_2.set('fieldLabels', {'LAYER': 'no label', 'Perusahaan': 'no label', 'Luas': 'no label', 'No_SK': 'no label', 'Status_Izi': 'no label', });
lyr_IPPKH_PIT_DBK_3.set('fieldLabels', {'LAYER': 'no label', 'Id': 'no label', });
lyr_Koridor_Jalan_FINAL_942012_rev_18_10_2012_4.set('fieldLabels', {'LENGTH': 'no label', 'Id': 'no label', 'ket': 'no label', 'Lebar': 'no label', 'Buffer': 'no label', 'Label': 'no label', });
lyr_SaranaPrasaranaIPPKHDBKPolygon_5.set('fieldLabels', {'FID': 'no label', 'Name': 'no label', });
lyr_Lahan_Trase_Jalan_Ampar_Belum_Bebas_6.set('fieldLabels', {'LAYER': 'no label', 'OBJECTID': 'no label', 'No_Pendata': 'no label', 'Pemilik': 'no label', 'Luas_Dig': 'no label', 'Luas_Text': 'no label', 'Prog_Lap': 'no label', 'Prog_Acc': 'no label', 'Ket_Lap': 'no label', 'Ket_Acc': 'no label', 'Stat_Lah_C': 'no label', 'Prog_Lah_C': 'no label', 'Status_Lhn': 'no label', 'Kecamatan': 'no label', 'Peruntukan': 'no label', 'Nomor_BA': 'no label', 'Reconcile': 'no label', 'Keterangan': 'no label', 'Bts_Area': 'no label', 'Note_Lap': 'no label', 'Segment': 'no label', 'NoU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Foto_Pemil': 'no label', 'Ket_DJR': 'no label', });
lyr_Lahan_Trase_Jalan_Ampar_Sudah_Bebas_7.set('fieldLabels', {'LAYER': 'no label', 'OBJECTID': 'no label', 'No_Pendata': 'no label', 'Pemilik': 'no label', 'Luas_Dig': 'no label', 'Luas_Text': 'no label', 'Prog_Lap': 'no label', 'Prog_Acc': 'no label', 'Ket_Lap': 'no label', 'Ket_Acc': 'no label', 'Stat_Lah_C': 'no label', 'Prog_Lah_C': 'no label', 'Status_Lhn': 'no label', 'Kecamatan': 'no label', 'Peruntukan': 'no label', 'Nomor_BA': 'no label', 'Reconcile': 'no label', 'Keterangan': 'no label', 'Bts_Area': 'no label', 'Note_Lap': 'no label', 'Segment': 'no label', 'NoU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Foto_Pemil': 'no label', 'Ket_DJR': 'no label', });
lyr_Lahan_Trase_Jalan_Muara_Laung_Belum_Bebas_8.set('fieldLabels', {'LAYER': 'no label', 'OBJECTID': 'no label', 'No_Pendata': 'no label', 'Pemilik': 'no label', 'Luas_Dig': 'no label', 'Luas_Text': 'no label', 'Prog_Lap': 'no label', 'Prog_Acc': 'no label', 'Ket_Lap': 'no label', 'Ket_Acc': 'no label', 'Stat_Lah_C': 'no label', 'Prog_Lah_C': 'no label', 'Status_Lhn': 'no label', 'Kecamatan': 'no label', 'Peruntukan': 'no label', 'Nomor_BA': 'no label', 'Reconcile': 'no label', 'Keterangan': 'no label', 'Bts_Area': 'no label', 'Note_Lap': 'no label', 'Segment': 'no label', 'NoU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Foto_Pemil': 'no label', 'Ket_DJR': 'no label', });
lyr_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9.set('fieldLabels', {'LAYER': 'no label', 'OBJECTID': 'no label', 'No_Pendata': 'no label', 'Pemilik': 'no label', 'Luas_Dig': 'no label', 'Luas_Text': 'no label', 'Prog_Lap': 'no label', 'Prog_Acc': 'no label', 'Ket_Lap': 'no label', 'Ket_Acc': 'no label', 'Stat_Lah_C': 'no label', 'Prog_Lah_C': 'no label', 'Status_Lhn': 'no label', 'Kecamatan': 'no label', 'Peruntukan': 'no label', 'Nomor_BA': 'no label', 'Reconcile': 'no label', 'Keterangan': 'no label', 'Bts_Area': 'no label', 'Note_Lap': 'no label', 'Segment': 'no label', 'NoU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Foto_Pemil': 'no label', 'Ket_DJR': 'no label', });
lyr_Lahan_Trase_Jalan_Muara_Laung_Sudah_Bebas_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});