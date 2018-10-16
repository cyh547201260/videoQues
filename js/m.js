var loaderimages = {
    progress : $(".load_val"),
    init : function() {
        this.preload();
    },

    preload : function() {
        var _this = this;
        _this.preloadAssets(_this.allImages, "", function(e) { 
            var percent = Math.floor((e.completedCount / e.totalCount)*100);
            _this.setPreloaderPercent(percent)
        }, function(e) {
            _this.loaderComplete();
        });
    },

    preloadAssets : function(assets, prefix, progress, complete) {
        var imageTypes = ['jpg', 'png', 'jpeg','gif'];
        var loader = new PxLoader();
        for(var i = 0; i < assets.length; i++) {
            var extension = assets[ i ].substr( (assets[ i ].lastIndexOf('.') +1) );

            if ($.inArray(extension, imageTypes) != -1) {
                loader.add(new PxLoaderImage(assets[i] )); 
            }
        }
        loader.addProgressListener(progress);
        loader.addCompletionListener(complete);
        loader.start();
    },

    setPreloaderPercent: function( percentage ) {
        $(".percentage").html(percentage+"%");
    },

    loaderComplete : function(){
        $(".loading").hide();
    },
        
    allImages: [
        "images/dian.png",
        "images/p0.1.png",
        "images/p4.1.jpg",
        "images/p5.10.png",
        "images/p5.11.png",
        "images/p5.3.png",
        "images/p5.5.png",
        "images/p5.6.png",
        "images/p5.7.png",
        "images/p5.8.png",
        "images/p5.9.png",
        "images/p5.jpg",
        "images/p6.1.png",
        "images/p6.2.png",
        "images/p6.3.png",
        "images/p6.jpg",
        "images/pc.jpg",
        "images/t1.png",
        "images/t1r.png",
        "images/t1w.png",
        "images/t2.png",
        "images/t2r.png",
        "images/t2w.png",
        "images/t3.png",
        "images/t3r.png",
        "images/t3w.png",
        "images/t4.png",
        "images/t4r.png",
        "images/t4w.png",
        "images/t5.png",
        "images/t5r.png",
        "images/t5w.png"
    ]
};

$(function(){
    loaderimages.init();
})