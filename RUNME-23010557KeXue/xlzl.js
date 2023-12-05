setTimeout(function() {
    document.getElementById('storyMessage').style.display = 'block';
  }, 5000);
  
  const dialogues = {
    "👌ok": {
      question: "Once upon a time, there was a little mouse🐭 whose name was Pippi. Pippi loved ice-cream🍦 so much that he would go to the ice-cream store every day and taste all kinds of flavors of ice-cream. He ate strawberry, chocolate, vanilla, and even a strange chili pepper flavored ice cream.🍦 Do you want to eat ice cream?",
      answers: ["💗I want ice cream.", "💔I don't want ice cream."],
      gif: "IMG_6672.GIF"
    },
    "💔I don't want ice cream.": {
      question: "Have some ice cream! He always puts people in a better mood!",
      answers: ["👌Okay, trust you once!"]
    },
    "👌Okay, trust you once!": {
      question: "What flavor of ice cream do you like?",
      answers: ["🍓Strawberry", "🍫Chocolate", "🌶️Chili"]
    },
    "💗I want ice cream.": {
      question: "What flavor of ice cream do you like?",
      answers: ["🍓Strawberry", "🍫Chocolate", "🌶️Chili"]
    },
    "🍓Strawberry":{
      question: "Why do you like this flavor?",
      answers: ["🍬I think strawberries are sweet."]
    },
    "🍫Chocolate":{
      question: "Why do you like this flavor?",
      answers: ["Because the chocolate flavor is so mellow"]
    },
    "🌶️Chili":{
      question: "Why do you like this flavor?",
      answers: ["Because I like to stimulate the taste buds."]
    },
    "🍬I think strawberries are sweet.":{
      question: "Wow, I love this flavor too. I hope your mood is as sweet as the strawberry flavor.",
      answers: ["😀Ha ha ha!"]
    },
    "Because the chocolate flavor is so mellow":{
      question: "Wow, I love the flavor too. Although the chocolate is bitter at first, it will end up with a mellow sweet flavor👄, and I think it will be the same in your life, the pain is over and the rest will be sweet🍬.",
      answers: ["definite"]
    },
    "Because I like to stimulate the taste buds.":{
      question: "Wow, that's quite a special flavor. I've noticed something about you, you love to try new things, and I think you could choose to try some extreme sports.",
      answers: ["It's not bad at all!"]
    },
    "😀Ha ha ha!":{
      question: "That's the end of the story. I'd like to hear yours, please?",
      
      answers: ["😀Good!" , "😬Not good!"]
    },
    "definite":{
      question: "The story's done. Is it all right if I hear yours?",
      answers: ["😀Good!" , "😬Not good!"]
    },
    "It's not bad at all!":{
      question: "That's the end of the story. I'd like to hear yours, please.?",
      answers: ["😀Good!" , "😬Not good!"]
    },
    "😀Good!":{
      question: "Something I thought might happen to you.",
      answers: ["🤕️You've been hurt?","🔪Have you been subjected to violence?","👠Have you been sexually assaulted?"]
    },
    "😬Not good!": {
     question: "Dear baby, there is a lot of pain in the world, but I'm sure you're a brave...",
     link: "https://www.bilibili.com/bangumi/play/ep274546?theme=movie&spm_id_from=333.337.0.0&from_spmid=666.25.episode.0",
     additionalInfo: "Dear Baby, This is one of my very favorite animated series, you still have a lot of time to discover the beauty of the world...",
     answers: ["Okay, I'll take a look.👀"]
    },
    "🤕️You've been hurt?":{
     question: "Dear baby, there is a lot of pain in the world, but I'm sure you're a brave...",
     link: "https://www.bilibili.com/bangumi/play/ep274546?theme=movie&spm_id_from=333.337.0.0&from_spmid=666.25.episode.0",
     additionalInfo: "Dear Baby, This is one of my very favorite animated series, you still have a lot of time to discover the beauty of the world...",
     answers: ["Okay, I'll take a look.👀"]
    },
    "🔪Have you been subjected to violence?":{
     question: "Dear baby, there is a lot of pain in the world, but I'm sure you're a brave...",
     link: "https://www.bilibili.com/bangumi/play/ep274546?theme=movie&spm_id_from=333.337.0.0&from_spmid=666.25.episode.0",
     additionalInfo: "Dear Baby, This is one of my very favorite animated series, you still have a lot of time to discover the beauty of the world...",
     answers: ["Okay, I'll take a look.👀"]
    },
    "👠Have you been sexually assaulted?":{
     question: "Dear baby, there is a lot of pain in the world, but I'm sure you're a brave...",
     link: "https://www.bilibili.com/bangumi/play/ep274546?theme=movie&spm_id_from=333.337.0.0&from_spmid=666.25.episode.0",
     additionalInfo: "Dear Baby, This is one of my very favorite animated series, you still have a lot of time to discover the beauty of the world...",
     answers: ["Okay, I'll take a look.👀"]
    },
     "Okay, I'll take a look.👀":{
      question: "Dear, the link above is for some medical rescue knowledge. What I can do to help you.？",
      answers: ["I would like to know some legal websites .👊","I'd like to see some videos.🎬"]
     },
     "I would like to know some legal websites .👊":{
      question: "Okay, here are some searches that are more appropriate for your site.",
      link: "http://www.east-concord.com/sxgx/Article/201712/ArticleContent_698.htmls://www.https://www.who.int/zh/news/item/03-03-2023-who-launches-policy-on-preventing-and-addressing-sexual-misconductbilibili.com/bangumi/play/ep274546?theme=movie&spm_id_from=333.337.0.0&from_spmid=666.25.episode.0",
      additionalInfo: "Dear Baby, This is one of my very favorite animated series, you still have a lot of time to discover the beauty of the world...",
      answers: ["Okay, I'll take a look."]
     },
     "Okay, I'll take a look.":{
      question: "I can do to help you.？",
      answers: ["I'd like to see some videos.🎬"]
     },
     "I'd like to see some videos.🎬":{
      question: "Here's a healing food animation, I hope you like it.",
      link: "https://www.youtube.com/watch?v=CP_VXh3ZupM",
      answers: ["I would like to know some of the relevant laws 📚"]
    },
     "I would like to know some of the relevant laws 📚":{
      question: "Next, I'd like to recommend you a website video💻 that introduces the punishment of perpetrators, if you are interested you can learn about it",
      link: "//www.youtube.com/watch?v=IChTfI1cW6U",
      answers: ["I would love for the people who hurt me to be punished too 😭","I want to know about a funny and healing cartoon?🌞"]
     },
     "I want to know about a funny and healing cartoon?🌞":{
      question: "Here's a healing food animation, I hope you like it.",
      link: "https://www.youtube.com/watch?v=CP_VXh3ZupM",
      answers: ["Can you tell me the next story?📖"]
     },
     

     "I would love for the people who hurt me to be punished too 😭":{
      question: "Dear baby, I know you are traumatised physically and mentally and that is very sad. But remember dear, those who hurt you will be punished by law and reason, and the rest of your life will be peaceful and smooth.",
      answers: ["Thanks for the company🫂. I'd like to know something about the law.","Thanks for the company🫂. Can you tell me something happy？"]
     },
     
     "Thanks for the company🫂. I'd like to know something about the law.":{
      question: "🤔Here are some recommended legal readings you can learn about sexual assault, Feminism Unmodified and Butterfly Politics.",
      link: "https://www.hup.harvard.edu/catalog.php?isbn=9780674298743",
      link: "https://www.hup.harvard.edu/catalog.php?isbn=9780674237667",
      answers: ["What should I do now that I've read the article?"]
     },
     "Thanks for the company🫂. Can you tell me something happy？":{
      question: "Here's a healing food animation, I hope you like it.",
      link: "https://www.youtube.com/watch?v=CP_VXh3ZupM",
      answers: ["Can you tell me the next story?📖"]
     },
     "What should I do now that I've read the article?":{
      question: "I think you can live well and love yourself well. Since the damage has been done and we can't undo it, it's all the more important that we love ourselves and treat ourselves well, we have to believe that we are the best, there are still a lot of unknown beauties in our future waiting to be discovered, I wish you all the best in the next!",
      question:"Together we can talk about happy topics. Do you want to watch some healing cartoons? I'm sure you'll like it~",
      answers: ["Okay, can you recommend me some healing anime?"]
     },
     "Okay, can you recommend me some healing anime?":{
      question: "Here's a healing food animation, I hope you like it.",
      link: "https://www.youtube.com/watch?v=CP_VXh3ZupM",
      answers: ["Can you tell me the next story?📖"]
     },
     "Can you tell me the next story?📖":{
      question: "Ok then, We can spend time with you.is it a continuation of the ice cream story? ",
      answers: ["Yeah, keep the ice cream story going."]
     },
     "Yeah, keep the ice cream story going.":{
      question: "Little Mouse 🐭 went out to buy his favourite ice cream🍦very early in the morning, and when he was passing the market, he bumped into his good friend Mr Piggy 🐷, who also loves ice cream, so they met up together to buy ice cream. When they arrived at the ice-cream shop, Mr. Piggy chose chocolate ice-cream 🐭🍫🍦, saying that chocolate ice-cream is a bitter flavour, but the aftertaste is sweet, just like life slowly becomes sweet. Mr Piggy chose strawberry flavoured ice cream 🍓🍦 because strawberry is sweet and sour just like life, which has its ups and downs but also happy moments.",
      answers: ["Okay thank you.👭That's a funny story."]
     },

     "Okay thank you.👭That's a funny story.":{
      question: "This ice cream story on the end, in fact, this is just a children's story, here just want to let you can be a time when the child to feel the simple joy😊, chat now, please you can also open the window to look at the outside scenery to go happy happy life.",
      answers: ["Okay thank you. I'll get on with my life."]
      },
     
     "Okay thank you. I'll get on with my life.":{
      question: "Okay, the robot here has finished the dialogue👋, but our companionship will not end, if you need us, 👬we are always available for you to help you~",
      answers: ["Starting a new story"]
      },
     "Starting a new story":{
      question: "This side for you to choose a Alice in Wonderland📖, I hope you can like ~!",
      link: "https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland",
      answers: ["Okay, 👀I'm watching......"]
     },
     
     "Okay, 👀I'm watching......":{
      question: "Okay, the robot here has finished the dialogue👋, but our companionship will not end, if you need us, 👬we are always available for you to help you~",
      answers: ["End of dialogue. Goodbye.😊"]
    
      },

  };
  document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('videoPlayer');
    const mainContent = document.getElementById('mainContent');
    const clickPrompt = document.getElementById('clickPrompt');
    const clickSound = document.getElementById('clickSound');
    let isClicked = false;
  
    // 监听文档的点击事件
    document.addEventListener('click', function() {
      if (!isClicked) {
        video.play(); 
        clickSound.play(); // 播放点击音效
        clickPrompt.style.display = 'none'; // 隐藏点击提示
        isClicked = true;
      }
      updateVisibility();
    });
  
    video.addEventListener('timeupdate', updateVisibility);
  
    function updateVisibility() {
      if (isClicked) {
        if (video.currentTime >= 3) {
          video.style.opacity = 0;
          mainContent.style.opacity = 1; // 显示其他元素
  
          if (video.currentTime >= 5) {
            video.style.visibility = 'hidden'; // 或者 video.style.display = 'none';
          }
        }
      }
    }
  
    requestFullscreen(video);
  });
  

  function requestFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
      element.msRequestFullscreen();
    }
  }
  
  function refreshPage() {
    console.log('refreshPage function called');
    location.reload();
}
  
  
  function addDialogue(answer) {
    const conversation = document.getElementById("conversation");
    const userAnswerDiv = document.createElement("div");
    userAnswerDiv.classList.add("message");
    userAnswerDiv.innerHTML = `<div class="user-answer">${answer}</div>`;
    conversation.appendChild(userAnswerDiv);

    if (dialogues[answer]) {
      showTypingIndicator();
      setTimeout(() => {
        showNextDialogue(answer);
      }, 1000); 
    } else {
      
      // 延迟3000毫秒后刷新页面
      setTimeout(() => {
        
        refreshPage();
      }, 3000);
    }
  
    conversation.scrollTop = conversation.scrollHeight;
  }


  function showTypingIndicator() {
  const conversation = document.getElementById("conversation");
  
  // 设置一个定时器来延迟“正在输入”的提示出现
  setTimeout(() => {
    const typingIndicator = document.createElement("div");
    typingIndicator.classList.add("message", "typing-indicator");
    typingIndicator.textContent = "The other party is typing...";
    conversation.appendChild(typingIndicator);
    conversation.scrollTop = conversation.scrollHeight;
  }, 800); // 这里的 500 毫秒是延迟时间，可根据需要调整
}
// 这是一个示例函数，它将答案添加到对话中
function addAnswerToDialogue(answer) {
  // 创建一个新的p元素，设置它的文本，然后将它添加到对话中
  var p = document.createElement('p');
  p.textContent = answer;
  document.getElementById('dialogue').appendChild(p);

  // 如果答案是"End of dialogue. Goodbye.😊"，那么创建一个新的button元素，设置它的文本和onclick事件处理器，然后将它添加到对话中
  if (answer === "End of dialogue. Goodbye.😊") {
    var refreshButton = document.createElement('button');
    refreshButton.textContent = 'Refresh Page';
    refreshButton.onclick = refreshPage;
    document.getElementById('dialogue').appendChild(refreshButton);
  }
}

