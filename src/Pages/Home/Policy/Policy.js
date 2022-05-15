import React from 'react';
import policy1 from '../../../images/logos/policy1.png';

const Policy = () => {
    return (
        <div className="container">
            <h2 className="text-center display-4 fw-bolder mb-2">Main Features</h2>
            <p className="text-center h5 pb-5 text-secondary">Square's beautiful visual design style is built on feature rich, flexible foundations.
            </p>
            <div className="row gy-5 align-items-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img width="100px" src={policy1} alt="" />
                        </div>
                        <div className="ps-3">
                            <p className="h4 fw-bold">Fully responsive</p>
                            <p className="text-secondary">Square stays beautiful on all screen sizes across all devices</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img width="100px" src="" alt="" />
                        </div>
                        <div className="ps-3">
                            <p className="h4 fw-bold">Latest Bootstrap</p>
                            <p className="text-secondary">The latest version of Bootstrap has you covered for all eventualities</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img width="100px" src="logos/edit.png" alt="" /></div>
                        <div className="ps-3">
                            <p className="h4 fw-bold">100% customizable</p>
                            <p className="text-secondary">A vast set of components makes your imagination the only restriction.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img width="100px" src="logos/sass.png" alt="" />
                        </div>
                        <div className="ps-3">
                            <p className="h4 fw-bold">Built with Sass</p>
                            <p className="text-secondary">Take full advantage of Sass- just like Bootstrap and Us ;</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img width="100px" src="logos/browser.png" alt="" />
                        </div>
                        <div className="ps-3">
                            <p className="h4 fw-bold">Cross-browser compatible</p>
                            <p className="text-secondary">Compatible across all modern browsers, including Edge and IE10+</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img width="100px" src="logos/accessible.png" alt="" />
                        </div>
                        <div className="ps-3">
                            <p className="h4 fw-bold">Accessible</p>
                            <p className="text-secondary">Square is open to all with accessibility central to the design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policy;