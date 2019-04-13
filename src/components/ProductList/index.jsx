import React, {useEffect}from "react";
import ProductItemContainer from "../ProductItem/ProductItem.container"
import SearchWidget from "./SearchWidget"
import SearchContainer from "./SearchWidget/Search.container"
import recentProduct3 from "../../assets/shop-rsp3.jpg";
import recentProduct2 from "../../assets/shop-rsp2.jpg";
import recentProduct4 from "../../assets/shop-rsp4.jpg";
import shopBanner from "../../assets/shop-banner.jpg";
import Loading from "../Loading";

export default function ProductList(props) {
  // console.log("props ProducList", props);
  useEffect(() => {
    props.getProducts()
  }, [])
  console.log("props ProducList2", props);
  // console.log("value.dataSort ", value.dataSort);

  const productLength = props.products && props.products.length || 0
  if(props.load){
    return <Loading></Loading>
  }

  const sortAZ = (a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    else if (nameA > nameB) return 1;
    else return 0;
  };

  const sortZA = (a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) return 1;
    else if (nameA > nameB) return -1;
    else return 0;
  };

  const sortH2L = (a, b) => {
    if ((a.final_price) < (b.final_price)) return 1;
    else if ((a.final_price) > (b.final_price)) return -1;
    else return 0;
  };

  const sortL2H = (a, b) => {
    if (a.final_price < b.final_price) return -1;
    else if (a.final_price > b.final_price) return 1;
    else return 0;
  };

  const sortTopSale = (a, b) => {
    return b.final_promotion_percent - a.final_promotion_percent;
  };

  const onClickAZ = () => {
    props.sortProducts([...props.products.sort(sortAZ)]);
    // value.setDataSort([...value.dataSort.sort(sortAZ)]);
    // console.log("value.dataSort", value.dataSort);
  };

  const onClickZA = () => {
    props.sortProducts([...props.products.sort(sortZA)]);
    // value.setDataSort([...value.dataSort.sort(sortZA)]);
    // console.log("value.dataSort", value.dataSort);
  };

  const onClickH2L = () => {
    props.sortProducts([...props.products.sort(sortH2L)]);
    // value.setDataSort([...value.dataSort.sort(sortH2L)]);
    // console.log("value.dataSort", value.dataSort);
  };

  const onClickL2H = () => {
    props.sortProducts([...props.products.sort(sortL2H)]);
    // value.setDataSort([...value.dataSort.sort(sortL2H)]);
    // console.log("value.dataSort", value.dataSort);
  };

  const ocClickTopSale = () => {
    props.sortProducts([...props.products.sort(sortTopSale)]);
    // value.setDataSort([...value.dataSort.sort(sortTopSale)]);
    // console.log("value.dataSort", value.dataSort);
  };

  

  return (  
    <section className="shop-area pt-150 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            {/*<!-- tab filter -->*/}
            <div className="row mb-10">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="product-showing mb-40">
                  <p>
                    Showing 1–{productLength} of {productLength} results
                  </p>
                </div>
              </div>
            </div>
            {/*<!-- tab content -->*/}
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  {props.products && props.products.map((elemt, index) => {
                    return (
                      <ProductItemContainer key={elemt.id} index={index} {...elemt} />
                    )})
                  }
                </div>
              </div>
            </div>
          </div>
          {/*<!--SideBar -->*/}
          <div className="col-xl-3 col-lg-4">
            <div className="sidebar-shop">
              <SearchContainer></SearchContainer>
              {/*<!-- 
                            <div className="shop-widget">
                                <h3 className="shop-title">Filter selection</h3>
                                <div className="price-filter">
                                    <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style="left: 15%; width: 45%;"></div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 15%;"></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 60%;"></span></div>
                                    <input type="text" id="amount"/>
                                </div>
                            </div> -->*/}

              <div className="shop-widget">
                <h3 className="shop-title">SHOP BY</h3>
                <ul className="shop-link">
                  <li>
                    <a href="javascript:void(0)" onClick={onClickAZ}>
                      Name: A-Z
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" onClick={onClickZA}>
                      Name: Z-A
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" onClick={onClickH2L}>
                      Price: High to Low
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" onClick={onClickL2H}>
                      Price: Low to High
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" onClick={ocClickTopSale}>
                      Product: Top Sales
                    </a>
                  </li>
                </ul>
              </div>

              <div className="shop-widget">
                <h3 className="shop-title">Recent Product</h3>
                <ul className="shop-sidebar-product">
                  <li>
                    <div className="side-pro-img">
                      <a href="javascript:void(0)">
                        <img src={recentProduct3} alt="" />
                      </a>
                    </div>
                    <div className="side-pro-content">
                      <div className="side-pro-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <a href="javascript:void(0)">Raglan Baseball-Style</a>
                      </h5>
                      <div className="side-pro-price">
                        <span>$119.00 USD</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="side-pro-img">
                      <a href="javascript:void(0)">
                        <img src={recentProduct2} alt="" />
                      </a>
                    </div>
                    <div className="side-pro-content">
                      <div className="side-pro-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <a href="javascript:void(0)">Raglan Baseball-Style</a>
                      </h5>
                      <div className="side-pro-price">
                        <span>$119.00 USD</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="side-pro-img">
                      <a href="javascript:void(0)">
                        <img src={recentProduct4} alt="" />
                      </a>
                    </div>
                    <div className="side-pro-content">
                      <div className="side-pro-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <a href="javascript:void(0)">Raglan Baseball-Style</a>
                      </h5>
                      <div className="side-pro-price">
                        <span>$119.00 USD</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="shop-widget">
                <div className="shop-sidebar-banner">
                  <a href="javascript:void(0)">
                    <img src={shopBanner} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- /SideBar -->*/}
        </div>
      </div>
    </section>
  );
}
