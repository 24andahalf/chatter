$(window).on("load", function() {
	var objectNames = Object.keys(friends);
	var size = objectNames.length;

	// build Main buttons
	
	// have buttons add in data that is its key so we can easily call that later down the code. Yay smart Bill!
	for (var i = 0; i < size; i++) { 
        $('.selectors').append('<div class="selector" id="'+i+'"><img src="'+friends[objectNames[i]].image+'" class="selfie"><div class="status">'+friends[objectNames[i]].name+'</div></div>');
        
    }

	var currFriend;
	var currFriendID;
	var currFriendProps;
	
	var allFriends =Object.keys(friends); 
	
	$(document).on('click', '.selector', function() {
		
		currFriendID = $(this).attr('id');
		currFriend = allFriends[currFriendID];
		currFriendProps = Object.keys(friends[currFriend]);
		console.log( friends[currFriend].name );

		$('.left').hide();
		$('.middle').hide();
		$('.right').hide();
		$('.chatterHeader').show();
		$('.chatterBody').empty().show();
		$('.chatterInteract').show();
		$('.chatterPic').attr("src",friends[objectNames[currFriendID]].image);
		friends[objectNames[currFriendID]].chatProg = 0;
		$('.interactButton').removeClass('disabled');
	});

	$(document).on('click', '.love', function() {
		//console.log(currFriend);
		friends[currFriend].chatOption1();
	});
	$(document).on('click', '.convo', function() {
		friends[currFriend].chatOption2();
	});
	$(document).on('click', '.food', function() {
		friends[currFriend].chatOption3();
	});
	$(document).on('click', '.bye', function() {
		friends[currFriend].convoBye();
		setTimeout(endChat, 1500)
		
	});

} );

function endChat(){
	$('.chatterHeader').hide();
	$('.chatterBody').hide();
	$('.chatterInteract').hide();
	$('.left').show();
	$('.middle').show();
	$('.right').show();
}

function scrollUpdate(){
	var realHeight = 0;
	console.log($('.chatterBody').height()+" "+$('.chatterBody').scrollTop());
	$(".chatterBody").children().each(function(){
		realHeight = realHeight + $(this).outerHeight(true);
	});
	realHeight -= $('.chatterBody').height()
	if( realHeight < 0 ){
		realHeight = 0
	} 
	$('.chatterBody').animate({ scrollTop: realHeight }, "slow");
}

function sendChat(text){
	console.log(text);
	$('.chatterBody').append("<div class='friendText'>"+text+"</div>");
}

function endCheck(current, max){
	if (current === max){
		return true;
	} else {
		return false;
	}
}