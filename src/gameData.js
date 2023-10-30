const GAME_DATA = [
	{
		id: 0,
		text: [],
		links: [{ buttonText: "Start game", goTo: 1 }],
	},
	{
		id: 1,
		text: [
			"Of all the nights to break down. Rain hammers on the windscreen - it had been fourty-five minutes, with no signs of letting up. On the passenger seat lays your phone, long dead.",
			'"Where am I going to find a phone on a night like this?"',
			"Holding your jacket over head, you head toward the street. One office still has its door open. As you run through the door, you manage to get a glance at the sign above...",
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
			"Pushing through the final set of doors, you feel the chill instantly. You take a cautious step into the room, an office space where only one flickering light remains. The windows, including the two glass meeting rooms, are completely misted, with the exception of a small piece of writing. You edge toward it.",
			"'I aM tHe GhOsT oF dEv7, aNd I wIlL hAvE mY rEvEnGe.'",
			"You feel a breath on your neck, and turn to find... nothing. A loud clang echoes through the office as the doors lock, trapping you inside. There has to be a way out.",
		],
		links: [
			{ buttonText: "Check meeting room one", goTo: 3 },
			{ buttonText: "Carry on into the kitchen", goTo: 16 },
		],
	},
	{
		id: 3,
		text: [
			"The misted glass stops you from seeing into the meeting room. Through the door, slightly ajar, you hear a low whirring sound. You now also notice there is another door next to the meeting room door.",
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
			"It occurs to you, that this window is on the front of the building. Perhaps you could wipe the mist away, and signal someone from outside.",
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
		links: [{ buttonText: "New game", goTo: 0 }],
	},
	{
		id: 6,
		text: [
			"You look around the room. The source of the low whirring is the air conditioning. Perhaps that was the source of the cold. Who knows how long it had been running?",
			"Aside from that, nothing in the room jumps out at you.",
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
		links: [{ buttonText: "New game", goTo: 0 }],
	},
	{
		id: 9,
		text: [
			"You open the door to pitch blackness. You take a few steps into the room, reaching out to find cupboards, a sink, and then - moving to the other wall - light switches. You click every switch and... nothing.",
			"You continue feeling your way through the room until your hand finds a handle. You pull at it, and the light of a fridge gives a dim illumination to the room. With the new light, you look around the room. Back the way you came, you had missed a small cupboard, at the other end of the room, CCTV screens.",
		],
		links: [
			{ buttonText: "Check the cupboard", goTo: 10 },
			{ buttonText: "Check the CCTV screens", goTo: 13 },
		],
	},
	{
		id: 10,
		text: [
			"You pull at the cupboard door, and even though the door doesn't budge, you hear a quiet gasp from the other side of the door. You keep pulling, but to no avail.",
			"Exhausted, you drop to your knees with an exasperated sigh. 'If anyone is in there, I am trying to help you.'",
			"Silence. Just as you go to pick yourself up, you hear a rummaging sound from the main room. Something is coming. From the cupboard, the inner lock slides opens, and a hand reaches out, dragging you in.",
		],
		links: [{ buttonText: "Continue", goTo: 11 }],
	},
	{
		id: 11,
		text: [
			"After you slide into the cupboard, you are quickly dropped, before hearing the lock snap shut again. The rummaging from outside rushes past the door. Finding your bearings, you turn to see a figure standing over you.",
			"'Who are you?'",
			"'My name is Tozer. Steve Tozer. For three days I have been trapped here. I recieved an email saying that Dev7 had fallen over, but when I arrived to check, it had already died. Now its ghost haunts the office.'",
			"'How do we get out of here?'",
			"'I have a way out, but I will need a distraction...'",
		],
		links: [{ buttonText: "Continue", goTo: 12 }],
	},
	{
		id: 12,
		text: [
			"Sneaking out of the cupboard, the fridge light was gone. You reach around on the wall until you find what you are looking for. Pressing down hard, the fire alarm starts to blare. The two of you split off in different directions, Steve toward the front door, you back into the main room. That's when you see it...",
			"A tall, shadowed figure, billowing like smoke, moves slowly toward you from the second meeting room. Before it can react, you take off running, weaving through the store room, then through the kitchen - from which you see the front door burst open, and Steve running out. Pushing through the final sets of doors, you fall to the floor as the doors slam behind you.",
			"You have survived",
		],
		links: [{ buttonText: "New game", goTo: 0 }],
	},
	{
		id: 13,
		text: [
			"Backing slowly away from the light of the fridge, you approach the CCTV screens. Feeling around the edge of the screens, your hand brushes over a button. You press it, and the screens spring to life, showing the all the building's rooms - with the exception of the kitchen.",
			"To your left, there is yet another door. Through its windows, you can see the front entrance.",
		],
		links: [
			{ buttonText: "Check the cameras", goTo: 14 },
			{ buttonText: "Check the front door", goTo: 15 },
		],
	},
	{
		id: 14,
		text: [
			"Reaching back to where you found the CCTV's power button, you press another button, and the video stream begins to rewind. There is nothing to see, until you see yourself, running in from the rain. This isn't helping.",
			"Hitting the power button again, the screens fade to black, the room returns to the dim light of the fridge.",
			"You make your way through the door on the left, back into the main room.",
		],
		links: [{ buttonText: "Continue", goTo: 27 }],
	},
	{
		id: 15,
		text: [
			"Closing the door gently behind you, you edge your way over to the front door. Looking around to make sure you aren't being watched, you give the door a gentle pull. When nothing happens, you pull again, harder this time. Still nothing. Looking around, you see a small green button. The word 'exit' displayed above it.",
			"Taking a deep breath, you press the button. Standing up, you take a step back, and bump into something hard. It is all over before you can even turn around...",
			"Game over",
		],
		links: [{ buttonText: "New game", goTo: 0 }],
	},
	{
		id: 16,
		text: [
			"Pushing the door lightly, you slip into the kitchen, a long room littered with tables and sofas. At the far end of the room is a bathroom, a breakfast bar/kitchen area, and an exit leading around a corner.",
			"Along one side of the room, all of the window blinds are pulled down, making the room nearly pitch black. The only light comes from a small emergency door to your right.",
		],
		links: [
			{ buttonText: "Check the emergency door", goTo: 17 },
			{ buttonText: "Open the blinds", goTo: 19 },
		],
	},
	{
		id: 17,
		text: [
			"You slide over to the door, and take a knee to stay out of sight. Having your back to the long room is unnerving. You press your weight against the door, and starts to move, but does not open.",
			"You take a step back from the door.",
		],
		links: [
			{ buttonText: "Barge the door", goTo: 18 },
			{ buttonText: "Open the blinds", goTo: 19 },
		],
	},
	{
		id: 18,
		text: [
			"You take a deep breath, and launch yourself at the door. It rattles, but does not give. As you step back to take another charge it at, the door to the bathroom rips open. The room darkens. You didn't even see what was coming, until it was too late...",
			"Game over",
		],
		links: [{ buttonText: "New game", goTo: 0 }],
	},
	{
		id: 19,
		text: [
			"Starting with the closest, you begin to pull the cords to slowly open the blinds. Every crank of the cord sets your hair on end. It is too loud. The window behind the blinds are all misted.",
			"After opening the third set of blinds, you find a message on the window.",
			"tHeRe Is No EsCaPe. ThErE iS nO wAy OuT.",
			"Startled, your hand releases the cord, sending the blind slamming back down. Behind you, from the bathroom, you hear something battering against the door. Before it breaks free, you take off running...",
		],
		links: [
			{
				buttonText: "Run toward the exit at the end of the room",
				goTo: 20,
			},
			{ buttonText: "Run back to the main room", goTo: 24 },
		],
	},
	{
		id: 20,
		text: [
			"You take off running toward the end of the room. You can hear it behind you. Tables are ripped up, and thrown across the room. One crashes next to you as your run past the breakfast bar, and around the corner.",
			"You are met with a thin room, filled with cupboards and a dishwasher. Directly ahead, there seems to be some sort of storage space.",
		],
		links: [
			{ buttonText: "Run into storage room", goTo: 21 },
			{ buttonText: "Hide in the cupboard", goTo: 23 },
		],
	},
	{
		id: 21,
		text: [
			"You keep your stride, breathing hard, until you are tripped by a tipped box of tennis balls. Trying your hardest to keep your footing, you crash into a large pile of office supplies.",
			"Rolling over, you see a panel missing in the ceiling through the pile that covers you.",
			"You can feel the entity enter the room. You need to make a decision.",
		],
		links: [
			{ buttonText: "Climb into ceiling", goTo: 22 },
			{ buttonText: "Stay hidden amongst the storage", goTo: 23 },
		],
	},
	{
		id: 22,
		text: [
			"You spring to your feet and clamber up into the ceiling. You can feel it, whatever it may be, breathing down you neck. You manage to slide into the crawl-space, unscathed. Below, you can hear the storage room being ripped apart in frustration.",
			"The entity burst through another door, that led back into the main office. Once you are sure the coast is clear, you dare to move.",
			"Crawling slowly, as to not attract any more attention, you feel the cold air of the outside world. You continue until you see a light. With the last of your effort you push yourself out of the crawl-space, and crash into the bushes.",
			"You have survived",
		],
		links: [{ buttonText: "New game", goTo: 0 }],
	},
	{
		id: 23,
		text: [
			"You hold your breath as the entity slams into the room, also tripping over the tennis balls. It lands no more than a foot away from you.",
			"Standing back up, the entity moves slowly through the room. It turns and sways, heading back the way it came, when it stops...",
			"Your chest burns from holding your breath. You close your eyes and wait. A moment passes before you realise the noise has gone. You open your eyes to an empty room... or so you thought.",
			"With a final gasp, you are pulled from the storage pile you were hiding in, never to be seen again.",
			"Game over",
		],
		links: [{ buttonText: "New game", goTo: 0 }],
	},
	{
		id: 24,
		text: [
			"You turn and run back toward the main office. As you take off, your eyes are drawn to the light of the emergency door. Tables, books, and all other things in the entity's path are hurtled into the air.",
		],
		links: [
			{ buttonText: "Try to break down the emergency door", goTo: 25 },
			{ buttonText: "Run back into the main room", goTo: 26 },
		],
	},
	{
		id: 25,
		text: [
			"You take a deep breath, and with your remaining strength, you launch into the emergency door.",
			"It does not budge.",
			"The world spins as you are thrown back onto the floor. The last thing you see is the entity stood above you...",
			"Game over",
		],
		links: [{ buttonText: "New game", goTo: 0 }],
	},
	{
		id: 26,
		text: [
			"You burst through into the main room. The door slams behind you, as you run to hide beneath an overturned desk.",
			"But nothing comes...",
			"After sometime, you muster up the courage to come out of hiding. The kitchen was no good. That only leaves one option...",
		],
		links: [{ buttonText: "Enter the meeting room", goTo: 4 }],
	},
	{
		id: 27, // BACK TO MAIN ROOM
		text: [
			"You find yourself back in the main office room. You cannot escape the feeling that you are being watched. The openness of this room makes you uneasy. It'd be a good idea to move on from here quickly.",
		],
		links: [{ buttonText: "Go into the kitchen", goTo: 16 }],
	},
];

export default GAME_DATA;
