import { User } from "@/models";
import { create } from "zustand";

type UserSessionProps = {
  currentUser: User;
  setCurrentUser: (user: User) => void;
};

const guestUser: User = {
  id: "guest",
  name: "Guest",
};

export const useUserSession = create<UserSessionProps>((set) => ({
  currentUser: guestUser,
  setCurrentUser: (user: User) => set({ currentUser: user }),
}));
