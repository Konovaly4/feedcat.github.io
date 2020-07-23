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
    this._cardSubtitle = this._cardItem.querySelector('.card__subtitle');
    this._cardPortion = this._cardItem.querySelector('.card__description-portion');
    this._cardMouse = this._cardItem.querySelector('.card__description-mouse');
    this._cardWeight = this._cardItem.querySelector('.card__weight');
    this._cardWeightValue = this._cardItem.querySelector('.card__weight-value');
    this._cardNote = this._cardItem.querySelector('.card__note');
    this._cardLink = this._cardItem.querySelector('.card__note-link');
    this._cardNoteDot = this._cardItem.querySelector('.card__note-dot');
  }

  _setState() {
    this._render()
    this._cardProduct.textContent = this._cardText.product;
    this._cardSubtitle.textContent = this._cardProductData.subtitle;
    this._cardPortion.textContent = this._cardProductData.portion;
    this._cardMouse.textContent = this._cardProductData.mouse;
    this._cardWeightValue.textContent = this._cardProductData.weight;
    this._cardNote.textContent = this._cardText.noteDefault;
    this._cardLink.textContent = this._cardText.noteDefaultLink;
  }

  default() {
    this._setState();
    this._removeEventListeners();
    this._cardFrame.style.background = `linear-gradient(135deg, transparent 30px, ${this._color.default} 0)`;
    this._cardWeight.style.backgroundColor = this._color.default;
    this._cardNote.style.color = this._color.defaultNote;
    this._cardLink.style.color = this._color.default;
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
  }

  disabled() {
    this._setState();
    this._removeEventListeners();
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
    this._cardFrame.addEventListener('mouseover', this._stageHover);
    this._cardFrame.addEventListener('mouseout', this._stageDefault);
    this._cardFrame.addEventListener('click', this._stateToggle);
  }

  _removeEventListeners() {
    this._cardFrame.removeEventListener('mouseover', this._stageHover);
    this._cardFrame.removeEventListener('mouseout', this._stageDefault);
    this._cardFrame.removeEventListener('click', this._stateToggle);
  }

}
