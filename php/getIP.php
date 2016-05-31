function getIP() {
	// Initialize IP list array
	$list = array();
	// If server proxy header is set with a list of addresses
	if  (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && strpos($_SERVER['HTTP_X_FORWARDED_FOR'],',')) {
		// Populate IP list with forwarded addresses
		$list = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
	}
	// Otherwise proxy header is set with one address
	elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
		$list[] = $_SERVER['HTTP_X_FORWARDED_FOR'];
	}
	// Add remote connection to list 
	$list[] = $_SERVER['REMOTE_ADDR'];
	// Return first address in list
	return $list[0];
}
