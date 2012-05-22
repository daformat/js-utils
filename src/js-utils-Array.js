/*
 ==============================
  ARRAY METHODS - M - JS-UTILS
 ==============================
 @Author - Mathieu Jouhet
 @Rev - 0 (20120522)
 Public domain
*/


/*
 Array.shuffle
 -------------
 @Desc - randomizes an array
 @Returns - randomized array
*/

if(typeof(Array.prototype.shuffle) !== 'function') {
	Array.prototype.shuffle = function() {
		var s = [], t = this;
		while (t.length) s.push(t.splice(Math.random() * t.length, 1)[0]);
		while (s.length) t.push(s.pop());

		return t;
	}
}
/*
 Array.contains
 --------------
 @Desc - check if given value is in an array
 @Returns - boolean
*/

if(typeof(Array.prototype.contains) !== 'function') {
	Array.prototype.contains = function(w) {
		for(i in this) {		
			if(this.hasOwnProperty( i ) && typeof( this[i] ) !== 'function') {
				if( this[i] == w) { 
					return true; 
				}
			}
		}
		return false;
	}
}