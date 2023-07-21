const skillsAndExperienceListItems = [
	"Semantic, accessible HTML",
	"CSS, SCSS, CSS in JS",
	"JavaScript ES6 and beyond",
	"React",
	"TypeScript",
	"TDD & Jest",
	"React Testing Library",
	"Webpack",
	"Next.js",
	"Design Systems",
	"GraphQL",
	"Git & Versioning",
	"Cross-browser & device testing",
	"Accessibility",
	"A/B testing",
	"Pair programming and mobbing",
	"Agile methodologies",
	"Mentoring",
]

const SkillsAndExperience = () => {
	return (
		<>
			<h1>Skills &amp; Experience</h1>

			<p>
				Information summarising my skillset and specialisms. Talk about my skills, passions, and experience throughout
				my career inc. learning everything myself. Self motivated etc.
			</p>

			<ul>
				{skillsAndExperienceListItems.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</>
	)
}

export default SkillsAndExperience
