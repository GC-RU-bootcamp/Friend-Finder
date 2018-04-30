"use strict;";

var uuid = require("uuid/v4");

var friends = [
  {
    name: "Ahmed",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"],
    id: uuid()
  },
  {
    name: "Jacob Deming",
    photo:
      "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"],
    id: uuid()
  },
  {
    name: "Jeremiah Scanlon",
    photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"],
    id: uuid()
  },
  {
    name: "Louis T. Delia",
    photo:
      "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"],
    id: uuid()
  },
  {
    name: "Lou Ritter",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
    scores: ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"],
    id: uuid()
  },
  {
    name: "Jordan Biason",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    scores: ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"],
    id: uuid()
  },
  {
    name: "ttt",
    photo: "sdksajskdf",
    scores: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    id: uuid()
  }
];


//friends.prototype.compare = function(list1, list2) {
friends.compare = function(list1, list2) {
  let retval = 0;
  for (let i = 0; i < list1.length && i < list2.length; i++) {
    let v1 = parseInt(list1[i]);
    let v2 = parseInt(list2[i]);
    let res = Math.abs(v1 - v2);
    retval += res;
  }
  return retval;
}; // compare

friends.body2Friend = function(reqbody) {
  let newFriend = reqbody;
  if (typeof reqbody.scores === "string")
     newFriend.scores = reqbody.scores.split(",");
  newFriend.id = uuid();
  return newFriend;
};

friends.bestMatch = function(person) {
  let best = 5 * 10 + 1;
  let compareVal = 0;
  let simularPerson = false;

  for (let i = 0; i < friends.length; i++) {
    const f = friends[i];
    compareVal = friends.compare(f.scores, person.scores);
    if (compareVal < best) {
      best = compareVal;
      simularPerson = f;
    }
  }
  return simularPerson;
};

friends.matchAndAdd = function(reqbody) {

  var person = friends.body2Friend(reqbody);
  var simularPerson = friends.bestMatch(person);
  //add to list after match search as to not cmpare to self
  friends.push(person);
 
  return simularPerson;
};

// friends.prototype.mbti = function(list)
friends.mbti = function(list) {
  let retval = "";
  let IN = 0,
    SN = 0,
    TF = 0,
    JP = 0;
  let INc = 0,
    SNc = 0,
    TFc = 0,
    JPc = 0;

  for (let i = 0; i < list.length; i++) {
    switch (i) {
      //       Question 1  SN n=5 TF T=5
      // Your mind is always buzzing with unexplored ideas and plans.
      case 1:
        SN += list[i];
        SNc++;
        TF += 6 - list[i];
        TFc++;
        break;
      // Question 2   SN  n=5
      // Generally speaking, you rely more on your experience than your imagination.
      case 2:
        SN += list[i];
        SNc++;
        break;
      // Question 3    JP j=5  TF T=5
      // You find it easy to stay relaxed and focused even when there is some pressure.
      case 3:
        JP += list[i];
        JPc++;
        TF += 6 - list[i];
        TFc++;
        break;
      // Question 4  SN  s=5  TF T=5
      // You rarely do something just out of sheer curiosity.
      case 4:
        SN += list[i];
        SNc++;
        TF += 6 - list[i];
        TFc++;
        break;
      // Question 5 SN  s=5  TF T=5  IE e=5
      // People can rarely upset you.
      case 5:
        SN += list[i];
        SNc++;
        TF += 6 - list[i];
        TFc++;
        IE += 6 - list[i];
        IEc++;
        break;
      // Question 6  JP P=5  TF t=5
      // It is often difficult for you to relate to other people’s feelings.
      case 6:
        JP += list[i];
        JPc++;
        TF += 6 - list[i];
        TFc++;
        break;
      // Question 7  TF t=5 JP j=5
      // In a discussion, truth should be more important than people’s sensitivities.
      case 7:
        JP += 6 - list[i];
        JPc++;
        TF += 6 - list[i];
        TFc++;
        break;
      // Question 8  SN s=5  TF t=5
      // You rarely get carried away by fantasies and ideas.
      case 8:
        SN += list[i];
        SNc++;
        TF += 6 - list[i];
        TFc++;
        break;
      // Question 9  JP p=5  TF f=5
      // You think that everyone’s views should be respected regardless of whether they are supported by facts or not.
      case 8:
        JP += list[i];
        JPc++;
        TF += 6 - list[i];
        TFc++;
        break;
      // Question 10  IE E=5
      // You feel more energetic after spending time with a group of people.
      case 10:
        IE += list[i];
        IEc++;
        break;
      default:
        break;
    } // switch
  } // for
}; // mtbi

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
