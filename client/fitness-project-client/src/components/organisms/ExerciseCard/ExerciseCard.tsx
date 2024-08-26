import { colors } from '../../../colors';
import Icon from '../../atoms/Icon/Icon';
import {
  ExerciseItem,
  ExerciseImage,
  ExerciseInfo,
  ExerciseName,
  ExerciseDescription,
  FavoriteIcon,
} from './ExerciseCard.styles';

interface ExerciseCardProps {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  id,
  name,
  imageUrl,
  description,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <ExerciseItem>
      <ExerciseImage src={imageUrl} alt={name} />
      <ExerciseInfo>
        <ExerciseName>{name}</ExerciseName>
        <ExerciseDescription>{description}</ExerciseDescription>
      </ExerciseInfo>
      <FavoriteIcon onClick={() => onToggleFavorite(id)}>
        <Icon iconName="heart" color={isFavorite ? colors.red : colors.grey} size={24} />
      </FavoriteIcon>
    </ExerciseItem>
  );
};

export default ExerciseCard;
