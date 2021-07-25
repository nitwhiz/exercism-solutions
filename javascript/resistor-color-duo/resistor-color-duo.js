import { colorCode } from './resistor-color';

export const value = colors => {
	return parseInt(colors.map(c => colorCode(c)).join(''), 10);
};
