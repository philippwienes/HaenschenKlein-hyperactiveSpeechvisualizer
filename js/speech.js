var chatlogStatus;
var url = location.host;
//VisualizerState Variables
var appState = "visualizer";
var newstickerRunning = false;
var textMode = "wholeText";
var prevVisualizerState;
var minFontSize = "huge";
var displayMode = "center";
var fontSizeMode = "voice";
var waveForm = false;
var invisCam = false;
var iconMode = false;
var imageMode = false;
var language;

var physicalIcons = false;
var physicsMode = false;
var mindMode = "";
var hugeImage = false;
var useTranskript = false;
var shoppingMode = false;
var reinGezoomed = false;
var syncedSlaves = true;
var outdoor = false;
var philipp = false;
var kontrolle = false;
var optionsOpenedFirstTime = false;
var rausGezoomed = false;
var wikiMode = false;
var choreo = true;
var präsentation = false;
var activeFolie = 0
var folienSchritt = 0;
var transcriptInFolie = true;
var physicInFolie = false;
var translationMode = false;
var showAll = false;
var smallOldText = false;
var webMode = false;
var translationLanguage = "en";
var echoMode = false;

var hansKlein = false;
var poesie = false;
var filter = true;
var lottozahlen = false;
var restart = false;
var theEnd = false;


//inputSynth

var pitchValue = 1.0;
var rate = 1.0;
var rateValue = 1.0;
var numOfSynth = 0;
var voices = [];

//Style Variables
var fontSpacing;
var activeColor = "black";
var displayColor = "bright";
var invisAnimation = "invisible";


//Helper Variables
var wordCount = 0;
var wordCounting = 0;
var semanticCounter = 0;
var voicePitch;
var voiceVolume;
var resultCount = 0;
var imageCount = 0;
var volumeArray = [];
var pitchArray = [];
var wpsArray = [];
var numOfChildResults = 0;
var stepper = 0;
var resultCounter = 0;
var thisNumOfWords;
var thisVolume;
var thisVoicePitch;
var thisTimeDifference;
var thisWps;
var thisLps;
var count = 0;
var mapActive = false;
var lastTranskription = [];
//Feedbackloop Varibles
var menuClosed = true;
var chaosMode = false;


var startMode = 7;
var countdown = false;
var sprachSteuerung = true;
var newsTicker = true;
var primaryColor = "dark";
var secondaryColor = "bright";
var feedbackState = false;
var aiState = false;


var musikState = false;
var visualizerState = startMode;
var livestream = true;
var menuState = false;
var interimBoolean = true;
var textInput = true;

var intervalIncrementSecondsSpeaking;
var feedbackSpeed = 20;
var feedbackDuration = 20;
var feedbackArray = [];
var zoomState = false;
var lesezeichen = false;
var chatlog = true;
var notification = false;
var messages = [];
var netzwerk = false;
var newFrame = false;
var prevMode;
var options = {};
var prevOptions = {};
options['synchron'];
options['sprachsteuerung'];
options['chaosMode'];
options['präsentation'];
options['soundState'];
options['zoomState'];
options['lesezeichen'];
options['chatlog'];
options['echoMode'];
options['livestream'];
options['feedbackState'];
options['menuState'];
options['visualizerState'];
options['outdoor'];
options['hansKlein'];
options['poesie'];
options['filter'];
options['folienSchritt'];
options['activeFolie'];
options['newstickerRunning'];
options['netzwerk'];
options['transcriptInFolie'];
options['countdown'];
options['physicInFolie'];
options['speaking'];
options['newFrame'];
options['dynamicZoom'];
options['activeColor'];
options['obsState'];
options['feedbackSpeed'];
options['feedbackDuration'];
options['lottozahlen'];
options['neustart'];
options['theEnd'];
options['kontrolle'];
options['philipp'];
var intervalIncrementSecondsResult;
soundState = false;
var speaking = false;
var glitch = false;
var startText = "";
var introIsDone = false;
var recognition;
var today;
var runtime = 0;
var runtimeReadable;
String.prototype.toHHMMSS = function() {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
}

function startApp() {

    setInterval(function() {
        runtime = runtime + 1;
        runtimeReadable = runtime.toString().toHHMMSS();
        $(".uhrzeit span").text(runtimeReadable);
    }, 1000);

    messages = [];
    populateVoiceList();
    handleMusik();
    buildPhysicsStatic();


    if (language == "german") {
        window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
        recognition = new speechRecognition();
        recognition.continuous = false;
        recognition.interimResults = interimBoolean;
        recognition.lang = 'de-de';
    } else {
        window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
        recognition = new speechRecognition();
        recognition.continuous = false;
        recognition.interimResults = interimBoolean;
        recognition.lang = 'en-en';
    }
    $("html").addClass("master");


    initializeSpeech();
    handleOptionStates();
    startVisualizer();
}
$(document).ready(function() {
    // setTimeout(function() {
    $("html").removeClass("-isLoading");
    $("html").addClass("-loaded");
    // }, 1500);



});
var chatlogInterval;



var newsTickerInterval;
var timeleftBisTagesschau = [];
var sendungsZeiten = [600, 1580];
var nextSendung;
var prev = 61;
var min;
var counting = 0;
var outroPlayed = false;

function handleMusik() {
    if (musikState) {
        setInterval(function() {
            if (runtime > 60 && runtime < 90) {
                zoomState = true;
            } else {
                zoomState = false;
                if (runtime > 120 && runtime < 150) {
                    zoomState = true;
                } else {
                    zoomState = false;
                }

            }

        }, 300);

    }
}

function min(input) {
    if (toString.call(input) !== "[object Array]")
        return false;
    return Math.min.apply(null, input);
}

function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
}
var chaosModeChanged = false;
var notificationBeep = true;

var feedbackModeChanged = false;
var beepInterval;

var comingSoon = false;
var counta = 0;

function startVisualizer(startText) {


    console.log("Visualizer started 💁");
    //
    // if(choreo && !introIsDone){
    //   setTimeout(function () {
    //     console.log("Intro vorbei");
    //     introIsDone = true;
    //   }, 2000);
    // }


    handleZoom();
    handleItemCache();
    clearInterval(chatlogInterval);
    resetOldClasses();
    handleVisualizerStates();
    handleOptionStates();
    handleUiStyles();
    handleMap();
    startRecognition();
    handlePoesie();
    handleLottozahlen();

}

var news;
var newsText = [];

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}



function oddOrEven(x) {
    return (x & 1) ? "odd" : "even";
}

function handleItemCache() {

    if ($(".item").length >= 128) {
        $(".item").each(function(index) {
            $(this).remove();
        });
    }


}
$(".zoom-toggle").click(function() {
    openMap();
});

var clicked = false;
$(".menu-toggle").click(function() {
    if ($("html").hasClass("-activeTutorial")) {
        intro.exit();
        intro.goToStep(1).start();
    }
    menuState = !menuState;
    handleOptionStates();

});



$(".aside-menu-small p").each(function(index) {
    $(this).on("click", function() {
        $(this).find('span').toggleClass("-active");

        if (index == 0) {
            filter = !filter;
            indicateAction();
        }

        if (index == 1) {
            openMapMenu();
            if (visualizerState == -1 || visualizerState == 3) {
                visualizerState = 6;
            }
            zoomState = !zoomState;
            indicateAction();

            setTimeout(function() {
                menuState = false;
                closeMenu();
            }, 1000);
        }

        if (index == 2) {
            feedbackState = !feedbackState;
            indicateAction();
        }

        if (index == 3) {
            soundState = !soundState;
            indicateAction();
        }
        if (index == 4) {
            clearTimeout(collageTimeout);
            poesie = true;
            indicateAction();
            feedbackState = false;
            soundState = false;
            livestream = false;
            chaosMode = false;
            menuState = false;
            visualizerState = 3;

        }

    });
});

var index = 0;
var blinkTimer;

function loopThroughMenuItems() {
    var menuItems = $(".aside-menu-wrap p");
    if (index <= menuItems.length) {
        $(menuItems).removeClass("-highlighted");
        $(menuItems[index]).addClass("-highlighted");
        index++;
        if (index == menuItems.length) index = 0;

        if ($(menuItems[index - 1]).hasClass("-active")) {
            blinkTimer = setTimeout(loopThroughMenuItems, 2000);
        } else {
            blinkTimer = setTimeout(loopThroughMenuItems, 200);
        }
    }
}
var staticPhysicIsRebuilded = false;

function openMenu() {
    index = 0;
    // clearTimeout(blinkTimer);
    // loopThroughMenuItems();
    menuState = true;
    if (!optionsOpenedFirstTime) {
        optionsOpenedFirstTime = true;
        sprachSteuerung = true;
    }

    $("aside").addClass("-active");
    $(".menu-toggle").addClass("-active");
    $("body").addClass("-menuActive");
    $("body").addClass("-menuActiveAnimation");
    if (!staticPhysicIsRebuilded) {
        rebuildPhysicsStatic();
        staticPhysicIsRebuilded = true;
    }

    setTimeout(function() {
        $("body").removeClass("-menuActiveAnimation");
    }, 400);

}

function closeMap() {
    $("html").removeClass("-zoomOut-" + zoomLevel);
    zoomLevel = 2;
    prevZoomLevel = 2;
    mapActive = false;
    $("html").removeClass("map-zoomedOut");


}

function openMap() {
    $("html").addClass("map-zoomedOut");
    mapActive = true;

}

var prevZoomLevel;

function openFragmente() {
    $(".app-history .item").each(function(index) {
        $(this).removeClass("invisible").removeClass("invisibleHyperactive");
    });

}

function closeFragmente() {

}
var dynamicZoom = false;
var prevZoomLevel;

function handleZoom() {

    if (zoomState) {
        var objDiv = document.getElementById("app-main-wrap");
        objDiv.scrollTop = objDiv.scrollHeight;
        var objDiv2 = document.getElementsByTagName("body");
        objDiv2[0].scrollTop = objDiv2[0].scrollHeight;
        // $(".item").each(function (index) {
        //   $(this).find('.frameNumber').text(index);
        //       $(this).find('.frameNumber').addClass("-visible");
        // });

        if (dynamicZoom) {
            $("html").removeClass("-zoomOut-" + 2);
            $("html").removeClass("-zoomOut-" + 3);
            $("html").removeClass("-zoomOut-" + 4);
            $("html").removeClass("-zoomOut-" + 1);
            $("html").removeClass("-zoomOut-" + 5);
            $("html").removeClass("-zoomOut-" + 7);
            $("html").removeClass("-zoomOut-" + 6);
            $("html").addClass("-zoomOut" + "-" + zoomLevel);
            if ($(".item").length <= 9) {
                zoomLevel = 2;
            }
            if ($(".item").length <= 20 && $(".item").length > 9) {
                zoomLevel = 3;
            }

            if ($(".item").length <= 49 && $(".item").length > 20) {
                zoomLevel = 4;
            }

            if ($(".item").length <= 262 && $(".item").length > 49) {
                zoomLevel = 5;
            }
            // zoomLevel = 5;

            // if(zoomLevel != prevZoomLevel){
            //     $("html").removeClass("-zoomOut" + "-" + prevZoomLevel);

            // }
            // prevZoomLevel = zoomLevel;
        } else {
            $("html").removeClass("-zoomOut-" + 2);
            $("html").removeClass("-zoomOut-" + 3);
            $("html").removeClass("-zoomOut-" + 4);
            $("html").removeClass("-zoomOut-" + 1);
            $("html").removeClass("-zoomOut-" + 5);
            $("html").removeClass("-zoomOut-" + 7);
            $("html").removeClass("-zoomOut-" + 6);

            $("html").addClass("-zoomOut" + "-" + zoomLevel);


            var objDiv = document.getElementById("app-main-wrap");
            objDiv.scrollTop = objDiv.scrollHeight;
            var objDiv2 = document.getElementsByTagName("body");
            objDiv2[0].scrollTop = 0;

            // $(".app-main-wrap").scrollBottom( $('.item:last-child').offset() );

        }

    }
}


var zoomLevel = 2;


$('html').on('click', 'div.item', function() {

    if (zoomState) {
        $(".item").each(function(index) {
            $(this).addClass("invisible");
        });
        $(".active").each(function(index) {
            $(this).removeClass("active");
        });

        $(this).clone().removeClass("invisible").removeClass("invisibleHyperactive").addClass("active").appendTo(".items");

        zoomState = false;
        prevZoomLevel = 0;
        zoomLevel = 2;
        $("html").removeClass();

    }

});

function handleMap() {

    if (mapActive) {
        // $(".item").each(function (e) {
        //     $(this).removeClass("invisible");
        // });
    }

}



function resetVisualizer(to) {
    if (to == "toChaos") {

        setTimeout(function() {
            translationMode = false;
        }, 4000);
        physicsMode = false;
        imageMode = false;
        // imageMode = true;
        // physicsMode = true;
    } else {
        // imageMode = false;
        physicsMode = false;
    }

    useTranskript = false;
    shoppingMode = false;
    fontSpacing = "normal";
    webMode = false;
    // smallOldText = false;
    textMode = "wholeText";
    fontSizeMode = "voice";
    iconMode = false;
    waveForm = false;
    mindMode = "";
    wikiMode = false;
    showAll = false;
    displayColor = "bright";

}
var zoomInteraction = false;

function closeMenu() {
    $("aside").removeClass("-active");
    $("body").removeClass("-menuActive");
    if (staticPhysicIsRebuilded) {
        rebuildPhysicsStatic();
        staticPhysicIsRebuilded = false;
    }
}

function openMapMenu() {
    $(".submenu").addClass("-active");
}

function closenMapMenu() {
    $(".submenu").removeClass("-active");
}

