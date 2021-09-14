# Proyecto React E-Commerce

Proyecto realizado para el curso de CoderHouse de React, camada 14680.

## Caracteristicas

- Navegabilidad entre catalogo completo, filtro por categorias dinámico y detalle individual del producto.
- Bootón de agregar al carrito para varios items con control según stock.
- Los datos se consumen desde Firebase.

![](https://github.com/diegograssino/coderhouse-project-grassino/blob/main/src/assets/entrega.gif?raw=true")

> Demostración de funcionalidades

### Notas adicionales

El proyecto tiene una estructura que podriamos dividir en tres agrupaciones:

- Catalogo: ItemListContainer --> ItemContainer --> Item
- Detalle: ItemDetailContainer --> ItemDetail
- Navbar: Navbar --> (CartWidget, CategoryWidget)

A su vez implementa como loader un Spinner de [react-bootstrap](https://react-bootstrap.netlify.app/) para mejorar la experiencia de usuario.

Por ultimo, se utilizo tema de Bootstrap custom desde [Bootswacth](https://bootswatch.com/).

## Adicionales a lo solicitado

- Se implementa soporte para cargar descuentos y correspondiente visualización en cada item.
- Se implementa soporte para destacar productos, los cuales son listados primero.

## Mejoras a agregar en proximas versiones

En futuras versiones se espera agregar lo siguiente para ampliar el proyecto:

- Implementación de CRUD para modificaciones de BBDD.
- Implementación de Backend, que administre BBDD y haga notificaciones por mail.
- Implementación de login de usuarios.
- Mejorar manejo de stock (ejemplo: Mostar, o no, productos sin stock).
- Implementar pasarela de pagos.
- Implementar validación mas exhaustiva de formulario.
- Implementar soporte para mas de una foto por producto.

## Dependencias instaladas

- [react-bootstrap](https://react-bootstrap.netlify.app/)
- [react-router-dom](https://reactrouter.com/)
- [react-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap/)
- [firebase] (https://www.npmjs.com/package/firebase)
- [react-icons] (https://react-icons.github.io/react-icons/)
