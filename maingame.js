(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"maingame_atlas_1", frames: [[0,758,1480,455],[0,0,1732,756],[825,1215,878,109],[0,1215,823,258]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["maingame_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.img_boat = function() {
	this.initialize(ss["maingame_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.img_logo = function() {
	this.initialize(ss["maingame_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.img_title = function() {
	this.initialize(ss["maingame_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.g_title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_title();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,823,258);


(lib.g_textblock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg+sA5TMAAAhylMB9ZAAAMAAABylg");
	this.shape.setTransform(401.275,366.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,802.6,733.3);


(lib.g_boat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_boat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1732,756);


(lib.g_backing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EibOAPBIAA+BME2dAAAIAAeBg");
	this.shape.setTransform(993.45,96.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1986.9,192.2);


(lib.b_store = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,227.5);


(lib.b_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_logo();
	this.instance.setTransform(0,0,0.6044,0.5505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,530.7,60);


// stage content:
(lib.main_game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// --- VIDEO PLAYBACK ---
		this.myVideo.play();
		
		// --- BUTTON LINKS + HOVER EFFECT ---
		function setupButton(btn, url, newTab = true) {
		    btn.on("click", function() {
		        window.open(url, newTab ? "_blank" : "_self");
		    });
		    addHoverEffect(btn);
		}
		
		function addHoverEffect(btn) {
		    const origScaleX = btn.scaleX;
		    const origScaleY = btn.scaleY;
		
		    btn.on("mouseover", function() {
		        createjs.Tween.get(btn)
		            .to({ scaleX: origScaleX * 1.05, scaleY: origScaleY * 1.05 }, 200, createjs.Ease.quadOut);
		    });
		
		    btn.on("mouseout", function() {
		        createjs.Tween.get(btn)
		            .to({ scaleX: origScaleX, scaleY: origScaleY }, 200, createjs.Ease.quadIn);
		    });
		}
		
		// Apply to buttons (ensure button1 and button2 exist on this frame)
		setupButton(this.button1, "https://flynnmitchell.netlify.app/");
		setupButton(this.button2, "https://fromghosts.itch.io/");
		
		// --- BACKGROUND MUSIC ---
		const bgMusic = new Audio("assets/pts02.mp3");
		bgMusic.loop = true;
		bgMusic.volume = 0.5;
		
		let musicStarted = false;
		stage.addEventListener("click", function() {
		    if (!musicStarted) {
		        bgMusic.play();
		        musicStarted = true;
		    }
		});
		
		// --- SPRITE ---
		const gifSprite = new createjs.Sprite(spriteSheet, "play");
		stage.addChild(gifSprite);
		
		// --- ENABLE HOVER EVENTS ONCE ---
		stage.enableMouseOver(60); // higher frequency = more responsive hover
		
		// --- TITLE TILT EFFECT ---
		function addTiltEffect(target) {
		    if (!target) {
		        console.warn("Tilt target is missing. Check the instance name and frame.");
		        return;
		    }
		
		    let tiltActive = false;
		    const origRotation = target.rotation;
		
		    // Optional: improve event reliability and feedback
		    target.mouseEnabled = true;
		    target.mouseChildren = false;
		    target.cursor = "pointer";
		
		    // Use rollover/rollout which respect enableMouseOver
		    target.on("rollover", () => { tiltActive = true; });
		    target.on("rollout", () => {
		        tiltActive = false;
		        createjs.Tween.get(target)
		            .to({ rotation: origRotation }, 300, createjs.Ease.quadOut);
		    });
		
		    // Update per frame: Animate usually auto-updates the stage for you
		    createjs.Ticker.on("tick", () => {
		        if (!tiltActive) return;
		
		        const dx = stage.mouseX - target.x;
		        const dy = stage.mouseY - target.y;
		        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
		
		        // Ease toward the angle
		        target.rotation += (angle - target.rotation) * 0.15;
		    });
		}
		
		// Apply to your graphic (this.title must exist on this frame)
		addTiltEffect(this.title);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.title = new lib.g_title("synched",0);
	this.title.name = "title";
	this.title.setTransform(434.1,126.6,1.0712,1.288,0,0,0,411.5,129);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// portfolio
	this.button1 = new lib.b_logo();
	this.button1.name = "button1";
	this.button1.setTransform(902.4,89.15,1.0533,1.0336);
	new cjs.ButtonHelper(this.button1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button1).wait(1));

	// Layer_1
	this.myVideo = new lib.an_Video({'id': 'myVideo', 'src':'videos/adobepts.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.myVideo.name = "myVideo";
	this.myVideo.setTransform(498.15,673.5,2.1179,1.8625,0,0,0,200.1,150.1);

	this.timeline.addTween(cjs.Tween.get(this.myVideo).wait(1));

	// itch
	this.button2 = new lib.b_store();
	this.button2.name = "button2";
	this.button2.setTransform(1680.25,102.95,0.3765,0.3474,0,0,0,370,113.9);
	new cjs.ButtonHelper(this.button2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button2).wait(1));

	// text
	this.text = new cjs.Text("Past the sea is a survival horror game soaked in psychological torment and retro aesthetics. Player’s will assume the role of Harold, a former Vietnam soldier haunted by PTSD and buried guilt. Whilst venturing out to sea, Harold is swallowed by a creature. The last thing Harold witnesses before being swallowed is the creature’s bloodthirsty grin. \nNow trapped inside the labyrinth within the belly of the beast, Harrold must navigate a surreal and disturbing world shaped by his trauma. The only key to escaping this creature is coming to terms with the ghosts of his past, as well as the lost ambitions of his childhood.\nRendered in a PlayStation 1 inspired visual style, Past the Sea evokes the ambience and atmosphere found in 90s survival horror, with a soundscape that is bound to unnerve the player’s experience.", "34px 'High Tower Text'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 779;
	this.text.parent = this;
	this.text.setTransform(1472.6,308.65);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_8
	this.instance = new lib.g_textblock("synched",0);
	this.instance.setTransform(1482.35,673.35,1,1,0,0,0,401.2,366.7);
	this.instance.alpha = 0.5586;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("Eg+sg5SMB9ZAAAMAAABylMh9ZAAAg");
	this.shape.setTransform(1482.425,673.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// MainBackHeadf
	this.instance_1 = new lib.g_backing("synched",0);
	this.instance_1.setTransform(953.95,93.55,1,1,0,0,0,993.5,96);
	this.instance_1.alpha = 0.3008;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("EibOgPAME2dAAAIAAeBMk2dAAAg");
	this.shape_1.setTransform(953.9,93.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1}]}).wait(1));

	// MainBackground
	this.instance_2 = new lib.g_boat("synched",0);
	this.instance_2.setTransform(971.75,586.7,1.1678,1.5586,0,0,0,866,378);
	this.instance_2.alpha = 0.4883;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(919.5,500.5,1063.6,675.3);
// library properties:
lib.properties = {
	id: 'D2A8200A070B61469BFF4152198522BF',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#1D1D1D",
	opacity: 1.00,
	manifest: [
		{src:"images/maingame_atlas_1.png", id:"maingame_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D2A8200A070B61469BFF4152198522BF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;