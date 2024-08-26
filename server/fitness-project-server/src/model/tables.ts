import { TablesType } from "../types/dbTypes";
import { user } from "./models/user";
import { personalProgressInfo } from "./models/personalProgressInfo";
import { weightProgress } from "./models/weightProgress";
import { stepsProgress } from "./models/stepsProgress";
import { goalInfo } from "./models/goalInfo";
import { workoutPlan } from "./models/workoutPlan";
import { exercise } from "./models/exercise";
import { workoutExercise } from "./models/workoutExercise";

export const tables: TablesType = {
    user,
    personalProgressInfo,
    weightProgress,
    stepsProgress,
    workoutPlan,
    goalInfo,
    exercise,
    workoutExercise
};