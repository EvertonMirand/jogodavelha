Cypress.Commands.add('setColor', (selector, color) => {
  cy.get(selector).then(($input) => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    ).set;

    // aplica valor usando o setter nativo (React intercepta)
    nativeInputValueSetter.call($input[0], color);

    // dispara evento de change que o React escuta
    $input[0].dispatchEvent(new Event('change', { bubbles: true }));
  });
});
