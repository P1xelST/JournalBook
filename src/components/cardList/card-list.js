import { DivComponent } from "../../common/div-components";
import { Card } from "../card/card";
import './card-list.css';

export class CardList extends DivComponent{
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    render() {
        if (this.parentState.loading) {
            this.el.innerHTML = `<div class="card__list_loader">Загрузка...</div>`;
            return this.el;
        }
        this.el.classList.add('card__list');
        // this.el.innerHTML = `
        //     <h1>Найдено книг ${this.parentState.numFound}</h1>
        // `;
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card__grid');
        this.el.append(cardGrid);   
        for (const cardElem of this.parentState.list) {
            cardGrid.append(new Card(this.appState, cardElem).render());
        }
        return this.el;
    }
}
