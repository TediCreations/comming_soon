import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Title from "components/Title";
import Product from "components/Product";
import API from "api";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  fetchProducts() {
    var self = this;
    API.get("products")
      .then(function (response) {
        console.log(response.data);
        self.setState({ products: response.data });
      })
      .catch(function (error) {
        console.log(error);
        self.setState({ products: [] });
      })
      .then(function () {});
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    const listProducts = this.state.products.map((product) => (
      <Product
        key={product.id}
        title={product.title}
        salesPercentage={product.salesPercentage}
        isFeatured={product.isFeatured}
        isOutOfStock={product.isOutOfStock}
        salePercentage={25}
        price={product.price}
        imageUrl={product.imageUrl}
        imageHoverUrl={product.imageHoverUrl}
      />
    ));
    return (
      <React.Fragment>
        {/* Product Section Start */}
        <div className="section section-fluid section-padding pt-0">
          <Container>
            <Title title="Shop now" subtitle="Shop our best sellers" />
            {/* Products Start */}
            <Row xl={5} lg={4} md={3} sm={2} xs={1} className="products">
              {listProducts}
            </Row>
            {/* Products End */}
          </Container>
        </div>
        {/* Product Section End */}
      </React.Fragment>
    );
  }
}

export default Products;
