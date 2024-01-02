//App.js

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import './App.css';

const steps = [
	{
		id: '0',
		message: '🤖 Welcome to SciAstra ',
		trigger: '1',
	},
	{
		id: '1',
		message: 'How may I assist you today?',
		trigger: '2'
		// end: true
	},



	{
		id: '2',
		options: [
			{ value: 1, label: '1. 🎓 About SciAstra', trigger: '7' },
			{ value: 2, label: '2. 📚 Courses', trigger: '8' },
			{ value: 3, label: '3. 🌐 Resources', trigger: '9' },
			{ value: 4, label: '4. 🤔 One-to-One Sessions', trigger: '10' },
			{ value: 5, label: '5. 📞 Contact Us', trigger: '13' },
			{ value: 6, label: '6. 💡 FAQs', trigger: '14' },
		],
		// user:true
		// end:true

	},






	{
		id: '7',
		message: '🤖 SciAstra is the largest community of science scholars in India, focusing on exams like IISER Aptitude Test (IAT), NEST, ISI, CMI, and IACS. We provide educational courses, resources, and personalized one-to-one sessions for future scientists.',
		trigger: '21'
	},

	{
		id: '8',
		options: [
			{ value: 1, label: '1. 1Rs Courses' },
			{ value: 2, label: '2. PhD & Internships' },
			{ value: 3, label: '3. Books' },
			{ value: 4, label: '4. CUET' },
			{ value: 5, label: '5. IIsc' },
			{ value: 6, label: '6. IISERs' },
			{ value: 7, label: '7. NISER' },
			{ value: 8, label: '8. ISI' },
			{ value: 9, label: '9. CMI' },
			{ value: 10, label: '10. IACS' },
			{ value: 8, label: '11. CEBS' },
		],
		end: true
	},

	{
		id: '9',
		options: [
			{ value: 1, label: '1. Free Mock Tests' },
			{ value: 2, label: '2. PYQs' },
			{ value: 3, label: '3. Study Material' },
			{ value: 4, label: '4. Exam Analysis' },
			{ value: 5, label: '5. IAT 2022 Analysis' },
			{ value: 6, label: '6. NEST 2022 Analysis' },
			{ value: 7, label: '7. Internship' },
		],
		end: true
	},




	{
		id: '10',
		message: 'Great choice! To book a one-to-one session, please provide your preferred date and time. ex DD/MM/YY and 00:00 am/pm',
		trigger: '11',
	},
	{
		id: '11',
		user: true,
		trigger: '12',
	},

	{
		id: '12',
		message: 'Thanks for providing the details..',
		end: true
	},

	{
		id: '13',
		message: '🤖 You can contact us via email at support@sciastra.com or call us at +91 XXXX-XXXXX. Feel free to reach out for any assistance or inquiries.',
		end: true
	},

	{
		id: '14',
		options: [
			{ value: 1, label: '1. What is SciAstra ?', trigger: '15' },
			{ value: 2, label: '2. What courses are offered by SciAstra ?', trigger: '16' },
			{ value: 3, label: '3. How can I schedule a one-to-one session ?', trigger: '17' },
			{ value: 4, label: '4. How can I contact SciAstra ?', trigger: '18' },
			{ value: 5, label: '5. How do I enroll in a course ?', trigger: '19' },
			{ value: 6, label: '6. What are the payment options for courses ?', trigger: '20' }
		],
	},

	{
		id: '15',
		message: 'SciAstra is the largest community of science scholars in India, specializing in exams like IISER Aptitude Test, NEST, ISI, CMI, and IACS. We provide educational courses, resources, and personalized one-to-one sessions for future scientists.',
		end: true
	},
	{
		id: '16',
		message: 'SciAstra offers a variety of courses such as CUET, IISc, IISERs, and more. Explore our Courses section for detailed information on each program.',
		end: true
	},
	{
		id: '17',
		message: 'To schedule a personalized one-to-one session, choose the "4. 🤔 One-to-One Sessions" option in the chatbot, and follow the prompts to provide your preferred date and time. Our team will then confirm the session with you shortly.',
		end: true
	},
	{
		id: '18',
		message: ' You can contact us through email at support@sciastra.com or by calling +91 XXXX-XXXXX. For quick assistance',
		end: true
	},
	{
		id: '19',
		message: 'To enroll in a course, visit our Courses section, select the desired program, and follow the enrollment instructions. If you have specific questions, you can ask the chatbot for guidance.',
		end: true
	},

	{
		id: '20',
		message: 'We offer various payment options for course enrollment. You can find detailed information on payment methods and any available discounts during the enrollment process.',
		end: true
	},

	{
		id: '21',
		message: 'Please type any 2 for the main menu',
		trigger:'22'
	},

    {
		id: '22',
		user: true,
		trigger: '2',
	  }





];

// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: "img.png",
	floating: true,
};

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="SciAstra"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default App;
