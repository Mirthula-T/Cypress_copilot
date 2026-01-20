 import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import TeaInsightHomePage from '../../pages/TeaInsightHomePage';
import TeaDetailsModal from '../../pages/TeaDetailModal';

const homePage = new TeaInsightHomePage();
const modal = new TeaDetailsModal();

Given('the user is on the TeaInsight homepage', () => {
  homePage.visit();
});

When('the user clicks on the tea card {string}', (teaName) => {
  homePage.clickTeaCard(teaName);
});

Then('the tea details modal should open', () => {
  modal.verifyModalIsOpen();
});

Then('the modal should display the tea name {string}', (teaName) => {
  modal.verifyTeaName(teaName);
});

Then('the modal should show the origin and description for {string}', (teaName) => {
  modal.verifyOriginAndDescription(teaName);
});

Then('the modal should list the health benefits of {string}', (teaName) => {
  modal.verifyHealthBenefits(teaName);
});

Then('the modal should show a {string} button for {string}', (buttonText, teaName) => {
  modal.verifyPurchaseButton(buttonText, teaName);
});
 