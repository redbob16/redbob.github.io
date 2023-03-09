gsap.to(".box", 0.3, {
    scale: 0.1,
    backgroundColor: "#8C8A68",
    y: 60,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    delay: 1,
    stagger: {
        amount: 10,
        grid: "auto",
        from: "center",
    }
});