function handleOptionStates() {
    if (menuState) {
        openMenu();
    } else {
        closeMenu();
    }
    if (zoomState) {
        openMap();

        handleZoom();
    } else {
        closeMap();
    }

    if (lesezeichen) {
        openFragmente();
    } else {
        closeFragmente();
    }

    if (zoomState && menuState) {
        openMapMenu();
    }
    if (!zoomState) {
        closenMapMenu();
    }
    if (zoomState && !menuState && !zoomInteraction) {

    }
    if (dynamicZoom) {
        $(".submenu-dynamisch ").addClass("-active");
    } else {
        $(".submenu-dynamisch").removeClass("-active");
    }
    if (newsTicker) {
        $(".menu-nachrichten input").prop("checked", true);
        $(".menu-nachrichten span").addClass("-active");
    } else {
        $(".menu-nachrichten input").prop("checked", false);
        $(".menu-nachrichten span").removeClass("-active");
    }

    if (kontrolle) {
        $(".menu-kontrolle input").prop("checked", true);
        $(".menu-kontrolle span").addClass("-active");
    } else {
        $(".menu-kontrolle input").prop("checked", false);
        $(".menu-kontrolle span").removeClass("-active");
    }

    if (syncedSlaves) {
        $(".menu-synchron input").prop("checked", true);
        $(".menu-synchron span").addClass("-active");
    } else {
        $(".menu-synchron input").prop("checked", false);
        $(".menu-synchron span").removeClass("-active");
    }

    if (reinGezoomed) {
        $(".submenu-zoomIn").addClass("-active");

    }

    if (rausGezoomed) {
        $(".submenu-zoomOut").addClass("-active");

    }


    if (hansKlein) {
        $(".menu-hansKlein input").prop("checked", true);
        $(".menu-hansKlein span").addClass("-active");
    } else {
        $(".menu-hansKlein input").prop("checked", false);
        $(".menu-hansKlein span").removeClass("-active");
    }
    if (poesie == true) {
        $(".menu-poesie input").prop("checked", true);
        $(".menu-poesie span").addClass("-active");
    } else {
        $(".menu-poesie input").prop("checked", false);
        $(".menu-poesie span").removeClass("-active");
    }
    if (präsentation == true) {
        $(".menu-präsentation input").prop("checked", true);
        $(".menu-präsentation span").addClass("-active");
    } else {
        $(".menu-präsentation input").prop("checked", false);
        $(".menu-präsentation span").removeClass("-active");
    }
    if (netzwerk == true) {
        $(".menu-netzwerk input").prop("checked", true);
        $(".menu-netzwerk span").addClass("-active");
    } else {
        $(".menu-netzwerk input").prop("checked", false);
        $(".menu-netzwerk span").removeClass("-active");
    }

    if (filter == false) {
        $(".menu-filter input").prop("checked", true);
        $(".menu-filter span ").addClass("-active");
    } else {
        $(".menu-filter input").prop("checked", false);
        $(".menu-filter span ").removeClass("-active");
    }
    if (lottozahlen == true) {
        $(".menu-lottozahlen input").prop("checked", true);
        $(".menu-lottozahlen span").addClass("-active");
    } else {
        $(".menu-lottozahlen input").prop("checked", false);
        $(".menu-lottozahlen span").removeClass("-active");
    }

    if (sprachSteuerung) {
        $(".menu-sprachsteurung input").prop("checked", true);
        $(".menu-sprachsteurung span").addClass("-active");
    } else {
        $(".menu-sprachsteurung input").prop("checked", false);
        $(".menu-sprachsteurung span").removeClass("-active");
    }
    if (chaosMode) {
        $(".menu-chaos input").prop("checked", true);
        $(".menu-chaos span").addClass("-active");
    } else {
        $(".menu-chaos input").prop("checked", false);
        $(".menu-chaos span").removeClass("-active");
    }
    if (feedbackState) {
        $(".menu-feedback input").prop("checked", true);
        $(".menu-feedback span").addClass("-active");
    } else {
        $(".menu-feedback input").prop("checked", false);
        $(".menu-feedback span").removeClass("-active");
    }
    if (musikState) {
        $(".menu-musik input").prop("checked", true);
        $(".menu-musik span").addClass("-active");
    } else {
        $(".menu-musik input").prop("checked", false);
        $(".menu-musik span").removeClass("-active");
    }

    if (chatlog) {
        $(".menu-chatlog input").prop("checked", true);
        $(".menu-chatlog span").addClass("-active");
    } else {
        $(".menu-chatlog input").prop("checked", false);
        $(".menu-chatlog span").removeClass("-active");
    }

    if (livestream) {
        $(".menu-livestream input").prop("checked", true);
        $(".menu-livestream span").addClass("-active");
    } else {
        $(".menu-livestream input").prop("checked", false);
        $(".menu-livestream span").removeClass("-active");
    }
    if (zoomState) {
        $(".menu-zoom input").prop("checked", true);
        $(".menu-zoom span").addClass("-active");
    } else {
        $(".menu-zoom input").prop("checked", false);
        $(".menu-zoom span").removeClass("-active");
    }
    if (lesezeichen) {
        $(".menu-lesezeichen input").prop("checked", true);
        $(".menu-lesezeichen span").addClass("-active");
    } else {
        $(".menu-lesezeichen input").prop("checked", false);
        $(".menu-lesezeichen span").removeClass("-active");
    }

    if (soundState) {
        $(".menu-sound input").prop("checked", true);
        $(".menu-sound span").addClass("-active");
    } else {
        $(".menu-sound input").prop("checked", false);
        $(".menu-sound span").removeClass("-active");
    }
    if (echoMode) {
        $(".menu-echo input").prop("checked", true);
        $(".menu-echo span").addClass("-active");
    } else {
        $(".menu-echo input").prop("checked", false);
        $(".menu-echo span").removeClass("-active");
    }
    if (menuState) {
        $(".menu-toggle").addClass("-active");
        $("body").addClass("-menuActive");
        $("aside").addClass("-active");
    }

    // if(invisCam){
    //   $('.app-main-wrap').addClass("-unsichtbar");
    // }
    // else{
    //   $('.app-main-wrap').removeClass("-unsichtbar");
    // }

    $(".-original .menu-item").each(function(index) {
        $(this).removeClass("-active");
        if (index - 1 == visualizerState) {
            $(this).addClass("-active");
        }
    });
    $(".-copy .menu-item").each(function(index) {
        $(this).removeClass("-active");
        if (index - 1 == visualizerState) {
            $(this).addClass("-active");
        }
    });

    if (countdown) {
        $("body").addClass("-countdown");
    }
    options['philipp'] = philipp;

    options['countdown'] = countdown;
    options['sprachsteuerung'] = sprachSteuerung;
    options['chaosMode'] = chaosMode;
    options['soundState'] = soundState;
    options['menuState'] = menuState;
    options['neustart'] = restart;
    options['theEnd'] = theEnd;
    options['kontrolle'] = kontrolle;
    options['feedbackSpeed'] = feedbackSpeed;
    options['feedbackDuration'] = feedbackDuration;
    options['hansKlein'] = hansKlein;
    options['poesie'] = poesie;
    options['präsentation'] = präsentation;
    options['activeFolie'] = activeFolie;
    options['newstickerRunning'] = newstickerRunning;
    options['netzwerk'] = netzwerk;
    options['filter'] = filter;
    options['folienSchritt'] = folienSchritt;
    options['transcriptInFolie'] = transcriptInFolie;
    options['physicInFolie'] = physicInFolie;


    options['lottozahlen'] = lottozahlen;


    options['lesezeichen'] = lesezeichen;
    options['zoomState'] = zoomState;
    options['newFrame'] = newFrame;

    options['activeColor'] = activeColor;
    options['dynamicZoom'] = dynamicZoom;
    options['chatlog'] = chatlog;

    if (outdoor) {
        options['outdoor'] = true;
    } else {
        options['outdoor'] = false;
    }
    if (philipp) {
        options['philipp'] = true;
    } else {
        options['philipp'] = false;
    }
    if (countdown) {
        options['countdown'] = true;
    } else {
        options['countdown'] = false;
    }

    options['livestream'] = livestream;
    options['feedbackState'] = feedbackState;
    options['speaking'] = speaking;
    options['echoMode'] = echoMode;
    options['synchron'] = syncedSlaves;
    if (syncedSlaves) {
        options['visualizerState'] = visualizerState;
    } else {
        if (appNetworkMode == "slave") {

        } else {
            options['visualizerState'] = visualizerState;
        }

    }




}

function jumpToLastIcon(activeID) {
    if (visualizerState == 2) {
        var objDiv = document.getElementById(activeID).getElementsByClassName("icon-wrap")[0];
        objDiv.scrollLeft = objDiv.scrollWidth;
    }
}

var justChangedInsideCollage = false;
var rand;
var collageTimeout;

function handleVisualizerStates() {

    var randomNumberFloat = Math.random() * (100 - 1 + 1) - 1;

    if (visualizerState == -1) {
        waveForm = true;
    }

    if (visualizerState == 15) {
        mindMode = "contemplation";
        textMode = "words";
        hugeImage = false;
        imageMode = true;
        displayColor = "dark";
        showAll = true;
    }



    if (visualizerState == 1) {
        mindMode = "contemplation";

        hugeImage = false;
        imageMode = true;
        displayColor = "dark";
        showAll = true;
    }

    if (visualizerState == 2) {
        textMode = "noText";
        iconMode = true;
        imageMode = false;
        displayColor = "dark";
        translationMode = true;
    }
    if (visualizerState == 0) {
        fontSizeMode = "voice";
        textMode = "words";
    }

    if (visualizerState == 3) {
        useTranskript = true;
        textMode = "noText";
        activeColor = "black";
        imageMode = false;
        physicsMode = true;
        fontSizeMode = "normal";
    }

    if (visualizerState == 14) {
        useTranskript = true;
        textMode = "noText";
        displayColor = "bright";
        iconMode = true;
        physicalIcons = true;
        translationMode = true;
        imageMode = false;
        physicsMode = true;
        fontSizeMode = "normal";
    }

    if (visualizerState == 4) {
        textMode = "wholeText";
        fontSizeMode = "voice";
        physicsMode = true;
        smallOldText = false;
    }


    if (visualizerState == 5) {

        useTranskript = true;
        physicsMode = true;
        fontSizeMode = "voice";
    }

    if (visualizerState == 6) {
        physicsMode = true;
        imageMode = false;
        fontSizeMode = "voice";
        smallOldText = true;
    }

    if (visualizerState == 7) {

        displayColor = secondaryColor;
        fontSizeMode = "voice";
        textMode = "wholeText";
        physicsMode = true;
        imageMode = true;

        if (!justChangedInsideCollage) {
            var rand = Math.round(Math.random() * (11000 - 5800)) + 3800;
            justChangedInsideCollage = true;




            if (randomNumberFloat >= 90) {
                visualizerState = 12;
            }
            if (randomNumberFloat < 90 && randomNumberFloat > 80) {
                visualizerState = 11;
            }
            if (randomNumberFloat <= 80 && randomNumberFloat > 70) {

            }

            if (randomNumberFloat <= 80) {

                visualizerState = 7;
                hugeImage = false;
                fontSpacing = "normal";
            }

            if (randomNumberFloat > 50 && randomNumberFloat <= 70) {
                smallOldText = true;
            }

            collageTimeout = setTimeout(function() {
                visualizerState = 7;
                translationMode = false;
                hugeImage = false;
                physicsMode = true;
                justChangedInsideCollage = false;
                smallOldText = false;

            }, rand);

        }



    }


    if (visualizerState == 8) {
        webMode = true;
        displayColor = "dark";
        showAll = true;
        imageMode = false;
        textMode = "noText";

    }

    if (visualizerState == 9) {
        wikiMode = true;
        webMode = true;
        imageMode = false;
        textMode = "noText";
        showAll = "few";
    }

    if (visualizerState == 10) {
        //Shopping
        shoppingMode = true;
        imageMode = false;
        fontSizeMode = "huge";
        textMode = "wholeText";
    }


    if (visualizerState == 11) {
        imageMode = true;
        hugeImage = true;
        textMode = "wholeText";
        physicsMode = false;
        fontSizeMode = "small";
        if (randomNumberFloat > 90) {
            physicsMode = true;
        }
    }

    if (visualizerState == 12) {
        imageMode = true;
        hugeImage = true;
        textMode = "wholeText";
        physicsMode = false;
        fontSizeMode = "small";

        if (randomNumberFloat > 90) {
            physicsMode = true;
        }
    }

    if (visualizerState == 13) {
        physicsMode = true;
        hugeImage = true;
        imageMode = true;
        textMode = "wholeText";
        if (randomNumberFloat > 90) {
            physicsMode = true;
        }

    }




    prevVisualizerState = visualizerState;

    shoppingMode ? $("body").addClass("shoppingMode") : $("body").removeClass("shoppingMode");
    imageMode ? $("body").addClass("imageMode") : $("body").removeClass("imageMode");
    waveForm ? $("body").addClass("waveForm") : $("body").removeClass("waveForm");
}
var notCreatedYet = false;

function resetValues() {
    wordCount = 0;
    wordCounting = 0;
    newFrame = false;
    volumeArray.length = 0;
    pitchArray.length = 0;
    resultCounter = 0;
    semanticCounter = 0;
    numOfChildResults = 0;
}

function resetOldClasses() {
    $(".app-main").removeClass().addClass("app-main");
    $("body").removeClass().addClass("visualizer");
}
var hatEineKlasse = false;

function itemUiStyles(activeID) {
    const activeSelector = "#" + activeID;
    iconMode ? displayColor = "dark" : displayColor;

    //   for (i = 0; i < 13; i++) {
    //   if($(activeSelector).hasClass("visualizerState-" + i)){
    //     hatEineKlasse = true;
    //   }
    // }
    // if(!hatEineKlasse){
    $(activeSelector).addClass("visualizerState-" + visualizerState);
    // }
    if (newstickerRunning) {
        $(activeSelector).addClass("newsTickerRunning");
    }
    if (speaking) {
        $(activeSelector).addClass("speakingRunning");
    }


    if (displayColor == "dark") {
        $("body").removeClass("body-brightUI");
        if (visualizerState == -1) {
            $(".graphen").removeClass("brightUI");
            $(".graphen").addClass("darkUI");
        } else {
            $(activeSelector).removeClass("brightUI");
            $(activeSelector).addClass("darkUI");
        }
    }

    if (hugeImage) {
        displayColor = "dark";
        $(activeSelector).addClass("hugeImages");
    } else {
        $(activeSelector).removeClass("hugeImages");
    }

    if (displayColor == "bright") {
        $("body").addClass("body-brightUI");
        if (visualizerState == -1) {
            $(".graphen").removeClass("darkUI");
            $(".graphen").addClass("brightUI");
        } else {
            $(activeSelector).removeClass("darkUI");
            $(activeSelector).addClass("brightUI");
        }
    }
}

function handleUiStyles(activeID) {

    livestream ? $("body").addClass("livestream") : $("body").removeClass("livestream");
    fontSizeMode != "" ? $("body").addClass(fontSizeMode + "Fontsize") : $("body").removeClass(fontSizeMode);
    webMode ? $("body").addClass("webMode") : $("body").removeClass("webMode");
    useTranskript ? $("body").addClass("useTranskript") : $("body").removeClass("useTranskript");
    mindMode ? $("body").addClass("contemplation") : $("body").removeClass("contemplation");
    if (visualizerState == 15) {
        $("body").addClass("conWithText");
    } else {
        $("body").removeClass("conWithText");
    }


    lesezeichen ? $("body").addClass("-fragmenteActive") : $("body").removeClass("-fragmenteActive");
    iconMode ? $("body").addClass("iconMode") : $("body").removeClass("iconMode");
    physicsMode ? $("body").addClass("physicsMode") : $("body").removeClass("physicsMode");
    imageMode ? $("body").addClass("imageMode") : $("body").removeClass("imageMode");
    feedbackState ? $("body").addClass("feedback") : $("body").addClass("noFeedback");
    wikiMode ? $("body").addClass("wikiMode") : $("body").removeClass("wikiMode");
    sprachSteuerung ? $("body").addClass("sprachSteuerung") : $("body").removeClass("sprachSteuerung");
    // chatlog ? $("body").addClass("chatlog-active") : $("body").removeClass("chatlog-active");
    chaosMode ? $("body").addClass("chaosMode-active") : $("body").removeClass("chaosMode-active");


    if (newstickerRunning) {
        $("body").addClass("newstickerRunning");
    } else {
        $("body").removeClass("newstickerRunning");
    }
    if (hansKlein) {
        $("body").addClass("hänschenKleinRunning");
    } else {
        $("body").removeClass("hänschenKleinRunning");
    }


    // $("body").addClass("visualizerState-" + visualizerState);
    if (displayColor == "dark") {
        $("body").addClass("body-darkUI");
        $("body").removeClass("body-brightUI");
    } else {
        $("body").addClass("body-brightUI");
        $("body").removeClass("body-darkUI");
    }

    $("body").addClass("animationWaitingDuration-" + feedbackSpeed);
    $("body").addClass("animationSpeakingDuration-" + feedbackDuration);
    $("body").addClass(textMode + "Mode");
    $(".app-main").addClass(displayMode + "Mode");

    if (showAll == true && showAll != "few") {
        $("body").addClass("showAll");
    } else {
        $("body").removeClass("showAll");
        if (showAll == "few") {
            $("body").addClass("showFew")
        }
    }
}

function showAllItems() {
    var allItems = $(".item");
    allItems.each(function(e) {
        $(this).removeClass("invisible");
        if (textMode == "wholeText") {
            $(this).find(".first").removeClass(invisAnimation);
        }
    });
}



function mainMenu() {
    $("body").removeClass();
    // $("body").addClass("waveForm");
    //   $(".graphen").addClass("darkUI");
    $("body").addClass("mainMenu-active");
}
var newsDurationInterval;
var newsDuration;
var letzteNewsgelesen = false;
$(".startVisualizer-btn").click(function() {
    appState = "visualizer";
    startVisualizer();
});
var numOfReadNews = 0;
var mapModeChanged = false;
var introVorgelesen = false;
var tagesschauIntroNotPlayed = true;

