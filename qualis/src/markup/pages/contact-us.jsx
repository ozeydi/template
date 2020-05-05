import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';



class ContactUs extends Component {


    render() {
        return (
            <>
                <Header />


                <div class="page-heading">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="page-title">
                                    <h2>Contact Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- BEGIN Main Container col2-right --> */}
                <div class="main-container col2-right-layout">
                    <div class="main container">
                        <div class="row">
                            <div class="col-main col-sm-9 wow bounceInUp animated animated" style={{"visibility":"visible"}}>
                                <div id="messages_product_view"></div>
                                <form action="" id="contactForm" method="post">
                                    <div class="static-contain">
                                        <fieldset class="group-select">
                                            <ul>
                                                <li id="billing-new-address-form">
                                                    <fieldset class="">
                                                        <ul>
                                                            <li>
                                                                <div class="customer-name">
                                                                    <div class="input-box name-firstname">
                                                                        <label for="name"><em class="required">*</em>Name</label>
                                                                        <br />
                                                                        <input name="name" id="name" title="Name" value="john doe" class="input-text required-entry" type="text" />
                                                                    </div>
                                                                    <div class="input-box name-firstname">
                                                                        <label for="email"><em class="required">*</em>Email</label>
                                                                        <br />
                                                                        <input name="email" id="email" title="Email" value="john.doe@gmail.com" class="input-text required-entry validate-email" type="text" />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <label for="telephone">Telephone</label>
                                                                <br />
                                                                <input name="telephone" id="telephone" title="Telephone" value="" class="input-text" type="text" />
                                                            </li>
                                                            <li>
                                                                <label for="comment"><em class="required">*</em>Comment</label>
                                                                <br />
                                                                <textarea name="comment" id="comment" title="Comment" class="required-entry input-text" cols="5" rows="3"></textarea>
                                                            </li>
                                                        </ul>
                                                    </fieldset>
                                                </li>
                                                <p class="require"><em class="required">* </em>Required Fields</p>
                                                <input type="text" name="hideit" id="hideit" value="" style={{"display":"none !important"}} />
                                                <div class="buttons-set">
                                                    <button type="submit" title="Submit" class="button submit"><span><span>Submit</span></span></button>
                                                </div>
                                            </ul>
                                        </fieldset>
                                    </div>
                                </form>

                            </div>
                            <aside class="col-right sidebar col-sm-3 wow bounceInUp animated animated" style={{"visibility":"visible"}}>
                                <div class="block block-company">
                                    <div class="block-title">Company</div>
                                    <div class="block-content">
                                        <ol id="recently-viewed-items">
                                            <li class="item odd"><a href="about-us.html">About Us</a></li>
                                            <li class="item even"><a href="#">Sitemap</a></li>
                                            <li class="item  odd"><a href="#">Terms of Service</a></li>
                                            <li class="item last"><a href="#">Search Terms</a></li>
                                            <li class="item last"><a href="contact-us.html"><strong>Contact Us</strong></a></li>
                                        </ol>
                                    </div>
                                </div>
                            </aside>
                            {/* <!--col-right sidebar-->  */}
                        </div>
                        {/* <!--row-->  */}
                    </div>
                    {/* <!--main-container-inner-->  */}
                </div>
                {/* <!--main-container col2-left-layout-->  */}


                <div class="container">
                    <div class="row our-features-box">
                        <ul>
                            <li>
                                <div class="feature-box">
                                    <div class="icon-truck"></div>
                                    <div class="content">FREE SHIPPING on order over $99</div>
                                </div>
                            </li>
                            <li>
                                <div class="feature-box">
                                    <div class="icon-support"></div>
                                    <div class="content">Have a question?<br />
                                        +1 800 789 0000</div>
                                </div>
                            </li>
                            <li>
                                <div class="feature-box">
                                    <div class="icon-money"></div>
                                    <div class="content">100% Money Back Guarantee</div>
                                </div>
                            </li>
                            <li>
                                <div class="feature-box">
                                    <div class="icon-return"></div>
                                    <div class="content">30 days return Service</div>
                                </div>
                            </li>
                            <li class="last">
                                <div class="feature-box"> <a href="#"><i class="fa fa-apple"></i> download</a> <a href="#"><i class="fa fa-android"></i> download</a> </div>
                            </li>
                        </ul>
                    </div>
                </div>


                <Footer />
            </>
        )
    }
}
export default ContactUs;