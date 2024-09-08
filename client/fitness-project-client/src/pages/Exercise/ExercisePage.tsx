import { useState, useMemo } from "react";
import { colors } from "../../colors";
import Icon from "../../components/atoms/Icon/Icon";
import mockData from "../../../mockdata.json";
import ExerciseCard from "../../components/organisms/ExerciseCard/ExerciseCard";
import SortBar from "../../components/organisms/SortBar/SortBar";
import NavBar from "../../components/organisms/NavBar/NavBar";
import {
  PageContainer,
  Title,
  ExerciseList,
  BackgroundImage,
} from "./ExercisePage.styles";
import BG from "../../assets/fitness.png";
type Exercise = {
  id: number;
  name: string;
  image_url: string;
  equipment: string;
  muscle_families: string[];
  description: string;
};

type MockData = {
  exercises: Exercise[];
  muscleGroups: string[];
};

type ButtonConfig = {
  category: string;
  label: string | React.ReactNode;
  icon?: string;
};

const ExercisePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const buttonConfigs: ButtonConfig[] = [
    {
      category: "favorites",
      label: (
        <Icon
          iconName="heart"
          color={activeCategory === "favorites" ? colors.red : colors.black}
          size={20}
        />
      ),
      icon: "heart",
    },
    { category: "all", label: "All" },
    { category: "chest", label: "Chest" },
    { category: "back", label: "Back" },
    { category: "legs", label: "Legs" },
    { category: "glutes", label: "Glutes" },
    { category: "core", label: "Core" },
    { category: "full body", label: "Full Body" },
    { category: "arms", label: "Arms" },
  ];

  const exercises = (mockData as MockData).exercises;

  const filteredExercises = useMemo(() => {
    return exercises.filter(({ id, muscle_families }) => {
      if (activeCategory === "all") return true;
      if (activeCategory === "favorites") return favorites.includes(id);
      const familiesArray = Array.isArray(muscle_families)
        ? muscle_families
        : [muscle_families];
      return familiesArray.some(
        (mf: string) => mf.toLowerCase() === activeCategory.toLowerCase()
      );
    });
  }, [exercises, activeCategory, favorites]);
  return (
    <>
      <NavBar />
      <PageContainer>
        <BackgroundImage imageUrl={BG} />
        <Title>Exercises</Title>
        <SortBar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          buttonConfigs={buttonConfigs}
        />
        <ExerciseList>
          {filteredExercises.map(({ id, name, image_url, description }) => (
            <ExerciseCard
              key={id}
              id={id}
              name={name}
              imageUrl={image_url}
              description={description}
              isFavorite={favorites.includes(id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </ExerciseList>
      </PageContainer>
    </>
  );
};

export default ExercisePage;
