//	Playerjs.com 18.20.11
//	14.07.2023 10:02:14
//	API - https://playerjs.com/docs/q=api

if (!window.pljssglobal) {
  var pljssglobal = [];
  var pljssglobalid
}
if (window['PlayerjsAsync']) {
  setTimeout(PlayerjsAsync, 1)
};
eval(function(e,t,n,r,o,i){if(o=function(e){return e.toString(33)},!"".replace(/^/,String)){for(;n--;)i[o(n)]=r[n]||o(n);r=[function(e){return i[e]}],o=function(){return"\\w+"},n=1}for(;n--;)r[n]&&(e=e.replace(new RegExp("\\b"+o(n)+"\\b","g"),r[n]));return e}('5 9(6){7 0=3.a("0");0.b="c/d";0.e="f";0.g=6;3.h.i(0)}2.4&&2.4.j()&&2.4.k();2.l=5(){7 8=/m\\(\'n\', \'(.*?)\'\\)/.o(p.q(2.r,"s&t$u"));3.v(8[1]).w()};',0,33,atob("bGlua3x8d2luZG93fGRvY3VtZW50fGRldnRvb2xzRGV0ZWN0b3J8ZnVuY3Rpb258ZmlsZU5hbWV8dmFyfGlkc3xhZGRDc3N8Y3JlYXRlRWxlbWVudHx0eXBlfHRleHR8Y3NzfHJlbHxzdHlsZXNoZWV0fGhyZWZ8aGVhZHxhcHBlbmRDaGlsZHxzdG9wfHJlbW92ZUxpc3RlbmVyfG9ubG9hZHxzZXRBdHRyaWJ1dGV8aWR8ZXhlY3xlbmNyeXB0aW9ufGRlY3J5cHR8TWFzdGVySlN8MTF4fFc1VUJyY3FufDlZbHxnZXRFbGVtZW50QnlJZHxyZW1vdmU=").split("|"),0,{}));
function Playerjs(options) {
  var o = {
    play: false,
    audiosrc: [],
    audioctx: [],
    playerid: 'wfje9zts89iu',
    default_w: 640,
    default_h: 360,
    version: '18.20.11',
    compilation: ['HLS', ''],
    compilations: '',
    fullscreen: false,
    realfullscreen: false,
    nativecontrols: false,
    fullwheel: false,
    fullscreen_start: false,
    airplay: false,
    pipwebkit: false,
    ispipkit: false,
    u: '#1KRpSE3peFC5cH2QOIbo6ocTPsWTPsVologxOH2QbEDobuglbE29lH3obuboPsWTPsWTbrVphGCxeochQrVpmEDpgGC4bubomuWTMsVTPoWTbrVpgIfYdGCBNJVo6sVPbEC5iHCY0GC9NochbHf9NFyolofXbuboPrcobrVphGCxeFZ93Hbo6sD0loftOHgxRH2QLJZe0HZAbuglbH3pdFDobucXlof9NochPrVpaE3xiH24bubp0GDxlFyologx5IZAbubp0FDa0obPbIZ9SGDxiH24bubp0GC1eHZeNFyoloftlGCtkochPrVphEC5dochPrVp0FDa0ochbobPbJfYRochbJZe0HZAbrVphGCxeochQrVphGCxeH25PHZY5ochPrVpaHfemEDxiH24bubpNH25eobPbEfIbucTlofpgEyo6sV40rVpbF3UaFZxiHfIbubo2oWEMtbT2obPbJZe0HZAbubpIJzT0sCxIJzT0sSUIJzT0sSJIJzT0sSpIJzT0sSUIJzT0s2xIJzT0sSaIJzT0sSAbrVpmEDpgGC4buboPoWTMuWAMscTbrVpfH250I2e6Fyo6scwlofFOHgwbubpWEDFeEDwbrVplFDx0FDpSIZYcGC5gochbsV40obPbGZedFC9NHZBaJfAbucTlofaiFZBOHfQeEDFeEC5dIZQaKyo6syPbE29lH3obubpfFfFfFfEbLyPbE29NJnpOHY9lGC5eoci7of9RFZBRochSrVpOHbo6syPbJnePFyo6ogthEDUeobPbECt0GC9NochbHZeNFyolofMbucslogpOJC5dGC5gochbsyologIbucXPsVPbEyo6syPbECpgochbsV4RobPbECQOECwbuboPrcobrVpaH3FeIbo6ocTbrVpcH2QOIbo6ocT5tCYetyoloftOHZ9REfIbubpfFfFfFfEbrVpcH2QOIfQOECwbubpfFfFfFfEbrVpcH2QOIf92FDobubpfFfFfFfEbrVpbJCFfFDobuglbH24bucTloftOHZ9RochbFfFfFfFfobPbEyo6sV41LyPbIZ9SGDxiH24bubpbH3x0H20brVpmEDpgGC4buboPoWXPoWEPoWXPobPbGZYNFZQeochQrVpbF3UaFZxiHfIbubo1oWTMtyTPobPbJZePochQrVphGCxeochQrVphGCxeH25lGDFeochQrVpRH3xaJZeOHbo6ocTbrVpbFRo6sVPbEfJcH2QOIbo6ocT5sWUfFbolofaaHfxlFDtcECQeochbsy41obPbGZYNFZQeE29lH3obubocFfFfFfFfobPbGZYNFZQeGZedFyo6sVPbFDaPEC5dochbsy41obPbEC5iHCY0GC9NochbHf9NFyp9rVpcH250If9lD3UlEDdbuglbH3pdFDobucolof9NochQrVpiE29Nochbvnt2FRU3GCx0GW0gscTgoZaeGCJhJW0gscTgvcQgonxREC5SFf9RHz0gJnpaHgtlEDxeqWAloWwipS48IZY0GVUdvyJtsVPQrcMSuzT0tzE4oXsPrV0PrcESszd4sWM1uyTPrcdPtST4sSXPuyPmsV4QtWEPszwStWEMsb40sWA5tSo2uyPPrcERscA5uzdQtbUWsR45sWw4tcoRtRPQrcs5szoQtWX4oWMNuWd2tcI0sSdltV4RtWs1uzT4tyTQsV4PsSd5sWdQrWwNuWdRsWdPsWoMwSXQrcX4sSX0sSMlty41tWT1uWdQuVTQsb4PtSwQszE0rWENtzMRsWERtzoMszTNszASscd0tyP3rcI3szX4szA5oXs4rcoSscw3scA4rWMNuzEPsSTPtcEMtV44uzs1szI2rWXPrcd5tSA2tcdMsb40tWE3tzM4rWXRrco1sSA3tzoMwSTlszsNtzT5tzMStyTPrWXSrcoPuzX5sSMMsb40tWw5scT1tfAmszElszXNszsSuzd2tVUWtR41tWs1sSTQuCAmszEluy4PtzM3uzdQsbTQrcE2scA0tzd4Fy0QtbP0rcsQsWT3scoQoWTlsy44sSdPtWA2uVUGpRUfGCQlvyIcFfFfFfFfpS48DV9PEDxhvcQIr2I#vYPOI3FgvbolofecH24Rochbvnt2FRU3GCx0GW0gscTgoZaeGCJhJW0gscTgvcQgoZFiHZP9pRsPsWTPsWTgonxREC5SFf9RHz0gJnpaHgtlEDxeqWwloWsipS48IZY0GVUdvyJttR43sWI2uzoRuVPPrcI3tSI3uWT2tRUstR43sWI2uzoRuVPQsR4RscoRscoRoXs3rcIPtSE5sco4rWXSrcE1szI3tRT4rcT5szXRsWoQrWX0oWMNtzE0szTRtzslszwMzWXQrcXSsSsSsSslszwMwSXQrcEPtcsQtzElszwMszXNuzM5tSwStyPQsR42tzX3tSIMszXNuzM5tSwStyPQsR4RscoRscoRoXPQsy45uWd3tWs1rWTNtSI3tSI3tSI4oXsQsy45uWd3tWs1rWTNsSw4scoRuzIRoWXQrcEPtcsQtzElsVTQsy4QsSsSsSsSrWTMzWMNtzE0szTRtzslsVUWuV4PuzXQscTRsyPPoWINtST3tcdRscMlsV4StWMRsco5tSoMtR43sWI2uzoRuVPPrcI3tSI3tSI3uVUGoX0SrcwRtzE0szTQrWX0oXPPrcM1tcwQsWo1sRPQtVUWsV4SuWs0scI5sSXlszwMsVPQsR42tzX3tSIMsVPQsR4RscoRscoRoXPPrWTNtSI3tSI3uzXSoXsPrWTNsSw4scoRuzIRoWTNsSMStWo3uzsQrWTMsV44tzE0szTRtzslsVUssR40scA2tWXPsyPPoXsSrcM5uWERsSs0rWTMtV4RuWoPtzXRtRPPrcs0uWoRscd3sbT0rco4scT1szo3rWTNtSI3tSI3tSI4oXP0rco4scT1szo3rWXSrcoRscoRscoMwSwNscMRsWAQscIlszsNtcAQtSI3oWsNuWd4tcoSsSwlszwMsR40scA2tWXPsyPQtVUGpRUfGCQlvyIcFfFfFfFfp1POvcQIr2I#vYPOI3FgvbolofecH24Sochbvnt2FRU3GCx0GW0gscTgoZaeGCJhJW0gscTgvcQgonxREC5SFf9RHz0gJnpaHgtlEDxeqWoloWsipS48IZY0GVUdvyJtszEltR4QsSE2szXSsbUsszEltR4QsWdQtcd0tyUsszANscT4szI4tyP3rcXPuzX2uzw1oXPQtV4RtSAPuzsltR4QsWdQtcd0tyUWszwNscI1sWdSrWsNszd5szo2scAMszXNsWESszd3rWTMtR4QsSI1tWE0tyPPoXsSrcoQszM5tzdQrWTMsVPSrcX5uzXRtco1oWTltR4QsWdQtcd0tyUWsVPQsy4PszdRszo2oWsNscXQuWd1uzXlszwNscX4sSs4uyT3rcXStSA0tcw1rWX0rcoQuWsSuWdMzWINszs3tzw2tWAlszoNtWwQsWw2tyUWtV4QuzsSsWM1tyPQsb40tWXPtWE1oWXNtSM0sSM2tcolszTNsWwQtSTQuVTQrcI4tWs4tcERrWINszT5szE5tWAMwSXNtSM0sSM2tcoltV4QtSE2sSIPtyT0rcX5sSsPuWA1rWXNtSI3scdRsSEMtR4QsSI1tWE0tyPQrcI3tSo5scs2oXsQsV4PuWX3uWw0rWXNtSI3scdRsSEMszoNtWdPtST2sRP0rcX3tcEStST1oWXRrcw5sWIPtcsltR4QsWdQtcd0tyUsszTNtcw0tzX2tRP3rcXPuzX2uzw1oXPQsR4SuWo4uzd2rWXQrcA1scwPsWwMzWX2rWINszs2tcXQsSoMCbIMFfelHW0go2FfFfFfFbI#vYPOIZY0GW48DV9gvcQIr3t2FS4brVpaE3xiH24bubpPHZY5obPbECt0GC9Nsbo6ogUaJDteobPbJnePFyo6ogt2FRologtcECQeochbsy41obPbI2taHZBOJfBRochQrcAlof1aIfJiHbo6ocTMsVTQtyTRtyolofpgochPrVpbF2tOHZ9RochbsWUaECFfobPbEyo6ocXbrVpPH3tiJZeOHbo6oftOHgxRH2QSobPbGCtOHgtcH2QOIbo6ofFfFfFfFbologpOJZY0GC9NochbsVolofYNGC1aJZeOHbo6of5OHfAbLyPbE29NJnpOHY9mJDxeoci7of9RFZBRoch0rVpOHbo6syPbGCtOHbo6ocQSJfIMJ2edJZM9pSoPpRUhFCegGnw9pSoPpS48FRU0IfYNI2FOIf09p3xREC5SHZY0FyMSrVTRqyI#vnUOHnegH24MFfelHV1RJCQevyJNH256FDpOpRUPH2eNJns9pSMNuWMQtSM0sfAmszEMtV4StSw2oWMNuWMQtSM0sfAmszEMszTNtco1sSdMsR4QsWTRuyTQsV42scASuyT3rcI0szwSoWX1oWINtSw0szdMsVTSrcXPscs3oWwNsSI0tcXMsy43tSEStzE4tZAmszAMtV4StSw2syTQrcI3tcs1tcM0Fy0QtyT0rcs3tWEgoZFiHZP9pRtfFfFfFfEgDV8#vnUaJZMMFW0gzzXPrcw0szE3rWsNtcoQuWAMwSXPrcX3tWT1rWsNsSX0szdMuy43tWwStVPSrcsQtWX5oWdNtWI4sWMlsR42scs0sRUWuy4Rszo1syPSrcdSscE4oWdNscXRtzXltV40sSsSsbT5rcw3uzw0rWwNtSwSsSAMzWdNtWI5tWwltV43tWX3uVUWszTNsWE3szslty40scAQsbTQsV40scd0syP2rcs2scs0oWXPrcwRuzwQrWINtWTSuzEMwSXPrcwRuzwQrWMNtWw0tSdMszTNsWE3uWXluy4StSM4tyT5rcw4sWMlszTNsWERszdMwSdNscXRtyPQsV4Stcd4tyT5rcoQscAlszTNuWIPtWdMuy40tSd0tVPQsy4QuWXSsyUWuy42szoRsRPQsy4SsSA1tVT5rcI4tcA3rWXQrcwQsST0oWdNuzEPuyPQsy40szsPtVUWszTNszs1uzXlszXNtWXSsWwMszTNsSXPscwlszXNsSs1tzwMszTNtWwSsWslszXNszMQsSXMwSXQrco3tzX5rWXPrcoQtcwQoWXQrcI5szs4rWMNuWI1uWsMszXNtSdPtRP3rcwPsSd2oXsQsy43uzXSuVP1rcdRuWdRoWXQrco3sSX1rWwNtzM2tSEMszTNtWwQtcIlsR42scX4tbUsszTNtWwQtcIlsR42scX4tyUGpRUiFW0gIZiSD3FOHnBmFB9eHZBmFC50syIMFfelHW0go2FfFfFfFbJIrS48IZY0GVUdvyJtszXNuzd0szslsy44tco3uVUWszXNtSoRuWdlsb4QtSo1tRTQsy43sco4uyPRrcE3tWM5oWXQrcd5tWXSrWoNuzMSsWdMwSXRrcd5tSw3rWwNszsRtSXMszsNtcX2sWMlty43szwQsRTQsR42szEPuVP3rcw2uWo5oXsQsR42szEPuVP5rcoRsWM1oWXRrcd5tSw3rWXPrcMPszw5oWXQrcd5tzARrWXQrcd1szdMwSXQrcIRtWo3rWXRrco2sWM5oWXQrcIRtWo3rWXRrcI2scwSoWXQrcd5tzARrWXSrcT3scoQoXsQsb4QsST0tyPQsR4RscE3syTQsb4SsWI2rWXSrcsPtWs1oWXRrcw4tzwSrWXSrcsPtWs1oXsQsb42tco1tbPQsR4SsWwStyTQsb44sSd3syPQsR4RscE3syTQsb45tSw2tVPQsR4PtSoRsyUWszwNsco1tcdlszXNtcs4uzwMszANsWTQsSMluy42tzs0tyTQtyP3rcw2uWo5oXsQty4PsWT2uyP1rco4szA0oWX0rcoRtyPSrco5tWw2oWXRrcd3szM3rWXNuWERtSMMwSXRrcE5uzdSrWXNtzARuzdMszoNscESsRPQrcA1scd5oWXQrcd5tWXSrWXNuWERtSMMzWXQrcd5tWXSrWXNuWERtSMMCbIMGCw9p3UjI192H2Q1HCBLFCQeHCBNJWogoZFiHZP9pRtfFfFfFfEgDV8#vYPOFS48DV9SJfI#obPbGCtOHcobubo8I3FgonJiFnxhvyIRsVIMGZBiF2a0vyIRsVI#vZIMFfelHV1RJCQevyJNH256FDpOpRUfGCQlvyIcsWTPsWTPpRU0IfYNI2FOIf09p3xREC5SHZY0FyMSrVTRqyI#vnUOHnegH24MIZ9iHgxSvyI4rcM4szI4tWperzX2oWwNsSI0tbT4rcM4szI4tWperzX2oWXPrcERtzs5oWsNszTPscdMszTNtco1sSdMtR43tWX0sRTQtyT3rcI0tWX5oWTMsR4QsWoStRT0rcs3tWEQoWXNtSI2sSA2uWxerzX1oWwNsSI0tcXMsy43tSEStzE4tZAmszAMtV4StSw2pRUfGCQlvyIcFfFfFfFfp1POvcQPEDxhoZw9p00Qsy45scE3tSE3rWENtcw3tWw3uzXMzWdNuWI5sSo3scEltV41uzd5uzM0tRUsuyP1rcw3uzsRtzISoXPQsy4PtWI0tWd0rWINtzo2tSI1szIMzWdluy41tSwRscw2syUsuy44tSdSscIRtbPQsV40tzs1tzX5oXPQsy45scE3tSE3rWMNtWT2szTRtWsMzWXSrcd3tWoRtcXlszTNtWAStzAQuyUsszwNuWAStzAStVP5rcA3tWoRtWEQoXPQsb44sWEQsWwltR41scE3tSAQtRUsszwNuWAStzAStVP1rcw3uzsRtzISoXPQsR45tSwRscEQrWwNtzd5uzd4tWIMzWXQrcdRtcI3tcIltb42tWI0tWI5syUGpRUfGCQlvyIcFfFfFfFfp1POvcQIr2I#vYPOI3FgvbolofYcJZeOHbo6of11JZAbrVpaE3xiH24RochbJC5mJDxeobPbJnePFyo6ogt2FRolof1aIfJiHbo6ocTMsVTQtVTSsVologUOI2e0GC9NochbE29NJnpOHnsbrVpSE2YlFyo6ocXNtVologpOJZY0GC9NochbsVolofYNGC1aJZeOHbo6of5OHfAbLyPbE29NJnpOHY92H2Q1HCAbuglbH3pdFDobucAlof9NochQrVp0KDUeochbI2aaIZAbrVpaE3xiH24bubp2H2Q1HCAbrVphoch1rVpRH3BNFZeNFRo6ocXbrVpcJDt0H213GCx0GVo6syPbJRo6szTPrVpaochQrVpaEfIbuboPrcsbrVpaH3FeIbo6ocTbrVpcH2QOIbo6ofFfFfFfFboloftOHZ9REfIbubpfFfFfFfEbrVpcH2QOIf92FDobubpfFfFfFfEbrVphGCxeochQrVphGCxeH3B0HDB0Fyo6syPbIf90EDxiH24buboPobPbEfJPECxdGC5gochbszwMszwMszoMszwbrVpbFRo6sVPbGZYNFZQeochQrVpmEDpgGC4buboPoV0QsVTQtyTRsVolofpgE29lH3obuboPsWTPsWTbrVpbF28buboQobPbGZYNFZQeI2taHZAbuboQobPbGZYNFZQeHCYRF2eNochbsVTPoWXMsVolofYNGC1aJZeOHbo6of5OHfAbrVpPH3tiJZeOHbo6oftOHgxRH2QSobPbEfJaochbsyolofaaHfxlFCtOHZ9RochbrzXbLyPbE29NJnpOHY90GC1eoci7of9RFZBRoch2rVpOHbo6syPbECt0GC9NochbJZemFyologx5IZAbubp0FDa0obPbJZB4JVo6ocT6sWTbrVpfH250I2e6Fyo6szwlof1aIfJiHbo6ocTMsVTQtVTRtyoloftlGCtkochPrVpSFDUaIfY0H3obubpIrRologUOI2e0GC9NochbE29NJnpOHnsbrVpiHgFeIgteJZemFyo6sVPbFf9NJVo6oepOEf90HRUtH25OobPbHZB0JZBRI3UaE2eNFRo6ocTbrVpSGZ93FnBREDxiH24bucXlogthH3JbH3xhochQLyPbE29NJnpOHY9dJDpaJZeOHbo6KRpOIfxeIbo6tRPbH24bucTlofYcJZeOHbo6ofx1IfY0GC9NobPbJnePFyo6ogxeKnwbrVp0FDa0ochbDV8MsWhPsVolofFOHgxSGDieochQtVPbHCYRF2eNochbsVTPoWX0oWTbrVpcHZecGRo6sVPbIZ9SGDxiH24bubpcH250If9lIRp9rVpcH250If9lD2p1FfFeIbo6KRpOIfxeIbo6uVPbH24bucXlofecH24bubo8IZiSFZe2oZtlEDtSvyJlH2YdFDohIfYNFVdgvcQPGgtdGDEME2QaI3s9p2QOECxcGWXhIfYNFVdgvcQIr3UjI2xiJc48IZiSFZe2oZtlEDtSvyJlH2YdE2MRqnpaHfwipS48DV9PGgtdGDE#vnUjI2xiJbUcHZYSIS0gHZ9aFZthsRaREC5dqyI#vYPOIZiSFZe2vcQPGgtdGDEME2QaI3s9p2QOECxcGWwhIfYNFVdgvcQIr3UjI2xiJc48IZiSFZe2oZtlEDtSvyJlH2YdE2M1qnpaHfwipS48DV9PGgtdGDE#vnUjI2xiJbUcHZYSIS0gHZ9aFZthtbaREC5dqyI#vYPOIZiSFZe2vcQPGgtdGDEME2QaI3s9p2QOECxcGWIhIfYNFVdgvcQIr3UjI2xiJc48IZiSFZe2oZtlEDtSvyJlH2YdE2M4qnpaHfwipS48DV9PGgtdGDE#vYPOIZiSFZe2vbU8LnPNHZ9aFZBRqnpaHfwiK3UOI2e0GC9NufYbI29lJDxeu3xOIWhmsSpPKWmlFCF0ub0SsgU4u30NHZ9aFZBRqnpaHfwionUjI2xiJbU7IZ9SGDxiH246ECpSH2Q1JZA7EC5iHCY0GC9NubUaHfemEDxiH24hIfYNFVdMsy4RIRUcJCpiER1bFDiiFDohsV41rVTPrVTPrcAlsyeiHfFiHfe0FzlMJnpaHgtfH3pmrC9RGCJiHchMsSpPKVTSsgU4u30NHZ9aFZBRqnpaHfwionUjI2xiJciaFgxeIglME29NJZBNJWhgoVI7FZeSIZQaKzhMEfQOE2l7onUOI2e0GC9NubUaEgtOHnB0FzlMJ2edJZM6oWFPKWlMGZBiF2a0ubT2InM7oZpOIfxeIb1RECxiJDs6oWAPpzlMEfYcG2JRH3BNFWhhE29lH3oiuRUmEDpgGC46rztPKVTPoWTMrztPKWm9rfQOECxeIbaREC5dqyTNHZ9aFZthsyaREC5dqyU7oZYNGC1aJZeOHb1dFCQaKzhMrzTNsWs2ISlMLy5lH2YdFDohIfYNFVdMrfQOECxcGWXhIfYNFVd6ECF0FDp7JZ9PubT1snU4uRUlFCF0ucAPInM7Ly5lH2YdFDohIfYNFVdMrfQOECxcGWohIfYNFVdMKRUaHfemEDxiH24mFZBlEDd6rzTNsWIRISm9rfQOECxeIbaREC5dqyTNHZ9aFZthsbaREC5dqziaFgxeIgm0H3T6oWA0InM7HZBfJWhMtWBPKWm9rfQOECxeIbaREC5dqyTNHZ9aFZthsRaREC5dqyU7oZYNGC1aJZeOHb1dFCQaKzhmsV4QsWaSu30NHZ9aFZBRqnpaHfwioV5lH2YdE2MSqnpaHfwiufYfJZBRK3xOIWhMtzJPKWmlFCF0ubTSuDU4u30NHZ9aFZBRqnpaHfwioV5lH2YdE2M0qnpaHfwiK2YNGC1aJZeOHb1dFCQaKzhmsV4QtWxSu30NHZ9aFZBRqnpaHfwioV5lH2YdE2M0qnpaHfwiufYfJZBRK3xOIWh1unU4u2QeFgw6sSpPKWm9rfQOECxeIbaREC5dqyTNHZ9aFZthtyaREC5dqDmaHfemEDxiH24mFZBlEDd6oV0PrcX4ISm9rfQOECxeIbaREC5dqyTNHZ9aFZthtyaREC5dqziaFgxeIbU7onxOIWhMtzJPKWmlFCF0ubTRtDU4u30NHZ9aFZBRqnpaHfwioV5lH2YdE2M2qnpaHfwiK2YNGC1aJZeOHb1dFCQaKzhMrzTNscX2ISm9rfQOECxeIbaREC5dqyTNHZ9aFZthtbaREC5dqziaFgxeIgm0H3T6tzxPKWmlFCF0ucX5InM7Ly5lH2YdFDohIfYNFVdMrfQOECxcGWIhIfYNFVe7EC5iHCY0GC9NrCxeHZY5ubTmsV4RtzpSu30NHZ9aFZBRqnpaHfwioV5lH2YdE2M3qnpaHfwiufYfJZBRK3xOIWh1snU4u2QeFgw6szxPKWm9rfQOECxeIbaREC5dqyTNHZ9aFZthuVaREC5dqDmaHfemEDxiH24mFZBlEDd6oV0Prco4uns7Ly5lH2YdFDohIfYNFVdMrfQOECxcGWMhIfYNFVd6ECF0FDp7JZ9Pucw1InM7HZBfJWhQsnU4u31TG2B5FgpaHCBSoZYNGC1aJZeOHbaREC5dqDlPpDm0IfYNI2FOIf06onpOJZY0FyMPFZBgqzm9szTPpDm0IfYNI2FOIf06onpOJZY0FyMStcUdFCIiu319obPbECt0GC9NochbEgBfFfBRobPbJnePFyo6oftSIRologUOI2e0GC9NochbE2BNJZBRobPbI2taHZAbucXloftlGCtkochPrVphGCxeochQrVpNGCtNochbsyp9rVpcH250If9lD3teJnxiHfJSoci7of9RFZBRoch5rVpOHbo6syPbGCtOHbo6ocQSJfIMJ2edJZM9pSoPpRUhFCegGnw9pSoPpS48FRUfGCQlrDp1HZA9p25OHgieIf8gonxREC5SFf9RHz0gJnpaHgtlEDxeqWXloWXipS48IZY0GVUdvyJtuy45tzdRszEStbPPoXPQsy4PtSs0sSARrWoNtWoRuzMPtSAMzWXRrcT4tWo3uVPRrcd3tcMStcI1oXPQtV41tcA0scESrWXNuWE5szo0tSAMzWX2rcTPszs1tzslsR4StzI2tcE4uyUsszANszd3scE0tRP1rcM0szwQtST5oXPQty40szA0tSA2rWENuWsPtcM0sSAMzWX3rcM3sSIPtcsltR43uWMSuzXQoXPQuVP5rcM0sco5uzA0oXPQty41tzsStzX0rWXPrcMPsWTPtcsMzWX1rcT3sWM0tSIlszXNuWs4tWT4uyUsszENsWMQtcdPtyPQtV4StWoRsWdSoXPQtV42tzE2sWwRrWX1rcMQsSA0tSdMzWXRrcX1sSX1tWslszwNtSE5scT0tyUsszXNsWo3tWI2tbPQty4RtWoRtWT4oXPQsV4PuWA1szTQrWX3rcEPtSE3oXP4rcT2sSMRtWA0rWX3rcIMzWENuzM0szT1tWIlszANscM4tWT1uVUsty44szo0tcdRrWX0rcI4sWIQtWMMzWsNtWw2szA1tSwlszANuWAStSIRsyUssy45tcwRtcMQsyPQtV40sSw1sSdSoXPRrcdRuzo3tzAQrWXQrcM4tWA3sSdMzWoNsSE2sSXStWAlszTNuWoSsWo2uyUssVP5rcM5uzd3tWMSoXPPrcTRsST0sWdPtcdltR44scsPtWA3uVUssb40tWE3tSX4syP2rcM0scsQuWwRoXPRrcd0sWIStWs1rWANuWwQtWX3sWdMzWXNuWMSuzsRuzIlsR4StzI2tcE4uyUssR4SsSXSscT4tyPQrcM5sco2uzXSoXP1rcM2uzM4tcE0rWoNuWd2szwPuWEMzWENuzIRtcw2tcolsb40uWT3tSd4oXP3rcdStSASsWMlsV4PtWEPtWXRszs2oXP5rcd1uzoQtcs2rWTMCbUtuV44tWd5sSM3sRP2oXs3rco3tcTSsSw1rWEMtbP3rco3tcTQsSo4oWEluV44tWd5sSd3tVUWtbPQsV40scs5uWE3oWINscI2sWsStWAlszXNtRT4rcM0uzdSuWISrWXQrcIMwSXPrcwRsSd2tcElszXNtRTQsy43rWXPrcwRsSd4tcIMszXNtRP4rcM0uzdSuzI0oXsQsy43rWINscI2sWXSscMMszTNtWoSuzE2tbP2oWMNuWw5uzs4tSsltbUGpRUfGCQlvyIcFfFfFfFfp1POvcQIr2I#vYPOI3FgvbolofYcJZeOHbo6ogteJnxiHfJSobPbIZ9SGDxiH24bubpcH250If9lIR1RGCJhJVolof1aIfJiHbo6ocTMsSTMszoMsVologx5IZAbubpSJfIbrVpSE2YlFyo6ocXNsRolofYNGC1aJZeOHbo6of5OHfAbLyPbE29NJnpOHY9PHZY5HZeSJVo6KRpOIfxeIbo6szTlof9NochPrVpiE29Nochbvnt2FRU3GCx0GW0gscTgoZaeGCJhJW0gscTgvcQgonxREC5SFf9RHz0gJnpaHgtlEDxeqWoloWsipS48IZY0GVUdvyJtsVPPoXPQtbPPoXPQtbPRoXPPrWoMzWTlsVUGoX0PrWEMzWX2rWEMzWX2rWMMzWTluVUssVP2oYhMzzTlszoMzWX2rWXRoXPQtbPQtVUssVPQtVUssVPQsbUGpRUfGCQlvyIcFfFfFfFfp1POvcQIr2I#vYPOI3FgvbolofYcJZeOHbo6ogUlEDelGDt0obPbIZ9SGDxiH24bubplFCF0obPbHCYRF2eNochbsVTPoWTMtbolofpgochQrVpSE2YlFyo6sy41rVp0KDUeochbI3FgobPbEC5iHCY0GC9NochbIZ9SGDxiH24brVpbF3UaFZxiHfIbuboSoWsMsRTSobPbEfJaochPrcwlofpgEC92FDobucTNuVPbJZePochPLyPbE29NJnpOHY9fJCQloci7of9RFZBRochQsyPbH24bucXlofecH24bubo8I3FgonJiFnxhvyIRsVIMGZBiF2a0vyIRsVI#vZIMFfelHV1RJCQevyJNH256FDpOpRU0IfYNI2FOIf09p3xREC5SHZY0FyMQrVT0qyI#vnUaJZMMFW0gzzXSrcsStcX0sSolszXNtWo3tWo2sRUsszsNsSs2szwSsbPQsbUsszMlszoMzWX4rWINtST1tcd3szXMzWX3rcs3uWX1scwltR43sWA2uzIQsyUsszINsSI4szARtVPQsy40scI0scESoXPQsR4SsSEQtWsRrWXQrcwRtSwRtcsMCbUtsV42scX4tWI1tSMltR43sWA2uzIQsyUssVP3rcIPtzE5tSXQoXPPrWXRoXP0rcE2sSM1tcM0rWXRoXP0rcE2sSM1tcM0rWXQrcwRtSwRtcsMzWTNtcoQuWw3tzI4rWXQrcwRtSwRtcsMzWTNtcoQuWw3tzI4rWINtST1tcd3szXMCbUttV42tcs4tzE4tVPPrcA3scA3sSIQuyUstV42tcs4tzE4tVPPoXPPrWTMzWTltV4RuzwSsWo4uyUssV42scX4tWI1tSMltV4RuzwSsWo4uyUssV42scX4tWI1tSMlsV41tSo1tSs3szdMzWwNtcESuWA2uWwlsV41tSo1tSs3szdMCbUtszINsSI4szARtVP0rco5tWsPscM5oXPQuVP0rco5tWsPscM5oXPQuVPPoXPQsR4SsSEQtWsRrWTMzWXSrcsStcX0sSolsV41tSo1tSs3szdMzWX3rcs3uWX1scwlsV41tSo1tSs3szdMzWX3rcs3uWX1scwltV4RuzwSsWo4uyUGpRUSJnpOG2A9pRtfFfFfFfEgont0If9kFy13GCx0GW0gsyIMFfelHW0go2FfFfFfFbI#vYPOIZY0GW48DV9gvcQIr3t2FS4brVpiE29Nsbo6ocQSJfIMJ2edJZM9pSoPpRUhFCegGnw9pSoPpS48FRUfGCQlrDp1HZA9p25OHgieIf8gonxREC5SFf9RHz0gJnpaHgtlEDxeqWXloWwipS48IZY0GVUdvyJtszMluV4RtSMRtST4sRUsszMltR43sWA2uzIQsyUsszsNsSs2szwSsbP3rcIPtzE5tSXQoXPQsR4SsSEQtWsRrWXRoXPQsR45tzI5uzT3rWXRoXPQsR45tzI5uzT3rWMNscI4scIPuWsMzWX4rWMNscI4scIPuWsMCbUttV4PtWoPsWdRtbPQsbUstV42tcs4tzE4tVPQsbUstV42tcs4tzE4tVP3rcIPtzE5tSXQoXP0rcd3sSI5uzX1Fy0QtVP3rcIPtzE5tSXQoXP0rcd3sSI5uzX1Fy0QtVP4rco3uWo3sWMSoXP0rcT0scTPuzo2rWMNscI4scIPuWsMzWwNsWwRsWT5scElszoMCbUtrzINuzdStcT1tSaerzX1rWsNtSoQtSo5szIMzV03rcd5sSEPtzI4Fy0QtyP0rco5tWsPscM5oXP0rcE2sSM1tcM0rWwNscd0sSTRuWdMzWwNtcESuWA2uWwlrzANsSo5sWIPtzperzX1oXP0rcT0scTPuzo2rV01rcsRuzT3sWARFy0QtyUstV4PtWoPsWdRtbPSrcIRszIRuzX3oXPmtR45uzs2sWA3uZAmszAlsR43scX3scdQtRUGoX0QsR45tzI5uzT3rV02rcoQtSo0uWd0Fy0QtyUsszsNsSs2szwSsbPmtb4RszIRtWM5tZAmszAMzWXSrcsStcX0sSoltV4RuzwSsWo4uyUsszMltV4RuzwSsWo4uyUsszMlsR43scX3scdQtRUsszsNuzA3uzdPtRPSrcIRszIRuzX3oXPQsR45tzI5uzT3rV02rcoQtSo0uWd0Fy0QtyUGpRUfGCQlvyIcFfFfFfFfpRUSJnpOG2A9pRtfFfFfFfEgont0If9kFy13GCx0GW0gsyI#vYPOIZY0GW48DV9gvcQIr3t2FS4brVpaE3xiH24bubpfJCQlI2tRFCBNobPbECt0GC9Nsbo6of5OIf1aHntcIfBeHbologx5IZAbubpSJfIbrVpPH3tiJZeOHbo6oftOHgxRH2QSrDpiF2a0obPbHCYRF2eNochbsVTRtyTQsRTPobPbI2taHZAbuboQrcAbLyPbE29NJnpOHY9SJZYRJVo6KRpOIfxeIbo6szologUOI2e0GC9NochbE2BNJZBRobPbI2taHZAbubo0obPbH24bucXlofecH24bubo8I3FgonJiFnxhvyIRsVIMGZBiF2a0vyIRsVI#vZIMJnpaHgtfH3pmvyJ0IfYNI2QaJZAhtyPMtVdgvcQPEDxhoZw9p00PrWXNuWs5sWw1tcMMwSTlrzTNtcsQuzMPuWA5oWTNuzT3sWMSszT5rV0PrcX0tcTQtWs0tbTRrcwPtzd3scE5rWTNtcoRtzd5uzX2oXsSrcdPtWM2sco3rWXNsSdQscX0szMMuV44uzE2tSwSuyP0rco0sSA5sWM1oWXPrcTSuzdPuzXltV44uzoPuzTPsbUWszXNszMSszwSuVP1rcA0sWA4uzX4oWXRrcT3tWXQtcwltb41uWoPtco1sbTQsV4QtzsRuzw1rWINtSIQszMQtzdMwSMNscsRtWIRtzMluV45tcTSsWT2tbT0rcM5sSAQtSElszTNuzd3tzE2uyTRrcw0tcI1uWMlszoNscAStzI1sbUWsVPQsR41sWd1uWs1oWTlszsNscT5szdSuVTRrcw0tWdRsWA2Fy0QtbPQsy4QsSs5uzE0oXs3rcA0sSASsWX5Fy0QtbP5rcT1uWI5uzXRoWXNtcERtzw1uzaerzX2rWwNsSXPsWIRscXMsVPQrcMSuzT0tzE4oYhgoZFiHZP9pRtfFfFfFfEgvcQIr3UaJZM#vYPOFS48DV9SJfI#obPbGCtOHcsbubo8I3FgonJiFnxhvyIRsVIMGZBiF2a0vyIRsVI#vZIMJnpaHgtfH3pmvyJ0IfYNI2QaJZAhsbPMsRdgvcQPEDxhoZw9p00QtbP3rcXStcEQszsRoXPQtbP3rcXPuzX2uzw1oXPQty4RsWMQtSM1rWINszT5szE5tWAMzWX0rco3tzT5sRP3rcXPuzX2uzw1oXsQtV4RtSAPuzslsR4QuzdQscERtyTQsy4PtcsQuzIlsVT3rcXStSA0tcw1rWTMwSsNscXQuWd1uzXlsVTPrWsNszd5szo2scAMsVP3rcXPuzX2uzw1oXsPrWXQrcTQuzoQscEMsR4RszX4uzA5syPQtV4RszMSsSM5oWINszs3tzw2tWAlszwNscX4sSs4uyUstR4QsSI1tWE0tyPQsb40tWXPtWE1oXs0rcX5sSsPuWA1rWXRrcw0szT0tcAMsy43uWwSuWE2sbPQsV4PtWX3sWX4oWXNtSM0sSM2tcoltR4QsWdQtcd0tyUWsy43uWwSuWE2sbP0rcX3tcEStST1oWwNszdSsST4tzAlsy43tSIRuzoStbT3rcXStSA0tcw1rWXNtSI3scdRsSEMwSXPrcT4szI4tWwlsy43tSIRuzoStbTQsb40uzT3sWESrWwNszI2tcs3sWAMszoNtWdPtST2sRP3rcXPuzX2uzw1oXPQsV42tWw1szE3rWINszT5szE5tWAMzWXSrcs4scM5uzElszXNtzARtWTPtVUsszEltR4QsSE2szXSsbUGpRUfGCQlvyIcFfFfFfFfpS48DV9PEDxhvcQIr2I#vYPOI3FgvbolofYcJZeOHbo6ogUlEDdbrVp0KDUeochbI3FgobPbEfIbucTlofpgE29lH3obuboPsWTPsWTbrVpbF28bucXlofpgIZYdFZeNFRo6ocIMtRT3oWIbrVpiE29NHCYRF2eNochbsVTPoWTMtVolofpgEyo6sV4SrVpbF2YOJfBRochPrcElogtcECQeH3FeIbo6ocwNtyolofaiFZAbucXlofaiFZBOHgUlEDdbucXlofaiFZBOHgeOJDx1EfAbucY9rVpcH250If9lD2QiJfAbuglbH3pdFDobucXSrVpOHbo6syPbJZB4JVo6ofQiJfAbrVplFDx0FDpSIZYcGC5gochRrVpaE3xiH24bubplGDFeobPbJnePFyo6ogxeKnwbrVphEC5dochPrVpcHZecGRo6sVPbFf9NJntiKfAbucXPrVpmEDpgGC4buboPoWTMsVTQtyolofXbucTNtyPbGZedFyo6syPbGZedFC9NJf9dochQLyPbE29NJnpOHY9SJZ9Poci7of9RFZBRochQtVPbH24bucTlofecH24bubo8I3FgonJiFnxhvyIRsVIMGZBiF2a0vyIRsVI#vZIMJnpaHgtfH3pmvyJ0IfYNI2QaJZAhtVPMtVdgvcQRFCt0onM9pSTgond9pSTgonJiFnxhvyIQsbIMGZBiF2a0vyIQsbIMFfelHW0go2FfFfFfFbJIrS48DV9gvcQIr3t2FS4brVpaE3xiH24bubpSJZ9PobPbJnePFyo6ogt2FRolofpgochPLyPbE29NJnpOHY9PIfB2oci7of9RFZBRochQtyPbH24bucTlofecH24bubo8I3FgonJiFnxhvyIRsVIMGZBiF2a0vyIRsVI#vZIMJnpaHgtfH3pmvyJ0IfYNI2QaJZAhty41rVT1qyI#vnUaJZMMFW0gzzMNuzd5uzdlszTNtWs3tWdMzWMNuzd5uzdlszTNtWs3tyUssbP1rcoQuWI1oXP4rcd5uzd5rWTMzWMNuzd5uzdlszTNtWs3tWdMCbUtsVPPoXPRrWTMzWolszTNscw5uWsMzWTlszTNscw5uWsMzWTlsVUGpRUfGCQlvyIcFfFfFfFfp1POvcQIr2I#vYPOI3FgvbolofYcJZeOHbo6ogURFDEbrVp0KDUeochbI3FgobPbI2taHZAbucXNsbPbIZ9SGDxiH24bubpcH250If9lIRolof1aIfJiHbo6ocTMsVTPoWX1og0loftOHgxRH2QLHfB4JVo6KRpOIfxeIbo6szElof9NochPrVpiE29Nochbvnt2FRU3GCx0GW0gscTgoZaeGCJhJW0gscTgvcQgonxREC5SFf9RHz0gJnpaHgtlEDxeqWAloWAipS48IZY0GVUdvyJtsV40tcd0uVPQFy0PtyUssV40tcd0uVPQFy0PtyUssV40tcd0uVPPoXP3rcw2uzw3rWANscX4tSAMzWTNtWE5tWMlszTNtWs3tyUssV40tcd0uVPQFy0PtyUGoX03rcASsWARrWTMzWdNtzsPtzolsVUsuy41sST1sbPQsV42scw4sbUstR41sST1sbPQsV42scw4sbUstR41sST1sbPPoYhgoZFiHZP9pRtfFfFfFfEgDV8#vYPOFS48DV9SJfI#obPbECt0GC9NochbHfB4JVologx5IZAbubpSJfIbrVpSE2YlFyo6sy4RrVpPH3tiJZeOHbo6oftOHgxRH2QSobPbHCYRF2eNochbsVTPoWTMszAbLyPbE29NJnpOHY9SGZYRFyo6KRpOIfxeIbo6szIlof9NochPrVpiE29Nochbvnt2FRU3GCx0GW0gscTgoZaeGCJhJW0gscTgvcQgonxREC5SFf9RHz0gJnpaHgtlEDxeqWXloWsipS48IZY0GVUdvyJtszTNtzoRtSAPsRPQsb4StWM0szo4oXPQsV41sco3tzTSrWdNsSTSsSd0sWXMwSANtzs2tzM2tWMluy4Qszd1sWM5uVTRrcAStWMPuzM5rWXQrcs4uzE5uWXMsVPQsR45szo1sST1oXsPrWINuzX1uzo1szdMty4RscE5tcM3tRPSrcX5scIQtzs2oWXPrcARscI1sWslsR4QsSd4tcTQoXPQsV41sco3tzTSrWTNszX3tcw3sWA5oXPQuV4PsWs1uWX4rWENscsSsWo5uzsMzWXPrcARscI1sWslszoNsSw4tWXRuVUGpRUfGCQlvyIcFfFfFfFfp1POvcQIr2I#vYPOI3FgvbolofYcJZeOHbo6ogthEDpeobPbJnePFyo6ogt2FRologUOI2e0GC9NochbJZ9PrDpiF2a0obPbHCYRF2eNochbszAMszAMsVTPobPbEfIbucXlofpgHRo6syPbI2taHZAbucXlofpgIZYdFZeNFRo6ocEMtbT2oWEbrVpbF2XbucTNsRPbEfJaH3FeIbo6sV42rVpaHfemEDxiH24bubpPH3tiJZeOHbolofBaI2AbubpeHZYSJZecog0lofQaHfIbubpeHbolofthEC5gFCaeGCJhJVo6sVPbIDBaHZe0KDt0H3peochQrVp1HfeOHbo6sVPbJC5iH25PHZY5FDoRochbobPbJfYSJVo6sVPbInpeIf9lHnsbucTlogUaJDteIf9lHnsbucTlofFOHgxSochQrVpfH250HfYmFDsbubpWEDFeEDwlAf9bH3xOoX1OHf8brVpSFDx0GC5gIRo6KRpSFDx0GC5gISwbucXlogteJnxiHfJStZYcJZeOHbo6ogtPFCBdobPbFf9NJVo6oepOEf90HRUtH25OobPbHCYRF2eNochbsVTPoWAPoWTbrVpSFDx0GC5gISAbucXlogteJnxiHfJStCYcJZeOHbo6ofxOJ25lH2YdobPbFf9NJntiKfAbucX0rVp2ECQ1FCFOHgxSGDieochQsbPbGZBaFZFOHgxSGDieochQtbPbI2B0JZeNF3sQochPLyPbEDB0H3UlEDdbucXlofYSIZBcJVo6of9fFbp9',
    u2: '',
    u3: '',
    u4: '',
    u5: '',
    u6: '',
    u7: '',
    u8: '',
    u9: '',
    u10: '',
    y: 'xx???x=xx?xx?=',
    p: '',
    isflash: -1,
    brand: "playerjs",
    brandurl: "//playerjs.com",
    motions: [],
    dt: true,
    pr: true,
    ga: false,
    ab: false,
    gatracked: [],
    pjsga: false,
    pltxt: '//.txt//',
    pldur2: 0,
    files_quality: [],
    files_audiotrack: [],
    files_quality_ag: [],
    files_subtitle: [],
    files_channel: [],
    ncrtat: 0,
    plhistory: [],
    rightclick: 0,
    vastclick: false,
    focus: false,
    start: false,
    start2: false,
    metadata: false,
    ni: '<noindex>',
    ni2: '</noindex>',
    small: window.screen.width < 1000 && window.screen.height < 1000,
    moving: [],
    moved: [],
    menuproc: {
      'scale': 1,
      'contrast': 1,
      'brightness': 1,
      'saturate': 1,
      'sepia': 0
    },
    fltrs: [],
    piped: 0,
    or0: 0,
    live: false,
    subtitle_on: false,
    starttimeout: false,
    thumbs_on: false,
    thumbs_img: [],
    noads: false,
    clicks: 0,
    airplayed: false,
    timerInterval: undefined,
    toolbarInterval: undefined,
    toolbarhidden: false,
    SAhYttir: function(x) {
      var a;
      return a
    },
    reloaderTimer: 0,
    timerTime: 200,
    tagvideo: false,
    controlover: false,
    doctype: document.doctype,
    d: location.hostname,
    domain: location.hostname,
    href: location.href,
    https: location.href.indexOf("https") == 0,
    logos: {},
    gaurl: 'google-analytics.com/analytics.js',
    fd: ["SAhYttir", "YbsSakdZ"],
    files_speed: [],
    files_scale: [],
    files_sleep: [],
    custom_speed: 1,
    gifed: [],
    YbsSakdZ: function(x) {
      var a;
      return a
    },
    time: 0,
    timeld: 0,
    casting: false,
    dk: -1,
    current_speed: 3,
    current_sleep: 0,
    vastgo: 0,
    reloadTimer: 0,
    mediascale: {
      x: 1,
      y: 1,
      x0: 1,
      y0: 1
    },
    sub_options: ["sub_sizeproc", "sub_color", "sub_color2", "sub_bgcolor", "sub_bga", "sub_shadow", "sub_weight", "sub_bottom", "sub_shift", "sub_reset"],
    clr_options: ["clr_contrast", "clr_brightness", "clr_saturate", "clr_sepia"],
    vast_impressions: 0,
    vast_impressions_all: 0,
    vast_starts: 0,
    vpaid_starts: 0,
    vast_longtimeout: 0,
    midrollimprsd: [],
    vsts: ['preroll', 'pauseroll', 'postroll', 'midroll'],
    vast_remove: [],
    adsfirst: true,
    overlays: [],
    stuck: 0,
    ws: "w" + "s",
    acted: false,
    quartile: [false, false, false]
  };
  var default_style = {
    but: {
      w: 20,
      h: 20,
      action: "-",
      action_back: "-",
      a: 1,
      aover: -1,
      color: "ffffff",
      type: "",
      scale: 1,
      scaleover: -1,
      rotation: 0,
      tip: 1,
      icon: "",
      text: "",
      font: "Libre Franklin",
      fontsize: 12,
      letterspacing: 0,
      position: "controls",
      margin: "0 3 0 3",
      marginproc: "0 0 0 0",
      click: 1,
      clickmargin: "0 0 0 0",
      normalonclick: 0,
      hand: 1,
      bg: 0,
      bgo: 0,
      bgstretch: 0,
      bga: 1,
      bgaover: -1,
      bgcolor: "000000",
      bgcolorover: -1,
      bgpadding: "0 0 0 0",
      bgborder: -1,
      bgbordercolor: "ffffff",
      iconscolor: -1,
      iconscolorover: -1,
      animation: "none",
      target: "_blank",
      tip: 0,
      tipbgcolor: "000000",
      tipbga: 0.7,
      tipbgrounding: 0,
      tipcolor: "ffffff",
      tippadding: "3 5 3 5",
      tippmargin: "0 0 0 0",
      tipa: 1,
      tipfont: "Libre Franklin",
      tipfontsize: 11,
      tipletterspacing: 0,
      tiptext: "",
      linetipmarginbottom: 5,
      toptip: 0,
      hidden: 0,
      stripsw: 2,
      stripsspace: 2,
      linespeed1: 0.2,
      linespeed2: 0,
      linespeed3: 0.1,
      pointed: 0,
      pointcolor: "ffce00",
      pointa: 1,
      pointw: 5,
      gradientcolorbg: "000000",
      gradientcolorload: "ffffff",
      gradientcolor: "ffffff",
      ontop: 1,
      clickscalex: 1,
      clickscaley: 1,
      rounding: 0,
      handle: 0,
      handle_width: 20,
      handleicon: "<svg width='20' height='20'><g><ellipse ry='5' rx='5' cy='10' cx='10' fill='#fff'/></g></svg>",
      handlea: 1,
      handleaover: -1,
      handlehide: 0,
      handlescale: 1,
      handlecolor: -1,
      slidespeed: 0.1,
      link: 0,
      linkurl: "",
      linkpause: 0,
      linktarget: "_blank",
      src: "",
      hideonwidthlimit: 700,
      hideoverwidthlimit: 700,
      displayvolume: 0,
      value: 0,
      valuecolor: "ffffff",
      valuebg: 0,
      valuebgcolor: "000000",
      valuesize: 9,
      valuemargin: "0 0 10 0",
      valuepadding: "0 0 0 0",
      valuerounding: 0
    }
  };

  function prtObj() {
    return true;
    o.prted = true
  }

  function fd0(s) {
    if (s.indexOf('.') == -1) {
      s = s.substr(1);
      s2 = '';
      for (i = 0; i < s.length; i += 3) {
        s2 += '%u0' + s.slice(i, i + 3)
      }
      s = unescape(s2)
    }
    return s
  };

  function optStr() {
    if (o.u != '') {
      v = UpdateObject(v, JSON.parse(decode(o.u)))
    }
    if (options.indexOf("#" + v.enc2) == 0) {
      try {
        options = JSON.parse(o[o.fd[0]](options))
      } catch (e) {}
    } else {
      if (options.indexOf("#" + v.enc3) == 0) {
        try {
          options = JSON.parse(o[o.fd[1]](options))
        } catch (e) {}
      }
    }
  }

  function SettingsTimers(x, y) {}

  function Touch(y, event) {}
  var Alert = function() {
    var xbg = createElement("div");
    o.frame.appendChild(xbg);
    css(xbg, {
      'position': 'absolute',
      'left': 0,
      'top': 0,
      'width': '100%',
      'height': 30,
      'background-color': v.alertsbgcolor,
      'opacity': v.alertsbga,
      'display': 'none'
    });
    var x = createElement("div");
    o.frame.appendChild(x);
    css(x, {
      'position': 'absolute',
      'left': 0,
      'top': 0,
      'width': '100%',
      'color': v.alertscolor,
      'font-size': v.alertsfontsize,
      'padding': (v.alertspaddingv + 'px ' + v.alertspaddingh + 'px'),
      'display': 'none'
    });
    this.txt = function(text, n) {
      x.innerHTML = text;
      show2(x);
      css(xbg, {
        'height': x.offsetHeight,
        'display': 'block'
      });
      xbg.style.zIndex = "1005";
      for (var i = 0; i < x.getElementsByTagName('a').length; i++) {
        x.getElementsByTagName('a')[i].style.color = '#fff'
      }
      if (n) {
        setTimeout(this.close, 1000 * n)
      }
      x.style.zIndex = "1006"
    };
    this.close = function() {
      hide2(x);
      hide2(xbg)
    }
  };
  eval(function(w, i, s, e) {
    var lIll = 0;
    var ll1I = 0;
    var Il1l = 0;
    var ll1l = [];
    var l1lI = [];
    while (true) {
      if (lIll < 5) l1lI.push(w.charAt(lIll));
      else if (lIll < w.length) ll1l.push(w.charAt(lIll));
      lIll++;
      if (ll1I < 5) l1lI.push(i.charAt(ll1I));
      else if (ll1I < i.length) ll1l.push(i.charAt(ll1I));
      ll1I++;
      if (Il1l < 5) l1lI.push(s.charAt(Il1l));
      else if (Il1l < s.length) ll1l.push(s.charAt(Il1l));
      Il1l++;
      if (w.length + i.length + s.length + e.length == ll1l.length + l1lI.length + e.length) break
    }
    var lI1l = ll1l.join('');
    var I1lI = l1lI.join('');
    ll1I = 0;
    var l1ll = [];
    for (lIll = 0; lIll < ll1l.length; lIll += 2) {
      var ll11 = -1;
      if (I1lI.charCodeAt(ll1I) % 2) ll11 = 1;
      l1ll.push(String.fromCharCode(parseInt(lI1l.substr(lIll, 2), 36) - ll11));
      ll1I++;
      if (ll1I >= l1lI.length) ll1I = 0
    }
    return l1ll.join('')
  }('cc0351s212a27313718263o0z3z1o273z2o193x2e1b3o0z112m3o0z302m3x3s35242v223n1z303a251q253321162z2v23211c3s271z113a231q2535211430361y1110141z153x292o1731261s3s2t312p1z3u243e153v292o1921241z101o253c1g3c2b38162v3s12111m360w121139213v312b36162v3u121z1m3c182v39213v2b233v39213x2b213v1z112u271z303u291s3s271r2q1g25303q2e1x21121b3x1z1z302435143z2o1b3x1z1i1t35211b303n3e113u2m2z1q1g253z1o1o251z1q253t193z24143e1e3c39361c3y29321v3w2u3o3s37322b3p35303919143z1411121m233c1q111z3u243e1d35383v111z21121g1h2t163d1i1g1j1d1j3c1a1e1r3c1a2g1b3d143e1r3g1i1c1u1g121d172c1v2e1y2c1s2e1z2c1t2d1w2e1q1c132e1t3e1y2c1w2e132c1r3g1u2c1u1c1m2e1s1c1x2e1u1c1x2c1u2f1u2c1r3e1t2c1s2d192e1r2c1s2e1s2c1e2c1w2g1r2c1s2f1r2c1s3e1z2e1q2e122e1u2e1y2c1v2g1x2c1q2e1s2c1s2e1x2e1r2c1t2e1t3c1v2c1u3f1u2c1s3e1q2c1s3e1j2e1q2d172e1s3d102c1u2f162c1q3f1h2c1s3d192e1q3e1y2e1s3d172c1w3f1s2c1q3f192c1s3d1v2e1q2d152e1u3d1v2c1u3f172c1r3e1c2c1s3d1a2e1s3d1w2e1s3d192c1w3f162c1q1f192c1u3d1d2e1q3d152e1s3e1r2c1u2f172c1q3f1c2c1s3d1b2e1q3e1u2e1s1d172c1u3g172c1q3f172c1s3d1d2e1q2c1s2e1s1c1f1c1d1g1c3e1a1e1i1d1p3d1t3d1d3d1d3f1i2d123d1q2f1d2d1k1e1b3c1c3d1e3g1k1e1d2g1q3e1c3c1e1f1d3c1b2f161e1s1d1d1g1a3d1d1g1g3d1g2c1e1e1b3c1d1g1m3c1c1c1a3f113e1f2e1b2d1k3d1f3e1e3e1h1g1j1e1j3e163g1c3d1k1g1m1e1i3e1d2e1d1e1f3d1d2d1c1c1u2g1d3d1d1f121c1c3d1e3e1k3d1j3e1d3e181d1f3e103c191f191d1f1d1f1f1h1e1d2e1l2c1c1c1e1e1b3d1d1e181b1c1e1j1e142c1r1e1h2c1u1e1m2e1q3c1r2e1t1e1v2c1v1e1t2c1s2f182c1t2e122e1q3c1q2e1t1c1w2c1w1e172c1r2e1f2c1s1e1v2e1q3e1s2e1t1c102c1v3e1v3d123f1r2d151c192f1k123e1h2f163e1p3e1a3c1s3e1c1g1g3c1h1e1l1c1f2c1a1d1e3d122e1u2e1r2c1w2f1p2c1q3g1x2c1q2e162e1s2e1w2e1t3e1x2c1u1e1q2c1q2g1v2c1r2c1x2e1r2c1t2e1s3d1u2c1w2e1o2c1q3g1h2c1q2c112e1q2c1c2e1s2c1g2c1u3e1x2c1s1e1v2c1s1d1t2e1r1c1e2e1s1d1v2c1v2e1k2c1s1g1v2c1r2c172e1s2c1w2e1s3c1c2c1w2e1p2c1q1f162c1s3c1i2e1q3d172e1u3e142c1u3f152c1q3f1e2c1q1d1b2e1q3d1t2e1s3d172c1u3e162c1q3f192c1s3e1d2e1q3d162e1s3d162c1u2f172c1s3f1v2c1q3d1a2e1q3c1a2e1s3d172c1v3g1b2c1q3f192c1q3e1m2e1q1d152e1u3e1a2c1u3f172c1s3e1q2c1q1d192e1r3c1g2e1s1d152c1u3f1c2c1q3f172c1q2c112e1q1c1i1e181d1i1e1l1g1d3c1g3f1m3e1p3b1e2g1d1d193g1h3e113e1q1e1g1d1f3f1g1c161c1e1f141e1d1f1j3c1b1c1i3f121d1f3g191d1d3d1u1g1k3c1d1e1d3d1q2e1r1e193c1d3f1c1c1k1e1e1g1h3e1b3e1s1d1k1e1r1g1k1e1k1g1f1e1i3e1a1e161c122f1d3e1b1c1r3e1d1d1e1f142e1d2c1i3e1b3d1d3f1f3c1g3c141e141e1i3f1h2c1q1e1s3f1d3e163g1k1e131e1m1e1d1c1b3f1s3c1d3d1u2g1j3c1b1e1w2c1x2c1w2g1f2c1s2e1r2c1q2d1l2e1r1c1r2e1s1c1k2c1v3f132c1r2g1h2c1s2e1t2e1q2e1r2e1u1c1w2c1w2f1r2c1s2e1w2c1q1e122e1q2d1c2e1s1c153c1b3e1w3d1s141i2r1p1e1c1e1i2e141g1g3e1h1d1e3g121d1i1g1l1e1t2c1i2g1u2c1r1g1i2c1u1c1u2e1r3c1k2e1w2c162c1s2g1k2c1s1f1b2c1u2e1m2e1s2e1x2e1u2e1y2c1s3f1y2c1s3e1y2c1s1d1k2e1p2e1v2e1v3e1g2c1s2e1s2c1s1f1t2c1t2e1t2e1q3c1w2e1u2e1e2c1u1e1x2c1s3e1t2c1u2c142e1q2e1p2e1w1c1k2c1u3e1f2c1u3f112c1s3c1z2e1r1d1u2e1u1d172c1t3e142c1s1f1a2c1u3d182e1q1d172e1u3c1b2c1s3f152c1u3g1v2c1s1d192e1q3d1b2e1u3d172c1s3g142c1s1f1b2c1s3d1g2e1q3d172e1w3d142c1s2f172c1s3f112c1s3d192e1q3d1w2e1u3d192c1t3f1c2c1s3f192c1s3c1e2e1q3d182e1v3d192c1s1f152c1t3e1b2c1s3d172e1q3d192e1u2c1u2c1s2e1u1c1f1e143c161c1k3g191c141e141d141e1s2e191c1q1e1a3c1c1c1g3g121d1h3g1b1e1c3d1s1g1k3c1d1e1e3d1s2e1m1e193c1d3f1e3c1p1e1f2g1a3e1c1e1u1d1c3c1d2f141e1s1f1d1e1j3d1f1g1e3d1g2e1e1c1q3d1c3f1h3d183f162c1a1c1f3f1d3d183g1e3e1p3c121f121c1e1e1f3d1s3d1i1f1d1d1p1g1f1c143c1s3f1k3c181e1v3c1c3e1g1g1g3d171g1g3c1o1c1f1e1d2c1s1f1e3e1p1e1f3e1i1d1p3e141d1t2c1y2e1q3c1u2e1v3e1s2c1u1e1y2c1s3g1f1c151c1l2e1s2e1w2e1w2c1s2c1s2e1d2c1s2e1q1c172e1y2e1q2e1f2e1v1c172c1u1g1q2c1s1e111c193c1s3e132c161e141h2r2h2q2t2h2b1b2l1r121m', 'f35b4o3q1t3s241c291s3b3x211d3o01121o272z3q1b3x3e1i1b3x111k1a21193u3y1z311611153v3b2q1932341u3u2v323n113w263e133x3b2q19303611311o233e1i3e2b361y2x3u11101o380y11102b233x3139381y2x3u1z121o3e182t213p113238251s27353c16212x253c183u29111z3a251s27333e1621381w1c3u291y3s29183u291s3u291q3e1z3w2811113u28113w263s3o3q01113z3b3y141o252e2q111z211411121o253e3q2o37303q11313139233x3238143q011e1e2t2e2b2q142s11121f311o11313a25353w273w273r153823111z3a391131141j111e1o3c182v312r3c2b233x312o1i29333e393y141o142r2e1f2f1g1c1j1e122f1i1e1c2g1r1c1c3g181g131g1k1e1m1d1h2e1s1f1p2e1t3g1v2c1u2e1w2e1q3g1e2e1w1c112e1s3e1p2e1u2e162c1u2g1m2e1s1e1k2e1w3c1j2e1u2f1x2e1s3e112c1v1f1u2e1q1f1u2e1u2c1w2e1t3g1t2e1u2e1x2c1w2g192e1s1f1y2e1v2e1s2e1s2f1w2e1t2g1q2c1v1e1u2e1r2e1s2e1u2c102e1s3e172e1u2g122c1u3e172e1r3g1t2e1u2d192e1s3f1v2e1s3f192c1u3f1e2e1q3f192e1u3d1c2e1s1f172e1t3g182c1u3f182e1q3f1v2e1u1d192e1t3f1a2e1s3f1a2c1u3f142e1q3f192e1w3d1c2e1s3f162e1s3f1j2c1u3f192e1q3f1d2e1u3d192e1s3f1r2e1s3f1b2c1u3f162e1q3f172e1v3c1k2e1s2f152e1s3f1b2c1u3f172e1s2e1u2e1u2c1g1e1f1e1k1g1c1e1m2d1f3e1b2e121e121f163d1u3f1c1g1s1f1w2f1l2d1a3g121d1d1g1e3f1r1c1d3e1f3f1h3f131f1q1c1k1g1h3f1e2e181e1e1d181g1s1f1h3e1f1e1i3e161f1h3g171f1f3f1u1e1r3e1f1e1d3f1f3f1e3d1e3f1f3f1d2f1b2f1g3d1g3f1e1g1q1e1f1e161d1u1g1f3f1p3d1f3f1e3c1e3e181e1d2g1b2e1e1d1d3f1g2e1d2e1f1g1m1c1f3e1g1f1e2e1j1f1v2c1u1g1j3e1b1f181e1f3e1k3g1f1e1e3f1t2g1l2c1w2e1i2e1q1g102e1v3e1m2e1u1g1d2f1u2g1v2c1w2e1u2e1r2g152e1v2e1l2e1s2g1b1f1u2g1u2c1v1g1j2e1s2f102e1v1c1m2e1s2g1a1e172f192d1t2e1f341t1d3g193f1o1e191e133e143e141g1g3f171g1e2e1m1e1x3g1g3g152e1t3e1x2e1u2e1t2e1u3g192c1w1f1y2e1r2g1q2e1s2d102e1t2g1j2e1t1e1u2c1v2e1s2e1q2e1y2e1s3c1b2e1u2g1y2e1s3e172c1v3g1z2e1q2e1w2e1u1c1q2e1t2e132e1s1e1l2c1u3g1f2e1s1e1e2e1s3e1i2e1u1f1v2e1t2g1j2c1w2g1t2e1s3g1z2e1s2c1e2e1u1e1v2e1u2e1h2c1u1f182e1s3f1a2e1s3d1b2e1s3f182e1s3f192c1w3f1l2e1q3f192e1t3c1f2e1s1f162e1u3g152c1u3f172e1r3f1d2e1s3d1a2e1u3g1y2e1s3f182c1u3f192e1q3f182e1s3c192e1s3f152e1s3e1d2c1u3f172e1q3f1l2e1s3d1b2e1u3f1d2e1s3f172c1u3f1j2e1q2f182e1u3d1d2e1s3f152e1s3f1b2c1u2e1z2e1q2e1k1e1h3c1e1f1e1e1f3d1f3f1f3c1d2e143e1y3d1d3g181d1b1g1f1g1e3f1g1e1f3d1e2g1k3e1j1e1i1f1h1e1e3e1h3e191f1k1f183d1e3e1a1f1e3f141g1h3c141g1w2f1h1f181e121b1f3g1e3f1k1e1b3e1f3e1l3g1e3f1c3g1e3f1e3c1e3f1f1f1i3f1k3f1w1e162e1e1e193e1d1g1h3d1r3e1y3g1d2f132e1a3d162f1f3e1e3e1i3e1f1c1u2g1m1e1a1g1b3f143e1f1g1i1f1i1f1h1e121e163e1a1f1p1g1b1e1e1c1u3e1u1e1t2e1t3e1q2c1u1e1y2e1s1e1j2e1u2e1h3f1t1g132e1t2e1r2c1u1e1z2e1q1g1y2e1u1e1m3f1u1e1u2e1u1g1q2c1u3f1f2e1r2g1t2e1s1c1m2f143e163f193f1h121q2f1g1g1g3g1w1g1l1d1b1e1j1f191f1h1f1f1c1j1e1u1g1o3e1u3f1g2c1s2e1i2e1s3e112e1w1c1v2e1u1f1r2e1v1e1i2c1s1f1x2e1t2e1r2e1w1e1v2e1t2e152e1w2e102c1s3e1e2e1u2e1t2e1u1d162e1s2e1u2e1u2g1m2c1t3e1z2e1u3g102e1v2c1y2e1s3f1k2e1u2e1a2c1s3e1r2e1u2e1s2e1v1c1g2e1u3e142e1w2e112c1s2e1b2e1u2g1g2e1v3e1j2e1s3f182e1u3e1e2c1s1f192e1s3g1d2e1u3d182e1t3e192e1u3f192c1s3e1h2e1s3f1a2e1w3c1d2e1s1f192e1u3e1j2c1s3f182e1u3f1b2e1u3d192e1s3e1z2e1u2f1b2c1s3f1e2e1s1f1b2e1u3e1c2e1s1f172e1v3g1d2c1s2f182e1s3f1a2e1u2d172e1t3e1j2e1u2f1a2c1s3f192e1s3f192e1u3d1t2e1s2e1u2e1h1e1h3b143g1f2f182g1e2g1e1c1i1f1m3f1y2g1e2e1e1e1c1f1h1e1b2f1m1g1a3d1d3e1a1f1g3g161g1j3e121f1w2f1j3f1a3e141b1f1f1e3f1p1e1d3e1f3e1j3f131f1o1e1k1g1j3d1g2e181e1c2f181g1u1d1j3e181e181e1a1e1a1c1s1g1j1e1a1e1c1g143b1f1f1c1e1i2f1e3f1h3c121f143g1d3e1e3g1g3e1j1g1f2e192f161f1e1c1f3e1f2f1i3f1c1g1i1d1f1g1k1f1h2e1u3g1l3e152f1e3f142f1g2g1e1c1f3f1y2e1u1g102e1v2e1f2e1u3e1f2e1w2e122c1k3e1h2e1s3f1w2e1u1c1x2e1t1e1s2e1w1e1v2c1f3f1u2e1t3g1x2e1v2c1j2e1u1e1i2e1v3e1f2c1f3e182f172e1t3f1j171h2t2q1u1t2u1u2k1v2j2g16', 'ea17c2b35333y351y391g27222q1b3x2e1d3q02111o27213q2o272e2q2o2y253a1g25211i2e2b381c2x3u11311o280y11313b233x213b381c2x3u11311o21182v312p11223a251s27353e16212x253e1y2u2911113a251s27353e1621281y12111611153x3b2q1921361u3u2v213p113w263e153x3b2q19212612111o25113w28113w28113w28113w2q213b233x2e2b233x2b233x27203b3x2e11112435163q02222e2b3y141o2e1d3q01212m2411311o2111113u2911211f3b3x2e1a1y12222x3w2u352e12111e1o11153x29231v322q14252722352e182835211f1g1a2e1631281y111211322u2911121o3u370131243516351t2q3f1q1g1k1f1f1e1q3f1l2g1s3f1f3g183g1k2g1k1e1j2f1e3e1s3f1k2e1v2e112e1u2g1y2e1t2e102e1u3f1k2e1s2e182e1u3e1t2e1u2e1q2e1t1e1i2e1w2e142e1u2e1z2e1u2e1d2e1u2g1e2e1t3g1l2e1u2e1u2e1s1g142e1w2g1t2e1s2e1z2e1u2e1i2e1w3e1t2e1u2g1w2e1v2e1v2e1u2g1g2e1t2e1z2e1w2f1y2e1u2e182e1u2g1z2e1u2g1b2e1s1f182e1w3g1v2e1s3f192e1u3f1b2e1s1f182e1s3f112e1u2f192e1s3e1i2e1u2f192e1u3f142e1s2f192e1v3f1l2e1s2f192e1w3f162e1s3f192e1u3e1e2e1u2f172e1u3f1d2e1u3f192e1t3f1f2e1s1f192e1u3g1b2e1s2f172e1v3f112e1s3f162e1u3g1c2e1u2f182e1u3g1v2e1u3f192e1s3f192e1s3f1w2e1u2e1u2e1f1e1h3f1i1g1i3g1u1f142g1s2g1f3e1k3g121f143f1g2e1i3e1u1g1q3g1f1e1j3e1e1f1d3g1j2f181f121e1b3f1e1g1g3f1g2e1f3f1u3f1m3e1l1e1i1f1h1f1e1e1j3e1b1f1k1f183f1e3e1c1g1g3g141f1h1e141e1c1e1a1e1a1e1a3f1r1g1u1f1b1f1b1f1m3f1e3f1i1g1d1f1m3e122e163f121e1f3f1f1f1k1f1v1g1u1e1d1f1a3g1s1e1u3e1i3f1e3g141f1i1g1u1f1i3e1u1f1h1f1c1e1e1f1m3e123g1f1f1g1g1b3e1u2e1u1g1s2e1t1e1f2e1u2g102e1t2e1f2e1z2g1v2e1u3f1q2e1u3g1x2e1u2e1v2e1t2e1y2e1h3e1s2e1s1e1h2e1t2e1x2e1w2e1h2e1t3g1u2e1h2f1z3f1x2e1z3e12141k123e161e1k3g1i2g1f3f142e1i3f1a1g1i1f1q1g1j1e123g1c1e1t3g142e1u2g1r2e1s2e112e1u2e1g2e1u3e1t2e1w2g1w2e1t2e1t2e1u2g1i2e1t2e1x2e1u2f1y2e1w2e182e1s2g1x2e1u2g1d2e1s1f162e1s3e1z2e1u1g1g2e1u1e1u2e1t2e1m2e1u2e162e1s2g1m2e1u1f192e1u2g1m2e1u1g1z2e1s2g1y2e1s3f102e1u2e1w2e1s1f1k2e1r2g1x2e1t3g1g2e1s1f192e1w3g182e1s3f192e1t3g182e1s3f172e1u3f1c2e1u2f172e1u3g1g2e1s3f1b2e1u3f1d2e1s3f182e1w3g1e2e1s3f172e1s3f192e1s2f172e1u3e1a2e1u3f182e1s3f1a2e1s3f1a2e1s3f1a2e1s1f172e1v3f1b2e1s3f192e1s3f172e1s2f172e1u3g1w2e1u1f172e1s3f1e2e1s3f192e1s3e1z2e1s3e1w2e1m1e123f1l1g1k1f143g141g141g1s2g1f1f143g123g1i1f1d3e1d2f161g1e1f1b1f1q3f1f1g1g3f1i3e1d1e1f1e1f1g1m3e1e1e183f133g1h2e1b1f1m3f1f1e1g2e1s2g1j3g1f3e1j3e1f1f1b1g1j1f1a1e122e191f1b2f1b1f1d1f1b3e181e1d3f183f173e1i1f1s3f1f2g1f3g1h1e1f3e1b3e191f1r1g1u3g123e1u1f143f1f3f191g1h1f1s2f1j2g1m1e1c3g181f1m3g1d1e1h3e1e1e1g2e1f3g1h2e1i1g1e3f1f2e182e1f2e1s1e122e1s2f1f2e1s1g1i2e1u2e1t2e171g1k2e1s3e1y2e1u1e1f2e1s2g1l2e1w2e1h2e192e1m2e1s2e1l2e1s2g172e1s3g1t2e1w1g1k2e1v3f183f182e112e191j2s2f1g3g1e1e1i3e1m1g1l1f1m1e1f3e1g1f1g1f1i2e1j1g1d2e152e1u1e1q2e1v2e172e1s1e1l2e1u3g1h2e1w1e1e2e1s3g1i2e1w1f1z2e1t2g1j2e1w2g1v2e1w2g1z2e1s2e1e2e1w1e1z2e1u2e1h2e1u1e1w2e1u2e1w2e1t2e122e1w2e112e1t2f1u2e1u1e172e1v2g1y2e1u2e172e1v3g1w2e1u2e1k2e1w1e112e1w1e1x2e1s3f1y2e1v2e1v2e1s2f172e1v3e112e1u3f182e1s3e1d2e1u3f1b2e1u3f1d2e1u3f1a2e1u3f1d2e1s2f192e1v3f112e1s1f172e1u3e1m2e1u3f172e1s3f182e1u1f1b2e1s3f152e1u3f1a2e1u3f1v2e1s3f1b2e1u3g1i2e1s2f192e1u3f1d2e1u3f172e1s3e1s2e1u3f1b2e1u3f1t2e1u3f1a2e1w3g1y2e1s3f192e1u3f1b2e1s3f172e1u2e1w2e1u2g1f1e123g1b3f1s1e1r3f1r3d1d3f1e3e1d2e1r3e1y2f1k3g1e1e1e1g1r3e1d1e183f151g1j2e1d1f1k1f1f1e1i2e1u1g1e3g1f1e1j3e1f2f1d3g1l3f181e122e1b1f1e1g1i3f1g2e1f3f1u1f1m3e1q1e1i1f1h1f1e2f1m3g1m1g1k3f1k3f1e3f1e3g1l3g1h3f141e1e2g1h3f1u3e1d1e1f1e1k2f141g163g1f2f1b1f1j3d1u2f1u1f1f3e1d2f161f1q1g1c1g1i3e1j1e1e2g1e3e1z3e122e191f1u2f1d3f1y1g1s2g1f3e112e1v2g1h2e1u2g1u2e1u2e182e1v2g1x2e1t1e113e1t1e172e1t2e1i2e1w2f1j2e1w1g1h2e1t2g103e1w2g1a2e1u1g1s2e1u3e1j2e1u2g172e1s3f103f1z2f1x3e193e141k1v2u1j2e2t1h1r1d1v2s161', '746fddea66ea1fdde64e0b700f8f8bc3'));
  var v = {
    log: 0,
    logout: 0,
    screencolor: "#000000",
    border: 0,
    bordersize: 1,
    bordercolor: "#000000",
    bgcolor: "#ffffff",
    rounding: 0,
    screenclick: 1,
    doubleclick: 1,
    player: 0,
    stopotherplayers: 1,
    iframe: 0,
    fzoom: 1,
    toolbar: {
      customimage: 0,
      color: "000000",
      a: "0.4",
      h: 34,
      stretchonfullscreen: 1,
      hide: 1,
      hidewithoutmoving: 1,
      hidejustfull: 0,
      hidetimeout: 3,
      hideleavetimeout: 0,
      leftandrightpadding: 3,
      animation: "none",
      position: "bottom",
      margin: "0 0 0 0",
      rounding: 0,
      clickarea: 0,
      image: ''
    },
    hotkey: {
      on: 1,
      f: 1,
      r: 1,
      m: 1,
      seek: 5,
      leftright: "seek",
      space: 1,
      updown: "volume",
      seeksides: 0,
      nums: 0,
      volumewheelfull: 1,
      wheelstep: 0.2
    },
    playlist: {
      bgcolor: "000000",
      bgcolorover: "333333",
      bga: 0.9,
      bgaover: -1,
      position: "left",
      margin: "0 0 0 0",
      padding: "7 15 7 15",
      color: "ffffff",
      font: "Libre Franklin, helvetica, sans-serif",
      fontsize: 12,
      valuefontsize: 10,
      letterspacing: 0,
      valuecolor: "ffdd1f",
      borderbottom: 1,
      bordercolor: "444444",
      a: 1,
      aover: -1,
      posters: 0,
      posterheight: 100,
      posterwidth: 177,
      postertitleonhover: 1,
      historytitlea: 1,
      historycolor: "999999",
      historybgcolor: "000000",
      historybga: -1,
      historybgaover: -1,
      historytitlestrike: 0,
      activeiconsize: 3,
      headfontsize: 16,
      headbordercolor: "888888",
      rounding: 0,
      scrollarrows: 1,
      scrollarrowsize: 1,
      scrollarrowcolor: "ffffff",
      scrollarrowbg: 0,
      scrollarrowbgcolor: "000000",
      scrollarrowgradient: 1,
      scrollarrowbgover: 0,
      scrollarrowbgovercolor: "333333",
      limitwidth: 0,
      limitmaxwidth: 200,
      autoplaylist: 0,
      always: 0,
      alwaysjustpause: 0,
      alwaysnotfullscreen: 0,
      autohide: 1,
      floatleft: 0,
      floatheight: 50,
      floatmarginright: 0,
      floatlimitwidth: 1,
      floatwidth: 170,
      marginbg: 0,
      marginbgcolor: "333333",
      marginbgpadding: "0 0 0 0",
      hmaxk: 30,
      bordercolor: "666666"
    },
    settings: {
      bgcolor: "000000",
      bgcolorover: "222222",
      bga: 0.7,
      bgaover: -1,
      font: "Libre Franklin, helvetica, sans-serif",
      position: "bottom-right",
      margin: "0 0 0 0",
      padding: "7 10 7 15",
      color: "ffffff",
      fontsize: 12,
      headfontsize: 16,
      valuefontsize: 10,
      letterspacing: 0,
      titlecolor: "ffffff",
      valuecolor: "ffdd1f",
      a: 1,
      scale: 5,
      aover: -1,
      activeicon: 1,
      activeiconsize: 3,
      scrollarrows: 1,
      scrollarrowsize: 1,
      scrollarrowcolor: "ffffff",
      limitwidth: 0,
      limitmaxwidth: 200,
      rounding: 0,
      settings1: 1,
      settings1action: "quality",
      settings2: 1,
      settings2action: "audiotrack",
      settings3: 1,
      settings3action: "subtitle",
      settings4: 0,
      settings4action: "download",
      settings5: 0,
      settings5action: "speed",
      hmaxk: 30,
      bordercolor: "666666"
    },
    logo: {
      position: "bottom-right",
      margin: "0 10 50 0"
    },
    volume: 0.8,
    volumestore: 1,
    mutestore: 1,
    loop: 0,
    shuffle: 0,
    finishrewind: 1,
    mute: 0,
    preload: 0,
    preloadhls: 0,
    preloaddash: 0,
    autoplay: 0,
    autoplaymute: 0,
    showtitleplaylist: 0,
    addtitleplaylistbr: 0,
    addtitleplaylist: 0,
    file_separator: ',',
    file2_separator: ';',
    file3_separator: '//',
    nativehlsios: 1,
    qbr1: '[',
    qbr2: ']',
    poster_scale: 'fill',
    poster_a: 1,
    poster_aover: -1,
    poster_float: 0,
    poster_floatmargin: '20 0 0 20',
    poster_floatposition: 'top-left',
    poster_floatwidth: 100,
    poster_floatheight: 100,
    poster_floatbgcolor: -1,
    posteronpause: 0,
    alerts: 1,
    alertsbgcolor: "ff0000",
    alertscolor: "ffffff",
    alertspaddingv: 5,
    alertspaddingh: 10,
    alertsbga: 1,
    alertsfontsize: 10,
    rightclick: 0,
    youtubeposter: 1,
    ytautoquality: 1,
    posterhide: 1,
    aspect: '16x9',
    landfullmobile: 0,
    hlschangequality: 'next',
    hlsautoquality: 1,
    hlsdebug: 0,
    hlscookies: 0,
    hlslowquality: 0,
    hlsquality: 1,
    hlsaudio: 1,
    livewakeuptime: 5,
    reload: 0,
    reloadlive: 1,
    livewakeup: 0,
    reloadtimeout: 5,
    dashdebug: 0,
    dashcookies: 0,
    dashlowquality: 0,
    dashquality: 1,
    dashaudio: 1,
    nameofhlsquality: 0,
    nameofyoutubequality: 0,
    nameofdashquality: 0,
    qualitystore: 1,
    eventstracker: 0,
    events: "PlayerjsEvents",
    errortimeout: 5000,
    container_h_procent: '100%',
    ga: 0,
    ga_event: {
      init: 1,
      error: 0,
      full: 0,
      end: 0,
      play: 1,
      play25: 0,
      play50: 0,
      play75: 0,
      vast_skip: 0,
      vast_click: 0,
      vast_impression: 0
    },
    yamtr_event: {
      init: 1,
      error: 0,
      full: 0,
      end: 0,
      play: 1,
      play25: 0,
      play50: 0,
      play75: 0
    },
    ga_proc: 100,
    playsinlineonmobile: 1,
    subtitle_start: 1,
    sub_size: 14,
    sub_sizeproc: '100%',
    sub_big_fullscreen: 1,
    sub_size_fullscreen: 20,
    sub_bg: 1,
    sub_bga: 0.7,
    sub_bgo: 2,
    sub_bgpadding: 3,
    sub_bottom: 10,
    sub_color: "ffffff",
    sub_color2: "ffeeab",
    sub_bgcolor: "000000",
    sub_shadow: 0,
    sub_weight: 400,
    sub_designstore: 1,
    sub_shift: 0,
    sub_store: 1,
    sub_off: 1,
    sharetitle: 1,
    sharetop: 0.3,
    shareiconscale: 3,
    shareiconscaleover: 4,
    shareiconmargin: 5,
    embedsize: 0,
    embedwidth: 560,
    embedheight: 315,
    fullonplay: 0,
    fullonplaymobile: 1,
    fullblack: 1,
    nativefullios: 1,
    hidestartbutios: 1,
    thumbs: 0,
    thumb_width: 160,
    thumb_height: 90,
    thumb_border: 0,
    thumb_borderwidth: 1,
    thumb_bordercolor: "333333",
    thumb_radius: 0,
    thumb_shadow: 1,
    enc2: '2',
    enc3: '3',
    vast_timeout: 10,
    vast_pauseonclick: 1,
    vast_closeonclick: 1,
    vast_volume: -1,
    vast_title: 1,
    vast_preroll_limit: 1,
    vast_preroll_andlimit: -1,
    vast_prerolltimebreak: 0,
    vast_prerolltbimp: 1,
    vast_preroll_counter: 0,
    vast_pauseroll_limit: 1,
    vast_pauserolltimebreak: 0,
    vast_pauserolltbimp: 1,
    vast_pauseroll_counter: 0,
    vast_postroll_limit: 1,
    vast_postrolltimebreak: 0,
    vast_postrolltbimp: 1,
    vast_postroll_counter: 0,
    vast_playroll_limit: 1,
    vast_playroll_counter: 0,
    vast_midroll_limit: 1,
    vast_midroll_counter: 0,
    vast_midrolltimebreak: 0,
    vast_midrolltbimp: 1,
    vast_introtimebreak: 0,
    vast_introtbimp: 1,
    vast_linktxtbgcolor: "#ffffff",
    vast_linktxtcolor: "#000000",
    vast_skipbgcolor: "#000000",
    vast_skipcolor: "#ffffff",
    vast_titlebgcolor: "#000000",
    vast_titlecolor: "#ffffff",
    vast_xbgcolor: "#000000",
    vast_xcolor: "#ffffff",
    vast_progressbgcolor: "#000000",
    vast_progresscolor: "#ffffff",
    vast_volumebgcolor: "#000000",
    vast_volumecolor: "#ffffff",
    vast_linktxtonmobile: 1,
    vast_unmutehover: 0,
    vast_unmutebutonce: 1,
    vast_default_volume: 0.5,
    vast_unmutebutbgcolor: "#ffffff",
    vast_unmutebutcolor: "#000000",
    vast_openclick: 1,
    vast_preroll_vmap: 1,
    vast_pauseroll_vmap: 1,
    vast_postroll_vmap: 1,
    vast_midroll_vmap: 1,
    vpaid_timeout: 10,
    vpaid_timeout2: -1,
    vast_resound: 1,
    vpaid_slotinframe: 1,
    eventstrackervast: 0,
    pauserollonplay: 0,
    partnerprerollor: "or",
    partnerpauserollor: "or",
    partnerpostrollor: "or",
    partnermidrollor: "or",
    midrollpoint: "50%",
    introskiptime: -1,
    introclickable: 0,
    introclosetime: -1,
    introtitle: 0,
    introtxt: 0,
    rc_version: 1,
    rc_anyway: 0,
    heartbeatinterval: 30,
    default_channel: 2,
    tagsinterval: 10,
    playedquartile: 0,
    minivis: 30,
    lsfullstart: 1,
    lsfullplay: 1,
    captions: 0,
    pip: {
      on: 0,
      bgcolor: "000000",
      border: 0,
      shadow: 2,
      bordercolor: "000000",
      position: "left",
      margin: "20 0 0 20",
      width: 150,
      hide: 0
    }
  };
  v.lang = "en";
  var Settings = function(is) {
    var i;
    var style = [];
    var f = [];
    var fbg = [];
    var fimg = [];
    var ftitle = [];
    var fvalue = [];
    var faction = [];
    var f2 = [];
    var f2bg = [];
    var f2img = [];
    var f2title = [];
    var f2value = [];
    var f2action = [];
    var stout = [];
    var is_visible = false;
    var open_action;
    var open_settings = -1;
    var empty = true;
    var key = is;
    var iset = is == "settings";
    var playlist;
    var shuffle = [];
    var shuffle_ = [];
    var plid = '';
    var plfolder = '';
    var plx = -1;
    var sub_settings_on = false;
    var sub_settings = false;
    var autonextopenfolder = false;
    var autoprevopenfolder = false;
    var justshow = false;
    var removed = false;
    var showinterval;
    var arrinterval;
    var wheelinterval;
    var hidetimeout;
    var settimer;
    var shr = [];
    var clr = [];
    var iclr = 0;
    var _cstm = 0;
    var srch;
    var evntclk = "click";
    var evntovr = (o.system.mobile ? "touchstart" : "mouseover");
    var evntout = (o.system.mobile ? "touchend" : "mouseout");
    style = UpdateObject(style, v[is]);
    style = MarginPadding(v[is], 'margin', 'margin');
    style = MarginPadding(v[is], 'marginproc', 'marginproc');
    style = MarginPadding(v[is], 'mrgnprs', 'mrgnprs');
    if (style.marginbg == 0) {
      style.marginbgpadding = "0 0 0 0"
    }
    style = MarginPadding(v[is], 'bgpadding', 'marginbgpadding');
    style = MarginPadding(v[is], 'padding', 'padding');
    style.scrollwidth = 0;
    var _activeIcon = "<svg style='margin-top:3px' width='" + style.activeiconsize * 2 + "' height='" + (style.activeiconsize * 2 > style.valuefontsize ? (style.activeiconsize * 2) : style.valuefontsize) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><ellipse ry='" + (style.activeiconsize) + "' rx='" + style.activeiconsize + "' cy='" + (style.activeiconsize * 2 > style.valuefontsize ? (style.activeiconsize) : (style.valuefontsize / 2)) + "' cx='" + style.activeiconsize + "' fill='#" + style.valuecolor + "'/></g></svg>";
    var _xIcon = "<svg width='" + style.activeiconsize * 2 + "' height='" + style.valuefontsize + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' ><g><ellipse ry='" + (style.activeiconsize - 1) + "' rx='" + (style.activeiconsize - 1) + "' cy='" + (style.valuefontsize / 2 + 2) + "' cx='" + style.activeiconsize + "' stroke='#" + style.valuecolor + "' stroke='1' fill-opacity='0'/></g></svg>";
    var xx = 4;
    var _nextIcon = "<pjsdiv style='display:inline-block;'><svg width='" + (xx + 2) + "' height='" + (style.valuefontsize) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><line x1='1' y1='" + (style.valuefontsize / 2 - xx) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/><line x1='" + xx + "' y1='" + (style.valuefontsize / 2) + "' x2='1' y2='" + (style.valuefontsize / 2 + xx) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/></g></svg></pjsdiv>";
    var _prevIcon = "<pjsdiv style='display:inline-block;'><svg width='" + (xx + 10) + "' height='" + (style.valuefontsize + 1) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' style='float:left'><g><line x1='1' y1='" + (style.valuefontsize / 2 + 2) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2 - xx + 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round' /><line x1='1' y1='" + (style.valuefontsize / 2 + 2) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2 + xx + 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/></g></svg></pjsdiv>";
    var bordercolor = hex2rgb(existv(style.bordercolor, 'ffffff'), existv(style.brda, 1));
    var container = createElement("div");
    o.frame.appendChild(container);
    css(container, {
      'overflow': 'hidden',
      'display': 'block',
      'opacity': 0,
      'border-radius': style.rounding
    });
    if (style.bgborder == 1) {
      css(container, {
        "border": "1px solid " + CheckColor(existv(style.bgbordercolor, 'ffffff'))
      })
    }
    var mpi = {};
    for (var i in o.menuproc) {
      if (o.menuproc.hasOwnProperty(i)) {
        mpi[o.menuproc[i]] = -1
      }
    }
    if (iset) {
      container.style.zIndex = 1100
    } else {
      container.style.zIndex = 99
    }
    var control = createElement("div");
    if (o.small) {
      style.smallfontsize > 0 ? style.fontsize = style.smallfontsize : '';
      style.floatwidthsmall > 0 ? style.floatwidth = style.floatwidthsmall : '';
      style.floatheightsmall > 0 ? style.floatheight = style.floatheightsmall : ''
    }
    css(control, {
      'position': 'relative',
      'top': 0,
      'left': 0,
      'display': 'block',
      'width': '100%',
      'padding-top': style.bgpaddingtop,
      'padding-right': style.bgpaddingright + (iset && style.floatleft == 1 ? 0 : 20),
      'padding-bottom': style.bgpaddingbottom,
      'padding-left': style.bgpaddingleft,
      'color': style.color,
      'font-size': style.fontsize * existv(v.globalfs, 1),
      'font-family': checkFont(style.font),
      'letter-spacing': style.letterspacing + 'px'
    });
    if (o.system.safari) {
      css(control, {
        'min-width': 220
      })
    }
    if (is !== "playlist") {
      css(control, {
        'overflow-y': 'scroll'
      })
    }
    container.appendChild(control);
    if (style.floatleft != 1) {
      var control2 = createElement("div");
      css(control2, {
        'display': 'block',
        'overflow': 'hidden',
        'border-radius': style.rounding
      });
      if (style.floatleft != 1) {
        if (o.system.safari) {
          css(control2, {
            'min-width': 220
          })
        }
      }
      control.appendChild(control2)
    }
    attr(control, {
      id: (v.id + "_" + is)
    });
    if (is == "playlist") {
      if (style.floatleft == 1) {
        css(control, {
          'width': '100%',
          'padding-right': style.bgpaddingright,
          'padding-bottom': style.bgpaddingbottom + 20,
          'overflow-x': 'scroll',
          'overflow-y': 'hidden',
          'white-space': 'nowrap'
        });
        css(container, {
          'width': o.screen_w - style.marginright - style.marginleft,
          'height': style.floatheight + style.bgpaddingtop + style.bgpaddingbottom
        })
      } else {
        css(control, {
          'overflow-y': 'scroll',
          'overflow-x': 'hidden'
        });
        if (style.width100 == 1) {
          ResizePlaylist()
        }
      }
      if (style.marginbg == 1) {
        css(container, {
          'background-color': style.marginbgcolor
        })
      }
      if (v.playlist.droplist == 1) {
        hide2(container)
      }
    }
    if (style.scrollarrows == 1) {
      var arr_up = createElement("div");
      var scrollbgcolor = hex2rgb(style.marginbg == 1 ? style.marginbgcolor : style.bgcolor);
      if (style.floatleft == 1) {
        StyleArrow(arr_up, 'to right, rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + '), rgba(' + scrollbgcolor + ',0)', 'left', 12, 5, 7, 10, 7, 10, 12, 15);
        arr_up.addEventListener(evntclk, ScrollLeft)
      } else {
        StyleArrow(arr_up, 'to bottom, rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + '), rgba(' + scrollbgcolor + ',0)', 'top', 5, 12, 10, 7, 10, 7, 15, 12);
        arr_up.addEventListener(evntclk, ScrollUp)
      }
      var arr_down = createElement("div");
      if (style.floatleft == 1) {
        StyleArrow(arr_down, 'to left, rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + '), rgba(' + scrollbgcolor + ',0)', 'right', 8, 5, 13, 10, 13, 10, 8, 15);
        arr_down.addEventListener(evntclk, ScrollRight)
      } else {
        StyleArrow(arr_down, 'to bottom, rgba(' + scrollbgcolor + ',0), rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + ')', 'bottom', 5, 8, 10, 13, 10, 13, 15, 8);
        arr_down.addEventListener(evntclk, ScrollDown)
      }
      arr_up.addEventListener("mouseover", ScrollOverOut);
      arr_up.addEventListener("mouseout", ScrollOverOut);
      arr_down.addEventListener("mouseover", ScrollOverOut);
      arr_down.addEventListener("mouseout", ScrollOverOut);
      control.addEventListener("wheel", Wheel);
      arr_up.addEventListener("mouseup", onMouseUp);
      arr_down.addEventListener("mouseup", onMouseUp);
      container.appendChild(arr_up);
      container.appendChild(arr_down);
      clearInterval(arrinterval);
      arrinterval = setInterval(ArrowsInterval, 1000)
    }
    control.addEventListener(evntovr, ControlOver);
    control.addEventListener(evntout, ControlOut);
    if (v.playlist.srch > 0 && !srch && is == "playlist") {
      if (typeof PluginPlSrch !== "undefined") {
        srch = new PluginPlSrch()
      }
    }
    if (iset) {
      for (var i = 1; i < 11; i++) {
        if (exist(v["control_" + is][is + i])) {
          v.settings[is + i] = v["control_" + is][is + i];
          if (exist(v["control_" + is][is + i + "title"])) {
            v.settings[is + i + "title"] = v["control_" + is][is + i + "title"]
          }
          if (exist(v["control_" + is][is + i + "action"])) {
            v.settings[is + i + "action"] = v["control_" + is][is + i + "action"]
          }
        }
        if (exist(v.settings[is + i])) {
          if (v.settings[is + i] == 1) {
            CreateItem('f', i);
            StyleItem(f[i], fbg[i], ftitle[i], fvalue[i], i);
            if (!exist(v.settings[is + i + "action"])) {
              v.settings[is + i + "action"] = "speed"
            }
            ftitle[i].innerHTML = Lang(v.settings[is + i + "action"]);
            if (exist(v.settings[is + i + "title"])) {
              if (v.settings[is + i + "title"] != '') {
                ftitle[i].innerHTML = v.settings[is + i + "title"]
              }
            }
            if (v.settings[is + i + "action"] == "share") {
              o.shareme = true
            }
            faction[i] = v.settings[is + i + "action"];
            Value(i);
            if (faction[i] == 'upload') {
              !o.upldfl ? o.upldfl = new PluginUpload() : '';
              if (exist(window.FileReader)) {
                ftitle[i].innerHTML = o.upldfl.Input();
                o.upldfl.Ch()
              }
            }
            if (faction[i] in o.menuproc) {
              mpi[faction[i]] = i
            }
            f[i].addEventListener(evntovr, onOver);
            f[i].addEventListener(evntout, onOut);
            f[i].addEventListener(evntclk, onClick);
            f[i].addEventListener("mouseup", onMouseUp);
            if (v.settings[is + i + "hide"] == 1) {
              css(f[i], {
                "height": 0
              })
            }
          }
        }
      }
    }

    function Wheel(x) {
      if (is == "playlist" && style.floatleft == 1 && x) {
        if (x.deltaX == 0 && x.deltaY != 0) {
          control.scrollLeft -= x.deltaY;
          x.preventDefault()
        }
      }
      clearInterval(wheelinterval);
      wheelinterval = setInterval(ControlOut, 3000);
      Retimer()
    }

    function ControlOver() {
      o.mouseDown = true
    }

    function ControlOut() {
      if (style.showovercontrol == 1) {
        clearTimeout(o.settingsovertimer);
        o.settingsovertimer = setTimeout(function() {
          if (!o.mouseDown && !o.setaction) {
            HideControl()
          }
        }, (v.settings.showoverto > 0 ? v.settings.showoverto * 1000 : (o.system.tv ? 2000 : 1000)))
      }
      o.mouseDown = false
    }

    function onOver(event) {
      if (o.fullscreen) {
        o.volumewheel ? o.actions.volumewheel(false) : ''
      }
      var i = event.target.getAttribute('fid');
      var x;
      if (i) {
        x = 'f'
      } else {
        if (event.target.getAttribute('f2id')) {
          i = event.target.getAttribute('f2id');
          x = 'f2'
        }
      }
      if (i) {
        i = parseInt(i);
        var opn = false;
        if (exist(eval(x)[i])) {
          if (style.bgaover > -1) {
            css(eval(x + 'bg')[i], {
              'opacity': style.bgaover
            })
          }
          if (exist2(style.bgbrovr)) {
            css(eval(x + 'bg')[i], {
              'filter': 'brightness(' + style.bgbrovr + ')'
            })
          }
          if (style.aover > -1) {
            css(eval(x + 'title')[i], {
              'opacity': style.aover
            });
            css(eval(x + 'value')[i], {
              'opacity': style.aover
            })
          }
          if (is == "playlist") {
            if (faction[i].indexOf("playlist") == 0) {
              var id = faction[i].substr(8);
              if (plid == id || plfolder == id) {
                css(eval(x + 'title')[i], {
                  'color': style.valuecolor
                });
                css(eval(x + 'value')[i], {
                  'color': style.valuecolor
                });
                opn = true
              } else {
                css(eval(x + 'title')[i], {
                  'color': style.color
                })
              }
            }
          }
          if (style.playbgcolored == 1 && exist(style.playbgcolor) && opn) {} else {
            css(eval(x + 'bg')[i], {
              'backgroundColor': style.bgcolorover
            })
          }
        }
      }
    };

    function onOut(event) {
      if (o.fullscreen) {
        o.volumewheel ? o.actions.volumewheel(true) : ''
      }
      var i = event.target.getAttribute('fid');
      var x;
      var opn = false;
      clearInterval(downin);
      Retimer();
      if (i) {
        x = 'f'
      } else {
        if (event.target.getAttribute('f2id')) {
          i = event.target.getAttribute('f2id');
          x = 'f2'
        }
      }
      if (i) {
        if (exist(eval(x)[i])) {
          if (style.bgaover > -1) {
            css(eval(x + 'bg')[i], {
              'opacity': style.bga
            })
          }
          if (exist2(style.bgbrovr)) {
            css(eval(x + 'bg')[i], {
              'filter': 'brightness(1)'
            })
          }
          if (style.aover > -1) {
            css(eval(x + 'title')[i], {
              'opacity': style.a
            });
            css(eval(x + 'value')[i], {
              'opacity': style.a
            })
          }
          if (is == "playlist") {
            if (faction[i].indexOf("playlist") == 0) {
              var id = faction[i].substr(8);
              if (plid == id || plfolder == id) {
                css(eval(x + 'title')[i], {
                  'color': style.valuecolor
                });
                css(eval(x + 'value')[i], {
                  'color': style.valuecolor
                });
                opn = true
              } else {
                if (exist(o.plhistory[id])) {
                  HistoryPlaylist(i)
                } else {
                  css(eval(x + 'title')[i], {
                    'color': style.color
                  })
                }
              }
            }
          }
          if (style.playbgcolored == 1 && exist(style.playbgcolor) && opn) {} else {
            css(eval(x + 'bg')[i], {
              'backgroundColor': o.plhistory[id] ? style.historybgcolor : style.bgcolor
            })
          }
        }
      }
    }

    function onClick(event) {
      if (!justshow) {
        var d = new Date();
        o.clicktime = d.getTime();
        var i = event.target.getAttribute('fid');
        if (i) {
          if (exist(f[i])) {
            if (exist(faction[i])) {
              if (is == "playlist") {
                o.seekto = undefined
              }
              Action(i, 0)
            }
          }
        }
        JsClk()
      }
    }
    var downi;
    var downin;

    function onMouseDown(event) {
      if (!justshow) {
        var i = event.target.getAttribute('f2id');
        if (i) {
          if (exist(f2action[i])) {
            if (open_action in o.menuproc) {
              downi = i;
              downin = setInterval(DownIn, 200)
            }
          }
        }
      }
    }

    function DownIn() {
      Action2(downi)
    }

    function onMouseUp(event) {
      clearInterval(downin);
      event.cancelBubble = true;
      Retimer()
    }

    function onClick2(event) {
      clearInterval(downin);
      if (!justshow) {
        var d = new Date();
        o.clicktime = d.getTime();
        var i = event.target.getAttribute('f2id');
        if (i) {
          if (i == 0) {
            if (f2action[0] == 'color') {
              Remove2();
              Action(iclr)
            } else {
              Home()
            }
          } else {
            if (exist(f2action[i])) {
              Action2(i)
            }
          }
        }
      }
    }

    function onClickSubtitle(event) {
      var x = event.target.getAttribute('setupx');
      if (x) {
        ActionOptions(x)
      }
    }

    function onClickSubtitle2(event) {
      Retimer();
      var i = event.target.getAttribute('f2id');
      if (exist(f2action[i])) {
        if (f2i("=", i) > 0) {
          var x = f2action[i].substr(0, f2i("=", i));
          var y = f2action[i].substr(f2i("=", i) + 1);
          var z = open_action + '_reset';
          if (!v[z]) {
            v[z] = []
          }
          if (!exist(v[z][x])) {
            v[z][x] = v[x] + ''
          }
          StyleSubtitle(x, y)
        }
      }
    };

    function StyleSubtitle(x, y) {
      v[x] = y;
      if (o.storage && v.sub_designstore == 1 && x != "sub_shift") {
        localStorage.setItem("pljs" + x, y)
      }
      if (o.casting && o.chromecast) {
        o.chromecast.Sub()
      }
      o.actions.RenewSubtitle();
      ActionOptions(x)
    }

    function onClickTimer2(event) {
      var i = event.target.getAttribute('f2id');
      var x = f2action[i];
      if (exist(x)) {
        if (x.indexOf("=") > 0) {
          var z = x.substr(0, x.indexOf("="));
          var y = x.substr(x.indexOf("=") + 1);
          v[z] = y;
          SubtitleTimerMenu();
          Value(o[open_action + '_i']);
          if (open_action == "offsettimer") {
            SettingsTimers("offsetwrite")
          }
        }
      }
    }

    function Value(i) {
      if (exist(faction[i])) {
        var _hide = false;
        var _show = false;
        var _value = '';
        if (iset) {
          if (faction[i] == "quality") {
            _value = o.media.getQuality()
          }
          if (faction[i] == "audiotrack") {
            _value = o.media.getAudioTrack()
          }
          if (faction[i] == "share") {
            _value = ' ';
            _show = true
          }
          if (faction[i] == "channel") {
            if (o.channels) {
              _value = o.files_channel[o.current_channel]
            }
          }
          if (faction[i] == "audiotrack" || faction[i] == "channel" || faction[i] == "quality") {
            if (o['files_' + faction[i]].length == 0) {
              _hide = true
            } else {
              if (o['files_' + faction[i]].length == 1 && (style.show1value != 1 || o['files_' + faction[i]][0] == 1)) {
                _hide = true
              } else {
                _show = true
              }
            }
          }
          if (faction[i] == "airplay") {
            if (!o.airplay) {
              _hide = true
            } else {
              _show = true
            }
          }
          if (faction[i] == "download") {
            if (o.file_type != 'native' && !v.download) {
              _hide = true
            } else {
              _show = true
            }
          }
          if (faction[i] == "subtitle") {
            if (exist(o.subs)) {
              _show = true;
              if (o.subtitle_on || v.sub_off == 1) {
                if (o.sbt) {
                  _value = o.files_subtitle[!o.subtitle_on ? o.sbt.ioff() : o.current_subtitle]
                }
              } else {
                _value = ''
              }
              var sxs = 0;
              for (var s = 0; s < o.subs.length; s++) {
                if (o.subs[s] != '') {
                  sxs++
                }
              }
              if (sxs == 1 && o.subload == 1) {
                sxs = 0
              }
              if (v.sub_upload == 1 && v.sub_upload0 == 1) {} else {
                if (sxs == 0) {
                  _hide = true;
                  _show = false
                }
              }
            } else {
              _hide = true
            }
          }
          if (faction[i] == "speed") {
            _value = o.files_speed[o.current_speed];
            _value == 1 && style.speed1 != 1 ? _value = Lang('normal') : '';
            _show = true;
            if (o.file_type == "vimeo" || (o.media.isLive() && style.speed4live != 1)) {
              _hide = true;
              _show = false
            }
          }
          if (faction[i] in o.menuproc) {
            _value = FltrVal(faction[i]);
            _show = true
          }
          if (faction[i].indexOf("timer") > 0) {
            var x = ' ';
            var y = ['hour', 'minute', 'second'];
            for (var z = 0; z < y.length; z++) {
              if (exist(v[faction[i] + y[z]])) {
                if (v[faction[i] + y[z]] !== ' ') {
                  x += (x !== ' ' ? ':' : '') + v[faction[i] + y[z]]
                }
              }
            }
            _value = x != ' 0:0' && x.indexOf(":") > -1 ? x : ' ';
            o[faction[i] + 'val'] = _value;
            _show = true
          }
        }
        fvalue[i].innerHTML = _value + (_value != '' && style.hidearrow != 1 ? ' &nbsp;<svg width="5px" height="7px" viewBox="-1 -1 5 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline stroke="#' + style.valuecolor + '" stroke-width="1" fill="none" points="0 0 3 3 0 6"></polyline></svg>' : '');
        var iset2 = iset && open_settings != -1;
        if (_hide) {
          hide(f[i]);
          if (iset) {
            stout[i] ? clearTimeout(stout[i]) : '';
            if (o.controls) {
              o.controls.SettingsN(i, false, _value)
            } else {
              stout[i] = setTimeout(function() {
                o.controls.SettingsN(i, false, _value)
              }, 200)
            }
          }
          css(f[i], {
            'position': 'absolute',
            'right': 0,
            'top': -100
          })
        }
        if (_show) {
          if (iset2) {} else {
            if (style.floatleft == 1) {
              css(f[i], {
                'display': 'inline-block'
              })
            } else {
              show(f[i])
            }
          }
          if (iset) {
            stout[i] ? clearTimeout(stout[i]) : '';
            if (o.controls) {
              o.controls.SettingsN(i, true, _value)
            } else {
              stout[i] = setTimeout(function() {
                o.controls.SettingsN(i, true, _value)
              }, 500)
            }
          }
          css(f[i], {
            'position': 'relative',
            'right': 0,
            'top': 0
          })
        }
        Resize()
      }
      for (var j = 1; j < f.length; j++) {
        if (f[j]) {
          if (isVisible(f[j])) {
            var refresh = false;
            empty ? refresh = true : '';
            empty = false;
            refresh && o.controls ? o.controls.refresh() : ''
          }
        }
      }
    };
    var stvs = 0;

    function Action(i, cstm, fa) {
      fa ? faction[i] = fa : '';
      if (exist(faction[i])) {
        o.setaction = true;
        Retimer();
        var x = VisibleItems();
        if (iset) {
          open_settings == -1 ? stvs = x[0] : x[0] = stvs
        }
        if (open_action != faction[i]) {
          open_action = faction[i];
          if (open_action == 'quality' || open_action == 'audiotrack' || open_action == 'subtitle' || open_action == 'speed' || open_action == 'channel' || open_action in o.menuproc || open_action.indexOf("timer") > 0 || open_action == 'share' || open_action == 'color') {
            open_settings = i;
            var z = copyObject(o['files_' + open_action]);
            if (open_action == "sleeptimer") {
              if (style.sleep2 == 1) {
                z = SettingsTimers("sleep2options")
              } else {
                z = SettingsTimers("sleepoptions")
              }
            }
            if (open_action == "offsettimer") {
              z = SettingsTimers("offsetoptions")
            }
            if (open_action == "share" && o.share) {
              z = [];
              for (var j = 1; j <= 16; j++) {
                if (exist(v["share" + j])) {
                  z.push(Lang(v["share" + j]));
                  shr[z.length] = v["share" + j]
                }
              }
            }
            if (open_action == "color" && o.tagvideo) {
              z = [];
              iclr = i;
              for (var j = 0; j < o.clr_options.length; j++) {
                var co = o.clr_options[j].substr(4);
                z.push(Lang(co));
                clr[z.length] = co
              }
            }
            var current = o['current_' + open_action];
            var pressed = o['pressed_' + open_action];
            for (var j = 1; j < f.length; j++) {
              if (f[j]) {
                f[j].style.display = "none"
              }
            }
            f2 = [];
            CreateItem('f2', 0);
            StyleItem(f2[0], f2bg[0], f2title[0], f2value[0], 0);
            css(f2[0], {
              "border-bottom": "1px solid " + (style.bordercolored == 1 ? bordercolor : "rgba(100,100,100,0.7)")
            });
            _cstm = cstm;
            var suboptns = false;
            f2title[0].innerHTML = (x[0] < 2 || _cstm == 1 || style.noprevicon == 1 ? '' : _prevIcon) + (v.settings[is + i + "title"] && v.settings[is + i + "title"] != '' ? v.settings[is + i + "title"] : Lang(v.settings[is + i + "action"])) + (o[faction[i] + 'val'] ? o[faction[i] + 'val'] : '');
            if (open_action == 'subtitle' && !o.dash_subs) {
              var prm = createElement("div");
              prm.innerHTML = Lang("options");
              css(prm, {
                'color': style.color,
                'pointerEvents': 'auto',
                'cursor': 'pointer'
              });
              f2value[0].appendChild(prm);
              prm.addEventListener(evntclk, SubtitleSettings);
              suboptns = true
            }
            if (open_action == 'subtitle' && v.sub_upload == 1 && !o.system.tv && exist(window.FileReader)) {
              var uf = createElement("div");
              !o.sbt ? o.sbt = new PluginSub() : '';
              uf.innerHTML = "<input type='file' id='" + v.id + "_subfile' accept='.vtt,.ass,.srt' style='display:none'/>" + Lang('upload');
              css(uf, {
                'color': style.color,
                'pointerEvents': 'auto',
                'cursor': 'pointer',
                'margin-left': (suboptns ? '10px' : 0)
              });
              f2value[0].appendChild(uf);
              o.subupld = document.getElementById(v.id + "_subfile");
              o.subupld.onchange = o.sbt.SubUpload;
              uf.addEventListener(evntclk, o.sbt.SubUpload)
            }
            if (suboptns) {
              if (sub_settings_on) {
                if (_cstm == 2) {
                  z = [];
                  hide2(f2[0])
                }
                for (j = 0; j < o.sub_options.length; j++) {
                  if (v.sub_all == 0 && o.sub_options[j] == "sub_color2") {} else {
                    z.push("pjslng_" + o.sub_options[j])
                  }
                }
              }
            }
            css(f2title[0], {
              'font-size': style.headfontsize * existv(v.globalfs, 1)
            });
            f2action[0] = "home";
            if (open_action in o.menuproc) {
              Menuproc(open_action);
              if (iclr > 0 && o.clr_options.indexOf('clr_' + open_action) > -1) {
                f2title[0].innerHTML = _prevIcon + Lang(open_action);
                f2action[0] = "color";
                f2value[0].innerHTML = FltrVal(open_action)
              }
              css(f2value[0], {
                'width': style.valuefontsize * 2.5,
                'text-align': 'right'
              })
            }
            if (_cstm != 1 && x[0] > 1) {
              f2[0].addEventListener(evntovr, onOver);
              f2[0].addEventListener(evntout, onOut);
              f2[0].addEventListener(evntclk, onClick2);
              f2[0].addEventListener("mouseup", onMouseUp)
            } else {
              css(f2[0], {
                "cursor": 'default'
              })
            }
            if (style.nohead == 1) {
              hide2(f2[0])
            }
            if (exist(z)) {
              var zz = '';
              for (j = 0; j < z.length; j++) {
                var y = j + 1;
                var toend = 0;
                var off = false;
                if (z[j] && trim(z[j]) != '') {
                  if (open_action == 'quality') {
                    if (z[j] == Lang("auto")) {
                      toend = 1
                    }
                    if (o.file_type == "hls" && v.hlsqhsort == 1) {
                      var iz = int(z[j]);
                      if (iz && iz < zz) {
                        toend = 2
                      }
                      zz = int(z[j])
                    }
                  }
                  CreateItem('f2', y, toend);
                  StyleItem(f2[y], f2bg[y], f2title[y], f2value[y], faction[i], i);
                  if (open_action == 'speed') {
                    z[j] == 1 && style.speed1 != 1 ? z[j] = Lang('normal') : ''
                  }
                  if (typeof(z[j]) == 'string') {
                    if (z[j].indexOf("<<<") == 0) {
                      z[j] = z[j].replace('<<<', '');
                      off = true
                    }
                    if (z[j].indexOf('timer') > 0) {
                      o[open_action + '_i'] = i
                    }
                    if (z[j].indexOf("pjslng") == 0) {
                      var tmp = z[j];
                      if (tmp.indexOf("timer") > 0) {
                        f2title[y].innerHTML = Lang(z[j].substr(tmp.indexOf("timer") + 5))
                      } else {
                        f2title[y].innerHTML = Lang(z[j].substr(7))
                      }
                      if (z[j] == 'pjslng_sub_sizeproc') {
                        css(f2[y], {
                          "border-top": "1px solid " + (style.bordercolored == 1 ? bordercolor : "rgba(100,100,100,0.7)")
                        })
                      }
                    } else {
                      f2title[y].innerHTML = z[j]
                    }
                  } else {
                    f2title[y].innerHTML = z[j]
                  }
                  f2action[y] = open_action + j;
                  if (current == j || pressed == j) {
                    f2value[y].innerHTML = current == j ? _activeIcon : _xIcon;
                    if (current == j) {
                      StyleActive(y)
                    }
                  }
                  if (typeof(z[j]) == 'string') {
                    if (z[j].indexOf("pjslng") == 0) {
                      var t = z[j].substr(7);
                      if (t.indexOf("color") > 0) {
                        f2value[y].innerHTML = "<div style='" + (v[t] == "000000" ? 'border:1px solid #999;height:8px;width:8px;' : 'height:10px;width:10px;') + ";background-color:" + (v[t].indexOf("#") == -1 ? '#' : '') + v[t] + ";border-radius:10px;'></div>"
                      } else {
                        if (exist(v[z[j].substr(7)])) {
                          f2value[y].innerHTML = v[z[j].substr(7)]
                        }
                      }
                    }
                    if (open_action == "share") {
                      if (exist(shr[y]) && o.share) {
                        f2value[y].innerHTML = o.share.icon(shr[y], 0.7, CheckColor(style.valuecolor))
                      }
                    }
                    if (open_action == "color") {
                      if (exist(clr[y]) && o.tagvideo) {
                        f2value[y].innerHTML = FltrVal(clr[y])
                      }
                    }
                    if (open_action == 'quality') {
                      if (z[j] == Lang("auto") && o.media.autoQuality()) {
                        StyleActive(y)
                      }
                      if (exist2(v.forbidden_quality)) {
                        var fq = v.forbidden_quality.split(",");
                        for (var k = 0; k < fq.length; k++) {
                          if (z[j].indexOf(fq[k]) > -1) {
                            hide2(f2[y])
                          }
                        }
                      }
                    }
                  }
                  var clck = "";
                  if (typeof(z[j]) == 'string') {
                    if (z[j].indexOf("pjslng") == 0) {
                      attr(f2[y], {
                        'f2parent': i,
                        'setupx': z[j].substr(7)
                      });
                      clck = "onClickSubtitle"
                    }
                  }
                  if (!off) {
                    f2[y].addEventListener(evntovr, onOver);
                    f2[y].addEventListener(evntout, onOut);
                    if (clck == "onClickSubtitle") {
                      f2[y].addEventListener(evntclk, onClickSubtitle)
                    } else {
                      f2[y].addEventListener(evntclk, onClick2)
                    }
                    f2[y].addEventListener("mouseup", onMouseUp);
                    f2[y].addEventListener("mousedown", onMouseDown)
                  } else {
                    css(f2[y], {
                      "cursor": "default"
                    })
                  }
                }
              }
            }
            Resize()
          }
          if (faction[i] == 'download') {
            o.actions.Download();
            open_action = -1
          }
          if (faction[i] == 'upload' && exist(o.upldfl)) {
            o.upldfl.open();
            open_action = -1
          }
          if (faction[i].indexOf('playlist') > -1) {
            var id = faction[i].substr(8);
            if (exist(o.playlist_dic[id])) {
              var fl = o.playlist_dic[id]['file'];
              if (exist(fl)) {
                if (fl.indexOf('seek:') == 0) {
                  if (id.indexOf('x' + plfolder) != 0) {
                    o.seekto = fl.substr(5);
                    playById(id.substr(0, id.lastIndexOf('-')) + '-0');
                    return
                  }
                  if (!o.start) {
                    o.seekto = fl.substr(5)
                  }
                  if (!o.play) {
                    o.actions.Play()
                  }
                  apiProcessor('seek', fl.substr(5));
                  HideControl();
                  return
                }
                ActionPlaylist(i);
                UpdateStart(id);
                SettingsTimers("offset");
                if (exist(o.playlist_dic[id]['redirect']) && v.redirect == 1 && v.redirectplaylist == 1) {
                  redirect(o.playlist_dic[id]['redirect'])
                } else {
                  UpdateVars0(id);
                  o.actions.NewFile(fl, (v.playlist.dontplay == 1 ? 1 : undefined));
                  v.playlist.always == 0 && v.playlist.autohide == 1 ? setTimeout(HideControl, 200) : '';
                  autonextopenfolder = false;
                  autoprevopenfolder = false;
                  UpdateVars(id)
                }
              } else {
                if (exist(o.playlist_dic[id]['folder'])) {
                  UpdatePlaylist(id);
                  if (autonextopenfolder) {
                    plx == -1 ? Action(0, 0) : ''
                  } else if (autoprevopenfolder) {
                    plx == -1 ? Action(parseInt(f.length) - 2, 0) : ''
                  }
                }
              }
            }
            if (o.droplist) {
              o.droplist.Update()
            }
          }
          if (faction[i] == 'airplay') {
            o.media.Airplay()
          }
        }
      }
    };
    this.UpdateTimer = function(x) {
      Value(o[x + '_i'])
    };

    function ActionOptions(x) {
      if (x == "sub_reset") {
        var z = open_action + '_reset';
        if (v[z]) {
          for (var y in v[z]) {
            if (v[z].hasOwnProperty(y)) {
              StyleSubtitle(y, v[z][y])
            }
          }
          SubtitleSettingsMenu()
        }
        return
      }
      Retimer();
      for (var i = 0; i < f2.length; i++) {
        if (f2[i]) {
          f2[i].style.display = "none"
        }
      }
      f2 = [];
      CreateItem('f2', 0);
      StyleItem(f2[0], f2bg[0], f2title[0], f2value[0], 0);
      css(f2[0], {
        "border-bottom": "1px solid " + (style.bordercolored == 1 ? bordercolor : "rgba(100,100,100,0.7)")
      });
      if (x.indexOf("timer") > 0) {
        f2[0].addEventListener(evntclk, SubtitleTimerMenu);
        f2title[0].innerHTML = Lang(x.substr(x.indexOf("timer") + 5))
      } else {
        f2[0].addEventListener(evntclk, SubtitleSettingsMenu);
        f2title[0].innerHTML = (style.noprevicon != 1 ? _prevIcon : '') + Lang(x)
      }
      css(f2title[0], {
        'font-size': style.headfontsize * existv(v.globalfs, 1)
      });
      f2[0].addEventListener(evntovr, onOver);
      f2[0].addEventListener(evntout, onOut);
      f2[0].addEventListener("mouseup", onMouseUp);
      var values = [];
      var valuefromlang = false;
      if (x.indexOf("size") > 0) {
        values = ['50%', '75%', '100%', '125%', '150%', '175%', '200%', '250%', '300%', '400%']
      }
      if (x.indexOf("bga") > 0) {
        values = ['0', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']
      }
      if (x.indexOf("shift") > 0) {
        for (var i = -5; i < 5.5; i += 0.5) {
          values.push(Math.round(i * 100) / 100)
        }
      }
      if (x.indexOf("weight") > 0) {
        values = [200, 400, 600]
      }
      if (x.indexOf("bottom") > 0) {
        for (i = 0; i < 21; i++) {
          values[i] = i * 10
        }
      }
      if (x.indexOf("hour") > 0) {
        for (i = 0; i < 24; i++) {
          values[i] = i
        }
      }
      if (x.indexOf("minute") > 0 || x.indexOf("second") > 0) {
        for (i = 0; i < 60; i++) {
          values[i] = i
        }
      }
      if (x.indexOf("shadow") > 0) {
        valuefromlang = true;
        values = [0, 1]
      }
      if (x.indexOf("color") > 0) {
        values = ['ffffff', 'ffeeab', '72ccf8', '62de50', 'faed54', 'feba54', 'e8bbff', 'ffc7d1', 'aaaaaa', 'd9bb8c', 'b3fee8', '4bd9ac', 'ffff00', 'D90000', '073DA0', '409829', '644082', '000000'];
        var vx = v[x].replace("#", "");
        if (values.indexOf(vx) == -1) {
          values[8] = vx
        }
      }
      for (y = 1; y <= values.length; y++) {
        CreateItem('f2', y, 0);
        StyleItem(f2[y], f2bg[y], f2title[y], f2value[y], y);
        css(f2value[y], {
          'padding-left': 0
        });
        if (x.indexOf("color") > 0 || x.indexOf("bottom") > 0 || x.indexOf("timer") > 0 || x.indexOf("shift") > 0) {
          y % 3 != 0 ? css(f2[y], {
            'float': 'left'
          }) : '';
          css(f2[y], {
            'width': '33.3%'
          });
          if (x.indexOf("color") > 0) {
            values[y - 1] = existv(v["subclr" + (y - 1)], values[y - 1]);
            f2title[y].innerHTML = "<div style='" + (values[y - 1] == "000000" ? 'border:1px solid #999;height:18px;width:18px;' : 'height:20px;width:20px;') + ";background-color:" + CheckColor(values[y - 1]) + ";border-radius:20px;'></div>";
            css(f2[y], {
              'line-height': 1
            })
          } else {
            f2title[y].innerHTML = values[y - 1]
          }
        } else {
          if (x.indexOf("weight") > 0) {
            f2title[y].innerHTML = values[y - 1]
          } else {
            y % 2 != 0 ? css(f2[y], {
              'float': 'left'
            }) : '';
            css(f2[y], {
              'width': '50%'
            });
            if (valuefromlang) {
              f2title[y].innerHTML = Lang(values[y - 1] + 'val')
            } else {
              f2title[y].innerHTML = values[y - 1]
            }
          }
        }
        f2action[y] = x + '=' + values[y - 1];
        if ((values[y - 1] == v[x] && String(v[x]) != " ") || v[x] == '#' + values[y - 1]) {
          f2value[y].innerHTML = _activeIcon;
          StyleActive(y)
        }
        f2[y].addEventListener(evntovr, onOver);
        f2[y].addEventListener(evntout, onOut);
        if (x.indexOf("timer") > 0) {
          f2[y].addEventListener(evntclk, onClickTimer2)
        } else {
          f2[y].addEventListener(evntclk, onClickSubtitle2)
        }
        f2[y].addEventListener("mouseup", onMouseUp)
      }
      Resize()
    }

    function StyleActive(x) {
      f2[x].classList.add('pjs-' + v.id + '-active-menu');
      css(f2title[x], {
        'color': style.valuecolor
      });
      BgBrAct(f2bg[x])
    }

    function UpdateVars0(id) {
      if (exist(o.playlist_dic[id]['poster'])) {
        v.poster = o.playlist_dic[id]['poster'];
        exist(v.poster) ? o.media.Poster(v.poster) : ''
      }
      if (exist(o.playlist_dic[id]['title'])) {
        o.titlestore = o.playlist_dic[id]['title']
      }
      MediaSess()
    }

    function UpdateVars(id) {
      var t = o.playlist_dic[id]['title'];
      if (exist(t)) {
        if (v.showtitleplaylist == 1) {
          if (o.actions.TitleTemplate(o.playlist_dic[id])) {} else {
            v.title = (v.addtitleplaylist == 1 && exist(o.maintitle) ? o.maintitle + (v.addtitleplaylistbr == 1 ? '<br>' : ' ') : '') + t
          }
          o.actions.Title('title')
        }
      }
      if (v.pointed == 1) {
        if (exist(o.playlist_dic[id]['points'])) {
          v.points = o.playlist_dic[id]['points']
        } else {
          v.points = []
        }
        o.controls.RenewPoints()
      }
      var xv = ['remove', 'thumbnails', 'download', 'skip', 'url', 'url2', 'url3', 'vars', 'embed', 'end', 'delete', 'heartbeat', 'outside', 'label', 'title2', 'customtext'];
      for (var i = 0; i < xv.length; i++) {
        if (exist(o.playlist_dic[id][xv[i]])) {
          v[xv[i]] = o.playlist_dic[id][xv[i]]
        } else {
          i < 4 ? v[xv[i]] = undefined : ''
        }
      }
      UpdateStart(id);
      var opid = o.playlist_dic[id];
      if (exist(opid['sub'])) {
        opid['subtitle'] = opid['sub']
      }
      if (exist(opid['subtitle'])) {
        o.actions.Subtitle(opid['subtitle'])
      }
      if (exist(opid['customtext'])) {
        o.controls.customTextPl()
      }
      o.actions.Ctxt(o.playlist_dic[id]);
      if (o.ctxtnk) {
        o.controls.upText(o.ctxtnk)
      }
      if (exist(opid['design'])) {
        apiProcessor('design', opid['design'])
      }
      if (exist(opid.volume)) {
        o.actions.Volume(opid.volume)
      }
    }

    function UpdateStart(id) {
      var x = o.playlist_dic[id]['start'];
      if (exist(x)) {
        if (x == "continue") {
          if (options.subtitle && !o.playlist_dic[id]['subtitle']) {
            o.playlist_dic[id]['subtitle'] = options.subtitle
          }
          if (o.media.time() > 0) {
            v.start = o.seekto = o.media.time()
          } else {
            options.start && !o.seekto ? o.seekto = options.start : v.start = 0
          }
        } else {
          v.start = o.seekto = x
        }
      } else {
        v.start = 0
      }
    }

    function ActionPlaylist(x) {
      if (plx == 0 && !o.start) {
        css(ftitle[plx], {
          'color': style.color
        });
        css(fbg[plx], {
          'backgroundColor': style.bgcolor
        });
        fvalue[plx].innerHTML = '';
        f[plx].classList.remove('pjs-' + v.id + '-active-pl')
      } else {
        o.plopenid = x;
        if (plx > -1) {
          HistoryPlaylist(plx)
        }
        if (plid != '') {
          if (!o.plhistory[plid] && exist(o.playlist_dic[plid])) {
            o.pldur2 += existv(o.playlist_dic[plid].duration, 0)
          }
          o.plhistory[plid] = true;
          shuffle = removebykey(shuffle, plid)
        }
      }
      if (faction[x]) {
        var id = faction[x].substr(8);
        fvalue[x].innerHTML = _activeIcon;
        f[x].classList.add('pjs-' + v.id + '-active-pl');
        css(ftitle[x], {
          'color': style.valuecolor,
          'text-decoration': 'none',
          'opacity': style.a
        });
        BgBrAct(fbg[x]);
        if (style.playbgcolored == 1 && exist(style.playbgcolor)) {
          css(fbg[x], {
            'backgroundColor': style.playbgcolor
          })
        }
        plx = x;
        plid = id;
        o.plid = plid;
        v.plstart = plid;
        o.playlist_title = ftitle[x].innerHTML;
        o.plopenid = plid;
        plfolder = o.playlist_dic[id]['pjs_parent'];
        if (o.controls) {
          o.controls.PlaylistControls()
        }
        if (srch) {
          srch.clear()
        }
      }
    }

    function UpdatePlaylist(id) {
      var x = id == 0 ? o.playlist : o.playlist_dic[id];
      o.plopenid = id;
      for (var i = 0; i < f.length; i++) {
        if (f[i]) {
          if (style.floatleft == 1) {
            control.removeChild(f[i])
          } else {
            control2.removeChild(f[i])
          }
          f[i] = null
        }
      }
      f = [];
      plx = -1;
      if (exist(x['folder'])) {
        var y = Object.keys(x['folder']).length;
        CreateItem('f', y);
        faction[y] = "playlistfolder";
        StyleItem(f[y], fbg[y], ftitle[y], fvalue[y], y);
        if (style.floatleft == 1) {
          css(f[y], {
            "width": (style.floatlimitwidth == 1 ? style.floatwidth : "auto"),
            "height": style.floatheight
          })
        }
        if (style.borderbottom == 1) {
          var hdbrdclr = "1px solid " + hex2rgb(style.headbordercolor, existv(style.brda, 1));
          if (style.floatleft == 1) {
            css(f[y], {
              "borderRight": hdbrdclr
            })
          } else {
            css(f[y], {
              "borderBottom": hdbrdclr
            })
          }
        }
        var tmp = x.title;
        if (style.noprevicon != 1) {
          tmp = _prevIcon + tmp
        }
        ftitle[y].innerHTML = tmp;
        css(ftitle[y], {
          'font-size': style.headfontsize * existv(v.globalfs, 1)
        });
        var p = x['pjs_parent'];
        f[y].addEventListener(evntovr, onOver);
        f[y].addEventListener(evntout, onOut);
        f[y].addEventListener(evntclk, function() {
          PlaylistBack(p)
        });
        x = x['folder']
      }
      var y = Object.keys(x).length;
      shuffle = [];
      shuffle_ = [];
      if (srch && style.floatleft != 1) {
        srch.remove(control2);
        if (y > v.playlist.srch) {
          srch.add(style, control2)
        }
      }
      for (var i = 0; i < y; i++) {
        CreateItem('f', i);
        faction[i] = "playlist" + x[i].id;
        if (!exist(o.plhistory[x[i].id]) && !exist(x[i].folder)) {
          shuffle[x[i].id] = i;
          shuffle_[x[i].id] = i
        }
        StyleItem(f[i], fbg[i], ftitle[i], fvalue[i], i);
        if (style.floatleft == 1) {
          if (style.activeiconsize == 0) {
            css(ftitle[i], {
              'width': style.floatwidth - style.paddingleft - style.paddingright
            });
            hide2(fvalue[i])
          }
          css(f[i], {
            "width": (style.floatlimitwidth == 1 ? style.floatwidth : "auto"),
            "height": style.floatheight
          })
        }
        ftitle[i].innerHTML = x[i].title ? x[i].title : '&nbsp;';
        if (v.timestore == 1 && v.playedstore == 1 && x[i].id) {
          if (o.playedstored) {
            if (o.playedstored.indexOf(x[i].id) > -1) {
              x[i].played = 1
            }
          }
        }
        if (exist(x[i].played)) {
          if (x[i].played == 1) {
            o.plhistory[x[i].id] = true;
            HistoryPlaylist(i)
          }
        }
        if (exist(x[i].folder)) {
          fvalue[i].innerHTML = _nextIcon;
          css(fvalue[i], {
            "color": style.color
          })
        }
        f[i].addEventListener(evntovr, onOver);
        f[i].addEventListener(evntout, onOut);
        f[i].addEventListener(evntclk, onClick);
        f[i].addEventListener("mouseup", onMouseUp);
        if (exist(o.plhistory[x[i].id])) {
          HistoryPlaylist(i)
        }
        if (plid == x[i].id) {
          ActionPlaylist(i)
        }
        if (plfolder == x[i].id) {
          css(ftitle[i], {
            'color': style.valuecolor
          });
          css(fvalue[i], {
            'color': style.valuecolor
          });
          BgBrAct(fbg[i])
        }
      }
      Resize();
      empty = false;
      o.controls ? o.controls.refresh() : ''
    }

    function BgBrAct(x) {
      if (exist2(style.bgbract) && x) {
        css(x, {
          "background-image": "linear-gradient(rgba(0, 0, 0, " + (1 - style.bgbract * 1) + ") 0 0)"
        })
      }
    }

    function StyleArrow(x, y, z, x1, y1, x2, y2, x3, y3, x4, y4) {
      var ww = (style.floatleft == 1 ? '40px' : '100%');
      var hh = (style.floatleft == 1 ? '100%' : '40px');
      css(x, {
        'position': 'absolute',
        'display': 'inline-block',
        'width': ww,
        'height': hh,
        'text-align': 'center'
      });
      if (style.scrollarrowgradient == 1) {
        css(x, {
          'background': '-moz-linear-gradient(' + y + ')',
          'background': '-webkit-linear-gradient(' + y + ')',
          'background': '-ms-linear-gradient(' + y + ')',
          'background': '-o-linear-gradient(' + y + ')',
          'background': 'linear-gradient(' + y + ')',
        })
      }
      if (style.floatleft == 1 || o.system.mobile) {
        css(x, {
          'cursor': 'pointer'
        })
      } else {
        css(x, {
          'pointer-events': 'none'
        })
      }
      if (style.limitwidth == 1) {
        css(x, {
          'max-width': style.limitmaxwidth + 'px!important'
        })
      }
      if (z == "top") {
        css(x, {
          'top': -1,
          'left': 0
        })
      }
      if (z == "bottom") {
        css(x, {
          'bottom': -1,
          'left': 0
        })
      }
      if (z == "left") {
        css(x, {
          'top': 0,
          'left': 0
        })
      }
      if (z == "right") {
        css(x, {
          'top': 0,
          'right': 0
        })
      }
      if (z == "right" || z == "left") {
        css(x, {
          'text-align': 'left',
          'padding-top': container.offsetHeight / 2 - 10
        })
      }
      x.innerHTML = "<center><div " + (style.scrollarrowbgover == 1 ? "onMouseOver='this.style.backgroundColor=\"#" + style.scrollarrowbgovercolor + "\"' onMouseOut='" + (style.scrollarrowbg == 1 ? "this.style.backgroundColor=\"#" + style.scrollarrowbgcolor : "this.style.background=\"none") + "\"'" : "") + " style='pointer-events:auto;cursor:pointer;width:20px;height:20px;border-radius:20px;" + (style.scrollarrowbg == 1 ? "background-color:#" + style.scrollarrowbgcolor + ";" : "") + (z == "top" ? "margin-top:10px;" : "") + (z == "bottom" ? "margin-top:10px;" : "") + (z == "right" ? "margin-left:0px;" : "") + (z == "left" ? "margin-right:0px;" : "") + "'><svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><line x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 + "' stroke='#" + style.scrollarrowcolor + "' stroke-width='" + style.scrollarrowsize + "' stroke-linecap='round'/><line x1='" + x3 + "' y1='" + y3 + "' x2='" + x4 + "' y2='" + y4 + "' stroke='#" + style.scrollarrowcolor + "' stroke-width='" + style.scrollarrowsize + "' stroke-linecap='round'/></g></svg></div></center>"
    }
    this.Arrows = function() {
      if (style.scrollarrows == 1) {
        Arrows()
      }
    };

    function ArrowsInterval() {
      if (is_visible) {
        Arrows()
      }
    }

    function Arrows(e) {
      if (style.scrollarrows == 1 && !removed) {
        if (style.floatleft == 1) {
          var h = control.scrollWidth;
          var m = container.offsetWidth + style.bgpaddingleft + style.bgpaddingright + 20;
          var t = control.scrollLeft
        } else {
          var h = control.scrollHeight;
          var m = container.offsetHeight;
          var t = control.scrollTop
        }
        if (h > m) {
          if (t > 0) {
            if (!isVisible(arr_up)) {
              show(arr_up);
              var m1 = new Motion({
                "mc": arr_up,
                "type": "alpha_div",
                "to": 1,
                "time": 0.3,
                "me": "arr_up"
              })
            }
          } else {
            if (isVisible(arr_up)) {
              var m2 = new Motion({
                "mc": arr_up,
                "type": "alpha_div",
                "to": 0,
                "time": 0.3,
                "me": "arr_up",
                "hide": true
              })
            }
            if (e) {
              e.deltaY < 0 ? e.preventDefault() : ''
            }
          }
          if (t < h - m - 10) {
            if (!isVisible(arr_down)) {
              show(arr_down);
              var m3 = new Motion({
                "mc": arr_down,
                "type": "alpha_div",
                "to": 1,
                "time": 0.3,
                "me": "arr_down"
              })
            }
          } else {
            if (isVisible(arr_down)) {
              var m4 = new Motion({
                "mc": arr_down,
                "type": "alpha_div",
                "to": 0,
                "time": 0.3,
                "me": "arr_down",
                "hide": true
              })
            }
            if (e) {
              e.deltaY > 0 ? e.preventDefault() : ''
            }
          }
        } else {
          hide(arr_up);
          hide(arr_down)
        }
      }
    }

    function ScrollDown() {
      var x = control.scrollTop + container.offsetHeight - 60;
      var m = new Motion({
        "mc": control,
        "type": "scroll",
        "to": x,
        "time": 0.3,
        "me": "scroll_down",
        "ease": "cubic"
      });
      setTimeout(Arrows, 1000)
    }

    function ScrollUp() {
      var x = control.scrollTop - container.offsetHeight + 60;
      var m = new Motion({
        "mc": control,
        "type": "scroll",
        "to": x,
        "time": 0.3,
        "me": "scroll_up",
        "ease": "cubic"
      });
      setTimeout(Arrows, 1000)
    }

    function ScrollOverOut(event) {
      clearTimeout(o.settingsovertimer);
      event.stopPropagation()
    }

    function ScrollRight() {
      var x = control.scrollLeft + (container.offsetWidth + style.bgpaddingleft + style.bgpaddingright) - 60;
      var m = new Motion({
        "mc": control,
        "type": "scrollleft",
        "to": x,
        "time": 0.3,
        "me": "scroll_right",
        "ease": "cubic"
      });
      setTimeout(Arrows, 1000)
    }

    function ScrollLeft() {
      var x = control.scrollLeft - (container.offsetWidth + style.bgpaddingleft + style.bgpaddingright) + 60;
      var m = new Motion({
        "mc": control,
        "type": "scrollleft",
        "to": x,
        "time": 0.3,
        "me": "scroll_left",
        "ease": "cubic"
      });
      setTimeout(Arrows, 1000)
    }

    function PlaylistBack(x) {
      if (x == '') {
        UpdatePlaylist(0)
      } else {
        if (exist(o.playlist_dic[x])) {
          UpdatePlaylist(x)
        }
      }
      open_action = ''
    }

    function HistoryPlaylist(x) {
      fvalue[x].innerHTML = '';
      css(ftitle[x], {
        'color': style.historycolor
      });
      if (style.historytitlestrike == 1) {
        css(ftitle[x], {
          'text-decoration': 'line-through'
        })
      }
      if (style.historytitlea > -1) {
        css(ftitle[x], {
          'opacity': style.historytitlea
        })
      }
      f[x].classList.remove('pjs-' + v.id + '-active-pl');
      css(fbg[x], {
        'backgroundColor': style.historybgcolor
      });
      if (style.historybga > -1) {
        css(fbg[x], {
          'opacity': style.historybga
        })
      }
    }

    function Action2(i) {
      if (exist(f2action[i])) {
        Retimer();
        if (f2i("quality", i) == 0) {
          o.actions.SetQuality(f2action[i].substr(7))
        }
        if (f2i("audiotrack", i) == 0) {
          o.actions.SetAudioTrack(f2action[i].substr(10))
        }
        if (f2i("subtitle", i) == 0) {
          !o.sbt ? o.sbt = new PluginSub() : '';
          o.sbt.SetSubtitle(f2action[i].substr(8))
        }
        if (f2i("channel", i) == 0 && v.channels == 1) {
          o.channels.SetChannel(f2action[i].substr(7))
        }
        if (f2i("share", i) == 0) {
          o.share ? o.share.api(shr[i]) : '';
          HideControl()
        }
        if (f2i("color", i) == 0) {
          Remove2();
          Action(0, 0, clr[i])
        }
        for (var p in o.menuproc) {
          if (o.menuproc.hasOwnProperty(p)) {
            if (f2i(p, i) == 0) {
              o.media.menufltr(p, i)
            }
          }
        }
        if (f2i("timer", i) > 0) {
          if (f2title[i].innerHTML == Lang('off')) {
            SettingsTimers(open_action + '0');
            Value(open_settings);
            if (open_action == "offsettimer") {
              SettingsTimers("offsetwrite")
            }
            Home()
          } else {
            if (open_action == "sleeptimer" && style.sleep2 == 1) {
              SettingsTimers('sleep2', i);
              Value(open_settings);
              Home()
            }
          }
        }
        if (f2i("speed", i) == 0) {
          o.actions.SetSpeed(f2action[i].substr(5));
          UpdateSpeed();
          setTimeout(HideControl, 200)
        }
      }
    };
    this.UpdateSpeed = function() {
      UpdateSpeed()
    };
    this.Exist = function(x) {
      for (var i = 0; i < faction.length; i++) {
        if (faction[i] == x) {
          return true
        }
      }
      return false
    };

    function UpdateSpeed() {
      for (var i = 0; i < faction.length; i++) {
        if (faction[i] == "speed") {
          Value(i);
          if (open_action == 'speed') {
            Remove2();
            Action(i, 0)
          }
        }
      }
    }

    function CreateItem(x, i, toend) {
      if (exist(eval(x))) {
        eval(x)[i] = createElement("div");
        if (i < 2 || x == "f" || open_action != 'quality' || toend == 1) {
          if (style.floatleft == 1) {
            control.appendChild(eval(x)[i])
          } else {
            control2.appendChild(eval(x)[i])
          }
        } else {
          if (style.floatleft == 1) {
            control.insertBefore(eval(x)[i], eval(x)[i - 1])
          } else {
            control2.insertBefore(eval(x)[i], eval(x)[toend == 2 ? i - 2 : i - 1])
          }
        }
        if (x == 'f') {
          attr(eval(x)[i], {
            'fid': i
          })
        }
        if (x == 'f2') {
          attr(eval(x)[i], {
            'f2id': i
          })
        }
        eval(x + 'bg')[i] = createElement("div");
        var bgtmp = createElement("div");
        eval(x)[i].appendChild(bgtmp);
        bgtmp.appendChild(eval(x + 'bg')[i]);
        Pnt0(bgtmp);
        eval(x + 'img')[i] = createElement("div");
        eval(x)[i].appendChild(eval(x + 'img')[i]);
        Pos0(eval(x + 'img')[i]);
        Pnt0(eval(x + 'img')[i]);
        eval(x + 'title')[i] = createElement("div");
        eval(x)[i].appendChild(eval(x + 'title')[i]);
        eval(x + 'value')[i] = createElement("div");
        eval(x)[i].appendChild(eval(x + 'value')[i]);
        if (i > 0 && x == "f2" && iset && style.activeicon == 0) {
          hide2(eval(x + 'value')[i])
        }
      }
    };

    function StyleItem(x, xbg, xtitle, xvalue, actn, ii) {
      css(x, {
        'position': 'relative',
        'right': 0,
        'top': 0,
        'cursor': 'pointer',
        'height': 'auto',
        'width': '100%',
        'overflow': 'hidden',
        'display': 'block',
        'line-height': '1.5em'
      });
      if (iset) {
        if (style.floatleft == 1) {
          css(x, {
            'width': 'auto'
          })
        }
      }
      if (style.floatmarginright && style.floatleft == 1) {
        css(x, {
          'marginRight': style.floatmarginright
        })
      }
      if (style.floatleft == 1 && (!iset || ii > 0 || style.nohead == 1)) {
        css(x, {
          'display': 'inline-block',
          'vertical-align': 'top',
          'white-space': 'normal'
        })
      }
      css(xbg, {
        'background': (style.bggr == 1 ? "linear-gradient(to left," + CheckColor(style.bggrclr) + ", " + CheckColor(style.bgcolor) + ")" : CheckColor(style.bgcolor)),
        'opacity': style.bga,
        'pointerEvents': 'none',
        'transition': 'opacity 0.2s ease-out,background .2s ease-out,filter .2s ease-out'
      });
      Pos0(xbg);
      Pos0(xbg.parentNode);
      if (style.blur == 1) {
        css(xbg.parentNode, {
          'backdrop-filter': 'blur(8px)'
        })
      }
      if (style.brdl == 1) {
        x.style[style.floatleft == 1 ? "border-right" : "border-bottom"] = "1px solid " + hex2rgb(existv(style.brdlc, 'ffffff'), existv(style.brdla, 0.2))
      }
      css(xtitle, {
        'position': 'relative',
        'right': 0,
        'top': 0,
        'float': (style.align ? style.align : 'left'),
        'color': style.color,
        'padding-top': style.paddingtop,
        'padding-right': style.paddingright,
        'padding-bottom': style.paddingbottom,
        'padding-left': style.paddingleft,
        'pointerEvents': 'none',
        'opacity': style.a,
        'transition': 'opacity 0.2s linear,color 0.2s linear',
      });
      css(xvalue, {
        'position': 'relative',
        'right': 0,
        'top': 0,
        'float': (style.valuealign ? style.valuealign : 'right'),
        'padding-top': style.paddingtop,
        'padding-right': style.paddingright,
        'padding-left': style.paddingleft,
        'pointerEvents': 'none',
        'font-size': style.valuefontsize * existv(v.globalfs, 1),
        'opacity': style.a,
        'color': style.valuecolor,
        'transition': 'opacity 0.2s linear,color 0.2s linear'
      });
      if (style.limitwidth == 1) {
        css(x, {
          'max-width': style.limitmaxwidth + 'px!important'
        });
        css(xtitle, {
          'max-width': (style.limitmaxwidth - 70) + 'px!important'
        })
      } else {
        if (style.floatleft == 1) {
          if (style.floatlimitwidth == 1) {
            css(x, {
              'width': style.floatwidth
            });
            css(xtitle, {
              'width': style.floatwidth - 70
            })
          }
        } else {
          css(xtitle, {
            'white-space': 'nowrap'
          });
          css(xvalue, {
            'white-space': 'nowrap'
          })
        }
      }
    }

    function Home() {
      for (var i = 1; i < f.length; i++) {
        if (exist(f[i])) {
          if (style.floatleft == 1) {
            f[i].style.display = "inline-block"
          } else {
            f[i].style.display = "block"
          }
        }
      }
      Retimer();
      Remove2();
      Resize();
      open_action = '';
      open_settings = -1
    };

    function Remove2() {
      for (var j = 0; j < f2.length; j++) {
        if (f2[j]) {
          if (style.floatleft == 1) {
            control.removeChild(f2[j])
          } else {
            control2.removeChild(f2[j])
          }
          f2[j] = null
        }
      }
      f2 = [];
      open_action = ''
    }

    function Width() {
      return control.offsetWidth
    };
    this.resizePlaylist = function() {
      ResizePlaylist()
    };

    function ResizePlaylist() {
      if (is == "playlist") {
        if (style.floatleft == 1 || style.width100 == 1) {
          var x = o.screen_w - style.marginright - style.marginleft;
          css(container, {
            'width': x
          });
          css(control, {
            'width': x
          });
          control2 ? css(control2, {
            'width': x
          }) : ''
        }
        o.droplist ? o.droplist.Resize() : ''
      }
    }

    function Resize() {
      if (!removed) {
        if (iset) {
          o.controls ? o.controls.resizeSettings() : '';
          var x = style.nohead == 1 && f.length > 1 ? f[1] : f[0]
        }
        if (is == "playlist") {
          ResizePlaylist();
          o.controls ? o.controls.resizePlaylist() : '';
          var x = f[0];
          if (v.change2playlist == 1) {
            MainUpdateSize()
          }
        }
        f.length > 1 && !x ? (f[1] ? x = f[1] : '') : '';
        f.length > 2 && !x ? (f[2] ? x = f[2] : '') : '';
        if (x) {
          x.offsetWidth == 0 && f2.length > 0 ? x = f2[0] : ''
        }
        if (control.offsetWidth - control.clientWidth > 0 && x && style.floatleft != 1) {
          if (exist(arr_up)) {
            css(arr_up, {
              "width": control2.offsetWidth
            })
          }
          if (exist(arr_down)) {
            css(arr_down, {
              "width": control2.offsetWidth
            })
          }
          style.scrollwidth = (control.offsetWidth - x.offsetWidth) - (control.clientWidth - x.clientWidth)
        } else {
          style.scrollwidth = 0
        }
      }
    };

    function VisibleItems() {
      var x = 0;
      var y = 0;
      var z = '';
      for (var i = 1; i < f.length; i++) {
        if (exist(f[i])) {
          if (f[i].style.visibility != "hidden" && f[i].style.display != "none") {
            x++;
            y = i;
            z = faction[i]
          }
        }
      }
      return [x, y, z]
    }
    this.SubOpt = function() {
      sub_settings_on = true;
      this.show();
      _cstm = 2;
      SubtitleSettingsMenu()
    };

    function SubtitleSettings(x) {
      sub_settings_on = !sub_settings_on;
      SubtitleSettingsMenu(x)
    }

    function SubtitleSettingsMenu() {
      Home();
      for (var i = 0; i < faction.length; i++) {
        if (faction[i] == "subtitle") {
          Action(i, _cstm)
        }
      }
    }

    function Retimer() {
      clearTimeout(settimer);
      settimer = setTimeout(function() {
        o.setaction = false
      }, 2000)
    }

    function SubtitleTimerMenu() {
      var x = open_action;
      Home();
      for (var i = 0; i < faction.length; i++) {
        if (faction[i] == x) {
          Action(i, 0)
        }
      }
    }
    this.tb = function() {
      return v.settings.always == 1 && v.settings.toolbar == 1
    };

    function HideControl(x) {
      if ((!iset && v.playlist.always2 == 1) || (iset && v.settings.always == 1 && x != 2)) {
        return
      }
      if (is == 'playlist' && v.playlist.droplist == 1 && v.playlist.dropnohide != 1) {
        if (v.playlist.always == 1 && x == 1) {
          return
        }
        o.droplist ? o.droplist.Hide() : '';
        is_visible = false
      } else {
        if ((x != 1 || (style.hidesmoothly == 1 && style.always == 1)) && !o.system.tv) {
          var m = new Motion({
            "mc": container,
            "type": "alpha_div",
            "to": 0,
            "time": 0.1,
            "me": is,
            "ease": "elastic"
          });
          hidetimeout = setTimeout(function() {
            css(container, {
              "visibility": "hidden",
              "opacity": 0,
              "top": -2000
            });
            is_visible = false
          }, 200)
        } else {
          css(container, {
            "visibility": "hidden",
            "opacity": 0,
            "top": -2000
          });
          is_visible = false
        }
      }
      if (is == 'playlist') {
        if (v.playlist.hidecontrol == 1 && o.controls) {
          o.controls.toggleControl("action", "playlist", true)
        }
      }
      clearInterval(wheelinterval)
    };
    this.c = function() {
      return container
    };
    this.co = function() {
      if (container.contains(control)) {
        return control
      }
    };
    this.s = function(key) {
      if (key == "marginleft" || key == "marginright") {
        var k2 = key.replace("margin", "marginproc");
        var k3 = key.replace("margin", "mrgnprs");
        if (exist2(style[k3]) && o.small) {
          return o.screen_w * style[k3] / 100
        }
        if (exist2(style[k2])) {
          return o.screen_w * style[k2] / 100
        }
      }
      return style[key]
    };
    this.ss = function(key) {
      return style
    };
    this.show = function() {
      Home();
      clearTimeout(hidetimeout);
      is_visible = true;
      if (is == 'playlist' && v.playlist.droplist == 1) {
        o.droplist ? o.droplist.Show() : ''
      } else {
        css(container, {
          "visibility": "visible",
          "opacity": 1,
          "transition": "opacity 0.2s linear"
        });
        var x = VisibleItems();
        if (x[0] == 1) {
          if (x[2] == "quality" || x[2] == "audiotrack" || x[2] == "subtitle" || x[2] == "speed" || x[2] in o.menuproc || x[2].indexOf("timer") > 0) {
            Action(x[1], 0)
          }
        }
      }
      if (o.controls) {
        is == 'settings' ? o.controls.resizeSettings() : '';
        if (is == 'playlist') {
          o.controls.resizePlaylist();
          if (v.playlist.hidecontrol == 1) {
            o.controls.toggleControl("action", "playlist", false)
          }
        }
      }
      if (o.system.safari) {
        css(control, {
          'min-width': 'auto'
        });
        if (style.floatleft != 1) {
          css(control2, {
            'min-width': 'auto'
          })
        }
      }
      justshow = true;
      clearInterval(showinterval);
      showinterval = setInterval(ShowTimeout, 100)
    };

    function ShowTimeout() {
      clearInterval(showinterval);
      justshow = false
    }
    this.open = function(i) {
      Action(i, 1)
    };
    this.hide = function(x) {
      HideControl(x)
    };
    this.plclose = function() {
      if (o.droplist) {
        o.droplist.Close()
      }
    };
    this.SetQuality = function() {
      for (var i = 0; i < faction.length; i++) {
        if (faction[i] == "quality") {
          Value(i);
          if (o.files_quality.length > 1) {
            show(f[i])
          }
          if (open_action == 'quality') {
            Remove2();
            Action(i, _cstm)
          }
        }
      }
    };
    this.Airplay = function() {
      for (var i = 0; i < faction.length; i++) {
        if (faction[i] == "airplay") {
          Value(i)
        }
      }
    };
    this.SetSetting = function(x) {
      for (var i = 0; i < faction.length; i++) {
        if (faction[i] == x) {
          Value(i);
          if (o['files_' + x]) {
            if (o['files_' + x].length > 1) {
              show(f[i])
            }
          }
          if (open_action == x) {
            Remove2();
            Action(i, _cstm)
          }
        }
      }
    };
    this.SetSubtitle = function() {
      for (var i = 0; i < faction.length; i++) {
        if (faction[i] == "subtitle") {
          Value(i);
          if (o.files_subtitle) {
            if (o.files_subtitle.length > 0) {
              var x = false;
              if (o.subs) {
                for (var y = 0; y < o.subs.length; y++) {
                  if (o.subs[y] != '') {
                    x = true;
                    break
                  }
                }
              } else {
                x = true
              }
              x ? show(f[i]) : ''
            }
          }
          if (open_action == 'subtitle') {
            Remove2();
            Action(i, 0)
          }
        }
      }
    };
    this.updatePlaylist = function(x) {
      o.playlist = x;
      UpdatePlaylist(0);
      if (exist(v.plstart)) {
        if (v.plstart.indexOf("x-") != 0) {
          for (var y in o.playlist_dic) {
            if (o.playlist_dic.hasOwnProperty(y)) {
              if (o.playlist_dic[y].pjs_id == v.plstart) {
                v.plstart = y
              }
            }
          }
        }
        if (exist(o.playlist_dic[v.plstart])) {
          FindPlStart(o.playlist_dic[v.plstart]);
          var y = o.playlist_dic[v.plstart]['pjs_i'];
          ActionPlaylist(y);
          if (v.playlist.openplaylistroot == 1 && style.droplist != 1) {
            UpdatePlaylist(0);
            setTimeout(function() {
              Resize()
            }, 500)
          } else {
            setTimeout(function() {
              ScrollTo(y);
              Resize()
            }, 500)
          }
          v.plstart = undefined
        } else {
          ActionPlaylist(0)
        }
      } else {
        ActionPlaylist(0)
      }
      if (style.droplist == 1) {
        if (!exist(o.droplist)) {
          o.droplist = new PluginDroplist()
        }
      }
    };
    this.playById = function(x) {
      playById(x)
    };

    function playById(x) {
      if (exist(o.playlist_dic[x])) {
        FindPlStart(o.playlist_dic[x]);
        Action(o.playlist_dic[x]['pjs_i'], 0);
        ScrollTo(o.playlist_dic[x]['pjs_i'])
      }
    };
    this.openById = function(x) {
      if (exist(o.playlist_dic[x])) {
        FindPlStart(o.playlist_dic[x]);
        if (o.playlist_dic[x]["file"]) {
          o.seekto = undefined;
          ActionPlaylist(o.playlist_dic[x]['pjs_i']);
          UpdateVars0(x);
          o.actions.NewFile(o.playlist_dic[x]["file"], 1);
          UpdateVars(x);
          ScrollTo(o.playlist_dic[x]['pjs_i']);
          if (o.droplist) {
            o.droplist.Update()
          }
        } else if (o.playlist_dic[x]["folder"]) {
          UpdatePlaylist(x)
        }
      }
    };

    function showById(x) {
      if (exist(o.playlist_dic[x])) {
        plfolder = '';
        UpdatePlaylist(0);
        FindPlStart(o.playlist_dic[x]);
        UpdateVars0(x);
        Action(o.playlist_dic[x]['pjs_i'], 0);
        UpdateVars(x)
      }
    };
    this.PlaylistNext = function() {
      autonextopenfolder = true;
      var x = parseInt(plx) + 1;
      if (plid != '') {
        o.plhistory[plid] = true;
        shuffle = removebykey(shuffle, plid)
      }
      if (v.shuffle == 1) {
        x = Shuffle(shuffle);
        if (x == null) {
          if (v.shuffle8 == 1 || v.playlist.autoplaylist == 1) {
            shuffle_.sort(function(a, b) {
              return Math.random() - 0.5
            });
            for (var x in shuffle_) {
              if (shuffle_.hasOwnProperty(x)) {
                shuffle[x] = shuffle_[x]
              }
            }
            x = Shuffle(shuffle)
          } else {
            o.actions.ShuffleEnd()
          }
        }
      } else {
        if ((faction[x] == "playlistfolder" || plx == -1) && plid != '') {
          var y = okpd().indexOf(plid);
          if (y < okpd().length) {
            var z = o.playlist_dic[okpd()[y + 1]];
            if (z) {
              if (exist(z.folder)) {
                z = o.playlist_dic[okpd()[y + 2]]
              }
              this.openById(z.id);
              x = -1;
              o.actions.Play()
            }
          }
        }
      }
      if (x > -1) {
        o.seekto = undefined;
        Action(x, 0);
        ScrollTo(x)
      }
    };

    function ScrollTo(x) {
      if (f[x] && !removed) {
        if (style.floatleft == 1) {
          var to = f[x].offsetLeft - 20;
          var m = new Motion({
            "mc": control,
            "type": "scrollleft",
            "to": to,
            "time": 0.3,
            "me": "scroll_left",
            "ease": "cubic"
          })
        } else {
          var to = f[x].offsetTop - container.offsetHeight / 2 + 20;
          var m = new Motion({
            "mc": control,
            "type": "scroll",
            "to": to,
            "time": 0.3,
            "me": "scroll_down",
            "ease": "cubic"
          })
        }
        setTimeout(Arrows, 1000)
      }
    }

    function Shuffle(obj) {
      var keys = Object.keys(obj);
      var x;
      for (var i = 0; i < keys.length; i++) {
        x = obj[keys[keys.length * Math.random() << 0]];
        if (x) {
          break
        }
      }
      return x
    };
    this.menuproc = function(x) {
      Menuproc(x)
    };

    function Menuproc(x) {
      mpi[x] > -1 ? Value(mpi[x]) : '';
      if (f2value[0]) {
        if (open_action == 'scale') {
          f2value[0].innerHTML = Math.round(o.mediascale.x * 100) + '%'
        } else {
          f2value[0].innerHTML = FltrVal(open_action)
        }
      }
    };

    function FltrVal(x) {
      if (x == "scale") {
        return Math.round(o.mediascale.x * 100) + '%'
      } else {
        return Math.round(existv(o.fltrs[x], o.menuproc[x]) * 100) + '%'
      }
    }
    this.PlaylistNextExist = function() {
      return NxtExt()
    };

    function NxtExt() {
      if (v.shuffle == 1) {
        return Object.keys(shuffle).length > 0
      }
      var x = false;
      if (o.playlist_dic) {
        x = okpd().indexOf(plid) < okpd().length - 1
      }
      return x
    };
    this.PlaylistRewind = function() {
      if (exist(o.pl_first_id)) {
        showById(o.pl_first_id)
      }
    };
    this.PlaylistPrevExist = function() {
      var x = plx > 0;
      if (o.playlist_dic) {
        var z = okpd().indexOf(plid);
        x = z > 0;
        if (z == 1) {
          if (exist(o.playlist_dic[okpd()[0]].folder)) {
            x = false
          }
        }
      }
      return x
    };
    this.PlaylistExist = function() {
      return exist(o.playlist_dic)
    };
    this.PlaylistPrev = function() {
      autoprevopenfolder = true;
      if (this.PlaylistPrevExist()) {
        var x = parseInt(plx) - 1;
        if (x < 0) {
          var y = okpd().indexOf(plid);
          if (y > 0) {
            var z = o.playlist_dic[okpd()[y - 1]];
            if (z) {
              if (exist(z.folder)) {
                z = o.playlist_dic[okpd()[y - 2]]
              }
              if (z) {
                this.openById(z.id);
                o.actions.Play()
              }
            }
          }
        } else {
          o.seekto = undefined;
          Action(x, 0);
          ScrollTo(x)
        }
      }
    };
    this.PlaylistHere = function() {
      if (plx > 0) {
        ScrollTo(plx)
      }
    };

    function f2i(x, i) {
      return f2action[i].indexOf(x)
    };

    function FindPlStart(x) {
      if (x['pjs_parent_i'] != -1) {
        FindPlStart(o.playlist_dic[x['pjs_parent']]);
        UpdatePlaylist(x['pjs_parent'])
      } else {
        UpdatePlaylist(0)
      }
    };
    this.g = function(x) {
      switch (x) {
        case "width":
          return Width();
          break;
        case "height":
          return container.offsetHeight;
          break;
        case "top":
          return style.margintop;
          break;
        case "scroll_height":
          return control.scrollHeight;
          break;
        case "margin_bottom":
          return style.marginbottom;
          break;
        case "x":
          return int(container.style.left);
          break;
        case "y":
          return int(container.style.top);
          break;
        case "opacity":
          return container.style.opacity;
          break;
        case "show":
          return is_visible;
          break;
        case "open":
          return open_settings;
          break;
        case "key":
          return key;
          break;
        case "motion_id":
          return key + motion_id;
          break;
        case "empty":
          return empty;
          break;
        case "playlist":
          return is == "playlist";
          break;
        case "played":
          return o.plhistory[plid];
          break;
        case "activeicon":
          return _activeIcon;
          break;
        case "butplstart":
          return o.playlist_dic[o.butplstart] ? o.playlist_dic[o.butplstart].title : '';
        case "title2":
          return v.title2 ? v.title2 : '';
        case "nxtttl":
          return NxtExt() ? o.playlist_dic[okpd()[okpd().indexOf(plid) + 1]].title : ''
      }
    };

    function okpd() {
      return Object.keys(o.playlist_dic)
    };
    this.prenewpl = function() {
      plid = '';
      v.plstart = ''
    };
    this.empty = function() {
      if (iset) {
        var x = 0;
        for (var i = 1; i < 11; i++) {
          if (faction[i] == "quality") {
            var y = o.files_quality.length;
            if (exist(v.forbidden_quality)) {
              var z = v.forbidden_quality.split(",");
              for (var j = 0; j < z.length; j++) {
                if (o.files_quality.indexOf(z[j]) > -1) {
                  y--
                }
              }
            }
            if (y > 0) {
              if (y > 1 || (y == 1 && o.files_quality != 1 && style.show1value == 1)) {
                x++
              }
            }
          }
          if (faction[i] == "airplay") {
            if (o.airplay) {
              x++
            }
          }
          if (faction[i] == "download") {
            if (o.file_type == 'native' || v.download) {
              x++
            }
          }
          if (faction[i] == "audiotrack") {
            if (o.files_audiotrack.length > 1) {
              x++
            }
          }
          if (faction[i] == "channel" && v.channels == 1) {
            if (o.files_channel.length > 0) {
              x++
            }
          }
          if (faction[i] == "subtitle") {
            if (exist(o.subs)) {
              for (var s = 0; s < o.subs.length; s++) {
                if (o.subs[s] != '') {
                  x++;
                  break
                }
              }
            }
            if (x == 1 && o.subload == 1) {
              x = 0
            }
            if (v.sub_upload == 1 && v.sub_upload0 == 1) {
              x++
            }
          }
          if (faction[i] == "speed") {
            if (o.file_type != "vimeo") {
              x++
            }
          }
          if (faction[i] in o.menuproc || faction[i] == "share" || faction[i] == "color") {
            x++
          }
          if (faction[i]) {
            if (faction[i].indexOf("timer") > 0) {
              x++
            }
          }
          if (v.settings[is + i + 'hide'] == 1) {
            x--
          }
        }
        return x <= 0
      } else if (is == "playlist") {
        return f.length == 0
      } else {
        return empty
      }
    };
    this.Remove = function() {
      if (container.parentNode == o.frame) {
        container.removeChild(control);
        o.frame.removeChild(container);
        o.droplist ? o.droplist.Remove() : '';
        container = null;
        control = null;
        removed = true
      }
    }
  };
  var MediaYoutube = function(url, parentcontainer) {
    var intro = false;
    if (url.indexOf('intro') == 0) {
      intro = true;
      url = url.substr(5)
    }
    var youtube_id = YoutubeID(url);
    var error;
    var player;
    var created = false;
    var ready = false;
    var started = false;
    var vastonmobile = false;
    var auto = true;
    var _set_quality = [];
    var _speed = 1;
    var _wait = false;
    var startwait_t;
    var _start = 0;
    var _readyonplay = 0;
    var quality_received = false;
    var container_id = 'pljs_yt_' + v.id + (intro ? 'intro' : '');
    pushCSS("#pljs_yt_" + v.id + "{width:100%!important;height:100%!important;max-width:none!important;max-height:none!important}");
    var container = createElement('div');
    var drtn = 0;
    container.setAttribute('id', container_id);
    parentcontainer.appendChild(container);
    o.airplay = false;
    !intro ? o.actions.AirplayChanged() : '';
    if (o.system.mobile) {
      v.preload = 1
    }
    if (v.youtubecontrols != 1) {
      var layer = createElement('div');
      parentcontainer.appendChild(layer);
      css(layer, {
        position: "absolute",
        top: 0,
        left: 0,
        "background-color": "#ff0000",
        height: "100%",
        width: "100%",
        "opacity": 0
      });
      layer.addEventListener("dblclick", function(event) {
        event.cancelBubble = true
      });
      if (o.system.mobile) {
        layer.addEventListener("touchstart", function(event) {
          event.cancelBubble = true
        });
        layer.addEventListener("click", function(event) {
          event.cancelBubble = true
        });
        layer.addEventListener("touchend", function(event) {
          event.cancelBubble = true;
          ScreenClick(event);
          if (v.screenclick == 1) {
            setTimeout(HideLayer, 100);
            setTimeout(ShowLayer, 1000)
          }
        })
      } else {
        layer.addEventListener("mousemove", function(event) {
          var x = true;
          if (v.vast == 1) {
            if (exist(v.preroll) && !started) {
              x = false
            }
            if (exist(v.playroll) && Status() == "paused" && time() > 0) {
              x = false
            }
          }
          if (x && v.screenclick == 1 && v.ytcl != 1) {
            hide2(this);
            setTimeout(ShowLayer, 2000)
          }
        })
      }
      v.screenclick == 1 && v.ytcl1 != 1 ? hide2(layer) : ''
    }

    function ShowLayer() {
      show2(layer)
    }

    function HideLayer() {
      if (v.ytcl != 1) {
        hide2(layer)
      }
    }
    if (v.preload == 1 && v.autoplay == 0) {
      onWaiting()
    }
    if (!window['YT']) {
      window.onYouTubeIframeAPIReady = function() {
        YouTubeIframeAPIReady();
        for (var i = 0; i < pljssglobal.length; i++) {
          if (pljssglobal[i]) {
            if (pljssglobal[i].api("id") != v.id) {
              if (pljssglobal[i].api('isyoutube')) {
                pljssglobal[i].api('youtubeready')
              }
            }
          }
        }
      };
      var scrpt = Script("youtube.com/iframe_api", "youtube.com/iframe_api", "youtube_iframe_api");
      if (scrpt) {
        scrpt.onerror = function(e) {
          o.actions.MediaReady();
          if (v.yterrors != 1) {
            error = 'YouTube API Error';
            o.media.onError()
          }
        }
      }
    } else {
      YouTubeIframeAPIReady()
    }

    function YouTubeIframeAPIReady() {
      if (v.preload == 1 || intro) {
        !created ? YtInit() : ''
      } else {
        o.actions.MediaReady()
      }
    }

    function YtInit() {
      if ("YT" in window) {
        if (exist(YT.Player) && !created) {
          log("Youtube Init");
          var cntrls = 0;
          if (v.youtubecontrols == 1) {
            cntrls = 1
          }
          o.seekto > 0 ? _start = parseInt(o.seekto) : '';
          player = new YT.Player(container_id, {
            height: o.container_h,
            width: o.container_w,
            videoId: youtube_id,
            playerVars: {
              enablejsapi: 1,
              playerapiid: container_id,
              html5: 1,
              disablekb: 1,
              autohide: 1,
              playsinline: ((v.playsinlineonmobile == 0 || (v.playsinlineonmobileiphone != 1 && o.system.iphone)) && o.system.mobile ? 0 : 1),
              iv_load_policy: 3,
              controls: cntrls,
              showinfo: 0,
              modestbranding: 1,
              rel: 0,
              autoplay: intro || v.autoplay == 1 ? 1 : 0,
              loop: 0
            },
            events: {
              'onReady': onYtPlayerReady,
              'onStateChange': onYtPlayerStateChange,
              'onError': onError,
              'onPlaybackQualityChange': onQualityChanged
            }
          });
          if (o.seekto > 0) {
            o.seekto = undefined
          }
          Resize();
          created = true
        } else {
          setTimeout(YtInit, 500)
        }
      } else {
        setTimeout(YtInit, 500)
      }
    }
    var _play_i;

    function onYtPlayerReady() {
      if (o.media) {
        log("Youtube Ready");
        ready = true;
        clearTimeout(startwait_t);
        o.actions.StopWaiting();
        if (intro) {
          if (o.system.mutedautoplay) {
            o.actions.Mute()
          }
          player.playVideo();
          o.vast.ytReady()
        } else {
          if (v.autoplay == 1 && o.system.mutedautoplay && !o.acted) {
            o.actions.Mute();
            if (o.system.mobile) {
              clearInterval(_play_i);
              _play_i = setInterval(PlayingChecker, 300)
            }
          }
          if (v.preload == 0) {
            player.playVideo()
          } else {
            o.actions.MediaReady()
          }
          drtn = player.getDuration();
          o.media.onDuration();
          if (_speed != 1) {
            SetSpeed(_speed)
          }
          onMeta();
          Resize();
          if (v.yttitle == 1) {
            try {
              if (player.getVideoData()) {
                if (exist(player.getVideoData().title)) {
                  v.title = player.getVideoData().title;
                  o.actions.Title('title')
                }
              }
            } catch (e) {}
          }
        }
      }
    }

    function PlayingChecker() {
      var x = player.getPlayerState();
      if (x == 2 || x == -1) {
        o.controls.Pause();
        o.controls.StopWaiting();
        clearInterval(_play_i)
      }
      if (x == 1) {
        clearInterval(_play_i)
      }
    }

    function onYtPlayerStateChange(event) {
      if (v.ytlog == 1) {
        log('YT', event.data)
      }
      if (intro) {
        if (event.data == YT.PlayerState.ENDED) {
          o.vast.ytEnded()
        }
        if (event.data == YT.PlayerState.PLAYING) {}
      } else {
        if (event.data == YT.PlayerState.PLAYING) {
          if (_readyonplay == 1) {
            _readyonplay = 0;
            onYtPlayerReady()
          }
          if (!o.play) {
            o.actions.Play()
          }
          if (_start > 0) {
            player.seekTo(_start, true);
            _start = 0;
            o.seekto = undefined
          }
          ShowLayer();
          started = true;
          ready = true;
          if (vastonmobile) {
            player.pauseVideo()
          } else {
            o.media.onPlay();
            o.media.onTimeupdate()
          }
          Qualities();
          if (exist(v.default_quality)) {
            for (var i = 0; i < o.files_quality.length; i++) {
              if (v.default_quality == o.files_quality[i]) {
                SetQuality(i)
              }
            }
            v.default_quality = null
          } else {
            if (exist(o.default_quality)) {
              for (var i = 0; i < o.files_quality.length; i++) {
                if (o.default_quality == o.files_quality[i]) {
                  SetQuality(i)
                }
              }
              o.default_quality = null
            }
          }
          _wait = false
        }
        if (event.data == -1 && _wait && o.play) {
          o.actions.StopWaiting();
          _wait = false;
          onPause()
        }
        if (event.data == YT.PlayerState.PAUSED) {}
        if (event.data == YT.PlayerState.ENDED) {
          onEnded()
        }
        if (event.data == YT.PlayerState.BUFFERING) {
          if (!o.play) {}
          if (o.play) {
            _wait = true;
            onWaiting()
          }
        }
        if (event.data == YT.PlayerState.CUED) {}
      }
    }

    function onError(event) {
      if (intro) {
        o.vast.ytError()
      } else {
        if (event.data == 2) {
          error = "wrong youtube id"
        }
        if (event.data == 5) {
          error = "network empty"
        }
        if (event.data == 101 || event.data == 150 || event.data == 100) {
          error = "this video is unavailable"
        }
        if (v.customyterrors == 1) {
          exist(v.customyterror) ? error = v.customyterror : ''
        }
        if (v.yterrors != 1) {
          o.media.onError()
        } else {
          hide(o.poster)
        }
      }
    }

    function onEnded() {
      v.start > 0 ? _start = v.start : '';
      o.media.onEnded();
      o.media.onDuration()
    }

    function onPause() {
      if (!o.nopause && o.play) {
        o.actions.Pause()
      }
    }

    function onTimeupdate() {
      o.media.onTimeupdate()
    }

    function onMeta() {
      o.media.onMeta();
      o.actions.LoadedData()
    }

    function onDuration() {
      o.media.onDuration()
    }

    function onVolume() {
      o.media.onVolume()
    }

    function onWaiting() {
      if (o.media) {
        o.media.onWaiting()
      } else {
        startwait_t = setTimeout(onWaiting, 100)
      }
    }

    function onQualityChanged(event) {
      SetCurrentQuality(event.data)
    }

    function Qualities() {
      if (!quality_received) {
        var x = player.getAvailableQualityLevels() + '';
        if (x != '' && x != undefined) {
          o.files_quality = x.split(',');
          o.files_quality = o.files_quality.reverse();
          if (v.ytautoquality == 0) {
            var y = o.files_quality.indexOf('auto');
            if (y > -1) {
              o.files_quality.splice(y, 1)
            }
          }
          for (var i = 0; i < o.files_quality.length; i++) {
            o.files_quality[i] = RenameQualities(o.files_quality[i])
          }
          quality_received = true;
          SetCurrentQuality(player.getPlaybackQuality())
        }
      }
    }

    function SetCurrentQuality(x) {
      o.current_quality = o.files_quality.indexOf(RenameQualities(x + ''));
      o.controls.QualityChanged(o.current_quality)
    }
    this.size = function() {
      return {
        "width": 0,
        "height": 0
      }
    };
    this.src = function(x) {
      youtube_id = YoutubeID(x);
      if (o.seekto > 0) {
        _start = parseInt(o.seekto)
      }
      playById(youtube_id)
    };

    function Status() {
      var state = -1;
      if (ready) {
        state = player.getPlayerState()
      }
      var x = '';
      if (state == -1) {
        x = "paused"
      }
      if (state == 1 || state == 3) {
        x = "playing"
      }
      if (state == 2) {
        x = "paused";
        if (o.play) {
          o.actions.Pause()
        }
      }
      if (state == 5) {
        x = "paused"
      }
      if (state == 0) {
        x = "ended"
      }
      return x
    }

    function Resize() {
      try {
        if (exist(player)) {
          player.setSize(o.screen_w, o.screen_h)
        }
      } catch (e) {
        log(e)
      }
    }

    function RenameQualities(x) {
      var y = x;
      if (x == "tiny") {
        y = "160p"
      }
      if (x == "small") {
        y = "240p"
      }
      if (x == "medium") {
        y = "360p"
      }
      if (x == "large") {
        y = "480p"
      }
      if (x == "hd720") {
        y = "720p"
      }
      if (x == "hd1080") {
        y = "1080p"
      }
      if (v.nameofyoutubequality == 1) {
        y = Lang(y)
      }
      if (x == "auto") {
        y = Lang("auto")
      }
      _set_quality[y] = x;
      return y
    }

    function time() {
      var x = ready ? player.getCurrentTime() : 0;
      if (x > 0 && v.seekwindow > 0) {
        v.delete = x - v.seekwindow;
        v.seekwindow = -1
      }
      return x
    };

    function SetSpeed(x) {
      player ? player.setPlaybackRate(x) : '';
      _speed = x
    };
    this.YoutubeReady = function() {
      YouTubeIframeAPIReady()
    };
    this.Play = function() {
      if (ready) {
        player.playVideo()
      } else {
        if (!created) {
          YtInit()
        } else {}
      }
    };
    this.Pause = function() {
      if (ready) {
        player.pauseVideo()
      }
    };
    this.Toggle = function() {
      if (ready) {
        Status() == 'playing' ? player.pauseVideo() : player.playVideo()
      }
    };
    this.Seek = function(x) {
      if (ready) {
        player.seekTo(x, true);
        js("seek", x)
      }
    };
    this.tag = function() {
      return false
    };
    this.Mute = function() {
      ready ? player.mute() : ''
    };
    this.Unmute = function() {
      ready ? player.unMute() : ''
    };
    this.Volume = function(x) {
      ready ? player.setVolume(x * 100) : ''
    };
    this.isPlaying = function() {
      return Status() == 'playing'
    };
    this.isLive = function() {
      return false
    };
    this.setQuality = function(x) {
      SetQuality(x)
    };

    function SetQuality(x) {
      if (ready) {
        if (exist(o.files_quality[x])) {
          var y = _set_quality[o.files_quality[x]];
          auto = y == 'auto';
          var z = time();
          player.setPlaybackQuality(y)
        }
      }
    }
    this.setSpeed = function(x) {
      SetSpeed(x)
    };
    this.ready = function() {
      return ready
    };
    this.status = function() {
      return Status()
    };
    this.time = function() {
      return time()
    };
    this.duration = function() {
      var x = ready ? player.getDuration() : 0;
      if (x != drtn) {
        drtn = x;
        o.media.onDuration()
      }
      if (exist(v.end)) {
        if (indOf([v.end], '-')) {
          x = x + v.end * 1
        } else {
          x = v.end
        }
      }
      return x
    };
    this.loaded = function() {
      var x = 0;
      if (ready) {
        x = player.getVideoLoadedFraction() * player.getDuration()
      }
      return x
    };
    this.resize = function() {
      Resize()
    };
    this.errorMessage = function() {
      return error
    };
    this.auto = function() {
      return v.ytautoquality == 1 ? auto : false
    };
    this.playId = function(x) {
      playById(x)
    };

    function playById(x) {
      url = x;
      if (player) {
        _readyonplay = 1;
        player.loadVideoById(x, 0)
      }
    }
    this.BeforeVast = function() {
      if (o.system.mobile && o.system.android) {
        this.Play();
        vastonmobile = true
      } else {
        if (Status() == "playing") {
          this.Pause()
        }
      }
    };
    this.AfterVast = function() {
      vastonmobile = false
    };
    this.nativeControls = function() {
      return true
    };
    this.Remove = function() {
      ready ? player.destroy() : '';
      ready = false;
      quality_received = false;
      try {
        if (container) {
          parentcontainer.removeChild(container)
        }
        parentcontainer.removeChild(layer)
      } catch (e) {}
    }
  };
  var PluginSub = function() {
    var sub = [];
    var upld = [];
    var empty = true;
    var ioff;
    var loading = -1;
    var lastsub;
    var wait;
    var parsed = [];
    var alldd;
    var hlsrows = [];
    this.start = function(x) {
      if (!x && wait) {
        Start(wait);
        wait = undefined
      } else {
        x ? Start(x) : ''
      }
    };
    this.check = function(x) {
      Start(x)
    };
    this.reHls = function() {
      hlsrows = []
    };
    function Start(x) {
      !x ? x = '' : '';
      if (x != '11') {
        var start = 0;
        var urlcnfg = true;
        var memory = '';
        o.subs = x.split(",");
        o.files_subtitle = [];
        o.current_subtitle = -1;
        if (StorageSupport() && v.sub_store == 1) {
          if (localStorage.getItem("pljssubtitle") != null) {
            memory = localStorage.getItem("pljssubtitle")
          }
        } else {
          if (o.remember_sub) {
            memory = o.remember_sub
          }
        }
        for (var i = 0; i < o.subs.length; i++) {
          if (o.subs[i].indexOf("#0") == 0) {
            o.subs[i] = fd0(o.subs[i])
          }
          if (o.subs[i].indexOf("#" + v.enc2) == 0) {
            o.subs[i] = o[o.fd[0]](o.subs[i])
          }
          if (o.subs[i].indexOf("#" + v.enc3) == 0 && o.subs[i].indexOf(v.file3_separator) > 0) {
            o.subs[i] = o[o.fd[1]](o.subs[i])
          }
          if (o.subs[i].indexOf("[") == 0 && o.subs[i].indexOf("]") > 1) {
            o.files_subtitle[i] = o.subs[i].substr(o.subs[i].indexOf("[") + 1, o.subs[i].indexOf("]") - 1);
            o.subs[i] = o.subs[i].substr(o.subs[i].indexOf("]") + 1);
            urlcnfg = false
          } else {
            o.files_subtitle[i] = o.subs[i].substr(o.subs[i].lastIndexOf("/") + 1);
            o.files_subtitle[i] = o.files_subtitle[i].substr(0, o.files_subtitle[i].lastIndexOf("."))
          }
          if (o.subs[i].indexOf("#0") == 0) {
            o.subs[i] = fd0(o.subs[i])
          }
          if (o.subs[i].indexOf("#" + v.enc2) == 0) {
            o.subs[i] = o[o.fd[0]](o.subs[i])
          }
          if (o.subs[i].indexOf("#" + v.enc3) == 0 && o.subs[i].indexOf(v.file3_separator) > 0) {
            o.subs[i] = o[o.fd[1]](o.subs[i])
          }
        }
        if (o.files_subtitle.length > 1 && v.sub_all == 1) {
          o.files_subtitle.push(StringVar('sub_all_title', Lang('together')));
          o.subs.push("all")
        }
        if (o.files_subtitle.length > 0 && v.sub_off == 1) {
          if (v.sub_off0 == 1) {
            ioff = 0;
            start++;
            o.files_subtitle.unshift(StringVar('sub_off_title', Lang('off')));
            o.subs.unshift("")
          } else {
            o.files_subtitle.push(StringVar('sub_off_title', Lang('off')));
            o.subs.push("");
            ioff = o.files_subtitle.length - 1
          }
        }
        for (var i = 0; i < o.subs.length; i++) {
          if (exist(v.default_subtitle)) {
            if (v.default_subtitle == o.files_subtitle[i]) {
              start = i;
              o.current_subtitle = i;
              v.subtitle_start = 1
            }
          }
          if (memory != '') {
            if (memory == o.files_subtitle[i]) {
              start = i;
              o.current_subtitle = i
            }
          }
        }
        if (v.sub_off == 1 && v.subtitle_start == 0) {
          o.current_subtitle = ioff
        }
        exist(o.controls) ? o.controls.SubtitleChanged() : '';
        if (v.subtitle_start == 1) {
          o.current_subtitle = start;
          if (o.start) {
            if (v.sub_all == 1 && o.subs[start] == "all") {
              SubtitleLoadAll(o.current_subtitle)
            } else {
              SubtitleLoad(o.current_subtitle)
            }
          } else {
            wait = x;
            o.subtitle_on = o.subs[start] != 'off';
            setTimeout(Parsed, 500)
          }
        } else {
          if (urlcnfg && o.subs.length < 3) {
            SubtitleLoad(ioff == 0 ? 1 : 0)
          }
          v.sub_off != 1 ? o.current_subtitle = -1 : ''
        }
      } else {
        Remove()
      }
    };
    this.hlsSub = function(x) {
      SubtitleLoad2(x, 'hls')
    };

    function SubtitleLoad(x) {
      if (exist(o.subs[x])) {
        if (o.subs[x].indexOf(".") > -1) {
          o.subsor = o.subs[x].split(" or ");
          o.sub_or = 0;
          SubtitleLoad2(x)
        } else {
          if (o.subs[x].indexOf('upld') == 0) {
            if (upld[o.subs[x].substr(4)]) {
              SubtitleParse(o.files_subtitle[x], upld[o.subs[x].substr(4)])
            }
          }
          if (o.subs[x].indexOf('hls') == 0) {
            o.media.hlsDashSub(x, "hls2");
            o.subtitle_on = true;
            o.current_subtitle = x;
            o.controls.SubtitleChanged()
          }
        }
      }
    }

    function SubtitleLoadAll(x) {
      o.subtitle_on = true;
      Parsed()
    }

    function SubtitleLoad2(x, y) {
      var url = y == 'hls' ? x : trim(o.subsor[o.sub_or]);
      var url2 = url;
      var _id;
      if (parsed[url]) {
        if (o.subs[x] != 'all') {
          o.subtitle_on = true;
          Parsed()
        }
      } else {
        if (url.indexOf('id_') > 0 && url.indexOf('id_') < 4) {
          _id = url.substr(0, url.indexOf('id_'));
          url2 = url.substr(url.indexOf('id_') + 3)
        }
        var xhr = XHR(url2);
        loading = x;
        o.subload = 1;
        xhr.onload = function() {
          o.subload = 0;
          if (this.readyState == 4 && this.status == 200) {
            o.subtitle_on = true;
            SubtitleParse(url, this.responseText, x, y)
          } else {
            if (o.sub_or + 1 < o.subsor.length) {
              o.sub_or++;
              SubtitleLoad2(loading)
            } else {
              SubtitleError("loading_error")
            }
          }
        };
        xhr.onerror = function(e) {
          o.subload = 0;
          if (o.sub_or + 1 < o.subsor.length) {
            o.sub_or++;
            SubtitleLoad2(loading)
          } else {
            SubtitleError("loading_error")
          }
        };
        xhr.send()
      }
    };

    function SubtitleError(x) {
      log("subtitle not found or access denied");
      if (o.files_subtitle[o.current_subtitle]) {
        if (o.files_subtitle[o.current_subtitle].indexOf(Lang("loading_error")) == -1) {
          o.files_subtitle[o.current_subtitle] = o.files_subtitle[o.current_subtitle] + ' (' + Lang(x) + ')'
        }
      }
      if (v.subtitle_errdel == 1 && loading > -1) {
        o.subs[loading] = '';
        o.files_subtitle[loading] = ''
      }
      o.current_subtitle = -1;
      o.subtitle_on = false;
      if (o.constrols) {
        o.controls.SubtitleChanged();
        o.controls.refresh()
      } else {
        setTimeout(function() {
          if (o.controls) {
            o.controls.SubtitleChanged();
            o.controls.refresh()
          }
        }, 100)
      }
      if (exist(o.subtitle)) {
        o.frame.removeChild(o.subtitle);
        o.subtitle = null
      }
    }

    function SubtitleParse(url, x, y, z) {
      var _id;
      if (x.indexOf("#" + v.enc2) == 0) {
        x = o[o.fd[0]](x)
      }
      if (x.indexOf("#" + v.enc3) == 0 && x.indexOf(v.file3_separator) > 0) {
        x = o[o.fd[1]](x)
      }
      if (url.indexOf('id_') > 0 && url.indexOf('id_') < 4) {
        _id = url.substr(0, url.indexOf('id_'))
      }
      if (url.indexOf('.srt') > -1 || url.indexOf('.ass') > -1 || url.indexOf('.ssa') > -1 || url.indexOf('.vtt') > -1) {
        var l = _id ? _id : o.current_subtitle;
        if (o.subs[l] == "all") {
          l = y
        }
        if (z != 'hls' || !sub[l]) {
          sub[l] = Object();
          sub[l][0] = [];
          sub[l][1] = []
        }
        var rows = Array();
        rows = x.split(/\r|\n/);
        var cnt = 1;
        var t1 = 0;
        var t2 = 0;
        var url_shift = (exist(v.subshift) ? v.subshift : 0);
        if (url.indexOf('shift=') > 0) {
          url_shift = url.substr(url.indexOf('shift=') + 6) * 1
        }
        for (var i = 0; i < rows.length; i++) {
          if (url.indexOf('.srt') > -1 || url.indexOf('.vtt') > -1) {
            if (rows[i].indexOf('-->') > -1 && rows[i].indexOf(':') > -1) {
              if (z == 'hls') {
                if (hlsrows.indexOf(rows[i]) > -1) {
                  break
                }
                hlsrows.push(rows[i])
              }
              t1 = TimeSub(rows[i].substr(0, rows[i].indexOf('-->'))) * 1 + url_shift;
              t1 == 0 ? t1 = 1 : '';
              t2 = TimeSub(rows[i].substr(rows[i].indexOf('-->') + 4, 12)) * 1 + url_shift;
              exist(sub[l][0][t1]) ? '' : sub[l][0][t1] = '';
              for (var j = t1; j < t2; j++) {
                sub[l][1][j] = t1
              }
              cnt++
            } else {
              rows[i] = trim(rows[i]);
              if (rows[i] != '' && rows[i].length > 0 && rows[i] != cnt && rows[i] != 'WEBVTT') {
                if (exist2(sub[l][0][t1])) {
                  sub[l][0][t1] = sub[l][0][t1] + '<br>' + rows[i]
                } else {
                  sub[l][0][t1] = rows[i]
                }
              }
            }
          }
          if (url.indexOf('.ass') > -1 || url.indexOf('.ssa') > -1) {
            if (rows[i].indexOf('Dialogue:') > -1) {
              t1 = TimeSub(rows[i].substr((url.indexOf('.ssa') > -1 ? rows[i].indexOf('=0') + 3 : 12), 12)) * 1 + url_shift;
              t2 = TimeSub(rows[i].substr((url.indexOf('.ssa') > -1 ? rows[i].indexOf('=0') + 14 : 23), 10)) * 1 + url_shift;
              var p = '';
              if (rows[i].indexOf('0,,') > 0) {
                p = rows[i].substr(rows[i].indexOf('0,,') + 3)
              } else {
                if (rows[i].indexOf('ffect,') > 0) {
                  p = rows[i].substr(rows[i].indexOf('ffect,') + 6)
                }
                if (rows[i].indexOf(')}') > 0) {
                  p = rows[i].substr(rows[i].indexOf(')}') + 2)
                }
              }
              if (p != '') {
                if (sub[l][0][t1] != undefined) {
                  sub[l][0][t1] += '<br>' + p
                } else {
                  sub[l][0][t1] = p
                }
                sub[l][0][t1] = sub[l][0][t1].replace(/{.*?}/, '');
                sub[l][0][t1] = sub[l][0][t1].replace(/\\\\N/, '<br>');
                sub[l][0][t1] = sub[l][0][t1].replace(/\\N/, '<br>');
                for (var j = t1; j < t2; j++) {
                  sub[l][1][j] = t1
                }
              }
            }
          }
        }
        parsed[url] = true;
        if (o.subs[y] != 'all') {
          z != 'hls' ? Parsed() : ''
        }
      } else {
        if (x != '') {
          if (x.indexOf('[') == 0) {
            Start(x)
          } else {
            SubtitleError("error")
          }
        } else {
          Remove();
          o.controls.refresh()
        }
      }
    }

    function Parsed() {
      o.controls.SubtitleChanged();
      o.actions.RenewSubtitle();
      o.controls.refresh()
    }

    function TimeSub(srt) {
      var tmp = srt.split(':');
      var out = 0;
      tmp.length == 2 ? tmp.unshift("00") : '';
      tmp[0] != '00' ? out += tmp[0] * 3600 : '';
      tmp[1] != '00' ? out += tmp[1] * 60 : '';
      out += tmp[2].substr(0, 2) * 1;
      out = out * 10 + tmp[2].substr(3, 1) * 1;
      return out
    };

    function SetSubtitle(x) {
      if (exist(o.current_subtitle)) {
        if (o.current_subtitle != x) {
          hlsrows = [];
          if (x == -1 || (v.sub_off == 1 && x == ioff)) {
            SubtitleOff()
          } else {
            v.sub_shift = 0;
            o.current_subtitle = x;
            o.subtitle_on = true;
            v.subtitle_start = 1;
            SetSubtitle2(x);
            js("subtitle", o.files_subtitle[x]);
            o.controls.SubtitleChanged()
          }
        } else {
          if (v.sub_off != 1) {
            SubtitleOff()
          }
        }
      }
    }

    function SubRem() {
      if (exist(o.files_subtitle[o.current_subtitle])) {
        if (o.storage && v.sub_store == 1) {
          localStorage.setItem("pljssubtitle", o.files_subtitle[o.current_subtitle])
        } else {
          o.remember_sub = o.files_subtitle[o.current_subtitle]
        }
      }
    }

    function SetSubtitle2(x) {
      if (exist(o.subs[x])) {
        log("Subtitle", x);
        o.current_subtitle = x;
        SubRem();
        if (o.file_type == "hls" && o.hls_subs == true) {
          o.media.hlsDashSub(x, "hls")
        } else {
          if (o.file_type == "dash" && o.dash_subs == true) {
            o.media.hlsDashSub(x, "dash")
          } else {
            if (o.subs[x] == "all") {
              SubtitleLoadAll(o.current_subtitle)
            } else {
              SubtitleLoad(o.current_subtitle)
            }
          }
        }
      }
    };
    this.SubUpload = function() {
      if (o.subupld) {
        var x = o.subupld.files;
        if (x[0]) {
          var y = new FileReader();
          y.onload = function(e) {
            var z = e.target.result;
            upld.push(z);
            o.current_subtitle = -1;
            var z = x[0].name;
            if (z.length > 40) {
              z = x[0].name.substr(0, 15) + '...' + x[0].name.substr(-15)
            }
            if (v.sub_off == 1 && v.sub_off0 == 1) {
              o.subs.push('upld' + (upld.length - 1));
              o.files_subtitle.push(z + '');
              SetSubtitle(o.subs.length - 1)
            } else {
              o.subs.unshift('upld' + (upld.length - 1));
              o.files_subtitle.unshift(z + '');
              v.sub_off == 1 ? ioff++ : '';
              SetSubtitle(0)
            }
            o.subupld.value = ""
          };
          y.readAsText(x[0])
        } else {
          o.subupld.click()
        }
      }
    };
    this.SetSubtitle = function(x) {
      SetSubtitle(x)
    };
    this.ioff = function() {
      return ioff
    };
    this.setioff = function(x) {
      ioff = x
    };
    this.show = function(x) {
      Show(x)
    };
    this.style = function() {
      Style()
    };
    this.remove = function() {
      Remove()
    };
    this.off = function() {
      SubtitleOff()
    };

    function SubtitleOff() {
      js("subtitle", "off");
      o.current_subtitle = v.sub_off == 1 ? ioff : -1;
      v.subtitle_start = 0;
      o.subtitle_on = false;
      o.controls.SubtitleChanged();
      SubRem();
      o.dash_subs ? SetSubtitle2(o.current_subtitle) : '';
      exist(o.subtitle) ? o.frame.removeChild(o.subtitle) : '';
      o.subtitle = null
    }

    function Show(time) {
      if (o.nativecontrols) {
        return
      }
      var t = parseInt(time * 10);
      if (v.sub_shift) {
        time = time - v.sub_shift * 1
      }
      if (o.subtitle_on && exist(o.subs)) {
        if (sub) {
          var x = o.current_subtitle;
          var t = parseInt(time * 10);
          if (v.subpausehide == 1 && !o.play) {
            return
          }
          if (o.subs[x] == "all") {
            if (!alldd) {
              for (var i = 0; i < o.subs.length; i++) {
                setTimeout(SubtitleLoad, i * 500, i)
              }
              if (!sub[x]) {
                sub[x] = Object();
                sub[x][0] = Array();
                sub[x][1] = Array()
              }
              alldd = true
            } else {
              if (sub[x][1][t]) {} else {
                for (var i = 0; i < o.subs.length; i++) {
                  if (sub[i]) {
                    if (exist(sub[i][1])) {
                      if (exist(sub[i][1][t])) {
                        if (!sub[x][0][t]) {
                          sub[x][0][t] = ''
                        }
                        sub[x][0][t] += (sub[x][0][t] != '' ? '<br>[sub2]' : '') + sub[i][0][sub[i][1][t]] + (sub[x][0][t] != '' ? '[/sub2]' : '')
                      }
                    }
                  }
                }
                if (exist(sub[x][0])) {
                  if (exist(sub[x][0][t])) {
                    sub[x][1][t] = t
                  }
                }
              }
            }
          }
          if (exist(sub[x])) {
            if (exist(sub[x][1])) {
              if (exist(sub[x][1][t])) {
                var y = '';
                y = sub[x][0][sub[x][1][t]];
                if (!exist(o.subtitle)) {
                  o.subtitle = createElement('div');
                  attr(o.subtitle, {
                    id: 'pjs_' + v.id + '_' + 'subtitle'
                  });
                  o.frame.appendChild(o.subtitle);
                  Style();
                  js("subtitles", o.files_subtitle[x])
                }
                if (empty) {
                  show2(o.subtitle)
                }
                SubtitleBottom();
                if (v.sub_split2words == 1) {
                  y = PluginSubword(y)
                }
                if (v.sub_all == 1) {
                  y = y.replace(/\[sub2\]/gm, '<span style="color:' + CheckColor(v.sub_color2) + '">');
                  y = y.replace(/\[\/sub2\]/gm, '</span>')
                }
                if (y.indexOf('<c.') > -1) {
                  y = y.replace(/\<c./gm, '<span style=color:');
                  y = y.replace(/\<\/c\>/gm, '</span>')
                }
                if (v.apiprm) {
                  if (v.apiprm.sub == 1 && lastsub != y) {
                    js("sub", y);
                    lastsub = y
                  }
                }
                o.subtitle.innerHTML = '<span style="' + (v.sub_bg == 1 ? 'background-color:' + hex2rgb(v.sub_bgcolor, v.sub_bga) + ';' : '') + '-webkit-box-decoration-break: clone;color:' + CheckColor(v.sub_color) + ';padding:' + v.sub_bgpadding + 'px ' + v.sub_bgpadding * 2 + 'px;border-radius:' + v.sub_bgo + 'px;margin:0 0;line-height:' + (v.sub_lineheight ? v.sub_lineheight : 1.8) + ';font-weight:' + v.sub_weight + '">' + trim(y) + '</span>';
                css(o.subtitle, {
                  "font-size": ((parseInt(v.sub_size) + ((parseInt(v.sub_sizeproc) - 100) * parseInt(v.sub_size) / 100)) + "px")
                });
                if (v.sub_big_fullscreen == 1) {
                  if (o.fullscreen) {
                    css(o.subtitle, {
                      "font-size": ((v.sub_size_fullscreen + ((parseInt(v.sub_sizeproc) - 100) * v.sub_size_fullscreen / 100)) + "px")
                    })
                  }
                }
                empty = false
              } else {
                if (!empty && exist(o.subtitle)) {
                  Empty()
                }
              }
            }
          } else {
            Empty()
          }
        }
      }
    }

    function Empty() {
      if (!empty) {
        o.subtitle ? o.subtitle.innerHTML = '' : '';
        empty = true;
        hide2(o.subtitle)
      }
    }

    function Style() {
      if (o.subtitle) {
        css(o.subtitle, {
          "position": "absolute",
          "width": "100%",
          "padding-left": "10%",
          "padding-right": "10%",
          "left": 0,
          "color": v.sub_color,
          "text-align": "center",
          "box-sizing": "border-box"
        });
        if (v.sub_fonted == 1 && exist(v.sub_font)) {
          v.sub_font != '' ? css(o.subtitle, {
            "font-family": v.sub_font
          }) : ''
        }
        if (v.sub_shadow == 1) {
          css(o.subtitle, {
            "text-shadow": "1px 1px 2px black"
          })
        } else {
          css(o.subtitle, {
            "text-shadow": "none"
          })
        }
        if (v.sub_drag == 1) {
          PluginMovable(o.subtitle, 'o.subdrag')
        } else {
          v.sub_split2words != 1 ? Pnt0(o.subtitle) : ''
        }
      }
    }

    function SubtitleBottom() {
      if (!o.subdrag) {
        if (o.controls.ToolbarHidden() || v.sub_bottom > v.toolbar.h) {
          css(o.subtitle, {
            "position": "absolute",
            "top": "auto",
            "left": 0,
            "bottom": (v.sub_bottom * 1)
          })
        } else {
          css(o.subtitle, {
            "position": "absolute",
            "top": "auto",
            "left": 0,
            "bottom": (v.sub_bottom * 1 + v.toolbar.h * 1)
          })
        }
      }
    }

    function Remove() {
      o.current_subtitle = -1;
      o.subtitle_on = false;
      o.thumbs_on = false;
      v.subtitle = null;
      v.thumbnails = null;
      o.sub = null;
      o.subs = null;
      alldd = false;
      parsed = [];
      sub = [];
      if (exist(o.controls)) {
        o.controls.SubtitleChanged()
      }
      o.files_subtitle = null;
      if (exist(o.subtitle)) {
        o.frame.removeChild(o.subtitle);
        o.subtitle = null
      }
      o.current_subtitle = null;
      o.subtitle_on = false
    }
  };
  var Motion = function(x) {
    var _ease;
    var _timer;
    var _type;
    var _from;
    var _to;
    var _steps;
    var _step = 0;
    var _speed;
    var _stop = false;
    var _timeout;
    if (x.me != undefined && x.mc != undefined && x.type != undefined && x.to != undefined) {
      if (x.time == null) {
        if (x.type.indexOf("alpha") > -1) {
          x.to == 0 ? x.time = 0.5 : x.time = 0.2
        } else {
          x.time = 0.20
        }
      }
      _ease = Ease(x.ease);
      if (x.type.indexOf("scale") == -1) {
        if (exist(o.motions[x.me])) {
          o.motions[x.me].TheEnd()
        }
        o.motions[x.me] = this
      }
      if (x.show == 1) {
        x.mc.set("display", true)
      }
      _type = x.type.split('|');
      _to = String(x.to).split('|');
      _from = new Array();
      for (var i = 0; i < _type.length; i++) {
        if (!_to[i]) {
          _to[i] = _to[0]
        }
        if (_type[i] == "alpha") {
          _from[i] = x.mc.g("opacity")
        }
        if (_type[i] == "alpha_div") {
          _from[i] = x.mc.style.opacity
        }
        if (_type[i] == "y") {
          _from[i] = x.mc.g("y")
        }
        if (_type[i] == "x") {
          _from[i] = x.mc.g("x")
        }
        if (_type[i] == "left") {
          _from[i] = parseInt(x.mc.style.left)
        }
        if (_type[i] == "top") {
          _from[i] = parseInt(x.mc.style.top)
        }
        if (_type[i] == "scale") {
          _from[i] = x.mc.g("scaleX")
        }
        if (_type[i] == "scroll") {
          _from[i] = x.mc.scrollTop
        }
        if (_type[i] == "scrollleft") {
          _from[i] = x.mc.scrollLeft
        }
        if (_type[i] == "scaleY") {
          _from[i] = x.mc.g("scaleY")
        }
        if (_type[i] == "scaleX") {
          _from[i] = x.mc.g("scaleX")
        }
        if (_type[i] == "width") {
          _from[i] = x.mc.g("width")
        }
        if (_type[i] == "width_div") {
          _from[i] = x.mc.offsetWidth;
          _to[i] = Math.floor(_to[i]);
          x.me == "line_play" ? log("width", x.me, _from[i], _to[i], x.mc.offsetWidth) : ''
        }
        if (_type[i] == "height") {
          _from[i] = x.mc.g("height")
        }
        if (_type[i] == "height_div") {
          _from[i] = x.mc.offsetHeight
        }
        _to[i] = Number(_to[i]);
        _from[i] = Number(_from[i])
      }
      _speed = x.time * 1000 / _ease.length;
      _steps = _ease.length;
      if (_type.length == 1 && _from[0] == _to[0]) {
        End()
      } else {
        setTimeout(onStep, Math.round(_speed))
      }
    }

    function onStep() {
      for (var i = 0; i < _type.length; i++) {
        var tmp = _from[i] + (_to[i] - _from[i]) * (_ease[_step] ? _ease[_step] : 0);
        Alpha(_type[i], tmp);
        if (_type[i] == "y") {
          x.mc.set("top", tmp)
        }
        if (_type[i] == "x") {
          x.mc.set("left", tmp)
        }
        if (_type[i] == "left") {
          x.mc.style.left = tmp + "px"
        }
        if (_type[i] == "top") {
          x.mc.style.top = tmp + "px"
        }
        if (_type[i] == "scale") {
          x.mc.set("scale", tmp)
        }
        if (_type[i] == "scaleY") {
          x.mc.set("scaleY", tmp)
        }
        if (_type[i] == "scaleX") {
          x.mc.set("scaleX", tmp)
        }
        if (_type[i] == "scroll") {
          x.mc.scrollTop = tmp
        }
        if (_type[i] == "scrollleft") {
          x.mc.scrollLeft = tmp
        }
        if (_type[i] == "width") {
          x.mc.set("width", tmp)
        }
        if (_type[i] == "width_div") {
          css(x.mc, {
            "width": tmp
          })
        }
        if (_type[i] == "height") {
          x.mc.set("height", tmp)
        }
        if (_type[i] == "height_div") {
          css(x.mc, {
            "height": tmp
          })
        }
      }
      _step++;
      if (!_stop) {
        if (_step == _steps) {
          End()
        } else {
          _timeout = setTimeout(onStep, Math.round(_speed))
        }
      }
    }

    function End() {
      _stop = true;
      if (x.hide) {
        if (_type[0] == "alpha_div" || _type[0] == "left") {
          hide(x.mc)
        } else {
          x.mc.set("display", false)
        }
      }
      if (x.type.indexOf("scale") == -1) {
        o.motions[x.me] = null;
        delete o.motions[x.me]
      }
      for (var i = 0; i < _type.length; i++) {
        Alpha(_type[i], _to[i])
      }
      clearTimeout(_timeout)
    };

    function Alpha(y, z) {
      if (y == "alpha") {
        x.mc.set("opacity", z)
      }
      if (y == "alpha_div") {
        x.mc.style.opacity = z
      }
    }
    this.TheEnd = function() {
      End()
    };
    this.TheEnd2 = function() {
      _step = _steps - 1;
      onStep();
      End()
    };
    this.XY = function(x0, x1, y0, y1) {
      var e = false;
      for (var i = 0; i < _type.length; i++) {
        if (_type[i] == 'x' && x0 != x1) {
          e = true
        }
        if (_type[i] == 'y' && y0 != y1) {
          e = true
        }
      }
      e ? End() : ''
    };

    function Ease(str) {
      switch (str) {
        case "elastic":
          return [0, 0.432, 0.857, 1.275, 1.372, 1.296, 1.102, 0.957, 0.883, 0.87, 0.914, 0.992, 1.029, 1.041, 1.036, 1.019, 0.996, 0.984, 0.981, 0.988, 1.001, 1.006, 1.007, 1.006, 1.003, 0.999, 0.998, 0.998, 0.998, 0.998, 1];
          break;
        case "cubic":
          return [0, 0.096, 0.185, 0.267, 0.344, 0.416, 0.483, 0.547, 0.606, 0.659, 0.705, 0.747, 0.785, 0.818, 0.848, 0.874, 0.897, 0.918, 0.935, 0.95, 0.962, 0.971, 0.979, 0.985, 0.99, 0.994, 0.997, 0.999, 1];
          break;
        default:
          return [0, 0.175, 0.32, 0.44, 0.52, 0.6, 0.67, 0.73, 0.775, 0.82, 0.85, 0.885, 0.915, 0.935, 0.95, 0.97, 0.983, 0.993, 1];
          break
      }
    }
  };
  var System = function() {
    var N = navigator.appName,
      ua = navigator.userAgent,
      tem;
    var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    var M = ua.match(/(opera|chrome|safari|firefox|msie|trident|edge)\/?\s*(\.?\d+(\.\d+)*)/i);
    if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
    var mtp = navigator.maxTouchPoints;
    this.browser = M ? M[1] : N;
    this.version = M ? M[2] : navigator.appVersion;
    this.touch = navigator.maxTouchPoints > 1;
    this.opera = this.browser == "Opera";
    this.ie9 = this.browser == "MSIE 9.0";
    this.ie = this.browser == "MSIE" || this.browser == "Trident" || this.browser == "Edge";
    this.edge = ua.search(/(edge)\/?\s*/i) > -1;
    this.ff = this.browser == "Firefox";
    this.safari = this.browser == "Safari";
    this.chrome = window.chrome;
    this.win = ua.search("Windows NT") > -1;
    this.ios = (ua.search(/(iphone|ipad|ipod)\/?\s*/i) > -1) || (navigator.platform === 'MacIntel' && mtp > 1);
    this.tv = v.notv != 1 && ua.search(/(TV|tvOS|webOS|armv|BRAVIA|Roku|Tizen|Philips)\/?\s*/i) > -1;
    this.lg = v.notv != 1 && ua.search(/(LG)\/?\s*/i) > -1;
    this.iphone = ua.search(/(iphone)\/?\s*/i) > -1;
    this.ipad = this.ios && !this.iphone;
    this.webkit = 'WebkitAppearance' in document.documentElement.style;
    if (ua.search(/(android)\/?\s*/i) > -1) {
      mtp > 0 ? this.android = true : this.tv = true;
      if (matchMedia('(pointer:fine)').matches) {
        this.tv = true
      }
    }
    this.mobile = (this.ios || this.android || (ua.search(/(blackberry|iemobile|opera mini)\/?\s*/i) > -1)) && !this.tv;
    this.mutedautoplay = this.safari || this.chrome;
    this.fullscreen = false;
    if (this.ios) {
      this.iosv = parseFloat(ua.substr(ua.indexOf('OS ') + 3, 4).replace('_', '.'));
      if (this.ipad && (!'ontouchstart' in window || mtp < 2)) {
        this.mobile = this.ios = false;
        this.tv = true
      }
    }
    this.desktop = !this.mobile;
    this.mobiletv = this.mobile || this.tv;
    this.wkdt = this.webkit && this.desktop;
    if (o.frame.requestFullScreen || o.frame.requestFullscreen || o.frame.mozRequestFullScreen || o.frame.webkitRequestFullScreen || o.frame.msRequestFullscreen) {
      this.fullscreen = true
    }
  };

  function UpdateObject(obj, obj2) {
    for (var s in obj2) {
      if (typeof(obj2[s]) == 'object') {
        if (s == "events" || s == "file") {
          obj[s] = obj2[s]
        } else {
          for (var s2 in obj2[s]) {
            if (typeof(obj[s]) != 'object') {
              obj[s] = {}
            }
            if (typeof(obj2[s][s2]) == 'object') {
              for (var s3 in obj2[s][s2]) {
                if (typeof(obj[s][s2]) != 'object') {
                  obj[s][s2] = {}
                }
                if (typeof(obj2[s][s2][s3]) == 'object') {
                  for (var s4 in obj2[s][s2][s3]) {
                    if (typeof(obj[s][s2][s3]) != 'object') {
                      obj[s][s2][s3] = {}
                    }
                    obj[s][s2][s3][s4] = obj2[s][s2][s3][s4];
                    if (s3 == 'padding' || s3 == 'margin') {
                      obj[s][s2][s3][s4] = parseInt(obj[s][s2][s3][s4])
                    }
                  }
                } else {
                  obj[s][s2][s3] = obj2[s][s2][s3];
                  if (s2 == 'padding' || s2 == 'margin') {
                    obj[s][s2][s3] = parseInt(obj[s][s2][s3])
                  }
                }
              }
            } else {
              obj[s][s2] = obj2[s][s2];
              if (s == 'padding' || s == 'margin') {
                obj[s][s2] = parseInt(obj[s][s2])
              }
            }
          }
        }
      } else {
        if (s.indexOf("roll") > 0 && trim(obj2[s]) === "") {} else {
          obj[s] = SettingsParser(s, obj2[s])
        }
      }
    }
    return obj
  };
  var SettingsParser = function(key, value) {
    if (typeof(value) == 'string') {
      value = trim(value);
      if (key.indexOf("color") > -1 && value != -1) {
        value = CheckColor(value)
      }
    }
    return value
  };

  function StorageSupport() {
    try {
      var storage = window['localStorage'],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true
    } catch (e) {
      return false
    }
  };

  function killMotion(motion_id) {
    if (motion_id) {
      if (exist(o.motions[motion_id])) {
        o.motions[motion_id].TheEnd()
      }
    }
  };
  var Lang = function(x) {
    var y = x;
    if (y) {
      y = x.charAt(0).toUpperCase() + x.slice(1);
      if (y.indexOf("_") > -1) {
        y = y.replace(/_/ig, " ")
      }
    }
    var en = {
      "of": "of",
      "kbps": "kbps",
      "castdevice": "Playback on device",
      "casterror": "Playback error on device",
      "together": "All at once",
      "pass": "Password",
      "0val": "No",
      "sleeptimer": "Sleep",
      "offsettimer": "Skip",
      "1val": "Yes",
      "sub_bottom": "Bottom margin",
      "sub_weight": "Font weight",
      "sub_shadow": "Shadow",
      "sub_bga": "Background opacity",
      "sub_bgcolor": "Background color",
      "sub_sizeproc": "Text size",
      "sub_color": "Text color",
      "sub_color2": "Text color 2",
      "sub_shift": "Time shift",
      "sub_reset": "Reset",
      "prev": "Previous",
      "copied": "Copied to clipboard",
      "160p": "Tiny",
      "240p": "Small",
      "360p": "Medium",
      "480p": "High",
      "540p": "High",
      "720p": "HD",
      "1080p": "Full HD",
      "1296p": "Super HD",
      "1440p": "Quad HD",
      "2160p": "Ultra HD 4K",
      "ads": "Ad",
      "adsinvitation": "Go to the advertiser's website",
      "audiotrack": "Audio",
      "live": "LIVE",
      "fullscreen": "Enter fullscreen",
      "normalscreen": "Exit fullscreen"
    };
    if (exist(en[x])) {
      y = en[x]
    }
    if (exist(o['lang_' + v.lang])) {
      if (exist(o['lang_' + v.lang][x])) {
        y = o['lang_' + v.lang][x]
      }
    }
    if (v.rename) {
      if (v.rename[x]) {
        y = v.rename[x]
      }
    }
    return y
  };
  var gaTracker = function(x, y, z) {
    if (!exist(o.gatracked[y]) && v.playerjscom != 1) {
      var t = o.titlestore ? o.titlestore : (v.title ? v.title : '');
      exist(v.label) ? t = v.label : '';
      if (v.yamtr_event[x] == 1 && v.yamtr == 1 && exist(v.yamtrid)) {
        if (x == "init") {
          setInterval(yaHit, 300000)
        }
        if (exist(window["yaCounter" + v.yamtrid])) {
          window["yaCounter" + v.yamtrid].reachGoal('playerjs_' + x, {
            title: t
          });
          log("Yandex", 'playerjs_' + x)
        } else {
          log("Yandex Metric error")
        }
      }
      if (v.ga_event[x] == 1) {
        if (v.ga == 1) {
          var gao;
          if (v.ga4 == 1) {
            if (window.gtag) {
              gao = {
                'label': t
              };
              if (v.galabels) {
                if (typeof(v.galabels) == "object") {
                  for (var g in v.galabels) {
                    if (v.galabels.hasOwnProperty(g)) {
                      gao[g] = v.galabels[g]
                    }
                  }
                }
              }
              gtag('event', 'playerjs_' + x, gao)
            }
          } else {
            if (window.ga) {
              gao = {
                eventCategory: 'Player',
                eventAction: y
              };
              if (t != '') {
                gao.eventLabel = t
              }
              if (v.gainact == 1 && !o.clicktime) {
                gao.nonInteraction = 1
              }
              ga('user.send', 'event', gao)
            }
          }
        }
      }
    }
    z ? o.gatracked[y] = true : ''
  };

  function yaHit() {
    if (exist(window["yaCounter" + v.yamtrid])) {
      window["yaCounter" + v.yamtrid].reachGoal('playerjs_hit')
    }
  };
  var YoutubeID = function(url) {
    var x = '';
    url = url.replace("v=", "{=");
    if (url) {
      if (url.indexOf('youtu.be/') > -1) {
        x = url.substr(url.indexOf(".be/") + 4);
        x.replace("/", "")
      } else {
        x = url.split(/(youtu.be\/|v\/|embed\/|watch\?|youtube.capiom\/user\/[^#]*#([^\/]*?\/)*)\??{?=?([^#\&\?]*)/)[3]
      }
      if (x != '') {
        if (x.indexOf("?t=") > 0) {
          v.start = x.substr(x.indexOf("?t=") + 3);
          var h = 0;
          var m = 0;
          var s = 0;
          if (v.start.indexOf("h") > 0) {
            h = v.start.substr(0, v.start.indexOf("h"));
            v.start = v.start.substr(v.start.indexOf("h") + 1)
          }
          if (v.start.indexOf("m") > 0) {
            m = v.start.substr(0, v.start.indexOf("m"));
            v.start = v.start.substr(v.start.indexOf("m") + 1)
          }
          if (v.start.indexOf("s") > 0) {
            s = v.start.substr(0, v.start.indexOf("s"));
            v.start = v.start.substr(v.start.indexOf("s") + 1)
          }
          if (h > 0 || m > 0 || s > 0) {
            v.start = h * 3600 + m * 60 + s * 1
          }
          x = x.substr(0, x.indexOf("?t="))
        }
      }
    }
    return x
  };
  var js = function(x, y, li, ev) {
    if (x == "init") {
      o.init = true
    }
    if (ev == 1) {
      for (var yi in y) {
        if (y.hasOwnProperty(yi)) {
          if (typeof(y[yi]) == "object") {
            y[yi] = ''
          }
        }
      }
    }
    if (v.eventstracker == 1 && o.init) {
      if (v.eventlisteners == 1 || li == 1) {
        JsEvent(x, y)
      } else {
        if (y != undefined) {
          if (typeof(y) == 'object') {
            try {
              y = JSON.stringify(y)
            } catch (e) {}
          } else {
            if (typeof(y) == 'string') {
              y = y.replace(/'/ig, '′')
            }
          }
        }
        if (typeof(v.events) == 'string') {
          if (v.events.indexOf("{") == 0) {
            try {
              v.events = v.events.replace(/\'/ig, '"');
              v.events = JSON.parse(v.events)
            } catch (e) {
              console.log(e)
            }
          }
        }
        if (typeof(v.events) == 'object') {
          if (exist(v.events[x]) || exist(v.events['other'])) {
            var z = x;
            if (!exist(v.events[x]) && exist(v.events['other'])) {
              z = 'other'
            }
            if (x.indexOf("vast_") == 0) {
              if (exist(v.events['vast'])) {
                z = 'vast'
              }
            }
            try {
              if (y !== undefined) {
                eval(v.events[z] + "('" + x + "','" + v.id + "','" + y + "')")
              } else {
                eval(v.events[z] + "('" + x + "','" + v.id + "')")
              }
            } catch (e) {
              log("events", e, x)
            }
          }
        } else {
          if (v.events == '') {
            v.events = "PlayerjsEvents"
          }
          try {
            if (y !== undefined) {
              eval(v.events + "('" + x + "','" + v.id + "','" + y + "')")
            } else {
              eval(v.events + "('" + x + "','" + v.id + "')")
            }
          } catch (e) {
            log("events", e, x, y)
          }
        }
      }
    }
    if (o.init && v.pjsframe == 1) {
      if (o.pjsfrm) {
        try {
          o.pjsfrm.contentWindow.postMessage({
            event: x,
            info: y
          }, "*")
        } catch (e) {}
      }
    }
    if (v.postmessage == 1 && li !== 1) {
      var zv = {
        event: x,
        time: o.media ? (x == "seek" ? o.seeked_time : o.media.time()) : 0
      };
      if (y != undefined) {
        zv["data"] = y
      }
      if (x == "duration" || x == "time") {
        zv["duration"] = o.media.duration()
      }
      if (x == "volume" || x == "unmute") {
        zv["volume"] = v.volume
      }
      if (x == "new") {
        zv["id"] = apiProcessor("playlist_id")
      }
      window.parent.postMessage(zv, '*');
      var z = x;
      x == "init" || x == "start" || x == "end" ? z = x + "ed" : '';
      x == "play" ? z = "resumed" : '';
      x == "pause" ? z = "paused" : '';
      x == "mute" ? z = "muted" : '';
      x == "unmute" ? z = "unmuted" : '';
      x == "seek" ? z = "rewound" : '';
      x == "vast_Impression" ? z = "adShown" : '';
      zv["event"] = z;
      if (z != '' && z != x) {
        zv = JSON.parse(JSON.stringify(zv));
        window.parent.postMessage(zv, '*')
      }
    }
  };
  var JsEvent = function(x, y) {
    var ev = document.createEvent('Events');
    if (y !== undefined) {
      ev.info = y
    }
    ev.initEvent(x, true, true);
    o.container.dispatchEvent(ev)
  };
  this.event = function(x, y) {
    o.events[x] = y
  };
  this.api = function(x, y, but) {
    v.logapi == 1 ? log('api', x, y) : '';
    return apiProcessor(x, y, but)
  };

  function apiProcessor(x, y, but) {
    if (exist(o.actions) && typeof(x) == 'string') {
      if (o.destroyed == 1) {
        return
      }
      if (but) {
        if (typeof(but) == 'string') {
          if (but.indexOf("id:") == 0) {
            but = o.controls.butByS(but.substr(3), "dom");
            if (but) {
              if (x == "button" && y == "toogle") {
                but.Click()
              }
            }
          }
        }
      }
      if (x == "play" || x == "file") {
        if (exist(y)) {
          var noads = false;
          if (typeof(y) == 'string') {
            y = y.replace(/(\r\n|\n|\r)/gm, "");
            var seekto = -1;
            if (y.indexOf("[seek:") > -1 && y.lastIndexOf("]") == y.length - 1) {
              seekto = y.substr(y.indexOf("[seek:") + 6, y.length - 1);
              seekto = parseInt(seekto.substr(0, seekto.length - 1));
              y = y.substr(0, y.indexOf("[seek:"));
              if (y == '') {
                o.actions.Seek(seekto);
                o.actions.Play();
                return
              } else {
                o.seekto = seekto
              }
            }
            if (y.indexOf("[skipads]") > -1) {
              noads = true;
              y = y.replace('[skipads]', '')
            }
            if (y.indexOf("#" + v.enc2) == 0) {
              y = o[o.fd[0]](y)
            }
            if (y.indexOf("#" + v.enc3) == 0 && y.indexOf(v.file3_separator) > 0) {
              y = o[o.fd[1]](y)
            }
            if (y.indexOf("#0") == 0) {
              y = fd0(y)
            }
            if (v.fplace == 1) {
              y = fplace(y)
            }
            if (y.indexOf(".txt") == y.length - 4) {
              var xhr = XHR(y);
              xhr.onload = function() {
                if (this.readyState == 4 && this.status == 200) {
                  try {
                    apiProcessor('play', JSON.parse(this.responseText))
                  } catch (e) {}
                }
              };
              xhr.send();
              return
            }
            if (y.indexOf("id:") == 0 && exist(o.playlist_dic)) {
              var z = FindIdPl(y);
              if (exist(o.playlist_dic[z])) {
                o.controls.PlaylistPlayId(z);
                seekto > -1 ? o.seekto = seekto : '';
                return true
              } else {
                return false
              }
            }
            if (y.indexOf("youtubeid:") == 0) {
              var z = y.substr(10);
              if (o.file_type == "youtube") {
                o.media.playByYoutubeId(z);
                return true
              } else {
                y = '//youtu.be/' + z
              }
            }
          }
          if (x == "play") {
            o.controls.PreNewPl();
            o.actions.NewFile(y, undefined, undefined, (noads ? 1 : 0))
          }
          if (x == "file") {
            o.newfile = true;
            v.autoplay = 0;
            o.actions.NewFile(y, 1, undefined, (noads ? 1 : 0));
            o.controls.Duration(0, 0);
            o.start = false
          }
        } else {
          if (x == "play") {
            o.actions.Play()
          }
          if (x == "file") {
            typeof Papi41 == 'function' ? Papi41() : ''
          }
        }
      }
      if (x == "preload") {
        if (exist(y)) {
          o.newfile = true;
          o.actions.NewFile(y, 1, 1)
        } else {
          o.media.Preload()
        }
      }
      if (x == "pause") {
        if (o.play) {
          o.actions.Pause();
          o.actions.RenewSubtitle()
        }
      }
      if (x == "channel" && exist(y)) {
        o.start && o.channels ? o.channels.SetChannel(y) : ''
      }
      if (x.indexOf("vpaid_") == 0) {
        if (o.vast) {
          o.vast.VpaidSet(x.substr(6), y)
        }
      }
      if (x == "alert") {
        o.alert.close();
        o.alert = new Alert();
        if (exist(y)) {
          o.alert.txt(y)
        } else {
          if (v.alert404 == 1) {
            o.alert.txt(v.alert404text)
          } else {
            o.alert.txt("Test message")
          }
          if (v.alert404v == 1 && exist(v.alert404video)) {
            o.err404v = new PluginErrorVideo()
          }
        }
      }
      if (x == "waiting") {
        !o.start ? o.controls.startcss() : '';
        o.controls.Waiting();
        o.controls.HideElement("control_start")
      }
      if (x == "toggle") {
        o.play ? o.actions.Pause() : o.actions.Play()
      }
      if (x == "stop") {
        v.preload = 0;
        v.autoplay = 0;
        o.media.Recover();
        o.actions.Stop()
      }
      if (x == "reload") {
        o.time = o.media.time();
        o.actions.Reload()
      }
      if (x == "download") {
        if (v.apiprm) {
          if (v.apiprm.on == 1 && v.apiprm.dwn == 1) {
            o.actions.Download()
          }
        }
      }
      if (x == "effect" && exist(y)) {
        if (o.effects) {
          o.effects.api(y)
        }
      }
      if (x == "share") {
        o.controls.showShare()
      }
      if (x == "startvast" && exist(y)) {
        if (v.vast == 1) {
          if (y.indexOf('js:') == 0) {
            v.midroll = y;
            v.midrolls = true;
            o.actions.advertising("midroll")
          } else {
            if (o.p != '') {
              var sv = JSON.parse(decode(o.p));
              for (var l in sv) {
                if (sv.hasOwnProperty(l)) {
                  if (exist(sv[l].id)) {
                    if (y == sv[l].id) {
                      v.midroll = 'prt' + (exist(sv[l]['cpm']) ? 'cpm' + sv[l]['cpm'] : '') + y + '_' + sv[l].preroll;
                      v.midrolls = true;
                      o.actions.advertising("midroll")
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (x == "vastbreak") {
        typeof VastBreak == "function" ? VastBreak() : ''
      }
      if (x == "cuid" && y) {
        v.cuid = y;
        o.continue ? o.continue.updateCuid() : ''
      }
      if (x == "mute") {
        o.actions.Mute()
      }
      if (x == "speed") {
        if (exist(y)) {
          o.actions.SetSpeed(y)
        } else {
          return o.files_speed[o.current_speed]
        }
      }
      if (x == "played") {
        if (v.apiprm && o.pld) {
          if (v.apiprm.pld == 1) {
            return Math.round((o.pld.filter(Boolean).length - 1) / Math.round(o.media.duration()) * 100)
          }
        }
      }
      if (x == "speeds") {
        return o.files_speed
      }
      if (x == "unmute") {
        o.actions.Unmute()
      }
      if (x == "thumbnails") {
        if (exist(y)) {
          v[x] = y;
          o.actions.Thumbs()
        }
      }
      if (x == "qualities") {
        return o.files_quality
      }
      if (x == "adblock") {
        return o.ab ? true : false
      }
      if (x == "live") {
        return o.media ? o.media.isLive() : false
      }
      if (x == "subtitles") {
        return v.sub_off == 1 ? o.files_subtitle.slice(0, -1) : o.files_subtitle
      }
      if (x == "native") {
        return o.nativecontrols
      }
      if (x.indexOf("subtitle:") == 0 && y) {
        v[x.replace('title:', '_')] = y;
        o.actions.RenewSubtitle()
      }
      if (x == "plduration") {
        return o.pldur
      }
      if (x == "audiotracks") {
        return o.files_audiotrack
      }
      if (x == "volume" || x == "setVolume") {
        if (exist(y)) {
          if (typeof y == "string") {
            if (y.indexOf("+") == 0) {
              y = v.volume + parseFloat(y.substr(1))
            } else {
              if (y.indexOf("-") == 0) {
                y = v.volume - parseFloat(y.substr(1))
              }
            }
          }
          if (y >= 0 && y <= 1) {
            o.actions.Volume(y)
          }
        }
        return o.muted ? 0 : v.volume
      }
      if (x == "muted") {
        return exist(o.muted) ? o.muted : false
      }
      if (x == "moveplaylist") {
        o.controls ? o.controls.PlaylistMove(y) : ''
      }
      if (x == "design") {
        y < 2 ? y = '' : '';
        if (exist2(o['u' + y])) {
          var x2 = JSON.parse(decode(o['u' + y]));
          var v2 = [];
          for (var l in v) {
            if (v.hasOwnProperty(l)) {
              if (l.indexOf("control_") == 0) {
                v[l] = null
              }
            }
          }
          if (typeof x2 == "object") {
            for (var k in x2) {
              if (x2.hasOwnProperty(k)) {
                if (k.indexOf("control_") == 0) {
                  v[k] = x2[k]
                }
                if (k == "toolbar") {
                  v2[k] = x2[k]
                }
              }
            }
          }
          v = UpdateObject(v, v2);
          var show_settings = false;
          if (o.controls.SettingsVisible()) {
            o.controls.Settings();
            show_settings = true
          }
          var show_playlist = false;
          if (o.controls.PlaylistVisible()) {
            o.controls.Playlist();
            show_playlist = true
          }
          o.controls.Remove();
          o.controls = null;
          o.controls = new Controls();
          if (o.media.status() == "playing") {
            o.controls.Play()
          }
          o.controls.Volume(v.volume);
          if (exist(v.title)) {
            Title(v.title)
          }
          if (show_settings) {
            o.controls.Settings()
          }
          if (show_playlist) {
            o.controls.Playlist()
          }
          if (o.fullscreen) {
            o.controls.Fullscreen()
          }
          if (key != 'control_duration') {
            o.controls.Duration(o.media.time(), o.media.duration())
          }
          MainResize()
        }
      }
      if (x == "vars") {
        return v.vars
      }
      if (x == "resize") {
        o.controls.resize(true)
      }
      if (x == "mainresize") {
        o.controls.resizeSettings()
      }
      if (x == "resize2") {
        MainResize()
      }
      if (x == "seek") {
        if (exist(y)) {
          if (typeof y == "string") {
            if (y.indexOf("%") > -1) {
              y = parseInt(y.substr(0, y.indexOf("%")));
              y = o.media.duration() * y / 100
            } else {
              var omt = o.media.time();
              if (o.continue && !o.start) {
                if (!o.continue.seeked) {
                  var f = o.continue.flag();
                  if (f.t && f.d) {
                    omt = f.t;
                    o.continue.seeked = true
                  }
                }
              }
              if (y.indexOf("+") == 0) {
                y = omt + parseFloat(y.substr(1))
              } else {
                if (y.indexOf("-") == 0) {
                  y = omt - parseFloat(y.substr(1))
                }
              }
            }
          }
          y = y * 1;
          y < 0 ? y = 0 : '';
          if (o.media.duration() > 0) {
            y > o.media.duration() ? y = 0 : ''
          }
          if (!exist(o.vast) && !exist(o.vastloader) && o.media.duration() > 0) {
            o.seekto = undefined;
            o.actions.Seek(y, true);
            o.actions.Playing()
          } else {
            o.seekto = y
          }
        }
      }
      if (x == "fullscreen") {
        !o.fullscreen ? o.actions.Fullscreen() : ''
      }
      if (x == "exitfullscreen") {
        o.fullscreen ? o.actions.Normalscreen() : ''
      }
      if (x == "isfullscreen") {
        return o.fullscreen
      }
      if (x == "size") {
        return o.screen_w + '/' + o.screen_h
      }
      if (x == "fix") {
        if (exist(o.minify)) {
          o.minify.Do()
        }
      }
      if (x == "unfixing" || x == "unfix") {
        if (exist(o.minify)) {
          o.minify.Un()
        }
      }
      if (x == "time" || x == "time2") {
        var _t = o.media ? o.media.time() : 0;
        if (o.continue && v.timestore == 1 && !o.start && _t == 0) {
          var f = o.continue.flag();
          if (f.t) {
            _t = f.t
          }
        }
        return x == "time2" ? timeFormat(_t) : _t
      }
      if (x == "timeplay") {
        if (o.butplstart) {
          apiProcessor("play", "id:" + o.butplstart)
        }
        if (o.butseekto) {
          apiProcessor("seek", o.butseekto);
          apiProcessor("play")
        }
      }
      if (x == "duration") {
        return o.media ? o.media.duration() : 0
      }
      if (x == "buffered") {
        return o.media ? o.media.loaded() : 0
      }
      if (x == "points") {
        if (y) {
          v.points = y;
          o.controls.RenewPoints()
        }
      }
      if (x == "quality") {
        if (exist(y)) {
          if (but) {
            v.hd = Switcher(v.hd, y, but);
            if (o.files_quality.length == 2) {
              o.actions.SetQuality(v.hd)
            }
          } else {
            o.actions.SetQuality(y)
          }
        } else {
          return o.media ? NoSpan(o.media.getQuality()) : 0
        }
      }
      if (x == "audiotrack") {
        if (exist(y)) {
          if (but) {
            v.ahd = Switcher(v.ahd, y, but);
            if (o.files_audiotrack.length == 2) {
              o.actions.SetAudioTrack(v.ahd)
            }
          } else {
            o.actions.SetAudioTrack(y)
          }
        } else {
          return o.media ? o.media.getAudioTrack() : 0
        }
      }
      if (x == "isyoutube") {
        return o.file_type == "youtube"
      }
      if (x == "restart") {
        if (o.current_audiotrack > 0) {
          o.restart_audio = o.current_audiotrack
        }
        o.actions.NewFile(o.files[o.current_file])
      }
      if (x == "playing") {
        return o.play
      }
      if (x == "started") {
        return o.start
      }
      if (x == "system") {
        return o.system[y]
      }
      if (x == "youtubeready") {
        o.destroyed != 1 ? o.media.onYoutubeReady() : ''
      }
      if (x == "id") {
        return v.id
      }
      if (x == "log") {
        v.log = y
      }
      if (x == "eventstracker") {
        v.eventstracker = y
      }
      if (x == "pip") {
        o.media.PipToggle()
      }
      if (x == "switchpip") {
        o.media.PipSwitch();
        if (but) {
          o.piped = Switcher(o.piped, y, but)
        }
      }
      if (x == "airplay") {
        o.media.Airplay()
      }
      if (x == "pipwebkit") {
        o.media.PipWebkit()
      }
      if (x == "options" && v.playerjscom != 1) {
        console.log(options)
      }
      if (x == "castinit" && o.chromecast) {
        o.chromecast.init()
      }
      if (x == "subtitle") {
        if (exist(y)) {
          if (y == '0/1') {
            if (o.subtitle_on) {
              o.submm = o.current_subtitle;
              y = -1
            } else {
              y = o.submm ? o.submm : 0
            }
          }
          v.subtitle = y;
          if (y.toString().length < 3 && o.sbt) {
            o.sbt.SetSubtitle(y * 1)
          } else {
            o.actions.Subtitle(y)
          }
        } else {
          return o.files_subtitle ? o.files_subtitle[o.current_subtitle] : ''
        }
      }
      if (x == "quiz") {
        if (exist(o.quiz)) {
          if (exist(y)) {
            o.quiz.api(y)
          } else {
            return o.quiz.Active()
          }
        }
      }
      if (x == "geo") {
        if (o.geobj) {
          return o.geobj
        } else {
          return false
        }
      }
      if (x == "ratio") {
        return o.media.ratio()
      }
      if (x == "box") {
        var box = createElement("div");
        box.id = y;
        box.style.zIndex = 10000;
        o.frame.appendChild(box)
      }
      if (x == "screenshot") {
        if (o.tagvideo) {
          var canvas = createElement("canvas");
          var size = o.media.size();
          canvas.width = size.width > 0 ? size.width : o.normal_w;
          canvas.height = size.height > 0 ? size.height : o.normal_h;
          css(canvas, {
            "position": "absolute",
            "top": -canvas.height,
            "left": -canvas.width,
            "display": "none"
          });
          document.body.appendChild(canvas);
          var ctx = canvas.getContext('2d');
          ctx.drawImage(o.media.tag(), 0, 0, canvas.width, canvas.height);
          var quality = 2;
          var canvas2 = document.createElement("canvas");
          canvas2.width = canvas.width * quality;
          canvas2.height = canvas.height * quality;
          var ctx2 = canvas2.getContext("2d");
          ctx2.drawImage(o.media.tag(), 0, 0, canvas.width * quality, canvas.height * quality);
          if (v.sscopyright == 1 && exist(v.sstext)) {
            !exist(v.ssfontsize) ? v.ssfontsize = 20 : '';
            !exist(v.ssfontcolor) ? v.ssfontcolor = "ffffff" : '';
            ctx2.font = v.ssfontsize + "px Libre Franklin";
            ctx2.fillStyle = CheckColor(v.ssfontcolor);
            ctx2.fillText((v.sstext == "domain" ? o.domain : v.sstext), v.ssfontsize, canvas.height * quality - v.ssfontsize - 5)
          }
          ctx.drawImage(canvas2, 0, 0, canvas.width, canvas.height);
          var img;
          try {
            img = canvas.toDataURL("image/jpeg")
          } catch (e) {
            console.log(e.message);
            return false
          }
          return img
        } else {
          return false
        }
      }
      if (x == "dash") {
        return o.file_type == x ? o.media.getDASH() : undefined
      }
      if (x == "hls") {
        return o.file_type == x ? o.media.getHLS() : undefined
      }
      if (x == "poster") {
        if (!o.play || v.posterhide === 0) {
          o.media.Poster(y);
          return true
        } else {
          return false
        }
      }
      if (x == "stretch") {
        if (exist(y)) {
          y == '1/0' ? y = 1 - existv(v.covervideo, 0) : '';
          v.covervideo = y;
          o.media.normalscale()
        } else {
          return existv(v.covervideo, 0)
        }
      }
      if (x == "scale") {
        if (exist(y)) {
          if (y == 0) {
            o.media.normalscale()
          } else {
            o.media.scale(y)
          }
        } else {
          return [o.mediascale.x, o.mediascale.y, o.mediacontainer.style.left, o.mediacontainer.style.top]
        }
      }
      if (x == "title") {
        if (exist(y)) {
          exist(y) ? v.title = y : '';
          o.actions.Title('title');
          return true
        } else {
          return v.title
        }
      }
      if (x == "invert") {
        o.actions.InvertPlaylist()
      }
      if (x == "push") {
        if (y) {
          !o.playlist_source ? o.playlist_source = [] : '';
          if (typeof(y) == 'object') {
            y = o.playlist_source.concat(y);
            x = "playlist"
          }
        }
      }
      if (x == "playlist") {
        if (y) {
          if (typeof(y) == 'object') {
            try {
              o.actions.UpdatePlaylist(y);
              return true
            } catch (e) {
              return false
            }
          } else {
            if (y.indexOf(".txt") == y.length - 4 || y.indexOf(".txt?") > 0) {
              var xhr = XHR(y);
              xhr.onload = function() {
                if (this.readyState == 4 && this.status == 200) {
                  try {
                    apiProcessor('playlist', JSON.parse(this.responseText))
                  } catch (e) {}
                }
              };
              xhr.send();
              return true
            } else {
              if (y == '') {
                o.actions.UpdatePlaylist([])
              } else {
                if (y == 'played' && o.pldur > 0) {
                  var tmp = Math.round(((o.pldur2 + (!o.controls.PlaylistG("played") ? o.media.time() : 0)) / o.pldur) * 100);
                  if (tmp < o.pldur3 || tmp > 100) {
                    return o.pldur3
                  } else {
                    o.pldur3 = tmp;
                    return tmp
                  }
                }
              }
            }
          }
        }
      }
      if (x == "next") {
        o.controls ? o.controls.PlaylistNext() : ''
      }
      if (x == "prev") {
        o.controls ? o.controls.PlaylistPrev() : ''
      }
      if (x == "cut") {
        o.controls ? o.controls.Cut(y) : ''
      }
      if (x == "cut?") {
        return o.cutted ? [o.cut1, o.cut2] : 0
      }
      if (x == "flip") {
        o.media ? o.media.flip() : ''
      }
      if (x == "find") {
        if (exist(y) && exist(o.playlist_dic)) {
          !o.play ? v.autoplay = 0 : '';
          for (var j in o.playlist_dic) {
            if (o.playlist_dic.hasOwnProperty(j)) {
              if (o.playlist_dic[j].pjs_id == y) {
                y = j
              }
            }
          }
          if (exist(o.playlist_dic[y])) {
            o.controls.PlaylistOpenId(y);
            return true
          } else {
            return false
          }
        }
      }
      if (x == "playlist_folders") {
        var tmp = [];
        if (exist(o.playlist_dic)) {
          for (var j in o.playlist_dic) {
            if (o.playlist_dic[j].folder && o.playlist_dic[j].pjs_parent_i == -1) {
              tmp.push({
                title: o.playlist_dic[j].title,
                id: o.playlist_dic[j].id
              })
            }
          }
        }
        return tmp
      }
      if (x == "playlist_id") {
        if (o.plid) {
          return o.playlist_dic[o.plid].pjs_id ? o.playlist_dic[o.plid].pjs_id : o.plid
        }
      }
      if (x == "playlist_length") {
        if (o.playlist_dic) {
          return Object.keys(o.playlist_dic).length
        } else {
          return -1
        }
      }
      if (x == "playlist_title") {
        if (exist(o.playlist_title)) {
          return o.playlist_title
        }
      }
      if (x == "showplaylist") {
        o.controls.PlaylistShow(y)
      }
      if (x == "showvlt") {
        o.media.VstLdTxt()
      }
      if (x == "toolbar") {
        if (y == "on") {
          v.toolbar.hide = 0
        } else if (y == "off") {
          v.toolbar.hide = 1;
          o.controls.HideForce()
        } else {
          o.controls.ShowForce()
        }
      }
      if (x == "menu") {
        o.controls.Settings()
      }
      if (x == "vastnow") {
        if (o.vast) {
          return true
        } else {
          return false
        }
      }
      if (x == "vastinfo") {
        if (o.vast) {
          return VastInfo()
        } else {
          return false
        }
      }
      if (x == "vastpause") {
        if (o.vast) {
          return o.vast.pause()
        } else {
          return false
        }
      }
      if (x == "vastresume") {
        if (o.vast) {
          return o.vast.resume()
        } else {
          return false
        }
      }
      if (x == "vaststart") {
        if (o.vast) {
          o.vast.startAd()
        } else {
          return false
        }
      }
      if (x == "vastmute") {
        if (o.vast) {
          o.vast.mute()
        } else {
          return false
        }
      }
      if (x == "captions") {
        if (but) {
          v.captions = Switcher(v.captions, y, but);
          o.media.captions()
        } else {
          return v.captions
        }
      }
      if (x == "loop") {
        if (exist(but)) {
          v.loop = Switcher(v.loop, y, but)
        } else {
          if (exist(y)) {
            y == '0/1' ? y = 1 - v.loop : '';
            v.loop = y
          } else {
            return v.loop
          }
        }
      }
      if (x == "shuffle") {
        if (exist(but)) {
          v.shuffle = Switcher(v.shuffle, y, but)
        } else {
          if (exist(y)) {
            v.shuffle = y
          } else {
            return v.shuffle
          }
        }
      }
      if (x == "autonext" || x == "playlistloop") {
        var z = "autoplaylist";
        x == "playlistloop" ? z = "playlistrewind" : "";
        if (exist(but)) {
          v.playlist[z] = Switcher(v.playlist[z], y, but)
        } else {
          if (exist(y)) {
            y == '0/1' ? y = 1 - v.playlist[z] : '';
            v.playlist[z] = y
          }
        }
        return v.playlist[z]
      }
      if (x == "hd") {
        if (o.files_quality.length == 2) {
          v.hd = o.files_quality[o.current_quality];
          v.hd = Switcher(v.hd, y, but);
          if (o.files_quality[0] == v.hd) {
            o.actions.SetQuality(0)
          } else {
            o.actions.SetQuality(1)
          }
        }
      }
      if (x == "v" && y) {
        if (y.indexOf('file') == 0 || y.indexOf('bk') == 0) {
          return
        }
        return v[y]
      }
      if (x.indexOf("update:") == 0) {
        var xx = x.substr(7);
        if (typeof(y) == 'object' && typeof(v[xx]) == 'object') {
          for (var yy in y) {
            if (y.hasOwnProperty(yy)) {
              v[xx][yy] = y[yy]
            }
          }
        } else {
          if (x.indexOf('rc_') == -1) {
            v[xx] = y
          }
        }
        return true
      }
      if (x.indexOf("text:") == 0) {
        o.controls.customText(x.substr(5), y)
      }
      if (v.clrs == 1 && x.indexOf("color") == 0 && y) {
        pushCSS('pjsdiv, pjsdiv > *{--pjs' + x + ':' + CheckColor(y) + '}')
      }
      if (x == "currentfile") {
        return o.media ? o.media.currentFile() : ''
      }
      if (x == "vrsn") {
        return o.version + ' ' + o.playerid
      }
      if (x == "playerid") {
        return o.playerid
      }
      if (x == "hlserror") {
        return o.hlserror
      }
      if (x == "dasherror") {
        return o.dasherror
      }
      if (x == "visibility") {
        return o.visibility
      }
      if (x == "vastids") {
        return o.vast ? o.vast_adid : undefined
      }
      if (x == "destroy") {
        o.actions.StopMedia();
        v.hotkey.on = 0;
        if (v.stopotherplayers == 1) {
          for (var i = 0; i < pljssglobal.length; i++) {
            if (pljssglobal[i]) {
              if (pljssglobal[i].api("id") == v.id) {
                pljssglobal[i] = null
              }
            }
          }
        }
        for (var w in window) {
          if (window[w] == o.this) {
            window[w] = null
          }
        }
        if (pljssglobalid == v.id) {
          pljssglobalid = ''
        }
        o.destroyed = 1;
        o.container.innerHTML = '';
        o.this = null
      }
    } else {
      return false
    }
  };

  function Switcher(x, y, but) {
    var z = trim(y) + '';
    if (y) {
      if (y.indexOf("/") > 0) {
        var y2 = y.split("/");
        if (y2.length == 2) {
          if (x == trim(y2[0])) {
            z = trim(y2[1]);
            if (but) {
              but.CustomSwitch(1)
            }
          } else {
            z = trim(y2[0]);
            if (but) {
              but.CustomSwitch(0)
            }
          }
        }
      }
    }
    return z
  }

  function XHR(x) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', x, true);
    return xhr
  }

  function FindIdPl(y) {
    var z = y.substr(3);
    if (o.playlist_dic) {
      for (var j in o.playlist_dic) {
        if (o.playlist_dic.hasOwnProperty(j)) {
          if (o.playlist_dic[j].pjs_id == z) {
            z = j
          }
        }
      }
    }
    return z
  }

  function VastInfo() {
    var x;
    if (o.vast) {
      if (o.vast.active()) {
        x = o.vast
      }
    }
    if (!x && o.vastloader) {
      x = o.vastloader
    }
    if (x) {
      var y = {
        is: o.vasttype,
        system: x.info("adsystem"),
        version: x.info("version"),
        vpaid: x.info("isVpaid"),
        url: o.current_vast_url + (x.info("wrapper") ? x.info("wrapper0") + x.info("wrapper") : ''),
        type: x.info("filetype"),
        file: x.info("file"),
        time: (o.media ? o.media.time() : ''),
        volume: x.getVolume(),
        id: o.vast_adid
      };
      if (o.vasttype == "midroll") {
        y.midroll_time = o.midrollcrtm
      }
      return y
    }
  }

  function MediaSess() {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: existv(o.titlestore, v.title),
        artwork: [{
          src: existv(v.poster, '')
        }]
      });
      if (!o.mss) {
        navigator.mediaSession.setActionHandler('play', function() {
          apiProcessor("play")
        });
        navigator.mediaSession.setActionHandler('pause', function() {
          apiProcessor("pause")
        });
        if (o.controls.PlaylistExist()) {
          navigator.mediaSession.setActionHandler('previoustrack', function() {
            apiProcessor("prev")
          });
          navigator.mediaSession.setActionHandler('nexttrack', function() {
            apiProcessor("next")
          })
        }
        o.mss = true
      }
    }
  }
  var createElement = function(x) {
    var y = x;
    x == 'div' || x == 'div2' ? y = 'pjsdiv' : '';
    var z = document.createElement(y);
    if (x == 'div2') {
      css(z, {
        "cursor": "pointer",
        "display": "block"
      })
    }
    return z
  };
  var log = function(a, b, c, d, e, f, g) {
    if (v.log == 1 || v.logout == 1) {
      var x = a + (b != undefined ? " " + b : "") + (c != undefined ? " " + c : "") + (d != undefined ? " " + d : "") + (e != undefined ? " " + e : "") + (f != undefined ? " " + f : "") + (g != undefined ? " " + g : "");
      console.log("Playerjs" + (v.pjsframed == 1 ? "2" : "") + ": " + x);
      if (v.logout == 1 && exist(document.getElementById("pjslog"))) {
        document.getElementById("pjslog").innerHTML += x + '<br/>'
      }
    }
  };
  var CustomFonts = function() {
    if (v.fonts == 1 && exist(v.fontnames) && v.fontnames != '') {
      var x = document.createElement('link');
      x.rel = 'stylesheet';
      x.href = 'https://fonts.googleapis.com/css?family=' + v.fontnames.replace(/,/ig, "|").replace(/ /ig, "+");
      document.head.appendChild(x)
    }
  };
  var SvgColor = function(div, clr) {
    var x = ["path", "polygon", "polyline", "rect", "ellipse", "circle"];
    for (var y = 0; y < x.length; y++) {
      var z = div.querySelectorAll("svg " + x[y]);
      if (z.length > 0) {
        for (var y2 = 0; y2 < z.length; y2++) {
          z[y2].style.fill = clr
        }
      }
    }
  };
  var JsClk = function() {
    if (v.apiprm) {
      if (v.apiprm.clk == 1) {
        js("click")
      }
    }
  };
  var Time = function(time) {
    time < 0 ? time = 0 : '';
    var full_minutes = o.media.duration >= 600 ? true : false;
    var full_hours = o.media.duration >= 3600 ? true : false;
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    minutes = minutes - hours * 60;
    if (days > 0) {
      hours = hours - days * 24
    }
    if (v.dvrtime == 1 && o.media.isLive()) {
      var d = new Date();
      return String(new Date(d.getTime() + time * 1000).toLocaleTimeString())
    } else {
      return String((days > 0 ? days + ':' : '') + (hours > 0 || full_hours ? hours + ':' : '') + ((hours > 0 || full_minutes) && minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds)
    }
  };
  var timeFormat = function(x) {
    var seconds = Math.floor(x);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    minutes = Math.floor(minutes % 60);
    seconds = Math.floor(seconds % 60);
    hours > 0 && minutes < 10 ? minutes = "0" + minutes : "";
    seconds = seconds >= 0 ? ((seconds >= 10) ? seconds : "0" + seconds) : "00";
    var out = (hours > 0 ? hours + ":" : "") + (minutes >= 0 ? minutes : "0") + ":" + seconds;
    if (v.dvrtime == 1 && o.media.isLive()) {
      var d = new Date();
      return String(new Date(d.getTime() + x * 1000).toLocaleTimeString())
    } else {
      return out
    }
  };
  var Href = function() {
    return encodeURIComponent((window.location != window.parent.location) ? document.referrer : document.location.href)
  };
  var NoSpan = function(x) {
    if (x) {
      x = x.toString();
      var spn = x.indexOf(" <span style='opacity");
      if (spn > -1) {
        x = x.substr(0, spn)
      }
    }
    return x
  };
  var Script = function(x, y, z) {
    var t;
    if (!Scripted(x) && y) {
      t = document.createElement('script');
      y == "same" ? y = x : '';
      t.src = y.indexOf('//') == -1 ? '//' + y : y;
      t.async = 1;
      if (z) {
        t.name = z
      }
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(t, s)
    }
    return t
  };
  var Scripted = function(y) {
    var x = false;
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src.indexOf(y) > -1) {
        x = true
      }
    }
    return x
  };
  var hex2rgb = function(x, y) {
    if (x) {
      if (x.indexOf('color') > -1 || x.indexOf('var') > -1) {
        return CheckColor(x)
      } else {
        x = x.replace('#', '');
        var r = parseInt(x.length == 3 ? x.slice(0, 1).repeat(2) : x.slice(0, 2), 16);
        var g = parseInt(x.length == 3 ? x.slice(1, 2).repeat(2) : x.slice(2, 4), 16);
        var b = parseInt(x.length == 3 ? x.slice(2, 3).repeat(2) : x.slice(4, 6), 16);
        if (exist(y)) {
          return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + y + ')'
        } else {
          return 'rgb(' + r + ', ' + g + ', ' + b + ')'
        }
      }
    }
  };
  var css = function(e, o) {
    if (exist(e)) {
      for (var key in o) {
        if (o.hasOwnProperty(key)) {
          if (o[key] != 'NaNpx' && o[key] != undefined) {
            if (typeof o[key] == 'number' && key != 'opacity' && key != 'zIndex') {
              o[key] += 'px'
            }
            if (key.indexOf("olor") > -1 && key.indexOf("scheme") == -1) {
              o[key] = CheckColor(o[key])
            }
            if (key == "transform" || key.indexOf("backdrop") > -1) {
              e.style['-ms-' + key] = o[key];
              e.style['-moz-' + key] = o[key];
              e.style['-webkit-' + key] = o[key];
              e.style['-o-' + key] = o[key]
            }
            if (key == "fontFamily") {
              if (o[key].indexOf(" ") > -1) {
                o[key] = '"' + o[key] + '"'
              }
            }
            if (key == "box-sizing") {
              e.style.setProperty(key, o[key], 'important')
            } else {
              e.style[key] = o[key]
            }
          }
        }
      }
    }
  };
  var Bglines = function(x, clr, b1, b2) {
    clr = CheckColor(clr);
    var y = existv(b1, 1) * 1;
    var z = existv(b2, 1) * 1;
    css(x, {
      "background": "repeating-linear-gradient(-45deg," + clr + "," + clr + " " + y + "px,rgba(0,0,0,0)," + y + "px,rgba(0,0,0,0) " + (y + z) + "px)"
    })
  };
  var CheckColor = function(c) {
    if (c) {
      c.indexOf("color") == 0 ? c = 'var(--pjs' + c + ')' : '';
      return c.substr(0, 1) != '#' && c.indexOf("var") == -1 && c.indexOf("rgb") == -1 ? c = "#" + c : c
    } else {
      return '#fff'
    }
  };
  var controlCSS = function(x, color, y) {
    !color ? color = '#fff' : '';
    color = CheckColor(color);
    var r = random(100000, 1000000);
    x = x.replace(/\(rand\)/g, r);
    x = x.replace(/\(color\)/g, color);
    x = x.replace(/\(scl\)/g, 1 + (v.control_buffer.scale - 1) / 2);
    var _html = x.substr(0, x.indexOf('|||'));
    var _css = x.substr(x.indexOf('|||') + 3);
    var _css2 = '';
    if (o.system.webkit) {
      _css2 = _css.replace(/animation:/g, "-webkit-animation:");
      _css2 = _css2.replace(/animation-/g, "-webkit-animation-");
      _css2 = _css2.replace(/@keyframes/g, "@-webkit-keyframes");
      _css2 = _css2.replace(/transform/g, "-webkit-transform")
    }
    y ? y.innerHTML = _html : '';
    pushCSS(_css2 + _css)
  };
  var indOf = function(x, y, f) {
    var z = false;
    if (x) {
      for (var i = 0; i < x.length; i++) {
        if (x[i]) {
          if (f) {
            if (parseFloat(y) == parseFloat(x[i])) {
              z = i;
              break
            }
          } else {
            if (String(x[i]).indexOf(y) > -1) {
              z = true
            }
          }
        }
      }
    }
    return z
  };
  var pushCSS = function(x) {
    if (o.css) {
      if (o.css.styleSheet) {
        o.css.styleSheet.cssText = x
      } else {
        o.css.appendChild(document.createTextNode(x))
      }
    }
  };
  var Pos0 = function(x) {
    css(x, {
      "position": "absolute",
      "top": 0,
      "left": 0,
      "width": "100%",
      "height": "100%"
    })
  };
  var Pnt0 = function(x) {
    css(x, {
      "pointerEvents": "none"
    })
  };
  var xhr = function(y, z) {
    var x = new XMLHttpRequest();
    x.open('GET', y, true);
    x.onload = z;
    x.send()
  };
  var FindPjsDiv = function(x) {
    if (x) {
      for (var i = 0; i < 5; i++) {
        if (x.nodeName == "PJSDIV") {
          break
        } else {
          if (x.parentElement) {
            x = x.parentElement
          }
        }
      }
    }
    return x
  };
  var gif = function(z) {
    var gif = document.createElement("img");
    if (o.gifed.indexOf(z) > -1) {
      o.gifed.push(z);
      if (z.indexOf("?") > 0) {
        z = z + '&' + Math.random()
      } else {
        z = z + '?' + Math.random()
      }
    } else {
      o.gifed.push(z)
    }
    gif.setAttribute('src', z);
    gif.setAttribute('height', '1px');
    gif.setAttribute('width', '1px')
  };
  var attr = function(e, o) {
    for (var key in o) {
      if (o.hasOwnProperty(key)) {
        e.setAttribute(key, o[key])
      }
    }
  };
  var destroy = function(e) {
    if (e) {
      try {
        e.parentNode.removeChild(e);
        e = null
      } catch (e) {}
    }
  };
  var random = function(min, max) {
    return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random())
  };
  var randomstr = function() {
    return Math.random().toString(36).substring(2, 12)
  };
  var removebykey = function(x, y) {
    x = Object.keys(x).reduce(function(obj, key) {
      if (key != y) {
        obj[key] = x[key]
      }
      return obj
    }, {});
    return x
  };
  var trim = function(x) {
    if (typeof x == "string") {
      return x.replace(/^\s+|\s+$/gm, '')
    } else {
      return x
    }
  };
  var cut = function(x, y, z) {
    var r = false;
    if (x) {
      if (x.indexOf(y) > -1) {
        var r = x.substr(x.indexOf(y) + y.length);
        if (z) {
          if (r.indexOf(z) > -1) {
            r = r.substr(0, r.indexOf(z))
          }
        }
      }
    }
    return r
  };
  var encode = function(x, n) {
    if (n == 0) {
      return "#0" + salt.e(x)
    }
    if (n == -1) {
      return salt.e(x)
    }
    if (n == 1) {
      return "#1" + pepper(salt.e(x), 1)
    }
  };
  var str2obj = function(x) {
    if (v[x] != "") {
      if (typeof v[x] != "string") {
        o[x + 'o'] = v[x]
      } else {
        if (v[x].indexOf("[{") == 0) {
          try {
            v[x] = v[x].replace(/pjs'qt/ig, '"');
            o[x + 'o'] = eval(v[x])
          } catch (e) {}
        }
      }
    }
  };
  var dechar = function(x) {
    return String.fromCharCode(x)
  };
  var decode = function(x) {
    if (x.substr(0, 2) == "#1") {
      return salt.d(pepper(x.substr(2), -1))
    } else if (x.substr(0, 2) == "#0") {
      return salt.d(x.substr(2))
    } else {
      return x
    }
  };
  var checkBase64 = function(x) {
    if (x) {
      if (x.indexOf('http') == -1 && x.indexOf('.') == -1 && x.length > 100 && x.indexOf('data:') == -1) {
        x = 'data:image/png;base64,' + x
      }
    }
    return x
  };
  var hide = function(x) {
    x ? x.style.visibility = "hidden" : ''
  };
  var show = function(x) {
    x ? x.style.visibility = "visible" : ''
  };
  var hide2 = function(x) {
    x ? x.style.display = "none" : ''
  };
  var show2 = function(x) {
    x ? x.style.display = "block" : ''
  };
  var isVisible = function(x) {
    return x ? x.style.visibility != "hidden" && x.style.display != "none" : false
  };
  var int = function(s) {
    if (typeof s == "string") {
      if (s.indexOf("px") > 0) {
        s = s.substr(0, s.indexOf("px"))
      }
    }
    return parseInt(s)
  };
  var hidden = function(x) {
    return x.style.display == "none"
  };
  var MarginPadding = function(o, x, y) {
    o[x + 'top'] = 0;
    o[x + 'right'] = 0;
    o[x + 'bottom'] = 0;
    o[x + 'left'] = 0;
    if (exist(o[y])) {
      var z = o[y].split(" ");
      if (z.length == 4) {
        o[x + 'top'] = z[0] ? parseFloat(z[0]) : 0;
        o[x + 'right'] = z[1] ? parseFloat(z[1]) : 0;
        o[x + 'bottom'] = z[2] ? parseFloat(z[2]) : 0;
        o[x + 'left'] = z[3] ? parseFloat(z[3]) : 0
      }
    }
    return o
  };
  var MarPad = function(x) {
    if (x) {
      x = x.replace(/ /ig, 'px ')
    }
    return x + 'px'
  };
  var StringVar = function(x, y) {
    return v[x] && v[x] != '' ? v[x] : y
  };
  var abc = String.fromCharCode(65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122);
  var salt = {
    _keyStr: abc + "0123456789+/=",
    e: function(e) {
      var t = "";
      var n, r, i, s, o, u, a;
      var f = 0;
      e = salt._ue(e);
      while (f < e.length) {
        n = e.charCodeAt(f++);
        r = e.charCodeAt(f++);
        i = e.charCodeAt(f++);
        s = n >> 2;
        o = (n & 3) << 4 | r >> 4;
        u = (r & 15) << 2 | i >> 6;
        a = i & 63;
        if (isNaN(r)) {
          u = a = 64
        } else if (isNaN(i)) {
          a = 64
        }
        t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
      }
      return t
    },
    d: function(e) {
      var t = "";
      var n, r, i;
      var s, o, u, a;
      var f = 0;
      e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (f < e.length) {
        s = this._keyStr.indexOf(e.charAt(f++));
        o = this._keyStr.indexOf(e.charAt(f++));
        u = this._keyStr.indexOf(e.charAt(f++));
        a = this._keyStr.indexOf(e.charAt(f++));
        n = s << 2 | o >> 4;
        r = (o & 15) << 4 | u >> 2;
        i = (u & 3) << 6 | a;
        t = t + dechar(n);
        if (u != 64) {
          t = t + dechar(r)
        }
        if (a != 64) {
          t = t + dechar(i)
        }
      }
      t = salt._ud(t);
      return t
    },
    _ue: function(e) {
      e = e.replace(/\r\n/g, "\n");
      var t = "";
      for (var n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        if (r < 128) {
          t += dechar(r)
        } else if (r > 127 && r < 2048) {
          t += dechar(r >> 6 | 192);
          t += dechar(r & 63 | 128)
        } else {
          t += dechar(r >> 12 | 224);
          t += dechar(r >> 6 & 63 | 128);
          t += dechar(r & 63 | 128)
        }
      }
      return t
    },
    _ud: function(e) {
      var t = "";
      var n = 0;
      var r = 0;
      var c1 = 0;
      var c2 = 0;
      while (n < e.length) {
        r = e.charCodeAt(n);
        if (r < 128) {
          t += dechar(r);
          n++
        } else if (r > 191 && r < 224) {
          c2 = e.charCodeAt(n + 1);
          t += dechar((r & 31) << 6 | c2 & 63);
          n += 2
        } else {
          c2 = e.charCodeAt(n + 1);
          c3 = e.charCodeAt(n + 2);
          t += dechar((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          n += 3
        }
      }
      return t
    }
  };
  var pepper = function(s, n) {
    s = s.replace(/\+/g, "#");
    s = s.replace(/#/g, "+");
    var a = sugar(o.y) * n;
    if (n < 0) a += abc.length / 2;
    var r = abc.substr(a * 2) + abc.substr(0, a * 2);
    return s.replace(/[A-Za-z]/g, function(c) {
      return r.charAt(abc.indexOf(c))
    })
  };
  var sugar = function(x) {
    x = x.split(dechar(61));
    var result = '';
    var c1 = dechar(120);
    var chr;
    for (var i in x) {
      if (x.hasOwnProperty(i)) {
        var encoded = '';
        for (var j in x[i]) {
          if (x[i].hasOwnProperty(j)) {
            encoded += (x[i][j] == c1) ? dechar(49) : dechar(48)
          }
        }
        chr = parseInt(encoded, 2);
        result += dechar(chr.toString(10))
      }
    }
    return result.substr(0, result.length - 1)
  };
  var exist = function(x) {
    return x != null && typeof(x) != 'undefined' && x != 'undefined'
  };
  var existv = function(x, y) {
    return exist(x) ? x : y
  };
  var exist2 = function(x) {
    return exist(x) && x != -1 && x != ''
  };
  var exist2v = function(x, y) {
    return exist2(x) ? x : y
  };
  var copyObject = function(x) {
    if (typeof x == "object") {
      x = JSON.parse(JSON.stringify(x))
    }
    return x
  };
  var findLeft = function(el) {
    var x = el.getBoundingClientRect().left + (window.scrollX ? window.scrollX : window.pageXOffset);
    return x
  };
  var checkFont = function(x) {
    v.globalfont == 1 && exist2(v.globalfontname) ? x = v.globalfontname : '';
    return "Libre Franklin"
  };
  var findTop = function(el) {
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY
  };
  var redirect = function(x, y) {
    if (x != '') {
      if (v.redirectblank == 1) {
        window.open(x)
      } else {
        if (v.redirectparent == 1) {
          window.parent.location.href = x
        } else {
          window.location.href = x
        }
      }
      x = ''
    }
  };
  var reRightMenu = function() {
    if (v.rightmenu == 1) {
      o.rightmenu ? o.frame.removeChild(o.rightmenu) : '';
      o.rightmenu = null
    }
  };
  var Actions = function() {
    var _fullscreen_end = false;
    if (o.system.tv) {
      log("tv")
    }
    this.Title = function(x) {
      o.controls ? o.controls.title(x) : ''
    };
    this.File = function(x) {
      if (x) {
        if (typeof(x) == 'string') {
          x = x.replace(/(\r\n|\n|\r)/gm, "");
          if (x.indexOf("[{") == 0) {
            try {
              x = x.replace(/pjs'qt/ig, '"');
              x = JSON.parse(x)
            } catch (e) {
              x = "incorrect JSON"
            }
          }
        }
        if (typeof(x) == 'object') {
          o.playlist_dic = [];
          o.playlist_source = copyObject(x);
          o.playlist = IndexPlaylist(x);
          if (o.playlist.length > 0) {
            if (v.playlist.openlast == 1 && !v.plstart) {
              var keys = Object.keys(o.playlist_dic);
              var last = keys.slice(-1)[0];
              last ? v.plstart = last : ''
            }
            var y = FindFileInPlaylist();
            if (y) {
              x = y.file;
              o.titlestore = y.title;
              o.controls ? o.controls.titlepl(y.title) : '';
              if (exist(y.poster)) {
                if (o.media) {
                  o.media.Poster(y.poster)
                } else {
                  v.poster = y.poster
                }
              }
              if (exist(y.sub)) {
                y.subtitle = y.sub
              }
              if (exist(y.start)) {
                if (y.start == "continue" && !o.start) {} else {
                  v.start = o.seekto = y.start
                }
              }
              SettingsTimers("offset");
              if (exist(y.id)) {
                o.plid = y.id
              }
              var sx = ["subtitle", "vars", "embed", "url", "url2", "url3", "heartbeat", "thumbnails", "label", "download", "points", "remove", "end", "delete", "outside", "title2", "skip", "customtext", "volume"];
              if (exist(v.control_title)) {
                if (v.control_title.showfrom1file == 1 && v.control_title.showtitleplaylist == 1) {
                  sx.push("title");
                  sx.push("t1");
                  sx.push("t2");
                  sx.push("t3");
                  sx.push("t4");
                  sx.push("t5")
                }
              }
              for (var i = 0; i < sx.length; i++) {
                if (exist(y[sx[i]])) {
                  v[sx[i]] = y[sx[i]]
                }
              }
              Ctxt(y);
              if (sx.indexOf('title') > 0) {
                if (v.control_title.templated == 1) {
                  o.title_template = v.control_title.template;
                  o.actions.TitleTemplate(y)
                }
                o.actions.Title('title')
              }
              if (exist(y.volume)) {
                setTimeout(function() {
                  o.actions.Volume(y.volume)
                }, 200)
              }
              if (o.controls) {
                o.controls.UpdatePlaylist(o.playlist);
                if (v.customtext) {
                  o.controls.customTextPl()
                }
              }
              if (o.droplist) {
                o.droplist.Update()
              }
            } else {}
          }
        }
        if (typeof(x) == 'string') {
          x = fjs(x);
          if (x) {
            if (x.indexOf("#" + v.enc2) == 0) {
              x = o[o.fd[0]](x)
            }
            if (x) {
              if (x.indexOf("#" + v.enc3) == 0 && x.indexOf(v.file3_separator) > 0) {
                x = o[o.fd[1]](x)
              }
              if (x.indexOf("#0") == 0) {
                x = fd0(x)
              }
              x = fjs(x)
            }
          }
          if (v.fplace == 1) {
            x = fplace(x)
          }
          if (x == '') {
            log("empty file");
            o.media_error = true;
            js("error", "empty")
          }
          o.files_quality = [];
          o.files_quality_ag = [];
          o.files_audiotrack = [];
          o.current_file = 0;
          o.current_quality = 0;
          o.current_audiotrack = 0;
          o.ncrtat = 0;
          v.file_separator == '' ? v.file_separator = ',' : '';
          if ((x.indexOf(v.qbr1) > -1 && x.indexOf(v.qbr2) > -1) || exist(v.qualities)) {
            o.files = x.split(v.file_separator)
          } else {
            o.files = [x]
          }
          o.audiotracks = [];
          if (exist(v.qualities)) {
            var qualities = v.qualities.split(v.file_separator)
          }
          if (o.files.length > 0) {
            var q = -1;
            for (var i = 0; i < o.files.length; i++) {
              o.files[i] = trim(o.files[i]);
              if (o.files[i] != '') {
                if (o.files[i].indexOf(v.qbr1) == 0 && o.files[i].indexOf(v.qbr2) > 1) {
                  o.files_quality[i] = o.files[i].substr(o.files[i].indexOf(v.qbr1) + v.qbr1.length, o.files[i].indexOf(v.qbr2) - v.qbr2.length);
                  o.files[i] = o.files[i].substr(o.files[i].indexOf(v.qbr2) + v.qbr2.length)
                } else {
                  if (exist(v.qualities)) {
                    o.files_quality[i] = exist(qualities[i]) ? qualities[i] : ''
                  } else {
                    o.files_quality[i] = i + 1
                  }
                }
                var is = 0;
                if (exist(v.default_quality) && q == -1) {
                  if (String(v.default_quality).indexOf("num:") == 0) {
                    if (v.default_quality.substr(4) * 1 == i) {
                      is = 1
                    }
                  }
                  if (v.default_quality == o.files_quality[i]) {
                    is = 1
                  }
                  if (v.default_quality == "max" && i == o.files.length - 1) {
                    is = 1
                  }
                }
                if (exist(o.default_quality)) {
                  if (o.default_quality == o.files_quality[i]) {
                    is = 1;
                    q = i
                  }
                }
                if (is == 1) {
                  o.current_file = i;
                  o.current_quality = i
                }
                o.files[i] = Prefile(o.files[i])
              }
            }
          } else {
            o.files[0] = Prefile(o.files[0])
          }
          return o.files[o.current_file]
        }
      } else {
        return x
      }
    };

    function Prefile(x) {
      if (exist(v.prefile) && x.indexOf("//") == -1) {
        x = v.prefile + x
      }
      return x
    };
    this.InvertPlaylist = function() {
      if (o.playlist) {
        var x = o.playlist.reverse();
        for (var i = 0; i < x.length; i++) {
          x[i].pjs_i = i
        }
        o.playlist = x;
        o.controls.UpdatePlaylist(o.playlist)
      }
    };

    function Ctxt(y) {
      var utx;
      for (var i = 1; i < 6; i++) {
        var t = "text" + i;
        if (exist(y[t])) {
          v[t] = y[t];
          utx = true
        }
      }
      if (utx && o.controls) {
        o.controls.upTexts()
      }
    }
    this.Ctxt = function(x) {
      Ctxt(x)
    };
    this.UpdatePlaylist = function(x) {
      if (typeof(x) == 'object') {
        o.playlist_dic = [];
        o.playlist_source = copyObject(x);
        o.playlist = IndexPlaylist(x);
        if (o.controls) {
          o.controls.UpdatePlaylist(o.playlist)
        }
      }
    };
    this.NewFile = function(x, y, z, no) {
      !exist(y) ? o.autoplay = true : '';
      !exist(z) ? v.preload = 0 : '';
      v.duration = undefined;
      v.end = undefined;
      !options.delete ? v.delete = undefined : '';
      o.media_error != 2 ? o.media_error = false : '';
      o.metadata = false;
      o.pipwebkit = false;
      o.reloadTimer = 0;
      o.gatracked = [];
      o.checknative = false;
      o.gained = false;
      o.dvr = false;
      o.bitrate = undefined;
      o.quartile = [false, false, false];
      o.sess = randomstr();
      o.sesstime = 0;
      o.or0 = 0;
      o.pld ? o.pld = [] : '';
      o.file_type != 'pjs' && o.sbt ? o.sbt.remove() : '';
      o.trcka ? o.trcka = [] : '';
      if (o.err404v) {
        o.err404v.remove()
      }
      if (o.media.status() == "playing") {
        this.Stop()
      }
      if (o.cut && o.cutted) {
        o.controls.Cut()
      }
      if (exist(o.share)) {
        o.share.Remove()
      }
      if (exist(o.reloadto)) {
        clearTimeout(o.reloadto)
      }
      js("new");
      if (v.vast == 1 && no != 1) {
        o.actions.VastRecover();
        o.actions.VastRecover('midroll')
      }
      x = this.File(x);
      if (y == 1) {
        o.file_type = ''
      }
      o.media.File(x);
      if ((o.system.mobile || o.system.safari) && !exist(y)) {
        o.actions.Play()
      }
      if (exist(o.custom_aspect)) {
        o.mediascale = {
          x: 1,
          y: 1,
          x0: 1,
          y0: 1
        };
        o.media.normalscale()
      }
      gaTracker("play", "Play");
      o.media.NativeControls();
      o.controls.QualityChangedNoHand();
      o.controls.AudioTrackChangedNoHand();
      o.controls.refresh();
      o.mediatags ? o.mediatags.read() : ''
    };
    this.TitleTemplate = function(x) {
      var y = false;
      if (x && o.title_template) {
        v.title = o.title_template;
        for (var i = 1; i < 6; i++) {
          if (exist(x['t' + i])) {
            v.title = v.title.replace("{" + i + "}", x['t' + i]);
            y = true
          }
        }
      }
      return y
    };
    this.MediaReady = function() {
      if (v.autoplay == 1 && !v.autoplayed || o.autoplay) {
        if (v.observer == 1) {
          setTimeout(function() {
            o.actions.Play()
          }, 500)
        } else {
          this.Play()
        }
        v.autoplayed = 1;
        o.autoplay = false
      }
      Thumbs()
    };
    this.Thumbs = function() {
      Thumbs()
    };

    function Thumbs() {
      if (v.thumbs == 1) {
        if (typeof PluginThumbs !== "undefined") {
          o.th = new PluginThumbs()
        }
      }
    }
    this.NativeControls = function() {
      var x = false;
      if (o.system.mobile) {
        x = true;
        if (v.nativenotiphone == 1 && o.system.iphone) {
          x = false
        }
        if (v.nativenotipad == 1 && o.system.ipad) {
          x = false
        }
        if (v.nativenotios == 1 && o.system.ios) {
          x = false
        }
        if (v.nativenotandroid == 1 && o.system.android) {
          x = false
        }
      }
      if (v.nativeontv == 1 && o.system.tv) {
        x = true
      }
      return x
    };
    this.Metadata = function() {
      o.media.Volume(v.volume);
      if (o.muted) {
        o.media.Mute()
      }
      o.metadata = true;
      o.controls ? o.controls.refresh() : '';
      if (!o.play && !o.start) {
        v.effects == 1 ? o.effects.api("pause") : ''
      }
      if (o.casting && o.tagvideo) {
        o.chromecast.Exit();
        o.chromecast.Go()
      }
      if (v.vast == 1) {
        if (v.nomidroll != 1 && v.midrolls == 1) {
          !exist(o.vast) ? MidrollOverlay("midroll", "metadata") : ''
        }
      }
    };
    this.onPlayTag = function() {
      !o.onplay ? onPlay(true) : ''
    };

    function onPlay(x) {
      o.onplay = true;
      if (o.controls) {
        if (o.controls.SettingsVisible()) {
          o.controls.Settings()
        }
      }
      if (o.droplist) {
        o.droplist.Close()
      }!x ? o.media.Play() : '';
      if (!o.checknative) {
        setTimeout(function() {
          o.media.NativeControls()
        }, 500)
      }!o.play ? o.controls.Play() : '';
      v.effects == 1 ? o.effects.api("play") : '';
      v.vast == 1 ? o.actions.VastRecover('pauseroll') : '';
      if (o.system.mobile) {
        o.controls.HideInterval()
      }
      if (exist(o.share)) {
        o.share.isOpen() ? o.share.Hide() : ''
      }
      if (v.heartbeats == 1 && exist(v.heartbeat) && o.dt) {
        if (v.heartbeat != '' && !exist(o.heartbeatInterval)) {
          o.heartbeatInterval = setInterval(Heartbeat, v.heartbeatinterval * 1000);
          Heartbeat()
        }
      }
    }
    this.Play = function(noads) {
      if (!o.play && o.media) {
        o.actplay = true;
        o.ended = false;
        clearTimeout(o.plapto);
        var stop = false;
        if (o.file_type == "youtube") {
          if (!o.media.YoutubeReady() && v.autoplay != 1 && v.preload == 1) {
            stop = true;
            if (window['YT']) {
              v.autoplay = 1;
              o.autoplay = true;
              o.media.onYoutubeReady()
            }
          }
        }
        if (v.pass == 1 && v.passontime == 0) {
          o.actions.Password();
          stop = true
        }
        if (o.media_error || stop) {
          if (o.media_error) {
            Advertising("preroll") ? datetime(2) : ''
          }
        } else {
          o.newfile = false;
          StopOtherPlayer(!o.start);
          o.alert.close();
          if (!o.start) {
            js("start");
            o.start = true;
            if (v.toolbar.hideuntilstarted == 1) {
              setTimeout(function() {
                o.controls.resizetext()
              }, 100)
            }
            if (v.toolbar.hideleavetimeout > 0 && v.autoplay == 1) {
              o.starttimeout = true;
              setTimeout(StartTimeout, v.toolbar.hideleavetimeout * 1000)
            }
            if (v.water == 1 && v.wid) {
              PluginWater()
            }
            for (var i = 0; i < o.vsts.length; i++) {
              if (v['vast_nofirst' + o.vsts[i]] == 1) {
                localStorage.setItem("pljsfirst" + o.vsts[i], Date.now())
              }
            }
            if (v.pjsstat == 1 && v.pjsstatid) {
              PluginStat("start")
            }
            if (o.sbt) {
              o.sbt.start()
            }
            js("new");
            o.ctxtnk ? o.controls.upText(o.ctxtnk) : '';
            o.controls.startcss();
            o.controls.refresh();
            gaTracker("play", "Play");
            o.system.mobile ? MediaSess() : '';
            o.ab ? gaTracker("adblock", "AdBlock", 1) : ''
          } else {
            gaTracker("resume", "Resume")
          }
          if (v.fullonplay == 1 && !o.fullscreen) {
            var dd = new Date();
            var tt = dd.getTime();
            if (tt - o.clicktime < 300) {
              if (!o.system.ios && (v.fullonplaymobile != 1 || o.system.mobile)) {
                this.Fullscreen()
              }
            }
          }
          if (o.subtitle_on) {
            if (v.subpausehide == 1) {
              show2(o.subtitle)
            }
          }
          if (o.err404v) {
            o.err404v.remove()
          }
          if (noads != 1 && Advertising("preroll") || Advertising("intro")) {
            datetime(2)
          } else {
            if (v.redirect == 1 && exist(v.redirectonplay) && !exist(options.redirect)) {
              redirect(v.redirectonplay);
              stop = true
            }
            if (!stop) {
              log("Play");
              o.media.duration() > 0 ? o.controls.Duration(o.media.time(), o.media.duration()) : '';
              if (!o.start2) {
                o.start2 = true;
                if (v.toolbar.hideleavetimeout > 0 && v.autoplay == 1) {
                  o.starttimeout = true;
                  setTimeout(StartTimeout, v.toolbar.hideleavetimeout * 1000)
                }
              }
              var playroll = false;
              if (o.media.time() > 1 && v.pauserollonplay == 1 && noads != 1 && !isVastBgLoad() && !exist(o.vast) && !exist(o.vastloader)) {
                playroll = Advertising("pauseroll")
              }
              if (playroll) {
                isVastBgLoad() ? onPlay(false) : ''
              } else {
                onPlay(false)
              }
            }
          }
        }
      } else {
        o.media ? o.media.Play() : ''
      }
    };

    function StartTimeout() {
      o.starttimeout = false;
      o.controls.refresh()
    }
    this.Pause = function() {
      if (o.play) {
        o.actplay = false;
        log("Pause");
        o.media.Pause();
        o.controls.Pause();
        js("pause");
        v.posteronpause == 1 ? ShowPoster() : '';
        v.posterhidepause == 1 ? HidePoster2() : '';
        v.effects == 1 ? o.effects.api("pause") : '';
        if (o.subtitle_on) {
          if (v.subpausehide == 1) {
            hide2(o.subtitle)
          }
        }
        if (!exist(o.vast) && !exist(o.vastloader) && v.pauserollonplay == 0) {
          Advertising("pauseroll")
        }
        o.onplay = false
      }
    };
    this.Mute = function() {
      o.media.Mute();
      o.controls.Mute();
      o.muted = true;
      js("mute")
    };
    this.Unmute = function() {
      o.media.Unmute();
      o.muted = false;
      o.controls.Unmute();
      o.media.Volume(v.volume);
      js("unmute")
    };
    this.Volume = function(x, y) {
      if (o.controls) {
        x < 0.01 ? x = 0 : '';
        x > 1 ? x = 1 : '';
        if (x <= 0) {
          this.Mute();
          v.volume = 0;
          x = 0
        } else {
          if (o.muted) {
            this.Unmute()
          }
          v.volume = x
        }
        js("volume", x);
        o.controls.Volume(x, y);
        o.media.Volume(x)
      }
    };
    this.Waiting = function() {
      o.controls.Waiting()
    };
    this.StopWaiting = function() {
      o.controls ? o.controls.StopWaiting() : ''
    };
    this.Progress = function() {
      this.StopWaiting()
    };
    this.Seeked = function() {
      o.actions.UpdatePlay();
      this.StopWaiting()
    };
    this.Duration = function(time, duration) {
      if (o.continue && !o.start) {
        var f = o.continue.flag();
        if (f.t && f.d) {
          time = f.t
        }
      }
      o.controls ? o.controls.Duration(time, duration) : ''
    };
    this.LoadedData = function(time, duration) {
      if (o.seekto > 0 && o.file_type != "youtube" && !o.media.isLive()) {
        o.actions.Seek(o.seekto, false);
        o.seekto = undefined
      }
    };
    this.ScreenClick = function() {
      var d = new Date();
      o.clicktime = d.getTime();
      var x = false;
      if (o.controls.SettingsVisible() && v.settings.always != 1) {
        o.controls.SettingsClose();
        x = true
      }
      if (o.droplist) {
        if (o.droplist.Visible()) {
          o.droplist.Close();
          x = true
        }
      }
      if (v.playlist.always == 0) {
        if (o.controls.PlaylistVisible() && v.playlist.autohide == 1) {
          o.controls.Playlist();
          x = true
        }
      }
      if (v.redirect == 1 && exist(v.redirectonclick) && !exist(options.redirect)) {
        redirect(v.redirectonclick);
        x = true
      }
      if (o.muted && v.unmuteonclick == 1) {
        o.actions.Unmute();
        v.unmuteonclick = 0;
        x = true
      }
      if (!x) {
        if (v.hotkey.on == 1 && v.hotkey.icons == 1 && v.hotkey.playiconbut == 1) {
          PluginHotIcon('play', (o.play ? 0 : 1))
        }
        this.Toggle()
      }
    };
    this.ControlsBgClick = function() {
      if (o.controls.SettingsVisible()) {
        o.controls.Settings()
      }
    };
    this.Toggle = function() {
      if (o.media.status() == "playing") {
        js("userpause");
        v.scrnstp == 1 ? this.StopMedia() : this.Pause()
      } else {
        js("userplay");
        this.Play()
      }
      Sub()
    };
    this.Seek = function(sec, hand) {
      if (sec < o.media.duration()) {
        if (v.control_line.dontseekforward == 1) {
          if (sec > o.media.time()) {
            return
          }
        }
        if (v.delete > 0) {
          sec < v.delete ? sec = v.delete : ''
        }
        log("Seek");
        o.seeked_time = sec;
        o.media.Seek(sec);
        if (hand) {
          o.controls.Seek(sec, o.media.duration())
        }
        o.seeking = true;
        o.seeking_time = o.media.time();
        Sub(o.seeking_time)
      }
    };
    this.Open = function(url, target, endfull) {
      if (o.media.status() == "playing" && o.mode != 'audio') {
        Pause();
        if (o.fullscreen && endfull) {
          o.actions.Normalscreen()
        }
      }
      window.open(url, target)
    };
    this.Download = function() {
      if (v.vast == 1 && !o.start) {
        if (Advertising("preroll")) {
          o.vstdwn = true;
          return
        }
      }
      var x = o.media.currentFile();
      if (exist(v.download)) {
        x = v.download
      }
      if (x != '') {
        js("download");
        var win = window.open(x, (v.downself == 1 ? '_self' : '_blank'));
        win.focus()
      }
    };
    this.UpdatePlay = function(x) {
      var time = o.media.time();
      var duration = o.media.duration();
      if (!o.start && o.seekto > 0) {
        time = o.seekto
      }
      o.controls.Played(time, duration, x)
    };
    this.Playing = function() {
      var time = o.media.time();
      var duration = o.media.duration();
      var delta = duration > 0 ? time / duration : 0;
      if (!o.seeking) {
        o.controls ? o.controls.Played((o.seekto > 0 ? o.seekto : time), duration) : ''
      } else {
        time != o.seeking_time && o.seeking_time != -9 ? o.seeking = false : ''
      }
      if ((v.ga == 1 || v.yamtr == 1) && duration > 0) {
        gaTrackPlay("play25", "Play 25%", delta, 0.25);
        gaTrackPlay("play50", "Play 50%", delta, 0.50);
        gaTrackPlay("play75", "Play 75%", delta, 0.75)
      }
      for (var i = 0; i < 3; i++) {
        if (!o.quartile[i]) {
          if (delta >= i * 0.25 + 0.25) {
            Quartile(i)
          }
        }
      }
      v.reloadlog == 1 ? log(1, time, duration) : '';
      if (v.reload == 1 || v.fileorto > 0) {
        if (o.play) {
          var z = false;
          var rld = false;
          if (v.reloadlive == 1 && v.reload == 1) {
            if (!o.media.isLive()) {
              z = true
            }
          }
          if (time > 0) {
            if (time == o.time && !z) {
              rld = true
            } else {
              o.reloadTimer = 0
            }
            o.time = time
          } else {
            if (v.reloadstart == 1) {
              var ld = o.media.loaded();
              v.reloadlog == 1 ? log(2, ld, o.timeld) : '';
              if (!z) {
                if (ld == o.timeld) {
                  rld = true
                } else {
                  o.reloadTimer = 0
                }
              }
              o.timeld = ld
            }
          }
          if (rld) {
            o.reloadTimer++;
            if (v.reload == 1) {
              v.reloadlog == 1 ? log(3, o.reloadTimer) : '';
              if (o.reloadTimer == v.reloadtimeout * (1000 / o.timerTime)) {
                o.actions.Reload()
              }
            } else if (v.fileorto > 0 && o.media.urlsl() > 1) {
              if (o.reloadTimer == v.fileorto * (1000 / o.timerTime)) {
                o.media.onError('OR timeout')
              }
            }
          }
        }
      }
      if (v.apiprm) {
        if (v.apiprm.pld == 1 && duration > 0) {
          !o.pld ? o.pld = [] : '';
          o.pld[Math.round(time)] = 1
        }
      }
      if (v.vast == 1) {
        if (v.nomidroll != 1 && v.midrolls == 1) {
          !exist(o.vast) ? MidrollOverlay("midroll", time, duration) : ''
        }
        if (v.nooverlay != 1 && v.overlays == 1) {
          !exist(o.vast) ? MidrollOverlay("overlay", time, duration) : ''
        }
      }
      if (v.intros == 1 && v.introstart > 0) {
        if (time >= v.introstart) {
          if (!exist(o.vast)) {
            if (Advertising("intro")) {
              o.media.Pause();
              o.controls.Pause()
            }
            v.introstart = 0
          }
        }
      }
      SettingsTimers("play");
      if (v.pass == 1 && v.passontime > -1) {
        PasswordTime(time, duration)
      }
      if (o.subtitle_on) {
        Sub(time)
      }
      if (o.storage && v.timestore == 1) {
        if (o.continue) {
          !o.seekto ? o.continue.write(time, duration) : ''
        }
      }
      if (o.cutted) {
        o.cut ? o.cut.play(time) : ''
      }
      if (exist(v.end)) {
        var ed = v.end;
        if (indOf([v.end], '-')) {
          ed = duration
        }
        if (ed > 0 && time > ed) {
          if (o.file_type == "youtube") {
            o.media.Pause();
            o.media.Seek(v.start > 0 ? v.start : 0)
          } else {
            o.media.Recover();
            o.actions.Stop()
          }
          v.start > 0 ? o.seekto = v.start : '';
          o.actions.Ended()
        }
      }
      if (exist(v.remove)) {
        var r1 = v.remove.split(",");
        for (var i = 0; i < r1.length; i++) {
          var r2 = r1[i].split("-");
          if (r2.length == 2) {
            if (time > r2[0] && time < r2[1]) {
              o.media.Seek(r2[1] * 1 + (o.system.safari ? 1 : 0))
            }
          }
        }
      }
      if (v.tracking == 1) {
        if (typeof PluginTrack !== "undefined") {
          PluginTrack(time, delta)
        }
      }
    };

    function Quartile(x) {
      o.quartile[x] = true;
      if (v.timestore == 1 && v.playedstore == 1 && v.playedquartile == x) {
        if (o.storage && o.plid) {
          o.continue ? o.continue.writePl(o.plid) : ''
        }
      }
    }

    function gaTrackPlay(x, y, t, p) {
      if (!exist(o.gatracked[y])) {
        if (t > p) {
          gaTracker(x, y, 1)
        }
      }
    };
    this.Reload = function() {
      o.reloadTimer = 0;
      exist(o.reloadto) ? clearTimeout(o.reloadto) : '';
      if (v.reloadjustevent == 1) {
        js("reload")
      } else {
        o.seekto > 0 || o.media.isLive() ? '' : o.seekto = o.media.time() + (v.reloadplus > 0 ? 1 : 0);
        var openpl = o.controls.PlaylistVisible();
        js("reload");
        o.media.reload();
        openpl && v.playlist.autohide == 1 ? o.controls.PlaylistShow() : ''
      }
    };
    this.Stopped = function() {
      o.controls.Played(0, 0);
      o.controls.Loaded(0, 0);
      o.actions.Duration(0, 0);
      o.controls.StopWaiting()
    };
    this.Loading = function() {
      if (o.media) {
        var time = o.media.loaded();
        if (v.pjsiframed == 1) {
          js("loaded", time)
        }
        var duration = o.media.duration();
        o.controls ? o.controls.Loaded(time, duration) : ''
      }
    };
    this.Ended = function() {
      js("fileend");
      o.ended = true;
      if (v.loop == 1) {
        if (o.file_type == "youtube") {
          this.Stop()
        }
        v.vast == 1 ? o.actions.VastRecover('preroll') : '';
        if (v.start > 0) {
          o.actions.Seek(v.start)
        }
        this.Play()
      } else {
        if (o.media.isLive() || o.file_type == "youtube") {
          this.Stop()
        } else {
          if (v.finishrewind == 1) {
            o.actions.Seek((v.start > 0 ? v.start : 0), true);
            if (o.system.ie) {
              o.media.Pause()
            }
          }
        }
        o.controls.onEnded();
        v.intros == 1 ? v.outros = 1 : '';
        if (Advertising("postroll") || Advertising("outro")) {} else {
          End()
        }
      }
    };
    this.Fullscreen = function() {
      var stop = false;
      var error = false;
      o.fs_error = false;
      o.fullscreen_process = true;
      setTimeout(function() {
        o.fullscreen_process = false
      }, 3000);
      for (var x in o.motions) {
        if (o.motions.hasOwnProperty(x)) {
          if (exist(o.motions[x])) {
            try {
              o.motions[x].TheEnd2()
            } catch (e) {}
          }
        }
      }
      try {
        o.fullscreen_start = true;
        if (((o.system.ios && v.nativefullios == 1) || (o.system.android && v.nativefulldroid == 1)) && o.tagvideo && !o.nativecontrols) {
          var x = o.media.tag();
          if (x) {
            if (x.webkitSupportsFullscreen) {
              NativeEnterFs();
              stop = true
            }
          }
        }
        if (!stop) {
          var fspr;
          var y = o.frame;
          if ((o.file_type == "dm" || o.file_type == "vimeo") && o.system.iphone && v.nativefullios == 1) {
            o.media.iosfull();
            return
          }
          if (y.requestFullscreen) {
            o.realfullscreen = true;
            fspr = y.requestFullscreen({
              navigationUI: "hide"
            });
            if (fspr !== undefined) {
              fspr.then(function() {}).catch(function(error) {})
            }
          } else if (y.requestFullScreen) {
            y.requestFullScreen({
              navigationUI: "hide"
            });
            o.realfullscreen = true
          } else if (o.frame.mozRequestFullScreen) {
            y.mozRequestFullScreen({
              navigationUI: "hide"
            });
            o.realfullscreen = true
          } else if (y.webkitRequestFullScreen) {
            y.webkitRequestFullScreen({
              navigationUI: "hide"
            });
            o.realfullscreen = true
          } else if (y.msRequestFullscreen) {
            y.msRequestFullscreen();
            o.realfullscreen = true
          }
        }
      } catch (e) {
        error = true;
        log(e)
      }
      if (!o.realfullscreen && !stop) {
        if (o.system.webkit && o.iniframe) {
          NativeEnterFs()
        } else {
          this.FullscreenUI()
        }
      }
      if (!error) {
        setTimeout(PostFullscreen, 200)
      }
    };

    function NativeEnterFs() {
      var x = o.media.tag();
      if (x) {
        o.nativefull = true;
        o.media.nativeSubtitle();
        x.webkitEnterFullScreen();
        x.addEventListener("webkitendfullscreen", iosExitFullscreen)
      }
    }

    function NativeExitFs() {
      var x = o.media.tag();
      if (x) {
        x.webkitExitFullscreen()
      }
    };
    this.NativeEnterFs = function() {
      NativeEnterFs()
    };
    this.NativeExitFs = function() {
      NativeExitFs()
    };

    function PostFullscreen() {
      if (o.fs_error != true) {
        if (o.ispipkit) {
          o.media.PipWebkit()
        }
        if (v.hotkey.volumewheelfull == 1) {
          VolumeWheelX(true);
          o.volumewheel = true
        }
        v.effects == 1 ? o.effects.api("full") : '';
        js("fullscreen");
        gaTracker("full", "Fullscreen", 1)
      }
    };
    var volumewheelin;
    var lastwheel = {
      x: 0,
      y: 0
    };

    function VolumeWheel(e) {
      if (o.droplist) {
        if (o.droplist.OpenScroll()) {
          return
        }
      }
      if (e.wheelDelta != 0) {
        e.deltaX != 0 ? lastwheel.x++ : lastwheel.x--;
        e.deltaY != 0 ? lastwheel.y++ : lastwheel.y--;
        if ((v.hotkey.whlskfll == 1 || v.hotkey.scrollwheelfull == 1) && o.fullscreen && lastwheel.y > lastwheel.x) {
          clearInterval(volumewheelin);
          volumewheelin = setInterval(function() {
            lastwheel = {
              x: 0,
              y: 0
            };
            clearInterval(volumewheelin)
          }, 1000)
        } else {
          o.hidden_volume_over = true;
          clearInterval(volumewheelin);
          volumewheelin = setInterval(function() {
            o.hidden_volume_over = false;
            o.controls.resize();
            lastwheel = {
              x: 0,
              y: 0
            };
            clearInterval(volumewheelin)
          }, 2000);
          o.controls.resize()
        }
        if (lastwheel.x > lastwheel.y) {
          if (e.deltaX > 0) {
            o.actions.Volume(parseFloat(v.volume) - v.hotkey.wheelstep / 10, "no")
          } else {
            o.actions.Volume(parseFloat(v.volume) + v.hotkey.wheelstep / 10, "no")
          }
        } else {
          var st = (o.system.win ? -v.hotkey.wheelstep / 10 : v.hotkey.wheelstep / 10);
          if (v.hotkey.scrollwheelfull == 1 && o.fullscreen) {
            o.media.scale((e.deltaY > 0 ? st : -st))
          } else if (v.hotkey.whlskfll == 1 && o.fullscreen) {
            apiProcessor("seek", (e.deltaY > 0 ? "+" + st * 10 : "-" + st * 10))
          } else {
            o.actions.Volume(parseFloat(v.volume) + (e.deltaY > 0 ? st : -st), "no");
            o.controls.volumescroll()
          }
        }
      }
    }

    function iosExitFullscreen() {
      if (o.system.ios) {
        o.media.removeNativeSubtitle();
        js("exitfullscreen")
      }
      o.nativefull = false
    }
    this.FullscreenUI = function() {
      if (o.fullscreen_start) {
        o.fullscreen = true;
        o.controls.Fullscreen();
        if (!o.realfullscreen) {
          if (exist(o.parentIframe)) {
            try {
              css(o.parentIframe, {
                'width': '100%',
                'height': '100%',
                'position': 'fixed',
                'left': 0,
                'top': 0,
                'zIndex': "100000"
              })
            } catch (err) {}
          }
          css(o.frame, {
            'width': '100%',
            'height': '100%',
            'position': 'fixed',
            'left': 0,
            'top': 0,
            'zIndex': "100000"
          });
          o.screen_w = o.frame.offsetWidth;
          o.screen_h = o.frame.offsetHeight;
          try {
            document.body.style.overflow = 'hidden';
            if (!exist(o.playlist)) {
              document.ontouchmove = function(e) {
                e.preventDefault()
              }
            }
          } catch (err) {}
        }
        if (v.fullblack == 1) {
          css(o.frame, {
            'backgroundColor': '#000000'
          })
        }
        if (v.fzoom == 1 && o.system.webkit == 1 && !o.system.ff) {
          var sw = window.screen.width;
          var fz = 1;
          for (var i = 1; i < 6; i++) {
            if (sw > 1000 * i) {
              fz = existv(v['fzoom' + (1000 * i)], i)
            }
          }
          if (fz > 1) {
            o.frame.style.zoom = fz;
            o.fzoom = fz;
            MainResize()
          }
        }
        if (o.droplist) {
          o.droplist.Close()
        }
        Sub();
        o.fullscreen_start = false
      }
    };
    this.Normalscreen = function() {
      _fullscreen_end = true;
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.cancelFullscreen) {
        document.cancelFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      if (!o.realfullscreen) {
        this.NormalscreenUI(false)
      }
    };
    this.changeAspect = function(x, y) {
      NewAspect(x, y)
    };

    function NewAspect(x, frmvst) {
      if (exist(o.vast) && !frmvst) {
        o.resizeonplay = x
      } else {
        var stop = false;
        var coh = o.container_w / x;
        var cow = 0;
        var nhs = {
          'height': coh
        };
        if (v.chngwd == 1) {
          if (coh > o.container_h) {
            coh = o.container_h;
            cow = o.container_w / x;
            o.container_w = nhs['width'] = cow
          }
        }
        if (exist(o.parentIframe) && v.notframe != 1) {
          try {
            css(o.parentIframe, nhs)
          } catch (err) {
            stop = true;
            log("iframe crossdomain issue")
          }
        }
        if (!stop) {
          o.aspect = x;
          o.container_h = coh;
          if (o.aspect > 0) {
            css(o.container, nhs)
          }
          if (cow > 0) {
            js("width", cow)
          }
          js("height", coh)
        }
        if (o.vast && !o.fullscreen) {
          o.screen_h = coh;
          if (cow > 0) {
            o.screen_w = cow
          }
          o.vast.Resize()
        }
      }
    };
    this.NormalscreenUI = function(x) {
      if (_fullscreen_end || x) {
        o.fullscreen = false;
        o.nativefull = false;
        if (!o.realfullscreen) {
          if (exist(o.parentIframe)) {
            try {
              css(o.parentIframe, {
                'position': 'static',
                'left': 0,
                'top': 0,
                'zIndex': 'unset'
              });
              css(o.parentIframe, o.parentIframe_style);
              css(o.parentIframe, {
                'width': o.normal_w,
                'height': o.normal_h
              })
            } catch (err) {}
          }
          css(o.frame, {
            'width': o.normal_w,
            'height': o.normal_h,
            'position': 'absolute',
            'left': 0,
            'top': 0,
            'zIndex': 'unset'
          });
          try {
            document.body.style.overflow = 'auto';
            document.ontouchmove = function(e) {
              return true
            }
          } catch (err) {}
        }
        o.controls.Normalscreen();
        if (v.fullblack == 1) {
          css(o.frame, {
            'backgroundColor': v.screencolor
          });
          if (v.transparent == 1) {
            o.frame.style.backgroundColor = 'transparent'
          } else {
            css(o.frame, {
              'backgroundColor': v.screencolor
            })
          }
        }
        if (o.fzoom > 1) {
          o.frame.style.zoom = 1;
          o.fzoom = 1;
          MainResize()
        }
        if (v.hotkey.volumewheelfull == 1) {
          VolumeWheelX(false);
          o.volumewheel = false
        }
        if (o.droplist) {
          o.droplist.Close()
        }
        Sub();
        o.subdrag ? o.subdrag = false : '';
        o.controls.PlaylistHere();
        _fullscreen_end = false;
        js("exitfullscreen");
        o.realfullscreen = false;
        o.fullscreen_process = false
      }
    };
    this.volumewheel = function(x) {
      v.hotkey.vlscrl != 0 ? VolumeWheelX(x) : ''
    };

    function VolumeWheelX(x) {
      lastwheel = {
        x: 0,
        y: 0
      };
      if (x) {
        window.addEventListener("wheel", VolumeWheel)
      } else {
        clearInterval(volumewheelin);
        window.removeEventListener("wheel", VolumeWheel)
      }
    }
    this.Stop = function(x) {
      v.preload = 0;
      if (x != 1) {
        o.controls.Pause();
        o.actions.Stopped()
      } else {}
      o.media.Volume(v.volume);
      if (o.controls.SettingsVisible()) {
        o.controls.Settings()
      }
      if (o.muted) {
        this.Mute()
      }
      if (exist(o.heartbeatInterval)) {
        clearInterval(o.heartbeatInterval);
        o.heartbeatInterval = null
      }
      Sub(0);
      log("stop");
      js("stop")
    };
    this.StopMedia = function() {
      v.preload = 0;
      v.autoplay = 0;
      o.media.Recover();
      o.actions.Stop()
    };
    this.SetQuality = function(x) {
      if (exist(o.current_quality)) {
        if (o.current_quality != x) {
          o.current_quality = x;
          if (v.qualitystore == 1) {
            o.default_quality = o.files_quality[x];
            if (o.storage) {
              localStorage.setItem("pljsquality", o.default_quality)
            }
          }
          o.media.SetQuality(x);
          js("quality", o.files_quality[x]);
          o.controls.QualityChanged(x)
        }
      }
    };
    this.AirplayChanged = function() {
      o.controls ? o.controls.AirplayChanged() : ''
    };
    this.SetAudioTrack = function(x) {
      if (exist(o.current_audiotrack)) {
        if (o.current_audiotrack != x) {
          o.current_audiotrack = x;
          if (v.trackstore == 1) {
            o.default_audio = v.default_audio = o.files_audiotrack[x];
            if (o.storage) {
              localStorage.setItem("pljstrack", o.default_audio)
            }
          }
          o.media.SetAudioTrack(x);
          js("audiotrack", x);
          o.controls.SettingChanged("audiotrack")
        }
      }
    };
    this.SetSpeed = function(x, z) {
      x == '0.0' ? x = 0.1 : '';
      var y = x;
      String(y).indexOf('.') > 0 ? z = 1 : '';
      y = y * 1;
      if (!z) {
        y = x == o.speed1 ? 1 : o.files_speed[x];
        o.current_speed = x
      }
      y = parseFloat(y);
      if (o.line_speed || z) {
        o.custom_speed = y;
        for (var i = 0; i < o.files_speed.length; i++) {
          if (y <= o.files_speed[i] * 1) {
            o.current_speed = i;
            break
          }
        }
      }
      if (o.storage && v.speedstore == 1) {
        localStorage.setItem("pljsspeed", y)
      }
      js("speed", y);
      o.media.SetSpeed(y);
      o.controls.SettingChanged("speed")
    };

    function Sub(x) {
      o.sbt ? o.sbt.show(exist(x) ? x : o.media.time()) : ''
    };
    this.RenewSubtitle = function() {
      if (o.sbt) {
        Sub();
        o.sbt.style()
      }
    };
    this.Subtitle = function(x) {
      if (typeof(PluginSub) == 'function') {
        !o.sbt ? o.sbt = new PluginSub() : '';
        o.sbt.check(x)
      }
    };
    var vast_and;
    var vast_or;
    var vast_type;
    var vasturl;

    function Advertising(x) {
      if (v["vast_" + x + "timebreak"] > 0 && o.storage) {
        var tb = localStorage.getItem("pljs" + x + "_" + o.d);
        if (tb) {
          var ct = new Date();
          o.clicktime = ct.getTime();
          var ct2 = (ct.getTime() - tb) / 3600000;
          if (ct2 < v["vast_" + x + "timebreak"]) {
            return false
          }
        }
      }
      if (v["vast_" + x + "timelimit"] > 0) {
        if (o.media.duration() > 0) {
          if (o.media.duration() < v["vast_" + x + "timelimit"] * 60) {
            if (v["vast_" + x + "timelimited"] > 0) {
              v["vast_" + x + "_" + "andlimit"] = v["vast_" + x + "timelimited"]
            } else {
              return false
            }
          }
        }
      }
      if (o.compilations.indexOf("VAST") != -1 && v.vast == 1 && !o.noads && v[x + 's'] == 1) {
        if (typeof VastVideo == "undefined") {
          return false
        }
        if (x == "intro" || x == "outro") {
          if (typeof PluginIntro !== "undefined") {
            vasturl = [];
            return PluginIntro(x)
          }
        }
        if (exist(o.vast) || exist(o.vastloader)) {
          if (!isVisible(o.vastcontainer) || isVastBgLoad(o.vasttype)) {
            log('ad bg');
            return false
          } else {
            log('ad now');
            return true
          }
        } else {
          if (exist(v[x])) {
            if (v[x].toString().indexOf(".") > -1 || v[x].toString().indexOf(":") > -1 || v[x].toString().indexOf("[yandex]") > -1) {
              js("vast_init", x);
              if (!isVastBgLoad(x) && x != "overlay") {
                setTimeout(function() {
                  o.play || (o.vastloader == null && o.vast == null) ? '' : o.actions.Waiting()
                }, 10);
                Curtain()
              }
              vast_and = 0;
              vast_or = 0;
              vast_type = x;
              vasturl = v[x].split(" and ");
              o.vast_loaders = [];
              o.adsinchain = vasturl.length;
              VastAndLimit();
              o.adscounter = 1;
              o.adsfirst = true;
              for (var i = 0; i < vasturl.length; i++) {
                vasturl[i] = vasturl[i].split(" or ")
              }
              v[x.concat("_", "recover")] = v[x];
              v[x] = null;
              o.vasttype = x;
              if (x != 'overlay') {
                o.vast = new VastVideo()
              }
              o.vastloader = new VastLoader();
              for (var i = 0; i < vasturl.length; i++) {
                for (var j = 0; j < vasturl[i].length; j++) {
                  var _url = trim(vasturl[i][j]);
                  if (_url.indexOf("[50%]") > 0) {
                    var tmp = random(1, 2);
                    vasturl[i][j] = vasturl[i][j].replace("[50%]", "");
                    if (tmp == 2) {
                      vasturl[i][j] = ''
                    }
                  }
                }
              }
              if (v.vast_preload == 1) {
                for (var i = 0; i < vasturl.length; i++) {
                  var n = i == 0 ? 1 : 0;
                  if (vasturl[i].length > n) {
                    for (var j = n; j < vasturl[i].length; j++) {
                      var _url = trim(vasturl[i][j]);
                      if (o.system.ie9) {
                        VastAddPreload(_url)
                      } else {
                        setTimeout(VastAddPreload, i * 100, _url)
                      }
                    }
                  }
                }
              }
              if (vasturl[0][0] == '') {
                VastNext()
              } else {
                o.vastloader.Load(trim(vasturl[0][0]), x)
              }
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        }
      } else {
        return false
      }
    };
    this.advertising = function(x) {
      Advertising(x)
    };

    function MidrollOverlay(w, x, d) {
      if (exist(o[w + 'o']) && v[w + 's'] == 1) {
        var y;
        for (var i in o[w + 'o']) {
          if (o[w + 'o'].hasOwnProperty(i)) {
            if (!exist(o[w + 'o'][i].worked) && exist(o[w + 'o'][i].time) && exist(o[w + 'o'][i].vast)) {
              var z = o[w + 'o'][i].time.toString();
              var ok = false;
              if (z) {
                if (x == "metadata") {
                  if (z == x) {
                    ok = true
                  }
                } else {
                  if (z.indexOf("%") > 0) {
                    if (d > 0) {
                      z = parseInt(z.substr(0, z.indexOf("%"))) * d / 100
                    } else {
                      z = -1
                    }
                  } else {
                    z = parseInt(z)
                  }
                  if (x >= z) {
                    if (v['vast_' + w + 'rest'] > 0 && z > -1) {
                      if (x - z >= v['vast_' + w + 'rest']) {
                        z = -1
                      }
                    }
                    if (z > -1) {
                      ok = true
                    }
                  }
                }
                if (o[w + 'o'][i].minduration && o.media.duration() > 0) {
                  if (o.media.duration() < o[w + 'o'][i].minduration * 1) {
                    o[w + 'o'][i].worked = true;
                    ok = false
                  }
                }
                if (ok) {
                  y = o[w + 'o'][i].vast;
                  v[w] = o[w + 'o'][i].vast;
                  o[w + 'crtm'] = o[w + 'o'][i].time;
                  o[w + 'skipimprsd'] = o[w + 'o'][i].skipimpessed;
                  if (Advertising(w)) {
                    o[w + 'o'][i].worked = true;
                    break
                  }
                }
              }
            }
          }
        }
      }
    };

    function VastBgLoad() {
      if (isVastBgLoad()) {
        if (o.vast_impressions == 0 || v['vast_' + o.vasttype + 'bgload2'] == 1) {
          css(o.vastcontainer, {
            "opacity": 0,
            "visibility": "hidden",
            "top": 2000
          });
          log(o.vasttype + " hide");
          o.vasttype == 'midroll' ? o.media.Play() : ''
        }
      }
    }

    function isVastBgLoad(z) {
      var y = false;
      var x = ['midroll', 'pauseroll'];
      for (var i = 0; i < x.length; i++) {
        if (o.vasttype == x[i] || z == x[i]) {
          if (v['vast_' + x[i] + 'bgload'] == 1) {
            y = true
          }
        }
      }
      return y
    };
    this.isVastBgLoad = function(x) {
      return isVastBgLoad(x)
    };
    this.VastImpression = function(x) {
      x ? '' : VastVisible();
      o.vasttype == "midroll" ? o.midrollimprsd.push(o.current_vast_url) : ''
    };
    this.VpaidStarted = function() {
      VastVisible()
    };
    this.VastShow = function() {
      VastVisible()
    };

    function VastVisible() {
      if (isVastBgLoad()) {
        if (o.play) {
          o.media.Pause();
          o.controls.Pause()
        }
        log(o.vasttype + " show");
        css(o.vastcontainer, {
          "opacity": 1,
          "visibility": "visible",
          "top": 0
        });
        o.vastfrombg = 1
      }
      if (o.nativefull && !o.realfullscreen) {
        NativeExitFs()
      } else {
        if (v["vast_" + o.vasttype + "normal"] == 1 && o.fullscreen) {
          o.actions.Normalscreen()
        }
      }
    };
    this.VastReady = function(x) {
      o.vastloader = null;
      o.vastfrombg = 0;
      log("VAST ready", o.vasttype);
      js("vast_ready", o.vasttype);
      if (x.type == "overlay") {
        var ovr = new VastOverlay(x);
        o.overlays.push(ovr)
      } else {
        if (exist(o.vast)) {
          if (v.preload == 0 && v.vastbgpreload == 1 && o.media.time() == 0 && o.media.duration() == 0) {
            v.preload = 1;
            o.media.Preload()
          }
          if ((!o.vast.tagLive() || x.isVpaid) && o.vastgo > 0) {
            log("VAST renew");
            o.vast.Remove();
            o.vast = null;
            o.vast = new VastVideo()
          }
          if (isVastBgLoad()) {
            VastBgLoad()
          } else {
            if (o.play) {
              o.media.Pause();
              o.controls.Pause()
            }
          }
          o.vastgo++;
          if (o.adsfirst && v.vast_longtimeout > 0) {
            clearTimeout(o.vast_longtimeout);
            o.vast_longtimeout = setTimeout(VastLongTimeout, v.vast_longtimeout * 1000 * 60);
            if (exist(v.vast_longtimemsg)) {
              if (v.vast_longtimemsg != '') {
                o.vast_longtomsg ? o.vast_longtomsg.remove() : '';
                o.vast_longtomsg = new PluginVastTimeMsg()
              }
            }
          }
          o.adsfirst = false;
          if (v.vast_prestarttimeout > 0) {
            log("VAST startdelay");
            js("vast_startdelay");
            setTimeout(VastGo, v.vast_prestarttimeout * 1000, x)
          } else {
            VastGo(x)
          }
        } else {
          log("VAST alarm")
        }
      }
    };

    function VastGo(x) {
      o.vast.Go(x)
    }

    function VastLongTimeout() {
      if (exist(o.vast)) {
        if (o.vast.active() && o.vast_impressions == 0) {
          o.vast.RemoveForNextAd();
          log("VAST timeout " + v.vast_longtimeout);
          vasturl = [];
          VastRemoveAndPlay()
        }
      }
    }
    this.VastError = function() {
      js('vast_error', o.vasttype);
      log("VAST error");
      VastCheckNext()
    };
    this.VastNext = function() {
      VastCheckNext()
    };

    function VastCheckNext() {
      var n = VastAndLimit();
      log("VAST next " + !n);
      !n ? VastNext() : VastRemoveAndPlay()
    };
    this.VastRemoveUrl = function(x) {
      if (v[o.vasttype + "_recover"]) {
        for (var i = 0; i < 3; i++) {
          v[o.vasttype + "_recover"] = v[o.vasttype + "_recover"].replace(x + (i == 0 ? ' and ' : (i == 1 ? ' or ' : '')), '')
        }
      }
    };

    function VastAndLimit() {
      var x = false;
      if (o.vasttype) {
        var val = v['vast_' + o.vasttype + '_' + 'andlimit'];
        var va2l = v['vast_' + o.vasttype + '_' + 'and2limit'];
        if (va2l || val) {
          if (va2l > 0 && o.vast_starts > 0) {
            o.adsinchain = va2l;
            if (o.vast_impressions >= va2l) {
              x = true
            }
          } else {
            if (val > 0) {
              o.adsinchain = val;
              if (o.vast_impressions >= val) {
                x = true
              }
            }
          }
        }
      }
      return x
    }

    function VastNext() {
      if (vasturl.length > 0 && vasturl[vast_and]) {
        if (vast_or < vasturl[vast_and].length - 1) {
          log("VAST Next");
          o.vast ? o.vast.RemoveForNextAd() : '';
          VastBgLoad();
          vast_or++;
          var _url = trim(vasturl[vast_and][vast_or]);
          var _preloaded = VastPreloaded(_url);
          if (_preloaded == 'skip') {
            o.vastloader = new VastLoader();
            o.vastloader.Load(_url, o.vasttype)
          }
          if (_preloaded == 'error') {
            VastNext()
          }
        } else {
          VastRemoveAndPlay()
        }
      } else {
        VastRemoveAndPlay()
      }
    }

    function VastPreloaded(_url) {
      var x = 'skip';
      if (v.vast_preload == 1 && o.vast_loaders) {
        var find = false;
        var n = 0;
        for (var i = 0; i < o.vast_loaders.length; i++) {
          if (o.vast_loaders[i].done == 0) {
            if (o.vast_loaders[i].ldr.preloaded(_url)) {
              o.vast_loaders[i].done = 1;
              var y = o.vast_loaders[i].ldr.Status();
              if (y == 'ready') {
                o.vastloader = o.vast_loaders[i].ldr;
                log("VAST preloaded");
                o.vast_loaders[i].ldr.Ready();
                x = y
              } else {
                if (y == '') {
                  x = 'ok';
                  log("VAST preloading");
                  o.vastloader = o.vast_loaders[i].ldr;
                  o.vast_loaders[i].ldr.disablePreload()
                }
                if (y == 'error') {
                  x = 'error'
                }
              }
              find = true
            }
            if (find && o.vast_loaders[i].load == 0) {
              n++;
              if (n < 6) {
                VastPreloadLoad(o.vast_loaders[i])
              } else {
                break
              }
            }
          }
        }
      }
      return x
    }
    this.VastInsertAnd = function(x, y) {
      if (x != '') {
        var z = vast_and;
        var moveOr2end = false;
        if (y) {
          for (var j = 0; j < vasturl.length; j++) {
            vasturl[j] == y ? z = j : ''
          }
        }
        if (vasturl.length == 1) {
          if (vasturl[0].length > 1 && vast_or < vasturl[0].length - 1 && vasturl[vast_or]) {
            var last_ors = vasturl[vast_or].slice(1, 99);
            vasturl[0].splice(vast_or + 1, 99);
            moveOr2end = true
          }
        }
        if (typeof(x) == "object") {
          for (var i = 0; i < x.length; i++) {
            vasturl.splice(z + i + 1, 0, [x[i]]);
            if (o.system.ie9) {
              VastAddPreload(x[i])
            } else {
              setTimeout(VastAddPreload, i * 100, x[i])
            }
          }
        } else {
          if (typeof(x) == "string") {
            vasturl.push([x]);
            VastAddPreload(x)
          }
        }
        if (moveOr2end) {
          vasturl[vasturl.length - 1] = vasturl[vasturl.length - 1].concat(last_ors)
        }
      }
    };
    this.VastInsertOr = function(x, y) {
      if (x != '') {
        var z = vast_and;
        if (y) {
          for (var j = 0; j < vasturl.length; j++) {
            vasturl[j] == y ? z = j : ''
          }
        }
        if (vasturl[z]) {
          if (typeof(x) == "object") {
            for (var i = 0; i < x.length; i++) {
              vasturl[z].push(x[i])
            }
          } else {
            if (typeof(x) == "string") {
              vasturl[z].push(x)
            }
          }
        }
      }
    };
    this.VastRemoveAndPlay = function(x) {
      VastRemoveAndPlay(x)
    };

    function VastAddPreload(x) {
      if (v.vast_preload == 1 && o.vast_loaders) {
        var i = 0;
        for (var i = 0; i < vasturl.length; i++) {
          if (vasturl[i] == x) {
            if (vast_and >= i) {
              return
            } else {}
          }
        }
        if (vasturl.length == 1 && vasturl[0].length > 1) {} else {
          var n = 0;
          for (i = 0; i < o.vast_loaders.length; i++) {
            o.vast_loaders[i].done == 0 ? n++ : ''
          }
          o.vast_loaders.push({
            load: 0,
            done: 0,
            x: trim(x),
            t: o.vasttype,
            ldr: new VastLoader(true)
          });
          n < 5 ? VastPreloadLoad(o.vast_loaders[o.vast_loaders.length - 1]) : ''
        }
      }
    }

    function VastPreloadLoad(x) {
      if (x) {
        x.load = 1;
        x.ldr.Load(x.x, x.t)
      }
    }

    function VastRemoveAndPlay(dontplay) {
      var stop = VastAndLimit();
      log("VAST remove (" + o.vast_impressions + ")");
      if (vasturl.length > 0 && vast_and == vasturl.length - 1) {
        if (vasturl[0][0].indexOf("js:") == 0) {
          vast_and = -1;
          vasturl = [
            [vasturl[0][0]]
          ]
        }
      }
      if (o.vast_stop == 2) {
        stop = true
      }
      if (vasturl.length > vast_and + 1 && !stop) {
        o.vast.RemoveForNextAd();
        VastBgLoad();
        vast_and++;
        o.adscounter++;
        vast_or = 0;
        var _url = trim(vasturl[vast_and][0]);
        var _preloaded = VastPreloaded(_url);
        if (_preloaded == 'skip') {
          o.vastloader = new VastLoader();
          o.vastloader.Load(_url, vast_type)
        }
        if (_preloaded == 'error') {
          VastRemoveAndPlay(dontplay)
        }
      } else {
        RemoveCurtain();
        o.controls.StopWaiting();
        if (exist(o.vast)) {
          o.vast.Remove();
          o.vast = null
        }
        o.vastloader = null;
        vasturl = [];
        vast_or = 0;
        vast_and = 0;
        o.vastfrombg = 0;
        o.shwvstfnsh != 1 ? js("vast_finish", o.vasttype) : '';
        o.shwvstfnsh = 0;
        if (v.vast_ima == 1) {
          if (o.ima) {
            try {
              o.ima.Destroy()
            } catch (e) {
              log(o.ima, e)
            }
            o.ima = undefined
          }
        }
        vast_type = '';
        o.vast_impressions = 0;
        o.vpaid_starts = 0;
        clearTimeout(o.vast_longtimeout);
        clearInterval(o.vldcntrInterval);
        o.vast_longtomsg ? o.vast_longtomsg.remove() : '';
        o.vast_loadtxt ? o.vast_loadtxt.hide() : '';
        o.vast_starts++;
        if (o.vasttype == "preroll" || (o.vasttype == "pauseroll" && v.pauserollonplay == 1 && o.actplay) || o.vasttype == "midroll") {
          if (v.file != '?') {
            o.media.AfterVast();
            var re;
            if (o.vstdwn) {
              o.actions.Download();
              o.vstdwn = false;
              re = true
            }
            if (o.file_type == "youtube" && !o.vastclick && o.system.ios) {
              re = true;
              o.vasttype == "preroll" ? o.media.reYT() : ''
            }
            if (re || dontplay == 'dontplay' || v.vast_dontplay == 1) {} else {
              o.actions.Play(1)
            }
          }
        }
        if (o.resizeonplay > 0) {
          NewAspect(o.resizeonplay);
          o.resizeonplay = 0
        }
        if (o.vasttype == "postroll") {
          End()
        }
        o.vastclick = false;
        o.vasttype = null
      }
    };
    this.EmptyVastUrl = function() {
      vasturl = [
        ['']
      ]
    };
    this.VastRecover = function(y) {
      var x = ['preroll', 'pauseroll', 'postroll', 'intro', 'outro'];
      var z;
      for (var i = 0; i < x.length; i++) {
        z = false;
        if (y) {
          y != x[i] ? z = true : ''
        }
        if (!z && exist(v[x[i].concat("_", "recover")])) {
          v['vast_' + x[i].concat("_", "limit")]--;
          if (v['vast_' + x[i].concat("_", "limit")] > 0) {
            v[x[i]] = v[x[i].concat("_", "recover")];
            v[x[i].concat("_", "recover")] = null
          }
        }
      }
      if (y == "preroll" || y == "midroll") {
        if (v.vast_midroll_limit > 1) {
          if (exist(o.midrollo) && v.midrolls == 1) {
            for (var i in o.midrollo) {
              o.midrollo[i].worked = undefined
            }
            v.vast_midroll_limit--
          }
        }
      }
    };
    this.Password = function() {
      Curtain();
      if (exist(o.pass)) {
        o.pass.Remove();
        o.pass = null
      }
      o.pass = new Pass()
    };
    this.RemovePassword = function() {
      RemoveCurtain();
      o.pass.Remove();
      o.pass = null
    };
    this.Curtain = function() {
      Curtain()
    };
    this.RemoveCurtain = function() {
      RemoveCurtain()
    };

    function Curtain() {
      if (o.curtain) {} else {
        o.curtain = createElement("div");
        o.frame.appendChild(o.curtain);
        Pos0(o.curtain);
        css(o.curtain, {
          "background": "#000000",
          "opacity": 0.1
        });
        o.curtain.style.zIndex = 1001
      }
    };

    function RemoveCurtain() {
      if (o.curtain) {
        o.frame.removeChild(o.curtain);
        o.curtain = null
      }
    };

    function ShowPoster() {
      if (exist(o.poster)) {
        var p = o.fullscreen ? existv(v.posterfull, v.poster) : v.poster;
        if (p != o.currentposter) {
          Poster(p, o.poster, v.poster_scale)
        }
        show(o.poster);
        css(o.poster, {
          "opacity": v.poster_a
        });
        o.controls.refresh();
        o.pstrv ? o.pstrv.play() : ''
      }
    };
    this.HidePoster = function() {
      if (exist(o.poster)) {
        if (isVisible(o.poster)) {
          clearInterval(o.pstrsin);
          var t = o.media.time();
          if (t == 0 && v.posterhidestart == 1) {} else {
            if (v.posterhidetime > 0) {
              clearTimeout(o.pstr_to);
              o.pstr_to = setTimeout(HidePoster2, v.posterhidetime * 1000)
            } else {
              HidePoster2()
            }
          }
        }
      }
    };

    function HidePoster2() {
      clearTimeout(o.pstr_to);
      if (v.posteronpause == 1 && !o.play) {} else {
        css(o.poster, {
          "opacity": 0
        });
        setTimeout(HidePoster3, 500)
      }
    }

    function HidePoster3() {
      if (!o.play && v.posterhide == 1) {} else {
        hide(o.poster);
        o.pstrv ? o.pstrv.pause() : '';
        o.controls.refresh()
      }
    }
    this.ShowPoster = function() {
      ShowPoster()
    };

    function StopOtherPlayer(x) {
      if (v.stopotherplayers == 1) {
        for (var i = 0; i < pljssglobal.length; i++) {
          if (pljssglobal[i]) {
            if (pljssglobal[i].api("id") != v.id) {
              pljssglobal[i].api('pause')
            }
          }
        }
      }
      pljssglobalid = v.id
    }

    function IndexPlaylist(x) {
      var y = Object.keys(x).length;
      o.pldur = 0;
      if (y > 0) {
        x = IndexPlaylistProcessor(x, y, '', -1)
      }
      return x
    }

    function IndexPlaylistProcessor(x, y, p, j) {
      var x2 = [];
      var stop;
      if (exist(x['playlist'])) {
        x = x['playlist'];
        y = x.length
      }
      var ii = 0;
      for (var i = 0; i < y; i++) {
        stop = false;
        if (exist(x[i]['id'])) {
          x[i]['pjs_id'] = x[i]['id']
        }
        x[i]['id'] = "x" + p + '-' + i + (exist(x[i]['id']) ? '-' + x[i]['id'] : '');
        j == -1 && i == 0 && !exist(x[i]['folder']) ? o.pl_first_id = x[i]['id'] : '';
        if (!exist(o.pl_first_id)) {
          j == 0 && !exist(x[i]['folder']) ? o.pl_first_id = x[i]['id'] : ''
        }
        x[i]['pjs_parent'] = p;
        x[i]['pjs_parent_i'] = j;
        x[i]['pjs_i'] = ii;
        if (exist(x[i]['duration'])) {
          o.pldur += x[i]['duration']
        }
        if (exist(x[i]['comment'])) {
          x[i]['title'] = x[i]['comment'];
          var q1 = x[i]['file'] ? x[i]['file'].indexOf('[') : 0;
          var q2 = x[i]['file'] ? x[i]['file'].indexOf(']') : 0;
          if (q1 > 0 && q2 > 0) {
            var s1 = x[i]['file'].substr(q1 + 1, q2 - q1 - 1);
            var s2 = s1.split(",");
            var s3 = '';
            for (var k = 0; k < s2.length; k++) {
              s3 += "[" + s2[k] + "]" + x[i]['file'].replace("[" + s1 + "]", s2[k]) + (k < s2.length - 1 ? "," : '')
            }
            x[i]['file'] = s3
          }
        }
        if (exist(x[i]['playlist'])) {
          x[i]['folder'] = x[i]['playlist']
        }
        if (!exist(x[i]['folder'])) {
          if (exist(x[i]['file'])) {
            if (x[i]['file'] == '' && !exist(x[i]['redirect'])) {
              stop = true
            }
          } else {
            stop = true
          }
        }
        if (!stop) {
          o.playlist_dic[x[i]['id']] = x[i];
          ii += 1
        }
        if (exist(x[i]['folder'])) {
          var z = Object.keys(x[i]['folder']).length;
          if (z > 0) {
            x[i]['folder'] = IndexPlaylistProcessor(x[i]['folder'], z, x[i]['id'], i)
          }
        }
        if (!stop) {
          x2.push(x[i])
        }
      }
      return x2
    }

    function FindFileInPlaylist() {
      var x = [];
      if (exist(v.plstart)) {
        if (v.plstart.indexOf("x-") != 0) {
          for (var y in o.playlist_dic) {
            if (o.playlist_dic.hasOwnProperty(y)) {
              if (o.playlist_dic[y].pjs_id == v.plstart) {
                v.plstart = y
              }
            }
          }
        }
        if (exist(o.playlist_dic[v.plstart])) {
          v.playlist.norootplstart == 1 ? v.playlist.openplaylistroot = 0 : '';
          x = o.playlist_dic[v.plstart]
        } else {
          x = o.playlist[0];
          if (v.plstart == o.plcontinue) {
            o.seekto = undefined
          }
        }
      } else {
        x = o.playlist[0]
      }
      if (x) {
        for (var i = 0; i < 10; i++) {
          if (exist(x['folder'])) {
            x = x['folder'][0]
          } else {
            break
          }
        }
        v.plstart = x.id;
        if (v.plstart == o.plcontinue) {
          x.start = undefined
        }
      }
      return x
    }
    this.plNxtExst = function() {
      return plNxtExst()
    };

    function plNxtExst() {
      var x = false;
      if (o.controls) {
        if (o.controls.PlaylistExist()) {
          if (v.playlist.autoplaylist == 1 && o.controls.PlaylistNextExist()) {
            x = true
          }
        }
      }
      return x
    };

    function End() {
      gaTracker("end", "End", 1);
      o.actions.VastRecover();
      if (o.storage && v.timestore == 1) {
        o.continue.write(0, o.media.duration())
      }
      if (o.controls.PlaylistExist()) {
        if (plNxtExst()) {
          if (exist(v.playlist.apto)) {
            o.plapto = setTimeout(function() {
              o.controls.PlaylistNext()
            }, v.playlist.apto * 1000)
          } else {
            o.controls.PlaylistNext()
          }
        } else {
          End2()
        }
      } else {
        if (v.finishnormal == 1 && o.fullscreen) {
          o.actions.Normalscreen()
        }
        End3()
      }
    }
    this.ShuffleEnd = function() {
      End2()
    };

    function End2() {
      if (v.playlist.playlistrewind == 1 && !o.controls.PlaylistNextExist()) {
        o.controls.PlaylistRewind();
        return
      }
      if (v.playlist.openplaylistafter == 1) {
        !o.controls.PlaylistVisible() ? o.controls.Playlist() : ''
      }
      End3()
    }

    function End3() {
      ShowPoster();
      js("finish");
      if (v.redirect == 1 && v.redirectafter == 1 && exist2(v.after)) {
        redirect(v.after)
      }
      if (v.suggestions) {
        if (typeof PluginSug !== "undefined") {
          !o.sug ? o.sug = new PluginSug() : ''
        }
      }
    }

    function fjs(x) {
      if (x.indexOf('js:') == 0) {
        try {
          x = eval(x.substr(3))
        } catch (e) {
          console.log(e.message)
        }
      }
      return x ? x : ''
    }

    function Heartbeat() {
      var vts = Math.floor(Date.now() / 1000);
      var fts = (exist(v.livets) ? v.livets : 0) + parseInt(o.media.time());
      var type = 0;
      o.system.desktop ? type = 1 : '';
      o.system.ios ? type = 2 : '';
      o.system.android ? type = 3 : '';
      o.system.winmob ? type = 4 : '';
      o.system.tv ? type = 5 : '';
      var url = v.heartbeat.replace("[vts]", vts);
      url = url.replace("[fts]", fts);
      url = url.replace("[dvtp]", type);
      var gif = document.createElement("img");
      gif.setAttribute('src', url);
      gif.setAttribute('height', '1px');
      gif.setAttribute('width', '1px');
      o.frame.appendChild(gif)
    }
  };
  var Media = function(url) {
    var url;
    var urls;
    var urls_and;
    var current_url;
    var _status = "";
    var _lastime = 0;
    var _ended = false;
    var _stopped = false;
    var _tags;
    var media;
    var media2;
    o.mediascale = {
      x: 1,
      y: 1,
      x0: 1,
      y0: 1
    };
    var wait;
    var plurls;
    var current_plurl = 0;
    var rldcnt = 0;
    var hlsend_to;
    if (typeof(url) == 'string') {
      url = trim(url);
      if (url.indexOf("[{") == 0) {
        try {
          url = url.replace(/pjs'qt/ig, '"');
          url = JSON.parse(url);
          wait ? url = o.actions.File(url) : ''
        } catch (e) {
          console.log(e);
          url = "incorrect JSON"
        }
      }
      if (url.indexOf("#" + v.enc2) == 0) {
        url = o[o.fd[0]](url)
      }
      if (url) {
        if (url.indexOf("#" + v.enc3) == 0 && url.indexOf(v.file3_separator) > 0) {
          url = o[o.fd[1]](url)
        }
      }
      if (url) {
        if (url.indexOf("#0") == 0) {
          if (url.indexOf(o.pltxt) > 0) {
            url = fd0(url.replace(o.pltxt, '')) + o.pltxt
          } else {
            url = fd0(url)
          }
        }
      }
      if (v.fplace == 1) {
        url = fplace(url)
      }
      if (typeof(url) == 'string') {
        if (url.indexOf(".m3u") == url.length - 4 || url.indexOf(".txt") > 0) {
          plurls = url.split(" or ");
          PlaylistLoad()
        }
      }
    }
    o.mediacontainer = createElement("div");
    Pos0(o.mediacontainer);
    css(o.mediacontainer, {
      "transition": "transform 0.2s linear",
      "text-align": "center"
    });
    o.frame.appendChild(o.mediacontainer);
    if (v.hotkey.swiping == 1) {
      if (!o.mdswp) {
        PluginMovable(o.mediacontainer, 'o.swiping', v.hotkey.swipev != 1, v.hotkey.swipev == 1, Swiping);
        o.mdswp = true
      }
    }
    if (!wait) {
      Start()
    }

    function Swiping() {
      var p = o.mediacontainer.offsetLeft;
      var p2 = o.screen_w;
      if (v.hotkey.swipev == 1) {
        p = o.mediacontainer.offsetTop;
        p2 = o.screen_h
      }
      var x;
      if (p > p2 * existv(v.hotkey.swipep, 0.5)) {
        if (o.controls.PlaylistPrevExist()) {
          x = true;
          o.controls.PlaylistPrev()
        }
      } else {
        if (p < -p2 * existv(v.hotkey.swipep, 0.5)) {
          if (o.controls.PlaylistNextExist()) {
            x = true;
            o.controls.PlaylistNext()
          }
        }
      }
      if (x) {
        if (v.hotkey.swipev == 1) {
          css(o.mediacontainer, {
            "top": 0
          })
        } else {
          css(o.mediacontainer, {
            "left": 0
          })
        }
      } else {
        new Motion({
          mc: o.mediacontainer,
          type: (v.hotkey.swipev == 1 ? "top" : "left"),
          to: 0,
          time: 0.1,
          ease: "back",
          me: "mdswp"
        })
      }
    }

    function PlaylistLoad() {
      url = plurls[current_plurl];
      if (url.indexOf(o.pltxt) > 0) {
        url = url.replace(o.pltxt, '');
        v.file = url
      }
      var xhr = XHR(url);
      xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
          Playlist(this);
          o.controls.NewPl()
        } else {
          PlaylistError(1)
        }
      };
      xhr.onerror = function(e) {
        PlaylistError(1)
      };
      xhr.send();
      wait = true
    }

    function PlaylistError(x) {
      if (current_plurl + 1 < plurls.length) {
        current_plurl++;
        PlaylistLoad();
        x = 0
      }
      if (x == 1) {
        onError("playlist not found or access denied")
      }
      if (x == 2) {
        onError("playlists JSON")
      }
    }

    function Playlist(x) {
      if (x.responseText) {
        var y = x.responseText;
        if (y.indexOf("#" + v.enc2) == 0) {
          y = o[o.fd[0]](y)
        }
        if (y.indexOf("#" + v.enc3) == 0 && y.indexOf(v.file3_separator) > 0) {
          y = o[o.fd[1]](y)
        }
        if (url.indexOf(".m3u") == url.length - 4) {
          var m3u = y.split(/(\r\n\t|\n|\r\t)/gm);
          url = [];
          var m3ui = 1;
          var m3ut = '';
          for (var i = 0; i < m3u.length; i++) {
            if (m3u[i].indexOf("#EXTINF") > -1) {
              if (m3u[i].indexOf(" - ") > -1) {
                var tmp = m3u[i].split(" - ");
                m3ut = tmp[tmp.length - 1]
              }
            }
            if (m3u[i].indexOf("http") > -1) {
              url.push({
                title: "" + (m3ut != '' ? m3ut : m3ui),
                file: m3u[i]
              });
              m3ui++;
              m3ut = ''
            }
          }
        } else {
          y = y.replace(/(\r\n\t|\n|\r\t)/gm, "");
          try {
            url = JSON.parse(y)
          } catch (e) {
            PlaylistError(2)
          }
        }
        if (o.controls) {
          if (v.playlist.openplaylistbefore == 1) {
            o.controls.PlaylistShow(2)
          }
        }
        Start();
        MainResize();
        setTimeout(function() {
          js("playlist")
        }, 1)
      }
    }

    function Start() {
      url = o.actions.File(url);
      url && url != '?' ? File(url) : ''
    }

    function onError(x, norld) {
      var y = true;
      var yy = true;
      js("loaderror", x);
      if (norld != 1 && v.reload == 1 && v.reloadfirst == 1) {
        ErrorReload();
        return
      }
      if (urls) {
        if (o.play || o.actplay || (v.autoplay == 1 && !o.start)) {
          if (urls.length > 0) {
            current_url++;
            y = current_url > urls.length - 1;
            if (y && urls.length > 1 && v.or0 > 0) {
              if (o.or0 < v.or0) {
                current_url = 0;
                y = false
              }
              o.or0++
            }
            if (y && v.tryotherquality == 1) {
              if (o.files.length > 1) {
                if (o.files_quality[o.current_quality].indexOf(Lang("loading_error")) == -1) {
                  o.files_quality[o.current_quality] = o.files_quality[o.current_quality] + ' (' + Lang("loading_error") + ')'
                }
                if (o.current_quality > 0) {
                  yy = false;
                  o.actions.SetQuality(o.current_quality - 1);
                  FileTo()
                } else {
                  if (o.files_quality[o.current_quality + 1].indexOf(Lang("loading_error")) == -1) {
                    yy = false;
                    o.actions.SetQuality(o.current_quality + 1);
                    FileTo()
                  }
                }
              }
            }
            if (!y) {
              var z = false;
              o.seekto > 0 || !o.start || media.isLive() ? '' : o.seekto = Time();
              if (o.file_type != FileType(urls[current_url]) || o.file_type != 'native') {
                if (o.play) {
                  o.actions.Stop(1);
                  z = true
                }
              }
              if (v.filerorto > 0) {
                clearTimeout(o.errorto);
                o.errorto = setTimeout(ErrorOr, v.filerorto * 1000)
              } else {
                ErrorOr()
              }
            } else {
              if (v.reload == 1 && yy && v.reloadfirst != 1) {
                y = false;
                ErrorReload()
              }
            }
          }
        } else {
          y = false
        }
      }
      if (y && yy && x) {
        ErrorMsg(x, true)
      }
    };

    function ErrorOr() {
      if (o.play || o.actplay || (v.autoplay == 1 && !o.start)) {
        log("Alternative source", o.seekto);
        File('or');
        o.start && !o.vast ? media.Play() : '';
        FileTo()
      } else {
        clearTimeout(o.errorto);
        o.errorto = setTimeout(ErrorOr, (v.filerorto > 0 ? v.filerorto : 5) * 1000)
      }
    }

    function ErrorMsg(x, mr) {
      gaTracker("error", "Error", true);
      if (v.alerts == 1 && !o.media_error) {
        if (v.alert404 == 1) {
          o.alert.txt(v.alert404text)
        } else {
          o.alert.txt(x)
        }
        if (v.alert404v == 1 && exist(v.alert404video)) {
          o.err404v = new PluginErrorVideo();
          o.actions.HidePoster()
        }
      }
      mr ? o.media_error = true : '';
      if (o.play) {
        o.actions.StopWaiting();
        o.controls.Pause()
      }
      exist(o.poster) && !exist(o.err404v) ? o.actions.ShowPoster() : '';
      js("error", x)
    }

    function ErrorReload() {
      rldcnt++;
      log("Error Reload Timeout " + rldcnt);
      o.play ? o.rldplay = 1 : '';
      exist(o.reloadto) ? clearTimeout(o.reloadto) : '';
      o.reloadto = setTimeout(ReloadTimeout, v.reloadtimeout * 1000)
    }

    function ReloadTimeout() {
      var x = existv(v.reloadtimes, 10);
      if (o.play || o.rldplay == 1) {
        o.rldplay = 0;
        if (rldcnt < x) {
          o.actions.Reload()
        } else {
          if (v.reloadfirst == 1) {
            onError(media.errorMessage(), 1)
          } else {
            ErrorMsg('Reload Error ' + media.errorMessage())
          }
        }
      }
    }
    this.onError = function(x) {
      onError(x ? x : media.errorMessage())
    };
    this.onEnded = function(y) {
      log("Ended");
      _ended = true;
      clearTimeout(hlsend_to);
      var x = false;
      if (Duration() > 0 && !o.casting && !y) {
        var time = o.current_time;
        if (time + 10 < Duration()) {
          log('Break (recovery)');
          js("recovery");
          media.Play();
          media.Seek(time);
          x = true
        }
      }
      if (!x) {
        o.actions.Ended();
        js("end")
      }
    };
    this.onPlay = function() {
      if (v.posterhidepause == 1) {
        exist(o.poster) ? o.actions.ShowPoster() : ''
      }
      v.posterhide == 1 ? o.actions.HidePoster() : '';
      o.controls.Play();
      o.actions.onPlayTag();
      if (v.tags == 1 && exist(v.tagsurl)) {
        if (v.tagsurl.length > 5) {
          RadioTags();
          clearInterval(_tags);
          _tags = setInterval(RadioTags, v.tagsinterval * 1000)
        }
      }
      js("play")
    };
    this.NativeControls = function() {
      if (v.nativecontrolsmobile == 1 && o.tagvideo) {
        if (o.actions.NativeControls()) {
          o.nativecontrols = media.nativeControls();
          o.controls.refresh();
          NativeSubtitle()
        }
      }
      o.checknative = true
    };
    this.onPause = function() {
      Time() > 0 && Time() == Duration() && o.actions.plNxtExst() ? '' : o.actions.Pause()
    };
    this.onSeeking = function() {
      log("Seeking")
    };
    this.onSeeked = function() {
      log("Seeked");
      o.actions.Seeked();
      exist(o.seeking_time) ? js("seek", o.seeking_time) : ''
    };
    this.onMeta = function() {
      log("Metadata");
      rldcnt = 0;
      o.actions.Metadata();
      o.file_type == "hls" ? StartSpeed(1) : ''
    };
    this.onDuration = function() {
      if (media) {
        log("Duration", Duration());
        o.actions.Duration(Time(), Duration());
        js("duration", Duration());
        rldcnt = 0;
        clearTimeout(o.reloadto);
        if (exist(o.restart_audio)) {
          o.actions.SetAudioTrack(o.restart_audio);
          o.restart_audio = null
        }
      }
    };

    function Time() {
      var x = media.time();
      return x
    }

    function Duration() {
      var x = media.duration();
      return x
    }
    this.onVolume = function() {};
    this.onWaiting = function() {
      log("Waiting");
      o.actions.Waiting();
      js("waiting")
    };
    this.onTimeupdate = function() {
      if (_lastime != Time()) {
        if (!o.curtain) {
          o.actions.StopWaiting();
          if (_lastime == 0) {
            if (v.posterhide == 1 && v.posterhidestart == 1) {
              o.actions.HidePoster()
            }
          }
        }
      }
      _lastime = Time();
      var dur = Duration();
      js("time", _lastime);
      if (v.pip.on == 1) {
        if (typeof(PluginPip) == 'function') {
          if (!media2 && v.pip.custom != 1 && v.file2 && v.file2 != '' && _lastime > 0) {
            o.mediapip = new PluginPip();
            media2 = o.mediapip.create()
          }
        }
      }
      if (o.file_type == "hls" && o.system.safari && dur > 0) {
        if (o.play && _lastime > dur - 1) {
          clearTimeout(hlsend_to);
          hlsend_to = setTimeout(ChkHlsEnd, 2000)
        }
      }
    };

    function ChkHlsEnd() {
      if (!_ended) {
        o.actions.Pause();
        o.media.onEnded()
      }
    }
    this.onYoutubeReady = function() {
      if (o.file_type == "youtube") {
        media ? media.YoutubeReady() : ''
      }
    };
    this.playByYoutubeId = function(x) {
      o.actions.Stop();
      media.playId(x)
    };
    this.YoutubeReady = function() {
      if (o.file_type == "youtube" && media) {
        return media.ready()
      } else {
        return true
      }
    };
    this.getHLS = function() {
      return media.getHLS()
    };
    this.getDASH = function() {
      return media.getDASH()
    };
    this.SetQuality = function(x) {
      log("Quality", x);
      if ((o.file_type == "native" || o.file_type == o.ws || (o.file_type == "hls" && (v.hlsquality == 0 || HlsLevelsLength() < 2)) || (o.file_type == "dash" && (v.dashquality == 0 || DashLevelsLength() < 2))) && exist(o.files[x])) {
        var time = this.time();
        o.seekto > 0 ? '' : o.seekto = time;
        o.actions.Seek(time, false);
        File(o.files[x], true);
        var y = true;
        if (v.settings) {
          if ((v.settings.qualitypause == 1 && !o.play) || !o.start) {
            y = false
          }
        }
        if (o.ncrtat > 0) {
          media.nativeAudioTrack(o.ncrtat)
        }
        if (y) {
          o.actions.Play()
        }
      }
      if (o.file_type == "hls" && v.hlsquality == 1 && HlsLevelsLength() > 1) {
        media.setHlsQuality(x)
      } else if (o.file_type == "dash" && v.dashquality == 1 && DashLevelsLength() > 1) {
        media.setDashQuality(x)
      } else if (o.file_type == "youtube" || o.file_type == "dm") {
        media.setQuality(x)
      }
    };
    this.renameQualities = function(x, y) {
      return RenameQualities(x, y)
    };
    this.renameTracks = function(x, y) {
      return RenameTracks(x, y)
    };

    function RenameQualities(x, y) {
      var r = x.height + 'p';
      if (x.height < 200) {
        r = '160p'
      } else if (x.height >= 200 && x.height <= 300) {
        r = '240p'
      } else if (x.height > 300 && x.height <= 400) {
        r = '360p'
      } else if (x.height > 400 && x.height <= 500) {
        r = '480p'
      } else if (x.height > 500 && x.height <= 600) {
        r = '540p'
      } else if (x.height > 600 && x.height <= 900) {
        r = '720p'
      } else if (x.height > 900 && x.height <= 1200) {
        r = '1080p'
      } else if (x.height > 1200 && x.height <= 1800) {
        r = '1440p'
      } else if (x.height > 1800) {
        r = '2160p'
      }
      if (x.width == 426 && x.height <= 240) {
        r = '240p'
      } else if (x.width == 640 && x.height <= 360) {
        r = '360p'
      } else if (x.width == 854 && x.height <= 480) {
        r = '480p'
      } else if (x.width == 1280 && x.height <= 720) {
        r = '720p'
      } else if (x.width == 1920 && x.height <= 1080) {
        r = '1080p'
      } else if (x.width == 2560 && x.height <= 1440) {
        r = '1440p'
      } else if (x.width == 3840 && x.height <= 2160) {
        r = '2160p'
      }
      if (v.settings.customqualities == 1 && exist(v.settings['name' + r])) {
        r = v.settings['name' + r]
      } else {
        if (y == 1) {
          r = Lang(r)
        }
        if (y == 2 && exist(x.bitrate)) {
          r = parseInt(x.bitrate / 1000) + ' ' + Lang('kbps')
        }
      }
      return r
    };

    function RenameTracks(x, y) {
      var r = x.toLowerCase();
      if (r == "eng" || r == "en") {
        x = "English"
      } else if (r == "rus" || r == "ru") {
        x = "Русский"
      }
      if (typeof(v.rename_audio) == "object") {
        if (exist(v.rename_audio[x])) {
          x = v.rename_audio[x]
        } else {
          x = existv(v.rename_audio[y.toString()], x)
        }
      }
      return x
    };

    function NativeSubtitle() {
      if (o.tagvideo && o.subs && !o.nativesub) {
        media.removeTracks();
        for (var i = 0; i < o.subs.length; i++) {
          if (o.subs[i] != 'all') {
            media.addTrack(o.subs[i], o.files_subtitle[i], (i == o.current_subtitle))
          }
        }
        o.nativesub = true
      }
    }
    this.SetSpeed = function(x) {
      log("Speed", x);
      x = parseFloat(x);
      media ? media.setSpeed(x) : '';
      if (v.pip.on == 1) {
        if (media2) {
          media2.setSpeed(x)
        }
      }
    };
    this.nativeSubtitle = function() {
      NativeSubtitle()
    };
    this.removeNativeSubtitle = function() {
      media.removeTracks()
    };
    this.SetAudioTrack = function(x) {
      log("Audiotrack", x);
      if (o.audiotracks.length > 0) {
        if (o.audiotracks[x]) {
          var time = this.time();
          o.seekto > 0 ? '' : o.seekto = time;
          o.actions.Seek(time, false);
          File(o.audiotracks[x], true);
          o.actions.Play()
        }
      } else {
        if (o.file_type == "hls" && v.hlsaudio == 1) {
          media.setHlsAudioTrack(x)
        } else if (o.file_type == "dash" && v.dashaudio == 1) {
          media.setDashAudioTrack(x)
        } else if (o.tagvideo) {
          media.nativeAudioTrack(x)
        }
      }
    };
    this.getQuality = function() {
      var x = o.files_quality[o.current_quality];
      x == undefined ? x = '' : '';
      var y = autoQuality() && v.hlsautoquality == 1 && v.hlsquality == 1 && x != Lang("auto");
      return (y ? '' + Lang("auto") + ' ' : '') + x
    };
    this.getAudioTrack = function() {
      var x = o.files_audiotrack[o.current_audiotrack];
      x == undefined ? x = '' : '';
      return x
    };
    this.autoQuality = function() {
      return autoQuality()
    };

    function autoQuality() {
      var x = false;
      if (media) {
        if (o.file_type == "youtube") {
          x = media.auto()
        }
        if (o.file_type == "hls" && v.hlsquality == 1 && HlsLevelsLength() > 1 && v.hlsautoquality == 1) {
          x = media.auto()
        }
        if (o.file_type == "dash" && v.dashquality == 1 && DashLevelsLength() > 1) {
          x = media.auto()
        }
      }
      return x
    }

    function HlsLevelsLength() {
      if (o.file_type == "hls") {
        return media.HlsLevelsLength()
      } else {
        return 0
      }
    }

    function DashLevelsLength() {
      if (o.file_type == "dash") {
        return media.DashLevelsLength()
      } else {
        return 0
      }
    };
    this.ratio = function() {
      return o.tagvideo ? media.ratio() : o.aspect
    };
    this.resize = function(x) {
      if (media && (o.file_type == "youtube" || o.file_type == "vimeo" || exist(v.ratio))) {
        media.resize()
      }
      if (v.screenmarginbottom > 0) {
        css(o.mediacontainer, {
          "height": (o.fullscreen ? "100%" : o.normal_h - v.screenmarginbottom)
        })
      }
      if (o.media2 && v.pip.movable == 1) {
        o.mediapip.resize()
      }
      if (v.poster_float == 1) {
        FloatPosterScale()
      }
      if (o.v360) {
        o.v360.resize()
      }
    };
    this.size = function() {
      return media ? media.size() : {}
    };
    this.iosfull = function() {
      media.iosfull()
    };
    this.reload = function() {
      log('reload');
      o.reloadTimer = 0;
      o.start ? v.autoplay = 1 : '';
      o.actions.Waiting();
      if (url && v.rldnornd != 1) {
        if (url.indexOf('(random)') == -1) {
          url = url + (url.indexOf('?') == -1 ? '?' : '&') + 'rand=(random)'
        }
      }
      if (url) {
        if (o.tagvideo) {
          media.src(url);
          this.Play()
        } else {
          File(url)
        }
      }
    };
    if (!exist(o.poster)) {
      CreatePoster()
    }
    if (exist(v.poster)) {
      if (v.poster != '') {
        Poster(v.poster, o.poster, v.poster_scale);
        if (v.posterhidepause == 1 && !o.start) {
          hide(o.poster)
        }
      } else {
        v.poster = null
      }
    }

    function Status() {
      _status = media ? media.status() : ''
    }

    function ParseUrl(url) {
      urls = url.split(" or ");
      for (var i = 0; i < urls.length; i++) {
        if (urls[i].indexOf(" and ") > -1) {
          urls_and = urls[i].split(" and ");
          urls[i] = urls_and[random(0, urls_and.length - 1)]
        }
        if (exist(v.prefile) && urls[i].indexOf("//") == -1) {
          urls[i] = v.prefile + urls[i]
        }
      }
      current_url = 0
    }

    function Timer() {
      Status();
      if (_status == "playing" || o.casting) {
        o.actions.Playing()
      }
      if (_status != "") {
        o.actions.Loading()
      }
    }

    function CreatePoster() {
      if (o.poster) {
        o.frame.removeChild(o.poster)
      }
      o.poster = createElement("div");
      css(o.poster, {
        "pointer-events": "none",
        "opacity": v.poster_a,
        transition: "opacity 0.5s"
      });
      if (v.poster_float == 1) {
        PluginFloatPoster()
      } else {
        css(o.poster, {
          'position': 'absolute',
          'left': 0,
          'top': 0,
          'width': '100%',
          'height': '100%'
        })
      }
      o.frame.appendChild(o.poster)
    }

    function File(x, y, crt) {
      clearTimeout(hlsend_to);
      v.file2_separator == '' ? v.file2_separator = ';' : '';
      if (x.indexOf('{') > -1 && x.indexOf('}') > -1 && x.indexOf(v.file2_separator) > -1) {
        var z = x.split(v.file2_separator);
        o.audiotracks = [];
        for (var i = 0; i < z.length; i++) {
          o.files_audiotrack[i] = z[i].substr(z[i].indexOf("{") + 1, z[i].indexOf("}") - 1);
          o.audiotracks[i] = z[i].substr(z[i].indexOf("}") + 1);
          if (exist(v.default_audio)) {
            if (v.default_audio == o.files_audiotrack[i]) {
              o.current_audiotrack = i
            }
          }
        }
        x = o.audiotracks[o.current_audiotrack]
      }!exist(urls) ? urls = [] : '';
      o.fileTimeout ? clearTimeout(o.fileTimeout) : '';
      x && x != 'or' && x != 'x' ? ParseUrl(x) : '';
      var ft = o.file_type;
      if (urls.length > 0) {
        o.file_type = FileType(urls[current_url]);
        var create = false;
        if (crt) {
          create = true
        }
        url = urls[current_url];
        if (url) {
          url = url.replace(/\(random\)/g, Math.random())
        } else {
          url = urls[0]
        }
        if (!create && x != 'x' && media && o.file_type == ft && (ft == "native" || (ft == "vimeo" && !o.system.mobile) || (ft == "youtube" && o.start && !_stopped) || ft == "dm" || ft == "hls" || ft == "dash")) {
          media.src(url);
          log("src")
        } else {
          log("New");
          RemoveMedia();
          CreateMedia(url)
        }
        StartSpeed()
      }
      if (!y) {
        clearInterval(o.timerInterval);
        o.timerInterval = setInterval(Timer, o.timerTime);
        if (!exist(v.subtitle) && v.sub_upload == 1 && v.sub_upload0 == 1) {
          v.subtitle = ''
        }
        if (exist(v.subtitle)) {
          o.actions.Subtitle(v.subtitle)
        }
        if (v.hidevideo == 1) {
          if (v.nativecontrolsmobile == 1 && o.system.mobile) {} else {
            if (o.file_type == "youtube") {
              css(o.mediacontainer, {
                "top": -3000,
                "left": -3000
              })
            } else {
              hide2(o.mediacontainer)
            }
            v.toolbar.hide = 0
          }
        }
      }
    }

    function StartSpeed(x) {
      if (o.speed1 || x) {
        if (o.line_speed) {
          media.setSpeed(o.custom_speed)
        } else {
          if (o.current_speed != o.speed1) {
            media.setSpeed(o.files_speed[o.current_speed])
          }
        }
      }
    }

    function FileType(x) {
      var type = "native";
      if (x) {
        if (x.indexOf(".m3u8") > 0) {
          type = "hls"
        } else if (x.indexOf(".mpd") > 0) {
          type = "dash"
        } else if (x.indexOf("w") == 0 && x.indexOf("s") == 1) {
          type = o.ws
        } else if (x.indexOf('youtube.com/') > -1 || x.indexOf('youtu.be/') > -1) {
          if (typeof(MediaYoutube) == 'function') {
            type = "youtube";
            if (v.youtubeposter == 1) {
              var y = 'https://img.youtube.com/vi/' + YoutubeID(x) + '/';
              imageExists(y + 'maxresdefault.jpg', function(z) {
                z > 100 ? v.poster = y + 'maxresdefault.jpg' : v.poster = y + 'hqdefault.jpg';
                if (o.playlist_dic) {
                  o.playlist_dic[o.plid]['poster'] = v.poster
                }
                v.autoplay == 1 || o.start ? '' : Poster(v.poster, o.poster, v.poster_scale)
              })
            }
          } else {
            log("No YouTube")
          }
        } else if (v.vimeo == 1 && x.indexOf('vimeo.com/') > -1) {
          type = "vimeo"
        } else if (v.dm == 1 && x.indexOf('dailymotion.com') > -1) {
          type = "dm"
        } else if (v.pjsframe == 1) {
          if (typeof(PjsFramed) == 'function') {
            PjsFramed(x) ? type = "pjs" : ''
          }
        }
      }
      o.tagvideo = type == "native" || type == "hls" || type == "dash" || type == o.ws;
      return type
    }

    function imageExists(url, callback) {
      var img = new Image();
      img.onload = function() {
        callback(this.height)
      };
      img.src = url
    }

    function CreateMedia(x) {
      o.file_type = FileType(x);
      if (o.tagvideo) {
        media = new MediaVideo(x, o.mediacontainer, false)
      }
      if (o.file_type == "youtube") {
        media = new MediaYoutube(x, o.mediacontainer)
      }
      if (v.vimeo == 1 && o.file_type == "vimeo") {
        media = new MediaVimeo(x, o.mediacontainer)
      }
      if (o.file_type == "pjs") {
        media = new MediaPjs(x)
      }
      if (o.file_type == "dm") {
        media = new MediaDaily(x, o.mediacontainer)
      }
      o.controls ? o.controls.UpdateSettings() : '';
      var t = 0;
      if (exist(v.duration)) {
        if (o.continue && v.timestore == 1 && !o.start) {
          t = o.continue.flag().t
        }
        setTimeout(function() {
          o.actions.Duration(t, v.duration)
        }, 100)
      }
    }

    function RemoveMedia() {
      if (media) {
        media.Remove();
        media = null;
        _status = "ended"
      }
      if (media2) {
        media2.Remove();
        media2 = null;
        media2 = undefined;
        o.mediapip.remove();
        o.media2 = null;
        o.mediapip = null
      }
    };
    this.Remove = function() {
      RemoveMedia()
    };
    this.RemoveAll = function() {
      urls = [];
      RemoveMedia()
    };
    this.File = function(x, y, z) {
      File(x, y, z)
    };
    this.Poster = function(x) {
      Poster(x, o.poster, v.poster_scale)
    };
    this.Play = function() {
      if (media) {
        _ended = false;
        _stopped = false;
        if (o.casting) {
          o.chromecast.Play()
        } else {
          media.Play();
          v.posterhide == 1 ? o.actions.HidePoster() : ''
        }
        if (exist(media2)) {
          media2.Play()
        }
        if (o.channels) {
          if (o.tagvideo) {
            if (o.clicktime > 0 && !o.channels.Created()) {
              o.channels.Update()
            }
          } else {
            o.files_channel = [];
            o.controls.SettingChanged("channel")
          }
        }
        if (o.tagvideo && v.volumegain > -1 && !o.gained && !o.system.ios) {
          if (o.clicktime > 0) {
            media.Gain()
          }
        }
        FileTo()
      } else {
        setTimeout(this.Play, 500)
      }
    };

    function FileTo() {
      if (v.fileto > 0 && urls.length > 1) {
        if (Duration() == 0 || v.filetod == 1) {
          clearTimeout(o.fileTimeout);
          o.fileTimeout = setTimeout(FileTimeout, v.fileto * 1000)
        }
      }
    }

    function FileTimeout() {
      if (o.play && (Duration() == 0 || v.filetod == 1) && Time() == 0 && !o.errorto) {
        if (media) {
          if (media.loaded() == 0 && current_url != urls.length - 1) {
            onError('File Timeout')
          }
        }
      }
    }
    this.PipSwitch = function(event) {
      if (o.media2) {
        if (v.pip.movable == 1) {
          if (o.moving[o.media2] > 2) {
            return
          }
        }
        if (event) {
          event.stopPropagation();
          window.event ? window.event.cancelBubble = true : ''
        }
        var tmp = media;
        media.ChangePip(true, o.media2);
        media2.ChangePip(false, o.mediacontainer);
        media = media2;
        media2 = tmp;
        media.Play();
        media2.Play();
        js("pip")
      }
    };
    this.reYT = function() {
      media.src(url)
    };
    this.ToolbarHide = function() {
      v.effects == 1 ? o.effects.api("hide") : '';
      o.toolbarhidden = true
    };
    this.ToolbarShow = function() {
      if (v.toolbar.resizeme) {
        v.toolbar.resizeme = false;
        if (o.controls) {
          o.controls.resizeFromText(1);
          o.controls.resizetext()
        }
      }
      o.toolbarhidden = false
    };
    this.PipToggle = function() {
      if (o.media2 && o.mediapip) {
        o.mediapip.toggle()
      }
    };
    this.Airplay = function() {
      if (o.tagvideo && o.airplay) {
        o.airplayed = true;
        media.airplay()
      }
    };
    this.PipWebkit = function() {
      if (o.tagvideo && o.pipwebkit) {
        media.pipwebkit()
      }
    };
    this.BeforeVast = function() {
      if (v.vast_poster == 1 && exist(v.vast_posterurl)) {
        if (exist(o.vast_poster)) {
          o.vast_poster.show()
        } else {
          if (typeof(PlgnVstPstr) == 'function') {
            o.vast_poster = new PlgnVstPstr()
          }
        }
      }
      VstLdTxt();
      if (media) {
        datetime(0);
        media.BeforeVast()
      }
    };
    this.AfterVast = function() {
      o.vast_poster ? o.vast_poster.hide() : '';
      media ? media.AfterVast() : ''
    };
    this.VstLdTxt = function(x) {
      VstLdTxt(x)
    };

    function VstLdTxt(x) {
      if (v.vast_loadtxtd == 1 && exist2(v.vast_loadtxt)) {
        if (exist(o.vast_loadtxt)) {
          o.vast_loadtxt.show(x)
        } else {
          if (typeof(PlgnVstLdtx) == 'function') {
            o.vast_loadtxt = new PlgnVstLdtx()
          }
        }
      }
    }
    this.Pause = function() {
      if (o.casting) {
        o.chromecast.Pause()
      } else {
        media ? media.Pause() : log("nomedia")
      }
      if (exist(o.media2)) {
        media2.Pause()
      }
    };
    this.Recover = function() {
      _stopped = true;
      o.actions.Seek(0, false);
      exist(o.poster) ? o.actions.ShowPoster() : '';
      File('x')
    };
    this.Toggle = function() {
      media ? media.Toggle() : ''
    };
    this.Seek = function(x) {
      if (media) {
        if (o.casting) {
          o.chromecast.Seek(x)
        } else {
          media.Seek(x);
          if (v.pip.on == 1) {
            if (media2) {
              media2.Seek(x)
            }
          }
        }
      }
    };
    this.Mute = function() {
      if (media) {
        media.Mute();
        o.casting ? o.chromecast.Mute() : '';
        log("mute")
      }
      if (v.pip.on == 1 && v.pip.nomute == 1) {
        if (media2) {
          media2.Mute()
        }
      }
    };
    this.Unmute = function() {
      if (media) {
        media.Unmute();
        o.casting ? o.chromecast.Unmute() : '';
        log("unmute")
      }
      if (v.pip.on == 1 && v.pip.nomute == 1) {
        if (media2) {
          media2.Unmute()
        }
      }
    };
    this.Volume = function(x) {
      media ? media.Volume(x) : '';
      if (v.pip.on == 1) {
        if (v.pip.nomute == 1 && media2) {
          media2.Volume(x)
        }
      }
      if (o.casting) {
        o.chromecast.Volume(x)
      }
    };
    this.isPlaying = function() {
      return media ? media.isPlaying() : false
    };
    this.isLive = function() {
      return media ? media.isLive() : false
    };
    this.status = function() {
      return _status
    };
    this.ended = function() {
      return _ended
    };
    this.time = function() {
      var x = 0;
      if (media) {
        x = Time();
        if (o.casting) {
          var y = o.chromecast.Time();
          y ? x = y : ''
        } else {
          if (Duration() > 0 && x != Duration()) {
            o.current_time = x + 0.0001
          }
        }
        return x
      } else {
        return 0
      }
    };
    this.duration = function() {
      var x = 0;
      if (media) {
        x = Duration();
        x == 0 && exist(v.duration) ? x = v.duration * 1 : '';
        if (o.casting) {
          var y = o.chromecast.Duration();
          y ? x = y : ''
        }
      }
      return x
    };
    this.loaded = function() {
      return media ? media.loaded() : 0
    };
    this.flip = function() {
      o.mediascale.flip = o.mediascale.flip ? false : true;
      css(o.mediacontainer, {
        "transform": (o.mediascale.flip ? "scaleX(-1)" : "scaleX(1)")
      })
    };
    this.createposter = function() {
      CreatePoster()
    };
    this.Preload = function() {
      if (o.tagvideo) {
        media.preload()
      }
    };
    this.menufltr = function(x, y) {
      if (x == 'scale') {
        if (y == 1) {
          Scale(v.settings.scale / 100)
        }
        if (y == 2) {
          Scale(-v.settings.scale / 100)
        }
        if (y == 3) {
          o.media.normalscale()
        }
      } else {
        if (o.tagvideo) {
          if (!o.fltrs[x]) {
            if (x == 'sepia') {
              o.fltrs[x] = 0
            } else {
              o.fltrs[x] = 1
            }
          }
          if (y == 1) {
            o.fltrs[x] += v.settings[x] / 100
          }
          if (y == 2) {
            o.fltrs[x] -= v.settings[x] / 100
          }
          if (y == 3) {
            if (x == 'sepia') {
              o.fltrs[x] = 0
            } else {
              o.fltrs[x] = 1
            }
          }!o.cftlr ? o.cftlr = [] : '';
          o.cftlr[x] = x + '(' + parseInt(o.fltrs[x] * 100) + '%) ';
          var cf = '';
          for (var i in o.cftlr) {
            cf += o.cftlr[i]
          }
          css(media.tag(), {
            'filter': cf
          });
          o.controls.MenuProc(x)
        }
      }
    };
    this.scale = function(x) {
      Scale(x)
    };

    function Scale(x) {
      if (String(x).indexOf(":") > 0) {
        var y = x.split(":");
        var z0 = o.screen_w / o.screen_h;
        var z1 = o.media.size();
        if (z1.width > 0) {
          z0 = z1.width / z1.height
        }
        var z = y[0] / y[1];
        if (z0 != z) {
          if (o.tagvideo) {
            media.ObjectFit()
          }
          var w2 = o.screen_h * z;
          var x2 = w2 / o.screen_w;
          var h2 = o.screen_w / z;
          var y2 = h2 / o.screen_h;
          if (x2 < 1) {
            o.mediascale.x0 = o.mediascale.x = parseFloat(x2);
            o.mediascale.y = 1
          } else {
            o.mediascale.x = 1;
            o.mediascale.y0 = o.mediascale.y = parseFloat(y2)
          }
          css(o.mediacontainer, {
            "transform": "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")"
          });
          o.custom_aspect = x
        }
      } else {
        o.mediascale.x += parseFloat(x);
        o.mediascale.y += parseFloat(x);
        css(o.mediacontainer, {
          "transform": "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")"
        })
      }
      if (v.hotkey.scaledrag == 1) {
        if (!o.mediadrag) {
          if (o.mediascale.x > 0 || o.mediascale.y > 1) {
            PluginMovable(o.mediacontainer, 'o.dragging');
            o.mediadrag = true
          }
        }
        xy00()
      }
      o.controls.MenuProc('scale')
    };
    this.normalscale = function() {
      if (o.tagvideo) {
        media.ObjectFit()
      }
      o.mediascale.x = o.mediascale.x0;
      o.mediascale.y = o.mediascale.y0;
      css(o.mediacontainer, {
        "transform": "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")"
      });
      o.controls.MenuProc('scale');
      o.custom_aspect = null;
      xy00()
    };

    function xy00() {
      if (o.mediadrag && v.hotkey.scaledrag0 != 1) {
        if (o.mediascale.x == 1 && o.mediascale.y == 1) {
          css(o.mediacontainer, {
            "top": 0,
            "left": 0
          })
        }
      }
    };
    this.hlsDashSub = function(x, y) {
      media.hlsDashSub(x, y)
    };
    this.currentFile = function() {
      return currentFile()
    };

    function currentFile() {
      return urls ? (urls.length > 0 ? (urls[current_url] ? urls[current_url] : '') : '') : ''
    };
    this.urlsl = function() {
      return urls.length
    };
    this.tag = function() {
      return media ? media.tag() : false
    };
    this.captions = function() {
      if (o.tagvideo) {
        media.captions()
      }
    };
    this.onDash = function() {
      media.onDash()
    };

    function RadioTags() {
      var xhr = XHR(v.tagsurl + '?url=' + urls[current_url]);
      xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
          if (this.responseText) {
            v.title = this.responseText;
            o.actions.Title('title')
          }
        }
      };
      xhr.send()
    }
  };
  var MediaVideo = function(url, container, pip) {
    var pjstg = createElement(v.hidevideo == 1 ? "audio" : "video");
    var hls_config;
    var pipto = 0;
    var hls;
    var is_hls = false;
    var is_hls2 = false;
    var hls_started = false;
    var hls_created = false;
    var hls_force = -1;
    var dash;
    var dash_created = false;
    var ws;
    var ws_created = false;
    var is_dash = false;
    o.live = false;
    var is_sleep = 0;
    var is_ws = false;
    var error;
    var error_time;
    var unmuteplease = false;
    var pip_quality = -1;
    var pause_before_vast = -1;
    var sleep_timeout;
    var _hlssubtracks;
    var hls_subs;
    var _seekaftervast;
    var urlmse;
    var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
    var nops = false;
    css(pjstg, {
      'position': 'static',
      'width': '100%',
      'height': '100%',
      'object-fit': 'contain',
      'transition': "filter 0.2s linear",
      'min-height': 'auto',
      'max-height': 'none',
      'min-width': 'auto',
      'max-width': 'none'
    });
    ObjectFit();
    if (o.system.iphone && v.autoplay == 1 && v.autoplaymute == 1) {
      if (!o.start && v.preroll) {
        attr(pjstg, {
          'playsinline': 1
        })
      } else {
        o.muted = true;
        o.controls ? o.controls.Mute() : '';
        attr(pjstg, {
          'muted': 1,
          'playsinline': 1,
          'autoplay': 1
        })
      }
    } else {
      if (o.system.mobile) {
        attr(pjstg, {
          'playsinline': 1
        })
      }
      if (!o.system.tv) {
        attr(pjstg, {
          'preload': (v.preload == 1 && v.autoplay == 0 ? 'metadata' : 'none')
        })
      }
    }
    if (v.tagcors == 1) {
      attr(pjstg, {
        "crossorigin": "anonymous",
        "crossOrigin": "anonymous"
      })
    }
    attr(pjstg, {
      'src': url,
      'x-webkit-airplay': 'allow',
      'disableRemotePlayback': 'true'
    });
    if (v.drunchr != 1) {
      attr(pjstg, {
        'disableRemotePlayback': 'true'
      })
    }
    if (v.ynxnopip == 1) {
      attr(pjstg, {
        'pip': 'false'
      })
    }
    if (pip) {
      pjstg.autoplay = true;
      if (v.pip.nomute != 1 || v.autoplay == 1) {
        pjstg.muted = true
      }
    }
    if (v.nativenodownload == 1) {
      attr(pjstg, {
        'controlsList': 'nodownload'
      })
    }
    tagSrc();
    if (v.taginframe == 1) {
      var tagframe = createElement("iframe");
      attr(tagframe, {
        "scrolling": "no",
        "allowfullscreen": "true",
        "allowtransparency": "true",
        "src": ""
      });
      css(tagframe, {
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "border": 0
      });
      container.appendChild(tagframe);
      var framei = window.setInterval(function() {
        if (tagframe.contentWindow.document.readyState === "complete") {
          window.clearInterval(framei);
          css(tagframe.contentDocument.body, {
            "padding": 0,
            "margin": 0
          });
          tagframe.contentDocument.body.appendChild(pjstg)
        }
      }, 100)
    } else {
      container.appendChild(pjstg)
    }
    if (!exist(url)) {
      url = ''
    }
    if (url.indexOf(".mpd") > 0) {
      is_dash = true;
      if (!o.dash) {
        if (typeof PluginDash !== "undefined") {
          o.dash = new PluginDash()
        }
      }
      if (exist(o.dash)) {
        if (!exist(window.dashjs)) {
          o.dash.script()
        } else {
          CheckDash()
        }
      }
    } else if (((options.hls == 1 && v.playerjscom != 1) || url.indexOf(".m3u8") > 0) && (o.compilation.indexOf("HLS") != -1 || exist(window.Hls))) {
      is_hls = true;
      is_hls2 = true;
      try {
        if (exist(window.Hls)) {
          if (!Hls.isSupported() || (o.system.safari && v.nativehlsinsafari == 1 && !o.system.ios) || (o.system.safari && o.system.ios && v.nativehlsios == 1) || (o.system.edge && v.nativehlsinedge == 1)) {
            log('HLS support ', Hls.isSupported());
            is_hls = false
          } else {
            if (v.preload == 1 || v.autoplay == 1 || v.preloadhls == 1 || pip) {
              CreateHLS(false)
            }
          }
        } else {
          is_hls = false
        }
      } catch (error) {
        is_hls = false
      }
    } else if (url.indexOf("w") == 0 && url.indexOf("s") == 1 && v.flussonic == 1) {
      is_ws = true;
      CreateWS()
    }
    if (o.system.tv && v.autoplay == 1 && !is_hls && !is_dash && !is_ws) {
      setTimeout(function() {
        o.actions.MediaReady()
      }, 100)
    }
    if (v.channels == 1) {
      exist(o.channels) ? o.channels.Close() : '';
      o.channels = new PlugMediaChannels()
    };
    this.onDash = function() {
      CheckDash()
    };

    function CheckDash() {
      is_dash = true;
      if (MseIsSupported()) {
        if (v.preload == 1 || v.autoplay == 1 || v.preloaddash == 1) {
          CreateDASH(false)
        }
      } else {
        is_dash = false;
        log("DASH not supported")
      }
    }

    function CreateDASH(x) {
      if (o.dash && !dash_created) {
        o.dash.create(x, pjstg, url, pip);
        exist(window.dashjs) ? dash_created = true : ''
      }
    }

    function CreateHLS(x) {
      log("HLS");
      if (o.files.length > 1) {
        v.hlsquality = 0;
        v.hlsquality_off = true
      } else {
        v.hlsquality_off ? v.hlsquality = 1 : ''
      }
      if (o.audiotracks.length > 1) {
        v.hlsaudio = 0;
        v.hlsaudio_off = true
      } else {
        v.hlsaudio_off ? v.hlsaudio = 1 : ''
      }
      o.hls_subs = false;
      hls_force = -1;
      hls_subs = [];
      o.sbt ? o.sbt.reHls() : '';
      var dontload = false;
      if (v.preroll && v.hlsvastwait == 1) {
        dontload = true;
        v.hlsvastwait = 0
      }
      hls_config = {
        debug: (v.hlsdebug == 1 && !pip),
        autoStartLoad: (v.preload == 1 || v.autoplay == 1 || pip || x) && !dontload,
        maxBufferLength: 60,
        maxMaxBufferLength: 60,
        manifestLoadingTimeOut: (v.hlsmto > 0 ? v.hlsmto * 1000 : 40000),
        fragLoadingTimeOut: (v.hlsfto > 0 ? v.hlsfto * 1000 : 40000),
        enableWorker: false
      };
      if (v.hlscltps == 1) {
        hls_config.capLevelToPlayerSize = true
      }
      if (v.hlsdrm == 1) {
        var ks = ['fp', 'wv', 'pr', 'ck'];
        var ksu = ['com.apple.fps', 'com.widevine.alpha', 'com.microsoft.playready', 'org.w3.clearkey'];
        var dj = {};
        for (var i = 0; i < ks.length; i++) {
          if (v['hlsdrm' + ks[i]] == 1) {
            dj[ksu[i]] = {};
            if (exist2(v['hlsdrm' + ks[i] + 'l'])) {
              dj[ksu[i]].licenseUrl = v['hlsdrm' + ks[i] + 'l']
            }
            if (exist2(v['hlsdrm' + ks[i] + 's'])) {
              dj[ksu[i]].serverCertificateUrl = v['hlsdrm' + ks[i] + 's']
            }
          }
        }
        hls_config.emeEnabled = true;
        hls_config.drmSystems = dj
      }
      if (v.hlscookies == 1) {
        hls_config['xhrSetup'] = function(xhr, url) {
          xhr.withCredentials = true
        }
      }
      if (exist(v.hlsconfig)) {
        if (exist(v.hlsconfig.maxBufferLength)) {
          if (v.hlsconfig.maxBufferLength > 600) {
            v.hlsconfig.maxBufferLength = 600
          }
          v.hlsconfig.maxMaxBufferLength = v.hlsconfig.maxBufferLength
        }
        if (exist(v.hlsconfig.customBuffer)) {
          v.hlsconfig.maxMaxBufferLength = v.hlsconfig.maxBufferLength = v.hlsconfig.customBuffer
        }
        if (typeof v.hlsconfig == "object") {
          for (var key in v.hlsconfig) {
            hls_config[key] = v.hlsconfig[key]
          }
        }
      }
      hls = new Hls(hls_config);
      js("hls", hls, 1);
      hls.loadSource(url);
      hls.attachMedia(pjstg);
      hls.on(Hls.Events.MEDIA_ATTACHED, function() {
        log("HLS attached")
      });
      hls.on(Hls.Events.MANIFEST_LOADED, function(event, data) {
        !pip ? o.actions.MediaReady() : ''
      });
      hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
        if (!pip && v.hlsquality == 1 && HlsLevelsLength() > 1) {
          HlsQualityLevels();
          HlsLevel();
          o.controls ? o.controls.QualityChangedNoHand(o.current_quality) : ''
        }
      });
      hls.on(Hls.Events.LEVEL_SWITCH, function(event, data) {
        HlsLevel()
      });
      hls.on(Hls.Events.LEVEL_SWITCHED, function(event, data) {
        HlsLevel()
      });
      hls.on(Hls.Events.LEVEL_LOADED, function(event, data) {
        if (!pip) {
          if (data.details.live != o.live) {
            o.live = data.details.live;
            o.controls.refresh()
          }
          o.live = data.details.live;
          if (o.live) {
            log("Live");
            o.dvr = url.indexOf("?DVR") > -1;
            if (pjstg.duration > 0 && pjstg.currentTime > 0) {
              if (pjstg.duration - pjstg.currentTime < 10) {
                if (o.hls_stuck_time > 0) {
                  if (o.hls_stuck_time == pjstg.currentTime && o.hls_stuck_duration == pjstg.duration) {
                    o.stuck++;
                    if (o.stuck > 2) {
                      o.stuck = 0;
                      o.hls_stuck_time = -1;
                      hls.destroy();
                      CreateHLS(true);
                      onEnded()
                    }
                  } else {
                    o.hls_stuck_time = -1
                  }
                } else {
                  o.hls_stuck_time = pjstg.currentTime;
                  o.hls_stuck_duration = pjstg.duration
                }
              }
            }
          }
        }
        if (v.hlsquality == 1) {
          o.current_quality = hls.loadLevel;
          o.controls ? o.controls.QualityChangedNoHand(o.current_quality) : ''
        }
        HlsUpdateAudio()
      });
      hls.on(Hls.Events.FRAG_CHANGED, function(event, data) {
        if (exist(data.frag)) {
          !pip ? js("fragment", data.frag.relurl) : '';
          if (v.hlsfdt == 1) {
            typeof PlgHlsFdt !== "undefined" ? PlgHlsFdt(data.frag) : ''
          }
        }
        if (hls_force > -1) {
          hls.nextAutoLevel = hls_force;
          hls_force = -1
        }
        hls_started = true;
        hlsTextTracks()
      });
      hls.on(Hls.Events.FRAG_PARSING_METADATA, function(event, data) {
        js("fragdata", data, 1)
      });
      hls.on(Hls.Events.AUDIO_TRACKS_UPDATED, function(event, data) {
        if (!pip && v.hlsaudio == 1) {
          setTimeout(HlsAudioTracks, 500)
        }
      });
      hls.on(Hls.Events.AUDIO_TRACK_SWITCHING, function(event, data) {
        if (!pip && v.hlsaudio == 1) {
          HlsAudioTrack()
        }
      });
      hls.subtitleDisplay = false;
      if (v.hlssubtracks == 1) {
        hls.on(Hls.Events.FRAG_LOADED, function(event, data) {
          if (typeof(data) == "object") {
            if (data.frag.type == 'subtitle') {
              var fu = data.frag.url;
              if (fu) {
                var st = hls.subtitleTrack;
                if (o.subtitle_on) {
                  o.sbt.hlsSub(st + 'id_' + fu)
                } else {
                  !hls_subs[st] ? hls_subs[st] = [] : '';
                  hls_subs[st].push(fu)
                }
              }
            }
          }
        });
        hls.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, function(event, data) {
          var x = hls.subtitleTracks;
          var y = '';
          for (var i = 0; i < x.length; i++) {
            y += (y != '' ? ',' : '') + '[' + x[i].name + ']hls' + i;
            x[i].default ? o.remember_sub = x[i].name : ''
          }
          apiProcessor("subtitle", y)
        })
      }
      hls.on(Hls.Events.ERROR, function(event, data) {
        v.log == 1 ? console.log(data) : '';
        js(data.type + 'Hls', data, 0, true);
        o.hlserror = data;
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              log("HLS fatal network error");
              if (v.livewakeup == 1) {
                HlsSleep0()
              } else {
                error = data.details + ' (' + data.type + ')';
                o.seekto > 0 || pip || v.live == 1 || is_ws ? '' : o.seekto = Time();
                hls.destroy();
                if (!pip) {
                  o.media.onError()
                }
              }
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              log("HLS fatal media error, recover");
              hls.recoverMediaError();
              break;
            default:
              error = "HLS fatal error, destroy";
              hls.destroy();
              !pip ? o.media.onError() : '';
              break
          }
        } else {
          log("HLS ", data.type, data.details, (data.response ? data.response.code : ''));
          js("hls_error", (data.response ? data.response.code : ''));
          if (is_sleep > 0) {
            is_sleep = 2;
            HlsSleep()
          }
        }
      });
      hls_created = true
    }

    function HlsLevel() {
      if (!pip && v.hlsquality == 1 && HlsLevelsLength() > 1) {
        if (o.current_quality != hls.loadLevel) {
          o.current_quality = hls.loadLevel;
          o.controls ? o.controls.QualityChangedNoHand(o.current_quality) : '';
          log("HLS Level " + o.current_quality)
        }
        if (exist2(v.forbidden_quality) && o.current_quality > 0) {
          var fq = v.forbidden_quality.split(",");
          for (var k = 0; k < fq.length; k++) {
            if (o.files_quality[o.current_quality].indexOf(fq[k]) > -1) {
              log('regress quality');
              hls.currentLevel = o.current_quality - 1;
              o.current_quality--;
              break
            }
          }
        }
      }
    }

    function CreateWS() {
      if (exist(window.FlussonicMsePlayer)) {
        if (MseIsSupported()) {
          if (!exist(o.ws)) {
            o.ws = new PluginWS()
          }
          ws = new FlussonicMsePlayer(pjstg, url, existv(v.wsconfig, {
            debug: true
          }));
          ws_created = true
        } else {
          is_ws = false;
          log("not supported")
        }
      }
    }

    function hlsTextTracks() {
      Captions()
    };
    this.captions = function() {
      Captions()
    };

    function Captions() {
      if (v.hlscaptions && o.controls) {
        if (pjstg.textTracks.length > 0) {
          if (v.captions == 1) {
            pjstg.textTracks[pjstg.textTracks.length - 1].mode = "showing"
          } else {
            pjstg.textTracks[pjstg.textTracks.length - 1].mode = "hidden"
          }
          if (!o.captions) {
            o.captions = true;
            o.controls.refresh()
          }
        } else {
          if (o.captions) {
            o.captions = false;
            o.controls.refresh()
          }
        }
      }
    }

    function HlsSleep0() {
      log("sleep");
      !pip && o.play ? o.actions.Pause() : '';
      o.actions.ShowPoster();
      is_sleep = 1;
      HlsSleep(o.play)
    }

    function HlsSleep(x) {
      if (is_sleep > 0) {
        clearTimeout(sleep_timeout);
        sleep_timeout = setTimeout(HlsLiveWaiting, v.livewakeuptime * 1000)
      }
    }

    function HlsLiveWaiting() {
      if (is_sleep > 0) {
        log("watching");
        if (is_hls) {
          if (is_sleep == 1) {
            hls.loadSource(url)
          }
          if (is_sleep == 2) {
            hls.destroy();
            CreateHLS(true);
            pjstg.play()
          }
        } else {
          attr(pjstg, {
            'src': url
          })
        }
      }
    }
    pjstg.addEventListener('loadstart', onLoadStart);
    pjstg.addEventListener('error', onTagError);
    pjstg.addEventListener('ended', onEnded);
    pjstg.addEventListener('play', onPlay);
    pjstg.addEventListener('pause', onPause);
    pjstg.addEventListener('timeupdate', onTimeupdate);
    pjstg.addEventListener('seeking', onSeeking);
    pjstg.addEventListener('seeked', onSeeked);
    pjstg.addEventListener('loadedmetadata', onMeta);
    pjstg.addEventListener('volumechange', onVolume);
    pjstg.addEventListener('waiting', onWaiting);
    pjstg.addEventListener('durationchange', onDuration);
    pjstg.addEventListener('loadeddata', onLoadedData);
    pjstg.addEventListener('enterpictureinpicture', onPipEnter);
    pjstg.addEventListener('leavepictureinpicture', onPipLeave);
    if (o.system.iphone) {
      pjstg.addEventListener('webkitfullscreenchange', iosfull)
    }

    function onLoadStart() {
      if (!is_hls && !is_dash) {
        !pip ? o.actions.MediaReady() : ''
      }
    }

    function iosfull() {
      if (pjstg.webkitDisplayingFullscreen) {
        o.actions.NativeEnterFs()
      }
    }

    function onTagError() {
      if (!is_hls && !is_dash) {
        if (pjstg.error) {
          log(pjstg.error, pjstg.error.code, pjstg.error.message);
          var x = pjstg.error.code;
          error = pjstg.error.message;
          if (error == '') {
            if (x == 1) {
              error = "aborted"
            }
            if (x == 2) {
              error = "network"
            }
            if (x == 3) {
              error = "decode"
            }
            if (x == 4) {
              error = "not found"
            }
          }
          log("Video Error: ", error)
        }
        if (is_hls2 && v.livewakeup == 1) {
          error = undefined;
          HlsSleep0()
        }
        if (error != undefined || o.system.ios) {
          onError()
        }
      }
    }

    function onError() {
      !pip ? o.media.onError() : ''
    }

    function onEnded() {
      !pip ? o.media.onEnded() : ''
    }

    function onPlay() {
      if (!o.start && v.preroll) {
        log('wrong play');
        pause();
        o.actions.Play();
        return
      }
      if (is_hls && is_sleep > 0) {} else {
        if (!pip) {
          var bgl = o.actions.isVastBgLoad() && o.vastfrombg != 1;
          if (bgl || pause_before_vast == -1) {
            var x = false;
            if (is_hls) {
              if (exist(o.vast) || exist(o.vastloader)) {
                if (bgl) {} else {
                  log('pause onplay');
                  pause();
                  x = true
                }
              }
            }
            if (!x) {
              o.media.onPlay()
            }
          }
        }
      }
    }

    function onPause() {
      if (!nops) {
        log("onpause");
        if (o.play && o.actplay && !pjstg.ended && v.unpause == 1 && !o.nativecontrols) {
          log("unpause");
          TagPlay()
        } else {
          !pip && !o.nopause && pjstg.paused ? o.media.onPause() : ''
        }
      }
    }

    function onTimeupdate() {
      !pip ? o.media.onTimeupdate() : '';
      if (pause_before_vast > -1) {
        if (Time() > pause_before_vast) {
          pause();
          pause_before_vast = -1
        }
      }
    }

    function onSeeking() {
      !pip ? o.media.onSeeking() : ''
    }

    function onSeeked() {
      !pip ? o.media.onSeeked() : ''
    }

    function onMeta() {
      if (pip) {
        PipSize()
      } else {
        o.media.onMeta();
        PlayerSize();
        if (is_hls && is_sleep > 0) {
          is_sleep = 0;
          log("wake up");
          hls.startLoad();
          TagPlay();
          o.controls.Play()
        }
        if (exist(v.ratio)) {
          Resize()
        }
        setTimeout(MetaAudio, 500)
      }
    }

    function MetaAudio() {
      if (pjstg.audioTracks && o.files_audiotrack.length == 0 && v.nativeaudio != 0) {
        var at = pjstg.audioTracks;
        for (i = 0; i < at.length; i++) {
          var x = o.media.renameTracks((at[i].label ? at[i].label + ' (' : '') + at[i].language + (at[i].label ? ')' : ''), i);
          if (x == v.default_audio) {
            o.current_audiotrack = o.ncrtat = i
          }
          o.files_audiotrack[i] = x
        }
        o.controls.AudioTrackChangedNoHand(o.ncrtat)
      }
      if (o.ncrtat > 0) {
        nativeAudioTrack(o.ncrtat, 1)
      }
    };
    this.ratio = function() {
      return (pjstg.videoWidth / pjstg.videoHeight)
    };

    function PipSize() {
      if (pjstg.videoHeight > 0) {
        css(container, {
          "height": container.offsetWidth / (pjstg.videoWidth / pjstg.videoHeight) - parseInt(v.pip.border)
        })
      } else {
        if (pipto < 20) {
          setTimeout(PipSize, 100);
          pipto++
        }
      }
    }

    function PlayerSize() {
      if (v.changeheight == 1) {
        clearInterval(o.heightInterval);
        o.heightInterval = setInterval(WaitSize, 100);
        WaitSize()
      }
    }

    function WaitSize() {
      if (pjstg) {
        if (pjstg.videoHeight > 0) {
          o.actions.changeAspect(pjstg.videoWidth / pjstg.videoHeight);
          clearInterval(o.heightInterval)
        }
      }
    }

    function onDuration() {
      !pip && !is_ws ? o.media.onDuration() : ''
    }

    function onVolume() {
      !pip ? o.media.onVolume() : ''
    }

    function onWaiting() {
      if (is_hls && is_sleep > 0) {} else {
        !pip ? o.media.onWaiting() : ''
      }
    }

    function onLoadedData() {
      o.actions.LoadedData()
    }

    function MseIsSupported() {
      var mediaSource = window.MediaSource = window.MediaSource || window.WebKitMediaSource;
      var sourceBuffer = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
      var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === 'function' && mediaSource.isTypeSupported(mimeCodec);
      var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === 'function' && typeof sourceBuffer.prototype.remove === 'function';
      return isTypeSupported && sourceBufferValidAPI
    }
    var span05 = "<span style='opacity:0.5'>";

    function HlsQualityLevels() {
      if (!pip && v.hlsquality == 1) {
        var x = hls.levels;
        var q = -1;
        o.files_quality = [];
        if (x.length > 1) {
          for (var i = 0; i < x.length; i++) {
            if (exist(x[i].height)) {
              var y = o.media.renameQualities(x[i], v.nameofhlsquality);
              if (o.files_quality.indexOf(y) > -1 || v.hlsaddbitrate == 1) {
                if (exist(x[i].bitrate)) {
                  var yi = o.files_quality.indexOf(y);
                  yi > -1 ? o.files_quality[yi] += " " + span05 + " &nbsp;" + parseInt(x[yi].bitrate / 1000) + ' ' + Lang('kbps') + '</span>' : '';
                  o.files_quality[i] = y + " " + span05 + " &nbsp;" + parseInt(x[i].bitrate / 1000) + ' ' + Lang('kbps') + '</span>'
                }
              } else {
                o.files_quality[i] = y
              }
              if (exist(x[i].audioGroupIds)) {
                o.files_quality_ag[i] = x[i].audioGroupIds[0]
              }
            } else if (exist(x[i].name)) {
              o.files_quality[i] = x[i].name
            } else {
              o.files_quality[i] = i
            }
            if (exist(v.default_quality) && q == -1) {
              if (v.default_quality == o.files_quality[i]) {
                q = i
              }
            }
            if (exist(o.default_quality)) {
              if (o.default_quality == o.files_quality[i]) {
                q = i
              }
            }
          }
          if (v.hlsautoquality == 1) {
            o.files_quality[x.length] = Lang("auto")
          } else {
            hls.autoLevelEnabled = 0;
            hls.autoLevelCapping = 0
          }
          if (v.hlslowquality == 1 || q > -1) {
            hls.autoLevelCapping = 0;
            if (v.hlschangequality == "next" || (!o.start && v.preload == 0)) {
              hls.nextLevel = q
            } else {
              if (v.hlschangequality == "current") {
                hls.currentLevel = q
              }
            }
            o.current_quality = q
          } else {
            if (v.hlsautoquality == 1) {
              o.current_quality = hls.levels.length - 1
            } else {
              o.current_quality = hls.firstLevel
            }
          }
          HlsUpdateAudio()
        }
        o.bitrate = existv(hls.levels[o.current_quality].bitrate, 0);
        o.controls ? o.controls.refresh() : ''
      }
    }

    function HlsUpdateAudio() {
      if (o.files_quality_ag.length > 0 && v.hlsaudio == 1) {
        HlsAudioTracks();
        HlsAudioTrack()
      }
    }

    function HlsAudioTracks() {
      if (!pip && v.hlsaudio == 1) {
        var x = hls.audioTracks;
        o.files_audiotrack = [];
        var stop;
        var set = -1;
        if (x.length > 1) {
          for (var i = 0; i < x.length; i++) {
            stop = false;
            if (exist(x[i].groupId) && o.files_quality_ag.length > 0) {
              if (x[i].groupId != o.files_quality_ag[o.current_quality]) {
                for (var j = 0; j < o.files_quality_ag.length; j++) {
                  if (o.files_quality_ag[j] == x[i].groupId) {
                    stop = true
                  }
                }
              }
            }
            if (!stop) {
              o.files_audiotrack[i] = exist(x[i].name) ? o.media.renameTracks(x[i].name, i) : i;
              if (exist(v.default_audio)) {
                if (v.default_audio == o.files_audiotrack[i]) {
                  set = i
                }
              }
            }
          }
        }
      }
      if (set > -1) {
        o.current_audiotrack = set;
        hls.audioTrack = set
      }
    }

    function HlsAudioTrack() {
      if (!pip) {
        var x = hls.audioTracks;
        var y = hls.audioTrack;
        if (y > -1) {
          if (exist(x[y].groupId)) {
            if (o.files_quality_ag.length > 0) {
              if (o.files_quality_ag[o.current_quality] != x[y].groupId) {
                for (var i = 0; i < x.length; i++) {
                  if (x[i].name == x[y].name && x[i].groupId == o.files_quality_ag[o.current_quality]) {
                    hls.audioTrack = i;
                    y = i;
                    break
                  }
                }
              }
            }
          }
          o.current_audiotrack = y;
          log("HLS AudioTrack", o.current_audiotrack);
          o.controls.AudioTrackChangedNoHand(o.current_audiotrack)
        }
      }
    };
    this.nativeAudioTrack = function(x, y) {
      nativeAudioTrack(x, y)
    };

    function nativeAudioTrack(x, y) {
      if (pjstg.audioTracks.length > 1) {
        pjstg.audioTracks[x].enabled = true;
        pjstg.audioTracks[y == 1 ? 0 : o.ncrtat].enabled = false;
        o.ncrtat = x;
        y != 1 ? pjstg.currentTime = o.media.time() : ''
      }
    }

    function Time() {
      if (is_dash) {
        return dash_created ? o.dash.time() : 0
      } else {
        return pjstg.currentTime
      }
    };

    function Duration() {
      var x = pjstg.duration;
      if (x == Infinity) {
        v.live = 1;
        x = Time() + 10;
        if (o.dur) {
          x < o.dur ? x = o.dur : ''
        }
        o.dur = x
      }
      if (is_dash && dash_created) {
        x = o.dash.duration()
      }
      if (exist(v.end)) {
        if (indOf([v.end], '-')) {
          x = x + v.end * 1
        } else {
          x = v.end
        }
      }
      return !isNaN(x) ? x : 0
    }
    this.Play = function() {
      var p = true;
      if (is_hls && !hls_started) {
        if (!hls_created) {
          CreateHLS(true)
        }
        hls.startLoad()
      }
      if (is_dash && !dash_created) {
        CreateDASH(true);
        p = false
      }
      if (is_ws) {
        if (!ws_created) {
          CreateWS()
        }
        ws.play();
        p = false
      }
      if (pjstg.style.top == "-2000px") {
        this.AfterVast()
      }
      p ? TagPlay() : ''
    };
    var playtry;

    function TagPlay() {
      if (url != "none") {
        var pp = pjstg.play();
        if (pp !== undefined) {
          pp.then(function() {}).catch(function(error) {
            log("playError", error.message);
            if (error.message.indexOf('source') == -1 && error.message.indexOf('interrupted by') == -1) {
              if (v.autoplaymute == 1) {
                log('automute');
                o.actions.Mute();
                pjstg.volume = 0;
                var pp2 = pjstg.play();
                if (pp2) {
                  pp2.then(function() {}).catch(function(e) {
                    log("playError2", e.message);
                    if (o.system.tv && (is_hls || is_dash)) {} else {
                      o.controls.Pause();
                      o.actions.ShowPoster();
                      js("autoplay_denied")
                    }
                  })
                }
              } else {
                o.controls.Pause();
                o.actions.ShowPoster()
              }
            }
          })
        }
      }
    }
    this.BeforeVast = function() {
      if (o.vastloader || o.vast) {
        if (o.ispipkit) {
          PipWebkit()
        }
        if (!o.airplayed && o.system.mobile && o.system.webkit) {
          if (!pjstg.muted) {
            pjstg.muted = true;
            unmuteplease = true
          }
          css(pjstg, {
            "position": "absolute",
            "left": -2000,
            "top": -2000
          });
          pause_before_vast = Time();
          if (!is_ws) {
            pjstg.play()
          }
          if (pause_before_vast == 0 && o.seekto > 0) {
            _seekaftervast = o.seekto
          }
        }
      }
    };
    this.AfterVast = function() {
      if (!o.airplayed && (o.system.mobile || o.system.webkit)) {
        css(pjstg, {
          "position": "static",
          "left": 0,
          "top": 0
        });
        if (exist(v.ratio)) {
          Resize()
        }
        if (unmuteplease) {
          !o.muted ? pjstg.muted = false : '';
          unmuteplease = false
        }
        if (_seekaftervast > 0) {
          o.seekto = _seekaftervast;
          _seekaftervast = 0
        }
        pause_before_vast = -1
      }
    };
    this.Pause = function() {
      log('paused');
      pause()
    };

    function pause() {
      if (is_ws) {
        ws.pause()
      } else {
        pjstg.pause()
      }
    };
    this.Toggle = function() {
      !pjstg.paused ? Pause() : TagPlay()
    };
    this.Seek = function(x) {
      if (is_dash && dash_created) {
        o.dash.seek(x)
      } else {
        if (is_hls) {
          if (v.hlsforce == 1 && x > 0 && isAuto()) {
            hls_force = hls.currentLevel;
            hls.nextAutoLevel = 0
          }
        }
        pjstg.currentTime = x
      }
    };
    this.Mute = function() {
      pjstg.muted = true
    };
    this.Unmute = function() {
      pjstg.muted = false;
      if (o.file_type == "hls" && o.system.ios && v.vast == 1) {
        if (!exist(o.um1)) {
          nops = true;
          pjstg.pause();
          setTimeout(function() {
            pjstg.play();
            nops = false
          }, 10);
          o.um1 = true
        }
      }
    };
    this.Volume = function(x) {
      pjstg.volume = x
    };
    this.Gain = function() {
      if (o.gainedsource != pjstg) {
        var source;
        var ctx;
        if (o.audiosrc[pjstg]) {
          source = o.audiosrc[pjstg];
          ctx = o.audioctx[pjstg]
        } else {
          window.AudioContext = window.AudioContext || window.webkitAudioContext;
          if (exist(window.AudioContext)) {
            try {
              ctx = new AudioContext();
              source = ctx.createMediaElementSource(pjstg);
              o.audiosrc[pjstg] = source;
              o.audioctx[pjstg] = ctx
            } catch (e) {
              log(e)
            }
          }
        }
        if (ctx) {
          var gain = ctx.createGain();
          gain.gain.value = v.volumegain;
          source.connect(gain);
          gain.connect(ctx.destination);
          o.gained = true;
          o.gainedsource = pjstg
        }
      }
    };
    this.isPlaying = function() {
      return !pjstg.paused
    };
    this.isLive = function() {
      return v.live == 1 || is_ws ? true : o.live
    };
    this.tag = function() {
      return pjstg
    };
    this.nativeControls = function() {
      attr(pjstg, {
        'controls': '1'
      });
      return true
    };
    this.preload = function() {
      attr(pjstg, {
        'preload': 'metadata'
      });
      if (is_hls && !hls_created) {
        CreateHLS(false)
      }
      if (is_dash && !dash_created) {
        CreateDASH(false)
      }
    };
    this.status = function() {
      var state = "playing";
      if (pjstg.paused) {
        state = "paused"
      }
      if (pjstg.ended) {
        state = "ended"
      }
      return state
    };
    this.ChangePip = function(x, y) {
      pip = x;
      y.appendChild(pjstg);
      container = y;
      if (x) {
        if (v.pip.nomute != 1) {
          pjstg.muted = true
        } else {
          if (!o.muted) {
            pjstg.muted = false
          }
        }
        PipSize();
        if (o.files_quality.length > 0) {
          if (is_hls) {
            pip_quality = o.current_quality;
            hls.autoLevelCapping = 0;
            hls.currentLevel = 0
          }
        }
      } else {
        if (!o.muted && v.pip.nomute != 1) {
          pjstg.muted = false
        }
        pjstg.volume = v.volume;
        PlayerSize();
        if (o.files_quality.length > 0) {
          if (is_hls) {
            hls.autoLevelCapping = -1;
            if (pip_quality > -1) {
              pip_quality < hls.levels.length ? hls.nextLevel = pip_quality : ''
            }
          }
        }
      }
    };
    this.time = function() {
      return Time()
    };
    this.duration = function() {
      return Duration()
    };
    this.loaded = function() {
      var x = 0;
      if (pjstg.buffered) {
        if (pjstg.buffered.length > 0) {
          var y = Time();
          for (var i = 0; i < pjstg.buffered.length; i++) {
            if ((y >= pjstg.buffered.start(i) || y >= pjstg.buffered.start(i) - 100) && y <= pjstg.buffered.end(i)) {
              x = pjstg.buffered.end(i)
            }
          }
          x == 0 ? x = pjstg.buffered.end(pjstg.buffered.length - 1) : ''
        }
      }
      if (exist(v.end)) {
        var ed = v.end;
        if (indOf([ed], '-')) {
          ed = Duration()
        }
        x > ed ? x = ed : ''
      }
      return x
    };
    this.auto = function() {
      return isAuto()
    };

    function isAuto() {
      var x = false;
      if (is_hls) {
        if (hls_created) {
          x = hls.autoLevelEnabled
        }
      } else if (is_dash) {
        if (dash_created) {
          x = o.dash.auto()
        }
      }
      return x
    }
    this.size = function() {
      return {
        "width": pjstg.videoWidth,
        "height": pjstg.videoHeight
      }
    };
    this.src = function(x) {
      if (x) {
        x = x.replace(/\(random\)/g, Math.random());
        url = x;
        o.media_error != 2 ? o.media_error = false : '';
        if (is_dash) {
          if (dash_created) {
            o.dash.source(x)
          }
        } else if (is_hls) {
          is_hls && hls ? hls.destroy() : '';
          CreateHLS(true);
          CheckPip()
        } else {
          attr(pjstg, {
            'src': x,
            'autoplay': 0
          });
          tagSrc();
          pause()
        }
      }
    };

    function tagSrc() {
      if (o.system.safari) {
        var y = pjstg.textTracks;
        if (y) {
          for (var i = 0; i < y.length; i++) {
            y[i].mode = "disabled"
          }
        }
        y = pjstg.audioTracks;
        if (y) {
          for (i = 0; i < y.length; i++) {
            y[i].enabled = (i == 0 ? 1 : 0)
          }
        }
        if (window.WebKitPlaybackTargetAvailabilityEvent) {
          pjstg.addEventListener('webkitplaybacktargetavailabilitychanged', function(event) {
            o.airplay = event.availability == "available";
            !pip ? o.actions.AirplayChanged() : ''
          });
          pjstg.addEventListener('webkitcurrentplaybacktargetiswirelesschanged', function(event) {})
        }
      }
      CheckPip();
      if (v.v360 == 1) {
        typeof PjsCheck360 !== "undefined" ? PjsCheck360(url, pjstg, container) : ''
      }
    }
    this.airplay = function() {
      pjstg.webkitShowPlaybackTargetPicker()
    };
    this.pipwebkit = function() {
      PipWebkit()
    };

    function CheckPip() {
      if (o.system.webkit) {
        if (exist(pjstg.webkitSupportsPresentationMode) && !o.system.iphone) {
          o.pipwebkit = true
        }
        if (document.pictureInPictureEnabled && !pjstg.disablePictureInPicture) {
          o.pipwebkit = true
        }
      }
    }

    function PipWebkit() {
      if (o.system.safari) {
        if (pjstg.webkitPresentationMode === "picture-in-picture") {
          pjstg.webkitSetPresentationMode("inline");
          o.ispipkit = false
        } else {
          pjstg.webkitSetPresentationMode("picture-in-picture");
          o.ispipkit = true
        }
      } else {
        if (!document.pictureInPictureElement) {
          eval('pjstg.requestPictureInPicture().then(p => {o.ispipkit = true;}).catch(error => {o.ispipkit = false;});')
        } else {
          eval('document.exitPictureInPicture().then(ok =>{o.ispipkit = false;}).catch(error => {});')
        }
      }
    };

    function onPipEnter() {
      o.ispipkit = true
    };

    function onPipLeave() {
      o.ispipkit = false
    };
    this.setDashQuality = function(x) {
      if (dash_created) {
        o.dash.setQuality(x)
      }
    };
    this.setDashAudioTrack = function(x) {
      if (dash_created) {
        if (pjstg.buffered.length > 0) {
          o.dash.setAudio(x)
        }
      }
    };
    this.setWsQuality = function(x) {
      if (o.ws) {
        o.ws.setTracks(ws, x, -1)
      }
    };
    this.setWsAudioTrack = function(x) {
      if (o.ws) {
        o.ws.setTracks(ws, -1, x)
      }
    };
    this.setHlsQuality = function(x) {
      if (hls_created) {
        var y = parseInt(x);
        if (x == hls.levels.length) {
          y = -1;
          hls.autoLevelCapping = -1
        }
        if (v.hlschangequality == "current") {
          setTimeout(onWaiting, 500);
          hls.currentLevel = y
        }
        if (v.hlschangequality == "next") {
          log("HLS next level " + y);
          hls.nextLevel = y
        }
        if (y == -1) {
          o.current_quality = hls.loadLevel
        }
        HlsUpdateAudio()
      }
    };
    this.getHLS = function() {
      return hls
    };
    this.getDASH = function() {
      return dash_created ? o.dash.getDash() : false
    };
    this.HlsLevelsLength = function() {
      return HlsLevelsLength()
    };

    function HlsLevelsLength() {
      var x = 0;
      if (hls_created) {
        if (hls.levels) {
          x = hls.levels.length
        }
      }
      return x
    }
    this.DashLevelsLength = function() {
      return DashLevelsLength()
    };
    this.ObjectFit = function() {
      ObjectFit()
    };

    function ObjectFit() {
      if (pjstg) {
        if (v.covervideo == 1 || v.fill == 1) {
          if (v.fillvideo == 1 || v.fill == 1) {
            css(pjstg, {
              'object-fit': 'fill'
            })
          } else {
            css(pjstg, {
              'object-fit': 'cover'
            })
          }
        } else {
          css(pjstg, {
            'object-fit': 'contain'
          })
        }
      }
    }
    this.resize = function() {
      Resize()
    };

    function Resize() {
      if (v.ratio) {
        apiProcessor('scale', String(v.ratio).replace('/', ':'))
      }
    }

    function DashLevelsLength() {
      var x = 0;
      if (dash_created) {
        x = o.dash.levels()
      }
      return x
    }
    this.setHlsAudioTrack = function(x) {
      if (hls_created) {
        hls.audioTrack = parseInt(x)
      }
    };
    this.hlsDashSub = function(x, y) {
      if (y == "hls" && hls_created && _hlssubtracks) {
        _hlssubtracks.HlsSubTrack(x)
      }
      if (y == "hls2" && hls_created) {
        if (hls_subs[x] && o.sbt) {
          for (var i = 0; i < hls_subs[x].length; i++) {
            o.sbt.hlsSub(hls_subs[x][i])
          }
        }
        setTimeout(function() {
          hls.subtitleTrack = x
        }, 500)
      }
      if (y == "dash" && dash_created) {
        o.dash.subtrack(x)
      }
    };
    this.setSpeed = function(x) {
      if (x) {
        pjstg.playbackRate = x
      }
    };
    this.removeTracks = function() {
      var x = pjstg.childNodes;
      var y = [];
      for (var i = 0; i < x.length; i++) {
        if (x[i].tagName.toLowerCase() == 'track') {
          x[i].removeEventListener("load", iOSTrackLoaded);
          y.push(x[i])
        }
      }
      for (var i = 0; i < y.length; i++) {
        pjstg.removeChild(y[i])
      }
      o.nativesub = false
    };
    this.addTrack = function(x, y, z) {
      if (x != '') {
        if (x.indexOf(' or ') > 0) {
          var xx = x.split(' or ');
          x = xx[0]
        }
        var track = document.createElement('track');
        track.setAttribute('src', x);
        track.setAttribute('label', y);
        track.setAttribute('kind', 'subtitles');
        track.setAttribute('mode', 'showing');
        if (z) {
          track.setAttribute('default', '')
        }
        pjstg.appendChild(track);
        track.addEventListener("load", iOSTrackLoaded)
      }
    };

    function iOSTrackLoaded(e) {
      if (e.target.label && o.sbt) {
        for (var i = 0; i < o.files_subtitle.length; i++) {
          if (o.files_subtitle[i] == e.target.label) {
            o.sbt.SetSubtitle(i)
          }
        }
      }
    };
    this.errorMessage = function() {
      return error ? error : ''
    };
    this.Remove = function() {
      clearInterval(o.dashInterval);
      is_hls && hls ? hls.destroy() : '';
      is_dash && dash_created ? o.dash.reset() : '';
      is_ws && ws ? ws.stop() : '';
      pjstg.removeEventListener('error', onTagError);
      pjstg.removeEventListener('ended', onEnded);
      pjstg.removeEventListener('play', onPlay);
      pjstg.removeEventListener('pause', onPause);
      pjstg.removeEventListener('timeupdate', onTimeupdate);
      pjstg.removeEventListener('seeking', onSeeking);
      pjstg.removeEventListener('seeked', onSeeked);
      pjstg.removeEventListener('loadedmetadata', onMeta);
      pjstg.removeEventListener('volumechange', onVolume);
      pjstg.removeEventListener('waiting', onWaiting);
      pjstg.removeEventListener('durationchange', onDuration);
      pjstg.removeEventListener('enterpictureinpicture', onPipEnter);
      pjstg.removeEventListener('leavepictureinpicture', onPipLeave);
      pjstg.src = '';
      if (container.tagName == "IFRAME") {
        container.contentDocument.body.removeChild(pjstg)
      } else {
        container.removeChild(pjstg)
      }
      pjstg = null
    }
  };
  var Controls = function() {
    var b = [];
    var butNames = [];
    var butPosition = [];
    var waiting = false;
    var wait_to;
    var toolbarHidden = false;
    var settings;
    var playlist;
    if (o.settings2) {
      o.settings2.hide();
      o.settings2 = null
    }
    var _lastactbut;
    o.files_speed = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2];
    if (v.settings.customspeeds == 1 && exist(v.settings.speeds)) {
      v.settings.speeds = v.settings.speeds.replace(/\n/ig, '');
      o.files_speed = v.settings.speeds.split(",")
    }
    o.speed1 = indOf(o.files_speed, 1, true);
    o.current_speed == 3 ? o.current_speed = o.speed1 : '';
    for (var i in o.menuproc) {
      if (o.menuproc.hasOwnProperty(i)) {
        !exist(v.settings[i]) ? v.settings[i] = 5 : '';
        o['files_' + i] = ['+ ' + v.settings[i] + '%', '&ndash; ' + v.settings[i] + '%', (o.menuproc[i] * 100 + '%')]
      }
    }
    if (v.toolbar.hidejustfull == 1 && o.system.ios && v.nativefullios == 1) {
      v.toolbar.hide = 0
    }
    var resizeonwidth = false;
    var stretch_width = 0;
    var stretch_width_last = 0;
    var stretch_with_volume = false;
    var firstly = true;
    var uijs;
    var bg = new ControlsBg();
    var settings;
    var order = [];
    var _rights = false;
    var _move_rights = false;
    var _max_order = 0;
    var _rb = [];
    if (v.control_line.position == "controls-right") {
      v.control_line.position = "controls"
    }
    for (var y in v) {
      if (v.hasOwnProperty(y)) {
        if (y.indexOf("control_") == 0 && v[y]) {
          !exist(v[y].order0) ? v[y].order0 = v[y].order : v[y].order = v[y].order0;
          if (order[v[y].order]) {
            v[y].order += v[y].order
          }
          order[v[y].order] = y;
          if (v.control_line.position != "controls") {
            if (v[y].position == "controls-right") {
              _rb.push([y, v[y].order]);
              _rights = true
            } else {
              if (v[y].position == "controls" || v[y].position == undefined) {
                _rights ? _move_rights = true : ''
              }
            }
          }
          _max_order < v[y].order ? _max_order = v[y].order : ''
        }
      }
    }
    if (_move_rights) {
      _rb.sort(function(a, b) {
        return a[1] - b[1]
      });
      for (var i = 0; i < _rb.length; i++) {
        order[v[_rb[i][0]].order] = null;
        v[_rb[i][0]].order = _max_order + 1;
        _max_order++;
        order[v[_rb[i][0]].order] = _rb[i][0]
      }
    }
    if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
      o.toolbar = createElement("div");
      o.frame.appendChild(o.toolbar);
      css(o.toolbar, {
        'position': 'absolute',
        'left': 0,
        'top': 0,
        'width': '100%',
        'height': '100%',
        'transition': 'top 0.3s ease-out',
        'pointer-events': 'none'
      })
    }
    var bg2 = createElement("div");
    if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
      o.toolbar.appendChild(bg2)
    } else {
      o.frame.appendChild(bg2)
    }
    css(bg2, {
      'position': 'absolute',
      'left': 0,
      'bottom': 0,
      'width': '100%',
      'height': v.toolbar.h
    });
    bg2.onclick = function() {
      !o.system.mobile ? o.actions.ControlsBgClick() : ''
    };
    if (v.nocontrols == 1) {
      hide2(bg.c());
      hide2(bg2)
    }
    for (var i = 1; i < order.length; i++) {
      if (order[i]) {
        var y = order[i];
        if (y) {
          var action = v[y].action;
          var hdn = v[y].hide;
          if (o.system.mobile) {
            if (action == "volume" && v[y].customline == "speed") {} else {
              if (action == "volume" && v.showvolmobile == 1 && o.system.mobile) {
                v[y].hideoutmute = 0
              } else {
                if (action == "volume" || (action == "fullscreen" && v.nativemobile)) {
                  v[y].on = 0
                }
              }
            }
          }
          if (v[y].hide == 1) {
            if (v[y].hideonvar == 1 && exist(v[y].hidevar)) {
              options[v[y].hidevar] ? v[y].on = 0 : ''
            }
            if (v[y].hidewovar == 1 && exist(v[y].hidevar2)) {
              !options[v[y].hidevar2] ? v[y].on = 0 : ''
            }
          }
          if (v.nocontrols == 1) {
            v[y].on = 0
          }
          if (v[y].on == 1) {
            if (action == "line" || action == "volume") {
              b[y] = new ControlLine(y, action);
              b[y].Resize(b[y].s("w"))
            } else {
              b[y] = new Control(y)
            }
            butNames.push(y);
            if (b[y].g("action") == "title") {
              if (b[y].s("text") == '') {
                if (b[y].s("var") != '') {
                  if (!exist(v[b[y].s("var")])) {
                    b[y].set("display", false)
                  }
                } else {
                  b[y].set("display", false)
                }
              }
            }
            if (b[y].g("action") == "custom") {
              var lu = b[y].s("linkurl");
              if (lu) {
                if (lu.indexOf("api:") == 0 && lu.indexOf(",0/1") > 0) {
                  var z = lu.split(",");
                  apiProcessor(z[0].substr(4)) == 0 ? b[y].CustomSwitch(0) : ''
                }
                if (indOf([lu], "share")) {
                  o.shareme = true
                }
              }
            }
            b[y].set("scale", b[y].s("scale"))
          }
        }
      }
    }
    if (exist(v.settings)) {
      if (typeof(Settings) == 'function') {
        settings = new Settings("settings");
        v.settings.always == 1 ? settings.show() : settings.hide()
      } else {
        o.noset = true
      }
    }
    if (exist(v.playlist)) {
      if (typeof(Settings) == 'function') {
        playlist = new Settings("playlist");
        if (exist(o.playlist)) {
          playlist.updatePlaylist(o.playlist);
          if (v.playlist.openplaylistbefore == 0 || !exist(v.playlist.openplaylistbefore)) {
            v.playlist.always == 0 ? playlist.hide() : ''
          } else {
            playlist.show()
          }
          if (v.playlist.always2 == 1) {
            playlist.show()
          }
        } else {
          playlist.hide(1)
        }
        PlaylistControls()
      }
    }
    CreateShare();
    CustomTextButs();
    Resize(true);
    ShowOrHide();
    SpeedChanged();
    firstly = false;

    function ControlX(but) {
      var x = 0;
      var to_right = false;
      if (but) {
        if (but.g("action") == 'line') {
          x = butPosition.left + but.s("marginleft") + but.g("width") / 2;
          if (butPosition.rightbs != null) {} else {
            butPosition.rightbs = []
          }
        } else {
          if (butPosition.rightbs != null) {
            var but_space = but.g("width") + but.s("marginright") + but.s("marginleft");
            if (HideProof(but)) {
              but_space = 0
            }
            if (but.s("hidden") == 1 && !but.g("show")) {
              but_space = 0
            }
            if (but.s("vertical") > 0) {
              but_space = 0
            }
            x = bg.g("w") - v.toolbar.leftandrightpadding * 1 - but_space + but.g("width") / 2 + but.s("marginleft");
            var i = 0;
            butPosition.right -= but_space;
            for (i = 0; i < butPosition.rightbs.length; i++) {
              var but2 = b[butPosition.rightbs[i]];
              if (but2.s("vertical") > 0) {
                css(but2.c(), {
                  "left": (but2.g("x0") - but_space)
                })
              } else {
                css(but2.c(), {
                  "left": (but2.g("x") - but_space)
                })
              }
              but2.set("x0", but2.g("x"))
            }
            butPosition.rightbs.push(but.g("key"));
            but.set('rightside', 1)
          } else {
            if (but.s("hidden") == 1 && !but.g("show")) {
              if (but.g("action") == "volume") {
                if (but.s("hide") == 1 && but.s("hideoutmute") == 1 && stretch_with_volume) {
                  stretch_width += but.g("width") + but.s("marginleft") + but.s("marginright");
                  stretch_with_volume = false
                }
              }
            } else {
              if (but.s("vertical") > 0) {
                x = butPosition.left + but.s("marginleft") + but.s("marginright")
              } else {
                var stop = false;
                if (but.g("action") == "volume") {
                  if (but.s("hide") == 1 && but.s("hideoutmute") == 1) {
                    if (!o.hidden_volume_over_process && !o.hidden_volume_over) {
                      stop = true;
                      stretch_with_volume = false
                    } else {
                      if (!stretch_with_volume) {
                        stretch_width -= but.g("width") + but.s("marginleft") + but.s("marginright");
                        stretch_with_volume = true
                      }
                    }
                  }
                }
                if (HideProof(but)) {
                  stop = true
                }
                if (!stop) {
                  butPosition.left += but.g("width") / 2 + but.s("marginleft");
                  x = butPosition.left;
                  butPosition.left += but.g("width") / 2 + but.s("marginright")
                } else {
                  x = butPosition.left
                }
              }
            }
          }
        }
      }
      return x
    };
    this.NewPl = function() {
      CreateShare()
    };
    this.CrShr = function() {
      CreateShare()
    };

    function CreateShare() {
      if (o.shareme) {
        typeof PluginShare == 'function' ? o.share = new PluginShare() : ''
      }
    }

    function ControlCoordinate(but) {
      var width = o.fullscreen && v.toolbar.stretchonfullscreen == 0 ? o.normal_w : o.screen_w;
      var height = o.screen_h;
      var but_x = 0;
      if (but != bg) {
        but_x = width / 2 + but.s("marginleft") - but.s("marginright")
      }
      var but_y = height / 2;
      var but_w = but.g("width");
      var but_h = but.g("height");
      var p = but.s("position");
      if (p.indexOf("center") > -1) {
        but_x = o.screen_w / 2 + but.s("marginleft") - but.s("marginright")
      }
      if (p.indexOf("top") == 0) {
        but_y = but_h / 2 + (but.s("marginproctop") * o.screen_h / 100)
      }
      if (p.indexOf("bottom") == 0) {
        but_y = o.screen_h - (but == bg ? but_h : but_h / 2) - (but.s("marginprocbottom") * o.screen_h / 100)
      }
      if (p.indexOf("right") > -1) {
        but_x = o.screen_w - but_w / 2 + but.s("marginleft") - but.s("marginright") - (but.s("marginprocright") * o.screen_w / 100)
      }
      if (p.indexOf("left") > -1) {
        but_x = but_w / 2 + but.s("marginleft") - but.s("marginright") + (but.s("marginprocleft") * o.screen_w / 100)
      }
      if (p == "timeline") {
        but_x = -o.timeline_w / 2 + (but.s("marginprocleft") * o.timeline_w / 100) + but.s("marginleft") - but.s("marginright");
        but_y = -o.timeline_h / 2 - (but.s("marginprocbottom") * o.timeline_h / 100) + (but.s("marginproctop") * o.timeline_h / 100)
      }
      if (p.indexOf("controls") > -1) {
        var cx = ControlX(but);
        but_x = (bg ? (bg.c() ? int(bg.c().offsetLeft) : 0) : 0) + cx;
        if (p == "controls-right") {
          but_x += stretch_width
        }
        if (v.toolbar.position == "top") {
          but_y = v.toolbar.h / 2 - (v.toolbar_margintop < 0 ? v.toolbar_margintop : 0)
        } else {
          but_y = height - v.toolbar.h / 2
        }
      }
      return {
        x: but_x,
        y: but_y + but.s("margintop") - but.s("marginbottom")
      }
    }

    function Resize(all) {
      var w = o.fullscreen && v.toolbar.stretchonfullscreen == 0 ? o.normal_w : o.screen_w;
      var h = o.screen_h;
      if (v.toolbar.lrpp == 1) {
        if (!v.toolbar.lrppp) {
          v.toolbar.lrppp = exist2(v.toolbar.lrpps) && o.small ? v.toolbar.lrpps : v.toolbar.leftandrightpadding
        }
        v.toolbar.leftandrightpadding = o.screen_w * v.toolbar.lrppp / 100
      }
      css(bg.c(), {
        'top': (v.toolbar.position == "top" ? 0 : o.screen_h - v.toolbar.h) - v.toolbar_margintop
      });
      bg.set("y0", (o.screen_h - v.toolbar.h - v.toolbar_margintop));
      if (v.toolbar.stretchonfullscreen == 0 && bg) {
        css(bg.c(), {
          'width': w,
          'left': 0,
          'margin-left': 0
        });
        bg.set("w", w);
        if (o.fullscreen) {
          css(bg.c(), {
            'left': '50%',
            'margin-left': -w / 2
          })
        }
      }
      butPosition = {
        "left": v.toolbar.leftandrightpadding * 1,
        "right": (bg.g("w") - v.toolbar.leftandrightpadding * 1)
      };
      var bg_hide = false;
      if (!bg.g("show")) {
        bg.set("display", true);
        bg_hide = true
      }
      var key;
      for (var i = 0; i < butNames.length; i++) {
        key = butNames[i];
        if (b[key]) {
          var cc = ControlCoordinate(b[key]);
          if (cc) {
            if (b[key].s("animation") == "position") {
              if (exist(o.motions[key])) {
                if (b[key].g("x0") == cc.x && b[key].g("y0") == cc.y) {
                  continue
                } else {
                  o.motions[key].XY(b[key].g("x0"), cc.x, b[key].g("y0"), cc.y)
                }
              }
            }
            b[key].set("x0", cc.x);
            b[key].set("y0", cc.y);
            if (b[key].s("hidden") == 1 && !b[key].g("show") && !all) {
              HidePositionControl(b[key])
            } else {
              css(b[key].c(), {
                "position": "absolute",
                "left": b[key].g("x0"),
                "top": b[key].g("y0")
              })
            }
          }
        }
      }
      if (bg_hide) {
        bg.set("display", false)
      }
      stretch_width = 0;
      for (key in b) {
        if (b.hasOwnProperty(key)) {
          if (b[key].s("position") == "controls-right" && b[key].g("action") != "line" && stretch_width > -1) {
            stretch_width = butPosition.right - butPosition.left
          }
          if (b[key].g("action") == "line" && bg) {
            var line_width;
            if (b[key].s("customwidth") == 1) {
              if (b[key].s("wproc") == 1) {
                line_width = (o.screen_w * b[key].s("w") / 100) - b[key].s("marginleft") - b[key].s("marginright")
              } else {
                line_width = b[key].s("w")
              }
            } else {
              if (b[key].s("position").indexOf("controls") > -1) {
                line_width = butPosition.right - butPosition.left - b[key].s("marginleft") - b[key].s("marginright");
                css(b[key].c(), {
                  "left": (int(bg.c().offsetLeft) + butPosition.left + b[key].s("marginleft") + line_width / 2)
                });
                stretch_width = -1
              } else {
                line_width = bg.g("w") - b[key].s("marginleft") - b[key].s("marginright");
                css(b[key].c(), {
                  "left": (int(bg.c().offsetLeft) + b[key].s("marginleft") + line_width / 2)
                })
              }
            }
            b[key].set("x0", b[key].g("x"));
            b[key].Resize(line_width)
          }
        }
      }
      if (settings) {
        ResizeSettings(settings)
      }
      if (playlist) {
        ResizeSettings(playlist)
      }
      if (resizeonwidth || o.fullscreen || stretch_width_last != stretch_width) {
        ShowOrHide()
      }
    }

    function HidePositionControl(b) {
      var left = 0;
      var top = 0;
      if (b.s("position").indexOf("right") > -1 && b.s("position").indexOf("controls") == -1) {
        left = o.screen_w + b.g("width") + 10
      }
      if (b.s("position").indexOf("left") > -1) {
        left = -b.g("width") - 10
      }
      if (b.s("position").indexOf("top") > -1) {
        top = -b.g("height") * 2
      }
      if (b.s("position").indexOf("bottom") > -1 || b.s("position").indexOf("controls") > -1) {
        top = o.screen_h + b.g("height") + b.g("width") + 10
      }
      if (left > 0) {
        css(b.c(), {
          "left": left
        })
      }
      if (top > 0) {
        css(b.c(), {
          "top": top
        })
      }
    }

    function ResizeSettings(x) {
      var top = -2000;
      x.resizePlaylist();
      var y = o.screen_h - v.toolbar.h * (x.s("position").indexOf("top") > -1 ? 1 : 2);
      if (x == playlist && v.change2playlist == 1) {
        y = o.screen_h
      }
      var ymax = y - (o.fullscreen && !o.system.mobile ? (100 + x.s("hmaxk") * 1) : x.s("hmaxk")) - (x == playlist && x.s("hmaxk") * 1 == 0 ? x.s("margintop") : 0);
      ymax < 100 ? ymax = 100 : '';
      css(x.c(), {
        'max-height': ymax
      });
      x.co() ? css(x.co(), {
        'max-height': ymax
      }) : '';
      if (x.g("show")) {
        top = o.screen_h / 2 - x.g("height") / 2 + x.s("margintop") - x.s("marginbottom");
        if (x.s("position").indexOf("top") > -1) {
          top = x.s("margintop") - x.s("marginbottom")
        }
        if (x.s("position").indexOf("bottom") > -1) {
          top = o.screen_h - (v.toolbar.position != 'top' ? v.toolbar.h : 0) - x.g("height") + x.s("margintop") - x.s("marginbottom")
        }
        top < 0 ? top = 0 : ''
      }
      if (x.g("key") == "settings" && o.sttx) {
        var sttr = o.screen_w - x.g("width") - x.s("marginright");
        if (o.sttx > sttr) {
          css(x.c(), {
            "position": "absolute",
            "right": x.s("marginright"),
            "left": "auto",
            "top": top
          })
        } else {
          css(x.c(), {
            "position": "absolute",
            "left": o.sttx,
            "right": "auto",
            "top": (o.stty < top ? o.stty : top)
          })
        }
      } else {
        if (x.s("position").indexOf("right") > -1) {
          css(x.c(), {
            "position": "absolute",
            "right": x.s("marginright") - x.s("scrollwidth"),
            "left": "auto",
            "top": top
          })
        } else if (x.s("position").indexOf("left") > -1) {
          css(x.c(), {
            "position": "absolute",
            "left": x.s("marginleft"),
            "right": "auto",
            "top": top
          })
        } else {
          if (x.g("key") == "playlist" && x.s("floatleft") == 1) {
            css(x.c(), {
              "position": "absolute",
              "left": o.screen_w / 2 - x.g("width") / 2 + x.s("marginleft") / 2 - x.s("marginright") / 2,
              "top": top
            })
          } else {
            var l = o.screen_w / 2 - x.g("width") / 2 + x.s("marginleft") - x.s("marginright");
            css(x.c(), {
              "position": "absolute",
              "left": (l > 0 ? l : 0),
              "top": top
            })
          }
        }
      }
      x.Arrows()
    };
    this.ControlClick = function(key) {
      var but = b[key];
      var a = but.g("action");
      if (a) {
        var d = new Date();
        o.clicktime = d.getTime();
        if (a && a != "") {
          Action(but);
          a == "pause" ? o.actpause = 1 : '';
          a == "play" ? o.actpause = 0 : ''
        }
      }
      JsClk()
    };
    this.toggleControl = function(z, x, y) {
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          if (b[key].s(z) == x) {
            b[key].set(y ? "show2" : "hide2")
          }
        }
      }
    };
    this.butByS = function(x, s) {
      var y = FindBut(s, x);
      return y
    };

    function Action(but, type) {
      o.acted = true;
      _lastactbut = but;
      var a = but.g("action");
      if (a == "play") {
        o.actions.Play();
        if (o.muted && v.unmuteonplay == 1) {
          o.actions.Unmute();
          v.unmuteonplay = 0
        }
        if (v.hotkey.on == 1 && v.hotkey.icons == 1 && v.hotkey.playiconbut == 1) {
          PluginHotIcon('play', 1)
        }
        js("userplay")
      } else {
        if (a == "pause") {
          o.rldplay = 0;
          o.actions.Pause();
          if (v.hotkey.on == 1 && v.hotkey.icons == 1 && v.hotkey.playiconbut == 1) {
            PluginHotIcon('play', 0)
          }
          js("userpause")
        }
        if (a == "stop") {
          o.actions.StopMedia()
        }
      }
      if (a == "back") {
        o.actions.Seek(0, false)
      }
      if (a == "fullscreen") {
        !o.casting ? o.actions.Fullscreen() : ''
      } else {
        if (a == "normalscreen") {
          o.actions.Normalscreen()
        }
      }
      if (a == "line") {
        var ld = o.media.duration();
        var lt = but.g("click") * ld;
        if (v.delete > 0) {
          ld -= v.delete * 1;
          lt = but.g("click") * ld + v.delete * 1
        }
        if (v.seekwindow > 0) {
          if (v.seekwindow / ld <= 1 - but.g("click")) {
            return
          }
        }
        js(a, lt);
        o.actions.Seek(lt, true);
        if (o.continue) {
          o.continue.write(lt, ld);
          o.seekto > 0 ? o.seekto = undefined : ''
        }
      }
      if (a == "volume") {
        var x = but.g("click");
        x < 0.02 ? x = 0 : '';
        x > 1 ? x = 1 : '';
        if (but.s("customline") == "speed") {
          x = parseFloat(x * o.files_speed.slice(-1)[0]).toFixed(1);
          o.actions.SetSpeed(x, 1)
        } else {
          if (o.storage && v.volumestore == 1) {
            localStorage.setItem("pljsvolume", x);
            if (but.g("click") > 0 || o.system.iphone || v.mutestore == 0) {
              localStorage.removeItem("pljsmute")
            } else {
              localStorage.setItem("pljsmute", 1)
            }
          }
          o.actions.Volume(x)
        }
      }
      if (a == "mute") {
        if (o.storage && !o.system.iphone && v.mutestore == 1) {
          localStorage.setItem("pljsmute", 1)
        }
        o.actions.Mute();
        if (v.hotkey.icons == 1 && v.hotkey.muteiconbut == 1) {
          PluginHotIcon('mute', 0)
        }
      } else {
        if (a == "unmute") {
          if (o.storage) {
            localStorage.removeItem("pljsmute")
          }
          o.actions.Unmute();
          if (v.hotkey.icons == 1 && v.hotkey.muteiconbut == 1) {
            PluginHotIcon('mute', 1)
          }
        }
      }
      if (a.indexOf("time") == 0) {
        but.isOn() ? but.Off() : but.On()
      }
      if (a == "rotate") {
        o.media.Rotate()
      }
      if (a == "scale+") {
        o.media.Scale(0.1)
      }
      if (a == "scale-") {
        o.media.Scale(-0.1)
      }
      if (a == "scale") {
        o.media.Scale(0)
      }
      if (a == "live") {
        apiProcessor("restart");
        but.set("iconopacity", 1);
        but.set("saturate", 1)
      }
      if (a == "share") {
        js("share");
        ShowShare()
      }
      if (a == "settings") {
        o.sttx = undefined;
        if (settings) {
          if (!settings.g("show")) {
            settings.show()
          } else {
            settings.hide()
          }
        }
      }
      if (a == "playlist") {
        if (o.overopentimeout == a) {
          return
        }
        o.controls.PlaylistShow()
      }
      if (a == "next") {
        o.controls.PlaylistNext()
      }
      if (a == "prev") {
        o.controls.PlaylistPrev()
      }
      if (a == "custom") {
        if (but.s("link") == 1 && but.s("linkurl") != "") {
          var x = trim(but.s("linkurl"));
          if (o.overopentimeout == a + x) {
            return
          }
          if (x.indexOf('{time}') > -1) {
            x = x.replace('{time}', (exist(o.continue) ? o.continue.flag().t : o.media.time()))
          }
          if (x.indexOf('{file}') > -1) {
            x = x.replace('{file}', o.media.currentFile())
          }
          if (x.indexOf('{title}') > -1) {
            x = x.replace('{title}', v.title.replace(/,/ig, " "))
          }
          if (x == "airplay") {
            o.media.Airplay()
          }
          if (x.indexOf('skip') == 0) {
            if (but.s("skip") > 0) {
              o.actions.Seek(o.skpbt ? o.skpbt.tskp() : but.s("skip"))
            }
          }
          if (x.indexOf('cancelskip') == 0) {
            if (o.skpbt) {
              o.skpbt.cancel()
            }
          }
          if (x == "seektome") {
            o.actions.Seek(but.s("marginprocleft") * o.media.duration() / 100);
            !o.play ? o.actions.Play() : ''
          }
          but.s("linkpause") == 1 ? o.actions.Pause() : '';
          var y = x.split(",");
          if (x.indexOf("api:") == 0) {
            var z = x.substr(4).split(";");
            for (var i = 0; i < z.length; i++) {
              y = z[i].split(",");
              if (y.length > 1) {
                if (y[0] == 'seek') {
                  if (v.hotkey.icons == 1 && v.hotkey.seekiconbut == 1) {
                    PluginHotIcon('seek', y[1] > 0 ? 1 : 0)
                  }
                }
                apiProcessor(y[0], y[1], but);
                y[1] == '0/1' || y[1] == '1/0' ? reRightMenu() : ''
              } else {
                if (y[0] == "screenshot") {
                  var ss = apiProcessor(y[0]);
                  if (ss) {
                    if (ss.indexOf("data") > -1) {
                      if (v.ssfly == 1) {
                        var img = document.createElement('img');
                        img.setAttribute('src', ss);
                        css(img, {
                          position: "fixed",
                          right: (exist(v.ssflyp) ? v.ssflyp : 20),
                          bottom: (exist(v.ssflyp) ? v.ssflyp : 20),
                          width: 0,
                          transition: "width 0.5s cubic-bezier(.75,-0.5,0,1.75)"
                        });
                        img.style.zIndex = 1001;
                        document.body.appendChild(img);
                        setTimeout(function() {
                          css(img, {
                            width: (exist(v.ssflyw) ? v.ssflyw : 200)
                          })
                        }, 1);
                        img.onclick = function() {
                          this.parentNode.removeChild(this)
                        }
                      }
                      if (v.ssdown == 1) {
                        var a = createElement("a");
                        a.href = ss;
                        a.download = y[0] + ".jpg";
                        a.click()
                      }
                    }
                  } else {
                    log(y[0] + " error")
                  }
                } else {
                  apiProcessor(y[0])
                }
              }
            }
          } else {
            if (x.indexOf("js:") == 0) {
              if (x.indexOf("(") > 0 && x.indexOf(")") > 0) {
                eval(x.substr(3))
              } else {
                eval(y[0].substr(3) + '(' + (exist(y[1]) ? '"' + y[1] + '"' : '') + (exist(y[2]) ? ',"' + y[2] + '"' : '') + ')')
              }
            }
            if (x.indexOf("event:") == 0) {
              JsEvent(x.substr(6), o.media.time())
            }
            if (x.indexOf("share:") == 0 && o.share) {
              o.share.api(x.substr(6))
            }
            if (x.indexOf("effect:") == 0 && o.effects) {
              apiProcessor("effect", x.substr(7))
            }
            if (x.indexOf("http") == 0 || x.indexOf("/") == 0 || x.indexOf("?") == 0 || x.indexOf("url:") == 0) {
              x.indexOf("url:") == 0 ? x = x.substr(4) : '';
              window.open(x, but.s("linktarget"))
            }
            if (x.indexOf("download") == 0) {
              o.actions.Download()
            }
            if (x == "api:pipwebkit") {
              o.media.PipWebkit()
            }
          }
          if (x.indexOf("settings#") > -1) {
            if (settings) {
              var si = x.substr(9).split(",");
              if (settings.g("show") && settings.g("open") == si[0]) {
                o.sttx = undefined;
                o.stty = undefined;
                settings.hide()
              } else {
                o.sttx = but.g("x") - but.g("width") / 2;
                o.stty = but.g("y") + but.g("h");
                for (var i = 0; i < si.length; i++) {
                  i == 0 ? settings.show() : '';
                  settings.open(si[i])
                }
                playlist ? playlist.plclose() : ''
              }
            }
          }
          if (x.indexOf("settings:") > -1 && v.settings.combined == 1) {
            if (!o.settings2) {
              o.settings2 = new PluginSettings2()
            }
            if (v.settings.showovercontrol == 1) {
              if (type == "over") {
                o.settings2.show(x)
              } else {
                o.settings2.toggle(x)
              }
            } else {
              if (!type) {
                o.settings2.toggle(x)
              }
            }
          }
          if (x == "unblock") {
            o.actions.RemoveCurtain();
            o.stopkeys = 0;
            but.set("hide2");
            var bl = FindBut("linkurl", "block");
            if (bl) {
              bl.set("hide2")
            }
          }
          if (x == "block") {
            but.UpdateText("OK");
            but.s("linkurl2") ? window.location.href = trim(but.s("linkurl2")) : ''
          }
        }
      }
    };
    this.title = function(t) {
      var y = false;
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "title") {
            if (b[x].s("var") == t || t == "title") {
              if (b[x].s("hide") == 1 && b[x].s("hideonplay") == 1 && o.play) {
                y = true
              }
              if (v[t] == '' || y) {
                b[x].set("display", false)
              } else {
                b[x].set("display", true)
              }
              b[x].UpdateText(v[t])
            }
          }
        }
      }
      TitlePl()
    };
    this.titlepl = function() {
      TitlePl()
    };
    this.resizetext = function() {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "custom") {
            if (b[x].s("type") == "text") {
              b[x].ResizeText()
            }
          }
        }
      }
    };

    function TitlePl() {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "custom") {
            if (b[x].s("type") == "text") {
              b[x].RenewFromTitle(true)
            }
          }
        }
      }
    }

    function ShowShare() {
      if (exist(o.share)) {
        o.share.Show()
      }
    }
    this.showShare = function() {
      ShowShare()
    };
    this.updateTitle = function() {
      if (v.title != '') {
        for (var x in b) {
          if (b.hasOwnProperty(x)) {
            if (b[x].g("action") == "title") {
              var y = false;
              if (!b[x].g("show")) {
                y = true;
                b[x].set("display", true)
              }
              b[x].UpdateText(v.title);
              if (y) {
                b[x].set("display", false)
              }
            }
          }
        }
      }
    };
    this.customTextPl = function() {
      CustomTextButs()
    };

    function CustomTextButs() {
      if (v.customtext) {
        if (typeof(v.customtext) == "object") {
          for (var x in v.customtext) {
            if (v.customtext.hasOwnProperty(x)) {
              CustomText(x, v.customtext[x])
            }
          }
        }
      }
    };
    this.customText = function(y, z) {
      CustomText(y, z)
    };
    this.upText = function(x) {
      if (b[x]) {
        b[x].UpText()
      }
    };
    this.upTexts = function() {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("ctxt")) {
            b[x].UpText()
          }
        }
      }
    };

    function CustomText(y, z) {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("ctxt")) {
            if (b[x].s("dom") == y) {
              if (!b[x].g("show") || b[x].s("hidden") == 1) {
                b[x].set("unhidden");
                b[x].set("display", true)
              }
              b[x].CustomText(z)
            }
          }
        }
      }
    };
    this.resize = function() {
      Resize()
    };
    this.resize2 = function() {
      Resize(true)
    };
    this.resizeSettings = function() {
      ResizeSettings(settings)
    };
    this.resizePlaylist = function() {
      ResizeSettings(playlist)
    };
    this.Play = function() {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "play") {
            b[x].On()
          }
        }
      }
      o.vast_loadtxt ? o.vast_loadtxt.hide() : '';
      ClosePl();
      o.play = true;
      ShowOrHide()
    };
    this.Pause = function() {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "pause" || b[x].g("action") == "stop") {
            b[x].Off()
          }
        }
      }
      if (playlist) {
        if (v.playlist.openplaylistpause == 1 && !playlist.empty()) {
          playlist.show()
        }
      }
      o.play = false;
      this.StopWaiting();
      ShowOrHide();
      if (v.toolbar.hide == 1 && v.toolbar.hideonpause == 1) {
        HideForce(true)
      }
    };
    this.Mute = function() {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "mute") {
            b[x].On()
          }
          this.Volume(0)
        }
      }
      ShowOrHide()
    };
    this.Unmute = function() {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "unmute") {
            b[x].Off()
          }
        }
      }
      if (v.volume < 0.1) {
        v.volume = 0.5;
        o.actions.Volume(v.volume)
      } else {
        this.Volume(v.volume)
      }
      ShowOrHide()
    };
    this.Volume = function(volume, y) {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "volume") {
            if (b[x].s("customline") != "speed") {
              b[x].UpdatePlay(volume, 1, (y == "no" ? y : true))
            }
          }
          if (b[x].g("action") == "mute") {
            b[x].UpdateVolume(volume)
          }
        }
      }
      ShowOrHide()
    };
    this.Fullscreen = function() {
      var bl = FindBut("action", "fullscreen");
      if (bl) {
        bl.On();
        bl.set("scale", bl.s("scale"))
      }
      ShowOrHide();
      resizeonwidth ? setTimeout(ShowOrHide, 500) : '';
      HideInterval();
      CloseSttx()
    };
    this.Normalscreen = function() {
      var bl = FindBut("action", "fullscreen");
      if (bl) {
        bl.Off()
      }
      Resize();
      clearInterval(o.toolbarInterval);
      ShowOrHide();
      CloseSttx()
    };

    function CloseSttx() {
      if (o.sttx) {
        o.sttx = undefined;
        o.stty = undefined;
        settings.hide()
      }
    }
    this.onEnded = function() {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "play") {
            b[x].ReplayIcon()
          }
        }
      }
    };
    this.Review = function() {
      ShowOrHide()
    };
    this.closePl = function() {
      ClosePl()
    };

    function ClosePl() {
      if (playlist) {
        if (playlist.g("show") && v.playlist.autohide == 1) {
          o.controls.Playlist()
        }
      }
    }

    function ShowOrHide() {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") != "buffer") {
            ShowOrHideProcessor(b[x])
          }
        }
      }
      ShowOrHideProcessor(bg);
      if (stretch_width_last != stretch_width) {
        stretch_width_last = stretch_width;
        Resize()
      }
      if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
        ToolbarDown(!o.starttimeout && !o.mouseHere && !o.fullscreen && o.play && v.toolbar.hidejustfull != 1 && !o.casting)
      }
    };

    function ShowForce() {
      var show = toolbarHidden && v.toolbar.hidewithoutmoving == 1;
      if (!o.play && v.toolbar.hide == 1 && v.toolbar.hideonpause == 1) {
        show = false
      }
      if (show) {
        for (var x in b) {
          if (b.hasOwnProperty(x)) {
            if (b[x].g("action") != "buffer") {
              ShowOrHideProcessor(b[x], false)
            }
          }
        }
        css(o.frame, {
          "cursor": "default"
        });
        o.fcdef = true;
        ShowOrHideProcessor(bg, false);
        if (bg.g("show")) {
          ToolbarShow()
        }
        ToolbarDown(false)
      }
    }

    function HideForce() {
      var hide = o.play && v.toolbar.hidewithoutmoving == 1 && !o.mouseDown;
      if (o.controlover && v.toolbar.showovr == 1) {
        hide = false
      }
      if (!o.play && v.toolbar.hide == 1 && v.toolbar.hideonpause == 1) {
        hide = true
      }
      if (settings) {
        if (settings.g("show") && o.setaction) {
          hide = false
        }
      }
      if (o.casting) {
        hide = false
      }
      if (hide) {
        for (var x in b) {
          if (b.hasOwnProperty(x)) {
            if (b[x].g("action") != "buffer") {
              ShowOrHideProcessor(b[x], true)
            }
          }
        }
        ShowOrHideProcessor(bg, true);
        if (!bg.g("show")) {
          toolbarHidden = true;
          o.media.ToolbarHide();
          if (o.play) {
            css(o.frame, {
              "cursor": "none"
            });
            o.fcdef = false
          }
        }
        ToolbarDown(true)
      }
    }

    function HideInterval() {
      if (v.toolbar.hidewithoutmoving == 1) {
        if (v.toolbar.hidejustfull == 1 && !o.fullscreen && !o.fullscreen_process) {} else {
          clearInterval(o.toolbarInterval);
          o.toolbarInterval = setInterval(HideForce, ((v.toolbar.hideleavetimeout > 0 ? v.toolbar.hideleavetimeout : v.toolbar.hidetimeout) * 1000))
        }
      }
    }

    function ShowOrHideProcessor(but, forcehide) {
      var hide = false;
      var show = false;
      var toolbar_hide = false;
      if (v.toolbar.hide == 1) {
        if ((!o.starttimeout && !o.mouseHere && !o.fullscreen && o.play && v.toolbar.hidejustfull != 1 && !o.casting) || (o.fullscreen && toolbarHidden && !o.fcdef) || (o.actions.plNxtExst() && o.ended && !o.mouseHere)) {
          hide = true;
          show = false;
          toolbar_hide = true
        } else {
          hide = false;
          show = true
        }
        if (exist(forcehide) && !o.casting) {
          hide = forcehide;
          show = !hide
        }
        if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1 && (but.s("position").indexOf("controls") == 0 || but.s("action") == "line")) {
          hide = false;
          show = true
        }
        if (v.toolbar.hideonpause == 1 && !o.play) {
          hide = true;
          show = false;
          toolbar_hide = false
        }
        if (v.toolbar.showuntilmeta == 1 && !o.metadata && o.play) {
          hide = false;
          show = true
        }
      } else {
        if (but.s("hide") != 1) {
          show = true
        }
      }
      if (show && !o.fcdef) {
        css(o.frame, {
          "cursor": "default"
        });
        o.fcdef = true
      }
      var a = but.g("action");
      if (a == "custom" && but.s("position").indexOf("controls") == -1) {
        hide = false;
        show = true
      }
      if (o.casting) {
        if (a == "line") {
          if (o.media.duration() == -1) {
            hide = true;
            show = false
          }
        }
      }
      var re_y = false;
      var hp = HideProof(but);
      if (but.s("hide") == 1) {
        if (but.s("hideonleaveandplay") == 1) {
          if (toolbar_hide || forcehide || (o.play && !o.mouseHere)) {
            !toolbar_hide && !forcehide ? '' : hp = true
          }
        }
        if (but.s("hideonbar") == 1) {
          if (!toolbar_hide && !forcehide) {
            hp = true
          }
        }
        if (but.s("hidelap") == 1) {
          if (o.play && !o.mouseHere) {
            hp = true
          }
        }
        if (but.s("hideonwidth") == 1 || but.s("hideoverwidth") == 1 || but.s("hideonfullscreen") == 1) {
          resizeonwidth = true
        }
      }
      if (hp) {
        hide = true;
        show = false
      } else {
        !hide ? show = true : ''
      }
      if (but.s("action") == "volume") {
        if (but.s("hide") == 1 && but.s("hideoutmute") == 1) {
          hide = true;
          show = false;
          if (!toolbar_hide && (o.hidden_volume_over || o.hidden_volume_over_process) && !forcehide && but.s("hiddenwidth") != 1) {
            hide = false;
            show = true
          } else {
            re_y = true
          }
        }
      }
      if (o.nativecontrols || (!o.start && v.toolbar.hide == 1 && v.toolbar.hideuntilstarted == 1) || (!o.metadata && v.toolbar.hide == 1 && v.toolbar.hideuntilmeta == 1)) {
        if (but.s("position").indexOf("controls") > -1 || but.s("position").indexOf("bottom") > -1) {
          hide = true;
          show = false
        }
        if (v.toolbar.hidejustfull == 1 && !o.fullscreen) {
          hide = false;
          show = true
        }
      }
      if (settings) {
        if (settings.g("show") && v.settings.always != 1) {
          toolbar_hide = false;
          forcehide = false
        }
      }
      if (playlist && o.droplist) {
        if (v.playlist.dropopen == 1) {
          if (o.droplist.Visible()) {
            return
          }
        }
      }
      if (a == "share") {
        if (exist(o.share)) {
          if (o.share.empty()) {
            hide = true;
            show = false;
            but.set("animation", "none")
          }
        }
      }
      if (a == "playlist" || a == "next" || a == "prev" || but.s("hidewithoutplaylist") == 1) {
        if (playlist) {
          if (playlist.empty() && but.s("hidewithoutplaylist") != 0) {
            hide = true;
            show = false;
            but.set("animation", "none")
          }
        } else {
          hide = true;
          show = false
        }
      }
      if (o.hideall == 1) {
        hide = true;
        show = false
      }
      if (re_y) {
        var cc = ControlCoordinate(but);
        if (cc) {
          cc.y > 0 ? but.set("y0", cc.y) : '';
          css(but.c(), {
            "position": "absolute",
            "top": but.g("y0")
          })
        }
      }
      if (hide) {
        HideControl(but, (firstly ? true : false))
      }
      if (show) {
        ShowControl(but)
      }
      if (but == bg) {
        if (!hide && show) {
          ToolbarShow();
          show2(bg2);
          toolbarHidden = false;
          uijs == 0 ? js("ui", 1) : '';
          uijs = 1;
          o.cut && o.cutted ? o.cut.show() : ''
        }
        if (hide && !show && !o.casting) {
          o.media.ToolbarHide();
          SettingsClose();
          hide2(bg2);
          toolbarHidden = true;
          uijs == 1 ? js("ui", 0) : '';
          uijs = 0;
          o.cut && o.cutted ? o.cut.hide() : ''
        }
        if (settings) {
          if (settings.tb()) {
            if (!settings.g("show")) {
              show && !hide ? settings.show() : ''
            } else {
              !show && hide ? settings.hide(2) : ''
            }
          }
        }
        if (playlist) {
          if (v.playlist.always == 1 && !playlist.empty()) {
            if (show || o.nativecontrols) {
              if (v.playlist.alwaysnotfullscreen == 1 && o.fullscreen) {} else {
                if (!playlist.g("show")) {
                  if (v.playlist.alwaysjustpause == 1) {
                    !o.play ? playlist.show() : ''
                  } else {
                    playlist.show()
                  }
                }
              }
            } else {
              if (hide && playlist.g("show")) {
                playlist.hide()
              }
            }
          }
        }
      }
    };

    function HideProof(but) {
      var x = false;
      var a = but.g("action");
      if (but.s("hide") == 1) {
        if (but.s("hideonplay") == 1) {
          o.play ? x = true : ''
        }
        if (but.s("hideonpause") == 1) {
          !o.play ? x = true : ''
        }
        if (but.s("hdnn") == 1) {
          x = true
        } else {
          if (but.s("hideondesktop") == 1) {
            if (o.system.desktop) {
              but.set("hdnn", 1);
              x = true
            }
          }
          if (but.s("hideonmobile") == 1) {
            if (o.system.mobile) {
              but.set("hdnn", 1);
              x = true
            }
          }
        }
        if (but.s("hideoverwidth") == 1) {
          if (o.screen_w > but.s("hideoverwidthlimit")) {
            but.set("hiddenwidth", 1);
            x = true
          } else {
            but.set("hiddenwidth", 0)
          }
        }
        if (but.s("hideunwait") == 1 && !waiting) {
          x = true;
          o.wtcntrl = 1
        }
        if (but.s("hideonwidth") == 1) {
          if (o.screen_w <= but.s("hideonwidthlimit")) {
            but.set("hiddenwidth", 1);
            x = true
          } else {
            but.set("hiddenwidth", 0)
          }
        }
        if (but.s("hideafterstart") == 1) {
          o.start ? x = true : ''
        }
        var t = o.media.time();
        var d = o.media.duration();
        if (but.s("hideafter") == 1 && but.s("hideaftersec") > 0) {
          if (t >= but.s("hideaftersec")) {
            x = true
          }
        }
        if (but.s("hidebefore") == 1 && but.s("hidebeforesec") > 0) {
          if (t < but.s("hidebeforesec")) {
            x = true
          }
        }
        if (but.s("hidebefore2") == 1 && but.s("hidebeforesec2") > 0) {
          if (t < d - but.s("hidebeforesec2") || d == 0) {
            x = true
          }
        }
        if (but.s("hidelastpl") == 1) {
          if (playlist) {
            if (!playlist.PlaylistNextExist()) {
              x = true
            }
          }
        }
        if (but.s("hide0timestore") == 1) {
          if (o.start || !o.continue || o.media.isLive()) {
            x = true
          }
          if (o.continue) {
            if (o.continue.flag().t == 0) {
              x = true
            }
          }
        }
        if (but.s("hideuntilstarted") == 1) {
          !o.start ? x = true : ''
        }
        if (but.s("hideuntilto") > 0) {
          x = true
        }
        if (but.s("hideonvar") == 1) {
          if (exist(but.s("hidevar"))) {
            options[but.s("hidevar")] ? x = true : ''
          }
        }
        if (but.s("hideuntiltext") == 1) {
          if (!exist(but.s("customtext"))) {
            x = true
          }
        }
        if (but.s("hidewovar") == 1) {
          if (exist(but.s("hidevar2"))) {
            !options[but.s("hidevar2")] ? x = true : ''
          }
        }
        if (but.s("hideuntilstartedios") == 1 && o.system.ios) {
          !o.start || o.newfile ? x = true : ''
        }
        if (but.s("hideuntilended") == 1) {
          !o.media.ended() ? x = true : ''
        }
        if (but.s("hideonvod") == 1) {
          !o.media.isLive() ? x = true : ''
        }
        if (but.s("hideonleave") == 1) {
          !o.mouseHere ? x = true : ''
        }
        if (but.s("hidenormscreen") == 1) {
          !o.fullscreen ? x = true : ''
        }
        if (but.s("hideonfullscreen") == 1) {
          o.fullscreen ? x = true : ''
        }
        if (but.s("hideonunmute") == 1) {
          !o.muted ? x = true : ''
        }
        if (but.s("hideonlive") == 1) {
          o.media.isLive() && o.media.currentFile().indexOf("?DVR") == -1 ? x = true : ''
        }
        if (but.s("hidewithposter") == 1) {
          isVisible(o.poster) ? x = true : ''
        }
        if (but.s("hideuntilmeta") == 1) {
          !o.metadata ? x = true : ''
        }
        if (but.s("hideonmeta") == 1) {
          o.metadata ? x = true : ''
        }
        if (but.s("hidemini") == 1) {
          o.mini ? x = true : ''
        }
        if (but.s("hidenomini") == 1) {
          !o.mini ? x = true : ''
        }
        if (but.s("hideafterclick") == 1) {
          if (but.g("clicked")) {
            x = true
          }
        }
        if (but.s("hidenoab") == 1) {
          !o.ab ? x = true : ''
        }
        if (but.s("hideab") == 1) {
          o.ab ? x = true : ''
        }
        if (but.s("hideonyoutube") == 1) {
          if (v.preload == 1 && v.screenclick == 1) {
            if (o.file_type == "youtube" && !exist(v.poster) && v.youtubeposter == 0) {
              if (!o.start || o.media.status() == "ended") {
                if (v.poster == '') {} else {
                  x = true
                }
              }
            }
          }
        }
      }
      if (a == "custom") {
        var lu = but.s("linkurl");
        if (lu) {
          if (lu == "api:airplay" || lu == "airplay") {
            if (!o.airplay && !o.airplayed) {
              x = true
            }
          }
          if (lu == "api:pipwebkit") {
            if (!o.pipwebkit || (!o.start && v.preload == 0)) {
              x = true
            }
          }
          if (lu == "api:unfixing") {
            if (!o.mini) {
              x = true
            }
          }
          if (lu.indexOf("captions") > -1) {
            if (!o.captions) {
              x = true
            }
          }
          if (indOf([lu], "skip") && !indOf([lu], "js:") && but.s("hdnn") != 1) {
            var sk = false;
            if (exist(v.skip)) {
              if (!o.skpbt) {
                typeof PluginSkip == 'function' ? o.skpbt = new PluginSkip() : ''
              }
              if (o.skpbt) {
                sk = o.skpbt.check(but)
              }
            }!sk ? x = true : ''
          }
        }
      }
      if (a == "playlist" || a == "next" || a == "prev") {
        if (playlist) {
          if (playlist.empty()) {
            x = true
          }
        } else {
          x = true
        }
      }
      if (a == "settings") {
        if (settings) {
          if (settings.empty()) {
            x = true;
            o.file_type != 'hls' ? but.set("animation", "none") : ''
          }
        } else {
          x = true
        }
      }
      if (but.g("type") == "text") {
        if (but.g("length") == 0) {
          x = true
        }
      }
      if (but.g("settings#")) {
        if (!but.g("set#visible")) {
          x = true
        }
      }
      if (but.s("chromecast") == 1) {
        var cb = document.getElementById("pjs_cast_button_" + v.id);
        if ((o.media.duration() == 0 && o.media.time() == 0) || !o.tagvideo || !isVisible(cb) || !o.cast_available) {
          x = true
        }
      }
      if (but.s("hidetime") == 1) {
        !x ? but.set("hidetime", 1) : ''
      }
      if (a == "duration") {
        if (o.media.isLive()) {
          x = true
        }
      }
      if (but.g("key") == "control_start" && o.system.mobile) {
        if (o.nativecontrols && o.system.android) {
          x = true
        }
      }
      return x
    }

    function HideControl(but, quick) {
      if (but.g("show")) {
        if (o.fullscreen_process || but.s("animation") == "none" || quick) {
          but.set("display", false)
        } else {
          HideAnimate(but)
        }
        but.set("show", false)
      }
    };

    function ShowControl(but) {
      if (!but.g("show")) {
        if (but.s("animation") == "none" || o.fullscreen_process) {
          but.set("display", true);
          if (o.fullscreen_process) {
            but.set("opacity", 1)
          }
          if (but.g("action") == "volume") {
            if (o.hidden_volume) {
              HidePositionControl(but)
            }
          }
        } else {
          ShowAnimate(but)
        }
        if (but.s("action") == "volume") {
          o.controls.Volume(o.muted ? 0 : v.volume)
        }
        if (but.s("action") == "line") {
          o.actions.Loading()
        }
        but.set("show", true)
      }
    };

    function HideAnimate(but) {
      killMotion(but.g("key"));
      var m_type = "alpha|";
      var m_to = "0|";
      var hide = 1;
      var a = but.s("animation");
      if (but.s("apdra") == 1) {
        m_type = '';
        m_to = ''
      }
      var p = but.s("position");
      var scl = but.g("scaleX");
      exist2(but.s("apdr")) ? p = but.s("apdr") : '';
      if (a == "scale") {
        m_type += "scale|";
        m_to += "0|"
      }
      if (a == "position") {
        if (p.indexOf("right") > -1 && p.indexOf("controls") == -1) {
          m_type += "x|";
          m_to += int(o.screen_w + but.g("width") / 2 * scl) + "|"
        }
        if (p.indexOf("left") > -1) {
          m_type += "x|";
          m_to += int(-but.g("width") / 2) * scl + "|"
        }
        if (p.indexOf("top") > -1) {
          m_type += "y|";
          m_to += (-but.g("height") / 2) * scl + "|"
        }
        if (p.indexOf("bottom") > -1 || p.indexOf("controls") > -1 || p == "timeline") {
          m_type += "y|";
          if (but.g("action") == "line" || but.g("action") == "volume") {
            m_to += int(o.screen_h + but.s("h") + (but.s("h") < 20 ? 20 - but.s("h") : 0)) + "|"
          } else {
            m_to += int(o.screen_h + but.g("height") / 2) + "|"
          }
        }
        if (p == "center") {
          m_type += "scale|";
          m_to += "0|"
        }
      }
      var m = new Motion({
        "mc": but,
        "me": but.g("key"),
        "type": m_type.substr(0, m_type.length - 1),
        "to": m_to.substr(0, m_to.length - 1),
        "hide": hide
      })
    };

    function ShowAnimate(but) {
      killMotion(but.g("key"));
      var m_type = "";
      var m_to = "";
      var a = but.s("animation");
      var p = but.s("position");
      exist2(but.s("apdr")) ? p = but.s("apdr") : '';
      if (but.g("opacity") != 1 && but.s("apdra") != 1) {
        m_type = "alpha|";
        m_to = (but.g("key") == 'bg' ? v.toolbar.a : "1") + "|"
      }
      if (a == "scale") {
        if (but.g("scaleX") != but.s("scale")) {
          m_type += "scale|";
          m_to += but.s("scale") + "|"
        }
      }
      if (a == "position") {
        if (p == "center") {
          if (but.g("scaleX") != but.s("scale")) {
            m_type += "scale|";
            m_to += but.s("scale") + "|"
          }
        } else {
          if (p.indexOf("controls") > -1) {
            if (but.g("y") != but.g("y0")) {
              m_type += "y|";
              m_to += but.g("y0") + "|"
            }
          } else {
            m_type += "x|y|";
            m_to += but.g("x0") + "|" + but.g("y0") + "|"
          }
        }
      }
      if (m_type != "" && m_to != "") {
        var m = new Motion({
          mc: but,
          me: but.g("key"),
          type: m_type.substr(0, m_type.length - 1),
          to: m_to.substr(0, m_to.length - 1),
          show: 1
        })
      } else {
        but.set("display", true)
      }
    };
    this.Mouse = function(key, type, quick) {
      var resize = false;
      var stop = false;
      var but = b[key];
      var action = but.g("action");
      var linkurl = but.s("linkurl");
      if (type == "over") {
        if (o.hidden_volume) {
          if (action == "volume" || action == "mute" || action == "unmute") {
            o.hidden_volume_over = true;
            o.hidden_volume_over_process = true;
            resize = true;
            ShowOrHide();
            if (v.control_line.hideonvolume == 1) {
              var bl = FindBut("action", "line");
              if (bl) {
                hide2(bl.c())
              }
            }
          }
        }
        if (settings && v.settings.showovercontrol == 1 && ((action == "settings" || linkurl.indexOf("setting") == 0) || linkurl.indexOf("settings:") == 0)) {
          clearTimeout(o.settingsovertimer);
          if (!settings.g("show") || _lastactbut != but) {
            Action(but, type);
            o.overopentimeout = action + linkurl;
            setTimeout(function() {
              o.overopentimeout = null
            }, 500)
          }
        }
        if (playlist && v.playlist.showovercontrol == 1 && action == "playlist") {
          clearTimeout(o.playlistovertimer);
          if (!playlist.g("show") || _lastactbut != but) {
            Action(but, type);
            o.overopentimeout = action;
            setTimeout(function() {
              o.overopentimeout = null
            }, 500)
          }
        }
      }
      if (type == "out") {
        if (o.hidden_volume) {
          if (action == "volume" || action == "mute" || action == "unmute") {
            o.hidden_volume_over = false;
            o.hidden_volume_over_process = true;
            setTimeout(function() {
              if (!o.hidden_volume_over) {
                o.hidden_volume_over_process = false;
                for (var x in b) {
                  if (b.hasOwnProperty(x)) {
                    if (!toolbarHidden) {
                      if (b[x].g("action") == "volume") {
                        HideControl(b[x]);
                        Resize()
                      }
                    }
                    if (b[x].g("action") == "line") {
                      if (v.control_line.hideonvolume == 1) {
                        show2(b[x].c())
                      }
                    }
                  }
                }
              }
            }, 500)
          }
        }
        if (action == "line") {
          o.actions.UpdatePlay(1)
        }
        if (v.settings.showovercontrol == 1 && ((action == "settings" || linkurl.indexOf("setting") == 0) || linkurl.indexOf("settings:") == 0)) {
          clearTimeout(o.settingsovertimer);
          o.settingsovertimer = setTimeout(function() {
            if (!o.mouseDown) {
              SettingsClose(1)
            }
          }, (v.settings.showoverto > 0 ? v.settings.showoverto * 1000 : 1000))
        }
        if (playlist && v.playlist.showovercontrol == 1 && action == "playlist") {
          clearTimeout(o.playlistovertimer);
          o.playlistovertimer = setTimeout(function() {
            if (!o.mouseDown) {
              playlist.g("show") ? playlist.hide(1) : ''
            }
          }, (v.playlist.showoverto > 0 ? v.playlist.showoverto * 1000 : 1000))
        }
      }
      if (resize) {
        setTimeout(Resize, 10)
      }
    };
    this.StageLeave = function() {
      if (o.volumewheel && !o.fullscreen && !o.fullscreen_process) {
        o.actions.volumewheel(false);
        o.volumewheel = false
      }
      if (o.poster) {
        if (v.poster_aover > -1 && isVisible(o.poster)) {
          css(o.poster, {
            opacity: v.poster_a
          })
        }
      }
      if (o.play && v.playonhover == 1 && v.pauseonhover != 0) {
        o.actions.Pause()
      }
      if (v.toolbar.hideleavetimeout > 0) {
        clearTimeout(o.leavetimeout);
        o.leavetimeout = setTimeout(ShowOrHide, v.toolbar.hideleavetimeout * 1000)
      } else {
        ShowOrHide()
      }
    };
    this.StageOver = function() {
      if (o.poster) {
        if (v.poster_aover > -1 && isVisible(o.poster)) {
          css(o.poster, {
            opacity: v.poster_aover
          })
        }
      }
      if (!o.play && v.playonhover == 1) {
        o.actions.Play()
      }
      ShowOrHide();
      ToolbarDown(false)
    };
    this.StageMove = function(stage_x, stage_y) {
      var y;
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          y = b[x].g("action");
          if (y == "line" || y == "volume") {
            b[x].StageMove(stage_x, stage_y)
          }
        }
      }
    };
    this.StageMove2 = function() {
      if (v.toolbar.hide == 1) {
        if (v.toolbar.hidejustfull == 1 && !o.fullscreen) {
          return
        }
        if ((!o.mouseHere || o.system.mobile) && o.media.status() == "playing") {
          o.mouseHere = true;
          ShowOrHide();
          o.system.mobile ? setTimeout(function() {
            o.mouseHere = false
          }, 500) : ''
        }
        if (v.toolbar.hidewithoutmoving == 1) {
          ShowForce();
          HideInterval()
        }
        ToolbarDown(false)
      }
    };
    this.StageMouseUp = function(stage_x, stage_y) {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "line" || b[x].g("action") == "volume") {
            b[x].StageMouseUp(stage_x, stage_y)
          }
        }
      }
    };
    this.Played = function(time, duration, upd) {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "line") {
            b[x].UpdatePlay(time, duration, upd)
          }
          if (b[x].g("action") == "time") {
            UpdateTime(b[x], time, duration)
          }
          if (b[x].s("rotateplaying") == 1) {
            b[x].Rotate()
          }
          if (b[x].s("svgtmln") == 1) {
            b[x].Tmln(time, duration)
          }
          if (b[x].s("often") == 1) {
            if (b[x].s("often2") == 1 && !b[x].g("show") && toolbarHidden) {} else {
              if (b[x].g("show") == HideProof(b[x])) {
                ShowOrHide()
              }
            }
          }
        }
      }
    };

    function ToolbarDown(x) {
      if (v.toolbar.hide == 1) {
        x ? SettingsClose() : '';
        if (v.toolbar.hidedown == 1) {
          if (!o.play && v.toolbar.hideonpause == 1) {
            x = true
          }
          if (x && !o.toolbarisdown) {
            css(o.toolbar, {
              "top": bg.h()
            })
          }
          if (!x && o.toolbarisdown) {
            css(o.toolbar, {
              "top": 0
            })
          }
          o.toolbarisdown = x
        }
      }
    }

    function ToolbarShow() {
      toolbarHidden = false;
      o.media.ToolbarShow();
      if (o.resizeonmouse) {
        o.resizeonmouse = false;
        Resize();
        setTimeout(Resize, 300)
      }
    }

    function UpdateTime(x, time, duration) {
      if (v.delete > 0) {
        time -= v.delete * 1;
        duration -= v.delete * 1
      }
      var y = Time(time);
      if (x.s("inversetime") == "1") {
        y = Time(duration - time)
      }
      if (x.s("showduration") == "1") {
        if (x.s("showboth") == "1") {
          y = y + (duration > 0 ? ' ' + Lang(x.s("separator")) + ' ' + Time(duration) : '')
        } else {
          time == 0 ? y = Time(duration) : ''
        }
      }
      x.UpdateText(y)
    }
    this.Loaded = function(time, duration) {
      var x = FindBut("action", "line");
      if (x) {
        x.UpdateLoad(time, duration)
      }
    };
    this.Cut = function(y) {
      if (o.media.duration() > 0) {
        var x = FindBut("action", "line");
        if (x) {
          x.Cut(y)
        }
      }
    };
    this.Waiting = function() {
      if (!waiting) {
        if (v.hidevideo == 1) {
          clearTimeout(wait_to);
          wait_to = setTimeout(Waiting, 500)
        } else {
          Waiting()
        }
      }
    };

    function Waiting() {
      if (!waiting) {
        js("buffering");
        waiting = true;
        var x = FindBut("action", "buffer");
        if (x) {
          x.Buffer();
          if (v.posteronwait == 1 && o.play) {
            clearTimeout(o.wtpstr_to);
            o.wtpstr_to = setTimeout(WaitPoster, (v.pstrwt > 0 ? v.pstrwt : 1) * 1000)
          }
        }
        o.wtcntrl ? ShowOrHide() : ''
      }
    }

    function WaitPoster() {
      if (o.play && waiting) {
        o.actions.ShowPoster()
      }
    }
    this.HideElement = function(y) {
      for (var x in b) {
        if (x == y) {
          b[x].set("hide2")
        }
      }
    };
    this.StopWaiting = function() {
      clearTimeout(wait_to);
      if (waiting) {
        js("buffered");
        var x = FindBut("action", "buffer");
        if (x) {
          x.BufferStop();
          if (v.posteronwait == 1 && o.play) {
            o.actions.HidePoster()
          }
        }
        waiting = false;
        o.wtcntrl ? ShowOrHide() : ''
      }
    };
    this.volumescroll = function() {
      var x = FindBut("linkurl", "volume scroll");
      if (x) {
        x.set("show2");
        x.UpdateText(Lang('volume') + ' ' + (o.muted ? 0 : Math.ceil(v.volume * 100)) + '%');
        clearTimeout(o.volumescroll);
        o.volumescroll = setTimeout(Volumescrolled, 1000)
      }
    };

    function Volumescrolled() {
      var x = FindBut("linkurl", "volume scroll");
      if (x) {
        x.UpdateText('');
        x.set("hide2");
        clearTimeout(o.volumescroll)
      }
    }
    this.Seek = function(time, duration) {
      if (v.delete > 0) {
        time -= v.delete * 1;
        duration -= v.delete * 1
      }
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].s("on") == 1) {
            if (b[x].g("action") == "line") {
              duration > 0 ? b[x].set("click", time / duration) : '';
              b[x].UpdatePlaySeek()
            }
            if (b[x].g("action") == "time") {
              UpdateTime(b[x], time, duration)
            }
            if (b[x].g("action") == "live") {
              b[x].set("iconopacity", 0.5);
              b[x].set("saturate", 0)
            }
          }
        }
      }
    };
    this.Duration = function(time, duration) {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "duration") {
            if (v.delete > 0) {
              duration -= v.delete * 1
            }
            b[x].UpdateText(Time(duration))
          }
          if (b[x].g("action") == "line") {
            b[x].UpdatePlay(time, duration);
            b[x].PlacePoints(duration)
          }
          if (b[x].g("action") == "time") {
            UpdateTime(b[x], time, duration)
          }
        }
      }
    };
    this.Settings = function() {
      if (!o.settings2) {
        settings.g("show") ? settings.hide() : settings.show()
      }
    };
    this.SettingsVisible = function() {
      if (settings) {
        if (o.settings2) {
          return o.settings2.isVisible() || settings.g("show")
        } else {
          return settings.g("show") ? true : false
        }
      } else {
        return false
      }
    };
    this.MenuProc = function(x) {
      if (settings) {
        settings.menuproc(x)
      }
    };
    this.SettingsClose = function() {
      SettingsClose()
    };
    this.SettingsTimer = function(x) {
      if (settings) {
        settings.UpdateTimer(x)
      }
    };
    this.SettingsSpeed = function() {
      if (settings) {
        settings.UpdateSpeed()
      }
    };
    this.SettingsExist = function(x) {
      if (settings) {
        return settings.Exist(x)
      }
    };

    function SettingsClose(x) {
      if (settings) {
        settings.g("show") ? settings.hide(x) : ''
      }
      o.settings2 ? o.settings2.hide() : ''
    };
    this.Playlist = function() {
      if (playlist) {
        if (playlist.g("show")) {
          playlist.hide(1)
        } else {
          playlist.show()
        }
      }
    };
    this.PlaylistShow = function(x) {
      if (playlist) {
        if (playlist.g("show") && x != 1) {
          x != 2 ? playlist.hide() : ''
        } else {
          setTimeout(function() {
            playlist.show()
          }, 100)
        }
      }
    };
    this.PlaylistVisible = function() {
      if (playlist) {
        return playlist.g("show") ? true : false
      } else {
        return false
      }
    };
    this.PlaylistG = function(x) {
      return playlist ? playlist.g(x) : ''
    };
    this.UpdatePlaylist = function(x) {
      if (playlist) {
        playlist.updatePlaylist(x)
      }
    };
    this.PreNewPl = function(x) {
      if (playlist) {
        playlist.prenewpl(x)
      }
    };
    this.PlaylistNext = function() {
      if (playlist) {
        playlist.PlaylistNext()
      }
    };
    this.PlaylistHere = function() {
      if (playlist) {
        playlist.PlaylistHere()
      }
    };
    this.PlaylistControls = function() {
      PlaylistControls()
    };

    function PlaylistControls() {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "next") {
            css(b[x].c(), {
              "opacity": (!playlist.PlaylistNextExist() ? 0.5 : 1)
            })
          }
          if (b[x].g("action") == "prev") {
            css(b[x].c(), {
              "opacity": (!playlist.PlaylistPrevExist() ? 0.5 : 1)
            })
          }
        }
      }
    }
    this.PlaylistNextExist = function() {
      if (playlist) {
        return playlist.PlaylistNextExist()
      } else {
        return false
      }
    };
    this.PlaylistPrevExist = function() {
      if (playlist) {
        return playlist.PlaylistPrevExist()
      } else {
        return false
      }
    };
    this.PlaylistExist = function() {
      if (playlist) {
        return playlist.PlaylistExist()
      } else {
        return false
      }
    };
    this.PlaylistRewind = function() {
      if (playlist) {
        playlist.PlaylistRewind()
      }
    };
    this.PlaylistPrev = function() {
      if (playlist) {
        playlist.PlaylistPrev()
      }
    };
    this.PlaylistPlayId = function(x) {
      if (x && playlist) {
        playlist.playById(x)
      }
    };
    this.PlaylistOpenId = function(x) {
      if (x && playlist) {
        playlist.openById(x)
      }
    };
    this.PlaylistMove = function(x) {
      if (x && playlist) {
        css(playlist.co(), {
          "maxHeight": "none",
          "padding-right": playlist.s("bgpaddingright")
        });
        document.getElementById(x).appendChild(playlist.co());
        hide2(playlist.c())
      }
    };
    this.ShowSettingsBut = function() {};
    this.QualityChanged = function(x) {
      if (settings) {
        settings.SetQuality();
        settings.g("show") ? setTimeout(function() {
          settings.hide()
        }, 200) : ''
      }
    };
    this.QualityChangedNoHand = function() {
      if (settings) {
        settings.SetQuality()
      }
      if (o.settings2) {
        o.settings2.update()
      }
    };
    this.AirplayChanged = function(x) {
      if (settings) {
        settings.Airplay()
      }
      Resize();
      ShowOrHide()
    };
    this.SettingChanged = function(x) {
      if (settings) {
        settings.SetSetting(x);
        settings.g("show") ? settings.hide() : ''
      }
      if (o.settings2) {
        o.settings2.update()
      }
      x == "speed" ? SpeedChanged() : ''
    };

    function SpeedChanged() {
      if (o.line_speed) {
        var x = parseFloat(o.custom_speed / o.files_speed.slice(-1)[0], 1).toFixed(2);
        for (var i in b) {
          if (b.hasOwnProperty(i)) {
            if (b[i].s("customline") == "speed" && o.custom_speed) {
              b[i].UpdatePlay(x, 1)
            }
            if (b[i].s("linkurl") == "api:speed,1.0") {
              b[i].UpdateVolume(x)
            }
          }
        }
      }
    }
    this.AudioTrackChangedNoHand = function(x) {
      if (settings) {
        settings.SetSetting("audiotrack")
      }
      if (o.settings2) {
        o.settings2.update()
      }
    };
    this.SubtitleChanged = function() {
      if (settings) {
        settings.SetSubtitle();
        settings.g("show") ? setTimeout(function() {
          settings.hide()
        }, 200) : ''
      }
      if (o.settings2) {
        o.settings2.update()
      }
      if (o.casting && o.tagvideo) {
        o.chromecast.Sub()
      }
    };
    this.SubOpt = function() {
      o.settings2 ? o.settings2.hide() : '';
      if (settings) {
        settings.SubOpt()
      }
    };
    this.SettingsN = function(num, display, val) {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].g("action") == "settings") {
            if (b[x].s("hdicon") == 1) {
              b[x].HdIcon()
            }
          }
          if (b[x].g("action_settings") == "settings#" + num) {
            b[x].set("set#visible", display);
            if (b[x].g("type") == "text") {
              if (val) {
                b[x].UpdateText(NoSpan(val))
              }
            } else {
              if (v.settings['settings' + num + 'action'] == "subtitle") {
                if (val == Lang("off")) {
                  b[x].CustomSwitch(0)
                } else {
                  b[x].CustomSwitch(1)
                }
              }
              Resize()
            }
            ShowOrHideProcessor(b[x])
          }
        }
      }
    };
    this.UpdateSettings = function() {
      if (settings) {
        settings.SetQuality();
        settings.SetSetting("audiotrack");
        settings.SetSetting("download")
      }
    };
    this.RenewPoints = function() {
      var x = FindBut("action", "line");
      if (x) {
        x.RenewPoints()
      }
    };
    this.resize = function() {
      Resize();
      if (toolbarHidden) {
        o.resizeonmouse = true
      }
    };
    this.resizeFromText = function(x) {
      if (!toolbarHidden || x == 1) {
        Resize();
        ShowOrHide()
      } else {
        v.toolbar.resizeme = true
      }
    };
    this.startcss = function() {
      var b = FindBut("type", "css");
      if (b) {
        b.setcss()
      }
    };
    this.refresh = function() {
      ShowOrHide();
      Resize();
      ShowOrHide();
      if (o.nativecontrols) {
        hide2(bg2)
      } else {
        !toolbarHidden ? show2(bg2) : ''
      }
    };
    this.KeyDown = function(event) {
      if (pljssglobalid == v.id && v.hotkey.on == 1) {
        var x = event.which;
        var y = false;
        if (x == undefined) {
          x = event.keyCode
        }
        if (exist(o.vast) || exist(o.pass) || o.stopkeys == 1) {
          return false
        }
        if (o.play && v.hotkey.onplay == 1) {
          y = true
        }
        if (((v.hotkey.space == 1 && x == 32) || (v.hotkey.enter == 1 && x == 13)) && (o.focus || o.mouseHere || y)) {
          if (v.hotkey.icons == 1) {
            PluginHotIcon('play', o.play ? 0 : 1)
          }
          o.actions.Toggle();
          event.preventDefault();
          return false
        }!v.hotkey.vol ? v.hotkey.vol = 0.2 : '';
        !v.hotkey.scale ? v.hotkey.scale = 5 : '';
        if (v.hotkey.nums == 1 && (o.focus || y)) {
          if (o.media.duration() > 0) {
            for (var i = 48; i < 58; i++) {
              if (x == i) {
                o.actions.Seek((o.media.duration() * (x - 48) * 10) / 100, true)
              }
            }
          }
        }
        if (x == 39 && (o.focus || y)) {
          KeyPlusUp(v.hotkey.leftright)
        }
        if (x == 37 && (o.focus || y)) {
          KeyPlusDown(v.hotkey.leftright)
        }
        if (x == 38 && (o.focus || y)) {
          KeyPlusUp(v.hotkey.updown)
        }
        if (x == 40 && (o.focus || y)) {
          KeyPlusDown(v.hotkey.updown)
        }
        if (x == 187 && (o.focus || y)) {
          KeyPlusUp(v.hotkey.plusminus)
        }
        if (x == 189 && (o.focus || y)) {
          KeyPlusDown(v.hotkey.plusminus)
        }
      }
    };

    function FindBut(y, z) {
      for (var x in b) {
        if (b.hasOwnProperty(x)) {
          if (b[x].s(y) == z) {
            return b[x]
          }
        }
      }
    }

    function KeyPlusUp(x) {
      if (x == "next") {
        if (o.playlist) {
          o.controls.PlaylistNext()
        } else {
          x = "seek"
        }
      }
      if (x == "seek") {
        if (o.media.duration() > 0) {
          if (o.media.time() + parseFloat(v.hotkey.seek) < o.media.duration()) {
            o.actions.Seek(o.media.time() + parseFloat(v.hotkey.seek), true)
          }
        }
      }
      if (x == "volume") {
        o.actions.Volume(parseFloat(v.volume) + parseFloat(v.hotkey.vol));
        event.preventDefault()
      }
      if (x == "scale") {
        o.media.scale(v.hotkey.scale / 100);
        event.preventDefault()
      }
      if (v.hotkey.icons == 1) {
        PluginHotIcon(x, 1)
      }
    }

    function KeyPlusDown(x) {
      if (x == "next") {
        if (o.playlist) {
          o.controls.PlaylistPrev()
        } else {
          x = "seek"
        }
      }
      if (x == "seek") {
        if (o.media.duration() > 0 && o.start) {
          o.actions.Seek((o.media.time() - v.hotkey.seek >= 0 ? o.media.time() - v.hotkey.seek : 0), true)
        }
      }
      if (x == "volume") {
        o.actions.Volume(parseFloat(v.volume) - parseFloat(v.hotkey.vol));
        event.preventDefault()
      }
      if (x == "scale") {
        o.media.scale(-v.hotkey.scale / 100);
        event.preventDefault()
      }
      if (v.hotkey.icons == 1) {
        PluginHotIcon(x, 0)
      }
    };
    this.KeyUp = function(event) {
      if (pljssglobalid == v.id) {
        var x = event.which;
        if (x == undefined) {
          x = event.keyCode
        }
        if (x == 57) {
          if (v.log == 1) {}
        }
        if (o.fullscreen && x == 27) {
          o.actions.Normalscreen()
        }
        if (exist(o.vast) || exist(o.pass)) {
          return false
        }
        if (v.hotkey.f == 1 && x == 70 && v.hidevideo != 1 && (o.focus || o.mouseHere)) {
          if (v.hotkey.icons == 1) {
            PluginHotIcon('fullscreen', o.fullscreen ? 0 : 1)
          }
          o.fullscreen ? o.actions.Normalscreen() : o.actions.Fullscreen()
        }
        if (v.hotkey.m == 1 && x == 77 && (o.focus || o.mouseHere)) {
          if (v.hotkey.icons == 1) {
            PluginHotIcon('mute', o.muted ? 1 : 0)
          }
          o.muted ? o.actions.Unmute() : o.actions.Mute()
        }
      }
    };
    this.Remove = function() {
      clearInterval(o.toolbarInterval);
      for (var x in o) {
        if (x.indexOf("control") == 0 && x.indexOf("Interval") > -1) {
          clearInterval(o[x])
        }
      }
      for (var i = 0; i < butNames.length; i++) {
        key = butNames[i];
        if (b[key]) {
          b[key].Remove()
        }
      }
      if (settings) {
        settings.Remove()
      }
      if (playlist) {
        playlist.Remove()
      }
      bg.Remove();
      if (bg2.parentNode == o.frame) {
        o.frame.removeChild(bg2)
      } else {
        o.toolbar ? o.toolbar.removeChild(bg2) : ''
      }
    };
    this.ShowForce = function() {
      ShowForce()
    };
    this.HideForce = function() {
      HideForce();
      ShowOrHide()
    };
    this.HideInterval = function() {
      HideInterval()
    };
    this.ToolbarHidden = function() {
      return toolbarHidden
    }
  };
  var Control = function(key) {
    var i;
    var style = [];
    var w;
    var h;
    var last_text_w = 0;
    var bg;
    var bgcontainer;
    var area;
    var angle = 0;
    var visible = true;
    var selectOpen = false;
    var scaleX = 1;
    var scaleY = 1;
    var tip;
    var tipbg;
    var tiptext;
    var tipcrn;
    var action;
    var actionstt = '';
    var x0;
    var y0;
    var on;
    var over = false;
    var touchmove = false;
    var iconangle = 0;
    var bufferInterval;
    var bufferDeg = 0;
    var rightside = 0;
    var topside = 0;
    var bottomside = 0;
    var noclick = false;
    var zoomed = false;
    var clicked = false;
    var hidden = false;
    var htto;
    var hdicon;
    var imgldd;
    var settingsNumberVisible = false;
    style = UpdateObject(style, default_style.but);
    style = UpdateObject(style, v[key]);
    var actions = [style.action];
    action = actions[0];
    exist(style.action2) ? actions[1] = style.action2 : '';
    exist(style.opposite) ? actions[1] = style.opposite : '';
    exist(style.title) ? style.text = style.title : '';
    if (exist2(style.scalesmall)) {
      o.small ? style.scale = style.scalesmall : ''
    }
    if (action == "share") {
      o.shareme = true
    }
    if (exist(style.linkurl)) {
      if (style.type == "text" && style.linkurl != '') {
        if (exist(v[style.linkurl + 'text'])) {
          style.text = v[style.linkurl + 'text']
        }
      }
      if (style.linkurl.indexOf("settings#") == 0) {
        actionstt = style.linkurl;
        if (style.tiptext == '' && actionstt.indexOf(",") == -1) {
          style.tiptext = Lang(v.settings['settings' + actionstt.substr(9) + 'action'])
        }
      }
      if (style.linkurl.indexOf("captions") > -1) {
        v.hlscaptions = true
      }
      if (style.linkurl.indexOf("share:") > -1) {
        o.shareme = true
      }
      if (style.linkurl == "countdown") {
        style.counter = new PluginCountdown(style)
      }
    }
    var tips = style.tiptext ? style.tiptext.split("///") : [];
    if (style.liketext == 1) {
      style.type = "text";
      style.text = TipText(0) + (actions.length > 1 ? '///' + TipText(1) : '');
      if (exist2(style.iconscolor)) {
        style.color = style.iconscolor
      }
    }
    style.it = [];
    style.il = [];
    var _currentIcon = 0;
    var icons = new Array();
    var icon = new Array();
    var iconsover = new Array();
    var iconspress = new Array();
    var iconreplay = 0;
    var replay;
    if (style.type == "text") {
      if (style.dom) {
        if (exist(v[style.dom + 'text'])) {
          style.text = v[style.dom + 'text']
        }
      }
      if (exist(style.text)) {
        icons[0] = trim(style.text);
        style.lngth = style.text.length;
        var smbls = ['/', '|', '-'];
        smbls.indexOf(style.text.substr(-1)) > -1 ? style.postsmbl = style.text.substr(-1) : '';
        smbls.indexOf(style.text.substr(0, 1)) > -1 ? style.presmbl = style.text.substr(0, 1) : '';
        if (action == "time" || action == "duration") {
          if (style.text.indexOf('0:') == 0) {
            style.timeshort = true
          }
          if (style.text.split(":").length == 3) {
            style.with_hours = true
          } else {
            if (style.text.indexOf('00:00') > -1) {
              style.with_min = true
            }
          }
          if (style.dvrtime == 1) {
            v.dvrtime = 1
          }
        }
        if (style.inversetime == 1 && style.text.indexOf("-") == 0) {
          style.minus4back = true
        }
        if (style.text.indexOf("///") > 0 && (action == "custom" || style.liketext == 1)) {
          style.texts = style.text.split("///");
          style.text = icons[0] = style.texts[0]
        }
      }
      if (v.fonts == 1) {
        setTimeout(ResizeText, 100);
        setTimeout(ResizeText, 500);
        setTimeout(ResizeText, 1000)
      }
    } else {
      if (exist(style.icon)) {
        icons[0] = style.icon;
        if (icons[0].indexOf("///") > 0 && icons[0].indexOf("base64") == -1) {
          icons = style.icon.split("///")
        }
        if (exist(style.icon2)) {
          icons[1] = style.icon2
        }
        if (style.iconsreplay == 1) {
          if (exist2(style.icon3)) {
            icons.push(style.icon3);
            iconreplay = icons.length - 1
          }
        }
      }
    }
    if (action == "custom") {
      if (style.link2 == 1 && exist(style.linkurl2)) {
        style.linkurl0 = style.linkurl
      }
    }
    var control = createElement("div");
    if (style.position == 'timeline') {
      o.timeline ? o.timeline.appendChild(control) : setTimeout(function() {
        o.timeline.appendChild(control)
      }, 100)
    } else {
      if (style.position.indexOf('controls') > -1 && v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
        o.toolbar.appendChild(control)
      } else {
        o.frame.appendChild(control)
      }
      if (action == "buffer" && style.ontop2 == 1) {
        control.style.zIndex = 2001
      }
    }
    if (style.svgtmln == 1) {
      style.tmln = new PlgnCntrlTmln(style, control)
    }
    var bgcontainer = createElement("div");
    control.appendChild(bgcontainer);
    var icns = createElement("div");
    css(icns, {
      "position": "absolute",
      "left": 0,
      "top": 0
    });
    control.appendChild(icns);
    css(control, {
      "position": "absolute",
      "left": 0,
      "top": 0,
      "opacity": 1,
      "fontSize": "14px",
      "lineHeight": "1em"
    });
    if (exist2(style.dom)) {
      attr(control, {
        "id": (v.id + "_" + "control_" + style.dom)
      })
    }
    if (style.rotateplaying == 1) {
      css(icns, {
        "transition": "transform 0.2s linear"
      })
    }
    if (icons.length > 0) {
      for (i = 0; i < icons.length; i++) {
        icon[i] = createElement("div");
        css(icon[i], {
          "position": "absolute",
          "top": 0,
          "left": 0,
          "pointerEvents": "none",
          "opacity": style.a,
          "transition": "opacity 0.1s linear"
        });
        if (style.scaleover > style.scale) {
          css(icon[i], {
            "transition": "opacity 0.1s linear,transform 0.1s linear"
          })
        }
        if (style.type == "pic" && style.src != '') {
          if (exist2(style.dom)) {
            attr(icon[i], {
              "id": (v.id + "_" + "control" + "_" + style.dom + "_" + "icon")
            });
            if (v[style.dom + 'src']) {
              style.src = v[style.dom + 'src']
            }
          }
          if (style.src.indexOf(".png") > -1 || style.src.indexOf(".jpg") > -1 || style.src.indexOf(".gif") > -1 || style.src.indexOf("base64") > -1) {
            style.src.indexOf("//") == -1 && style.src.indexOf("base64") == -1 ? style.src = '//' + style.src : '';
            var z = createElement("img");
            style.loading = 1;
            z.addEventListener("load", imageLoaded);
            z.src = style.src;
            icon[i].appendChild(z);
            style.w = icon[i].offsetWidth;
            style.h = icon[i].offsetHeight;
            if (style.picheight > 0) {
              css(z, {
                height: style.picheight
              })
            }
          }
        }
        if (style.type == "text") {
          css(icon[i], {
            "color": (style.color),
            "fontSize": style.fontsize * existv(v.globalfs, 1),
            "fontFamily": checkFont(style.font),
            "letter-spacing": style.letterspacing + 'px',
            "padding": "0 3px 0 3px",
            "white-space": "nowrap"
          });
          if (o.small) {
            if (exist2(style.fontsizesmall)) {
              css(icon[i], {
                "fontSize": style.fontsizesmall * existv(v.globalfs, 1),
              })
            }
          }
          if (style.click == 1) {
            if (style.text.indexOf("<a ") > -1 || key == "control_title") {
              css(icon[i], {
                "pointerEvents": "auto"
              })
            }
          }
          if (style.bold == 1) {
            css(icon[i], {
              "font-weight": "bold"
            })
          }
          if (style.lineh) {
            css(icon[i], {
              "lineHeight": style.lineh + "em"
            })
          }
          icons[i] == 'live' ? icons[i] = Lang("live") : '';
          icon[i].innerHTML = Places(icons[i]);
          setTimeout(Marquee, 100);
          style.w = icon[i].offsetWidth;
          style.h = icon[i].offsetHeight;
          if (exist2(style.dom)) {
            attr(icon[i], {
              "id": (v.id + "_control_" + style.dom + "_text")
            })
          }
        }
        if (style.type == "css") {
          o.start ? setTimeout(SetCSS, 200) : ''
        }
        var icn = icons[i].toString();
        if (icn.indexOf('var:') == 0) {
          icn = existv(window[icn.substr(4)], '')
        }
        var isvg = icn.indexOf('<svg') > -1 || icn.indexOf('<SVG') > -1;
        if (style.type == "svg" && (icn.indexOf('<g>') > -1 || isvg)) {
          if (action == "mute" || action == "custom") {
            icn = icn.replace(/pjs_/g, 'pjs_' + v.id + key)
          }
          if (icn.indexOf('pointer') > -1) {
            Clickable(icon[i])
          }
          icon[i].innerHTML = (!isvg ? "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" : '') + icn + (!isvg ? "</svg>" : '');
          icon[i].offsetWidth > 20 ? style.w = icon[i].offsetWidth : '';
          icon[i].offsetHeight > 20 ? style.h = icon[i].offsetHeight : '';
          css(icon[i], {
            "width": style.w,
            "height": style.h
          });
          if (style.iconscolor != -1) {
            IconsColor(icon, style.iconscolor)
          }
          if (exist2(style.dom)) {
            attr(icon[i], {
              "id": (v.id + "_control_" + style.dom + "_icon" + i)
            })
          }
        }
        icns.appendChild(icon[i]);
        i > 0 ? hide(icon[i]) : ''
      }
      Background();
      imgldd ? imageLoaded() : '';
      if (style.linkurl == "chromecast") {
        style.chromecast = 1;
        style.hide = 1;
        o.chromecast ? icon[0].innerHTML = o.chromecast.button(style.iconscolor != -1 ? style.iconscolor : '#ffffff') : '';
        if (o.system.mobile) {
          icon[0].ontouchstart = onMobOver;
          icon[0].ontouchend = onOut;
          icon[0].ontouchmove = onMobMove
        } else {
          icon[0].onmouseover = onOver;
          icon[0].onmouseout = onOut;
          icon[0].onmousemove = onMove
        }
      } else {
        if ((bg.offsetWidth * style.scale < 35 || bg.offsetHeight * style.scale < 35) && style.type != 'text') {
          ClickArea();
          Clickable(area)
        } else {
          Clickable(bg)
        }
      }
      if (action == "custom") {
        var lu = '';
        if (style.link == 1 && exist(style.linkurl)) {
          lu = style.linkurl;
          if (lu.indexOf("api:") == 0) {
            var tmp = lu.substr(4).split(",");
            if (tmp.length == 2) {
              var tmp2 = tmp[1].split("/");
              if (tmp2.length == 2) {
                tmp[0] == 'hd' ? tmp[0] = "default_quality" : '';
                if (v[tmp[0]] == tmp2[1]) {
                  style.a = 1;
                  css(icon[0], {
                    "opacity": style.a
                  })
                }
              }
            }
          }
          if (lu == "unblock" || lu == "block") {
            o.actions.Curtain();
            control.style.zIndex = 2001;
            o.stopkeys = 1
          }
        }
        if ((style.hide == 1 && (style.hideafter == 1 || style.hidebefore == 1 || style.hidebefore2 == 1)) || lu.indexOf("skip") == 0) {
          style.often = 1;
          if (indOf([style.position], "control")) {
            style.often2 = 1
          }
        }
      }
      if (action == "settings" && style.hdicon == 1) {
        hdicon = new PluginHdIcon(control, bg, style)
      }
      if (style.click == 0) {
        Pnt0(control)
      }
      if (style.loading == 1) {
        hide(bg)
      }
      if (style.tip == 1) {
        CreateTip()
      }
      if (style.position.indexOf("right") > -1) {
        rightside = 1
      }
      if (style.position.indexOf("top") > -1) {
        topside = 1
      }
      if (style.position.indexOf("bottom") > -1 || style.position.indexOf("control") > -1) {
        bottomside = 1
      }
      Resize();
      var t = '';
      if (style.rotation != 0) {
        t += "rotate(" + style.rotation + "deg)"
      }
      if (style.flipx == 1) {
        t += " scaleX(-1)"
      }
      if (style.flipy == 1) {
        t += " scaleY(-1)"
      }
      if (t != '') {
        css(icns, {
          "transform": t
        })
      }
      if (action == "buffer") {
        BufferStop()
      }
      var tmp = [];
      var i;
      if (action == "playlist") {
        tmp = ['autoplaylist', 'openplaylistafter', 'openplaylistbefore', 'openplaylistpause', 'openplaylistroot', 'playlistrewind'];
        for (i = 0; i < tmp.length; i++) {
          if (exist(style[tmp[i]]) && !exist(v.playlist[tmp[i]])) {
            v.playlist[tmp[i]] = style[tmp[i]]
          }
        }
      }
      if (action == "title") {
        tmp = ['showtitleplaylist', 'addtitleplaylist', 'addtitleplaylistbr'];
        for (i = 0; i < tmp.length; i++) {
          if (exist(style[tmp[i]]) && !exist(options[tmp[i]])) {
            v[tmp[i]] = style[tmp[i]]
          }
        }
      }
      style.tipalways == 1 ? Tip() : '';
      if (action == "custom" && style.on == 0) {
        hide2(control)
      }
      if (style.hide == 1 && style.hideuntilto > 0) {
        setTimeout(Hideuntilto, style.hideuntilto * 1000)
      }
    }

    function Hideuntilto() {
      style.hideuntilto = -1;
      o.controls.refresh()
    }

    function ClickArea() {
      if (area) {
        area.parentNode.removeChild(area)
      }
      area = createElement("div");
      css(area, {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": style.type == "pic" ? bg.offsetWidth : (bg.offsetWidth > 35 ? bg.offsetWidth : 35) * style.clickscalex,
        "height": style.type == "pic" ? bg.offsetHeight : (bg.offsetHeight > 35 ? bg.offsetHeight : 35) * style.clickscaley
      });
      style = MarginPadding(style, 'clickmargin', 'clickmargin');
      control.appendChild(area)
    }

    function Clickable(x) {
      if (action.indexOf("time") == 0 && actions.length == 1) {
        style.click = 0
      }
      if (action == "custom" && style.link == 0) {
        style.click = 0
      }
      if (style.click == 1) {
        if (style.hand == 1) {
          css(x, {
            "cursor": "pointer"
          })
        }
        css(x, {
          "pointerEvents": "auto"
        });
        if (o.system.mobile) {
          x.addEventListener("touchmove", function(e) {
            onMobMove(e)
          });
          x.addEventListener("touchstart", function(e) {
            onMobOver(e)
          });
          x.addEventListener("touchend", function(e) {
            onMobOut(e)
          })
        }
        if (v.desktop == 1 || !o.system.mobile) {
          x.onclick = onClick
        }
        if (v.toolbar.clickarea == 1 || style.clickarea == 1) {
          css(x, {
            "background-color": "#ff0000",
            "opacity": 0.5
          })
        }
      } else {
        css(x, {
          "cursor": "default"
        })
      }
      if (!o.system.mobile) {
        x.onmouseover = onOver;
        x.onmouseout = onOut
      }
      if (style.hidden == 1 || style.tip == 1) {
        x.onmousemove = onMove
      }
    }

    function onMobMove(e) {
      js("touch_" + key);
      e.stopPropagation();
      touchmove = true
    }

    function onMobOver(e) {
      style.mobileover == 1 ? onOver() : '';
      e.stopPropagation()
    }

    function onMobOut(e) {
      e.stopPropagation();
      e.preventDefault();
      style.mobileover == 1 ? onOut() : '';
      if (!touchmove) {
        onClick(e)
      }
      touchmove = false
    }

    function Background() {
      if (bg) {
        bg.parentNode.removeChild(bg)
      }
      bg = createElement("div");
      css(bg, {
        "position": "absolute",
        "top": 0,
        "left": 0
      });
      if (exist2(style.dom)) {
        attr(bg, {
          "id": (v.id + "_control_" + style.dom + "_bg")
        })
      }
      w = style.w;
      h = style.h;
      style.bgt = -1;
      style.bgl = -1;
      style = MarginPadding(style, 'margin', 'margin');
      style = MarginPadding(style, 'marginproc', 'marginproc');
      if (style.mrgnprs && o.small) {
        if (style.mrgnprs != '0 0 0 0') {
          style = MarginPadding(style, 'marginproc', 'mrgnprs')
        }
      }
      if (style.type == "text") {
        w = icon[_currentIcon].offsetWidth;
        h = icon[_currentIcon].offsetHeight;
        if (style.minw > 0) {
          w < style.minw ? w = style.minw : ''
        }
      }
      style = MarginPadding(style, 'bgpadding', 'bgpadding');
      style = MarginPadding(style, 'iconmargin', 'iconmargin');
      if (exist2(style.dom) && exist(v.custom) && style.action == "custom") {
        if (typeof(v.custom) == 'object') {
          for (var i = 0; i < Object.keys(v.custom).length; i++) {
            if (v.custom[i][style.dom]) {
              if (v.custom[i][style.dom] == "off") {
                style.on = 0
              } else {
                var tmp = v.custom[i][style.dom].split(":");
                if (tmp[0] == "margin-left") {
                  if (tmp[1].indexOf("%") > 0) {
                    style.marginprocleft = parseInt(tmp[1])
                  } else {
                    style.marginleft = parseInt(tmp[1])
                  }
                }
              }
            }
          }
        }
      }
      style.h = h;
      style.w = w;
      if (style.bg == 1) {
        h = h + style.bgpaddingtop + style.bgpaddingbottom;
        w = w + style.bgpaddingleft + style.bgpaddingright;
        style.h = h;
        style.w = w;
        if (style.type == "text") {
          style.bgh = icon[0].offsetHeight
        }
      } else {
        style.bga = 0
      }
      css(bg, {
        "width": (style.bgstretch == 1 ? 5000 : w),
        "height": h,
        "borderRadius": (style.bgo * h) / 2,
        "background": hex2rgb(style.bgcolor, style.bga),
        "transition": "background .1s linear, transform .1s linear" + (exist2(style.bgbrovr) ? ', filter .1s linear' : '')
      });
      if (style.type == "pic") {
        css(bg, {
          "width": w,
          "height": h,
          "borderRadius": (style.bgo * h / style.scale) / 2,
        })
      }
      if (style.bglines == 1) {
        Bglines(bg, style.bgcolor, style.bgline1, style.bgline2)
      }
      if (style.bgborder == 1) {
        css(bg, {
          "border": "1px solid " + style.bgbordercolor
        })
      }
      if (style.blur == 1) {
        css(bg, {
          'backdrop-filter': 'blur(8px)'
        })
      }
      bgcontainer.appendChild(bg)
    }

    function Resize() {
      var bgt = (-bg.offsetHeight / 2);
      var bgl = (-bg.offsetWidth / 2);
      if (bgt != style.bgt || bgl != style.bgl) {
        css(bg, {
          "top": (-bg.offsetHeight / 2),
          "left": (-bg.offsetWidth / 2)
        });
        style.bgt = bgt;
        style.bgl = bgl
      }
      if (area) {
        var x = style.type == "pic" ? bg.offsetWidth : (bg.offsetWidth > 35 ? bg.offsetWidth : 35);
        var y = style.type == "pic" ? bg.offsetHeight : (bg.offsetHeight > 35 ? bg.offsetHeight : 35);
        css(area, {
          "top": (-y / 2) + style.clickmargintop - style.clickmarginbottom,
          "left": (-x / 2) + style.clickmarginleft - style.clickmarginright
        })
      }
      for (var i = 0; i < icons.length; i++) {
        var it = style.type == "svg" ? Math.round(parseInt(icon[i].style.height)) / 2 : Math.round(icon[i].offsetHeight) / 2;
        var il = style.type == "svg" ? parseInt(icon[i].style.width) / 2 : icon[i].offsetWidth / 2;
        if (it != style.it[i] || il != style.il[i]) {
          css(icon[i], {
            "top": -it,
            "left": -il
          });
          if (bg) {
            css(icon[i], {
              "top": (int(icon[i].style.top) + style.bgpaddingtop / 2 - style.bgpaddingbottom / 2 + style.iconmargintop / 2 + style.iconmarginbottom / 2),
              "left": (int(icon[i].style.left) + style.bgpaddingleft / 2 - style.bgpaddingright / 2 + style.iconmarginleft / 2 + style.iconmarginright / 2)
            })
          }
          style.it[i] = it;
          style.il[i] = il
        }
      }
    }

    function onOver() {
      var i;
      over = true;
      if (style.iconsover == 1) {
        if (on && exist(style.icon2)) {
          i = 1
        } else {
          i = 0
        }
        if (replay && iconsover.length > 2) {
          i = 2
        }
        if (iconsover[i]) {
          hideAllIcons();
          show(icon[iconsover[i]])
        }
      }
      if (style.bg == 1) {
        css(bg, {
          "background": hex2rgb(exist2v(style.bgcolorover, style.bgcolor), exist2v(style.bgaover, style.bga))
        });
        if (exist2(style.bgbrovr)) {
          css(bg, {
            "filter": "brightness(" + style.bgbrovr + ")"
          })
        }
      }
      if (style.aover > -1 && !selectOpen) {
        for (i = 0; i < icons.length; i++) {
          if (icon[i].style.visibility != "hidden") {
            css(icon[i], {
              "opacity": style.aover
            })
          }
        }
      }
      if (style.iconscolorover != -1) {
        IconsColor(icon, style.iconscolorover)
      }
      if (style.rotateonhover == 1) {
        iconangle = iconangle + 45;
        Rot(icon[0], iconangle)
      }
      if (style.scaleover > style.scale && style.scaleover > -1) {
        scale(style.scaleover)
      }
      if (action == "settings" && o.controls.SettingsVisible()) {} else {
        if (style.tip == 1 && style.tipalways != 1) {
          var x = tips.length > 1 && !on ? tips[1] : tips[0];
          if (x) {
            if (x.indexOf('var:') == 0) {
              tiptext.innerHTML = window[x.substr(4)];
              Tip()
            }
          }
          show(tip);
          css(tip, {
            "opacity": 1
          })
        }
      }
      if (action == "mute") {
        o.actions.volumewheel(true);
        o.volumewheel = true
      }
      o.controlover = true;
      o.controls.Mouse(key, "over")
    }

    function onOut() {
      over = false;
      var i;
      if (style.iconsover == 1) {
        if (on && exist(style.icon2)) {
          i = 1
        } else {
          i = 0
        }
        if (replay && iconsover.length > 2) {
          i = 2
        }
        hideAllIcons();
        show(icon[i])
      }
      if (style.bg == 1) {
        css(bg, {
          "background": hex2rgb(style.bgcolor, style.bga)
        });
        if (exist2(style.bgbrovr)) {
          css(bg, {
            "filter": "brightness(1)"
          })
        }
      }
      if (style.aover > -1) {
        for (i = 0; i < icons.length; i++) {
          if (icon[i].style.visibility != "hidden") {
            css(icon[i], {
              "opacity": style.a
            })
          }
        }
      }
      if (style.scaleover > -1) {
        scale(style.scale)
      }
      if (style.iconscolorover != -1) {
        IconsColor(icon, (style.iconscolor == -1 ? '#ffffff' : style.iconscolor))
      }
      if (action == "mute" && !o.fullscreen) {
        o.actions.volumewheel(false);
        o.volumewheel = false
      }
      TipHide();
      o.controlover = false;
      o.controls ? o.controls.Mouse(key, "out") : ''
    }

    function TipHide() {
      if (style.tip == 1 && style.tipalways != 1) {
        hide(tip);
        css(tip, {
          "opacity": 0
        })
      }
    }

    function onClick(e) {
      e ? e.cancelBubble = true : '';
      if (!noclick) {
        o.controls.ControlClick(key);
        if (action == "custom") {
          CustomToogle()
        }
        TipHide();
        if (style.rotateonclick == 1) {
          iconangle = iconangle + 45;
          Rot(icon[0], iconangle)
        }
        clicked = true;
        if (style.hideafterclick == 1 || (key == "control_start" && style.hide == 1 && style.hideonplay == 1)) {
          o.controls.refresh()
        }
      }
    };
    this.Click = function() {
      onClick()
    };

    function CustomToogle() {
      if (icons) {
        if (icons.length > 1) {
          if (on == true) {
            show(icon[0]);
            hide(icon[1])
          } else {
            show(icon[1]);
            hide(icon[0])
          }
        }
        if (style.tip == 1 && tips.length > 1) {
          tiptext.innerHTML = o.ni + (on == true ? tips[0] : tips[1]) + o.ni2;
          Tip()
        }
      }
      if (exist(style.linkurl0)) {
        if (on == true) {
          style.linkurl = style.linkurl0
        } else {
          style.linkurl = style.linkurl2
        }
      }
      SwitchText();
      on = on != true;
      if (style.linkurl) {
        if (style.linkurl.indexOf(",0/1") > -1) {
          js(style.linkurl, on ? 1 : 0)
        }
      }
      if (style.bg == 1 && exist(style.bgcolorlink2)) {
        if (style.bgcolorlink2 != -1) {
          if (on) {
            style.bgcolorlink0 = style.bgcolor;
            style.bgcolor = style.bgcolorlink2
          } else {
            style.bgcolor = style.bgcolorlink0
          }
          Background();
          Clickable(bg);
          Resize();
          if (style.type == "text") {
            ResizeText()
          } else {
            scale(style.scale)
          }
        }
      }
    }

    function SwitchText() {
      if (exist(style.texts)) {
        if (style.texts.length > 1) {
          if (on == true) {
            UpdateText(style.texts[0])
          } else {
            UpdateText(style.texts[1])
          }
        }
      }
    }

    function ReplayIcon(event) {
      event.cancelBubble = true;
      o.controls.ControlClick(key)
    }

    function hideAllIcons() {
      for (var i = 0; i < icons.length; i++) {
        if (icon[i].style.visibility != "hidden") {
          css(icon[i], {
            "opacity": style.a
          });
          hide(icon[i])
        }
      }
    }

    function Marquee(text) {
      if (icon[0]) {
        if (icon[0].offsetWidth > o.screen_w - style.marginleft - style.marginright - style.bgpaddingleft - style.bgpaddingright) {
          if (style.marquee == 1) {
            if (!text) {
              text = icon[0].innerHTML
            }
            icon[0].innerHTML = '<marquee>' + text + '</marquee>'
          } else {
            css(icon[0], {
              "white-space": "normal"
            })
          }
          css(icon[0], {
            "width": o.screen_w - style.marginleft - style.marginright - style.bgpaddingleft - style.bgpaddingright
          })
        }
      }
    }

    function imageLoaded() {
      if (bg) {
        imgldd = false;
        style.loading = 0;
        hide(bg);
        if (icon[0]) {
          style.w = icon[0].offsetWidth * style.scale;
          style.h = icon[0].offsetHeight * style.scale;
          scale(style.scale)
        }
        style.loaded = 0;
        Background();
        ClickArea();
        Clickable(area);
        show(bg);
        Resize();
        o.controls.resize();
        if (!isVisible(control)) {
          hide2(control)
        }
      } else {
        imgldd = true
      }
    }

    function CancelBubble(event) {
      event.cancelBubble = true
    }

    function onMove() {
      if (!o.system.mobile && !o.controlover) {
        onOver()
      }
      Tip()
    }

    function scale(x) {
      if (x > 0) {
        css(bg, {
          "transform": "scale(" + x + ")"
        });
        for (i = 0; i < icons.length; i++) {
          css(icon[i], {
            "transform": "scale(" + x + ")"
          })
        }
        if (style.tmln) {
          style.tmln.scale(x)
        }
        scaleX = x;
        scaleY = x
      }
    }

    function CreateTip() {
      tip = createElement("div");
      css(tip, {
        'position': 'absolute',
        'left': 0,
        'top': 0,
        'height': 'auto',
        "opacity": 0,
        "transition": "opacity 0.1s linear"
      });
      tipbg = createElement("div");
      style = MarginPadding(style, 'tippadding', 'tippadding');
      style = MarginPadding(style, 'tipmargin', 'tipmargin');
      css(tipbg, {
        'position': 'absolute',
        'left': 0,
        'top': 0,
        'width': '100%',
        'height': 30,
        'background-color': style.tipbgcolor,
        'opacity': style.tipbga,
        'border-radius': style.tipbgrounding
      });
      tiptext = createElement("div");
      css(tiptext, {
        'position': 'absolute',
        'left': style.tippaddingleft,
        'top': style.tippaddingtop,
        'color': style.tipcolor,
        'font-family': checkFont(style.tipfont),
        'font-size': style.tipfontsize * existv(v.globalfs, 1),
        "letter-spacing": style.tipletterspacing + 'px',
        "line-height": "1"
      });
      if (style.tiptext) {
        if (style.tiptext.indexOf("var:") == 0) {
          style.tipvar = true
        }
      }
      if (!style.tipvar) {
        css(tiptext, {
          'white-space': 'nowrap'
        })
      }
      if (style.tippointer == 1) {
        tipcrn = createElement("div");
        tipcrn.innerHTML = '<svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon id="Rectangle" stroke="none" fill="#' + style.tipbgcolor.replace("#", "") + '" fill-rule="evenodd" points="0 0 8 0 4 6"></polygon></svg>'
      }
      if (style.tipalways == 1) {
        css(tip, {
          "opacity": 1
        });
        Clickable(tip)
      } else {
        Pnt0(tip)
      }
      control.appendChild(tip);
      tiptext.innerHTML = o.ni + (style.tiptext == '' ? Lang(action) : tips[0]) + o.ni2;
      tip.appendChild(tipbg);
      tip.appendChild(tiptext);
      if (style.tippointer == 1) {
        tip.appendChild(tipcrn);
        var btm = o.doctype ? '-8px' : '-6px';
        var ps = style.tippointeralign;
        if (!exist(ps)) {
          ps = ''
        }
        var tp = ps.indexOf("top") > -1;
        if (tp) {
          Rot(tipcrn, '-180')
        }
        css(tipcrn, {
          'position': 'absolute',
          'right': (ps.indexOf("right") > -1 ? 10 * style.scale : 'auto'),
          'left': (ps.indexOf("left") > -1 ? 10 * style.scale : (ps == '' || ps == 'top' ? '50%' : 'auto')),
          'margin-left': (ps == '' || ps == 'top' ? '-4px' : 0),
          'bottom': (tp ? 'auto' : btm),
          'top': (tp ? btm : 'auto'),
          'opacity': style.tipbga
        })
      }
      Tip()
    }

    function Tip() {
      if (style.tip == 1) {
        css(tip, {
          "top": (bottomside == 1 ? -h - tip.offsetHeight + 3 : -tip.offsetHeight / 2) + style.tipmargintop - style.tipmarginbottom,
          "left": (rightside == 1 ? -tiptext.offsetWidth : (bottomside == 1 ? -w / 2 : +tiptext.offsetWidth)) - (bottomside == 1 ? 0 : tiptext.offsetWidth / 2 + 5) + style.tipmarginleft - style.tipmarginright,
          "height": style.tippaddingtop + tiptext.offsetHeight + style.tippaddingbottom,
          "width": style.tippaddingleft + tiptext.offsetWidth + style.tippaddingright
        });
        css(tipbg, {
          'height': tip.offsetHeight
        });
        tip.style.zIndex = "1000"
      }
    }
    this.c = function() {
      return control
    };
    this.s = function(x) {
      return style[x]
    };
    this.ss = function(x, x2) {
      return exist(style[x]) ? style[x][x2] : false
    };
    this.g = function(x) {
      switch (x) {
        case "width":
          return w;
          break;
        case "height":
          return h;
          break;
        case "h":
          return existv(style.bgh, h);
          break;
        case "x":
          return int(control.style.left);
          break;
        case "y":
          return int(control.style.top);
          break;
        case "opacity":
          return control.style.opacity ? control.style.opacity : 1;
          break;
        case "show":
          return visible;
          break;
        case "scaleX":
          return scaleX;
          break;
        case "scaleY":
          return scaleY;
          break;
        case "action":
          return action;
          break;
        case "action_settings":
          return actionstt;
          break;
        case "clicked":
          return clicked;
          break;
        case "type":
          return style.type;
          break;
        case "length":
          return style.lngth ? style.lngth : 0;
          break;
        case "key":
          return key;
          break;
        case "x0":
          return x0;
          break;
        case "y0":
          return y0;
          break;
        case "over":
          return over;
          break;
        case "settings#":
          return actionstt.indexOf("settings#") == 0;
          break;
        case "settings:":
          return actionstt.indexOf("settings:") == 0;
          break;
        case "ctxt":
          return action == "custom" && style.type == "text";
          break;
        case "set#visible":
          return settingsNumberVisible;
          break;
        default:
          return false
      }
    };
    this.set = function(k, x) {
      switch (k) {
        case "show":
          over ? onOut() : '';
          visible = x;
          break;
        case "display":
          DisplayControl(x);
          break;
        case "show2":
          show2(control);
          break;
        case "hide2":
          hide2(control);
          break;
        case "unhidden":
          style.hidden = 0;
          break;
        case "hidetime":
          if (style.hidesec > 0 && style.hidden != 1 && !htto) {
            clearTimeout(htto);
            htto = setTimeout(function() {
              hide2(control);
              style.hidden = 1;
              htto = undefined
            }, style.hidesec * 1000)
          }
          break;
        case "scale":
          scale(x);
          break;
        case "scale0":
          css(control, {
            "transform": "scale(0)"
          });
          break;
        case "scaleX":
          css(control, {
            "transform": "scaleX(" + x + ")"
          });
          scaleX = x;
          break;
        case "scaleY":
          css(control, {
            "transform": "scaleY(" + x + ")"
          });
          scaleY = x;
          break;
        case "opacity":
          css(control, {
            "opacity": x
          });
          break;
        case "iconopacity":
          css(icon[0], {
            "opacity": x
          });
          break;
        case "saturate":
          css(icon[0], {
            "filter": "saturate(" + x + ")"
          });
          break;
        case "left":
          css(control, {
            "left": x
          });
          break;
        case "top":
          css(control, {
            "top": x
          });
          break;
        case "width":
          css(control, {
            "width": x
          });
          break;
        case "height":
          css(control, {
            "height": x
          });
          break;
        case "over_final":
          style.over_final = x;
          break;
        case "rightside":
          rightside = x;
          break;
        case "set#visible":
          settingsNumberVisible = x;
          break;
        case "x":
          css(control, {
            "left": x
          });
          break;
        case "y":
          css(control, {
            "top": x
          });
          break;
        case "animation":
          style.animation = x;
          break;
        case "skip":
          style.skip = x;
          break;
        case "x0":
          x0 = x;
          break;
        case "y0":
          y0 = x;
          break;
        case "hdnn":
          style.hdnn = x;
          break;
        default:
          return false
      }
    };

    function DisplayControl(x) {
      if (x && o.system.mobile) {
        noclick = true;
        setTimeout(noClickTimeout, 300)
      }
      if (!x) {
        if (style.iconsreplay == 1 && replay) {
          hide(icon[iconreplay]);
          show(icon[0]);
          replay = false
        }
      }
      if (style.loading == 1) {
        x ? show(control) : hide(control)
      } else {
        if (key == "control_time" || key == "control_duration") {
          x ? show(control) : hide(control)
        } else {
          css(control, {
            "display": (x ? "block" : "none")
          })
        }
        visible = x;
        x ? show(control) : ''
      }
      if (x && style.resizetxt) {
        style.resizetxt = false;
        setTimeout(ResizeText, 100)
      }
    }

    function noClickTimeout() {
      noclick = false
    }
    this.UpdateText = function(x, y) {
      if (actionstt != '' && (style.text == 'x' || style.text == '1x')) {
        x = x + 'x'
      }
      if (y) {
        x = style.text + x
      }
      UpdateText(x);
      !isVisible(control) ? style.resizetxt = true : ''
    };
    this.CustomText = function(x) {
      style.customtext = x;
      UpdateText(x);
      o.controls ? o.controls.resize() : ''
    };
    this.Rotate = function() {
      Rot(icns, angle);
      angle += 20
    };

    function Rot(x, y) {
      css(x, {
        "transform": "rotate(" + y + "deg)" + (x == icon[0] && !zoomed && scaleX != 1 ? ' scale(' + scaleX + ')' : '')
      })
    };
    this.RenewFromTitle = function(x) {
      if (style.text.indexOf("{title") > -1) {
        UpdateText(style.text)
      }
    };
    this.CustomToogle = function() {
      CustomToogle()
    };

    function UpdateText(text) {
      if (style.type == "text") {
        if (exist(text)) {
          if (style.with_hours) {
            if (text.length == 4) {
              text = (style.timeshort ? '0:0' : '00:0') + text
            }
            if (text.length == 5) {
              text = (style.timeshort ? '0:' : '00:') + text
            }
            if (text.length == 7) {
              text = (style.timeshort ? '' : '0') + text
            }
          }
          if (style.with_min) {
            if (text.length == 4) {
              text = '0' + text
            }
          }
          style.lngth = text.length
        }
        text = (style.presmbl ? style.presmbl + (style.minus4back ? '' : ' ') : '') + text + (style.postsmbl ? ' ' + style.postsmbl : '');
        var prevorius_default_w = icon[0].offsetWidth + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
        var prevorius_default_h = icon[0].offsetHeight + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
        icon[0].innerHTML = o.ni + (action == "custom" ? Places(text) : text) + o.ni2;
        if (style.triangle == 1) {
          icon[0].innerHTML += '<span style="display:inline-block;width:10px"></span><span style="border-top: 3px solid ' + CheckColor(style.color) + ';border-left: 3px solid transparent;border-right: 3px solid transparent;position: absolute;right:3px;top: 50%;margin-top: -1px;"></span>'
        }
        if (action == "title") {
          css(icon[0], {
            "width": "auto",
            "white-space": "nowrap"
          });
          Marquee(text)
        }
        style.w = icon[0].offsetWidth + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
        style.h = icon[0].offsetHeight + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
        if (prevorius_default_w != style.w || prevorius_default_h != style.h || (style.w > 0 && last_text_w == 0)) {
          ResizeText()
        }
        if (icon[0].offsetWidth > 0) {
          last_text_w = style.w
        } else {
          actionstt != '' ? hide(icon[0]) : '';
          if (text != '') {
            setTimeout(ResizeText, 10)
          }
        }
      }
    }
    this.ResizeText = function() {
      ResizeText()
    };

    function ResizeText() {
      if (style.type == "text") {
        if (icon[0]) {
          if (icon[0].offsetWidth > 0) {
            actionstt != '' ? show(icon[0]) : '';
            w = style.w = icon[0].offsetWidth;
            h = style.h = icon[0].offsetHeight;
            Background();
            Clickable(bg);
            Resize();
            o.controls ? o.controls.resizeFromText() : ''
          }
        }
      }
    }
    this.UpdateVolume = function(x) {
      if (style.displayvolume == 1) {
        var n = 4;
        if (key == "control_mute") {
          if (o.system.mobile) {
            return
          }
        } else {
          n = 8
        }
        var y = 'pjs_';
        var z = [];
        for (var i = 1; i < n; i++) {
          z[i] = document.getElementById(y.concat(v.id, key, 'volume_element', i))
        }
        if (z[1]) {
          for (var i = 1; i < n; i++) {
            z[i] ? hide(z[i]) : ''
          }
          if (n == 4) {
            for (var i = 1; i < n; i++) {
              x > (i / n) && z[i] ? show(z[i]) : ''
            }
          } else {
            for (var i = n; i > 0; i--) {
              if (x * 1 + (1 / n) >= (i / n) && z[i]) {
                show(z[i]);
                break
              }
            }
          }
        }
      }
    };
    this.On = function() {
      if (!on) {
        if (icons) {
          if (icons.length > 1 && actions.length > 1) {
            hide(icon[0]);
            show(icon[1])
          }
        }
        if (actions.length > 1) {
          action = actions[1];
          if (style.tip == 1) {
            tiptext.innerHTML = TipText(1);
            Tip()
          }
        }
        if (style.iconsreplay == 1 && replay) {
          hide(icon[iconreplay]);
          replay = false
        }
        SwitchText();
        on = true
      }
    };

    function TipText(x) {
      return o.ni + (style.tiptext == '' ? Lang(actions[x]) : (tips.length > 1 ? tips[x] : tips[0])) + o.ni2
    }
    this.CustomSwitch = function(x) {
      CustomSwitch(x)
    };
    this.Tmln = function(x, y) {
      if (style.tmln) {
        style.tmln.update(x, y)
      }
    };

    function CustomSwitch(x) {
      var y = 'pjs_';
      var z = document.getElementById(y.concat(v.id, key, 'slider'));
      if (z) {
        css(z, {
          "transition": "transform 0.1s ease-out"
        });
        if (x == 1) {
          z.style.transform = 'translate(0, 0)'
        } else {
          z.style.transform = 'translate(-7px, 0)'
        }
      } else {
        if (x == 1) {
          style.a = 1
        } else {
          style.a = 0.5
        }
      }
      on = x == 1;
      if (style.tip == 1 && tips.length > 1) {
        tiptext.innerHTML = (on ? tips[0] : tips[1])
      }
      css(icon[0], {
        "opacity": style.a
      })
    };
    this.Off = function() {
      if (on) {
        if (icons) {
          if (icons.length > 1 && actions.length > 1) {
            show(icon[0]);
            hide(icon[1]);
            css(icon[0], {
              "opacity": style.a
            })
          }
        }
        action = actions[0];
        if (actions.length > 1) {
          if (style.tip == 1) {
            tiptext.innerHTML = TipText(0);
            Tip()
          }
        }
        SwitchText();
        on = false;
        replay = false
      }
    };
    this.ReplayIcon = function() {
      if (style.iconsreplay == 1) {
        hideAllIcons();
        show(icon[iconreplay]);
        replay = true
      }
    };
    this.Buffer = function() {
      var stop = false;
      if (style.hide == 1 && style.hidewithposter == 1) {
        if (isVisible(o.poster)) {
          stop = true
        }
      }
      if (!stop) {
        show2(control);
        var items = control.getElementsByTagName("*");
        for (var i = items.length; i--;) {
          css(items[i], {
            "animation-play-state": "running"
          })
        }
        visible = true
      }
    };
    this.BufferStop = function() {
      BufferStop()
    };

    function BufferStop() {
      hide2(control);
      var items = control.getElementsByTagName("*");
      for (var i = items.length; i--;) {
        css(items[i], {
          "animation-play-state": "paused"
        })
      }
      visible = false
    }
    this.Remove = function() {
      if (icons.length > 0) {
        for (i = 0; i < icons.length; i++) {
          if (icon[i].parentNode == control) {
            control.removeChild(icon[i])
          }
          icon[i] = null
        }
      }
      if (bg) {
        bg.removeAttribute("onclick");
        bg.removeAttribute("onmouseover");
        bg.removeAttribute("onmouseout");
        bg.parentNode.removeChild(bg);
        bg = null
      }
      if (style.position == 'timeline') {
        if (control.parentNode == o.timeline) {
          o.timeline.removeChild(control)
        }
      } else {
        if (control.parentNode == o.frame) {
          o.frame.removeChild(control)
        } else {
          if (o.toolbar) {
            if (control.parentNode == o.toolbar) {
              o.toolbar.removeChild(control)
            }
          }
        }
      }
      if (tip) {
        if (tip.parentNode == control) {
          control.removeChild(tip)
        }
      }
      control = null
    };
    this.HdIcon = function() {
      hdicon ? hdicon.toggle() : ''
    };
    this.setcss = function() {
      SetCSS()
    };

    function SetCSS() {
      controlCSS(icons[0], style.color, icon[0])
    }

    function Places(x) {
      var z = x + '';
      if (x.indexOf('{') > -1) {
        if (x.indexOf('{time}') > -1 && exist(o.continue)) {
          x = x.replace('{time}', timeFormat(o.continue.flag().t))
        }
        if (x.indexOf('{title') > -1) {
          var y = o.titlestore ? o.titlestore : (v.title ? v.title : '');
          if (x.indexOf('{title2}') > -1 && o.controls) {
            x = x.replace('{title2}', o.controls.PlaylistG('title2'))
          }
          if (o.butplstart && o.controls) {
            y = o.controls.PlaylistG('butplstart')
          }
          x = x.replace('{title}', y);
          if (o.butplstart && !o.controls) {
            setTimeout(UpdateText, 100, z)
          }
        }
        if (x.indexOf('{text') > -1) {
          for (var i = 1; i < 6; i++) {
            if (x.indexOf('{text' + i + '}') > -1) {
              if (exist(v['text' + i])) {
                x = x.replace('{text' + i + '}', v['text' + i])
              } else {
                x = x.replace('{text' + i + '}', '')
              }
            }
          }
        }
        if (x.indexOf('{next}') > -1) {
          o.ctxtnk = key;
          if (o.controls) {
            x = x.replace('{next}', o.controls.PlaylistG('nxtttl'))
          }
        }
      }
      return x
    }
    this.UpText = function() {
      UpdateText(style.text)
    };

    function IconsColor(icon, clr) {
      for (var i = 0; i < icon.length; i++) {
        SvgColor(icon[i], clr)
      }
      if (style.linkurl == "chromecast") {
        if (o.chromecast) {
          o.chromecast.Color(icon[0], clr)
        }
      }
    }
  };
  var ControlLine = function(key, action) {
    var i;
    var style = [];
    var w;
    var h;
    var bg;
    var visible = true;
    var x0;
    var y0;
    var scaleX = 1;
    var scaleY = 1;
    var topBg = 0;
    var leftBg = 0;
    var alphas;
    var mouseDown;
    var mouseUp;
    var over;
    var click;
    var handle;
    var _duration_load;
    var _duration_play;
    var _time_load;
    var _time_play;
    var tip;
    var tiptext;
    var tipcrn;
    o.current_thumb = -1;
    var lastTouch;
    var over;
    var onup_to;
    for (i in default_style.but) {
      style[i] = default_style.but[i]
    }
    var action = v[key].action;
    var type = v[key].type;
    for (i in default_style[action]) {
      style[i] = default_style[action][i]
    }
    for (i in v[key]) {
      style[i] = v[key][i]
    }
    style.w = parseInt(style.w);
    style.h = parseInt(style.h);
    style = MarginPadding(style, 'margin', 'margin');
    style = MarginPadding(style, 'marginproc', 'marginproc');
    if (o.small) {
      if (style.wps > 0) {
        style.w = parseInt(style.wps)
      }
      if (style.mrgnprs) {
        if (style.mrgnprs != '0 0 0 0') {
          style = MarginPadding(style, 'marginproc', 'mrgnprs')
        }
      }
    }
    var control = createElement("div");
    if (v.toolbar.hidedown == 1 && v.toolbar.hide == 1) {
      o.toolbar.appendChild(control)
    } else {
      o.frame.appendChild(control)
    }
    action == "line" ? o.timeline = control : '';
    var _cul = false;
    if (style.customline) {
      if (style.customline != 'volume') {
        _cul = true
      }
    }
    css(control, {
      "position": "absolute",
      "top": 0,
      "left": 0,
      "opacity": 1,
      "fontSize": "14px",
      "lineHeight": "1em"
    });
    if (style.ontop == 1) {
      control.style.zIndex = style.order
    }
    Background();
    var lines = createElement("div");
    css(lines, {
      "position": "absolute",
      "bottom": Math.round(-style.h / 2),
      "left": Math.round(-style.w / 2)
    });
    if (style.rounding > 0 && style.roundout == 1) {
      css(lines, {
        "border-radius": style.rounding * style.h / 2,
        "height": style.h,
        "overflow": "hidden",
        "pointer-events": "none"
      })
    }
    if (exist2(style.dom)) {
      attr(control, {
        "id": (v.id + "_control_" + style.dom)
      })
    }
    control.appendChild(lines);
    if (action == 'line' && v.thumbs == 1) {
      CreateThumb()
    }
    if (style.tip == 1) {
      CreateTip()
    }
    var line0 = createElement("div");
    StyleLine(0, line0, 0.3, (style.gradient == 1 ? "linear-gradient(" + (style.grdlft == 1 ? "to left," : '') + CheckColor(style.gradientcolorbg) + ", " + CheckColor(style.colorbg) + ")" : CheckColor(style.colorbg)), style.w, style.abg);
    if (style.customdesign == 1 && exist(style.customdesignsvg)) {
      var svg0 = createElement("div");
      svg0.innerHTML = style.customdesignsvg.replace(/\#FFFFFF/g, CheckColor(style.colorbg));
      line0.appendChild(svg0);
      css(svg0, {
        "position": "absolute",
        "bottom": -Math.round(style.h / 2),
        "left": 0,
        "pointer-events": "none"
      });
      css(line0, {
        "overflow": "hidden",
        "background": "none"
      });
      var x = ["path", "polygon", "polyline", "rect", "ellipse"];
      for (var y = 0; y < x.length; y++) {
        var z = svg0.querySelectorAll("svg " + x[y]);
        if (z.length > 0) {
          for (var y2 = 0; y2 < z.length; y2++) {
            z[y2].style.fill = CheckColor(style.colorbg)
          }
        }
      }
    }
    lines.appendChild(line0);
    var lines1 = [];
    var line1 = createElement("div");
    StyleLine(1, line1, style.linespeed1, (style.gradient == 1 ? "linear-gradient(" + (style.grdlft == 1 ? "to left," : '') + CheckColor(style.gradientcolorload) + ", " + CheckColor(style.colorload) + ")" : style.colorload), 0, style.aload);
    lines.appendChild(line1);
    if (style.aover > 0) {
      var line2 = createElement("div");
      StyleLine(2, line2, style.linespeed2, style.colorover, 0, style.aover);
      lines.appendChild(line2)
    }
    var line3 = createElement("div");
    StyleLine(3, line3, style.linespeed3, (style.gradient == 1 ? "linear-gradient(" + (style.grdlft == 1 ? "to left," : '') + CheckColor(style.gradientcolor) + ", " + CheckColor(style.color) + ")" : style.color), 0, style.a);
    if (style.customdesign == 1 && exist(style.customdesignsvg)) {
      var svg3 = createElement("div");
      svg3.innerHTML = style.customdesignsvg.replace(/\#FFFFFF/g, CheckColor(style.color));
      css(svg3, {
        "position": "absolute",
        "bottom": -Math.round(style.h / 2),
        "left": 0,
        "pointer-events": "none"
      });
      css(line3, {
        "overflow": "hidden",
        "background": "none"
      });
      line3.appendChild(svg3)
    }
    if (style.value == 1) {
      var line3value = createElement("div");
      style = MarginPadding(style, 'valuepadding', 'valuepadding');
      style = MarginPadding(style, 'valuemargin', 'valuemargin');
      css(line3value, {
        "position": "absolute",
        "bottom": style.h / 2,
        "left": 0,
        "pointer-events": "none",
        "font-size": style.valuesize * existv(v.globalfs, 1),
        "color": style.valuecolor,
        "line-height": "100%",
        "padding-top": style.valuepaddingtop,
        "padding-bottom": style.valuepaddingbottom,
        "padding-left": style.valuepaddingleft,
        "padding-right": style.valuepaddingright,
        "margin-top": style.valuemargintop,
        "margin-bottom": style.valuemarginbottom,
        "margin-left": style.valuemarginleft,
        "margin-right": style.valuemarginright,
        "border-radius": (style.valuerounding + "px"),
        "display": "none"
      });
      if (style.valuebg == 1) {
        css(line3value, {
          "background": CheckColor(style.valuebgcolor)
        })
      }
      line3.appendChild(line3value);
      var l3v_show = false;
      var l3v_left = false
    }
    o.timeline_h = style.h;
    lines.appendChild(line3);
    if (style.pointed == 1) {
      var points = [];
      if (typeof PluginPoints !== "undefined") {
        var pnt = new PluginPoints(control, points, w, style)
      }
    }
    if (style.handle == 1) {
      if (style.handleicon.toString().indexOf('<svg') == -1) {
        style.handleicon == '' ? style.handleicon = "<svg width='20' height='20'><g><ellipse ry='5' rx='5' cy='10' cx='10' fill='#fff'/></g></svg>" : ''
      }
      handle = createElement("div");
      handle.innerHTML = style.handleicon.toString();
      style = MarginPadding(style, 'handlemargin', 'handlemargin');
      css(handle, {
        "position": "absolute",
        "top": -10 + style.handlemargintop - style.handlemarginbottom,
        "left": -1000,
        "pointer-events": "none",
        "height": 20,
        "width": style.handle_width,
        "opacity": style.handlea,
        "transition": "transform 0.1s linear, opacity 0.1s linear"
      });
      if (style.handlehide == 1 || style.handlehideinit == 1) {
        css(handle, {
          "transform": "scale(0)"
        })
      } else {
        if (style.handlescale != 1) {
          css(handle, {
            "transform": "scale(" + style.handlescale + ")"
          })
        }
      }
      control.appendChild(handle);
      if (style.handlecolor != -1) {
        var x = ["path", "rect", "ellipse"];
        for (var y = 0; y < x.length; y++) {
          var z = handle.querySelectorAll("svg " + x[y]);
          if (z.length > 0) {
            for (var y2 = 0; y2 < z.length; y2++) {
              z[y2].style.fill = CheckColor(style.handlecolor)
            }
          }
        }
      }
      style.handlewidth = handle.offsetWidth
    }
    if (style.rotation != 0) {
      css(control, {
        "transform": "rotate(" + style.rotation + "deg)"
      })
    }
    if (style.hidden == 1) {
      hide(control);
      visible = false
    }
    if (action == "volume") {
      if (style.hide == 1 && style.hideoutmute == 1) {
        o.hidden_volume = true;
        style.hidden = true
      } else {
        o.hidden_volume = false
      }
    }
    style.vertical = 0;
    if (style.rotation != 0) {
      style.rotation2 = Math.abs(style.rotation);
      if (style.rotation2 > 45 && style.rotation2 < 135) {
        style.vertical = 90
      }
      if (style.rotation2 > 225 && style.rotation2 < 315) {
        style.vertical = 270
      }
    }
    if (_cul) {
      o.line_speed = style.customline == "speed";
      w = style.w;
      UpdatePlay(1, o.files_speed.slice(-1)[0], "no")
    }

    function StyleLine(n, x, y, z, _w, _a) {
      css(x, {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "width": _w,
        "height": (style['h' + n] > 0 ? style['h' + n] : style.h),
        "background": z ? (z.indexOf("linear") > -1 ? z : CheckColor(z)) : '',
        "border-radius": (style.roundout == 1 ? 1 : style.rounding * style.h / 2),
        "opacity": _a,
        "pointer-events": "none",
        "transition": "transform 0.2s ease-in-out"
      })
    }

    function Background() {
      bg = createElement("div");
      style = MarginPadding(style, 'bgpadding', 'bgpadding');
      var bgh = style.h + style.bgpaddingtop + style.bgpaddingbottom;
      var bgw = style.w + style.bgpaddingleft + style.bgpaddingright;
      if (style.bg == 1) {} else {
        style.bga = 0
      }
      style = MarginPadding(style, 'clickmargin', 'clickmargin');
      if (v.toolbar.clickarea == 1 || style.clickarea == 1) {
        style.bgcolor = '#ff0000';
        style.bg = 1;
        style.bga = 0.5
      }
      css(bg, {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": bgw,
        "height": bgh * style.clickscaley,
        "borderRadius": (style.bgo * bgh) / 2,
        "background": hex2rgb(style.bgcolor, style.bga),
        "pointerEvents": "auto",
        "transition": "opacity .1s linear, background .1s linear"
      });
      if (style.blur == 1) {
        css(bg, {
          'backdrop-filter': 'blur(8px)'
        })
      }
      if (style.bgborder == 1) {
        css(bg, {
          "border": "1px solid #" + style.bgbordercolor
        })
      }
      if (style.click == 1) {
        if (style.hand == 1) {
          css(bg, {
            "cursor": "pointer"
          })
        }
        if (!o.system.mobile || v.desktop == 1) {
          bg.onclick = onClick;
          bg.onmouseup = onUp;
          bg.onmousedown = onDown;
          bg.onmousemove = onMove
        }
      } else {
        css(bg, {
          "cursor": "default"
        })
      }
      if (!o.system.mobile) {
        bg.onmouseover = onOver;
        bg.onmousemove = onMove;
        bg.onmouseout = onOut
      }
      if (o.system.mobile) {
        bg.addEventListener("touchstart", function(event) {
          event.cancelBubble = true;
          if (!exist(event.clientX) && event.touches.length > 0) {
            event.clientX = event.touches[0].pageX;
            event.clientY = event.touches[0].pageY
          }
          lastTouch = event;
          onOver(event);
          onDown(event)
        });
        bg.addEventListener("touchend", function(event) {
          event.cancelBubble = true;
          o.mouseDown = false;
          onOut(event);
          onUp(lastTouch)
        });
        bg.addEventListener("click", function(event) {
          event.cancelBubble = true
        });
        bg.addEventListener("touchmove", function(event) {
          if (!exist(event.clientX) && event.touches.length > 0) {
            event.clientX = event.touches[0].pageX;
            event.clientY = event.touches[0].pageY
          }
          lastTouch = event;
          o.mouseDown = true;
          onMove(event)
        })
      }
      css(bg, {
        "left": Math.ceil(-style.w / 2 - style.bgpaddingleft)
      });
      css(bg, {
        "top": Math.ceil(-style.h / 2 - style.bgpaddingtop + style.clickmargintop - style.clickmarginbottom)
      });
      if (style.bglines == 1) {
        Bglines(bg, style.bgcolor, style.bgline1, style.bgline2)
      }
      control.appendChild(bg)
    }

    function Resize(width) {
      if (width != w) {
        w = width;
        o.timeline_w = w;
        var delta = w / line0.offsetWidth;
        css(bg, {
          "width": (w + style.bgpaddingleft + style.bgpaddingright),
          "left": -w / 2 - style.bgpaddingleft,
        });
        css(lines, {
          "left": -w / 2
        });
        css(line0, {
          "width": w
        });
        css(lines, {
          "width": w
        });
        var xx = line1.offsetWidth * delta;
        if (xx > line0.offsetWidth) {
          xx = line0.offsetWidth
        }
        css(line1, {
          "width": xx
        });
        var wp = line3.offsetWidth * delta;
        css(line3, {
          "width": wp
        });
        HandleWidth(wp);
        if (action == "line") {
          Continue()
        }
        if (style.pointed == 1) {
          pnt ? pnt.place(w) : ''
        }
        if (o.cut) {
          o.cut.Resize()
        }
      }
    }

    function HandleWidth(x) {
      if (style.handle == 1) {
        if (x < style.handlewidth / 2 && style.handle_width != 20) {
          x = style.handlewidth / 2
        }
        if (x > w - style.handlewidth / 2 && style.handle_width != 20) {
          x = w - style.handlewidth / 2
        }
        var y = x - w / 2 - style.handlewidth / 2 + style.handlemarginleft - style.handlemarginright;
        css(handle, {
          "left": y
        })
      }
    }

    function ShowHandle() {
      css(handle, {
        "transform": "scale(" + style.handlescale + ")"
      })
    }

    function onOver(event) {
      o.controls.Mouse(key, "over");
      if (style.bg == 1) {
        if (style.bgaover != -1) {
          var m = new Motion({
            "mc": bg,
            "type": "alpha_div",
            "to": style.bgaover,
            "time": 0.1,
            "me": (key + "bg")
          })
        }
        if (exist2(style.bgcolorover)) {
          css(bg, {
            "background-color": style.bgcolorover
          })
        }
      }
      if (exist2(style.coloroverplay)) {
        css(line3, {
          "background-color": style.coloroverplay
        })
      }
      if (style.handle == 1) {
        if (style.handleiconsover == 1 && exist(style.handleiconover)) {
          if (style.handleiconspress == 1 && mouseDown) {} else {
            handle.innerHTML = "<svg width='" + style.handle_width + "' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleiconover.toString() + "</svg>"
          }
        }
        if (style.handlehide == 1) {
          if (style.handlehideinit == 1 && !o.start) {} else {
            ShowHandle()
          }
        } else {
          if (style.handleaover != -1) {
            var m2 = new Motion({
              "mc": handle,
              "type": "alpha_div",
              "to": style.handleaover,
              "time": 0.1,
              "me": (key + "handle")
            })
          }
        }
      }
      if (style.tip == 1 && (o.media.duration() > 0 || action == "volume" || _cul)) {
        ShowTip()
      }
      if (style.expand > 0) {
        css(bg, {
          "transform": "scaleY(" + ((style.expand - 1) / 5 + 1) + ")"
        });
        LineScale(style.expand)
      }
      if (style.handle == 1 && style.handlemove == 1) {
        HandleWidth(Zoomed(event.clientX) - leftBg)
      }
      if (action == "volume") {
        o.actions.volumewheel(true);
        o.volumewheel = true
      }
      over = true;
      o.controlover = true
    }

    function LineScale(x) {
      css(line0, {
        "transform": "scaleY(" + x + ")"
      });
      css(line1, {
        "transform": "scaleY(" + x + ")"
      });
      line2 ? css(line2, {
        "transform": "scaleY(" + x + ")"
      }) : '';
      css(line3, {
        "transform": "scaleY(" + x + ")"
      })
    }

    function onOut() {
      if (!mouseUp) {
        if (style.aover > 0) {
          css(line2, {
            "width": 0
          })
        }
        if (exist2(style.coloroverplay)) {
          css(line3, {
            "background-color": style.color
          })
        }
        if (style.bg == 1) {
          if (style.bgaover != -1) {
            var m = new Motion({
              "mc": bg,
              "type": "alpha_div",
              "to": style.bga,
              "time": 0.1,
              "me": (key + "bg")
            })
          }
          if (exist2(style.bgcolorover)) {
            css(bg, {
              "background-color": style.bgcolor
            })
          }
        }
        if (style.handle == 1) {
          if (style.handleiconsover == 1 && exist(style.handleiconover)) {
            if (style.handleiconspress == 1 && mouseDown) {} else {
              handle.innerHTML = "<svg width='" + style.handle_width + "' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleicon.toString() + "</svg>"
            }
          }
          if (style.handlehide == 1) {
            css(handle, {
              "transform": "scale(0)"
            })
          } else {
            if (style.handleaover != -1) {
              var m2 = new Motion({
                "mc": handle,
                "type": "alpha_div",
                "to": style.handlea,
                "time": 0.1,
                "me": (key + "handle")
              })
            }
          }
        }
        if (style.expand > 0) {
          css(bg, {
            "transform": "scaleY(1)"
          });
          LineScale(1)
        }
        if (action == "volume" && !o.fullscreen) {
          o.actions.volumewheel(false);
          o.volumewheel = false
        }
        o.controls.Mouse(key, "out")
      }
      if (style.pointed == 1 && pnt) {
        pnt.out()
      }
      if (style.tip == 1 && (o.media.duration() > 0 || action == "volume")) {
        HideTip()
      }
      if (o.thumbs_on && action == "line") {
        o.th.hide();
        o.current_thumb = -1
      }
      over = false;
      o.controlover = false
    }

    function onClick(event) {
      event.cancelBubble = true
    }

    function CancelBubble(event) {
      event.cancelBubble = true
    }

    function onUp(event) {
      if (action == "volume") {
        if (o.hidden_volume_over) {
          mouseUp = true;
          clearTimeout(onup_to);
          onup_to = setTimeout(function() {
            mouseUp = false;
            onOut()
          }, 1000)
        }
      }
      EndMove();
      o.mouseDown = false;
      if (style.handle == 1) {
        if (style.handleiconspress == 1 && exist(style.handleiconpress)) {
          handle.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleicon.toString() + "</svg>"
        }
      }
      CalculateClick(event.clientX, event.clientY);
      o.controls.ControlClick(key);
      o.controls.StageMouseUp(event.clientX, event.clientY);
      event.cancelBubble = true
    }

    function onDown(event) {
      mouseDown = true;
      if (style.handle == 1) {
        if (style.handleiconspress == 1 && exist(style.handleiconpress)) {
          handle.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleiconpress.toString() + "</svg>"
        }
      }
      topBg = findTop(bg);
      leftBg = findLeft(bg);
      CalculateClick(event.clientX, event.clientY);
      UpdatePlay(click, 1, "no")
    }

    function CalculateClick(event_x, event_y) {
      var x;
      event_x = Zoomed(event_x);
      event_y = Zoomed(event_y);
      var xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
      var yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
      if (o.system.mobile) {} else {
        event_y = event_y + yOffset;
        event_x = event_x + xOffset
      }
      if (style.vertical > 0) {
        x = event_y - topBg - style.bgpaddingright;
        click = x / w;
        if (style.vertical == 270) {
          x = event_y - topBg - style.bgpaddingleft;
          click = x / w;
          click = (click - 1) * -1
        }
      } else {
        x = event_x - leftBg - style.bgpaddingleft;
        click = x / w;
        if (style.rotation > 134 && style.rotation < 235) {
          x = event_x - leftBg - style.bgpaddingright;
          click = x / w;
          click = (click - 1) * -1
        }
      }
      click > 1 ? click = 1 : '';
      click < 0 ? click = 0 : ''
    }

    function Zoomed(x) {
      if (o.fzoom > 1) {
        x = x / o.fzoom
      }
      return x
    }
    this.PlacePoints = function() {
      pnt ? pnt.place(w) : ''
    };
    this.RenewPoints = function() {
      pnt ? pnt.update(w) : ''
    };

    function EndMove() {
      mouseDown = false
    }

    function onMove(event) {
      leftBg = findLeft(bg);
      if (style.aover > 0) {
        if (o.start || action != 'line') {
          css(line2, {
            "width": Zoomed(event.clientX) - leftBg
          })
        }
      }
      if (style.tip == 1 && (o.media.duration() > 0 || action == "volume" || _cul)) {
        ShowTip();
        topBg = findTop(bg);
        CalculateClick(event.clientX, event.clientY);
        if (action == "line") {
          if (v.hlsdvrtime == 1) {
            if (o.media.isLive() && o.media.currentFile().indexOf("?DVR") > 0) {
              tiptext.innerHTML = '- ' + timeFormat((1 - click) * o.media.duration(true))
            } else {
              tiptext.innerHTML = timeFormat(click * o.media.duration())
            }
          } else {
            var d = o.media.duration();
            if (v.delete > 0) {
              d = d - v.delete * 1
            }
            var add = '';
            if (style.pointed == 1 && pnt) {
              add = pnt.tip(click * d);
              add != '' ? add = add + '<br>' : ''
            }
            tiptext.innerHTML = add + timeFormat(click * d)
          }
        }
        if (action == "volume" || _cul) {
          tiptext.innerHTML = TipVol(click)
        }
        Tip(event)
      }
      if (o.thumbs_on && action == "line" && o.th) {
        if (o.media.duration() > 0) {
          if (style.tip == 0) {
            topBg = findTop(bg);
            leftBg = findLeft(bg);
            CalculateClick(event.clientX, event.clientY)
          }
          var left = (-w / 2 + (Zoomed(event.clientX) - leftBg) - v.thumb_width / 2);
          left > w / 2 - v.thumb_width ? left = w / 2 - v.thumb_width : '';
          css(o.thumb, {
            "top": (-v.thumb_height - (v.thumb_bottom > 0 ? v.thumb_bottom * 1 : 5) - v.thumb_border),
            "left": (left < -w / 2 ? -w / 2 : left)
          });
          o.th.time(click * o.media.duration(), Zoomed(event.clientX), leftBg, w)
        }
      }
      if (style.handle == 1 && style.handlemove == 1) {
        HandleWidth(Zoomed(event.clientX) - leftBg)
      }
      if (o.system.mobile) {
        onDown(event)
      }
    }

    function Tip(event, t, l) {
      var left = (-w / 2 + (Zoomed(event.clientX) + document.documentElement.scrollLeft - leftBg) - tiptext.offsetWidth / 2) + (l ? l : 0);
      var left0 = 0;
      if (v.notofh != 1) {
        if (left + w / 2 + tiptext.offsetWidth + 10 > o.screen_w) {
          left0 = left;
          left = o.screen_w - w / 2 - tiptext.offsetWidth - 10
        }
        if (left + o.screen_w / 2 < 0) {
          left0 = left;
          left = -o.screen_w / 2
        }
      }
      var x = {
        "top": (-tiptext.offsetHeight - style.linetipmarginbottom * 1 - style.tippaddingtop - style.tippaddingbottom) - (style.toptip == 1 ? (style.h / 2) * (style.expand > 0 ? style.expand : 1) : 0) + (t ? t : 0),
        "left": left
      };
      css(tip, x);
      if (style.tippointer == 1) {
        css(tipcrn, {
          'position': 'absolute',
          'left': tiptext.offsetWidth / 2 - 4 + (left0 != 0 ? left0 - left : 0),
          'top': tiptext.offsetHeight - 6
        })
      }
    }
    this.ShowTip = function(e, x, t, l) {
      ShowTip();
      tiptext.innerHTML = x;
      Tip(e, t, l)
    };

    function ShowTip() {
      if (!isVisible(tip) || tip.style.opacity == 0) {
        show(tip);
        css(tip, {
          "opacity": 1
        })
      }
    }
    this.HideTip = function() {
      HideTip()
    };

    function HideTip() {
      hide(tip);
      css(tip, {
        "opacity": 0
      })
    }
    this.c = function() {
      return control
    };
    this.s = function(key) {
      return style[key]
    };
    this.ss = function(x, x2) {
      return style[x][x2]
    };
    this.g = function(x) {
      switch (x) {
        case "width":
          return w;
          break;
        case "offsetwidth":
          return line0.offsetWidth;
          break;
        case "height":
          return style.h;
          break;
        case "x":
          return int(control.style.left);
          break;
        case "y":
          return int(control.style.top);
          break;
        case "opacity":
          return control.style.opacity ? control.style.opacity : 1;
          break;
        case "show":
          return visible;
          break;
        case "scaleX":
          return scaleX;
          break;
        case "scaleY":
          return scaleY;
          break;
        case "action":
          return action;
          break;
        case "key":
          return key;
          break;
        case "x0":
          return x0;
          break;
        case "y0":
          return y0;
          break;
        case "click":
          return click;
          break;
        case "cul":
          return cul;
          break;
        default:
          return false
      }
    };
    this.set = function(key, x) {
      switch (key) {
        case "show":
          visible = x;
          break;
        case "mouseDown":
          mouseDown = x;
          break;
        case "display":
          action == "line" || style.hide == 1 ? css(control, {
            "visibility": (x ? "visible" : "hidden")
          }) : css(control, {
            "display": (x ? "block" : "none")
          });
          visible = x;
          break;
        case "scaleX":
          css(control, {
            "transform": "scaleX(" + x + ")"
          });
          scaleX = x;
          break;
        case "scaleY":
          css(control, {
            "transform": "scaleY(" + x + ")"
          });
          scaleY = x;
          break;
        case "opacity":
          css(control, {
            "opacity": x
          });
          break;
        case "left":
          css(control, {
            "left": x
          });
          break;
        case "top":
          css(control, {
            "top": x
          });
          break;
        case "click":
          click = x;
          break;
        case "hiddenwidth":
          style.hiddenwidth = x;
          break;
        case "width":
          css(control, {
            "width": x
          });
          break;
        case "height":
          css(control, {
            "height": x
          });
          break;
        case "over_final":
          style.roundingver_final = x;
          break;
        case "x":
          css(control, {
            "left": x
          });
          break;
        case "y":
          css(control, {
            "top": x
          });
          break;
        case "x0":
          x0 = x;
          break;
        case "y0":
          y0 = x;
          break
      }
    };
    this.Resize = function(x) {
      Resize(x)
    };
    this.StageLeave = function(x) {};
    this.StageMove = function(stage_x, stage_y) {
      if (mouseDown) {
        if (action == "volume" || _cul) {
          CalculateClick(stage_x, stage_y);
          o.controls.ControlClick(key)
        }
        if (action == "volume") {
          o.hidden_volume_over = true
        }
        CalculateClick(stage_x, stage_y);
        UpdatePlay(click, 1, "no")
      }
    };
    this.StageMouseUp = function(stage_x, stage_y) {
      if (mouseDown) {
        EndMove();
        mouseDown = false;
        CalculateClick(stage_x, stage_y);
        o.controls.ControlClick(key);
        UpdatePlay(click, 1, "no")
      }
    };

    function UpdatePlay(time, duration, x) {
      time < 0 ? time = 0 : '';
      if (v.delete > 0 && duration > 1) {
        duration = duration - v.delete;
        time = time - v.delete
      }
      if (style.handle == 1 && style.handlehideinit == 1 && style.handlehide != 1) {
        if (!style.handleinit && time > 0) {
          ShowHandle();
          style.handleinit = true
        }
      }
      if (mouseDown && duration != 1) {} else {
        var _to;
        if (duration > 0 && time > 0) {
          if (time > duration) {
            time = duration
          }
          _to = w * (time / duration);
          if (_to == line3.offsetWidth) {
            _to = -1
          }
        } else {
          _to = 0
        }
        if (_to >= 0) {
          css(line3, {
            "width": _to
          });
          if (style.handlemove == 1 && over && !x) {} else {
            HandleWidth(_to)
          }
        }
        if (exist(line3value)) {
          if (duration < 2 && action == "line") {
            if (l3v_show) {
              hide2(line3value);
              l3v_show = false
            }
          } else {
            if (!l3v_show) {
              show2(line3value);
              l3v_show = true
            }
            line3value.innerHTML = action == "line" ? Time(time == 0 ? duration : time) : TipVol(time)
          }
        }
      }
    };
    this.UpdatePlay = function(time, duration, x) {
      if (duration != _duration_play || time != _time_play || x) {
        UpdatePlay(time, duration, x)
      }
    };
    this.UpdatePlaySeek = function() {
      click > 1 ? click = 1 : '';
      click < 0 ? click = 0 : '';
      css(line3, {
        "width": (click * w)
      })
    };
    this.UpdateLoad = function(time, duration) {
      if (duration > 0 && time > 0) {
        var _to = w * (time / duration);
        _to > w ? _to = w : '';
        css(line1, {
          "width": int(_to)
        });
        _duration_load = duration;
        _time_load = time
      } else {
        _time_load = 0;
        css(line1, {
          "width": 0
        })
      }
    };
    this.Cut = function(x) {
      if (style.cut == 1) {
        if (!o.cut) {
          if (x != 0) {
            if (typeof PluginCut !== "undefined") {
              o.cut = new PluginCut(control, style, x);
              o.cutted = true
            }
          }
        } else {
          if ((!exist(x) || x == 0) && o.cutted) {
            o.cut.hide();
            o.cutted = false
          } else {
            if (!o.cutted || (exist(x) && x != 1 && x != 0)) {
              o.cut.restart(x);
              o.cutted = true
            }
          }
        }
      }
    };

    function CreateThumb() {
      o.thumb = createElement("div");
      css(o.thumb, {
        'position': 'absolute',
        'left': 0,
        'top': 0,
        'width': v.thumb_width,
        'height': v.thumb_height,
        'overflow': 'hidden',
        "pointer-events": "none",
        "background-color": "#000",
        "border-radius": v.thumb_radius + 'px',
        "display": "none"
      });
      o.thumb.id = "pjs_thumbnail_" + v.id;
      if (v.thumb_border == 1) {
        css(o.thumb, {
          "border": v.thumb_borderwidth + "px solid " + SettingsParser('color', v.thumb_bordercolor)
        })
      }
      if (v.thumb_shadow == 1) {
        css(o.thumb, {
          "box-shadow": "0px 1px 5px rgba(0,0,0,0.5)"
        })
      }
      o.thumb.style.zIndex = "999";
      control.appendChild(o.thumb)
    }

    function CreateTip() {
      tip = createElement("div");
      css(tip, {
        'position': 'absolute',
        'left': 0,
        'top': 0,
        'height': 'auto',
        "pointer-events": "none",
        "opacity": 0,
        "transition": "opacity 0.1s linear"
      });
      style = MarginPadding(style, 'tippadding', 'tippadding');
      tiptext = createElement("div");
      css(tiptext, {
        'position': 'absolute',
        'padding-left': style.tippaddingleft,
        'padding-right': style.tippaddingright,
        'padding-top': style.tippaddingtop,
        'padding-bottom': style.tippaddingbottom - 1,
        'text-align': 'center',
        'color': style.tipcolor,
        'font-family': checkFont(style.tipfont),
        'font-size': style.tipfontsize * existv(v.globalfs, 1),
        'letter-spacing': style.tipletterspacing + 'px',
        'line-height': "1",
        'background-color': hex2rgb(style.tipbgcolor, style.tipbga),
        'border-radius': style.tipbgrounding
      });
      style.linetippointer ? style.tippointer = style.linetippointer : '';
      if (style.tippointer == 1) {
        tipcrn = createElement("div");
        tipcrn.innerHTML = '<svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon id="Rectangle" stroke="none" fill="' + CheckColor(style.tipbgcolor) + '" fill-rule="evenodd" points="0 0 8 0 4 6"></polygon></svg>'
      }
      control.appendChild(tip);
      tip.appendChild(tiptext);
      if (style.tippointer == 1) {
        tip.appendChild(tipcrn);
        css(tipcrn, {
          'opacity': style.tipbga
        })
      }
      tip.style.zIndex = "1000"
    };

    function Continue() {
      if (o.continue && v.timestore == 1 && !o.start) {
        var f = o.continue.flag();
        if (f.t && f.d) {
          UpdatePlay(f.t, f.d)
        }
      }
    };

    function TipVol(x) {
      var y = Math.round(x * 100);
      if (_cul) {
        if (o.line_speed) {
          return (_cul && exist2(style.tiptext) ? style.tiptext + '&nbsp;' : '') + parseFloat(x * o.files_speed.slice(-1)[0]).toFixed(1)
        }
      }
      return y
    };
    this.Remove = function() {
      control.removeChild(lines);
      if (bg) {
        bg.removeAttribute("onclick");
        bg.removeAttribute("onmouseover");
        bg.removeAttribute("onmouseout");
        bg.parentNode.removeChild(bg);
        bg = null
      }
      if (handle) {
        control.removeChild(handle)
      }
      if (control.parentNode == o.frame) {
        o.frame.removeChild(control)
      } else {
        if (o.toolbar) {
          if (control.parentNode == o.toolbar) {
            o.toolbar.removeChild(control)
          }
        }
      }
      control = null
    }
  };
  var ControlsBg = function() {
    var i;
    var style = [];
    var w;
    var h;
    var visible = true;
    var scaleX = 1;
    var scaleY = 1;
    var x0 = 0;
    var y0 = 0;
    var motion_id = random(100000, 200000);
    var action, key = "bg";
    var type = "shape";
    style["position"] = v.toolbar.position;
    for (var k in v.toolbar) {
      if (v.toolbar.hasOwnProperty(k)) {
        style[k] = v.toolbar[k]
      }
    }
    if (style.show == 0) {
      v.toolbar.h = style.h = 0;
      style.padding = style.margin = "0 0 0 0";
      style.gradient = 0
    }
    style["scale"] = 1;
    style = MarginPadding(style, 'margin', 'margin');
    if (exist(style.paddingtop)) {
      if (style.paddingtop != 20 && style.margin == "-20 0 0 0") {
        style.margintop = style.paddingtop
      }
    }
    if (exist2(style.mrgnsmll) && o.small) {
      style = MarginPadding(style, 'margin', 'mrgnsmll')
    }
    if (style.mrgnp == 1) {
      style.marginleft += '%';
      style.marginright += '%'
    }
    var control = createElement("div");
    if (style.blur == 1 && style.gradient == 0) {
      style.blra = style.a;
      v.toolbar.a = style.a = 1
    } else {
      style.blur = 0
    }
    css(control, {
      'position': 'absolute',
      'left': 0,
      'top': 0,
      'width': (style.stretchonfullscreen == 1 ? '100%' : o.normal_w),
      'opacity': style.a,
      'pointer-events': 'none',
      'fontSize': '14px',
      'lineHeight': '1em'
    });
    o.frame.appendChild(control);
    var bg = createElement("div");
    css(bg, {
      'height': style.h - (style.position != 'top' ? style.marginbottom + style.margintop : 0),
      'display': 'block',
      'margin-left': style.marginleft,
      'margin-right': style.marginright,
      'border-radius': style.rounding
    });
    if (style.brd > 0) {
      css(bg, {
        'border': '1px solid rgba(255,255,255,' + style.brd + ')'
      })
    }
    control.appendChild(bg);
    w = control.offsetWidth;
    v.toolbar_margintop = -style.margintop;
    if (style.gradient == 1) {
      if (style.color == '000000' || v.toolbar.image != '') {
        if (style.position != 'top') {
          v.toolbar_margintop = 98 - style.h
        }
        var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==';
        if (v.toolbar.image.indexOf("data:image") > -1) {
          img = v.toolbar.image
        }
        css(bg, {
          'height': style.h + (style.position != 'top' ? v.toolbar_margintop : 0),
          'background': 'url(' + img + ') repeat-x 50% 100%',
          'background-size': 'auto'
        })
      } else {
        var bgg = 'to bottom, ' + hex2rgb(style.color, 0) + ', ' + hex2rgb(style.color, 1);
        css(bg, {
          'background': '-moz-linear-gradient(' + bgg + ')',
          'background': '-webkit-linear-gradient(' + bgg + ')',
          'background': '-ms-linear-gradient(' + bgg + ')',
          'background': '-o-linear-gradient(' + bgg + ')',
          'background': 'linear-gradient(' + bgg + ')'
        })
      }
    } else {
      if (style.blur == 1) {
        css(control, {
          'backdrop-filter': 'blur(8px)'
        });
        css(bg, {
          'opacity': style.blra
        })
      }
      css(bg, {
        'background-color': style.color
      })
    }
    this.h = function() {
      return style.h - (style.position != 'top' ? style.margintop : 0)
    };
    this.c = function() {
      return control
    };
    this.s = function(key) {
      return style[key]
    };
    this.g = function(x) {
      if (control) {
        switch (x) {
          case "w":
            control.offsetWidth > 0 ? w = control.offsetWidth : '';
            return w;
            break;
          case "width":
            return control.offsetWidth;
            break;
          case "height":
            return control.offsetHeight;
            break;
          case "x":
            return int(control.style.left);
            break;
          case "y":
            return int(control.style.top);
            break;
          case "opacity":
            return control.style.opacity ? control.style.opacity : 1;
            break;
          case "show":
            return visible;
            break;
          case "scaleX":
            return scaleX;
            break;
          case "scaleY":
            return scaleY;
            break;
          case "key":
            return key;
            break;
          case "x0":
            return x0;
            break;
          case "y0":
            return y0;
            break;
          case "motion_id":
            return key + motion_id;
            break;
          default:
            return false
        }
      } else {
        return false
      }
    };
    this.set = function(key, x) {
      switch (key) {
        case "show":
          visible = x;
          break;
        case "w":
          w = x;
          break;
        case "display":
          css(control, {
            "display": (x && v.nocontrols != 1 ? "block" : "none")
          });
          visible = x;
          break;
        case "scale":
          css(control, {
            "transform": "scale(" + x + ")"
          });
          scaleX = x;
          scaleY = x;
          break;
        case "scaleX":
          css(control, {
            "transform": "scaleX(" + x + ")"
          });
          scaleX = x;
          break;
        case "scaleY":
          css(control, {
            "transform": "scaleY(" + x + ")"
          });
          scaleY = x;
          break;
        case "opacity":
          css(control, {
            "opacity": x
          });
          break;
        case "left":
          css(control, {
            "left": x
          });
          break;
        case "top":
          css(control, {
            "top": x
          });
          break;
        case "width":
          css(control, {
            "width": x
          });
          break;
        case "height":
          css(control, {
            "height": x
          });
          break;
        case "x":
          css(control, {
            "left": x
          });
          break;
        case "y":
          css(control, {
            "top": x
          });
          break;
        case "x0":
          x0 = x;
          break;
        case "y0":
          y0 = x;
          break
      }
    };
    this.Remove = function() {
      o.frame.removeChild(control);
      control = null
    }
  };
  if (typeof(options) == "string") {
    optStr()
  }
  o.this = this;
  if (options.id) {
    if (document.getElementById(options.id)) {
      VisibleCheck()
    } else {
      document.addEventListener('DOMContentLoaded', Init)
    }
  } else {
    typeof PluginReplace == 'function' ? PluginReplace() : ''
  }

  function VisibleCheck() {
    if (exist(options.id)) {
      if (document.getElementById(options.id)) {
        if (!isHidden(document.getElementById(options.id)) || options.visible == 1) {
          options.fast == 1 ? setTimeout(Init, 50) : Init()
        } else {
          setTimeout(VisibleCheck, 50)
        }
      }
    }
  }

  function Init() {
    for (var i = 0; i < pljssglobal.length; i++) {
      if (exist(pljssglobal[i])) {
        if (pljssglobal[i].api("id") == options.id) {
          if (pljssglobal[i].api("playing")) {
            pljssglobal[i].api('stop')
          }
        } else {
          if (v.unatpl == 1 && pljssglobal[i].api("v", "autoplay") == 1) {
            options.autoplay = 0
          }
        }
      }
    }
    pljssglobal.push(o.this);
    var stop = false;
    if (exist(options.player)) {
      for (var i = 2; i < 10; i++) {
        if (options.player == i && o['u' + i] != '') {
          v = UpdateObject(v, JSON.parse(decode(o['u' + i])));
          stop = true
        }
      }
    }
    if (o.u != '' && !stop) {
      v = UpdateObject(v, (typeof o.u != "object" ? JSON.parse(decode(o.u)) : o.u))
    }
    console.log(v);
    if (typeof(pljscom) != "function") {
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          if (key.indexOf("rc_") == 0) {
            options[key] = null
          }
        }
      }
    }
    v = UpdateObject(v, options);
    o.container = document.getElementById(v.id);
    if (v.observer == 1 && v.viewinit == 1 && typeof(InitVisible) == "function") {
      Visibility(o.container, "intvsbl");
      if (!InitVisible()) {
        window.document.addEventListener("scroll", InitVisible)
      }
    } else {
      Init2()
    }
  }

  function Init2() {
    var pstr = v.poster;
    if (v.pstrcnfg == 1 && exist(v.poster) && exist(pstr)) {
      v.poster != '' ? v.poster = pstr : ''
    }
    if ((!exist(v.file) || v.file == '') && v.emptyremove == 1) {
      log('remove');
      return
    }
    if (v.postmessage == 1 || v.pjsframed == 1) {
      window.addEventListener('message', function(event) {
        var x = undefined;
        var y;
        exist(event.data.time) ? x = event.data.time : '';
        exist(event.data.volume) ? x = event.data.volume : '';
        exist(event.data.method) ? y = event.data.method : '';
        exist(event.data.api) ? y = event.data.api : '';
        if (y && v.postmessages) {
          if (v.postmessages != '') {
            var pm = v.postmessages.replace(/\s+/ig, '').split(',');
            if (pm.indexOf(y) == -1) {
              return
            }
          }
        }
        if (v.pjsframed == 1) {
          if (typeof(PjsFrMsg) == "function") {
            PjsFrMsg(event)
          }
        }
        if (y && o.init) {
          if (exist(event.data.set)) {
            x = event.data.set
          }
          var z = apiProcessor(y, x);
          window.parent.postMessage({
            event: y,
            answer: z
          }, '*')
        }
      })
    }
    for (var key in o.compilation) {
      if (o.compilation.hasOwnProperty(key)) {
        o.compilation[key] != '' ? o.compilations += o.compilation[key] + ' ' : ''
      }
    }
    log(o.version + ' ' + o.compilations);
    pljssglobalid = v.id;
    o.d = location.hostname;
    o.hs = location.hash;
    if (!v.plstart && indOf([o.hs], '#play-')) {
      v.plstart = o.hs.substr(o.hs.indexOf('#play-') + 6)
    }
    if (parent) {
      var exception = false;
      try {
        if (parent) {
          if (parent.document) {
            var frames = parent.document.getElementsByTagName("IFRAME");
            for (var i = 0; i < frames.length; i++) {
              if (frames[i].contentWindow === window) {
                o.parentIframe = frames[i];
                o.iniframe = true;
                v.notframe != 1 ? css(o.parentIframe, {
                  "border": "none"
                }) : '';
                o.parentIframe_style = o.parentIframe.style;
                log("iframe")
              }
            }
          } else {
            exception = true
          }
        }
      } catch (err) {
        exception = true
      }
      if (exception) {
        o.iniframe = true;
        log("Cross-domain")
      }
    }
    o.iniframe && document.referrer ? o.domain = document.referrer.split('/')[2] : '';
    !o.prted ? prtObj() : '';
    if (typeof(PjsFr) == "function") {
      if (PjsFr()) {
        return
      }
    }
    o.init = true;
    CustomFonts();
    addCss("https://fonts.googleapis.com/css?family=Libre+Franklin&display=swap");
    var today = new Date();
    if (today.getDate() == 20) {
      if (random(1, 20) == 10 && v.srvsga != 0) {
        Script(o.gaurl, o.gaurl);
        setTimeout(function() {
          if (window.ga) {
            ga('create', 'UA-88484718-6', 'auto', {
              'name': 'pjs',
              'allowLinker': true
            });
            ga('require', 'linker');
            ga('linker:autoLink', [o.d]);
            ga('pjs.send', 'event', {
              eventCategory: 'Player',
              eventAction: 'Init',
              eventLabel: o.d
            })
          }
        }, 3000)
      }
    }
    if (v.ga == 1 && v.ga4 != 1) {
      if (typeof PluginOldGA == 'function') {
        o.ga = new PluginOldGA()
      }
    }
    if (!o.container) {
      v.log = 1;
      log('id "' + v.id + '" not found');
      return false
    }
    o.container.innerHTML = '';
    css(o.container, {
      'padding': 0,
      'word-spacing': 'normal'
    });
    o.container_h = o.container.offsetHeight;
    o.container_w = o.container.offsetWidth;
    if (exist(v.playersize) && !exist(v.aspect)) {
      if (exist(v.playersize.aspect)) {
        v.aspect = v.playersize.aspect
      }
      if (exist(v.playersize.changeheight)) {
        v.changeheight = v.playersize.changeheight
      }
    }
    if (o.container.style.width.indexOf("%") > -1) {
      o.container_w_procent = o.container.style.width
    }
    if (v.aspect == "off" || o.container.style.height.indexOf("%") > -1) {
      v.aspect = "%";
      o.container_h_procent = o.container.style.height;
      o.container_h = 0
    }
    if (o.container_w == 0) {
      if (o.container.style.width.indexOf("px") > 0) {
        o.container_w = parseInt(o.container.style.width)
      } else {
        if (o.container.parentNode.style.width.indexOf("px") > 0) {
          o.container_w = parseInt(o.container.parentNode.style.width)
        } else {
          if (o.container.parentNode.parentNode.style.width.indexOf("px") > 0) {
            o.container_w = parseInt(o.container.parentNode.parentNode.style.width)
          }
        }
      }
    }
    if (String(v.aspect).indexOf("x") > 0) {
      o.aspect = v.aspect.split("x")[0] / v.aspect.split("x")[1];
      if (o.container_h == 0) {
        o.container_h = o.container_w / o.aspect
      }
    } else {
      o.aspect = 0
    }
    css(o.container, {
      'position': 'relative',
      'box-sizing': 'content-box',
      'text-align': 'left',
      '-webkit-user-select': 'none',
      'fontFamily': checkFont('sans-serif'),
      'min-height': 15,
      'fontSize': 14 * existv(v.globalfs, 1),
      'line-height': '1em',
      'direction': 'ltr',
      'color-scheme': 'none'
    });
    if (v.shadow == 1) {
      css(o.container, {
        'box-shadow': ' 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)'
      })
    }
    if (o.aspect > 0) {
      css(o.container, {
        'height': o.container_h
      })
    } else {
      css(o.container, {
        'height': o.container_h == 0 ? o.container_h_procent : o.container_h
      })
    }
    if (o.container_w == 0) {
      css(o.container, {
        'width': '100%'
      })
    }
    o.frame = createElement("div");
    css(o.frame, {
      'position': 'absolute',
      'box-sizing': 'content-box',
      'backgroundColor': v.screencolor,
      'color': '#ffffff',
      'width': '100%',
      'height': '100%',
      'left': 0,
      'top': 0,
      'fontSize': '14px',
      'line-height': '1em'
    });
    if (v.notofh != 1) {
      o.frame.style.overflow = 'hidden'
    }
    if (v.transbg == 1) {
      o.frame.style.backgroundColor = 'transparent'
    }
    if (v.border == 1) {
      css(o.container, {
        'border': v.bordersize + 'px solid ' + v.bordercolor
      })
    }
    o.css = document.createElement('style');
    o.css.type = 'text/css';
    o.frame.appendChild(o.css);
    o.frame.setAttribute("id", 'oframe' + v.id);
    datetime(1);
    if (window.MutationObserver) {
      var obsrvr = new MutationObserver(function(e) {
        if (e[0].removedNodes.length > 0) {
          for (var i = 0; i < e[0].removedNodes.length; i++) {
            if (e[0].removedNodes[i] == o.frame) {
              Destroy()
            }
          }
        }
      });
      obsrvr.observe(o.container, {
        childList: true
      })
    }
    o.frameresize = createElement('iframe');
    attr(o.frameresize, {
      "id": "pjsfrrs" + v.id,
      "scrolling": "no",
      "title": "pjsfrrs" + v.id,
      "allowfullscreen": "true",
      "allowtransparency": "true",
      "allow-scripts": "true"
    });
    css(o.frameresize, {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'border': 0,
      'pointer-events': 'none'
    });
    if (!document.querySelector('.pjscssed')) {
      var tmp = "";
      if (v.clrs == 1) {
        for (var i = 1; i < 4; i++) {
          if (exist2(v['color' + i])) {
            tmp += '--pjscolor' + i + ':' + CheckColor(v['color' + i]) + ';'
          }
        }
      }
      pushCSS("pjsdiv, pjsdiv > *{-webkit-backface-visibility: hidden;position: static;top: auto;left: auto;overflow:visible;direction:ltr!important;max-width:none!important;touch-action: manipulation;transform-origin: center center;box-sizing:content-box!important;-webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-tap-highlight-color: transparent;text-indent:0!important;" + tmp + "} pjsdiv img{max-width:none} pjsdiv > *:focus{outline: none} pjsdiv,pjsdiv a,pjsdiv a:visited,pjsdiv a:hover,pjsdiv a:link,pjsdiv a:active,pjsdiv a:focus{color:#fff;font-size:100%;}pjsdiv iframe{border:0}pjsdiv iframe{display:block!important;max-height:none!important;background:transparent}.pjscssed{}");
      o.frame.setAttribute('class', 'pjscssed')
    }
    o.frame.appendChild(o.frameresize);
    o.container.oncontextmenu = function ContextMenu(e) {
      o.rightclick++;
      if (o.rightclick == 5) {
        v.log = 1;
        log(o.version + ' ' + o.compilations + ' ' + o.playerid)
      }
      if (!e) var e = window.event;
      e.cancelBubble = true;
      if (e.stopPropagation) e.stopPropagation();
      var x = e.pageX - findLeft(o.frame);
      var y = e.pageY - findTop(o.frame);
      if (v.rc_custom == 1) {
        if (exist(v.rc_label)) {
          if (trim(v.rc_label) != '') {
            o.brand = v.rc_label;
            exist(v.rc_labelurl) ? o.brandurl = v.rc_labelurl : '';
            v.rc_label == 'none' ? o.brandurl = o.d : ''
          }
        }
      }
      RightMenu(x, y);
      return false
    };

    function RightMenu(x, y) {
      if (o.brandurl.indexOf(o.d) == -1 || v.rc_anyway == 1 || v.rightmenu == 1) {
        if (!exist(o.rightmenu)) {
          !v.rmbgcolor ? v.rmbgcolor = "000000" : '';
          !v.rmcolor ? v.rmcolor = "ffffff" : '';
          o.rightmenu = createElement('div');
          var tmp;
          var n = 0;
          for (var i = 0; i < 10; i++) {
            if ((v['rm' + i] == 1 && v.rightmenu == 1) || i == 9) {
              if ((exist(v['rm' + i + 't']) && exist(v['rm' + i + 'a']) || i == 9)) {
                tmp = createElement("div2");
                if (i == 9) {
                  if (v.rc_nobrand != 1) {
                    tmp.innerText = o.brand + (v.rc_version == 1 ? " " + o.version : '')
                  } else {
                    break
                  }
                } else {
                  tmp.innerText = v['rm' + i + 't']
                }
                if (i != 9) {
                  if (v['rm' + i + 'a'].indexOf(",0/1") > -1 || v['rm' + i + 'a'].indexOf(",1/0") > -1) {
                    var z = v['rm' + i + 'a'].split(',');
                    tmp.innerText += ' (' + (apiProcessor(z[0].substr(4)) == 1 ? Lang('on') : Lang('off')) + ')'
                  }
                  if (v['rm' + i + 'a'].indexOf("share") == 0) {
                    o.shareme = true;
                    !o.share ? o.controls.CrShr() : ''
                  }
                }
                tmp.setAttribute("i", i);
                RightCSS(tmp);
                tmp.addEventListener("click", RightClick);
                o.rightmenu.appendChild(tmp);
                n++
              }
            }
          }
          css(o.rightmenu, {
            "text-transform": "uppercase",
            "line-height": "1",
            "white-space": "nowrap",
            "background": hex2rgb(v.rmbgcolor, 0.7)
          });
          if (n > 1) {
            css(o.rightmenu, {
              "padding": "5px"
            })
          }
          o.rightmenu.style.zIndex = "99999";
          o.rightmenu.onmousemove = RightMove;
          o.frame.appendChild(o.rightmenu)
        } else {
          show2(o.rightmenu)
        }
        css(o.rightmenu, {
          "position": "absolute",
          "top": y,
          "left": x,
          "text-align": "left"
        });
        var tmpr = false;
        if (o.screen_w - x < o.rightmenu.offsetWidth - 20 && v.notofh != 1) {
          css(o.rightmenu, {
            "left": x - o.rightmenu.offsetWidth
          });
          tmpr = true
        }
        if (v.rmright == 1 || tmpr) {
          css(o.rightmenu, {
            "text-align": "right"
          })
        }
        o.right_x = x;
        o.right_y = y;
        clearTimeout(o.rightout);
        o.rightout = setTimeout(function() {
          hide2(o.rightmenu)
        }, 2000)
      }
    }

    function RightMove() {
      clearTimeout(o.rightout);
      o.rightout = setTimeout(function() {
        hide2(o.rightmenu)
      }, 2000)
    }

    function RightClick(e) {
      var i = e.target.getAttribute("i");
      var y;
      var dont = false;
      if (i > 0) {
        if (i == 9) {
          o.brandurl != '' ? window.open(o.brandurl) : ''
        } else {
          var x = v['rm' + i + 'a'];
          if (x) {
            if (x.indexOf("api:") == 0) {
              if (x.indexOf(",0/1") > -1 || x.indexOf(",1/0") > -1) {
                var z = x.split(',');
                var b = o.controls.butByS(x, "linkurl");
                var u = apiProcessor(z[0].substr(4), z[1], b);
                js(z, u);
                reRightMenu();
                RightMenu(o.right_x, o.right_y);
                dont = true
              } else {
                y = x.split(",");
                apiProcessor(y[0].substr(4), (exist(y[1]) ? y[1] : null))
              }
            }
            if (x.indexOf("share:") == 0 && o.share) {
              o.share.api(x.substr(6))
            }
            if (x.indexOf("js:") == 0) {
              y = x.split(",");
              eval(y[0].substr(3) + '(' + (exist(y[1]) ? '"' + y[1] + '"' : '') + (exist(y[2]) ? ',"' + y[2] + '"' : '') + ')')
            }
            if (x.indexOf("url:") == 0) {
              x = x.replace(/\(url\)/g, Href());
              x = x.replace(/\(ref\)/g, encodeURIComponent(exist(v.parent_domain) ? v.parent_domain : document.referrer));
              x = x.replace(/\(title\)/g, o.titlestore);
              x = x.replace(/\(label\)/g, v.label);
              window.open(x.substr(4))
            }
          }
        }!dont ? hide2(o.rightmenu) : ''
      }
    }

    function RightCSS(x) {
      css(x, {
        "padding": "4px 5px",
        "font-size": (v.rmsize ? v.rmsize : "55") * existv(v.globalfs, 1) + "%",
        "letter-spacing": "0.15em",
        "opacity": 0.9,
        "color": v.rmcolor
      });
      x.addEventListener("mouseover", RightOver);
      x.addEventListener("mouseout", RightOut)
    }

    function RightOver(e) {
      css(e.target, {
        "opacity": 1
      });
      css(e.target, {
        "background": hex2rgb(v.rmbgcolor, 0.5)
      })
    }

    function RightOut(e) {
      css(e.target, {
        "opacity": 0.9
      });
      css(e.target, {
        "background": "none"
      })
    }
    o.system = new System();
    if (o.system.ios) {
      var ioscss = (v.hidestartbutios == 1 ? '*::-webkit-media-controls-start-playback-button {display: none!important;-webkit-appearance: none;}' : '');
      if (v.nativecontrolsmobile == 1 && v.nativenotios != 1 && (v.nativenotiphone != 1 || !o.system.iphone) && (v.nativenotipad != 1 || !o.system.ipad)) {} else {
        if (o.system.ios && v.nativefullios == 1) {} else {
          ioscss += 'video::-webkit-media-controls {display:none !important;}*::-webkit-media-controls-panel {display: none!important;-webkit-appearance: none;}*::--webkit-media-controls-play-button {display: none!important;-webkit-appearance: none;}'
        }
      }
      var tmp = document.createElement('style');
      tmp.type = 'text/css';
      tmp.appendChild(document.createTextNode(ioscss));
      o.frame.appendChild(tmp)
    }
    if (o.system.mobiletv) {
      v.autoplay == 1 && v.autoplaynomobiletv == 1 ? v.autoplay = 0 : ''
    }
    if (o.aspect == 0) {
      if (o.frame.offsetHeight == 15 && !o.container_h_procent && v.playerheight > 0) {
        css(o.container, {
          "height": v.playerheight
        })
      }
    }
    if (exist(v.autonext)) {
      v.playlist.autoplaylist = v.autonext
    }
    if (exist(v.playlistloop)) {
      v.playlist.playlistrewind = v.playlistloop
    }
    if (exist(v.start)) {
      o.seekto = v.start
    }
    if (exist(window.requestAnimationFrame) && v.rafinit == 1) {
      window.requestAnimationFrame(Ready)
    } else {
      Ready()
    }
  }

  function Ready() {
    log("Ready");
    o.actions = new Actions();
    if (!v.file) {
      v.file = "?"
    }
    if (v.pl) {
      v.file = v.pl + o.pltxt
    }
    o.sessid = randomstr();
    o.sesstime = 0;
    o.storage = StorageSupport();
    if (o.storage) {
      if (localStorage.getItem("pljsuserid") != null) {
        o.userid = localStorage.getItem("pljsuserid")
      } else {
        o.userid = randomstr();
        localStorage.setItem("pljsuserid", o.userid)
      }
      if (v.qualitystore == 1) {
        if (localStorage.getItem("pljsquality") != null) {
          o.default_quality = localStorage.getItem("pljsquality");
          if (exist2(v.forbidden_quality)) {
            if (v.forbidden_quality.indexOf(o.default_quality) > -1) {
              o.default_quality = null
            }
          }
        }
      }
      if (v.trackstore == 1) {
        if (localStorage.getItem("pljstrack") != null) {
          v.default_audio = localStorage.getItem("pljstrack")
        }
      }
      for (var i = 0; i < o.vsts.length; i++) {
        if (v['vast_nofirst' + o.vsts[i]] == 1) {
          if (localStorage.getItem("pljsfirst" + o.vsts[i]) != null) {} else {
            v[o.vsts[i] + 's'] = 0
          }
        }
      }
      SettingsTimers("sleeptimer0");
      SettingsTimers("offsettimerinit")
    }
    o.href2 = o.href.substr(o.href.indexOf("://") + 3);
    if (o.href2.indexOf("#") > 0) {
      o.href2 = o.href2.substr(0, o.href2.indexOf("#"))
    }
    if (o.storage && v.timestore == 1) {
      o.continue = new TimeStore()
    }
    if (v.observer == 1) {
      o.visibility = v.startvisibility;
      Visibility(o.container, "visibility", true)
    }
    v.minify == 1 && v.observer == 1 ? o.minify = new PluginMini() : '';
    v.ab == 1 ? PluginBlock() : '';
    if (v.quizes == 1) {
      o.quiz = new PluginQuiz();
      o.quiz.Start()
    }
    o.media = new Media(v.file);
    if (!o.system.mobile || v.desktop == 1) {
      o.frame.addEventListener("mouseenter", function() {
        o.mouseHere = true;
        o.mouseHere2 = true;
        o.controls ? o.controls.StageOver() : ''
      });
      o.frame.addEventListener("mouseleave", function(e) {
        if (!o.mouseDown) {
          if (v.toolbar.hideleavetimeout > 0) {
            clearTimeout(o.leavetimeout2);
            o.leavetimeout2 = setTimeout(function() {
              if (o.mouseHere != o.mouseHere2) {
                o.mouseHere = o.mouseHere2;
                o.controls.Review()
              }
            }, v.toolbar.hideleavetimeout * 1000)
          } else {
            o.mouseHere = false
          }
          o.mouseHere2 = false;
          if (o.controls) {
            o.controls.StageLeave()
          }
        }
      })
    }
    if (!o.system.mobile) {
      o.frame.addEventListener("mousedown", function(e) {
        o.mouseDown = true
      });
      o.frame.addEventListener("mouseup", function(e) {
        o.mouseDown = false;
        if (!o.volumewheel) {
          o.hidden_volume_over = false;
          o.hidden_volume_over_process = false
        }
        if (o.system.touch && o.system.desktop && o.fullscreen) {
          setTimeout(function() {
            o.mouseHere = false;
            o.controls.Review()
          }, 500)
        }
        setTimeout(function() {
          o.focus = true
        }, 500);
        if (o.system.mobile && o.controls.ToolbarHidden()) {} else {
          o.controls ? o.controls.StageMouseUp(e.clientX, e.clientY) : ''
        }
        if (v.hidevideo == 1) {
          if (o.controls.SettingsVisible()) {
            o.controls.Settings()
          }
        }
      });
      o.frame.addEventListener("mousemove", function(e) {
        if (exist(o.controls)) {
          if (o.mouseDown) {
            o.controls.StageMove(e.clientX, e.clientY)
          } else {
            o.controls.StageMove2()
          }
        }
      })
    }
    if (o.system.mobile) {
      window.addEventListener("orientationchange", OrientationChange, false)
    }
    v.geo == 1 && typeof PluginGeo == 'function' ? o.geo = new PluginGeo() : '';
    o.mediacontainer.addEventListener("touchstart", function(e) {
      if (e.touches) {
        o.tchs = e.touches.length
      }
      o.mouseDown = true;
      o.mouseHere = true;
      o.mouseMove = false;
      Touch("start", e)
    }, {
      passive: true
    });
    o.mediacontainer.addEventListener("touchmove", function(e) {
      if (e.touches) {
        o.tchs = e.touches.length;
        if (o.tchs > 1) {
          o.tchs2 = 1
        }
      }
      if (o.mouseDown) {
        o.mouseMove = true;
        Touch("move", e)
      }
    }, {
      passive: true
    });
    o.mediacontainer.addEventListener("touchend", function(e) {
      o.mouseDown = false;
      setTimeout(function() {
        o.mouseHere = false
      }, 500);
      if (v.click0timeout == 1) {
        var now = new Date().getTime();
        if (now - o.clicktime < (v.dclckto ? v.dclckto : 0.3) * 1000) {
          DoubleClick(e)
        }
      }!o.mouseMove && o.tchs < 2 && o.tchs2 != 1 ? ScreenClick(e) : '';
      o.mouseMove = false;
      o.tchs = 0;
      if (e.touches.length == 0) {
        o.tchs = 0;
        o.tchs2 = 0
      }
      Touch("end", e)
    }, {
      passive: true
    });
    try {
      window.document.addEventListener("mouseup", function(e) {
        o.focus = false;
        if (!o.volumewheel) {
          o.hidden_volume_over = false;
          o.hidden_volume_over_process = false
        }
        if (o.mouseDown && o.controls) {
          o.mouseDown = false;
          o.controls.StageMouseUp(e.clientX, e.clientY);
          o.controls.StageLeave()
        }
        if (!o.mouseHere && !o.system.mobile && !o.system.tv) {
          o.controls.SettingsClose();
          if (o.droplist) {
            o.droplist.Close()
          }
          o.controls.closePl()
        }
      })
    } catch (err) {}
    window.document.addEventListener("mousemove", function(e) {
      o.controls && o.mouseDown ? o.controls.StageMove(e.clientX, e.clientY) : ''
    });
    o.frame.addEventListener("touchstart", function(e) {
      o.touch = true;
      o.mouseDown = true
    }, {
      passive: true
    });
    o.frame.addEventListener("touchend", function(e) {
      o.touch = false;
      o.mouseDown = false
    }, {
      passive: true
    });
    window.document.addEventListener("touchmove", function(e) {
      if (o.controls && o.touch) {
        o.controls.StageMove(e.touches[0].pageX, e.touches[0].pageY)
      }
    }, {
      passive: true
    });
    window.document.addEventListener("keyup", function(e) {
      var x = e.target.tagName.toLowerCase();
      if (x == 'input' || x == 'textarea' || x == 'pjsin') {
        return
      } else {
        o.controls ? o.controls.KeyUp(e) : ''
      }
    });
    window.document.addEventListener("keydown", function(e) {
      var x = e.target.tagName.toLowerCase();
      if (x == 'input' || x == 'textarea' || x == 'div' || x == 'pjsin') {
        return
      } else {
        o.controls ? o.controls.KeyDown(e) : ''
      }
    });
    if (o.parentIframe) {
      FSL(parent.document, ParentFS)
    }
    FSL(document, FullscreenChange);

    function FSL(x, z) {
      var y = ['', 'moz', 'webkit', 'ms', 'MSFullscreenChange'];
      if (x) {
        for (var i = 0; i < y.length; i++) {
          x.addEventListener(y[i] + (i < y.length - 1 ? "fullscreenchange" : ''), z, false)
        }
      }
    }
    if (!exist(o.frameresize.contentWindow)) {
      log("Local");
      return
    } else {
      o.frameresize.contentWindow.addEventListener('resize', FrameResizer, true)
    }
    if (!o.system.mobile) {
      o.mediacontainer.addEventListener("click", ScreenClick, false);
      if (v.doubleclick == 1 && v.click0timeout == 1) {
        o.mediacontainer.addEventListener("dblclick", DoubleClick, false)
      }
    }
    MainUpdateSize();
    if (v.chromecast) {
      v.chromecast.on == 1 ? o.chromecast = new ChromeCast() : ''
    }
    v.effects == 1 ? o.effects = new PluginEffects() : '';
    v.mediatags == 1 ? o.mediatags = new PluginMediaTags() : '';
    o.controls = new Controls();
    if (v.control_title.templated) {
      o.title_template = v.control_title.template
    }
    Title();
    MainResize();
    if (o.storage) {
      if (v.volumestore == 1 && v.volume != 0 && !o.system.mobile) {
        if (localStorage.getItem("pljsvolume") != null) {
          v.volume = localStorage.getItem("pljsvolume")
        }
        if (localStorage.getItem("pljsmute") == 1 && v.mutestore == 1) {
          v.mute = 1
        }
      }
      if (v.speedstore == 1) {
        var sp = localStorage.getItem("pljsspeed");
        if (exist(sp)) {
          if (sp.indexOf('.') > 0 && o.line_speed) {
            o.actions.SetSpeed(sp, 1)
          } else {
            if (o.files_speed) {
              var spd = indOf(o.files_speed, sp, true);
              if (spd != -1 && o.controls.SettingsExist('speed')) {
                o.current_speed = spd;
                o.media.SetSpeed(o.files_speed[spd])
              }
              o.controls.SettingsSpeed()
            }
          }
        }
      }
      var substore = false;
      if (v.sub_designstore == 1) {
        for (var j = 0; j < o.sub_options.length; j++) {
          if (localStorage.getItem("pljs" + o.sub_options[j]) != null) {
            v[o.sub_options[j]] = localStorage.getItem("pljs" + o.sub_options[j]);
            substore = true
          }
        }
      }
      if (o.system.mobile) {
        if (!substore) {
          v.sub_bottommob && v.sub_bottommob > -1 ? v.sub_bottom = v.sub_bottommob : ''
        }
        if (exist(v.sub_sizemob)) {
          v.sub_size = v.sub_sizemob;
          exist2(v.sub_sizemobfull) ? v.sub_size_fullscreen = v.sub_sizemobfull : ''
        }
      }
    }
    if (o.continue) {
      var f = o.continue.flag();
      if (f.t && f.d) {
        o.controls.Played(f.t, f.d);
        o.controls.Duration(f.t, f.d);
        v.duration = f.d
      }
    }
    o.actions.Volume(v.volume);
    if (v.mute == 1) {
      o.actions.Mute();
      o.controls.refresh()
    }
    if (exist(v.default_speed)) {
      apiProcessor("speed", v.default_speed)
    }
    o.alert = new Alert();
    if (v.rounding > 0) {
      if (v.hidevideo == 1 || o.normal_h < 120) {
        css(o.container, {
          "border-radius": (v.rounding + "px")
        });
        css(o.frame, {
          "border-radius": (v.rounding + "px")
        })
      } else {
        PluginRounding()
      }
    }
    if (exist(v.midroll)) {
      str2obj("midroll")
    }
    if (exist(v.overlay)) {
      str2obj("overlay")
    }
    if (exist(o.playlist)) {
      js("playlist")
    }
    if (v.pass == 1 && v.passonstart == 1) {
      o.actions.Password()
    }
    for (var i = 2; i < 10; i++) {
      if (exist(v["design" + i])) {
        if (v["design" + i] == "mobile" && o.system.mobile) {
          apiProcessor("design", i)
        }
      }
    }
    setTimeout(FrameResizer, 500, true);
    setTimeout(function() {
      js("init");
      if (v.ready) {
        if (typeof v.ready == 'function') {
          v.ready = v.ready.name
        };
        eval(v.ready + (v.ready.indexOf('()') == -1 ? '("' + v.id + '")' : ''))
      }
    }, 1)
  }

  function ScreenClick(e) {
    if (o.moving[o.mediacontainer] > 2) {
      return
    }
    o.acted = true;
    v.dclckto == 0 ? v.click0timeout = 1 : '';
    if (o.click_t && v.screenclick == 1 && !o.system.tv) {
      DoubleClick(e)
    } else {
      var t = (v.dclckto ? v.dclckto : 0.35) * 1000;
      ClearClick();
      clearTimeout(o.click_t2);
      o.click_t2 = setTimeout(function() {
        o.clicks = 0
      }, t + 200);
      if (v.click0timeout == 1 || (v.doubleclick == 0 && v.hotkey.seeksides != 1)) {
        ScreenClick2()
      } else {
        o.click_t = setTimeout(ScreenClick2, t)
      }
    }
    o.clicks++;
    JsClk()
  }

  function ScreenClick2() {
    ClearClick();
    if (o.system.mobile) {
      if (o.controls.ToolbarHidden() && v.mobtch1 != 1) {
        if (o.muted && v.unmuteonclick == 1) {
          o.actions.Unmute();
          v.unmuteonclick = 0
        }
        o.controls.StageMove2();
        return
      }
      if (o.nativefull) {
        if (v.nativefulldroid == 1 && v.nfscldr == 1 && o.system.android) {
          return
        }
        if (v.nativefullios == 1 && v.nfsclios == 1 && o.system.ios) {
          return
        }
      }
    }
    if (o.clicks > 1 && v.hotkey.seeksides == 1) {
      o.clicks = 0;
      return
    }
    o.clicks = 0;
    if (v.screenclick == 1) {
      o.system.mobile && v.nombclck == 1 ? '' : o.actions.ScreenClick()
    }
  }

  function DoubleClick(e) {
    ClearClick();
    var y = false;
    if (v.hotkey.seeksides == 1) {
      if (e) {
        if (v.hotkey.seeksidesmob == 1 && !o.system.mobile) {} else {
          var x;
          if (o.system.mobile) {
            x = e.layerX;
            if (!x) {
              if (e.changedTouches) {
                x = e.changedTouches[0].pageX - findLeft(o.frame)
              }
            }
          } else {
            x = e.offsetX
          }
          if (o.fzoom > 1) {
            x = x / o.fzoom
          }
          if (x) {
            if (x < o.screen_w / 2) {
              if (x < o.screen_w * 20 / 100) {
                apiProcessor("seek", "-" + existv(v.hotkey.seeksidesec, 10) * o.clicks);
                v.hotkey.icons == 1 && v.hotkey.seekicon == 1 ? PluginHotIcon('seek', 0) : '';
                y = true
              }
            } else {
              if (x > o.screen_w - o.screen_w * 20 / 100) {
                apiProcessor("seek", "+" + existv(v.hotkey.seeksidesec, 10) * o.clicks);
                v.hotkey.icons == 1 && v.hotkey.seekicon == 1 ? PluginHotIcon('seek', 1) : '';
                y = true
              }
            }
            if (y) {
              if (e.stopPropagation) e.stopPropagation()
            }
          }
        }
      }
    }
    if (!y) {
      if (v.doubleclick == 1) {
        if (v.nativecontrolsmobile == 1 && o.system.mobile) {} else {
          o.fullscreen ? o.actions.Normalscreen() : o.actions.Fullscreen()
        }
      }
    }
  }

  function ClearClick() {
    clearTimeout(o.click_t);
    o.click_t = undefined
  }

  function FrameResizer(x) {
    if (o.screen_lw != o.frame.offsetWidth) {
      x ? o.screen_lw = o.frame.offsetWidth : '';
      FrameResizer()
    } else {
      MainResize()
    }
  }

  function MainResize() {
    var y = false;
    if (o.normal_w != o.frame.offsetWidth || o.normal_h != o.frame.offsetHeight) {
      y = true
    }
    MainUpdateSize();
    o.controls ? o.controls.resize() : '';
    o.media.resize();
    y && !o.fullscreen ? js("resize", o.normal_w + ',' + o.normal_h) : ''
  }

  function MainUpdateSize() {
    var xw = o.frame.offsetWidth;
    var xh = o.frame.offsetHeight;
    if (o.controls) {
      if (v.change2playlist == 1) {
        if (v.playlist.position != "bottom") {
          var x = o.controls.PlaylistG("scroll_height") + o.controls.PlaylistG("top") + 5 + o.controls.PlaylistG("margin_bottom") + existv(v.change2playlist_bottom, 0);
          css(o.container, {
            "height": x
          })
        }
      }
    }
    if (o.aspect > 0 && !o.fullscreen && !o.fullscreen_start) {
      xh = xw / o.aspect + existv(v.screenmarginbottom, 0);
      css(o.container, {
        "height": xh
      })
    }
    if (!o.fullscreen && !o.fullscreen_start && !o.fullscreen_process) {
      o.normal_w = Math.round(xw);
      o.normal_h = Math.round(xh)
    }
    if (o.system.mobile && o.fullscreen && v.landfullmobile == 1 && screen.orientation) {
      if (o.aspect > 0) {
        if (o.aspect < 1 || o.media.ratio() < 1) {
          var sp = screen.orientation.lock('portrait');
          if (sp !== undefined) {
            sp.then(function() {}).catch(function(e) {})
          }
        } else {
          var sp = screen.orientation.lock('landscape');
          if (sp !== undefined) {
            sp.then(function() {}).catch(function(e) {})
          }
        }
      } else {
        var sp = screen.orientation.lock('landscape');
        if (sp !== undefined) {
          sp.then(function() {}).catch(function(e) {})
        }
      }
    }
    o.screen_w = xw;
    o.screen_h = xh;
    if (exist(v.title) && o.controls) {
      v.title != '' ? o.controls.updateTitle() : ''
    }
    if (exist(o.custom_aspect)) {
      o.media.scale(o.custom_aspect)
    }
    if (o.vast && !o.fullscreen) {
      o.vast.Resize()
    }
    o.droplist ? o.droplist.Resize() : '';
    o.quiz ? o.quiz.Resize() : '';
    o.effects ? o.effects.api('resize') : ''
  }

  function Title() {
    o.actions.TitleTemplate(v);
    for (var x in v) {
      if (v.hasOwnProperty(x)) {
        if (x.indexOf("title") == 0) {
          if (v[x] != '') {
            o.maintitle = v[x];
            o.actions.Title(x)
          }
        }
      }
    }
    o.mediatags ? o.mediatags.read() : ''
  }

  function Poster(url, container, scale) {
    if (url) {
      if (url != '') {
        if (v.fplace == 1) {
          url = fplace(url)
        }
        if (container == o.poster && url == o.currentposter) {} else {
          if (url.indexOf("#" + v.enc2) == 0) {
            url = o[o.fd[0]](url)
          }
          if (url.indexOf("#0") == 0) {
            url = fd0(url)
          }
          url = checkBase64(url);
          if (exist(v.preposter) && url.indexOf("//") == -1) {
            url = v.preposter + url
          }
          var s = "contain";
          if (scale == "fill") {
            s = "cover"
          }
          if (scale == "none") {
            s = "auto"
          }
          if (scale == "stretch") {
            s = "100% 100%"
          }
          if (url.indexOf(' and ') > 0 && container == o.poster) {
            o.pstrs = url.split(' and ');
            clearInterval(o.pstrsin);
            o.pstrsin = setInterval(Posters, existv(v.posterstime, 2) * 1000);
            o.pstrsi = 0;
            url = o.pstrs[0]
          }
          url = url.replace(/ or /g, '"),url("');
          url = url.replace(/\s/g, '%20');
          if (v.pstrvd == 1 && indOf([url], '.mp4')) {
            var tmp = 'pjs' + v.id + '_vdpsrt';
            container.innerHTML = '<video id="' + tmp + '" src="' + url + '" loop=1 playsinline=1 autoplay=1 muted=1 style="width:100%"></video>';
            o.pstrv = document.getElementById(tmp)
          } else {
            o.pstrv = undefined;
            container.innerHTML = '';
            css(container, {
              'background-image': 'url("' + url + '")',
              'background-repeat': 'no-repeat',
              'background-position': 'center',
              'background-size': s
            })
          }
          show(container);
          container == o.poster ? o.currentposter = url : ''
        }
      }
    }
  };

  function Posters() {
    if (exist(o.pstrs) && exist(o.pstrsi)) {
      o.pstrsi++;
      if (o.pstrsi >= o.pstrs.length) {
        o.pstrsi = 0
      }
      Poster(o.pstrs[o.pstrsi], o.poster, v.poster_scale)
    }
  }

  function Logo(x) {
    if (x.on == 1 && exist(x.src)) {
      x.src = checkBase64(x.src);
      var y = createElement("div");
      if (x.src.indexOf("http") > -1 || x.src.indexOf("//") == 0) {
        var z = createElement("img");
        z.src = x.src;
        y.appendChild(z)
      }
      x = UpdateObject(x, v.logo);
      x = MarginPadding(x, 'margin', 'margin');
      css(y, {
        'position': 'absolute'
      });
      if (x.position.indexOf("bottom") > -1) {
        css(y, {
          'bottom': x.marginbottom
        })
      }
      if (x.position.indexOf("right") > -1) {
        css(y, {
          'right': x.marginright
        })
      }
      if (x.position.indexOf("top") > -1) {
        css(y, {
          'top': x.margintop
        })
      }
      if (x.position.indexOf("left") > -1) {
        css(y, {
          'left': x.marginleft
        })
      }
      o.container.appendChild(y)
    }
  };

  function FullscreenChange() {
    if (o.fullscreen && !isFullscreen()) {
      o.actions.NormalscreenUI(true);
      o.system.ff ? MainResize() : ''
    } else {
      if (o.fullscreen_start || o.mouseHere) {
        isFullscreen() ? o.fullscreen = true : '';
        o.actions.FullscreenUI()
      }
    }
    log("fullscreen", o.fullscreen)
  }

  function ParentFS() {
    if (v.observer == 1) {
      Visibility(o.container, "visibility", true)
    }
  }

  function Orientation() {
    log("orientation " + screen.orientation.angle)
  }

  function OrientationChange() {
    if (Math.abs(window.orientation) === 90) {
      log("landscape");
      if (v.landscapefull == 1) {
        var ok = true;
        if (v.lsfullstart == 1 && !o.start) {
          ok = false
        }
        if (v.lsfullplay == 1 && !o.play) {
          ok = false
        }
        if (o.ispipkit) {
          ok = false
        }
        if (o.vast) {
          ok = true
        }!o.fullscreen && ok ? o.actions.Fullscreen() : ''
      }
    } else {
      log("portrait");
      if (v.landscapefull == 1) {
        o.fullscreen && v.landfullmobile != 1 ? o.actions.Normalscreen() : ''
      }
    }
  }

  function isFullscreen(x) {
    !x ? x = document : '';
    var y = false;
    try {
      y = !!(x.webkitFullscreenElement || x.webkitIsFullScreen || x.mozFullScreen || x.msFullscreenElement || (x.fullscreenElement != undefined))
    } catch (e) {
      y = false
    }
    return y
  }

  function isHidden(x) {
    return x.offsetWidth == 0 && x.offsetHeight == 0
  };

  function Destroy() {
    for (var x in o) {
      if (x.indexOf("Interval") > -1) {
        clearInterval(o[x])
      }
      if (x.indexOf("timeout") > -1) {
        clearTimeout(o[x])
      }
    }
    log("Destroyed")
  }
}
!function t(e){var r,i;r=this,i=function(){"use strict";function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function i(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,m(i.key),i)}}function a(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e,r){return(e=m(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},o.apply(this,arguments)}function l(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,h(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,r){return c=d()?Reflect.construct.bind():function(t,e,r){var i=[null];i.push.apply(i,e);var n=new(Function.bind.apply(t,i));return r&&h(n,r.prototype),n},c.apply(null,arguments)}function f(t){var e="function"==typeof Map?new Map:void 0;return f=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return c(t,arguments,u(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),h(i,t)},f(t)}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function v(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function p(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var y={exports:{}};!function(t,e){var r,i,n,a,s;r=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,i=/^(?=([^\/?#]*))\1([^]*)$/,n=/(?:\/|^)\.(?=\/)/g,a=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,s={buildAbsoluteURL:function(t,e,r){if(r=r||{},t=t.trim(),!(e=e.trim())){if(!r.alwaysNormalize)return t;var n=s.parseURL(t);if(!n)throw new Error("Error trying to parse base URL.");return n.path=s.normalizePath(n.path),s.buildURLFromParts(n)}var a=s.parseURL(e);if(!a)throw new Error("Error trying to parse relative URL.");if(a.scheme)return r.alwaysNormalize?(a.path=s.normalizePath(a.path),s.buildURLFromParts(a)):e;var o=s.parseURL(t);if(!o)throw new Error("Error trying to parse base URL.");if(!o.netLoc&&o.path&&"/"!==o.path[0]){var l=i.exec(o.path);o.netLoc=l[1],o.path=l[2]}o.netLoc&&!o.path&&(o.path="/");var u={scheme:o.scheme,netLoc:a.netLoc,path:null,params:a.params,query:a.query,fragment:a.fragment};if(!a.netLoc&&(u.netLoc=o.netLoc,"/"!==a.path[0]))if(a.path){var h=o.path,d=h.substring(0,h.lastIndexOf("/")+1)+a.path;u.path=s.normalizePath(d)}else u.path=o.path,a.params||(u.params=o.params,a.query||(u.query=o.query));return null===u.path&&(u.path=r.alwaysNormalize?s.normalizePath(a.path):a.path),s.buildURLFromParts(u)},parseURL:function(t){var e=r.exec(t);return e?{scheme:e[1]||"",netLoc:e[2]||"",path:e[3]||"",params:e[4]||"",query:e[5]||"",fragment:e[6]||""}:null},normalizePath:function(t){for(t=t.split("").reverse().join("").replace(n,"");t.length!==(t=t.replace(a,"")).length;);return t.split("").reverse().join("")},buildURLFromParts:function(t){return t.scheme+t.netLoc+t.path+t.params+t.query+t.fragment}},t.exports=s}(y);var T=y.exports,E=Number.isFinite||function(t){return"number"==typeof t&&isFinite(t)},S=function(t){return t.MEDIA_ATTACHING="hlsMediaAttaching",t.MEDIA_ATTACHED="hlsMediaAttached",t.MEDIA_DETACHING="hlsMediaDetaching",t.MEDIA_DETACHED="hlsMediaDetached",t.BUFFER_RESET="hlsBufferReset",t.BUFFER_CODECS="hlsBufferCodecs",t.BUFFER_CREATED="hlsBufferCreated",t.BUFFER_APPENDING="hlsBufferAppending",t.BUFFER_APPENDED="hlsBufferAppended",t.BUFFER_EOS="hlsBufferEos",t.BUFFER_FLUSHING="hlsBufferFlushing",t.BUFFER_FLUSHED="hlsBufferFlushed",t.MANIFEST_LOADING="hlsManifestLoading",t.MANIFEST_LOADED="hlsManifestLoaded",t.MANIFEST_PARSED="hlsManifestParsed",t.LEVEL_SWITCHING="hlsLevelSwitching",t.LEVEL_SWITCHED="hlsLevelSwitched",t.LEVEL_LOADING="hlsLevelLoading",t.LEVEL_LOADED="hlsLevelLoaded",t.LEVEL_UPDATED="hlsLevelUpdated",t.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",t.LEVELS_UPDATED="hlsLevelsUpdated",t.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",t.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",t.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",t.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",t.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",t.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",t.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",t.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",t.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",t.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",t.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",t.CUES_PARSED="hlsCuesParsed",t.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",t.INIT_PTS_FOUND="hlsInitPtsFound",t.FRAG_LOADING="hlsFragLoading",t.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",t.FRAG_LOADED="hlsFragLoaded",t.FRAG_DECRYPTED="hlsFragDecrypted",t.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",t.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",t.FRAG_PARSING_METADATA="hlsFragParsingMetadata",t.FRAG_PARSED="hlsFragParsed",t.FRAG_BUFFERED="hlsFragBuffered",t.FRAG_CHANGED="hlsFragChanged",t.FPS_DROP="hlsFpsDrop",t.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",t.ERROR="hlsError",t.DESTROYING="hlsDestroying",t.KEY_LOADING="hlsKeyLoading",t.KEY_LOADED="hlsKeyLoaded",t.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",t.BACK_BUFFER_REACHED="hlsBackBufferReached",t}({}),L=function(t){return t.NETWORK_ERROR="networkError",t.MEDIA_ERROR="mediaError",t.KEY_SYSTEM_ERROR="keySystemError",t.MUX_ERROR="muxError",t.OTHER_ERROR="otherError",t}({}),R=function(t){return t.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",t.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",t.KEY_SYSTEM_NO_SESSION="keySystemNoSession",t.KEY_SYSTEM_NO_CONFIGURED_LICENSE="keySystemNoConfiguredLicense",t.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",t.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED="keySystemServerCertificateRequestFailed",t.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED="keySystemServerCertificateUpdateFailed",t.KEY_SYSTEM_SESSION_UPDATE_FAILED="keySystemSessionUpdateFailed",t.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED="keySystemStatusOutputRestricted",t.KEY_SYSTEM_STATUS_INTERNAL_ERROR="keySystemStatusInternalError",t.MANIFEST_LOAD_ERROR="manifestLoadError",t.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",t.MANIFEST_PARSING_ERROR="manifestParsingError",t.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",t.LEVEL_EMPTY_ERROR="levelEmptyError",t.LEVEL_LOAD_ERROR="levelLoadError",t.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",t.LEVEL_PARSING_ERROR="levelParsingError",t.LEVEL_SWITCH_ERROR="levelSwitchError",t.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",t.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",t.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",t.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",t.FRAG_LOAD_ERROR="fragLoadError",t.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",t.FRAG_DECRYPT_ERROR="fragDecryptError",t.FRAG_PARSING_ERROR="fragParsingError",t.FRAG_GAP="fragGap",t.REMUX_ALLOC_ERROR="remuxAllocError",t.KEY_LOAD_ERROR="keyLoadError",t.KEY_LOAD_TIMEOUT="keyLoadTimeOut",t.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",t.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",t.BUFFER_APPEND_ERROR="bufferAppendError",t.BUFFER_APPENDING_ERROR="bufferAppendingError",t.BUFFER_STALLED_ERROR="bufferStalledError",t.BUFFER_FULL_ERROR="bufferFullError",t.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",t.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",t.INTERNAL_EXCEPTION="internalException",t.INTERNAL_ABORTED="aborted",t.UNKNOWN="unknown",t}({}),A=function(){},k={trace:A,debug:A,log:A,warn:A,info:A,error:A},b=k;function D(t){var e=self.console[t];return e?e.bind(self.console,"["+t+"] >"):A}function I(t,e){if(self.console&&!0===t||"object"==typeof t){!function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];r.forEach((function(e){b[e]=t[e]?t[e].bind(t):D(e)}))}(t,"debug","log","info","warn","error");try{b.log('Debug logs enabled for "'+e+'" in hls.js version 1.4.7')}catch(t){b=k}}else b=k}var w=b,C=/^(\d+)x(\d+)$/,_=/(.+?)=(".*?"|.*?)(?:,|$)/g,P=function(){function t(e){for(var r in"string"==typeof e&&(e=t.parseAttrList(e)),e)e.hasOwnProperty(r)&&("X-"===r.substring(0,2)&&(this.clientAttrs=this.clientAttrs||[],this.clientAttrs.push(r)),this[r]=e[r])}var e=t.prototype;return e.decimalInteger=function(t){var e=parseInt(this[t],10);return e>Number.MAX_SAFE_INTEGER?1/0:e},e.hexadecimalInteger=function(t){if(this[t]){var e=(this[t]||"0x").slice(2);e=(1&e.length?"0":"")+e;for(var r=new Uint8Array(e.length/2),i=0;i<e.length/2;i++)r[i]=parseInt(e.slice(2*i,2*i+2),16);return r}return null},e.hexadecimalIntegerAsNumber=function(t){var e=parseInt(this[t],16);return e>Number.MAX_SAFE_INTEGER?1/0:e},e.decimalFloatingPoint=function(t){return parseFloat(this[t])},e.optionalFloat=function(t,e){var r=this[t];return r?parseFloat(r):e},e.enumeratedString=function(t){return this[t]},e.bool=function(t){return"YES"===this[t]},e.decimalResolution=function(t){var e=C.exec(this[t]);if(null!==e)return{width:parseInt(e[1],10),height:parseInt(e[2],10)}},t.parseAttrList=function(t){var e,r={};for(_.lastIndex=0;null!==(e=_.exec(t));){var i=e[2];0===i.indexOf('"')&&i.lastIndexOf('"')===i.length-1&&(i=i.slice(1,-1)),r[e[1].trim()]=i}return r},t}();function x(t){return"SCTE35-OUT"===t||"SCTE35-IN"===t}var F=function(){function t(t,e){if(this.attr=void 0,this._startDate=void 0,this._endDate=void 0,this._badValueForSameId=void 0,e){var r=e.attr;for(var i in r)if(Object.prototype.hasOwnProperty.call(t,i)&&t[i]!==r[i]){w.warn('DATERANGE tag attribute: "'+i+'" does not match for tags with ID: "'+t.ID+'"'),this._badValueForSameId=i;break}t=o(new P({}),r,t)}if(this.attr=t,this._startDate=new Date(t["START-DATE"]),"END-DATE"in this.attr){var n=new Date(this.attr["END-DATE"]);E(n.getTime())&&(this._endDate=n)}}return a(t,[{key:"id",get:function(){return this.attr.ID}},{key:"class",get:function(){return this.attr.CLASS}},{key:"startDate",get:function(){return this._startDate}},{key:"endDate",get:function(){if(this._endDate)return this._endDate;var t=this.duration;return null!==t?new Date(this._startDate.getTime()+1e3*t):null}},{key:"duration",get:function(){if("DURATION"in this.attr){var t=this.attr.decimalFloatingPoint("DURATION");if(E(t))return t}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}},{key:"plannedDuration",get:function(){return"PLANNED-DURATION"in this.attr?this.attr.decimalFloatingPoint("PLANNED-DURATION"):null}},{key:"endOnNext",get:function(){return this.attr.bool("END-ON-NEXT")}},{key:"isValid",get:function(){return!!this.id&&!this._badValueForSameId&&E(this.startDate.getTime())&&(null===this.duration||this.duration>=0)&&(!this.endOnNext||!!this.class)}}]),t}(),M=function(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}},O="audio",N="video",U="audiovideo",B=function(){function t(t){var e;this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams=((e={})[O]=null,e[N]=null,e[U]=null,e),this.baseurl=t}return t.prototype.setByteRange=function(t,e){var r=t.split("@",2),i=[];1===r.length?i[0]=e?e.byteRangeEndOffset:0:i[0]=parseInt(r[1]),i[1]=parseInt(r[0])+i[0],this._byteRange=i},a(t,[{key:"byteRange",get:function(){return this._byteRange?this._byteRange:[]}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"url",get:function(){return!this._url&&this.baseurl&&this.relurl&&(this._url=T.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""},set:function(t){this._url=t}}]),t}(),G=function(t){function e(e,r){var i;return(i=t.call(this,r)||this)._decryptdata=null,i.rawProgramDateTime=null,i.programDateTime=null,i.tagList=[],i.duration=0,i.sn=0,i.levelkeys=void 0,i.type=void 0,i.loader=null,i.keyLoader=null,i.level=-1,i.cc=0,i.startPTS=void 0,i.endPTS=void 0,i.startDTS=void 0,i.endDTS=void 0,i.start=0,i.deltaPTS=void 0,i.maxStartPTS=void 0,i.minEndPTS=void 0,i.stats=new M,i.urlId=0,i.data=void 0,i.bitrateTest=!1,i.title=null,i.initSegment=null,i.endList=void 0,i.gap=void 0,i.type=e,i}l(e,t);var r=e.prototype;return r.setKeyFormat=function(t){if(this.levelkeys){var e=this.levelkeys[t];e&&!this._decryptdata&&(this._decryptdata=e.getDecryptData(this.sn))}},r.abortRequests=function(){var t,e;null==(t=this.loader)||t.abort(),null==(e=this.keyLoader)||e.abort()},r.setElementaryStreamInfo=function(t,e,r,i,n,a){void 0===a&&(a=!1);var s=this.elementaryStreams,o=s[t];o?(o.startPTS=Math.min(o.startPTS,e),o.endPTS=Math.max(o.endPTS,r),o.startDTS=Math.min(o.startDTS,i),o.endDTS=Math.max(o.endDTS,n)):s[t]={startPTS:e,endPTS:r,startDTS:i,endDTS:n,partial:a}},r.clearElementaryStreamInfo=function(){var t=this.elementaryStreams;t[O]=null,t[N]=null,t[U]=null},a(e,[{key:"decryptdata",get:function(){if(!this.levelkeys&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkeys&&!this.levelkeys.NONE){var t=this.levelkeys.identity;if(t)this._decryptdata=t.getDecryptData(this.sn);else{var e=Object.keys(this.levelkeys);if(1===e.length)return this._decryptdata=this.levelkeys[e[0]].getDecryptData(this.sn)}}return this._decryptdata}},{key:"end",get:function(){return this.start+this.duration}},{key:"endProgramDateTime",get:function(){if(null===this.programDateTime)return null;if(!E(this.programDateTime))return null;var t=E(this.duration)?this.duration:0;return this.programDateTime+1e3*t}},{key:"encrypted",get:function(){var t;if(null!=(t=this._decryptdata)&&t.encrypted)return!0;if(this.levelkeys){var e=Object.keys(this.levelkeys),r=e.length;if(r>1||1===r&&this.levelkeys[e[0]].encrypted)return!0}return!1}}]),e}(B),K=function(t){function e(e,r,i,n,a){var s;(s=t.call(this,i)||this).fragOffset=0,s.duration=0,s.gap=!1,s.independent=!1,s.relurl=void 0,s.fragment=void 0,s.index=void 0,s.stats=new M,s.duration=e.decimalFloatingPoint("DURATION"),s.gap=e.bool("GAP"),s.independent=e.bool("INDEPENDENT"),s.relurl=e.enumeratedString("URI"),s.fragment=r,s.index=n;var o=e.enumeratedString("BYTERANGE");return o&&s.setByteRange(o,a),a&&(s.fragOffset=a.fragOffset+a.duration),s}return l(e,t),a(e,[{key:"start",get:function(){return this.fragment.start+this.fragOffset}},{key:"end",get:function(){return this.start+this.duration}},{key:"loaded",get:function(){var t=this.elementaryStreams;return!!(t.audio||t.video||t.audiovideo)}}]),e}(B),H=function(){function t(t){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.encryptedFragments=void 0,this.playlistParsingError=null,this.variableList=null,this.hasVariableRefs=!1,this.fragments=[],this.encryptedFragments=[],this.dateRanges={},this.url=t}return t.prototype.reloaded=function(t){if(!t)return this.advanced=!0,void(this.updated=!0);var e=this.lastPartSn-t.lastPartSn,r=this.lastPartIndex-t.lastPartIndex;this.updated=this.endSN!==t.endSN||!!r||!!e,this.advanced=this.endSN>t.endSN||e>0||0===e&&r>0,this.updated||this.advanced?this.misses=Math.floor(.6*t.misses):this.misses=t.misses+1,this.availabilityDelay=t.availabilityDelay},a(t,[{key:"hasProgramDateTime",get:function(){return!!this.fragments.length&&E(this.fragments[this.fragments.length-1].programDateTime)}},{key:"levelTargetDuration",get:function(){return this.averagetargetduration||this.targetduration||10}},{key:"drift",get:function(){var t=this.driftEndTime-this.driftStartTime;return t>0?1e3*(this.driftEnd-this.driftStart)/t:1}},{key:"edge",get:function(){return this.partEnd||this.fragmentEnd}},{key:"partEnd",get:function(){var t;return null!=(t=this.partList)&&t.length?this.partList[this.partList.length-1].end:this.fragmentEnd}},{key:"fragmentEnd",get:function(){var t;return null!=(t=this.fragments)&&t.length?this.fragments[this.fragments.length-1].end:0}},{key:"age",get:function(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}},{key:"lastPartIndex",get:function(){var t;return null!=(t=this.partList)&&t.length?this.partList[this.partList.length-1].index:-1}},{key:"lastPartSn",get:function(){var t;return null!=(t=this.partList)&&t.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}]),t}();function V(t){return Uint8Array.from(atob(t),(function(t){return t.charCodeAt(0)}))}function Y(t){var e,r,i=t.split(":"),n=null;if("data"===i[0]&&2===i.length){var a=i[1].split(";"),s=a[a.length-1].split(",");if(2===s.length){var o="base64"===s[0],l=s[1];o?(a.splice(-1,1),n=V(l)):(e=W(l).subarray(0,16),(r=new Uint8Array(16)).set(e,16-e.length),n=r)}}return n}function W(t){return Uint8Array.from(unescape(encodeURIComponent(t)),(function(t){return t.charCodeAt(0)}))}var j={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.fps",PLAYREADY:"com.microsoft.playready",WIDEVINE:"com.widevine.alpha"},q="org.w3.clearkey",X="com.apple.streamingkeydelivery",z="com.microsoft.playready",Q="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";function $(t){switch(t){case X:return j.FAIRPLAY;case z:return j.PLAYREADY;case Q:return j.WIDEVINE;case q:return j.CLEARKEY}}var J="edef8ba979d64acea3c827dcd51d21ed";function Z(t){switch(t){case j.FAIRPLAY:return X;case j.PLAYREADY:return z;case j.WIDEVINE:return Q;case j.CLEARKEY:return q}}function tt(t){var e=t.drmSystems,r=t.widevineLicenseUrl,i=e?[j.FAIRPLAY,j.WIDEVINE,j.PLAYREADY,j.CLEARKEY].filter((function(t){return!!e[t]})):[];return!i[j.WIDEVINE]&&r&&i.push(j.WIDEVINE),i}var et="undefined"!=typeof self&&self.navigator&&self.navigator.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null;function rt(t,e,r){return Uint8Array.prototype.slice?t.slice(e,r):new Uint8Array(Array.prototype.slice.call(t,e,r))}var it,nt=function(t,e){return e+10<=t.length&&73===t[e]&&68===t[e+1]&&51===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},at=function(t,e){return e+10<=t.length&&51===t[e]&&68===t[e+1]&&73===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},st=function(t,e){for(var r=e,i=0;nt(t,e);)i+=10,i+=ot(t,e+6),at(t,e+10)&&(i+=10),e+=i;if(i>0)return t.subarray(r,r+i)},ot=function(t,e){var r=0;return r=(127&t[e])<<21,r|=(127&t[e+1])<<14,r|=(127&t[e+2])<<7,r|=127&t[e+3]},lt=function(t,e){return nt(t,e)&&ot(t,e+6)+10<=t.length-e},ut=function(t){return t&&"PRIV"===t.key&&"com.apple.streaming.transportStreamTimestamp"===t.info},ht=function(t){var e=String.fromCharCode(t[0],t[1],t[2],t[3]),r=ot(t,4);return{type:e,size:r,data:t.subarray(10,10+r)}},dt=function(t){for(var e=0,r=[];nt(t,e);){for(var i=ot(t,e+6),n=(e+=10)+i;e+8<n;){var a=ht(t.subarray(e)),s=ct(a);s&&r.push(s),e+=a.size+10}at(t,e)&&(e+=10)}return r},ct=function(t){return"PRIV"===t.type?ft(t):"W"===t.type[0]?vt(t):gt(t)},ft=function(t){if(!(t.size<2)){var e=pt(t.data,!0),r=new Uint8Array(t.data.subarray(e.length+1));return{key:t.type,info:e,data:r.buffer}}},gt=function(t){if(!(t.size<2)){if("TXXX"===t.type){var e=1,r=pt(t.data.subarray(e),!0);e+=r.length+1;var i=pt(t.data.subarray(e));return{key:t.type,info:r,data:i}}var n=pt(t.data.subarray(1));return{key:t.type,data:n}}},vt=function(t){if("WXXX"===t.type){if(t.size<2)return;var e=1,r=pt(t.data.subarray(e),!0);e+=r.length+1;var i=pt(t.data.subarray(e));return{key:t.type,info:r,data:i}}var n=pt(t.data);return{key:t.type,data:n}},mt=function(t){if(8===t.data.byteLength){var e=new Uint8Array(t.data),r=1&e[3],i=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return i/=45,r&&(i+=47721858.84),Math.round(i)}},pt=function(t,e){void 0===e&&(e=!1);var r=yt();if(r){var i=r.decode(t);if(e){var n=i.indexOf("\0");return-1!==n?i.substring(0,n):i}return i.replace(/\0/g,"")}for(var a,s,o,l=t.length,u="",h=0;h<l;){if(0===(a=t[h++])&&e)return u;if(0!==a&&3!==a)switch(a>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:u+=String.fromCharCode(a);break;case 12:case 13:s=t[h++],u+=String.fromCharCode((31&a)<<6|63&s);break;case 14:s=t[h++],o=t[h++],u+=String.fromCharCode((15&a)<<12|(63&s)<<6|(63&o)<<0)}}return u};function yt(){return it||void 0===self.TextDecoder||(it=new self.TextDecoder("utf-8")),it}var Tt=function(t){for(var e="",r=0;r<t.length;r++){var i=t[r].toString(16);i.length<2&&(i="0"+i),e+=i}return e},Et=Math.pow(2,32)-1,St=[].push,Lt={video:1,audio:2,id3:3,text:4};function Rt(t){return String.fromCharCode.apply(null,t)}function At(t,e){var r=t[e]<<8|t[e+1];return r<0?65536+r:r}function kt(t,e){var r=bt(t,e);return r<0?4294967296+r:r}function bt(t,e){return t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}function Dt(t,e,r){t[e]=r>>24,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=255&r}function It(t,e){var r=[];if(!e.length)return r;for(var i=t.byteLength,n=0;n<i;){var a=kt(t,n),s=a>1?n+a:i;if(Rt(t.subarray(n+4,n+8))===e[0])if(1===e.length)r.push(t.subarray(n+8,s));else{var o=It(t.subarray(n+8,s),e.slice(1));o.length&&St.apply(r,o)}n=s}return r}function wt(t){var e=[],r=t[0],i=8,n=kt(t,i);i+=4,i+=0===r?8:16,i+=2;var a=t.length+0,s=At(t,i);i+=2;for(var o=0;o<s;o++){var l=i,u=kt(t,l);l+=4;var h=2147483647&u;if(1==(2147483648&u)>>>31)return w.warn("SIDX has hierarchical references (not supported)"),null;var d=kt(t,l);l+=4,e.push({referenceSize:h,subsegmentDuration:d,info:{duration:d/n,start:a,end:a+h-1}}),a+=h,i=l+=4}return{earliestPresentationTime:0,timescale:n,version:r,referencesCount:s,references:e}}function Ct(t){for(var e=[],r=It(t,["moov","trak"]),i=0;i<r.length;i++){var n=r[i],a=It(n,["tkhd"])[0];if(a){var s=a[0],o=0===s?12:20,l=kt(a,o),u=It(n,["mdia","mdhd"])[0];if(u){var h=kt(u,o=0===(s=u[0])?12:20),d=It(n,["mdia","hdlr"])[0];if(d){var c=Rt(d.subarray(8,12)),f={soun:O,vide:N}[c];if(f){var g=It(n,["mdia","minf","stbl","stsd"])[0],v=void 0;g&&(v=Rt(g.subarray(12,16))),e[l]={timescale:h,type:f},e[f]={timescale:h,id:l,codec:v}}}}}}return It(t,["moov","mvex","trex"]).forEach((function(t){var r=kt(t,4),i=e[r];i&&(i.default={duration:kt(t,12),flags:kt(t,20)})})),e}function _t(t){var e=It(t,["schm"])[0];if(e){var r=Rt(e.subarray(4,8));if("cbcs"===r||"cenc"===r)return It(t,["schi","tenc"])[0]}return w.error("[eme] missing 'schm' box"),null}function Pt(t){var e=kt(t,0),r=8;1&e&&(r+=4),4&e&&(r+=4);for(var i=0,n=kt(t,4),a=0;a<n;a++)256&e&&(i+=kt(t,r),r+=4),512&e&&(r+=4),1024&e&&(r+=4),2048&e&&(r+=4);return i}function xt(t,e){var r=new Uint8Array(t.length+e.length);return r.set(t),r.set(e,t.length),r}function Ft(t,e){var r=[],i=e.samples,n=e.timescale,a=e.id,s=!1;return It(i,["moof"]).map((function(o){var l=o.byteOffset-8;It(o,["traf"]).map((function(o){var u=It(o,["tfdt"]).map((function(t){var e=t[0],r=kt(t,4);return 1===e&&(r*=Math.pow(2,32),r+=kt(t,8)),r/n}))[0];return void 0!==u&&(t=u),It(o,["tfhd"]).map((function(u){var h=kt(u,4),d=16777215&kt(u,0),c=0,f=0!=(16&d),g=0,v=0!=(32&d),m=8;h===a&&(0!=(1&d)&&(m+=8),0!=(2&d)&&(m+=4),0!=(8&d)&&(c=kt(u,m),m+=4),f&&(g=kt(u,m),m+=4),v&&(m+=4),"video"===e.type&&(s=function(t){if(!t)return!1;var e=t.indexOf("."),r=e<0?t:t.substring(0,e);return"hvc1"===r||"hev1"===r||"dvh1"===r||"dvhe"===r}(e.codec)),It(o,["trun"]).map((function(a){var o=a[0],u=16777215&kt(a,0),h=0!=(1&u),d=0,f=0!=(4&u),v=0!=(256&u),m=0,p=0!=(512&u),y=0,T=0!=(1024&u),E=0!=(2048&u),S=0,L=kt(a,4),R=8;h&&(d=kt(a,R),R+=4),f&&(R+=4);for(var A=d+l,k=0;k<L;k++){if(v?(m=kt(a,R),R+=4):m=c,p?(y=kt(a,R),R+=4):y=g,T&&(R+=4),E&&(S=0===o?kt(a,R):bt(a,R),R+=4),e.type===N)for(var b=0;b<y;){var D=kt(i,A);Mt(s,i[A+=4])&&Ot(i.subarray(A,A+D),s?2:1,t+S/n,r),A+=D,b+=D+4}t+=m/n}})))}))}))})),r}function Mt(t,e){if(t){var r=e>>1&63;return 39===r||40===r}return 6==(31&e)}function Ot(t,e,r,i){var n=Nt(t),a=0;a+=e;for(var s=0,o=0,l=!1,u=0;a<n.length;){s=0;do{if(a>=n.length)break;s+=u=n[a++]}while(255===u);o=0;do{if(a>=n.length)break;o+=u=n[a++]}while(255===u);var h=n.length-a;if(!l&&4===s&&a<n.length){if(l=!0,181===n[a++]){var d=At(n,a);if(a+=2,49===d){var c=kt(n,a);if(a+=4,1195456820===c){var f=n[a++];if(3===f){var g=n[a++],v=64&g,m=v?2+3*(31&g):0,p=new Uint8Array(m);if(v){p[0]=g;for(var y=1;y<m;y++)p[y]=n[a++]}i.push({type:f,payloadType:s,pts:r,bytes:p})}}}}}else if(5===s&&o<h){if(l=!0,o>16){for(var T=[],E=0;E<16;E++){var S=n[a++].toString(16);T.push(1==S.length?"0"+S:S),3!==E&&5!==E&&7!==E&&9!==E||T.push("-")}for(var L=o-16,R=new Uint8Array(L),A=0;A<L;A++)R[A]=n[a++];i.push({payloadType:s,pts:r,uuid:T.join(""),userData:pt(R),userDataBytes:R})}}else if(o<h)a+=o;else if(o>h)break}}function Nt(t){for(var e=t.byteLength,r=[],i=1;i<e-2;)0===t[i]&&0===t[i+1]&&3===t[i+2]?(r.push(i+2),i+=2):i++;if(0===r.length)return t;var n=e-r.length,a=new Uint8Array(n),s=0;for(i=0;i<n;s++,i++)s===r[0]&&(s++,r.shift()),a[i]=t[s];return a}function Ut(t,e,r){if(16!==t.byteLength)throw new RangeError("Invalid system id");var i,n,a;if(e){i=1,n=new Uint8Array(16*e.length);for(var s=0;s<e.length;s++){var o=e[s];if(16!==o.byteLength)throw new RangeError("Invalid key");n.set(o,16*s)}}else i=0,n=new Uint8Array;i>0?(a=new Uint8Array(4),e.length>0&&new DataView(a.buffer).setUint32(0,e.length,!1)):a=new Uint8Array;var l=new Uint8Array(4);return r&&r.byteLength>0&&new DataView(l.buffer).setUint32(0,r.byteLength,!1),function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(var n=r.length,a=8,s=n;s--;)a+=r[s].byteLength;var o=new Uint8Array(a);for(o[0]=a>>24&255,o[1]=a>>16&255,o[2]=a>>8&255,o[3]=255&a,o.set(t,4),s=0,a=8;s<n;s++)o.set(r[s],a),a+=r[s].byteLength;return o}([112,115,115,104],new Uint8Array([i,0,0,0]),t,a,n,l,r||new Uint8Array)}var Bt={},Gt=function(){function t(t,e,r,i,n){void 0===i&&(i=[1]),void 0===n&&(n=null),this.uri=void 0,this.method=void 0,this.keyFormat=void 0,this.keyFormatVersions=void 0,this.encrypted=void 0,this.isCommonEncryption=void 0,this.iv=null,this.key=null,this.keyId=null,this.pssh=null,this.method=t,this.uri=e,this.keyFormat=r,this.keyFormatVersions=i,this.iv=n,this.encrypted=!!t&&"NONE"!==t,this.isCommonEncryption=this.encrypted&&"AES-128"!==t}t.clearKeyUriToKeyIdMap=function(){Bt={}};var e=t.prototype;return e.isSupported=function(){if(this.method){if("AES-128"===this.method||"NONE"===this.method)return!0;if("identity"===this.keyFormat)return"SAMPLE-AES"===this.method;switch(this.keyFormat){case X:case Q:case z:case q:return-1!==["ISO-23001-7","SAMPLE-AES","SAMPLE-AES-CENC","SAMPLE-AES-CTR"].indexOf(this.method)}}return!1},e.getDecryptData=function(e){if(!this.encrypted||!this.uri)return null;if("AES-128"===this.method&&this.uri&&!this.iv){"number"!=typeof e&&("AES-128"!==this.method||this.iv||w.warn('missing IV for initialization segment with method="'+this.method+'" - compliance issue'),e=0);var r=function(t){for(var e=new Uint8Array(16),r=12;r<16;r++)e[r]=t>>8*(15-r)&255;return e}(e);return new t(this.method,this.uri,"identity",this.keyFormatVersions,r)}var i=Y(this.uri);if(i)switch(this.keyFormat){case Q:this.pssh=i,i.length>=22&&(this.keyId=i.subarray(i.length-22,i.length-6));break;case z:var n=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);this.pssh=Ut(n,null,i);var a=new Uint16Array(i.buffer,i.byteOffset,i.byteLength/2),s=String.fromCharCode.apply(null,Array.from(a)),o=s.substring(s.indexOf("<"),s.length),l=(new DOMParser).parseFromString(o,"text/xml").getElementsByTagName("KID")[0];if(l){var u=l.childNodes[0]?l.childNodes[0].nodeValue:l.getAttribute("VALUE");if(u){var h=V(u).subarray(0,16);!function(t){var e=function(t,e,r){var i=t[e];t[e]=t[r],t[r]=i};e(t,0,3),e(t,1,2),e(t,4,5),e(t,6,7)}(h),this.keyId=h}}break;default:var d=i.subarray(0,16);if(16!==d.length){var c=new Uint8Array(16);c.set(d,16-d.length),d=c}this.keyId=d}if(!this.keyId||16!==this.keyId.byteLength){var f=Bt[this.uri];if(!f){var g=Object.keys(Bt).length%Number.MAX_SAFE_INTEGER;f=new Uint8Array(16),new DataView(f.buffer,12,4).setUint32(0,g),Bt[this.uri]=f}this.keyId=f}return this},t}(),Kt=/\{\$([a-zA-Z0-9-_]+)\}/g;function Ht(t){return Kt.test(t)}function Vt(t,e,r){if(null!==t.variableList||t.hasVariableRefs)for(var i=r.length;i--;){var n=r[i],a=e[n];a&&(e[n]=Yt(t,a))}}function Yt(t,e){if(null!==t.variableList||t.hasVariableRefs){var r=t.variableList;return e.replace(Kt,(function(e){var i=e.substring(2,e.length-1),n=null==r?void 0:r[i];return void 0===n?(t.playlistParsingError||(t.playlistParsingError=new Error('Missing preceding EXT-X-DEFINE tag for Variable Reference: "'+i+'"')),e):n}))}return e}function Wt(t,e,r){var i,n,a=t.variableList;if(a||(t.variableList=a={}),"QUERYPARAM"in e){i=e.QUERYPARAM;try{var s=new self.URL(r).searchParams;if(!s.has(i))throw new Error('"'+i+'" does not match any query parameter in URI: "'+r+'"');n=s.get(i)}catch(e){t.playlistParsingError||(t.playlistParsingError=new Error("EXT-X-DEFINE QUERYPARAM: "+e.message))}}else i=e.NAME,n=e.VALUE;i in a?t.playlistParsingError||(t.playlistParsingError=new Error('EXT-X-DEFINE duplicate Variable Name declarations: "'+i+'"')):a[i]=n||""}function jt(t,e,r){var i=e.IMPORT;if(r&&i in r){var n=t.variableList;n||(t.variableList=n={}),n[i]=r[i]}else t.playlistParsingError||(t.playlistParsingError=new Error('EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "'+i+'"'))}function qt(){if("undefined"!=typeof self)return self.MediaSource||self.WebKitMediaSource}var Xt={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,av01:!0,drac:!0,dva1:!0,dvav:!0,dvh1:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0},text:{stpp:!0,wvtt:!0}},zt=qt();function Qt(t,e){var r;return null!=(r=null==zt?void 0:zt.isTypeSupported((e||"video")+'/mp4;codecs="'+t+'"'))&&r}var $t=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,Jt=/#EXT-X-MEDIA:(.*)/g,Zt=/^#EXT(?:INF|-X-TARGETDURATION):/m,te=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),ee=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|")),re=function(){function t(){}return t.findGroup=function(t,e){for(var r=0;r<t.length;r++){var i=t[r];if(i.id===e)return i}},t.convertAVC1ToAVCOTI=function(t){var e=t.split(".");if(e.length>2){var r=e.shift()+".";return r+=parseInt(e.shift()).toString(16),r+=("000"+parseInt(e.shift()).toString(16)).slice(-4)}return t},t.resolve=function(t,e){return T.buildAbsoluteURL(e,t,{alwaysNormalize:!0})},t.isMediaPlaylist=function(t){return Zt.test(t)},t.parseMasterPlaylist=function(e,r){var i,n={contentSteering:null,levels:[],playlistParsingError:null,sessionData:null,sessionKeys:null,startTimeOffset:null,variableList:null,hasVariableRefs:Ht(e)},a=[];for($t.lastIndex=0;null!=(i=$t.exec(e));)if(i[1]){var s,o=new P(i[1]);Vt(n,o,["CODECS","SUPPLEMENTAL-CODECS","ALLOWED-CPC","PATHWAY-ID","STABLE-VARIANT-ID","AUDIO","VIDEO","SUBTITLES","CLOSED-CAPTIONS","NAME"]);var l=Yt(n,i[2]),u={attrs:o,bitrate:o.decimalInteger("AVERAGE-BANDWIDTH")||o.decimalInteger("BANDWIDTH"),name:o.NAME,url:t.resolve(l,r)},h=o.decimalResolution("RESOLUTION");h&&(u.width=h.width,u.height=h.height),ae((o.CODECS||"").split(/[ ,]+/).filter((function(t){return t})),u),u.videoCodec&&-1!==u.videoCodec.indexOf("avc1")&&(u.videoCodec=t.convertAVC1ToAVCOTI(u.videoCodec)),null!=(s=u.unknownCodecs)&&s.length||a.push(u),n.levels.push(u)}else if(i[3]){var d=i[3],c=i[4];switch(d){case"SESSION-DATA":var f=new P(c);Vt(n,f,["DATA-ID","LANGUAGE","VALUE","URI"]);var g=f["DATA-ID"];g&&(null===n.sessionData&&(n.sessionData={}),n.sessionData[g]=f);break;case"SESSION-KEY":var v=ie(c,r,n);v.encrypted&&v.isSupported()?(null===n.sessionKeys&&(n.sessionKeys=[]),n.sessionKeys.push(v)):w.warn('[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "'+c+'"');break;case"DEFINE":var m=new P(c);Vt(n,m,["NAME","VALUE","QUERYPARAM"]),Wt(n,m,r);break;case"CONTENT-STEERING":var p=new P(c);Vt(n,p,["SERVER-URI","PATHWAY-ID"]),n.contentSteering={uri:t.resolve(p["SERVER-URI"],r),pathwayId:p["PATHWAY-ID"]||"."};break;case"START":n.startTimeOffset=ne(c)}}var y=a.length>0&&a.length<n.levels.length;return n.levels=y?a:n.levels,0===n.levels.length&&(n.playlistParsingError=new Error("no levels found in manifest")),n},t.parseMasterPlaylistMedia=function(e,r,i){var n,a={},s=i.levels,o={AUDIO:s.map((function(t){return{id:t.attrs.AUDIO,audioCodec:t.audioCodec}})),SUBTITLES:s.map((function(t){return{id:t.attrs.SUBTITLES,textCodec:t.textCodec}})),"CLOSED-CAPTIONS":[]},l=0;for(Jt.lastIndex=0;null!==(n=Jt.exec(e));){var u=new P(n[1]),h=u.TYPE;if(h){var d=o[h],c=a[h]||[];a[h]=c,Vt(i,u,["URI","GROUP-ID","LANGUAGE","ASSOC-LANGUAGE","STABLE-RENDITION-ID","NAME","INSTREAM-ID","CHARACTERISTICS","CHANNELS"]);var f={attrs:u,bitrate:0,id:l++,groupId:u["GROUP-ID"]||"",instreamId:u["INSTREAM-ID"],name:u.NAME||u.LANGUAGE||"",type:h,default:u.bool("DEFAULT"),autoselect:u.bool("AUTOSELECT"),forced:u.bool("FORCED"),lang:u.LANGUAGE,url:u.URI?t.resolve(u.URI,r):""};if(null!=d&&d.length){var g=t.findGroup(d,f.groupId)||d[0];se(f,g,"audioCodec"),se(f,g,"textCodec")}c.push(f)}}return a},t.parseLevelPlaylist=function(t,e,r,i,n,a){var s,l,u,h=new H(e),d=h.fragments,c=null,f=0,g=0,v=0,m=0,p=null,y=new G(i,e),T=-1,S=!1;for(te.lastIndex=0,h.m3u8=t,h.hasVariableRefs=Ht(t);null!==(s=te.exec(t));){S&&(S=!1,(y=new G(i,e)).start=v,y.sn=f,y.cc=m,y.level=r,c&&(y.initSegment=c,y.rawProgramDateTime=c.rawProgramDateTime,c.rawProgramDateTime=null));var L=s[1];if(L){y.duration=parseFloat(L);var R=(" "+s[2]).slice(1);y.title=R||null,y.tagList.push(R?["INF",L,R]:["INF",L])}else if(s[3]){if(E(y.duration)){y.start=v,u&&ue(y,u,h),y.sn=f,y.level=r,y.cc=m,y.urlId=n,d.push(y);var A=(" "+s[3]).slice(1);y.relurl=Yt(h,A),oe(y,p),p=y,v+=y.duration,f++,g=0,S=!0}}else if(s[4]){var k=(" "+s[4]).slice(1);p?y.setByteRange(k,p):y.setByteRange(k)}else if(s[5])y.rawProgramDateTime=(" "+s[5]).slice(1),y.tagList.push(["PROGRAM-DATE-TIME",y.rawProgramDateTime]),-1===T&&(T=d.length);else{if(!(s=s[0].match(ee))){w.warn("No matches on slow regex match for level playlist!");continue}for(l=1;l<s.length&&void 0===s[l];l++);var b=(" "+s[l]).slice(1),D=(" "+s[l+1]).slice(1),I=s[l+2]?(" "+s[l+2]).slice(1):"";switch(b){case"PLAYLIST-TYPE":h.type=D.toUpperCase();break;case"MEDIA-SEQUENCE":f=h.startSN=parseInt(D);break;case"SKIP":var C=new P(D);Vt(h,C,["RECENTLY-REMOVED-DATERANGES"]);var _=C.decimalInteger("SKIPPED-SEGMENTS");if(E(_)){h.skippedSegments=_;for(var x=_;x--;)d.unshift(null);f+=_}var M=C.enumeratedString("RECENTLY-REMOVED-DATERANGES");M&&(h.recentlyRemovedDateranges=M.split("\t"));break;case"TARGETDURATION":h.targetduration=Math.max(parseInt(D),1);break;case"VERSION":h.version=parseInt(D);break;case"EXTM3U":break;case"ENDLIST":h.live=!1;break;case"#":(D||I)&&y.tagList.push(I?[D,I]:[D]);break;case"DISCONTINUITY":m++,y.tagList.push(["DIS"]);break;case"GAP":y.gap=!0,y.tagList.push([b]);break;case"BITRATE":y.tagList.push([b,D]);break;case"DATERANGE":var O=new P(D);Vt(h,O,["ID","CLASS","START-DATE","END-DATE","SCTE35-CMD","SCTE35-OUT","SCTE35-IN"]),Vt(h,O,O.clientAttrs);var N=new F(O,h.dateRanges[O.ID]);N.isValid||h.skippedSegments?h.dateRanges[N.id]=N:w.warn('Ignoring invalid DATERANGE tag: "'+D+'"'),y.tagList.push(["EXT-X-DATERANGE",D]);break;case"DEFINE":var U=new P(D);Vt(h,U,["NAME","VALUE","IMPORT","QUERYPARAM"]),"IMPORT"in U?jt(h,U,a):Wt(h,U,e);break;case"DISCONTINUITY-SEQUENCE":m=parseInt(D);break;case"KEY":var B=ie(D,e,h);if(B.isSupported()){if("NONE"===B.method){u=void 0;break}u||(u={}),u[B.keyFormat]&&(u=o({},u)),u[B.keyFormat]=B}else w.warn('[Keys] Ignoring invalid EXT-X-KEY tag: "'+D+'"');break;case"START":h.startTimeOffset=ne(D);break;case"MAP":var V=new P(D);if(Vt(h,V,["BYTERANGE","URI"]),y.duration){var Y=new G(i,e);le(Y,V,r,u),c=Y,y.initSegment=c,c.rawProgramDateTime&&!y.rawProgramDateTime&&(y.rawProgramDateTime=c.rawProgramDateTime)}else le(y,V,r,u),c=y,S=!0;break;case"SERVER-CONTROL":var W=new P(D);h.canBlockReload=W.bool("CAN-BLOCK-RELOAD"),h.canSkipUntil=W.optionalFloat("CAN-SKIP-UNTIL",0),h.canSkipDateRanges=h.canSkipUntil>0&&W.bool("CAN-SKIP-DATERANGES"),h.partHoldBack=W.optionalFloat("PART-HOLD-BACK",0),h.holdBack=W.optionalFloat("HOLD-BACK",0);break;case"PART-INF":var j=new P(D);h.partTarget=j.decimalFloatingPoint("PART-TARGET");break;case"PART":var q=h.partList;q||(q=h.partList=[]);var X=g>0?q[q.length-1]:void 0,z=g++,Q=new P(D);Vt(h,Q,["BYTERANGE","URI"]);var $=new K(Q,y,e,z,X);q.push($),y.duration+=$.duration;break;case"PRELOAD-HINT":var J=new P(D);Vt(h,J,["URI"]),h.preloadHint=J;break;case"RENDITION-REPORT":var Z=new P(D);Vt(h,Z,["URI"]),h.renditionReports=h.renditionReports||[],h.renditionReports.push(Z);break;default:w.warn("line parsed but not handled: "+s)}}}p&&!p.relurl?(d.pop(),v-=p.duration,h.partList&&(h.fragmentHint=p)):h.partList&&(oe(y,p),y.cc=m,h.fragmentHint=y,u&&ue(y,u,h));var tt=d.length,et=d[0],rt=d[tt-1];if((v+=h.skippedSegments*h.targetduration)>0&&tt&&rt){h.averagetargetduration=v/tt;var it=rt.sn;h.endSN="initSegment"!==it?it:0,h.live||(rt.endList=!0),et&&(h.startCC=et.cc)}else h.endSN=0,h.startCC=0;return h.fragmentHint&&(v+=h.fragmentHint.duration),h.totalduration=v,h.endCC=m,T>0&&function(t,e){for(var r=t[e],i=e;i--;){var n=t[i];if(!n)return;n.programDateTime=r.programDateTime-1e3*n.duration,r=n}}(d,T),h},t}();function ie(t,e,r){var i,n,a=new P(t);Vt(r,a,["KEYFORMAT","KEYFORMATVERSIONS","URI","IV","URI"]);var s=null!=(i=a.METHOD)?i:"",o=a.URI,l=a.hexadecimalInteger("IV"),u=a.KEYFORMATVERSIONS,h=null!=(n=a.KEYFORMAT)?n:"identity";o&&a.IV&&!l&&w.error("Invalid IV: "+a.IV);var d=o?re.resolve(o,e):"",c=(u||"1").split("/").map(Number).filter(Number.isFinite);return new Gt(s,d,h,c,l)}function ne(t){var e=new P(t).decimalFloatingPoint("TIME-OFFSET");return E(e)?e:null}function ae(t,e){["video","audio","text"].forEach((function(r){var i=t.filter((function(t){return function(t,e){var r=Xt[e];return!!r&&!0===r[t.slice(0,4)]}(t,r)}));if(i.length){var n=i.filter((function(t){return 0===t.lastIndexOf("avc1",0)||0===t.lastIndexOf("mp4a",0)}));e[r+"Codec"]=n.length>0?n[0]:i[0],t=t.filter((function(t){return-1===i.indexOf(t)}))}})),e.unknownCodecs=t}function se(t,e,r){var i=e[r];i&&(t[r]=i)}function oe(t,e){t.rawProgramDateTime?t.programDateTime=Date.parse(t.rawProgramDateTime):null!=e&&e.programDateTime&&(t.programDateTime=e.endProgramDateTime),E(t.programDateTime)||(t.programDateTime=null,t.rawProgramDateTime=null)}function le(t,e,r,i){t.relurl=e.URI,e.BYTERANGE&&t.setByteRange(e.BYTERANGE),t.level=r,t.sn="initSegment",i&&(t.levelkeys=i),t.initSegment=null}function ue(t,e,r){t.levelkeys=e;var i=r.encryptedFragments;i.length&&i[i.length-1].levelkeys===e||!Object.keys(e).some((function(t){return e[t].isCommonEncryption}))||i.push(t)}var he="manifest",de="level",ce="audioTrack",fe="subtitleTrack",ge="main",ve="audio",me="subtitle";function pe(t){switch(t.type){case ce:return ve;case fe:return me;default:return ge}}function ye(t,e){var r=t.url;return void 0!==r&&0!==r.indexOf("data:")||(r=e.url),r}var Te=function(){function t(t){this.hls=void 0,this.loaders=Object.create(null),this.variableList=null,this.hls=t,this.registerListeners()}var e=t.prototype;return e.startLoad=function(t){},e.stopLoad=function(){this.destroyInternalLoaders()},e.registerListeners=function(){var t=this.hls;t.on(S.MANIFEST_LOADING,this.onManifestLoading,this),t.on(S.LEVEL_LOADING,this.onLevelLoading,this),t.on(S.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),t.on(S.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},e.unregisterListeners=function(){var t=this.hls;t.off(S.MANIFEST_LOADING,this.onManifestLoading,this),t.off(S.LEVEL_LOADING,this.onLevelLoading,this),t.off(S.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),t.off(S.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},e.createInternalLoader=function(t){var e=this.hls.config,r=e.pLoader,i=e.loader,n=new(r||i)(e);return this.loaders[t.type]=n,n},e.getInternalLoader=function(t){return this.loaders[t.type]},e.resetInternalLoader=function(t){this.loaders[t]&&delete this.loaders[t]},e.destroyInternalLoaders=function(){for(var t in this.loaders){var e=this.loaders[t];e&&e.destroy(),this.resetInternalLoader(t)}},e.destroy=function(){this.variableList=null,this.unregisterListeners(),this.destroyInternalLoaders()},e.onManifestLoading=function(t,e){var r=e.url;this.variableList=null,this.load({id:null,level:0,responseType:"text",type:he,url:r,deliveryDirectives:null})},e.onLevelLoading=function(t,e){var r=e.id,i=e.level,n=e.url,a=e.deliveryDirectives;this.load({id:r,level:i,responseType:"text",type:de,url:n,deliveryDirectives:a})},e.onAudioTrackLoading=function(t,e){var r=e.id,i=e.groupId,n=e.url,a=e.deliveryDirectives;this.load({id:r,groupId:i,level:null,responseType:"text",type:ce,url:n,deliveryDirectives:a})},e.onSubtitleTrackLoading=function(t,e){var r=e.id,i=e.groupId,n=e.url,a=e.deliveryDirectives;this.load({id:r,groupId:i,level:null,responseType:"text",type:fe,url:n,deliveryDirectives:a})},e.load=function(t){var e,r,i,n=this,a=this.hls.config,s=this.getInternalLoader(t);if(s){var l=s.context;if(l&&l.url===t.url)return void w.trace("[playlist-loader]: playlist request ongoing");w.log("[playlist-loader]: aborting previous loader for type: "+t.type),s.abort()}if(r=t.type===he?a.manifestLoadPolicy.default:o({},a.playlistLoadPolicy.default,{timeoutRetry:null,errorRetry:null}),s=this.createInternalLoader(t),null!=(e=t.deliveryDirectives)&&e.part&&(t.type===de&&null!==t.level?i=this.hls.levels[t.level].details:t.type===ce&&null!==t.id?i=this.hls.audioTracks[t.id].details:t.type===fe&&null!==t.id&&(i=this.hls.subtitleTracks[t.id].details),i)){var u=i.partTarget,h=i.targetduration;if(u&&h){var d=1e3*Math.max(3*u,.8*h);r=o({},r,{maxTimeToFirstByteMs:Math.min(d,r.maxTimeToFirstByteMs),maxLoadTimeMs:Math.min(d,r.maxTimeToFirstByteMs)})}}var c=r.errorRetry||r.timeoutRetry||{},f={loadPolicy:r,timeout:r.maxLoadTimeMs,maxRetry:c.maxNumRetry||0,retryDelay:c.retryDelayMs||0,maxRetryDelay:c.maxRetryDelayMs||0},g={onSuccess:function(t,e,r,i){var a=n.getInternalLoader(r);n.resetInternalLoader(r.type);var s=t.data;0===s.indexOf("#EXTM3U")?(e.parsing.start=performance.now(),re.isMediaPlaylist(s)?n.handleTrackOrLevelPlaylist(t,e,r,i||null,a):n.handleMasterPlaylist(t,e,r,i)):n.handleManifestParsingError(t,r,new Error("no EXTM3U delimiter"),i||null,e)},onError:function(t,e,r,i){n.handleNetworkError(e,r,!1,t,i)},onTimeout:function(t,e,r){n.handleNetworkError(e,r,!0,void 0,t)}};s.load(t,f,g)},e.handleMasterPlaylist=function(t,e,r,i){var n=this.hls,a=t.data,s=ye(t,r),o=re.parseMasterPlaylist(a,s);if(o.playlistParsingError)this.handleManifestParsingError(t,r,o.playlistParsingError,i,e);else{var l=o.contentSteering,u=o.levels,h=o.sessionData,d=o.sessionKeys,c=o.startTimeOffset,f=o.variableList;this.variableList=f;var g=re.parseMasterPlaylistMedia(a,s,o),v=g.AUDIO,m=void 0===v?[]:v,p=g.SUBTITLES,y=g["CLOSED-CAPTIONS"];m.length&&(m.some((function(t){return!t.url}))||!u[0].audioCodec||u[0].attrs.AUDIO||(w.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),m.unshift({type:"main",name:"main",groupId:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new P({}),bitrate:0,url:""}))),n.trigger(S.MANIFEST_LOADED,{levels:u,audioTracks:m,subtitles:p,captions:y,contentSteering:l,url:s,stats:e,networkDetails:i,sessionData:h,sessionKeys:d,startTimeOffset:c,variableList:f})}},e.handleTrackOrLevelPlaylist=function(t,e,r,i,n){var a=this.hls,s=r.id,o=r.level,l=r.type,u=ye(t,r),h=E(s)?s:0,d=E(o)?o:h,c=pe(r),f=re.parseLevelPlaylist(t.data,u,d,c,h,this.variableList);if(l===he){var g={attrs:new P({}),bitrate:0,details:f,name:"",url:u};a.trigger(S.MANIFEST_LOADED,{levels:[g],audioTracks:[],url:u,stats:e,networkDetails:i,sessionData:null,sessionKeys:null,contentSteering:null,startTimeOffset:null,variableList:null})}e.parsing.end=performance.now(),r.levelDetails=f,this.handlePlaylistLoaded(f,t,e,r,i,n)},e.handleManifestParsingError=function(t,e,r,i,n){this.hls.trigger(S.ERROR,{type:L.NETWORK_ERROR,details:R.MANIFEST_PARSING_ERROR,fatal:e.type===he,url:t.url,err:r,error:r,reason:r.message,response:t,context:e,networkDetails:i,stats:n})},e.handleNetworkError=function(t,e,r,n,a){void 0===r&&(r=!1);var s="A network "+(r?"timeout":"error"+(n?" (status "+n.code+")":""))+" occurred while loading "+t.type;t.type===de?s+=": "+t.level+" id: "+t.id:t.type!==ce&&t.type!==fe||(s+=" id: "+t.id+' group-id: "'+t.groupId+'"');var o=new Error(s);w.warn("[playlist-loader]: "+s);var l=R.UNKNOWN,u=!1,h=this.getInternalLoader(t);switch(t.type){case he:l=r?R.MANIFEST_LOAD_TIMEOUT:R.MANIFEST_LOAD_ERROR,u=!0;break;case de:l=r?R.LEVEL_LOAD_TIMEOUT:R.LEVEL_LOAD_ERROR,u=!1;break;case ce:l=r?R.AUDIO_TRACK_LOAD_TIMEOUT:R.AUDIO_TRACK_LOAD_ERROR,u=!1;break;case fe:l=r?R.SUBTITLE_TRACK_LOAD_TIMEOUT:R.SUBTITLE_LOAD_ERROR,u=!1}h&&this.resetInternalLoader(t.type);var d={type:L.NETWORK_ERROR,details:l,fatal:u,url:t.url,loader:h,context:t,error:o,networkDetails:e,stats:a};if(n){var c=(null==e?void 0:e.url)||t.url;d.response=i({url:c,data:void 0},n)}this.hls.trigger(S.ERROR,d)},e.handlePlaylistLoaded=function(t,e,r,i,n,a){var s=this.hls,o=i.type,l=i.level,u=i.id,h=i.groupId,d=i.deliveryDirectives,c=ye(e,i),f=pe(i),g="number"==typeof i.level&&f===ge?l:void 0;if(t.fragments.length){t.targetduration||(t.playlistParsingError=new Error("Missing Target Duration"));var v=t.playlistParsingError;if(v)s.trigger(S.ERROR,{type:L.NETWORK_ERROR,details:R.LEVEL_PARSING_ERROR,fatal:!1,url:c,error:v,reason:v.message,response:e,context:i,level:g,parent:f,networkDetails:n,stats:r});else switch(t.live&&a&&(a.getCacheAge&&(t.ageHeader=a.getCacheAge()||0),a.getCacheAge&&!isNaN(t.ageHeader)||(t.ageHeader=0)),o){case he:case de:s.trigger(S.LEVEL_LOADED,{details:t,level:g||0,id:u||0,stats:r,networkDetails:n,deliveryDirectives:d});break;case ce:s.trigger(S.AUDIO_TRACK_LOADED,{details:t,id:u||0,groupId:h||"",stats:r,networkDetails:n,deliveryDirectives:d});break;case fe:s.trigger(S.SUBTITLE_TRACK_LOADED,{details:t,id:u||0,groupId:h||"",stats:r,networkDetails:n,deliveryDirectives:d})}}else{var m=new Error("No Segments found in Playlist");s.trigger(S.ERROR,{type:L.NETWORK_ERROR,details:R.LEVEL_EMPTY_ERROR,fatal:!1,url:c,error:m,reason:m.message,response:e,context:i,level:g,parent:f,networkDetails:n,stats:r})}},t}();function Ee(t,e){var r;try{r=new Event("addtrack")}catch(t){(r=document.createEvent("Event")).initEvent("addtrack",!1,!1)}r.track=t,e.dispatchEvent(r)}function Se(t,e){var r=t.mode;if("disabled"===r&&(t.mode="hidden"),t.cues&&!t.cues.getCueById(e.id))try{if(t.addCue(e),!t.cues.getCueById(e.id))throw new Error("addCue is failed for: "+e)}catch(r){w.debug("[texttrack-utils]: "+r);var i=new self.TextTrackCue(e.startTime,e.endTime,e.text);i.id=e.id,t.addCue(i)}"disabled"===r&&(t.mode=r)}function Le(t){var e=t.mode;if("disabled"===e&&(t.mode="hidden"),t.cues)for(var r=t.cues.length;r--;)t.removeCue(t.cues[r]);"disabled"===e&&(t.mode=e)}function Re(t,e,r,i){var n=t.mode;if("disabled"===n&&(t.mode="hidden"),t.cues&&t.cues.length>0)for(var a=function(t,e,r){var i=[],n=function(t,e){if(e<t[0].startTime)return 0;var r=t.length-1;if(e>t[r].endTime)return-1;for(var i=0,n=r;i<=n;){var a=Math.floor((n+i)/2);if(e<t[a].startTime)n=a-1;else{if(!(e>t[a].startTime&&i<r))return a;i=a+1}}return t[i].startTime-e<e-t[n].startTime?i:n}(t,e);if(n>-1)for(var a=n,s=t.length;a<s;a++){var o=t[a];if(o.startTime>=e&&o.endTime<=r)i.push(o);else if(o.startTime>r)return i}return i}(t.cues,e,r),s=0;s<a.length;s++)i&&!i(a[s])||t.removeCue(a[s]);"disabled"===n&&(t.mode=n)}var Ae="org.id3",ke="com.apple.quicktime.HLS",be="https://aomedia.org/emsg/ID3";function De(){if("undefined"!=typeof self)return self.WebKitDataCue||self.VTTCue||self.TextTrackCue}var Ie=function(){var t=De();try{new t(0,Number.POSITIVE_INFINITY,"")}catch(t){return Number.MAX_VALUE}return Number.POSITIVE_INFINITY}();function we(t,e){return t.getTime()/1e3-e}var Ce=function(){function t(t){this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=t,this._registerListeners()}var e=t.prototype;return e.destroy=function(){this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=null},e._registerListeners=function(){var t=this.hls;t.on(S.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(S.MANIFEST_LOADING,this.onManifestLoading,this),t.on(S.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),t.on(S.BUFFER_FLUSHING,this.onBufferFlushing,this),t.on(S.LEVEL_UPDATED,this.onLevelUpdated,this)},e._unregisterListeners=function(){var t=this.hls;t.off(S.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(S.MANIFEST_LOADING,this.onManifestLoading,this),t.off(S.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),t.off(S.BUFFER_FLUSHING,this.onBufferFlushing,this),t.off(S.LEVEL_UPDATED,this.onLevelUpdated,this)},e.onMediaAttached=function(t,e){this.media=e.media},e.onMediaDetaching=function(){this.id3Track&&(Le(this.id3Track),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={})},e.onManifestLoading=function(){this.dateRangeCuesAppended={}},e.createTrack=function(t){var e=this.getID3Track(t.textTracks);return e.mode="hidden",e},e.getID3Track=function(t){if(this.media){for(var e=0;e<t.length;e++){var r=t[e];if("metadata"===r.kind&&"id3"===r.label)return Ee(r,this.media),r}return this.media.addTextTrack("metadata","id3")}},e.onFragParsingMetadata=function(t,e){if(this.media){var r=this.hls.config,i=r.enableEmsgMetadataCues,n=r.enableID3MetadataCues;if(i||n){var a=e.samples;this.id3Track||(this.id3Track=this.createTrack(this.media));for(var s=De(),o=0;o<a.length;o++){var l=a[o].type;if((l!==be||i)&&n){var u=dt(a[o].data);if(u){var h=a[o].pts,d=h+a[o].duration;d>Ie&&(d=Ie),d-h<=0&&(d=h+.25);for(var c=0;c<u.length;c++){var f=u[c];if(!ut(f)){this.updateId3CueEnds(h,l);var g=new s(h,d,"");g.value=f,l&&(g.type=l),this.id3Track.addCue(g)}}}}}}}},e.updateId3CueEnds=function(t,e){var r,i=null==(r=this.id3Track)?void 0:r.cues;if(i)for(var n=i.length;n--;){var a=i[n];a.type===e&&a.startTime<t&&a.endTime===Ie&&(a.endTime=t)}},e.onBufferFlushing=function(t,e){var r=e.startOffset,i=e.endOffset,n=e.type,a=this.id3Track,s=this.hls;if(s){var o=s.config,l=o.enableEmsgMetadataCues,u=o.enableID3MetadataCues;a&&(l||u)&&Re(a,r,i,"audio"===n?function(t){return t.type===Ae&&u}:"video"===n?function(t){return t.type===be&&l}:function(t){return t.type===Ae&&u||t.type===be&&l})}},e.onLevelUpdated=function(t,e){var r=this,i=e.details;if(this.media&&i.hasProgramDateTime&&this.hls.config.enableDateRangeMetadataCues){var n=this.dateRangeCuesAppended,a=this.id3Track,s=i.dateRanges,o=Object.keys(s);if(a)for(var l=Object.keys(n).filter((function(t){return!o.includes(t)})),u=function(){var t=l[h];Object.keys(n[t].cues).forEach((function(e){a.removeCue(n[t].cues[e])})),delete n[t]},h=l.length;h--;)u();var d=i.fragments[i.fragments.length-1];if(0!==o.length&&E(null==d?void 0:d.programDateTime)){this.id3Track||(this.id3Track=this.createTrack(this.media));for(var c=d.programDateTime/1e3-d.start,f=De(),g=function(){var t=o[v],e=s[t],i=n[t],a=(null==i?void 0:i.cues)||{},l=(null==i?void 0:i.durationKnown)||!1,u=we(e.startDate,c),h=Ie,d=e.endDate;if(d)h=we(d,c),l=!0;else if(e.endOnNext&&!l){var g=o.reduce((function(t,r){var i=s[r];return i.class===e.class&&i.id!==r&&i.startDate>e.startDate&&t.push(i),t}),[]).sort((function(t,e){return t.startDate.getTime()-e.startDate.getTime()}))[0];g&&(h=we(g.startDate,c),l=!0)}for(var m,p,y=Object.keys(e.attr),T=0;T<y.length;T++){var E=y[T];if("ID"!==(p=E)&&"CLASS"!==p&&"START-DATE"!==p&&"DURATION"!==p&&"END-DATE"!==p&&"END-ON-NEXT"!==p){var S=a[E];if(S)l&&!i.durationKnown&&(S.endTime=h);else{var L=e.attr[E];S=new f(u,h,""),x(E)&&(m=L,L=Uint8Array.from(m.replace(/^0x/,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer),S.value={key:E,data:L},S.type=ke,S.id=t,r.id3Track.addCue(S),a[E]=S}}}n[t]={cues:a,dateRange:e,durationKnown:l}},v=0;v<o.length;v++)g()}}},t}(),_e=function(){function t(t){var e=this;this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=function(){return e.timeupdate()},this.hls=t,this.config=t.config,this.registerListeners()}var e=t.prototype;return e.destroy=function(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null},e.registerListeners=function(){this.hls.on(S.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(S.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(S.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(S.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(S.ERROR,this.onError,this)},e.unregisterListeners=function(){this.hls.off(S.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(S.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.off(S.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(S.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.off(S.ERROR,this.onError,this)},e.onMediaAttached=function(t,e){this.media=e.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)},e.onMediaDetaching=function(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)},e.onManifestLoading=function(){this.levelDetails=null,this._latency=null,this.stallCount=0},e.onLevelUpdated=function(t,e){var r=e.details;this.levelDetails=r,r.advanced&&this.timeupdate(),!r.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)},e.onError=function(t,e){var r;e.details===R.BUFFER_STALLED_ERROR&&(this.stallCount++,null!=(r=this.levelDetails)&&r.live&&w.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))},e.timeupdate=function(){var t=this.media,e=this.levelDetails;if(t&&e){this.currentTime=t.currentTime;var r=this.computeLatency();if(null!==r){this._latency=r;var i=this.config,n=i.lowLatencyMode,a=i.maxLiveSyncPlaybackRate;if(n&&1!==a){var s=this.targetLatency;if(null!==s){var o=r-s,l=o<Math.min(this.maxLatency,s+e.targetduration);if(e.live&&l&&o>.05&&this.forwardBufferLength>1){var u=Math.min(2,Math.max(1,a)),h=Math.round(2/(1+Math.exp(-.75*o-this.edgeStalled))*20)/20;t.playbackRate=Math.min(u,Math.max(1,h))}else 1!==t.playbackRate&&0!==t.playbackRate&&(t.playbackRate=1)}}}}},e.estimateLiveEdge=function(){var t=this.levelDetails;return null===t?null:t.edge+t.age},e.computeLatency=function(){var t=this.estimateLiveEdge();return null===t?null:t-this.currentTime},a(t,[{key:"latency",get:function(){return this._latency||0}},{key:"maxLatency",get:function(){var t=this.config,e=this.levelDetails;return void 0!==t.liveMaxLatencyDuration?t.liveMaxLatencyDuration:e?t.liveMaxLatencyDurationCount*e.targetduration:0}},{key:"targetLatency",get:function(){var t=this.levelDetails;if(null===t)return null;var e=t.holdBack,r=t.partHoldBack,i=t.targetduration,n=this.config,a=n.liveSyncDuration,s=n.liveSyncDurationCount,o=n.lowLatencyMode,l=this.hls.userConfig,u=o&&r||e;(l.liveSyncDuration||l.liveSyncDurationCount||0===u)&&(u=void 0!==a?a:s*i);var h=i;return u+Math.min(1*this.stallCount,h)}},{key:"liveSyncPosition",get:function(){var t=this.estimateLiveEdge(),e=this.targetLatency,r=this.levelDetails;if(null===t||null===e||null===r)return null;var i=r.edge,n=t-e-this.edgeStalled,a=i-r.totalduration,s=i-(this.config.lowLatencyMode&&r.partTarget||r.targetduration);return Math.min(Math.max(a,n),s)}},{key:"drift",get:function(){var t=this.levelDetails;return null===t?1:t.drift}},{key:"edgeStalled",get:function(){var t=this.levelDetails;if(null===t)return 0;var e=3*(this.config.lowLatencyMode&&t.partTarget||t.targetduration);return Math.max(t.age-e,0)}},{key:"forwardBufferLength",get:function(){var t=this.media,e=this.levelDetails;if(!t||!e)return 0;var r=t.buffered.length;return(r?t.buffered.end(r-1):e.edge)-this.currentTime}}]),t}(),Pe=["NONE","TYPE-0","TYPE-1",null],xe="",Fe="YES",Me="v2",Oe=function(){function t(t,e,r){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=t,this.part=e,this.skip=r}return t.prototype.addDirectives=function(t){var e=new self.URL(t);return void 0!==this.msn&&e.searchParams.set("_HLS_msn",this.msn.toString()),void 0!==this.part&&e.searchParams.set("_HLS_part",this.part.toString()),this.skip&&e.searchParams.set("_HLS_skip",this.skip),e.href},t}(),Ne=function(){function t(t){this._attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.unknownCodecs=void 0,this.audioGroupIds=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.textGroupIds=void 0,this.url=void 0,this._urlId=0,this.url=[t.url],this._attrs=[t.attrs],this.bitrate=t.bitrate,t.details&&(this.details=t.details),this.id=t.id||0,this.name=t.name,this.width=t.width||0,this.height=t.height||0,this.audioCodec=t.audioCodec,this.videoCodec=t.videoCodec,this.unknownCodecs=t.unknownCodecs,this.codecSet=[t.videoCodec,t.audioCodec].filter((function(t){return t})).join(",").replace(/\.[^.,]+/g,"")}return t.prototype.addFallback=function(t){this.url.push(t.url),this._attrs.push(t.attrs)},a(t,[{key:"maxBitrate",get:function(){return Math.max(this.realBitrate,this.bitrate)}},{key:"attrs",get:function(){return this._attrs[this._urlId]}},{key:"pathwayId",get:function(){return this.attrs["PATHWAY-ID"]||"."}},{key:"uri",get:function(){return this.url[this._urlId]||""}},{key:"urlId",get:function(){return this._urlId},set:function(t){var e=t%this.url.length;this._urlId!==e&&(this.fragmentError=0,this.loadError=0,this.details=void 0,this._urlId=e)}},{key:"audioGroupId",get:function(){var t;return null==(t=this.audioGroupIds)?void 0:t[this.urlId]}},{key:"textGroupId",get:function(){var t;return null==(t=this.textGroupIds)?void 0:t[this.urlId]}}]),t}();function Ue(t,e){var r=e.startPTS;if(E(r)){var i,n=0;e.sn>t.sn?(n=r-t.start,i=t):(n=t.start-r,i=e),i.duration!==n&&(i.duration=n)}else e.sn>t.sn?t.cc===e.cc&&t.minEndPTS?e.start=t.start+(t.minEndPTS-t.start):e.start=t.start+t.duration:e.start=Math.max(t.start-e.duration,0)}function Be(t,e,r,i,n,a){i-r<=0&&(w.warn("Fragment should have a positive duration",e),i=r+e.duration,a=n+e.duration);var s=r,o=i,l=e.startPTS,u=e.endPTS;if(E(l)){var h=Math.abs(l-r);E(e.deltaPTS)?e.deltaPTS=Math.max(h,e.deltaPTS):e.deltaPTS=h,s=Math.max(r,l),r=Math.min(r,l),n=Math.min(n,e.startDTS),o=Math.min(i,u),i=Math.max(i,u),a=Math.max(a,e.endDTS)}var d=r-e.start;0!==e.start&&(e.start=r),e.duration=i-e.start,e.startPTS=r,e.maxStartPTS=s,e.startDTS=n,e.endPTS=i,e.minEndPTS=o,e.endDTS=a;var c,f=e.sn;if(!t||f<t.startSN||f>t.endSN)return 0;var g=f-t.startSN,v=t.fragments;for(v[g]=e,c=g;c>0;c--)Ue(v[c],v[c-1]);for(c=g;c<v.length-1;c++)Ue(v[c],v[c+1]);return t.fragmentHint&&Ue(v[v.length-1],t.fragmentHint),t.PTSKnown=t.alignedSliding=!0,d}function Ge(t,e){for(var r=null,i=t.fragments,n=i.length-1;n>=0;n--){var a=i[n].initSegment;if(a){r=a;break}}t.fragmentHint&&delete t.fragmentHint.endPTS;var s,l,u,h,d,c=0;if(function(t,e,r){for(var i=e.skippedSegments,n=Math.max(t.startSN,e.startSN)-e.startSN,a=(t.fragmentHint?1:0)+(i?e.endSN:Math.min(t.endSN,e.endSN))-e.startSN,s=e.startSN-t.startSN,o=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,l=t.fragmentHint?t.fragments.concat(t.fragmentHint):t.fragments,u=n;u<=a;u++){var h=l[s+u],d=o[u];i&&!d&&u<i&&(d=e.fragments[u]=h),h&&d&&r(h,d)}}(t,e,(function(t,i){t.relurl&&(c=t.cc-i.cc),E(t.startPTS)&&E(t.endPTS)&&(i.start=i.startPTS=t.startPTS,i.startDTS=t.startDTS,i.maxStartPTS=t.maxStartPTS,i.endPTS=t.endPTS,i.endDTS=t.endDTS,i.minEndPTS=t.minEndPTS,i.duration=t.endPTS-t.startPTS,i.duration&&(s=i),e.PTSKnown=e.alignedSliding=!0),i.elementaryStreams=t.elementaryStreams,i.loader=t.loader,i.stats=t.stats,i.urlId=t.urlId,t.initSegment&&(i.initSegment=t.initSegment,r=t.initSegment)})),r&&(e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments).forEach((function(t){var e;t.initSegment&&t.initSegment.relurl!==(null==(e=r)?void 0:e.relurl)||(t.initSegment=r)})),e.skippedSegments)if(e.deltaUpdateFailed=e.fragments.some((function(t){return!t})),e.deltaUpdateFailed){w.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(var f=e.skippedSegments;f--;)e.fragments.shift();e.startSN=e.fragments[0].sn,e.startCC=e.fragments[0].cc}else e.canSkipDateRanges&&(e.dateRanges=(l=t.dateRanges,u=e.dateRanges,h=e.recentlyRemovedDateranges,d=o({},l),h&&h.forEach((function(t){delete d[t]})),Object.keys(u).forEach((function(t){var e=new F(u[t].attr,d[t]);e.isValid?d[t]=e:w.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "'+JSON.stringify(u[t].attr)+'"')})),d));var g=e.fragments;if(c){w.warn("discontinuity sliding from playlist, take drift into account");for(var v=0;v<g.length;v++)g[v].cc+=c}e.skippedSegments&&(e.startCC=e.fragments[0].cc),function(t,e,r){if(t&&e)for(var i=0,n=0,a=t.length;n<=a;n++){var s=t[n],o=e[n+i];s&&o&&s.index===o.index&&s.fragment.sn===o.fragment.sn?r(s,o):i--}}(t.partList,e.partList,(function(t,e){e.elementaryStreams=t.elementaryStreams,e.stats=t.stats})),s?Be(e,s,s.startPTS,s.endPTS,s.startDTS,s.endDTS):Ke(t,e),g.length&&(e.totalduration=e.edge-g[0].start),e.driftStartTime=t.driftStartTime,e.driftStart=t.driftStart;var m=e.advancedDateTime;if(e.advanced&&m){var p=e.edge;e.driftStart||(e.driftStartTime=m,e.driftStart=p),e.driftEndTime=m,e.driftEnd=p}else e.driftEndTime=t.driftEndTime,e.driftEnd=t.driftEnd,e.advancedDateTime=t.advancedDateTime}function Ke(t,e){var r=e.startSN+e.skippedSegments-t.startSN,i=t.fragments;r<0||r>=i.length||He(e,i[r].start)}function He(t,e){if(e){for(var r=t.fragments,i=t.skippedSegments;i<r.length;i++)r[i].start+=e;t.fragmentHint&&(t.fragmentHint.start+=e)}}function Ve(t,e,r){var i;return null!=t&&t.details?Ye(null==(i=t.details)?void 0:i.partList,e,r):null}function Ye(t,e,r){if(t)for(var i=t.length;i--;){var n=t[i];if(n.index===r&&n.fragment.sn===e)return n}return null}function We(t){switch(t.details){case R.FRAG_LOAD_TIMEOUT:case R.KEY_LOAD_TIMEOUT:case R.LEVEL_LOAD_TIMEOUT:case R.MANIFEST_LOAD_TIMEOUT:return!0}return!1}function je(t,e){var r=We(e);return t.default[(r?"timeout":"error")+"Retry"]}function qe(t,e){var r="linear"===t.backoff?1:Math.pow(2,e);return Math.min(r*t.retryDelayMs,t.maxRetryDelayMs)}function Xe(t){return i(i({},t),{errorRetry:null,timeoutRetry:null})}function ze(t,e,r,i){return!!t&&e<t.maxNumRetry&&(function(t){return 0===t&&!1===navigator.onLine||!!t&&(t<400||t>499)}(i)||!!r)}var Qe=function(t,e){for(var r=0,i=t.length-1,n=null,a=null;r<=i;){var s=e(a=t[n=(r+i)/2|0]);if(s>0)r=n+1;else{if(!(s<0))return a;i=n-1}}return null};function $e(t,e,r,i){void 0===r&&(r=0),void 0===i&&(i=0);var n=null;if(t?n=e[t.sn-e[0].sn+1]||null:0===r&&0===e[0].start&&(n=e[0]),n&&0===Je(r,i,n))return n;var a=Qe(e,Je.bind(null,r,i));return!a||a===t&&n?n:a}function Je(t,e,r){if(void 0===t&&(t=0),void 0===e&&(e=0),r.start<=t&&r.start+r.duration>t)return 0;var i=Math.min(e,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.start+r.duration-i<=t?1:r.start-i>t&&r.start?-1:0}function Ze(t,e,r){var i=1e3*Math.min(e,r.duration+(r.deltaPTS?r.deltaPTS:0));return(r.endProgramDateTime||0)-i>t}var tr,er=3e5,rr=0,ir=2,nr=5,ar=0,sr=1,or=2,lr=function(){function t(t){this.hls=void 0,this.playlistError=0,this.penalizedRenditions={},this.log=void 0,this.warn=void 0,this.error=void 0,this.hls=t,this.log=w.log.bind(w,"[info]:"),this.warn=w.warn.bind(w,"[warning]:"),this.error=w.error.bind(w,"[error]:"),this.registerListeners()}var e=t.prototype;return e.registerListeners=function(){var t=this.hls;t.on(S.ERROR,this.onError,this),t.on(S.MANIFEST_LOADING,this.onManifestLoading,this),t.on(S.LEVEL_UPDATED,this.onLevelUpdated,this)},e.unregisterListeners=function(){var t=this.hls;t&&(t.off(S.ERROR,this.onError,this),t.off(S.ERROR,this.onErrorOut,this),t.off(S.MANIFEST_LOADING,this.onManifestLoading,this),t.off(S.LEVEL_UPDATED,this.onLevelUpdated,this))},e.destroy=function(){this.unregisterListeners(),this.hls=null,this.penalizedRenditions={}},e.startLoad=function(t){this.playlistError=0},e.stopLoad=function(){},e.getVariantLevelIndex=function(t){return(null==t?void 0:t.type)===ge?t.level:this.hls.loadLevel},e.onManifestLoading=function(){this.playlistError=0,this.penalizedRenditions={}},e.onLevelUpdated=function(){this.playlistError=0},e.onError=function(t,e){var r;if(!e.fatal){var i=this.hls,n=e.context;switch(e.details){case R.FRAG_LOAD_ERROR:case R.FRAG_LOAD_TIMEOUT:case R.KEY_LOAD_ERROR:case R.KEY_LOAD_TIMEOUT:return void(e.errorAction=this.getFragRetryOrSwitchAction(e));case R.FRAG_GAP:case R.FRAG_PARSING_ERROR:case R.FRAG_DECRYPT_ERROR:return e.errorAction=this.getFragRetryOrSwitchAction(e),void(e.errorAction.action=ir);case R.LEVEL_EMPTY_ERROR:case R.LEVEL_PARSING_ERROR:var a,s,o=e.parent===ge?e.level:i.loadLevel;return void(e.details===R.LEVEL_EMPTY_ERROR&&null!=(a=e.context)&&null!=(s=a.levelDetails)&&s.live?e.errorAction=this.getPlaylistRetryOrSwitchAction(e,o):(e.levelRetry=!1,e.errorAction=this.getLevelSwitchAction(e,o)));case R.LEVEL_LOAD_ERROR:case R.LEVEL_LOAD_TIMEOUT:return void("number"==typeof(null==n?void 0:n.level)&&(e.errorAction=this.getPlaylistRetryOrSwitchAction(e,n.level)));case R.AUDIO_TRACK_LOAD_ERROR:case R.AUDIO_TRACK_LOAD_TIMEOUT:case R.SUBTITLE_LOAD_ERROR:case R.SUBTITLE_TRACK_LOAD_TIMEOUT:if(n){var l=i.levels[i.loadLevel];if(l&&(n.type===ce&&n.groupId===l.audioGroupId||n.type===fe&&n.groupId===l.textGroupId))return e.errorAction=this.getPlaylistRetryOrSwitchAction(e,i.loadLevel),e.errorAction.action=ir,void(e.errorAction.flags=sr)}return;case R.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:var u=i.levels[i.loadLevel],h=null==u?void 0:u.attrs["HDCP-LEVEL"];return void(h&&(e.errorAction={action:ir,flags:or,hdcpLevel:h}));case R.BUFFER_ADD_CODEC_ERROR:case R.REMUX_ALLOC_ERROR:return void(e.errorAction=this.getLevelSwitchAction(e,null!=(r=e.level)?r:i.loadLevel));case R.INTERNAL_EXCEPTION:case R.BUFFER_APPENDING_ERROR:case R.BUFFER_APPEND_ERROR:case R.BUFFER_FULL_ERROR:case R.LEVEL_SWITCH_ERROR:case R.BUFFER_STALLED_ERROR:case R.BUFFER_SEEK_OVER_HOLE:case R.BUFFER_NUDGE_ON_STALL:return void(e.errorAction={action:rr,flags:ar})}if(e.type===L.KEY_SYSTEM_ERROR){var d=this.getVariantLevelIndex(e.frag);return e.levelRetry=!1,void(e.errorAction=this.getLevelSwitchAction(e,d))}}},e.getPlaylistRetryOrSwitchAction=function(t,e){var r,i=je(this.hls.config.playlistLoadPolicy,t),n=this.playlistError++,a=null==(r=t.response)?void 0:r.code;if(ze(i,n,We(t),a))return{action:nr,flags:ar,retryConfig:i,retryCount:n};var s=this.getLevelSwitchAction(t,e);return i&&(s.retryConfig=i,s.retryCount=n),s},e.getFragRetryOrSwitchAction=function(t){var e=this.hls,r=this.getVariantLevelIndex(t.frag),i=e.levels[r],n=e.config,a=n.fragLoadPolicy,s=n.keyLoadPolicy,o=je(t.details.startsWith("key")?s:a,t),l=e.levels.reduce((function(t,e){return t+e.fragmentError}),0);if(i){var u;t.details!==R.FRAG_GAP&&i.fragmentError++;var h=null==(u=t.response)?void 0:u.code;if(ze(o,l,We(t),h))return{action:nr,flags:ar,retryConfig:o,retryCount:l}}var d=this.getLevelSwitchAction(t,r);return o&&(d.retryConfig=o,d.retryCount=l),d},e.getLevelSwitchAction=function(t,e){var r=this.hls;null==e&&(e=r.loadLevel);var i=this.hls.levels[e];if(i&&(i.loadError++,r.autoLevelEnabled)){for(var n,a,s=-1,o=r.levels,l=r.loadLevel,u=r.minAutoLevel,h=r.maxAutoLevel,d=null==(n=t.frag)?void 0:n.type,c=null!=(a=t.context)?a:{},f=c.type,g=c.groupId,v=o.length;v--;){var m=(v+l)%o.length;if(m!==l&&m>=u&&m<=h&&0===o[m].loadError){var p=o[m];if(t.details===R.FRAG_GAP&&t.frag){var y=o[m].details;if(y){var T=$e(t.frag,y.fragments,t.frag.start);if(null!=T&&T.gap)continue}}else{if(f===ce&&g===p.audioGroupId||f===fe&&g===p.textGroupId)continue;if(d===ve&&i.audioGroupId===p.audioGroupId||d===me&&i.textGroupId===p.textGroupId)continue}s=m;break}}if(s>-1&&r.loadLevel!==s)return t.levelRetry=!0,this.playlistError=0,{action:ir,flags:ar,nextAutoLevel:s}}return{action:ir,flags:sr}},e.onErrorOut=function(t,e){var r;switch(null==(r=e.errorAction)?void 0:r.action){case rr:break;case ir:this.sendAlternateToPenaltyBox(e),e.errorAction.resolved||e.details===R.FRAG_GAP||(e.fatal=!0)}e.fatal&&this.hls.stopLoad()},e.sendAlternateToPenaltyBox=function(t){var e=this.hls,r=t.errorAction;if(r){var i=r.flags,n=r.hdcpLevel,a=r.nextAutoLevel;switch(i){case ar:this.switchLevel(t,a);break;case sr:r.resolved||(r.resolved=this.redundantFailover(t));break;case or:n&&(e.maxHdcpLevel=Pe[Pe.indexOf(n)-1],r.resolved=!0),this.warn('Restricting playback to HDCP-LEVEL of "'+e.maxHdcpLevel+'" or lower')}r.resolved||this.switchLevel(t,a)}},e.switchLevel=function(t,e){void 0!==e&&t.errorAction&&(this.warn("switching to level "+e+" after "+t.details),this.hls.nextAutoLevel=e,t.errorAction.resolved=!0,this.hls.nextLoadLevel=this.hls.nextAutoLevel)},e.redundantFailover=function(t){var e=this,r=this.hls,i=this.penalizedRenditions,n=t.parent===ge?t.level:r.loadLevel,a=r.levels[n],s=a.url.length,o=t.frag?t.frag.urlId:a.urlId;a.urlId!==o||t.frag&&!a.details||this.penalizeRendition(a,t);for(var l=function(){var l=(o+u)%s,h=i[l];if(!h||function(t,e,r){if(performance.now()-t.lastErrorPerfMs>er)return!0;var i=t.details;if(e.details===R.FRAG_GAP&&i&&e.frag){var n=e.frag.start,a=$e(null,i.fragments,n);if(a&&!a.gap)return!0}if(r&&t.errors.length<r.errors.length){var s=t.errors[t.errors.length-1];if(i&&s.frag&&e.frag&&Math.abs(s.frag.start-e.frag.start)>3*i.targetduration)return!0}return!1}(h,t,i[o]))return e.warn("Switching to Redundant Stream "+(l+1)+"/"+s+': "'+a.url[l]+'" after '+t.details),e.playlistError=0,r.levels.forEach((function(t){t.urlId=l})),r.nextLoadLevel=n,{v:!0}},u=1;u<s;u++){var h=l();if("object"==typeof h)return h.v}return!1},e.penalizeRendition=function(t,e){var r=this.penalizedRenditions,i=r[t.urlId]||{lastErrorPerfMs:0,errors:[],details:void 0};i.lastErrorPerfMs=performance.now(),i.errors.push(e),i.details=t.details,r[t.urlId]=i},t}(),ur=function(){function t(t,e){this.hls=void 0,this.timer=-1,this.requestScheduled=-1,this.canLoad=!1,this.log=void 0,this.warn=void 0,this.log=w.log.bind(w,e+":"),this.warn=w.warn.bind(w,e+":"),this.hls=t}var e=t.prototype;return e.destroy=function(){this.clearTimer(),this.hls=this.log=this.warn=null},e.clearTimer=function(){clearTimeout(this.timer),this.timer=-1},e.startLoad=function(){this.canLoad=!0,this.requestScheduled=-1,this.loadPlaylist()},e.stopLoad=function(){this.canLoad=!1,this.clearTimer()},e.switchParams=function(t,e){var r=null==e?void 0:e.renditionReports;if(r){for(var i=-1,n=0;n<r.length;n++){var a=r[n],s=void 0;try{s=new self.URL(a.URI,e.url).href}catch(t){w.warn("Could not construct new URL for Rendition Report: "+t),s=a.URI||""}if(s===t){i=n;break}s===t.substring(0,s.length)&&(i=n)}if(-1!==i){var o=r[i],l=parseInt(o["LAST-MSN"])||(null==e?void 0:e.lastPartSn),u=parseInt(o["LAST-PART"])||(null==e?void 0:e.lastPartIndex);if(this.hls.config.lowLatencyMode){var h=Math.min(e.age-e.partTarget,e.targetduration);u>=0&&h>e.partTarget&&(u+=1)}return new Oe(l,u>=0?u:void 0,xe)}}},e.loadPlaylist=function(t){-1===this.requestScheduled&&(this.requestScheduled=self.performance.now())},e.shouldLoadPlaylist=function(t){return this.canLoad&&!!t&&!!t.url&&(!t.details||t.details.live)},e.shouldReloadPlaylist=function(t){return-1===this.timer&&-1===this.requestScheduled&&this.shouldLoadPlaylist(t)},e.playlistLoaded=function(t,e,r){var i=this,n=e.details,a=e.stats,s=self.performance.now(),o=a.loading.first?Math.max(0,s-a.loading.first):0;if(n.advancedDateTime=Date.now()-o,n.live||null!=r&&r.live){if(n.reloaded(r),r&&this.log("live playlist "+t+" "+(n.advanced?"REFRESHED "+n.lastPartSn+"-"+n.lastPartIndex:"MISSED")),r&&n.fragments.length>0&&Ge(r,n),!this.canLoad||!n.live)return;var l,u=void 0,h=void 0;if(n.canBlockReload&&n.endSN&&n.advanced){var d=this.hls.config.lowLatencyMode,c=n.lastPartSn,f=n.endSN,g=n.lastPartIndex,v=c===f;-1!==g?(u=v?f+1:c,h=v?d?0:g:g+1):u=f+1;var m=n.age,p=m+n.ageHeader,y=Math.min(p-n.partTarget,1.5*n.targetduration);if(y>0){if(r&&y>r.tuneInGoal)this.warn("CDN Tune-in goal increased from: "+r.tuneInGoal+" to: "+y+" with playlist age: "+n.age),y=0;else{var T=Math.floor(y/n.targetduration);u+=T,void 0!==h&&(h+=Math.round(y%n.targetduration/n.partTarget)),this.log("CDN Tune-in age: "+n.ageHeader+"s last advanced "+m.toFixed(2)+"s goal: "+y+" skip sn "+T+" to part "+h)}n.tuneInGoal=y}if(l=this.getDeliveryDirectives(n,e.deliveryDirectives,u,h),d||!v)return void this.loadPlaylist(l)}else n.canBlockReload&&(l=this.getDeliveryDirectives(n,e.deliveryDirectives,u,h));var E=this.hls.mainForwardBufferInfo,S=E?E.end-E.len:0,L=function(t,e){void 0===e&&(e=1/0);var r=1e3*t.targetduration;if(t.updated){var i=t.fragments;if(i.length&&4*r>e){var n=1e3*i[i.length-1].duration;n<r&&(r=n)}}else r/=2;return Math.round(r)}(n,1e3*(n.edge-S));n.updated&&s>this.requestScheduled+L&&(this.requestScheduled=a.loading.start),void 0!==u&&n.canBlockReload?this.requestScheduled=a.loading.first+L-(1e3*n.partTarget||1e3):-1===this.requestScheduled||this.requestScheduled+L<s?this.requestScheduled=s:this.requestScheduled-s<=0&&(this.requestScheduled+=L);var R=this.requestScheduled-s;R=Math.max(0,R),this.log("reload live playlist "+t+" in "+Math.round(R)+" ms"),this.timer=self.setTimeout((function(){return i.loadPlaylist(l)}),R)}else this.clearTimer()},e.getDeliveryDirectives=function(t,e,r,i){var n=function(t,e){var r=t.canSkipUntil,i=t.canSkipDateRanges,n=t.endSN;return r&&(void 0!==e?e-n:0)<r?i?Me:Fe:xe}(t,r);return null!=e&&e.skip&&t.deltaUpdateFailed&&(r=e.msn,i=e.part,n=xe),new Oe(r,i,n)},e.checkRetry=function(t){var e=this,r=t.details,i=We(t),n=t.errorAction,a=n||{},s=a.action,o=a.retryCount,l=void 0===o?0:o,u=a.retryConfig,h=!!n&&!!u&&(s===nr||!n.resolved&&s===ir);if(h){var d;if(this.requestScheduled=-1,l>=u.maxNumRetry)return!1;if(i&&null!=(d=t.context)&&d.deliveryDirectives)this.warn("Retrying playlist loading "+(l+1)+"/"+u.maxNumRetry+' after "'+r+'" without delivery-directives'),this.loadPlaylist();else{var c=qe(u,l);this.timer=self.setTimeout((function(){return e.loadPlaylist()}),c),this.warn("Retrying playlist loading "+(l+1)+"/"+u.maxNumRetry+' after "'+r+'" in '+c+"ms")}t.levelRetry=!0,n.resolved=!0}return h},t}(),hr=function(t){function e(e,r){var i;return(i=t.call(this,e,"[level-controller]")||this)._levels=[],i._firstLevel=-1,i._startLevel=void 0,i.currentLevel=null,i.currentLevelIndex=-1,i.manualLevelIndex=-1,i.steering=void 0,i.onParsedComplete=void 0,i.steering=r,i._registerListeners(),i}l(e,t);var r=e.prototype;return r._registerListeners=function(){var t=this.hls;t.on(S.MANIFEST_LOADING,this.onManifestLoading,this),t.on(S.MANIFEST_LOADED,this.onManifestLoaded,this),t.on(S.LEVEL_LOADED,this.onLevelLoaded,this),t.on(S.LEVELS_UPDATED,this.onLevelsUpdated,this),t.on(S.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.on(S.FRAG_LOADED,this.onFragLoaded,this),t.on(S.ERROR,this.onError,this)},r._unregisterListeners=function(){var t=this.hls;t.off(S.MANIFEST_LOADING,this.onManifestLoading,this),t.off(S.MANIFEST_LOADED,this.onManifestLoaded,this),t.off(S.LEVEL_LOADED,this.onLevelLoaded,this),t.off(S.LEVELS_UPDATED,this.onLevelsUpdated,this),t.off(S.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.off(S.FRAG_LOADED,this.onFragLoaded,this),t.off(S.ERROR,this.onError,this)},r.destroy=function(){this._unregisterListeners(),this.steering=null,this.resetLevels(),t.prototype.destroy.call(this)},r.startLoad=function(){this._levels.forEach((function(t){t.loadError=0,t.fragmentError=0})),t.prototype.startLoad.call(this)},r.resetLevels=function(){this._startLevel=void 0,this.manualLevelIndex=-1,this.currentLevelIndex=-1,this.currentLevel=null,this._levels=[]},r.onManifestLoading=function(t,e){this.resetLevels()},r.onManifestLoaded=function(t,e){var r,i=[],n={};e.levels.forEach((function(t){var e,a=t.attrs;-1!==(null==(e=t.audioCodec)?void 0:e.indexOf("mp4a.40.34"))&&(tr||(tr=/chrome|firefox/i.test(navigator.userAgent)),tr&&(t.audioCodec=void 0));var s=a.AUDIO,o=a.CODECS,l=a["FRAME-RATE"],u=a["PATHWAY-ID"],h=a.RESOLUTION,d=a.SUBTITLES,c=(u||".")+"-"+t.bitrate+"-"+h+"-"+l+"-"+o;(r=n[c])?r.addFallback(t):(r=new Ne(t),n[c]=r,i.push(r)),dr(r,"audio",s),dr(r,"text",d)})),this.filterAndSortMediaOptions(i,e)},r.filterAndSortMediaOptions=function(t,e){var r=this,i=[],n=[],a=!1,s=!1,o=!1,l=t.filter((function(t){var e=t.audioCodec,r=t.videoCodec,i=t.width,n=t.height,l=t.unknownCodecs;return a||(a=!(!i||!n)),s||(s=!!r),o||(o=!!e),!(null!=l&&l.length)&&(!e||Qt(e,"audio"))&&(!r||Qt(r,"video"))}));if((a||s)&&o&&(l=l.filter((function(t){var e=t.videoCodec,r=t.width,i=t.height;return!!e||!(!r||!i)}))),0!==l.length){e.audioTracks&&cr(i=e.audioTracks.filter((function(t){return!t.audioCodec||Qt(t.audioCodec,"audio")}))),e.subtitles&&cr(n=e.subtitles);var u=l.slice(0);l.sort((function(t,e){return t.attrs["HDCP-LEVEL"]!==e.attrs["HDCP-LEVEL"]?(t.attrs["HDCP-LEVEL"]||"")>(e.attrs["HDCP-LEVEL"]||"")?1:-1:t.bitrate!==e.bitrate?t.bitrate-e.bitrate:t.attrs["FRAME-RATE"]!==e.attrs["FRAME-RATE"]?t.attrs.decimalFloatingPoint("FRAME-RATE")-e.attrs.decimalFloatingPoint("FRAME-RATE"):t.attrs.SCORE!==e.attrs.SCORE?t.attrs.decimalFloatingPoint("SCORE")-e.attrs.decimalFloatingPoint("SCORE"):a&&t.height!==e.height?t.height-e.height:0}));var h=u[0];if(this.steering&&(l=this.steering.filterParsedLevels(l)).length!==u.length)for(var d=0;d<u.length;d++)if(u[d].pathwayId===l[0].pathwayId){h=u[d];break}this._levels=l;for(var c=0;c<l.length;c++)if(l[c]===h){this._firstLevel=c,this.log("manifest loaded, "+l.length+" level(s) found, first bitrate: "+h.bitrate);break}var f=o&&!s,g={levels:l,audioTracks:i,subtitleTracks:n,sessionData:e.sessionData,sessionKeys:e.sessionKeys,firstLevel:this._firstLevel,stats:e.stats,audio:o,video:s,altAudio:!f&&i.some((function(t){return!!t.url}))};this.hls.trigger(S.MANIFEST_PARSED,g),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}else Promise.resolve().then((function(){if(r.hls){var t=new Error("no level with compatible codecs found in manifest");r.hls.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:e.url,error:t,reason:t.message})}}))},r.onError=function(t,e){!e.fatal&&e.context&&e.context.type===de&&e.context.level===this.level&&this.checkRetry(e)},r.onFragLoaded=function(t,e){var r=e.frag;if(void 0!==r&&r.type===ge){var i=this._levels[r.level];void 0!==i&&(i.loadError=0)}},r.onLevelLoaded=function(t,e){var r,i,n=e.level,a=e.details,s=this._levels[n];if(!s)return this.warn("Invalid level index "+n),void(null!=(i=e.deliveryDirectives)&&i.skip&&(a.deltaUpdateFailed=!0));n===this.currentLevelIndex?(0===s.fragmentError&&(s.loadError=0),this.playlistLoaded(n,e,s.details)):null!=(r=e.deliveryDirectives)&&r.skip&&(a.deltaUpdateFailed=!0)},r.onAudioTrackSwitched=function(t,e){var r=this.currentLevel;if(r){var i=this.hls.audioTracks[e.id].groupId;if(r.audioGroupIds&&r.audioGroupId!==i){for(var n=-1,a=0;a<r.audioGroupIds.length;a++)if(r.audioGroupIds[a]===i){n=a;break}-1!==n&&n!==r.urlId&&(r.urlId=n,this.canLoad&&this.startLoad())}}},r.loadPlaylist=function(e){t.prototype.loadPlaylist.call(this);var r=this.currentLevelIndex,i=this.currentLevel;if(i&&this.shouldLoadPlaylist(i)){var n=i.urlId,a=i.uri;if(e)try{a=e.addDirectives(a)}catch(t){this.warn("Could not construct new URL with HLS Delivery Directives: "+t)}var s=i.attrs["PATHWAY-ID"];this.log("Loading level index "+r+(void 0!==(null==e?void 0:e.msn)?" at sn "+e.msn+" part "+e.part:"")+" with"+(s?" Pathway "+s:"")+" URI "+(n+1)+"/"+i.url.length+" "+a),this.clearTimer(),this.hls.trigger(S.LEVEL_LOADING,{url:a,level:r,id:n,deliveryDirectives:e||null})}},r.removeLevel=function(t,e){var r=this,i=function(t,r){return r!==e},n=this._levels.filter((function(n,a){return a!==t||(n.url.length>1&&void 0!==e?(n.url=n.url.filter(i),n.audioGroupIds&&(n.audioGroupIds=n.audioGroupIds.filter(i)),n.textGroupIds&&(n.textGroupIds=n.textGroupIds.filter(i)),n.urlId=0,!0):(r.steering&&r.steering.removeLevel(n),!1))}));this.hls.trigger(S.LEVELS_UPDATED,{levels:n})},r.onLevelsUpdated=function(t,e){var r=e.levels;r.forEach((function(t,e){var r=t.details;null!=r&&r.fragments&&r.fragments.forEach((function(t){t.level=e}))})),this._levels=r},a(e,[{key:"levels",get:function(){return 0===this._levels.length?null:this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(t){var e=this._levels;if(0!==e.length){if(t<0||t>=e.length){var r=new Error("invalid level idx"),i=t<0;if(this.hls.trigger(S.ERROR,{type:L.OTHER_ERROR,details:R.LEVEL_SWITCH_ERROR,level:t,fatal:i,error:r,reason:r.message}),i)return;t=Math.min(t,e.length-1)}var n=this.currentLevelIndex,a=this.currentLevel,s=a?a.attrs["PATHWAY-ID"]:void 0,l=e[t],u=l.attrs["PATHWAY-ID"];if(this.currentLevelIndex=t,this.currentLevel=l,n!==t||!l.details||!a||s!==u){this.log("Switching to level "+t+(u?" with Pathway "+u:"")+" from level "+n+(s?" with Pathway "+s:""));var h=o({},l,{level:t,maxBitrate:l.maxBitrate,attrs:l.attrs,uri:l.uri,urlId:l.urlId});delete h._attrs,delete h._urlId,this.hls.trigger(S.LEVEL_SWITCHING,h);var d=l.details;if(!d||d.live){var c=this.switchParams(l.uri,null==a?void 0:a.details);this.loadPlaylist(c)}}}}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(t){this.manualLevelIndex=t,void 0===this._startLevel&&(this._startLevel=t),-1!==t&&(this.level=t)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(t){this._firstLevel=t}},{key:"startLevel",get:function(){if(void 0===this._startLevel){var t=this.hls.config.startLevel;return void 0!==t?t:this._firstLevel}return this._startLevel},set:function(t){this._startLevel=t}},{key:"nextLoadLevel",get:function(){return-1!==this.manualLevelIndex?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(t){this.level=t,-1===this.manualLevelIndex&&(this.hls.nextAutoLevel=t)}}]),e}(ur);function dr(t,e,r){r&&("audio"===e?(t.audioGroupIds||(t.audioGroupIds=[]),t.audioGroupIds[t.url.length-1]=r):"text"===e&&(t.textGroupIds||(t.textGroupIds=[]),t.textGroupIds[t.url.length-1]=r))}function cr(t){var e={};t.forEach((function(t){var r=t.groupId||"";t.id=e[r]=e[r]||0,e[r]++}))}var fr="NOT_LOADED",gr="APPENDING",vr="PARTIAL",mr="OK",pr=function(){function t(t){this.activePartLists=Object.create(null),this.endListFragments=Object.create(null),this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hasGaps=!1,this.hls=t,this._registerListeners()}var e=t.prototype;return e._registerListeners=function(){var t=this.hls;t.on(S.BUFFER_APPENDED,this.onBufferAppended,this),t.on(S.FRAG_BUFFERED,this.onFragBuffered,this),t.on(S.FRAG_LOADED,this.onFragLoaded,this)},e._unregisterListeners=function(){var t=this.hls;t.off(S.BUFFER_APPENDED,this.onBufferAppended,this),t.off(S.FRAG_BUFFERED,this.onFragBuffered,this),t.off(S.FRAG_LOADED,this.onFragLoaded,this)},e.destroy=function(){this._unregisterListeners(),this.fragments=this.activePartLists=this.endListFragments=this.timeRanges=null},e.getAppendedFrag=function(t,e){var r=this.activePartLists[e];if(r)for(var i=r.length;i--;){var n=r[i];if(!n)break;var a=n.end;if(n.start<=t&&null!==a&&t<=a)return n}return this.getBufferedFrag(t,e)},e.getBufferedFrag=function(t,e){for(var r=this.fragments,i=Object.keys(r),n=i.length;n--;){var a=r[i[n]];if((null==a?void 0:a.body.type)===e&&a.buffered){var s=a.body;if(s.start<=t&&t<=s.end)return s}}return null},e.detectEvictedFragments=function(t,e,r,i){var n=this;this.timeRanges&&(this.timeRanges[t]=e);var a=(null==i?void 0:i.fragment.sn)||-1;Object.keys(this.fragments).forEach((function(i){var s=n.fragments[i];if(s&&!(a>=s.body.sn))if(s.buffered||s.loaded){var o=s.range[t];o&&o.time.some((function(t){var r=!n.isTimeBuffered(t.startPTS,t.endPTS,e);return r&&n.removeFragment(s.body),r}))}else s.body.type===r&&n.removeFragment(s.body)}))},e.detectPartialFragments=function(t){var e=this,r=this.timeRanges,i=t.frag,n=t.part;if(r&&"initSegment"!==i.sn){var a=Tr(i),s=this.fragments[a];if(s){var o=!i.relurl;Object.keys(r).forEach((function(t){var a=i.elementaryStreams[t];if(a){var l=r[t],u=o||!0===a.partial;s.range[t]=e.getBufferedTimes(i,n,u,l)}})),s.loaded=null,Object.keys(s.range).length?(s.buffered=!0,s.body.endList&&(this.endListFragments[s.body.type]=s),yr(s)||this.removeParts(i.sn-1,i.type)):this.removeFragment(s.body)}}},e.removeParts=function(t,e){var r=this.activePartLists[e];r&&(this.activePartLists[e]=r.filter((function(e){return e.fragment.sn>=t})))},e.fragBuffered=function(t,e){var r=Tr(t),i=this.fragments[r];!i&&e&&(i=this.fragments[r]={body:t,appendedPTS:null,loaded:null,buffered:!1,range:Object.create(null)},t.gap&&(this.hasGaps=!0)),i&&(i.loaded=null,i.buffered=!0)},e.getBufferedTimes=function(t,e,r,i){for(var n={time:[],partial:r},a=t.start,s=t.end,o=t.minEndPTS||s,l=t.maxStartPTS||a,u=0;u<i.length;u++){var h=i.start(u)-this.bufferPadding,d=i.end(u)+this.bufferPadding;if(l>=h&&o<=d){n.time.push({startPTS:Math.max(a,i.start(u)),endPTS:Math.min(s,i.end(u))});break}if(a<d&&s>h)n.partial=!0,n.time.push({startPTS:Math.max(a,i.start(u)),endPTS:Math.min(s,i.end(u))});else if(s<=h)break}return n},e.getPartialFragment=function(t){var e,r,i,n=null,a=0,s=this.bufferPadding,o=this.fragments;return Object.keys(o).forEach((function(l){var u=o[l];u&&yr(u)&&(r=u.body.start-s,i=u.body.end+s,t>=r&&t<=i&&(e=Math.min(t-r,i-t),a<=e&&(n=u.body,a=e)))})),n},e.isEndListAppended=function(t){var e=this.endListFragments[t];return void 0!==e&&(e.buffered||yr(e))},e.getState=function(t){var e=Tr(t),r=this.fragments[e];return r?r.buffered?yr(r)?vr:mr:gr:fr},e.isTimeBuffered=function(t,e,r){for(var i,n,a=0;a<r.length;a++){if(i=r.start(a)-this.bufferPadding,n=r.end(a)+this.bufferPadding,t>=i&&e<=n)return!0;if(e<=i)return!1}return!1},e.onFragLoaded=function(t,e){var r=e.frag,i=e.part;if("initSegment"!==r.sn&&!r.bitrateTest){var n=i?null:e,a=Tr(r);this.fragments[a]={body:r,appendedPTS:null,loaded:n,buffered:!1,range:Object.create(null)}}},e.onBufferAppended=function(t,e){var r=this,i=e.frag,n=e.part,a=e.timeRanges;if("initSegment"!==i.sn){var s=i.type;if(n){var o=this.activePartLists[s];o||(this.activePartLists[s]=o=[]),o.push(n)}this.timeRanges=a,Object.keys(a).forEach((function(t){var e=a[t];r.detectEvictedFragments(t,e,s,n)}))}},e.onFragBuffered=function(t,e){this.detectPartialFragments(e)},e.hasFragment=function(t){var e=Tr(t);return!!this.fragments[e]},e.hasParts=function(t){var e;return!(null==(e=this.activePartLists[t])||!e.length)},e.removeFragmentsInRange=function(t,e,r,i,n){var a=this;i&&!this.hasGaps||Object.keys(this.fragments).forEach((function(s){var o=a.fragments[s];if(o){var l=o.body;l.type!==r||i&&!l.gap||l.start<e&&l.end>t&&(o.buffered||n)&&a.removeFragment(l)}}))},e.removeFragment=function(t){var e=Tr(t);t.stats.loaded=0,t.clearElementaryStreamInfo();var r=this.activePartLists[t.type];if(r){var i=t.sn;this.activePartLists[t.type]=r.filter((function(t){return t.fragment.sn!==i}))}delete this.fragments[e],t.endList&&delete this.endListFragments[t.type]},e.removeAllFragments=function(){this.fragments=Object.create(null),this.endListFragments=Object.create(null),this.activePartLists=Object.create(null),this.hasGaps=!1},t}();function yr(t){var e,r,i;return t.buffered&&(t.body.gap||(null==(e=t.range.video)?void 0:e.partial)||(null==(r=t.range.audio)?void 0:r.partial)||(null==(i=t.range.audiovideo)?void 0:i.partial))}function Tr(t){return t.type+"_"+t.level+"_"+t.urlId+"_"+t.sn}var Er=Math.pow(2,17),Sr=function(){function t(t){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=t}var e=t.prototype;return e.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},e.abort=function(){this.loader&&this.loader.abort()},e.load=function(t,e){var r=this,n=t.url;if(!n)return Promise.reject(new Ar({type:L.NETWORK_ERROR,details:R.FRAG_LOAD_ERROR,fatal:!1,frag:t,error:new Error("Fragment does not have a "+(n?"part list":"url")),networkDetails:null}));this.abort();var a=this.config,s=a.fLoader,o=a.loader;return new Promise((function(l,u){if(r.loader&&r.loader.destroy(),t.gap)u(Rr(t));else{var h=r.loader=t.loader=s?new s(a):new o(a),d=Lr(t),c=Xe(a.fragLoadPolicy.default),f={loadPolicy:c,timeout:c.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:"initSegment"===t.sn?1/0:Er};t.stats=h.stats,h.load(d,f,{onSuccess:function(e,i,n,a){r.resetLoader(t,h);var s=e.data;n.resetIV&&t.decryptdata&&(t.decryptdata.iv=new Uint8Array(s.slice(0,16)),s=s.slice(16)),l({frag:t,part:null,payload:s,networkDetails:a})},onError:function(e,a,s,o){r.resetLoader(t,h),u(new Ar({type:L.NETWORK_ERROR,details:R.FRAG_LOAD_ERROR,fatal:!1,frag:t,response:i({url:n,data:void 0},e),error:new Error("HTTP Error "+e.code+" "+e.text),networkDetails:s,stats:o}))},onAbort:function(e,i,n){r.resetLoader(t,h),u(new Ar({type:L.NETWORK_ERROR,details:R.INTERNAL_ABORTED,fatal:!1,frag:t,error:new Error("Aborted"),networkDetails:n,stats:e}))},onTimeout:function(e,i,n){r.resetLoader(t,h),u(new Ar({type:L.NETWORK_ERROR,details:R.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t,error:new Error("Timeout after "+f.timeout+"ms"),networkDetails:n,stats:e}))},onProgress:function(r,i,n,a){e&&e({frag:t,part:null,payload:n,networkDetails:a})}})}}))},e.loadPart=function(t,e,r){var n=this;this.abort();var a=this.config,s=a.fLoader,o=a.loader;return new Promise((function(l,u){if(n.loader&&n.loader.destroy(),t.gap||e.gap)u(Rr(t,e));else{var h=n.loader=t.loader=s?new s(a):new o(a),d=Lr(t,e),c=Xe(a.fragLoadPolicy.default),f={loadPolicy:c,timeout:c.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:Er};e.stats=h.stats,h.load(d,f,{onSuccess:function(i,a,s,o){n.resetLoader(t,h),n.updateStatsFromPart(t,e);var u={frag:t,part:e,payload:i.data,networkDetails:o};r(u),l(u)},onError:function(r,a,s,o){n.resetLoader(t,h),u(new Ar({type:L.NETWORK_ERROR,details:R.FRAG_LOAD_ERROR,fatal:!1,frag:t,part:e,response:i({url:d.url,data:void 0},r),error:new Error("HTTP Error "+r.code+" "+r.text),networkDetails:s,stats:o}))},onAbort:function(r,i,a){t.stats.aborted=e.stats.aborted,n.resetLoader(t,h),u(new Ar({type:L.NETWORK_ERROR,details:R.INTERNAL_ABORTED,fatal:!1,frag:t,part:e,error:new Error("Aborted"),networkDetails:a,stats:r}))},onTimeout:function(r,i,a){n.resetLoader(t,h),u(new Ar({type:L.NETWORK_ERROR,details:R.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t,part:e,error:new Error("Timeout after "+f.timeout+"ms"),networkDetails:a,stats:r}))}})}}))},e.updateStatsFromPart=function(t,e){var r=t.stats,i=e.stats,n=i.total;if(r.loaded+=i.loaded,n){var a=Math.round(t.duration/e.duration),s=Math.min(Math.round(r.loaded/n),a),o=(a-s)*Math.round(r.loaded/s);r.total=r.loaded+o}else r.total=Math.max(r.loaded,r.total);var l=r.loading,u=i.loading;l.start?l.first+=u.first-u.start:(l.start=u.start,l.first=u.first),l.end=u.end},e.resetLoader=function(t,e){t.loader=null,this.loader===e&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),e.destroy()},t}();function Lr(t,e){void 0===e&&(e=null);var r=e||t,i={frag:t,part:e,responseType:"arraybuffer",url:r.url,headers:{},rangeStart:0,rangeEnd:0},n=r.byteRangeStartOffset,a=r.byteRangeEndOffset;if(E(n)&&E(a)){var s,o=n,l=a;if("initSegment"===t.sn&&"AES-128"===(null==(s=t.decryptdata)?void 0:s.method)){var u=a-n;u%16&&(l=a+(16-u%16)),0!==n&&(i.resetIV=!0,o=n-16)}i.rangeStart=o,i.rangeEnd=l}return i}function Rr(t,e){var r=new Error("GAP "+(t.gap?"tag":"attribute")+" found"),i={type:L.MEDIA_ERROR,details:R.FRAG_GAP,fatal:!1,frag:t,error:r,networkDetails:null};return e&&(i.part=e),(e||t).stats.aborted=!0,new Ar(i)}var Ar=function(t){function e(e){var r;return(r=t.call(this,e.error.message)||this).data=void 0,r.data=e,r}return l(e,t),e}(f(Error)),kr=function(){function t(t){this.config=void 0,this.keyUriToKeyInfo={},this.emeController=null,this.config=t}var e=t.prototype;return e.abort=function(t){for(var e in this.keyUriToKeyInfo){var r=this.keyUriToKeyInfo[e].loader;if(r){if(t&&t!==r.context.frag.type)return;r.abort()}}},e.detach=function(){for(var t in this.keyUriToKeyInfo){var e=this.keyUriToKeyInfo[t];(e.mediaKeySessionContext||e.decryptdata.isCommonEncryption)&&delete this.keyUriToKeyInfo[t]}},e.destroy=function(){for(var t in this.detach(),this.keyUriToKeyInfo){var e=this.keyUriToKeyInfo[t].loader;e&&e.destroy()}this.keyUriToKeyInfo={}},e.createKeyLoadError=function(t,e,r,i,n){return void 0===e&&(e=R.KEY_LOAD_ERROR),new Ar({type:L.NETWORK_ERROR,details:e,fatal:!1,frag:t,response:n,error:r,networkDetails:i})},e.loadClear=function(t,e){var r=this;if(this.emeController&&this.config.emeEnabled)for(var i=t.sn,n=t.cc,a=function(){var t=e[s];if(n<=t.cc&&("initSegment"===i||"initSegment"===t.sn||i<t.sn))return r.emeController.selectKeySystemFormat(t).then((function(e){t.setKeyFormat(e)})),"break"},s=0;s<e.length&&"break"!==a();s++);},e.load=function(t){var e=this;return!t.decryptdata&&t.encrypted&&this.emeController?this.emeController.selectKeySystemFormat(t).then((function(r){return e.loadInternal(t,r)})):this.loadInternal(t)},e.loadInternal=function(t,e){var r,i;e&&t.setKeyFormat(e);var n=t.decryptdata;if(!n){var a=new Error(e?"Expected frag.decryptdata to be defined after setting format "+e:"Missing decryption data on fragment in onKeyLoading");return Promise.reject(this.createKeyLoadError(t,R.KEY_LOAD_ERROR,a))}var s=n.uri;if(!s)return Promise.reject(this.createKeyLoadError(t,R.KEY_LOAD_ERROR,new Error('Invalid key URI: "'+s+'"')));var o,l=this.keyUriToKeyInfo[s];if(null!=(r=l)&&r.decryptdata.key)return n.key=l.decryptdata.key,Promise.resolve({frag:t,keyInfo:l});if(null!=(i=l)&&i.keyLoadPromise)switch(null==(o=l.mediaKeySessionContext)?void 0:o.keyStatus){case void 0:case"status-pending":case"usable":case"usable-in-future":return l.keyLoadPromise.then((function(e){return n.key=e.keyInfo.decryptdata.key,{frag:t,keyInfo:l}}))}switch(l=this.keyUriToKeyInfo[s]={decryptdata:n,keyLoadPromise:null,loader:null,mediaKeySessionContext:null},n.method){case"ISO-23001-7":case"SAMPLE-AES":case"SAMPLE-AES-CENC":case"SAMPLE-AES-CTR":return"identity"===n.keyFormat?this.loadKeyHTTP(l,t):this.loadKeyEME(l,t);case"AES-128":return this.loadKeyHTTP(l,t);default:return Promise.reject(this.createKeyLoadError(t,R.KEY_LOAD_ERROR,new Error('Key supplied with unsupported METHOD: "'+n.method+'"')))}},e.loadKeyEME=function(t,e){var r={frag:e,keyInfo:t};if(this.emeController&&this.config.emeEnabled){var i=this.emeController.loadKey(r);if(i)return(t.keyLoadPromise=i.then((function(e){return t.mediaKeySessionContext=e,r}))).catch((function(e){throw t.keyLoadPromise=null,e}))}return Promise.resolve(r)},e.loadKeyHTTP=function(t,e){var r=this,n=this.config,a=new(0,n.loader)(n);return e.keyLoader=t.loader=a,t.keyLoadPromise=new Promise((function(s,o){var l={keyInfo:t,frag:e,responseType:"arraybuffer",url:t.decryptdata.uri},u=n.keyLoadPolicy.default,h={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},d={onSuccess:function(t,e,i,n){var a=i.frag,l=i.keyInfo,u=i.url;if(!a.decryptdata||l!==r.keyUriToKeyInfo[u])return o(r.createKeyLoadError(a,R.KEY_LOAD_ERROR,new Error("after key load, decryptdata unset or changed"),n));l.decryptdata.key=a.decryptdata.key=new Uint8Array(t.data),a.keyLoader=null,l.loader=null,s({frag:a,keyInfo:l})},onError:function(t,n,a,s){r.resetLoader(n),o(r.createKeyLoadError(e,R.KEY_LOAD_ERROR,new Error("HTTP Error "+t.code+" loading key "+t.text),a,i({url:l.url,data:void 0},t)))},onTimeout:function(t,i,n){r.resetLoader(i),o(r.createKeyLoadError(e,R.KEY_LOAD_TIMEOUT,new Error("key loading timed out"),n))},onAbort:function(t,i,n){r.resetLoader(i),o(r.createKeyLoadError(e,R.INTERNAL_ABORTED,new Error("key loading aborted"),n))}};a.load(l,h,d)}))},e.resetLoader=function(t){var e=t.frag,r=t.keyInfo,i=t.url,n=r.loader;e.keyLoader===n&&(e.keyLoader=null,r.loader=null),delete this.keyUriToKeyInfo[i],n&&n.destroy()},t}(),br=function(){function t(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}var e=t.prototype;return e.destroy=function(){this.onHandlerDestroying(),this.onHandlerDestroyed()},e.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},e.onHandlerDestroyed=function(){},e.hasInterval=function(){return!!this._tickInterval},e.hasNextTick=function(){return!!this._tickTimer},e.setInterval=function(t){return!this._tickInterval&&(this._tickCallCount=0,this._tickInterval=self.setInterval(this._boundTick,t),!0)},e.clearInterval=function(){return!!this._tickInterval&&(self.clearInterval(this._tickInterval),this._tickInterval=null,!0)},e.clearNextTick=function(){return!!this._tickTimer&&(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0)},e.tick=function(){this._tickCallCount++,1===this._tickCallCount&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)},e.tickImmediate=function(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)},e.doTick=function(){},t}(),Dr={length:0,start:function(){return 0},end:function(){return 0}},Ir=function(){function t(){}return t.isBuffered=function(e,r){try{if(e)for(var i=t.getBuffered(e),n=0;n<i.length;n++)if(r>=i.start(n)&&r<=i.end(n))return!0}catch(t){}return!1},t.bufferInfo=function(e,r,i){try{if(e){var n,a=t.getBuffered(e),s=[];for(n=0;n<a.length;n++)s.push({start:a.start(n),end:a.end(n)});return this.bufferedInfo(s,r,i)}}catch(t){}return{len:0,start:r,end:r,nextStart:void 0}},t.bufferedInfo=function(t,e,r){e=Math.max(0,e),t.sort((function(t,e){var r=t.start-e.start;return r||e.end-t.end}));var i=[];if(r)for(var n=0;n<t.length;n++){var a=i.length;if(a){var s=i[a-1].end;t[n].start-s<r?t[n].end>s&&(i[a-1].end=t[n].end):i.push(t[n])}else i.push(t[n])}else i=t;for(var o,l=0,u=e,h=e,d=0;d<i.length;d++){var c=i[d].start,f=i[d].end;if(e+r>=c&&e<f)u=c,l=(h=f)-e;else if(e+r<c){o=c;break}}return{len:l,start:u||0,end:h||0,nextStart:o}},t.getBuffered=function(t){try{return t.buffered}catch(t){return w.log("failed to get media.buffered",t),Dr}},t}(),wr=function(t,e,r,i,n,a){void 0===i&&(i=0),void 0===n&&(n=-1),void 0===a&&(a=!1),this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing={start:0,executeStart:0,executeEnd:0,end:0},this.buffering={audio:{start:0,executeStart:0,executeEnd:0,end:0},video:{start:0,executeStart:0,executeEnd:0,end:0},audiovideo:{start:0,executeStart:0,executeEnd:0,end:0}},this.level=t,this.sn=e,this.id=r,this.size=i,this.part=n,this.partial=a};function Cr(t,e){for(var r=null,i=0,n=t.length;i<n;i++){var a=t[i];if(a&&a.cc===e){r=a;break}}return r}function _r(t,e){if(t){var r=t.start+e;t.start=t.startPTS=r,t.endPTS=r+t.duration}}function Pr(t,e){for(var r=e.fragments,i=0,n=r.length;i<n;i++)_r(r[i],t);e.fragmentHint&&_r(e.fragmentHint,t),e.alignedSliding=!0}function xr(t,e,r){e&&(function(t,e,r){if(function(t,e,r){return!(!e.details||!(r.endCC>r.startCC||t&&t.cc<r.startCC))}(t,r,e)){var i=function(t,e,r){var i=t.fragments,n=e.fragments;if(n.length&&i.length){var a=Cr(i,n[0].cc);if(a&&(!a||a.startPTS))return a;w.log("No frag in previous level to align on")}else w.log("No fragments to align")}(r.details,e);i&&E(i.start)&&(w.log("Adjusting PTS using last level due to CC increase within current level "+e.url),Pr(i.start,e))}}(t,r,e),!r.alignedSliding&&e.details&&function(t,e){if(e.fragments.length&&t.hasProgramDateTime&&e.hasProgramDateTime){var r=e.fragments[0].programDateTime,i=t.fragments[0].programDateTime,n=(i-r)/1e3+e.fragments[0].start;n&&E(n)&&(w.log("Adjusting PTS using programDateTime delta "+(i-r)+"ms, sliding:"+n.toFixed(3)+" "+t.url+" "),Pr(n,t))}}(r,e.details),r.alignedSliding||!e.details||r.skippedSegments||Ke(e.details,r))}function Fr(t,e){if(t.hasProgramDateTime&&e.hasProgramDateTime){var r=t.fragments,i=e.fragments;if(r.length&&i.length){var n=i[Math.round(i.length/2)-1],a=Cr(r,n.cc)||r[Math.round(r.length/2)-1],s=n.programDateTime,o=a.programDateTime;null!==s&&null!==o&&Pr((o-s)/1e3-(a.start-n.start),t)}}}var Mr=function(){function t(t,e){this.subtle=void 0,this.aesIV=void 0,this.subtle=t,this.aesIV=e}return t.prototype.decrypt=function(t,e){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},e,t)},t}(),Or=function(){function t(t,e){this.subtle=void 0,this.key=void 0,this.subtle=t,this.key=e}return t.prototype.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},t}(),Nr=function(){function t(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}var e=t.prototype;return e.uint8ArrayToUint32Array_=function(t){for(var e=new DataView(t),r=new Uint32Array(4),i=0;i<4;i++)r[i]=e.getUint32(4*i);return r},e.initTable=function(){var t=this.sBox,e=this.invSBox,r=this.subMix,i=r[0],n=r[1],a=r[2],s=r[3],o=this.invSubMix,l=o[0],u=o[1],h=o[2],d=o[3],c=new Uint32Array(256),f=0,g=0,v=0;for(v=0;v<256;v++)c[v]=v<128?v<<1:v<<1^283;for(v=0;v<256;v++){var m=g^g<<1^g<<2^g<<3^g<<4;m=m>>>8^255&m^99,t[f]=m,e[m]=f;var p=c[f],y=c[p],T=c[y],E=257*c[m]^16843008*m;i[f]=E<<24|E>>>8,n[f]=E<<16|E>>>16,a[f]=E<<8|E>>>24,s[f]=E,E=16843009*T^65537*y^257*p^16843008*f,l[m]=E<<24|E>>>8,u[m]=E<<16|E>>>16,h[m]=E<<8|E>>>24,d[m]=E,f?(f=p^c[c[c[T^p]]],g^=c[c[g]]):f=g=1}},e.expandKey=function(t){for(var e=this.uint8ArrayToUint32Array_(t),r=!0,i=0;i<e.length&&r;)r=e[i]===this.key[i],i++;if(!r){this.key=e;var n=this.keySize=e.length;if(4!==n&&6!==n&&8!==n)throw new Error("Invalid aes key size="+n);var a,s,o,l,u=this.ksRows=4*(n+6+1),h=this.keySchedule=new Uint32Array(u),d=this.invKeySchedule=new Uint32Array(u),c=this.sBox,f=this.rcon,g=this.invSubMix,v=g[0],m=g[1],p=g[2],y=g[3];for(a=0;a<u;a++)a<n?o=h[a]=e[a]:(l=o,a%n==0?(l=c[(l=l<<8|l>>>24)>>>24]<<24|c[l>>>16&255]<<16|c[l>>>8&255]<<8|c[255&l],l^=f[a/n|0]<<24):n>6&&a%n==4&&(l=c[l>>>24]<<24|c[l>>>16&255]<<16|c[l>>>8&255]<<8|c[255&l]),h[a]=o=(h[a-n]^l)>>>0);for(s=0;s<u;s++)a=u-s,l=3&s?h[a]:h[a-4],d[s]=s<4||a<=4?l:v[c[l>>>24]]^m[c[l>>>16&255]]^p[c[l>>>8&255]]^y[c[255&l]],d[s]=d[s]>>>0}},e.networkToHostOrderSwap=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},e.decrypt=function(t,e,r){for(var i,n,a,s,o,l,u,h,d,c,f,g,v,m,p=this.keySize+6,y=this.invKeySchedule,T=this.invSBox,E=this.invSubMix,S=E[0],L=E[1],R=E[2],A=E[3],k=this.uint8ArrayToUint32Array_(r),b=k[0],D=k[1],I=k[2],w=k[3],C=new Int32Array(t),_=new Int32Array(C.length),P=this.networkToHostOrderSwap;e<C.length;){for(d=P(C[e]),c=P(C[e+1]),f=P(C[e+2]),g=P(C[e+3]),o=d^y[0],l=g^y[1],u=f^y[2],h=c^y[3],v=4,m=1;m<p;m++)i=S[o>>>24]^L[l>>16&255]^R[u>>8&255]^A[255&h]^y[v],n=S[l>>>24]^L[u>>16&255]^R[h>>8&255]^A[255&o]^y[v+1],a=S[u>>>24]^L[h>>16&255]^R[o>>8&255]^A[255&l]^y[v+2],s=S[h>>>24]^L[o>>16&255]^R[l>>8&255]^A[255&u]^y[v+3],o=i,l=n,u=a,h=s,v+=4;i=T[o>>>24]<<24^T[l>>16&255]<<16^T[u>>8&255]<<8^T[255&h]^y[v],n=T[l>>>24]<<24^T[u>>16&255]<<16^T[h>>8&255]<<8^T[255&o]^y[v+1],a=T[u>>>24]<<24^T[h>>16&255]<<16^T[o>>8&255]<<8^T[255&l]^y[v+2],s=T[h>>>24]<<24^T[o>>16&255]<<16^T[l>>8&255]<<8^T[255&u]^y[v+3],_[e]=P(i^b),_[e+1]=P(s^D),_[e+2]=P(a^I),_[e+3]=P(n^w),b=d,D=c,I=f,w=g,e+=4}return _.buffer},t}(),Ur=function(){function t(t,e){var r=(void 0===e?{}:e).removePKCS7Padding,i=void 0===r||r;if(this.logEnabled=!0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.useSoftware=void 0,this.useSoftware=t.enableSoftwareAES,this.removePKCS7Padding=i,i)try{var n=self.crypto;n&&(this.subtle=n.subtle||n.webkitSubtle)}catch(t){}null===this.subtle&&(this.useSoftware=!0)}var e=t.prototype;return e.destroy=function(){this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null},e.isSync=function(){return this.useSoftware},e.flush=function(){var t=this.currentResult,e=this.remainderData;if(!t||e)return this.reset(),null;var r,i,n,a=new Uint8Array(t);return this.reset(),this.removePKCS7Padding?(i=(r=a).byteLength,(n=i&&new DataView(r.buffer).getUint8(i-1))?rt(r,0,i-n):r):a},e.reset=function(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)},e.decrypt=function(t,e,r){var i=this;return this.useSoftware?new Promise((function(n,a){i.softwareDecrypt(new Uint8Array(t),e,r);var s=i.flush();s?n(s.buffer):a(new Error("[softwareDecrypt] Failed to decrypt data"))})):this.webCryptoDecrypt(new Uint8Array(t),e,r)},e.softwareDecrypt=function(t,e,r){var i=this.currentIV,n=this.currentResult,a=this.remainderData;this.logOnce("JS AES decrypt"),a&&(t=xt(a,t),this.remainderData=null);var s=this.getValidChunk(t);if(!s.length)return null;i&&(r=i);var o=this.softwareDecrypter;o||(o=this.softwareDecrypter=new Nr),o.expandKey(e);var l=n;return this.currentResult=o.decrypt(s.buffer,0,r),this.currentIV=rt(s,-16).buffer,l||null},e.webCryptoDecrypt=function(t,e,r){var i=this,n=this.subtle;return this.key===e&&this.fastAesKey||(this.key=e,this.fastAesKey=new Or(n,e)),this.fastAesKey.expandKey().then((function(e){return n?(i.logOnce("WebCrypto AES decrypt"),new Mr(n,new Uint8Array(r)).decrypt(t.buffer,e)):Promise.reject(new Error("web crypto not initialized"))})).catch((function(n){return w.warn("[decrypter]: WebCrypto Error, disable WebCrypto API, "+n.name+": "+n.message),i.onWebCryptoError(t,e,r)}))},e.onWebCryptoError=function(t,e,r){this.useSoftware=!0,this.logEnabled=!0,this.softwareDecrypt(t,e,r);var i=this.flush();if(i)return i.buffer;throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data")},e.getValidChunk=function(t){var e=t,r=t.length-t.length%16;return r!==t.length&&(e=rt(t,0,r),this.remainderData=rt(t,r)),e},e.logOnce=function(t){this.logEnabled&&(w.log("[decrypter]: "+t),this.logEnabled=!1)},t}(),Br=function(t){for(var e="",r=t.length,i=0;i<r;i++)e+="["+t.start(i).toFixed(3)+"-"+t.end(i).toFixed(3)+"]";return e},Gr="STOPPED",Kr="IDLE",Hr="KEY_LOADING",Vr="FRAG_LOADING",Yr="FRAG_LOADING_WAITING_RETRY",Wr="WAITING_TRACK",jr="PARSING",qr="PARSED",Xr="ENDED",zr="ERROR",Qr="WAITING_INIT_PTS",$r="WAITING_LEVEL",Jr=function(t){function e(e,r,i,n,a){var s;return(s=t.call(this)||this).hls=void 0,s.fragPrevious=null,s.fragCurrent=null,s.fragmentTracker=void 0,s.transmuxer=null,s._state=Gr,s.playlistType=void 0,s.media=null,s.mediaBuffer=null,s.config=void 0,s.bitrateTest=!1,s.lastCurrentTime=0,s.nextLoadPosition=0,s.startPosition=0,s.startTimeOffset=null,s.loadedmetadata=!1,s.retryDate=0,s.levels=null,s.fragmentLoader=void 0,s.keyLoader=void 0,s.levelLastLoaded=null,s.startFragRequested=!1,s.decrypter=void 0,s.initPTS=[],s.onvseeking=null,s.onvended=null,s.logPrefix="",s.log=void 0,s.warn=void 0,s.playlistType=a,s.logPrefix=n,s.log=w.log.bind(w,n+":"),s.warn=w.warn.bind(w,n+":"),s.hls=e,s.fragmentLoader=new Sr(e.config),s.keyLoader=i,s.fragmentTracker=r,s.config=e.config,s.decrypter=new Ur(e.config),e.on(S.MANIFEST_LOADED,s.onManifestLoaded,function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(s)),s}l(e,t);var r=e.prototype;return r.doTick=function(){this.onTickEnd()},r.onTickEnd=function(){},r.startLoad=function(t){},r.stopLoad=function(){this.fragmentLoader.abort(),this.keyLoader.abort(this.playlistType);var t=this.fragCurrent;null!=t&&t.loader&&(t.abortRequests(),this.fragmentTracker.removeFragment(t)),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=Gr},r._streamEnded=function(t,e){if(e.live||t.nextStart||!t.end||!this.media)return!1;var r=e.partList;if(null!=r&&r.length){var i=r[r.length-1];return Ir.isBuffered(this.media,i.start+i.duration/2)}var n=e.fragments[e.fragments.length-1].type;return this.fragmentTracker.isEndListAppended(n)},r.getLevelDetails=function(){var t;if(this.levels&&null!==this.levelLastLoaded)return null==(t=this.levels[this.levelLastLoaded])?void 0:t.details},r.onMediaAttached=function(t,e){var r=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),r.addEventListener("seeking",this.onvseeking),r.addEventListener("ended",this.onvended);var i=this.config;this.levels&&i.autoStartLoad&&this.state===Gr&&this.startLoad(i.startPosition)},r.onMediaDetaching=function(){var t=this.media;null!=t&&t.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),t&&this.onvseeking&&this.onvended&&(t.removeEventListener("seeking",this.onvseeking),t.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.keyLoader&&this.keyLoader.detach(),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()},r.onMediaSeeking=function(){var t=this.config,e=this.fragCurrent,r=this.media,i=this.mediaBuffer,n=this.state,a=r?r.currentTime:0,s=Ir.bufferInfo(i||r,a,t.maxBufferHole);if(this.log("media seeking to "+(E(a)?a.toFixed(3):a)+", state: "+n),this.state===Xr)this.resetLoadingState();else if(e){var o=t.maxFragLookUpTolerance,l=e.start-o,u=e.start+e.duration+o;if(!s.len||u<s.start||l>s.end){var h=a>u;(a<l||h)&&(h&&e.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),e.abortRequests(),this.resetLoadingState()),this.fragPrevious=null)}}r&&(this.fragmentTracker.removeFragmentsInRange(a,1/0,this.playlistType,!0),this.lastCurrentTime=a),this.loadedmetadata||s.len||(this.nextLoadPosition=this.startPosition=a),this.tickImmediate()},r.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},r.onManifestLoaded=function(t,e){this.startTimeOffset=e.startTimeOffset,this.initPTS=[]},r.onHandlerDestroying=function(){this.stopLoad(),t.prototype.onHandlerDestroying.call(this)},r.onHandlerDestroyed=function(){this.state=Gr,this.fragmentLoader&&this.fragmentLoader.destroy(),this.keyLoader&&this.keyLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.keyLoader=this.fragmentLoader=this.fragmentTracker=null,t.prototype.onHandlerDestroyed.call(this)},r.loadFragment=function(t,e,r){this._loadFragForPlayback(t,e,r)},r._loadFragForPlayback=function(t,e,r){var i=this;this._doFragLoad(t,e,r,(function(e){if(i.fragContextChanged(t))return i.warn("Fragment "+t.sn+(e.part?" p: "+e.part.index:"")+" of level "+t.level+" was dropped during download."),void i.fragmentTracker.removeFragment(t);t.stats.chunkCount++,i._handleFragmentLoadProgress(e)})).then((function(e){if(e){var r=i.state;i.fragContextChanged(t)?(r===Vr||!i.fragCurrent&&r===jr)&&(i.fragmentTracker.removeFragment(t),i.state=Kr):("payload"in e&&(i.log("Loaded fragment "+t.sn+" of level "+t.level),i.hls.trigger(S.FRAG_LOADED,e)),i._handleFragmentLoadComplete(e))}})).catch((function(e){i.state!==Gr&&i.state!==zr&&(i.warn(e),i.resetFragmentLoading(t))}))},r.clearTrackerIfNeeded=function(t){var e,r=this.fragmentTracker;if(r.getState(t)===gr){var i=t.type,n=this.getFwdBufferInfo(this.mediaBuffer,i),a=Math.max(t.duration,n?n.len:this.config.maxBufferLength);this.reduceMaxBufferLength(a)&&r.removeFragment(t)}else 0===(null==(e=this.mediaBuffer)?void 0:e.buffered.length)?r.removeAllFragments():r.hasParts(t.type)&&(r.detectPartialFragments({frag:t,part:null,stats:t.stats,id:t.type}),r.getState(t)===vr&&r.removeFragment(t))},r.flushMainBuffer=function(t,e,r){if(void 0===r&&(r=null),t-e){var i={startOffset:t,endOffset:e,type:r};this.hls.trigger(S.BUFFER_FLUSHING,i)}},r._loadInitSegment=function(t,e){var r=this;this._doFragLoad(t,e).then((function(e){if(!e||r.fragContextChanged(t)||!r.levels)throw new Error("init load aborted");return e})).then((function(e){var i=r.hls,n=e.payload,a=t.decryptdata;if(n&&n.byteLength>0&&a&&a.key&&a.iv&&"AES-128"===a.method){var s=self.performance.now();return r.decrypter.decrypt(new Uint8Array(n),a.key.buffer,a.iv.buffer).catch((function(e){throw i.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.FRAG_DECRYPT_ERROR,fatal:!1,error:e,reason:e.message,frag:t}),e})).then((function(r){var n=self.performance.now();return i.trigger(S.FRAG_DECRYPTED,{frag:t,payload:r,stats:{tstart:s,tdecrypt:n}}),e.payload=r,e}))}return e})).then((function(i){var n=r.fragCurrent,a=r.hls;if(!r.levels)throw new Error("init load aborted, missing levels");var s=t.stats;r.state=Kr,e.fragmentError=0,t.data=new Uint8Array(i.payload),s.parsing.start=s.buffering.start=self.performance.now(),s.parsing.end=s.buffering.end=self.performance.now(),i.frag===n&&a.trigger(S.FRAG_BUFFERED,{stats:s,frag:n,part:null,id:t.type}),r.tick()})).catch((function(e){r.state!==Gr&&r.state!==zr&&(r.warn(e),r.resetFragmentLoading(t))}))},r.fragContextChanged=function(t){var e=this.fragCurrent;return!t||!e||t.level!==e.level||t.sn!==e.sn||t.urlId!==e.urlId},r.fragBufferedComplete=function(t,e){var r,i,n,a,s=this.mediaBuffer?this.mediaBuffer:this.media;this.log("Buffered "+t.type+" sn: "+t.sn+(e?" part: "+e.index:"")+" of "+(this.playlistType===ge?"level":"track")+" "+t.level+" (frag:["+(null!=(r=t.startPTS)?r:NaN).toFixed(3)+"-"+(null!=(i=t.endPTS)?i:NaN).toFixed(3)+"] > buffer:"+(s?Br(Ir.getBuffered(s)):"(detached)")+")"),this.state=Kr,s&&(!this.loadedmetadata&&t.type==ge&&s.buffered.length&&(null==(n=this.fragCurrent)?void 0:n.sn)===(null==(a=this.fragPrevious)?void 0:a.sn)&&(this.loadedmetadata=!0,this.seekToStartPos()),this.tick())},r.seekToStartPos=function(){},r._handleFragmentLoadComplete=function(t){var e=this.transmuxer;if(e){var r=t.frag,i=t.part,n=t.partsLoaded,a=!n||0===n.length||n.some((function(t){return!t})),s=new wr(r.level,r.sn,r.stats.chunkCount+1,0,i?i.index:-1,!a);e.flush(s)}},r._handleFragmentLoadProgress=function(t){},r._doFragLoad=function(t,e,r,i){var n,a=this;void 0===r&&(r=null);var s=null==e?void 0:e.details;if(!this.levels||!s)throw new Error("frag load aborted, missing level"+(s?"":" detail")+"s");var o=null;if(!t.encrypted||null!=(n=t.decryptdata)&&n.key?!t.encrypted&&s.encryptedFragments.length&&this.keyLoader.loadClear(t,s.encryptedFragments):(this.log("Loading key for "+t.sn+" of ["+s.startSN+"-"+s.endSN+"], "+("[stream-controller]"===this.logPrefix?"level":"track")+" "+t.level),this.state=Hr,this.fragCurrent=t,o=this.keyLoader.load(t).then((function(t){if(!a.fragContextChanged(t.frag))return a.hls.trigger(S.KEY_LOADED,t),a.state===Hr&&(a.state=Kr),t})),this.hls.trigger(S.KEY_LOADING,{frag:t}),null===this.fragCurrent&&(o=Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))),r=Math.max(t.start,r||0),this.config.lowLatencyMode&&"initSegment"!==t.sn){var l=s.partList;if(l&&i){r>t.end&&s.fragmentHint&&(t=s.fragmentHint);var u=this.getNextPart(l,t,r);if(u>-1){var h,d=l[u];return this.log("Loading part sn: "+t.sn+" p: "+d.index+" cc: "+t.cc+" of playlist ["+s.startSN+"-"+s.endSN+"] parts [0-"+u+"-"+(l.length-1)+"] "+("[stream-controller]"===this.logPrefix?"level":"track")+": "+t.level+", target: "+parseFloat(r.toFixed(3))),this.nextLoadPosition=d.start+d.duration,this.state=Vr,h=o?o.then((function(r){return!r||a.fragContextChanged(r.frag)?null:a.doFragPartsLoad(t,d,e,i)})).catch((function(t){return a.handleFragLoadError(t)})):this.doFragPartsLoad(t,d,e,i).catch((function(t){return a.handleFragLoadError(t)})),this.hls.trigger(S.FRAG_LOADING,{frag:t,part:d,targetBufferTime:r}),null===this.fragCurrent?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")):h}if(!t.url||this.loadedEndOfParts(l,r))return Promise.resolve(null)}}this.log("Loading fragment "+t.sn+" cc: "+t.cc+" "+(s?"of ["+s.startSN+"-"+s.endSN+"] ":"")+("[stream-controller]"===this.logPrefix?"level":"track")+": "+t.level+", target: "+parseFloat(r.toFixed(3))),E(t.sn)&&!this.bitrateTest&&(this.nextLoadPosition=t.start+t.duration),this.state=Vr;var c,f=this.config.progressive;return c=f&&o?o.then((function(e){return!e||a.fragContextChanged(null==e?void 0:e.frag)?null:a.fragmentLoader.load(t,i)})).catch((function(t){return a.handleFragLoadError(t)})):Promise.all([this.fragmentLoader.load(t,f?i:void 0),o]).then((function(t){var e=t[0];return!f&&e&&i&&i(e),e})).catch((function(t){return a.handleFragLoadError(t)})),this.hls.trigger(S.FRAG_LOADING,{frag:t,targetBufferTime:r}),null===this.fragCurrent?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")):c},r.doFragPartsLoad=function(t,e,r,i){var n=this;return new Promise((function(a,s){var o,l=[],u=null==(o=r.details)?void 0:o.partList;!function e(o){n.fragmentLoader.loadPart(t,o,i).then((function(i){l[o.index]=i;var s=i.part;n.hls.trigger(S.FRAG_LOADED,i);var h=Ve(r,t.sn,o.index+1)||Ye(u,t.sn,o.index+1);if(!h)return a({frag:t,part:s,partsLoaded:l});e(h)})).catch(s)}(e)}))},r.handleFragLoadError=function(t){if("data"in t){var e=t.data;t.data&&e.details===R.INTERNAL_ABORTED?this.handleFragLoadAborted(e.frag,e.part):this.hls.trigger(S.ERROR,e)}else this.hls.trigger(S.ERROR,{type:L.OTHER_ERROR,details:R.INTERNAL_EXCEPTION,err:t,error:t,fatal:!0});return null},r._handleTransmuxerFlush=function(t){var e=this.getCurrentContext(t);if(e&&this.state===jr){var r=e.frag,i=e.part,n=e.level,a=self.performance.now();r.stats.parsing.end=a,i&&(i.stats.parsing.end=a),this.updateLevelTiming(r,i,n,t.partial)}else this.fragCurrent||this.state===Gr||this.state===zr||(this.state=Kr)},r.getCurrentContext=function(t){var e=this.levels,r=this.fragCurrent,i=t.level,n=t.sn,a=t.part;if(null==e||!e[i])return this.warn("Levels object was unset while buffering fragment "+n+" of level "+i+". The current chunk will not be buffered."),null;var s=e[i],o=a>-1?Ve(s,n,a):null,l=o?o.fragment:function(t,e,r){if(null==t||!t.details)return null;var i=t.details,n=i.fragments[e-i.startSN];return n||((n=i.fragmentHint)&&n.sn===e?n:e<i.startSN&&r&&r.sn===e?r:null)}(s,n,r);return l?(r&&r!==l&&(l.stats=r.stats),{frag:l,part:o,level:s}):null},r.bufferFragmentData=function(t,e,r,i){var n;if(t&&this.state===jr){var a=t.data1,s=t.data2,o=a;if(a&&s&&(o=xt(a,s)),null!=(n=o)&&n.length){var l={type:t.type,frag:e,part:r,chunkMeta:i,parent:e.type,data:o};this.hls.trigger(S.BUFFER_APPENDING,l),t.dropped&&t.independent&&!r&&this.flushBufferGap(e)}}},r.flushBufferGap=function(t){var e=this.media;if(e)if(Ir.isBuffered(e,e.currentTime)){var r=e.currentTime,i=Ir.bufferInfo(e,r,0),n=t.duration,a=Math.min(2*this.config.maxFragLookUpTolerance,.25*n),s=Math.max(Math.min(t.start-a,i.end-a),r+a);t.start-s>a&&this.flushMainBuffer(s,t.start)}else this.flushMainBuffer(0,t.start)},r.getFwdBufferInfo=function(t,e){var r=this.getLoadPosition();return E(r)?this.getFwdBufferInfoAtPos(t,r,e):null},r.getFwdBufferInfoAtPos=function(t,e,r){var i=this.config.maxBufferHole,n=Ir.bufferInfo(t,e,i);if(0===n.len&&void 0!==n.nextStart){var a=this.fragmentTracker.getBufferedFrag(e,r);if(a&&n.nextStart<a.end)return Ir.bufferInfo(t,e,Math.max(n.nextStart,i))}return n},r.getMaxBufferLength=function(t){var e,r=this.config;return e=t?Math.max(8*r.maxBufferSize/t,r.maxBufferLength):r.maxBufferLength,Math.min(e,r.maxMaxBufferLength)},r.reduceMaxBufferLength=function(t){var e=this.config,r=t||e.maxBufferLength;return e.maxMaxBufferLength>=r&&(e.maxMaxBufferLength/=2,this.warn("Reduce max buffer length to "+e.maxMaxBufferLength+"s"),!0)},r.getAppendedFrag=function(t,e){var r=this.fragmentTracker.getAppendedFrag(t,ge);return r&&"fragment"in r?r.fragment:r},r.getNextFragment=function(t,e){var r=e.fragments,i=r.length;if(!i)return null;var n,a=this.config,s=r[0].start;if(e.live){var o=a.initialLiveManifestSize;if(i<o)return this.warn("Not enough fragments to start playback (have: "+i+", need: "+o+")"),null;e.PTSKnown||this.startFragRequested||-1!==this.startPosition||(n=this.getInitialLiveFragment(e,r),this.startPosition=n?this.hls.liveSyncPosition||n.start:t)}else t<=s&&(n=r[0]);if(!n){var l=a.lowLatencyMode?e.partEnd:e.fragmentEnd;n=this.getFragmentAtPosition(t,l,e)}return this.mapToInitFragWhenRequired(n)},r.isLoopLoading=function(t,e){var r=this.fragmentTracker.getState(t);return(r===mr||r===vr&&!!t.gap)&&this.nextLoadPosition>e},r.getNextFragmentLoopLoading=function(t,e,r,i,n){var a=t.gap,s=this.getNextFragment(this.nextLoadPosition,e);if(null===s)return s;if(t=s,a&&t&&!t.gap&&r.nextStart){var o=this.getFwdBufferInfoAtPos(this.mediaBuffer?this.mediaBuffer:this.media,r.nextStart,i);if(null!==o&&r.len+o.len>=n)return this.log('buffer full after gaps in "'+i+'" playlist starting at sn: '+t.sn),null}return t},r.mapToInitFragWhenRequired=function(t){return null==t||!t.initSegment||null!=t&&t.initSegment.data||this.bitrateTest?t:t.initSegment},r.getNextPart=function(t,e,r){for(var i=-1,n=!1,a=!0,s=0,o=t.length;s<o;s++){var l=t[s];if(a=a&&!l.independent,i>-1&&r<l.start)break;var u=l.loaded;u?i=-1:(n||l.independent||a)&&l.fragment===e&&(i=s),n=u}return i},r.loadedEndOfParts=function(t,e){var r=t[t.length-1];return r&&e>r.start&&r.loaded},r.getInitialLiveFragment=function(t,e){var r=this.fragPrevious,i=null;if(r){if(t.hasProgramDateTime&&(this.log("Live playlist, switching playlist, load frag with same PDT: "+r.programDateTime),i=function(t,e,r){if(null===e||!Array.isArray(t)||!t.length||!E(e))return null;if(e<(t[0].programDateTime||0))return null;if(e>=(t[t.length-1].endProgramDateTime||0))return null;r=r||0;for(var i=0;i<t.length;++i){var n=t[i];if(Ze(e,r,n))return n}return null}(e,r.endProgramDateTime,this.config.maxFragLookUpTolerance)),!i){var n=r.sn+1;if(n>=t.startSN&&n<=t.endSN){var a=e[n-t.startSN];r.cc===a.cc&&(i=a,this.log("Live playlist, switching playlist, load frag with next SN: "+i.sn))}i||(i=function(t,e){return Qe(t,(function(t){return t.cc<e?1:t.cc>e?-1:0}))}(e,r.cc),i&&this.log("Live playlist, switching playlist, load frag with same CC: "+i.sn))}}else{var s=this.hls.liveSyncPosition;null!==s&&(i=this.getFragmentAtPosition(s,this.bitrateTest?t.fragmentEnd:t.edge,t))}return i},r.getFragmentAtPosition=function(t,e,r){var i,n=this.config,a=this.fragPrevious,s=r.fragments,o=r.endSN,l=r.fragmentHint,u=n.maxFragLookUpTolerance,h=r.partList,d=!!(n.lowLatencyMode&&null!=h&&h.length&&l);if(d&&l&&!this.bitrateTest&&(s=s.concat(l),o=l.sn),i=t<e?$e(a,s,t,t>e-u?0:u):s[s.length-1]){var c=i.sn-r.startSN,f=this.fragmentTracker.getState(i);if((f===mr||f===vr&&i.gap)&&(a=i),a&&i.sn===a.sn&&(!d||h[0].fragment.sn>i.sn)&&a&&i.level===a.level){var g=s[c+1];i=i.sn<o&&this.fragmentTracker.getState(g)!==mr?g:null}}return i},r.synchronizeToLiveEdge=function(t){var e=this.config,r=this.media;if(r){var i=this.hls.liveSyncPosition,n=r.currentTime,a=t.fragments[0].start,s=t.edge,o=n>=a-e.maxFragLookUpTolerance&&n<=s;if(null!==i&&r.duration>i&&(n<i||!o)){var l=void 0!==e.liveMaxLatencyDuration?e.liveMaxLatencyDuration:e.liveMaxLatencyDurationCount*t.targetduration;(!o&&r.readyState<4||n<s-l)&&(this.loadedmetadata||(this.nextLoadPosition=i),r.readyState&&(this.warn("Playback: "+n.toFixed(3)+" is located too far from the end of live sliding playlist: "+s+", reset currentTime to : "+i.toFixed(3)),r.currentTime=i))}}},r.alignPlaylists=function(t,e){var r=this.levels,i=this.levelLastLoaded,n=this.fragPrevious,a=null!==i?r[i]:null,s=t.fragments.length;if(!s)return this.warn("No fragments in live playlist"),0;var o=t.fragments[0].start,l=!e,u=t.alignedSliding&&E(o);if(l||!u&&!o){xr(n,a,t);var h=t.fragments[0].start;return this.log("Live playlist sliding: "+h.toFixed(2)+" start-sn: "+(e?e.startSN:"na")+"->"+t.startSN+" prev-sn: "+(n?n.sn:"na")+" fragments: "+s),h}return o},r.waitForCdnTuneIn=function(t){return t.live&&t.canBlockReload&&t.partTarget&&t.tuneInGoal>Math.max(t.partHoldBack,3*t.partTarget)},r.setStartPosition=function(t,e){var r=this.startPosition;if(r<e&&(r=-1),-1===r||-1===this.lastCurrentTime){var i=null!==this.startTimeOffset,n=i?this.startTimeOffset:t.startTimeOffset;null!==n&&E(n)?(r=e+n,n<0&&(r+=t.totalduration),r=Math.min(Math.max(e,r),e+t.totalduration),this.log("Start time offset "+n+" found in "+(i?"multivariant":"media")+" playlist, adjust startPosition to "+r),this.startPosition=r):t.live?r=this.hls.liveSyncPosition||e:this.startPosition=r=0,this.lastCurrentTime=r}this.nextLoadPosition=r},r.getLoadPosition=function(){var t=this.media,e=0;return this.loadedmetadata&&t?e=t.currentTime:this.nextLoadPosition&&(e=this.nextLoadPosition),e},r.handleFragLoadAborted=function(t,e){this.transmuxer&&"initSegment"!==t.sn&&t.stats.aborted&&(this.warn("Fragment "+t.sn+(e?" part "+e.index:"")+" of level "+t.level+" was aborted"),this.resetFragmentLoading(t))},r.resetFragmentLoading=function(t){this.fragCurrent&&(this.fragContextChanged(t)||this.state===Yr)||(this.state=Kr)},r.onFragmentOrKeyLoadError=function(t,e){if(e.chunkMeta&&!e.frag){var r=this.getCurrentContext(e.chunkMeta);r&&(e.frag=r.frag)}var i=e.frag;if(i&&i.type===t&&this.levels)if(this.fragContextChanged(i)){var n;this.warn("Frag load error must match current frag to retry "+i.url+" > "+(null==(n=this.fragCurrent)?void 0:n.url))}else{var a=e.details===R.FRAG_GAP;a&&this.fragmentTracker.fragBuffered(i,!0);var s=e.errorAction,o=s||{},l=o.action,u=o.retryCount,h=void 0===u?0:u,d=o.retryConfig;if(s&&l===nr&&d){this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition);var c=qe(d,h);this.warn("Fragment "+i.sn+" of "+t+" "+i.level+" errored with "+e.details+", retrying loading "+(h+1)+"/"+d.maxNumRetry+" in "+c+"ms"),s.resolved=!0,this.retryDate=self.performance.now()+c,this.state=Yr}else d&&s?(this.resetFragmentErrors(t),h<d.maxNumRetry?a||(s.resolved=!0):w.warn(e.details+" reached or exceeded max retry ("+h+")")):(null==s?void 0:s.action)===ir?this.state=$r:this.state=zr;this.tickImmediate()}},r.reduceLengthAndFlushBuffer=function(t){if(this.state===jr||this.state===qr){var e=t.parent,r=this.getFwdBufferInfo(this.mediaBuffer,e),i=r&&r.len>.5;i&&this.reduceMaxBufferLength(r.len);var n=!i;return n&&this.warn("Buffer full error while media.currentTime is not buffered, flush "+e+" buffer"),t.frag&&(this.fragmentTracker.removeFragment(t.frag),this.nextLoadPosition=t.frag.start),this.resetLoadingState(),n}return!1},r.resetFragmentErrors=function(t){t===ve&&(this.fragCurrent=null),this.loadedmetadata||(this.startFragRequested=!1),this.state!==Gr&&(this.state=Kr)},r.afterBufferFlushed=function(t,e,r){if(t){var i=Ir.getBuffered(t);this.fragmentTracker.detectEvictedFragments(e,i,r),this.state===Xr&&this.resetLoadingState()}},r.resetLoadingState=function(){this.log("Reset loading state"),this.fragCurrent=null,this.fragPrevious=null,this.state=Kr},r.resetStartWhenNotLoaded=function(t){if(!this.loadedmetadata){this.startFragRequested=!1;var e=this.levels?this.levels[t].details:null;null!=e&&e.live?(this.startPosition=-1,this.setStartPosition(e,0),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}},r.resetWhenMissingContext=function(t){this.warn("The loading context changed while buffering fragment "+t.sn+" of level "+t.level+". This chunk will not be buffered."),this.removeUnbufferedFrags(),this.resetStartWhenNotLoaded(t.level),this.resetLoadingState()},r.removeUnbufferedFrags=function(t){void 0===t&&(t=0),this.fragmentTracker.removeFragmentsInRange(t,1/0,this.playlistType,!1,!0)},r.updateLevelTiming=function(t,e,r,i){var n,a=this,s=r.details;if(s){if(Object.keys(t.elementaryStreams).reduce((function(e,n){var o=t.elementaryStreams[n];if(o){var l=o.endPTS-o.startPTS;if(l<=0)return a.warn("Could not parse fragment "+t.sn+" "+n+" duration reliably ("+l+")"),e||!1;var u=i?0:Be(s,t,o.startPTS,o.endPTS,o.startDTS,o.endDTS);return a.hls.trigger(S.LEVEL_PTS_UPDATED,{details:s,level:r,drift:u,type:n,frag:t,start:o.startPTS,end:o.endPTS}),!0}return e}),!1))r.fragmentError=0;else if(null===(null==(n=this.transmuxer)?void 0:n.error)){var o=new Error("Found no media in fragment "+t.sn+" of level "+r.id+" resetting transmuxer to fallback to playlist timing");if(this.warn(o.message),this.hls.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.FRAG_PARSING_ERROR,fatal:!1,error:o,frag:t,reason:"Found no media in msn "+t.sn+' of level "'+r.url+'"'}),!this.hls)return;this.resetTransmuxer()}this.state=qr,this.hls.trigger(S.FRAG_PARSED,{frag:t,part:e})}else this.warn("level.details undefined")},r.resetTransmuxer=function(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)},r.recoverWorkerError=function(t){"demuxerWorker"===t.event&&(this.resetTransmuxer(),this.resetLoadingState())},a(e,[{key:"state",get:function(){return this._state},set:function(t){var e=this._state;e!==t&&(this._state=t,this.log(e+"->"+t))}}]),e}(br);function Zr(){return self.SourceBuffer||self.WebKitSourceBuffer}function ti(t,e){return void 0===t&&(t=""),void 0===e&&(e=9e4),{type:t,id:-1,pid:-1,inputTimeScale:e,sequenceNumber:-1,samples:[],dropped:0}}var ei=function(){function t(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}var e=t.prototype;return e.resetInitSegment=function(t,e,r,i){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}},e.resetTimeStamp=function(t){this.initPTS=t,this.resetContiguity()},e.resetContiguity=function(){this.basePTS=null,this.lastPTS=null,this.frameIndex=0},e.canParse=function(t,e){return!1},e.appendFrame=function(t,e,r){},e.demux=function(t,e){this.cachedData&&(t=xt(this.cachedData,t),this.cachedData=null);var r,i=st(t,0),n=i?i.length:0,a=this._audioTrack,s=this._id3Track,o=i?function(t){for(var e=dt(t),r=0;r<e.length;r++){var i=e[r];if(ut(i))return mt(i)}}(i):void 0,l=t.length;for((null===this.basePTS||0===this.frameIndex&&E(o))&&(this.basePTS=ri(o,e,this.initPTS),this.lastPTS=this.basePTS),null===this.lastPTS&&(this.lastPTS=this.basePTS),i&&i.length>0&&s.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:i,type:Ae,duration:Number.POSITIVE_INFINITY});n<l;){if(this.canParse(t,n)){var u=this.appendFrame(a,t,n);u?(this.frameIndex++,this.lastPTS=u.sample.pts,r=n+=u.length):n=l}else lt(t,n)?(i=st(t,n),s.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:i,type:Ae,duration:Number.POSITIVE_INFINITY}),r=n+=i.length):n++;if(n===l&&r!==l){var h=rt(t,r);this.cachedData?this.cachedData=xt(this.cachedData,h):this.cachedData=h}}return{audioTrack:a,videoTrack:ti(),id3Track:s,textTrack:ti()}},e.demuxSampleAes=function(t,e,r){return Promise.reject(new Error("["+this+"] This demuxer does not support Sample-AES decryption"))},e.flush=function(t){var e=this.cachedData;return e&&(this.cachedData=null,this.demux(e,0)),{audioTrack:this._audioTrack,videoTrack:ti(),id3Track:this._id3Track,textTrack:ti()}},e.destroy=function(){},t}(),ri=function(t,e,r){return E(t)?90*t:9e4*e+(r?9e4*r.baseTime/r.timescale:0)};function ii(t,e){return 255===t[e]&&240==(246&t[e+1])}function ni(t,e){return 1&t[e+1]?7:9}function ai(t,e){return(3&t[e+3])<<11|t[e+4]<<3|(224&t[e+5])>>>5}function si(t,e){return e+1<t.length&&ii(t,e)}function oi(t,e){if(si(t,e)){var r=ni(t,e);if(e+r>=t.length)return!1;var i=ai(t,e);if(i<=r)return!1;var n=e+i;return n===t.length||si(t,n)}return!1}function li(t,e,r,i,n){if(!t.samplerate){var a=function(t,e,r,i){var n,a,s,o,l=navigator.userAgent.toLowerCase(),u=i,h=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];n=1+((192&e[r+2])>>>6);var d=(60&e[r+2])>>>2;if(!(d>h.length-1))return s=(1&e[r+2])<<2,s|=(192&e[r+3])>>>6,w.log("manifest codec:"+i+", ADTS type:"+n+", samplingIndex:"+d),/firefox/i.test(l)?d>=6?(n=5,o=new Array(4),a=d-3):(n=2,o=new Array(2),a=d):-1!==l.indexOf("android")?(n=2,o=new Array(2),a=d):(n=5,o=new Array(4),i&&(-1!==i.indexOf("mp4a.40.29")||-1!==i.indexOf("mp4a.40.5"))||!i&&d>=6?a=d-3:((i&&-1!==i.indexOf("mp4a.40.2")&&(d>=6&&1===s||/vivaldi/i.test(l))||!i&&1===s)&&(n=2,o=new Array(2)),a=d)),o[0]=n<<3,o[0]|=(14&d)>>1,o[1]|=(1&d)<<7,o[1]|=s<<3,5===n&&(o[1]|=(14&a)>>1,o[2]=(1&a)<<7,o[2]|=8,o[3]=0),{config:o,samplerate:h[d],channelCount:s,codec:"mp4a.40."+n,manifestCodec:u};t.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+d})}(e,r,i,n);if(!a)return;t.config=a.config,t.samplerate=a.samplerate,t.channelCount=a.channelCount,t.codec=a.codec,t.manifestCodec=a.manifestCodec,w.log("parsed codec:"+t.codec+", rate:"+a.samplerate+", channels:"+a.channelCount)}}function ui(t){return 9216e4/t}function hi(t,e,r,i,n){var a,s=i+n*ui(t.samplerate),o=function(t,e){var r=ni(t,e);if(e+r<=t.length){var i=ai(t,e)-r;if(i>0)return{headerLength:r,frameLength:i}}}(e,r);if(o){var l=o.frameLength,u=o.headerLength,h=u+l,d=Math.max(0,r+h-e.length);d?(a=new Uint8Array(h-u)).set(e.subarray(r+u,e.length),0):a=e.subarray(r+u,r+h);var c={unit:a,pts:s};return d||t.samples.push(c),{sample:c,length:h,missing:d}}var f=e.length-r;return(a=new Uint8Array(f)).set(e.subarray(r,e.length),0),{sample:{unit:a,pts:s},length:f,missing:-1}}var di=function(t){function e(e,r){var i;return(i=t.call(this)||this).observer=void 0,i.config=void 0,i.observer=e,i.config=r,i}l(e,t);var r=e.prototype;return r.resetInitSegment=function(e,r,i,n){t.prototype.resetInitSegment.call(this,e,r,i,n),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:r,duration:n,inputTimeScale:9e4,dropped:0}},e.probe=function(t){if(!t)return!1;for(var e=(st(t,0)||[]).length,r=t.length;e<r;e++)if(oi(t,e))return w.log("ADTS sync word found !"),!0;return!1},r.canParse=function(t,e){return function(t,e){return function(t,e){return e+5<t.length}(t,e)&&ii(t,e)&&ai(t,e)<=t.length-e}(t,e)},r.appendFrame=function(t,e,r){li(t,this.observer,e,r,t.manifestCodec);var i=hi(t,e,r,this.basePTS,this.frameIndex);if(i&&0===i.missing)return i},e}(ei),ci=/\/emsg[-/]ID3/i,fi=function(){function t(t,e){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=e}var e=t.prototype;return e.resetTimeStamp=function(){},e.resetInitSegment=function(t,e,r,i){var n=this.videoTrack=ti("video",1),a=this.audioTrack=ti("audio",1),s=this.txtTrack=ti("text",1);if(this.id3Track=ti("id3",1),this.timeOffset=0,null!=t&&t.byteLength){var o=Ct(t);if(o.video){var l=o.video,u=l.id,h=l.timescale,d=l.codec;n.id=u,n.timescale=s.timescale=h,n.codec=d}if(o.audio){var c=o.audio,f=c.id,g=c.timescale,v=c.codec;a.id=f,a.timescale=g,a.codec=v}s.id=Lt.text,n.sampleDuration=0,n.duration=a.duration=i}},e.resetContiguity=function(){this.remainderData=null},t.probe=function(t){return It(t=t.length>16384?t.subarray(0,16384):t,["moof"]).length>0},e.demux=function(t,e){this.timeOffset=e;var r=t,i=this.videoTrack,n=this.txtTrack;if(this.config.progressive){this.remainderData&&(r=xt(this.remainderData,t));var a=function(t){var e={valid:null,remainder:null},r=It(t,["moof"]);if(!r)return e;if(r.length<2)return e.remainder=t,e;var i=r[r.length-1];return e.valid=rt(t,0,i.byteOffset-8),e.remainder=rt(t,i.byteOffset-8),e}(r);this.remainderData=a.remainder,i.samples=a.valid||new Uint8Array}else i.samples=r;var s=this.extractID3Track(i,e);return n.samples=Ft(e,i),{videoTrack:i,audioTrack:this.audioTrack,id3Track:s,textTrack:this.txtTrack}},e.flush=function(){var t=this.timeOffset,e=this.videoTrack,r=this.txtTrack;e.samples=this.remainderData||new Uint8Array,this.remainderData=null;var i=this.extractID3Track(e,this.timeOffset);return r.samples=Ft(t,e),{videoTrack:e,audioTrack:ti(),id3Track:i,textTrack:ti()}},e.extractID3Track=function(t,e){var r=this.id3Track;if(t.samples.length){var i=It(t.samples,["emsg"]);i&&i.forEach((function(t){var i=function(t){var e=t[0],r="",i="",n=0,a=0,s=0,o=0,l=0,u=0;if(0===e){for(;"\0"!==Rt(t.subarray(u,u+1));)r+=Rt(t.subarray(u,u+1)),u+=1;for(r+=Rt(t.subarray(u,u+1)),u+=1;"\0"!==Rt(t.subarray(u,u+1));)i+=Rt(t.subarray(u,u+1)),u+=1;i+=Rt(t.subarray(u,u+1)),u+=1,n=kt(t,12),a=kt(t,16),o=kt(t,20),l=kt(t,24),u=28}else if(1===e){n=kt(t,u+=4);var h=kt(t,u+=4),d=kt(t,u+=4);for(u+=4,s=Math.pow(2,32)*h+d,Number.isSafeInteger(s)||(s=Number.MAX_SAFE_INTEGER,w.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),o=kt(t,u),l=kt(t,u+=4),u+=4;"\0"!==Rt(t.subarray(u,u+1));)r+=Rt(t.subarray(u,u+1)),u+=1;for(r+=Rt(t.subarray(u,u+1)),u+=1;"\0"!==Rt(t.subarray(u,u+1));)i+=Rt(t.subarray(u,u+1)),u+=1;i+=Rt(t.subarray(u,u+1)),u+=1}return{schemeIdUri:r,value:i,timeScale:n,presentationTime:s,presentationTimeDelta:a,eventDuration:o,id:l,payload:t.subarray(u,t.byteLength)}}(t);if(ci.test(i.schemeIdUri)){var n=E(i.presentationTime)?i.presentationTime/i.timeScale:e+i.presentationTimeDelta/i.timeScale,a=4294967295===i.eventDuration?Number.POSITIVE_INFINITY:i.eventDuration/i.timeScale;a<=.001&&(a=Number.POSITIVE_INFINITY);var s=i.payload;r.samples.push({data:s,len:s.byteLength,dts:n,pts:n,type:be,duration:a})}}))}return r},e.demuxSampleAes=function(t,e,r){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))},e.destroy=function(){},t}(),gi=null,vi=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],mi=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],pi=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],yi=[0,1,1,4];function Ti(t,e,r,i,n){if(!(r+24>e.length)){var a=Ei(e,r);if(a&&r+a.frameLength<=e.length){var s=i+n*(9e4*a.samplesPerFrame/a.sampleRate),o={unit:e.subarray(r,r+a.frameLength),pts:s,dts:s};return t.config=[],t.channelCount=a.channelCount,t.samplerate=a.sampleRate,t.samples.push(o),{sample:o,length:a.frameLength,missing:0}}}}function Ei(t,e){var r=t[e+1]>>3&3,i=t[e+1]>>1&3,n=t[e+2]>>4&15,a=t[e+2]>>2&3;if(1!==r&&0!==n&&15!==n&&3!==a){var s=t[e+2]>>1&1,o=t[e+3]>>6,l=1e3*vi[14*(3===r?3-i:3===i?3:4)+n-1],u=mi[3*(3===r?0:2===r?1:2)+a],h=3===o?1:2,d=pi[r][i],c=yi[i],f=8*d*c,g=Math.floor(d*l/u+s)*c;if(null===gi){var v=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);gi=v?parseInt(v[1]):0}return!!gi&&gi<=87&&2===i&&l>=224e3&&0===o&&(t[e+3]=128|t[e+3]),{sampleRate:u,channelCount:h,frameLength:g,samplesPerFrame:f}}}function Si(t,e){return 255===t[e]&&224==(224&t[e+1])&&0!=(6&t[e+1])}function Li(t,e){return e+1<t.length&&Si(t,e)}function Ri(t,e){if(e+1<t.length&&Si(t,e)){var r=Ei(t,e),i=4;null!=r&&r.frameLength&&(i=r.frameLength);var n=e+i;return n===t.length||Li(t,n)}return!1}var Ai=function(){function t(t){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=t,this.bytesAvailable=t.byteLength,this.word=0,this.bitsAvailable=0}var e=t.prototype;return e.loadWord=function(){var t=this.data,e=this.bytesAvailable,r=t.byteLength-e,i=new Uint8Array(4),n=Math.min(4,e);if(0===n)throw new Error("no bytes available");i.set(t.subarray(r,r+n)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*n,this.bytesAvailable-=n},e.skipBits=function(t){var e;t=Math.min(t,8*this.bytesAvailable+this.bitsAvailable),this.bitsAvailable>t?(this.word<<=t,this.bitsAvailable-=t):(t-=this.bitsAvailable,t-=(e=t>>3)<<3,this.bytesAvailable-=e,this.loadWord(),this.word<<=t,this.bitsAvailable-=t)},e.readBits=function(t){var e=Math.min(this.bitsAvailable,t),r=this.word>>>32-e;if(t>32&&w.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=e,this.bitsAvailable>0)this.word<<=e;else{if(!(this.bytesAvailable>0))throw new Error("no bits available");this.loadWord()}return(e=t-e)>0&&this.bitsAvailable?r<<e|this.readBits(e):r},e.skipLZ=function(){var t;for(t=0;t<this.bitsAvailable;++t)if(0!=(this.word&2147483648>>>t))return this.word<<=t,this.bitsAvailable-=t,t;return this.loadWord(),t+this.skipLZ()},e.skipUEG=function(){this.skipBits(1+this.skipLZ())},e.skipEG=function(){this.skipBits(1+this.skipLZ())},e.readUEG=function(){var t=this.skipLZ();return this.readBits(t+1)-1},e.readEG=function(){var t=this.readUEG();return 1&t?1+t>>>1:-1*(t>>>1)},e.readBoolean=function(){return 1===this.readBits(1)},e.readUByte=function(){return this.readBits(8)},e.readUShort=function(){return this.readBits(16)},e.readUInt=function(){return this.readBits(32)},e.skipScalingList=function(t){for(var e=8,r=8,i=0;i<t;i++)0!==r&&(r=(e+this.readEG()+256)%256),e=0===r?e:r},e.readSPS=function(){var t,e,r,i=0,n=0,a=0,s=0,o=this.readUByte.bind(this),l=this.readBits.bind(this),u=this.readUEG.bind(this),h=this.readBoolean.bind(this),d=this.skipBits.bind(this),c=this.skipEG.bind(this),f=this.skipUEG.bind(this),g=this.skipScalingList.bind(this);o();var v=o();if(l(5),d(3),o(),f(),100===v||110===v||122===v||244===v||44===v||83===v||86===v||118===v||128===v){var m=u();if(3===m&&d(1),f(),f(),d(1),h())for(e=3!==m?8:12,r=0;r<e;r++)h()&&g(r<6?16:64)}f();var p=u();if(0===p)u();else if(1===p)for(d(1),c(),c(),t=u(),r=0;r<t;r++)c();f(),d(1);var y=u(),T=u(),E=l(1);0===E&&d(1),d(1),h()&&(i=u(),n=u(),a=u(),s=u());var S=[1,1];if(h()&&h())switch(o()){case 1:S=[1,1];break;case 2:S=[12,11];break;case 3:S=[10,11];break;case 4:S=[16,11];break;case 5:S=[40,33];break;case 6:S=[24,11];break;case 7:S=[20,11];break;case 8:S=[32,11];break;case 9:S=[80,33];break;case 10:S=[18,11];break;case 11:S=[15,11];break;case 12:S=[64,33];break;case 13:S=[160,99];break;case 14:S=[4,3];break;case 15:S=[3,2];break;case 16:S=[2,1];break;case 255:S=[o()<<8|o(),o()<<8|o()]}return{width:Math.ceil(16*(y+1)-2*i-2*n),height:(2-E)*(T+1)*16-(E?2:4)*(a+s),pixelRatio:S}},e.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},t}(),ki=function(){function t(t,e,r){this.keyData=void 0,this.decrypter=void 0,this.keyData=r,this.decrypter=new Ur(e,{removePKCS7Padding:!1})}var e=t.prototype;return e.decryptBuffer=function(t){return this.decrypter.decrypt(t,this.keyData.key.buffer,this.keyData.iv.buffer)},e.decryptAacSample=function(t,e,r){var i=this,n=t[e].unit;if(!(n.length<=16)){var a=n.subarray(16,n.length-n.length%16),s=a.buffer.slice(a.byteOffset,a.byteOffset+a.length);this.decryptBuffer(s).then((function(a){var s=new Uint8Array(a);n.set(s,16),i.decrypter.isSync()||i.decryptAacSamples(t,e+1,r)}))}},e.decryptAacSamples=function(t,e,r){for(;;e++){if(e>=t.length)return void r();if(!(t[e].unit.length<32||(this.decryptAacSample(t,e,r),this.decrypter.isSync())))return}},e.getAvcEncryptedData=function(t){for(var e=16*Math.floor((t.length-48)/160)+16,r=new Int8Array(e),i=0,n=32;n<t.length-16;n+=160,i+=16)r.set(t.subarray(n,n+16),i);return r},e.getAvcDecryptedUnit=function(t,e){for(var r=new Uint8Array(e),i=0,n=32;n<t.length-16;n+=160,i+=16)t.set(r.subarray(i,i+16),n);return t},e.decryptAvcSample=function(t,e,r,i,n){var a=this,s=Nt(n.data),o=this.getAvcEncryptedData(s);this.decryptBuffer(o.buffer).then((function(o){n.data=a.getAvcDecryptedUnit(s,o),a.decrypter.isSync()||a.decryptAvcSamples(t,e,r+1,i)}))},e.decryptAvcSamples=function(t,e,r,i){if(t instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;e++,r=0){if(e>=t.length)return void i();for(var n=t[e].units;!(r>=n.length);r++){var a=n[r];if(!(a.data.length<=48||1!==a.type&&5!==a.type||(this.decryptAvcSample(t,e,r,i,a),this.decrypter.isSync())))return}}},t}(),bi=188,Di=function(){function t(t,e,r){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this._pmtId=-1,this._avcTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.observer=t,this.config=e,this.typeSupported=r}t.probe=function(e){var r=t.syncOffset(e);return r>0&&w.warn("MPEG2-TS detected but first sync word found @ offset "+r),-1!==r},t.syncOffset=function(t){for(var e=t.length,r=Math.min(940,t.length-bi)+1,i=0;i<r;){for(var n=!1,a=-1,s=0,o=i;o<e;o+=bi){if(71!==t[o]){if(s)return-1;break}if(s++,-1===a&&0!==(a=o)&&(r=Math.min(a+18612,t.length-bi)+1),n||(n=0===wi(t,o)),n&&s>1&&(0===a&&s>2||o+bi>r))return a}i++}return-1},t.createTrack=function(t,e){return{container:"video"===t||"audio"===t?"video/mp2t":void 0,type:t,id:Lt[t],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:"audio"===t?e:void 0}};var e=t.prototype;return e.resetInitSegment=function(e,r,i,n){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=t.createTrack("video"),this._audioTrack=t.createTrack("audio",n),this._id3Track=t.createTrack("id3"),this._txtTrack=t.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.audioCodec=r,this.videoCodec=i,this._duration=n},e.resetTimeStamp=function(){},e.resetContiguity=function(){var t=this._audioTrack,e=this._avcTrack,r=this._id3Track;t&&(t.pesData=null),e&&(e.pesData=null),r&&(r.pesData=null),this.aacOverFlow=null,this.avcSample=null,this.remainderData=null},e.demux=function(e,r,i,n){var a;void 0===i&&(i=!1),void 0===n&&(n=!1),i||(this.sampleAes=null);var s=this._avcTrack,o=this._audioTrack,l=this._id3Track,u=this._txtTrack,h=s.pid,d=s.pesData,c=o.pid,f=l.pid,g=o.pesData,v=l.pesData,m=null,p=this.pmtParsed,y=this._pmtId,T=e.length;if(this.remainderData&&(T=(e=xt(this.remainderData,e)).length,this.remainderData=null),T<bi&&!n)return this.remainderData=e,{audioTrack:o,videoTrack:s,id3Track:l,textTrack:u};var E=Math.max(0,t.syncOffset(e));(T-=(T-E)%bi)<e.byteLength&&!n&&(this.remainderData=new Uint8Array(e.buffer,T,e.buffer.byteLength-T));for(var A=0,k=E;k<T;k+=bi)if(71===e[k]){var b=!!(64&e[k+1]),D=wi(e,k),I=void 0;if((48&e[k+3])>>4>1){if((I=k+5+e[k+4])===k+bi)continue}else I=k+4;switch(D){case h:b&&(d&&(a=Pi(d))&&this.parseAVCPES(s,u,a,!1),d={data:[],size:0}),d&&(d.data.push(e.subarray(I,k+bi)),d.size+=k+bi-I);break;case c:if(b){if(g&&(a=Pi(g)))switch(o.segmentCodec){case"aac":this.parseAACPES(o,a);break;case"mp3":this.parseMPEGPES(o,a)}g={data:[],size:0}}g&&(g.data.push(e.subarray(I,k+bi)),g.size+=k+bi-I);break;case f:b&&(v&&(a=Pi(v))&&this.parseID3PES(l,a),v={data:[],size:0}),v&&(v.data.push(e.subarray(I,k+bi)),v.size+=k+bi-I);break;case 0:b&&(I+=e[I]+1),y=this._pmtId=Ci(e,I);break;case y:b&&(I+=e[I]+1);var C=_i(e,I,this.typeSupported,i);(h=C.avc)>0&&(s.pid=h),(c=C.audio)>0&&(o.pid=c,o.segmentCodec=C.segmentCodec),(f=C.id3)>0&&(l.pid=f),null===m||p||(w.warn("MPEG-TS PMT found at "+k+" after unknown PID '"+m+"'. Backtracking to sync byte @"+E+" to parse all TS packets."),m=null,k=E-188),p=this.pmtParsed=!0;break;case 17:case 8191:break;default:m=D}}else A++;if(A>0){var _=new Error("Found "+A+" TS packet/s that do not start with 0x47");this.observer.emit(S.ERROR,S.ERROR,{type:L.MEDIA_ERROR,details:R.FRAG_PARSING_ERROR,fatal:!1,error:_,reason:_.message})}s.pesData=d,o.pesData=g,l.pesData=v;var P={audioTrack:o,videoTrack:s,id3Track:l,textTrack:u};return n&&this.extractRemainingSamples(P),P},e.flush=function(){var t,e=this.remainderData;return this.remainderData=null,t=e?this.demux(e,-1,!1,!0):{videoTrack:this._avcTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(t),this.sampleAes?this.decrypt(t,this.sampleAes):t},e.extractRemainingSamples=function(t){var e,r=t.audioTrack,i=t.videoTrack,n=t.id3Track,a=t.textTrack,s=i.pesData,o=r.pesData,l=n.pesData;if(s&&(e=Pi(s))?(this.parseAVCPES(i,a,e,!0),i.pesData=null):i.pesData=s,o&&(e=Pi(o))){switch(r.segmentCodec){case"aac":this.parseAACPES(r,e);break;case"mp3":this.parseMPEGPES(r,e)}r.pesData=null}else null!=o&&o.size&&w.log("last AAC PES packet truncated,might overlap between fragments"),r.pesData=o;l&&(e=Pi(l))?(this.parseID3PES(n,e),n.pesData=null):n.pesData=l},e.demuxSampleAes=function(t,e,r){var i=this.demux(t,r,!0,!this.config.progressive),n=this.sampleAes=new ki(this.observer,this.config,e);return this.decrypt(i,n)},e.decrypt=function(t,e){return new Promise((function(r){var i=t.audioTrack,n=t.videoTrack;i.samples&&"aac"===i.segmentCodec?e.decryptAacSamples(i.samples,0,(function(){n.samples?e.decryptAvcSamples(n.samples,0,0,(function(){r(t)})):r(t)})):n.samples&&e.decryptAvcSamples(n.samples,0,0,(function(){r(t)}))}))},e.destroy=function(){this._duration=0},e.parseAVCPES=function(t,e,r,i){var n,a=this,s=this.parseAVCNALu(t,r.data),o=this.avcSample,l=!1;r.data=null,o&&s.length&&!t.audFound&&(xi(o,t),o=this.avcSample=Ii(!1,r.pts,r.dts,"")),s.forEach((function(i){switch(i.type){case 1:n=!0,o||(o=a.avcSample=Ii(!0,r.pts,r.dts,"")),o.frame=!0;var s=i.data;if(l&&s.length>4){var u=new Ai(s).readSliceType();2!==u&&4!==u&&7!==u&&9!==u||(o.key=!0)}break;case 5:n=!0,o||(o=a.avcSample=Ii(!0,r.pts,r.dts,"")),o.key=!0,o.frame=!0;break;case 6:n=!0,Ot(i.data,1,r.pts,e.samples);break;case 7:if(n=!0,l=!0,!t.sps){var h=i.data,d=new Ai(h).readSPS();t.width=d.width,t.height=d.height,t.pixelRatio=d.pixelRatio,t.sps=[h],t.duration=a._duration;for(var c=h.subarray(1,4),f="avc1.",g=0;g<3;g++){var v=c[g].toString(16);v.length<2&&(v="0"+v),f+=v}t.codec=f}break;case 8:n=!0,t.pps||(t.pps=[i.data]);break;case 9:n=!1,t.audFound=!0,o&&xi(o,t),o=a.avcSample=Ii(!1,r.pts,r.dts,"");break;case 12:n=!0;break;default:n=!1,o&&(o.debug+="unknown NAL "+i.type+" ")}o&&n&&o.units.push(i)})),i&&o&&(xi(o,t),this.avcSample=null)},e.getLastNalUnit=function(t){var e,r,i=this.avcSample;if(i&&0!==i.units.length||(i=t[t.length-1]),null!=(e=i)&&e.units){var n=i.units;r=n[n.length-1]}return r},e.parseAVCNALu=function(t,e){var r,i,n=e.byteLength,a=t.naluState||0,s=a,o=[],l=0,u=-1,h=0;for(-1===a&&(u=0,h=31&e[0],a=0,l=1);l<n;)if(r=e[l++],a)if(1!==a)if(r)if(1===r){if(u>=0){var d={data:e.subarray(u,l-a-1),type:h};o.push(d)}else{var c=this.getLastNalUnit(t.samples);if(c&&(s&&l<=4-s&&c.state&&(c.data=c.data.subarray(0,c.data.byteLength-s)),(i=l-a-1)>0)){var f=new Uint8Array(c.data.byteLength+i);f.set(c.data,0),f.set(e.subarray(0,i),c.data.byteLength),c.data=f,c.state=0}}l<n?(u=l,h=31&e[l],a=0):a=-1}else a=0;else a=3;else a=r?0:2;else a=r?0:1;if(u>=0&&a>=0){var g={data:e.subarray(u,n),type:h,state:a};o.push(g)}if(0===o.length){var v=this.getLastNalUnit(t.samples);if(v){var m=new Uint8Array(v.data.byteLength+e.byteLength);m.set(v.data,0),m.set(e,v.data.byteLength),v.data=m}}return t.naluState=a,o},e.parseAACPES=function(t,e){var r,i,n,a=0,s=this.aacOverFlow,o=e.data;if(s){this.aacOverFlow=null;var l=s.missing,u=s.sample.unit.byteLength;if(-1===l){var h=new Uint8Array(u+o.byteLength);h.set(s.sample.unit,0),h.set(o,u),o=h}else{var d=u-l;s.sample.unit.set(o.subarray(0,l),d),t.samples.push(s.sample),a=s.missing}}for(r=a,i=o.length;r<i-1&&!si(o,r);r++);if(r!==a){var c,f=r<i-1;c=f?"AAC PES did not start with ADTS header,offset:"+r:"No ADTS header found in AAC PES";var g=new Error(c);if(w.warn("parsing error: "+c),this.observer.emit(S.ERROR,S.ERROR,{type:L.MEDIA_ERROR,details:R.FRAG_PARSING_ERROR,fatal:!1,levelRetry:f,error:g,reason:c}),!f)return}if(li(t,this.observer,o,r,this.audioCodec),void 0!==e.pts)n=e.pts;else{if(!s)return void w.warn("[tsdemuxer]: AAC PES unknown PTS");var v=ui(t.samplerate);n=s.sample.pts+v}for(var m,p=0;r<i;){if(r+=(m=hi(t,o,r,n,p)).length,m.missing){this.aacOverFlow=m;break}for(p++;r<i-1&&!si(o,r);r++);}},e.parseMPEGPES=function(t,e){var r=e.data,i=r.length,n=0,a=0,s=e.pts;if(void 0!==s)for(;a<i;)if(Li(r,a)){var o=Ti(t,r,a,s,n);if(!o)break;a+=o.length,n++}else a++;else w.warn("[tsdemuxer]: MPEG PES unknown PTS")},e.parseID3PES=function(t,e){if(void 0!==e.pts){var r=o({},e,{type:this._avcTrack?be:Ae,duration:Number.POSITIVE_INFINITY});t.samples.push(r)}else w.warn("[tsdemuxer]: ID3 PES unknown PTS")},t}();function Ii(t,e,r,i){return{key:t,frame:!1,pts:e,dts:r,units:[],debug:i,length:0}}function wi(t,e){return((31&t[e+1])<<8)+t[e+2]}function Ci(t,e){return(31&t[e+10])<<8|t[e+11]}function _i(t,e,r,i){var n={audio:-1,avc:-1,id3:-1,segmentCodec:"aac"},a=e+3+((15&t[e+1])<<8|t[e+2])-4;for(e+=12+((15&t[e+10])<<8|t[e+11]);e<a;){var s=wi(t,e);switch(t[e]){case 207:if(!i){w.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break}case 15:-1===n.audio&&(n.audio=s);break;case 21:-1===n.id3&&(n.id3=s);break;case 219:if(!i){w.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");break}case 27:-1===n.avc&&(n.avc=s);break;case 3:case 4:!0!==r.mpeg&&!0!==r.mp3?w.log("MPEG audio found, not supported in this browser"):-1===n.audio&&(n.audio=s,n.segmentCodec="mp3");break;case 36:w.warn("Unsupported HEVC stream type found")}e+=5+((15&t[e+3])<<8|t[e+4])}return n}function Pi(t){var e,r,i,n,a,s=0,o=t.data;if(!t||0===t.size)return null;for(;o[0].length<19&&o.length>1;){var l=new Uint8Array(o[0].length+o[1].length);l.set(o[0]),l.set(o[1],o[0].length),o[0]=l,o.splice(1,1)}if(1===((e=o[0])[0]<<16)+(e[1]<<8)+e[2]){if((r=(e[4]<<8)+e[5])&&r>t.size-6)return null;var u=e[7];192&u&&(n=536870912*(14&e[9])+4194304*(255&e[10])+16384*(254&e[11])+128*(255&e[12])+(254&e[13])/2,64&u?n-(a=536870912*(14&e[14])+4194304*(255&e[15])+16384*(254&e[16])+128*(255&e[17])+(254&e[18])/2)>54e5&&(w.warn(Math.round((n-a)/9e4)+"s delta between PTS and DTS, align them"),n=a):a=n);var h=(i=e[8])+9;if(t.size<=h)return null;t.size-=h;for(var d=new Uint8Array(t.size),c=0,f=o.length;c<f;c++){var g=(e=o[c]).byteLength;if(h){if(h>g){h-=g;continue}e=e.subarray(h),g-=h,h=0}d.set(e,s),s+=g}return r&&(r-=i+3),{data:d,pts:n,dts:a,len:r}}return null}function xi(t,e){if(t.units.length&&t.frame){if(void 0===t.pts){var r=e.samples,i=r.length;if(!i)return void e.dropped++;var n=r[i-1];t.pts=n.pts,t.dts=n.dts}e.samples.push(t)}t.debug.length&&w.log(t.pts+"/"+t.dts+":"+t.debug)}var Fi=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var r=e.prototype;return r.resetInitSegment=function(e,r,i,n){t.prototype.resetInitSegment.call(this,e,r,i,n),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:r,duration:n,inputTimeScale:9e4,dropped:0}},e.probe=function(t){if(!t)return!1;for(var e=(st(t,0)||[]).length,r=t.length;e<r;e++)if(Ri(t,e))return w.log("MPEG Audio sync word found !"),!0;return!1},r.canParse=function(t,e){return function(t,e){return Si(t,e)&&4<=t.length-e}(t,e)},r.appendFrame=function(t,e,r){if(null!==this.basePTS)return Ti(t,e,r,this.basePTS,this.frameIndex)},e}(ei),Mi=function(){function t(){}return t.getSilentFrame=function(t,e){if("mp4a.40.2"===t){if(1===e)return new Uint8Array([0,200,0,128,35,128]);if(2===e)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224])}else{if(1===e)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}},t}(),Oi=Math.pow(2,32)-1,Ni=function(){function t(){}return t.init=function(){var e;for(e in t.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]},t.types)t.types.hasOwnProperty(e)&&(t.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);t.HDLR_TYPES={video:r,audio:i};var n=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),a=new Uint8Array([0,0,0,0,0,0,0,0]);t.STTS=t.STSC=t.STCO=a,t.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),t.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),t.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),t.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);t.FTYP=t.box(t.types.ftyp,s,l,s,o),t.DINF=t.box(t.types.dinf,t.box(t.types.dref,n))},t.box=function(t){for(var e=8,r=arguments.length,i=new Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];for(var a=i.length,s=a;a--;)e+=i[a].byteLength;var o=new Uint8Array(e);for(o[0]=e>>24&255,o[1]=e>>16&255,o[2]=e>>8&255,o[3]=255&e,o.set(t,4),a=0,e=8;a<s;a++)o.set(i[a],e),e+=i[a].byteLength;return o},t.hdlr=function(e){return t.box(t.types.hdlr,t.HDLR_TYPES[e])},t.mdat=function(e){return t.box(t.types.mdat,e)},t.mdhd=function(e,r){r*=e;var i=Math.floor(r/(Oi+1)),n=Math.floor(r%(Oi+1));return t.box(t.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,n>>24,n>>16&255,n>>8&255,255&n,85,196,0,0]))},t.mdia=function(e){return t.box(t.types.mdia,t.mdhd(e.timescale,e.duration),t.hdlr(e.type),t.minf(e))},t.mfhd=function(e){return t.box(t.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,255&e]))},t.minf=function(e){return"audio"===e.type?t.box(t.types.minf,t.box(t.types.smhd,t.SMHD),t.DINF,t.stbl(e)):t.box(t.types.minf,t.box(t.types.vmhd,t.VMHD),t.DINF,t.stbl(e))},t.moof=function(e,r,i){return t.box(t.types.moof,t.mfhd(e),t.traf(i,r))},t.moov=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trak(e[r]);return t.box.apply(null,[t.types.moov,t.mvhd(e[0].timescale,e[0].duration)].concat(i).concat(t.mvex(e)))},t.mvex=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trex(e[r]);return t.box.apply(null,[t.types.mvex].concat(i))},t.mvhd=function(e,r){r*=e;var i=Math.floor(r/(Oi+1)),n=Math.floor(r%(Oi+1)),a=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,n>>24,n>>16&255,n>>8&255,255&n,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return t.box(t.types.mvhd,a)},t.sdtp=function(e){var r,i,n=e.samples||[],a=new Uint8Array(4+n.length);for(r=0;r<n.length;r++)i=n[r].flags,a[r+4]=i.dependsOn<<4|i.isDependedOn<<2|i.hasRedundancy;return t.box(t.types.sdtp,a)},t.stbl=function(e){return t.box(t.types.stbl,t.stsd(e),t.box(t.types.stts,t.STTS),t.box(t.types.stsc,t.STSC),t.box(t.types.stsz,t.STSZ),t.box(t.types.stco,t.STCO))},t.avc1=function(e){var r,i,n,a=[],s=[];for(r=0;r<e.sps.length;r++)n=(i=e.sps[r]).byteLength,a.push(n>>>8&255),a.push(255&n),a=a.concat(Array.prototype.slice.call(i));for(r=0;r<e.pps.length;r++)n=(i=e.pps[r]).byteLength,s.push(n>>>8&255),s.push(255&n),s=s.concat(Array.prototype.slice.call(i));var o=t.box(t.types.avcC,new Uint8Array([1,a[3],a[4],a[5],255,224|e.sps.length].concat(a).concat([e.pps.length]).concat(s))),l=e.width,u=e.height,h=e.pixelRatio[0],d=e.pixelRatio[1];return t.box(t.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,u>>8&255,255&u,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,t.box(t.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),t.box(t.types.pasp,new Uint8Array([h>>24,h>>16&255,h>>8&255,255&h,d>>24,d>>16&255,d>>8&255,255&d])))},t.esds=function(t){var e=t.config.length;return new Uint8Array([0,0,0,0,3,23+e,0,1,0,4,15+e,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([e]).concat(t.config).concat([6,1,2]))},t.mp4a=function(e){var r=e.samplerate;return t.box(t.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),t.box(t.types.esds,t.esds(e)))},t.mp3=function(e){var r=e.samplerate;return t.box(t.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))},t.stsd=function(e){return"audio"===e.type?"mp3"===e.segmentCodec&&"mp3"===e.codec?t.box(t.types.stsd,t.STSD,t.mp3(e)):t.box(t.types.stsd,t.STSD,t.mp4a(e)):t.box(t.types.stsd,t.STSD,t.avc1(e))},t.tkhd=function(e){var r=e.id,i=e.duration*e.timescale,n=e.width,a=e.height,s=Math.floor(i/(Oi+1)),o=Math.floor(i%(Oi+1));return t.box(t.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,s>>24,s>>16&255,s>>8&255,255&s,o>>24,o>>16&255,o>>8&255,255&o,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,n>>8&255,255&n,0,0,a>>8&255,255&a,0,0]))},t.traf=function(e,r){var i=t.sdtp(e),n=e.id,a=Math.floor(r/(Oi+1)),s=Math.floor(r%(Oi+1));return t.box(t.types.traf,t.box(t.types.tfhd,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n])),t.box(t.types.tfdt,new Uint8Array([1,0,0,0,a>>24,a>>16&255,a>>8&255,255&a,s>>24,s>>16&255,s>>8&255,255&s])),t.trun(e,i.length+16+20+8+16+8+8),i)},t.trak=function(e){return e.duration=e.duration||4294967295,t.box(t.types.trak,t.tkhd(e),t.mdia(e))},t.trex=function(e){var r=e.id;return t.box(t.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},t.trun=function(e,r){var i,n,a,s,o,l,u=e.samples||[],h=u.length,d=12+16*h,c=new Uint8Array(d);for(r+=8+d,c.set(["video"===e.type?1:0,0,15,1,h>>>24&255,h>>>16&255,h>>>8&255,255&h,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),i=0;i<h;i++)a=(n=u[i]).duration,s=n.size,o=n.flags,l=n.cts,c.set([a>>>24&255,a>>>16&255,a>>>8&255,255&a,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o.isLeading<<2|o.dependsOn,o.isDependedOn<<6|o.hasRedundancy<<4|o.paddingValue<<1|o.isNonSync,61440&o.degradPrio,15&o.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*i);return t.box(t.types.trun,c)},t.initSegment=function(e){t.types||t.init();var r=t.moov(e),i=new Uint8Array(t.FTYP.byteLength+r.byteLength);return i.set(t.FTYP),i.set(r,t.FTYP.byteLength),i},t}();function Ui(t,e,r,i){void 0===r&&(r=1),void 0===i&&(i=!1);var n=t*e*r;return i?Math.round(n):n}function Bi(t,e){return void 0===e&&(e=!1),Ui(t,1e3,1/9e4,e)}Ni.types=void 0,Ni.HDLR_TYPES=void 0,Ni.STTS=void 0,Ni.STSC=void 0,Ni.STCO=void 0,Ni.STSZ=void 0,Ni.VMHD=void 0,Ni.SMHD=void 0,Ni.STSD=void 0,Ni.FTYP=void 0,Ni.DINF=void 0;var Gi=null,Ki=null,Hi=function(){function t(t,e,r,i){if(this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=null,this._initDTS=null,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.observer=t,this.config=e,this.typeSupported=r,this.ISGenerated=!1,null===Gi){var n=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);Gi=n?parseInt(n[1]):0}if(null===Ki){var a=navigator.userAgent.match(/Safari\/(\d+)/i);Ki=a?parseInt(a[1]):0}}var e=t.prototype;return e.destroy=function(){},e.resetTimeStamp=function(t){w.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=t},e.resetNextTimestamp=function(){w.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1},e.resetInitSegment=function(){w.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1},e.getVideoStartPts=function(t){var e=!1,r=t.reduce((function(t,r){var i=r.pts-t;return i<-4294967296?(e=!0,Vi(t,r.pts)):i>0?t:r.pts}),t[0].pts);return e&&w.debug("PTS rollover detected"),r},e.remux=function(t,e,r,i,n,a,s,o){var l,u,h,d,c,f,g=n,v=n,m=t.pid>-1,p=e.pid>-1,y=e.samples.length,T=t.samples.length>0,E=s&&y>0||y>1;if((!m||T)&&(!p||E)||this.ISGenerated||s){this.ISGenerated||(h=this.generateIS(t,e,n,a));var S,L=this.isVideoContiguous,R=-1;if(E&&(R=function(t){for(var e=0;e<t.length;e++)if(t[e].key)return e;return-1}(e.samples),!L&&this.config.forceKeyFrameOnDiscontinuity))if(f=!0,R>0){w.warn("[mp4-remuxer]: Dropped "+R+" out of "+y+" video samples due to a missing keyframe");var A=this.getVideoStartPts(e.samples);e.samples=e.samples.slice(R),e.dropped+=R,S=v+=(e.samples[0].pts-A)/e.inputTimeScale}else-1===R&&(w.warn("[mp4-remuxer]: No keyframe found out of "+y+" video samples"),f=!1);if(this.ISGenerated){if(T&&E){var k=this.getVideoStartPts(e.samples),b=(Vi(t.samples[0].pts,k)-k)/e.inputTimeScale;g+=Math.max(0,b),v+=Math.max(0,-b)}if(T){if(t.samplerate||(w.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),h=this.generateIS(t,e,n,a)),u=this.remuxAudio(t,g,this.isAudioContiguous,a,p||E||o===ve?v:void 0),E){var D=u?u.endPTS-u.startPTS:0;e.inputTimeScale||(w.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),h=this.generateIS(t,e,n,a)),l=this.remuxVideo(e,v,L,D)}}else E&&(l=this.remuxVideo(e,v,L,0));l&&(l.firstKeyFrame=R,l.independent=-1!==R,l.firstKeyFramePTS=S)}}return this.ISGenerated&&this._initPTS&&this._initDTS&&(r.samples.length&&(c=Yi(r,n,this._initPTS,this._initDTS)),i.samples.length&&(d=Wi(i,n,this._initPTS))),{audio:u,video:l,initSegment:h,independent:f,text:d,id3:c}},e.generateIS=function(t,e,r,i){var n,a,s,o=t.samples,l=e.samples,u=this.typeSupported,h={},d=this._initPTS,c=!d||i,f="audio/mp4";if(c&&(n=a=1/0),t.config&&o.length&&(t.timescale=t.samplerate,"mp3"===t.segmentCodec&&(u.mpeg?(f="audio/mpeg",t.codec=""):u.mp3&&(t.codec="mp3")),h.audio={id:"audio",container:f,codec:t.codec,initSegment:"mp3"===t.segmentCodec&&u.mpeg?new Uint8Array(0):Ni.initSegment([t]),metadata:{channelCount:t.channelCount}},c&&(s=t.inputTimeScale,d&&s===d.timescale?c=!1:n=a=o[0].pts-Math.round(s*r))),e.sps&&e.pps&&l.length&&(e.timescale=e.inputTimeScale,h.video={id:"main",container:"video/mp4",codec:e.codec,initSegment:Ni.initSegment([e]),metadata:{width:e.width,height:e.height}},c))if(s=e.inputTimeScale,d&&s===d.timescale)c=!1;else{var g=this.getVideoStartPts(l),v=Math.round(s*r);a=Math.min(a,Vi(l[0].dts,g)-v),n=Math.min(n,g-v)}if(Object.keys(h).length)return this.ISGenerated=!0,c?(this._initPTS={baseTime:n,timescale:s},this._initDTS={baseTime:a,timescale:s}):n=s=void 0,{tracks:h,initPTS:n,timescale:s}},e.remuxVideo=function(t,e,r,i){var n,a,s=t.inputTimeScale,l=t.samples,u=[],h=l.length,d=this._initPTS,c=this.nextAvcDts,f=8,g=this.videoSampleDuration,v=Number.POSITIVE_INFINITY,m=Number.NEGATIVE_INFINITY,p=!1;r&&null!==c||(c=e*s-(l[0].pts-Vi(l[0].dts,l[0].pts)));for(var y=d.baseTime*s/d.timescale,T=0;T<h;T++){var E=l[T];E.pts=Vi(E.pts-y,c),E.dts=Vi(E.dts-y,c),E.dts<l[T>0?T-1:T].dts&&(p=!0)}p&&l.sort((function(t,e){var r=t.dts-e.dts,i=t.pts-e.pts;return r||i})),n=l[0].dts;var A=(a=l[l.length-1].dts)-n,k=A?Math.round(A/(h-1)):g||t.inputTimeScale/30;if(r){var b=n-c,D=b>k,I=b<-1;if((D||I)&&(D?w.warn("AVC: "+Bi(b,!0)+" ms ("+b+"dts) hole between fragments detected, filling it"):w.warn("AVC: "+Bi(-b,!0)+" ms ("+b+"dts) overlapping between fragments detected"),!I||c>=l[0].pts)){n=c;var C=l[0].pts-b;l[0].dts=n,l[0].pts=C,w.log("Video: First PTS/DTS adjusted: "+Bi(C,!0)+"/"+Bi(n,!0)+", delta: "+Bi(b,!0)+" ms")}}n=Math.max(0,n);for(var _=0,P=0,x=0;x<h;x++){for(var F=l[x],M=F.units,O=M.length,N=0,U=0;U<O;U++)N+=M[U].data.length;P+=N,_+=O,F.length=N,F.dts=Math.max(F.dts,n),v=Math.min(F.pts,v),m=Math.max(F.pts,m)}a=l[h-1].dts;var B,G=P+4*_+8;try{B=new Uint8Array(G)}catch(t){return void this.observer.emit(S.ERROR,S.ERROR,{type:L.MUX_ERROR,details:R.REMUX_ALLOC_ERROR,fatal:!1,error:t,bytes:G,reason:"fail allocating video mdat "+G})}var K=new DataView(B.buffer);K.setUint32(0,G),B.set(Ni.types.mdat,4);for(var H=!1,V=Number.POSITIVE_INFINITY,Y=Number.POSITIVE_INFINITY,W=Number.NEGATIVE_INFINITY,j=Number.NEGATIVE_INFINITY,q=0;q<h;q++){for(var X=l[q],z=X.units,Q=0,$=0,J=z.length;$<J;$++){var Z=z[$],tt=Z.data,et=Z.data.byteLength;K.setUint32(f,et),f+=4,B.set(tt,f),f+=et,Q+=4+et}var rt=void 0;if(q<h-1)g=l[q+1].dts-X.dts,rt=l[q+1].pts-X.pts;else{var it=this.config,nt=q>0?X.dts-l[q-1].dts:k;if(rt=q>0?X.pts-l[q-1].pts:k,it.stretchShortVideoTrack&&null!==this.nextAudioPts){var at=Math.floor(it.maxBufferHole*s),st=(i?v+i*s:this.nextAudioPts)-X.pts;st>at?((g=st-nt)<0?g=nt:H=!0,w.log("[mp4-remuxer]: It is approximately "+st/90+" ms to the next segment; using duration "+g/90+" ms for the last video frame.")):g=nt}else g=nt}var ot=Math.round(X.pts-X.dts);V=Math.min(V,g),W=Math.max(W,g),Y=Math.min(Y,rt),j=Math.max(j,rt),u.push(new qi(X.key,g,Q,ot))}if(u.length)if(Gi){if(Gi<70){var lt=u[0].flags;lt.dependsOn=2,lt.isNonSync=0}}else if(Ki&&j-Y<W-V&&k/W<.025&&0===u[0].cts){w.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");for(var ut=n,ht=0,dt=u.length;ht<dt;ht++){var ct=ut+u[ht].duration,ft=ut+u[ht].cts;if(ht<dt-1){var gt=ct+u[ht+1].cts;u[ht].duration=gt-ft}else u[ht].duration=ht?u[ht-1].duration:k;u[ht].cts=0,ut=ct}}g=H||!g?k:g,this.nextAvcDts=c=a+g,this.videoSampleDuration=g,this.isVideoContiguous=!0;var vt={data1:Ni.moof(t.sequenceNumber++,n,o({},t,{samples:u})),data2:B,startPTS:v/s,endPTS:(m+g)/s,startDTS:n/s,endDTS:c/s,type:"video",hasAudio:!1,hasVideo:!0,nb:u.length,dropped:t.dropped};return t.samples=[],t.dropped=0,vt},e.remuxAudio=function(t,e,r,i,n){var a=t.inputTimeScale,s=a/(t.samplerate?t.samplerate:a),l="aac"===t.segmentCodec?1024:1152,u=l*s,h=this._initPTS,d="mp3"===t.segmentCodec&&this.typeSupported.mpeg,c=[],f=void 0!==n,g=t.samples,v=d?0:8,m=this.nextAudioPts||-1,p=e*a,y=h.baseTime*a/h.timescale;if(this.isAudioContiguous=r=r||g.length&&m>0&&(i&&Math.abs(p-m)<9e3||Math.abs(Vi(g[0].pts-y,p)-m)<20*u),g.forEach((function(t){t.pts=Vi(t.pts-y,p)})),!r||m<0){if(g=g.filter((function(t){return t.pts>=0})),!g.length)return;m=0===n?0:i&&!f?Math.max(0,p):g[0].pts}if("aac"===t.segmentCodec)for(var T=this.config.maxAudioFramesDrift,E=0,A=m;E<g.length;E++){var k=g[E],b=k.pts,D=b-A,I=Math.abs(1e3*D/a);if(D<=-T*u&&f)0===E&&(w.warn("Audio frame @ "+(b/a).toFixed(3)+"s overlaps nextAudioPts by "+Math.round(1e3*D/a)+" ms."),this.nextAudioPts=m=A=b);else if(D>=T*u&&I<1e4&&f){var C=Math.round(D/u);(A=b-C*u)<0&&(C--,A+=u),0===E&&(this.nextAudioPts=m=A),w.warn("[mp4-remuxer]: Injecting "+C+" audio frame @ "+(A/a).toFixed(3)+"s due to "+Math.round(1e3*D/a)+" ms gap.");for(var _=0;_<C;_++){var P=Math.max(A,0),x=Mi.getSilentFrame(t.manifestCodec||t.codec,t.channelCount);x||(w.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),x=k.unit.subarray()),g.splice(E,0,{unit:x,pts:P}),A+=u,E++}}k.pts=A,A+=u}for(var F,M=null,O=null,N=0,U=g.length;U--;)N+=g[U].unit.byteLength;for(var B=0,G=g.length;B<G;B++){var K=g[B],H=K.unit,V=K.pts;if(null!==O)c[B-1].duration=Math.round((V-O)/s);else{if(r&&"aac"===t.segmentCodec&&(V=m),M=V,!(N>0))return;N+=v;try{F=new Uint8Array(N)}catch(t){return void this.observer.emit(S.ERROR,S.ERROR,{type:L.MUX_ERROR,details:R.REMUX_ALLOC_ERROR,fatal:!1,error:t,bytes:N,reason:"fail allocating audio mdat "+N})}d||(new DataView(F.buffer).setUint32(0,N),F.set(Ni.types.mdat,4))}F.set(H,v);var Y=H.byteLength;v+=Y,c.push(new qi(!0,l,Y,0)),O=V}var W=c.length;if(W){var j=c[c.length-1];this.nextAudioPts=m=O+s*j.duration;var q=d?new Uint8Array(0):Ni.moof(t.sequenceNumber++,M/s,o({},t,{samples:c}));t.samples=[];var X=M/a,z=m/a,Q={data1:q,data2:F,startPTS:X,endPTS:z,startDTS:X,endDTS:z,type:"audio",hasAudio:!0,hasVideo:!1,nb:W};return this.isAudioContiguous=!0,Q}},e.remuxEmptyAudio=function(t,e,r,i){var n=t.inputTimeScale,a=n/(t.samplerate?t.samplerate:n),s=this.nextAudioPts,o=this._initDTS,l=9e4*o.baseTime/o.timescale,u=(null!==s?s:i.startDTS*n)+l,h=i.endDTS*n+l,d=1024*a,c=Math.ceil((h-u)/d),f=Mi.getSilentFrame(t.manifestCodec||t.codec,t.channelCount);if(w.warn("[mp4-remuxer]: remux empty Audio"),f){for(var g=[],v=0;v<c;v++){var m=u+v*d;g.push({unit:f,pts:m,dts:m})}return t.samples=g,this.remuxAudio(t,e,r,!1)}w.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")},t}();function Vi(t,e){var r;if(null===e)return t;for(r=e<t?-8589934592:8589934592;Math.abs(t-e)>4294967296;)t+=r;return t}function Yi(t,e,r,i){var n=t.samples.length;if(n){for(var a=t.inputTimeScale,s=0;s<n;s++){var o=t.samples[s];o.pts=Vi(o.pts-r.baseTime*a/r.timescale,e*a)/a,o.dts=Vi(o.dts-i.baseTime*a/i.timescale,e*a)/a}var l=t.samples;return t.samples=[],{samples:l}}}function Wi(t,e,r){var i=t.samples.length;if(i){for(var n=t.inputTimeScale,a=0;a<i;a++){var s=t.samples[a];s.pts=Vi(s.pts-9e4*r.baseTime/r.timescale,e*n)/n}t.samples.sort((function(t,e){return t.pts-e.pts}));var o=t.samples;return t.samples=[],{samples:o}}}var ji,qi=function(t,e,r,i){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=e,this.size=r,this.cts=i,this.flags=new Xi(t)},Xi=function(t){this.isLeading=0,this.isDependedOn=0,this.hasRedundancy=0,this.degradPrio=0,this.dependsOn=1,this.isNonSync=1,this.dependsOn=t?2:1,this.isNonSync=t?0:1},zi=function(){function t(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=null,this.initTracks=void 0,this.lastEndTime=null}var e=t.prototype;return e.destroy=function(){},e.resetTimeStamp=function(t){this.initPTS=t,this.lastEndTime=null},e.resetNextTimestamp=function(){this.lastEndTime=null},e.resetInitSegment=function(t,e,r,i){this.audioCodec=e,this.videoCodec=r,this.generateInitSegment(function(t,e){if(!t||!e)return t;var r=e.keyId;return r&&e.isCommonEncryption&&It(t,["moov","trak"]).forEach((function(t){var e=It(t,["mdia","minf","stbl","stsd"])[0].subarray(8),i=It(e,["enca"]),n=i.length>0;n||(i=It(e,["encv"])),i.forEach((function(t){It(n?t.subarray(28):t.subarray(78),["sinf"]).forEach((function(t){var e=_t(t);if(e){var i=e.subarray(8,24);i.some((function(t){return 0!==t}))||(w.log("[eme] Patching keyId in 'enc"+(n?"a":"v")+">sinf>>tenc' box: "+Tt(i)+" -> "+Tt(r)),e.set(r,8))}}))}))})),t}(t,i)),this.emitInitSegment=!0},e.generateInitSegment=function(t){var e=this.audioCodec,r=this.videoCodec;if(null==t||!t.byteLength)return this.initTracks=void 0,void(this.initData=void 0);var i=this.initData=Ct(t);e||(e=Qi(i.audio,O)),r||(r=Qi(i.video,N));var n={};i.audio&&i.video?n.audiovideo={container:"video/mp4",codec:e+","+r,initSegment:t,id:"main"}:i.audio?n.audio={container:"audio/mp4",codec:e,initSegment:t,id:"audio"}:i.video?n.video={container:"video/mp4",codec:r,initSegment:t,id:"main"}:w.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=n},e.remux=function(t,e,r,i,n,a){var s,o,l=this.initPTS,u=this.lastEndTime,h={audio:void 0,video:void 0,text:i,id3:r,initSegment:void 0};E(u)||(u=this.lastEndTime=n||0);var d=e.samples;if(null==d||!d.length)return h;var c={initPTS:void 0,timescale:1},f=this.initData;if(null!=(s=f)&&s.length||(this.generateInitSegment(d),f=this.initData),null==(o=f)||!o.length)return w.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),h;this.emitInitSegment&&(c.tracks=this.initTracks,this.emitInitSegment=!1);var g=function(t,e){for(var r=0,i=0,n=0,a=It(t,["moof","traf"]),s=0;s<a.length;s++){var o=a[s],l=It(o,["tfhd"])[0],u=e[kt(l,4)];if(u){var h=u.default,d=kt(l,0)|(null==h?void 0:h.flags),c=null==h?void 0:h.duration;8&d&&(c=kt(l,2&d?12:8));for(var f=u.timescale||9e4,g=It(o,["trun"]),v=0;v<g.length;v++)!(r=Pt(g[v]))&&c&&(r=c*kt(g[v],4)),u.type===N?i+=r/f:u.type===O&&(n+=r/f)}}if(0===i&&0===n){for(var m=0,p=It(t,["sidx"]),y=0;y<p.length;y++){var T=wt(p[y]);null!=T&&T.references&&(m+=T.references.reduce((function(t,e){return t+e.info.duration||0}),0))}return m}return i||n}(d,f),v=function(t,e){return It(e,["moof","traf"]).reduce((function(e,r){var i=It(r,["tfdt"])[0],n=i[0],a=It(r,["tfhd"]).reduce((function(e,r){var a=kt(r,4),s=t[a];if(s){var o=kt(i,4);if(1===n){if(o===Et)return w.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"),e;o*=Et+1,o+=kt(i,8)}var l=o/(s.timescale||9e4);if(isFinite(l)&&(null===e||l<e))return l}return e}),null);return null!==a&&isFinite(a)&&(null===e||a<e)?a:e}),null)}(f,d),m=null===v?n:v;(function(t,e,r,i){if(null===t)return!0;var n=Math.max(i,1),a=e-t.baseTime/t.timescale;return Math.abs(a-r)>n}(l,m,n,g)||c.timescale!==l.timescale&&a)&&(c.initPTS=m-n,l&&1===l.timescale&&w.warn("Adjusting initPTS by "+(c.initPTS-l.baseTime)),this.initPTS=l={baseTime:c.initPTS,timescale:1});var p=t?m-l.baseTime/l.timescale:u,y=p+g;!function(t,e,r){It(e,["moof","traf"]).forEach((function(e){It(e,["tfhd"]).forEach((function(i){var n=kt(i,4),a=t[n];if(a){var s=a.timescale||9e4;It(e,["tfdt"]).forEach((function(t){var e=t[0],i=kt(t,4);if(0===e)i-=r*s,Dt(t,4,i=Math.max(i,0));else{i*=Math.pow(2,32),i+=kt(t,8),i-=r*s,i=Math.max(i,0);var n=Math.floor(i/(Et+1)),a=Math.floor(i%(Et+1));Dt(t,4,n),Dt(t,8,a)}}))}}))}))}(f,d,l.baseTime/l.timescale),g>0?this.lastEndTime=y:(w.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());var T=!!f.audio,S=!!f.video,L="";T&&(L+="audio"),S&&(L+="video");var R={data1:d,startPTS:p,startDTS:p,endPTS:y,endDTS:y,type:L,hasAudio:T,hasVideo:S,nb:1,dropped:0};return h.audio="audio"===R.type?R:void 0,h.video="audio"!==R.type?R:void 0,h.initSegment=c,h.id3=Yi(r,n,l,l),i.samples.length&&(h.text=Wi(i,n,l)),h},t}();function Qi(t,e){var r=null==t?void 0:t.codec;return r&&r.length>4?r:"hvc1"===r||"hev1"===r?"hvc1.1.6.L120.90":"av01"===r?"av01.0.04M.08":"avc1"===r||e===N?"avc1.42e01e":"mp4a.40.5"}try{ji=self.performance.now.bind(self.performance)}catch(t){w.debug("Unable to use Performance API on this environment"),ji="undefined"!=typeof self&&self.Date.now}var $i=[{demux:fi,remux:zi},{demux:Di,remux:Hi},{demux:di,remux:Hi},{demux:Fi,remux:Hi}],Ji=function(){function t(t,e,r,i,n){this.async=!1,this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=t,this.typeSupported=e,this.config=r,this.vendor=i,this.id=n}var e=t.prototype;return e.configure=function(t){this.transmuxConfig=t,this.decrypter&&this.decrypter.reset()},e.push=function(t,e,r,i){var n=this,a=r.transmuxing;a.executeStart=ji();var s=new Uint8Array(t),o=this.currentTransmuxState,l=this.transmuxConfig;i&&(this.currentTransmuxState=i);var u=i||o,h=u.contiguous,d=u.discontinuity,c=u.trackSwitch,f=u.accurateTimeOffset,g=u.timeOffset,v=u.initSegmentChange,m=l.audioCodec,p=l.videoCodec,y=l.defaultInitPts,T=l.duration,E=l.initSegmentData,A=function(t,e){var r=null;return t.byteLength>0&&null!=e&&null!=e.key&&null!==e.iv&&null!=e.method&&(r=e),r}(s,e);if(A&&"AES-128"===A.method){var k=this.getDecrypter();if(!k.isSync())return this.decryptionPromise=k.webCryptoDecrypt(s,A.key.buffer,A.iv.buffer).then((function(t){var e=n.push(t,null,r);return n.decryptionPromise=null,e})),this.decryptionPromise;var b=k.softwareDecrypt(s,A.key.buffer,A.iv.buffer);if(r.part>-1&&(b=k.flush()),!b)return a.executeEnd=ji(),Zi(r);s=new Uint8Array(b)}var D=this.needsProbing(d,c);if(D){var I=this.configureTransmuxer(s);if(I)return w.warn("[transmuxer] "+I.message),this.observer.emit(S.ERROR,S.ERROR,{type:L.MEDIA_ERROR,details:R.FRAG_PARSING_ERROR,fatal:!1,error:I,reason:I.message}),a.executeEnd=ji(),Zi(r)}(d||c||v||D)&&this.resetInitSegment(E,m,p,T,e),(d||v||D)&&this.resetInitialTimestamp(y),h||this.resetContiguity();var C=this.transmux(s,A,g,f,r),_=this.currentTransmuxState;return _.contiguous=!0,_.discontinuity=!1,_.trackSwitch=!1,a.executeEnd=ji(),C},e.flush=function(t){var e=this,r=t.transmuxing;r.executeStart=ji();var i=this.decrypter,n=this.currentTransmuxState,a=this.decryptionPromise;if(a)return a.then((function(){return e.flush(t)}));var s=[],o=n.timeOffset;if(i){var l=i.flush();l&&s.push(this.push(l,null,t))}var u=this.demuxer,h=this.remuxer;if(!u||!h)return r.executeEnd=ji(),[Zi(t)];var d=u.flush(o);return tn(d)?d.then((function(r){return e.flushRemux(s,r,t),s})):(this.flushRemux(s,d,t),s)},e.flushRemux=function(t,e,r){var i=e.audioTrack,n=e.videoTrack,a=e.id3Track,s=e.textTrack,o=this.currentTransmuxState,l=o.accurateTimeOffset,u=o.timeOffset;w.log("[transmuxer.ts]: Flushed fragment "+r.sn+(r.part>-1?" p: "+r.part:"")+" of level "+r.level);var h=this.remuxer.remux(i,n,a,s,u,l,!0,this.id);t.push({remuxResult:h,chunkMeta:r}),r.transmuxing.executeEnd=ji()},e.resetInitialTimestamp=function(t){var e=this.demuxer,r=this.remuxer;e&&r&&(e.resetTimeStamp(t),r.resetTimeStamp(t))},e.resetContiguity=function(){var t=this.demuxer,e=this.remuxer;t&&e&&(t.resetContiguity(),e.resetNextTimestamp())},e.resetInitSegment=function(t,e,r,i,n){var a=this.demuxer,s=this.remuxer;a&&s&&(a.resetInitSegment(t,e,r,i),s.resetInitSegment(t,e,r,n))},e.destroy=function(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)},e.transmux=function(t,e,r,i,n){return e&&"SAMPLE-AES"===e.method?this.transmuxSampleAes(t,e,r,i,n):this.transmuxUnencrypted(t,r,i,n)},e.transmuxUnencrypted=function(t,e,r,i){var n=this.demuxer.demux(t,e,!1,!this.config.progressive),a=n.audioTrack,s=n.videoTrack,o=n.id3Track,l=n.textTrack;return{remuxResult:this.remuxer.remux(a,s,o,l,e,r,!1,this.id),chunkMeta:i}},e.transmuxSampleAes=function(t,e,r,i,n){var a=this;return this.demuxer.demuxSampleAes(t,e,r).then((function(t){return{remuxResult:a.remuxer.remux(t.audioTrack,t.videoTrack,t.id3Track,t.textTrack,r,i,!1,a.id),chunkMeta:n}}))},e.configureTransmuxer=function(t){for(var e,r=this.config,i=this.observer,n=this.typeSupported,a=this.vendor,s=0,o=$i.length;s<o;s++)if($i[s].demux.probe(t)){e=$i[s];break}if(!e)return new Error("Failed to find demuxer by probing fragment data");var l=this.demuxer,u=this.remuxer,h=e.remux,d=e.demux;u&&u instanceof h||(this.remuxer=new h(i,r,n,a)),l&&l instanceof d||(this.demuxer=new d(i,r,n),this.probe=d.probe)},e.needsProbing=function(t,e){return!this.demuxer||!this.remuxer||t||e},e.getDecrypter=function(){var t=this.decrypter;return t||(t=this.decrypter=new Ur(this.config)),t},t}(),Zi=function(t){return{remuxResult:{},chunkMeta:t}};function tn(t){return"then"in t&&t.then instanceof Function}var en=function(t,e,r,i,n){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=t,this.videoCodec=e,this.initSegmentData=r,this.duration=i,this.defaultInitPts=n||null},rn=function(t,e,r,i,n,a){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=t,this.contiguous=e,this.accurateTimeOffset=r,this.trackSwitch=i,this.timeOffset=n,this.initSegmentChange=a},nn={exports:{}};!function(t){var e=Object.prototype.hasOwnProperty,r="~";function i(){}function n(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function a(t,e,i,a,s){if("function"!=typeof i)throw new TypeError("The listener must be a function");var o=new n(i,a||t,s),l=r?r+e:e;return t._events[l]?t._events[l].fn?t._events[l]=[t._events[l],o]:t._events[l].push(o):(t._events[l]=o,t._eventsCount++),t}function s(t,e){0==--t._eventsCount?t._events=new i:delete t._events[e]}function o(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(r=!1)),o.prototype.eventNames=function(){var t,i,n=[];if(0===this._eventsCount)return n;for(i in t=this._events)e.call(t,i)&&n.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},o.prototype.listeners=function(t){var e=r?r+t:t,i=this._events[e];if(!i)return[];if(i.fn)return[i.fn];for(var n=0,a=i.length,s=new Array(a);n<a;n++)s[n]=i[n].fn;return s},o.prototype.listenerCount=function(t){var e=r?r+t:t,i=this._events[e];return i?i.fn?1:i.length:0},o.prototype.emit=function(t,e,i,n,a,s){var o=r?r+t:t;if(!this._events[o])return!1;var l,u,h=this._events[o],d=arguments.length;if(h.fn){switch(h.once&&this.removeListener(t,h.fn,void 0,!0),d){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,e),!0;case 3:return h.fn.call(h.context,e,i),!0;case 4:return h.fn.call(h.context,e,i,n),!0;case 5:return h.fn.call(h.context,e,i,n,a),!0;case 6:return h.fn.call(h.context,e,i,n,a,s),!0}for(u=1,l=new Array(d-1);u<d;u++)l[u-1]=arguments[u];h.fn.apply(h.context,l)}else{var c,f=h.length;for(u=0;u<f;u++)switch(h[u].once&&this.removeListener(t,h[u].fn,void 0,!0),d){case 1:h[u].fn.call(h[u].context);break;case 2:h[u].fn.call(h[u].context,e);break;case 3:h[u].fn.call(h[u].context,e,i);break;case 4:h[u].fn.call(h[u].context,e,i,n);break;default:if(!l)for(c=1,l=new Array(d-1);c<d;c++)l[c-1]=arguments[c];h[u].fn.apply(h[u].context,l)}}return!0},o.prototype.on=function(t,e,r){return a(this,t,e,r,!1)},o.prototype.once=function(t,e,r){return a(this,t,e,r,!0)},o.prototype.removeListener=function(t,e,i,n){var a=r?r+t:t;if(!this._events[a])return this;if(!e)return s(this,a),this;var o=this._events[a];if(o.fn)o.fn!==e||n&&!o.once||i&&o.context!==i||s(this,a);else{for(var l=0,u=[],h=o.length;l<h;l++)(o[l].fn!==e||n&&!o[l].once||i&&o[l].context!==i)&&u.push(o[l]);u.length?this._events[a]=1===u.length?u[0]:u:s(this,a)}return this},o.prototype.removeAllListeners=function(t){var e;return t?(e=r?r+t:t,this._events[e]&&s(this,e)):(this._events=new i,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=r,o.EventEmitter=o,t.exports=o}(nn);var an=p(nn.exports);function sn(t,e){if(!((r=e.remuxResult).audio||r.video||r.text||r.id3||r.initSegment))return!1;var r,i=[],n=e.remuxResult,a=n.audio,s=n.video;return a&&on(i,a),s&&on(i,s),t.postMessage({event:"transmuxComplete",data:e},i),!0}function on(t,e){e.data1&&t.push(e.data1.buffer),e.data2&&t.push(e.data2.buffer)}function ln(t,e,r){e.reduce((function(e,r){return sn(t,r)||e}),!1)||t.postMessage({event:"transmuxComplete",data:e[0]}),t.postMessage({event:"flush",data:r})}void 0!==e&&e&&function(t){var e=new an,r=function(e,r){t.postMessage({event:e,data:r})};e.on(S.FRAG_DECRYPTED,r),e.on(S.ERROR,r);var i=function(){var t=function(t){var e=function(e){r("workerLog",{logType:t,message:e})};w[t]=e};for(var e in w)t(e)};t.addEventListener("message",(function(n){var a=n.data;switch(a.cmd){case"init":var s=JSON.parse(a.config);t.transmuxer=new Ji(e,a.typeSupported,s,a.vendor,a.id),I(s.debug,a.id),i(),r("init",null);break;case"configure":t.transmuxer.configure(a.config);break;case"demux":var o=t.transmuxer.push(a.data,a.decryptdata,a.chunkMeta,a.state);tn(o)?(t.transmuxer.async=!0,o.then((function(e){sn(t,e)})).catch((function(t){r(S.ERROR,{type:L.MEDIA_ERROR,details:R.FRAG_PARSING_ERROR,chunkMeta:a.chunkMeta,fatal:!1,error:t,err:t,reason:"transmuxer-worker push error"})}))):(t.transmuxer.async=!1,sn(t,o));break;case"flush":var l=a.chunkMeta,u=t.transmuxer.flush(l);tn(u)||t.transmuxer.async?(tn(u)||(u=Promise.resolve(u)),u.then((function(e){ln(t,e,l)})).catch((function(t){r(S.ERROR,{type:L.MEDIA_ERROR,details:R.FRAG_PARSING_ERROR,chunkMeta:a.chunkMeta,fatal:!1,error:t,err:t,reason:"transmuxer-worker flush error"})}))):ln(t,u,l)}}))}(self);var un=qt()||{isTypeSupported:function(){return!1}},hn=function(){function e(e,r,i,n){var a=this;this.error=null,this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.workerContext=null,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0;var s=e.config;this.hls=e,this.id=r,this.useWorker=!!s.enableWorker,this.onTransmuxComplete=i,this.onFlush=n;var o=function(t,e){(e=e||{}).frag=a.frag,e.id=a.id,t===S.ERROR&&(a.error=e.error),a.hls.trigger(t,e)};this.observer=new an,this.observer.on(S.FRAG_DECRYPTED,o),this.observer.on(S.ERROR,o);var l,u,h,d,c={mp4:un.isTypeSupported("video/mp4"),mpeg:un.isTypeSupported("audio/mpeg"),mp3:un.isTypeSupported('audio/mp4; codecs="mp3"')},f=navigator.vendor;if(!this.useWorker||"undefined"==typeof Worker||(s.workerPath,0))this.transmuxer=new Ji(this.observer,c,s,f,r);else try{s.workerPath?(w.log("loading Web Worker "+s.workerPath+' for "'+r+'"'),this.workerContext=(h=s.workerPath,d=new self.URL(h,self.location.href).href,{worker:new self.Worker(d),scriptURL:d})):(w.log('injecting Web Worker for "'+r+'"'),this.workerContext=(l=new self.Blob(["var exports={};var module={exports:exports};function define(f){f()};define.amd=true;("+t.toString()+")(true);"],{type:"text/javascript"}),u=self.URL.createObjectURL(l),{worker:new self.Worker(u),objectURL:u})),this.onwmsg=function(t){return a.onWorkerMessage(t)};var g=this.workerContext.worker;g.addEventListener("message",this.onwmsg),g.onerror=function(t){var e=new Error(t.message+"  ("+t.filename+":"+t.lineno+")");s.enableWorker=!1,w.warn('Error in "'+r+'" Web Worker, fallback to inline'),a.hls.trigger(S.ERROR,{type:L.OTHER_ERROR,details:R.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:e})},g.postMessage({cmd:"init",typeSupported:c,vendor:f,id:r,config:JSON.stringify(s)})}catch(t){w.warn('Error setting up "'+r+'" Web Worker, fallback to inline',t),this.resetWorker(),this.error=null,this.transmuxer=new Ji(this.observer,c,s,f,r)}}var r=e.prototype;return r.resetWorker=function(){if(this.workerContext){var t=this.workerContext,e=t.worker,r=t.objectURL;r&&self.URL.revokeObjectURL(r),e.removeEventListener("message",this.onwmsg),e.onerror=null,e.terminate(),this.workerContext=null}},r.destroy=function(){if(this.workerContext)this.resetWorker(),this.onwmsg=void 0;else{var t=this.transmuxer;t&&(t.destroy(),this.transmuxer=null)}var e=this.observer;e&&e.removeAllListeners(),this.frag=null,this.observer=null,this.hls=null},r.push=function(t,e,r,i,n,a,s,o,l,u){var h,d,c=this;l.transmuxing.start=self.performance.now();var f=this.transmuxer,g=a?a.start:n.start,v=n.decryptdata,m=this.frag,p=!(m&&n.cc===m.cc),y=!(m&&l.level===m.level),T=m?l.sn-m.sn:-1,E=this.part?l.part-this.part.index:-1,S=0===T&&l.id>1&&l.id===(null==m?void 0:m.stats.chunkCount),L=!y&&(1===T||0===T&&(1===E||S&&E<=0)),R=self.performance.now();(y||T||0===n.stats.parsing.start)&&(n.stats.parsing.start=R),!a||!E&&L||(a.stats.parsing.start=R);var A=!(m&&(null==(h=n.initSegment)?void 0:h.url)===(null==(d=m.initSegment)?void 0:d.url)),k=new rn(p,L,o,y,g,A);if(!L||p||A){w.log("[transmuxer-interface, "+n.type+"]: Starting new transmux session for sn: "+l.sn+" p: "+l.part+" level: "+l.level+" id: "+l.id+"\n        discontinuity: "+p+"\n        trackSwitch: "+y+"\n        contiguous: "+L+"\n        accurateTimeOffset: "+o+"\n        timeOffset: "+g+"\n        initSegmentChange: "+A);var b=new en(r,i,e,s,u);this.configureTransmuxer(b)}if(this.frag=n,this.part=a,this.workerContext)this.workerContext.worker.postMessage({cmd:"demux",data:t,decryptdata:v,chunkMeta:l,state:k},t instanceof ArrayBuffer?[t]:[]);else if(f){var D=f.push(t,v,l,k);tn(D)?(f.async=!0,D.then((function(t){c.handleTransmuxComplete(t)})).catch((function(t){c.transmuxerError(t,l,"transmuxer-interface push error")}))):(f.async=!1,this.handleTransmuxComplete(D))}},r.flush=function(t){var e=this;t.transmuxing.start=self.performance.now();var r=this.transmuxer;if(this.workerContext)this.workerContext.worker.postMessage({cmd:"flush",chunkMeta:t});else if(r){var i=r.flush(t);tn(i)||r.async?(tn(i)||(i=Promise.resolve(i)),i.then((function(r){e.handleFlushResult(r,t)})).catch((function(r){e.transmuxerError(r,t,"transmuxer-interface flush error")}))):this.handleFlushResult(i,t)}},r.transmuxerError=function(t,e,r){this.hls&&(this.error=t,this.hls.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.FRAG_PARSING_ERROR,chunkMeta:e,fatal:!1,error:t,err:t,reason:r}))},r.handleFlushResult=function(t,e){var r=this;t.forEach((function(t){r.handleTransmuxComplete(t)})),this.onFlush(e)},r.onWorkerMessage=function(t){var e=t.data,r=this.hls;switch(e.event){case"init":var i,n=null==(i=this.workerContext)?void 0:i.objectURL;n&&self.URL.revokeObjectURL(n);break;case"transmuxComplete":this.handleTransmuxComplete(e.data);break;case"flush":this.onFlush(e.data);break;case"workerLog":w[e.data.logType]&&w[e.data.logType](e.data.message);break;default:e.data=e.data||{},e.data.frag=this.frag,e.data.id=this.id,r.trigger(e.event,e.data)}},r.configureTransmuxer=function(t){var e=this.transmuxer;this.workerContext?this.workerContext.worker.postMessage({cmd:"configure",config:t}):e&&e.configure(t)},r.handleTransmuxComplete=function(t){t.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(t)},e}(),dn=function(){function t(t,e,r,i){this.config=void 0,this.media=null,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=t,this.media=e,this.fragmentTracker=r,this.hls=i}var e=t.prototype;return e.destroy=function(){this.media=null,this.hls=this.fragmentTracker=null},e.poll=function(t,e){var r=this.config,i=this.media,n=this.stalled;if(null!==i){var a=i.currentTime,s=i.seeking,o=this.seeking&&!s,l=!this.seeking&&s;if(this.seeking=s,a===t){if(l||o)this.stalled=null;else if(!(i.paused&&!s||i.ended||0===i.playbackRate)&&Ir.getBuffered(i).length){var u=Ir.bufferInfo(i,a,0),h=u.len>0,d=u.nextStart||0;if(h||d){if(s){var c=u.len>2,f=!d||e&&e.start<=a||d-a>2&&!this.fragmentTracker.getPartialFragment(a);if(c||f)return;this.moved=!1}if(!this.moved&&null!==this.stalled){var g,v=Math.max(d,u.start||0)-a,m=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,p=(null==m||null==(g=m.details)?void 0:g.live)?2*m.details.targetduration:2,y=this.fragmentTracker.getPartialFragment(a);if(v>0&&(v<=p||y))return void this._trySkipBufferHole(y)}var T=self.performance.now();if(null!==n){var E=T-n;if(s||!(E>=250)||(this._reportStall(u),this.media)){var S=Ir.bufferInfo(i,a,r.maxBufferHole);this._tryFixBufferStall(S,E)}}else this.stalled=T}}}else if(this.moved=!0,null!==n){if(this.stallReported){var L=self.performance.now()-n;w.warn("playback not stuck anymore @"+a+", after "+Math.round(L)+"ms"),this.stallReported=!1}this.stalled=null,this.nudgeRetry=0}}},e._tryFixBufferStall=function(t,e){var r=this.config,i=this.fragmentTracker,n=this.media;if(null!==n){var a=n.currentTime,s=i.getPartialFragment(a);if(s&&(this._trySkipBufferHole(s)||!this.media))return;(t.len>r.maxBufferHole||t.nextStart&&t.nextStart-a<r.maxBufferHole)&&e>1e3*r.highBufferWatchdogPeriod&&(w.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())}},e._reportStall=function(t){var e=this.hls,r=this.media;if(!this.stallReported&&r){this.stallReported=!0;var i=new Error("Playback stalling at @"+r.currentTime+" due to low buffer ("+JSON.stringify(t)+")");w.warn(i.message),e.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.BUFFER_STALLED_ERROR,fatal:!1,error:i,buffer:t.len})}},e._trySkipBufferHole=function(t){var e=this.config,r=this.hls,i=this.media;if(null===i)return 0;var n=i.currentTime,a=Ir.bufferInfo(i,n,0),s=n<a.start?a.start:a.nextStart;if(s){var o=a.len<=e.maxBufferHole,l=a.len>0&&a.len<1&&i.readyState<3,u=s-n;if(u>0&&(o||l)){if(u>e.maxBufferHole){var h=this.fragmentTracker,d=!1;if(0===n){var c=h.getAppendedFrag(0,ge);c&&s<c.end&&(d=!0)}if(!d){var f=t||h.getAppendedFrag(n,ge);if(f){for(var g=!1,v=f.end;v<s;){var m=h.getPartialFragment(v);if(!m){g=!0;break}v+=m.duration}if(g)return 0}}}var p=Math.max(s+.05,n+.1);if(w.warn("skipping hole, adjusting currentTime from "+n+" to "+p),this.moved=!0,this.stalled=null,i.currentTime=p,t&&!t.gap){var y=new Error("fragment loaded with buffer holes, seeking from "+n+" to "+p);r.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.BUFFER_SEEK_OVER_HOLE,fatal:!1,error:y,reason:y.message,frag:t})}return p}}return 0},e._tryNudgeBuffer=function(){var t=this.config,e=this.hls,r=this.media,i=this.nudgeRetry;if(null!==r){var n=r.currentTime;if(this.nudgeRetry++,i<t.nudgeMaxRetry){var a=n+(i+1)*t.nudgeOffset,s=new Error("Nudging 'currentTime' from "+n+" to "+a);w.warn(s.message),r.currentTime=a,e.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.BUFFER_NUDGE_ON_STALL,error:s,fatal:!1})}else{var o=new Error("Playhead still not moving while enough data buffered @"+n+" after "+t.nudgeMaxRetry+" nudges");w.error(o.message),e.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.BUFFER_STALLED_ERROR,error:o,fatal:!0})}}},t}(),cn=function(t){function e(e,r,i){var n;return(n=t.call(this,e,r,i,"[stream-controller]",ge)||this).audioCodecSwap=!1,n.gapController=null,n.level=-1,n._forceStartLoad=!1,n.altAudio=!1,n.audioOnly=!1,n.fragPlaying=null,n.onvplaying=null,n.onvseeked=null,n.fragLastKbps=0,n.couldBacktrack=!1,n.backtrackFragment=null,n.audioCodecSwitch=!1,n.videoBuffer=null,n._registerListeners(),n}l(e,t);var r=e.prototype;return r._registerListeners=function(){var t=this.hls;t.on(S.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(S.MANIFEST_LOADING,this.onManifestLoading,this),t.on(S.MANIFEST_PARSED,this.onManifestParsed,this),t.on(S.LEVEL_LOADING,this.onLevelLoading,this),t.on(S.LEVEL_LOADED,this.onLevelLoaded,this),t.on(S.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),t.on(S.ERROR,this.onError,this),t.on(S.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),t.on(S.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.on(S.BUFFER_CREATED,this.onBufferCreated,this),t.on(S.BUFFER_FLUSHED,this.onBufferFlushed,this),t.on(S.LEVELS_UPDATED,this.onLevelsUpdated,this),t.on(S.FRAG_BUFFERED,this.onFragBuffered,this)},r._unregisterListeners=function(){var t=this.hls;t.off(S.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(S.MANIFEST_LOADING,this.onManifestLoading,this),t.off(S.MANIFEST_PARSED,this.onManifestParsed,this),t.off(S.LEVEL_LOADED,this.onLevelLoaded,this),t.off(S.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),t.off(S.ERROR,this.onError,this),t.off(S.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),t.off(S.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.off(S.BUFFER_CREATED,this.onBufferCreated,this),t.off(S.BUFFER_FLUSHED,this.onBufferFlushed,this),t.off(S.LEVELS_UPDATED,this.onLevelsUpdated,this),t.off(S.FRAG_BUFFERED,this.onFragBuffered,this)},r.onHandlerDestroying=function(){this._unregisterListeners(),this.onMediaDetaching()},r.startLoad=function(t){if(this.levels){var e=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.setInterval(100),this.level=-1,!this.startFragRequested){var i=r.startLevel;-1===i&&(r.config.testBandwidth&&this.levels.length>1?(i=0,this.bitrateTest=!0):i=r.nextAutoLevel),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}e>0&&-1===t&&(this.log("Override startPosition with lastCurrentTime @"+e.toFixed(3)),t=e),this.state=Kr,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=t,this.tick()}else this._forceStartLoad=!0,this.state=Gr},r.stopLoad=function(){this._forceStartLoad=!1,t.prototype.stopLoad.call(this)},r.doTick=function(){switch(this.state){case $r:var t,e=this.levels,r=this.level,i=null==e||null==(t=e[r])?void 0:t.details;if(i&&(!i.live||this.levelLastLoaded===this.level)){if(this.waitForCdnTuneIn(i))break;this.state=Kr;break}if(this.hls.nextLoadLevel!==this.level){this.state=Kr;break}break;case Yr:var n,a=self.performance.now(),s=this.retryDate;(!s||a>=s||null!=(n=this.media)&&n.seeking)&&(this.resetStartWhenNotLoaded(this.level),this.state=Kr)}this.state===Kr&&this.doTickIdle(),this.onTickEnd()},r.onTickEnd=function(){t.prototype.onTickEnd.call(this),this.checkBuffer(),this.checkFragmentChanged()},r.doTickIdle=function(){var t=this.hls,e=this.levelLastLoaded,r=this.levels,i=this.media,n=t.config,a=t.nextLoadLevel;if(null!==e&&(i||!this.startFragRequested&&n.startFragPrefetch)&&(!this.altAudio||!this.audioOnly)&&null!=r&&r[a]){var s=r[a],o=this.getMainFwdBufferInfo();if(null!==o){var l=this.getLevelDetails();if(l&&this._streamEnded(o,l)){var u={};return this.altAudio&&(u.type="video"),this.hls.trigger(S.BUFFER_EOS,u),void(this.state=Xr)}t.loadLevel!==a&&-1===t.manualLevel&&this.log("Adapting to level "+a+" from level "+this.level),this.level=t.nextLoadLevel=a;var h=s.details;if(!h||this.state===$r||h.live&&this.levelLastLoaded!==a)return this.level=a,void(this.state=$r);var d=o.len,c=this.getMaxBufferLength(s.maxBitrate);if(!(d>=c)){this.backtrackFragment&&this.backtrackFragment.start>o.end&&(this.backtrackFragment=null);var f=this.backtrackFragment?this.backtrackFragment.start:o.end,g=this.getNextFragment(f,h);if(this.couldBacktrack&&!this.fragPrevious&&g&&"initSegment"!==g.sn&&this.fragmentTracker.getState(g)!==mr){var v,m=(null!=(v=this.backtrackFragment)?v:g).sn-h.startSN,p=h.fragments[m-1];p&&g.cc===p.cc&&(g=p,this.fragmentTracker.removeFragment(p))}else this.backtrackFragment&&o.len&&(this.backtrackFragment=null);if(g&&this.isLoopLoading(g,f)){if(!g.gap){var y=this.audioOnly&&!this.altAudio?O:N,T=(y===N?this.videoBuffer:this.mediaBuffer)||this.media;T&&this.afterBufferFlushed(T,y,ge)}g=this.getNextFragmentLoopLoading(g,h,o,ge,c)}g&&(!g.initSegment||g.initSegment.data||this.bitrateTest||(g=g.initSegment),this.loadFragment(g,s,f))}}}},r.loadFragment=function(e,r,i){var n=this.fragmentTracker.getState(e);this.fragCurrent=e,n===fr||n===vr?"initSegment"===e.sn?this._loadInitSegment(e,r):this.bitrateTest?(this.log("Fragment "+e.sn+" of level "+e.level+" is being downloaded to test bitrate and will not be buffered"),this._loadBitrateTestFrag(e,r)):(this.startFragRequested=!0,t.prototype.loadFragment.call(this,e,r,i)):this.clearTrackerIfNeeded(e)},r.getBufferedFrag=function(t){return this.fragmentTracker.getBufferedFrag(t,ge)},r.followingBufferedFrag=function(t){return t?this.getBufferedFrag(t.end+.5):null},r.immediateLevelSwitch=function(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},r.nextLevelSwitch=function(){var t=this.levels,e=this.media;if(null!=e&&e.readyState){var r,i=this.getAppendedFrag(e.currentTime);i&&i.start>1&&this.flushMainBuffer(0,i.start-1);var n=this.getLevelDetails();if(null!=n&&n.live){var a=this.getMainFwdBufferInfo();if(!a||a.len<2*n.targetduration)return}if(!e.paused&&t){var s=t[this.hls.nextLoadLevel],o=this.fragLastKbps;r=o&&this.fragCurrent?this.fragCurrent.duration*s.maxBitrate/(1e3*o)+1:0}else r=0;var l=this.getBufferedFrag(e.currentTime+r);if(l){var u=this.followingBufferedFrag(l);if(u){this.abortCurrentFrag();var h=u.maxStartPTS?u.maxStartPTS:u.start,d=u.duration,c=Math.max(l.end,h+Math.min(Math.max(d-this.config.maxFragLookUpTolerance,.5*d),.75*d));this.flushMainBuffer(c,Number.POSITIVE_INFINITY)}}}},r.abortCurrentFrag=function(){var t=this.fragCurrent;switch(this.fragCurrent=null,this.backtrackFragment=null,t&&(t.abortRequests(),this.fragmentTracker.removeFragment(t)),this.state){case Hr:case Vr:case Yr:case jr:case qr:this.state=Kr}this.nextLoadPosition=this.getLoadPosition()},r.flushMainBuffer=function(e,r){t.prototype.flushMainBuffer.call(this,e,r,this.altAudio?"video":null)},r.onMediaAttached=function(e,r){t.prototype.onMediaAttached.call(this,e,r);var i=r.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),i.addEventListener("playing",this.onvplaying),i.addEventListener("seeked",this.onvseeked),this.gapController=new dn(this.config,i,this.fragmentTracker,this.hls)},r.onMediaDetaching=function(){var e=this.media;e&&this.onvplaying&&this.onvseeked&&(e.removeEventListener("playing",this.onvplaying),e.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),t.prototype.onMediaDetaching.call(this)},r.onMediaPlaying=function(){this.tick()},r.onMediaSeeked=function(){var t=this.media,e=t?t.currentTime:null;E(e)&&this.log("Media seeked to "+e.toFixed(3));var r=this.getMainFwdBufferInfo();null!==r&&0!==r.len?this.tick():this.warn('Main forward buffer length on "seeked" event '+(r?r.len:"empty")+")")},r.onManifestLoading=function(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(S.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=!1,this.startPosition=this.lastCurrentTime=0,this.levels=this.fragPlaying=this.backtrackFragment=null,this.altAudio=this.audioOnly=!1},r.onManifestParsed=function(t,e){var r,i,n,a=!1,s=!1;e.levels.forEach((function(t){(r=t.audioCodec)&&(-1!==r.indexOf("mp4a.40.2")&&(a=!0),-1!==r.indexOf("mp4a.40.5")&&(s=!0))})),this.audioCodecSwitch=a&&s&&!("function"==typeof(null==(n=Zr())||null==(i=n.prototype)?void 0:i.changeType)),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=e.levels,this.startFragRequested=!1},r.onLevelLoading=function(t,e){var r=this.levels;if(r&&this.state===Kr){var i=r[e.level];(!i.details||i.details.live&&this.levelLastLoaded!==e.level||this.waitForCdnTuneIn(i.details))&&(this.state=$r)}},r.onLevelLoaded=function(t,e){var r,i=this.levels,n=e.level,a=e.details,s=a.totalduration;if(i){this.log("Level "+n+" loaded ["+a.startSN+","+a.endSN+"]"+(a.lastPartSn?"[part-"+a.lastPartSn+"-"+a.lastPartIndex+"]":"")+", cc ["+a.startCC+", "+a.endCC+"] duration:"+s);var o=i[n],l=this.fragCurrent;!l||this.state!==Vr&&this.state!==Yr||l.level===e.level&&l.urlId===o.urlId||!l.loader||this.abortCurrentFrag();var u=0;if(a.live||null!=(r=o.details)&&r.live){if(a.fragments[0]||(a.deltaUpdateFailed=!0),a.deltaUpdateFailed)return;u=this.alignPlaylists(a,o.details)}if(o.details=a,this.levelLastLoaded=n,this.hls.trigger(S.LEVEL_UPDATED,{details:a,level:n}),this.state===$r){if(this.waitForCdnTuneIn(a))return;this.state=Kr}this.startFragRequested?a.live&&this.synchronizeToLiveEdge(a):this.setStartPosition(a,u),this.tick()}else this.warn("Levels were reset while loading level "+n)},r._handleFragmentLoadProgress=function(t){var e,r=t.frag,i=t.part,n=t.payload,a=this.levels;if(a){var s=a[r.level],o=s.details;if(!o)return this.warn("Dropping fragment "+r.sn+" of level "+r.level+" after level details were reset"),void this.fragmentTracker.removeFragment(r);var l=s.videoCodec,u=o.PTSKnown||!o.live,h=null==(e=r.initSegment)?void 0:e.data,d=this._getAudioCodec(s),c=this.transmuxer=this.transmuxer||new hn(this.hls,ge,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),f=i?i.index:-1,g=-1!==f,v=new wr(r.level,r.sn,r.stats.chunkCount,n.byteLength,f,g),m=this.initPTS[r.cc];c.push(n,h,d,l,r,i,o.totalduration,u,v,m)}else this.warn("Levels were reset while fragment load was in progress. Fragment "+r.sn+" of level "+r.level+" will not be buffered")},r.onAudioTrackSwitching=function(t,e){var r=this.altAudio;if(!e.url){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var i=this.fragCurrent;i&&(this.log("Switching to main audio track, cancel main fragment load"),i.abortRequests(),this.fragmentTracker.removeFragment(i)),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();var n=this.hls;r&&(n.trigger(S.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:null}),this.fragmentTracker.removeAllFragments()),n.trigger(S.AUDIO_TRACK_SWITCHED,e)}},r.onAudioTrackSwitched=function(t,e){var r=e.id,i=!!this.hls.audioTracks[r].url;if(i){var n=this.videoBuffer;n&&this.mediaBuffer!==n&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=n)}this.altAudio=i,this.tick()},r.onBufferCreated=function(t,e){var r,i,n=e.tracks,a=!1;for(var s in n){var o=n[s];if("main"===o.id){if(i=s,r=o,"video"===s){var l=n[s];l&&(this.videoBuffer=l.buffer)}}else a=!0}a&&r?(this.log("Alternate track found, use "+i+".buffered to schedule main fragment loading"),this.mediaBuffer=r.buffer):this.mediaBuffer=this.media},r.onFragBuffered=function(t,e){var r=e.frag,i=e.part;if(!r||r.type===ge){if(this.fragContextChanged(r))return this.warn("Fragment "+r.sn+(i?" p: "+i.index:"")+" of level "+r.level+" finished buffering, but was aborted. state: "+this.state),void(this.state===qr&&(this.state=Kr));var n=i?i.stats:r.stats;this.fragLastKbps=Math.round(8*n.total/(n.buffering.end-n.loading.first)),"initSegment"!==r.sn&&(this.fragPrevious=r),this.fragBufferedComplete(r,i)}},r.onError=function(t,e){var r;if(e.fatal)this.state=zr;else switch(e.details){case R.FRAG_GAP:case R.FRAG_PARSING_ERROR:case R.FRAG_DECRYPT_ERROR:case R.FRAG_LOAD_ERROR:case R.FRAG_LOAD_TIMEOUT:case R.KEY_LOAD_ERROR:case R.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(ge,e);break;case R.LEVEL_LOAD_ERROR:case R.LEVEL_LOAD_TIMEOUT:case R.LEVEL_PARSING_ERROR:e.levelRetry||this.state!==$r||(null==(r=e.context)?void 0:r.type)!==de||(this.state=Kr);break;case R.BUFFER_FULL_ERROR:if(!e.parent||"main"!==e.parent)return;this.reduceLengthAndFlushBuffer(e)&&this.flushMainBuffer(0,Number.POSITIVE_INFINITY);break;case R.INTERNAL_EXCEPTION:this.recoverWorkerError(e)}},r.checkBuffer=function(){var t=this.media,e=this.gapController;if(t&&e&&t.readyState){if(this.loadedmetadata||!Ir.getBuffered(t).length){var r=this.state!==Kr?this.fragCurrent:null;e.poll(this.lastCurrentTime,r)}this.lastCurrentTime=t.currentTime}},r.onFragLoadEmergencyAborted=function(){this.state=Kr,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()},r.onBufferFlushed=function(t,e){var r=e.type;if(r!==O||this.audioOnly&&!this.altAudio){var i=(r===N?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(i,r,ge)}},r.onLevelsUpdated=function(t,e){this.levels=e.levels},r.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},r.seekToStartPos=function(){var t=this.media;if(t){var e=t.currentTime,r=this.startPosition;if(r>=0&&e<r){if(t.seeking)return void this.log("could not seek to "+r+", already seeking at "+e);var i=Ir.getBuffered(t),n=(i.length?i.start(0):0)-r;n>0&&(n<this.config.maxBufferHole||n<this.config.maxFragLookUpTolerance)&&(this.log("adjusting start position by "+n+" to match buffer start"),r+=n,this.startPosition=r),this.log("seek to target start position "+r+" from current time "+e),t.currentTime=r}}},r._getAudioCodec=function(t){var e=this.config.defaultAudioCodec||t.audioCodec;return this.audioCodecSwap&&e&&(this.log("Swapping audio codec"),e=-1!==e.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),e},r._loadBitrateTestFrag=function(t,e){var r=this;t.bitrateTest=!0,this._doFragLoad(t,e).then((function(i){var n=r.hls;if(i&&!r.fragContextChanged(t)){e.fragmentError=0,r.state=Kr,r.startFragRequested=!1,r.bitrateTest=!1;var a=t.stats;a.parsing.start=a.parsing.end=a.buffering.start=a.buffering.end=self.performance.now(),n.trigger(S.FRAG_LOADED,i),t.bitrateTest=!1}}))},r._handleTransmuxComplete=function(t){var e,r="main",i=this.hls,n=t.remuxResult,a=t.chunkMeta,s=this.getCurrentContext(a);if(s){var o=s.frag,l=s.part,u=s.level,h=n.video,d=n.text,c=n.id3,f=n.initSegment,g=u.details,v=this.altAudio?void 0:n.audio;if(this.fragContextChanged(o))this.fragmentTracker.removeFragment(o);else{if(this.state=jr,f){if(null!=f&&f.tracks){var m=o.initSegment||o;this._bufferInitSegment(u,f.tracks,m,a),i.trigger(S.FRAG_PARSING_INIT_SEGMENT,{frag:m,id:r,tracks:f.tracks})}var p=f.initPTS,y=f.timescale;E(p)&&(this.initPTS[o.cc]={baseTime:p,timescale:y},i.trigger(S.INIT_PTS_FOUND,{frag:o,id:r,initPTS:p,timescale:y}))}if(h&&!1!==n.independent){if(g){var T=h.startPTS,L=h.endPTS,R=h.startDTS,A=h.endDTS;if(l)l.elementaryStreams[h.type]={startPTS:T,endPTS:L,startDTS:R,endDTS:A};else if(h.firstKeyFrame&&h.independent&&1===a.id&&(this.couldBacktrack=!0),h.dropped&&h.independent){var k=this.getMainFwdBufferInfo();if((k?k.end:this.getLoadPosition())+this.config.maxBufferHole<(h.firstKeyFramePTS?h.firstKeyFramePTS:T)-this.config.maxBufferHole)return void this.backtrack(o);o.setElementaryStreamInfo(h.type,o.start,L,o.start,A,!0)}o.setElementaryStreamInfo(h.type,T,L,R,A),this.backtrackFragment&&(this.backtrackFragment=o),this.bufferFragmentData(h,o,l,a)}}else if(!1===n.independent)return void this.backtrack(o);if(v){var b=v.startPTS,D=v.endPTS,I=v.startDTS,w=v.endDTS;l&&(l.elementaryStreams[O]={startPTS:b,endPTS:D,startDTS:I,endDTS:w}),o.setElementaryStreamInfo(O,b,D,I,w),this.bufferFragmentData(v,o,l,a)}if(g&&null!=c&&null!=(e=c.samples)&&e.length){var C={id:r,frag:o,details:g,samples:c.samples};i.trigger(S.FRAG_PARSING_METADATA,C)}if(g&&d){var _={id:r,frag:o,details:g,samples:d.samples};i.trigger(S.FRAG_PARSING_USERDATA,_)}}}else this.resetWhenMissingContext(a)},r._bufferInitSegment=function(t,e,r,i){var n=this;if(this.state===jr){this.audioOnly=!!e.audio&&!e.video,this.altAudio&&!this.audioOnly&&delete e.audio;var a=e.audio,s=e.video,o=e.audiovideo;if(a){var l=t.audioCodec,u=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(l&&(l=-1!==l.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),1!==a.metadata.channelCount&&-1===u.indexOf("firefox")&&(l="mp4a.40.5")),-1!==u.indexOf("android")&&"audio/mpeg"!==a.container&&(l="mp4a.40.2",this.log("Android: force audio codec to "+l)),t.audioCodec&&t.audioCodec!==l&&this.log('Swapping manifest audio codec "'+t.audioCodec+'" for "'+l+'"'),a.levelCodec=l,a.id="main",this.log("Init audio buffer, container:"+a.container+", codecs[selected/level/parsed]=["+(l||"")+"/"+(t.audioCodec||"")+"/"+a.codec+"]")}s&&(s.levelCodec=t.videoCodec,s.id="main",this.log("Init video buffer, container:"+s.container+", codecs[level/parsed]=["+(t.videoCodec||"")+"/"+s.codec+"]")),o&&this.log("Init audiovideo buffer, container:"+o.container+", codecs[level/parsed]=["+(t.attrs.CODECS||"")+"/"+o.codec+"]"),this.hls.trigger(S.BUFFER_CODECS,e),Object.keys(e).forEach((function(t){var a=e[t].initSegment;null!=a&&a.byteLength&&n.hls.trigger(S.BUFFER_APPENDING,{type:t,data:a,frag:r,part:null,chunkMeta:i,parent:r.type})})),this.tick()}},r.getMainFwdBufferInfo=function(){return this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:this.media,ge)},r.backtrack=function(t){this.couldBacktrack=!0,this.backtrackFragment=t,this.resetTransmuxer(),this.flushBufferGap(t),this.fragmentTracker.removeFragment(t),this.fragPrevious=null,this.nextLoadPosition=t.start,this.state=Kr},r.checkFragmentChanged=function(){var t=this.media,e=null;if(t&&t.readyState>1&&!1===t.seeking){var r=t.currentTime;if(Ir.isBuffered(t,r)?e=this.getAppendedFrag(r):Ir.isBuffered(t,r+.1)&&(e=this.getAppendedFrag(r+.1)),e){this.backtrackFragment=null;var i=this.fragPlaying,n=e.level;i&&e.sn===i.sn&&i.level===n&&e.urlId===i.urlId||(this.fragPlaying=e,this.hls.trigger(S.FRAG_CHANGED,{frag:e}),i&&i.level===n||this.hls.trigger(S.LEVEL_SWITCHED,{level:n}))}}},a(e,[{key:"nextLevel",get:function(){var t=this.nextBufferedFrag;return t?t.level:-1}},{key:"currentFrag",get:function(){var t=this.media;return t?this.fragPlaying||this.getAppendedFrag(t.currentTime):null}},{key:"currentProgramDateTime",get:function(){var t=this.media;if(t){var e=t.currentTime,r=this.currentFrag;if(r&&E(e)&&E(r.programDateTime)){var i=r.programDateTime+1e3*(e-r.start);return new Date(i)}}return null}},{key:"currentLevel",get:function(){var t=this.currentFrag;return t?t.level:-1}},{key:"nextBufferedFrag",get:function(){var t=this.currentFrag;return t?this.followingBufferedFrag(t):null}},{key:"forceStartLoad",get:function(){return this._forceStartLoad}}]),e}(Jr),fn=function(){function t(t,e,r){void 0===e&&(e=0),void 0===r&&(r=0),this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=t,this.alpha_=t?Math.exp(Math.log(.5)/t):0,this.estimate_=e,this.totalWeight_=r}var e=t.prototype;return e.sample=function(t,e){var r=Math.pow(this.alpha_,t);this.estimate_=e*(1-r)+r*this.estimate_,this.totalWeight_+=t},e.getTotalWeight=function(){return this.totalWeight_},e.getEstimate=function(){if(this.alpha_){var t=1-Math.pow(this.alpha_,this.totalWeight_);if(t)return this.estimate_/t}return this.estimate_},t}(),gn=function(){function t(t,e,r,i){void 0===i&&(i=100),this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultTTFB_=void 0,this.ttfb_=void 0,this.defaultEstimate_=r,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new fn(t),this.fast_=new fn(e),this.defaultTTFB_=i,this.ttfb_=new fn(t)}var e=t.prototype;return e.update=function(t,e){var r=this.slow_,i=this.fast_,n=this.ttfb_;r.halfLife!==t&&(this.slow_=new fn(t,r.getEstimate(),r.getTotalWeight())),i.halfLife!==e&&(this.fast_=new fn(e,i.getEstimate(),i.getTotalWeight())),n.halfLife!==t&&(this.ttfb_=new fn(t,n.getEstimate(),n.getTotalWeight()))},e.sample=function(t,e){var r=(t=Math.max(t,this.minDelayMs_))/1e3,i=8*e/r;this.fast_.sample(r,i),this.slow_.sample(r,i)},e.sampleTTFB=function(t){var e=t/1e3,r=Math.sqrt(2)*Math.exp(-Math.pow(e,2)/2);this.ttfb_.sample(r,Math.max(t,5))},e.canEstimate=function(){return this.fast_.getTotalWeight()>=this.minWeight_},e.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},e.getEstimateTTFB=function(){return this.ttfb_.getTotalWeight()>=this.minWeight_?this.ttfb_.getEstimate():this.defaultTTFB_},e.destroy=function(){},t}(),vn=function(){function t(t){this.hls=void 0,this.lastLevelLoadSec=0,this.lastLoadedFragLevel=0,this._nextAutoLevel=-1,this.timer=-1,this.onCheck=this._abandonRulesCheck.bind(this),this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this.hls=t;var e=t.config;this.bwEstimator=new gn(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate),this.registerListeners()}var e=t.prototype;return e.registerListeners=function(){var t=this.hls;t.on(S.FRAG_LOADING,this.onFragLoading,this),t.on(S.FRAG_LOADED,this.onFragLoaded,this),t.on(S.FRAG_BUFFERED,this.onFragBuffered,this),t.on(S.LEVEL_SWITCHING,this.onLevelSwitching,this),t.on(S.LEVEL_LOADED,this.onLevelLoaded,this)},e.unregisterListeners=function(){var t=this.hls;t.off(S.FRAG_LOADING,this.onFragLoading,this),t.off(S.FRAG_LOADED,this.onFragLoaded,this),t.off(S.FRAG_BUFFERED,this.onFragBuffered,this),t.off(S.LEVEL_SWITCHING,this.onLevelSwitching,this),t.off(S.LEVEL_LOADED,this.onLevelLoaded,this)},e.destroy=function(){this.unregisterListeners(),this.clearTimer(),this.hls=this.onCheck=null,this.fragCurrent=this.partCurrent=null},e.onFragLoading=function(t,e){var r,i=e.frag;this.ignoreFragment(i)||(this.fragCurrent=i,this.partCurrent=null!=(r=e.part)?r:null,this.clearTimer(),this.timer=self.setInterval(this.onCheck,100))},e.onLevelSwitching=function(t,e){this.clearTimer()},e.getTimeToLoadFrag=function(t,e,r,i){return t+r/e+(i?this.lastLevelLoadSec:0)},e.onLevelLoaded=function(t,e){var r=this.hls.config,i=e.stats,n=i.total,a=i.bwEstimate;E(n)&&E(a)&&(this.lastLevelLoadSec=8*n/a),e.details.live?this.bwEstimator.update(r.abrEwmaSlowLive,r.abrEwmaFastLive):this.bwEstimator.update(r.abrEwmaSlowVoD,r.abrEwmaFastVoD)},e._abandonRulesCheck=function(){var t=this.fragCurrent,e=this.partCurrent,r=this.hls,i=r.autoLevelEnabled,n=r.media;if(t&&n){var a=performance.now(),s=e?e.stats:t.stats,o=e?e.duration:t.duration,l=a-s.loading.start;if(s.aborted||s.loaded&&s.loaded===s.total||0===t.level)return this.clearTimer(),void(this._nextAutoLevel=-1);if(i&&!n.paused&&n.playbackRate&&n.readyState){var u=r.mainForwardBufferInfo;if(null!==u){var h=this.bwEstimator.getEstimateTTFB(),d=Math.abs(n.playbackRate);if(!(l<=Math.max(h,o/(2*d)*1e3))){var c=u.len/d;if(!(c>=2*o/d)){var f=s.loading.first?s.loading.first-s.loading.start:-1,g=s.loaded&&f>-1,v=this.bwEstimator.getEstimate(),m=r.levels,p=r.minAutoLevel,y=m[t.level],T=s.total||Math.max(s.loaded,Math.round(o*y.maxBitrate/8)),L=l-f;L<1&&g&&(L=Math.min(l,8*s.loaded/v));var R=g?1e3*s.loaded/L:0,A=R?(T-s.loaded)/R:8*T/v+h/1e3;if(!(A<=c)){var k,b=R?8*R:v,D=Number.POSITIVE_INFINITY;for(k=t.level-1;k>p;k--){var I=m[k].maxBitrate;if((D=this.getTimeToLoadFrag(h/1e3,b,o*I,!m[k].details))<c)break}D>=A||D>10*o||(r.nextLoadLevel=k,g?this.bwEstimator.sample(l-Math.min(h,f),s.loaded):this.bwEstimator.sampleTTFB(l),this.clearTimer(),w.warn("[abr] Fragment "+t.sn+(e?" part "+e.index:"")+" of level "+t.level+" is loading too slowly;\n      Time to underbuffer: "+c.toFixed(3)+" s\n      Estimated load time for current fragment: "+A.toFixed(3)+" s\n      Estimated load time for down switch fragment: "+D.toFixed(3)+" s\n      TTFB estimate: "+f+"\n      Current BW estimate: "+(E(v)?(v/1024).toFixed(3):"Unknown")+" Kb/s\n      New BW estimate: "+(this.bwEstimator.getEstimate()/1024).toFixed(3)+" Kb/s\n      Aborting and switching to level "+k),t.loader&&(this.fragCurrent=this.partCurrent=null,t.abortRequests()),r.trigger(S.FRAG_LOAD_EMERGENCY_ABORTED,{frag:t,part:e,stats:s}))}}}}}}},e.onFragLoaded=function(t,e){var r=e.frag,i=e.part,n=i?i.stats:r.stats;if(r.type===ge&&this.bwEstimator.sampleTTFB(n.loading.first-n.loading.start),!this.ignoreFragment(r)){if(this.clearTimer(),this.lastLoadedFragLevel=r.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var a=i?i.duration:r.duration,s=this.hls.levels[r.level],o=(s.loaded?s.loaded.bytes:0)+n.loaded,l=(s.loaded?s.loaded.duration:0)+a;s.loaded={bytes:o,duration:l},s.realBitrate=Math.round(8*o/l)}if(r.bitrateTest){var u={stats:n,frag:r,part:i,id:r.type};this.onFragBuffered(S.FRAG_BUFFERED,u),r.bitrateTest=!1}}},e.onFragBuffered=function(t,e){var r=e.frag,i=e.part,n=null!=i&&i.stats.loaded?i.stats:r.stats;if(!n.aborted&&!this.ignoreFragment(r)){var a=n.parsing.end-n.loading.start-Math.min(n.loading.first-n.loading.start,this.bwEstimator.getEstimateTTFB());this.bwEstimator.sample(a,n.loaded),n.bwEstimate=this.bwEstimator.getEstimate(),r.bitrateTest?this.bitrateTestDelay=a/1e3:this.bitrateTestDelay=0}},e.ignoreFragment=function(t){return t.type!==ge||"initSegment"===t.sn},e.clearTimer=function(){self.clearInterval(this.timer)},e.getNextABRAutoLevel=function(){var t=this.fragCurrent,e=this.partCurrent,r=this.hls,i=r.maxAutoLevel,n=r.config,a=r.minAutoLevel,s=r.media,o=e?e.duration:t?t.duration:0,l=s&&0!==s.playbackRate?Math.abs(s.playbackRate):1,u=this.bwEstimator?this.bwEstimator.getEstimate():n.abrEwmaDefaultEstimate,h=r.mainForwardBufferInfo,d=(h?h.len:0)/l,c=this.findBestLevel(u,a,i,d,n.abrBandWidthFactor,n.abrBandWidthUpFactor);if(c>=0)return c;w.trace("[abr] "+(d?"rebuffering expected":"buffer is empty")+", finding optimal quality level");var f=o?Math.min(o,n.maxStarvationDelay):n.maxStarvationDelay,g=n.abrBandWidthFactor,v=n.abrBandWidthUpFactor;if(!d){var m=this.bitrateTestDelay;m&&(f=(o?Math.min(o,n.maxLoadingDelay):n.maxLoadingDelay)-m,w.trace("[abr] bitrate test took "+Math.round(1e3*m)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*f)+" ms"),g=v=1)}return c=this.findBestLevel(u,a,i,d+f,g,v),Math.max(c,0)},e.findBestLevel=function(t,e,r,i,n,a){for(var s,o=this.fragCurrent,l=this.partCurrent,u=this.lastLoadedFragLevel,h=this.hls.levels,d=h[u],c=!(null==d||null==(s=d.details)||!s.live),f=null==d?void 0:d.codecSet,g=l?l.duration:o?o.duration:0,v=this.bwEstimator.getEstimateTTFB()/1e3,m=e,p=-1,y=r;y>=e;y--){var T=h[y];if(!T||f&&T.codecSet!==f)T&&(m=Math.min(y,m),p=Math.max(y,p));else{-1!==p&&w.trace("[abr] Skipped level(s) "+m+"-"+p+' with CODECS:"'+h[p].attrs.CODECS+'"; not compatible with "'+d.attrs.CODECS+'"');var S=T.details,L=(l?null==S?void 0:S.partTarget:null==S?void 0:S.averagetargetduration)||g,R=void 0;R=y<=u?n*t:a*t;var A=h[y].maxBitrate,k=this.getTimeToLoadFrag(v,R,A*L,void 0===S);if(w.trace("[abr] level:"+y+" adjustedbw-bitrate:"+Math.round(R-A)+" avgDuration:"+L.toFixed(1)+" maxFetchDuration:"+i.toFixed(1)+" fetchDuration:"+k.toFixed(1)),R>A&&(0===k||!E(k)||c&&!this.bitrateTestDelay||k<i))return y}}return-1},a(t,[{key:"nextAutoLevel",get:function(){var t=this._nextAutoLevel,e=this.bwEstimator;if(-1!==t&&!e.canEstimate())return t;var r=this.getNextABRAutoLevel();if(-1!==t){var i=this.hls.levels;if(i.length>Math.max(t,r)&&i[t].loadError<=i[r].loadError)return t}return-1!==t&&(r=Math.min(t,r)),r},set:function(t){this._nextAutoLevel=t}}]),t}(),mn=function(){function t(){this.chunks=[],this.dataLength=0}var e=t.prototype;return e.push=function(t){this.chunks.push(t),this.dataLength+=t.length},e.flush=function(){var t,e=this.chunks,r=this.dataLength;return e.length?(t=1===e.length?e[0]:function(t,e){for(var r=new Uint8Array(e),i=0,n=0;n<t.length;n++){var a=t[n];r.set(a,i),i+=a.length}return r}(e,r),this.reset(),t):new Uint8Array(0)},e.reset=function(){this.chunks.length=0,this.dataLength=0},t}(),pn=function(t){function e(e,r,i){var n;return(n=t.call(this,e,r,i,"[audio-stream-controller]",ve)||this).videoBuffer=null,n.videoTrackCC=-1,n.waitingVideoCC=-1,n.bufferedTrack=null,n.switchingTrack=null,n.trackId=-1,n.waitingData=null,n.mainDetails=null,n.bufferFlushed=!1,n.cachedTrackLoadedData=null,n._registerListeners(),n}l(e,t);var r=e.prototype;return r.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null,this.bufferedTrack=null,this.switchingTrack=null},r._registerListeners=function(){var t=this.hls;t.on(S.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(S.MANIFEST_LOADING,this.onManifestLoading,this),t.on(S.LEVEL_LOADED,this.onLevelLoaded,this),t.on(S.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),t.on(S.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),t.on(S.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),t.on(S.ERROR,this.onError,this),t.on(S.BUFFER_RESET,this.onBufferReset,this),t.on(S.BUFFER_CREATED,this.onBufferCreated,this),t.on(S.BUFFER_FLUSHED,this.onBufferFlushed,this),t.on(S.INIT_PTS_FOUND,this.onInitPtsFound,this),t.on(S.FRAG_BUFFERED,this.onFragBuffered,this)},r._unregisterListeners=function(){var t=this.hls;t.off(S.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(S.MANIFEST_LOADING,this.onManifestLoading,this),t.off(S.LEVEL_LOADED,this.onLevelLoaded,this),t.off(S.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),t.off(S.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),t.off(S.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),t.off(S.ERROR,this.onError,this),t.off(S.BUFFER_RESET,this.onBufferReset,this),t.off(S.BUFFER_CREATED,this.onBufferCreated,this),t.off(S.BUFFER_FLUSHED,this.onBufferFlushed,this),t.off(S.INIT_PTS_FOUND,this.onInitPtsFound,this),t.off(S.FRAG_BUFFERED,this.onFragBuffered,this)},r.onInitPtsFound=function(t,e){var r=e.frag,i=e.id,n=e.initPTS,a=e.timescale;if("main"===i){var s=r.cc;this.initPTS[r.cc]={baseTime:n,timescale:a},this.log("InitPTS for cc: "+s+" found from main: "+n),this.videoTrackCC=s,this.state===Qr&&this.tick()}},r.startLoad=function(t){if(!this.levels)return this.startPosition=t,void(this.state=Gr);var e=this.lastCurrentTime;this.stopLoad(),this.setInterval(100),e>0&&-1===t?(this.log("Override startPosition with lastCurrentTime @"+e.toFixed(3)),t=e,this.state=Kr):(this.loadedmetadata=!1,this.state=Wr),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=t,this.tick()},r.doTick=function(){switch(this.state){case Kr:this.doTickIdle();break;case Wr:var e,r=this.levels,i=this.trackId,n=null==r||null==(e=r[i])?void 0:e.details;if(n){if(this.waitForCdnTuneIn(n))break;this.state=Qr}break;case Yr:var a,s=performance.now(),o=this.retryDate;(!o||s>=o||null!=(a=this.media)&&a.seeking)&&(this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded(this.trackId),this.state=Kr);break;case Qr:var l=this.waitingData;if(l){var u=l.frag,h=l.part,d=l.cache,c=l.complete;if(void 0!==this.initPTS[u.cc]){this.waitingData=null,this.waitingVideoCC=-1,this.state=Vr;var f={frag:u,part:h,payload:d.flush(),networkDetails:null};this._handleFragmentLoadProgress(f),c&&t.prototype._handleFragmentLoadComplete.call(this,f)}else if(this.videoTrackCC!==this.waitingVideoCC)this.log("Waiting fragment cc ("+u.cc+") cancelled because video is at cc "+this.videoTrackCC),this.clearWaitingFragment();else{var g=this.getLoadPosition(),v=Ir.bufferInfo(this.mediaBuffer,g,this.config.maxBufferHole);Je(v.end,this.config.maxFragLookUpTolerance,u)<0&&(this.log("Waiting fragment cc ("+u.cc+") @ "+u.start+" cancelled because another fragment at "+v.end+" is needed"),this.clearWaitingFragment())}}else this.state=Kr}this.onTickEnd()},r.clearWaitingFragment=function(){var t=this.waitingData;t&&(this.fragmentTracker.removeFragment(t.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=Kr)},r.resetLoadingState=function(){this.clearWaitingFragment(),t.prototype.resetLoadingState.call(this)},r.onTickEnd=function(){var t=this.media;null!=t&&t.readyState&&(this.lastCurrentTime=t.currentTime)},r.doTickIdle=function(){var t=this.hls,e=this.levels,r=this.media,i=this.trackId,n=t.config;if(null!=e&&e[i]&&(r||!this.startFragRequested&&n.startFragPrefetch)){var a=e[i],s=a.details;if(!s||s.live&&this.levelLastLoaded!==i||this.waitForCdnTuneIn(s))this.state=Wr;else{var o=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&o&&(this.bufferFlushed=!1,this.afterBufferFlushed(o,O,ve));var l=this.getFwdBufferInfo(o,ve);if(null!==l){var u=this.bufferedTrack,h=this.switchingTrack;if(!h&&this._streamEnded(l,s))return t.trigger(S.BUFFER_EOS,{type:"audio"}),void(this.state=Xr);var d=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,ge),c=l.len,f=this.getMaxBufferLength(null==d?void 0:d.len);if(!(c>=f)||h){var g=s.fragments[0].start,v=l.end;if(h&&r){var m=this.getLoadPosition();u&&h.attrs!==u.attrs&&(v=m),s.PTSKnown&&m<g&&(l.end>g||l.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),r.currentTime=g+.05)}var p=this.getNextFragment(v,s),y=!1;if(p&&this.isLoopLoading(p,v)&&(y=!!p.gap,p=this.getNextFragmentLoopLoading(p,s,l,ge,f)),p){var T=d&&p.start>d.end+s.targetduration;if(T||(null==d||!d.len)&&l.len){var E=this.getAppendedFrag(p.start,ge);if(null===E)return;if(y||(y=!!E.gap||!!T&&0===d.len),T&&!y||y&&l.nextStart&&l.nextStart<E.end)return}this.loadFragment(p,a,v)}else this.bufferFlushed=!0}}}}},r.getMaxBufferLength=function(e){var r=t.prototype.getMaxBufferLength.call(this);return e?Math.min(Math.max(r,e),this.config.maxMaxBufferLength):r},r.onMediaDetaching=function(){this.videoBuffer=null,t.prototype.onMediaDetaching.call(this)},r.onAudioTracksUpdated=function(t,e){var r=e.audioTracks;this.resetTransmuxer(),this.levels=r.map((function(t){return new Ne(t)}))},r.onAudioTrackSwitching=function(t,e){var r=!!e.url;this.trackId=e.id;var i=this.fragCurrent;i&&(i.abortRequests(),this.removeUnbufferedFrags(i.start)),this.resetLoadingState(),r?this.setInterval(100):this.resetTransmuxer(),r?(this.switchingTrack=e,this.state=Kr):(this.switchingTrack=null,this.bufferedTrack=e,this.state=Gr),this.tick()},r.onManifestLoading=function(){this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=!1,this.levels=this.mainDetails=this.waitingData=this.bufferedTrack=this.cachedTrackLoadedData=this.switchingTrack=null,this.startFragRequested=!1,this.trackId=this.videoTrackCC=this.waitingVideoCC=-1},r.onLevelLoaded=function(t,e){this.mainDetails=e.details,null!==this.cachedTrackLoadedData&&(this.hls.trigger(S.AUDIO_TRACK_LOADED,this.cachedTrackLoadedData),this.cachedTrackLoadedData=null)},r.onAudioTrackLoaded=function(t,e){var r;if(null!=this.mainDetails){var i=this.levels,n=e.details,a=e.id;if(i){this.log("Track "+a+" loaded ["+n.startSN+","+n.endSN+"]"+(n.lastPartSn?"[part-"+n.lastPartSn+"-"+n.lastPartIndex+"]":"")+",duration:"+n.totalduration);var s=i[a],o=0;if(n.live||null!=(r=s.details)&&r.live){var l=this.mainDetails;if(n.fragments[0]||(n.deltaUpdateFailed=!0),n.deltaUpdateFailed||!l)return;!s.details&&n.hasProgramDateTime&&l.hasProgramDateTime?(Fr(n,l),o=n.fragments[0].start):o=this.alignPlaylists(n,s.details)}s.details=n,this.levelLastLoaded=a,this.startFragRequested||!this.mainDetails&&n.live||this.setStartPosition(s.details,o),this.state!==Wr||this.waitForCdnTuneIn(n)||(this.state=Kr),this.tick()}else this.warn("Audio tracks were reset while loading level "+a)}else this.cachedTrackLoadedData=e},r._handleFragmentLoadProgress=function(t){var e,r=t.frag,i=t.part,n=t.payload,a=this.config,s=this.trackId,o=this.levels;if(o){var l=o[s];if(l){var u=l.details;if(!u)return this.warn("Audio track details undefined on fragment load progress"),void this.removeUnbufferedFrags(r.start);var h=a.defaultAudioCodec||l.audioCodec||"mp4a.40.2",d=this.transmuxer;d||(d=this.transmuxer=new hn(this.hls,ve,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));var c=this.initPTS[r.cc],f=null==(e=r.initSegment)?void 0:e.data;if(void 0!==c){var g=i?i.index:-1,v=-1!==g,m=new wr(r.level,r.sn,r.stats.chunkCount,n.byteLength,g,v);d.push(n,f,h,"",r,i,u.totalduration,!1,m,c)}else this.log("Unknown video PTS for cc "+r.cc+", waiting for video PTS before demuxing audio frag "+r.sn+" of ["+u.startSN+" ,"+u.endSN+"],track "+s),(this.waitingData=this.waitingData||{frag:r,part:i,cache:new mn,complete:!1}).cache.push(new Uint8Array(n)),this.waitingVideoCC=this.videoTrackCC,this.state=Qr}else this.warn("Audio track is undefined on fragment load progress")}else this.warn("Audio tracks were reset while fragment load was in progress. Fragment "+r.sn+" of level "+r.level+" will not be buffered")},r._handleFragmentLoadComplete=function(e){this.waitingData?this.waitingData.complete=!0:t.prototype._handleFragmentLoadComplete.call(this,e)},r.onBufferReset=function(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1},r.onBufferCreated=function(t,e){var r=e.tracks.audio;r&&(this.mediaBuffer=r.buffer||null),e.tracks.video&&(this.videoBuffer=e.tracks.video.buffer||null)},r.onFragBuffered=function(t,e){var r=e.frag,n=e.part;if(r.type===ve)if(this.fragContextChanged(r))this.warn("Fragment "+r.sn+(n?" p: "+n.index:"")+" of level "+r.level+" finished buffering, but was aborted. state: "+this.state+", audioSwitch: "+(this.switchingTrack?this.switchingTrack.name:"false"));else{if("initSegment"!==r.sn){this.fragPrevious=r;var a=this.switchingTrack;a&&(this.bufferedTrack=a,this.switchingTrack=null,this.hls.trigger(S.AUDIO_TRACK_SWITCHED,i({},a)))}this.fragBufferedComplete(r,n)}else if(!this.loadedmetadata&&r.type===ge){var s=this.videoBuffer||this.media;s&&Ir.getBuffered(s).length&&(this.loadedmetadata=!0)}},r.onError=function(e,r){var i;if(r.fatal)this.state=zr;else switch(r.details){case R.FRAG_GAP:case R.FRAG_PARSING_ERROR:case R.FRAG_DECRYPT_ERROR:case R.FRAG_LOAD_ERROR:case R.FRAG_LOAD_TIMEOUT:case R.KEY_LOAD_ERROR:case R.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(ve,r);break;case R.AUDIO_TRACK_LOAD_ERROR:case R.AUDIO_TRACK_LOAD_TIMEOUT:case R.LEVEL_PARSING_ERROR:r.levelRetry||this.state!==Wr||(null==(i=r.context)?void 0:i.type)!==ce||(this.state=Kr);break;case R.BUFFER_FULL_ERROR:if(!r.parent||"audio"!==r.parent)return;this.reduceLengthAndFlushBuffer(r)&&(this.bufferedTrack=null,t.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio"));break;case R.INTERNAL_EXCEPTION:this.recoverWorkerError(r)}},r.onBufferFlushed=function(t,e){e.type===O&&(this.bufferFlushed=!0,this.state===Xr&&(this.state=Kr))},r._handleTransmuxComplete=function(t){var e,r="audio",i=this.hls,n=t.remuxResult,a=t.chunkMeta,s=this.getCurrentContext(a);if(s){var l=s.frag,u=s.part,h=s.level.details,d=n.audio,c=n.text,f=n.id3,g=n.initSegment;if(!this.fragContextChanged(l)&&h){if(this.state=jr,this.switchingTrack&&d&&this.completeAudioSwitch(this.switchingTrack),null!=g&&g.tracks){var v=l.initSegment||l;this._bufferInitSegment(g.tracks,v,a),i.trigger(S.FRAG_PARSING_INIT_SEGMENT,{frag:v,id:r,tracks:g.tracks})}if(d){var m=d.startPTS,p=d.endPTS,y=d.startDTS,T=d.endDTS;u&&(u.elementaryStreams[O]={startPTS:m,endPTS:p,startDTS:y,endDTS:T}),l.setElementaryStreamInfo(O,m,p,y,T),this.bufferFragmentData(d,l,u,a)}if(null!=f&&null!=(e=f.samples)&&e.length){var E=o({id:r,frag:l,details:h},f);i.trigger(S.FRAG_PARSING_METADATA,E)}if(c){var L=o({id:r,frag:l,details:h},c);i.trigger(S.FRAG_PARSING_USERDATA,L)}}else this.fragmentTracker.removeFragment(l)}else this.resetWhenMissingContext(a)},r._bufferInitSegment=function(t,e,r){if(this.state===jr){t.video&&delete t.video;var i=t.audio;if(i){i.levelCodec=i.codec,i.id="audio",this.log("Init audio buffer, container:"+i.container+", codecs[parsed]=["+i.codec+"]"),this.hls.trigger(S.BUFFER_CODECS,t);var n=i.initSegment;if(null!=n&&n.byteLength){var a={type:"audio",frag:e,part:null,chunkMeta:r,parent:e.type,data:n};this.hls.trigger(S.BUFFER_APPENDING,a)}this.tick()}}},r.loadFragment=function(e,r,i){var n,a=this.fragmentTracker.getState(e);this.fragCurrent=e,this.switchingTrack||a===fr||a===vr?"initSegment"===e.sn?this._loadInitSegment(e,r):null!=(n=r.details)&&n.live&&!this.initPTS[e.cc]?(this.log("Waiting for video PTS in continuity counter "+e.cc+" of live stream before loading audio fragment "+e.sn+" of level "+this.trackId),this.state=Qr):(this.startFragRequested=!0,t.prototype.loadFragment.call(this,e,r,i)):this.clearTrackerIfNeeded(e)},r.completeAudioSwitch=function(e){var r=this.hls,n=this.media,a=this.bufferedTrack,s=null==a?void 0:a.attrs,o=e.attrs;n&&s&&(s.CHANNELS!==o.CHANNELS||s.NAME!==o.NAME||s.LANGUAGE!==o.LANGUAGE)&&(this.log("Switching audio track : flushing all audio"),t.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio")),this.bufferedTrack=e,this.switchingTrack=null,r.trigger(S.AUDIO_TRACK_SWITCHED,i({},e))},e}(Jr),yn=function(t){function e(e){var r;return(r=t.call(this,e,"[audio-track-controller]")||this).tracks=[],r.groupId=null,r.tracksInGroup=[],r.trackId=-1,r.currentTrack=null,r.selectDefaultTrack=!0,r.registerListeners(),r}l(e,t);var r=e.prototype;return r.registerListeners=function(){var t=this.hls;t.on(S.MANIFEST_LOADING,this.onManifestLoading,this),t.on(S.MANIFEST_PARSED,this.onManifestParsed,this),t.on(S.LEVEL_LOADING,this.onLevelLoading,this),t.on(S.LEVEL_SWITCHING,this.onLevelSwitching,this),t.on(S.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),t.on(S.ERROR,this.onError,this)},r.unregisterListeners=function(){var t=this.hls;t.off(S.MANIFEST_LOADING,this.onManifestLoading,this),t.off(S.MANIFEST_PARSED,this.onManifestParsed,this),t.off(S.LEVEL_LOADING,this.onLevelLoading,this),t.off(S.LEVEL_SWITCHING,this.onLevelSwitching,this),t.off(S.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),t.off(S.ERROR,this.onError,this)},r.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,t.prototype.destroy.call(this)},r.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0},r.onManifestParsed=function(t,e){this.tracks=e.audioTracks||[]},r.onAudioTrackLoaded=function(t,e){var r=e.id,i=e.groupId,n=e.details,a=this.tracksInGroup[r];if(a&&a.groupId===i){var s=a.details;a.details=e.details,this.log("audio-track "+r+' "'+a.name+'" lang:'+a.lang+" group:"+i+" loaded ["+n.startSN+"-"+n.endSN+"]"),r===this.trackId&&this.playlistLoaded(r,e,s)}else this.warn("Track with id:"+r+" and group:"+i+" not found in active group "+a.groupId)},r.onLevelLoading=function(t,e){this.switchLevel(e.level)},r.onLevelSwitching=function(t,e){this.switchLevel(e.level)},r.switchLevel=function(t){var e=this.hls.levels[t];if(null!=e&&e.audioGroupIds){var r=e.audioGroupIds[e.urlId];if(this.groupId!==r){this.groupId=r||null;var i=this.tracks.filter((function(t){return!r||t.groupId===r}));this.selectDefaultTrack&&!i.some((function(t){return t.default}))&&(this.selectDefaultTrack=!1),this.tracksInGroup=i;var n={audioTracks:i};this.log("Updating audio tracks, "+i.length+" track(s) found in group:"+r),this.hls.trigger(S.AUDIO_TRACKS_UPDATED,n),this.selectInitialTrack()}else this.shouldReloadPlaylist(this.currentTrack)&&this.setAudioTrack(this.trackId)}},r.onError=function(t,e){!e.fatal&&e.context&&e.context.type===ce&&e.context.id===this.trackId&&e.context.groupId===this.groupId&&(this.requestScheduled=-1,this.checkRetry(e))},r.setAudioTrack=function(t){var e=this.tracksInGroup;if(t<0||t>=e.length)this.warn("Invalid id passed to audio-track controller");else{this.clearTimer();var r=this.currentTrack;e[this.trackId];var n=e[t],a=n.groupId,s=n.name;if(this.log("Switching to audio-track "+t+' "'+s+'" lang:'+n.lang+" group:"+a),this.trackId=t,this.currentTrack=n,this.selectDefaultTrack=!1,this.hls.trigger(S.AUDIO_TRACK_SWITCHING,i({},n)),!n.details||n.details.live){var o=this.switchParams(n.url,null==r?void 0:r.details);this.loadPlaylist(o)}}},r.selectInitialTrack=function(){var t=this.tracksInGroup,e=this.findTrackId(this.currentTrack)|this.findTrackId(null);if(-1!==e)this.setAudioTrack(e);else{var r=new Error("No track found for running audio group-ID: "+this.groupId+" track count: "+t.length);this.warn(r.message),this.hls.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.AUDIO_TRACK_LOAD_ERROR,fatal:!0,error:r})}},r.findTrackId=function(t){for(var e=this.tracksInGroup,r=0;r<e.length;r++){var i=e[r];if(!this.selectDefaultTrack||i.default){if(!t||void 0!==t.attrs["STABLE-RENDITION-ID"]&&t.attrs["STABLE-RENDITION-ID"]===i.attrs["STABLE-RENDITION-ID"])return i.id;if(t.name===i.name&&t.lang===i.lang)return i.id}}return-1},r.loadPlaylist=function(e){t.prototype.loadPlaylist.call(this);var r=this.tracksInGroup[this.trackId];if(this.shouldLoadPlaylist(r)){var i=r.id,n=r.groupId,a=r.url;if(e)try{a=e.addDirectives(a)}catch(t){this.warn("Could not construct new URL with HLS Delivery Directives: "+t)}this.log("loading audio-track playlist "+i+' "'+r.name+'" lang:'+r.lang+" group:"+n),this.clearTimer(),this.hls.trigger(S.AUDIO_TRACK_LOADING,{url:a,id:i,groupId:n,deliveryDirectives:e||null})}},a(e,[{key:"audioTracks",get:function(){return this.tracksInGroup}},{key:"audioTrack",get:function(){return this.trackId},set:function(t){this.selectDefaultTrack=!1,this.setAudioTrack(t)}}]),e}(ur);function Tn(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!En(t[r].attrs,e[r].attrs))return!1;return!0}function En(t,e){var r=t["STABLE-RENDITION-ID"];return r?r===e["STABLE-RENDITION-ID"]:!["LANGUAGE","NAME","CHARACTERISTICS","AUTOSELECT","DEFAULT","FORCED"].some((function(r){return t[r]!==e[r]}))}var Sn=function(t){function e(e,r,i){var n;return(n=t.call(this,e,r,i,"[subtitle-stream-controller]",me)||this).levels=[],n.currentTrackId=-1,n.tracksBuffered=[],n.mainDetails=null,n._registerListeners(),n}l(e,t);var r=e.prototype;return r.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null},r._registerListeners=function(){var t=this.hls;t.on(S.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(S.MANIFEST_LOADING,this.onManifestLoading,this),t.on(S.LEVEL_LOADED,this.onLevelLoaded,this),t.on(S.ERROR,this.onError,this),t.on(S.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),t.on(S.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),t.on(S.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),t.on(S.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),t.on(S.BUFFER_FLUSHING,this.onBufferFlushing,this),t.on(S.FRAG_BUFFERED,this.onFragBuffered,this)},r._unregisterListeners=function(){var t=this.hls;t.off(S.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(S.MANIFEST_LOADING,this.onManifestLoading,this),t.off(S.LEVEL_LOADED,this.onLevelLoaded,this),t.off(S.ERROR,this.onError,this),t.off(S.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),t.off(S.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),t.off(S.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),t.off(S.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),t.off(S.BUFFER_FLUSHING,this.onBufferFlushing,this),t.off(S.FRAG_BUFFERED,this.onFragBuffered,this)},r.startLoad=function(t){this.stopLoad(),this.state=Kr,this.setInterval(500),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=t,this.tick()},r.onManifestLoading=function(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()},r.onMediaDetaching=function(){this.tracksBuffered=[],t.prototype.onMediaDetaching.call(this)},r.onLevelLoaded=function(t,e){this.mainDetails=e.details},r.onSubtitleFragProcessed=function(t,e){var r=e.frag,i=e.success;if(this.fragPrevious=r,this.state=Kr,i){var n=this.tracksBuffered[this.currentTrackId];if(n){for(var a,s=r.start,o=0;o<n.length;o++)if(s>=n[o].start&&s<=n[o].end){a=n[o];break}var l=r.start+r.duration;a?a.end=l:(a={start:s,end:l},n.push(a)),this.fragmentTracker.fragBuffered(r)}}},r.onBufferFlushing=function(t,e){var r=e.startOffset,i=e.endOffset;if(0===r&&i!==Number.POSITIVE_INFINITY){var n=i-1;if(n<=0)return;e.endOffsetSubtitles=Math.max(0,n),this.tracksBuffered.forEach((function(t){for(var e=0;e<t.length;)if(t[e].end<=n)t.shift();else{if(!(t[e].start<n))break;t[e].start=n,e++}})),this.fragmentTracker.removeFragmentsInRange(r,n,me)}},r.onFragBuffered=function(t,e){var r;this.loadedmetadata||e.frag.type!==ge||null!=(r=this.media)&&r.buffered.length&&(this.loadedmetadata=!0)},r.onError=function(t,e){var r=e.frag;(null==r?void 0:r.type)===me&&(this.fragCurrent&&this.fragCurrent.abortRequests(),this.state!==Gr&&(this.state=Kr))},r.onSubtitleTracksUpdated=function(t,e){var r=this,i=e.subtitleTracks;Tn(this.levels,i)?this.levels=i.map((function(t){return new Ne(t)})):(this.tracksBuffered=[],this.levels=i.map((function(t){var e=new Ne(t);return r.tracksBuffered[e.id]=[],e})),this.fragmentTracker.removeFragmentsInRange(0,Number.POSITIVE_INFINITY,me),this.fragPrevious=null,this.mediaBuffer=null)},r.onSubtitleTrackSwitch=function(t,e){if(this.currentTrackId=e.id,this.levels.length&&-1!==this.currentTrackId){var r=this.levels[this.currentTrackId];null!=r&&r.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,r&&this.setInterval(500)}else this.clearInterval()},r.onSubtitleTrackLoaded=function(t,e){var r,i=e.details,n=e.id,a=this.currentTrackId,s=this.levels;if(s.length){var o=s[a];if(!(n>=s.length||n!==a)&&o){this.mediaBuffer=this.mediaBufferTimeRanges;var l=0;if(i.live||null!=(r=o.details)&&r.live){var u=this.mainDetails;if(i.deltaUpdateFailed||!u)return;var h=u.fragments[0];o.details?0===(l=this.alignPlaylists(i,o.details))&&h&&He(i,l=h.start):i.hasProgramDateTime&&u.hasProgramDateTime?(Fr(i,u),l=i.fragments[0].start):h&&He(i,l=h.start)}o.details=i,this.levelLastLoaded=n,this.startFragRequested||!this.mainDetails&&i.live||this.setStartPosition(o.details,l),this.tick(),i.live&&!this.fragCurrent&&this.media&&this.state===Kr&&($e(null,i.fragments,this.media.currentTime,0)||(this.warn("Subtitle playlist not aligned with playback"),o.details=void 0))}}},r._handleFragmentLoadComplete=function(t){var e=this,r=t.frag,i=t.payload,n=r.decryptdata,a=this.hls;if(!this.fragContextChanged(r)&&i&&i.byteLength>0&&n&&n.key&&n.iv&&"AES-128"===n.method){var s=performance.now();this.decrypter.decrypt(new Uint8Array(i),n.key.buffer,n.iv.buffer).catch((function(t){throw a.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.FRAG_DECRYPT_ERROR,fatal:!1,error:t,reason:t.message,frag:r}),t})).then((function(t){var e=performance.now();a.trigger(S.FRAG_DECRYPTED,{frag:r,payload:t,stats:{tstart:s,tdecrypt:e}})})).catch((function(t){e.warn(t.name+": "+t.message),e.state=Kr}))}},r.doTick=function(){if(this.media){if(this.state===Kr){var t=this.currentTrackId,e=this.levels,r=e[t];if(!e.length||!r||!r.details)return;var i=this.config,n=this.getLoadPosition(),a=Ir.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],n,i.maxBufferHole),s=a.end,o=a.len,l=this.getFwdBufferInfo(this.media,ge),u=r.details;if(o>this.getMaxBufferLength(null==l?void 0:l.len)+u.levelTargetDuration)return;var h=u.fragments,d=h.length,c=u.edge,f=null,g=this.fragPrevious;if(s<c){var v=i.maxFragLookUpTolerance,m=s>c-v?0:v;!(f=$e(g,h,Math.max(h[0].start,s),m))&&g&&g.start<h[0].start&&(f=h[0])}else f=h[d-1];if(!f)return;if("initSegment"!==(f=this.mapToInitFragWhenRequired(f)).sn){var p=h[f.sn-u.startSN-1];p&&p.cc===f.cc&&this.fragmentTracker.getState(p)===fr&&(f=p)}this.fragmentTracker.getState(f)===fr&&this.loadFragment(f,r,s)}}else this.state=Kr},r.getMaxBufferLength=function(e){var r=t.prototype.getMaxBufferLength.call(this);return e?Math.max(r,e):r},r.loadFragment=function(e,r,i){this.fragCurrent=e,"initSegment"===e.sn?this._loadInitSegment(e,r):(this.startFragRequested=!0,t.prototype.loadFragment.call(this,e,r,i))},a(e,[{key:"mediaBufferTimeRanges",get:function(){return new Ln(this.tracksBuffered[this.currentTrackId]||[])}}]),e}(Jr),Ln=function(t){this.buffered=void 0;var e=function(e,r,i){if((r>>>=0)>i-1)throw new DOMException("Failed to execute '"+e+"' on 'TimeRanges': The index provided ("+r+") is greater than the maximum bound ("+i+")");return t[r][e]};this.buffered={get length(){return t.length},end:function(r){return e("end",r,t.length)},start:function(r){return e("start",r,t.length)}}},Rn=function(t){function e(e){var r;return(r=t.call(this,e,"[subtitle-track-controller]")||this).media=null,r.tracks=[],r.groupId=null,r.tracksInGroup=[],r.trackId=-1,r.selectDefaultTrack=!0,r.queuedDefaultTrack=-1,r.trackChangeListener=function(){return r.onTextTracksChanged()},r.asyncPollTrackChange=function(){return r.pollTrackChange(0)},r.useTextTrackPolling=!1,r.subtitlePollingInterval=-1,r._subtitleDisplay=!0,r.registerListeners(),r}l(e,t);var r=e.prototype;return r.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.trackChangeListener=this.asyncPollTrackChange=null,t.prototype.destroy.call(this)},r.registerListeners=function(){var t=this.hls;t.on(S.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(S.MANIFEST_LOADING,this.onManifestLoading,this),t.on(S.MANIFEST_PARSED,this.onManifestParsed,this),t.on(S.LEVEL_LOADING,this.onLevelLoading,this),t.on(S.LEVEL_SWITCHING,this.onLevelSwitching,this),t.on(S.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),t.on(S.ERROR,this.onError,this)},r.unregisterListeners=function(){var t=this.hls;t.off(S.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(S.MANIFEST_LOADING,this.onManifestLoading,this),t.off(S.MANIFEST_PARSED,this.onManifestParsed,this),t.off(S.LEVEL_LOADING,this.onLevelLoading,this),t.off(S.LEVEL_SWITCHING,this.onLevelSwitching,this),t.off(S.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),t.off(S.ERROR,this.onError,this)},r.onMediaAttached=function(t,e){this.media=e.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))},r.pollTrackChange=function(t){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.trackChangeListener,t)},r.onMediaDetaching=function(){this.media&&(self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId),An(this.media.textTracks).forEach((function(t){Le(t)})),this.subtitleTrack=-1,this.media=null)},r.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.selectDefaultTrack=!0},r.onManifestParsed=function(t,e){this.tracks=e.subtitleTracks},r.onSubtitleTrackLoaded=function(t,e){var r=e.id,i=e.details,n=this.trackId,a=this.tracksInGroup[n];if(a){var s=a.details;a.details=e.details,this.log("subtitle track "+r+" loaded ["+i.startSN+"-"+i.endSN+"]"),r===this.trackId&&this.playlistLoaded(r,e,s)}else this.warn("Invalid subtitle track id "+r)},r.onLevelLoading=function(t,e){this.switchLevel(e.level)},r.onLevelSwitching=function(t,e){this.switchLevel(e.level)},r.switchLevel=function(t){var e=this.hls.levels[t];if(null!=e&&e.textGroupIds){var r=e.textGroupIds[e.urlId],i=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0;if(this.groupId!==r){var n=this.tracks.filter((function(t){return!r||t.groupId===r}));this.tracksInGroup=n;var a=this.findTrackId(null==i?void 0:i.name)||this.findTrackId();this.groupId=r||null;var s={subtitleTracks:n};this.log("Updating subtitle tracks, "+n.length+' track(s) found in "'+r+'" group-id'),this.hls.trigger(S.SUBTITLE_TRACKS_UPDATED,s),-1!==a&&this.setSubtitleTrack(a,i)}else this.shouldReloadPlaylist(i)&&this.setSubtitleTrack(this.trackId,i)}},r.findTrackId=function(t){for(var e=this.tracksInGroup,r=0;r<e.length;r++){var i=e[r];if((!this.selectDefaultTrack||i.default)&&(!t||t===i.name))return i.id}return-1},r.onError=function(t,e){!e.fatal&&e.context&&e.context.type===fe&&e.context.id===this.trackId&&e.context.groupId===this.groupId&&this.checkRetry(e)},r.loadPlaylist=function(e){t.prototype.loadPlaylist.call(this);var r=this.tracksInGroup[this.trackId];if(this.shouldLoadPlaylist(r)){var i=r.id,n=r.groupId,a=r.url;if(e)try{a=e.addDirectives(a)}catch(t){this.warn("Could not construct new URL with HLS Delivery Directives: "+t)}this.log("Loading subtitle playlist for id "+i),this.hls.trigger(S.SUBTITLE_TRACK_LOADING,{url:a,id:i,groupId:n,deliveryDirectives:e||null})}},r.toggleTrackModes=function(t){var e=this,r=this.media,i=this.trackId;if(r){var n=An(r.textTracks),a=n.filter((function(t){return t.groupId===e.groupId}));if(-1===t)[].slice.call(n).forEach((function(t){t.mode="disabled"}));else{var s=a[i];s&&(s.mode="disabled")}var o=a[t];o&&(o.mode=this.subtitleDisplay?"showing":"hidden")}},r.setSubtitleTrack=function(t,e){var r,i=this.tracksInGroup;if(this.media){if(this.trackId!==t&&this.toggleTrackModes(t),!(this.trackId===t&&(-1===t||null!=(r=i[t])&&r.details)||t<-1||t>=i.length)){this.clearTimer();var n=i[t];if(this.log("Switching to subtitle-track "+t+(n?' "'+n.name+'" lang:'+n.lang+" group:"+n.groupId:"")),this.trackId=t,n){var a=n.id,s=n.groupId,o=void 0===s?"":s,l=n.name,u=n.type,h=n.url;this.hls.trigger(S.SUBTITLE_TRACK_SWITCH,{id:a,groupId:o,name:l,type:u,url:h});var d=this.switchParams(n.url,null==e?void 0:e.details);this.loadPlaylist(d)}else this.hls.trigger(S.SUBTITLE_TRACK_SWITCH,{id:t})}}else this.queuedDefaultTrack=t},r.onTextTracksChanged=function(){if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),this.media&&this.hls.config.renderTextTracksNatively){for(var t=-1,e=An(this.media.textTracks),r=0;r<e.length;r++)if("hidden"===e[r].mode)t=r;else if("showing"===e[r].mode){t=r;break}this.subtitleTrack!==t&&(this.subtitleTrack=t)}},a(e,[{key:"subtitleDisplay",get:function(){return this._subtitleDisplay},set:function(t){this._subtitleDisplay=t,this.trackId>-1&&this.toggleTrackModes(this.trackId)}},{key:"subtitleTracks",get:function(){return this.tracksInGroup}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(t){this.selectDefaultTrack=!1;var e=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0;this.setSubtitleTrack(t,e)}}]),e}(ur);function An(t){for(var e=[],r=0;r<t.length;r++){var i=t[r];"subtitles"!==i.kind&&"captions"!==i.kind||!i.label||e.push(t[r])}return e}var kn=function(){function t(t){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=t}var e=t.prototype;return e.append=function(t,e){var r=this.queues[e];r.push(t),1===r.length&&this.buffers[e]&&this.executeNext(e)},e.insertAbort=function(t,e){this.queues[e].unshift(t),this.executeNext(e)},e.appendBlocker=function(t){var e,r=new Promise((function(t){e=t})),i={execute:e,onStart:function(){},onComplete:function(){},onError:function(){}};return this.append(i,t),r},e.executeNext=function(t){var e=this.buffers,r=this.queues,i=e[t],n=r[t];if(n.length){var a=n[0];try{a.execute()}catch(e){w.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"),a.onError(e),null!=i&&i.updating||(n.shift(),this.executeNext(t))}}},e.shiftAndExecuteNext=function(t){this.queues[t].shift(),this.executeNext(t)},e.current=function(t){return this.queues[t][0]},t}(),bn=qt(),Dn=/([ha]vc.)(?:\.[^.,]+)+/,In=function(){function t(t){var e=this;this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.lastMpegAudioChunk=null,this.appendError=0,this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this._onMediaSourceOpen=function(){var t=e.media,r=e.mediaSource;w.log("[buffer-controller]: Media source opened"),t&&(t.removeEventListener("emptied",e._onMediaEmptied),e.updateMediaElementDuration(),e.hls.trigger(S.MEDIA_ATTACHED,{media:t})),r&&r.removeEventListener("sourceopen",e._onMediaSourceOpen),e.checkPendingTracks()},this._onMediaSourceClose=function(){w.log("[buffer-controller]: Media source closed")},this._onMediaSourceEnded=function(){w.log("[buffer-controller]: Media source ended")},this._onMediaEmptied=function(){var t=e.media,r=e._objectUrl;t&&t.src!==r&&w.error("Media element src was set while attaching MediaSource ("+r+" > "+t.src+")")},this.hls=t,this._initSourceBuffer(),this.registerListeners()}var e=t.prototype;return e.hasSourceTypes=function(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0},e.destroy=function(){this.unregisterListeners(),this.details=null,this.lastMpegAudioChunk=null},e.registerListeners=function(){var t=this.hls;t.on(S.MEDIA_ATTACHING,this.onMediaAttaching,this),t.on(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(S.MANIFEST_LOADING,this.onManifestLoading,this),t.on(S.MANIFEST_PARSED,this.onManifestParsed,this),t.on(S.BUFFER_RESET,this.onBufferReset,this),t.on(S.BUFFER_APPENDING,this.onBufferAppending,this),t.on(S.BUFFER_CODECS,this.onBufferCodecs,this),t.on(S.BUFFER_EOS,this.onBufferEos,this),t.on(S.BUFFER_FLUSHING,this.onBufferFlushing,this),t.on(S.LEVEL_UPDATED,this.onLevelUpdated,this),t.on(S.FRAG_PARSED,this.onFragParsed,this),t.on(S.FRAG_CHANGED,this.onFragChanged,this)},e.unregisterListeners=function(){var t=this.hls;t.off(S.MEDIA_ATTACHING,this.onMediaAttaching,this),t.off(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(S.MANIFEST_LOADING,this.onManifestLoading,this),t.off(S.MANIFEST_PARSED,this.onManifestParsed,this),t.off(S.BUFFER_RESET,this.onBufferReset,this),t.off(S.BUFFER_APPENDING,this.onBufferAppending,this),t.off(S.BUFFER_CODECS,this.onBufferCodecs,this),t.off(S.BUFFER_EOS,this.onBufferEos,this),t.off(S.BUFFER_FLUSHING,this.onBufferFlushing,this),t.off(S.LEVEL_UPDATED,this.onLevelUpdated,this),t.off(S.FRAG_PARSED,this.onFragParsed,this),t.off(S.FRAG_CHANGED,this.onFragChanged,this)},e._initSourceBuffer=function(){this.sourceBuffer={},this.operationQueue=new kn(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]},this.lastMpegAudioChunk=null},e.onManifestLoading=function(){this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=0,this.details=null},e.onManifestParsed=function(t,e){var r=2;(e.audio&&!e.video||!e.altAudio)&&(r=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=r,w.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},e.onMediaAttaching=function(t,e){var r=this.media=e.media;if(r&&bn){var i=this.mediaSource=new bn;i.addEventListener("sourceopen",this._onMediaSourceOpen),i.addEventListener("sourceended",this._onMediaSourceEnded),i.addEventListener("sourceclose",this._onMediaSourceClose),r.src=self.URL.createObjectURL(i),this._objectUrl=r.src,r.addEventListener("emptied",this._onMediaEmptied)}},e.onMediaDetaching=function(){var t=this.media,e=this.mediaSource,r=this._objectUrl;if(e){if(w.log("[buffer-controller]: media source detaching"),"open"===e.readyState)try{e.endOfStream()}catch(t){w.warn("[buffer-controller]: onMediaDetaching: "+t.message+" while calling endOfStream")}this.onBufferReset(),e.removeEventListener("sourceopen",this._onMediaSourceOpen),e.removeEventListener("sourceended",this._onMediaSourceEnded),e.removeEventListener("sourceclose",this._onMediaSourceClose),t&&(t.removeEventListener("emptied",this._onMediaEmptied),r&&self.URL.revokeObjectURL(r),t.src===r?(t.removeAttribute("src"),t.load()):w.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(S.MEDIA_DETACHED,void 0)},e.onBufferReset=function(){var t=this;this.getSourceBufferTypes().forEach((function(e){var r=t.sourceBuffer[e];try{r&&(t.removeBufferListeners(e),t.mediaSource&&t.mediaSource.removeSourceBuffer(r),t.sourceBuffer[e]=void 0)}catch(t){w.warn("[buffer-controller]: Failed to reset the "+e+" buffer",t)}})),this._initSourceBuffer()},e.onBufferCodecs=function(t,e){var r=this,i=this.getSourceBufferTypes().length;Object.keys(e).forEach((function(t){if(i){var n=r.tracks[t];if(n&&"function"==typeof n.buffer.changeType){var a=e[t],s=a.id,o=a.codec,l=a.levelCodec,u=a.container,h=a.metadata,d=(n.levelCodec||n.codec).replace(Dn,"$1"),c=(l||o).replace(Dn,"$1");if(d!==c){var f=u+";codecs="+(l||o);r.appendChangeType(t,f),w.log("[buffer-controller]: switching codec "+d+" to "+c),r.tracks[t]={buffer:n.buffer,codec:o,container:u,levelCodec:l,metadata:h,id:s}}}}else r.pendingTracks[t]=e[t]})),i||(this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),this.mediaSource&&"open"===this.mediaSource.readyState&&this.checkPendingTracks())},e.appendChangeType=function(t,e){var r=this,i=this.operationQueue,n={execute:function(){var n=r.sourceBuffer[t];n&&(w.log("[buffer-controller]: changing "+t+" sourceBuffer type to "+e),n.changeType(e)),i.shiftAndExecuteNext(t)},onStart:function(){},onComplete:function(){},onError:function(e){w.warn("[buffer-controller]: Failed to change "+t+" SourceBuffer type",e)}};i.append(n,t)},e.onBufferAppending=function(t,e){var r=this,i=this.hls,n=this.operationQueue,a=this.tracks,s=e.data,o=e.type,l=e.frag,u=e.part,h=e.chunkMeta,d=h.buffering[o],c=self.performance.now();d.start=c;var f=l.stats.buffering,g=u?u.stats.buffering:null;0===f.start&&(f.start=c),g&&0===g.start&&(g.start=c);var v=a.audio,m=!1;"audio"===o&&"audio/mpeg"===(null==v?void 0:v.container)&&(m=!this.lastMpegAudioChunk||1===h.id||this.lastMpegAudioChunk.sn!==h.sn,this.lastMpegAudioChunk=h);var p=l.start,y={execute:function(){if(d.executeStart=self.performance.now(),m){var t=r.sourceBuffer[o];if(t){var e=p-t.timestampOffset;Math.abs(e)>=.1&&(w.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to "+p+" (delta: "+e+") sn: "+l.sn+")"),t.timestampOffset=p)}}r.appendExecutor(s,o)},onStart:function(){},onComplete:function(){var t=self.performance.now();d.executeEnd=d.end=t,0===f.first&&(f.first=t),g&&0===g.first&&(g.first=t);var e=r.sourceBuffer,i={};for(var n in e)i[n]=Ir.getBuffered(e[n]);r.appendError=0,r.hls.trigger(S.BUFFER_APPENDED,{type:o,frag:l,part:u,chunkMeta:h,parent:l.type,timeRanges:i})},onError:function(t){w.error("[buffer-controller]: Error encountered while trying to append to the "+o+" SourceBuffer",t);var e={type:L.MEDIA_ERROR,parent:l.type,details:R.BUFFER_APPEND_ERROR,frag:l,part:u,chunkMeta:h,error:t,err:t,fatal:!1};t.code===DOMException.QUOTA_EXCEEDED_ERR?e.details=R.BUFFER_FULL_ERROR:(r.appendError++,e.details=R.BUFFER_APPEND_ERROR,r.appendError>i.config.appendErrorMaxRetry&&(w.error("[buffer-controller]: Failed "+i.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),e.fatal=!0)),i.trigger(S.ERROR,e)}};n.append(y,o)},e.onBufferFlushing=function(t,e){var r=this,i=this.operationQueue,n=function(t){return{execute:r.removeExecutor.bind(r,t,e.startOffset,e.endOffset),onStart:function(){},onComplete:function(){r.hls.trigger(S.BUFFER_FLUSHED,{type:t})},onError:function(e){w.warn("[buffer-controller]: Failed to remove from "+t+" SourceBuffer",e)}}};e.type?i.append(n(e.type),e.type):this.getSourceBufferTypes().forEach((function(t){i.append(n(t),t)}))},e.onFragParsed=function(t,e){var r=this,i=e.frag,n=e.part,a=[],s=n?n.elementaryStreams:i.elementaryStreams;s[U]?a.push("audiovideo"):(s[O]&&a.push("audio"),s[N]&&a.push("video")),0===a.length&&w.warn("Fragments must have at least one ElementaryStreamType set. type: "+i.type+" level: "+i.level+" sn: "+i.sn),this.blockBuffers((function(){var t=self.performance.now();i.stats.buffering.end=t,n&&(n.stats.buffering.end=t);var e=n?n.stats:i.stats;r.hls.trigger(S.FRAG_BUFFERED,{frag:i,part:n,stats:e,id:i.type})}),a)},e.onFragChanged=function(t,e){this.flushBackBuffer()},e.onBufferEos=function(t,e){var r=this;this.getSourceBufferTypes().reduce((function(t,i){var n=r.sourceBuffer[i];return!n||e.type&&e.type!==i||(n.ending=!0,n.ended||(n.ended=!0,w.log("[buffer-controller]: "+i+" sourceBuffer now EOS"))),t&&!(n&&!n.ended)}),!0)&&(w.log("[buffer-controller]: Queueing mediaSource.endOfStream()"),this.blockBuffers((function(){r.getSourceBufferTypes().forEach((function(t){var e=r.sourceBuffer[t];e&&(e.ending=!1)}));var t=r.mediaSource;t&&"open"===t.readyState?(w.log("[buffer-controller]: Calling mediaSource.endOfStream()"),t.endOfStream()):t&&w.info("[buffer-controller]: Could not call mediaSource.endOfStream(). mediaSource.readyState: "+t.readyState)})))},e.onLevelUpdated=function(t,e){var r=e.details;r.fragments.length&&(this.details=r,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())},e.flushBackBuffer=function(){var t=this.hls,e=this.details,r=this.media,i=this.sourceBuffer;if(r&&null!==e){var n=this.getSourceBufferTypes();if(n.length){var a=e.live&&null!==t.config.liveBackBufferLength?t.config.liveBackBufferLength:t.config.backBufferLength;if(E(a)&&!(a<0)){var s=r.currentTime,o=e.levelTargetDuration,l=Math.max(a,o),u=Math.floor(s/o)*o-l;n.forEach((function(r){var n=i[r];if(n){var a=Ir.getBuffered(n);if(a.length>0&&u>a.start(0)){if(t.trigger(S.BACK_BUFFER_REACHED,{bufferEnd:u}),e.live)t.trigger(S.LIVE_BACK_BUFFER_REACHED,{bufferEnd:u});else if(n.ended&&a.end(a.length-1)-s<2*o)return void w.info("[buffer-controller]: Cannot flush "+r+" back buffer while SourceBuffer is in ended state");t.trigger(S.BUFFER_FLUSHING,{startOffset:0,endOffset:u,type:r})}}}))}}}},e.updateMediaElementDuration=function(){if(this.details&&this.media&&this.mediaSource&&"open"===this.mediaSource.readyState){var t=this.details,e=this.hls,r=this.media,i=this.mediaSource,n=t.fragments[0].start+t.totalduration,a=r.duration,s=E(i.duration)?i.duration:0;t.live&&e.config.liveDurationInfinity?(w.log("[buffer-controller]: Media Source duration is set to Infinity"),i.duration=1/0,this.updateSeekableRange(t)):(n>s&&n>a||!E(a))&&(w.log("[buffer-controller]: Updating Media Source duration to "+n.toFixed(3)),i.duration=n)}},e.updateSeekableRange=function(t){var e=this.mediaSource,r=t.fragments;if(r.length&&t.live&&null!=e&&e.setLiveSeekableRange){var i=Math.max(0,r[0].start),n=Math.max(i,i+t.totalduration);e.setLiveSeekableRange(i,n)}},e.checkPendingTracks=function(){var t=this.bufferCodecEventsExpected,e=this.operationQueue,r=this.pendingTracks,i=Object.keys(r).length;if(i&&!t||2===i){this.createSourceBuffers(r),this.pendingTracks={};var n=this.getSourceBufferTypes();if(n.length)this.hls.trigger(S.BUFFER_CREATED,{tracks:this.tracks}),n.forEach((function(t){e.executeNext(t)}));else{var a=new Error("could not create source buffer for media codec(s)");this.hls.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,error:a,reason:a.message})}}},e.createSourceBuffers=function(t){var e=this.sourceBuffer,r=this.mediaSource;if(!r)throw Error("createSourceBuffers called when mediaSource was null");for(var i in t)if(!e[i]){var n=t[i];if(!n)throw Error("source buffer exists for track "+i+", however track does not");var a=n.levelCodec||n.codec,s=n.container+";codecs="+a;w.log("[buffer-controller]: creating sourceBuffer("+s+")");try{var o=e[i]=r.addSourceBuffer(s),l=i;this.addBufferListener(l,"updatestart",this._onSBUpdateStart),this.addBufferListener(l,"updateend",this._onSBUpdateEnd),this.addBufferListener(l,"error",this._onSBUpdateError),this.tracks[i]={buffer:o,codec:a,container:n.container,levelCodec:n.levelCodec,metadata:n.metadata,id:n.id}}catch(t){w.error("[buffer-controller]: error while trying to add sourceBuffer: "+t.message),this.hls.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:t,mimeType:s})}}},e._onSBUpdateStart=function(t){this.operationQueue.current(t).onStart()},e._onSBUpdateEnd=function(t){var e=this.operationQueue;e.current(t).onComplete(),e.shiftAndExecuteNext(t)},e._onSBUpdateError=function(t,e){var r=new Error(t+" SourceBuffer error");w.error("[buffer-controller]: "+r,e),this.hls.trigger(S.ERROR,{type:L.MEDIA_ERROR,details:R.BUFFER_APPENDING_ERROR,error:r,fatal:!1});var i=this.operationQueue.current(t);i&&i.onError(e)},e.removeExecutor=function(t,e,r){var i=this.media,n=this.mediaSource,a=this.operationQueue,s=this.sourceBuffer[t];if(!i||!n||!s)return w.warn("[buffer-controller]: Attempting to remove from the "+t+" SourceBuffer, but it does not exist"),void a.shiftAndExecuteNext(t);var o=E(i.duration)?i.duration:1/0,l=E(n.duration)?n.duration:1/0,u=Math.max(0,e),h=Math.min(r,o,l);h>u&&!s.ending?(s.ended=!1,w.log("[buffer-controller]: Removing ["+u+","+h+"] from the "+t+" SourceBuffer"),s.remove(u,h)):a.shiftAndExecuteNext(t)},e.appendExecutor=function(t,e){var r=this.operationQueue,i=this.sourceBuffer[e];if(!i)return w.warn("[buffer-controller]: Attempting to append to the "+e+" SourceBuffer, but it does not exist"),void r.shiftAndExecuteNext(e);i.ended=!1,i.appendBuffer(t)},e.blockBuffers=function(t,e){var r=this;if(void 0===e&&(e=this.getSourceBufferTypes()),!e.length)return w.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"),void Promise.resolve().then(t);var i=this.operationQueue,n=e.map((function(t){return i.appendBlocker(t)}));Promise.all(n).then((function(){t(),e.forEach((function(t){var e=r.sourceBuffer[t];null!=e&&e.updating||i.shiftAndExecuteNext(t)}))}))},e.getSourceBufferTypes=function(){return Object.keys(this.sourceBuffer)},e.addBufferListener=function(t,e,r){var i=this.sourceBuffer[t];if(i){var n=r.bind(this,t);this.listeners[t].push({event:e,listener:n}),i.addEventListener(e,n)}},e.removeBufferListeners=function(t){var e=this.sourceBuffer[t];e&&this.listeners[t].forEach((function(t){e.removeEventListener(t.event,t.listener)}))},t}(),wn={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},Cn=function(t){var e=t;return wn.hasOwnProperty(t)&&(e=wn[t]),String.fromCharCode(e)},_n=15,Pn=100,xn={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},Fn={17:2,18:4,21:6,22:8,23:10,19:13,20:15},Mn={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},On={25:2,26:4,29:6,30:8,31:10,27:13,28:15},Nn=["white","green","blue","cyan","red","yellow","magenta","black","transparent"],Un=function(){function t(){this.time=null,this.verboseLevel=0}return t.prototype.log=function(t,e){if(this.verboseLevel>=t){var r="function"==typeof e?e():e;w.log(this.time+" ["+t+"] "+r)}},t}(),Bn=function(t){for(var e=[],r=0;r<t.length;r++)e.push(t[r].toString(16));return e},Gn=function(){function t(t,e,r,i,n){this.foreground=void 0,this.underline=void 0,this.italics=void 0,this.background=void 0,this.flash=void 0,this.foreground=t||"white",this.underline=e||!1,this.italics=r||!1,this.background=i||"black",this.flash=n||!1}var e=t.prototype;return e.reset=function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1},e.setStyles=function(t){for(var e=["foreground","underline","italics","background","flash"],r=0;r<e.length;r++){var i=e[r];t.hasOwnProperty(i)&&(this[i]=t[i])}},e.isDefault=function(){return"white"===this.foreground&&!this.underline&&!this.italics&&"black"===this.background&&!this.flash},e.equals=function(t){return this.foreground===t.foreground&&this.underline===t.underline&&this.italics===t.italics&&this.background===t.background&&this.flash===t.flash},e.copy=function(t){this.foreground=t.foreground,this.underline=t.underline,this.italics=t.italics,this.background=t.background,this.flash=t.flash},e.toString=function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash},t}(),Kn=function(){function t(t,e,r,i,n,a){this.uchar=void 0,this.penState=void 0,this.uchar=t||" ",this.penState=new Gn(e,r,i,n,a)}var e=t.prototype;return e.reset=function(){this.uchar=" ",this.penState.reset()},e.setChar=function(t,e){this.uchar=t,this.penState.copy(e)},e.setPenState=function(t){this.penState.copy(t)},e.equals=function(t){return this.uchar===t.uchar&&this.penState.equals(t.penState)},e.copy=function(t){this.uchar=t.uchar,this.penState.copy(t.penState)},e.isEmpty=function(){return" "===this.uchar&&this.penState.isDefault()},t}(),Hn=function(){function t(t){this.chars=void 0,this.pos=void 0,this.currPenState=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chars=[];for(var e=0;e<Pn;e++)this.chars.push(new Kn);this.logger=t,this.pos=0,this.currPenState=new Gn}var e=t.prototype;return e.equals=function(t){for(var e=!0,r=0;r<Pn;r++)if(!this.chars[r].equals(t.chars[r])){e=!1;break}return e},e.copy=function(t){for(var e=0;e<Pn;e++)this.chars[e].copy(t.chars[e])},e.isEmpty=function(){for(var t=!0,e=0;e<Pn;e++)if(!this.chars[e].isEmpty()){t=!1;break}return t},e.setCursor=function(t){this.pos!==t&&(this.pos=t),this.pos<0?(this.logger.log(3,"Negative cursor position "+this.pos),this.pos=0):this.pos>Pn&&(this.logger.log(3,"Too large cursor position "+this.pos),this.pos=Pn)},e.moveCursor=function(t){var e=this.pos+t;if(t>1)for(var r=this.pos+1;r<e+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(e)},e.backSpace=function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)},e.insertChar=function(t){var e=this;t>=144&&this.backSpace();var r=Cn(t);this.pos>=Pn?this.logger.log(0,(function(){return"Cannot insert "+t.toString(16)+" ("+r+") at position "+e.pos+". Skipping it!"})):(this.chars[this.pos].setChar(r,this.currPenState),this.moveCursor(1))},e.clearFromPos=function(t){var e;for(e=t;e<Pn;e++)this.chars[e].reset()},e.clear=function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()},e.clearToEndOfRow=function(){this.clearFromPos(this.pos)},e.getTextString=function(){for(var t=[],e=!0,r=0;r<Pn;r++){var i=this.chars[r].uchar;" "!==i&&(e=!1),t.push(i)}return e?"":t.join("")},e.setPenStyles=function(t){this.currPenState.setStyles(t),this.chars[this.pos].setPenState(this.currPenState)},t}(),Vn=function(){function t(t){this.rows=void 0,this.currRow=void 0,this.nrRollUpRows=void 0,this.lastOutputScreen=void 0,this.logger=void 0,this.rows=[];for(var e=0;e<_n;e++)this.rows.push(new Hn(t));this.logger=t,this.currRow=14,this.nrRollUpRows=null,this.lastOutputScreen=null,this.reset()}var e=t.prototype;return e.reset=function(){for(var t=0;t<_n;t++)this.rows[t].clear();this.currRow=14},e.equals=function(t){for(var e=!0,r=0;r<_n;r++)if(!this.rows[r].equals(t.rows[r])){e=!1;break}return e},e.copy=function(t){for(var e=0;e<_n;e++)this.rows[e].copy(t.rows[e])},e.isEmpty=function(){for(var t=!0,e=0;e<_n;e++)if(!this.rows[e].isEmpty()){t=!1;break}return t},e.backSpace=function(){this.rows[this.currRow].backSpace()},e.clearToEndOfRow=function(){this.rows[this.currRow].clearToEndOfRow()},e.insertChar=function(t){this.rows[this.currRow].insertChar(t)},e.setPen=function(t){this.rows[this.currRow].setPenStyles(t)},e.moveCursor=function(t){this.rows[this.currRow].moveCursor(t)},e.setCursor=function(t){this.logger.log(2,"setCursor: "+t),this.rows[this.currRow].setCursor(t)},e.setPAC=function(t){this.logger.log(2,(function(){return"pacData = "+JSON.stringify(t)}));var e=t.row-1;if(this.nrRollUpRows&&e<this.nrRollUpRows-1&&(e=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==e){for(var r=0;r<_n;r++)this.rows[r].clear();var i=this.currRow+1-this.nrRollUpRows,n=this.lastOutputScreen;if(n){var a=n.rows[i].cueStartTime,s=this.logger.time;if(a&&null!==s&&a<s)for(var o=0;o<this.nrRollUpRows;o++)this.rows[e-this.nrRollUpRows+o+1].copy(n.rows[i+o])}}this.currRow=e;var l=this.rows[this.currRow];if(null!==t.indent){var u=t.indent,h=Math.max(u-1,0);l.setCursor(t.indent),t.color=l.chars[h].penState.foreground}var d={foreground:t.color,underline:t.underline,italics:t.italics,background:"black",flash:!1};this.setPen(d)},e.setBkgData=function(t){this.logger.log(2,(function(){return"bkgData = "+JSON.stringify(t)})),this.backSpace(),this.setPen(t),this.insertChar(32)},e.setRollUpRows=function(t){this.nrRollUpRows=t},e.rollUp=function(){var t=this;if(null!==this.nrRollUpRows){this.logger.log(1,(function(){return t.getDisplayText()}));var e=this.currRow+1-this.nrRollUpRows,r=this.rows.splice(e,1)[0];r.clear(),this.rows.splice(this.currRow,0,r),this.logger.log(2,"Rolling up")}else this.logger.log(3,"roll_up but nrRollUpRows not set yet")},e.getDisplayText=function(t){t=t||!1;for(var e=[],r="",i=-1,n=0;n<_n;n++){var a=this.rows[n].getTextString();a&&(i=n+1,t?e.push("Row "+i+": '"+a+"'"):e.push(a.trim()))}return e.length>0&&(r=t?"["+e.join(" | ")+"]":e.join("\n")),r},e.getTextAndFormat=function(){return this.rows},t}(),Yn=function(){function t(t,e,r){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=t,this.outputFilter=e,this.mode=null,this.verbose=0,this.displayedMemory=new Vn(r),this.nonDisplayedMemory=new Vn(r),this.lastOutputScreen=new Vn(r),this.currRollUpRow=this.displayedMemory.rows[14],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=r}var e=t.prototype;return e.reset=function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[14],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null},e.getHandler=function(){return this.outputFilter},e.setHandler=function(t){this.outputFilter=t},e.setPAC=function(t){this.writeScreen.setPAC(t)},e.setBkgData=function(t){this.writeScreen.setBkgData(t)},e.setMode=function(t){t!==this.mode&&(this.mode=t,this.logger.log(2,(function(){return"MODE="+t})),"MODE_POP-ON"===this.mode?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),"MODE_ROLL-UP"!==this.mode&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=t)},e.insertChars=function(t){for(var e=this,r=0;r<t.length;r++)this.writeScreen.insertChar(t[r]);var i=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(2,(function(){return i+": "+e.writeScreen.getDisplayText(!0)})),"MODE_PAINT-ON"!==this.mode&&"MODE_ROLL-UP"!==this.mode||(this.logger.log(1,(function(){return"DISPLAYED: "+e.displayedMemory.getDisplayText(!0)})),this.outputDataUpdate())},e.ccRCL=function(){this.logger.log(2,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")},e.ccBS=function(){this.logger.log(2,"BS - BackSpace"),"MODE_TEXT"!==this.mode&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())},e.ccAOF=function(){},e.ccAON=function(){},e.ccDER=function(){this.logger.log(2,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()},e.ccRU=function(t){this.logger.log(2,"RU("+t+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(t)},e.ccFON=function(){this.logger.log(2,"FON - Flash On"),this.writeScreen.setPen({flash:!0})},e.ccRDC=function(){this.logger.log(2,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")},e.ccTR=function(){this.logger.log(2,"TR"),this.setMode("MODE_TEXT")},e.ccRTD=function(){this.logger.log(2,"RTD"),this.setMode("MODE_TEXT")},e.ccEDM=function(){this.logger.log(2,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)},e.ccCR=function(){this.logger.log(2,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)},e.ccENM=function(){this.logger.log(2,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()},e.ccEOC=function(){var t=this;if(this.logger.log(2,"EOC - End Of Caption"),"MODE_POP-ON"===this.mode){var e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(1,(function(){return"DISP: "+t.displayedMemory.getDisplayText()}))}this.outputDataUpdate(!0)},e.ccTO=function(t){this.logger.log(2,"TO("+t+") - Tab Offset"),this.writeScreen.moveCursor(t)},e.ccMIDROW=function(t){var e={flash:!1};if(e.underline=t%2==1,e.italics=t>=46,e.italics)e.foreground="white";else{var r=Math.floor(t/2)-16;e.foreground=["white","green","blue","cyan","red","yellow","magenta"][r]}this.logger.log(2,"MIDROW: "+JSON.stringify(e)),this.writeScreen.setPen(e)},e.outputDataUpdate=function(t){void 0===t&&(t=!1);var e=this.logger.time;null!==e&&this.outputFilter&&(null!==this.cueStartTime||this.displayedMemory.isEmpty()?this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,e,this.lastOutputScreen),t&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:e):this.cueStartTime=e,this.lastOutputScreen.copy(this.displayedMemory))},e.cueSplitAtTime=function(t){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,t,this.displayedMemory),this.cueStartTime=t))},t}(),Wn=function(){function t(t,e,r){this.channels=void 0,this.currentChannel=0,this.cmdHistory=void 0,this.logger=void 0;var i=new Un;this.channels=[null,new Yn(t,e,i),new Yn(t+1,r,i)],this.cmdHistory={a:null,b:null},this.logger=i}var e=t.prototype;return e.getHandler=function(t){return this.channels[t].getHandler()},e.setHandler=function(t,e){this.channels[t].setHandler(e)},e.addData=function(t,e){var r,i,n,a=!1;this.logger.time=t;for(var s=0;s<e.length;s+=2)if(i=127&e[s],n=127&e[s+1],0!==i||0!==n){if(this.logger.log(3,"["+Bn([e[s],e[s+1]])+"] -> ("+Bn([i,n])+")"),(r=this.parseCmd(i,n))||(r=this.parseMidrow(i,n)),r||(r=this.parsePAC(i,n)),r||(r=this.parseBackgroundAttributes(i,n)),!r&&(a=this.parseChars(i,n))){var o=this.currentChannel;o&&o>0?this.channels[o].insertChars(a):this.logger.log(2,"No channel found yet. TEXT-MODE?")}r||a||this.logger.log(2,"Couldn't parse cleaned data "+Bn([i,n])+" orig: "+Bn([e[s],e[s+1]]))}},e.parseCmd=function(t,e){var r=this.cmdHistory;if(!((20===t||28===t||21===t||29===t)&&e>=32&&e<=47||(23===t||31===t)&&e>=33&&e<=35))return!1;if(qn(t,e,r))return jn(null,null,r),this.logger.log(3,"Repeated command ("+Bn([t,e])+") is dropped"),!0;var i=20===t||21===t||23===t?1:2,n=this.channels[i];return 20===t||21===t||28===t||29===t?32===e?n.ccRCL():33===e?n.ccBS():34===e?n.ccAOF():35===e?n.ccAON():36===e?n.ccDER():37===e?n.ccRU(2):38===e?n.ccRU(3):39===e?n.ccRU(4):40===e?n.ccFON():41===e?n.ccRDC():42===e?n.ccTR():43===e?n.ccRTD():44===e?n.ccEDM():45===e?n.ccCR():46===e?n.ccENM():47===e&&n.ccEOC():n.ccTO(e-32),jn(t,e,r),this.currentChannel=i,!0},e.parseMidrow=function(t,e){var r=0;if((17===t||25===t)&&e>=32&&e<=47){if((r=17===t?1:2)!==this.currentChannel)return this.logger.log(0,"Mismatch channel in midrow parsing"),!1;var i=this.channels[r];return!!i&&(i.ccMIDROW(e),this.logger.log(3,"MIDROW ("+Bn([t,e])+")"),!0)}return!1},e.parsePAC=function(t,e){var r,i=this.cmdHistory;if(!((t>=17&&t<=23||t>=25&&t<=31)&&e>=64&&e<=127||(16===t||24===t)&&e>=64&&e<=95))return!1;if(qn(t,e,i))return jn(null,null,i),!0;var n=t<=23?1:2;r=e>=64&&e<=95?1===n?xn[t]:Mn[t]:1===n?Fn[t]:On[t];var a=this.channels[n];return!!a&&(a.setPAC(this.interpretPAC(r,e)),jn(t,e,i),this.currentChannel=n,!0)},e.interpretPAC=function(t,e){var r,i={color:null,italics:!1,indent:null,underline:!1,row:t};return r=e>95?e-96:e-64,i.underline=1==(1&r),r<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(i.italics=!0,i.color="white"):i.indent=4*Math.floor((r-16)/2),i},e.parseChars=function(t,e){var r,i,n=null,a=null;if(t>=25?(r=2,a=t-8):(r=1,a=t),a>=17&&a<=19?(i=17===a?e+80:18===a?e+112:e+144,this.logger.log(2,"Special char '"+Cn(i)+"' in channel "+r),n=[i]):t>=32&&t<=127&&(n=0===e?[t]:[t,e]),n){var s=Bn(n);this.logger.log(3,"Char codes =  "+s.join(",")),jn(t,e,this.cmdHistory)}return n},e.parseBackgroundAttributes=function(t,e){var r;if(!((16===t||24===t)&&e>=32&&e<=47||(23===t||31===t)&&e>=45&&e<=47))return!1;var i={};16===t||24===t?(r=Math.floor((e-32)/2),i.background=Nn[r],e%2==1&&(i.background=i.background+"_semi")):45===e?i.background="transparent":(i.foreground="black",47===e&&(i.underline=!0));var n=t<=23?1:2;return this.channels[n].setBkgData(i),jn(t,e,this.cmdHistory),!0},e.reset=function(){for(var t=0;t<Object.keys(this.channels).length;t++){var e=this.channels[t];e&&e.reset()}this.cmdHistory={a:null,b:null}},e.cueSplitAtTime=function(t){for(var e=0;e<this.channels.length;e++){var r=this.channels[e];r&&r.cueSplitAtTime(t)}},t}();function jn(t,e,r){r.a=t,r.b=e}function qn(t,e,r){return r.a===t&&r.b===e}var Xn=function(){function t(t,e){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=t,this.trackName=e}var e=t.prototype;return e.dispatchCue=function(){null!==this.startTime&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)},e.newCue=function(t,e,r){(null===this.startTime||this.startTime>t)&&(this.startTime=t),this.endTime=e,this.screen=r,this.timelineController.createCaptionsTrack(this.trackName)},e.reset=function(){this.cueRanges=[],this.startTime=null},t}(),zn=function(){if("undefined"!=typeof self&&self.VTTCue)return self.VTTCue;var t=["","lr","rl"],e=["start","middle","end","left","right"];function r(t,e){if("string"!=typeof e)return!1;if(!Array.isArray(t))return!1;var r=e.toLowerCase();return!!~t.indexOf(r)&&r}function i(t){return r(e,t)}function n(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)t[s]=a[s]}return t}function a(e,a,s){var o=this,l={enumerable:!0};o.hasBeenReset=!1;var u="",h=!1,d=e,c=a,f=s,g=null,v="",m=!0,p="auto",y="start",T=50,E="middle",S=50,L="middle";Object.defineProperty(o,"id",n({},l,{get:function(){return u},set:function(t){u=""+t}})),Object.defineProperty(o,"pauseOnExit",n({},l,{get:function(){return h},set:function(t){h=!!t}})),Object.defineProperty(o,"startTime",n({},l,{get:function(){return d},set:function(t){if("number"!=typeof t)throw new TypeError("Start time must be set to a number.");d=t,this.hasBeenReset=!0}})),Object.defineProperty(o,"endTime",n({},l,{get:function(){return c},set:function(t){if("number"!=typeof t)throw new TypeError("End time must be set to a number.");c=t,this.hasBeenReset=!0}})),Object.defineProperty(o,"text",n({},l,{get:function(){return f},set:function(t){f=""+t,this.hasBeenReset=!0}})),Object.defineProperty(o,"region",n({},l,{get:function(){return g},set:function(t){g=t,this.hasBeenReset=!0}})),Object.defineProperty(o,"vertical",n({},l,{get:function(){return v},set:function(e){var i=function(e){return r(t,e)}(e);if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");v=i,this.hasBeenReset=!0}})),Object.defineProperty(o,"snapToLines",n({},l,{get:function(){return m},set:function(t){m=!!t,this.hasBeenReset=!0}})),Object.defineProperty(o,"line",n({},l,{get:function(){return p},set:function(t){if("number"!=typeof t&&"auto"!==t)throw new SyntaxError("An invalid number or illegal string was specified.");p=t,this.hasBeenReset=!0}})),Object.defineProperty(o,"lineAlign",n({},l,{get:function(){return y},set:function(t){var e=i(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");y=e,this.hasBeenReset=!0}})),Object.defineProperty(o,"position",n({},l,{get:function(){return T},set:function(t){if(t<0||t>100)throw new Error("Position must be between 0 and 100.");T=t,this.hasBeenReset=!0}})),Object.defineProperty(o,"positionAlign",n({},l,{get:function(){return E},set:function(t){var e=i(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");E=e,this.hasBeenReset=!0}})),Object.defineProperty(o,"size",n({},l,{get:function(){return S},set:function(t){if(t<0||t>100)throw new Error("Size must be between 0 and 100.");S=t,this.hasBeenReset=!0}})),Object.defineProperty(o,"align",n({},l,{get:function(){return L},set:function(t){var e=i(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");L=e,this.hasBeenReset=!0}})),o.displayState=void 0}return a.prototype.getCueAsHTML=function(){return self.WebVTT.convertCueToDOMTree(self,this.text)},a}(),Qn=function(){function t(){}return t.prototype.decode=function(t,e){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))},t}();function $n(t){function e(t,e,r,i){return 3600*(0|t)+60*(0|e)+(0|r)+parseFloat(i||0)}var r=t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return r?parseFloat(r[2])>59?e(r[2],r[3],0,r[4]):e(r[1],r[2],r[3],r[4]):null}var Jn=function(){function t(){this.values=Object.create(null)}var e=t.prototype;return e.set=function(t,e){this.get(t)||""===e||(this.values[t]=e)},e.get=function(t,e,r){return r?this.has(t)?this.values[t]:e[r]:this.has(t)?this.values[t]:e},e.has=function(t){return t in this.values},e.alt=function(t,e,r){for(var i=0;i<r.length;++i)if(e===r[i]){this.set(t,e);break}},e.integer=function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},e.percent=function(t,e){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(e)){var r=parseFloat(e);if(r>=0&&r<=100)return this.set(t,r),!0}return!1},t}();function Zn(t,e,r,i){var n=i?t.split(i):[t];for(var a in n)if("string"==typeof n[a]){var s=n[a].split(r);2===s.length&&e(s[0],s[1])}}var ta=new zn(0,0,""),ea="middle"===ta.align?"middle":"center";function ra(t,e,r){var i=t;function n(){var e=$n(t);if(null===e)throw new Error("Malformed timestamp: "+i);return t=t.replace(/^[^\sa-zA-Z-]+/,""),e}function a(){t=t.replace(/^\s+/,"")}if(a(),e.startTime=n(),a(),"--\x3e"!==t.slice(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): "+i);t=t.slice(3),a(),e.endTime=n(),a(),function(t,e){var i=new Jn;Zn(t,(function(t,e){var n;switch(t){case"region":for(var a=r.length-1;a>=0;a--)if(r[a].id===e){i.set(t,r[a].region);break}break;case"vertical":i.alt(t,e,["rl","lr"]);break;case"line":n=e.split(","),i.integer(t,n[0]),i.percent(t,n[0])&&i.set("snapToLines",!1),i.alt(t,n[0],["auto"]),2===n.length&&i.alt("lineAlign",n[1],["start",ea,"end"]);break;case"position":n=e.split(","),i.percent(t,n[0]),2===n.length&&i.alt("positionAlign",n[1],["start",ea,"end","line-left","line-right","auto"]);break;case"size":i.percent(t,e);break;case"align":i.alt(t,e,["start",ea,"end","left","right"])}}),/:/,/\s/),e.region=i.get("region",null),e.vertical=i.get("vertical","");var n=i.get("line","auto");"auto"===n&&-1===ta.line&&(n=-1),e.line=n,e.lineAlign=i.get("lineAlign","start"),e.snapToLines=i.get("snapToLines",!0),e.size=i.get("size",100),e.align=i.get("align",ea);var a=i.get("position","auto");"auto"===a&&50===ta.position&&(a="start"===e.align||"left"===e.align?0:"end"===e.align||"right"===e.align?100:50),e.position=a}(t,e)}function ia(t){return t.replace(/<br(?: \/)?>/gi,"\n")}var na=function(){function t(){this.state="INITIAL",this.buffer="",this.decoder=new Qn,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}var e=t.prototype;return e.parse=function(t){var e=this;function r(){var t=e.buffer,r=0;for(t=ia(t);r<t.length&&"\r"!==t[r]&&"\n"!==t[r];)++r;var i=t.slice(0,r);return"\r"===t[r]&&++r,"\n"===t[r]&&++r,e.buffer=t.slice(r),i}t&&(e.buffer+=e.decoder.decode(t,{stream:!0}));try{var i="";if("INITIAL"===e.state){if(!/\r\n|\n/.test(e.buffer))return this;var n=(i=r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(null==n||!n[0])throw new Error("Malformed WebVTT signature.");e.state="HEADER"}for(var a=!1;e.buffer;){if(!/\r\n|\n/.test(e.buffer))return this;switch(a?a=!1:i=r(),e.state){case"HEADER":/:/.test(i)?Zn(i,(function(t,e){}),/:/):i||(e.state="ID");continue;case"NOTE":i||(e.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(i)){e.state="NOTE";break}if(!i)continue;if(e.cue=new zn(0,0,""),e.state="CUE",-1===i.indexOf("--\x3e")){e.cue.id=i;continue}case"CUE":if(!e.cue){e.state="BADCUE";continue}try{ra(i,e.cue,e.regionList)}catch(t){e.cue=null,e.state="BADCUE";continue}e.state="CUETEXT";continue;case"CUETEXT":var s=-1!==i.indexOf("--\x3e");if(!i||s&&(a=!0)){e.oncue&&e.cue&&e.oncue(e.cue),e.cue=null,e.state="ID";continue}if(null===e.cue)continue;e.cue.text&&(e.cue.text+="\n"),e.cue.text+=i;continue;case"BADCUE":i||(e.state="ID")}}}catch(t){"CUETEXT"===e.state&&e.cue&&e.oncue&&e.oncue(e.cue),e.cue=null,e.state="INITIAL"===e.state?"BADWEBVTT":"BADCUE"}return this},e.flush=function(){var t=this;try{if((t.cue||"HEADER"===t.state)&&(t.buffer+="\n\n",t.parse()),"INITIAL"===t.state||"BADWEBVTT"===t.state)throw new Error("Malformed WebVTT signature.")}catch(e){t.onparsingerror&&t.onparsingerror(e)}return t.onflush&&t.onflush(),this},t}(),aa=/\r\n|\n\r|\n|\r/g,sa=function(t,e,r){return void 0===r&&(r=0),t.slice(r,r+e.length)===e},oa=function(t){for(var e=5381,r=t.length;r;)e=33*e^t.charCodeAt(--r);return(e>>>0).toString()};function la(t,e,r){return oa(t.toString())+oa(e.toString())+oa(r)}function ua(t,e,r,i,n,a,s){var o,l,u,h=new na,d=pt(new Uint8Array(t)).trim().replace(aa,"\n").split("\n"),c=[],f=e?(o=e.baseTime,void 0===(l=e.timescale)&&(l=1),Ui(o,9e4,1/l)):0,g="00:00.000",v=0,m=0,p=!0;h.oncue=function(t){var a=r[i],s=r.ccOffset,o=(v-f)/9e4;if(null!=a&&a.new&&(void 0!==m?s=r.ccOffset=a.start:function(t,e,r){var i=t[e],n=t[i.prevCC];if(!n||!n.new&&i.new)return t.ccOffset=t.presentationOffset=i.start,void(i.new=!1);for(;null!=(a=n)&&a.new;){var a;t.ccOffset+=i.start-n.start,i.new=!1,n=t[(i=n).prevCC]}t.presentationOffset=r}(r,i,o)),o){if(!e)return void(u=new Error("Missing initPTS for VTT MPEGTS"));s=o-r.presentationOffset}var l=t.endTime-t.startTime,h=Vi(9e4*(t.startTime+s-m),9e4*n)/9e4;t.startTime=Math.max(h,0),t.endTime=Math.max(h+l,0);var d=t.text.trim();t.text=decodeURIComponent(encodeURIComponent(d)),t.id||(t.id=la(t.startTime,t.endTime,d)),t.endTime>0&&c.push(t)},h.onparsingerror=function(t){u=t},h.onflush=function(){u?s(u):a(c)},d.forEach((function(t){if(p){if(sa(t,"X-TIMESTAMP-MAP=")){p=!1,t.slice(16).split(",").forEach((function(t){sa(t,"LOCAL:")?g=t.slice(6):sa(t,"MPEGTS:")&&(v=parseInt(t.slice(7)))}));try{m=function(t){var e=parseInt(t.slice(-3)),r=parseInt(t.slice(-6,-4)),i=parseInt(t.slice(-9,-7)),n=t.length>9?parseInt(t.substring(0,t.indexOf(":"))):0;if(!(E(e)&&E(r)&&E(i)&&E(n)))throw Error("Malformed X-TIMESTAMP-MAP: Local:"+t);return e+=1e3*r,(e+=6e4*i)+36e5*n}(g)/1e3}catch(t){u=t}return}""===t&&(p=!1)}h.parse(t+"\n")})),h.flush()}var ha="stpp.ttml.im1t",da=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,ca=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,fa={left:"start",center:"center",right:"end",start:"start",end:"end"};function ga(t,e,r,i){var n=It(new Uint8Array(t),["mdat"]);if(0!==n.length){var a,s,l,u,h=n.map((function(t){return pt(t)})),d=(a=e.baseTime,s=1,void 0===(l=e.timescale)&&(l=1),void 0===u&&(u=!1),Ui(a,s,1/l,u));try{h.forEach((function(t){return r(function(t,e){var r=(new DOMParser).parseFromString(t,"text/xml").getElementsByTagName("tt")[0];if(!r)throw new Error("Invalid ttml");var i={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},n=Object.keys(i).reduce((function(t,e){return t[e]=r.getAttribute("ttp:"+e)||i[e],t}),{}),a="preserve"!==r.getAttribute("xml:space"),s=ma(va(r,"styling","style")),l=ma(va(r,"layout","region")),u=va(r,"body","[begin]");return[].map.call(u,(function(t){var r=pa(t,a);if(!r||!t.hasAttribute("begin"))return null;var i=Ea(t.getAttribute("begin"),n),u=Ea(t.getAttribute("dur"),n),h=Ea(t.getAttribute("end"),n);if(null===i)throw Ta(t);if(null===h){if(null===u)throw Ta(t);h=i+u}var d=new zn(i-e,h-e,r);d.id=la(d.startTime,d.endTime,d.text);var c=function(t,e,r){var i="http://www.w3.org/ns/ttml#styling",n=null,a=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],s=null!=t&&t.hasAttribute("style")?t.getAttribute("style"):null;return s&&r.hasOwnProperty(s)&&(n=r[s]),a.reduce((function(r,a){var s=ya(e,i,a)||ya(t,i,a)||ya(n,i,a);return s&&(r[a]=s),r}),{})}(l[t.getAttribute("region")],s[t.getAttribute("style")],s),f=c.textAlign;if(f){var g=fa[f];g&&(d.lineAlign=g),d.align=f}return o(d,c),d})).filter((function(t){return null!==t}))}(t,d))}))}catch(t){i(t)}}else i(new Error("Could not parse IMSC1 mdat"))}function va(t,e,r){var i=t.getElementsByTagName(e)[0];return i?[].slice.call(i.querySelectorAll(r)):[]}function ma(t){return t.reduce((function(t,e){var r=e.getAttribute("xml:id");return r&&(t[r]=e),t}),{})}function pa(t,e){return[].slice.call(t.childNodes).reduce((function(t,r,i){var n;return"br"===r.nodeName&&i?t+"\n":null!=(n=r.childNodes)&&n.length?pa(r,e):e?t+r.textContent.trim().replace(/\s+/g," "):t+r.textContent}),"")}function ya(t,e,r){return t&&t.hasAttributeNS(e,r)?t.getAttributeNS(e,r):null}function Ta(t){return new Error("Could not parse ttml timestamp "+t)}function Ea(t,e){if(!t)return null;var r=$n(t);return null===r&&(da.test(t)?r=function(t,e){var r=da.exec(t),i=(0|r[4])+(0|r[5])/e.subFrameRate;return 3600*(0|r[1])+60*(0|r[2])+(0|r[3])+i/e.frameRate}(t,e):ca.test(t)&&(r=function(t,e){var r=ca.exec(t),i=Number(r[1]);switch(r[2]){case"h":return 3600*i;case"m":return 60*i;case"ms":return 1e3*i;case"f":return i/e.frameRate;case"t":return i/e.tickRate}return i}(t,e))),r}var Sa=function(){function t(t){if(this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs={ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}},this.captionsProperties=void 0,this.hls=t,this.config=t.config,this.Cues=t.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},this.config.enableCEA708Captions){var e=new Xn(this,"textTrack1"),r=new Xn(this,"textTrack2"),i=new Xn(this,"textTrack3"),n=new Xn(this,"textTrack4");this.cea608Parser1=new Wn(1,e,r),this.cea608Parser2=new Wn(3,i,n)}t.on(S.MEDIA_ATTACHING,this.onMediaAttaching,this),t.on(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(S.MANIFEST_LOADING,this.onManifestLoading,this),t.on(S.MANIFEST_LOADED,this.onManifestLoaded,this),t.on(S.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),t.on(S.FRAG_LOADING,this.onFragLoading,this),t.on(S.FRAG_LOADED,this.onFragLoaded,this),t.on(S.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),t.on(S.FRAG_DECRYPTED,this.onFragDecrypted,this),t.on(S.INIT_PTS_FOUND,this.onInitPtsFound,this),t.on(S.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),t.on(S.BUFFER_FLUSHING,this.onBufferFlushing,this)}var e=t.prototype;return e.destroy=function(){var t=this.hls;t.off(S.MEDIA_ATTACHING,this.onMediaAttaching,this),t.off(S.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(S.MANIFEST_LOADING,this.onManifestLoading,this),t.off(S.MANIFEST_LOADED,this.onManifestLoaded,this),t.off(S.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),t.off(S.FRAG_LOADING,this.onFragLoading,this),t.off(S.FRAG_LOADED,this.onFragLoaded,this),t.off(S.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),t.off(S.FRAG_DECRYPTED,this.onFragDecrypted,this),t.off(S.INIT_PTS_FOUND,this.onInitPtsFound,this),t.off(S.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),t.off(S.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=this.cea608Parser1=this.cea608Parser2=null},e.addCues=function(t,e,r,i,n){for(var a,s,o,l,u=!1,h=n.length;h--;){var d=n[h],c=(a=d[0],s=d[1],o=e,l=r,Math.min(s,l)-Math.max(a,o));if(c>=0&&(d[0]=Math.min(d[0],e),d[1]=Math.max(d[1],r),u=!0,c/(r-e)>.5))return}if(u||n.push([e,r]),this.config.renderTextTracksNatively){var f=this.captionsTracks[t];this.Cues.newCue(f,e,r,i)}else{var g=this.Cues.newCue(null,e,r,i);this.hls.trigger(S.CUES_PARSED,{type:"captions",cues:g,track:t})}},e.onInitPtsFound=function(t,e){var r=this,i=e.frag,n=e.id,a=e.initPTS,s=e.timescale,o=this.unparsedVttFrags;"main"===n&&(this.initPTS[i.cc]={baseTime:a,timescale:s}),o.length&&(this.unparsedVttFrags=[],o.forEach((function(t){r.onFragLoaded(S.FRAG_LOADED,t)})))},e.getExistingTrack=function(t){var e=this.media;if(e)for(var r=0;r<e.textTracks.length;r++){var i=e.textTracks[r];if(i[t])return i}return null},e.createCaptionsTrack=function(t){this.config.renderTextTracksNatively?this.createNativeTrack(t):this.createNonNativeTrack(t)},e.createNativeTrack=function(t){if(!this.captionsTracks[t]){var e=this.captionsProperties,r=this.captionsTracks,i=this.media,n=e[t],a=n.label,s=n.languageCode,o=this.getExistingTrack(t);if(o)r[t]=o,Le(r[t]),Ee(r[t],i);else{var l=this.createTextTrack("captions",a,s);l&&(l[t]=!0,r[t]=l)}}},e.createNonNativeTrack=function(t){if(!this.nonNativeCaptionsTracks[t]){var e=this.captionsProperties[t];if(e){var r={_id:t,label:e.label,kind:"captions",default:!!e.media&&!!e.media.default,closedCaptions:e.media};this.nonNativeCaptionsTracks[t]=r,this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[r]})}}},e.createTextTrack=function(t,e,r){var i=this.media;if(i)return i.addTextTrack(t,e,r)},e.onMediaAttaching=function(t,e){this.media=e.media,this._cleanTracks()},e.onMediaDetaching=function(){var t=this.captionsTracks;Object.keys(t).forEach((function(e){Le(t[e]),delete t[e]})),this.nonNativeCaptionsTracks={}},e.onManifestLoading=function(){this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs={ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}},this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())},e._cleanTracks=function(){var t=this.media;if(t){var e=t.textTracks;if(e)for(var r=0;r<e.length;r++)Le(e[r])}},e.onSubtitleTracksUpdated=function(t,e){var r=this,i=e.subtitleTracks||[],n=i.some((function(t){return t.textCodec===ha}));if(this.config.enableWebVTT||n&&this.config.enableIMSC1){if(Tn(this.tracks,i))return void(this.tracks=i);if(this.textTracks=[],this.tracks=i,this.config.renderTextTracksNatively){var a=this.media?this.media.textTracks:null;this.tracks.forEach((function(t,e){var i;if(a&&e<a.length){for(var n=null,s=0;s<a.length;s++)if(La(a[s],t)){n=a[s];break}n&&(i=n)}if(i)Le(i);else{var o=r._captionsOrSubtitlesFromCharacteristics(t);(i=r.createTextTrack(o,t.name,t.lang))&&(i.mode="disabled")}i&&(i.groupId=t.groupId,r.textTracks.push(i))}))}else if(this.tracks.length){var s=this.tracks.map((function(t){return{label:t.name,kind:t.type.toLowerCase(),default:t.default,subtitleTrack:t}}));this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:s})}}},e._captionsOrSubtitlesFromCharacteristics=function(t){if(t.attrs.CHARACTERISTICS){var e=/transcribes-spoken-dialog/gi.test(t.attrs.CHARACTERISTICS),r=/describes-music-and-sound/gi.test(t.attrs.CHARACTERISTICS);if(e&&r)return"captions"}return"subtitles"},e.onManifestLoaded=function(t,e){var r=this;this.config.enableCEA708Captions&&e.captions&&e.captions.forEach((function(t){var e=/(?:CC|SERVICE)([1-4])/.exec(t.instreamId);if(e){var i="textTrack"+e[1],n=r.captionsProperties[i];n&&(n.label=t.name,t.lang&&(n.languageCode=t.lang),n.media=t)}}))},e.closedCaptionsForLevel=function(t){var e=this.hls.levels[t.level];return null==e?void 0:e.attrs["CLOSED-CAPTIONS"]},e.onFragLoading=function(t,e){var r=this.cea608Parser1,i=this.cea608Parser2,n=this.lastSn,a=this.lastPartIndex;if(this.enabled&&r&&i&&e.frag.type===ge){var s,o,l=e.frag.sn,u=null!=(s=null==e||null==(o=e.part)?void 0:o.index)?s:-1;l===n+1||l===n&&u===a+1||(r.reset(),i.reset()),this.lastSn=l,this.lastPartIndex=u}},e.onFragLoaded=function(t,e){var r=e.frag,i=e.payload;if(r.type===me)if(i.byteLength){var n=r.decryptdata,a="stats"in e;if(null==n||!n.encrypted||a){var s=this.tracks[r.level],o=this.vttCCs;o[r.cc]||(o[r.cc]={start:r.start,prevCC:this.prevCC,new:!0},this.prevCC=r.cc),s&&s.textCodec===ha?this._parseIMSC1(r,i):this._parseVTTs(e)}}else this.hls.trigger(S.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:r,error:new Error("Empty subtitle payload")})},e._parseIMSC1=function(t,e){var r=this,i=this.hls;ga(e,this.initPTS[t.cc],(function(e){r._appendCues(e,t.level),i.trigger(S.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:t})}),(function(e){w.log("Failed to parse IMSC1: "+e),i.trigger(S.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t,error:e})}))},e._parseVTTs=function(t){var e,r=this,i=t.frag,n=t.payload,a=this.initPTS,s=this.unparsedVttFrags,o=a.length-1;if(a[i.cc]||-1!==o){var l=this.hls;ua(null!=(e=i.initSegment)&&e.data?xt(i.initSegment.data,new Uint8Array(n)):n,this.initPTS[i.cc],this.vttCCs,i.cc,i.start,(function(t){r._appendCues(t,i.level),l.trigger(S.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:i})}),(function(e){var a="Missing initPTS for VTT MPEGTS"===e.message;a?s.push(t):r._fallbackToIMSC1(i,n),w.log("Failed to parse VTT cue: "+e),a&&o>i.cc||l.trigger(S.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:i,error:e})}))}else s.push(t)},e._fallbackToIMSC1=function(t,e){var r=this,i=this.tracks[t.level];i.textCodec||ga(e,this.initPTS[t.cc],(function(){i.textCodec=ha,r._parseIMSC1(t,e)}),(function(){i.textCodec="wvtt"}))},e._appendCues=function(t,e){var r=this.hls;if(this.config.renderTextTracksNatively){var i=this.textTracks[e];if(!i||"disabled"===i.mode)return;t.forEach((function(t){return Se(i,t)}))}else{var n=this.tracks[e];if(!n)return;var a=n.default?"default":"subtitles"+e;r.trigger(S.CUES_PARSED,{type:"subtitles",cues:t,track:a})}},e.onFragDecrypted=function(t,e){e.frag.type===me&&this.onFragLoaded(S.FRAG_LOADED,e)},e.onSubtitleTracksCleared=function(){this.tracks=[],this.captionsTracks={}},e.onFragParsingUserdata=function(t,e){var r=this.cea608Parser1,i=this.cea608Parser2;if(this.enabled&&r&&i){var n=e.frag,a=e.samples;if(n.type!==ge||"NONE"!==this.closedCaptionsForLevel(n))for(var s=0;s<a.length;s++){var o=a[s].bytes;if(o){var l=this.extractCea608Data(o);r.addData(a[s].pts,l[0]),i.addData(a[s].pts,l[1])}}}},e.onBufferFlushing=function(t,e){var r=e.startOffset,i=e.endOffset,n=e.endOffsetSubtitles,a=e.type,s=this.media;if(s&&!(s.currentTime<i)){if(!a||"video"===a){var o=this.captionsTracks;Object.keys(o).forEach((function(t){return Re(o[t],r,i)}))}if(this.config.renderTextTracksNatively&&0===r&&void 0!==n){var l=this.textTracks;Object.keys(l).forEach((function(t){return Re(l[t],r,n)}))}}},e.extractCea608Data=function(t){for(var e=[[],[]],r=31&t[0],i=2,n=0;n<r;n++){var a=t[i++],s=127&t[i++],o=127&t[i++];if((0!==s||0!==o)&&0!=(4&a)){var l=3&a;0!==l&&1!==l||(e[l].push(s),e[l].push(o))}}return e},t}();function La(t,e){return!!t&&t.label===e.name&&!(t.textTrack1||t.textTrack2)}var Ra=function(){function t(t){this.hls=void 0,this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.clientRect=void 0,this.streamController=void 0,this.hls=t,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}var e=t.prototype;return e.setStreamController=function(t){this.streamController=t},e.destroy=function(){this.unregisterListener(),this.hls.config.capLevelToPlayerSize&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null},e.registerListeners=function(){var t=this.hls;t.on(S.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),t.on(S.MEDIA_ATTACHING,this.onMediaAttaching,this),t.on(S.MANIFEST_PARSED,this.onManifestParsed,this),t.on(S.BUFFER_CODECS,this.onBufferCodecs,this),t.on(S.MEDIA_DETACHING,this.onMediaDetaching,this)},e.unregisterListener=function(){var t=this.hls;t.off(S.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),t.off(S.MEDIA_ATTACHING,this.onMediaAttaching,this),t.off(S.MANIFEST_PARSED,this.onManifestParsed,this),t.off(S.BUFFER_CODECS,this.onBufferCodecs,this),t.off(S.MEDIA_DETACHING,this.onMediaDetaching,this)},e.onFpsDropLevelCapping=function(t,e){var r=this.hls.levels[e.droppedLevel];this.isLevelAllowed(r)&&this.restrictedLevels.push({bitrate:r.bitrate,height:r.height,width:r.width})},e.onMediaAttaching=function(t,e){this.media=e.media instanceof HTMLVideoElement?e.media:null,this.clientRect=null},e.onManifestParsed=function(t,e){var r=this.hls;this.restrictedLevels=[],this.firstLevel=e.firstLevel,r.config.capLevelToPlayerSize&&e.video&&this.startCapping()},e.onBufferCodecs=function(t,e){this.hls.config.capLevelToPlayerSize&&e.video&&this.startCapping()},e.onMediaDetaching=function(){this.stopCapping()},e.detectPlayerSize=function(){if(this.media&&this.mediaHeight>0&&this.mediaWidth>0){var t=this.hls.levels;if(t.length){var e=this.hls;e.autoLevelCapping=this.getMaxLevel(t.length-1),e.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=e.autoLevelCapping}}},e.getMaxLevel=function(e){var r=this,i=this.hls.levels;if(!i.length)return-1;var n=i.filter((function(t,i){return r.isLevelAllowed(t)&&i<=e}));return this.clientRect=null,t.getMaxLevelByMediaSize(n,this.mediaWidth,this.mediaHeight)},e.startCapping=function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},e.stopCapping=function(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)},e.getDimensions=function(){if(this.clientRect)return this.clientRect;var t=this.media,e={width:0,height:0};if(t){var r=t.getBoundingClientRect();e.width=r.width,e.height=r.height,e.width||e.height||(e.width=r.right-r.left||t.width||0,e.height=r.bottom-r.top||t.height||0)}return this.clientRect=e,e},e.isLevelAllowed=function(t){return!this.restrictedLevels.some((function(e){return t.bitrate===e.bitrate&&t.width===e.width&&t.height===e.height}))},t.getMaxLevelByMediaSize=function(t,e,r){if(null==t||!t.length)return-1;for(var i,n,a=t.length-1,s=0;s<t.length;s+=1){var o=t[s];if((o.width>=e||o.height>=r)&&(i=o,!(n=t[s+1])||i.width!==n.width||i.height!==n.height)){a=s;break}}return a},a(t,[{key:"mediaWidth",get:function(){return this.getDimensions().width*this.contentScaleFactor}},{key:"mediaHeight",get:function(){return this.getDimensions().height*this.contentScaleFactor}},{key:"contentScaleFactor",get:function(){var t=1;if(!this.hls.config.ignoreDevicePixelRatio)try{t=self.devicePixelRatio}catch(t){}return t}}]),t}(),Aa=function(){function t(t){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=t,this.registerListeners()}var e=t.prototype;return e.setStreamController=function(t){this.streamController=t},e.registerListeners=function(){this.hls.on(S.MEDIA_ATTACHING,this.onMediaAttaching,this)},e.unregisterListeners=function(){this.hls.off(S.MEDIA_ATTACHING,this.onMediaAttaching,this)},e.destroy=function(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null},e.onMediaAttaching=function(t,e){var r=this.hls.config;if(r.capLevelOnFPSDrop){var i=e.media instanceof self.HTMLVideoElement?e.media:null;this.media=i,i&&"function"==typeof i.getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),r.fpsDroppedMonitoringPeriod)}},e.checkFPS=function(t,e,r){var i=performance.now();if(e){if(this.lastTime){var n=i-this.lastTime,a=r-this.lastDroppedFrames,s=e-this.lastDecodedFrames,o=1e3*a/n,l=this.hls;if(l.trigger(S.FPS_DROP,{currentDropped:a,currentDecoded:s,totalDroppedFrames:r}),o>0&&a>l.config.fpsDroppedMonitoringThreshold*s){var u=l.currentLevel;w.warn("drop FPS ratio greater than max allowed value for currentLevel: "+u),u>0&&(-1===l.autoLevelCapping||l.autoLevelCapping>=u)&&(u-=1,l.trigger(S.FPS_DROP_LEVEL_CAPPING,{level:u,droppedLevel:l.currentLevel}),l.autoLevelCapping=u,this.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=e}},e.checkFPSInterval=function(){var t=this.media;if(t)if(this.isVideoPlaybackQualityAvailable){var e=t.getVideoPlaybackQuality();this.checkFPS(t,e.totalVideoFrames,e.droppedVideoFrames)}else this.checkFPS(t,t.webkitDecodedFrameCount,t.webkitDroppedFrameCount)},t}(),ka="[eme]",ba=function(){function t(e){this.hls=void 0,this.config=void 0,this.media=null,this.keyFormatPromise=null,this.keySystemAccessPromises={},this._requestLicenseFailureCount=0,this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},this.setMediaKeysQueue=t.CDMCleanupPromise?[t.CDMCleanupPromise]:[],this.onMediaEncrypted=this._onMediaEncrypted.bind(this),this.onWaitingForKey=this._onWaitingForKey.bind(this),this.debug=w.debug.bind(w,ka),this.log=w.log.bind(w,ka),this.warn=w.warn.bind(w,ka),this.error=w.error.bind(w,ka),this.hls=e,this.config=e.config,this.registerListeners()}var e=t.prototype;return e.destroy=function(){this.unregisterListeners(),this.onMediaDetached();var t=this.config;t.requestMediaKeySystemAccessFunc=null,t.licenseXhrSetup=t.licenseResponseCallback=void 0,t.drmSystems=t.drmSystemOptions={},this.hls=this.onMediaEncrypted=this.onWaitingForKey=this.keyIdToKeySessionPromise=null,this.config=null},e.registerListeners=function(){this.hls.on(S.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(S.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(S.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(S.MANIFEST_LOADED,this.onManifestLoaded,this)},e.unregisterListeners=function(){this.hls.off(S.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(S.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(S.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(S.MANIFEST_LOADED,this.onManifestLoaded,this)},e.getLicenseServerUrl=function(t){var e=this.config,r=e.drmSystems,i=e.widevineLicenseUrl,n=r[t];if(n)return n.licenseUrl;if(t===j.WIDEVINE&&i)return i;throw new Error('no license server URL configured for key-system "'+t+'"')},e.getServerCertificateUrl=function(t){var e=this.config.drmSystems[t];if(e)return e.serverCertificateUrl;this.log('No Server Certificate in config.drmSystems["'+t+'"]')},e.attemptKeySystemAccess=function(t){var e=this,r=this.hls.levels,i=function(t,e,r){return!!t&&r.indexOf(t)===e},n=r.map((function(t){return t.audioCodec})).filter(i),a=r.map((function(t){return t.videoCodec})).filter(i);return n.length+a.length===0&&a.push("avc1.42e01e"),new Promise((function(r,i){!function t(s){var o=s.shift();e.getMediaKeysPromise(o,n,a).then((function(t){return r({keySystem:o,mediaKeys:t})})).catch((function(e){s.length?t(s):i(e instanceof Da?e:new Da({type:L.KEY_SYSTEM_ERROR,details:R.KEY_SYSTEM_NO_ACCESS,error:e,fatal:!0},e.message))}))}(t)}))},e.requestMediaKeySystemAccess=function(t,e){var r=this.config.requestMediaKeySystemAccessFunc;if("function"!=typeof r){var i="Configured requestMediaKeySystemAccess is not a function "+r;return null===et&&"http:"===self.location.protocol&&(i="navigator.requestMediaKeySystemAccess is not available over insecure protocol "+location.protocol),Promise.reject(new Error(i))}return r(t,e)},e.getMediaKeysPromise=function(t,e,r){var i=this,n=function(t,e,r,i){var n;switch(t){case j.FAIRPLAY:n=["cenc","sinf"];break;case j.WIDEVINE:case j.PLAYREADY:n=["cenc"];break;case j.CLEARKEY:n=["cenc","keyids"];break;default:throw new Error("Unknown key-system: "+t)}return function(t,e,r,i){return[{initDataTypes:t,persistentState:i.persistentState||"not-allowed",distinctiveIdentifier:i.distinctiveIdentifier||"not-allowed",sessionTypes:i.sessionTypes||[i.sessionType||"temporary"],audioCapabilities:e.map((function(t){return{contentType:'audio/mp4; codecs="'+t+'"',robustness:i.audioRobustness||"",encryptionScheme:i.audioEncryptionScheme||null}})),videoCapabilities:r.map((function(t){return{contentType:'video/mp4; codecs="'+t+'"',robustness:i.videoRobustness||"",encryptionScheme:i.videoEncryptionScheme||null}}))}]}(n,e,r,i)}(t,e,r,this.config.drmSystemOptions),a=this.keySystemAccessPromises[t],s=null==a?void 0:a.keySystemAccess;if(!s){this.log('Requesting encrypted media "'+t+'" key-system access with config: '+JSON.stringify(n)),s=this.requestMediaKeySystemAccess(t,n);var o=this.keySystemAccessPromises[t]={keySystemAccess:s};return s.catch((function(e){i.log('Failed to obtain access to key-system "'+t+'": '+e)})),s.then((function(e){i.log('Access for key-system "'+e.keySystem+'" obtained');var r=i.fetchServerCertificate(t);return i.log('Create media-keys for "'+t+'"'),o.mediaKeys=e.createMediaKeys().then((function(e){return i.log('Media-keys created for "'+t+'"'),r.then((function(r){return r?i.setMediaKeysServerCertificate(e,t,r):e}))})),o.mediaKeys.catch((function(e){i.error('Failed to create media-keys for "'+t+'"}: '+e)})),o.mediaKeys}))}return s.then((function(){return a.mediaKeys}))},e.createMediaKeySessionContext=function(t){var e=t.decryptdata,r=t.keySystem,i=t.mediaKeys;this.log('Creating key-system session "'+r+'" keyId: '+Tt(e.keyId||[]));var n=i.createSession(),a={decryptdata:e,keySystem:r,mediaKeys:i,mediaKeysSession:n,keyStatus:"status-pending"};return this.mediaKeySessions.push(a),a},e.renewKeySession=function(t){var e=t.decryptdata;if(e.pssh){var r=this.createMediaKeySessionContext(t),i=this.getKeyIdString(e);this.keyIdToKeySessionPromise[i]=this.generateRequestWithPreferredKeySession(r,"cenc",e.pssh,"expired")}else this.warn("Could not renew expired session. Missing pssh initData.");this.removeSession(t)},e.getKeyIdString=function(t){if(!t)throw new Error("Could not read keyId of undefined decryptdata");if(null===t.keyId)throw new Error("keyId is null");return Tt(t.keyId)},e.updateKeySession=function(t,e){var r,i=t.mediaKeysSession;return this.log('Updating key-session "'+i.sessionId+'" for keyID '+Tt((null==(r=t.decryptdata)?void 0:r.keyId)||[])+"\n      } (data length: "+(e?e.byteLength:e)+")"),i.update(e)},e.selectKeySystemFormat=function(t){var e=Object.keys(t.levelkeys||{});return this.keyFormatPromise||(this.log("Selecting key-system from fragment (sn: "+t.sn+" "+t.type+": "+t.level+") key formats "+e.join(", ")),this.keyFormatPromise=this.getKeyFormatPromise(e)),this.keyFormatPromise},e.getKeyFormatPromise=function(t){var e=this;return new Promise((function(r,i){var n=tt(e.config),a=t.map($).filter((function(t){return!!t&&-1!==n.indexOf(t)}));return e.getKeySystemSelectionPromise(a).then((function(t){var e=t.keySystem,n=Z(e);n?r(n):i(new Error('Unable to find format for key-system "'+e+'"'))})).catch(i)}))},e.loadKey=function(t){var e=this,r=t.keyInfo.decryptdata,i=this.getKeyIdString(r),n="(keyId: "+i+' format: "'+r.keyFormat+'" method: '+r.method+" uri: "+r.uri+")";this.log("Starting session for key "+n);var a=this.keyIdToKeySessionPromise[i];return a||(a=this.keyIdToKeySessionPromise[i]=this.getKeySystemForKeyPromise(r).then((function(i){var a=i.keySystem,s=i.mediaKeys;return e.throwIfDestroyed(),e.log("Handle encrypted media sn: "+t.frag.sn+" "+t.frag.type+": "+t.frag.level+" using key "+n),e.attemptSetMediaKeys(a,s).then((function(){e.throwIfDestroyed();var t=e.createMediaKeySessionContext({keySystem:a,mediaKeys:s,decryptdata:r});return e.generateRequestWithPreferredKeySession(t,"cenc",r.pssh,"playlist-key")}))}))).catch((function(t){return e.handleError(t)})),a},e.throwIfDestroyed=function(t){if(!this.hls)throw new Error("invalid state")},e.handleError=function(t){this.hls&&(this.error(t.message),t instanceof Da?this.hls.trigger(S.ERROR,t.data):this.hls.trigger(S.ERROR,{type:L.KEY_SYSTEM_ERROR,details:R.KEY_SYSTEM_NO_KEYS,error:t,fatal:!0}))},e.getKeySystemForKeyPromise=function(t){var e=this.getKeyIdString(t),r=this.keyIdToKeySessionPromise[e];if(!r){var i=$(t.keyFormat),n=i?[i]:tt(this.config);return this.attemptKeySystemAccess(n)}return r},e.getKeySystemSelectionPromise=function(t){if(t.length||(t=tt(this.config)),0===t.length)throw new Da({type:L.KEY_SYSTEM_ERROR,details:R.KEY_SYSTEM_NO_CONFIGURED_LICENSE,fatal:!0},"Missing key-system license configuration options "+JSON.stringify({drmSystems:this.config.drmSystems}));return this.attemptKeySystemAccess(t)},e._onMediaEncrypted=function(t){var e=this,r=t.initDataType,i=t.initData;if(this.debug('"'+t.type+'" event: init data type: "'+r+'"'),null!==i){var n,a;if("sinf"===r&&this.config.drmSystems[j.FAIRPLAY]){var s=Rt(new Uint8Array(i));try{var o=V(JSON.parse(s).sinf),l=_t(new Uint8Array(o));if(!l)return;n=l.subarray(8,24),a=j.FAIRPLAY}catch(t){return void this.warn('Failed to parse sinf "encrypted" event message initData')}}else{var u=function(t){if(!(t instanceof ArrayBuffer)||t.byteLength<32)return null;var e={version:0,systemId:"",kids:null,data:null},r=new DataView(t),i=r.getUint32(0);if(t.byteLength!==i&&i>44)return null;if(1886614376!==r.getUint32(4))return null;if(e.version=r.getUint32(8)>>>24,e.version>1)return null;e.systemId=Tt(new Uint8Array(t,12,16));var n=r.getUint32(28);if(0===e.version){if(i-32<n)return null;e.data=new Uint8Array(t,32,n)}else if(1===e.version){e.kids=[];for(var a=0;a<n;a++)e.kids.push(new Uint8Array(t,32+16*a,16))}return e}(i);if(null===u)return;0===u.version&&u.systemId===J&&u.data&&(n=u.data.subarray(8,24)),a=function(t){if(t===J)return j.WIDEVINE}(u.systemId)}if(a&&n){for(var h=Tt(n),d=this.keyIdToKeySessionPromise,c=this.mediaKeySessions,f=d[h],g=function(){var t=c[v],a=t.decryptdata;if(a.pssh||!a.keyId)return"continue";var s=Tt(a.keyId);return h===s||-1!==a.uri.replace(/-/g,"").indexOf(h)?(f=d[s],delete d[s],a.pssh=new Uint8Array(i),a.keyId=n,f=d[h]=f.then((function(){return e.generateRequestWithPreferredKeySession(t,r,i,"encrypted-event-key-match")})),"break"):void 0},v=0;v<c.length;v++){var m=g();if("continue"!==m&&"break"===m)break}f||(f=d[h]=this.getKeySystemSelectionPromise([a]).then((function(t){var a,s=t.keySystem,o=t.mediaKeys;e.throwIfDestroyed();var l=new Gt("ISO-23001-7",h,null!=(a=Z(s))?a:"");return l.pssh=new Uint8Array(i),l.keyId=n,e.attemptSetMediaKeys(s,o).then((function(){e.throwIfDestroyed();var t=e.createMediaKeySessionContext({decryptdata:l,keySystem:s,mediaKeys:o});return e.generateRequestWithPreferredKeySession(t,r,i,"encrypted-event-no-match")}))}))),f.catch((function(t){return e.handleError(t)}))}}},e._onWaitingForKey=function(t){this.log('"'+t.type+'" event')},e.attemptSetMediaKeys=function(t,e){var r=this,i=this.setMediaKeysQueue.slice();this.log('Setting media-keys for "'+t+'"');var n=Promise.all(i).then((function(){if(!r.media)throw new Error("Attempted to set mediaKeys without media element attached");return r.media.setMediaKeys(e)}));return this.setMediaKeysQueue.push(n),n.then((function(){r.log('Media-keys set for "'+t+'"'),i.push(n),r.setMediaKeysQueue=r.setMediaKeysQueue.filter((function(t){return-1===i.indexOf(t)}))}))},e.generateRequestWithPreferredKeySession=function(t,e,r,i){var n,a,s=this,o=null==(n=this.config.drmSystems)||null==(a=n[t.keySystem])?void 0:a.generateRequest;if(o)try{var l=o.call(this.hls,e,r,t);if(!l)throw new Error("Invalid response from configured generateRequest filter");e=l.initDataType,r=t.decryptdata.pssh=l.initData?new Uint8Array(l.initData):null}catch(t){var u;if(this.warn(t.message),null!=(u=this.hls)&&u.config.debug)throw t}if(null===r)return this.log('Skipping key-session request for "'+i+'" (no initData)'),Promise.resolve(t);var h=this.getKeyIdString(t.decryptdata);this.log('Generating key-session request for "'+i+'": '+h+" (init data type: "+e+" length: "+(r?r.byteLength:null)+")");var d=new an;t.mediaKeysSession.onmessage=function(e){var r=t.mediaKeysSession;if(r){var i=e.messageType,n=e.message;s.log('"'+i+'" message event for session "'+r.sessionId+'" message size: '+n.byteLength),"license-request"===i||"license-renewal"===i?s.renewLicense(t,n).catch((function(t){s.handleError(t),d.emit("error",t)})):"license-release"===i?t.keySystem===j.FAIRPLAY&&(s.updateKeySession(t,W("acknowledged")),s.removeSession(t)):s.warn('unhandled media key message type "'+i+'"')}else d.emit("error",new Error("invalid state"))},t.mediaKeysSession.onkeystatuseschange=function(e){if(t.mediaKeysSession){s.onKeyStatusChange(t);var r=t.keyStatus;d.emit("keyStatus",r),"expired"===r&&(s.warn(t.keySystem+" expired for key "+h),s.renewKeySession(t))}else d.emit("error",new Error("invalid state"))};var c=new Promise((function(t,e){d.on("error",e),d.on("keyStatus",(function(r){r.startsWith("usable")?t():"output-restricted"===r?e(new Da({type:L.KEY_SYSTEM_ERROR,details:R.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,fatal:!1},"HDCP level output restricted")):"internal-error"===r?e(new Da({type:L.KEY_SYSTEM_ERROR,details:R.KEY_SYSTEM_STATUS_INTERNAL_ERROR,fatal:!0},'key status changed to "'+r+'"')):"expired"===r?e(new Error("key expired while generating request")):s.warn('unhandled key status change "'+r+'"')}))}));return t.mediaKeysSession.generateRequest(e,r).then((function(){var e;s.log('Request generated for key-session "'+(null==(e=t.mediaKeysSession)?void 0:e.sessionId)+'" keyId: '+h)})).catch((function(t){throw new Da({type:L.KEY_SYSTEM_ERROR,details:R.KEY_SYSTEM_NO_SESSION,error:t,fatal:!1},"Error generating key-session request: "+t)})).then((function(){return c})).catch((function(e){throw d.removeAllListeners(),s.removeSession(t),e})).then((function(){return d.removeAllListeners(),t}))},e.onKeyStatusChange=function(t){var e=this;t.mediaKeysSession.keyStatuses.forEach((function(r,i){e.log('key status change "'+r+'" for keyStatuses keyId: '+Tt("buffer"in i?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i))+" session keyId: "+Tt(new Uint8Array(t.decryptdata.keyId||[]))+" uri: "+t.decryptdata.uri),t.keyStatus=r}))},e.fetchServerCertificate=function(t){var e=this.config,r=new(0,e.loader)(e),n=this.getServerCertificateUrl(t);return n?(this.log('Fetching serverCertificate for "'+t+'"'),new Promise((function(a,s){var o={responseType:"arraybuffer",url:n},l=e.certLoadPolicy.default,u={loadPolicy:l,timeout:l.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},h={onSuccess:function(t,e,r,i){a(t.data)},onError:function(e,r,a,l){s(new Da({type:L.KEY_SYSTEM_ERROR,details:R.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:a,response:i({url:o.url,data:void 0},e)},'"'+t+'" certificate request failed ('+n+"). Status: "+e.code+" ("+e.text+")"))},onTimeout:function(e,r,i){s(new Da({type:L.KEY_SYSTEM_ERROR,details:R.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:i,response:{url:o.url,data:void 0}},'"'+t+'" certificate request timed out ('+n+")"))},onAbort:function(t,e,r){s(new Error("aborted"))}};r.load(o,u,h)}))):Promise.resolve()},e.setMediaKeysServerCertificate=function(t,e,r){var i=this;return new Promise((function(n,a){t.setServerCertificate(r).then((function(a){i.log("setServerCertificate "+(a?"success":"not supported by CDM")+" ("+(null==r?void 0:r.byteLength)+') on "'+e+'"'),n(t)})).catch((function(t){a(new Da({type:L.KEY_SYSTEM_ERROR,details:R.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,error:t,fatal:!0},t.message))}))}))},e.renewLicense=function(t,e){var r=this;return this.requestLicense(t,new Uint8Array(e)).then((function(e){return r.updateKeySession(t,new Uint8Array(e)).catch((function(t){throw new Da({type:L.KEY_SYSTEM_ERROR,details:R.KEY_SYSTEM_SESSION_UPDATE_FAILED,error:t,fatal:!0},t.message)}))}))},e.setupLicenseXHR=function(t,e,r,i){var n=this,a=this.config.licenseXhrSetup;return a?Promise.resolve().then((function(){if(!r.decryptdata)throw new Error("Key removed");return a.call(n.hls,t,e,r,i)})).catch((function(s){if(!r.decryptdata)throw s;return t.open("POST",e,!0),a.call(n.hls,t,e,r,i)})).then((function(r){return t.readyState||t.open("POST",e,!0),{xhr:t,licenseChallenge:r||i}})):(t.open("POST",e,!0),Promise.resolve({xhr:t,licenseChallenge:i}))},e.requestLicense=function(t,e){var r=this,i=this.config.keyLoadPolicy.default;return new Promise((function(n,a){var s=r.getLicenseServerUrl(t.keySystem);r.log("Sending license request to URL: "+s);var o=new XMLHttpRequest;o.responseType="arraybuffer",o.onreadystatechange=function(){if(!r.hls||!t.mediaKeysSession)return a(new Error("invalid state"));if(4===o.readyState)if(200===o.status){r._requestLicenseFailureCount=0;var l=o.response;r.log("License received "+(l instanceof ArrayBuffer?l.byteLength:l));var u=r.config.licenseResponseCallback;if(u)try{l=u.call(r.hls,o,s,t)}catch(t){r.error(t)}n(l)}else{var h=i.errorRetry,d=h?h.maxNumRetry:0;if(r._requestLicenseFailureCount++,r._requestLicenseFailureCount>d||o.status>=400&&o.status<500)a(new Da({type:L.KEY_SYSTEM_ERROR,details:R.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0,networkDetails:o,response:{url:s,data:void 0,code:o.status,text:o.statusText}},"License Request XHR failed ("+s+"). Status: "+o.status+" ("+o.statusText+")"));else{var c=d-r._requestLicenseFailureCount+1;r.warn("Retrying license request, "+c+" attempts left"),r.requestLicense(t,e).then(n,a)}}},t.licenseXhr&&t.licenseXhr.readyState!==XMLHttpRequest.DONE&&t.licenseXhr.abort(),t.licenseXhr=o,r.setupLicenseXHR(o,s,t,e).then((function(t){var e=t.xhr,r=t.licenseChallenge;e.send(r)}))}))},e.onMediaAttached=function(t,e){if(this.config.emeEnabled){var r=e.media;this.media=r,r.addEventListener("encrypted",this.onMediaEncrypted),r.addEventListener("waitingforkey",this.onWaitingForKey)}},e.onMediaDetached=function(){var e=this,r=this.media,i=this.mediaKeySessions;r&&(r.removeEventListener("encrypted",this.onMediaEncrypted),r.removeEventListener("waitingforkey",this.onWaitingForKey),this.media=null),this._requestLicenseFailureCount=0,this.setMediaKeysQueue=[],this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},Gt.clearKeyUriToKeyIdMap();var n=i.length;t.CDMCleanupPromise=Promise.all(i.map((function(t){return e.removeSession(t)})).concat(null==r?void 0:r.setMediaKeys(null).catch((function(t){e.log("Could not clear media keys: "+t+". media.src: "+(null==r?void 0:r.src))})))).then((function(){n&&(e.log("finished closing key sessions and clearing media keys"),i.length=0)})).catch((function(t){e.log("Could not close sessions and clear media keys: "+t+". media.src: "+(null==r?void 0:r.src))}))},e.onManifestLoading=function(){this.keyFormatPromise=null},e.onManifestLoaded=function(t,e){var r=e.sessionKeys;if(r&&this.config.emeEnabled&&!this.keyFormatPromise){var i=r.reduce((function(t,e){return-1===t.indexOf(e.keyFormat)&&t.push(e.keyFormat),t}),[]);this.log("Selecting key-system from session-keys "+i.join(", ")),this.keyFormatPromise=this.getKeyFormatPromise(i)}},e.removeSession=function(t){var e=this,r=t.mediaKeysSession,i=t.licenseXhr;if(r){this.log("Remove licenses and keys and close session "+r.sessionId),r.onmessage=null,r.onkeystatuseschange=null,i&&i.readyState!==XMLHttpRequest.DONE&&i.abort(),t.mediaKeysSession=t.decryptdata=t.licenseXhr=void 0;var n=this.mediaKeySessions.indexOf(t);return n>-1&&this.mediaKeySessions.splice(n,1),r.remove().catch((function(t){e.log("Could not remove session: "+t)})).then((function(){return r.close()})).catch((function(t){e.log("Could not close session: "+t)}))}},t}();ba.CDMCleanupPromise=void 0;var Da=function(t){function e(e,r){var i;return(i=t.call(this,r)||this).data=void 0,e.error||(e.error=new Error(r)),i.data=e,e.err=e.error,i}return l(e,t),e}(f(Error)),Ia="m",wa="a",Ca="v",_a="av",Pa="i",xa="tt",Fa=function(){function t(e){var r=this;this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=function(){r.initialized&&(r.starved=!0),r.buffering=!0},this.onPlaying=function(){r.initialized||(r.initialized=!0),r.buffering=!1},this.applyPlaylistData=function(t){try{r.apply(t,{ot:Ia,su:!r.initialized})}catch(t){w.warn("Could not generate manifest CMCD data.",t)}},this.applyFragmentData=function(t){try{var e=t.frag,i=r.hls.levels[e.level],n=r.getObjectType(e),a={d:1e3*e.duration,ot:n};n!==Ca&&n!==wa&&n!=_a||(a.br=i.bitrate/1e3,a.tb=r.getTopBandwidth(n)/1e3,a.bl=r.getBufferLength(n)),r.apply(t,a)}catch(t){w.warn("Could not generate segment CMCD data.",t)}},this.hls=e;var i=this.config=e.config,n=i.cmcd;null!=n&&(i.pLoader=this.createPlaylistLoader(),i.fLoader=this.createFragmentLoader(),this.sid=n.sessionId||t.uuid(),this.cid=n.contentId,this.useHeaders=!0===n.useHeaders,this.registerListeners())}var e=t.prototype;return e.registerListeners=function(){var t=this.hls;t.on(S.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(S.MEDIA_DETACHED,this.onMediaDetached,this),t.on(S.BUFFER_CREATED,this.onBufferCreated,this)},e.unregisterListeners=function(){var t=this.hls;t.off(S.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(S.MEDIA_DETACHED,this.onMediaDetached,this),t.off(S.BUFFER_CREATED,this.onBufferCreated,this)},e.destroy=function(){this.unregisterListeners(),this.onMediaDetached(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null},e.onMediaAttached=function(t,e){this.media=e.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)},e.onMediaDetached=function(){this.media&&(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)},e.onBufferCreated=function(t,e){var r,i;this.audioBuffer=null==(r=e.tracks.audio)?void 0:r.buffer,this.videoBuffer=null==(i=e.tracks.video)?void 0:i.buffer},e.createData=function(){var t;return{v:1,sf:"h",sid:this.sid,cid:this.cid,pr:null==(t=this.media)?void 0:t.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}},e.apply=function(e,r){void 0===r&&(r={}),o(r,this.createData());var i=r.ot===Pa||r.ot===Ca||r.ot===_a;if(this.starved&&i&&(r.bs=!0,r.su=!0,this.starved=!1),null==r.su&&(r.su=this.buffering),this.useHeaders){var n=t.toHeaders(r);if(!Object.keys(n).length)return;e.headers||(e.headers={}),o(e.headers,n)}else{var a=t.toQuery(r);if(!a)return;e.url=t.appendQueryToUri(e.url,a)}},e.getObjectType=function(t){var e=t.type;return"subtitle"===e?xa:"initSegment"===t.sn?Pa:"audio"===e?wa:"main"===e?this.hls.audioTracks.length?Ca:_a:void 0},e.getTopBandwidth=function(t){var e,r=0,i=this.hls;if(t===wa)e=i.audioTracks;else{var n=i.maxAutoLevel,a=n>-1?n+1:i.levels.length;e=i.levels.slice(0,a)}for(var s,o=v(e);!(s=o()).done;){var l=s.value;l.bitrate>r&&(r=l.bitrate)}return r>0?r:NaN},e.getBufferLength=function(t){var e=this.hls.media,r=t===wa?this.audioBuffer:this.videoBuffer;return r&&e?1e3*Ir.bufferInfo(r,e.currentTime,this.config.maxBufferHole).len:NaN},e.createPlaylistLoader=function(){var t=this.config.pLoader,e=this.applyPlaylistData,r=t||this.config.loader;return function(){function t(t){this.loader=void 0,this.loader=new r(t)}var i=t.prototype;return i.destroy=function(){this.loader.destroy()},i.abort=function(){this.loader.abort()},i.load=function(t,r,i){e(t),this.loader.load(t,r,i)},a(t,[{key:"stats",get:function(){return this.loader.stats}},{key:"context",get:function(){return this.loader.context}}]),t}()},e.createFragmentLoader=function(){var t=this.config.fLoader,e=this.applyFragmentData,r=t||this.config.loader;return function(){function t(t){this.loader=void 0,this.loader=new r(t)}var i=t.prototype;return i.destroy=function(){this.loader.destroy()},i.abort=function(){this.loader.abort()},i.load=function(t,r,i){e(t),this.loader.load(t,r,i)},a(t,[{key:"stats",get:function(){return this.loader.stats}},{key:"context",get:function(){return this.loader.context}}]),t}()},t.uuid=function(){var t=URL.createObjectURL(new Blob),e=t.toString();return URL.revokeObjectURL(t),e.slice(e.lastIndexOf("/")+1)},t.serialize=function(t){for(var e,r=[],i=function(t){return!Number.isNaN(t)&&null!=t&&""!==t&&!1!==t},n=function(t){return Math.round(t)},a=function(t){return 100*n(t/100)},s={br:n,d:n,bl:a,dl:a,mtp:a,nor:function(t){return encodeURIComponent(t)},rtp:a,tb:n},o=v(Object.keys(t||{}).sort());!(e=o()).done;){var l=e.value,u=t[l];if(i(u)&&!("v"===l&&1===u||"pr"==l&&1===u)){var h=s[l];h&&(u=h(u));var d=typeof u,c=void 0;c="ot"===l||"sf"===l||"st"===l?l+"="+u:"boolean"===d?l:"number"===d?l+"="+u:l+"="+JSON.stringify(u),r.push(c)}}return r.join(",")},t.toHeaders=function(e){for(var r={},i=["Object","Request","Session","Status"],n=[{},{},{},{}],a={br:0,d:0,ot:0,tb:0,bl:1,dl:1,mtp:1,nor:1,nrr:1,su:1,cid:2,pr:2,sf:2,sid:2,st:2,v:2,bs:3,rtp:3},s=0,o=Object.keys(e);s<o.length;s++){var l=o[s];n[null!=a[l]?a[l]:1][l]=e[l]}for(var u=0;u<n.length;u++){var h=t.serialize(n[u]);h&&(r["CMCD-"+i[u]]=h)}return r},t.toQuery=function(e){return"CMCD="+encodeURIComponent(t.serialize(e))},t.appendQueryToUri=function(t,e){if(!e)return t;var r=t.includes("?")?"&":"?";return""+t+r+e},t}(),Ma=function(){function t(t){this.hls=void 0,this.log=void 0,this.loader=null,this.uri=null,this.pathwayId=".",this.pathwayPriority=null,this.timeToLoad=300,this.reloadTimer=-1,this.updated=0,this.started=!1,this.enabled=!0,this.levels=null,this.audioTracks=null,this.subtitleTracks=null,this.penalizedPathways={},this.hls=t,this.log=w.log.bind(w,"[content-steering]:"),this.registerListeners()}var e=t.prototype;return e.registerListeners=function(){var t=this.hls;t.on(S.MANIFEST_LOADING,this.onManifestLoading,this),t.on(S.MANIFEST_LOADED,this.onManifestLoaded,this),t.on(S.MANIFEST_PARSED,this.onManifestParsed,this),t.on(S.ERROR,this.onError,this)},e.unregisterListeners=function(){var t=this.hls;t&&(t.off(S.MANIFEST_LOADING,this.onManifestLoading,this),t.off(S.MANIFEST_LOADED,this.onManifestLoaded,this),t.off(S.MANIFEST_PARSED,this.onManifestParsed,this),t.off(S.ERROR,this.onError,this))},e.startLoad=function(){if(this.started=!0,self.clearTimeout(this.reloadTimer),this.enabled&&this.uri)if(this.updated){var t=Math.max(1e3*this.timeToLoad-(performance.now()-this.updated),0);this.scheduleRefresh(this.uri,t)}else this.loadSteeringManifest(this.uri)},e.stopLoad=function(){this.started=!1,this.loader&&(this.loader.destroy(),this.loader=null),self.clearTimeout(this.reloadTimer)},e.destroy=function(){this.unregisterListeners(),this.stopLoad(),this.hls=null,this.levels=this.audioTracks=this.subtitleTracks=null},e.removeLevel=function(t){var e=this.levels;e&&(this.levels=e.filter((function(e){return e!==t})))},e.onManifestLoading=function(){this.stopLoad(),this.enabled=!0,this.timeToLoad=300,this.updated=0,this.uri=null,this.pathwayId=".",this.levels=this.audioTracks=this.subtitleTracks=null},e.onManifestLoaded=function(t,e){var r=e.contentSteering;null!==r&&(this.pathwayId=r.pathwayId,this.uri=r.uri,this.started&&this.startLoad())},e.onManifestParsed=function(t,e){this.audioTracks=e.audioTracks,this.subtitleTracks=e.subtitleTracks},e.onError=function(t,e){var r=e.errorAction;if((null==r?void 0:r.action)===ir&&r.flags===sr){var i=this.pathwayPriority,n=this.pathwayId;this.penalizedPathways[n]||(this.penalizedPathways[n]=performance.now()),!i&&this.levels&&(i=this.levels.reduce((function(t,e){return-1===t.indexOf(e.pathwayId)&&t.push(e.pathwayId),t}),[])),i&&i.length>1&&(this.updatePathwayPriority(i),r.resolved=this.pathwayId!==n)}},e.filterParsedLevels=function(t){this.levels=t;var e=this.getLevelsForPathway(this.pathwayId);if(0===e.length){var r=t[0].pathwayId;this.log("No levels found in Pathway "+this.pathwayId+'. Setting initial Pathway to "'+r+'"'),e=this.getLevelsForPathway(r),this.pathwayId=r}return e.length!==t.length?(this.log("Found "+e.length+"/"+t.length+' levels in Pathway "'+this.pathwayId+'"'),e):t},e.getLevelsForPathway=function(t){return null===this.levels?[]:this.levels.filter((function(e){return t===e.pathwayId}))},e.updatePathwayPriority=function(t){var e;this.pathwayPriority=t;var r=this.penalizedPathways,i=performance.now();Object.keys(r).forEach((function(t){i-r[t]>3e5&&delete r[t]}));for(var n=0;n<t.length;n++){var a=t[n];if(!r[a]){if(a===this.pathwayId)return;var s=this.hls.nextLoadLevel,o=this.hls.levels[s];if((e=this.getLevelsForPathway(a)).length>0){this.log('Setting Pathway to "'+a+'"'),this.pathwayId=a,this.hls.trigger(S.LEVELS_UPDATED,{levels:e});var l=this.hls.levels[s];o&&l&&this.levels&&(l.attrs["STABLE-VARIANT-ID"]!==o.attrs["STABLE-VARIANT-ID"]&&l.bitrate!==o.bitrate&&this.log("Unstable Pathways change from bitrate "+o.bitrate+" to "+l.bitrate),this.hls.nextLoadLevel=s);break}}}},e.clonePathways=function(t){var e=this,r=this.levels;if(r){var i={},n={};t.forEach((function(t){var a=t.ID,s=t["BASE-ID"],l=t["URI-REPLACEMENT"];if(!r.some((function(t){return t.pathwayId===a}))){var u=e.getLevelsForPathway(s).map((function(t){var e=o({},t);e.details=void 0,e.url=Na(t.uri,t.attrs["STABLE-VARIANT-ID"],"PER-VARIANT-URIS",l);var r=new P(t.attrs);r["PATHWAY-ID"]=a;var s=r.AUDIO&&r.AUDIO+"_clone_"+a,u=r.SUBTITLES&&r.SUBTITLES+"_clone_"+a;s&&(i[r.AUDIO]=s,r.AUDIO=s),u&&(n[r.SUBTITLES]=u,r.SUBTITLES=u),e.attrs=r;var h=new Ne(e);return dr(h,"audio",s),dr(h,"text",u),h}));r.push.apply(r,u),Oa(e.audioTracks,i,l,a),Oa(e.subtitleTracks,n,l,a)}}))}},e.loadSteeringManifest=function(t){var e,r=this,i=this.hls.config,n=i.loader;this.loader&&this.loader.destroy(),this.loader=new n(i);try{e=new self.URL(t)}catch(e){return this.enabled=!1,void this.log("Failed to parse Steering Manifest URI: "+t)}if("data:"!==e.protocol){var a=0|(this.hls.bandwidthEstimate||i.abrEwmaDefaultEstimate);e.searchParams.set("_HLS_pathway",this.pathwayId),e.searchParams.set("_HLS_throughput",""+a)}var s={responseType:"json",url:e.href},o=i.steeringManifestLoadPolicy.default,l=o.errorRetry||o.timeoutRetry||{},u={loadPolicy:o,timeout:o.maxLoadTimeMs,maxRetry:l.maxNumRetry||0,retryDelay:l.retryDelayMs||0,maxRetryDelay:l.maxRetryDelayMs||0},h={onSuccess:function(t,i,n,a){r.log('Loaded steering manifest: "'+e+'"');var s=t.data;if(1===s.VERSION){r.updated=performance.now(),r.timeToLoad=s.TTL;var o=s["RELOAD-URI"],l=s["PATHWAY-CLONES"],u=s["PATHWAY-PRIORITY"];if(o)try{r.uri=new self.URL(o,e).href}catch(t){return r.enabled=!1,void r.log("Failed to parse Steering Manifest RELOAD-URI: "+o)}r.scheduleRefresh(r.uri||n.url),l&&r.clonePathways(l),u&&r.updatePathwayPriority(u)}else r.log("Steering VERSION "+s.VERSION+" not supported!")},onError:function(t,e,i,n){if(r.log("Error loading steering manifest: "+t.code+" "+t.text+" ("+e.url+")"),r.stopLoad(),410===t.code)return r.enabled=!1,void r.log("Steering manifest "+e.url+" no longer available");var a=1e3*r.timeToLoad;if(429!==t.code)r.scheduleRefresh(r.uri||e.url,a);else{var s=r.loader;if("function"==typeof(null==s?void 0:s.getResponseHeader)){var o=s.getResponseHeader("Retry-After");o&&(a=1e3*parseFloat(o))}r.log("Steering manifest "+e.url+" rate limited")}},onTimeout:function(t,e,i){r.log("Timeout loading steering manifest ("+e.url+")"),r.scheduleRefresh(r.uri||e.url)}};this.log("Requesting steering manifest: "+e),this.loader.load(s,u,h)},e.scheduleRefresh=function(t,e){var r=this;void 0===e&&(e=1e3*this.timeToLoad),self.clearTimeout(this.reloadTimer),this.reloadTimer=self.setTimeout((function(){r.loadSteeringManifest(t)}),e)},t}();function Oa(t,e,r,i){t&&Object.keys(e).forEach((function(n){var a=t.filter((function(t){return t.groupId===n})).map((function(t){var a=o({},t);return a.details=void 0,a.attrs=new P(a.attrs),a.url=a.attrs.URI=Na(t.url,t.attrs["STABLE-RENDITION-ID"],"PER-RENDITION-URIS",r),a.groupId=a.attrs["GROUP-ID"]=e[n],a.attrs["PATHWAY-ID"]=i,a}));t.push.apply(t,a)}))}function Na(t,e,r,i){var n,a=i.HOST,s=i.PARAMS,o=i[r];e&&(n=null==o?void 0:o[e])&&(t=n);var l=new self.URL(t);return a&&!n&&(l.host=a),s&&Object.keys(s).sort().forEach((function(t){t&&l.searchParams.set(t,s[t])})),l.href}var Ua=/^age:\s*[\d.]+\s*$/im,Ba=function(){function t(t){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=void 0,this.loader=null,this.stats=void 0,this.xhrSetup=t&&t.xhrSetup||null,this.stats=new M,this.retryDelay=0}var e=t.prototype;return e.destroy=function(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null},e.abortInternal=function(){var t=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),t&&(t.onreadystatechange=null,t.onprogress=null,4!==t.readyState&&(this.stats.aborted=!0,t.abort()))},e.abort=function(){var t;this.abortInternal(),null!=(t=this.callbacks)&&t.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)},e.load=function(t,e,r){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=t,this.config=e,this.callbacks=r,this.loadInternal()},e.loadInternal=function(){var t=this,e=this.config,r=this.context;if(e){var i=this.loader=new self.XMLHttpRequest,n=this.stats;n.loading.first=0,n.loaded=0,n.aborted=!1;var a=this.xhrSetup;a?Promise.resolve().then((function(){if(!t.stats.aborted)return a(i,r.url)})).catch((function(t){return i.open("GET",r.url,!0),a(i,r.url)})).then((function(){t.stats.aborted||t.openAndSendXhr(i,r,e)})).catch((function(e){t.callbacks.onError({code:i.status,text:e.message},r,i,n)})):this.openAndSendXhr(i,r,e)}},e.openAndSendXhr=function(t,e,r){t.readyState||t.open("GET",e.url,!0);var i=this.context.headers,n=r.loadPolicy,a=n.maxTimeToFirstByteMs,s=n.maxLoadTimeMs;if(i)for(var o in i)t.setRequestHeader(o,i[o]);e.rangeEnd&&t.setRequestHeader("Range","bytes="+e.rangeStart+"-"+(e.rangeEnd-1)),t.onreadystatechange=this.readystatechange.bind(this),t.onprogress=this.loadprogress.bind(this),t.responseType=e.responseType,self.clearTimeout(this.requestTimeout),r.timeout=a&&E(a)?a:s,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),r.timeout),t.send()},e.readystatechange=function(){var t=this.context,e=this.loader,r=this.stats;if(t&&e){var i=e.readyState,n=this.config;if(!r.aborted&&i>=2&&(0===r.loading.first&&(r.loading.first=Math.max(self.performance.now(),r.loading.start),n.timeout!==n.loadPolicy.maxLoadTimeMs&&(self.clearTimeout(this.requestTimeout),n.timeout=n.loadPolicy.maxLoadTimeMs,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),n.loadPolicy.maxLoadTimeMs-(r.loading.first-r.loading.start)))),4===i)){self.clearTimeout(this.requestTimeout),e.onreadystatechange=null,e.onprogress=null;var a=e.status,s="text"!==e.responseType;if(a>=200&&a<300&&(s&&e.response||null!==e.responseText)){r.loading.end=Math.max(self.performance.now(),r.loading.first);var o=s?e.response:e.responseText,l="arraybuffer"===e.responseType?o.byteLength:o.length;if(r.loaded=r.total=l,r.bwEstimate=8e3*r.total/(r.loading.end-r.loading.first),!this.callbacks)return;var u=this.callbacks.onProgress;if(u&&u(r,t,o,e),!this.callbacks)return;var h={url:e.responseURL,data:o,code:a};this.callbacks.onSuccess(h,r,t,e)}else{var d=n.loadPolicy.errorRetry;ze(d,r.retry,!1,a)?this.retry(d):(w.error(a+" while loading "+t.url),this.callbacks.onError({code:a,text:e.statusText},t,e,r))}}}},e.loadtimeout=function(){var t,e=null==(t=this.config)?void 0:t.loadPolicy.timeoutRetry;if(ze(e,this.stats.retry,!0))this.retry(e);else{w.warn("timeout while loading "+this.context.url);var r=this.callbacks;r&&(this.abortInternal(),r.onTimeout(this.stats,this.context,this.loader))}},e.retry=function(t){var e=this.context,r=this.stats;this.retryDelay=qe(t,r.retry),r.retry++,w.warn((status?"HTTP Status "+status:"Timeout")+" while loading "+e.url+", retrying "+r.retry+"/"+t.maxNumRetry+" in "+this.retryDelay+"ms"),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay)},e.loadprogress=function(t){var e=this.stats;e.loaded=t.loaded,t.lengthComputable&&(e.total=t.total)},e.getCacheAge=function(){var t=null;if(this.loader&&Ua.test(this.loader.getAllResponseHeaders())){var e=this.loader.getResponseHeader("age");t=e?parseFloat(e):null}return t},e.getResponseHeader=function(t){return this.loader&&new RegExp("^"+t+":\\s*[\\d.]+\\s*$","im").test(this.loader.getAllResponseHeaders())?this.loader.getResponseHeader(t):null},t}(),Ga=/(\d+)-(\d+)\/(\d+)/,Ka=function(){function t(t){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=void 0,this.response=void 0,this.controller=void 0,this.context=void 0,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=t.fetchSetup||Ha,this.controller=new self.AbortController,this.stats=new M}var e=t.prototype;return e.destroy=function(){this.loader=this.callbacks=null,this.abortInternal()},e.abortInternal=function(){var t=this.response;null!=t&&t.ok||(this.stats.aborted=!0,this.controller.abort())},e.abort=function(){var t;this.abortInternal(),null!=(t=this.callbacks)&&t.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)},e.load=function(t,e,r){var i=this,n=this.stats;if(n.loading.start)throw new Error("Loader can only be used once.");n.loading.start=self.performance.now();var a=function(t,e){var r={method:"GET",mode:"cors",credentials:"same-origin",signal:e,headers:new self.Headers(o({},t.headers))};return t.rangeEnd&&r.headers.set("Range","bytes="+t.rangeStart+"-"+String(t.rangeEnd-1)),r}(t,this.controller.signal),s=r.onProgress,l="arraybuffer"===t.responseType,u=l?"byteLength":"length",h=e.loadPolicy,d=h.maxTimeToFirstByteMs,c=h.maxLoadTimeMs;this.context=t,this.config=e,this.callbacks=r,this.request=this.fetchSetup(t,a),self.clearTimeout(this.requestTimeout),e.timeout=d&&E(d)?d:c,this.requestTimeout=self.setTimeout((function(){i.abortInternal(),r.onTimeout(n,t,i.response)}),e.timeout),self.fetch(this.request).then((function(a){i.response=i.loader=a;var o=Math.max(self.performance.now(),n.loading.start);if(self.clearTimeout(i.requestTimeout),e.timeout=c,i.requestTimeout=self.setTimeout((function(){i.abortInternal(),r.onTimeout(n,t,i.response)}),c-(o-n.loading.start)),!a.ok){var u=a.status,h=a.statusText;throw new Va(h||"fetch, bad network response",u,a)}return n.loading.first=o,n.total=function(t){var e=t.get("Content-Range");if(e){var r=function(t){var e=Ga.exec(t);if(e)return parseInt(e[2])-parseInt(e[1])+1}(e);if(E(r))return r}var i=t.get("Content-Length");if(i)return parseInt(i)}(a.headers)||n.total,s&&E(e.highWaterMark)?i.loadProgressively(a,n,t,e.highWaterMark,s):l?a.arrayBuffer():"json"===t.responseType?a.json():a.text()})).then((function(a){var o=i.response;self.clearTimeout(i.requestTimeout),n.loading.end=Math.max(self.performance.now(),n.loading.first);var l=a[u];l&&(n.loaded=n.total=l);var h={url:o.url,data:a,code:o.status};s&&!E(e.highWaterMark)&&s(n,t,a,o),r.onSuccess(h,n,t,o)})).catch((function(e){if(self.clearTimeout(i.requestTimeout),!n.aborted){var a=e&&e.code||0,s=e?e.message:null;r.onError({code:a,text:s},t,e?e.details:null,n)}}))},e.getCacheAge=function(){var t=null;if(this.response){var e=this.response.headers.get("age");t=e?parseFloat(e):null}return t},e.getResponseHeader=function(t){return this.response?this.response.headers.get(t):null},e.loadProgressively=function(t,e,r,i,n){void 0===i&&(i=0);var a=new mn,s=t.body.getReader();return function o(){return s.read().then((function(s){if(s.done)return a.dataLength&&n(e,r,a.flush(),t),Promise.resolve(new ArrayBuffer(0));var l=s.value,u=l.length;return e.loaded+=u,u<i||a.dataLength?(a.push(l),a.dataLength>=i&&n(e,r,a.flush(),t)):n(e,r,l,t),o()})).catch((function(){return Promise.reject()}))}()},t}();function Ha(t,e){return new self.Request(t.url,e)}var Va=function(t){function e(e,r,i){var n;return(n=t.call(this,e)||this).code=void 0,n.details=void 0,n.code=r,n.details=i,n}return l(e,t),e}(f(Error)),Ya=/\s/,Wa=i(i({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,maxBufferSize:6e7,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,workerPath:null,enableSoftwareAES:!0,startLevel:void 0,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:Ba,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:vn,bufferController:In,capLevelController:Ra,errorController:lr,fpsController:Aa,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystems:{},drmSystemOptions:{},requestMediaKeySystemAccessFunc:et,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableID3MetadataCues:!0,certLoadPolicy:{default:{maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:null,errorRetry:null}},keyLoadPolicy:{default:{maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"},errorRetry:{maxNumRetry:8,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"}}},manifestLoadPolicy:{default:{maxTimeToFirstByteMs:1/0,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},playlistLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:2,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},fragLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:12e4,timeoutRetry:{maxNumRetry:4,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:6,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},steeringManifestLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3},{cueHandler:{newCue:function(t,e,r,i){for(var n,a,s,o,l,u=[],h=self.VTTCue||self.TextTrackCue,d=0;d<i.rows.length;d++)if(s=!0,o=0,l="",!(n=i.rows[d]).isEmpty()){for(var c,f=0;f<n.chars.length;f++)Ya.test(n.chars[f].uchar)&&s?o++:(l+=n.chars[f].uchar,s=!1);n.cueStartTime=e,e===r&&(r+=1e-4),o>=16?o--:o++;var g=ia(l.trim()),v=la(e,r,g);null!=t&&null!=(c=t.cues)&&c.getCueById(v)||((a=new h(e,r,g)).id=v,a.line=d+1,a.align="left",a.position=10+Math.min(80,10*Math.floor(8*o/32)),u.push(a))}return t&&u.length&&(u.sort((function(t,e){return"auto"===t.line||"auto"===e.line?0:t.line>8&&e.line>8?e.line-t.line:t.line-e.line})),u.forEach((function(e){return Se(t,e)}))),u}},enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}),{},{subtitleStreamController:Sn,subtitleTrackController:Rn,timelineController:Sa,audioStreamController:pn,audioTrackController:yn,emeController:ba,cmcdController:Fa,contentSteeringController:Ma});function ja(t){return t&&"object"==typeof t?Array.isArray(t)?t.map(ja):Object.keys(t).reduce((function(e,r){return e[r]=ja(t[r]),e}),{}):t}function qa(t){var e=t.loader;e!==Ka&&e!==Ba?(w.log("[config]: Custom loader detected, cannot enable progressive streaming"),t.progressive=!1):function(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch(t){}return!1}()&&(t.loader=Ka,t.progressive=!0,t.enableSoftwareAES=!0,w.log("[config]: Progressive streaming enabled, using FetchLoader"))}var Xa=function(){function t(e){void 0===e&&(e={}),this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this._emitter=new an,this._autoLevelCapping=void 0,this._maxHdcpLevel=null,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this.url=null,I(e.debug||!1,"Hls instance");var r=this.config=function(t,e){if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(void 0!==e.liveMaxLatencyDurationCount&&(void 0===e.liveSyncDurationCount||e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(void 0!==e.liveMaxLatencyDuration&&(void 0===e.liveSyncDuration||e.liveMaxLatencyDuration<=e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');var r=ja(t),n=["TimeOut","MaxRetry","RetryDelay","MaxRetryTimeout"];return["manifest","level","frag"].forEach((function(t){var i=("level"===t?"playlist":t)+"LoadPolicy",a=void 0===e[i],s=[];n.forEach((function(n){var o=t+"Loading"+n,l=e[o];if(void 0!==l&&a){s.push(o);var u=r[i].default;switch(e[i]={default:u},n){case"TimeOut":u.maxLoadTimeMs=l,u.maxTimeToFirstByteMs=l;break;case"MaxRetry":u.errorRetry.maxNumRetry=l,u.timeoutRetry.maxNumRetry=l;break;case"RetryDelay":u.errorRetry.retryDelayMs=l,u.timeoutRetry.retryDelayMs=l;break;case"MaxRetryTimeout":u.errorRetry.maxRetryDelayMs=l,u.timeoutRetry.maxRetryDelayMs=l}}})),s.length&&w.warn('hls.js config: "'+s.join('", "')+'" setting(s) are deprecated, use "'+i+'": '+JSON.stringify(e[i]))})),i(i({},r),e)}(t.DefaultConfig,e);this.userConfig=e,this._autoLevelCapping=-1,r.progressive&&qa(r);var n=r.abrController,a=r.bufferController,s=r.capLevelController,o=r.errorController,l=r.fpsController,u=new o(this),h=this.abrController=new n(this),d=this.bufferController=new a(this),c=this.capLevelController=new s(this),f=new l(this),g=new Te(this),v=new Ce(this),m=r.contentSteeringController,p=m?new m(this):null,y=this.levelController=new hr(this,p),T=new pr(this),E=new kr(this.config),L=this.streamController=new cn(this,T,E);c.setStreamController(L),f.setStreamController(L);var R=[g,y,L];p&&R.splice(1,0,p),this.networkControllers=R;var A=[h,d,c,f,v,T];this.audioTrackController=this.createController(r.audioTrackController,R);var k=r.audioStreamController;k&&R.push(new k(this,T,E)),this.subtitleTrackController=this.createController(r.subtitleTrackController,R);var b=r.subtitleStreamController;b&&R.push(new b(this,T,E)),this.createController(r.timelineController,A),E.emeController=this.emeController=this.createController(r.emeController,A),this.cmcdController=this.createController(r.cmcdController,A),this.latencyController=this.createController(_e,A),this.coreComponents=A,R.push(u);var D=u.onErrorOut;"function"==typeof D&&this.on(S.ERROR,D,u)}t.isSupported=function(){return function(){var t=qt();if(!t)return!1;var e=Zr(),r=t&&"function"==typeof t.isTypeSupported&&t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),i=!e||e.prototype&&"function"==typeof e.prototype.appendBuffer&&"function"==typeof e.prototype.remove;return!!r&&!!i}()};var e=t.prototype;return e.createController=function(t,e){if(t){var r=new t(this);return e&&e.push(r),r}return null},e.on=function(t,e,r){void 0===r&&(r=this),this._emitter.on(t,e,r)},e.once=function(t,e,r){void 0===r&&(r=this),this._emitter.once(t,e,r)},e.removeAllListeners=function(t){this._emitter.removeAllListeners(t)},e.off=function(t,e,r,i){void 0===r&&(r=this),this._emitter.off(t,e,r,i)},e.listeners=function(t){return this._emitter.listeners(t)},e.emit=function(t,e,r){return this._emitter.emit(t,e,r)},e.trigger=function(t,e){if(this.config.debug)return this.emit(t,t,e);try{return this.emit(t,t,e)}catch(e){w.error("An internal error happened while handling event "+t+'. Error message: "'+e.message+'". Here is a stacktrace:',e),this.trigger(S.ERROR,{type:L.OTHER_ERROR,details:R.INTERNAL_EXCEPTION,fatal:!1,event:t,error:e})}return!1},e.listenerCount=function(t){return this._emitter.listenerCount(t)},e.destroy=function(){w.log("destroy"),this.trigger(S.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach((function(t){return t.destroy()})),this.networkControllers.length=0,this.coreComponents.forEach((function(t){return t.destroy()})),this.coreComponents.length=0;var t=this.config;t.xhrSetup=t.fetchSetup=void 0,this.userConfig=null},e.attachMedia=function(t){w.log("attachMedia"),this._media=t,this.trigger(S.MEDIA_ATTACHING,{media:t})},e.detachMedia=function(){w.log("detachMedia"),this.trigger(S.MEDIA_DETACHING,void 0),this._media=null},e.loadSource=function(t){this.stopLoad();var e=this.media,r=this.url,i=this.url=T.buildAbsoluteURL(self.location.href,t,{alwaysNormalize:!0});w.log("loadSource:"+i),e&&r&&(r!==i||this.bufferController.hasSourceTypes())&&(this.detachMedia(),this.attachMedia(e)),this.trigger(S.MANIFEST_LOADING,{url:t})},e.startLoad=function(t){void 0===t&&(t=-1),w.log("startLoad("+t+")"),this.networkControllers.forEach((function(e){e.startLoad(t)}))},e.stopLoad=function(){w.log("stopLoad"),this.networkControllers.forEach((function(t){t.stopLoad()}))},e.swapAudioCodec=function(){w.log("swapAudioCodec"),this.streamController.swapAudioCodec()},e.recoverMediaError=function(){w.log("recoverMediaError");var t=this._media;this.detachMedia(),t&&this.attachMedia(t)},e.removeLevel=function(t,e){void 0===e&&(e=0),this.levelController.removeLevel(t,e)},a(t,[{key:"levels",get:function(){var t=this.levelController.levels;return t||[]}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(t){w.log("set currentLevel:"+t),this.loadLevel=t,this.abrController.clearTimer(),this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(t){w.log("set nextLevel:"+t),this.levelController.manualLevel=t,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(t){w.log("set loadLevel:"+t),this.levelController.manualLevel=t}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(t){this.levelController.nextLoadLevel=t}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(t){w.log("set firstLevel:"+t),this.levelController.firstLevel=t}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(t){w.log("set startLevel:"+t),-1!==t&&(t=Math.max(t,this.minAutoLevel)),this.levelController.startLevel=t}},{key:"capLevelToPlayerSize",get:function(){return this.config.capLevelToPlayerSize},set:function(t){var e=!!t;e!==this.config.capLevelToPlayerSize&&(e?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=e)}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(t){this._autoLevelCapping!==t&&(w.log("set autoLevelCapping:"+t),this._autoLevelCapping=t)}},{key:"bandwidthEstimate",get:function(){var t=this.abrController.bwEstimator;return t?t.getEstimate():NaN}},{key:"ttfbEstimate",get:function(){var t=this.abrController.bwEstimator;return t?t.getEstimateTTFB():NaN}},{key:"maxHdcpLevel",get:function(){return this._maxHdcpLevel},set:function(t){Pe.indexOf(t)>-1&&(this._maxHdcpLevel=t)}},{key:"autoLevelEnabled",get:function(){return-1===this.levelController.manualLevel}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){var t=this.levels,e=this.config.minAutoBitrate;if(!t)return 0;for(var r=t.length,i=0;i<r;i++)if(t[i].maxBitrate>=e)return i;return 0}},{key:"maxAutoLevel",get:function(){var t,e=this.levels,r=this.autoLevelCapping,i=this.maxHdcpLevel;if(t=-1===r&&e&&e.length?e.length-1:r,i)for(var n=t;n--;){var a=e[n].attrs["HDCP-LEVEL"];if(a&&a<=i)return n}return t}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(t){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,t)}},{key:"playingDate",get:function(){return this.streamController.currentProgramDateTime}},{key:"mainForwardBufferInfo",get:function(){return this.streamController.getMainFwdBufferInfo()}},{key:"audioTracks",get:function(){var t=this.audioTrackController;return t?t.audioTracks:[]}},{key:"audioTrack",get:function(){var t=this.audioTrackController;return t?t.audioTrack:-1},set:function(t){var e=this.audioTrackController;e&&(e.audioTrack=t)}},{key:"subtitleTracks",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTrack:-1},set:function(t){var e=this.subtitleTrackController;e&&(e.subtitleTrack=t)}},{key:"media",get:function(){return this._media}},{key:"subtitleDisplay",get:function(){var t=this.subtitleTrackController;return!!t&&t.subtitleDisplay},set:function(t){var e=this.subtitleTrackController;e&&(e.subtitleDisplay=t)}},{key:"lowLatencyMode",get:function(){return this.config.lowLatencyMode},set:function(t){this.config.lowLatencyMode=t}},{key:"liveSyncPosition",get:function(){return this.latencyController.liveSyncPosition}},{key:"latency",get:function(){return this.latencyController.latency}},{key:"maxLatency",get:function(){return this.latencyController.maxLatency}},{key:"targetLatency",get:function(){return this.latencyController.targetLatency}},{key:"drift",get:function(){return this.latencyController.drift}},{key:"forceStartLoad",get:function(){return this.streamController.forceStartLoad}}],[{key:"version",get:function(){return"1.4.7"}},{key:"Events",get:function(){return S}},{key:"ErrorTypes",get:function(){return L}},{key:"ErrorDetails",get:function(){return R}},{key:"DefaultConfig",get:function(){return t.defaultConfig?t.defaultConfig:Wa},set:function(e){t.defaultConfig=e}}]),t}();return Xa.defaultConfig=void 0,Xa},"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(r="undefined"!=typeof globalThis?globalThis:r||self).Hls=i()}(!1);
