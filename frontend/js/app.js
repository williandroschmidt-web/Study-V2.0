/* ==========================================================
   Study+ V2
   app.js
   Versão 1.0.0
========================================================== */

"use strict";

/* ==========================================================
   APP
========================================================== */

const StudyPlus = {

    init(){

        this.scrollAnimation();

        this.cardEffects();

        this.backToTop();

        this.revealOnScroll();

        this.buttonEffects();

        console.log("✅ Study+ iniciado com sucesso!");

    },

    /* ==========================================
       ANIMAÇÃO AO ROLAR
    ========================================== */

    scrollAnimation(){

        const elements = document.querySelectorAll(

            ".hero-text, .hero-image, .card"

        );

        const observer = new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("slide-up");

                }

            });

        },{

            threshold:.2

        });

        elements.forEach(element=>observer.observe(element));

    },

    /* ==========================================
       EFEITO DOS CARDS
    ========================================== */

    cardEffects(){

        const cards = document.querySelectorAll(".card");

        cards.forEach(card=>{

            card.addEventListener("mousemove",(e)=>{

                const rect = card.getBoundingClientRect();

                const x = e.clientX - rect.left;

                const y = e.clientY - rect.top;

                card.style.background =

                `radial-gradient(circle at ${x}px ${y}px,
                rgba(59,130,246,.12),
                var(--surface) 70%)`;

            });

            card.addEventListener("mouseleave",()=>{

                card.style.background = "var(--surface)";

            });

        });

    },

    /* ==========================================
       BOTÃO TOPO
    ========================================== */

    backToTop(){

        const button = document.createElement("button");

        button.innerHTML = "↑";

        button.id = "backToTop";

        document.body.appendChild(button);

        Object.assign(button.style,{

            position:"fixed",

            right:"25px",

            bottom:"25px",

            width:"50px",

            height:"50px",

            borderRadius:"50%",

            border:"none",

            background:"#2563EB",

            color:"#fff",

            fontSize:"22px",

            cursor:"pointer",

            display:"none",

            zIndex:"999",

            boxShadow:"0 10px 25px rgba(0,0,0,.2)"

        });

        window.addEventListener("scroll",()=>{

            if(window.scrollY>300){

                button.style.display="block";

            }else{

                button.style.display="none";

            }

        });

        button.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    },

    /* ==========================================
       REVELAR ELEMENTOS
    ========================================== */

    revealOnScroll(){

        const reveals = document.querySelectorAll(

            ".card, .fake-card"

        );

        const observer = new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("fade");

                }

            });

        });

        reveals.forEach(item=>observer.observe(item));

    },

    /* ==========================================
       BOTÕES
    ========================================== */

    buttonEffects(){

        const buttons = document.querySelectorAll("button");

        buttons.forEach(button=>{

            button.addEventListener("mouseenter",()=>{

                button.style.transform="translateY(-3px)";

            });

            button.addEventListener("mouseleave",()=>{

                button.style.transform="translateY(0)";

            });

        });

    }

};

/* ==========================================================
   START
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        StudyPlus.init();

    }

);
