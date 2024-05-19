import moment from "moment";
import { Group, SimplifiedAccounts, Transaction, User } from "..";

export const ava: User = {
  id: "avaId",
  name: "Ava",
};

export const brandon: User = {
  id: "brandonId",
  name: "Brandon",
};

export const charlotte: User = {
  id: "charlotteId",
  name: "Charlotte",
};

export const dylan: User = {
  id: "dylanId",
  name: "Dylan",
};

export const resortBooking: Transaction = {
  id: "resortBooking-transactionId",
  title: "Resort Booking",
  payee: ava,
  amount: 3296,
  date: moment({ year: 2024, month: 3, day: 1 }),
  splits: [
    {
      id: "resortBooking-splitId1",
      amount: 2123,
      payee: ava,
    },
    {
      id: "resortBooking-splitId2",
      amount: 173,
      payee: brandon,
    },
    {
      id: "resortBooking-splitId3",
      amount: 500,
      payee: charlotte,
    },
    {
      id: "resortBooking-splitId4",
      amount: 500,
      payee: dylan,
    },
  ],
};

export const shuttlecocks: Transaction = {
  id: "shuttlecocks-transactionId",
  title: "Shared Shuttlecocks",
  payee: charlotte,
  amount: 85,
  date: moment({ year: 2024, month: 5, day: 18 }),
  splits: [
    {
      id: "shuttlecocks-splitId1",
      amount: 21.25,
      payee: ava,
    },
    {
      id: "shuttlecocks-splitId2",
      amount: 21.25,
      payee: brandon,
    },
    {
      id: "shuttlecocks-splitId3",
      amount: 21.25,
      payee: charlotte,
    },
    {
      id: "shuttlecocks-splitId4",
      amount: 21.25,
      payee: dylan,
    },
  ],
};

export const ramen: Transaction = {
  id: "ramen-transactionId",
  title: "Menya Shishido",
  payee: charlotte,
  amount: 62.65,
  date: moment({ year: 2024, month: 5, day: 16 }),
  splits: [
    {
      id: "ramen-splitId1",
      amount: 31.32,
      payee: charlotte,
    },
    {
      id: "ramen-splitId2",
      amount: 31.33,
      payee: ava,
    },
  ],
};

export const salad: Transaction = {
  id: "salad-transactionId",
  title: "Salad Boi",
  payee: charlotte,
  amount: 62.65,
  date: moment({ year: 2024, month: 5, day: 16 }),
  splits: [
    {
      id: "ramen-splitId1",
      amount: 31.32,
      payee: charlotte,
    },
    {
      id: "ramen-splitId2",
      amount: 31.33,
      payee: ava,
    },
  ],
};

export const group: Group = {
  id: "groupId",
  title: "Redang,\nMalaysia",
  date: moment({ year: 2024, month: 3, day: 10 }),
  users: [ava, brandon, charlotte, dylan],
  transactions: [resortBooking, shuttlecocks, ramen, salad],
  passcode: "1234",
};

export const mockAccounts: SimplifiedAccounts = {
  receivables: [
    {
      to: ava,
      from: charlotte,
      amount: 10,
    },
    {
      to: ava,
      from: brandon,
      amount: 10,
    },
  ],
  payables: [
    {
      to: dylan,
      from: ava,
      amount: 5,
    },
  ],
};