var poesieText = "O du, Geliebte meiner siebenundzwanzig Sinne, ich liebe dir! - Du deiner dich dir, ich dir, du mir. - Wir? Das gehört (beiläufig) nicht hierher. Wer bist du, ungezähltes Frauenzimmer? Du bist - - bist du? - Die Leute sagen, du wärest, - laß sie sagen, sie wissen nicht, wie der Kirchturm steht. Du trägst den Hut auf deinen Füßen und wanderst auf die Hände, auf den Händen wanderst du. Hallo, deine roten Kleider, in weiße Falten zersägt. Rot liebe ich Anna Blume, rot liebe ich dir! -Du deiner dich dir, ich dir, du mir. - Wir? Das gehört [beiläufig] in die kalte Glut. Rote Blume, rote Anna Blume, wie sagen die Leute? Preisfrage:  1. Anna Blume hat ein Vogel. 2. Anna Blume ist rot. 3. Welche Farbe hat der Vogel Blau ist die Farbe deines gelben Haares. Rot ist das Girren deines grünen Vogels. Du schlichtes Mädchen im Alltagskleid, du liebes grünes Tier, ich liebe dir! - Du deiner dich dir, ich dir, du mir, - Wir? Das gehört [beiläufig] in die Glutenkiste. Anna Blume! Anna, a n-n-a, ich träufle deinen Namen.  Dein Name tropft wie weiches Rindertalg. Weißt du es Anna, weißt du es schon? Man kann dich auch von hinten lesen, und du, du  Herrlichste von allen, du bist von hinten wie von vorne: “a - n - n - a”. Rindertalg träufelt streicheln über meinen Rücken. Anna Blume, du tropfes Tier, ich liebe dir!";
var lottozahlenString = "4 29 29 32 64 52. Superzahl 7"
var poesieRunning = false;

function handlePoesie() {
    var randomNumber = Math.floor(Math.random() * (20 - 1 + 1)) - 1;
    if (poesie) {
        clearTimeout(collageTimeout);
        poesieRunning = true;
        poesie = false;
        vorlesen(poesieText, "medium", function() {
            if (vorlesenFinished) {
                livestream = true;
                poesieRunning = false;
            }

        });
    } else {
        // fresseHalten();
    }
}

function handleLottozahlen() {
    if (lottozahlen) {
        lottozahlen = false;
        vorlesen(lottozahlenString, "medium", function() {
            if (vorlesenFinished) {
                feedbackState = false;
            }
        });
    } else {
        // fresseHalten();
    }
}
var hansRunning = false;


var finishedTranscript = [];


var abspannCreated = false;
var finishedTranscriptRecieved = false;

var messagesLength;
var messagesLengthPrev;
var id = 0;


function createActive(id, message) {
    var timer = setTimeout(function() {
        $("#" + id).addClass("-active");

        if (message.length > 00 && message.length <= 150) {
            $("#" + id).css({
                transform: 'scale(0.6)'
            });
        }

        if (message.length > 150 && message.length <= 300) {

            $("#" + id).css({
                transform: 'scale(0.5)'
            });
        }
        if (message.length > 300 && message.length <= 400) {
            $("#" + id).css({
                transform: 'scale(0.4)'
            });
        }
        if (message.length > 400) {
            $("#" + id).css({
                transform: 'scale(0.4)'
            });
        }
        if (message.length > 700) {
            $("#" + id).css({
                transform: 'scale(0.25)'
            });
        }

    }, 200);
}


function createDeathtimer(id) {
    var timer = setTimeout(function() {
        $("#" + id).removeClass("-active");
        $("#" + id).removeAttr("style");
        $("#" + id).addClass("-invisble");
    }, 1500);
}

var messagesArray = [];



function restartRec() {



    if (language == "german") {
        window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
        const recognition = new speechRecognition();
        recognition.lang = 'de-de';
    } else {
        window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
        const recognition = new speechRecognition();
        recognition.lang = 'en-en';
    }


    recognition.stop();
    recognition.start();
}

function addDataToTranscript(transcript) {

    var activeID = "p-" + $(".active").attr('id');
    var randomX = Math.floor(Math.random() * (($(window).width() / 2) + 1));
    var randomY = Math.floor(Math.random() * (($(window).height() / 2) + 1));



    if ($(".active .last").length > 0) {
        var p = $("<p />");
        p.css({
            left: randomX,
            top: randomY
        });
        p.append(transcript);
        $(".physic-wrap").append(p.attr('id', activeID));

    }
    //
    handleMaxSizeTranskriptPhysics();

}

function handleMaxSizeTranskriptPhysics() {
    if (!poesieRunning) {
        if ($(".physic-wrap p").length >= 140) {
            $(".physic-wrap p").each(function(index) {
                if (index == 0) {
                    $(".physic-wrap p").remove();
                    rebuildPhysicsStatic();
                }
            });
        }
    } else {
        if ($(".physic-wrap p").length >= 180) {
            $(".physic-wrap p").each(function(index) {
                if (index == 0) {
                    $(".physic-wrap p").remove();
                    rebuildPhysicsStatic();
                }
            });
        }
    }
}

function handlePhysicsTranskript() {

    if (useTranskript == true && physicsMode == true) {
        var thisID;
        $(".physic-wrap p").each(function(index) {
            thisID = $(this).attr('id');

            if (!$(this).hasClass("blast-root")) {
                $(this).blast({
                    delimiter: "word",
                    generateValueClass: true,
                    tag: "span"
                });
                if (!$(this).find("span").hasClass("physical")) {
                    $(this).find("span").addClass("physical");
                    source = "transkript";
                    buildObjects(thisID, source);
                }
            }
        });
        $(".physic-wrap img").each(function(index) {
            thisID = $(this).attr('id');
            source = "transkript";
            buildObjects(thisID, source);
        });


    }
}

function handlePhysics() {


    if (webMode != true) {

        var activeID = document.getElementsByClassName("active")[0].id;
        var lastText = $(".active p").text().toLowerCase();
        var randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) - 1;
        var source;
        var randomBigClass = "";
        var taktung = "random";
        if (visualizerState == 4) {
            taktung = "allTheTime";
        } else {
            taktung = "random";
        }


        if (physicsMode && textMode != "noText") {
            source = "live";

            // Unschönen Spaghetticode fixen...
            if (visualizerState == 6) {
                $(".active p span").blast({
                    delimiter: "character",
                    generateValueClass: true,
                    customClass: randomBigClass,
                    tag: "p"
                });
                $(".active p > .smallP").blast({
                    delimiter: "character",
                    generateValueClass: true,
                    customClass: randomBigClass,
                    tag: "p"
                });
                $(".active p .smallP p").addClass("physical");


                $(".active span p").addClass("physical");
                resetPhysicsLive();
                buildPhysicsOnTheGo();
                buildObjects(activeID, source);
            } else {
                if (taktung == "allTheTime") {

                    $(".active p span").blast({
                        delimiter: "character",
                        generateValueClass: true,
                        customClass: randomBigClass,
                        tag: "p"
                    });
                    // if(!hugeImage){
                    //             $(".active .img").addClass("physical");
                    // }


                    $(".active span p").addClass("physical");
                    resetPhysicsLive();
                    buildPhysicsOnTheGo();
                    buildObjects(activeID, source);
                } else {
                    if (randomNumber > 60) {

                        if (randomNumber > 95 && appNetworkMode != "slave") {
                            randomBigClass = "-randomBig";
                        }

                        $(".active p span").blast({
                            delimiter: "character",
                            generateValueClass: true,
                            customClass: randomBigClass,
                            tag: "p"
                        });
                        if (smallOldText == true) {

                            $(".active p > .smallP").blast({
                                delimiter: "character",
                                generateValueClass: true,
                                customClass: randomBigClass,
                                tag: "p"
                            });
                            $(".active p .smallP p").addClass("physical");
                        }

                        // if(!hugeImage){
                        //             $(".active .img").addClass("physical");
                        // }


                        $(".active span p").addClass("physical");
                        // buildPhysics(activeID, source);
                        resetPhysicsLive();
                        buildPhysicsOnTheGo();
                        buildObjects(activeID, source);
                    }
                }

            }
        }
    }
}

function initializeSpeech() {


    intervalIncrementSecondsResult = setInterval(incrementSecondsResult, 100);
    intervalIncrementSecondsSpeaking = setInterval(incrementSecondsSpeaking, 100);
    var globalTranscript;

    recognition.onstart = function() {
        // console.log("start");
    };

    recognition.onpause = function() {
        console.log("pause");
    };

    recognition.onend = function() {
        // if(präsentation){
        //       präsentation = false;
        //     visualizerState = 0;
        //
        // }


        $(".transkript").append(" " + $(".active p").text());
        var text = $(".active p .first").text() + " " + $(".active p .last").text();



        resetValues();

        if (appState == "visualizer") {
            handlePhysics();
            makeOnlyLastActive();
            removeTrash();
            startVisualizer();
        }
    };

    recognition.onerror = function(event) {
        console.log("error");
    };


    recognition.addEventListener("result", e => {

        var transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join("");

        activeID = $(".active").attr('id');

        // $('.active').append( $('.cam-wrap') );
        //
        //
        // if($('.cam-wrap').length == 0){
        //   const cam = document.createElement("div");
        //   const camVid = document.createElement("video");
        //   cam.className = "cam-wrap";
        //   camVid.className = "cam";
        //   cam.appendChild(camVid);
        //   activeItem.appendChild(cam);
        // }
        if (appState == "visualizer") {
            //sonderzeichen
            transcript = transcript.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_');



            secondsSinceLastResult = 0;
            resultCounter = resultCounter + 1;
            const now = new Date();
            wordCounting = wordCounting + 1;
            var randomNumberFloat = Math.random() * (100 - 1 + 1) - 1;
            var randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) - 1;

            // if (soundState == true) {
            $(".active").each(function(index) {
                $(".active p").removeClass("shake");
                $(".active img").removeClass("shake");
                $(this).removeClass(invisAnimation);
                $(".active p").addClass("shake");
                $(".active img").addClass("shake");
            });
            // }
            globalTranscript = transcript;
            numOfChildResults = numOfChildResults + 1;
            if (numOfChildResults == "1") {
                $(".active .timestampSpanFirstWord").text(now.getTime());
            }

            if (chaosMode) {
                if (resultCounter % 3 === 1) {
                    randomMode(randomNumberFloat);
                    itemUiStyles(activeID);
                }
            }
            var activePitch = parseInt($(".active").find(".voicePitch").text()) - 200;

            if ($(".active").find(".voicePitch").text().length > 0) {} else {
                activePitch = 100;
            }
            if (soundState == true) {

                beep(5, activePitch, 50);
            } else {
                //  a = "";
            }


            newFrame = true;
            indicateNewFrame();
            newResult();
            handleOptionStates();
            if (resultCounter % 3 === 1) {
                addDataToTranscript(transcript);
                handleImageVisuals(transcript, activeID);
            }



            handleSemanticOptions(transcript, activeID);
            handleTextVisuals(transcript, activeID);
            handleSemanticStyling(transcript, activeID);
            handleItemVisibility(activeID);
            handleUiStyles(activeID);
            itemUiStyles(activeID);

            if (!kontrolle) {
                controlSentenceSplit(randomNumber, fontSizeMode, webMode, transcript);
            }
            if (lastTranskription.length > 14) {
                lastTranskription.splice(0, 1);
            }

            handlePhysicsTranskript();
            var transcriptLow = transcript.toLowerCase();
            var foundSomewhere = false;


            let semanticOptions = ['penis', 'hans', 'bitte kontrolle',
                'es reicht', 'dynamisch', 'kleiner', 'größer', 'reinzoomen', 'rauszoomen', 'poesie', 'weiter', 'bitte zurück', 'NSFW', 'not safe for work', 'not safe', 'filter', 'lottozahlen',
                'tempo', 'ok', 'feedback aus', 'feedback an', 'internet', 'feedback', 'leise', 'hallo hallo', 'shoppen', 'wörter', 'danke',
                'steuer', 'gesteuert', 'schließen', 'text', 'vorlesen', 'zeichen', 'chaos', '?', 'fallen', 'russisch',
                'chinesisch', 'stop', 'fresse', 'sound an', 'sound aus', 'suchen', 'surfen', 'surfen', 'pause',
                'neustart', 'aus', 'leise', 'stille', 'schnell', 'langsam', 'leise', 'collage',
                'denken', 'reden', 'stimme', 'text', 'regen', 'wikipedia', 'englisch', 'deutsch', 'unsichtbar'
            ];

            let semanticOptionsEN = ['penis', 'hans', 'control please',
                'enough', 'dynamic', 'smaller', 'bigger', 'zoom in', 'zoom out', 'poetic', 'weiter', 'history', 'filter', 'NSFW', 'not safe for work', 'not safe', 'lotto',
                'faster', 'ok', 'feedback off', 'feedback on', 'internet', 'feedback', 'quiet', 'hello hello', 'shopping', 'words', 'thanks',
                'close', 'text', 'read', 'chaos', '?', 'falling', 'russian',
                'chinese', 'stop', 'sound on', 'sound off', 'search', 'surfing', 'pause',
                'reboot', 'off', 'quiet', 'silence', 'fast', 'slow', 'quiet', 'collage',
                'thinking', 'talking', 'voice', 'rain', 'wikipedia', 'englisch', 'german', 'invisible'
            ];
            if (language == "english") {
                semanticOptions = semanticOptionsEN;
            }


            for (i = 0; i <= semanticOptions.length; i++) {
                if (transcriptLow.includes(semanticOptions[i])) {
                    foundSomewhere = true;
                }
                if (i == semanticOptions.length && !foundSomewhere) {
                    if (!lastTranskription.includes(transcriptLow)) {
                        lastTranskription.push(transcriptLow);
                    }
                }
            }

            if (resultCounter % 3 === 1) {

            }


        }

    });
}
var prevID;
var gotIt = false;



function makeOnlyLastActive() {

    $(".active").each(function(index) {
        $(this).removeClass("active");
    });
}

function makeOnlyLastItemActive() {

    if (!showAll) {
        $(".item").each(function(index) {

            $(this).addClass("invisible");
            if (index == $(".item").length) {
                $(this).removeClass("invisible");
            }
        });
    }

}

function makeOnlyLastVisible(activeID) {

    //
    // $(".item:nth-last-child(2) p div").addClass(invisAnimation);
    // $(".item:nth-last-child(2) p span").addClass(invisAnimation);
    $(".item").each(function(index) {
        if ($(this).attr('id') != activeID) {
            if (!$(this).hasClass('invisible') || !$(this).hasClass('invisibleHyperactive'))
                $(this).addClass(invisAnimation);

        }
    });
}

function makeOnlyLastThreeVisible(activeID) {
    $itemsWithoutLastThree = $(".item").slice(0, $(".item").length - 8);
    $allItems = $(".item");
    $itemsWithoutLastThree.each(function(index) {
        if ($(this).attr('id') != activeID) {
            $(this).addClass("invisibleShrink");
        }
    });
    $allItems.each(function(index) {
        if ($(this).attr('id') != activeID) {
            $(this).addClass("textInvisible");
        }
    });
}


function beep(vol, freq, duration) {
    v = a.createOscillator()
    u = a.createGain()
    v.connect(u)
    v.frequency.value = freq
    v.type = "square"
    u.connect(a.destination)
    u.gain.value = vol * 0.01
    v.start(a.currentTime)
    v.stop(a.currentTime + duration * 0.001)
}

function beepNews(vol, freq, duration) {
    v = b.createOscillator()
    u = b.createGain()
    v.connect(u)
    v.frequency.value = freq
    v.type = "square"
    u.connect(b.destination)
    u.gain.value = vol * 0.01
    v.start(b.currentTime)
    v.stop(b.currentTime + duration * 0.001)
}


