const SgetItems = (body) => {
  const response = `Acabas de ingresar el lugar: ${body.name}, que está localizado en ${body.localization}, con las coordenadas ${body.coordenades}. Dejame contarte un poco sobre este lugar:
${body.description}
Si deseas información de contacto llama al ${body.contact}`;
  return response;
};

export default SgetItems;
