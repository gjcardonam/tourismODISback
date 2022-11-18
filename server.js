import app from "./src/app.js";

const PORT = 3001;

app.listen(PORT || 3000, () => {
  console.log(`connected on port ${PORT}`);
});