function removeTrash() {
    $(".item").each(function(index) {

        if (!$(this).children(".wps").text().length > 0 && mindMode != "contemplation") {

            $(this).remove();
        }

    });
    $(".item.visualizerState-1").each(function(index) {
        if (!$(this).children(".icon-wrap").children().length > 0 && mindMode != "contemplation") {
            $(this).remove();
        }
    });


}

function markLastWord2() {
    $(".item:nth-last-child(2) p").html(function() {
        var text = $(this).text().split(' ');
        var last = text.pop();
        return "<span class='first'>" + text.join(" ") + "</span>" + (text.length >= 0 ? ' <span class="last">' + last + '</span>' : last);
    });
}

function markLastWord() {
    $('.active p').html(function() {
        var text = $(this).text().split(' ');
        var last = text.pop();
        return "<span class='first'>" + text.join(" ") + "</span>" + (text.length >= 0 ? ' <span class="last">' + last + '</span>' : last);
    });
}

//* helper funktionen

Number.prototype.map = function(in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function roundPitch(frequency) {
    var noteNum = 7 * (Math.log(frequency / 440) / Math.log(2));
    return Math.round(noteNum) + 69;
}

function roundVolume(frequency) {
    var noteNum = 7 * (Math.log(frequency / 440) / Math.log(2));
    return Math.round(noteNum) + 69;
}

function calcStyles(activeID, timeDifference, numOfWords, volume, voicePitch, wps, input) {

    var fontsize = 300;
    var fontWeight;
    var voicePitch;
    var randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) - 1;
    var textStyle = "";
    var randomNumberFloat = Math.random() * (100 - 1 + 1) - 1;
    var maxWidth;
    var voicePitch;
    var textTransform = "none";
    var lpsFontsize;
    var letterSpacing = 0;
    var minFont;
    var slaveRandomness = 1;


    var textColor = "black";
    const activeSelector = "#" + activeID;
    var rndmBigNumber = Math.floor(0 + Math.random() * (100 + 1 - 0));
    var rndmRotation = 0;
    if (smallOldText == true) {
        $(activeSelector + "> p .smallP").addClass("showBlock");
    } else {

    }



    if (rndmBigNumber > 99) {
        flipFactor = 180;
        rndmRotation = flipFactor;
    }
    if (randomNumberFloat > 99.8) {
        letterSpacing = 20;
        TweenMax.to($(activeSelector + "> p"), 300, {
            letterSpacing: letterSpacing + 120
        });
    } else {
        letterSpacing = 0;
    }


    if (displayMode == "center" || displayMode == "horizontal") {
        wpsToLetter = ((numOfWords / 2) * (timeDifference / 8));
        if (wpsToLetter < 0.5 && wpsToLetter > 0.3) wpsToLetter = 0.2;
        if (wpsToLetter < 0.3) wpsToLetter = 0;
        if (wpsToLetter > 3) wpsToLetter = 3 - (wpsToLetter / 3);
        if (wpsToLetter < 0) wpsToLetter = 0;
    } else {
        // console.log("yo");
        if (wps < 0.5) wps = 0.3;
        if (wps > 1.2) wps = 1.2;
        wpsToLetter = (wps * 2.5) - 0.75;
    }

    if (fontSizeMode == "huge") {
        fontsize = "400";
        fontWeight = "900";
        lpsFontsize = "13vw";
    }

    if (fontSizeMode == "small") {
        fontsize = "100";
        fontWeight = "600";
        fontSpacing = "huge";
        lpsFontsize = "13vw";
    }


    if (fontSizeMode == "voice") {
        fontsize = (volume * volume) / 10;

        if (fontsize > 900) {
            fontsize = (volume * volume) / 15;
            fontWeight = 800;
            if (rndmBigNumber > 90) {
                fontWeight = 400;
            }
        };
        if (fontsize > 3000) {
            fontsize = (volume * volume) / 20;
            fontWeight = 900;
            if (rndmBigNumber > 95) {
                fontWeight = 100;
            }
        };
        if (fontsize < 250 && visualizerState != 0) {
            fontsize = 250;
        };
        if (fontsize < 180 && visualizerState == 0) {
            fontsize = 180;
        };

        if (visualizerState == 5) {
            if (fontsize < 400) {
                fontsize = 400;
                // fontWeight = "800";
            };
        }



        // if (volume > 150) {
        //   fontsize = (volume * volume) / 50;
        // };
        if (fontsize > 1600) {
            // fontWeight = "900";
            textTransform = "uppercase";
        }

        if (rndmBigNumber > 40) {
            fontWeight = "800";
        }
        if (rndmBigNumber > 35 && rndmBigNumber < 40) {
            fontWeight = "700";
        }
        if (rndmBigNumber > 30 && rndmBigNumber < 35) {
            fontWeight = "600";
        }
        if (rndmBigNumber > 20 && rndmBigNumber < 30) {
            fontWeight = "400";
        }
        if (rndmBigNumber > 0 && rndmBigNumber < 20) {
            fontWeight = "100";
        }



        if (visualizerState != 11 && visualizerState != 12 && visualizerState != 13) {
            if (volume > 140) {
                displayColor = secondaryColor;
            } else {
                displayColor = primaryColor;
            }
        } else {
            displayColor = primaryColor;
        }
        if (visualizerState == 0) {
            if (volume > 140) {
                displayColor = secondaryColor;
            } else {
                displayColor = primaryColor;
            }
        };


    }

    if (numOfWords > 2 && textMode != "words" && fontSizeMode != "normal" && fontSizeMode != "small") {
        if (randomNumberFloat <= 98) {
            $(activeSelector).addClass("alignTextLeft");
        }
    } else {
        if (randomNumberFloat >= 90 && fontSizeMode != "small") {
            $(activeSelector).addClass("alignTextLeft");
        }
    }
    if (shoppingMode == true) {
        $(activeSelector).addClass("alignTextLeftTop");
    }
    if (fontSpacing == "huge") {
        letterSpacing = 1;
        TweenMax.to($(activeSelector + "> p"), 300, {
            letterSpacing: letterSpacing + 40
        });
    }

    if (fontSizeMode != "normal" && fontSizeMode != "small") {
        if (textStyle == "") {
            if (!$(activeSelector + "> p").hasClass("outlineStyle") && !$(activeSelector + "> p").hasClass("normalStyle")) {
                if (randomNumber > 6) {
                    $(activeSelector + "> p").removeClass();
                    textStyle = "outlineStyle";
                    fontWeight = 900;
                    $(activeSelector + "> p").addClass(textStyle);
                }

                if (randomNumber >= 3 && randomNumber <= 6) {
                    $(activeSelector + "> p").removeClass();
                    textStyle = "normalStyle";

                    $(activeSelector + "> p").addClass(textStyle);
                }
                // if (randomNumber < 3) {
                //   $(activeSelector + "> p").removeClass();
                //   textStyle = "glitchStyle";
                //   $(activeSelector + "> p").addClass(textStyle);
                // }
            }
        }
    } else {
        $(activeSelector + "> p").removeClass();
    }

    $(activeSelector + "> p").css({
        fontSize: fontsize * 0.9 + '%',
        letterSpacing: letterSpacing + "vmin",
        fontWeight: fontWeight,
        textTransform: textTransform
    });
    $(activeSelector + "> .lps").css({
        fontSize: lpsFontsize
    });
}



function createItem() {

    const activeItem = document.createElement("div");
    const p = document.createElement("p");
    activeItem.className = "item active";
    activeItem.id = "item-" + resultCount;
    items.appendChild(activeItem);
    // const readingIndicator = document.createElement("div");
    const wps = document.createElement("div");
    const iframeWrap = document.createElement("div");
    const lps = document.createElement("div");
    const iconWrap = document.createElement("figure");
    const voicePitch = document.createElement("span");
    const volume = document.createElement("span");
    const shoppingButton = document.createElement("a");
    const shoppingDataWrap = document.createElement("div");
    const shoppingDataImage = document.createElement("div");
    const shoppingDataText = document.createElement("span");
    const wordCounter = document.createElement("span");
    const frameNumber = document.createElement("span");
    const timestampSpanFirstWord = document.createElement("span");
    const recDuration = document.createElement("span");
    const timestampSpanLastWord = document.createElement("span");
    const timestampReadable = document.createElement("span");
    const imageWrap = document.createElement("figure");
    const test = document.createElement("div");

    activeItem.style.setProperty('--darkColor', activeColor);
    const now = new Date();
    resultCount = resultCount + 1;



    iframeWrap.className = "iframeWrap";
    wps.className = "wps";
    frameNumber.className = "frameNumber";
    lps.className = "lps";
    voicePitch.className = "voicePitch";
    iconWrap.className = "icon-wrap";
    // readingIndicator.className ="readingIndicator";
    imageWrap.className = "image-wrap";
    shoppingDataWrap.className = "shoppingData-wrap";
    shoppingDataImage.className = "shoppingData-image";
    shoppingDataText.className = "shoppingData-text";
    volume.className = "volume";
    shoppingButton.className = "shoppingButton";
    shoppingButton.setAttribute('target', '_blank');
    recDuration.className = "recDuration";
    timestampSpanLastWord.className = "timestamp timestampSpanLastWord";
    timestampSpanFirstWord.className = " timestampSpanFirstWord";
    timestampReadable.className = " timestampReadable";
    wordCounter.className = "wordCounter";
    // activeItem.appendChild(readingIndicator);


    activeItem.appendChild(iframeWrap);
    activeItem.appendChild(wps);
    activeItem.appendChild(lps);
    activeItem.appendChild(voicePitch);
    activeItem.appendChild(volume);
    activeItem.appendChild(wordCounter);
    activeItem.appendChild(frameNumber);
    activeItem.appendChild(recDuration);
    activeItem.appendChild(timestampReadable);
    activeItem.appendChild(timestampSpanLastWord);
    activeItem.appendChild(timestampSpanFirstWord);
    activeItem.appendChild(p);

    activeItem.appendChild(shoppingDataText);
    activeItem.appendChild(shoppingDataImage);
    activeItem.appendChild(shoppingDataWrap);
    activeItem.appendChild(shoppingButton);
    activeItem.appendChild(iconWrap);
    activeItem.appendChild(imageWrap);

}

function startRecognition() {

    createItem();

    recognition.start();
}

var backendTranscript;
var prevBackendTranscript;
var intervalBackendTranscript;
var backendTranscriptObject = {};
var numOfVisualizedTranscripts = 0;
var randomTextIndex;
(function() {
    var originalSetInterval = window.setInterval;

    window.setInterval = function(fn, delay, runImmediately) {
        if (runImmediately) fn();
        return originalSetInterval(fn, delay);
    };
})();
var visualizeIt;
var justRendered = false;
var slaveVisualizationSpeed;
var intervalBackendTranscript;
var firstStarted = false;


function stopRecognition() {
    recognition.abort();
}

function pauseRecognition() {
    recognition.stop();
}

//API CALL HANDLER
function handleIcons(wordToTranslate, activeID) {

    return new Promise((resolve, reject) => {
        try {
            iconData = getIcon(wordToTranslate);
            resolve(iconData);
        } catch (err) {
            reject();
        }
    });
}

async function handleWebsites(words, activeID, whichWebsite) {

    return new Promise((resolve, reject) => {

        try {
            websiteData = getWebsite(words, whichWebsite);
            resolve(websiteData)
        } catch (err) {
            reject();
        }
    });

}

async function handleImages(words, activeID) {
    return new Promise((resolve, reject) => {
        try {
            imageData = getImage(words, filter);
            resolve(imageData);
        } catch (err) {
            reject(err);
        }
    });
}

async function handleShoppingData(words, activeID) {
    return new Promise((resolve, reject) => {

        try {
            shoppingData = getShoppingImage(words);
            resolve(shoppingData);
        } catch (err) {
            reject();
        }
    });
}




function handleTranslation(words, activeID) {



    let options = ['englisch', 'deutsch', 'chinesisch', 'russisch'];
    if (iconMode != true) {
        var wordsLow = String(words).toLowerCase();
        for (i = 0; i <= options.length; i++) {
            if (wordsLow.includes(options[i])) {
                if (options[i] == "englisch") {
                    translationLanguage = "en";
                }
                if (options[i] == "deutsch") {
                    translationLanguage = "de";
                }
                if (options[i] == "chinesisch") {
                    translationLanguage = "zh";
                }
                if (options[i] == "russisch") {
                    translationLanguage = "ru";
                }
            }
        }
    } else {
        translationLanguage = "en";
    }
    return new Promise(resolve => {
        translationData = getTranslation(words, translationLanguage);
        resolve(translationData);
    });

}

function handleImageVisility(numOfWords, activeSelector) {
    var sumOfAllImages = $(activeSelector + ' .image-wrap img').length;
    var allImages = $(activeSelector + '.image-wrap img');
    var imagesWithoutLastThree;
    var randomNumberFloat = Math.random() * (100 - 1 + 1) - 1;
    var imagesWithoutLastTwo;
    if (randomNumberFloat > 50) {
        invisAnimation = "invisibleHyperactive";
    } else {
        invisAnimation = "invisible";
    }
    if (!showAll) {
        if (sumOfAllImages > 3) {
            imagesWithoutLastThree = allImages.slice(0, sumOfAllImages - 4);
            // console.log(imagesWithoutLastThree);
            imagesWithoutLastThree.each(function(image, index) {

                //
                $(this).addClass(invisAnimation);


            });
        }
    }
}

function handleIframeVisiblity(activeID) {

    const activeSelector = "#" + activeID;
    var sumOfAllIframes = $("body").find($('iframe')).length;
    var allIframes = $("body").find($('iframe'));
    var allItems = $("body").find($('.item'));
    var iframesWithoutLastThree;
    var iframesWithoutLastTwo;

    if (sumOfAllIframes > 50) {

        iframesWithoutLastThree = allIframes.slice(0, 4);
        iframesWithoutLastThree.each(function(iframe, index) {
            $(this).remove();
        });
    }

}

async function handleImageVisuals(words, activeID) {

    const lastWordOfSpeak = words.split(" ").splice(-1);

    const activeSelector = "#" + activeID;
    var imageData
    var websiteData;
    var translationData;
    var iconData;
    var numOfImages;
    var shoppingData;
    var numOfWords = words.split(" ").length;

    if (words != "") {




        if (textMode == "wholeText" && imageMode) {
            try {
                imageData = await handleImages(words, activeID);
                imageData = imageData.data.result.items[0];

            } catch {

            }
            if (imageData != "error" && imageData && imageData != null) {
                visualizeImage(imageData, imageData.url, activeID, numOfWords);
            }
        }
        if (shoppingMode) {
            try {
                shoppingData = await handleShoppingData(words, activeID);
                shoppingData = shoppingData.data.result.items[0];
            } catch {}

            if (shoppingData != "error") {
                visualizeShoppingData(shoppingData, activeID);
            }
        }
        if (textMode == "noText" && imageMode || textMode == "headline") {
            try {
                imageData = await handleImages(words, activeID);
                imageData = imageData.data.result.items[0];
            } catch {}

            if (imageData != "error" && imageData) {
                visualizeImage(imageData, imageData.url, activeID, numOfWords);
            }
        }
        if (textMode == "words" && imageMode) {
            if (displayMode == "vertical" || displayMode == "horizontal") {
                activeID = "item-" + (resultCount - 1);
                createItem();
            }
            try {
                var imageData = await handleImages(words, activeID);
                imageData = imageData.data.result.items[0];
            } catch {

            }
            if (imageData != "error" && imageData) {

                visualizeImage(imageData, imageData.url, activeID, numOfWords);
                visualizeText(lastWordOfSpeak, activeID);
            }
        }
        if (textMode == "noText" && translationMode && iconMode && !imageMode) {
            try {
                translationData = await handleTranslation(lastWordOfSpeak, activeID);
            } catch {}

            if (translationData != "error" && translationData) {
                visualizeText(translationData.text, activeID);
                try {
                    iconData = await handleIcons(translationData.text, activeID);
                } catch {}

                if (iconData != "error") {
                    visualizeIcon(iconData, activeID);
                    // removeTrash();
                }
            }


        }
    }

}