// 这是刷新页面的函数
function refreshPage() {
  location.reload();
}
function showNextDialogue(answer) {
  const conversation = document.getElementById("conversation");
  const typingIndicator = conversation.querySelector('.typing-indicator');
  if (typingIndicator) {
    conversation.removeChild(typingIndicator); 
  }

  const nextDialogue = dialogues[answer];
  if (nextDialogue) {
    // 首先添加文字消息
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("message");
    questionDiv.innerHTML = `<div class="question">${nextDialogue.question}</div>`;
    conversation.appendChild(questionDiv);

    // 然后，如果对话中有GIF图像，则添加它
    if (nextDialogue.gif) {
      const gifImage = document.createElement("img");
      gifImage.src = nextDialogue.gif;
      gifImage.classList.add("dialogue-gif");
      conversation.appendChild(gifImage);
    }

    // 添加答案按钮
    const answersDiv = document.querySelector(".answer-buttons");
    answersDiv.innerHTML = "";
    nextDialogue.answers.forEach(ans => {
      const button = document.createElement("button");
      button.textContent = ans;
      button.onclick = () => addDialogue(ans);
      answersDiv.appendChild(button);
    });


    // 添加其他元素，比如链接或额外信息
    if (nextDialogue.link) {
      const linkDiv = document.createElement("div");
      linkDiv.classList.add("message");
      linkDiv.innerHTML = `<div class="question"><a href="${nextDialogue.link}" target="_blank">Click here to watch the website</a></div>`;
      conversation.appendChild(linkDiv);
    }
    if (nextDialogue.additionalInfo) {
      const additionalDiv = document.createElement("div");
      additionalDiv.classList.add("message");
      additionalDiv.innerHTML = `<div class="question">${nextDialogue.additionalInfo}</div>`;
      conversation.appendChild(additionalDiv);
    }
  }

  conversation.scrollTop = conversation.scrollHeight;
}
function snow(duration) {  
  var flake = document.createElement('div');  
  flake.innerHTML='<img src="./ice.png" style="width: 30px; height: 30px;">'  
  flake.style.cssText = 'position:absolute;color:#fff;';  
  var documentHieght = window.innerHeight;  
  var documentWidth = window.innerWidth;  
  //数量
  var millisec =70;  
  var start = null;  
  var intervalId = null;  
    
  function simulateSnow() {  
      if (start === null) {  
          start = new Date().getTime();  
      }  
        
      var current = new Date().getTime();  
      var elapsed = current - start;  
        
      if (elapsed >= duration) {  
          clearInterval(intervalId);  
          return;  
      }  
        
      var endLeft = Math.random() * documentWidth;  
      var flakeSize = 3 + 20 * Math.random();  
      var durationTime = 4000 + 7000 * Math.random();  
      var startOpacity = 0.7 + 0.3 * Math.random();  
      var endOpacity = 0.2 + 0.2 * Math.random();  
      var cloneFlake = flake.cloneNode(true);  
      cloneFlake.style.cssText += `  
          opacity: ${startOpacity};  
          font-size:${flakeSize}px;  
          top:-25px;  
          transition:${durationTime}ms;`;  
      document.body.appendChild(cloneFlake);  
      setTimeout(function() {  
          cloneFlake.style.cssText += `  
              left: ${endLeft}px;  
              top:${documentHieght}px;  
              opacity:${endOpacity};`;  

          setTimeout(function() {  
              cloneFlake.remove();  
          }, durationTime);  
      }, 0);  
  }  
    
  intervalId = setInterval(simulateSnow, millisec);  
}

