/* import View from './view.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _overlay = document.querySelector('.overlay');
  _recipeWindow = document.querySelector('.add-recipe-window');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _generateMarkup() {}

  constructor() {
    super();
    this._addHandlerShowWindowRecipe();
    this._addHandlerHideWindowRecipe();
  }

  _toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._recipeWindow.classList.toggle('hidden');
  }

  _addHandlerShowWindowRecipe() {
    this._btnOpen.addEventListener('click', this._toggleWindow.bind(this));
  }

  _addHandlerHideWindowRecipe() {
    this._btnClose.addEventListener('click', this._toggleWindow.bind(this));
    this._overlay.addEventListener('click', this._toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      console.log(data);
      handler(data);
    });
  }
}

export default new AddRecipeView();
 */