// awards certificates
import icaiihi_2023_session_chair from '../assets/img/certificates/awards/icaiihi_2023_session_chair.jpg';
import ssn_college_workshop_2021 from '../assets/img/certificates/awards/ssn_college_workshop_2021.jpg';
import icdsns_2023_reviewer from '../assets/img/certificates/awards/icdsns_2023_reviewer.jpg';
import nimitcon_2023_reviewer from '../assets/img/certificates/awards/nimitcon_2023_reviewer.jpg';
import ieee_xtreme_proctor from '../assets/img/certificates/awards/ieeextream_proctor.jpg';
// membership certificates
import ieee_membership from '../assets/img/certificates/memberships/ieee_membership.jpg';
import acm_membership from '../assets/img/certificates/memberships/acm_membership.jpg';
import grss_membership from '../assets/img/certificates/memberships/grss_membership.jpg';
import ieee_young_professional from '../assets/img/certificates/memberships/ieee_young_professional.jpg';
import ieee_consultant_network from '../assets/img/certificates/memberships/ieee_consultant_network.jpg';
// course certificates
import coursera_blockchain from '../assets/img/certificates/courses/coursera_blockchain.jpg';
import innobuzz_ceh from '../assets/img/certificates/courses/innobuzz_ceh.jpg';
import udemy_arduino from '../assets/img/certificates/courses/udemy_arduino.jpg';
import udemy_ethereum_solidity from '../assets/img/certificates/courses/udemy_ethereum_solidity.jpg';
import udemy_flutter from '../assets/img/certificates/courses/udemy_flutter.jpg';
import sololearn_html from '../assets/img/certificates/courses/sololearn_html.jpg';
import sololearn_css from '../assets/img/certificates/courses/sololearn_css.jpg';
import udemy_kicad from '../assets/img/certificates/courses/udemy_kicad.jpg';
import udemy_raspberry_pi from '../assets/img/certificates/courses/udemy_respberry_pi.jpg';
import vskills_html5 from '../assets/img/certificates/courses/vskills_html5.jpg';