async function handleTextVisuals(words, activeID) {

    const lastWordOfSpeak = words.split(" ").splice(-1);


    const activeSelector = "#" + activeID;
    var websiteData;
    var translationData;
    var iconData;
    var imageData;

    var numOfWords = words.split(" ").length;
    if (mindMode != "contemplation") {
        handleImageVisility(numOfWords, activeSelector);
    }
    if (mindMode != "contemplation") {
        if (textMode == "words" && translationMode && !iconMode && !imageMode) {

            translationData = await handleTranslation(lastWordOfSpeak, activeID);
            if (translationData && translationData != "error") {
                visualizeText(translationData.text, activeID);
            }

        }

        if (textMode == "words" && translationMode && iconMode && !imageMode) {
            translationData = await handleTranslation(lastWordOfSpeak, activeID);


            if (displayMode == "vertical" || displayMode == "horizontal") {
                activeID = "item-" + (resultCount - 1);
                createItem();
            }
            if (translationData && translationData != "error") {
                visualizeText(translationData.text, activeID);
                try {
                    iconData = handleIcons(translationData.text, activeID);
                } catch {}
                if (iconData && iconData != "error") {
                    visualizeIcon(iconData, activeID);

                }
            }

        }


        if (textMode == "words" && !translationMode && !imageMode) {
            if (displayMode == "vertical" || displayMode == "horizontal") {
                activeID = "item-" + (resultCount - 1);
                createItem();
            }
            visualizeText(lastWordOfSpeak, activeID);
        }


        if (textMode == "wholeText" && translationMode && !iconMode && !imageMode) {
            try {
                translationData = await handleTranslation(lastWordOfSpeak, activeID);
            } catch {}
            if (translationData && translationData != "error") {
                visualizeText(translationData.text, activeID);
            }
        }
        if (textMode == "noText" && physicsMode == true) {
            visualizeText(words, activeID);
        }

        if (textMode == "headlines") {
            visualizeText(words, activeID);
        }
        if (textMode == "noText") {
            visualizeText(words, activeID);
        }

        if (wikiMode && webMode) {

            const activeSelector = "#" + activeID;
            $(activeSelector).addClass("brightUI");
            visualizeText(words, activeID);


            try {
                websiteData = await handleWebsites(lastWordOfSpeak, activeID, "wiki");
                websiteData = websiteData.data.result.items.mainline[0].items[0];


            } catch {}
            if (websiteData != "https://www.wikipedia.org/") {
                if (websiteData && websiteData != "error") {
                    visualizeWebsite(websiteData, activeID);
                    handleIframeVisiblity(activeID);
                }
            }


        }


        if (textMode == "wholeText" && translationMode && iconMode && !imageMode) {
            try {
                translationData = await handleTranslation(lastWordOfSpeak, activeID);
            } catch {}

            if (translationData && translationData != "error") {
                visualizeText(translationData.text, activeID);
                const lastWordOfTranslation = translationData.text[0].split(" ").splice(-1);
                var iconData = handleIcons(lastWordOfTranslation, activeID);
                if (iconData && iconData != "error") {
                    visualizeIcon(iconData, activeID);
                }
            }
        }


        if (textMode == "wholeText" && !translationMode && !imageMode) {
            visualizeText(words, activeID);
        }

        if (textMode == "wordsPerSecond" && !imageMode) {
            visualizeText(words, activeID);
        }

        if (textMode == "walloftext" && !translationMode && !imageMode) {
            activeID = "item-" + (resultCount - 1);
            createItem();
            visualizeText(lastWordOfSpeak, activeID);
            // WARUM? ^^
            removeTrash();
        }
        if (textMode == "walloftext" && translationMode && !iconMode && !imageMode) {
            try {
                translationData = await handleTranslation(lastWordOfSpeak, activeID);
            } catch {}

            if (translationData && translationData != "error") {
                activeID = "item-" + (resultCount - 1);
                createItem();
                visualizeText(translationData.text, activeID);
                removeTrash();
            }
        }

        if (textMode == "wholeText" && imageMode && translationMode) {


            try {
                translationData = await handleTranslation(lastWordOfSpeak, activeID);
            } catch {

            }
            if (translationData && translationData != "error") {
                visualizeText(translationData.text, activeID);
            }
        }

        if (textMode == "wholeText" && imageMode && !translationMode) {
            visualizeText(words, activeID);
        }



        if (webMode && wikiMode != true) {

            const activeSelector = "#" + activeID;
            $(activeSelector).addClass("brightUI");
            visualizeText(words, activeID);
            try {
                websiteData = await handleWebsites(words, activeID, "allWebsites");
                websiteData = websiteData.data.result.items.mainline[0].items[0];
            } catch {
                websiteData = await handleWebsites(words, activeID, "allWebsites");
                websiteData = websiteData.data.result.items.mainline[0].items[0];
            }
            if (websiteData && websiteData != "error") {
                visualizeWebsite(websiteData, activeID);
                handleIframeVisiblity(activeID);
            }
        }

    }

    if (mindMode == "contemplation" && textMode != "words") {
        try {
            var imageData = await handleImages(words, activeID);
            imageData = imageData.data.result.items[0];
        } catch {
            var imageData = await handleImages(words, activeID);
            imageData = imageData.data.result.items[0];
        }

        if (imageData && imageData != "error") {
            visualizeImage(imageData, activeID, numOfWords);
        }
    }
    if (mindMode == "contemplation" && textMode == "words") {
        try {
            var imageData = await handleImages(words, activeID);
            imageData = imageData.data.result.items[0];
        } catch {}
        visualizeText(lastWordOfSpeak, activeID);
        if (imageData && imageData != "error") {
            visualizeImage(imageData, activeID, numOfWords);
        }
    }

}

var prevIcon;

function visualizeIcon(iconData, activeID) {
    const activeSelector = "#" + activeID;
    var randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) - 1;
    var imgScale;
    var volume = $(activeSelector + "> .volume").text();

    if (iconData.preview_url != null) {
        if (iconData.preview_url != prevIcon) {

            const iconImg = document.createElement("img");
            iconImg.className = "icon-img";
            $(activeSelector + "> .icon-wrap").append(iconImg);
            var staticSrc = iconData.preview_url;
            var title = iconData.term_slug;
            $(activeSelector + "> .icon-wrap .icon-img:last-child").attr("src", staticSrc);
            var rndmScale = Math.floor(9 + Math.random() * (10 + 1 - 9));
            var activeImageWidth = $(activeSelector + "> .icon-wrap .icon-img:last-child").width();
            var activeImageHeight = $(activeSelector + "> .icon-wrap .icon-img:last-child").height() * (rndmScale / 10);
            var centerX = ($(window).width() / 2) - (activeImageWidth / 2);
            var centerY = ($(window).height() / 2) - (activeImageHeight / 2);
            var randomX = Math.floor(Math.random() * (($(window).width() - activeImageWidth * 2 + ($(window).width() / 4)) + 1));
            var randomY = Math.floor(Math.random() * (($(window).height() - activeImageHeight * 4 + ($(window).height() / 4)) + 1));
            if (physicalIcons) {
                iconImg.className = "icon-img physical";

                $(".physic-wrap").append(iconImg);
                $(".physic-wrap .icon-img:last-child").css({
                    'left': randomX,
                    'top': randomY
                });

            }
            if (textMode != "noText") {
                $(activeSelector + "> .icon-wrap .icon-img:last-child").css({
                    'left': randomX,
                    'position': 'absolute',
                    'top': randomY
                });
            }
        }
        prevIcon = iconData.preview_url;
    } else {

    }

    jumpToLastIcon(activeID);

}




function addDataToActiveItem(input, activeID) {


    const activeSelector = "#" + activeID;
    const now = new Date();
    var sum, avgVolume, avgWps = 0;
    var pitchSum, avgPitch = 0;
    const previousTranskript = $(".item").eq(-2).find(".first").text() + " " + $(".item").eq(-2).find(".last").text();
    var randomNumber = Math.floor(Math.random() * (50 - 1 + 1)) - 1;

    if (textMode != "words" && iconMode != true && translationMode != true) {
        thisNumOfWords = input.split(" ").length;
    } else {
        thisNumOfWords = 1;
    }

    if (textMode == "words") {
        wordCount = wordCounting;
    } else {
        wordCount = $(activeSelector + "> p").text().split(' ').length - 1;
    }

    if (volumeArray.length) {
        sum = volumeArray.reduce(function(a, b) {
            return a + b;
        });
        avgVolume = sum / volumeArray.length;
    }

    volumeArray.push(voiceVolume);

    if (pitchArray.length) {
        pitchSum = pitchArray.reduce(function(a, b) {
            return a + b;
        });
        avgPitch = pitchSum / pitchArray.length;
    }
    if ($("#pitch").text().length != 0 && $("#pitch").text() != " " && parseInt($("#pitch").text()) < 800 && parseInt($("#pitch").text()) > 300) {
        pitchArray.push(parseInt($("#pitch").text()));
    }

    $(activeSelector + "> .shoppingButton").text("jetzt kaufen");
    $(activeSelector + "> .voicePitch").text(avgPitch);


    if (textMode == "wholeText") {
        $(activeSelector + "> .volume").text(avgVolume);
    }
    if (textMode == "walloftext") {
        $(activeSelector + "> .volume").text(voiceVolume);
    }
    if (textMode == "words") {
        $(activeSelector + "> .volume").text(voiceVolume);
    }
    if (textMode == "noText") {
        $(activeSelector + "> .volume").text(voiceVolume);
    }

    $(activeSelector + "> .wordCounter").text(thisNumOfWords);
    $(activeSelector + "> p").text(input);
    $(activeSelector + "> .timestampSpanLastWord").text(now.getTime());
    $(activeSelector + "> .timestampReadable").text(new Date().toLocaleTimeString());

    $(activeSelector + "> .wps").text(Math.round(thisNumOfWords / thisTimeDifference));
    thisNumOfLetters = input.length;

    thisVolume = $(activeSelector + "> .volume").text();




    thisVoicePitch = $(activeSelector + "> .voicePitch").text();
    thisWps = Math.round(thisNumOfWords / thisTimeDifference);
    thisLps = thisNumOfLetters;
    thisTimeDifference = (Math.abs($(activeSelector + "> .timestampSpanLastWord").text() - $(activeSelector + "> .timestampSpanFirstWord").text()) / 1000);
    $(activeSelector + "> .lps").text(thisLps);
    $(activeSelector + "> .recDuration").text(thisTimeDifference);
    markLastWord();
    $(activeSelector + "> p").prepend("<div class='smallP'></div>");
    $(activeSelector + "> p .smallP").text(previousTranskript);

}

function scrollInteractions(activeID) {
    const activeSelector = "#" + activeID;
    if (displayMode == "horizontal") {
        var lastItemOffset = $(activeSelector).prev().position();
        $('html, body').stop().animate({
            scrollLeft: lastItemOffset.left
        }, 0);
    }

    if (displayMode == "vertical") {
        var lastItemOffset = $(activeSelector).position();
        $('html, body').stop().animate({
            scrollTop: lastItemOffset.top
        }, 0);
    }

}


function handleItemVisibility(activeID) {
    const activeSelector = "#" + activeID;
    if (mapActive != true) {
        if (!showAll) {
            makeOnlyLastVisible(activeID);
        }
        if (showAll == "few") {
            makeOnlyLastThreeVisible(activeID);
        }
    }
}


function getRandomizer(bottom, top) {
    return function() {
        return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
    }
}




function visualizeWebsite(websiteData, activeID) {
    var url = websiteData.url;
    const activeSelector = "#" + activeID;
    var $iframeWrap = $(activeSelector + '> .iframeWrap');
    var rndmScale = Math.floor(0.7 + Math.random() * (1.2 + 0.7 - 1));
    var rndmBigNumber = Math.floor(0 + Math.random() * (100 + 1 - 0));
    var rndmNumber = Math.floor(0 + Math.random() * (10 + 1 - 0));
    var rndmRotation = Math.floor(-10 + Math.random() * (10 + 1 + 10));
    var randomWidth = Math.floor(Math.random() * (80 - 60 + 1)) + 60;
    var randomHeight = Math.floor(Math.random() * (80 - 60 + 1)) + 60;

    var randomX = Math.floor(Math.random() * (($(window).width() / 2) + 1));
    var randomY = Math.floor(Math.random() * (($(window).height() / 2) + 1));
    if (url != null) {


        var $iframe = $("<iframe>", {
            src: url,
            sandbox: ''
        });
        $iframe.attr("allowTransparency", "true");
        if (wikiMode == true) {
            $iframe.attr("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
        }
        $iframe.css("backgroundColor", "transparent");
        $iframeWrap.append($iframe);


    }
}




function visualizeShoppingData(shoppingData, activeID) {
    const activeSelector = "#" + activeID;
    $(activeSelector + "> .shoppingData-image").css("background-image", "url(" + shoppingData.product.image.urlMedium + ")");
    $(activeSelector + "> .shoppingData-wrap").text(shoppingData.product.description);
    $(activeSelector + "> p").text(shoppingData.product.title.slice(0, 20));



    if (shoppingData.offers[0].url != "") {
        $(activeSelector + "> .shoppingButton").addClass("-visible");
        $(activeSelector + "> .shoppingButton").attr("href", shoppingData.offers[0].url);


        // window.open(shoppingData.offers[0].url, '_blank', 'location=yes,height=600,width=800,scrollbars=yes,status=yes');
        // visualizeWebsite(shoppingData.offers[0].url, activeID);

    }

}

function visualizeImage(imageData, imageUrl, activeID, numOfWords) {

    imageCount = imageCount + 1;
    var w = window.innerWidth / 2;
    var h = window.innerHeight / 2;
    const activeSelector = "#" + activeID;
    var staticSrc = imageData.media;
    var imageUrl = imageUrl;
    var physicalClass = "";
    if (!hugeImage) {
        physicalClass = "physical";
    }
    if (staticSrc) {

        var $imageLink = $("<a>", {
            id: "image-link-" + imageCount,
            "class": "image-link " + physicalClass,
            "href": imageUrl,
            "target": "_blank",
            "css": {
                opacity: 0
            }
        });

        var $image = $("<img>", {
            "class": "img ",
            "height": imageData.height,
            "width": imageData.width,
            "src": staticSrc
        });

        $(activeSelector + "> .image-wrap").append($imageLink);
        $imageLink.append($image);


        var flipFactor = 0;
        var x;
        var y;
        var rndmScale;
        var randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) - 1;


        if (randomNumber > 70) {
            rndmScale = Math.random() * (1.2 - 0.8) + 1.2;
        } else {
            rndmScale = Math.random() * (0.6 - 0.3) + 0.6;
        }
        var rndmBigNumber = Math.floor(0 + Math.random() * (100 + 1 - 0));
        var rndmNumber = Math.floor(0 + Math.random() * (10 + 1 - 0));
        var rndmRotation = Math.floor(-10 + Math.random() * (10 + 1 + 10));
        var activeImageWidth = $image.width();
        var activeImageHeight = $image.height() * rndmScale;
        var centerX = ($(window).width() / 2) - (activeImageWidth / 2);
        var centerY = ($(window).height() / 2) - (activeImageHeight / 2);
        var randomX = Math.floor(Math.random() * (($(window).width() - activeImageWidth) + 1));
        var randomY = Math.floor(Math.random() * (($(window).height() - activeImageHeight) + 1));
        if (randomX < ($(window).width() / 4)) {
            randomX = randomX + ($(window).width() / 4);
        }
        if (randomY < ($(window).height() / 4)) {
            randomY = randomY + ($(window).height() / 4);
        }
        if (numOfWords <= 2) {
            if (rndmNumber > 5) {
                x = centerX;
                y = centerY;
            } else {
                x = randomX;
                y = randomY;
            }

        } else {
            x = randomX;
            y = randomY;
        }

        if (rndmBigNumber > 93) {
            flipFactor = 180;
            rndmRotation = rndmRotation + flipFactor;
        }
        if (rndmBigNumber > 78) {
            $imageLink.addClass("-imageOnTop");
        }

        $imageLink.css({
            'left': x,
            'top': y,
            'transform': 'scale(' + rndmScale + ') rotate(' + rndmRotation + 'deg) rotate()',
            'opacity': 1,
        });



        if (mindMode == "contemplation") {
            $imageLink.addClass("-isContemplating")
            TweenLite.set($imageLink, {
                x: (Math.random() * w) - ((Math.random() * w)),
                y: h / 2,
                scale: 1,
                opacity: 1
            })
            TweenMax.to($imageLink, 30, {
                x: (Math.random() * w) - ((Math.random() * w)),
                y: '-100%',
                opacity: 0,
                scale: '0'
            });
        }
    }
}

