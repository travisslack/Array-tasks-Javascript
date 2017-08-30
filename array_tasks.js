var arrayTasks = {

	concat: function (arr1, arr2) {
		return array = arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(number) {
			return number ** 2;
		})
	},

	sum: function (arr) {
		return arr.reduce( function( sum, number ){
		  return sum + number;
		}, 0)
		return total
	},

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
	// 	arr = []
	// 	var removed = arr.splice(arr - valueToRemove);
	// 	return arr;
	// },


	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
