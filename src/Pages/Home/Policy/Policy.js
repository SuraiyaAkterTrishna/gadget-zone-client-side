import React from 'react';
import policy1 from '../../../images/logos/policy1.png';
import policy2 from '../../../images/logos/policy2.png';
import policy3 from '../../../images/logos/policy3.png';
import policy4 from '../../../images/logos/policy4.jpg';
import policy5 from '../../../images/logos/policy5.jpg';
import policy6 from '../../../images/logos/policy6.jpg';

const Policy = () => {
    return (
        <div className="container">
            <h1 className="text-center text-primary mt-5 mb-3">Our Policy</h1>
            <p className="text-center h5 pb-5 text-secondary">Gadget Zone can provide you such massive collection of global brands and such massive collection of products.
            </p>
            <div className="row gy-5 align-items-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img className='scalable-img' width="100px" src={policy1} alt="" />
                        </div>
                        <div className="ps-3">
                            <p className="h4 fw-bold">Worldwide Delivery</p>
                            <p className="text-secondary">We work with the biggest delivery networks. It doesn't matter where in the world you are.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img className='scalable-img' width="100px" src={policy2} alt="" />
                        </div>
                        <div className="ps-3">
                            <p className="h4 fw-bold">Free Shipping</p>
                            <p className="text-secondary">Stop wondering about shipping costs, what you see is what you pay.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img className='scalable-img' width="100px" src={policy3} alt="" /></div>
                        <div className="ps-3">
                            <p className="h4 fw-bold">Money back Guaranty</p>
                            <p className="text-secondary">Got a problem with the product? Don't worry, we have a 30 day money back guarantee.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img className='scalable-img' width="100px" src={policy4} alt="" />
                        </div>
                        <div className="ps-3">
                            <p className="h4 fw-bold">Huge Sales Network</p>
                            <p className="text-secondary">As of February 2022, Gadget Zone has over 115 showrooms in Bangladesh. All these showrooms are completely managed by our own staffs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img className='scalable-img' width="100px" src={policy5} alt="" />
                        </div>
                        <div className="ps-3">
                            <p className="h4 fw-bold">Trained Professionals</p>
                            <p className="text-secondary">Being the authorized distributor of all major global brands, our staffs are directly trained by the global brands to ensure superior customer satisfaction.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img className='scalable-img' width="100px" src={policy6} alt="" />
                        </div>
                        <div className="ps-3">
                            <p className="h4 fw-bold">Largest Collection</p>
                            <p className="text-secondary">Our honorable customers can enjoy a huge collection of over 700 electronics and electrical products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policy;