function visualizeText(input, activeID) {
    addDataToActiveItem(input, activeID);
    if (appNetworkMode == "slave") {
        thisVolume = backendTranscriptObject['volume'][backendTranscriptObject['volume'].length - 1] + 40;
        if (thisVolume > 200) thisVolume = 200;
    }
    calcStyles(activeID, thisTimeDifference, thisNumOfWords, thisVolume, thisVoicePitch, thisWps, input);
    scrollInteractions(activeID);
}



const items = document.querySelector(".items");
var lastWordOfSpeak;
var activeID;
var scale = 1;
var secondsSinceLastResult = 0;
var secondsSinceSpeakingActive = 0;
var notYet = true;




function controlSentenceSplit(randomNumber, fontSizeMode, webMode, transcript) {
    if (visualizerState != 2) {
        if (randomNumber > 50) {
            if (transcript.split(' ').length > 2) {
                restartRec();
            }
            if (transcript.split(' ').length == 1 && transcript.length > 5) {
                restartRec();
            }
        }
        if (randomNumber <= 50 && fontSizeMode != "normal" && randomNumber >= 2) {
            if (transcript.split(' ').length > 6) {
                restartRec();
            }
        }


    } else {

    }


}
var justchanged = false;
var newState;
var oldState;

function randomMode(randomNumberFloat) {

    // visualizerState = 10;
    // imageMode = true;
    var rand = Math.round(Math.random() * (13000 - 4800)) + 4800;
    var randomNumber = Math.floor(46 + Math.random() * (100 + 1 - 46));
    var randomMode = Math.floor(Math.random() * (13 - 0 + 1)) - 0;
    var randomNumber2 = Math.floor(Math.random() * (100 - 1 + 1)) - 1;

    if (visualizerState == 1) {
        rand = 6000;
    }


    if (!justchanged) {

        justchanged = true;
        resetVisualizer("toChaos");


        if (randomNumber2 > 30) {

            if (randomNumber >= 85) {
                visualizerState = 7;
            }

            //fallen
            if (randomNumber >= 80 && randomNumber < 88 && !zoomState) {
                visualizerState = 3;
            }

            //vollbild
            if (randomNumber >= 75 && randomNumber < 80) {
                visualizerState = 11;
            }
            //denken
            if (randomNumber >= 70 && randomNumber < 75) {
                visualizerState = 0;
            }
            //icons

            if (randomNumber >= 50 && randomNumber < 70) {
                visualizerState = 2;
            }
            //vollbild

            if (randomNumber >= 46 && randomNumber < 50) {
                visualizerState = 12;
            }
            //icon transkript

            if (randomNumber >= 40 && randomNumber < 46) {
                visualizerState = 14;
            }




            if (randomNumber >= 35 && randomNumber < 40) {
                visualizerState = 7;
                useTranskript = true;
            }

            if (randomNumber < 35) {
                visualizerState = 7;
            }

        } else {
            visualizerState = 7;
        }


        setTimeout(function() {
            justchanged = false;

        }, rand);

    }




}


