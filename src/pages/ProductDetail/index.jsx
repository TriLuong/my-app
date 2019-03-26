import React from "react";
import { withRouter } from "react-router-dom";
import data from "../../dataProductList.json";

function ProductDetail(props) {
  console.log(props);
  const product = data.find(elemt => {
    return elemt.id.toString() === props.match.params.id;
  });
  console.log(product);
  return (
    <>
      <section className="shop-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4">
              <div className="product-details-img mb-10">
                <div className="tab-content" id="myTabContentpro">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                  >
                    <div className="product-large-img">
                      <img src={product.img_url_mob} alt="" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel">
                    <div className="product-large-img">
                      <img src={"img/product/pro2.jpg"} alt="" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile1" role="tabpanel">
                    <div className="product-large-img">
                      <img src="img/product/pro3.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-thumb-tab mb-30">
                <ul className="nav" id="myTab2" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-selected="true"
                    >
                      <img src="img/product/pro1.jpg" alt="" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-selected="false"
                    >
                      <img src="img/product/pro2.jpg" alt="" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab2"
                      data-toggle="tab"
                      href="#profile1"
                      role="tab"
                      aria-selected="false"
                    >
                      <img src="img/product/pro3.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="product-details mb-30 pl-30">
                <div className="details-cat mb-20">
                  <a href="#">decor,</a>
                  <a href="#">furniture</a>
                </div>
                <h2 className="pro-details-title mb-15">
                  {product.name}
                </h2>
                <div className="details-price mb-20">
                  <span>{product.final_price.toLocaleString()} VND</span>
                  <span className="old-price">{product.price.toLocaleString()} VND</span>
                </div>
                <div className="product-variant">
                  <div className="product-color variant-item">
                    <div className="variant-name">
                      <span>Colors</span>
                    </div>
                    <ul className="shop-link shop-color">
                      <li>
                        <a href="shop.html">
                          <span className="blue" />
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <span className="green" />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <span className="orange" />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <span className="navy" />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <span className="pinkish" />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <span className="vista" />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="product-size variant-item">
                    <div className="variant-name">
                      <span>size</span>
                    </div>
                    <ul className="shop-link shop-size">
                      <li>
                        <a href="shop.html">xxl </a>
                      </li>
                      <li className="active">
                        <a href="shop.html">xl </a>
                      </li>
                      <li>
                        <a href="shop.html">lg </a>
                      </li>
                      <li>
                        <a href="shop.html">md </a>
                      </li>
                      <li>
                        <a href="shop.html">sm </a>
                      </li>
                    </ul>
                  </div>

                  <div className="product-desc variant-item">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                  </div>

                  <div className="product-info-list variant-item">
                    <ul>
                      <li>
                        <span>Brands:</span> {product.name}
                      </li>
                      <li>
                        <span>Product Code:</span> {product.id}
                      </li>
                      <li>
                        <span>Reward Points:</span> {product.percent_star}
                      </li>
                      <li>
                        <span>Stock:</span>{" "}
                        <span className="in-stock">In Stock</span>
                      </li>
                    </ul>
                  </div>

                  <div className="product-action-details variant-item">
                    <div className="product-details-action">
                      <form action="#">
                        <div className="plus-minus">
                          <div className="cart-plus-minus">
                            <input type="text" value="1" />
                          </div>
                        </div>
                        <button className="details-action-icon" type="submit">
                          <i className="fas fa-heart" />
                        </button>
                        <button className="details-action-icon" type="submit">
                          <i className="fas fa-hourglass" />
                        </button>
                        <div className="details-cart mt-40">
                          <button className="btn theme-btn">
                            purchase now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-xl-8 col-lg-8">
              <div className="product-review">
                <ul className="nav review-tab" id="myTabproduct" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab6"
                      data-toggle="tab"
                      href="#home6"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Description{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab6"
                      data-toggle="tab"
                      href="#profile6"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Reviews (2)
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent2">
                  <div
                    className="tab-pane fade show active"
                    id="home6"
                    role="tabpanel"
                    aria-labelledby="home-tab6"
                  >
                    <div className="desc-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem.
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile6"
                    role="tabpanel"
                    aria-labelledby="profile-tab6"
                  >
                    <div className="desc-text review-text">
                      <div className="product-commnets">
                        <div className="product-commnets-list mb-25 pb-15">
                          <div className="pro-comments-img">
                            <img src="img/product/comments/01.png" alt="" />
                          </div>
                          <div className="pro-commnets-text">
                            <h4>
                              Roger West -<span>June 5, 2018</span>
                            </h4>
                            <div className="pro-rating">
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                        <div className="product-commnets-list mb-25 pb-15">
                          <div className="pro-comments-img">
                            <img src="img/product/comments/02.png" alt="" />
                          </div>
                          <div className="pro-commnets-text">
                            <h4>
                              Roger West -<span>June 5, 2018</span>
                            </h4>
                            <div className="pro-rating">
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="review-box mt-50">
                        <h4>Add a Review</h4>
                        <div className="your-rating mb-40">
                          <span>Your Rating:</span>
                          <div className="rating-list">
                            <a href="#">
                              <i className="far fa-star" />
                            </a>
                            <a href="#">
                              <i className="far fa-star" />
                            </a>
                            <a href="#">
                              <i className="far fa-star" />
                            </a>
                            <a href="#">
                              <i className="far fa-star" />
                            </a>
                            <a href="#">
                              <i className="far fa-star" />
                            </a>
                          </div>
                        </div>
                        <form className="review-form" action="#">
                          <div className="row">
                            <div className="col-xl-12">
                              <label htmlFor="message">YOUR REVIEW</label>
                              <textarea
                                name="message"
                                id="message"
                                cols="30"
                                rows="10"
                              />
                            </div>
                            <div className="col-xl-6">
                              <label htmlFor="r-name">Name</label>
                              <input type="text" id="r-name" />
                            </div>
                            <div className="col-xl-6">
                              <label htmlFor="r-email">Email</label>
                              <input type="email" id="r-email" />
                            </div>
                            <div className="col-xl-12">
                              <button className="btn theme-btn">
                                Add your Review
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="pro-details-banner">
                <a href="shop.html">
                  <img src="img/banner/pro-details.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="area-title text-center mb-50">
                <h2>Releted Products</h2>
                <p>Browse the huge variety of our products</p>
              </div>
            </div>
          </div>
          <div className="product-slider-2 owl-carousel">
            <div className="pro-item">
              <div className="product-wrapper">
                <div className="product-img mb-25">
                  <a href="product-details.html">
                    <img src="img/product/pro4.jpg" alt="" />
                    <img
                      className="secondary-img"
                      src="img/product/pro5.jpg"
                      alt=""
                    />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="flaticon-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="flaticon-eye" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Compare"
                    >
                      <i className="flaticon-compare" />
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <div className="pro-cat mb-10">
                    <a href="shop.html">IT, </a>
                    <a href="shop.html">USB</a>
                  </div>
                  <h4>
                    <a href="product-details.html">
                      Raglan Baseball Style shirt
                    </a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                  <div className="product-wishlist">
                    <a href="#">
                      <i className="far fa-heart" title="Wishlist" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-item">
              <div className="product-wrapper">
                <div className="product-img mb-25">
                  <a href="product-details.html">
                    <img src="img/product/pro5.jpg" alt="" />
                    <img
                      className="secondary-img"
                      src="img/product/pro6.jpg"
                      alt=""
                    />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="flaticon-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="flaticon-eye" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Compare"
                    >
                      <i className="flaticon-compare" />
                    </a>
                  </div>
                  <div className="sale-tag">
                    <span className="new">new</span>
                    <span className="sale">sale</span>
                  </div>
                </div>
                <div className="product-content">
                  <div className="pro-cat mb-10">
                    <a href="shop.html">decor, </a>
                    <a href="shop.html">furniture</a>
                  </div>
                  <h4>
                    <a href="product-details.html">
                      Raglan Baseball Style shirt
                    </a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                  <div className="product-wishlist">
                    <a href="#">
                      <i className="far fa-heart" title="Wishlist" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-item">
              <div className="product-wrapper">
                <div className="product-img mb-25">
                  <a href="product-details.html">
                    <img src="img/product/pro7.jpg" alt="" />
                    <img
                      className="secondary-img"
                      src="img/product/pro8.jpg"
                      alt=""
                    />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="flaticon-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="flaticon-eye" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Compare"
                    >
                      <i className="flaticon-compare" />
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <div className="pro-cat mb-10">
                    <a href="shop.html">decor, </a>
                    <a href="shop.html">furniture</a>
                  </div>
                  <h4>
                    <a href="product-details.html">
                      Raglan Baseball Style shirt
                    </a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                  <div className="product-wishlist">
                    <a href="#">
                      <i className="far fa-heart" title="Wishlist" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-item">
              <div className="product-wrapper">
                <div className="product-img mb-25">
                  <a href="product-details.html">
                    <img src="img/product/pro9.jpg" alt="" />
                    <img
                      className="secondary-img"
                      src="img/product/pro10.jpg"
                      alt=""
                    />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="flaticon-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="flaticon-eye" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Compare"
                    >
                      <i className="flaticon-compare" />
                    </a>
                  </div>
                  <div className="sale-tag">
                    <span className="new">new</span>
                    <span className="sale">sale</span>
                  </div>
                </div>
                <div className="product-content">
                  <div className="pro-cat mb-10">
                    <a href="shop.html">decor, </a>
                    <a href="shop.html">furniture</a>
                  </div>
                  <h4>
                    <a href="product-details.html">
                      Raglan Baseball Style shirt
                    </a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                  <div className="product-wishlist">
                    <a href="#">
                      <i className="far fa-heart" title="Wishlist" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-item">
              <div className="product-wrapper">
                <div className="product-img mb-25">
                  <a href="product-details.html">
                    <img src="img/product/pro1.jpg" alt="" />
                    <img
                      className="secondary-img"
                      src="img/product/pro11.jpg"
                      alt=""
                    />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="flaticon-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="flaticon-eye" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Compare"
                    >
                      <i className="flaticon-compare" />
                    </a>
                  </div>
                  <div className="sale-tag">
                    <span className="new">new</span>
                    <span className="sale">sale</span>
                  </div>
                </div>
                <div className="product-content">
                  <div className="pro-cat mb-10">
                    <a href="shop.html">decor, </a>
                    <a href="shop.html">furniture</a>
                  </div>
                  <h4>
                    <a href="product-details.html">
                      Raglan Baseball Style shirt
                    </a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                  <div className="product-wishlist">
                    <a href="#">
                      <i className="far fa-heart" title="Wishlist" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default withRouter(ProductDetail);
