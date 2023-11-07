const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const products = require("./routes/product");

app.use(cors());


app.use("/products",products);





app.listen(PORT, () => {
console.log(`Server is running On Port ${PORT}`)
}
)