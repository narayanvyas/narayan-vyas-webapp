import React from 'react';
import { Link } from 'react-router-dom';
import publications from '../about/publicationsData'; // Import the publications data
import './HomePagePublications.css'; // Import the CSS file

import SectionTitle from '../../components/SectionTitle';
import shapeImg1 from '../../assets/img/service/sv-shape-1.png';
import shapeImg2 from '../../assets/img/service/sv-shape-2.png';

// Function to parse date in MM/YYYY format
const parseDate = (dateString) => {
    const [month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1);
};

// Sort publications by date, latest first
publications.sort((a, b) => parseDate(b.date) - parseDate(a.date));

// Function to highlight "N. Vyas" in the contributors' string using dangerouslySetInnerHTML
const highlightContributors = (contributors) => {
    return contributors.replace(/N\. Vyas/g, '<strong>N. Vyas</strong>');
};

const HomePagePublications = () => {
    return (
        <div className="service__area service__space service__mlr grey-bg pt-195 pb-70 p-relative mt-1">
            <div className="service__shape-1">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="service__shape-2">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SectionTitle
                            sectionClass="service__section-box text-center pb-35 section-title-fixed-width"
                            subTitle="Recent Publications"
                            Title="Explore My Recent Academic Publications"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="publications-grid">
                        {publications.slice(0, 10).map((pub, index) => (
                            <div key={index} className="publication-card">
                                <div className="publication-content">
                                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-title">
                                        {pub.title}
                                    </a>
                                    <p className="publication-contributors">
                                        <i className="fas fa-user"></i> <strong>{pub.type === 'Book' ? 'Editors' : 'Authors'}:</strong> <span dangerouslySetInnerHTML={{ __html: highlightContributors(pub.contributors) }} />
                                    </p>
                                    <p className="publication-date-type-publisher">
                                        <i className="far fa-calendar-alt"></i> {pub.date} | <i className="fas fa-book"></i> {pub.type} | <i className="far fa-building"></i> {pub.publisher}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="contact__button wow animate__fadeInUp mt-60" data-wow-duration="1.1s">
                        <Link className="main-btn-sm tp-btn-hover alt-color" to="/publications"><span>View More</span><b></b></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePagePublications;
