import { Moment } from "moment";

export type User = {
  id: string;
  name: string;
};

export type Split = {
  id: string;
  payee: User;
  amount: number;
};

export type Transaction = {
  id: string;
  title: string;
  payee: User;
  amount: number;
  date: Moment;
  splits: Split[];
};

export type Group = {
  id: string;
  title: string;
  date: Moment;
  users: User[];
  transactions: Transaction[];
  passcode: string;
};
