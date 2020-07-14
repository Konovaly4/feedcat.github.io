class Card {
  constructor (cardItem, cardBg, cardText, cardProductData, color) {
    this._cardItem = cardItem;
    this._cardBg = cardBg;
    this._cardText = cardText;
    this._cardProductData = cardProductData;
    this._color = color;
  }

  _render() {
    this._cardProduct = this._cardItem.querySelector('#card__product');
    this._cardSubtitle = this._cardItem.querySelector('#card__subtitle');
    this._cardPortion = this._cardItem.querySelector('#ard__description-portion');
    this._cardMouse = this._cardItem.querySelector('#card__description-mouse');
    this._cardWeight = this.cardItem.querySelector('#card__weight');
    this._cardWeightValue = this._cardItem.querySelector('#card__weight-value');
    this._cardNote = this._cardItem.querySelector('#card__note');
    this._cardLink = this._cardItem.querySelector('#card__note-link');
  }

  _default() {
    this._render();
    this._cardBg.style.backgroundColor = this._color.default;
    this._cardWeight.style.backgroundColor = this._color.default;
    this._cardNote.style.color = this._color.defaultNote;
    if (this._cardLink.classList.contains('element-invisible')) {
      this._cardLink.classList.remove('element-invisible');
    };
    this._cardProduct.textContent = this._cardText.product;
    this._cardSubtitle.textContent = this._cardProductData.subtitle;
    this._cardPortion.textContent = this._cardProductData.portion;
    this._cardMouse.textContent = this._cardProductData.mouse;
    this._cardWeightValue.textContent = this._cardProductData.weight;
    this._cardNote.textContent = this.cardText.noteDefault;
    this._cardNoteLink = this.cardText.noteDefaultLink;
  }

  _selected() {
    this._default();
    this._cardNote.textContent = this.cardProductData.note;
    this._cardLink.textContent = '';
    this._cardLink.classList.add('element-invisible');
    this._cardBg.style.backgroundColor = this._color.selected;
    this._cardWeight.style.backgroundColor = this._color.selected;
  }

  _disabled() {
    this._default();
    this._cardNote.textContent = `Печалька, ${this.cardProductData.subtitle} закончился.`;
    this._cardNote.style.color = this._color.disabledNote;
    this._cardLink.textContent = '';
    this._cardLink.classList.add('element-invisible');
    this._cardBg.style.backgroundColor = this._color.disabled
    this._cardWeight.style.backgroundColor = this._color.disabled;
  }

}