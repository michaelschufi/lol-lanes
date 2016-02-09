var lanes = [ "0", "1", "2", "3", "4" ]

$( "button" ).click( function( event ) {
	event.preventDefault()
	var test = $.get( "https://www.random.org/sequences/?min=0&max=4&col=1&format=plain&rnd=new", function( data ) {
		var regMatch = data.match( /./g )
		var laneSequence = regMatch.filter( function( laneId ) {
			return lanes.indexOf( laneId ) != -1
		} )
		
		$( "#primary" ).attr( "src", "assets/" + laneSequence[0] + ".png");
		$( "#secondary" ).attr( "src", "assets/" + laneSequence[1] + ".png");
		$( ".result" ).removeClass( "hidden" )
	} )
} )

$( ".lanes" ).click( function( event ) {
	var laneId = event.target.getAttribute( "laneId" )
	
	if ( laneId != null ) {
		if ( lanes.indexOf( laneId ) === -1 ) {
			lanes.push( laneId )
			$( event.target ).removeClass( "inactive" )
		} else {
			lanes = lanes.filter( function( id ) { 
				return laneId != id
			} )
			$( event.target).addClass( "inactive" )
		}
	}
} )