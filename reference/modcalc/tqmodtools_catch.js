// The base catch rates for all Pokemon
//has all 649 + TQ fakes added as needed; note that the dropdown itself only has Pokemon appearing in TQ for now
var z = new Array(650);
z[1] = 45;
z[2] = 45;
z[3] = 45;
z[4] = 45;
z[5] = 45;
z[6] = 45;
z[7] = 45;
z[8] = 45;
z[9] = 45;
z[10] = 255;
z[11] = 120;
z[12] = 45;
z[13] = 255;
z[14] = 120;
z[15] = 45;
z[16] = 255;
z[17] = 120;
z[18] = 45;
z[19] = 255;
z[20] = 127;
z[21] = 255;
z[22] = 90;
z[23] = 255;
z[24] = 90;
z[25] = 190;
z[26] = 75;
z[27] = 255;
z[28] = 90;
z[29] = 235;
z[30] = 120;
z[31] = 45;
z[32] = 235;
z[33] = 120;
z[34] = 45;
z[35] = 150;
z[36] = 25;
z[37] = 190;
z[38] = 75;
z[39] = 170;
z[40] = 50;
z[41] = 255;
z[42] = 90;
z[43] = 255;
z[44] = 120;
z[45] = 45;
z[46] = 190;
z[47] = 75;
z[48] = 190;
z[49] = 75;
z[50] = 255;
z[51] = 50;
z[52] = 255;
z[53] = 90;
z[54] = 190;
z[55] = 75;
z[56] = 190;
z[57] = 75;
z[58] = 190;
z[59] = 75;
z[60] = 255;
z[61] = 120;
z[62] = 45;
z[63] = 200;
z[64] = 100;
z[65] = 50;
z[66] = 180;
z[67] = 90;
z[68] = 45;
z[69] = 255;
z[70] = 120;
z[71] = 45;
z[72] = 190;
z[73] = 60;
z[74] = 255;
z[75] = 120;
z[76] = 45;
z[77] = 190;
z[78] = 60;
z[79] = 190;
z[80] = 75;
z[81] = 190;
z[82] = 60;
z[83] = 45;
z[84] = 190;
z[85] = 45;
z[86] = 190;
z[87] = 75;
z[88] = 190;
z[89] = 75;
z[90] = 190;
z[91] = 60;
z[92] = 190;
z[93] = 90;
z[94] = 45;
z[95] = 45;
z[96] = 190;
z[97] = 75;
z[98] = 225;
z[99] = 60;
z[100] = 190;
z[101] = 60;
z[102] = 90;
z[103] = 45;
z[104] = 190;
z[105] = 75;
z[106] = 45;
z[107] = 45;
z[108] = 45;
z[109] = 190;
z[110] = 60;
z[111] = 120;
z[112] = 60;
z[113] = 30;
z[114] = 45;
z[115] = 45;
z[116] = 225;
z[117] = 75;
z[118] = 225;
z[119] = 60;
z[120] = 225;
z[121] = 60;
z[122] = 45;
z[123] = 45;
z[124] = 45;
z[125] = 45;
z[126] = 45;
z[127] = 45;
z[128] = 45;
z[129] = 255;
z[130] = 45;
z[131] = 45;
z[132] = 35;
z[133] = 45;
z[134] = 45;
z[135] = 45;
z[136] = 45;
z[137] = 45;
z[138] = 45;
z[139] = 45;
z[140] = 45;
z[141] = 45;
z[142] = 45;
z[143] = 25;
z[144] = 3;
z[145] = 3;
z[146] = 3;
z[147] = 45;
z[148] = 45;
z[149] = 45;
z[150] = 3;
z[151] = 45;
z[152] = 45;
z[153] = 45;
z[154] = 45;
z[155] = 45;
z[156] = 45;
z[157] = 45;
z[158] = 45;
z[159] = 45;
z[160] = 45;
z[161] = 255;
z[162] = 90;
z[163] = 255;
z[164] = 90;
z[165] = 255;
z[166] = 90;
z[167] = 255;
z[168] = 90;
z[169] = 90;
z[170] = 190;
z[171] = 75;
z[172] = 190;
z[173] = 150;
z[174] = 170;
z[175] = 190;
z[176] = 75;
z[177] = 190;
z[178] = 75;
z[179] = 235;
z[180] = 120;
z[181] = 45;
z[182] = 45;
z[183] = 190;
z[184] = 75;
z[185] = 65;
z[186] = 45;
z[187] = 255;
z[188] = 120;
z[189] = 45;
z[190] = 45;
z[191] = 235;
z[192] = 120;
z[193] = 75;
z[194] = 255;
z[195] = 90;
z[196] = 45;
z[197] = 45;
z[198] = 30;
z[199] = 70;
z[200] = 45;
z[201] = 225;
z[202] = 45;
z[203] = 60;
z[204] = 190;
z[205] = 75;
z[206] = 190;
z[207] = 60;
z[208] = 25;
z[209] = 190;
z[210] = 75;
z[211] = 45;
z[212] = 25;
z[213] = 190;
z[214] = 45;
z[215] = 60;
z[216] = 120;
z[217] = 60;
z[218] = 190;
z[219] = 75;
z[220] = 225;
z[221] = 75;
z[222] = 60;
z[223] = 190;
z[224] = 75;
z[225] = 45;
z[226] = 25;
z[227] = 25;
z[228] = 120;
z[229] = 45;
z[230] = 45;
z[231] = 120;
z[232] = 60;
z[233] = 45;
z[234] = 45;
z[235] = 45;
z[236] = 75;
z[237] = 45;
z[238] = 45;
z[239] = 45;
z[240] = 45;
z[241] = 45;
z[242] = 30;
z[243] = 3;
z[244] = 3;
z[245] = 3;
z[246] = 45;
z[247] = 45;
z[248] = 45;
z[249] = 3;
z[250] = 3;
z[251] = 45;
z[252] = 45;
z[253] = 45;
z[254] = 45;
z[255] = 45;
z[256] = 45;
z[257] = 45;
z[258] = 45;
z[259] = 45;
z[260] = 45;
z[261] = 255;
z[262] = 127;
z[263] = 255;
z[264] = 90;
z[265] = 255;
z[266] = 120;
z[267] = 45;
z[268] = 120;
z[269] = 45;
z[270] = 255;
z[271] = 120;
z[272] = 45;
z[273] = 255;
z[274] = 120;
z[275] = 45;
z[276] = 200;
z[277] = 45;
z[278] = 190;
z[279] = 45;
z[280] = 235;
z[281] = 120;
z[282] = 45;
z[283] = 200;
z[284] = 75;
z[285] = 255;
z[286] = 90;
z[287] = 255;
z[288] = 120;
z[289] = 45;
z[290] = 255;
z[291] = 120;
z[292] = 45;
z[293] = 190;
z[294] = 120;
z[295] = 45;
z[296] = 180;
z[297] = 200;
z[298] = 150;
z[299] = 255;
z[300] = 255;
z[301] = 60;
z[302] = 45;
z[303] = 45;
z[304] = 180;
z[305] = 90;
z[306] = 45;
z[307] = 180;
z[308] = 90;
z[309] = 120;
z[310] = 45;
z[311] = 200;
z[312] = 200;
z[313] = 150;
z[314] = 150;
z[315] = 150;
z[316] = 225;
z[317] = 75;
z[318] = 225;
z[319] = 60;
z[320] = 125;
z[321] = 60;
z[322] = 255;
z[323] = 150;
z[324] = 90;
z[325] = 255;
z[326] = 60;
z[327] = 255;
z[328] = 255;
z[329] = 120;
z[330] = 45;
z[331] = 190;
z[332] = 60;
z[333] = 255;
z[334] = 45;
z[335] = 90;
z[336] = 90;
z[337] = 45;
z[338] = 45;
z[339] = 190;
z[340] = 75;
z[341] = 205;
z[342] = 155;
z[343] = 255;
z[344] = 90;
z[345] = 45;
z[346] = 45;
z[347] = 45;
z[348] = 45;
z[349] = 255;
z[350] = 60;
z[351] = 45;
z[352] = 200;
z[353] = 225;
z[354] = 45;
z[355] = 190;
z[356] = 90;
z[357] = 200;
z[358] = 45;
z[359] = 30;
z[360] = 125;
z[361] = 190;
z[362] = 75;
z[363] = 255;
z[364] = 120;
z[365] = 45;
z[366] = 255;
z[367] = 60;
z[368] = 60;
z[369] = 25;
z[370] = 225;
z[371] = 45;
z[372] = 45;
z[373] = 45;
z[374] = 3;
z[375] = 3;
z[376] = 3;
z[377] = 3;
z[378] = 3;
z[379] = 3;
z[380] = 3;
z[381] = 3;
z[382] = 5;
z[383] = 5;
z[384] = 3;
z[385] = 3;
z[386] = 3;
z[387] = 45;
z[388] = 45;
z[389] = 45;
z[390] = 45;
z[391] = 45;
z[392] = 45;
z[393] = 45;
z[394] = 45;
z[395] = 45;
z[396] = 255;
z[397] = 120;
z[398] = 45;
z[399] = 255;
z[400] = 127;
z[401] = 255;
z[402] = 45;
z[403] = 235;
z[404] = 120;
z[405] = 45;
z[406] = 255;
z[407] = 75;
z[408] = 45;
z[409] = 45;
z[410] = 45;
z[411] = 45;
z[412] = 120;
z[413] = 45;
z[414] = 45;
z[415] = 120;
z[416] = 45;
z[417] = 200;
z[418] = 190;
z[419] = 75;
z[420] = 190;
z[421] = 75;
z[422] = 190;
z[423] = 75;
z[424] = 45;
z[425] = 125;
z[426] = 60;
z[427] = 190;
z[428] = 60;
z[429] = 45;
z[430] = 30;
z[431] = 190;
z[432] = 75;
z[433] = 120;
z[434] = 225;
z[435] = 60;
z[436] = 255;
z[437] = 90;
z[438] = 255;
z[439] = 145;
z[440] = 130;
z[441] = 30;
z[442] = 100;
z[443] = 45;
z[444] = 45;
z[445] = 45;
z[446] = 50;
z[447] = 75;
z[448] = 45;
z[449] = 140;
z[450] = 60;
z[451] = 120;
z[452] = 45;
z[453] = 140;
z[454] = 75;
z[455] = 200;
z[456] = 190;
z[457] = 75;
z[458] = 25;
z[459] = 120;
z[460] = 60;
z[461] = 45;
z[462] = 30;
z[463] = 30;
z[464] = 30;
z[465] = 30;
z[466] = 30;
z[467] = 30;
z[468] = 30;
z[469] = 30;
z[470] = 45;
z[471] = 45;
z[472] = 30;
z[473] = 50;
z[474] = 30;
z[475] = 45;
z[476] = 60;
z[477] = 45;
z[478] = 75;
z[479] = 45;
z[480] = 3;
z[481] = 3;
z[482] = 3;
z[483] = 30;
z[484] = 30;
z[485] = 3;
z[486] = 3;
z[487] = 3;
z[488] = 3;
z[489] = 30;
z[490] = 3;
z[491] = 3;
z[492] = 45;
z[493] = 3;
z[494] = 3;
z[495] = 45;
z[496] = 45;
z[497] = 45;
z[498] = 45;
z[499] = 45;
z[500] = 45;
z[501] = 45;
z[502] = 45;
z[503] = 45;
z[504] = 255;
z[505] = 255;
z[506] = 255;
z[507] = 120;
z[508] = 45;
z[509] = 255;
z[510] = 90;
z[511] = 190;
z[512] = 75;
z[513] = 190;
z[514] = 75;
z[515] = 190;
z[516] = 75;
z[517] = 190;
z[518] = 75;
z[519] = 255;
z[520] = 120;
z[521] = 45;
z[522] = 190;
z[523] = 75;
z[524] = 255;
z[525] = 120;
z[526] = 45;
z[527] = 190;
z[528] = 45;
z[529] = 120;
z[530] = 60;
z[531] = 255;
z[532] = 180;
z[533] = 90;
z[534] = 45;
z[535] = 255;
z[536] = 120;
z[537] = 45;
z[538] = 45;
z[539] = 45;
z[540] = 255;
z[541] = 120;
z[542] = 45;
z[543] = 255;
z[544] = 120;
z[545] = 45;
z[546] = 190;
z[547] = 75;
z[548] = 190;
z[549] = 75;
z[550] = 25;
z[550] = 25;
z[551] = 180;
z[552] = 90;
z[553] = 45;
z[554] = 120;
z[555] = 60;
z[555] = 60;
z[556] = 255;
z[557] = 190;
z[558] = 75;
z[559] = 180;
z[560] = 90;
z[561] = 45;
z[562] = 190;
z[563] = 90;
z[564] = 45;
z[565] = 45;
z[566] = 45;
z[567] = 45;
z[568] = 190;
z[569] = 60;
z[570] = 75;
z[571] = 45;
z[572] = 255;
z[573] = 60;
z[574] = 200;
z[575] = 100;
z[576] = 50;
z[577] = 200;
z[578] = 100;
z[579] = 50;
z[580] = 190;
z[581] = 45;
z[582] = 255;
z[583] = 120;
z[584] = 45;
z[585] = 190;
z[586] = 75;
z[587] = 200;
z[588] = 200;
z[589] = 75;
z[590] = 190;
z[591] = 75;
z[592] = 190;
z[593] = 60;
z[594] = 75;
z[595] = 190;
z[596] = 75;
z[597] = 255;
z[598] = 90;
z[599] = 130;
z[600] = 60;
z[601] = 30;
z[602] = 190;
z[603] = 60;
z[604] = 30;
z[605] = 255;
z[606] = 90;
z[607] = 190;
z[608] = 90;
z[609] = 45;
z[610] = 75;
z[611] = 60;
z[612] = 45;
z[613] = 120;
z[614] = 60;
z[615] = 25;
z[616] = 200;
z[617] = 75;
z[618] = 75;
z[619] = 180;
z[620] = 45;
z[621] = 45;
z[622] = 190;
z[623] = 90;
z[624] = 120;
z[625] = 45;
z[626] = 45;
z[627] = 190;
z[628] = 60;
z[629] = 190;
z[630] = 60;
z[631] = 90;
z[632] = 90;
z[633] = 45;
z[634] = 45;
z[635] = 45;
z[636] = 45;
z[637] = 15;
z[638] = 3;
z[639] = 3;
z[640] = 3;
z[641] = 3;
z[642] = 3;
z[643] = 45;
z[644] = 45;
z[645] = 3;
z[646] = 3;
z[647] = 3;
z[648] = 3;
z[648] = 3;
z[649] = 3;
//Gen VI; only added pertinents for the moment; still think serebii's values are strange but i got nothing else, so
z[677] = 190;
z[678] = 75;
z[690] = 225;
z[691] = 55;
z[692] = 255;
z[693] = 55;
z[694] = 190;
z[695] = 75;
z[701] = 100;
//fakemon; no longer in correct order but who cares
z[1001] = 45; //Acafia
z[1002] = 45; //Catalcia
z[1003] = 45; //Bossorna
z[1004] = 45; //Crocoal
z[1005] = 45; //Feucrota
z[1006] = 45; //Burungin
z[1007] = 45; //Spraylet
z[1008] = 45; //Pandive
z[1009] = 45; //Osgrave
z[1010] = 255; //Auriole
z[1011] = 90; //Icauriole
z[1012] = 255; //Dustley
z[1013] = 127; //Aculago
z[1014] = 255; //Kizziff
z[1015] = 120; //Murgaz
z[1016] = 45; //Chaszin
z[1017] = 200; //Bucarat
z[1018] = 90; //Mortarat
z[1019] = 255; //Gowatu
z[1020] = 120; //Turatal
z[1021] = 60; //Jackravage
z[1022] = 70; //Marazuma
z[1023] = 45; //Paracordis
z[1024] = 45; //Makima
z[1025] = 45; //Makitaku
z[1026] = 225; //Mefflora
z[1027] = 120; //Mephodil
z[1028] = 45; //Spilotalis
z[1029] = 45; //Petrocka
z[1030] = 190; //Transmite
z[1031] = 190; //Tianglis
z[1032] = 190; //Turistar
z[1033] = 45; //Turumaken
z[1034] = 255; //Quimpy
z[1035] = 60; //Valazman
z[1036] = 255; //Gravendou
z[1037] = 120; //Cragendou
z[1038] = 45; //Quarendou
z[1039] = 45; //Cerisol
z[1040] = 150; //Thunderma
z[1041] = 120; //Kiblis
z[1042] = 45; //Ibazel
z[1043] = 45; //Zanthera
z[1044] = 45; //Seviron
z[1045] = 75; //Donarith
z[1046] = 255; //Lamanda
z[1047] = 60; //Marvelisk
z[1048] = 45; //Rapscalion
z[1049] = 30; //Lyrissimo
z[1050] = 45; //Mandicore
z[1051] = 45; //Josuche
z[1052] = 120; //Vulkhet
z[1053] = 60; //Nekhetura
z[1054] = 190; //Nuwill
z[1055] = 75; //Nulohm
z[1056] = 200; //Humbuzz
z[1057] = 70; //Klaitning
z[1058] = 45; //Rakateis
z[1059] = 255; //Cubly
z[1060] = 60; //Arctangel
z[1061] = 45; //Ramfere
z[1062] = 235; //Lamlie
z[1063] = 120; //Lobovo
z[1064] = 45; //Luvaris
z[1065] = 30; //Razelodon
z[1066] = 225; //Invicunya
z[1067] = 70; //Heladalca
z[1068] = 130; //Vaering
z[1069] = 60; //Raidnarr
z[1070] = 30; //Drasarkr
z[1071] = 225; //Latikrai
z[1072] = 45; //Kraitra
z[1073] = 60; //Aeolagio
z[1074] = 45; //Rasqueon
z[1075] = 235; //Freye
z[1076] = 120; //Floundirt
z[1077] = 45; //Halirth
z[1078] = 255; //Kelfee
z[1079] = 155; //Drakella
z[1080] = 30; //Khargonaut
z[1081] = 180; //Wyrmal
z[1082] = 50; //Ventorm
z[1083] = 200; //Virlich
z[1084] = 45; //Gasvirlich
z[1085] = 255; //Derfin
z[1086] = 60; //Encanoto
z[1087] = 45; //Finnial
z[1088] = 45; //Termelc
z[1089] = 45; //Distrike
z[1090] = 25; //Caslot
z[1091] = 235; //Galorindle
z[1092] = 45; //Galaraud
z[1093] = 45; //Galoryph
z[1094] = 180; //Minijina
z[1095] = 90; //Bojina
z[1096] = 45; //Noperajina
z[1097] = 45; //Torranel
z[1098] = 75; //Sparcoil
z[1099] = 90; //Fallorite
z[1100] = 45; //Volstarite
z[1101] = 45; //Dartizel-R
z[1102] = 45; //Loftitan-R
z[1103] = 45; //Halberax-R
z[1104] = 45; //Dyrascal
z[1105] = 45; //Dyferal
z[1106] = 45; //Dybelial
z[1107] = 45; //Nahualatu
//temp
z[1108] = 200; //Tinimer
z[1109] = 45; //Emperobe
z[1110] = 45; //Altavault
z[1111] = 45; //Belmarine
z[1112] = 45; //Vaquerado
z[1113] = 20; //Siamacho
z[1114] = 30; //Garapaima
z[1115] = 45; //Chantirrus
z[1116] = 45; //Ignelix
z[1117] = 190; //Curlsa
z[1118] = 120; //Coiffaire
z[1119] = 45; //Ostento
z[1120] = 100; //Onzarudo
z[1121] = 190; //Pindillo
z[1122] = 75; //Charandillo
z[1123] = 180; //Beddybite
z[1124] = 60; //Bitemare
z[1125] = 90; //Dasfix
z[1126] = 45; //Malraja

