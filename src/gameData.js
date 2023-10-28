const GAME_DATA = [
	{
		id: 0,
		text: [],
		links: [{ buttonText: "Start game", goTo: 1 }],
	},
	{
		id: 1,
		text: [
			"Of all the nights to break down. Rain hammers down on the windscreen - fourty-five minutes, with no signs of letting up. On the passenger seat lays your phone, long dead.",
			'"Where am I going to find a phone on a night like this?"',
			"Holding a jacket over your head, you make off running toward the street when you see one office still has its door open. As you run through the door, you manage to get a glance at the sign above the door...",
			"Spindogs",
		],
		links: [
			{
				buttonText: "Enter the building",
				goTo: 2,
			},
		],
	},
	{
		id: 2,
		text: ["Page 2"],
		links: [
			{ buttonText: "Go to page 3", goTo: 3 },
			{ buttonText: "Go to page 16", goTo: 16 },
		],
	},
	{
		id: 3,
		text: ["Page 3"],
		links: [
			{ buttonText: "Go to page 4", goTo: 4 },
			{ buttonText: "Go to page 9", goTo: 9 },
		],
	},
	{
		id: 4,
		text: ["Page 4"],
		links: [
			{ buttonText: "go to page 5", goTo: 5 },
			{ buttonText: "go to page 6", goTo: 6 },
		],
	},
	{
		id: 5,
		text: ["Page 5 - death"],
		links: [{ buttonText: "new game", goTo: 0 }],
	},
	{
		id: 6,
		text: ["Page 6"],
		links: [
			{ buttonText: "go to page 7", goTo: 7 },
			{ buttonText: "go to page 8", goTo: 8 },
		],
	},
	{
		id: 7,
		text: ["Page 7 - back to the start"],
		links: [{ buttonText: "go back", goTo: 0 }],
	},
	{
		id: 8,
		text: ["Page 8 - death!"],
		links: [{ buttonText: "new game", goTo: 0 }],
	},
	{
		id: 9,
		text: ["Page 9"],
		links: [
			{ buttonText: "go to page 10", goTo: 10 },
			{ buttonText: "go to page 13", goTo: 13 },
		],
	},
	{
		id: 10,
		text: ["Page 10"],
		links: [{ buttonText: "go to page 11", goTo: 11 }],
	},
	{
		id: 11,
		text: ["Page 11"],
		links: [{ buttonText: "go to page 12", goTo: 12 }],
	},
	{
		id: 12,
		text: ["Page 12 - winner!"],
		links: [{ buttonText: "new game", goTo: 0 }],
	},
	{
		id: 13,
		text: ["Page 13"],
		links: [
			{ buttonText: "go to page 14", goTo: 14 },
			{ buttonText: "go to page 15", goTo: 15 },
		],
	},
	{
		id: 14,
		text: ["Page 14 - go back"],
		links: [{ buttonText: "new game", goTo: 0 }],
	},
	{
		id: 15,
		text: ["Page 15 - death!"],
		links: [{ buttonText: "new game", goTo: 0 }],
	},
	{
		id: 16,
		text: ["Page 16"],
		links: [
			{ buttonText: "go to page 17", goTo: 17 },
			{ buttonText: "go to page 19", goTo: 19 },
		],
	},
	{
		id: 17,
		text: ["Page 17"],
		links: [{ buttonText: "go to page 18", goTo: 18 }],
	},
	{
		id: 18,
		text: ["Page 18 - death!"],
		links: [{ buttonText: "new game", goTo: 0 }],
	},
	{
		id: 19,
		text: ["Page 19"],
		links: [
			{ buttonText: "go to page 20", goTo: 20 },
			{ buttonText: "go to page 24", goTo: 24 },
		],
	},
	{
		id: 20,
		text: ["Page 20"],
		links: [
			{ buttonText: "go to page 21", goTo: 21 },
			{ buttonText: "go to page 23", goTo: 23 },
		],
	},
	{
		id: 21,
		text: ["Page 21"],
		links: [{ buttonText: "go to page 22", goTo: 22 }],
	},
	{
		id: 22,
		text: ["Page 22 - death!"],
		links: [{ buttonText: "new game", goTo: 0 }],
	},
	{
		id: 23,
		text: ["Page 23 - go back"],
		links: [{ buttonText: "new game", goTo: 0 }],
	},
	{
		id: 24,
		text: ["Page 24"],
		links: [
			{ buttonText: "go to page 25", goTo: 25 },
			{ buttonText: "go to page 26", goTo: 26 },
		],
	},
	{
		id: 25,
		text: ["Page 25 - death"],
		links: [{ buttonText: "new game", goTo: 0 }],
	},
	{
		id: 26,
		text: ["Page 26 - death"],
		links: [{ buttonText: "new game", goTo: 0 }],
	},
];

export default GAME_DATA;
