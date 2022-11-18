import SgetItems from "../services/SgetItems.js";

const CgetItems = (req, res) => {
  const { body } = req;
  const response = SgetItems(body);
  const jsonResponse = JSON.stringify(response);
  res.send(jsonResponse);
};

export default CgetItems;
