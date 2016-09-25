<script>
const space  = function (a) {
             if (a === 0) {
             	return "";
             }            
       return " " + space(a-1);
            
    };
    const stars = function (i) {
    	if (i === 1) {
    		 return "*";
    	}
   return stars(i-1) + "*";
    };

    	const run = function (k,starcount,spacecount) {
    		if (k === 0) {
    			return;
    	}   	
    				console.log(space(spacecount)+stars(starcount));
    				run((k-1),(starcount+2),(spacecount-1));
};
		const triangleStars = function(n) {
    		run(n,1,n-1);
    	};
	triangleStars(5);
</script>
