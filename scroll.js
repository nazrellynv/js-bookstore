
const scrollTracker= document.querySelector('#scroll-tracker');
const scrollTrackingTimeline= new ScrollTimeline({
    scrollOffsets: [CSS.percent(0), CSS.percent(100)],

})


scrollTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
);

const animatedImage= document.querySelectorAll(".new-books");
const animatedImageTimeline= new ScrollTimeline ({
    scrollOffsets: [
        {target: animatedImage, edge: "end", threshold: "1"},
        {target: animatedImage, edge: "start", threshold: "1"},
    ],
});
animatedImage.animate(
    {
        transform: ["rotateX(90deg)","rotate(0)" ]
    },
    {
        duration: 1,
        timeline: animatedImageTimeline, 
    }
)