import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterData = [
	{
		title: 'Support',
		link1: 'Contact Us',
		link2: 'Chat',
		link3: 'Help Center',
		link4: 'FAQ',
	},
	{
		title: 'Developers',
		link1: 'Cloud ',
		link2: 'Commerce',
		link3: 'Pro ',
		link4: 'API',
	},
	{
		title: 'Company',
		link1: 'About ',
		link2: 'Information',
		link3: 'Legal ',
		link4: 'Privacy',
	},
	{
		title: 'Social',
		link1: <FaFacebook className='icon' />,
		link2: <FaTwitter className='icon' />,
		link3: <FaLinkedin className='icon' />,
		link4: <FaGithub className='icon' />,
	},
];

export default FooterData;
