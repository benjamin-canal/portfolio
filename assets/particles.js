tsParticles.load("tsparticles", {
    background: {
        opacity: 1,
    },
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push"
            },
            onHover: {
                enable: true,
                mode: "repulse"
            },
        },
        modes: {
            push: {
                quantity: 1,
            },
            repulse: {
                distance: 80,
            },
        },
    },
    particles: {
        color: {
            value:["#C31997","#43E54B","#43E5E3","#c905d6"]
        },
        links: {
            enable: true,
            opacity: 0.5,
            distance: 200,
            color: "#32F7D6",
        },
        move: {
            enable: true,
            speed: { min: 0.2, max: 0.8 },
        },
        opacity: {
            value: 0, //{ min: 0.2, max: 1.5 },
        },
        size: {
            value: { min: 0.5, max: 5 },
        },
    },
});