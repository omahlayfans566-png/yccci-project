/**
 * YCCCI Complete Prayer Database
 * Full authentic Catholic prayers organized by category
 * Sources: Traditional Catholic prayers, public domain, Church-approved texts
 */
const PRAYER_DB = {
  categories: {
    'morning': { name: 'Morning Prayers', icon: 'sunrise', order: 1 },
    'evening': { name: 'Evening Prayers', icon: 'moon', order: 2 },
    'daily-offering': { name: 'Daily Offering', icon: 'heart', order: 3 },
    'angelus': { name: 'Angelus & Regina Caeli', icon: 'prayer', order: 4 },
    'rosary': { name: 'Holy Rosary', icon: 'rosary', order: 5 },
    'divine-mercy': { name: 'Divine Mercy', icon: 'mercy', order: 6 },
    'stations': { name: 'Stations of the Cross', icon: 'cross', order: 7 },
    'litanies': { name: 'Litanies', icon: 'list', order: 8 },
    'acts': { name: 'Acts of Faith, Hope & Love', icon: 'flame', order: 9 },
    'contrition': { name: 'Act of Contrition', icon: 'tear', order: 10 },
    'consecration': { name: 'Consecration Prayers', icon: 'offering', order: 11 },
    'eucharistic': { name: 'Eucharistic Prayers', icon: 'host', order: 12 },
    'marian': { name: 'Marian Prayers', icon: 'mary', order: 13 },
    'deliverance': { name: 'Deliverance Prayers', icon: 'shield', order: 14 },
    'family': { name: 'Family Prayers', icon: 'family', order: 15 },
    'healing': { name: 'Healing Prayers', icon: 'healing', order: 16 },
    'protection': { name: 'Protection Prayers', icon: 'armor', order: 17 },
    'saints': { name: 'Saints Prayers', icon: 'saint', order: 18 },
    'faithful-departed': { name: 'Prayers for the Dead', icon: 'candle', order: 19 },
    'thanksgiving': { name: 'Thanksgiving', icon: 'gratitude', order: 20 },
    'blessings': { name: 'Blessings', icon: 'blessing', order: 21 },
    'devotions': { name: 'Catholic Devotions', icon: 'devotion', order: 22 }
  },

  prayers: {
    // Morning Prayers
    'morning-offering': {
      id: 'morning-offering',
      title: 'Morning Offering',
      category: 'morning',
      description: 'Offer the entire day to God through the Sacred Heart of Jesus.',
      content: `<h2>Morning Offering</h2>
<p>O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world. I offer them for all the intentions of Your Sacred Heart: the salvation of souls, reparation for sins, the reunion of all Christians, and in particular for the intentions of the Holy Father this month and this day. Amen.</p>
<p><em>Indulgenced by Pope Pius IX, 1866</em></p>`
    },
    'prayer-st-michael-morning': {
      id: 'prayer-st-michael-morning',
      title: 'Prayer to St. Michael the Archangel',
      category: 'morning',
      description: 'Daily protection prayer composed by Pope Leo XIII.',
      content: `<h2>Prayer to St. Michael the Archangel</h2>
<p>St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Host, by the power of God, thrust into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.</p>
<p><em>Composed by Pope Leo XIII</em></p>`
    },
    'morning-prayer-traditional': {
      id: 'morning-prayer-traditional',
      title: 'Traditional Morning Prayer',
      category: 'morning',
      description: 'A traditional Catholic morning prayer to begin the day.',
      content: `<h2>Traditional Morning Prayer</h2>
<p>O my God, I adore You and I love You with all my heart. I thank You for having created me, made me a Christian, and preserved me during this past night. I offer You all the thoughts, words, actions, and sufferings of this day. May they be according to Your holy will and for Your greater glory. I beseech You to keep me from sin and from all that may lead me to sin. I resolve to avoid all occasions of sin and to practice the virtues of our Lord Jesus Christ. Amen.</p>
<p>Our Father... Hail Mary... I Believe... Glory Be...</p>`
    },
    'prayer-to-sacred-heart-morning': {
      id: 'prayer-to-sacred-heart-morning',
      title: 'Morning Consecration to the Sacred Heart',
      category: 'morning',
      description: 'Consecrate the new day to the Sacred Heart of Jesus.',
      content: `<h2>Morning Consecration to the Sacred Heart</h2>
<p>Sacred Heart of Jesus, I consecrate to You this new day. May all my thoughts, words, and actions be directed to Your greater glory. Grant me the grace to imitate Your virtues: Your humility, patience, charity, and obedience. Help me to accept with love all the joys and sorrows, successes and failures, pleasures and pains of this day, uniting them with Your own Sacred Heart in the Holy Sacrifice of the Mass. I place all my hopes and fears, my desires and disappointments, my plans and projects into Your pierced hands. Sacred Heart of Jesus, I trust in You. Amen.</p>`
    },
    'prayer-to-holy-spirit-morning': {
      id: 'prayer-to-holy-spirit-morning',
      title: 'Morning Prayer to the Holy Spirit',
      category: 'morning',
      description: 'Invoke the Holy Spirit at the beginning of each day.',
      content: `<h2>Morning Prayer to the Holy Spirit</h2>
<p>Come, Holy Spirit, fill my heart and kindle in me the fire of Your love. Send forth Your Spirit and I shall be created, and You shall renew the face of the earth. O God, who by the light of the Holy Spirit did instruct the hearts of the faithful, grant that by the same Holy Spirit I may be truly wise and ever rejoice in His consolation. Through Christ our Lord. Amen.</p>
<p>Holy Spirit, guide me today in all my thoughts, words, and deeds. Enlighten my mind to know Your will. Strengthen my will to do Your will. Give me the courage to witness to Christ in all I do. Come, Holy Spirit, come. Amen.</p>`
    },
    'prayer-to-mary-morning': {
      id: 'prayer-to-mary-morning',
      title: 'Morning Prayer to the Blessed Virgin Mary',
      category: 'morning',
      description: 'Begin the day under the maternal protection of Mary.',
      content: `<h2>Morning Prayer to the Blessed Virgin Mary</h2>
<p>O Mary, my Mother, I give myself entirely to you this day. Protect me under your mantle and keep me from all sin. Obtain for me the grace to imitate your virtues: your humility, your purity, your obedience, and your love for God. Watch over my family and all those I love. Lead me to your Son, Jesus, and help me to follow Him faithfully today. O Mother of Perpetual Help, pray for me. Hail, Holy Queen... Amen.</p>`
    },
    'prayer-to-guardian-angel-morning': {
      id: 'prayer-to-guardian-angel-morning',
      title: 'Morning Prayer to Your Guardian Angel',
      category: 'morning',
      description: 'Commend yourself to the protection of your guardian angel.',
      content: `<h2>Morning Prayer to Your Guardian Angel</h2>
<p>Angel of God, my guardian dear, to whom God\'s love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.</p>
<p>My dear guardian angel, I thank God for giving you to me as a protector and guide. Watch over me this day. Protect me from all dangers of body and soul. Help me to avoid sin and to do what is pleasing to God. Intercede for me with God and obtain for me the grace to live this day in holiness. Amen.</p>`
    },
    'prayer-before-work': {
      id: 'prayer-before-work',
      title: 'Prayer Before Work',
      category: 'morning',
      description: 'Offer your daily work to God.',
      content: `<h2>Prayer Before Work</h2>
<p>O Lord Jesus Christ, I offer You all the work I shall do this day. Grant that I may perform it diligently, conscientiously, and in union with Your own work on earth. Give me the grace to work not for my own glory but for Yours, to seek not my own advantage but the good of others, and to find in my labor a means of growing closer to You. Through Christ our Lord. Amen.</p>`
    },

    // Evening Prayers
    'night-prayer-traditional': {
      id: 'night-prayer-traditional',
      title: 'Traditional Night Prayer',
      category: 'evening',
      description: 'End the day with gratitude and trust in God.',
      content: `<h2>Traditional Night Prayer</h2>
<p>O my God, I adore You and I love You with all my heart. I thank You for having created me, made me a Christian, and preserved me during this day. I ask Your pardon for all the sins I have committed this day in thought, word, deed, and omission. I offer my sleep and all the moments of this night to You. Protect me from all dangers and from the assaults of the devil. May the Blessed Virgin Mary, my guardian angel, and all the saints intercede for me. Into Your hands, O Lord, I commend my spirit. Amen.</p>
<p>Our Father... Hail Mary... I Believe... Glory Be...</p>`
    },
    'examination-of-conscience': {
      id: 'examination-of-conscience',
      title: 'Examination of Conscience (Evening)',
      category: 'evening',
      description: 'A brief examination of conscience before retiring.',
      content: `<h2>Examination of Conscience</h2>
<p><strong>Place yourself in the presence of God.</strong><br>O my God, I believe that You are here present. I adore You with my whole heart. Enlighten my mind and give me the grace to know my sins.</p>
<p><strong>Thanksgiving.</strong><br>I thank You, O God, for all the graces You have given me today, and particularly for...</p>
<p><strong>Examination.</strong><br>What sins have I committed today in thought, word, deed, or omission?<br><em>Review the hours of the day: thoughts against charity, purity, truth; words spoken unkindly, rashly, falsely; deeds done uncharitably, impurely, dishonestly; duties neglected.</em></p>
<p><strong>Contrition.</strong><br>O my God, I am heartily sorry for having offended You. I detest all my sins because I fear the loss of heaven and the pains of hell, but most of all because they offend You, my God, who are all good and deserving of all my love. I firmly resolve, with the help of Your grace, to confess my sins, to do penance, and to amend my life. Amen.</p>
<p><strong>Act of Hope.</strong><br>O my God, relying on Your almighty power and infinite mercy and promises, I hope to obtain pardon of my sins, the grace of perseverance, and life everlasting, through the merits of Jesus Christ, my Lord and Redeemer. Amen.</p>
<p><strong>Act of Love.</strong><br>O my God, I love You above all things with my whole heart and soul, because You are infinitely good and worthy of all love. I love my neighbor as myself for the love of You. I forgive all who have injured me and ask pardon of all whom I have injured. Amen.</p>`
    },
    'prayer-to-holy-family-night': {
      id: 'prayer-to-holy-family-night',
      title: 'Night Prayer to the Holy Family',
      category: 'evening',
      description: 'Entrust your family to the Holy Family at night.',
      content: `<h2>Night Prayer to the Holy Family</h2>
<p>Jesus, Mary, and Joseph, I give You my heart and my soul. Jesus, Mary, and Joseph, assist me in my last agony. Jesus, Mary, and Joseph, may I breathe forth my soul in peace with You. Amen.</p>
<p>Holy Family of Nazareth, protect our families. Watch over our homes, guard our children, and bless our parents. Grant us the grace to live in harmony and love, following the example of the Holy Family. As we retire for the night, we place ourselves under your protection. Keep us safe from all harm and grant us peaceful rest. Amen.</p>`
    },
    'prayer-before-sleep': {
      id: 'prayer-before-sleep',
      title: 'Prayer Before Sleep',
      category: 'evening',
      description: 'Commend your soul to God before sleeping.',
      content: `<h2>Prayer Before Sleep</h2>
<p>O Lord Jesus Christ, meek and humble of heart, I commend myself to Your loving care this night. Forgive me my sins, and grant me peaceful rest. Watch over my family and loved ones. Protect us from all harm. If I should die before I wake, receive my soul into Your merciful hands. May the Blessed Virgin Mary, my guardian angel, and all the saints watch over me. Into Your hands, O Lord, I commend my spirit. Amen.</p>`
    },

    // Daily Offering
    'daily-offering-classic': {
      id: 'daily-offering-classic',
      title: 'Classic Daily Offering',
      category: 'daily-offering',
      description: 'The traditional daily offering of the Apostleship of Prayer.',
      content: `<h2>Classic Daily Offering</h2>
<p>O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day for all the intentions of Your Sacred Heart, in union with the Holy Sacrifice of the Mass throughout the world, for the salvation of souls, the reparation of sins, the reunion of all Christians, and in particular for the intentions of the Holy Father this month and this day. Amen.</p>`
    },
    'offering-of-works': {
      id: 'offering-of-works',
      title: 'Offering of All Works',
      category: 'daily-offering',
      description: 'Offer all your daily activities to God.',
      content: `<h2>Offering of All Works</h2>
<p>Eternal Father, I offer You all the prayers, works, joys, and sufferings of this day. I unite them with those of our Lord Jesus Christ and with the Holy Sacrifice of the Mass. I offer them in reparation for my sins and for the sins of all people. I offer them for all the intentions of the Sacred Heart of Jesus, and especially for the intentions recommended by our Holy Father the Pope. May the Holy Spirit guide me, and the Blessed Virgin Mary intercede for me. Amen.</p>`
    },
    'offering-to-sacred-heart': {
      id: 'offering-to-sacred-heart',
      title: 'Offering to the Sacred Heart',
      category: 'daily-offering',
      description: 'A daily offering specifically to the Sacred Heart.',
      content: `<h2>Offering to the Sacred Heart</h2>
<p>Sacred Heart of Jesus, I offer You all my thoughts, words, actions, and sufferings of this day. Grant that I may think only of You, speak only for You, act only according to Your will, and suffer patiently in union with You. Accept this offering for the glory of Your name and for the salvation of souls. Amen.</p>`
    },

    // Angelus & Regina Caeli
    'angelus': {
      id: 'angelus',
      title: 'The Angelus',
      category: 'angelus',
      description: 'The traditional Angelus prayer recalling the Incarnation.',
      content: `<h2>The Angelus</h2>
<p><strong>V.</strong> The Angel of the Lord declared unto Mary.<br>
<strong>R.</strong> And she conceived of the Holy Spirit.</p>
<p><em>Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</em></p>
<p><strong>V.</strong> Behold the handmaid of the Lord.<br>
<strong>R.</strong> Be it done unto me according to Your word.</p>
<p><em>Hail Mary...</em></p>
<p><strong>V.</strong> And the Word was made flesh.<br>
<strong>R.</strong> And dwelt among us.</p>
<p><em>Hail Mary...</em></p>
<p><strong>V.</strong> Pray for us, O holy Mother of God.<br>
<strong>R.</strong> That we may be made worthy of the promises of Christ.</p>
<p><em>Let us pray:</em> Pour forth, we beseech You, O Lord, Your grace into our hearts, that we, to whom the Incarnation of Christ Your Son was made known by the message of an Angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ our Lord. Amen.</p>
<p><strong>Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.</strong></p>
<p><em>Traditionally recited at 6:00 AM, 12:00 PM, and 6:00 PM</em></p>`
    },
    'regina-caeli': {
      id: 'regina-caeli',
      title: 'Regina Caeli (Queen of Heaven)',
      category: 'angelus',
      description: 'The Regina Caeli replaces the Angelus during Eastertide.',
      content: `<h2>Regina Caeli</h2>
<p><strong>Queen of Heaven, rejoice, alleluia.</strong><br>
For He whom you did merit to bear, alleluia.<br>
Has risen as He said, alleluia.<br>
Pray for us to God, alleluia.</p>
<p><strong>V.</strong> Rejoice and be glad, O Virgin Mary, alleluia.<br>
<strong>R.</strong> For the Lord has truly risen, alleluia.</p>
<p><em>Let us pray:</em> O God, who gave joy to the world through the Resurrection of Your Son our Lord Jesus Christ, grant, we beseech You, that through the intercession of the Virgin Mary, His Mother, we may obtain the joys of everlasting life. Through the same Christ our Lord. Amen.</p>
<p><em>Recited from Easter Sunday through Pentecost instead of the Angelus</em></p>`
    },
    'angelus-simple': {
      id: 'angelus-simple',
      title: 'Simplified Angelus',
      category: 'angelus',
      description: 'A shorter version of the Angelus for quick recitation.',
      content: `<h2>Simplified Angelus</h2>
<p>The Angel of the Lord declared unto Mary, and she conceived of the Holy Spirit. Hail Mary...</p>
<p>Behold the handmaid of the Lord. Be it done unto me according to Your word. Hail Mary...</p>
<p>And the Word was made flesh and dwelt among us. Hail Mary...</p>
<p>Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ.</p>
<p>Let us pray: Pour forth, we beseech You, O Lord, Your grace into our hearts, that we to whom the Incarnation of Christ Your Son was made known by the message of an Angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ our Lord. Amen.</p>`
    },

    // Holy Rosary
    'rosary-full': {
      id: 'rosary-full',
      title: 'The Holy Rosary (Complete)',
      category: 'rosary',
      description: 'The complete Rosary with all mysteries.',
      content: `<h2>The Holy Rosary</h2>
<h3>Sign of the Cross and Opening Prayers</h3>
<p>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</p>
<p><strong>The Apostles\' Creed</strong><br>
I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, His only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into hell. On the third day He rose again from the dead. He ascended into heaven and is seated at the right hand of God the Father almighty. From there He will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.</p>
<p><strong>Our Father</strong><br>
Our Father, who art in heaven, hallowed be Thy name. Thy kingdom come. Thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us, and lead us not into temptation, but deliver us from evil. Amen.</p>
<p><strong>Hail Mary (3 times)</strong><br>
Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</p>
<p><strong>Glory Be</strong><br>
Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
<p><strong>Fatima Prayer</strong><br>
O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those who are in most need of Your mercy. Amen.</p>

<h3>The Joyful Mysteries (Mondays and Saturdays)</h3>
<p><strong>First Joyful Mystery: The Annunciation</strong><br>
Fruit of the Mystery: Humility<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Second Joyful Mystery: The Visitation</strong><br>
Fruit of the Mystery: Love of Neighbor<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Third Joyful Mystery: The Nativity</strong><br>
Fruit of the Mystery: Poverty, Detachment from the World<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Fourth Joyful Mystery: The Presentation</strong><br>
Fruit of the Mystery: Obedience<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Fifth Joyful Mystery: The Finding of Jesus in the Temple</strong><br>
Fruit of the Mystery: Piety, Joy in Finding Jesus<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>

<h3>The Sorrowful Mysteries (Tuesdays and Fridays)</h3>
<p><strong>First Sorrowful Mystery: The Agony in the Garden</strong><br>
Fruit of the Mystery: Contrition for Sin<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Second Sorrowful Mystery: The Scourging at the Pillar</strong><br>
Fruit of the Mystery: Purity<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Third Sorrowful Mystery: The Crowning with Thorns</strong><br>
Fruit of the Mystery: Moral Courage<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Fourth Sorrowful Mystery: The Carrying of the Cross</strong><br>
Fruit of the Mystery: Patience in Trials<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Fifth Sorrowful Mystery: The Crucifixion</strong><br>
Fruit of the Mystery: Perseverance, Salvation<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>

<h3>The Glorious Mysteries (Wednesdays and Sundays)</h3>
<p><strong>First Glorious Mystery: The Resurrection</strong><br>
Fruit of the Mystery: Faith<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Second Glorious Mystery: The Ascension</strong><br>
Fruit of the Mystery: Hope, Desire for Heaven<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Third Glorious Mystery: The Descent of the Holy Spirit</strong><br>
Fruit of the Mystery: Wisdom, Love of God<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Fourth Glorious Mystery: The Assumption</strong><br>
Fruit of the Mystery: Devotion to Mary<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Fifth Glorious Mystery: The Coronation of the Blessed Virgin</strong><br>
Fruit of the Mystery: Eternal Happiness<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>

<h3>The Luminous Mysteries (Thursdays)</h3>
<p><strong>First Luminous Mystery: The Baptism of Jesus in the Jordan</strong><br>
Fruit of the Mystery: Openness to the Holy Spirit<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Second Luminous Mystery: The Wedding at Cana</strong><br>
Fruit of the Mystery: To Jesus through Mary<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Third Luminous Mystery: The Proclamation of the Kingdom</strong><br>
Fruit of the Mystery: Repentance, Trust in God<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Fourth Luminous Mystery: The Transfiguration</strong><br>
Fruit of the Mystery: Desire for Holiness<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>
<p><strong>Fifth Luminous Mystery: The Institution of the Eucharist</strong><br>
Fruit of the Mystery: Eucharistic Adoration<br>
<em>Our Father... 10 Hail Marys... Glory Be... Fatima Prayer</em></p>

<h3>Concluding Prayers</h3>
<p><strong>Hail, Holy Queen</strong><br>
Hail, holy Queen, Mother of mercy, our life, our sweetness, and our hope. To you do we cry, poor banished children of Eve. To you do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, your eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of your womb, Jesus. O clement, O loving, O sweet Virgin Mary.</p>
<p><strong>Prayer after the Rosary</strong><br>
V. Pray for us, O holy Mother of God.<br>
R. That we may be made worthy of the promises of Christ.</p>
<p><em>Let us pray:</em> O God, whose only-begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech You, that meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise. Through the same Christ our Lord. Amen.</p>`
    },

    // Divine Mercy
    'divine-mercy-chaplet': {
      id: 'divine-mercy-chaplet',
      title: 'Divine Mercy Chaplet',
      category: 'divine-mercy',
      description: 'The Chaplet of Divine Mercy given by Jesus to St. Faustina.',
      content: `<h2>Divine Mercy Chaplet</h2>
<p><em>Using a rosary, begin with:</em></p>
<p><strong>Optional Opening Prayers:</strong></p>
<p>You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us. (3 times) O Blood and Water, which gushed forth from the Heart of Jesus as a fount of mercy for us, I trust in You! (3 times)</p>
<p><strong>Our Father...</strong> Our Father, who art in heaven, hallowed be Thy name. Thy kingdom come. Thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us, and lead us not into temptation, but deliver us from evil. Amen.</p>
<p><strong>Hail Mary...</strong> Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</p>
<p><strong>The Apostles\' Creed...</strong> I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, His only Son, our Lord...</p>
<p><strong>On the Our Father beads:</strong> Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, our Lord Jesus Christ, in atonement for our sins and those of the whole world.</p>
<p><strong>On the Hail Mary beads (10 times):</strong> For the sake of His sorrowful Passion, have mercy on us and on the whole world.</p>
<p><em>(Repeat for all five decades)</em></p>
<p><strong>Concluding Prayer (3 times):</strong> Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.</p>
<p><strong>Optional Closing Prayer:</strong> Eternal God, in whom mercy is endless and the treasury of compassion inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself. Amen.</p>`
    },
    'divine-mercy-novena': {
      id: 'divine-mercy-novena',
      title: 'Divine Mercy Novena (St. Faustina)',
      category: 'divine-mercy',
      description: 'The 9-day novena given by Jesus to St. Faustina, beginning Good Friday.',
      content: `<h2>Divine Mercy Novena</h2>
<p>Jesus said to St. Faustina: "I desire that during these nine days you bring souls to the fountain of My mercy, that they may draw strength and refreshment and whatever grace they need in the hardships of life, especially at the hour of death."</p>
<p><strong>Day 1 (Good Friday) - All mankind, especially sinners:</strong><br>
"Today bring to Me all mankind, especially all sinners, and immerse them in the ocean of My mercy."<br>
Most Merciful Jesus, whose very nature is compassion and forgiveness, I bring before You all mankind, especially sinners. Immerse them in the ocean of Your mercy. I trust in You.<br>
<em>Our Father... Hail Mary... Glory Be... (Then pray the Chaplet of Divine Mercy)</em></p>
<p><strong>Day 2 (Holy Saturday) - The souls of priests and religious:</strong><br>
"Today bring to Me the souls of priests and religious, and immerse them in My unfathomable mercy."<br>
Most Merciful Jesus, from whom comes all that is good, I bring before You the souls of priests and religious. Grant them the grace to be faithful shepherds and witnesses of Your mercy. I trust in You.</p>
<p><strong>Day 3 (Easter Sunday) - All devout and faithful souls:</strong><br>
"Today bring to Me all devout and faithful souls, and immerse them in the ocean of My mercy."<br>
Most Merciful Jesus, I bring before You all devout and faithful souls. Strengthen their faith, increase their love, and grant them the grace to persevere in holiness. I trust in You.</p>
<p><strong>Day 4 (Easter Monday) - Those who do not know God:</strong><br>
"Today bring to Me those who do not know God, and those who do not yet know Me."<br>
Most Merciful Jesus, I bring before You those who do not know You. Enlighten their minds with the light of faith and draw them to Your Sacred Heart. I trust in You.</p>
<p><strong>Day 5 (Easter Tuesday) - The souls who have separated from the Church:</strong><br>
"Today bring to Me the souls of separated brethren, and immerse them in the ocean of My mercy."<br>
Most Merciful Jesus, I bring before You the souls of our separated brethren. Heal the wounds of division and lead all Christians to unity in Your truth and love. I trust in You.</p>
<p><strong>Day 6 (Easter Wednesday) - The meek and humble souls:</strong><br>
"Today bring to Me the meek and humble souls and the souls of little children, and immerse them in My mercy."<br>
Most Merciful Jesus, I bring before You the meek, humble, and little ones. Grant them the grace to grow in holiness and to be a source of blessing to the world. I trust in You.</p>
<p><strong>Day 7 (Easter Thursday) - Those who venerate My mercy:</strong><br>
"Today bring to Me the souls who especially venerate and glorify My mercy, and immerse them in My mercy."<br>
Most Merciful Jesus, I bring before You all who venerate Your mercy. Protect them, strengthen them, and fill them with the joy of Your love. I trust in You.</p>
<p><strong>Day 8 (Easter Friday) - The souls in Purgatory:</strong><br>
"Today bring to Me the souls who are in the prison of Purgatory, and immerse them in the ocean of My mercy."<br>
Most Merciful Jesus, I bring before You the holy souls in Purgatory. Grant them eternal rest and let perpetual light shine upon them. I trust in You.</p>
<p><strong>Day 9 (Easter Saturday) - The lukewarm souls:</strong><br>
"Today bring to Me the souls who have become lukewarm, and immerse them in the abyss of My mercy."<br>
Most Merciful Jesus, I bring before You the lukewarm souls. Rekindle in them the fire of Your love and draw them back to the warmth of Your Sacred Heart. I trust in You.</p>`
    },
    'hour-of-mercy': {
      id: 'hour-of-mercy',
      title: 'The Hour of Mercy (3:00 PM)',
      category: 'divine-mercy',
      description: 'The prayer for the Hour of Mercy as revealed to St. Faustina.',
      content: `<h2>The Hour of Mercy</h2>
<p>Jesus said to St. Faustina: "At three o\'clock, implore My mercy, especially for sinners; and if only for a brief moment, immerse yourself in My Passion, particularly in My abandonment at the moment of agony. This is the hour of great mercy for the whole world."</p>
<p><strong>You can pray:</strong></p>
<p>You expired, O Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us.</p>
<p><strong>O Blood and Water, which gushed forth from the Heart of Jesus as a fountain of mercy for us, I trust in You. (3 times)</strong></p>
<p><em>Then pray the Chaplet of Divine Mercy or simply say:</em></p>
<p>Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, our Lord Jesus Christ, in atonement for our sins and those of the whole world.</p>
<p>For the sake of His sorrowful Passion, have mercy on us and on the whole world. (3 times)</p>
<p>Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world. (3 times)</p>`
    },

    // Stations of the Cross
    'stations-cross-traditional': {
      id: 'stations-cross-traditional',
      title: 'Stations of the Cross (Traditional)',
      category: 'stations',
      description: 'The traditional Way of the Cross with St. Alphonsus Liguori.',
      content: `<h2>Stations of the Cross</h2>
<p><strong>Opening Prayer:</strong><br>
My Lord Jesus Christ, You have made this journey to die for me with unspeakable love; and I have so many times ungratefully abandoned You. But now I love You with all my heart; and because I love You, I am sincerely sorry for having offended You. Pardon me, my God, and permit me to accompany You on this journey. You go to die for love of me; I will, my beloved Redeemer, die for love of You. My Jesus, I will live and die always united to You.</p>
<p><strong>Station I: Jesus is Condemned to Death</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider how Jesus, after having been scourged and crowned with thorns, was unjustly condemned by Pilate to die on the cross.<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You with all my heart. I am sorry for having offended You. Never permit me to offend You again. Grant that I may love You always; and then do with me what You will.</p>
<p><strong>Station II: Jesus Carries His Cross</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider how Jesus, in making this journey with the cross on His shoulders, thought of us, and offered for us to His Father the death He was about to suffer.<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You...</p>
<p><strong>Station III: Jesus Falls the First Time</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider this first fall of Jesus. Loss of blood from His scourging and crowning with thorns had so weakened Him that He could scarcely walk, and yet He carried the heavy cross on His shoulders. The soldiers struck Him rudely, and He fell under the heavy burden.<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You...</p>
<p><strong>Station IV: Jesus Meets His Sorrowful Mother</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider the meeting of the Son and the Mother on the way to Calvary. Jesus and Mary gazed at each other, and their looks became as so many arrows to wound those hearts that loved each other so tenderly.<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You...</p>
<p><strong>Station V: Simon Helps Jesus Carry the Cross</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider how the Jews, seeing that Jesus was about to expire from weakness, and fearing that He would die on the way when they wanted Him to die the shameful death of the cross, forced Simon of Cyrene to carry the cross behind Jesus.<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You...</p>
<p><strong>Station VI: Veronica Wipes the Face of Jesus</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider how the holy woman Veronica, seeing Jesus so afflicted, wiped His face with a cloth, and His image was miraculously impressed upon it.<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You...</p>
<p><strong>Station VII: Jesus Falls the Second Time</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider the second fall of Jesus under the cross. His weakness was extreme; the cruel executioners urged Him on, and He fell again.<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You...</p>
<p><strong>Station VIII: The Women of Jerusalem Weep for Jesus</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider how some pious women among the followers of Jesus wept with compassion at seeing Him in such a pitiable state. Jesus turned to them and said, "Daughters of Jerusalem, weep not for Me, but weep for yourselves and for your children."<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You...</p>
<p><strong>Station IX: Jesus Falls the Third Time</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider the third fall of Jesus. He was extremely weak; the cruelty of His executioners was excessive; and the weight of the cross was immense. He fell for the third time.<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You...</p>
<p><strong>Station X: Jesus is Stripped of His Garments</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider how Jesus was violently stripped of His garments by the executioners. His wounds were reopened. He was given gall to drink. He suffered the shame of being stripped naked before the crowd.<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You...</p>
<p><strong>Station XI: Jesus is Nailed to the Cross</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider how Jesus, after being stripped, was laid upon the cross. The executioners drove nails through His hands and feet. He extended His arms to embrace the world in love.<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You...</p>
<p><strong>Station XII: Jesus Dies on the Cross</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider how Jesus, after three hours of agony, died on the cross. He bowed His head and gave up His spirit. The earth quaked, the rocks split, the veil of the Temple was torn.<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You...</p>
<p><strong>Station XIII: Jesus is Taken Down from the Cross</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider how Joseph of Arimathea and Nicodemus took Jesus down from the cross, and His Blessed Mother received Him in her arms. She held His lifeless body, covered with wounds.<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You...</p>
<p><strong>Station XIV: Jesus is Laid in the Tomb</strong><br>
<em>V. We adore You, O Christ, and we bless You.</em><br>
<em>R. Because by Your holy cross You have redeemed the world.</em><br>
Consider how Jesus was laid in the tomb. The disciples wrapped His body in a clean shroud and placed it in the tomb. Mary and the women watched from a distance.<br>
<em>Our Father... Hail Mary... Glory Be...</em><br>
My Jesus, I love You...</p>
<p><strong>Concluding Prayer:</strong><br>
Almighty and eternal God, You have redeemed us through the passion and death of Your Son. Grant that by meditating on these mysteries of our salvation, we may carry in our hearts the dying of Jesus, and by Your grace, share in His resurrection. We ask this through Christ our Lord. Amen.</p>`
    },

    // Litanies
    'litany-saints': {
      id: 'litany-saints',
      title: 'Litany of the Saints',
      category: 'litanies',
      description: 'The ancient Litany of the Saints, used in the Easter Vigil and other solemn occasions.',
      content: `<h2>Litany of the Saints</h2>
<p>Lord, have mercy on us. Christ, have mercy on us. Lord, have mercy on us. Christ, hear us. Christ, graciously hear us.</p>
<p>God, the Father of heaven, <em>have mercy on us.</em><br>
God the Son, Redeemer of the world, <em>have mercy on us.</em><br>
God the Holy Spirit, <em>have mercy on us.</em><br>
Holy Trinity, one God, <em>have mercy on us.</em></p>
<p>Holy Mary, <em>pray for us.</em><br>
Holy Mother of God, <em>pray for us.</em><br>
Holy Virgin of virgins, <em>pray for us.</em><br>
St. Michael, <em>pray for us.</em><br>
St. Gabriel, <em>pray for us.</em><br>
St. Raphael, <em>pray for us.</em><br>
All you holy Angels and Archangels, <em>pray for us.</em></p>
<p>St. John the Baptist, <em>pray for us.</em><br>
St. Joseph, <em>pray for us.</em><br>
All you holy Patriarchs and Prophets, <em>pray for us.</em></p>
<p>St. Peter, <em>pray for us.</em><br>
St. Paul, <em>pray for us.</em><br>
St. Andrew, <em>pray for us.</em><br>
St. James, <em>pray for us.</em><br>
St. John, <em>pray for us.</em><br>
St. Thomas, <em>pray for us.</em><br>
St. James, <em>pray for us.</em><br>
St. Philip, <em>pray for us.</em><br>
St. Bartholomew, <em>pray for us.</em><br>
St. Matthew, <em>pray for us.</em><br>
St. Simon, <em>pray for us.</em><br>
St. Thaddeus, <em>pray for us.</em><br>
St. Matthias, <em>pray for us.</em><br>
St. Barnabas, <em>pray for us.</em><br>
St. Luke, <em>pray for us.</em><br>
St. Mark, <em>pray for us.</em><br>
All you holy Apostles and Evangelists, <em>pray for us.</em><br>
All you holy Disciples of the Lord, <em>pray for us.</em></p>
<p>All you holy Innocents, <em>pray for us.</em></p>
<p>St. Stephen, <em>pray for us.</em><br>
St. Lawrence, <em>pray for us.</em><br>
St. Vincent, <em>pray for us.</em><br>
Sts. Fabian and Sebastian, <em>pray for us.</em><br>
Sts. John and Paul, <em>pray for us.</em><br>
Sts. Cosmas and Damian, <em>pray for us.</em><br>
Sts. Gervase and Protase, <em>pray for us.</em><br>
All you holy Martyrs, <em>pray for us.</em></p>
<p>St. Sylvester, <em>pray for us.</em><br>
St. Gregory, <em>pray for us.</em><br>
St. Ambrose, <em>pray for us.</em><br>
St. Augustine, <em>pray for us.</em><br>
St. Jerome, <em>pray for us.</em><br>
St. Athanasius, <em>pray for us.</em><br>
St. Basil, <em>pray for us.</em><br>
St. Martin, <em>pray for us.</em><br>
St. Nicholas, <em>pray for us.</em><br>
All you holy Bishops and Confessors, <em>pray for us.</em><br>
All you holy Doctors, <em>pray for us.</em></p>
<p>St. Anthony, <em>pray for us.</em><br>
St. Benedict, <em>pray for us.</em><br>
St. Bernard, <em>pray for us.</em><br>
St. Francis, <em>pray for us.</em><br>
St. Dominic, <em>pray for us.</em><br>
St. Thomas Aquinas, <em>pray for us.</em><br>
St. Ignatius, <em>pray for us.</em><br>
St. Francis Xavier, <em>pray for us.</em><br>
St. Vincent de Paul, <em>pray for us.</em><br>
St. John Vianney, <em>pray for us.</em><br>
All you holy Priests and Levites, <em>pray for us.<br>
All you holy Monks and Hermits, <em>pray for us.</em></p>
<p>St. Mary Magdalene, <em>pray for us.</em><br>
St. Agatha, <em>pray for us.</em><br>
St. Lucy, <em>pray for us.</em><br>
St. Agnes, <em>pray for us.</em><br>
St. Cecilia, <em>pray for us.</em><br>
St. Catherine, <em>pray for us.</em><br>
St. Anastasia, <em>pray for us.</em><br>
All you holy Virgins and Widows, <em>pray for us.</em></p>
<p>All you holy Saints of God, <em>intercede for us.</em></p>
<p>Be merciful, <em>spare us, O Lord.</em><br>
Be merciful, <em>graciously hear us, O Lord.</em></p>
<p>From all evil, <em>deliver us, O Lord.</em><br>
From all sin, <em>deliver us, O Lord.</em><br>
From Your wrath, <em>deliver us, O Lord.</em><br>
From a sudden and unprovided death, <em>deliver us, O Lord.</em><br>
From the snares of the devil, <em>deliver us, O Lord.</em><br>
From anger, hatred, and all ill-will, <em>deliver us, O Lord.</em><br>
From the spirit of fornication, <em>deliver us, O Lord.</em><br>
From lightning and tempest, <em>deliver us, O Lord.</em><br>
From the scourge of earthquake, <em>deliver us, O Lord.</em><br>
From plague, famine, and war, <em>deliver us, O Lord.</em><br>
From everlasting death, <em>deliver us, O Lord.</em></p>
<p>Through the mystery of Your holy Incarnation, <em>deliver us, O Lord.</em><br>
Through Your coming, <em>deliver us, O Lord.</em><br>
Through Your Nativity, <em>deliver us, O Lord.</em><br>
Through Your Baptism and holy fasting, <em>deliver us, O Lord.</em><br>
Through Your Cross and Passion, <em>deliver us, O Lord.</em><br>
Through Your Death and Burial, <em>deliver us, O Lord.</em><br>
Through Your holy Resurrection, <em>deliver us, O Lord.</em><br>
Through Your admirable Ascension, <em>deliver us, O Lord.</em><br>
Through the coming of the Holy Spirit, the Paraclete, <em>deliver us, O Lord.</em></p>
<p>In the day of judgment, <em>deliver us, O Lord.</em></p>
<p>We sinners, <em>we beseech You, hear us.</em><br>
That You would spare us, <em>we beseech You, hear us.</em><br>
That You would pardon us, <em>we beseech You, hear us.</em><br>
That You would bring us to true penance, <em>we beseech You, hear us.</em><br>
That You would govern and preserve Your holy Church, <em>we beseech You, hear us.</em><br>
That You would preserve the Apostolic See and all ecclesiastical orders in holy religion, <em>we beseech You, hear us.</em><br>
That You would humble the enemies of holy Church, <em>we beseech You, hear us.</em><br>
That You would give peace and true concord to all Christian kings and princes, <em>we beseech You, hear us.</em><br>
That You would grant peace and unity to all Christian people, <em>we beseech You, hear us.</em><br>
That You would call back to the unity of the Church all who have strayed, and lead to the light of the Gospel all unbelievers, <em>we beseech You, hear us.</em><br>
That You would strengthen and preserve us in Your holy service, <em>we beseech You, hear us.</em><br>
That You would lift up our minds to heavenly desires, <em>we beseech You, hear us.</em><br>
That You would render eternal blessings to all our benefactors, <em>we beseech You, hear us.</em><br>
That You would deliver our souls and those of our brethren, relations, and benefactors from eternal damnation, <em>we beseech You, hear us.</em><br>
That You would give and preserve the fruits of the earth, <em>we beseech You, hear us.</em><br>
That You would grant eternal rest to all the faithful departed, <em>we beseech You, hear us.</em><br>
That You would graciously hear us, <em>we beseech You, hear us.</em></p>
<p>Lamb of God, who takes away the sins of the world, <em>spare us, O Lord.</em><br>
Lamb of God, who takes away the sins of the world, <em>graciously hear us, O Lord.</em><br>
Lamb of God, who takes away the sins of the world, <em>have mercy on us.</em></p>
<p>Christ, hear us. Christ, graciously hear us.</p>
<p>Lord, have mercy on us. Christ, have mercy on us. Lord, have mercy on us.</p>
<p><em>Let us pray:</em> O God, who are the refuge of the poor, the strength of the weak, and the protection of those who call upon You in trouble, hear the prayers of Your Church and grant that what we ask faithfully we may obtain effectually. Through Christ our Lord. Amen.</p>`
    },
    'litany-loreto': {
      id: 'litany-loreto',
      title: 'Litany of Loreto (Litany of the Blessed Virgin)',
      category: 'litanies',
      description: 'The Litany of the Blessed Virgin Mary, approved by Pope Sixtus V in 1587.',
      content: `<h2>Litany of Loreto</h2>
<p>Lord, have mercy on us. Christ, have mercy on us. Lord, have mercy on us. Christ, hear us. Christ, graciously hear us.</p>
<p>God the Father of heaven, <em>have mercy on us.</em><br>
God the Son, Redeemer of the world, <em>have mercy on us.</em><br>
God the Holy Spirit, <em>have mercy on us.</em><br>
Holy Trinity, one God, <em>have mercy on us.</em></p>
<p>Holy Mary, <em>pray for us.</em><br>
Holy Mother of God, <em>pray for us.</em><br>
Holy Virgin of virgins, <em>pray for us.</em><br>
Mother of Christ, <em>pray for us.</em><br>
Mother of the Church, <em>pray for us.</em><br>
Mother of divine grace, <em>pray for us.</em><br>
Mother most pure, <em>pray for us.</em><br>
Mother most chaste, <em>pray for us.</em><br>
Mother inviolate, <em>pray for us.</em><br>
Mother undefiled, <em>pray for us.</em><br>
Mother most amiable, <em>pray for us.</em><br>
Mother most admirable, <em>pray for us.</em><br>
Mother of good counsel, <em>pray for us.</em><br>
Mother of our Creator, <em>pray for us.</em><br>
Mother of our Savior, <em>pray for us.</em></p>
<p>Virgin most prudent, <em>pray for us.</em><br>
Virgin most venerable, <em>pray for us.</em><br>
Virgin most renowned, <em>pray for us.</em><br>
Virgin most powerful, <em>pray for us.</em><br>
Virgin most merciful, <em>pray for us.</em><br>
Virgin most faithful, <em>pray for us.</em></p>
<p>Mirror of justice, <em>pray for us.</em><br>
Seat of wisdom, <em>pray for us.</em><br>
Cause of our joy, <em>pray for us.</em><br>
Spiritual vessel, <em>pray for us.</em><br>
Vessel of honor, <em>pray for us.</em><br>
Singular vessel of devotion, <em>pray for us.</em><br>
Mystical rose, <em>pray for us.</em><br>
Tower of David, <em>pray for us.</em><br>
Tower of ivory, <em>pray for us.</em><br>
House of gold, <em>pray for us.</em><br>
Ark of the covenant, <em>pray for us.</em><br>
Gate of heaven, <em>pray for us.</em><br>
Morning star, <em>pray for us.</em><br>
Health of the sick, <em>pray for us.</em><br>
Refuge of sinners, <em>pray for us.</em><br>
Comforter of the afflicted, <em>pray for us.</em><br>
Help of Christians, <em>pray for us.</em></p>
<p>Queen of Angels, <em>pray for us.</em><br>
Queen of Patriarchs, <em>pray for us.</em><br>
Queen of Prophets, <em>pray for us.</em><br>
Queen of Apostles, <em>pray for us.</em><br>
Queen of Martyrs, <em>pray for us.</em><br>
Queen of Confessors, <em>pray for us.</em><br>
Queen of Virgins, <em>pray for us.</em><br>
Queen of all Saints, <em>pray for us.</em><br>
Queen conceived without original sin, <em>pray for us.</em><br>
Queen assumed into heaven, <em>pray for us.</em><br>
Queen of the most holy Rosary, <em>pray for us.</em><br>
Queen of families, <em>pray for us.</em><br>
Queen of peace, <em>pray for us.</em></p>
<p>Lamb of God, who takes away the sins of the world, <em>spare us, O Lord.</em><br>
Lamb of God, who takes away the sins of the world, <em>graciously hear us, O Lord.</em><br>
Lamb of God, who takes away the sins of the world, <em>have mercy on us.</em></p>
<p>Pray for us, O holy Mother of God.<br>
That we may be made worthy of the promises of Christ.</p>
<p><em>Let us pray:</em> Grant us, Your servants, we beseech You, O Lord God, to enjoy perpetual health of mind and body; and by the glorious intercession of the Blessed Mary, ever Virgin, may we be delivered from present sorrow and obtain eternal joy. Through Christ our Lord. Amen.</p>`
    },
    'litany-st-joseph': {
      id: 'litany-st-joseph',
      title: 'Litany of St. Joseph',
      category: 'litanies',
      description: 'The Litany of St. Joseph, approved by Pope St. Pius X in 1909.',
      content: `<h2>Litany of St. Joseph</h2>
<p>Lord, have mercy on us. Christ, have mercy on us. Lord, have mercy on us. Christ, hear us. Christ, graciously hear us.</p>
<p>God the Father of heaven, <em>have mercy on us.</em><br>
God the Son, Redeemer of the world, <em>have mercy on us.</em><br>
God the Holy Spirit, <em>have mercy on us.</em><br>
Holy Trinity, one God, <em>have mercy on us.</em></p>
<p>Holy Mary, <em>pray for us.</em><br>
St. Joseph, <em>pray for us.</em><br>
Noble son of the House of David, <em>pray for us.</em><br>
Light of Patriarchs, <em>pray for us.</em><br>
Spouse of the Mother of God, <em>pray for us.</em><br>
Chaste guardian of the Virgin, <em>pray for us.</em><br>
Foster father of the Son of God, <em>pray for us.</em><br>
Diligent protector of Christ, <em>pray for us.</em><br>
Head of the Holy Family, <em>pray for us.</em><br>
Joseph most just, <em>pray for us.</em><br>
Joseph most chaste, <em>pray for us.</em><br>
Joseph most prudent, <em>pray for us.</em><br>
Joseph most strong, <em>pray for us.</em><br>
Joseph most obedient, <em>pray for us.</em><br>
Joseph most faithful, <em>pray for us.</em></p>
<p>Mirror of patience, <em>pray for us.</em><br>
Lover of poverty, <em>pray for us.</em><br>
Model of workers, <em>pray for us.</em><br>
Glory of domestic life, <em>pray for us.</em><br>
Guardian of virgins, <em>pray for us.</em><br>
Pillar of families, <em>pray for us.</em><br>
Comfort of the afflicted, <em>pray for us.</em><br>
Hope of the sick, <em>pray for us.</em><br>
Patron of the dying, <em>pray for us.</em><br>
Terror of demons, <em>pray for us.</em><br>
Protector of the holy Church, <em>pray for us.</em></p>
<p>Lamb of God, who takes away the sins of the world, <em>spare us, O Lord.</em><br>
Lamb of God, who takes away the sins of the world, <em>graciously hear us, O Lord.</em><br>
Lamb of God, who takes away the sins of the world, <em>have mercy on us.</em></p>
<p>He made him the lord of his household,<br>
And prince over all his possessions.</p>
<p><em>Let us pray:</em> O God, who in Your ineffable providence were pleased to choose St. Joseph to be the spouse of Your most holy Mother and the guardian of Your incarnate Son, grant that we may deserve to have him as our intercessor in heaven whom we venerate as our protector on earth. You who live and reign forever and ever. Amen.</p>`
    },
    'litany-sacred-heart': {
      id: 'litany-sacred-heart',
      title: 'Litany of the Sacred Heart',
      category: 'litanies',
      description: 'The Litany of the Sacred Heart of Jesus, approved by Pope Leo XIII.',
      content: `<h2>Litany of the Sacred Heart</h2>
<p>Lord, have mercy on us. Christ, have mercy on us. Lord, have mercy on us. Christ, hear us. Christ, graciously hear us.</p>
<p>God the Father of heaven, <em>have mercy on us.</em><br>
God the Son, Redeemer of the world, <em>have mercy on us.</em><br>
God the Holy Spirit, <em>have mercy on us.</em><br>
Holy Trinity, one God, <em>have mercy on us.</em></p>
<p>Heart of Jesus, Son of the eternal Father, <em>have mercy on us.</em><br>
Heart of Jesus, formed by the Holy Spirit in the womb of the Virgin Mother, <em>have mercy on us.</em><br>
Heart of Jesus, substantially united to the Word of God, <em>have mercy on us.</em><br>
Heart of Jesus, of infinite majesty, <em>have mercy on us.</em><br>
Heart of Jesus, sacred temple of God, <em>have mercy on us.</em><br>
Heart of Jesus, tabernacle of the Most High, <em>have mercy on us.</em><br>
Heart of Jesus, house of God and gate of heaven, <em>have mercy on us.</em><br>
Heart of Jesus, burning furnace of charity, <em>have mercy on us.</em><br>
Heart of Jesus, abode of justice and love, <em>have mercy on us.</em><br>
Heart of Jesus, full of goodness and love, <em>have mercy on us.</em><br>
Heart of Jesus, abyss of all virtues, <em>have mercy on us.</em><br>
Heart of Jesus, most worthy of all praise, <em>have mercy on us.</em><br>
Heart of Jesus, king and center of all hearts, <em>have mercy on us.</em><br>
Heart of Jesus, in whom are all the treasures of wisdom and knowledge, <em>have mercy on us.</em><br>
Heart of Jesus, in whom dwells the fullness of divinity, <em>have mercy on us.</em><br>
Heart of Jesus, in whom the Father was well pleased, <em>have mercy on us.</em><br>
Heart of Jesus, of whose fullness we have all received, <em>have mercy on us.</em><br>
Heart of Jesus, desire of the everlasting hills, <em>have mercy on us.</em><br>
Heart of Jesus, patient and most merciful, <em>have mercy on us.</em><br>
Heart of Jesus, enriching all who invoke You, <em>have mercy on us.</em><br>
Heart of Jesus, fountain of life and holiness, <em>have mercy on us.</em><br>
Heart of Jesus, propitiation for our sins, <em>have mercy on us.</em><br>
Heart of Jesus, saturated with revilings, <em>have mercy on us.</em><br>
Heart of Jesus, bruised for our offenses, <em>have mercy on us.</em><br>
Heart of Jesus, made obedient unto death, <em>have mercy on us.</em><br>
Heart of Jesus, pierced with a lance, <em>have mercy on us.</em><br>
Heart of Jesus, source of all consolation, <em>have mercy on us.</em><br>
Heart of Jesus, our life and resurrection, <em>have mercy on us.</em><br>
Heart of Jesus, our peace and reconciliation, <em>have mercy on us.</em><br>
Heart of Jesus, victim for sinners, <em>have mercy on us.</em><br>
Heart of Jesus, salvation of those who hope in You, <em>have mercy on us.</em><br>
Heart of Jesus, hope of those who die in You, <em>have mercy on us.</em><br>
Heart of Jesus, delight of all Saints, <em>have mercy on us.</em></p>
<p>Lamb of God, who takes away the sins of the world, <em>spare us, O Lord.</em><br>
Lamb of God, who takes away the sins of the world, <em>graciously hear us, O Lord.</em><br>
Lamb of God, who takes away the sins of the world, <em>have mercy on us.</em></p>
<p>Jesus, meek and humble of heart,<br>
Make our hearts like unto Yours.</p>
<p><em>Let us pray:</em> Almighty and eternal God, look upon the Heart of Your dearly beloved Son and upon the praise and satisfaction He offers You in the name of us sinners. In Your goodness, grant us pardon when we seek Your mercy, in the name of the same Jesus Christ, Your Son, who lives and reigns with You forever and ever. Amen.</p>`
    },

    // Acts of Faith, Hope, Love, Contrition
    'act-faith': {
      id: 'act-faith',
      title: 'Act of Faith',
      category: 'acts',
      description: 'A declaration of faith in God and all that He has revealed.',
      content: `<h2>Act of Faith</h2>
<p>O my God, I firmly believe that You are one God in three divine Persons, Father, Son, and Holy Spirit. I believe that Your divine Son became man, died for our sins, and that He will come to judge the living and the dead. I believe these and all the truths which the holy Catholic Church teaches, because You have revealed them, who can neither deceive nor be deceived.</p>`
    },
    'act-hope': {
      id: 'act-hope',
      title: 'Act of Hope',
      category: 'acts',
      description: 'An act of hope in God\'s mercy and promises.',
      content: `<h2>Act of Hope</h2>
<p>O my God, relying on Your almighty power and infinite mercy and promises, I hope to obtain pardon of my sins, the help of Your grace, and life everlasting, through the merits of Jesus Christ, my Lord and Redeemer.</p>`
    },
    'act-love': {
      id: 'act-love',
      title: 'Act of Love',
      category: 'acts',
      description: 'An act of perfect love of God.',
      content: `<h2>Act of Love</h2>
<p>O my God, I love You above all things with my whole heart and soul, because You are infinitely good and worthy of all love. I love my neighbor as myself for the love of You. I forgive all who have injured me and ask pardon of all whom I have injured. Amen.</p>`
    },
    'act-contrition-traditional': {
      id: 'act-contrition-traditional',
      title: 'Act of Contrition (Traditional)',
      category: 'contrition',
      description: 'The traditional Act of Contrition for the Sacrament of Penance.',
      content: `<h2>Act of Contrition</h2>
<p>O my God, I am heartily sorry for having offended You, and I detest all my sins because of Your just punishments, but most of all because they offend You, my God, who are all good and deserving of all my love. I firmly resolve, with the help of Your grace, to sin no more and to avoid the near occasions of sin. Amen.</p>`
    },
    'act-contrition-short': {
      id: 'act-contrition-short',
      title: 'Short Act of Contrition',
      category: 'contrition',
      description: 'A brief act of contrition for daily use.',
      content: `<h2>Short Act of Contrition</h2>
<p>Lord Jesus Christ, Son of God, have mercy on me, a sinner. Forgive me my sins, and grant me the grace of Your Holy Spirit to amend my life. I am sorry for my sins, not only because by them I have deserved the pains of hell, but above all because they have offended You, my God, who are all good and deserving of all my love. I firmly resolve, with the help of Your grace, to confess my sins, to do penance, and to amend my life. Amen.</p>`
    },

    // Consecration Prayers
    'consecration-sacred-heart': {
      id: 'consecration-sacred-heart',
      title: 'Consecration to the Sacred Heart of Jesus',
      category: 'consecration',
      description: 'The consecration to the Sacred Heart composed by Pope Leo XIII.',
      content: `<h2>Consecration to the Sacred Heart of Jesus</h2>
<p>Most sweet Jesus, Redeemer of the human race, look down upon us humbly prostrate before Your altar. We are Yours and Yours we wish to be; but to be more surely united with You, behold each one of us freely consecrates himself today to Your most Sacred Heart.</p>
<p>Many indeed have never known You; many, too, despising Your precepts, have rejected You. Have mercy on them all, most merciful Jesus, and draw them to Your Sacred Heart.</p>
<p>Be King, O Lord, not only of the faithful who have never forsaken You, but also of the prodigal children who have abandoned You; grant that they may quickly return to their Father\'s house, lest they die of wretchedness and hunger.</p>
<p>Be King of those who are deceived by erroneous opinions, or whom discord keeps aloof, and call them back to the harbor of truth and the unity of faith, so that soon there may be one flock and one Shepherd.</p>
<p>Be King of all those who sit in the ancient superstition of the Gentiles; refuse not, we beseech You, to deliver them out of darkness into the light of Your kingdom.</p>
<p>Grant, O Lord, to Your Church assurance of freedom and immunity from harm; give peace and order to all nations; make the earth resound from pole to pole with one cry: Praise to the divine Heart that wrought our salvation; to Him be glory and honor forever. Amen.</p>`
    },
    'consecration-mary': {
      id: 'consecration-mary',
      title: 'Consecration to the Blessed Virgin Mary (St. Louis de Montfort)',
      category: 'consecration',
      description: 'The complete consecration to Jesus through Mary by St. Louis de Montfort.',
      content: `<h2>Consecration to Jesus Through Mary</h2>
<p>O Eternal and Incarnate Wisdom! O sweetest and most adorable Jesus! True God and true man, only Son of the Eternal Father, and of Mary, ever Virgin! I adore You profoundly in the bosom and splendor of Your Father during eternity; and I adore You also in the virginal bosom of Mary, Your most worthy Mother, at the time of Your Incarnation.</p>
<p>I give thanks to You for having annihilated Yourself, taking the form of a slave in order to rescue me from the cruel slavery of the devil. I praise and glorify You for having been pleased to submit Yourself to Mary, Your holy Mother, in all things, in order to make me Your faithful slave through her.</p>
<p>But, alas! Ungrateful and faithless as I have been, I have not kept the promises which I made so solemnly to You in my Baptism. I have not fulfilled my obligations; I do not deserve to be called Your child, nor yet Your slave; and as there is nothing in me which does not merit Your anger and Your repulse, I dare not approach by myself before Your holy and august Majesty.</p>
<p>It is on this account that I have recourse to the intercession of Your most holy Mother, whom You have given me for a mediatrix with You. It is through her that I hope to obtain from You contrition and pardon for my sins, and the acquisition and preservation of wisdom.</p>
<p>I come, then, O Incarnate Wisdom, prostrate before You, through Mary, Your most holy Mother. I offer myself as a slave to You, in the presence of the whole heavenly court, in order to be more completely dependent on You, and to be more firmly attached to You forever. I choose You, this day, for my only master. I give myself to You as Your slave, body and soul, all my goods, both interior and exterior, and the value of all my good works, past, present, and future. I give over to You the full right of disposing of me, and of everything belonging to me, without exception, according to Your good pleasure, for the greater glory of God, in time and in eternity. Amen.</p>`
    },

    // Marian Prayers
    'hail-mary': {
      id: 'hail-mary',
      title: 'Hail Mary',
      category: 'marian',
      description: 'The most beloved Marian prayer, taken from Scripture and tradition.',
      content: `<h2>Hail Mary</h2>
<p>Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</p>`
    },
    'hail-holy-queen': {
      id: 'hail-holy-queen',
      title: 'Hail, Holy Queen (Salve Regina)',
      category: 'marian',
      description: 'The Salve Regina, traditionally recited after the Rosary.',
      content: `<h2>Hail, Holy Queen</h2>
<p>Hail, holy Queen, Mother of mercy, our life, our sweetness, and our hope. To you do we cry, poor banished children of Eve. To you do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, your eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of your womb, Jesus. O clement, O loving, O sweet Virgin Mary.</p>
<p><strong>V.</strong> Pray for us, O holy Mother of God.<br>
<strong>R.</strong> That we may be made worthy of the promises of Christ.</p>
<p><em>Let us pray:</em> Almighty, everlasting God, who by the cooperation of the Holy Spirit did prepare the body and soul of the glorious Virgin Mother Mary to become a worthy dwelling for Your Son; grant that we who commemorate her with joy may by her loving intercession be delivered from present evils and from everlasting death. Through the same Christ our Lord. Amen.</p>`
    },
    'memorare': {
      id: 'memorare',
      title: 'The Memorare',
      category: 'marian',
      description: 'The powerful prayer of St. Bernard to the Blessed Virgin.',
      content: `<h2>The Memorare</h2>
<p>Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to your protection, implored your help, or sought your intercession was left unaided.</p>
<p>Inspired with this confidence, I fly unto you, O Virgin of virgins, my Mother. To you I come, before you I stand, sinful and sorrowful.</p>
<p>O Mother of the Word Incarnate, despise not my petitions, but in your mercy hear and answer me. Amen.</p>`
    },
    'sub-tuum': {
      id: 'sub-tuum',
      title: 'Sub Tuum Praesidium (We Fly to Your Patronage)',
      category: 'marian',
      description: 'One of the oldest known Marian prayers, dating to the 3rd century.',
      content: `<h2>We Fly to Your Patronage</h2>
<p>We fly to your patronage, O holy Mother of God; despise not our petitions in our necessities, but deliver us from all danger, O ever glorious and blessed Virgin. Amen.</p>`
    },
    'angelus-prayer': {
      id: 'angelus-prayer',
      title: 'The Angelus',
      category: 'marian',
      description: 'The traditional prayer commemorating the Incarnation.',
      content: `<h2>The Angelus</h2>
<p><strong>V.</strong> The Angel of the Lord declared unto Mary.<br>
<strong>R.</strong> And she conceived of the Holy Spirit.</p>
<p><em>Hail Mary...</em></p>
<p><strong>V.</strong> Behold the handmaid of the Lord.<br>
<strong>R.</strong> Be it done unto me according to Your word.</p>
<p><em>Hail Mary...</em></p>
<p><strong>V.</strong> And the Word was made flesh.<br>
<strong>R.</strong> And dwelt among us.</p>
<p><em>Hail Mary...</em></p>
<p><strong>V.</strong> Pray for us, O holy Mother of God.<br>
<strong>R.</strong> That we may be made worthy of the promises of Christ.</p>
<p><em>Let us pray:</em> Pour forth, we beseech You, O Lord, Your grace into our hearts, that we, to whom the Incarnation of Christ Your Son was made known by the message of an Angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ our Lord. Amen.</p>`
    },
    'three-hail-marys': {
      id: 'three-hail-marys',
      title: 'Three Hail Marys Devotion',
      category: 'marian',
      description: 'The devotion of the Three Hail Marys for purity.',
      content: `<h2>The Three Hail Marys Devotion</h2>
<p>O most pure Virgin Mary, conceived without sin, I salute you and honor you. Obtain for me from God the grace to conquer all temptations against purity.</p>
<p><em>Hail Mary...</em></p>
<p>O most pure Virgin Mary, conceived without sin, I salute you and honor you. Obtain for me from God the grace to always act with purity of intention.</p>
<p><em>Hail Mary...</em></p>
<p>O most pure Virgin Mary, conceived without sin, I salute you and honor you. Obtain for me from God the grace to preserve purity of heart.</p>
<p><em>Hail Mary...</em></p>
<p><em>O Mary, conceived without sin, pray for us who have recourse to you.</em></p>`
    },

    // Protection Prayers
    'prayer-st-michael': {
      id: 'prayer-st-michael',
      title: 'Prayer to St. Michael the Archangel',
      category: 'protection',
      description: 'The great protection prayer composed by Pope Leo XIII.',
      content: `<h2>Prayer to St. Michael the Archangel</h2>
<p>St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Host, by the power of God, thrust into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.</p>`
    },
    'prayer-st-ben-joseph': {
      id: 'prayer-st-ben-joseph',
      title: 'St. Benedict Protection Prayer',
      category: 'protection',
      description: 'The powerful exorcism prayer of St. Benedict.',
      content: `<h2>St. Benedict Protection Prayer</h2>
<p>The Cross of the Holy Father Benedict. Let the holy cross be my light. Let not the dragon be my guide. Begone, Satan, from this place! Never tempt me with your vanities. What you offer me is evil. Drink the poison yourself.</p>
<p><em>V. May the holy abbot Benedict intercede for us.</em><br>
<em>R. Through Christ our Lord. Amen.</em></p>`
    },
    'armor-of-god': {
      id: 'armor-of-god',
      title: 'Prayer for the Armor of God',
      category: 'protection',
      description: 'Based on Ephesians 6, this prayer invokes God\'s spiritual protection.',
      content: `<h2>Prayer for the Armor of God</h2>
<p>Lord Jesus Christ, I put on the whole armor of God that I may be able to stand against the wiles of the devil. I gird my loins with truth. I put on the breastplate of righteousness. I shod my feet with the preparation of the Gospel of peace. I take up the shield of faith with which I can quench all the fiery darts of the evil one. I put on the helmet of salvation. I take the sword of the Spirit, which is the Word of God, praying always with all prayer and supplication in the Spirit. Amen.</p>`
    },
    'prayer-st-patrick': {
      id: 'prayer-st-patrick',
      title: 'St. Patrick\'s Breastplate',
      category: 'protection',
      description: 'The powerful protection prayer attributed to St. Patrick.',
      content: `<h2>St. Patrick\'s Breastplate</h2>
<p>I arise today through a mighty strength, the invocation of the Trinity, through a belief in the Threeness, through a confession of the Oneness of the Creator of creation.</p>
<p>I arise today through the strength of Christ with His Baptism, through the strength of His Crucifixion with His Burial, through the strength of His Resurrection with His Ascension, through the strength of His descent for the judgment of doom.</p>
<p>I arise today through the strength of the love of the Cherubim, in obedience of Angels, in service of Archangels, in hope of resurrection to meet with reward, in prayers of Patriarchs, in preachings of Apostles, in faiths of Confessors, in innocence of holy Virgins, in deeds of righteous men.</p>
<p>I arise today through the strength of heaven: light of sun, brilliance of moon, splendor of fire, speed of lightning, swiftness of wind, depth of sea, stability of earth, firmness of rock.</p>
<p>I arise today through God\'s strength to pilot me; God\'s might to uphold me, God\'s wisdom to guide me, God\'s eye to look before me, God\'s ear to hear me, God\'s word to speak for me, God\'s hand to guard me, God\'s way to lie before me, God\'s shield to protect me, God\'s host to save me from snares of devils, from temptations of vices, from everyone who wishes me ill, far and near, alone and in a crowd.</p>
<p>I summon today all these powers between me and these evils: against every cruel merciless power that may oppose my body and my soul, against incantations of false prophets, against black laws of pagandom, against false laws of heretics, against craft of idolatry, against spells of women and smiths and wizards, against every knowledge that corrupts man\'s body and soul.</p>
<p>Christ shield me today against poison, against burning, against drowning, against wounding, so that there may come to me an abundance of reward.</p>
<p>Christ with me, Christ before me, Christ behind me, Christ in me, Christ beneath me, Christ above me, Christ on my right, Christ on my left, Christ when I lie down, Christ when I sit down, Christ when I arise, Christ in the heart of every man who thinks of me, Christ in the mouth of every man who speaks of me, Christ in every eye that sees me, Christ in every ear that hears me.</p>
<p>I arise today through a mighty strength, the invocation of the Trinity, through a belief in the Threeness, through a confession of the Oneness of the Creator of creation. For to the Lord belongs salvation, and to the Lord belongs salvation, and to Christ belongs salvation. May Your salvation, O Lord, be ever with us. Amen.</p>`
    },

    // Healing Prayers
    'prayer-for-healing': {
      id: 'prayer-for-healing',
      title: 'Prayer for Physical Healing',
      category: 'healing',
      description: 'A prayer for physical healing and recovery.',
      content: `<h2>Prayer for Physical Healing</h2>
<p>Lord Jesus Christ, You came to heal the sick and to give life to all. I ask You to look with mercy upon me in my illness. Grant me the healing of body and soul that I so desperately need. If it be Your will, restore me to health, that I may serve You with renewed strength and gratitude.</p>
<p>I unite my sufferings with Yours and offer them for the salvation of souls. Give me patience in my pain, hope in my discouragement, and trust in Your loving providence. May Your healing power flow through me and bring me to full recovery.</p>
<p>Through the intercession of the Blessed Virgin Mary, Health of the Sick, and all the saints, I ask this in Your holy name. Amen.</p>`
    },
    'prayer-for-inner-healing': {
      id: 'prayer-for-inner-healing',
      title: 'Prayer for Inner Healing and Peace',
      category: 'healing',
      description: 'A prayer for emotional and spiritual healing.',
      content: `<h2>Prayer for Inner Healing and Peace</h2>
<p>Lord Jesus Christ, Divine Physician of souls and bodies, I come to You with a humble heart. I ask You to heal the wounds of my heart, the hurts of my past, the memories that cause me pain, and the fears that hold me captive.</p>
<p>Pour Your healing balm upon my mind, my emotions, and my spirit. Free me from resentment, bitterness, anger, and unforgiveness. Heal my relationships and restore my peace.</p>
<p>Fill me with Your love, Your joy, and Your peace. Give me a new heart and a new spirit. Help me to forgive as I have been forgiven, to love as I have been loved, and to extend to others the mercy You have shown me. Amen.</p>`
    },
    'prayer-for-sick-child': {
      id: 'prayer-for-sick-child',
      title: 'Prayer for a Sick Child',
      category: 'healing',
      description: 'A prayer for the healing of a sick child.',
      content: `<h2>Prayer for a Sick Child</h2>
<p>Lord Jesus Christ, Good Shepherd, You who blessed the children who came to You and said, "Let the little children come to Me," look with love upon this child who is suffering. Touch this child with Your healing hand and restore health and strength.</p>
<p>Bless this child\'s parents and family with courage, faith, and peace. Give the doctors and nurses wisdom in their care. May Your healing grace flow through every treatment and medicine.</p>
<p>Holy Mary, Mother of Jesus and our Mother, watch over this child. St. Joseph, protector of the Holy Child, intercede. St. Gerard, patron of mothers and children, pray for us. Amen.</p>`
    },

    // Family Prayers
    'prayer-for-family': {
      id: 'prayer-for-family',
      title: 'Prayer for the Family',
      category: 'family',
      description: 'A prayer for the protection and blessing of families.',
      content: `<h2>Prayer for the Family</h2>
<p>Lord God, from whom every family in heaven and on earth takes its name, we entrust our family to Your loving care. Bless each member of our family. Give us the grace to love one another as You love us, to forgive one another as You forgive us, and to serve one another as Christ served His disciples.</p>
<p>Protect our family from all harm, keep us united in faith, and guide us in the path of holiness. May our home be a place of peace, joy, and love. Help us to grow together in virtue and to support one another in times of need.</p>
<p>Holy Family of Nazareth, Jesus, Mary, and Joseph, protect our family and make our home like yours. Amen.</p>`
    },
    'prayer-for-parents': {
      id: 'prayer-for-parents',
      title: 'Prayer for Parents',
      category: 'family',
      description: 'A prayer for mothers and fathers.',
      content: `<h2>Prayer for Parents</h2>
<p>Lord Jesus Christ, who were obedient to Mary and Joseph, bless all parents. Give them wisdom to guide their children, patience to nurture them, and strength to support them. Help them to be examples of faith, hope, and love. Grant them the grace to raise their children in the knowledge and love of You.</p>
<p>St. Joseph, model of fatherhood, pray for all fathers. Blessed Virgin Mary, model of motherhood, pray for all mothers. Holy Family of Nazareth, intercede for all families. Amen.</p>`
    },
    'prayer-for-marriage': {
      id: 'prayer-for-marriage',
      title: 'Prayer for Marriage',
      category: 'family',
      description: 'A prayer for the blessing and protection of marriage.',
      content: `<h2>Prayer for Marriage</h2>
<p>Heavenly Father, You instituted the sacrament of marriage as a sign of Christ\'s love for His Church. Bless all married couples and strengthen them in their commitment to one another. Help them to love each other as Christ loves the Church, with sacrificial and unconditional love.</p>
<p>Renew the vows they made on their wedding day and deepen their love for one another. Protect their marriage from every attack of the enemy. Grant them patience in difficulties, joy in daily life, and faithfulness until death.</p>
<p>Holy Family of Nazareth, intercede for all married couples. May their love reflect Your love and be a witness to the world. Amen.</p>`
    },

    // Prayers for the Dead
    'eternal-rest': {
      id: 'eternal-rest',
      title: 'Eternal Rest (Requiem Aeternam)',
      category: 'faithful-departed',
      description: 'The traditional prayer for the faithful departed.',
      content: `<h2>Eternal Rest</h2>
<p>Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.</p>
<p>May their souls and the souls of all the faithful departed, through the mercy of God, rest in peace. Amen.</p>`
    },
    'deprofundis': {
      id: 'deprofundis',
      title: 'De Profundis (Psalm 130)',
      category: 'faithful-departed',
      description: 'Psalm 130, a prayer for the souls in purgatory.',
      content: `<h2>De Profundis (Psalm 130)</h2>
<p>Out of the depths I cry to You, O Lord; Lord, hear my voice! Let Your ears be attentive to my voice in supplication.</p>
<p>If You, O Lord, mark iniquities, Lord, who can stand? But with You is forgiveness, that You may be revered.</p>
<p>I wait for the Lord, my soul waits, and in His word I hope; my soul waits for the Lord more than the sentinels wait for the dawn.</p>
<p>More than sentinels wait for the dawn, let Israel wait for the Lord. For with the Lord is kindness and with Him is plenteous redemption; and He will redeem Israel from all their iniquities.</p>
<p>Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.</p>`
    },
    'prayer-for-souls-purgatory': {
      id: 'prayer-for-souls-purgatory',
      title: 'Prayer for the Souls in Purgatory',
      category: 'faithful-departed',
      description: 'A prayer for the holy souls suffering in purgatory.',
      content: `<h2>Prayer for the Souls in Purgatory</h2>
<p>O gentle Heart of Jesus, ever present in the Blessed Sacrament, ever consumed with burning love for the poor captive souls in purgatory, have mercy on the souls of Your faithful departed. Be not severe in Your judgment, but let some drops of Your precious blood fall upon the devouring flames.</p>
<p>O merciful Savior, have pity on those who have no one to pray for them, on those who are forgotten, on those who suffer most, on those who are nearest to entrance into Your glory. Send Your holy angels to comfort them and to announce to them that the hour of their deliverance has come.</p>
<p>Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.</p>`
    },

    // Thanksgiving
    'thanksgiving-prayer': {
      id: 'thanksgiving-prayer',
      title: 'Prayer of Thanksgiving',
      category: 'thanksgiving',
      description: 'A prayer of gratitude for God\'s blessings.',
      content: `<h2>Prayer of Thanksgiving</h2>
<p>O God, I thank You for all the blessings You have showered upon me: for life and health, for faith and family, for friends and community, for the beauty of creation and the promise of eternal life. Above all, I thank You for the gift of Your Son, Jesus Christ, and for the redemption He won for me.</p>
<p>I thank You for the Holy Spirit who guides me, for Your Church that nourishes me, for the sacraments that strengthen me, and for the saints who intercede for me. For every grace, every joy, every trial that has brought me closer to You — I give You thanks.</p>
<p>Grant that I may always be grateful, always trusting, and always ready to share Your blessings with others. Through Christ our Lord. Amen.</p>`
    },
    'te-deum': {
      id: 'te-deum',
      title: 'Te Deum (Ancient Hymn of Thanksgiving)',
      category: 'thanksgiving',
      description: 'The ancient hymn of thanksgiving attributed to St. Ambrose and St. Augustine.',
      content: `<h2>Te Deum</h2>
<p>We praise You, O God; we acknowledge You to be the Lord. All the earth worships You, the Father everlasting. To You all angels cry aloud, the heavens and all the powers therein. To You cherubim and seraphim continually cry: Holy, holy, holy, Lord God of Sabaoth! Heaven and earth are full of the majesty of Your glory.</p>
<p>The glorious company of the apostles praise You. The goodly fellowship of the prophets praise You. The noble army of martyrs praise You. The holy Church throughout all the world acknowledges You: the Father of infinite majesty, Your adorable, true, and only Son, and the Holy Spirit, the Comforter.</p>
<p>You are the King of Glory, O Christ. You are the everlasting Son of the Father. When You took upon Yourself to deliver man, You did not disdain the Virgin\'s womb. Having overcome the sting of death, You opened the kingdom of heaven to all believers. You sit at the right hand of God in the glory of the Father. We believe that You will come to be our Judge.</p>
<p>We beseech You, therefore, to help Your servants, whom You have redeemed with Your precious blood. Make them to be numbered with Your saints in everlasting glory. Save Your people, O Lord, and bless Your inheritance. Govern them and lift them up forever. Day by day we magnify You. And we worship Your name ever, world without end.</p>
<p>Vouchsafe, O Lord, to keep us this day without sin. O Lord, have mercy upon us, have mercy upon us. O Lord, let Your mercy be upon us, as we have put our trust in You. O Lord, in You have I trusted; let me never be confounded. Amen.</p>`
    }
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRAYER_DB };
}