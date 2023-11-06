const express = require("express");
const app = express();
const PORT = 8000;
const products = require("./routes/product")



app.use("/products",products);





app.listen(PORT, () => {
console.log(`Server is running On Port ${PORT}`)
}
)