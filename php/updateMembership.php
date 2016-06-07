<?php
	//Author: Xiao He

	//////////////////////////////////////////////////////
	//   Update Current User's Membership from mapping  //
	//////////////////////////////////////////////////////
	include("../include.php");
	include("template.php");
	$userMemQuery = makeSQLQuery("SELECT user, membership FROM security_user_membership");
	while ($row = $userMemQuery ->fetch(PDO::FETCH_BOTH)) {

		//record correct user membership status, counts multiple
		if($membership[$row["user"]]==""){
			$membership[$row["user"]]=$row["membership"];
		}else{
			$membership[$row["user"]].=",".$row["membership"];
		}
	}

	//get current user status
	$secUserMemQuery = makeSQLQuery("SELECT ID, Memberships FROM security_users");
	while ($row = $secUserMemQuery ->fetch(PDO::FETCH_BOTH)) {
		$currentUserStatus[$row["ID"]]=$row["Memberships"];
	}

	//update each user's status if account still exists
	foreach ($membership as $key => $value) {
		if($currentUserStatus[$key]!=$value && array_key_exists($key, $currentUserStatus)){
			print "Updating...<br>";
			$statusToGo = $membership["$key"];
			makeSQLQuery("UPDATE security_users SET Memberships='$statusToGo' WHERE ID='$key'");
		}
	}

	//////////////////////////////////////////////////////
	//   Clean security_user_membership table           //
	//////////////////////////////////////////////////////\
	foreach ($membership as $key => $value) {
		if(!array_key_exists($key, $currentUserStatus)){
			makeSQLQuery("DELETE FROM security_user_membership WHERE user='$key'");
		}
	}

?>
