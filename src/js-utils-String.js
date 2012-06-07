/*
 ===============================
  STRING METHODS - M - JS-UTILS
 ===============================
 @Author - Mathieu Jouhet
 @Rev - 0 (20120522)
 Public domain
*/



/*
 String.splitLetters 
 -------------------
 @Desc - Splits letters of a given String 
 @Returns - an object containing three array properties:
 			* letters: contains only unique letters ( " Baba  ".splitLetters().letters == ["B","A"] )
			* raw: raw characters splitted into array ( " Baba  ".splitLetters().raw == [" ", "B", "a", "b", "a", " ", " "] )
			* trimmed: raw characters excluding spaces ( " Baba  ".splitLetters().raw == ["B", "a", "b", "a"] )
*/

if(typeof(String.prototype.splitLetters) === 'undefined' {
	String.prototype.splitLetters = function () {
	  var str = this, letters = [], trimmed = [], raw = [], index = 0, l, rl, u = "";

	  do {
		rl = str.slice(index, index+1);
		l = rl.toUpperCase();

    
		if(l!== " " && u.indexOf(l) < 0) { letters.push(l); }
		if (l!== " ") { trimmed.push(rl) };	
		raw.push(rl);
	
		u += l;
	    index += 1;  
	  }
	  while (index < str.length)

	  return  {"letters": letters, "raw": raw, "trimmed": trimmed};
	}
}

/*
 String.slugify 
 -------------------
 @Desc - Prepares a string to be more url friendly 
 @Returns - a string containing only lowercase, dash separated words

 @Depends - uses String.transliterate
*/

if(typeof(String.prototype.slugify) === 'undefined') {
	String.prototype.slugify = function(){
		var str = this;  
		str = str.transliterate();
		str = str.replace( /^(\s+)/g, '').replace( /(\s+)$/g, '').replace( /[\ ’&.]/g, '-' );
		str = str.replace( /[:,\'()%$#\?\/]/g, '' ).replace( /(--+)/g, '-').replace( /^(-+)/g, '')
		str = str.replace( /(-+)$/g, '');
		str = str.toLowerCase();
		return str;
	}
}

/*
 String.transliterate 
 --------------------
 @Desc - Replace any known special character with it's ASCII equivalent 
 @Returns - a string
*/

if(typeof(String.prototype.transliterate) === 'undefined') {
	String.prototype.transliterate = function() {
		var from = "ÂâÀàÂâÄäÉéÈèÊêËëÏïÎîÙÛûùÖöÔôŸÿ",  
			to   = "AaAaAaAaEeEeEeEeIiIiUuUuOoOoYy",
			fromChars = from.split(""),  
	    	toChars = to.split(""),
			mapTable = {},
			i, str, re;  

	    for(i = 0; i < fromChars.length; i++) {  
	        var c = i < toChars.length ? toChars[i] : "";  
	        mapTable[fromChars[i]] = c;  
	    }  

	    str = this;  

	    re = new RegExp(fromChars.join("|"), "g");  
	    str = str.replace(re, function(c) { 
	        return mapTable[c]; 
	    });  

	    return str;  
	}
}

/*
 String.trim
 -----------
 @Desc - trim any leading and trailing whitespaces 
 @Returns - a string
*/

if (typeof(String.prototype.trim) === 'undefined') {
  String.prototype.trim = function() {
    return String(this).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }
}
