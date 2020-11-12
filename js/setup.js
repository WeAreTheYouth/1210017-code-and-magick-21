'use strict';

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const MANTLE_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
const WIZARDS_QUANTITY = 4;
let wizards = [];

const random = function (arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const createWizards = function () {
  for (let i = 0; i < WIZARDS_QUANTITY; i++) {
    const randomWizards = {
      name: random(WIZARD_NAMES) + ` ` + random(WIZARD_SURNAMES),
      coatColor: random(MANTLE_COLOR),
      eyesColor: random(EYES_COLOR)
    };
    wizards.push(randomWizards);
  }
};

createWizards();

const similarListElement = document.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

const renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();

for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
