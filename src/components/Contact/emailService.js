import axios from 'axios';
import getEmailTemplate from './emailTemplate';

const sendEmail = async (emailData) => {
    try {
        const response = await axios.post('https://web-email-proxy-823d619a0ab4.herokuapp.com/send-email', emailData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (response.status !== 200) {
            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.error("Error submitting proposal:", error.response ? error.response.data : error.message);
        throw error; // Re-throw the error to be caught in the handleSubmit function
    }
};

export { sendEmail };

const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64Content = reader.result.split(',')[1]; // Extract base64 content
            resolve(base64Content);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

const getEmailData = async (formData, files, from, to = [], cc = [], bcc = [], isFinalChapter = false, publisherName = 'Wiley') => {
    const mergeInfo = {
        submissionId: formData.submissionId,
        proposal: formData.proposal,
        chapter: formData.chapter,
        keywords: formData.keywords,
        book: formData.book,
        chapterSubtitles: formData.chapterSubtitles,
        suggestedTitle: formData.suggestedTitle,
        finalTitle: formData.finalTitle,
        authors: formData.authors.map(author => ({
            ...author,
            isCorresponding: author.isCorresponding ? 'Yes' : 'No',
        })),
    };

    const htmlContent = getEmailTemplate(mergeInfo, isFinalChapter);
    const bookCode = formData.book.replace(/[\s-]/g, '').substring(0, 4).toUpperCase();
    const emailSubject = isFinalChapter
        ? `Final Chapter Submission Confirmation (${publisherName}-${bookCode})`
        : `Chapter Proposal Submission Confirmation (${publisherName}-${bookCode})`;

    const emailData = {
        from,
        to,
        cc,
        bcc,
        subject: emailSubject,
        html: htmlContent,
        attachments: []
    };

    if (files && files.length > 0) {
        for (const file of files) {
            const base64File = await readFileAsBase64(file);
            emailData.attachments.push({
                filename: file.name,
                content: base64File,
                mime_type: file.type, // Add mime type
            });
        }
    }

    console.log('Constructed Email Data:', emailData); // Log constructed email data for debugging

    return emailData;
};

export { getEmailData, readFileAsBase64 };
