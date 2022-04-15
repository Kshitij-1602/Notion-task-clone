import { v4 as uuidv4 } from "uuid";

export const initialData = [
  {
    groupId: 1,
    groupTitle: "Doing",
    groupCards: [
      {
        cardId: 1,
        cardTitle: "card1",
        cardDescription: "card description",
      },
      {
        cardId: 2,
        cardTitle: "card2",
        cardDescription: "card description",
      },
    ],
  },
  {
    groupId: 2,
    groupTitle: "To Do",
    groupCards: [
      {
        cardId: 3,
        cardTitle: "card3",
        cardDescription: "card description",
      },
    ],
  },
  {
    groupId: 3,
    groupTitle: "Done",
    groupCards: [],
  },
];
