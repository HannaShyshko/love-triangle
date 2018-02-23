/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let pref = preferences;
	let triangle = 0;

	for (let i=0; i<pref.length; i++) {
		let k = pref[i] -1;
		let n = pref[k] -1;
		if (pref[n] -1 == i) {
			triangle++;
			
		}

	}
	let result = Math.floor(triangle / 3);
	return result;
};
