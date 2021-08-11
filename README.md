# Proyecto React E-Commerce

Proyecto realizado para el curso de CoderHouse de React, camada 14680.

## Caracteristicas (pre-entrega)

- Navegabilidad entre catalogo completo, filtro por categorias y detalle individual del producto.
- Bootón de agregar al carrito para varios items, funcionalidad parcial por el momento.
- Los datos, en este caso, se consumen desde API de [Fake Store](https://fakestoreapi.com/).

![](https://github.com/diegograssino/coderhouse-project-grassino/blob/main/src/assets/Untitled.gif?raw=true")

> Demostración de funcionalidades

### Notas adicionales

El proyecto tiene una estructura que podriamos dividir en tres agrupaciones:

- Catalogo: ItemListContainer --> ItemContainer --> Item
- Detalle: ItemDetailContainer --> ItemDetail
- Navbar: Navbar --> (CartWidget, CategoryWidget, InfoWidget)

El componente CategoryWidget trabaja como un filtro por categorias las cuales trae dinamicamente desde la misma API de [Fake Store](https://fakestoreapi.com/), de esta forma trae todas las categorias que haya dentro de un dropdown y se rutean automaticamente, este componente lo considero una mejora a los links estaticas por categorias planteados en el proyecto hasta esta instancia.

El InfoWidget será desarrollado posteriomente con fines de mostrar la información y autor del proyecto.

A su vez implementa como loader un Spinner de [react-bootstrap](https://react-bootstrap.netlify.app/) para mejorar la experiencia de usuario.

Por ultimo, se utilizo tema de Bootstrap custom desde [Bootswacth](https://bootswatch.com/) (por el momento se linkea a archivo descargado dentro de src a modo de prueba y por si hay cambio de tema seleccionado, con la decisión final de diseño se instalara directamente como dependencia).

## Dependencias instaladas

- [react-bootstrap](https://react-bootstrap.netlify.app/)
- [react-router-dom](https://reactrouter.com/)
- [react-bootstrap](https://react-bootstrap.netlify.app/)
- [react-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap/)

### End
