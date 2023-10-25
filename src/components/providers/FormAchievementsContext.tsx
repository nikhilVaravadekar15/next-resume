import { createContext } from "react";
import { achievement } from "@/data";
import { TFormAchievementsContext } from "@/types"

export const FormAchievementsContext = createContext<TFormAchievementsContext>({
    achievement: [achievement],
    setAchievements: () => { },
});
