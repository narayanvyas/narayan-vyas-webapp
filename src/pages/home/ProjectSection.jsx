import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper';
import SectionTitle from '../../components/SectionTitle';
import { Card, CardContent, CardMedia, Typography, Box, Divider } from '@mui/material';
import projects from '../../data/projectsData';
import ProjectCard from '../../components/Project/ProjectCard';

SwiperCore.use([Mousewheel]);


const Project = ({ subTitle, title, slidesToShow = 4 }) => {
    const sliderOption = {
        pagination: {
            el: '.project-slider-dots',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        mousewheel: {
            enabled: false,
        },
        loop: true,
        spaceBetween: 30,
        slidesPerView: slidesToShow,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: slidesToShow,
            },
        },
    };

    return (
        <div className="product__area product__plr mt-100 mb-70">
            <div className="container-fluid">
                <div className="row align-items-end pb-60">
                    <div className="col-lg-6 col-md-9">
                        <SectionTitle
                            sectionClass="project__section-box wow itfadeUp"
                            subTitleClass="section-subtitle char-anim"
                            titleClass="section-title char-anim"
                            subTitle={subTitle ? subTitle : "My Projects"}
                            Title={title ? title : "Showcasing Excellence in Technology and Innovation"}
                        />
                    </div>
                    <div className="col-lg-6 col-md-3">
                        <div className="project__section-arrow d-flex align-items-center justify-content-end">
                            <div className="swiper-button swiper-button-prev">
                                <button><i className="far fa-arrow-left"></i></button>
                            </div>
                            <div className="swiper-button swiper-button-next">
                                <button><i className="far fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-container project__active">
                    <Swiper {...sliderOption} className="swiper-wrapper">
                        {projects.map(project => (
                            <SwiperSlide key={project.id} className="swiper-slide">
                                <div className="project__item" style={{ width: '100%' }}>
                                    <ProjectCard project={project} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="project-slider-dots"></div>
                </div>
            </div>
        </div>
    );
};

export default Project;
