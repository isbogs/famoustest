define(function(require, exports, module) {
	var Engine = require('famous/core/Engine');
	var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
	
	var Easing = require('famous/transitions/Easing');
	
	var LightBox = require('famous/views/Lightbox');
	
	var mainContext = Engine.createContext();
	
	var lightbox;
	var slides = []; // array of surface to show
	var ctr_slide = 0;
	
	var background;
	
	createSlides();
	createLightBox();
	
	function createSlides() {
		var slideContent = [
			'<img src="http://launch.famo.us/fu-assets/hello/slide1.png" width="100%">',
			'<img src="images/bryan.png" width="250px">',
			'<img src="images/arthur.png" width="250px">',
			'<img src="images/ceilo.png" width="250px">',
			'<img src="images/edcel.png" width="250px">',
			'<img src="images/eve.png" width="250px">',
			'<img src="images/ivar.png" width="250px">',
			'<img src="images/mark.png" width="250px">',
			'<img src="images/cyrus.png" width="250px">'
		];
		
		// create background first
		background = new Surface({
			properties : {
				//backgroundColor : "#FBB04D"
				backgroundColor : "black"
			}
		});
		
		mainContext.add(background);
		
		for (var i = 0; i < slideContent.length; i++) {
			var slide = new Surface({
				content : slideContent[i],
				properties : {
					textAlign : "center",
					cursor : "pointer",
					top : "70px"
				}
			});
			
			slide.on("click", showNextSlide);
			
			slides.push(slide);
			
		}
	}
	
	function createLightBox() {
		var lightboxOptions = {
			//inOpacity : 0,
			//outOpacity : 0,
			overlap  : true,
			//inTransform : Transform.translate(100, 0, 0),
			outTransform : Transform.translate(-400, 0, 1),
			inTransition : {duration : 800, curve : Easing.outBack},
			outTransition : {duration : 400, curve : Easing.easeOut}
		};
		lightbox = new LightBox(lightboxOptions);
		mainContext.add(lightbox);
		lightbox.show(slides[0]);
	}
	
	function showNextSlide() {
		background.setProperties({
			backgroundColor : '#FBB04D'
		});
		ctr_slide++;
		if (ctr_slide >= slides.length) {
			ctr_slide = 0;
			background.setProperties({
				backgroundColor : 'black'
			});
		}
		
		lightbox.show(slides[ctr_slide]);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*createSurface();
	
	function createSurface() {
		var firstSurface = new Surface({
			//size : [300, 300],
			content : "Sample by Bogs",
			properties : {
				//position : "relative",
				//margin : "0px auto",
				color : "white",
				textAlign : "center",
				fontSize : "18px",
				backgroundColor : "black",
				borderWidth : "2px",
				
			}
		});
		
		mainContext.add(firstSurface);
	}*/
	

});