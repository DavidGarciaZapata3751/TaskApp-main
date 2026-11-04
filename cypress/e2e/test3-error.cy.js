// Test con ERROR INTENCIONAL para generar screenshot y video en GitHub Actions.
// Eliminar este archivo cuando ya no se necesite.
describe('Error intencional', () => {

  // Pausa entre pasos (ms) para que el video se vea más lento
  const PAUSA = 1500;

  it('Debe fallar a propósito al buscar una tarea inexistente', () => {

    cy.visit('http://localhost:3000');
    cy.wait(PAUSA);

    // Login (delay = ms entre cada tecla)
    cy.get('#email').type('admin@test.com', { delay: 150 });
    cy.wait(PAUSA);
    cy.get('#password').type('123', { delay: 150 });
    cy.wait(PAUSA);
    cy.contains('button', 'Ingresar').click();
    cy.wait(PAUSA);

    // Crear tarea
    cy.get('#taskTitle').type('Comprar pan', { delay: 150 });
    cy.wait(PAUSA);
    cy.contains('button', 'Crear tarea').click();
    cy.wait(PAUSA);

    // ERROR INTENCIONAL: esta tarea nunca se creó
    cy.contains('Tarea que no existe').should('exist');

  });

});
