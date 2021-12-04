var selectedTextmode;
var selectedFontsize;
var appNetworkMode;
var locale;
var intro = introJs();
var tutorialStep = 0;
a = new AudioContext();

console.log(`%c ________________________________________
< Hänschen Klein ging allein in die weite Welt hinein. >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace")
$("#dataStream").click(function() {
    $("body").toggleClass("datastream-active");
});



var constraints = {
    video: {
        width: {
            ideal: 1920
        },
        height: {
            ideal: 1080
        }
    }
};

// //call getUserMedia, then the magic
// navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
//     var video = document.querySelector('video');
//     video.srcObject = mediaStream;
//     video.play();
// }).catch(function(err){
//     console.log("yikes, and err!" + err.message);
// });


$(".menu-wrap").clone().appendTo(".a3d").removeClass("-original").addClass("-copy");


$(".onboarding-step-1 button").click(function() {
    language = $(this).attr('data-lang');
    setLanguage();
    console.log(language);
    startApp();
    $(".onboarding-step-1").removeClass("-active");
    $(".onboarding-step-2").addClass("-active");
});


$(".hint").each(function(index) {


});
$(document).ready(function() {
    console.log("test");
    setInterval(function() {
        var randomHint = Math.floor(Math.random() * ($(".hint").length - 0 + 1)) + 0;
        console.log("randomHint");
        $(".hint").removeClass("-active");
        $(".hint").eq(randomHint).addClass("-active");
        var reset = setInterval(function() {
            $(".hint").removeClass("-active");
            clearInterval(reset);
        }, 4000);

    }, 60000);


    setInterval(function() {

        if ($(".donation").hasClass("-active")) {

        } else {
            $(".donation").addClass("-active");
        }

        firstRun = firstRun + 1;
    }, 280000);

});

$(".onboarding-step-2 button").click(function() {
    $(".onboarding-step-2").removeClass("-active");
    if (language == "english") {
        vorlesen("Welcome you cream Dumpling", "medium", function() {});
    } else {
        vorlesen("Willkommen du Knödel", "medium", function() {});
    }
});

$(".close").click(function() {
    $(".donation").removeClass("-active");
});
var firstRun = 0;


function stopOnboarding() {
    $("html").removeClass("-activeOnboarding");
}

function setLanguage() {
    $("html").removeClass("german");
    $("html").addClass(language);

    if (language == "german") {
        locale = "de_de";
        $("html").attr("lang", "de");
    } else {
        locale = "en_us";
        $("html").attr("lang", "en");
        $(".onboarding-step-2 span").text('Would you like to see a short tutorial?')
        $(".onboarding-step-2 button:first-child").text('Yes');
        $(".onboarding-step-2 button:nth-child(2)").text('No');
        $(".submenu-wrap .submenu-zoomIn").text("Zoom In");
        $(".submenu-wrap .submenu-zoomOut").text("Zoom Out");
        $(".submenu-wrap .submenu-dynamisch").text("Dynamic");

        $(".step-1-trigger").attr('data-intro', "Say: 'Hello Hello' to open the menu");
        $(".step-3-trigger").attr('data-intro', "Here you can make various settings. Say for example 'Feedback'");
        $(".step-2-trigger").attr('data-intro', "Here you can see the keywords with which you can switch between the different visualizations. For example say 'Meme'.");
    }

}

function startTutorial() {
    $("html").addClass("-activeTutorial");
    stopOnboarding();
    intro.start();

}

function getTranslation(wordToTranslate, language) {
    return $.ajax({
        url: "https://" + url + "/translation/" + language + "/" + wordToTranslate
    });
}




function getImage(searchTerm, filter) {
    var sequenceOfWords;


    var randomImage = Math.round((Math.random() * (40 - 0) + 0) / 10) * 10;
    var randomNumber = Math.floor(Math.random() * (40 - 0 + 1)) + 0;
    var imageType = "all";
    var safesearch;

    if (randomNumber >= 10) {
        imageType = "all";
    } else {
        imageType = "animatedgif";
    }
    if (filter) {
        safesearch = '1';
    } else {
        safesearch = '0';
    }

    console.log(filter);
    console.log(safesearch);

    var randomNr = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    if (searchTerm.split(" ").length < 4) {
        sequenceOfWords = searchTerm.split(" ");
    } else {
        if (randomNr > 80) sequenceOfWords = searchTerm.split(" ").splice(-3);
        if (randomNr > 95) sequenceOfWords = searchTerm.split(" ").splice(-5);
        if (randomNr < 81) sequenceOfWords = searchTerm.split(" ").splice(-1);
    }

    searchTerm = searchTerm.replace(/\s+/g, '%');
    var apiCallUrl = "https://api.qwant.com/v3/search/images?locale=" + locale + "&safesearch=" + safesearch + "&offset=" + randomImage + "&sr=de&r=DE&q=" + sequenceOfWords + "&imagetype=" + imageType;
    console.log(apiCallUrl);

    return $.ajax({
        url: apiCallUrl,
        success: function(data) {
            console.log(data);
        }
    });




}


function getShoppingImage(searchTerm) {


    var sequenceOfWords;
    var randomImage = Math.round((Math.random() * (40 - 0) + 0) / 10) * 10;
    var randomNumber = Math.floor(Math.random() * (40 - 0 + 1)) + 0;
    var apiCallUrl;

    apiCallUrl = "https://api.qwant.com/v3/search/shopping?count=10&q=" + searchTerm + "&t=" + searchTerm + "&f=&offset=1&locale=" + locale + "&uiv=4";

    return $.ajax({
        url: apiCallUrl
    });



}



function getWebsite(searchTerm, whichWebsite) {
    console.log(whichWebsite);

    var whichWebsite = whichWebsite;
    var sequenceOfWords;
    var randomImage = Math.round((Math.random() * (40 - 0) + 0) / 10) * 10;
    var randomNumber = Math.floor(Math.random() * (40 - 0 + 1)) + 0;
    var apiCallUrl;
    if (filter) {
        safesearch = '';
    } else {
        safesearch = 'off';
    }


    //   var randomNr = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    // if (searchTerm.split(" ").length < 4) {
    //   sequenceOfWords = searchTerm.split(" ");
    // } else {
    //   if (randomNr > 80) sequenceOfWords = searchTerm.split(" ").splice(-3);
    //   if (randomNr > 95) sequenceOfWords = searchTerm.split(" ").splice(-5);
    //   if (randomNr < 81) sequenceOfWords = searchTerm.split(" ").splice(-1);
    // }
    //
    // searchTerm = searchTerm.replace(/\s+/g, '%');

    if (whichWebsite == "wiki") {
        apiCallUrl = "https://api.qwant.com/v3/search/web?count=10&q=" + searchTerm + "%Wikipedia&t=" + searchTerm + "%Wikipedia&f=&offset=" + randomImage + "&locale=" + locale + "&uiv=4&safesearch=" + safesearch;
        console.log(apiCallUrl);
    } else {
        apiCallUrl = "https://api.qwant.com/v3/search/web?count=10&q=" + searchTerm + "&t=" + searchTerm + "&f=&offset=" + randomImage + "&locale=" + locale + "&uiv=4&safesearch=" + safesearch;
        console.log(apiCallUrl);
    }
    return $.ajax({
        url: apiCallUrl
    });



}

function getIcon(parInput) {
    return $.ajax({
        url: "https://" + url + "/icon/" + parInput
    });
}



class En {
    constructor(el) {
        this._el = el;
        this._fieldElSet = this._makeFieldElSet();;
        this._boundingClientRect = this._el.getBoundingClientRect();
        this._matterRect = this._makeMatterRect();
    }

    get htmlEl() {
        return this._el;
    }
    get fieldElSet() {
        return this._fieldElSet;
    }
    get matterRect() {
        return this._matterRect;
    }
    get cssPosition() {
        return {
            x: this._matterRect.position.x - this._boundingClientRect.width / 2 - this._boundingClientRect.left,
            y: this._matterRect.position.y - this._boundingClientRect.height / 2 - this._boundingClientRect.top
        };
    }
    get cssRotation() {
        return this._matterRect.angle;
    }

    _makeFieldElSet() {
        const els = Array.from(this._el.querySelectorAll("input, select, button"));
        const wset = new WeakSet(els);
        return wset;
    }
    _makeMatterRect() {
        const rect = this._el.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        let body;
        body = Matter.Bodies.rectangle(x, y, rect.width, rect.height);
        body.friction = 0.01;
        body.restitution = 0.5;
        return body;
    }
}




const BTN_ANG_VEL = -10; // deg
const BTN_FORCE = {
    x: -0.1,
    y: -0.1
};
const INPUT_VALID_FORCE = {
    x: 0.2,
    y: -0.3
};
const INPUT_INVALID_FORCE = {
    x: -0.2,
    y: 0.3
};

var walls;
var liveWalls;
var engine;
var runner;
var ens = [];
var prevID;
var prevID2;

function beep(vol, freq, duration) {

    v = a.createOscillator()
    u = a.createGain()
    v.connect(u)
    v.frequency.value = freq
    v.type = "triangle"
    u.connect(a.destination)
    u.gain.value = vol * 0.01
    v.start(a.currentTime)
    v.stop(a.currentTime + duration * 0.001)
}

function rebuildPhysicsStatic() {
    Matter.Composite.remove(engineStatic.world, Matter.Composite.allBodies(engineStatic.world));
    $("#physic-wrap p span").removeClass("activeWord");
    $("#physic-wrap p span").removeAttr("style");
    $("#physic-wrap img").removeClass("activeWord");
    $("#physic-wrap img").removeAttr("style");
    ensStatic = [];
    engineStatic.events = {};
    Matter.Engine.clear(engineStatic);
    Matter.World.clear(engineStatic.world);
    Matter.Runner.stop(engineStatic);

    engineStatic = Matter.Engine.create();
    runnerStatic = Matter.Runner.run(engineStatic);

    setTimeout(function() {

        // $(".physic-wrap p").remove();

        wallsStatic = buildWalls(document.querySelector(".physic-wrap"));
        Matter.World.add(engineStatic.world, [wallsStatic.B, wallsStatic.L, wallsStatic.R, wallsStatic.T]);

        var calcScale = 1;


        if (menuState) {
            calcScale = 1 / 0.66;
        } else {
            calcScale = 1;
        }

        Matter.Events.on(engineStatic, "tick", e => {
            let isAllOOB = true; // exclude walls, just entities
            for (const en of ensStatic) {
                const {
                    x,
                    y
                } = en.cssPosition;
                en.htmlEl.style.transform = `translate(${x * calcScale}px, ${y * calcScale}px)rotate(${en.cssRotation}rad)`;
                isAllOOB &= (en.matterRect.position.y > wallsStatic.B.position.y);
            }

        });


    }, 400);


}

function buildPhysicsStatic() {


    ensStatic = [];
    engineStatic = Matter.Engine.create();
    runnerStatic = Matter.Runner.run(engineStatic);
    wallsStatic = buildWalls(document.querySelector(".physic-wrap"));
    Matter.World.add(engineStatic.world, [wallsStatic.B, wallsStatic.L, wallsStatic.R, wallsStatic.T]);
    Matter.Events.on(engineStatic, "tick", e => {
        let isAllOOB = true; // exclude walls, just entities


        for (const en of ensStatic) {
            const {
                x,
                y
            } = en.cssPosition;
            en.htmlEl.style.transform = `translate(${x}px, ${y}px)rotate(${en.cssRotation}rad)`;
            isAllOOB &= (en.matterRect.position.y > wallsStatic.B.position.y);
        }

    });

    // Matter.Events.on(engineStatic, "collisionStart", e => {
    //   for (const en of ensStatic) {
    //     var classes = en._el.className.split(' ');
    //      $("." + classes[1]).addClass("collisionAnimation");
    //   }
    // });
    //
    //
    //   Matter.Events.on(engineStatic, "collisionStart", e => {
    //      var activePitch = parseInt($(".active").find(".voicePitch").text()) - 200;
    //     if ($(".active").find(".voicePitch").text().length > 0) {} else {
    //       activePitch = 100;
    //     }
    //      return beep(0.1, activePitch, 90);
    //   });

}

$(document).ready(function() {

    engine = Matter.Engine.create();
    b = new AudioContext();
    a = new AudioContext();
    runner = Matter.Runner.run(engine);
});

var b;


function resetStaticPhysics() {
    Matter.Composite.remove(engineStatic.world, Matter.Composite.allBodies(engineStatic.world));
}



function resetPhysicsLive() {

    for (const en of ens) {
        Matter.World.remove(engine.world, en.matterRect, );
    }

    ens = [];
    engine.events = {};
    Matter.Engine.clear(engine);
    Matter.World.clear(engine.world);
    Matter.Runner.stop(runner);
}

function buildPhysicsOnTheGo(activeID) {


    engine = Matter.Engine.create();
    runner = Matter.Runner.run(engine);
    var calcScale = 1;

    if ($("body").hasClass("-menuActive")) {
        calcScale = 1 / 0.66;
        console.log(calcScale);
    }
    if (zoomLevel == 2 && zoomState) {
        calcScale = 1 / 0.3333;
        console.log(calcScale);
    }

    if (zoomLevel == 3 && zoomState) {
        calcScale = 1 / 0.2;
        console.log(calcScale);
    }
    if (zoomLevel == 4 && zoomState) {
        calcScale = 1 / 0.143;
        console.log(calcScale);
    }
    if (!zoomState && !menuState) {
        calcScale = 1;
        console.log(calcScale);
    }

    liveWalls = buildWalls(document.querySelector(".item:last-child"));
    Matter.World.add(engine.world, [liveWalls.B, liveWalls.L, liveWalls.R, liveWalls.T]);
    console.log(liveWalls);

    Matter.Events.on(engine, "tick", e => {
        let isAllOOB = true; // exclude walls, just entities
        for (const en of ens) {
            const {
                x,
                y
            } = en.cssPosition;
            en.htmlEl.style.transform = `translate(${x * calcScale}px, ${y * calcScale}px)rotate(${en.cssRotation}rad)`;
            isAllOOB &= (en.matterRect.position.y > liveWalls.B.position.y);
        }

    });

    //
    // Matter.Events.on(engine, "collisionStart", e => {
    //   for (const en of ens) {
    //     var classes = en._el.className.split(' ');
    //      $("." + classes[1]).addClass("collisionAnimation");
    //   }
    // });
    //
    //
    //   Matter.Events.on(engine, "collisionStart", e => {
    //      var activePitch = parseInt($(".active").find(".voicePitch").text()) - 200;
    //     if ($(".active").find(".voicePitch").text().length > 0) {} else {
    //       activePitch = 100;
    //     }
    //      return beep(0.1, activePitch, 90);
    //   });


}


function buildWalls(container) {
    const bbox = container.getBoundingClientRect();

    const thickness = 1;
    const width = bbox.width;
    const height = bbox.height;
    const hw = width / 2;
    const hh = height / 2;
    const ht = thickness / 2;
    const T = Matter.Bodies.rectangle(bbox.left + hw, bbox.top - ht, width, thickness, {
        isStatic: true
    });
    const B = Matter.Bodies.rectangle(bbox.left + hw, bbox.bottom + ht, width, thickness, {
        isStatic: true
    });
    const L = Matter.Bodies.rectangle(bbox.left - ht, bbox.top + height / 2, thickness, height, {
        isStatic: true
    });
    const R = Matter.Bodies.rectangle(bbox.right + ht, bbox.top + height / 2, thickness, height, {
        isStatic: true
    });
    return {
        T,
        B,
        L,
        R
    };
}


var gravityForce = 1;

function buildObjects(activeID, source) {

    var randomNumber = Math.floor(Math.random() * (40 - 1 + 1)) - 1;
    var randomGravity = Math.floor(Math.random() * (3 + 3 + 1)) - 3;
    var gravity = 1.3;
    var gravityFactor = 1;
    if (source == "live") {
        const els = Array.from(document.getElementById(activeID).querySelectorAll(".physical"));

        for (const el of els) {


            if ($(el).hasClass("activeWord")) {

            } else {
                const en = new En(el);
                $(el).addClass("activeWord");
                ens.push(en);

                if ($("body").hasClass("-menuActive")) {
                    gravityFactor = 0.66;

                }
                if (zoomLevel == 2 && zoomState) {
                    gravityFactor = 0.3333;

                }

                if (zoomLevel == 3 && zoomState) {
                    gravityFactor = 0.2;

                }
                if (zoomLevel == 4 && zoomState) {
                    gravityFactor = 0.143;

                }
                if (!zoomState && !menuState) {
                    gravityFactor = 1;

                }


                if (randomNumber > 90) {
                    engine.world.gravity.y = -gravity * gravityFactor;

                } else {
                    engine.world.gravity.y = gravity * gravityFactor;
                }



                Matter.World.add(engine.world, en.matterRect, );
            }
        }


    }


    if (source == "transkript") {
        const els = Array.from(document.getElementById("physic-wrap").querySelectorAll(".physical"));
        var randomGravity = Math.floor(Math.random() * (2 - 1 + 1)) - 1;
        var randomNumber2 = Math.floor(Math.random() * (100 - 1 + 1)) - 1;

        for (const el of els) {
            if ($(el).hasClass("activeWord")) {

            } else {
                $(el).addClass("activeWord");
                const en = new En(el);
                ensStatic.push(en);
                if (randomNumber2 > 20) {
                    engineStatic.world.gravity.y = 1;
                    engineStatic.world.gravity.x = 0;
                } else {
                    if (randomNumber > 60) {
                        engineStatic.world.gravity.y = -1;
                        if (randomNumber > 80) {

                            setTimeout(function() {
                                engineStatic.world.gravity.x = -1;
                            }, 300);
                        } else {

                            setTimeout(function() {
                                engineStatic.world.gravity.x = 1;
                            }, 300);
                        }
                    }

                    if (randomNumber <= 60) {
                        engineStatic.world.gravity.y = 1;
                        if (randomNumber < 20) {

                            setTimeout(function() {
                                engineStatic.world.gravity.x = -1;
                            }, 300);
                        } else {

                            setTimeout(function() {
                                engineStatic.world.gravity.x = 1;
                            }, 300);
                        }
                    }
                }

                Matter.World.add(engineStatic.world, en.matterRect, );
            }

        }

    }


    if (source == "folie") {
        const els = Array.from(document.getElementById("folie-1").querySelectorAll(".physical"));
        // const els2 = Array.from(document.getElementById("folie-1b").querySelectorAll(".physical"));
        var randomGravity = Math.floor(Math.random() * (2 - 1 + 1)) - 1;
        var randomNumber2 = Math.floor(Math.random() * (100 - 1 + 1)) - 1;

        for (const el of els) {
            if ($(el).hasClass("activeWord")) {

            } else {
                $(el).addClass("activeWord");
                const en = new En(el);
                ensStatic.push(en);
                engineStatic.world.gravity.y = 1;
                Matter.World.add(engineStatic.world, en.matterRect, );
            }

        }
        // for (const el of els2) {
        //   if ($(el).hasClass("activeWord")) {
        //
        //   } else {
        //     $(el).addClass("activeWord");
        //     const en = new En(el);
        //     ensStatic.push(en);
        //     engineStatic.world.gravity.y = 1;
        //     Matter.World.add(engineStatic.world, en.matterRect, );
        //   }
        //
        // }
        Matter.World.add(engineStatic.world, [wallsStatic.B, wallsStatic.L, wallsStatic.R, wallsStatic.T]);
    }


}