// certificates data
const certificatesData = [
    {
        id: "icaiihi_2023_session_chair",
        image: icaiihi_2023_session_chair,
        title: "ICAIHI 2023 Session Chair",
        issueDate: "2023-05-15",
        certificateId: "ICAIHI2023-001",
        verificationUrl: "https://example.com/verify/ICAIHI2023-001",
        type: "award"
    },
    {
        id: "ssn_college_workshop_2021",
        image: ssn_college_workshop_2021,
        title: "SSN College Workshop 2021",
        issueDate: "2021-03-10",
        certificateId: "SSN2021-002",
        verificationUrl: "https://example.com/verify/SSN2021-002",
        type: "award"
    },
    {
        id: "icdsns_2023_reviewer",
        image: icdsns_2023_reviewer,
        title: "ICDSNS 2023 Reviewer",
        issueDate: "2023-01-25",
        certificateId: "ICDSNS2023-003",
        verificationUrl: "https://example.com/verify/ICDSNS2023-003",
        type: "award"
    },
    {
        id: "nimitcon_2023_reviewer",
        image: nimitcon_2023_reviewer,
        title: "NimitCon 2023 Reviewer",
        issueDate: "2023-02-17",
        certificateId: "NIMITCON2023-004",
        verificationUrl: "https://example.com/verify/NIMITCON2023-004",
        type: "award"
    },
    {
        id: "ieee_xtreme_proctor",
        image: ieee_xtreme_proctor,
        title: "IEEE Xtreme Proctor",
        issueDate: "2022-10-19",
        certificateId: "IEEE2022-005",
        verificationUrl: "https://example.com/verify/IEEE2022-005",
        type: "award"
    },
    {
        id: "ieee_membership",
        image: ieee_membership,
        title: "IEEE Membership",
        issueDate: "2023-01-01",
        certificateId: "IEEE2023-006",
        verificationUrl: "https://example.com/verify/IEEE2023-006",
        type: "membership"
    },
    {
        id: "acm_membership",
        image: acm_membership,
        title: "ACM Membership",
        issueDate: "2023-02-15",
        certificateId: "ACM2023-007",
        verificationUrl: "https://example.com/verify/ACM2023-007",
        type: "membership"
    },
    {
        id: "grss_membership",
        image: grss_membership,
        title: "GRSS Membership",
        issueDate: "2023-03-20",
        certificateId: "GRSS2023-008",
        verificationUrl: "https://example.com/verify/GRSS2023-008",
        type: "membership"
    },
    {
        id: "ieee_young_professional",
        image: ieee_young_professional,
        title: "IEEE Young Professional",
        issueDate: "2023-04-05",
        certificateId: "IEEE2023-009",
        verificationUrl: "https://example.com/verify/IEEE2023-009",
        type: "membership"
    },
    {
        id: "ieee_consultant_network",
        image: ieee_consultant_network,
        title: "IEEE Consultant Network",
        issueDate: "2023-05-25",
        certificateId: "IEEE2023-010",
        verificationUrl: "https://example.com/verify/IEEE2023-010",
        type: "membership"
    },
    {
        id: "coursera_blockchain",
        image: coursera_blockchain,
        title: "Coursera Blockchain",
        issueDate: "2022-06-10",
        certificateId: "COURSERA2022-011",
        verificationUrl: "https://example.com/verify/COURSERA2022-011",
        type: "course"
    },
    {
        id: "innobuzz_ceh",
        image: innobuzz_ceh,
        title: "Innobuzz CEH",
        issueDate: "2021-07-15",
        certificateId: "INNOBUZZ2021-012",
        verificationUrl: "https://example.com/verify/INNOBUZZ2021-012",
        type: "course"
    },
    {
        id: "udemy_arduino",
        image: udemy_arduino,
        title: "Udemy Arduino",
        issueDate: "2021-08-20",
        certificateId: "UDEMY2021-013",
        verificationUrl: "https://example.com/verify/UDEMY2021-013",
        type: "course"
    },
    {
        id: "udemy_ethereum_solidity",
        image: udemy_ethereum_solidity,
        title: "Udemy Ethereum & Solidity",
        issueDate: "2021-09-25",
        certificateId: "UDEMY2021-014",
        verificationUrl: "https://example.com/verify/UDEMY2021-014",
        type: "course"
    },
    {
        id: "udemy_flutter",
        image: udemy_flutter,
        title: "Udemy Flutter",
        issueDate: "2021-10-30",
        certificateId: "UDEMY2021-015",
        verificationUrl: "https://example.com/verify/UDEMY2021-015",
        type: "course"
    },
    {
        id: "sololearn_html",
        image: sololearn_html,
        title: "Sololearn HTML",
        issueDate: "2021-11-05",
        certificateId: "SOLOLEARN2021-016",
        verificationUrl: "https://example.com/verify/SOLOLEARN2021-016",
        type: "course"
    },
    {
        id: "sololearn_css",
        image: sololearn_css,
        title: "Sololearn CSS",
        issueDate: "2021-12-10",
        certificateId: "SOLOLEARN2021-017",
        verificationUrl: "https://example.com/verify/SOLOLEARN2021-017",
        type: "course"
    },
    {
        id: "udemy_kicad",
        image: udemy_kicad,
        title: "Udemy KiCad",
        issueDate: "2022-01-15",
        certificateId: "UDEMY2022-018",
        verificationUrl: "https://example.com/verify/UDEMY2022-018",
        type: "course"
    },
    {
        id: "udemy_raspberry_pi",
        image: udemy_raspberry_pi,
        title: "Udemy Raspberry Pi",
        issueDate: "2022-02-20",
        certificateId: "UDEMY2022-019",
        verificationUrl: "https://example.com/verify/UDEMY2022-019",
        type: "course"
    },
    {
        id: "vskills_html5",
        image: vskills_html5,
        title: "Vskills HTML5",
        issueDate: "2022-03-25",
        certificateId: "VSKILLS2022-020",
        verificationUrl: "https://example.com/verify/VSKILLS2022-020",
        type: "course"
    }
];

export default certificatesData;
