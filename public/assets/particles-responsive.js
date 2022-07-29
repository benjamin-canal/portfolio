
const options = {
        /* omissis, this is the main options object */
        responsive: [
            {   
                maxWidth: 500,
                    options: { 
                        interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 80,
                            },
                        },
                    },
                    particles: {
                        //color: {
                        //    value:["#C31997","#43E54B","#43E5E3","#c905d6"]
                        //},
                        links: {
                            enable: true,
                            opacity: 0.5,
                            distance: 200,
                            color: "#32F7D6",
                        },
                        number: {
                            value: 25,
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
                },
        
            },
            
            {
                maxWidth: 649,
                    options: { 
                        interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 80,
                            },
                        },
                    },
                    particles: {
                        //color: {
                        //    value:["#C31997","#43E54B","#43E5E3","#c905d6"]
                        //},
                        links: {
                            enable: true,
                            opacity: 0.5,
                            distance: 200,
                            color: "#32F7D6",
                        },
                        number: {
                            value: 40,
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
                },
        
            }, 

            {
                maxWidth: 699,
                options: { 
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 80,
                            },
                        },
                    },
                    particles: {
                        //color: {
                        //    value:["#C31997","#43E54B","#43E5E3","#c905d6"]
                        //},
                        links: {
                            enable: true,
                            opacity: 0.5,
                            distance: 200,
                            color: "#32F7D6",
                        },
                        number: {
                            value: 50,
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
                },
            },

            {
                minWidth: 700,
                options: { 
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 80,
                            },
                        },
                    },
                    particles: {
                        //color: {
                        //    value:["#C31997","#43E54B","#43E5E3","#c905d6"]
                        //},
                        links: {
                            enable: true,
                            opacity: 0.5,
                            distance: 200,
                            color: "#32F7D6",
                        },
                        number: {
                            value: 80,
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
                },
            },
            
        ],
};

tsParticles.load("tsparticles", options);