import { useEffect, useState } from 'react';
import { StyledIcon } from './Icon.styles';

type IconNames =
	'arrowBigger'
	| 'bell'
	| 'calendar'
	| 'chart'
	| 'clock'
	| 'crown'
	| 'dumbBell'
	| 'edit'
	| 'flame'
	| 'globe'
	| 'heart'
	| 'help'
	| 'hollowFlame'
	| 'home'
	| 'magnifyingGlass'
	| 'minus'
	| 'moon'
	| 'plus'
	| 'runner'
	| 'runShoe'
	| 'settings'
	| 'waterCup';

type IconProps = {
	iconName: IconNames;
	color?: string;
	size?: number;
}

const Icon: React.FC<IconProps> = ({ iconName, size = 20, color = 'black' }) => {
	const [SVGComponent, setSVGComponent] = useState<React.ComponentType | null>(null);

	useEffect(() => {
		const importSVGComponent = async () => {
			try {
				const { default: svg } = await import(`./assets/${iconName}.svg?react`);
				setSVGComponent(() => svg);
			} catch (error) {
				console.error(`Failed to load SVG component ${iconName}:`, error);
			}
		};

		importSVGComponent();
	}, [iconName]);

	if (!SVGComponent) return null;

	return <StyledIcon as={SVGComponent} width={size} height={size} color={color} />
};

export default Icon;