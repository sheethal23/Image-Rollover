"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var image1 = $("image1");           
    var image2 = $("image2");           
    
    // preload images 
    var links = $("image_list").getElementsByTagName("a");
    var i, link, image;
    for (i=0; i<links.length; i++)
	{
		link = links[i];
		image = new Image();
		image.src = link.getAttribute("href");
		image.title = link.getAttribute("title");
	
    }
    // attach mouseover and mouseout events for each image
    image1.onmouseover = function() {
		//this.links.getAttribute("href") = 'images/release.jpg';
		//links.getAttribute("href") = "images/release.jpg";
		document.getElementById("image1").src = "images/release.jpg";
        
    };
    image1.onmouseout = function() {
        document.getElementById("image1").src = "images/hero.jpg"; 
    };
    
    image2.onmouseover = function() {
        document.getElementById("image2").src = "images/deer.jpg";
    };
    image2.onmouseout = function() {
		document.getElementById("image2").src = "images/bison.jpg";        
    };
	
};
