<?php
function clearEmptyMembership(){
		$userMemQuery = makeSQLQuery("SELECT user, membership FROM security_user_membership");
		while ($row = $userMemQuery ->fetch(PDO::FETCH_BOTH)) {

			//record correct user membership status, counts multiple
			if($membership[$row["user"]]==""){
				$membership[$row["user"]]=$row["membership"];
			}else{
				$membership[$row["user"]].=",".$row["membership"];
			}
		}

		$secUserMemQuery = makeSQLQuery("SELECT ID, Memberships FROM security_users");
		while ($row = $secUserMemQuery ->fetch(PDO::FETCH_BOTH)) {
			$currentUserStatus[$row["ID"]]=$row["Memberships"];
		}

		foreach ($membership as $key => $value) {
			if(!array_key_exists($key, $currentUserStatus)){
				makeSQLQuery("DELETE FROM security_user_membership WHERE user='$key'");
			}
		}
	}
?>