function hideAllImages() {
    var images = document.getElementsByClassName('img');
    if (images.length > 0) {
        for (i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
    }
}

function showAllImages() {
    var images = document.getElementsByClassName('img');
    if (images.length > 0) {
        for (i = 0; i < images.length; i++) {
            images[i].style.display = "block";
        }
    }

}
var indicateTimeout;
var indicateTimeout2;

function indicateNewFrame() {
    clearTimeout(indicateTimeout);
    $(".action-indicator").addClass("-active");
    indicateTimeout = setTimeout(function() {
        $(".action-indicator").removeClass("-active");
    }, 700);
}
var beepNotStarted = true;
var countBeeps = 0;

function indicateAction() {
    // beep(5, 100, 50);
    clearTimeout(indicateTimeout);
    $(".interaction-indicator").addClass("-active");
    indicateTimeout = setTimeout(function() {
        $(".interaction-indicator").removeClass("-active");
    }, 700);
}
var semanticTriggered = true;
var activeChanged = false;



function makeItemActive(itemNumber) {
    $(".item").each(function(index) {
        if ($(".frameNumber", this).html() == itemNumber) {

            $(this).clone().removeClass("invisible").removeClass("invisibleHyperactive").addClass("active").appendTo(".items");
            mapActive = false;
            zoomState = false;

            prevZoomLevel = 0;
            zoomLevel = 2;
            // $("html").removeClass();
        }
    });
}

var hyperBeepNotStarted = true;
var hyperBeepInterval;
var hyperCountBeeps = 0;

function neustart() {

    messages = [];
    $("html").removeClass("shutDown -blackBg");
    resetNews();
    fresseHalten();
    resetTranscript();

    window.location.href = 'https://' + url + '/master';

}
var denn = false;
var has = false;

function handleSemanticOptions(transcript, activeID, backendTranscriptObject, numOfVisualizedTranscripts) {
    var transcriptLow = transcript.toLowerCase();

    semanticCounter = semanticCounter + 1;
    const activeSelector = "#" + activeID;
    let options = ['penis', 'hans', 'bitte kontrolle',
        'es reicht', 'dynamisch', 'kleiner', 'größer', 'reinzoomen', 'rauszoomen', 'poesie', 'weiter', 'bitte zurück', 'filter', 'not safe', 'not safe for work', 'lottozahlen',
        'tempo', 'ok', 'feedback aus', 'feedback an', 'internet', 'feedback', 'leise', 'hallo hallo', 'shoppen', 'wörter', 'danke',
        'steuer', 'gesteuert', 'schließen', 'text', 'vorlesen', 'zeichen', 'chaos', '?', 'fallen', 'russisch',
        'chinesisch', 'stop', 'fresse', 'sound', 'suchen', 'surfen', 'surfen', 'pause',
        'neustart', 'aus', 'leise', 'stille', 'schnell', 'langsam', 'leise', 'collage', 'geschichte', 'zufall',
        'denken', 'reden', 'stimme', 'text', 'regen', 'wikipedia', 'englisch', 'deutsch', 'unsichtbar', 'hallo'
    ];

    let semanticOptionsEN = ['penis', 'hans', 'control please',
        'enough', 'dynamic', 'smaller', 'bigger', 'zoom in', 'zoom out', 'poetic', 'weiter', 'history', 'filter', 'lotto', 'not safe', 'not safe for work',
        'faster', 'ok', 'feedback off', 'feedback on', 'internet', 'feedback', 'quiet', 'hello hello', 'shopping', 'words', 'thanks',
        'close', 'text', 'read', 'chaos', '?', 'falling', 'russian',
        'chinese', 'stop', 'sound', 'search', 'surfing', 'pause',
        'reboot', 'off', 'quiet', 'silence', 'fast', 'slow', 'quiet', 'meme',
        'thinking', 'talking', 'voice', 'rain', 'wikipedia', 'englisch', 'german', 'invisible'
    ];
    if (language == "english") {
        options = semanticOptionsEN;
    }


    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

    // let options = [''];
    var randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) - 1;

    for (i = 0; i <= options.length; i++) {


        // if (options[i] == "unsichtbar") {
        //    invisCam = true;
        // }
        //
        // if (options[i] == "hallo") {
        //    invisCam = false;
        // }




        if (language == "english") {
            if (transcriptLow.includes(options[i])) {


                if (options[i] == "stop" && !newstickerRunning && !hansKlein) {
                    fresseHalten();
                    hansKlein = false;
                    soundState = false;
                    speaking = false;
                    poesie = false;
                    lottozahlen = false;
                    feedbackState = false;
                }
                if (options[i] == "hänschen" || options[i] == "klein") {
                    präsentation = false;
                    $(".hans").addClass("fadeInAndOut");
                    if (beepNotStarted) {
                        beepNotStarted = false;
                        beepInterval = setInterval(function() {
                            countBeeps = countBeeps + 1;
                            beep(5, 100, 50);
                            if (countBeeps > 2) {
                                clearInterval(beepInterval);
                            }
                        }, 1000);
                    }


                }
                if (options[i] == "penis") {
                    imageMode = true;
                    filter = !filter;
                    indicateAction();

                }




                if (options[i] == "pause" || options[i] == "reboot" && !newsTicker) {

                    restart = true;
                    neustart();

                }



                //Nur wenn feedback loop nicht läuft damit der nicht reinpfuscht..
                if (!speaking) {
                    if (!chaosMode) {
                        resetVisualizer();
                    }




                    if (options[i] == "filter" || options[i] == "nsfw" || options[i] == "not safe" || options[i] == "not safe for work" && !has) {
                        filter = !filter;
                        indicateAction();
                    }



                    if (options[i] == "poetic") {
                        clearTimeout(collageTimeout);
                        poesie = true;
                        indicateAction();
                        feedbackState = false;
                        soundState = false;
                        livestream = false;
                        chaosMode = false;
                        menuState = false;
                        visualizerState = 3;




                    }
                    if (options[i] == "lotto" || options[i] == "lottozahlen") {
                        // lottozahlen = true;indicateAction();
                        // feedbackState = true;
                        // feedbackDuration = 20;
                        // feedbackSpeed = "3";
                        setTimeout(function() {
                            menuState = false;
                        }, 1000);
                    }
                    if (options[i] == "sound") {
                        soundState = !soundState;
                        indicateAction();
                    }


                    //Side Options
                    if (semanticTriggered == true) {


                        if (options[i] == "hello hello" && !countdown) {
                            if ($("html").hasClass("-activeTutorial")) {
                                intro.exit();
                                intro.goToStep(1).start();
                            }
                            menuState = true;
                            indicateAction();
                        }

                        if (options[i] == "thanks") {

                            indicateAction();
                            // transcript = transcript.replace("danke", "bitte");
                            // return transcript;
                            setTimeout(function() {

                                $(".item:nth-last-child(2) p .last").text('no problem :)');
                                // markLastWord2();
                            }, 1000);
                            // transcript = transcript.replace("danke", "bitte");
                        }

                        if (options[i] == "dynamic" && zoomState) {
                            dynamicZoom = !dynamicZoom;
                            zoomInteraction = true;
                            indicateAction();
                            openMapMenu();

                        }
                        // if (options[i] == "bitte kontrolle") {
                        // kontrolle = !kontrolle;
                        // indicateAction();
                        // }


                        if (options[i] == "zoom out") {

                            dynamicZoom = false;
                            indicateAction();
                            zoomInteraction = true;
                            rausGezoomed = true;
                            openMapMenu();

                            if (zoomLevel < 5) {
                                zoomLevel = zoomLevel + 1;
                            }
                            handleZoom();
                        }

                        if (options[i] == "zoom in") {
                            dynamicZoom = false;
                            zoomInteraction = true;
                            indicateAction();
                            reinGezoomed = true;
                            openMapMenu();
                            if (zoomLevel > 2) {
                                zoomLevel = zoomLevel - 1;
                            }
                            if (zoomLevel == 3) {
                                zoomLevel = 2;
                            }

                            if (zoomLevel == 2) {
                                indicateAction();
                                zoomState = false;
                            }

                            handleZoom();

                        }


                        if (options[i] == "fragment") {
                            lesezeichen = !lesezeichen;
                            indicateAction();
                        }

                        semanticTriggered = false;
                        setTimeout(function() {
                            semanticTriggered = true;
                            reinGezoomed = false;
                            rausGezoomed = false;
                            zoomInteraction = false;
                        }, 2000);



                        if (options[i] == "close" || options[i] == "ok") {
                            menuState = false;
                            indicateAction();
                            if ($("html").hasClass("-activeTutorial")) {
                                intro.exit();
                                $("html").removeClass("-activeTutorial");

                            }
                        }

                        if (!präsentation) {

                            if (options[i] == "control" || options[i] == "gesteuert") {
                                sprachSteuerung = !sprachSteuerung;
                                indicateAction();
                                if (sprachSteuerung) chaosMode = false;
                            }
                            if (options[i] == "history") {
                                openMapMenu();
                                if (visualizerState == -1 || visualizerState == 3) {
                                    visualizerState = 6;
                                }
                                zoomState = !zoomState;
                                indicateAction();

                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);
                            }




                            if (options[i] == "fast") {
                                feedbackSpeed = 3;
                                indicateAction();
                                feedbackDuration = 15;
                            }

                            if (options[i] == "slow" && !hansKlein) {
                                fresseHalten();
                                feedbackDuration = 30;
                                feedbackSpeed = 60;
                                indicateAction();
                            }


                            if (options[i] == "normal" && !hansKlein) {
                                fresseHalten();
                                feedbackDuration = 30;
                                feedbackSpeed = 10;
                                indicateAction();
                            }



                            if (options[i] == "feedback" && !hansKlein) {
                                fresseHalten();
                                indicateAction();
                                feedbackState = !feedbackState;

                                if ($("html").hasClass("-activeTutorial")) {
                                    intro.exit();
                                    intro.goToStep(3).start();
                                }

                            }



                            //
                            // if (options[i] == "chaos") {
                            //     // resetVisualizer("toChaos");
                            //     if (!speaking) {
                            //         chaosMode = !chaosMode;
                            //         indicateAction();
                            //         if (chaosMode) sprachSteuerung = false;
                            //     }
                            //
                            //
                            // }

                            if (options[i] == "start") {
                                appState = "visualizer";
                                indicateAction();
                            }


                            if (options[i] == "englisch" || options[i] == "russisch" || options[i] == "chinesisch") {
                                translationMode = true;
                                indicateAction();
                            }

                        }

                        if (options[i] == "geschichte") {
                            aiState = true;
                            kontrolle = true;
                        }

                        if (options[i] == "zufall") {
                            aiState = false;
                            kontrolle = false;
                        }

                        if (options[i] == "internet") {
                            setTimeout(function() {
                                $(".item:nth-last-child(2) p").text('Die digitale Oase');

                            }, 1000);
                        }

                        //Visualizer Options



                        if (sprachSteuerung == true && !präsentation) {



                            if (options[i] == "voice") {
                                clearTimeout(collageTimeout);
                                if (zoomState) zoomState = false;
                                visualizerState = -1;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);
                            }



                            if (options[i] == "shopping") {
                                clearTimeout(collageTimeout);
                                visualizerState = 10;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);
                            }

                            if (options[i] == "iphone") {
                                clearTimeout(collageTimeout);
                                visualizerState = 10;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);
                            }
                            if (options[i] == "thinking") {
                                if (!präsentation) clearTimeout(collageTimeout);
                                visualizerState = 1;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);

                            }

                            if (options[i] == "falling" || options[i] == "rain") {
                                // resetPhysics()
                                // $(".physic-wrap p").remove();
                                //  resetStaticPhysics();
                                // buildPhysicsStatic();
                                if (zoomState) zoomState = false;
                                clearTimeout(collageTimeout);
                                visualizerState = 3;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);

                            }
                            if (options[i] == "wikipedia") {
                                clearTimeout(collageTimeout);
                                visualizerState = 9;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);
                            }

                            if (options[i] == "searching" || options[i] == "surfing") {
                                clearTimeout(collageTimeout);
                                visualizerState = 8;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);
                            }
                            if (options[i] == "words") {
                                clearTimeout(collageTimeout);
                                imageMode = false;
                                visualizerState = 0;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);

                            }

                            if (options[i] == "meme") {

                                visualizerState = 7;
                                indicateAction();

                                if ($("html").hasClass("-activeTutorial")) {
                                    intro.exit();
                                    intro.goToStep(2).start();
                                } else {
                                    setTimeout(function() {
                                        menuState = false;
                                        closeMenu();
                                    }, 1000);
                                }

                            }


                            if (options[i] == "german") {

                                translationMode = false;
                                indicateAction();
                            }

                        }
                    }
                    handleOptionStates();
                    handleVisualizerStates();

                }

            }
        } else {
            if (transcriptLow.includes(options[i])) {

                if (options[i] == "hallo hallo") {
                    menuState = true;
                    indicateAction();
                    if ($("html").hasClass("-activeTutorial")) {
                        intro.exit();
                        intro.goToStep(1).start();
                    }
                }
                if (options[i] == "fresse" || options[i] == "komm runter" || options[i] == "stop" && !newstickerRunning && !hansKlein) {
                    fresseHalten();
                    hansKlein = false;
                    soundState = false;
                    speaking = false;
                    poesie = false;
                    lottozahlen = false;
                    feedbackState = false;
                }
                if (options[i] == "hänschen" || options[i] == "klein") {
                    präsentation = false;
                    $(".hans").addClass("fadeInAndOut");
                    if (beepNotStarted) {
                        beepNotStarted = false;
                        beepInterval = setInterval(function() {
                            countBeeps = countBeeps + 1;
                            beep(5, 100, 50);
                            if (countBeeps > 2) {
                                clearInterval(beepInterval);
                            }
                        }, 1000);
                    }


                }
                if (options[i] == "penis") {
                    imageMode = true;
                    filter = !filter;
                    indicateAction();
                }
                if (options[i] == "synchro") {
                    syncedSlaves = !syncedSlaves;
                    indicateAction();

                }



                if (options[i] == "präsentiere") {
                    // $(".folie-1 p span").addClass("inlineblock");
                    physicInFolie = true;
                    setTimeout(function() {
                        handlePresentation();
                    }, 2000);


                }

                if (options[i] == "pause" || options[i] == "neustadt" || options[i] == "start" && !newsTicker) {



                    restart = true;
                    neustart();


                }
                if (options[i] == "bitte lösch" && !newstickerRunning && !hansKlein) {
                    $(".item").each(function(index) {
                        if (!$(this).hasClass("active"))
                            $(this).remove();
                    });
                    $(".physic-wrap p").remove();
                    rebuildPhysicsStatic();
                    lastTranskription = [];
                }



                //Nur wenn feedback loop nicht läuft damit der nicht reinpfuscht..
                if (!speaking) {
                    if (!chaosMode) {
                        resetVisualizer();
                    }


                    if (!präsentation)


                        if (options[i] == "echo an") {
                            indicateAction();
                            echoMode = true;
                        }
                    if (options[i] == "echo aus") {
                        indicateAction();
                        echoMode = false;
                    }



                    if (options[i] == "es reicht") {
                        feedbackState = false;
                        netzwerk = true;
                        indicateAction();
                        zoomState = false;
                        lesezeichen = false;
                        menuState = false;
                        hansKlein = true;


                    }
                    if (options[i] == "filter" || options[i] == "nsfw" || options[i] == "not safe" || options[i] == "not safe for work") {
                        filter = !filter;
                        indicateAction();
                    }

                    if (options[i] == "bilder an") {
                        imageMode = true;
                    }
                    if (options[i] == "bilder aus") {
                        imageMode = false;
                    }




                    if (options[i] == "poesie") {
                        clearTimeout(collageTimeout);
                        poesie = true;
                        indicateAction();
                        feedbackState = false;
                        soundState = false;
                        livestream = false;
                        chaosMode = false;
                        menuState = false;
                        visualizerState = 3;




                    }
                    if (options[i] == "lotto" || options[i] == "lottozahlen") {
                        // lottozahlen = true;indicateAction();
                        // feedbackState = true;
                        // feedbackDuration = 20;
                        // feedbackSpeed = "3";
                        setTimeout(function() {
                            menuState = false;
                        }, 1000);
                    }
                    if (options[i] == "sound") {
                        soundState = !soundState;
                        indicateAction();
                    }


                    //Side Options
                    if (semanticTriggered == true) {

                        if (options[i] == "bitte zurück") {
                            openMapMenu();
                            if (visualizerState == -1 || visualizerState == 3) {
                                visualizerState = 6;
                            }
                            zoomState = !zoomState;
                            indicateAction();

                            setTimeout(function() {
                                menuState = false;
                                closeMenu();
                            }, 1000);
                        }


                        if (options[i] == "netzwerk") {
                            netzwerk = !netzwerk;
                            indicateAction();
                        }


                        if (options[i] == "danke") {

                            indicateAction();
                            // transcript = transcript.replace("danke", "bitte");
                            // return transcript;
                            setTimeout(function() {

                                $(".item:nth-last-child(2) p .last").text('bitte');
                                // markLastWord2();
                            }, 1000);
                            // transcript = transcript.replace("danke", "bitte");
                        }

                        if (options[i] == "dynamisch" && zoomState) {
                            dynamicZoom = !dynamicZoom;
                            zoomInteraction = true;
                            indicateAction();
                            openMapMenu();

                        }
                        // if (options[i] == "bitte kontrolle") {
                        // kontrolle = !kontrolle;
                        // indicateAction();
                        // }


                        if (options[i] == "rauszoomen") {

                            dynamicZoom = false;
                            indicateAction();
                            zoomInteraction = true;
                            rausGezoomed = true;
                            openMapMenu();

                            if (zoomLevel < 5) {
                                zoomLevel = zoomLevel + 1;
                            }
                            handleZoom();
                        }

                        if (options[i] == "reinzoomen") {
                            dynamicZoom = false;
                            zoomInteraction = true;
                            indicateAction();
                            reinGezoomed = true;
                            openMapMenu();
                            if (zoomLevel > 2) {
                                zoomLevel = zoomLevel - 1;
                            }
                            if (zoomLevel == 3) {
                                zoomLevel = 2;
                            }

                            if (zoomLevel == 2) {
                                indicateAction();
                                zoomState = false;
                            }

                            handleZoom();

                        }


                        if (options[i] == "fragment") {
                            lesezeichen = !lesezeichen;
                            indicateAction();
                        }
                        if (options[i] == "speicher") {

                            indicateAction();
                            $(".item").eq(-2).clone().appendTo($(".app-history"));
                        }
                        semanticTriggered = false;
                        setTimeout(function() {
                            semanticTriggered = true;
                            reinGezoomed = false;
                            rausGezoomed = false;
                            zoomInteraction = false;
                        }, 2000);

                        if (options[i] == "präsentation" && !zoomState && !präsentation) {
                            folienSchritt = 0;
                            präsentation = !präsentation;

                            useTranskript = false;
                            activeFolie = 0;
                            indicateAction();

                        }



                        if (options[i] == "schließen" || options[i] == "ok") {
                            menuState = false;
                            indicateAction();
                            if ($("html").hasClass("-activeTutorial")) {
                                intro.exit();
                                $("html").removeClass("-activeTutorial");
                            }
                        }

                        if (!präsentation) {

                            if (options[i] == "steuer" || options[i] == "gesteuert") {
                                sprachSteuerung = !sprachSteuerung;
                                indicateAction();
                                if (sprachSteuerung) chaosMode = false;
                            }




                            if (options[i] == "livestream" || options[i] == "kommentar") {
                                livestream = !livestream;
                                indicateAction();
                            }

                            if (options[i] == "tagesschau" && !newstickerRunning) {
                                if (newsTicker == true) {
                                    // newsTicker = false;
                                    // $(".notification").removeClass("-visible");
                                    //
                                    // clearInterval(newsTickerInterval);
                                } else {
                                    newsTicker = true;
                                    handleTimer();
                                }

                            }


                            if (options[i] == "tempo") {
                                feedbackSpeed = 3;
                                indicateAction();
                                feedbackDuration = 15;
                            }

                            if (options[i] == "langsam" && !hansKlein) {
                                fresseHalten();
                                feedbackDuration = 30;
                                feedbackSpeed = 60;
                                indicateAction();
                            }


                            if (options[i] == "normal" && !hansKlein) {
                                fresseHalten();
                                feedbackDuration = 30;
                                feedbackSpeed = 10;
                                indicateAction();
                            }
                            if (options[i] == "physik") {
                                physicsMode = true;
                                indicateAction();
                            }


                            if (options[i] == "ruhe" || options[i] == "leise" || options[i] == "stille" && !hansKlein) {
                                fresseHalten();
                                feedbackSpeed = 20;
                                indicateAction();
                                feedbackDuration = 30;
                                feedbackState = false;

                            }
                            if (options[i] == "feedback" && !hansKlein) {
                                fresseHalten();
                                indicateAction();
                                feedbackState = !feedbackState;
                                if ($("html").hasClass("-activeTutorial")) {
                                    intro.exit();
                                    intro.goToStep(3).start();
                                }
                            }
                            if (options[i] == "karte") {
                                menuState = false;
                                indicateAction();
                                zoomState = !zoomState;

                            }



                            //
                            // if (options[i] == "chaos") {
                            //     // resetVisualizer("toChaos");
                            //     if (!speaking) {
                            //         chaosMode = !chaosMode;
                            //         indicateAction();
                            //         if (chaosMode) sprachSteuerung = false;
                            //     }
                            //
                            //
                            // }

                            if (options[i] == "start") {
                                appState = "visualizer";
                                indicateAction();
                            }


                            if (options[i] == "englisch" || options[i] == "russisch" || options[i] == "chinesisch") {
                                translationMode = true;
                                indicateAction();
                            }

                        }
                        if (options[i] == "chat") {
                            chatlog = !chatlog;
                        }

                        if (options[i] == "internet") {
                            setTimeout(function() {
                                $(".item:nth-last-child(2) p").text('Die digitale Oase');

                            }, 1000);
                        }



                        //Visualizer Options

                        if (sprachSteuerung == true && !präsentation) {

                            if (options[i] == "stimme") {
                                clearTimeout(collageTimeout);
                                if (zoomState) zoomState = false;
                                visualizerState = -1;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);
                            }



                            if (options[i] == "vollbild") {
                                clearTimeout(collageTimeout);
                                visualizerState = 11;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);
                            }
                            if (options[i] == "shoppen") {
                                clearTimeout(collageTimeout);
                                visualizerState = 10;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);
                            }

                            if (options[i] == "iphone" || options[i] == "bier" || options[i] == "gemüse" || options[i] == "haus" || options[i] == "rasierer") {
                                clearTimeout(collageTimeout);
                                visualizerState = 10;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);
                            }
                            if (options[i] == "denken" || options[i] == "denke") {
                                if (!präsentation) clearTimeout(collageTimeout);
                                visualizerState = 1;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);

                            }
                            if (options[i] == "zeichen" || options[i] == "symbol") {
                                clearTimeout(collageTimeout);
                                visualizerState = 2;
                                indicateAction();


                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);
                            }
                            if (options[i] == "regen" || options[i] == "fallen") {
                                // resetPhysics()
                                // $(".physic-wrap p").remove();
                                //  resetStaticPhysics();
                                // buildPhysicsStatic();
                                if (zoomState) zoomState = false;
                                clearTimeout(collageTimeout);
                                visualizerState = 3;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);

                            }
                            if (options[i] == "wikipedia") {
                                clearTimeout(collageTimeout);
                                visualizerState = 9;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);
                            }

                            if (options[i] == "suchen" || options[i] == "surfen") {
                                clearTimeout(collageTimeout);
                                visualizerState = 8;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);
                            }
                            if (options[i] == "schnell") {
                                clearTimeout(collageTimeout);
                                imageMode = false;
                                visualizerState = 0;
                                indicateAction();
                                setTimeout(function() {
                                    menuState = false;
                                    closeMenu();
                                }, 1000);

                            }

                            if (options[i] == "collage") {

                                visualizerState = 7;
                                indicateAction();
                                if ($("html").hasClass("-activeTutorial")) {
                                    intro.exit();
                                    intro.goToStep(2).start();
                                } else {
                                    setTimeout(function() {
                                        menuState = false;
                                        closeMenu();
                                    }, 1000);
                                }
                            }


                            if (options[i] == "deutsch") {

                                translationMode = false;
                                indicateAction();
                            }

                        }
                    }
                    handleOptionStates();
                    handleVisualizerStates();

                }

            }
        }


    }
    return transcript;
}
var colorJustChanged = false;

function handleSemanticStyling(transcript, activeID) {
    let root = document.documentElement;
    var randomNumberFloat = Math.random() * (100 - 1 + 1) - 1;
    let activeElement = document.getElementById(activeID);
    let colors = ['rot', 'blau', 'schwarz', 'gelb', 'grün', 'orange', 'braun', 'pink', 'lila', 'silber'];
    let colorsEng = ['red', 'blue', 'black', '  #ffcc00', 'green', 'orange', 'brown', 'pink', 'purple', 'silver'];
    var randomColor = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1)) - 0;
    let html = document.getElementById("physic-wrap");



    for (i = 0; i <= colors.length; i++) {
        if (transcript.includes(colors[i])) {
            activeElement.style.setProperty('--darkColor', colorsEng[i]);

            html.style.setProperty('--darkColor', colorsEng[i]);

            html.classList.add("-" + colorsEng[i]);

            activeElement.classList.add("-" + colorsEng[i]);
            activeColor = colorsEng[i];
            colorJustChanged = true;
            if (colors[i] == 'grün') {
                activeColor = "#4dc255";
            }




        }
        if (transcript.includes(colorsEng[i])) {
            colorJustChanged = true;
            activeElement.style.setProperty('--darkColor', colorsEng[i]);
            html.style.setProperty('--darkColor', colorsEng[i]);

            activeColor = colorsEng[i];

        }
    }

    if (!shoppingMode && !iconMode) {
        if (randomNumberFloat > 98) {
            colorJustChanged = true;
            activeElement.style.setProperty('--darkColor', colorsEng[randomColor]);
            html.style.setProperty('--darkColor', colorsEng[randomColor]);

            activeColor = colorsEng[randomColor];

        }
    }

    if (colorJustChanged) {
        setTimeout(function() {
            colorJustChanged = false;
            activeColor = "black";
        }, 5000);
    }



    handleFeatureStateColors(transcript, activeID);

}

function handleFeatureStateColors(transcript, activeID) {
    let activeElement = document.getElementById(activeID);
    let html = document.getElementById("physic-wrap");
    //
    if (!tagesschauIntroNotPlayed && newstickerRunning) {
        activeColor = "blue";
        colorJustChanged = true;
        activeElement.style.setProperty('--darkColor', activeColor);
        activeElement.style.setProperty('--brightColor', "red");

        html.style.setProperty('--darkColor', activeColor);
        html.style.setProperty('--brightColor', "red");

    }

    if (hansKlein) {
        activeColor = "blue";
        colorJustChanged = true;
        activeElement.style.setProperty('--darkColor', activeColor);
        activeElement.style.setProperty('--brightColor', "red");

        html.style.setProperty('--darkColor', activeColor);
        html.style.setProperty('--brightColor', "red");;
    }
    if (activeColor == "blue" && displayColor == "dark") {
        $("html").addClass("-onBlue");
    } else {
        $("html").removeClass("-onBlue");
    }

}

navigator.getUserMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

//Voice Pitch Funktion
navigator.getUserMedia({
    audio: true
}, startUserMedia, function(e) {
    __log('No live audio input: ' + e);
});



