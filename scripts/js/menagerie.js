

var friends = {
			
    friend1: {
        image: {
            profile: "images/dinah-profile.png",
            default: "images/dinah-default.png",
            laugh: "images/dinah-laugh.png",
            sad: "images/dinah-sad.png",
            angry: "images/dinah-angry.png"
        },
        emotions: ["default", "laugh", "angry", "sad", "default"],
        name: "Floofer",
        convoA: [ "Snarf!<i class='em em-100'></i>", "Scaharfharfharf harfharf harf harfharfharfrf!", "Shharfharfharf harfharfharf harf harfharfharfarf!", "Shaharharf harfvfharfharfrf!", "Sharf!", "Sharf!", "Sharf!" ],
        convoB: [ "Znarharfharff!", "Zcaharfharfrf!", "Zhaharfharfharfrf!", "Sharf!", "Sharfharfharfharfharf!", "Shaharfharf harf harfharfharfharfrf!", "Shaharf  harf harfvharf harfharfharfrf!" ],
        convoC: [ "Cnaharfharf harfharfharfrf!", "Ccaharf harfharfharfharf harf harfharfrf!", "Chharfarf!", "Sharf!", "Sharf!", "Sharf!", "Sharf!" ],
        convoUserA: [ "Snarf!", "Scarf!", "Sharf!" ],
        convoUserB: [ "Znarf!", "Zcarf!", "Zharf!" ],
        convoUserC: [ "Cnarf!", "Ccarf!", "Charf!" ],
        chatProg: 0,  
        chatMax: 7,  
        chatOption1: function(){
            if (endCheck(this.chatProg, this.chatMax)){
                this.convoBye();
            } else {
                sendChat(this, "A");
            }
        },
        chatOption2: function(){
            if (endCheck(this.chatProg, this.chatMax)){
                this.convoBye();
            } else {
                sendChat(this, "B");
            } 
        },
        chatOption3: function(){
            if (endCheck(this.chatProg, this.chatMax)){
                this.convoBye();
            } else {
                sendChat(this, "C");
                
            }
        }, 
        convoEnd: "Okee dokey. Talk to you laterz!", 
        convoUserEnd: "Okee dokey. Talk to you laterz!", 
        convoBye: function(){
            sendChat(this, "End");
        },
        typingSpeed: 2.5,
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
                setTimeout(endChat, 2000)
            } else {
                sendChat(this.convoA[this.chatProg]);
                
            }
            
            update(this);
        },
        chatOption2: function(){
            if (endCheck(this.chatProg, this.chatMax)){
                this.convoBye();
                setTimeout(endChat, 2000)
            } else {
                sendChat(this.convoB[this.chatProg]);
                this.chatProg++;
            } 
            
            update(this);
        },
        chatOption3: function(){
            if (endCheck(this.chatProg, this.chatMax)){
                this.convoBye();
                setTimeout(endChat, 2000)
            } else {
                sendChat(this.convoC[this.chatProg]);
                this.chatProg++;
                
            }
            
            update(this);
        }, 
        convoEnd: "Okee dokey. Talk to you laterz!", 
        convoBye: function(){
            sendChat(this.convoEnd);
            
            setTimeout(endChat, 2000)
            update(this);
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