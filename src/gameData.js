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
		text: [
			"Pushing through the final set of doors, you feel the chill instantly. You take a cautious step into the room, an office space where only one flickering light remains. The windows, including the two glass meeting room walls, are completely misted, with the exception of a small piece of writing. You edge toward it.",
			"'I aM tHe GhOsT oF dEv7, aNd I wIlL hAvE mY rEvEnGe.'",
			"As you finish reading the message, you feel a breath on your neck. You turn to find... nothing. A loud clang sounds as the doors lock, trapping you inside. There has to be a way out.",
		],
		links: [
			{ buttonText: "Check meeting room one", goTo: 3 },
			{ buttonText: "Carry on into the kitchen", goTo: 16 },
		],
	},
	{
		id: 3,
		text: [
			"The misted glass stops you from seeing into the meeting room. Through the door, slightly ajar, you hear a low whirring sound. You now also notice there is another door, just next to the meeting room door.",
		],
		links: [
			{ buttonText: "Enter the meeting room", goTo: 4 },
			{ buttonText: "Take the other door", goTo: 9 },
		],
	},
	{
		id: 4,
		text: [
			"You enter the meeting room. This room is even colder than the last. On the window opposite the door, there is another message",
			"'yOu WiLl NeVeR lEaVe ThIs PlAcE. yOu WiLl Be 404... NoT fOuNd.'",
			"It occurs to you, that this window is on the front of the building. Perhaps you could wipe it away, and signal someone from outside.",
		],
		links: [
			{ buttonText: "Wipe the message away", goTo: 5 },
			{ buttonText: "Insepct the room further", goTo: 6 },
		],
	},
	{
		id: 5,
		text: [
			"You wipe away the message, but before you can look outside, you hear a low, rumbling noise from behind you.",
			"The door bursts open, and a tall shadowy figure rushes into the room. Before you can process... it all goes black.",
			"Game over",
		],
		links: [{ buttonText: "new game", goTo: 0 }],
	},
	{
		id: 6,
		text: [
			"You look around the room. The source of the low whirring is the air conditioning. Perhaps that was the source of the cold is building. Who knows how long it has been running?",
			"Aside from that, there is nothing of note in the room.",
		],
		links: [
			{ buttonText: "Exit the meeting room", goTo: 7 },
			{ buttonText: "Turn off the air conditioning", goTo: 8 },
		],
	},
	{
		id: 7,
		text: [
			"You exit the meeting room. As you come back out into the main office space, you hear a rummaging sound coming from the kitchen. The side door next to meeting room one's door is now opened slighlty. Someone else is here...",
		],
		links: [
			{ buttonText: "Go through side door", goTo: 9 },
			{ buttonText: "Go to kitchen", goTo: 16 },
		],
	},
	{
		id: 8,
		text: [
			"As soon as you touch the air conditioning unit, you hear a low, ominous laugh. Against your best judgement, you ignore it. As you press the off button, you hear an unusually loud click. The unit has been tampered with!",
			"It bursts into a ball of flames, taking you with it.",
			"Game over",
		],
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
