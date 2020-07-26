export default class Card {
  constructor (cardItem, cardText, cardProductData, color) {
    this._cardItem = cardItem;
    this._cardText = cardText;
    this._cardProductData = cardProductData;
    this._color = color;
    this._stateToggle = this._stateToggle.bind(this);
    this._stageHover = this._stageHover.bind(this);
    this._stageDefault = this._stageDefault.bind(this);
  }

  _render() {
    this._cardFrame = this._cardItem.querySelector('.card__frame');
    this._cardBg = this._cardItem.querySelector('.card__bg');
    this._card = this._cardItem.querySelector('.card');
    this._cardProduct = this._cardItem.querySelector('.card__product');
    this._cardTitle = this._cardItem.querySelector('.card__title');
    this._cardSubtitle = this._cardItem.querySelector('.card__subtitle');
    this._cardPortion = this._cardItem.querySelector('.card__description-portion');
    this._cardMouse = this._cardItem.querySelector('.card__description-mouse');
    this._cardWeight = this._cardItem.querySelector('.card__weight');
    this._cardWeightValue = this._cardItem.querySelector('.card__weight-value');
    this._cardCat = this._cardItem.querySelector('.card__cat');
    this._cardNote = this._cardItem.querySelector('.card__note');
    this._cardLink = this._cardItem.querySelector('.card__note-link');
    this._cardNoteDot = this._cardItem.querySelector('.card__note-dot');
  }

  _setState() {
    this._render()
    this._cardSubtitle.textContent = this._cardProductData.subtitle;
    this._cardPortion.textContent = this._cardProductData.portion;
    this._cardMouse.textContent = this._cardProductData.mouse;
    this._cardWeightValue.textContent = this._cardProductData.weight;
  }

  default() {
    this._setState();
    this._removeEventListeners();
    this._textEnabled();
    this._cardProduct.textContent = this._cardText.product;
    this._cardProduct.classList.remove('text-selected');
    this._cardCat.classList.remove('element-disabled');
    this._cardFrame.style.background = `linear-gradient(135deg, transparent 30px, ${this._color.default} 0)`;
    this._cardWeight.style.backgroundColor = this._color.default;
    this._cardNote.style.color = this._color.defaultNote;
    this._cardLink.style.color = this._color.default;
    this._cardNote.textContent = this._cardText.noteDefault;
    this._cardLink.textContent = this._cardText.noteDefaultLink;
    if (this._cardLink.classList.contains('element-invisible')) {
      this._cardLink.classList.remove('element-invisible');
    };
    if (this._cardNoteDot.classList.contains('element-invisible')) {
      this._cardNoteDot.classList.remove('element-invisible');
    };
    this._card.removeAttribute('name');
    this._card.setAttribute('name', 'default');
    this._setEventListeners();
  }

  defaultHover() {
    this.default();
    this._cardFrame.style.background = `linear-gradient(135deg, transparent 30px, ${this._color.defaultHover} 0)`;
    this._cardWeight.style.backgroundColor = this._color.defaultHover;
  }

  selected() {
    this._setState();
    this._removeEventListeners();
    this._textEnabled();
    this._cardProduct.textContent = this._cardText.product;
    this._cardProduct.classList.remove('text-selected');
    this._cardCat.classList.remove('element-disabled');
    this._cardNote.textContent = this._cardProductData.note;
    this._cardLink.textContent = '';
    if (!this._cardLink.classList.contains('element-invisible')) {
      this._cardLink.classList.add('element-invisible');
    };
    if (!this._cardNoteDot.classList.contains('element-invisible')) {
      this._cardNoteDot.classList.add('element-invisible');
    };
    this._cardFrame.style.background = `linear-gradient(135deg, transparent 30px, ${this._color.selected} 0)`;
    this._cardWeight.style.backgroundColor = this._color.selected;
    this._card.removeAttribute('name');
    this._card.setAttribute('name', 'selected');
    this._setEventListeners();
  }

  selectedHover() {
    this.selected();
    this._cardFrame.style.background = `linear-gradient(135deg, transparent 30px, ${this._color.selectedHover} 0)`;
    this._cardWeight.style.backgroundColor = this._color.selectedHover;
    this._cardProduct.textContent = this._cardText.productSelectedHover;
    this._cardProduct.classList.add('text-selected');
  }

  _textDisabled() {
    this._cardProduct.classList.add('text-disabled');
    this._cardTitle.classList.add('text-disabled');
    this._cardSubtitle.classList.add('text-disabled');
    this._cardPortion.classList.add('text-disabled');
    this._cardMouse.classList.add('text-disabled');
  }

  _textEnabled() {
    this._cardProduct.classList.remove('text-disabled');
    this._cardTitle.classList.remove('text-disabled');
    this._cardSubtitle.classList.remove('text-disabled');
    this._cardPortion.classList.remove('text-disabled');
    this._cardMouse.classList.remove('text-disabled')
  }

  disabled() {
    this._setState();
    this._removeEventListeners();
    this._textDisabled();
    this._cardProduct.textContent = this._cardText.product;
    this._cardProduct.classList.remove('text-selected');
    this._cardCat.classList.add('element-disabled');
    this._cardNote.textContent = `Печалька, ${this._cardProductData.subtitle} закончился.`;
    this._cardNote.style.color = this._color.disabledNote;
    this._cardLink.textContent = '';
    if (!this._cardLink.classList.contains('element-invisible')) {
      this._cardLink.classList.add('element-invisible');
    };
    if (!this._cardNoteDot.classList.contains('element-invisible')) {
      this._cardNoteDot.classList.add('element-invisible');
    };
    this._cardFrame.style.background = `linear-gradient(135deg, transparent 30px, ${this._color.disabled} 0)`;
    this._cardWeight.style.backgroundColor = this._color.disabled;
    this._card.removeAttribute('name');
    this._card.setAttribute('name', 'disabled');
    this._setEventListeners();
  }

  _stateToggle() {
  this._card.getAttribute('name') == 'default' ? this.selected() :
  this._card.getAttribute('name') == 'selected' ?  this.disabled() : this.default();
  }

  _stageHover() {
    if (this._card.getAttribute('name') == 'default') { this.defaultHover() };
    if (this._card.getAttribute('name') == 'selected') { this.selectedHover() };
  }

  _stageDefault() {
    if (this._card.getAttribute('name') == 'default') { this.default() };
    if (this._card.getAttribute('name') == 'selected') { this.selected() };
  }

  _setEventListeners() {
    this._card.addEventListener('mouseover', this._stageDefault);
    this._card.addEventListener('mouseout', this._stageHover);
    this._card.addEventListener('click', this._stateToggle);
    this._cardLink.addEventListener('click', this._stateToggle);
  }

  _removeEventListeners() {
    this._card.removeEventListener('mouseover', this._stageDefault);
    this._card.removeEventListener('mouseout', this._stageHover);
    this._card.removeEventListener('click', this._stateToggle);
    this._cardLink.removeEventListener('click', this._stateToggle);
  }

}