// The base HP for all Pokemon; used to calculate the Pok&eacute;mon's max HP (and current HP, if it's a percentage of the max) for the formula.
//has all 649 + TQ fakes added as needed; note that the dropdown itself only has Pokemon appearing in TQ for now
var h = new Array(650);
h[1] = 45;
h[2] = 60;
h[3] = 80;
h[4] = 39;
h[5] = 58;
h[6] = 78;
h[7] = 44;
h[8] = 59;
h[9] = 79;
h[10] = 45;
h[11] = 50;
h[12] = 60;
h[13] = 40;
h[14] = 45;
h[15] = 65;
h[16] = 40;
h[17] = 63;
h[18] = 83;
h[19] = 30;
h[20] = 55;
h[21] = 40;
h[22] = 65;
h[23] = 35;
h[24] = 60;
h[25] = 35;
h[26] = 60;
h[27] = 50;
h[28] = 75;
h[29] = 55;
h[30] = 70;
h[31] = 90;
h[32] = 46;
h[33] = 61;
h[34] = 81;
h[35] = 70;
h[36] = 95;
h[37] = 38;
h[38] = 73;
h[39] = 115;
h[40] = 140;
h[41] = 40;
h[42] = 75;
h[43] = 45;
h[44] = 60;
h[45] = 75;
h[46] = 35;
h[47] = 60;
h[48] = 60;
h[49] = 70;
h[50] = 10;
h[51] = 35;
h[52] = 40;
h[53] = 65;
h[54] = 50;
h[55] = 80;
h[56] = 40;
h[57] = 65;
h[58] = 55;
h[59] = 90;
h[60] = 40;
h[61] = 65;
h[62] = 90;
h[63] = 25;
h[64] = 40;
h[65] = 55;
h[66] = 70;
h[67] = 80;
h[68] = 90;
h[69] = 50;
h[70] = 65;
h[71] = 80;
h[72] = 40;
h[73] = 80;
h[74] = 40;
h[75] = 55;
h[76] = 80;
h[77] = 50;
h[78] = 65;
h[79] = 90;
h[80] = 95;
h[81] = 25;
h[82] = 50;
h[83] = 52;
h[84] = 35;
h[85] = 60;
h[86] = 65;
h[87] = 90;
h[88] = 80;
h[89] = 105;
h[90] = 30;
h[91] = 50;
h[92] = 30;
h[93] = 45;
h[94] = 60;
h[95] = 35;
h[96] = 60;
h[97] = 85;
h[98] = 30;
h[99] = 55;
h[100] = 40;
h[101] = 60;
h[102] = 60;
h[103] = 95;
h[104] = 50;
h[105] = 60;
h[106] = 50;
h[107] = 50;
h[108] = 90;
h[109] = 40;
h[110] = 65;
h[111] = 80;
h[112] = 105;
h[113] = 250;
h[114] = 65;
h[115] = 105;
h[116] = 30;
h[117] = 55;
h[118] = 45;
h[119] = 80;
h[120] = 30;
h[121] = 60;
h[122] = 40;
h[123] = 70;
h[124] = 65;
h[125] = 65;
h[126] = 65;
h[127] = 65;
h[128] = 75;
h[129] = 20;
h[130] = 95;
h[131] = 130;
h[132] = 48;
h[133] = 55;
h[134] = 130;
h[135] = 65;
h[136] = 65;
h[137] = 65;
h[138] = 35;
h[139] = 70;
h[140] = 30;
h[141] = 60;
h[142] = 80;
h[143] = 160;
h[144] = 90;
h[145] = 90;
h[146] = 90;
h[147] = 41;
h[148] = 61;
h[149] = 91;
h[150] = 106;
h[151] = 100;
h[152] = 45;
h[153] = 60;
h[154] = 80;
h[155] = 39;
h[156] = 58;
h[157] = 78;
h[158] = 50;
h[159] = 65;
h[160] = 85;
h[161] = 35;
h[162] = 85;
h[163] = 60;
h[164] = 100;
h[165] = 40;
h[166] = 55;
h[167] = 40;
h[168] = 70;
h[169] = 85;
h[170] = 75;
h[171] = 125;
h[172] = 20;
h[173] = 50;
h[174] = 90;
h[175] = 35;
h[176] = 55;
h[177] = 40;
h[178] = 65;
h[179] = 55;
h[180] = 70;
h[181] = 90;
h[182] = 75;
h[183] = 70;
h[184] = 100;
h[185] = 70;
h[186] = 90;
h[187] = 35;
h[188] = 55;
h[189] = 75;
h[190] = 55;
h[191] = 30;
h[192] = 75;
h[193] = 65;
h[194] = 55;
h[195] = 95;
h[196] = 65;
h[197] = 95;
h[198] = 60;
h[199] = 95;
h[200] = 60;
h[201] = 48;
h[202] = 190;
h[203] = 70;
h[204] = 50;
h[205] = 75;
h[206] = 100;
h[207] = 65;
h[208] = 75;
h[209] = 60;
h[210] = 90;
h[211] = 65;
h[212] = 70;
h[213] = 20;
h[214] = 80;
h[215] = 55;
h[216] = 60;
h[217] = 90;
h[218] = 40;
h[219] = 50;
h[220] = 50;
h[221] = 100;
h[222] = 55;
h[223] = 35;
h[224] = 75;
h[225] = 45;
h[226] = 65;
h[227] = 65;
h[228] = 45;
h[229] = 75;
h[230] = 75;
h[231] = 90;
h[232] = 90;
h[233] = 85;
h[234] = 73;
h[235] = 55;
h[236] = 35;
h[237] = 50;
h[238] = 45;
h[239] = 45;
h[240] = 45;
h[241] = 95;
h[242] = 255;
h[243] = 90;
h[244] = 115;
h[245] = 100;
h[246] = 50;
h[247] = 70;
h[248] = 100;
h[249] = 106;
h[250] = 106;
h[251] = 100;
h[252] = 40;
h[253] = 50;
h[254] = 70;
h[255] = 45;
h[256] = 60;
h[257] = 80;
h[258] = 50;
h[259] = 70;
h[260] = 100;
h[261] = 35;
h[262] = 70;
h[263] = 38;
h[264] = 78;
h[265] = 45;
h[266] = 50;
h[267] = 60;
h[268] = 50;
h[269] = 60;
h[270] = 40;
h[271] = 60;
h[272] = 80;
h[273] = 40;
h[274] = 70;
h[275] = 90;
h[276] = 40;
h[277] = 60;
h[278] = 40;
h[279] = 60;
h[280] = 28;
h[281] = 38;
h[282] = 68;
h[283] = 40;
h[284] = 70;
h[285] = 60;
h[286] = 60;
h[287] = 60;
h[288] = 80;
h[289] = 150;
h[290] = 31;
h[291] = 61;
h[292] = 1;
h[293] = 64;
h[294] = 84;
h[295] = 104;
h[296] = 72;
h[297] = 144;
h[298] = 50;
h[299] = 30;
h[300] = 50;
h[301] = 70;
h[302] = 50;
h[303] = 50;
h[304] = 50;
h[305] = 60;
h[306] = 70;
h[307] = 30;
h[308] = 60;
h[309] = 40;
h[310] = 70;
h[311] = 60;
h[312] = 60;
h[313] = 65;
h[314] = 65;
h[315] = 50;
h[316] = 70;
h[317] = 100;
h[318] = 45;
h[319] = 70;
h[320] = 130;
h[321] = 170;
h[322] = 60;
h[323] = 70;
h[324] = 70;
h[325] = 60;
h[326] = 80;
h[327] = 60;
h[328] = 45;
h[329] = 50;
h[330] = 80;
h[331] = 50;
h[332] = 70;
h[333] = 45;
h[334] = 75;
h[335] = 73;
h[336] = 73;
h[337] = 70;
h[338] = 70;
h[339] = 50;
h[340] = 110;
h[341] = 43;
h[342] = 63;
h[343] = 40;
h[344] = 60;
h[345] = 66;
h[346] = 86;
h[347] = 45;
h[348] = 75;
h[349] = 20;
h[350] = 95;
h[351] = 70;
h[352] = 60;
h[353] = 44;
h[354] = 64;
h[355] = 20;
h[356] = 40;
h[357] = 99;
h[358] = 65;
h[359] = 65;
h[360] = 95;
h[361] = 50;
h[362] = 80;
h[363] = 70;
h[364] = 90;
h[365] = 110;
h[366] = 35;
h[367] = 55;
h[368] = 55;
h[369] = 100;
h[370] = 43;
h[371] = 45;
h[372] = 65;
h[373] = 95;
h[374] = 40;
h[375] = 60;
h[376] = 80;
h[377] = 80;
h[378] = 80;
h[379] = 80;
h[380] = 80;
h[381] = 80;
h[382] = 100;
h[383] = 100;
h[384] = 105;
h[385] = 100;
h[386] = 50;
h[387] = 55;
h[388] = 75;
h[389] = 95;
h[390] = 44;
h[391] = 64;
h[392] = 76;
h[393] = 53;
h[394] = 64;
h[395] = 84;
h[396] = 40;
h[397] = 55;
h[398] = 85;
h[399] = 59;
h[400] = 79;
h[401] = 37;
h[402] = 77;
h[403] = 45;
h[404] = 60;
h[405] = 80;
h[406] = 40;
h[407] = 60;
h[408] = 67;
h[409] = 97;
h[410] = 30;
h[411] = 60;
h[412] = 40;
h[413] = 60;
h[414] = 70;
h[415] = 30;
h[416] = 70;
h[417] = 60;
h[418] = 55;
h[419] = 85;
h[420] = 45;
h[421] = 70;
h[422] = 76;
h[423] = 111;
h[424] = 75;
h[425] = 90;
h[426] = 150;
h[427] = 55;
h[428] = 65;
h[429] = 60;
h[430] = 100;
h[431] = 49;
h[432] = 71;
h[433] = 45;
h[434] = 63;
h[435] = 103;
h[436] = 57;
h[437] = 67;
h[438] = 50;
h[439] = 20;
h[440] = 100;
h[441] = 76;
h[442] = 50;
h[443] = 58;
h[444] = 68;
h[445] = 108;
h[446] = 135;
h[447] = 40;
h[448] = 70;
h[449] = 68;
h[450] = 108;
h[451] = 40;
h[452] = 70;
h[453] = 48;
h[454] = 83;
h[455] = 74;
h[456] = 49;
h[457] = 69;
h[458] = 45;
h[459] = 60;
h[460] = 90;
h[461] = 70;
h[462] = 70;
h[463] = 110;
h[464] = 115;
h[465] = 100;
h[466] = 75;
h[467] = 75;
h[468] = 85;
h[469] = 86;
h[470] = 65;
h[471] = 65;
h[472] = 75;
h[473] = 110;
h[474] = 85;
h[475] = 68;
h[476] = 60;
h[477] = 45;
h[478] = 70;
h[479] = 50;
h[480] = 75;
h[481] = 80;
h[482] = 75;
h[483] = 100;
h[484] = 90;
h[485] = 91;
h[486] = 110;
h[487] = 150;
h[488] = 120;
h[489] = 80;
h[490] = 100;
h[491] = 70;
h[492] = 100;
h[493] = 120;
h[494] = 100;
h[495] = 45;
h[496] = 60;
h[497] = 75;
h[498] = 65;
h[499] = 90;
h[500] = 110;
h[501] = 55;
h[502] = 75;
h[503] = 95;
h[504] = 45;
h[505] = 60;
h[506] = 45;
h[507] = 65;
h[508] = 85;
h[509] = 41;
h[510] = 64;
h[511] = 50;
h[512] = 75;
h[513] = 50;
h[514] = 75;
h[515] = 50;
h[516] = 75;
h[517] = 76;
h[518] = 116;
h[519] = 50;
h[520] = 62;
h[521] = 80;
h[522] = 45;
h[523] = 75;
h[524] = 55;
h[525] = 70;
h[526] = 85;
h[527] = 55;
h[528] = 67;
h[529] = 60;
h[530] = 110;
h[531] = 103;
h[532] = 75;
h[533] = 85;
h[534] = 105;
h[535] = 50;
h[536] = 75;
h[537] = 105;
h[538] = 120;
h[539] = 75;
h[540] = 45;
h[541] = 55;
h[542] = 75;
h[543] = 30;
h[544] = 40;
h[545] = 60;
h[546] = 40;
h[547] = 60;
h[548] = 45;
h[549] = 70;
h[550] = 70;
h[550] = 70;
h[551] = 50;
h[552] = 60;
h[553] = 95;
h[554] = 70;
h[555] = 105;
h[555] = 105;
h[556] = 75;
h[557] = 50;
h[558] = 70;
h[559] = 50;
h[560] = 65;
h[561] = 72;
h[562] = 38;
h[563] = 58;
h[564] = 54;
h[565] = 74;
h[566] = 55;
h[567] = 75;
h[568] = 50;
h[569] = 80;
h[570] = 40;
h[571] = 60;
h[572] = 55;
h[573] = 75;
h[574] = 45;
h[575] = 60;
h[576] = 70;
h[577] = 45;
h[578] = 65;
h[579] = 110;
h[580] = 62;
h[581] = 75;
h[582] = 36;
h[583] = 51;
h[584] = 71;
h[585] = 60;
h[586] = 80;
h[587] = 55;
h[588] = 50;
h[589] = 70;
h[590] = 69;
h[591] = 114;
h[592] = 55;
h[593] = 100;
h[594] = 165;
h[595] = 50;
h[596] = 70;
h[597] = 44;
h[598] = 74;
h[599] = 40;
h[600] = 60;
h[601] = 60;
h[602] = 35;
h[603] = 65;
h[604] = 85;
h[605] = 55;
h[606] = 75;
h[607] = 50;
h[608] = 60;
h[609] = 60;
h[610] = 46;
h[611] = 66;
h[612] = 76;
h[613] = 55;
h[614] = 95;
h[615] = 70;
h[616] = 50;
h[617] = 80;
h[618] = 109;
h[619] = 45;
h[620] = 65;
h[621] = 77;
h[622] = 59;
h[623] = 89;
h[624] = 45;
h[625] = 65;
h[626] = 95;
h[627] = 70;
h[628] = 100;
h[629] = 70;
h[630] = 110;
h[631] = 85;
h[632] = 58;
h[633] = 52;
h[634] = 72;
h[635] = 92;
h[636] = 55;
h[637] = 85;
h[638] = 91;
h[639] = 91;
h[640] = 91;
h[641] = 79;
h[642] = 79;
h[643] = 100;
h[644] = 100;
h[645] = 89;
h[646] = 125;
h[647] = 91;
h[648] = 100;
h[648] = 100;
h[649] = 71;
//Gen VI; only added pertinents for the moment
h[677] = 62;
h[678] = 74;
h[690] = 50;
h[691] = 65;
h[692] = 50;
h[693] = 71;
h[694] = 44;
h[695] = 62;
h[701] = 78;
//fakemon; no longer in correct order but who cares
h[1001] = 62; //Acafia
h[1002] = 80; //Catalcia
h[1003] = 105; //Bossorna
h[1004] = 52; //Crocoal
h[1005] = 66; //Feucrota
h[1006] = 84; //Burungin
h[1007] = 49; //Spraylet
h[1008] = 62; //Pandive
h[1009] = 80; //Osgrave
h[1010] = 40; //Auriole
h[1011] = 60; //Icauriole
h[1012] = 50; //Dustley
h[1013] = 90; //Aculago
h[1014] = 25; //Kizziff
h[1015] = 40; //Murgaz
h[1016] = 60; //Chaszin
h[1017] = 35; //Bucarat
h[1018] = 55; //Mortarat
h[1019] = 40; //Gowatu
h[1020] = 70; //Turatal
h[1021] = 65; //Jackravage
h[1022] = 85; //Marazuma
h[1023] = 70; //Paracordis
h[1024] = 40; //Makima
h[1025] = 70; //Makitaku
h[1026] = 50; //Mefflora
h[1027] = 70; //Mephodil
h[1028] = 90; //Spilotalis
h[1029] = 60; //Petrocka
h[1030] = 55; //Transmite
h[1031] = 55; //Tianglis
h[1032] = 30; //Turistar
h[1033] = 60; //Turumaken
h[1034] = 25; //Quimpy
h[1035] = 80; //Valazman
h[1036] = 48; //Gravendou
h[1037] = 68; //Cragendou
h[1038] = 98; //Quarendou
h[1039] = 75; //Cerisol
h[1040] = 105; //Thunderma
h[1041] = 35; //Kiblis
h[1042] = 55; //Ibazel
h[1043] = 83; //Zanthera
h[1044] = 83; //Seviron
h[1045] = 75; //Donarith
h[1046] = 10; //Lamanda
h[1047] = 71; //Marvelisk
h[1048] = 72; //Rapscalion
h[1049] = 86; //Lyrissimo
h[1050] = 75; //Mandicore
h[1051] = 70; //Josuche
h[1052] = 67; //Vulkhet
h[1053] = 97; //Nekhetura
h[1054] = 60; //Nuwill
h[1055] = 80; //Nulohm
h[1056] = 30; //Humbuzz
h[1057] = 50; //Klaitning
h[1058] = 70; //Rakateis
h[1059] = 10; //Cubly
h[1060] = 75; //Arctangel
h[1061] = 90; //Ramfere
h[1062] = 45; //Lamlie
h[1063] = 60; //Lobovo
h[1064] = 80; //Luvaris
h[1065] = 80; //Razelodon
h[1066] = 65; //Invicunya
h[1067] = 95; //Heladalca
h[1068] = 75; //Vaering
h[1069] = 95; //Raidnarr
h[1070] = 115; //Drasarkr
h[1071] = 45; //Latikrai
h[1072] = 80; //Kraitra
h[1073] = 120; //Aeolagio
h[1074] = 100; //Rasqueon
h[1075] = 85; //Freye
h[1076] = 105; //Floundirt
h[1077] = 125; //Halirth
h[1078] = 51; //Kelfee
h[1079] = 81; //Drakella
h[1080] = 85; //Khargonaut
h[1081] = 40; //Wyrmal
h[1082] = 80; //Ventorm
h[1083] = 35; //Virlich
h[1084] = 55; //Gasvirlich
h[1085] = 45; //Derfin
h[1086] = 105; //Encanoto
h[1087] = 50; //Finnial
h[1088] = 60; //Termelc
h[1089] = 85; //Distrike
h[1090] = 70; //Caslot
h[1091] = 50; //Galorindle
h[1092] = 60; //Galaraud
h[1093] = 105; //Galoryph
h[1094] = 60; //Minijina
h[1095] = 80; //Bojina
h[1096] = 100; //Noperajina
h[1097] = 70; //Torranel
h[1098] = 75; //Sparcoil
h[1099] = 45; //Fallorite
h[1100] = 65; //Volstarite
h[1101] = 70; //Dartizel-R
h[1102] = 80; //Loftitan-R
h[1103] = 70; //Halberax-R
h[1104] = 45; //Dyrascal
h[1105] = 65; //Dyferal
h[1106] = 90; //Dybelial
h[1107] = 70; //Nahualatu
//temp
h[1108] = 45; //Tinimer
h[1109] = 70; //Emperobe
h[1110] = 65; //Altavault
h[1111] = 110; //Belmarine
h[1112] = 70; //Vaquerado
h[1113] = 75; //Siamacho
h[1114] = 85; //Garapaima
h[1115] = 80; //Chantirrus
h[1116] = 70; //Ignelix
h[1117] = 60; //Curlsa
h[1118] = 75; //Coiffaire
h[1119] = 115; //Ostento
h[1120] = 78; //Onzarudo
h[1121] = 32; //Pindillo
h[1122] = 62; //Charandillo
h[1123] = 70; //Beddybite
h[1124] = 110; //Bitemare
h[1125] = 45; //Dasfix
h[1126] = 80; //Malraja

