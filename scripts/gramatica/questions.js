
const qnsObj = {
    basico: {
        'personal-pronouns' : [
            {
                num      : 1,
                question : 'Who is Kate? Kate is my friend. ___ is a teacher.',
                options  : ['Her','He','She','His'],
                answer   : 'She'
            },
            {
                num      : 2,
                question : 'Who is this man? This is Henry. ___ is my boss.',
                options  : ['His','Her','He','She'],
                answer   : 'He',
            },
            {
                num      : 3,
                question : 'Do you know Tom? Yes, I know ___.',
                options  : ['she','he','her','him'],
                answer   : 'him',
            },
            {
                num      : 4,
                question : "I don't see them. Do ___ see them?",
                options  : ['you','I','they','me'],
                answer   : 'you',
            },
            {
                num      : 5,
                question : "We are going to the cinema. Do you want to come with ___.",
                options  : ['we','them','us','you'],
                answer   : 'us',
            },
            {
                num      : 6,
                question : "I love this book! Did you read ___?",
                options  : ['it','he','they','she'],
                answer   : 'it',
            },
            {
                num      : 7,
                question : "Where are Tom and Kate living? ___ live next to my house.",
                options  : ['She','They','He','We'],
                answer   : 'They',
            },
            {
                num      : 8,
                question : "Where's the cat? ___ is in the garden.",
                options  : ['It','Its','She','He'],
                answer   : 'It',
            },
            {
                num      : 9,
                question : "It's Mary's birthday today. I called ___ this morning.",
                options  : ['she','him','her','it'],
                answer   : 'her',
            },
            {
                num      : 10,
                question : "Amy and John are my new friends. I really like ___.",
                options  : ['they','them','him','her'],
                answer   : 'them',
            },
        ],
        'possessives':[
            {
                num      : 1,
                question : 'This car is ___ car. This car is his.',
                options  : ['he','her','his','hers'],
                answer   : 'his'
            },
            {
                num      : 2,
                question : 'This house is our house. This house is ___.',
                options  : ['our','ours','we','its'],
                answer   : 'ours'
            },
            {
                num      : 3,
                question : 'This hat is my hat. This hat is ___.',
                options  : ['I','me','mine','its'],
                answer   : 'mine'
            },
            {
                num      : 4,
                question : 'This is your bike. This bike is ___.',
                options  : ['you','your','yous','yours'],
                answer   : 'yours'
            },
            {
                num      : 5,
                question : 'This is ___ dog. This dog is hers.',
                options  : ['her','his','hers','she'],
                answer   : 'her'
            },
            {
                num      : 6,
                question : 'These are ___ children. These children are theirs.',
                options  : ['theirs','them','they','their'],
                answer   : 'their'
            },
        ],
        'demonstrative-pronouns':[
            {
                num      : 1,
                question : '___ is my car here.',
                options  : ['This','That','These','Those'],
                answer   : 'This'
            },
            {
                num      : 2,
                question : '___ are my children over there in the park.',
                options  : ['This','That','These','Those'],
                answer   : 'Those'
            },
            {
                num      : 3,
                question : '___ is my car over there.',
                options  : ['This','That','These','Those'],
                answer   : 'That'
            },
            {
                num      : 4,
                question : '___ are my children here.',
                options  : ['This','That','These','Those'],
                answer   : 'These'
            },
            {
                num      : 5,
                question : '___ bike over there is mine.',
                options  : ['This','That','These','Those'],
                answer   : 'That'
            },
            {
                num      : 6,
                question : 'Do you know ___ boys over there.',
                options  : ['this','that','these','those'],
                answer   : 'those'
            },
            {
                num      : 7,
                question : 'Can I use ___ pencil here?',
                options  : ['this','that','these','those'],
                answer   : 'this'
            },
            {
                num      : 8,
                question : 'I love ___ biscuits here.',
                options  : ['this','that','these','those'],
                answer   : 'these'
            },
        ]
    },
    
    intermedio: {
        'indefinite-pronouns' :[
            {
                num      : 1,
                question : 'There is ___ in the bathroom at the moment.',
                options  : ['anybody','somebody','something','some'],
                answer   : 'somebody'
            },
            {
                num      : 2,
                question : "I am bored, there isn't ___ to do here.",
                options  : ['everything','nothing','something','anything'],
                answer   : 'anything'
            },
            {
                num      : 3,
                question : "I am bored, there is ___ to do here.",
                options  : ['everything','nothing','something','anything'],
                answer   : 'nothing'
            },
            {
                num      : 4,
                question : "I can't find my keys ___!",
                options  : ['anywhere','somewhere','nowhere','everywhere'],
                answer   : 'anywhere'
            },
            {
                num      : 5,
                question : "___ at the party had a great time.",
                options  : ['Anybody','Somebody','Everyone','All'],
                answer   : 'Everyone'
            },
            {
                num      : 6,
                question : "Is there ___ in that bag?",
                options  : ['nothing','anything','something','none'],
                answer   : 'anything'
            },
            {
                num      : 7,
                question : "Are there ___ lemons? No, there are none.",
                options  : ['some','none','no','any'],
                answer   : 'any'
            },
            {
                num      : 8,
                question : "I have two children. ___ play tennis.",
                options  : ['Both','Two','All','Some'],
                answer   : 'Both'
            },
        ],
        'relative-and-indefinite-pronouns' :[
            {
                num      : 1,
                question : 'I have a new job ___ pays very well.',
                options  : ['where','that','who','whose'],
                answer   : 'that'
            },
            {
                num      : 2,
                question : 'This is the school ___ my sister works.',
                options  : ['that','which','who','where'],
                answer   : 'where'
            },
            {
                num      : 3,
                question : 'There is ___ you can do.',
                options  : ['nothing','anything','none','neither'],
                answer   : 'nothing'
            },
            {
                num      : 4,
                question : 'Brian, ___ is my best student, is going to study in England next year.',
                options  : ['whose','that','who','which'],
                answer   : 'who'
            },
            {
                num      : 5,
                question : 'May I have ___ glass of water.',
                options  : ['another','other','more','some'],
                answer   : 'another'
            },
            {
                num      : 6,
                question : 'Is there ___ in the classroom?',
                options  : ['none','somebody','anybody','someone'],
                answer   : 'anybody'
            },
            {
                num      : 7,
                question : '___ is coming to the party',
                options  : ['All','Everybody','You','Anybody'],
                answer   : 'Everybody'
            },
        ],
        'intensifiers-and-mitigators' :[
            {
                num      : 1,
                question : 'You are ___ the best friend a person could have.',
                options  : ['much','by far','a great deal','highly'],
                answer   : 'by far'
            },
            {
                num      : 2,
                question : 'There were some clouds, but overall it was a ___ nice day.',
                options  : ['slightly','a bit','pretty','highly'],
                answer   : 'pretty'
            },
            {
                num      : 3,
                question : 'The soup was ___ hoy. We had to wait 15 minutes before we could eat it.',
                options  : ['extremely','amazingly','enough','absolutely'],
                answer   : 'extremely'
            },
            {
                num      : 4,
                question : 'You are only ___ faster than me.',
                options  : ['by far','easily','rather','slightly'],
                answer   : 'slightly'
            },
            {
                num      : 5,
                question : 'Success is ___ probable.',
                options  : ['seriously','really','highly','remarkably'],
                answer   : 'highly'
            },
            {
                num      : 6,
                question : 'You are a ___ good friend.',
                options  : ['terribly','very','highly','absolutely'],
                answer   : 'very'
            },
            {
                num      : 7,
                question : 'One person was ___ injured in the accident.',
                options  : ['amazingly','absolutely','totally','seriously'],
                answer   : 'seriously'
            },
            {
                num      : 8,
                question : 'This gift is ___ perfect! I love it!',
                options  : ['absolutely','very','slightly','highly'],
                answer   : 'absolutely'
            },
        ]
    },
    

    avanzado : {
        'present-perfect' :[
            {
                num      : 1,
                question : "I ___ walked in the door. Can I call you later?",
                options  : ['already','just','still','yet'],
                answer   : 'just'
            },
            {
                num      : 2,
                question : "We are ___ rehearsing for the concert.",
                options  : ['already','just','still','yet'],
                answer   : 'still'
            },
            {
                num      : 3,
                question : "Thanks for the invitation, but I have ___ seen that film.",
                options  : ['already','just','still','yet'],
                answer   : 'already'
            },
            {
                num      : 4,
                question : "Have you gone to the store ___?",
                options  : ['already','just','still','yet'],
                answer   : 'yet'
            },
            {
                num      : 5,
                question : "You ___ started that new job and you are already complaining.",
                options  : ['already','just','still','yet'],
                answer   : 'just'
            },
            {
                num      : 6,
                question : "They hurried to the store, but it was ___ closed.",
                options  : ['already','just','still','yet'],
                answer   : 'already'
            },
            {
                num      : 7,
                question : "Are you ___ dating Jim?",
                options  : ['already','just','still','yet'],
                answer   : 'still'
            },
            {
                num      : 8,
                question : "Michael hasn't paid me all the money he owes me ___.",
                options  : ['already','just','still','yet'],
                answer   : 'yet'
            },
            {
                num      : 9,
                question : "Michael ___ hasn't paid me all the money he owes me.",
                options  : ['already','just','still','yet'],
                answer   : 'still'
            },
            {
                num      : 10,
                question : "Michael said he ___ paid you the money.",
                options  : ['already','just','still','yet'],
                answer   : 'already'
            },
        ],
        'for/since/ago' :[
            {
                num      : 1,
                question : "We have been working ___ 8 o'clock this morning.",
                options  : ['for','since','ago'],
                answer   : 'since'
            },
            {
                num      : 2,
                question : "They played football ___ three hours yesterday afternoon.",
                options  : ['for','since','ago'],
                answer   : 'for'
            },
            {
                num      : 3,
                question : "Neil has been sleeping ___ hours.",
                options  : ['for','since','ago'],
                answer   : 'for'
            },
            {
                num      : 4,
                question : "I learned to drive fifteen years ___.",
                options  : ['for','since','ago'],
                answer   : 'ago'
            },
            {
                num      : 5,
                question : "The children have been studying ___ this morning.",
                options  : ['for','since','ago'],
                answer   : 'since'
            },
            {
                num      : 6,
                question : "My parents went to New York City two years ___.",
                options  : ['for','since','ago'],
                answer   : 'ago'
            },
            {
                num      : 7,
                question : "I have been tired ___ last week.",
                options  : ['for','since','ago'],
                answer   : 'since'
            },
            {
                num      : 8,
                question : "She always talks on the phone ___ hours with her sister.",
                options  : ['for','since','ago'],
                answer   : 'for'
            },
            {
                num      : 9,
                question : "We have been attending the annual conference every year ___ 2005.",
                options  : ['for','since','ago'],
                answer   : 'since'
            },
            {
                num      : 10,
                question : "He has taught English at the academy ___ 8 years now.",
                options  : ['for','since','ago'],
                answer   : 'for'
            },
        ],
        'modal-perfects' :[
            {
                num      : 1,
                question : "You went to Moscow in February? It ___ have been cold!",
                options  : ['must','could','can'],
                answer   : 'must'
            },
            {
                num      : 2,
                question : "We ___ have stayed home. That movie was terrible!",
                options  : ['will','must','should'],
                answer   : 'should'
            },
            {
                num      : 3,
                question : "It ___ not have been the best cake you ever made, but it was still pretty good.",
                options  : ['should','may','can'],
                answer   : 'may'
            },
            {
                num      : 4,
                question : "It was bad, but it ___ have been worse!",
                options  : ['could','will','must'],
                answer   : 'could'
            },
            {
                num      : 5,
                question : "What a great day! I ___ not have asked for more.",
                options  : ['must','could','may'],
                answer   : 'could'
            },
            {
                num      : 6,
                question : "The dog just got out, it ___ have gone far.",
                options  : ['must',"wouldn't have","can't have"],
                answer   : "can't have"
            },
            {
                num      : 7,
                question : "You went to China? That ___ have been exciting!",
                options  : ['may',"must","should"],
                answer   : "must"
            },
            {
                num      : 8,
                question : "You ___ have brought a jacket. It's so cold tonight!",
                options  : ['should',"may","will"],
                answer   : "should"
            },
            {
                num      : 9,
                question : "If he had been in the competition he ___ have been the winner.",
                options  : ['will',"might","ought to"],
                answer   : "might"
            },
        ]
    }
    

}
