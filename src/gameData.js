const GAME_DATA = [
	{
		text: "",
		links: [
			{
				buttonText: "Start game",
				goTo: 1,
			},
		],
	},
	{
		text: 'You find yourself alone, surrounded from all sides. A hand taps you on the shoulder. "Who the hell are you?"',
		links: [
			{
				buttonText:
					"Go to starting page - this one has a lot of text for testing",
				goTo: 0,
			},
			{
				buttonText: "Go to page 2",
				goTo: 2,
			},
		],
	},
	{
		text: "Yet another page!",
		links: [
			{
				buttonText: "Go back to the title page",
				goTo: 0,
			},
			{
				buttonText: "Go back to page one",
				goTo: 1,
			},
			{
				buttonText: "Go back to start page (again)",
				goTo: 0,
			},
		],
	},
];

export default GAME_DATA;
