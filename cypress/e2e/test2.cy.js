describe('Validación de vulnerabilidad XSS', () => {

  it('No debe interpretar el HTML ingresado por el usuario', () => {

    cy.visit('http://localhost:3000');

    // Login
    cy.get('#email').type('admin@test.com');
    cy.get('#password').type('123');
    cy.contains('button', 'Ingresar').click();

    // Crear tarea con HTML
    cy.get('#taskTitle').type('<h1>TAREA MALICIOSA</h1>');
    cy.contains('button', 'Crear tarea').click();

    // Verificar que NO se renderizó un elemento H1 dentro de la lista
    cy.get('#taskList h1').should('not.exist');

    // Verificar que el HTML se muestra como texto literal
    cy.get('#taskList li')
      .should('contain.text', '<h1>TAREA MALICIOSA</h1>');

  });

});
