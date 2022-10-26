import React from "react";
import "../styles/Homepagereview.css"




function Review() {
    return (
        <>

<section class=" container px-3 py-5 ">
        <div class="row pb-4 pt-md-4 justify-content-around">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body px-3 py-5">
                        <figure class="text-center mb-0">
                            <blockquote class="blockquote">
                                <p class="pb-3">
                                    <i class="fa fa-quote-left fa-xs text-primary"></i>
                                    <span class="lead font-italic" id="demo">Best app in market to Split
                                        your Bills.</span>
                                    <i class="fa fa-quote-right fa-xs text-primary"></i>
                                </p>
                            </blockquote>
                            <figcaption class="blockquote-footer mb-0">
                                The Hindu
                            </figcaption>
                        </figure>

                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body px-3 py-5">
                        <figure class="text-center mb-0">
                            <blockquote class="blockquote">
                                <p class="pb-3">
                                    <i class="fa fa-quote-left fa-xs text-primary"></i>
                                    <span class="lead font-italic" id="demo">No.1 on PlayStore and AppStore in payment category.</span>
                                    <i class="fa fa-quote-right fa-xs text-primary"></i>
                                </p>
                            </blockquote>
                            <figcaption class="blockquote-footer mb-0">
                               Statisics
                            </figcaption>
                        </figure>

                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center pt-md-5 ">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body px-3 py-5">

                        <figure class="text-center mb-0">
                            <blockquote class="blockquote">
                                <p class="pb-3">
                                    <i class="fa fa-quote-left fa-xs text-primary"></i>
                                    <span class="lead font-italic" id="demo">One of the most innovative App with very creative UI.</span>
                                    <i class="fa fa-quote-right fa-xs text-primary"></i>
                                </p>
                            </blockquote>
                            <figcaption class="blockquote-footer mb-0">
                                Times of India
                            </figcaption>
                        </figure>

                    </div>
                </div>
            </div>
        </div>
        <footer className="px-4">
        <div className="footer-div">

          
            <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>

                </span>
              </i>
            <div className="row">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="../faq">FAQ</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>

            <div className="copyright">
                Bill Splitter Copyright © 2022 GDSC - All rights reserved
            </div>

        </div>
    </footer>

    </section>
        </>
    );
}
export default Review;