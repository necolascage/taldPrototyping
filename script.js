gsap.registerPlugin(ScrollTrigger, SplitText); 
/*hero animations*/
gsap.to(".hero-bg",{
    scrollTrigger: {
        trigger: ".hero-section",
        start: "10% 10%",
        toggleActions: "restart none none none",
        scrub: 1,
    },
    scale: 1.25,
    ease: "power3.out",
    },)

gsap.from(".hero-heading",{
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.3,
    stagger: 0.3
}); 



gsap.from(".hero-body",{
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.5,
    stagger: 0.3
}); 

gsap.from(".intro",{
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top 5%",
        toggleActions: "restart none none none",
        scrub: 1,
    },
    scale: 1,
    opacity: 0.5,
    y: 20,
    ease: "power3.out",
    },)

/* KPI Counter Animation */
const kpiCounters = document.querySelectorAll('.kpiHeader[data-target]');

kpiCounters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const prefix = counter.getAttribute('data-prefix') || '';

    gsap.to(counter, {
        scrollTrigger: {
            trigger: counter.closest('.kpiGrid'),
            start: 'top 80%',
            toggleActions: 'play pause resume reset',
            once: true,
        },
        innerText: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerText: 1 },
        onUpdate: function() {
            const currentValue = Math.floor(gsap.getProperty(counter, 'innerText'));
            counter.textContent = prefix + currentValue + suffix;
        }
    });
});

/*Team Cards Animations*/

gsap.from(".teamCard",{
    scrollTrigger: {
        trigger: ".teamCard",
        start: "-70% bottom",
        toggleActions: "restart pause reverse reset",
        scrub: 1.5,
    },
    scale: 1.25,
    y: 100,
    ease: "sine.inOut",
    stagger: 0.3,
    },)

/* Yellow Background Color Animation */
gsap.from(".yellowBackground", {
    scrollTrigger: {
        trigger: ".yellowBackground",
        start: "5% bottom",
        toggleActions: "restart pause reverse reset",
        scrub: 1.5,
    },
    backgroundColor: "#fffefa",
    duration: 2.5,
    ease: "power2.out",
});

/* Green Background Color Animation */
gsap.from(".greenBackground", {
    scrollTrigger: {
        trigger: ".greenBackground",
        start: "top bottom",
        toggleActions: "restart pause reverse reset",
        scrub: 1.5,
    },
    backgroundColor: "#fefffa",
    duration: 2.5,
    ease: "power2.out",
});

/* Tagline SplitText Word Animation */
const taglines = document.querySelectorAll('.tagline');

taglines.forEach((tagline) => {
    const split = new SplitText(tagline, { type: "words" });

    gsap.from(split.words, {
        scrollTrigger: {
            trigger: tagline,
            start: "top 80%",
            toggleActions: "play pause play none",
        },
        opacity: 0,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.1,
    });
});

gsap.from(".primary", {
    scrollTrigger: {
        trigger: ".primary",
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
    },
    opacity: 0,
    duration: 0.8,
    ease: "sine.out",
});

gsap.to(".footer", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 40%",
        end: "top 0%",
        toggleActions: "restart pause reverse reset",
        scrub: 1,
    },
    backgroundColor: "#000000",
    duration: 2.5,
    ease: "power2.out",
});