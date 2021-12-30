import React from 'react';

function ProductList(props) {
    return (
        <div>

            <div>
                {/* breadcrumb part start*/}
                <section className="breadcrumb_part">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb_iner">
                                    <h2>product list</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb part end*/}
                {/* product list part start*/}
                <section className="product_list section_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="product_sidebar">
                                    <div className="single_sedebar">
                                        <form action="#">
                                            <input type="text" name="#" placeholder="Search keyword" />
                                            <i className="ti-search" />
                                        </form>
                                    </div>
                                    <div className="single_sedebar">
                                        <div className="select_option">
                                            <div className="select_option_list">Category <i className="right fas fa-caret-down" /> </div>
                                            <div className="select_option_dropdown">
                                                <p><a href="#">Category 1</a></p>
                                                <p><a href="#">Category 2</a></p>
                                                <p><a href="#">Category 3</a></p>
                                                <p><a href="#">Category 4</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_sedebar">
                                        <div className="select_option">
                                            <div className="select_option_list">Type <i className="right fas fa-caret-down" /> </div>
                                            <div className="select_option_dropdown">
                                                <p><a href="#">Type 1</a></p>
                                                <p><a href="#">Type 2</a></p>
                                                <p><a href="#">Type 3</a></p>
                                                <p><a href="#">Type 4</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="product_list">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single_product_item">
                                                <img src="assets/img/product/product_list_1.png" alt="#" className="img-fluid" />
                                                <h3> <a href="single-product.html">Cervical pillow for airplane
                                                    car office nap pillow</a> </h3>
                                                <p>From $5</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single_product_item">
                                                <img src="assets/img/product/product_list_2.png" alt="#" className="img-fluid" />
                                                <h3> <a href="single-product.html">Geometric striped flower home classy decor</a> </h3>
                                                <p>From $5</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single_product_item">
                                                <img src="assets/img/product/product_list_3.png" alt="#" className="img-fluid" />
                                                <h3> <a href="single-product.html">Foam filling cotton slow rebound pillows</a> </h3>
                                                <p>From $5</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single_product_item">
                                                <img src="assets/img/product/product_list_4.png" alt="#" className="img-fluid" />
                                                <h3> <a href="single-product.html">Memory foam filling cotton Slow rebound pillows</a> </h3>
                                                <p>From $5</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single_product_item">
                                                <img src="assets/img/product/product_list_5.png" alt="#" className="img-fluid" />
                                                <h3> <a href="single-product.html">Memory foam filling cotton Slow rebound pillows</a> </h3>
                                                <p>From $5</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single_product_item">
                                                <img src="assets/img/product/product_list_6.png" alt="#" className="img-fluid" />
                                                <h3> <a href="single-product.html">Sleeping orthopedic sciatica Back Hip Joint Pain relief</a> </h3>
                                                <p>From $5</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single_product_item">
                                                <img src="assets/img/product/product_list_7.png" alt="#" className="img-fluid" />
                                                <h3> <a href="single-product.html">Memory foam filling cotton Slow rebound pillows</a> </h3>
                                                <p>From $5</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single_product_item">
                                                <img src="assets/img/product/product_list_8.png" alt="#" className="img-fluid" />
                                                <h3> <a href="single-product.html">Sleeping orthopedic sciatica Back Hip Joint Pain relief</a> </h3>
                                                <p>From $5</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single_product_item">
                                                <img src="assets/img/product/product_list_9.png" alt="#" className="img-fluid" />
                                                <h3> <a href="single-product.html">Geometric striped flower home classy decor</a> </h3>
                                                <p>From $5</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single_product_item">
                                                <img src="assets/img/product/product_list_10.png" alt="#" className="img-fluid" />
                                                <h3> <a href="single-product.html">Geometric striped flower home classy decor</a> </h3>
                                                <p>From $5</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="load_more_btn text-center">
                                        <a href="#" className="btn_3">Load More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* product list part end*/}
                {/* client review part here */}
                <section className="client_review">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="client_review_slider owl-carousel">
                                    <div className="single_client_review">
                                        <div className="client_img">
                                            <img src="assets/img/client.png" alt="#" />
                                        </div>
                                        <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                        <h5>- Micky Mouse</h5>
                                    </div>
                                    <div className="single_client_review">
                                        <div className="client_img">
                                            <img src="assets/img/client_1.png" alt="#" />
                                        </div>
                                        <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                        <h5>- Micky Mouse</h5>
                                    </div>
                                    <div className="single_client_review">
                                        <div className="client_img">
                                            <img src="assets/img/client_2.png" alt="#" />
                                        </div>
                                        <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                        <h5>- Micky Mouse</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* client review part end */}
                {/* feature part here */}
                <section className="feature_part section_padding">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6">
                                <div className="feature_part_tittle">
                                    <h3>Credibly innovate granular
                                        internal or organic sources
                                        whereas standards.</h3>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="feature_part_content">
                                    <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single_feature_part">
                                    <img src="assets/img/icon/feature_icon_1.svg" alt="#" />
                                    <h4>Credit Card Support</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single_feature_part">
                                    <img src="assets/img/icon/feature_icon_2.svg" alt="#" />
                                    <h4>Online Order</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single_feature_part">
                                    <img src="assets/img/icon/feature_icon_3.svg" alt="#" />
                                    <h4>Free Delivery</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single_feature_part">
                                    <img src="assets/img/icon/feature_icon_4.svg" alt="#" />
                                    <h4>Product with Gift</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* feature part end */}
                {/* subscribe part here */}
                <section className="subscribe_part section_padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="subscribe_part_content">
                                    <h2>Get promotions &amp; updates!</h2>
                                    <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>
                                    <div className="subscribe_form">
                                        <input type="email" placeholder="Enter your mail" />
                                        <a href="#" className="btn_1">Subscribe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* subscribe part end */}
            </div>

        </div>
    );
}

export default ProductList;