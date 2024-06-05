import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CustomModal from '../CustomModal';
import CFCSubmissionFormContainer from '../CFCSubmissionForm/CFCSubmissionFormContainer';
import FinalChapterSubmissionFormContainer from '../FinalChapterSubmissionForm/FinalChapterSubmissionFormContainer';

const CallForChapterPage = ({
    title = { text: '', image: '' },
    publisher = '',
    publisherLink = '',
    editors = [],
    abstractSubmissionDeadline = '',
    abstractAcceptanceNotification = '',
    fullChapterSubmissionDeadline = '',
    chapterAcceptanceNotification = '',
    projectedReleaseDate = '',
    descriptionParagraphs = [],
    chapters = [],
    editorsBiographies = [],
    isConsentFormRequired = false, // Accept the isConsentFormRequired prop
    consentFormLink = '' // Accept the consentFormLink prop
}) => {
    const tabStyle = 'nav nav-tabs pro-details-nav-btn';
    const [abstractModalIsOpen, setAbstractModalIsOpen] = useState(false);
    const [chapterModalIsOpen, setChapterModalIsOpen] = useState(false);

    const openAbstractModal = () => setAbstractModalIsOpen(true);
    const closeAbstractModal = () => setAbstractModalIsOpen(false);

    const openChapterModal = () => setChapterModalIsOpen(true);
    const closeChapterModal = () => setChapterModalIsOpen(false);

    return (
        <div className="product-details__area product-details__plr mt-100 mb-70">
            <div className="container">
                <div className="row gx-40 mb-100">
                    <div className="col-xl-6 col-lg-6 col-md-6 wow animate__fadeInLeft" data-wow-duration="1.1s">
                        <div className="product-details__main-img pb-20">
                            <img src={title.image} alt={title.text} />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="product-details__left-side">
                            <h4 className="product-details__left-title wow animate__fadeInUp" data-wow-duration="1.1s">{title.text}</h4>
                            <h5 className="wow animate__fadeInUp" data-wow-duration="1.1s">Publisher: <span><a href={publisherLink} target='_blank'>{publisher}</a></span></h5>
                            <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Editors:
                                {editors.map((editorId, index) => {
                                    const editor = editorsBiographies.find(ed => ed.id === editorId);
                                    return editor ? (
                                        <span key={editorId}>
                                            <a href={editor.profileLink || '#'} target='_blank'>{editor.name}</a>{index < editors.length - 1 && ', '}
                                        </span>
                                    ) : (
                                        <span key={editorId}>Unknown Editor{index < editors.length - 1 && ', '}</span>
                                    );
                                })}
                            </p>
                            <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Projected Release Date: {projectedReleaseDate}</p>
                            {descriptionParagraphs.map((paragraph, index) => (
                                <p key={index} className="wow animate__fadeInUp" data-wow-duration="1.1s">{paragraph}</p>
                            ))}
                            <button className="yellow-btn tp-btn-hover alt-color mt-20 mr-30 wow animate__fadeInUp" data-wow-duration="1.1s" onClick={openAbstractModal}><span>Submit Abstract</span><b></b></button>
                            <button className="yellow-btn tp-btn-hover alt-color mt-20 wow animate__fadeInUp" data-wow-duration="1.1s" onClick={openChapterModal}><span>Upload Chapter</span><b></b></button>
                            <div className="product-details__social-box mt-35 wow animate__fadeInUp" data-wow-duration="1.1s">
                                <span>Share:</span>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="productdetails-tabs mb-100">
                        <div className="row justify-content-center">
                            <div className="col-xl-12 col-lg-12 col-12">
                                <Tabs>
                                    <div className="product-additional-tab">
                                        <div className="pro-details-nav mb-40">
                                            <TabList className={tabStyle}>
                                                <Tab><button className="nav-links"><span>Tentative Table of Contents</span></button></Tab>
                                                <Tab><button className="nav-links"><span>Important Dates</span></button></Tab>
                                                <Tab><button className="nav-links"><span>Editor's Biographies</span></button></Tab>
                                            </TabList>
                                        </div>
                                        <div className="tab-content tp-content-tab" id="myTabContent-2">
                                            <TabPanel>
                                                <ul>
                                                    {chapters.map((chapter, index) => (
                                                        <li key={index} style={{ listStyle: "none", padding: "15px", border: "1px solid #ddd", marginBottom: "10px", borderRadius: "5px" }}>
                                                            <p style={{ fontSize: "16px", marginBottom: "5px" }}><strong>Chapter {chapter.index}:</strong> {chapter.title}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="product__details-info table-responsive">
                                                    <table className="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <td className="add-info">Abstract Submission Deadline</td>
                                                                <td className="add-info-list">{abstractSubmissionDeadline}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="add-info">Abstract Acceptance Notification</td>
                                                                <td className="add-info-list">{abstractAcceptanceNotification}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="add-info">Full Chapter Submission Deadline</td>
                                                                <td className="add-info-list">{fullChapterSubmissionDeadline}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="add-info">Chapter Acceptance Notification</td>
                                                                <td className="add-info-list">{chapterAcceptanceNotification}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="add-info">Projected Book Release Date</td>
                                                                <td className="add-info-list">{projectedReleaseDate}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                {editors.map((editorId, index) => {
                                                    const editor = editorsBiographies.find(ed => ed.id === editorId);
                                                    return editor ? (
                                                        <p key={editorId}><b>{editor.name}</b> {editor.bio} <a href={editor.profileLink || '#'} target='_blank'>Profile</a></p>
                                                    ) : (
                                                        <p key={editorId}>Unknown Editor</p>
                                                    );
                                                })}
                                            </TabPanel>
                                        </div>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CustomModal isOpen={abstractModalIsOpen} onRequestClose={closeAbstractModal} contentLabel="Submit Abstract">
                <CFCSubmissionFormContainer itemClass="some-class" chapters={chapters} bookTitle={title.text} />
            </CustomModal>
            <CustomModal isOpen={chapterModalIsOpen} onRequestClose={closeChapterModal} contentLabel="Upload Chapter">
                <FinalChapterSubmissionFormContainer itemClass="some-class" chapters={chapters} bookTitle={title.text} isConsentFormRequired={isConsentFormRequired} consentFormLink={consentFormLink} />
            </CustomModal>
        </div>
    );
}

export default CallForChapterPage;
