import {Button} from './styles.js';

customElements.define('nav-bar', class extends HTMLElement {
    constructor(){
        super();
        this.#onInit();
    };

    #onInit(){

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = this.#html();
    };

    #html(){

        return `

            <span>oNotes</span>
            <div class="navBar__menu">

                <button class="navBar__menu__btn">all notes</button>
                <button class="navBar__menu__btn">groups</button>
            </div>
        `;
    };
})