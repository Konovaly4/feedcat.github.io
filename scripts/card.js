class Card {
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
  }

  _default() {
    this._render();
    this._cardBg.style.backgroundColor = this._color.default;
    this._cardWeight.style.backgroundColor = this._color.default;
    this._cardNote.style.color = this._color.defaultNote;
    this._cardLink.style.color = this._color.default;
    if (this._cardLink.classList.contains('element-invisible')) {
      this._cardLink.classList.remove('element-invisible');
    };
    this._cardProduct.textContent = this._cardText.product;
    this._cardSubtitle.textContent = this._cardProductData.subtitle;
    this._cardPortion.textContent = this._cardProductData.portion;
    this._cardMouse.textContent = this._cardProductData.mouse;
    this._cardWeightValue.textContent = this._cardProductData.weight;
    this._cardNote.textContent = this._cardText.noteDefault;
    this._cardLink.textContent = this._cardText.noteDefaultLink;
    this._card.removeAttribute('name');
    this._card.setAttribute('name', 'default');
  }

  _defaultHover() {
    this._default();
    this._cardBg.style.backgroundColor = this._color.defaultHover;
    this._cardWeight.style.backgroundColor = this._color.defaultHover;
  }

  _selected() {
    this._default();
    this._cardNote.textContent = this._cardProductData.note;
    this._cardLink.textContent = '';
    this._cardLink.classList.add('element-invisible');
    this._cardBg.style.backgroundColor = this._color.selected;
    this._cardWeight.style.backgroundColor = this._color.selected;
    this._card.removeAttribute('name');
    this._card.setAttribute('name', 'selected');
  }

  _selectedHover() {
    this._selected();
    this._cardBg.style.backgroundColor = this._color.selectedHover;
    this._cardWeight.style.backgroundColor = this._color.selectedHover;
  }

  _disabled() {
    this._default();
    this._cardNote.textContent = `Печалька, ${this._cardProductData.subtitle} закончился.`;
    this._cardNote.style.color = this._color.disabledNote;
    this._cardLink.textContent = '';
    this._cardLink.classList.add('element-invisible');
    this._cardBg.style.backgroundColor = this._color.disabled
    this._cardWeight.style.backgroundColor = this._color.disabled;
    this._card.removeAttribute('name');
    this._card.setAttribute('name', 'disabled');
  }

  _stateToggle(event) {
    if (event.target.closest('.card__bg').querySelector('.card').getAttribute('name') == 'default') { this._selected() };
    if (event.target.closest('.card__bg').querySelector('.card').getAttribute('name') == 'selected') { this._disabled() };
    if (event.target.closest('.card__bg').querySelector('.card').getAttribute('name') == 'disabled') { this._default() };
  }

  _stageHover(event) {
    if (event.target.closest('.card__bg').querySelector('.card').getAttribute('name') == 'default') { this._defaultHover() };
    if (event.target.closest('.card__bg').querySelector('.card').getAttribute('name') == 'selected') { this._selectedHover() };
  }

  _stageDefault(event) {
    if (event.target.closest('.card__bg').querySelector('.card').getAttribute('name') == 'default') { this._default() };
    if (event.target.closest('.card__bg').querySelector('.card').getAttribute('name') == 'selected') { this._selected() };
  }

  setEventListeners() {
    this._default();
    this._cardBg.addEventListener('mouseover', this._stageHover);
    this._cardBg.addEventListener('mouseout', this._stageDefault);
    this._cardBg.addEventListener('click', this._stateToggle);
    this._cardBg.addEventListener('click', () => (console.log(event.target.closest('.card'))))
  }

}
