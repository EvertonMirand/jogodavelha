Cypress.Commands.add('setColor', (selector, color) => {
  cy.get(selector).then(($input) => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    ).set;

    nativeInputValueSetter.call($input[0], color);

    $input[0].dispatchEvent(new Event('change', { bubbles: true }));
  });
});
