import React from 'react';

const ProductInfo = () => {
    return (
        <div className="product_info-faq-area pb-95">
            <div className="container">
                <nav className="product-details-nav">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link show active" id="nav-general-tab" data-bs-toggle="tab" href="#nav-general"
                        role="tab" aria-selected="true">Description</a>
                    <a className="nav-item nav-link" id="nav-seller-tab" data-bs-toggle="tab" href="#nav-seller" role="tab"
                        aria-selected="false">Reviews</a>
                </div>
                </nav>
                <div className="tab-content product-details-content" id="nav-tabContent">
                <div className="tab-pane fade active show" id="nav-general" role="tabpanel">
                    <div className="tabs-wrapper mt-35">
                        <div className="product__details-des">
                            <p>Very clean and organized with easy to follow tutorials, Exercises, and solutions. This course
                            does start from the
                            beginning with very little knowledge and gives a great overview of common tools used for data
                            science and progresses
                            into more complex concepts and ideas. This course is amazing..! I started this course as a
                            beginner and learnt a lot. Instructors
                            are great. Query handling
                            can be improved.Overall very happy with the course.</p>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-seller" role="tabpanel">
                    <div className="tabs-wrapper mt-35">
                        <div className="course-review-item mb-30">
                            <div className="course-reviews-img">
                            <a href="#"><img src="assets/img/course/course-reviews-1.png" alt="image not found"/></a>
                            </div>
                            <div className="course-review-list">
                            <h5><a href="#">Sotapdi Kunda</a></h5>
                            <div className="course-start-icon">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>55 min ago</span>
                            </div>
                            <p>Very clean and organized with easy to follow tutorials, Exercises, and
                                solutions.
                                This course does start from the beginning with very little knowledge and
                                gives a
                                great overview of common tools used for data science and progresses into
                                more
                                complex concepts and ideas.</p>
                            </div>
                        </div>
                        <div className="course-review-item mb-30">
                            <div className="course-reviews-img">
                            <a href="#"><img src="assets/img/course/course-reviews-2.png" alt="image not found"/></a>
                            </div>
                            <div className="course-review-list">
                            <h5><a href="#">Samantha</a></h5>
                            <div className="course-start-icon">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>45 min ago</span>
                            </div>
                            <p>The course is good at explaining very basic intuition of the concepts. It
                                will get
                                you scratching the surface so to say. where this course is unique is the
                                implementation methods are so well defined Thank you to the team !.</p>
                            </div>
                        </div>
                        <div className="course-review-item mb-30">
                            <div className="course-reviews-img">
                            <a href="#"><img src="assets/img/course/course-reviews-3.png" alt="image not found"/></a>
                            </div>
                            <div className="course-review-list">
                            <h5><a href="#">Michell Mariya</a></h5>
                            <div className="course-start-icon">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>30 min ago</span>
                            </div>
                            <p>This course is amazing..!
                                I started this course as a beginner and learnt a lot. Instructors are great.
                                Query
                                handling can be improved.Overall very happy with the course.</p>
                            </div>
                        </div>
                        <div className="product__details-comment ">
                            <div className="comment-title mb-20">
                            <h3>Add a review</h3>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            </div>
                            <div className="comment-rating mb-20">
                            <span>Overall ratings</span>
                            <ul>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fal fa-star"></i></a></li>
                            </ul>
                            </div>
                            <div className="comment-input-box mb-15">
                            <form action="#">
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <textarea placeholder="Your review" className="comment-input comment-textarea mb-20"></textarea>
                                    </div>
                                    <div className="col-xxl-6">
                                        <div className="comment-input mb-20">
                                            <input type="text" placeholder="Your Name"/>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6">
                                        <div className="comment-input mb-20">
                                            <input type="email" placeholder="Your Email"/>
                                        </div>
                                    </div>
                                    <div className="col-xxl-12">
                                        <div className="comment-submit">
                                            <button type="submit" className="edu-btn">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;