import moment from "moment";
import { Group, Transaction, User } from "..";

const users: Record<string, User> = {
  vinAnn: { id: "1", name: "Vin Ann" },
  megan: { id: "2", name: "Megan" },
  jane: { id: "3", name: "Jane" },
  hosea: { id: "4", name: "Hosea" },
  alan: { id: "5", name: "Alan" },
  sia: { id: "6", name: "Sia" },
  ian: { id: "7", name: "Ian" },
  meiJun: { id: "8", name: "Mei Jun" },
};

const transactions: Transaction[] = [
  {
    id: "1",
    title: "Flight Tickets",
    payee: users.jane,
    amount: 2896.0,
    date: moment({ year: 2024, month: 2, day: 20 }), // 3 days apart, last one today
    splits: [
      { id: "1", payee: users.vinAnn, amount: 362.0 },
      { id: "2", payee: users.megan, amount: 362.0 },
      { id: "3", payee: users.jane, amount: 362.0 },
      { id: "4", payee: users.hosea, amount: 362.0 },
      { id: "5", payee: users.alan, amount: 362.0 },
      { id: "6", payee: users.sia, amount: 362.0 },
      { id: "7", payee: users.ian, amount: 362.0 },
      { id: "8", payee: users.meiJun, amount: 362.0 },
    ],
  },
  {
    id: "2",
    title: "Sutera Lodge Manukan",
    payee: users.ian,
    amount: 3470.08,
    date: moment({ year: 2024, month: 3, day: 20 }), // 3 days apart from previous
    splits: [
      { id: "9", payee: users.vinAnn, amount: 433.76 },
      { id: "10", payee: users.megan, amount: 433.76 },
      { id: "11", payee: users.jane, amount: 433.76 },
      { id: "12", payee: users.hosea, amount: 433.76 },
      { id: "13", payee: users.alan, amount: 433.76 },
      { id: "14", payee: users.sia, amount: 433.76 },
      { id: "15", payee: users.ian, amount: 433.76 },
      { id: "16", payee: users.meiJun, amount: 433.76 },
    ],
  },
  {
    id: "3",
    title: "Kundasang Airbnb",
    payee: users.megan,
    amount: 709.52,
    date: moment({ year: 2024, month: 3, day: 20 }), // 3 days apart from previous
    splits: [
      { id: "17", payee: users.vinAnn, amount: 88.69 },
      { id: "18", payee: users.megan, amount: 88.69 },
      { id: "19", payee: users.jane, amount: 88.69 },
      { id: "20", payee: users.hosea, amount: 88.69 },
      { id: "21", payee: users.alan, amount: 88.69 },
      { id: "22", payee: users.sia, amount: 88.69 },
      { id: "23", payee: users.ian, amount: 88.69 },
      { id: "24", payee: users.meiJun, amount: 88.69 },
    ],
  },
  {
    id: "4",
    title: "KK Airbnb",
    payee: users.jane,
    amount: 456.0,
    date: moment({ year: 2024, month: 3, day: 20 }), // 3 days apart from previous
    splits: [
      { id: "25", payee: users.vinAnn, amount: 57.0 },
      { id: "26", payee: users.megan, amount: 57.0 },
      { id: "27", payee: users.jane, amount: 57.0 },
      { id: "28", payee: users.hosea, amount: 57.0 },
      { id: "29", payee: users.alan, amount: 57.0 },
      { id: "30", payee: users.sia, amount: 57.0 },
      { id: "31", payee: users.ian, amount: 57.0 },
      { id: "32", payee: users.meiJun, amount: 57.0 },
    ],
  },
];

const flightTicketReimbursements = [
  {
    id: "5",
    title: "Flight Ticket Reimbursement",
    payee: users.vinAnn,
    amount: 362.0,
    date: moment({ year: 2024, month: 4, day: 20 }),
    splits: [{ id: "1", payee: users.jane, amount: 362.0 }],
  },
  {
    id: "6",
    title: "Flight Ticket Reimbursement",
    payee: users.megan,
    amount: 362.0,
    date: moment({ year: 2024, month: 4, day: 20 }),
    splits: [{ id: "2", payee: users.jane, amount: 362.0 }],
  },
  {
    id: "7",
    title: "Flight Ticket Reimbursement",
    payee: users.hosea,
    amount: 362.0,
    date: moment({ year: 2024, month: 4, day: 20 }),
    splits: [{ id: "3", payee: users.jane, amount: 362.0 }],
  },
  {
    id: "8",
    title: "Flight Ticket Reimbursement",
    payee: users.alan,
    amount: 362.0,
    date: moment({ year: 2024, month: 4, day: 20 }),
    splits: [{ id: "4", payee: users.jane, amount: 362.0 }],
  },
  {
    id: "9",
    title: "Flight Ticket Reimbursement",
    payee: users.sia,
    amount: 362.0,
    date: moment({ year: 2024, month: 4, day: 20 }),
    splits: [{ id: "5", payee: users.jane, amount: 362.0 }],
  },
  {
    id: "10",
    title: "Flight Ticket Reimbursement",
    payee: users.ian,
    amount: 362.0,
    date: moment({ year: 2024, month: 4, day: 20 }),
    splits: [{ id: "6", payee: users.jane, amount: 362.0 }],
  },
  {
    id: "11",
    title: "Flight Ticket Reimbursement",
    payee: users.meiJun,
    amount: 362.0,
    date: moment({ year: 2024, month: 4, day: 20 }),
    splits: [{ id: "7", payee: users.jane, amount: 362.0 }],
  },
];

export const sabahMocks: {
  group: Group;
  users: Record<string, User>;
} = {
  group: {
    date: moment({ year: 2024, month: 7, day: 17 }),
    id: "sabahGroupId",
    passcode: "1234",
    title: "Sabah,\nMalaysia",
    transactions: [...transactions, ...flightTicketReimbursements],
    users: Object.values(users),
  },
  users: users,
};
