export const EARTH_YEAR = 31557800;

export const PLANET_YEAR = {
	earth: 1,
	mercury: 0.2408467,
	venus: 0.61519726,
	mars: 1.8808158,
	jupiter: 11.862615,
	saturn: 29.447498,
	uranus: 84.016846,
	neptune: 164.79132
};

export const age = (planet, ageSeconds) => {
	return (
		Math.round((ageSeconds / (PLANET_YEAR[planet] * EARTH_YEAR)) * 100) / 100
	);
};
