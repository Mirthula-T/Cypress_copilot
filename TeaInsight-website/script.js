function showDetails(teaType) {
    let teaDetails = {
        "Green Tea": {
            title: "Green Tea",
            description: `Green tea is a popular drink with a fresh taste and green colour. 
            People all over the world enjoy it for its health benefits.<br><br>
            <b>How Green Tea is Made:</b> Green tea is made by steaming or pan-frying freshly picked tea leaves, preserving their natural colour and nutrients.<br><br>
            <b>Flavour of Green Tea:</b> Green tea offers a delicate, grassy flavour with subtle hints of sweetness, making it a soothing and enjoyable drink.<br><br>
            <b>Origin of Green Tea:</b> Green tea traces its roots back to ancient China, where it has been cultivated for centuries before spreading to other parts of Asia and the world.`,
            amazonLink: "https://www.amazon.com/s?k=green+tea"
        },
        "Chamomile Tea": {
            title: "Chamomile Tea",
            description: `Chamomile tea, known for its calming properties, is a soothing herbal infusion enjoyed for its 
            gentle flavour and relaxation benefits.<br><br>
            <b>How Chamomile Tea is Made:</b>Chamomile tea is made by steeping dried chamomile flowers in hot water, allowing its natural flavours and aromas to infuse.<br><br>
            <b>Flavour of Chamomile Tea:</b>Chamomile tea offers a mild, floral taste with subtle hints of sweetness, providing a comforting and tranquil experience with every sip.<br><br>
            <b>Origin of Chamomile Tea:</b>Chamomile tea has ancient origins, with records of its use dating back to ancient Egypt, Greece, and Rome. 
            Today, it is cultivated in various regions worldwide for its therapeutic properties and delightful flavour.`,
            amazonLink: "https://www.amazon.in/s?k=Chamomile+Tea&crid=3ROKM0HD787YT&sprefix=chamomile+tea%2Caps%2C337&ref=nb_sb_noss_2"
        },
        "Black Tea": {
            title: "Black Tea",
            description: `Black tea is a classic beverage appreciated for its bold flavour and invigorating qualities, 
            making it a popular choice among tea enthusiasts worldwide.<br><br>
            <b>How Black Tea is Made:</b>Black tea undergoes a process of withering, rolling, oxidation, and drying, resulting in its distinct dark colour and robust flavour profile.<br><br>
            <b>Flavour of Black Tea:</b>Black tea boasts a rich, full-bodied taste with notes ranging from malty and earthy to sweet and fruity, offering a satisfying drinking experience for tea lovers.<br><br>
            <b>Origin of Black Tea:</b>Black tea originated in China and was later introduced to other parts of the world, including India and Sri Lanka. Today, it is produced in various regions, each
             contributing unique characteristics to its flavour and aroma.`,
            amazonLink: "https://www.amazon.in/s?k=Black+tea&crid=1ZETRRH4E32TH&sprefix=black+tea%2Caps%2C338&ref=nb_sb_noss_2"
        },
        "Herbal Tea": {
            title: "Herbal Tea",
            description: `Herbal tea, also known as herbal infusion, is a caffeine-free beverage crafted from dried flowers, herbs, spices, and fruits, 
            offering a refreshing and soothing experience.<br><br>
            <b>How Herbal Tea is Made:</b>Herbal tea is made by steeping various dried herbs, flowers, and fruits in hot water, allowing their natural Flavors and aromas to infuse into the liquid.<br><br>
            <b>Flavour of Herbal Tea:</b>Herbal tea offers a diverse range of Flavors, from floral and fruity to spicy and earthy, providing a delightful and comforting drinking experience for tea lovers.<br><br>
            <b>Origin of Herbal Tea:</b>Herbal tea has been enjoyed for centuries across different cultures, with origins tracing back to ancient Egypt, China, and Greece. Today, herbal teas are crafted from a variety 
            of plants and herbs sourced from around the world.`,
            amazonLink: "https://www.amazon.in/s?k=herbal+tea+powder&crid=ZYXO444AZ010&sprefix=%2Caps%2C279&ref=nb_sb_ss_recent_1_0_recent"
        },
        "Matcha Tea": {
            title: "Matcha Tea",
            description: `Matcha tea is a vibrant and flavourful Japanese green tea powder known for its unique preparation method and rich, grassy taste, 
            offering a refreshing and energizing beverage.<br><br>
            <b>How Matcha Tea is Made:</b>Matcha tea is made by finely grinding shade-grown green tea leaves into a powder, which is then whisked with hot water, creating a frothy and velvety smooth infusion.<br><br>
            <b>Flavour of Matcha Tea:</b>Matcha tea delights the senses with its bold and vegetal flavour profile, characterized by a smooth texture, slightly sweet undertones, and a hint of bitterness, 
            providing a satisfying and invigorating drinking experience.<br><br>
            <b>Origin of Matcha Tea:</b>Matcha tea has its origins in Japan, where it has been cultivated and enjoyed for centuries as part of traditional Japanese tea ceremonies. Today, it continues to 
            be prized for its unique flavour and cultural significance.`,
            amazonLink: "https://www.amazon.in/s?k=Matcha+tea+powder&crid=22R1VTZ1P5ZD7&sprefix=matcha+tea+powder%2Caps%2C488&ref=nb_sb_noss_1"
        },
        "White Tea": {
            title: "White Tea",
            description: `White tea is a delicate and subtle tea variety made from young tea leaves and buds, prized for its mild flavour and delicate aroma, 
            offering a gentle and refreshing drinking experience.<br><br>
            <b>How White Tea is Made:</b>White tea is made by carefully plucking young tea leaves and buds, then gently drying them under controlled conditions, 
            preserving their natural freshness and flavour.<br><br>
            <b>Flavour of White Tea:</b>White tea offers a light and subtle flavour profile with delicate floral and sweet undertones, creating a refreshing and soothing 
            drinking experience that’s perfect for relaxation. <br><br>
            <b>Origin of White Tea:</b>White tea originated in China’s Fujian province, where it has been produced for centuries using traditional methods. Today, it is also cultivated in other regions, including India 
            and Sri Lanka, but it remains most closely associated with its Chinese origins.`,
            amazonLink: "https://www.amazon.in/s?k=White+tea+powder&crid=378V0OVO1X9RX&sprefix=white+tea+powder%2Caps%2C352&ref=nb_sb_noss_1"
        },
        "Masala Tea": {
            title: "Masala Tea",
            description: `Masala chai is a flavourful and aromatic Indian tea blend, infused with a rich combination of spices and herbs, offering a warm and 
            comforting beverage enjoyed throughout India and beyond.<br><br>
            <b>How Masala Tea is Made:</b>Masala chai is made by brewing black tea with a mixture of spices such as cinnamon, cardamom, ginger, cloves, and black peppercorns, 
            simmered with milk and sweetened to taste.<br><br>
            <b>Flavour of Masala Tea:</b>Masala chai delights the palate with its bold and spicy flavour profile, balanced by the creamy texture of milk and the warmth of aromatic spices, 
            creating a soothing and invigorating drinking experience.<br><br>
            <b>Origin of Masala Tea:</b> Masala chai originated in India, where it has been a beloved beverage for centuries, traditionally enjoyed as a rejuvenating drink that provides
             warmth and comfort, especially during cool weather.`,
            amazonLink: "https://www.amazon.in/s?k=masala+tea+powder&crid=SSN39IKPC5OU&sprefix=masala+tea+powder%2Caps%2C740&ref=nb_sb_noss_1"
        },
        "Darjeeling Tea": {
            title: "Darjeeling Tea",
            description: `Darjeeling tea is a prized Indian tea renowned for its unique flavour and exquisite aroma, often referred to as the “Champagne of Teas” 
            for its unparalleled quality and elegance.<br><br>
            <b>How Darjeeling Tea is Made:</b>Darjeeling tea is made from the Camellia sinensis plant, grown in the Darjeeling region of India, and processed using traditional methods such as hand-plucking and withering, 
            resulting in its distinctive flavour and character.<br><br>
            <b>Flavour of Darjeeling Tea:</b>Darjeeling tea offers a delicate and floral flavour with muscatel notes, reflecting the terroir of the Himalayan mountains where it is cultivated, providing a refined 
            and sophisticated drinking experience.<br><br>
            <b>Origin of Darjeeling Tea:</b> Darjeeling tea originates from the Darjeeling district in West Bengal, 
            India, where it has been produced since the mid-19th century, gaining global recognition for its exceptional quality and distinctive taste.`,
            amazonLink: "https://www.amazon.in/s?k=Darjeeling+Tea+powder&crid=2HJ4PBWM6NAL2&sprefix=darjeeling+tea+powder%2Caps%2C323&ref=nb_sb_noss_1"
        },
        "Irani Chai": {
            title: "Irani Chai",
            description: `Irani chai is a rich and aromatic tea blend originating from Iran and popularized in India, known for its strong flavour and cultural 
            significance in Iranian and Indian communities.<br><br>
            <b>How Irani Chai is Made:</b>Irani chai is typically made by brewing strong black tea leaves with spices like cardamom, cloves, and cinnamon, simmered 
            with milk and sugar for a creamy and indulgent beverage. <br><br>
            <b>Flavour of Irani Chai:</b>Irani chai boasts a bold and robust flavour profile, with a perfect balance of tea, spices, and sweetness from the milk, 
            creating a satisfying and comforting drinking experience.<br><br>
            <b>Origin of Irani Chai:</b>Irani chai originates from Iran, where it has been a traditional beverage enjoyed for centuries. It gained popularity in India through Iranian immigrants, particularly in cities like Hyderabad and Mumbai, where it became an 
            integral part of the local culture and cuisine.`,
            amazonLink: " https://www.amazon.in/s?k=Irani+Chai+powder&crid=1NI2VHD5EHRYY&sprefix=irani+chai+powder%2Caps%2C423&ref=nb_sb_noss_1"
        },
        "Oolong Tea": {
            title: "Oolong Tea",
            description: `Oolong tea is a semi-oxidized tea with a unique flavour profile, falling between green and black tea, celebrated 
            for its complex taste and numerous health benefits.<br><br>
            <b>How  Oolong Tea is Made:</b>Oolong tea is made by withering the tea leaves under the sun, then oxidizing them before drying, resulting in
             a partially fermented tea with distinctive Flavors.<br><br>
            <b>Flavour of  Oolong Tea:</b>Oolong tea offers a wide range of Flavors, from floral and fruity to woody and roasted, with a smooth and lingering finish, providing a 
            delightful and invigorating drinking experience.
            <br><br>
            <b>Origin of  Oolong Tea:</b>Oolong tea originated in China’s Fujian province, where it has been produced for centuries using traditional methods. It is also cultivated in Taiwan and other regions, each contributing 
            unique characteristics to its flavour and aroma.`,
            amazonLink: "https://www.amazon.in/s?k=Oolong+Tea+powder&crid=F6G2ATSLZR12&sprefix=oolong+tea+powder%2Caps%2C739&ref=nb_sb_noss_1"
        },
        "Lemongrass Tea": {
            title: "Lemongrass Tea",
            description: `Lemongrass tea is a refreshing herbal infusion made from the leaves of the lemongrass plant, 
            prized for its citrusy flavour and numerous health benefits.<br><br>
            <b>How Lemongrass Tea is Made:</b>Lemongrass tea is made by steeping fresh or dried lemongrass leaves in hot water, 
            releasing its aromatic oils and citrusy flavour.<br><br>
            <b>Flavour of Lemongrass Tea:</b> Lemongrass tea offers a bright and zesty citrus flavour with a hint of sweetness,
             providing a refreshing and invigorating drinking experience.<br><br>
            <b>Origin of Lemongrass Tea:</b> Lemongrass tea has its origins in Southeast Asia, where lemongrass grows abundantly. It has been enjoyed for centuries in various 
            cultures for its refreshing taste and medicinal properties.`,
            amazonLink: "https://www.amazon.in/s?k=Lemongrass+Tea+powder&crid=1P7HZZL76TAF3&sprefix=lemongrass+tea+pow%2Caps%2C1118&ref=nb_sb_noss_2"
        },
        "Tandoori Chai": {
            title: "Tandoori Chai",
            description: `Tandoori chai is a unique and flavourful tea preparation, where tea is brewed in a clay pot, imparting a smoky flavour, popular 
            in India for its distinct taste and cultural significance.<br><br>
            <b>How Tandoori Chai is Made:</b>Tandoori chai is made by brewing tea leaves with spices and milk, then heating the mixture in a clay pot (tandoor) 
            until it develops a smoky flavour and aroma.<br><br>
            <b>Flavour of Tandoori Chai:</b>Tandoori chai offers a rich and smoky flavour, complemented by the creamy texture of milk and the warmth of aromatic spices, providing
             a unique and indulgent drinking experience.<br><br>
            <b>Origin of Tandoori Chai:</b>Tandoori chai originated in India, particularly in cities like Pune and Mumbai,
             where tea vendors began experimenting with brewing tea in clay pots traditionally used for baking bread (naan) in tandoor ovens.`,
            amazonLink: "https://www.amazon.in/s?k=Tandoori+Chai+powder&ref=nb_sb_noss"
        },
        "Lemon Tea": {
            title: "Lemon Tea",
            description: `Lemon tea is a refreshing and invigorating beverage made by adding fresh lemon juice to brewed tea. It is known for its tangy flavor and numerous health benefits. Lemon tea can be prepared with black tea,
             green tea, or herbal tea, depending on personal preference. <br><br>
            <b>How Lemon Tea is Made:</b> Lemon tea is prepared by brewing tea leaves or tea powder in hot water and then adding freshly squeezed lemon juice. Some people also add honey, ginger, or mint for enhanced flavor and health benefits. The tea is usually
             strained before serving and can be enjoyed hot or cold.<br><br>
            <b>Flavour of Lemon Tea:</b>Lemon tea has a refreshing, tangy, and mildly sweet flavor. The citrusy taste of lemon blends well with the bitterness of tea, 
            creating a balanced and soothing drink.<br><br>
            <b>Origin of Lemon Tea:</b>Lemon tea has been consumed in various cultures for centuries. It is popular in India, China, and other Asian countries, where tea has been a staple beverage. The practice of adding lemon to tea likely originated 
            as a way to enhance flavor and health benefits.`,
            amazonLink: "https://www.amazon.in/s?k=Lemon+tea+powder&crid=2JDDB51X4P4ZL&sprefix=lemon+tea+powder%2Caps%2C680&ref=nb_sb_noss_1"
        },
        "Peach Tea": {
            title: "Peach Tea",
            description: `Peach tea is a refreshing beverage infused with the sweet and juicy flavour of ripe peaches, 
            offering a delightful and fruity twist to traditional tea.<br><br>
            <b>How Peach Tea is Made:</b>Peach tea is made by steeping black, green, or herbal tea leaves with peach flavouring or fresh peach slices, 
            creating a fragrant and flavourful infusion.<br><br>
            <b>Flavour of Peach Tea:</b>Peach tea offers a luscious and fruity taste with hints of sweetness, reminiscent of biting into a ripe peach on a warm summer day, providing a 
            refreshing and thirst-quenching drinking experience.<br><br>
            <b>Origin of Peach Tea:</b>Peach tea has its roots in the southern United States, where it became popular in the late 19th century, inspired by the abundance of peaches in the region. Today, 
            it is enjoyed worldwide for its delicious flavour and versatility.`,
            amazonLink: "https://www.amazon.in/s?k=peach+tea+powder&ref=nb_sb_noss"
        },
        "Rooibos Tea": {
            title: "Rooibos Tea",
            description: `Rooibos tea, also known as red bush tea, is a caffeine-free herbal infusion originating from South Africa, 
            celebrated for its smooth flavour and numerous health benefits.<br><br>
            <b>How  Rooibos Tea is Made:</b>Rooibos tea is made by harvesting and fermenting the leaves of the Aspalathus
             linearis plant, resulting in a distinctive reddish-brown colour and a naturally sweet flavour.<br><br>
            <b>Flavour of Rooibos Tea:</b>Rooibos tea offers a smooth and slightly sweet taste with hints of nuttiness and earthiness, making it a soothing and
             comforting beverage suitable for any time of day.<br><br>
            <b>Origin of Rooibos Tea:</b>Rooibos tea originates from the Cederberg region of South Africa, where indigenous Khoisan peoples have been harvesting and brewing it for centuries. Today, it is enjoyed
             worldwide for its unique flavour and healthful properties.`,
            amazonLink: "https://www.amazon.in/s?k=Rooibos+Tea+powder&ref=nb_sb_noss"
        },
        "Nilgiri Tea": {
            title: "Nilgiri Tea",
            description: `Nilgiri tea, originating from the Nilgiri hills of southern India, is a fragrant and flavourful tea variety renowned for its briskness and versatility, 
            enjoyed by tea enthusiasts worldwide.<br><br>
            <b>How Nilgiri Tea is Made:</b>Nilgiri tea is made from the Camellia sinensis tea plant, harvested, and processed using traditional methods that include withering, rolling, oxidation, 
            and drying, resulting in its distinctive flavour and aroma.<br><br>
            <b>Flavour of Nilgiri Tea:</b>Nilgiri tea offers a smooth and balanced flavour with floral and fruity notes, accompanied by a brisk and refreshing character, making it suitable for both hot and iced tea preparations.
            <br><br>
            <b>Origin of Nilgiri Tea:</b> Nilgiri tea originates from the Nilgiri hills of Tamil Nadu and Kerala states in southern India, where tea cultivation began in the 19th century. The unique terroir of the region, with its high elevation and cool climate, contributes
             to the exceptional quality and flavour of Nilgiri tea.`,
            amazonLink: "https://www.amazon.in/s?k=Nilgiri+tea+powder&crid=2QYON026V73GZ&sprefix=nilgiri+tea+pow%2Caps%2C1599&ref=nb_sb_noss_2"
        },
        

        
    };

    if (teaDetails[teaType]) {
        document.getElementById("teaModalLabel").innerHTML = teaDetails[teaType].title;
        document.getElementById("teaModalBody").innerHTML = teaDetails[teaType].description;
        document.getElementById("buyLink").href = teaDetails[teaType].amazonLink;

        // Initialize and Show Bootstrap Modal
        var modal = new bootstrap.Modal(document.getElementById("teaModal"));
        modal.show();
    }
};
 


 
  