function startUserMedia(stream) {
    const ctx = new AudioContext();
    const analyser = ctx.createAnalyser();
    const streamNode = ctx.createMediaStreamSource(stream);
    streamNode.connect(analyser);
    // Create a new volume meter and connect it.
    meter = createAudioMeter(ctx);
    streamNode.connect(meter);
    drawLoop();
}

// Create pitch bar
var WIDTH = 500;

function drawLoop() {
    voiceVolume = meter.volume * WIDTH * 1.4;
    rafID = window.requestAnimationFrame(drawLoop);
}


// Graphs for Variables
// Initial value for the position; center of the container
const angle = Ola(0, 1000);

// Double size and scale for better resolution
const canvas = document.querySelector("#graphVolume");
const canvas2 = document.querySelector("#graphPitch");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 2;
canvas2.width = window.innerWidth;

const graphVolume = new SmoothieChart({
    millisPerPixel: 2,
    borderVisible: false,
    grid: {
        strokeStyle: 'transparent',
        fillStyle: 'transparent'
    },
    maxValue: 350,
    minValue: -20,

});

const graphPitch = new SmoothieChart({
    grid: {
        strokeStyle: '#fff',
        fillStyle: '#fff'
    },
    maxValue: 15,
    minValue: 0,
    // This makes it render a bit worse, but otherwise it's cheating
    interpolation: 'step'
});

graphVolume.streamTo(canvas, 50);
graphPitch.streamTo(canvas2, 900);

const volumeRough = new TimeSeries();
const volumeSmooth = new TimeSeries();
const pitchRough = new TimeSeries();
const pitchSmooth = new TimeSeries();

// Add to SmoothieChart

graphPitch.addTimeSeries(pitchRough, {
    strokeStyle: 'rgba(0, 0, 255, 1)',
    lineWidth: 2
});
// graphPitch.addTimeSeries(pitchSmooth, { strokeStyle: 'rgba(255, 0, 0, 1)', lineWidth: 2  });


graphVolume.addTimeSeries(volumeSmooth, {
    strokeStyle: 'rgba(0, 0, 0, 1)',
    lineWidth: 11
});
volumeRough.append(new Date(), 0);



(function tick() {
    var pitchOfVoice = 0;
    pitchOfVoice = $("#noteNum").text();
    volumeSmooth.append(new Date(), voiceVolume);
    pitchSmooth.append(new Date(), pitchOfVoice);
    requestAnimationFrame(tick);
})();

// Add a random value to each line every 1-2 seconds
(function update() {

    const pitchOfVoice = $("#noteNum").text();
    const to = voiceVolume;
    angle.value = voiceVolume;

    // console.log("voicepitch:"+ pitchOfVoice);
    pitchRough.append(new Date(), pitchOfVoice);
    volumeRough.append(new Date(), voiceVolume);
    setTimeout(update, 100);
})();




function populateVoiceList() {
    voices = synth.getVoices();
    var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
    voiceSelect.innerHTML = '';
    for (i = 0; i < voices.length; i++) {
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

        if (voices[i].default) {
            option.textContent += ' -- DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
    }
    voiceSelect.selectedIndex = selectedIndex;
}

function rand(min, max, interval) {
    if (typeof(interval) === 'undefined') interval = 1;
    var r = Math.floor(Math.random() * (max - min + interval) / interval);
    return r * interval + min;
}

if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}


var synth = window.speechSynthesis;
var inputForm = document.querySelector('.search-input');
var inputTxt = document.querySelector('.test-p');
var voiceSelect = document.querySelector('select');
var vorlesenFinished = false;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function vorlesen(input, speed, _callback) {
    // if (input.split(" ").length < 2) {
    //   input = input + " " + input + " " + input;
    // } else {
    //       input = input;
    // }
    window.utterances = [];

    vorlesenFinished = false;
    var random = Math.floor(Math.random() * (1.5 - 0 + 1)) - 0;
    numOfSynth = numOfSynth + 1;
    let randomVoice = Math.floor(Math.random() * (voices.length - 17 - 1)) - 1;
    var randomPitch = getRandomArbitrary(0.5, 1.8);
    var randomRate = getRandomArbitrary(0.8, 1.2);
    var utterThis = new SpeechSynthesisUtterance(input);
    utterances.push(utterThis);
    // var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');


    for (i = 0; i <= 3; i++) {
        if (language == "english") {
            utterThis.voice = voices[6];
        } else {
            utterThis.voice = voices[2];
        }

    }
    utterThis.volume = 1;
    utterThis.pitch = randomPitch;
    if (speed == "slow") {
        utterThis.pitch = 0;
        utterThis.rate = 0.29;
    }
    if (speed == "fast") {
        utterThis.pitch = 0;
        utterThis.rate = 0.48;
    }
    if (speed == "medium") {
        utterThis.pitch = 1;
        utterThis.rate = 1;
    }
    if (speed == "random") {
        utterThis.pitch = randomPitch;
        utterThis.rate = randomRate;
    }


    utterThis.onend = function(event) {
        vorlesenFinished = true;
        _callback(vorlesenFinished);
    }

    synth.speak(utterThis);

}



var synthMelodie = new Tone.Synth({
    oscillator: {
        type: 'square'
    },
    envelope: {
        attack: 0.001,
        decay: 0.3,
        sustain: 0.03,
        release: 0.1
    }
}).toMaster()

function playSynth() {
    synthMelodie.triggerAttackRelease('G4', '4n', 1);
    synthMelodie.triggerAttackRelease('E4', '4n', 1.5);
    synthMelodie.triggerAttackRelease('E4', '2n', 2);
    synthMelodie.triggerAttackRelease('F4', '4n', 3);
    synthMelodie.triggerAttackRelease('D4', '4n', 3.5);
    synthMelodie.triggerAttackRelease('D4', '2n', 4);
    synthMelodie.triggerAttackRelease('C4', '4n', 5);
    synthMelodie.triggerAttackRelease('D4', '4n', 5.5);
    synthMelodie.triggerAttackRelease('E4', '4n', 6);
    synthMelodie.triggerAttackRelease('F4', '4n', 6.5);
    synthMelodie.triggerAttackRelease('G4', '4n', 7);
    synthMelodie.triggerAttackRelease('G4', '4n', 7.5);
    synthMelodie.triggerAttackRelease('G4', '2n', 8);

    synthMelodie.triggerAttackRelease('G4', '4n', 9);
    synthMelodie.triggerAttackRelease('E4', '4n', 9.5);
    synthMelodie.triggerAttackRelease('E4', '2n', 10);
    synthMelodie.triggerAttackRelease('F4', '4n', 11);
    synthMelodie.triggerAttackRelease('D4', '4n', 11.5);
    synthMelodie.triggerAttackRelease('D4', '2n', 12);
    synthMelodie.triggerAttackRelease('C4', '4n', 13);
    synthMelodie.triggerAttackRelease('E4', '4n', 13.5);
    synthMelodie.triggerAttackRelease('G4', '4n', 14);
    synthMelodie.triggerAttackRelease('G4', '4n', 14.5);
    synthMelodie.triggerAttackRelease('C4', '4n', 15);


    synthMelodie.triggerAttackRelease('D4', '4n', 16);
    synthMelodie.triggerAttackRelease('D4', '4n', 16.5);
    synthMelodie.triggerAttackRelease('D4', '4n', 17);
    synthMelodie.triggerAttackRelease('D4', '4n', 17.5);
    synthMelodie.triggerAttackRelease('D4', '4n', 18);
    synthMelodie.triggerAttackRelease('E4', '4n', 18.5);
    synthMelodie.triggerAttackRelease('F4', '2n', 19);

    synthMelodie.triggerAttackRelease('E4', '4n', 20);
    synthMelodie.triggerAttackRelease('E4', '4n', 20.5);
    synthMelodie.triggerAttackRelease('E4', '4n', 21);
    synthMelodie.triggerAttackRelease('E4', '4n', 21.5);

    synthMelodie.triggerAttackRelease('E4', '4n', 22);
    synthMelodie.triggerAttackRelease('F4', '4n', 22.5);
    synthMelodie.triggerAttackRelease('G4', '2n', 23);

    synthMelodie.triggerAttackRelease('G4', '4n', 24);
    synthMelodie.triggerAttackRelease('E4', '4n', 24.5);
    synthMelodie.triggerAttackRelease('E4', '2n', 25);


    synthMelodie.triggerAttackRelease('F4', '4n', 26);
    synthMelodie.triggerAttackRelease('D4', '4n', 26.5);
    synthMelodie.triggerAttackRelease('D4', '2n', 27);

    synthMelodie.triggerAttackRelease('C4', '4n', 28);
    synthMelodie.triggerAttackRelease('E4', '4n', 28.5);
    synthMelodie.triggerAttackRelease('G4', '4n', 29);
    synthMelodie.triggerAttackRelease('G4', '4n', 29.5);

    synthMelodie.triggerAttackRelease('C4', '2n', 30);
}

function fresseHalten() {
    clearInterval(intervalIncrementSecondsResult);
    clearInterval(intervalIncrementSecondsSpeaking);

    intervalIncrementSecondsResult = setInterval(incrementSecondsResult, 100);
    intervalIncrementSecondsSpeaking = setInterval(incrementSecondsSpeaking, 100);

    secondsSinceSpeakingActive = 0;
    secondsSinceLastResult = 0;
    speaking = false;
    $("html").removeClass("speaking");

    synth.cancel();
}


var numOfRuns = 0;

function newResult() {
    $("body").find(".readingIndicator").removeClass("-hidden");
    $("body").find(".readingIndicator").removeClass("shrinkAnimationWaitingDuration");
    setTimeout(function() {
        $("body").find(".readingIndicator").addClass("shrinkAnimationWaitingDuration");
    }, 500);

}

function incrementSecondsResult() {
    var randomNumber = Math.floor(Math.random() * (lastTranskription.length - 1 + 0)) - 0;
    var randomNumberFloat = Math.random() * (100 - 1 + 1) - 1;
    if (numOfRuns >= 3) {
        numOfRuns = 0;
    }

    if (secondsSinceLastResult == 0 && feedbackState && !speaking) {
        // $("body").find(".readingIndicator").removeClass("-hidden");
        $("body").find(".readingDurationIndicator").addClass("-hidden");
    }



    if (feedbackState) secondsSinceLastResult += 0.1;

    if (secondsSinceLastResult >= feedbackSpeed) {
        secondsSinceLastResult = 0;
        speaking = true;
        if (aiState) {
            soundState = false;
            kontrolle = false;
        } else {
            soundState = true;
        }

        if (zoomState) zoomState = false;
        $("body").find(".readingDurationIndicator").removeClass("-hidden");
        $("body").find(".readingIndicator").removeClass("shrinkAnimationWaitingDuration");
        $("body").find(".readingIndicator").addClass("-hidden");
        $("body").find(".readingDurationIndicator").addClass("shrinkAnimationSpeakingDuration");
        $("html").addClass("speaking");
        if (randomNumberFloat > 50) {
            invisAnimation = "invisibleHyperactive";
        } else {
            invisAnimation = "invisible";
        }
    }

    if (speaking == true && feedbackState && lastTranskription.length != 0) {
        if (aiState == false) {
            if (numOfRuns == 0) {
                vorlesen(lastTranskription[0], "random", function() {});
            } else {
                if (numOfRuns == 1) {
                    if (lastTranskription.length > 2) {
                        vorlesen(lastTranskription[2], "random", function() {});
                    }
                } else {
                    vorlesen(lastTranskription[randomNumber], "random", function() {});
                }

                if (randomNumberFloat > 50) {
                    vorlesen(lastTranskription[lastTranskription.length - 1], "random", function() {});
                } else {
                    vorlesen(lastTranskription[randomNumber], "random", function() {});

                }
            }
            numOfRuns = numOfRuns + 1;
        }

    }
}

function replaceAllBackSlash(targetStr) {
    var index = targetStr.indexOf("\\");
    while (index >= 0) {
        targetStr = targetStr.replace("\\", "");
        index = targetStr.indexOf("\\");
    }
    return targetStr;
}

function incrementSecondsSpeaking() {
    var activeID = $(".active").attr('id');
    let activeElement = document.getElementById(activeID);

    if (speaking == true && feedbackState) {
        secondsSinceSpeakingActive += 0.1;
    }

    if (secondsSinceSpeakingActive > feedbackDuration) {
        synth.cancel();
        synth.cancel();
        synth.cancel();

        activeElement.style.setProperty('--darkColor', "black");
        secondsSinceSpeakingActive = 0;
        secondsSinceLastResult = 0;
        soundState = false;
        speaking = false;
        glitch = false;
        notYet = true;
        showAll = false;
        invisAnimation = "invisible";
        $("html").removeClass("glitch-2");
        $("html").removeClass("speaking");
        if (!hansKlein) fresseHalten();

    }
}
const scaleMap = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function isEven(value) {
    if (value % 2 == 0)
        return true;
    else
        return false;
}

window.onload = function() {
    if (musikState) {
        "use strict";
        var paths = document.getElementsByTagName('path');
        var visualizer = document.getElementById('visualizer');
        var mask = visualizer.getElementById('mask');
        var h = document.getElementsByTagName('h1')[0];
        var path;
        var report = 0;
        var randomNumberFloat = Math.random() * (100 - 1 + 1) - 1;

        var soundAllowed = function(stream) {
            //Audio stops listening in FF without // window.persistAudioStream = stream;
            //https://bugzilla.mozilla.org/show_bug.cgi?id=965483
            //https://support.mozilla.org/en-US/questions/984179
            window.persistAudioStream = stream;
            h.innerHTML = "Thanks";
            h.setAttribute('style', 'opacity: 0;');
            var audioContent = new AudioContext();
            var audioStream = audioContent.createMediaStreamSource(stream);
            var analyser = audioContent.createAnalyser();
            audioStream.connect(analyser);
            analyser.fftSize = 1024;

            var frequencyArray = new Uint8Array(analyser.frequencyBinCount);
            visualizer.setAttribute('viewBox', '0 0 255 255');

            //Through the frequencyArray has a length longer than 255, there seems to be no
            //significant data after this point. Not worth visualizing.
            for (var i = 0; i < 255; i++) {
                path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('stroke-dasharray', '4,1');
                mask.appendChild(path);
            }




            var doDraw = function() {
                requestAnimationFrame(doDraw);
                analyser.getByteFrequencyData(frequencyArray);

                var adjustedLength;
                for (var i = 0; i < 255; i++) {
                    adjustedLength = Math.floor(frequencyArray[i]) - (Math.floor(frequencyArray[i]) % 5);
                    paths[i].setAttribute('d', 'M ' + (i) + ',255 l 0,-' + adjustedLength);
                }

                var sum = 0;
                for (var i = 0; i < frequencyArray.length; i++) {
                    sum += parseInt(frequencyArray[i], 10); //don't forget to add the base
                }

                var avg = sum / frequencyArray.length;
                var avgScale = scaleMap(avg, 10, 150, .6, 1.3);
                var avgRotation = scaleMap(avg, 10, 150, -20, 20);
                var avgSaturation = scaleMap(avg, 10, 150, 0, 4);

                // setTimeout(function(){


                $(".app-main-wrap .items img").css({
                    'transform': 'rotateZ(' + avgRotation + 'deg)' + ' scale(' + avgScale + ') '
                });

                $(".app-main-wrap .items").css({
                    'transform': 'scale(' + avgScale + ') '
                });
                $(".app-main-wrap .items").css({
                    'filter': 'saturate(' + avgSaturation + ') '
                });



            }
            doDraw();
        }

        var soundNotAllowed = function(error) {
            h.innerHTML = "You must allow your microphone.";
        }

        /*window.navigator = window.navigator || {};
        /*navigator.getUserMedia =  navigator.getUserMedia       ||
                                  navigator.webkitGetUserMedia ||
                                  navigator.mozGetUserMedia    ||
                                  null;*/
        navigator.getUserMedia({
            audio: true
        }, soundAllowed, soundNotAllowed);
    }



};
