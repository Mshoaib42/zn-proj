import Cookies from "js-cookie";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserProfile {
  id: string;
  email: string;
  name: string;
}

interface UserState {
  user: UserProfile | null;
  setUser: (user: UserProfile) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,

      setUser: (user: UserProfile) => {
        set(() => ({ user }));
      },
      clearUser: () => {
        set(() => ({ user: null }));
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => ({
        getItem: (name) => {
          const localStorageValue = localStorage.getItem(name);
          const cookieValue = Cookies.get(name);
          return localStorageValue || cookieValue || null;
        },

        setItem: (name, value) => {
          const serializedValue =
            typeof value === "string" ? value : JSON.stringify(value);
          localStorage.setItem(name, serializedValue);
          Cookies.set(name, serializedValue, {
            secure: true,
            sameSite: "Strict",
          });
        },

        removeItem: (name) => {
          localStorage.removeItem(name);
          Cookies.remove(name);
        },
      })),
    }
  )
);

export default useUserStore;
