import moment from "moment";
import { Group, Transaction, User } from ".";

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
  id: "resortBookingTransactionId",
  title: "Resort Booking",
  payee: ava,
  amount: 3296,
  date: moment({ year: 2024, month: 3, day: 1 }),
  splits: [
    {
      id: "splitId1",
      amount: 2123,
      payee: ava,
    },
    {
      id: "splitId2",
      amount: 173,
      payee: brandon,
    },
    {
      id: "splitId3",
      amount: 500,
      payee: charlotte,
    },
    {
      id: "splitId4",
      amount: 500,
      payee: dylan,
    },
  ],
};

export const group: Group = {
  id: "groupId",
  title: "Redang, Malaysia",
  date: moment({ year: 2024, month: 3, day: 10 }),
  users: [ava, brandon, charlotte, dylan],
  transactions: [resortBooking],
  passcode: "1234",
};
