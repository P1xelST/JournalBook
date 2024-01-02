import { DivComponent } from "../../common/div-components";
import './header.css';

export class Header extends DivComponent{
    constructor(appState) {
        super();
        this.appState = appState;
    }
    #logoSVG = 'logo.svg';
    #searchSVG = 'search.svg';
    #favoritesSVG = 'favorites.svg';
    render() {
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img class="logo" src="./static/${this.#logoSVG}" alt="logo"/>
            </div>
            <div class="menu">
                <a class="menu__item" href="#">
                    <img src="./static/${this.#searchSVG}" alt="Search"/>
                    Поиск книг
                </a>
                <a class="menu__item" href="#favorites">
                    <img src="./static/${this.#favoritesSVG}" alt="favorites"/>
                    Избранное
                    <div class="menu__counter">
                        ${this.appState.favorites.length}
                    </div>
                </a>
            </div>
        `;
        return this.el;
    }
}
