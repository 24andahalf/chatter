$(window).on("load", function() {
	var objectNames = Object.keys(friends);
	var size = objectNames.length;

	// build Main buttons
	
	// have buttons add in data that is its key so we can easily call that later down the code. Yay smart Bill!
	for (var i = 0; i < size; i++) { 
        $('.selectors').append('<div class="selector" id="'+i+'"><img src="'+friends[objectNames[i]].image.profile+'" class="selfie"><div class="status">'+friends[objectNames[i]].name+'</div></div>');
        
    }

	var currFriend;
	var currFriendID;
	var currFriendProps;
	
	var allFriends =Object.keys(friends); 
	
	$(document).on('click', '.selector', function() {
		
		currFriendID = $(this).attr('id');
		currFriend = allFriends[currFriendID];
		currFriendProps = Object.keys(friends[currFriend]);

		$('.left').hide();
		$('.middle').hide();
		$('.right').hide();
		$('.chatterHeader').show();
		$('.chatterBody').empty().show();
		$('.chatterInteract').show();
		$('.chatterPic').attr("src",friends[objectNames[currFriendID]].image.default);
		friends[objectNames[currFriendID]].chatProg = 0;
		$('.interactButton').removeClass('disabled').css({pointerEvents: "all"});
	});

	$(document).on('click', '.love', function() {
		pauseButtonFunc();
		friends[currFriend].chatOption1();
	});
	$(document).on('click', '.convo', function() {
		
		pauseButtonFunc();
		friends[currFriend].chatOption2();
	});
	$(document).on('click', '.food', function() {
		pauseButtonFunc();
		friends[currFriend].chatOption3();
	});
	$(document).on('click', '.bye', function() {
		pauseButtonFunc();
		friends[currFriend].convoBye();
		
	});

	TweenMax.staggerFromTo(".dot", 0.5,{y:20}, {y:-20, ease:Power2.easeOut, yoyo: true, repeat:-1}, 0.125);
	TweenMax.set(".typingWrapper", {y:120});
	//loopingDots.play();
	// make a quick anim you can play to have the typing anim pop up. on start have the dots anim play
	//var writingStart = TweenMax.to(".typingWrapper", 0.5, {y:-120, ease:Power3.easeOut, onStart: loopingDots.play});
	// and another anim to play to have the typing anim go down. on complete have tyhe dots anim end
	//var writingEnd = TweenMax.to(".typingWrapper", 0.5, {y:120, ease:Power3.easeOut, onComplete: loopingDots.pause});

} );

function writingStart(){
	TweenMax.to(".typingWrapper", 0.5, {y:0, ease:Power3.easeOut, delay: 0.5});
}

function writingEnd(){
	TweenMax.to(".typingWrapper", 0.5, {y:120, ease:Power3.easeIn});
}

function endChat(){
	console.log("Ending running in the end chat");
	$('.chatterHeader').hide();
	$('.chatterBody').hide();
	$('.chatterInteract').hide();
	$('.left').show();
	$('.middle').show();
	$('.right').show();
}

function update(friend){
	
	$('.chatterPic').attr("src", friend.image[friend.emotions[friend.chatProg]]);
	returnButtonFunc();
}

function sendChat(currFriend, currChat){
	
	

	var userChat = currFriend['convoUser'+currChat];
	var friendChat = currFriend['convo'+currChat];
	if (currChat == "End"){
		$('.chatterBody').append("<div class='userText'>"+currFriend.convoUserEnd+"</div>");
		scrollChat();
		setTimeout(function(){
			$('.chatterBody').append("<div class='friendText'>"+currFriend.convoEnd+"</div>");
			scrollChat();
		}, currFriend.typingSpeed * 1000);
		
		setTimeout(endChat, 5000);	
	} else {
		$('.chatterBody').append("<div class='userText'>"+userChat[currFriend.chatProg]+"</div>");
		writingStart();
		scrollChat();
		setTimeout(function(){
			writingEnd();
			$('.chatterBody').append("<div class='friendText'>"+friendChat[currFriend.chatProg]+"</div>");
			currFriend.chatProg++;
			update(currFriend);
			scrollChat();
		}, currFriend.typingSpeed * 1000);
	}
	
}

function endCheck(current, max){
	if (current === max){
		return true;
	} else {
		return false;
	}
}

function pauseButtonFunc(){
	$('.interactButton').css({pointerEvents: "none"})
}

function returnButtonFunc(){
	$('.interactButton').css({pointerEvents: "all"})
}

function scrollChat(){
	var realHeight = 0;
	$(".chatterBody").children().each(function(){
		realHeight = realHeight + $(this).outerHeight(true);
	});
	console.log("Height of all text so far is "+realHeight+" and height of chatterBody is "+$('.chatterBody').height());
	realHeight -= $('.chatterBody').height()
	if( realHeight < 0 ){
		realHeight = 0
	} 
	$('.chatterBody').animate({ scrollTop: realHeight }, "slow");
}

