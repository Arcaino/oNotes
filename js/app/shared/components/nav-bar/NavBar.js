class NavBar extends HTMLElement{

    constructor(){
        
        super();
        this.#onInit();
    };

    #onInit(){

        let shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.#style());
        shadow.appendChild(this.#html());
    };

    #style(){

        let style = document.createElement('style');
        style.textContent = `

            .nav-bar{

                background-color: ;
            }
        `

        return style;
    };

    #html(){

        let element = document.createElement('div');
        element.classList.add('nav-bar');
        return element;
    };
}

customElements.define('nav-bar', NavBar);