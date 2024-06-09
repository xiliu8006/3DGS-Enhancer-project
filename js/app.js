// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeVidID = 0;
var select = false;


$(document).ready(function () {
    var editor = CodeMirror.fromTextArea(document.getElementById("bibtex"), {
        lineNumbers: false,
        lineWrapping: true,
        readOnly: true
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    activeMethodPill = $('.method-pill').filter('.active')[0];
    activeModePill = $('.mode-pill').filter('.active')[0];
    activeScenePill = $('.scene-pill').filter('.active')[0];

    // resizeAndPlay($('#sparsity')[0]);
});

// function selectCompVideo(methodPill, scenePill, n_views, modePill) {
//     // Your existing logic for video selection
//     // var video = document.getElementById("compVideo");
//     select = true;
//     var videoSwitch = document.getElementById("compVideoSwitch");
//     var viewNum = document.getElementById("compVideoValue");

//     if (activeMethodPill) {
//         activeMethodPill.classList.remove("active");
//     }
//     if (activeScenePill) {
//         activeScenePill.classList.remove("active");
//     }
//     if (modePill) {
//         activeModePill.classList.remove("active");
//         modePill.classList.add("active");
//         activeModePill = modePill;
//     }
//     activeMethodPill = methodPill;
//     activeScenePill = scenePill;
//     methodPill.classList.add("active");
//     scenePill.classList.add("active");
//     method = methodPill.getAttribute("data-value");
//     pill = scenePill.getAttribute("data-value");
//     mode = activeModePill.getAttribute("data-value");

//     // if (videoSwitch.checked) {
//     //     mode = 'depth'
//     // } else {
//     //     mode = 'rgb'
//     // }

//     // swap video to avoid flickering
//     activeVidID = 1 - activeVidID;
//     var video_active = document.getElementById("compVideo" + activeVidID);
//     var video_hidden = document.getElementById("compVideo" + (1 - activeVidID));
//     video_active.src = "videos/comparison/3DGS-Enhancer-comparision-"+ scenePill + ".mp4";
//     // video_active.src = "videos/comparison/3DGS-comparison.mp4";
//     video_active.load();

//     // if (n_views) {
//     //     viewNum.innerHTML = n_views;
//     // }
// }

function selectCompVideo(methodPill, scenePill, n_views, modePill) {
    var videoSwitch = document.getElementById("compVideoSwitch");
    var viewNum = document.getElementById("compVideoValue");

    
    if (activeMethodPill && activeMethodPill.classList) {
        activeMethodPill.classList.remove("active");
    }
    if (activeScenePill && activeScenePill.classList) {
        activeScenePill.classList.remove("active");
    }
    if (modePill && activeModePill && activeModePill.classList) {
        activeModePill.classList.remove("active");
        modePill.classList.add("active");
        activeModePill = modePill;
    }

    
    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    // methodPill.classList.add("active");
    scenePill.classList.add("active");

    
    // var method = methodPill.getAttribute("data-value");
    var scene = scenePill.getAttribute("data-value");
    var mode = activeModePill ? activeModePill.getAttribute("data-value") : null;

    
    activeVidID = 1 - activeVidID;
    var video_active = document.getElementById("compVideo" + activeVidID);
    var video_hidden = document.getElementById("compVideo" + (1 - activeVidID));
    if (video_active) {
        video_active.src = "videos/comparison/3DGS-Enhancer-comparision-" + scene + ".mp4";
        video_active.load();
    }

    // 更新视图数量
    if (n_views && viewNum) {
        viewNum.innerHTML = n_views;
    }
}

var currentImageIndex = 0;
var images = document.querySelectorAll('.image-container img');

function nextImage() {
    changeImage(1);
}

function previousImage() {
    changeImage(-1);
}

function changeImage(step) {
    // Hide the current image
    images[currentImageIndex].classList.remove('active');

    // Calculate the new index using modulo operation to wrap around
    currentImageIndex = (currentImageIndex + step + images.length) % images.length;

    // Show the new current image
    images[currentImageIndex].classList.add('active');
}