function down(x) {
   // Rounds down to the nearest 1/4096th
   return Math.floor(x * 4096) / 4096;
}

function round(x) {
   // Rounds to the nearest 1/4096th
   return Math.round(x * 4096) / 4096;
}

function calculate() {
   var x;
   var pokemon = document.forms['calcform'].elements['pokemon'].value * 1;

   // C value, the Pok&eacute;mon's catch rate
   var c = z[pokemon];

   // R value, whether Restrain is active
   var r = document.getElementById('restrain').checked ? 2 : 1;

   // BS value, whether Berry Share is active
   var bs = document.getElementById('berryshare').checked ? 4 : 1;

   // B value, the ball bonus
   var b = document.forms['calcform'].elements['ball'].value * 1;
   if (isNaN(b) || b <= 0) {
      alert("Please enter a valid positive number as the ball bonus.");
      return;
   }

   // S value, the status
   var s = document.forms['calcform'].elements['status'].value * 1;

   // M value, the max HP
   var m;
   var level = document.forms['calcform'].elements['level'].value * 1;
   if (isNaN(level) || Math.floor(level) != level || level < 1 || level > 100) {
      alert("Please enter a valid integer between 1 and 100 as the wild Pokemon's level.");
      return;
   }
   var basehp = h[pokemon];
   if (basehp == 1) {
      // Shedinja always has a max HP of 1
      m = 1;
   }
   else {
      // Stat formula for the Pok&eacute;mon's max HP
      m = Math.floor((2 * basehp + 31) * level / 100 + level + 10); //IV was 15, but I know everything will have 31
   }

   // H value, the current HP
   var hp = 0;
   if (document.forms['calcform'].hp[1].checked) {
      // False Swiped to 1 HP
      hp = 1;
   }
   else if (document.forms['calcform'].hp[0].checked) {
      // Current HP is a percentage of the max HP
      var percent = document.forms['calcform'].elements['percent'].value;
      if (percent > 100) {
         percent = 100;
      }
      else if (percent <= 0) {
         percent = 1;
      }
      hp = Math.floor(m * percent / 100);
      if (hp == 0) {
         // Can't have zero HP and still be catchable, so...
         hp = 1;
      }
   }
   else {
      // There's no HP selection for some reason, but then just assume it's at full health
      hp = m;
   }

   // E value, the Entralink modifier
   var e = document.forms['calcform'].elements['entralink'].value * 1;

   // Pok&eacute;dex completion level:
   // Since both the thick grass modifier and the Pok&eacute;dex modifier in the critical capture chance formula cut along the same lines, i.e. change the modifier between the same values, we can immediately convert the number of caught Pok&eacute;mon to a "category" for the purposes of the later calculations.
   var dex = document.forms['calcform'].elements['pokedex'].value * 1;
   var dexcat = 0;
   if (dex > 30) {
      dexcat++;
   }
   if (dex > 150) {
      dexcat++;
   }
   if (dex > 300) {
      dexcat++;
   }
   if (dex > 450) {
      dexcat++;
   }
   if (dex > 600) {
      dexcat++;
   }

   // G value, the grass modifier
   var g = 1;
   var gvals = [1229/4096, 0.5, 2867/4096, 3277/4096, 3686/4096, 1];
   if (document.forms['calcform'].elements['thickgrass'].checked) {
      // In thick grass
      g = gvals[dexcat];
   }

   // P value, the Pok&eacute;dex modifier
   var pvals = [0, 0.5, 1, 1.5, 2, 2.5];
   var p = pvals[dexcat];

   // The all-important formula for X, with 1/4096-roundings
   x = down(round(down(round(round((3 * m - 2 * hp) * g) * c * r * bs* b) / (3 * m)) * s) * e / 100);

   // Check for a critical capture
   var cc = Math.floor(round(Math.min(255, x) * p));

   var criticalchance = Math.min(1, cc / 255); // Can't have a better than 100% chance of a critical capture...
   var shakechance;
   var normalchance;
   var chance;
   if (x >= 255) {
      // auto-catch
      shakechance = 1;
      normalchance = 1;
      chance = 1;
   }
   else {
      // Using the full formula for Y
      var y;
      if (x == 0) {
         // Y is automatically set to zero to avoid dividing by zero
         y = 0;
      }
      else {
         y = Math.floor(round(65536 / round(Math.sqrt(round(Math.sqrt(round(255 / x)))))));
      }
      var shakechance = y / 65536;

      normalchance = Math.pow(shakechance, 3);
      chance = criticalchance * shakechance + (1 - criticalchance) * normalchance;
   }

   //Was the capture successful?
   var catchsuccess = Math.floor(Math.random()*101);

   // Show the data on the page
   //document.getElementById("critical").innerHTML = Math.round(criticalchance * 100000) / 1000;
   //document.getElementById("criticalsuccess").innerHTML = Math.round(shakechance * 100000) / 1000;
   document.getElementById("normalsuccess").innerHTML = Math.round(normalchance * 100000) / 1000;
   //document.getElementById("chance").innerHTML = Math.round(chance * 100000) / 1000;
   //document.getElementById("balls").innerHTML = Math.ceil(1 / chance);
   if (catchsuccess <= Math.floor((normalchance * 100000) / 1000)) {
	document.getElementById("iscaught").innerHTML = "Congratulations! The Pok&eacute;mon was caught!";
   } else {
	document.getElementById("iscaught").innerHTML = "Oh no! The Pok&eacute;mon broke free!";
   }
}

document.getElementById("calcbutton").onclick = calculate;
