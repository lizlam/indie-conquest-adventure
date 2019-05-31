const StoryTree = [
  {
    title: "And the story begins...",
    text:
      "It's been a long day and you've been walking for hours without rest. \
      The scorching sun begins to lay its head to rest as the twilight of nightfall enters.",
    image:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/uMfn-Wanderer.png",
    music:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/3aE0-dredile__ambience-autumn-solitude-a-cutflower-sound.mp3",
    choice1: "Rest for a while",
    choice2: "Keep walking"
  },
  {
    title: "There is no rest without consequence...",
    text:
      "There is a heaviness in your eyelids that beg for sleep.  As nightfall enters you decide \
       to set up camp and fall into unconciousness.  Rest comes at a cost.  You wake in the morning \
       only to find some of your things missing.",
    image:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/jKq7-Slumber.png",
    music: "",
    choice1: "Pack up what you have and keep moving",
    minus: "rook"
  },
  {
    title: "The Creek",
    text: "You arrive at a creek.",
    image:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/ReWs-Creek.png",
    music: "",
    choice1: "Wash up in the water",
    choice2: "Cross the creek"
  },
  {
    title: "The end of the journey...",
    text:
      "It has been ages since you've had a bath.  The water feels crisp and clean as your splash your face. \
       You hear a rustling behind the trees and sense that danger is about to appear. \
       You quickly grab your sword but you are no match for the beast that overshadows you. \
       The journey is over.",
    image:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/Uj9t-Outmatched.png",
    music: ""
  },
  {
    title: "A whale in the creek.",
    text:
      "You began to cross the creek that was surprisingly deeper than expected.  Halfway across you encounter a whale.",
    image:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/mLpz-Whale.png",
    music:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/b-wS-dredile__atmosphere-dark-large-echo.ogg",
    choice1: "Talk to the whale",
    choice2: "Swim away as fast as you can"
  },
  {
    title: "Down the depths of the creek.",
    text:
      "The whale motions for you to follow it down into the depths of the creek where it leads you to a long forgotten dungeon.",
    image:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/jaQL-Deep%20Sleep.png",
    music:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/b-wS-dredile__atmosphere-dark-large-echo.ogg",
    choice1: "Take some treasure and swim back up",
    add: "treasure"
  },
  {
    title: "To the city beyond",
    text:
      "As you make your way across the creek, you are delighted to see a city beyond the path.",
    image:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/iE-S-Night%20City.png",
    music: "",
    choice1: "Leave the path and continue another direction",
    choice2: "Walk the path to the city"
  },
  {
    title: "A road less traveled",
    text: "After a few miles you come across a mushroom.",
    image:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/pAyr-Morel.png",
    music: "",
    choice1: "Take the mushroom and go back towards the city",
    add: "mushroom"
  },
  {
    title: "Almost there",
    text:
      "You are about to enter the gates of a city where a creature sits and blocks your way.",
    image:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/mFRo-Thundaar.png",
    music: "",
    choice1: "Attack the creature",
    choice2: "Talk to the creature"
  },
  {
    title: "Punishment",
    text:
      "The creature was Thundar, the city's mascot.  You have been sentenced to death for kicking him.",
    image:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/TM5t-Death.png",
    music:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/uZL2-dredile__orchestral-hit-the-villain-appears.mp3"
  },
  {
    title: "Drink",
    text: "Thundar says all who enter the city must drink the potion.",
    image:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/gmya-Potion.png",
    music: "",
    choice1: "Drink potion",
    choice2: "Consider your options"
  },
  {
    title: "Punishment",
    text:
      "Thundar that trickster!.  You have been sentenced to death for drinking the king's most prized potion.",
    image:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/TM5t-Death.png",
    music:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/uZL2-dredile__orchestral-hit-the-villain-appears.mp3"
  },
  {
    title: "And the story begins again...",
    text:
      "As you consider what to do, a flash of light blinds you. You rub your eyes and blink hard, realizing the impossible.  You are back where you began.",
    image:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/uMfn-Wanderer.png",
    music:
      "https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/3aE0-dredile__ambience-autumn-solitude-a-cutflower-sound.mp3"
  }
];

export default StoryTree;
