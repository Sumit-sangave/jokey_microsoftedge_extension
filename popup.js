document.addEventListener("DOMContentLoaded", () => {

  const jokes = {
    english: {
      life: [
        "I once decided to completely change my life. I woke up early, made a timetable, wrote goals, and even watched motivational videos. By the third day, I realised motivation is temporary, but comfort is permanent. Since then, my goals and I live peacefully without disturbing each other.",

        "Adult life is when you get tired even after doing nothing. You wake up tired, go to work tired, come back tired, and then wonder how you were energetic enough to run all day as a child.",

        "Life teaches patience in very creative ways. For example, when you are already late, every traffic signal turns red, the lift stops on every floor, and your phone battery suddenly decides to drop from 15% to 1%.",

        "Everyone says enjoy life, but nobody explains how to enjoy life when responsibilities arrive earlier than salary.",

        "Life feels like a phone update. You don’t know what changed, something definitely broke, and now you just have to adjust."
      ],

      family: [
        "Family functions are not gatherings, they are performance reviews. Relatives will ask about your job, salary, marriage, future plans, and then compare you with someone you have never met but instantly dislike.",

        "Parents say they are not pressuring you. They just casually mention the neighbour’s child who got a job, bought a house, got married, and still greets elders every morning.",

        "Family love is unconditional, but it comes with unlimited advice, constant questions, and zero privacy.",

        "Relatives remember your childhood mistakes better than your achievements as an adult.",

        "In every family, there is one person who knows everyone’s business and pretends it happened accidentally."
      ],

      office: [
        "Office meetings are magical. You enter with one problem, leave with five new tasks, and the original problem remains exactly where it was.",

        "Your boss says ‘quick call’ and suddenly forty-five minutes pass while you question your life choices.",

        "Office teaches multitasking. You learn how to look serious, nod at the right moments, and still have no idea what the meeting was about.",

        "Work from home sounds comfortable until your home becomes your office and your office never closes.",

        "Office coffee does not wake you up. It only gives you hope."
      ],

      college: [
        "College life teaches survival. You learn how to study one night before exams, survive on tea and snacks, and still believe everything will work out.",

        "Attendance is the most powerful subject in college. You may pass exams, but attendance will fail you without mercy.",

        "College friends know your worst habits, lowest marks, and bad decisions, yet stay with you because they are equally guilty.",

        "Professors say every topic is important, and students panic equally for all of them.",

        "College prepares you for life by giving stress, deadlines, and very little guidance."
      ]
    },

    hindi: {
      life: [
        "मैंने एक दिन सोचा कि अब ज़िंदगी बदलनी है। जल्दी उठना, प्लान बनाना, मोटिवेशन देखना सब किया। तीसरे दिन ज़िंदगी ने समझा दिया कि मोटिवेशन अस्थायी होता है और आलस स्थायी।",

        "बड़ा होना मतलब बिना कुछ किए थक जाना। सुबह उठते ही थकान और रात को सोने से पहले भी थकान।",

        "ज़िंदगी सब्र बहुत अच्छे तरीके से सिखाती है। खासकर तब, जब आप लेट हों और हर सिग्नल लाल हो जाए।",

        "सब कहते हैं ज़िंदगी एंजॉय करो, पर कोई ये नहीं बताता कि ज़िम्मेदारियों के साथ कैसे।",

        "ज़िंदगी मोबाइल अपडेट जैसी है — क्या बदला पता नहीं, कुछ तो खराब हुआ है, और अब एडजस्ट करना पड़ेगा।"
      ],

      family: [
        "घर के फंक्शन खुशियों के लिए नहीं होते, बल्कि तुलना के लिए होते हैं।",

        "माँ-बाप कहते हैं दबाव नहीं डालते, बस पड़ोसी के बच्चे का ज़िक्र बार-बार करते हैं।",

        "परिवार का प्यार बिना शर्त होता है, लेकिन सलाह के साथ।",

        "रिश्तेदार आपकी सैलरी से ज़्यादा आपकी शादी में इंटरेस्ट रखते हैं।",

        "घर में शांति तब तक रहती है जब तक Wi-Fi सही चलता है।"
      ],

      office: [
        "ऑफिस मीटिंग में बहुत बातें होती हैं, लेकिन नतीजा कुछ नहीं निकलता।",

        "बॉस का ‘पाँच मिनट की कॉल’ आधे घंटे में बदल जाता है।",

        "ऑफिस आपको सिखाता है कैसे गंभीर दिखना है बिना कुछ समझे।",

        "वर्क फ्रॉम होम का मतलब है हर समय काम।",

        "ऑफिस की चाय काम नहीं करती, बस उम्मीद देती है।"
      ],

      college: [
        "कॉलेज आपको ज़िंदगी के लिए तैयार करता है — तनाव देकर।",

        "अटेंडेंस कॉलेज का सबसे खतरनाक विषय है।",

        "कॉलेज के दोस्त आपकी सारी कमजोरियाँ जानते हैं।",

        "परीक्षा से पहले सब कुछ याद आता है, बस सिलेबस छोड़कर।",

        "कॉलेज सिखाता है कम नींद में कैसे जिया जाए।"
      ]
    },

    marathi: {
      life: [
        "मी ठरवलं होतं आयुष्य बदलायचं. पण आयुष्याने सांगितलं, आधी झोप पूर्ण कर.",

        "मोठं होणं म्हणजे काहीच न करता थकणं.",

        "आयुष्य संयम शिकवायला कधीच विसरत नाही, विशेषतः जेव्हा उशीर झालेला असतो.",

        "सगळे म्हणतात आयुष्य एन्जॉय करा, पण कसं ते कुणी सांगत नाही.",

        "आयुष्य म्हणजे मोबाईल अपडेट — काहीतरी बदलतं, काहीतरी बिघडतं."
      ],

      family: [
        "घरचे कार्यक्रम म्हणजे तुलना स्पर्धा असते.",

        "आई-वडील दबाव टाकत नाहीत, फक्त आठवण करून देतात.",

        "नातेवाईकांना तुमच्या लग्नाची जास्त काळजी असते.",

        "घरात शांतता Wi-Fi वर अवलंबून असते.",

        "घरचं प्रेम सल्ल्याशिवाय अपूर्ण असतं."
      ],

      office: [
        "ऑफिस मीटिंग म्हणजे वेळेचा अपव्यय.",

        "बॉस म्हणतो छोटी कॉल, पण वेळ मोठा जातो.",

        "ऑफिस अभिनय शिकवतो.",

        "वर्क फ्रॉम होम म्हणजे कायमचं काम.",

        "ऑफिसची कॉफी जागं करत नाही."
      ],

      college: [
        "कॉलेज आयुष्य म्हणजे ताण आणि आठवणी.",

        "अटेंडन्स सगळ्यात मोठा विषय आहे.",

        "कॉलेजचे मित्र आयुष्यभर लक्षात राहतात.",

        "परीक्षेच्या आधीच सगळं कठीण वाटतं.",

        "कॉलेज झोपेची किंमत शिकवतं."
      ]
    }
  };

  let currentLanguage = "english";
const languageSelect = document.getElementById("languageSelect");

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  showNewJoke();
});


  const jokeBox = document.getElementById("joke");
  const newBtn = document.getElementById("newJokeBtn");
  const dailyBtn = document.getElementById("dailyJokeBtn");
  const categorySelect = document.getElementById("categorySelect");
  const darkToggle = document.getElementById("darkToggle");

  function getRandomJoke(category) {
    let pool = [];
    const langData = jokes[currentLanguage];

    if (category === "random") {
      Object.values(langData).forEach(arr => pool.push(...arr));
    } else {
      pool = langData[category];
    }
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function showNewJoke() {
    jokeBox.textContent = getRandomJoke(categorySelect.value);
  }

  function showDailyJoke() {
    const today = new Date().toDateString();
    const saved = JSON.parse(localStorage.getItem("dailyJoke"));

    if (saved && saved.date === today) {
      jokeBox.textContent = saved.joke;
    } else {
      const joke = getRandomJoke("random");
      localStorage.setItem("dailyJoke", JSON.stringify({ date: today, joke }));
      jokeBox.textContent = joke;
    }
  }

  darkToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });

  newBtn.addEventListener("click", showNewJoke);
  dailyBtn.addEventListener("click", showDailyJoke);

  showDailyJoke();
});
