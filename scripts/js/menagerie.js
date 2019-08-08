

var friends = {
			
    friend1: {
        image: "https://placekitten.com/180/180",
        name: "Floofer",
        convoA: [ "Snarf!", "Scarf!", "Sharf!" ],
        convoB: [ "Znarf!", "Zcarf!", "Zharf!" ],
        convoC: [ "Cnarf!", "Ccarf!", "Charf!" ],
        chatProg: 0,  
        chatMax: 4,  
        chatOption1: function(){
            if (endCheck(this.chatProg, this.chatMax)){
                this.convoBye();
                setTimeout(endChat, 1500)
            } else {
                sendChat(this.convoA[this.chatProg]);
                this.chatProg++;
                scrollUpdate();
            }
        },
        chatOption2: function(){
            if (endCheck(this.chatProg, this.chatMax)){
                this.convoBye();
                setTimeout(endChat, 1500)
            } else {
                sendChat(this.convoB[this.chatProg]);
                this.chatProg++;
                scrollUpdate();
            } 
        },
        chatOption3: function(){
            if (endCheck(this.chatProg, this.chatMax)){
                this.convoBye();
                setTimeout(endChat, 1500)
            } else {
                sendChat(this.convoC[this.chatProg]);
                this.chatProg++;
                scrollUpdate();
            }
        }, 
        convoEnd: "Okee dokey. Talk to you laterz!", 
        convoBye: function(){
            sendChat(this.convoEnd);
            $('.interactButton').addClass('disabled');
        },
    },	
    friend2: {
        image: "https://placekitten.com/180/190",
        name: "Snoofer",
        convoA: [ "arf!", "barf!", "carf!", "barf!", "carf!", "barf!", "carf!", "barf!", "carf!", "barf!", "carf!", "barf!", "carf!" ],
        convoB: [ "Znarf!", "Zcarf!", "Zharf!" ],
        convoC: [ "Cnarf!", "Ccarf!", "Charf!" ],
        chatProg: 0,
        chatMax: 2,  
        chatOption1: function(){
            if (endCheck(this.chatProg, this.chatMax)){
                this.convoBye();
                setTimeout(endChat, 1500)
            } else {
                sendChat(this.convoA[this.chatProg]);
                this.chatProg++;
                scrollUpdate();
            }
        },
        chatOption2: function(){
            if (endCheck(this.chatProg, this.chatMax)){
                this.convoBye();
                setTimeout(endChat, 1500)
            } else {
                sendChat(this.convoB[this.chatProg]);
                this.chatProg++;
                scrollUpdate();
            } 
        },
        chatOption3: function(){
            if (endCheck(this.chatProg, this.chatMax)){
                this.convoBye();
                setTimeout(endChat, 1500)
            } else {
                sendChat(this.convoC[this.chatProg]);
                this.chatProg++;
                scrollUpdate();
            }
        }, 
        convoEnd: "Okee dokey. Talk to you laterz!", 
        convoBye: function(){
            sendChat(this.convoEnd);
            scrollUpdate();
            
        },
    },	
    friend3: {
        image: "https://placekitten.com/180/200",
        name: "Poofer",
    },	
    friend4: {
        image: "https://placekitten.com/180/210",
        name: "Gloofer",
    },	
    friend5: {
        image: "https://placekitten.com/180/220",
        name: "Doofer",
    }
} 