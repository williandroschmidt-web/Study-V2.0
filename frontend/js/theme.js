/* ==========================================================
   Study+ V2
   theme.js
   Versão 1.0.0
========================================================== */

"use strict";

const ThemeManager = {

    storageKey: "studyplus-theme",

    init() {

        this.loadTheme();

        this.createThemeButton();

    },

    loadTheme() {

        const savedTheme = localStorage.getItem(this.storageKey);

        if (savedTheme === "dark") {

            document.body.classList.add("dark");

        }

    },

    toggleTheme() {

        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        localStorage.setItem(

            this.storageKey,

            isDark ? "dark" : "light"

        );

    },

    createThemeButton() {

        const container = document.querySelector(".buttons");

        if (!container) return;

        const button = document.createElement("button");

        button.className = "btn-login";

        button.id = "themeButton";

        button.innerHTML = "🌙";

        button.title = "Alternar tema";

        button.addEventListener("click", () => {

            this.toggleTheme();

            button.innerHTML =

                document.body.classList.contains("dark")

                ? "☀️"

                : "🌙";

        });

        if(document.body.classList.contains("dark")){

            button.innerHTML="☀️";

        }

        container.prepend(button);

    }

};

document.addEventListener("DOMContentLoaded", () => {

    ThemeManager.init();

});
