const vitaminItems = {
  VITAMIN_A: [
    {name: 'Beef_liver', image: require('../assets/images/vitaminA/beefliver.jpg'), about: 'Beef liver is an organ meat that comes from cattle. The popularity of liver has varied throughout the years with other beef cuts (like flank steak, ribeye, and other cuts) taking center stage more often. But beef liver is now enjoying a moment of popularity as it has become a favorite among those who follow a paleo diet, low carb diets, or carnivore diets.'},
    {name: 'Sweet Potatos', image:  require('../assets/images/vitaminA/sweetpotatos.jpg'), about:'Sweet potatoes are mainly composed of carbs. Most of the carbs come from starch, followed by fiber. This root vegetable is also relatively low in protein but still an important protein source in many developing countries.'},
    {name: 'Spinach', image: require('../assets/images/vitaminA/spinach.jpg'), about:'Spinach is low in carbs but high in insoluble fiber. This type of fiber may benefit your digestion.'},
    {name: 'Pumpkin pie', image:  require('../assets/images/vitaminA/pumpkinpie.jpeg'), about:'Pumpkin pie is a dessert pie with a spiced, pumpkin-based custard filling. The pumpkin is a symbol of harvest time, and pumpkin pie is generally eaten during the fall and early winter. In the United States and Canada, it is usually prepared for Thanksgiving,[1] and other occasions when pumpkin is in season.'},
    {name: 'Carrots', image:  require('../assets/images/vitaminA/carrots.jpg'), about:'Carrots are an excellent source of vitamin A in the form of beta carotene. They are also a good source of several B vitamins, as well as vitamin K and potassium.'},
    {name: ' Cheese', image:  require('../assets/images/vitaminA/cheese.jpg'), about:'Cheese is a dairy product, derived from milk and produced in wide ranges of flavors, textures and forms by coagulation of the milk protein casein. It comprises proteins and fat from milk, usually the milk of cows, buffalo, goats, or sheep. ... Most cheeses melt at cooking temperature.'},
    {name: ' Orange', image: require('../assets/images/vitaminC/orange.jpg'), about:'Oranges are a type of low calorie, highly nutritious citrus fruit. As part of a healthful and varied diet, oranges contribute to strong, clear skin and can help lower a person’s risk of many conditions.'},
    {name: ' Strawberries', image: require('../assets/images/vitaminC/strawberries.jpg'), about:'The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.'},
  ],
  VITAMIN_C: [
    {name: ' Guava', image:  require('../assets/images/vitaminC/guava.jpg'), about:'Guavas are tropical trees originating in Central America. Their fruits are oval in shape with light green or yellow skin and contain edible seeds. What s more, guava leaves are used as an herbal tea and the leaf extract as a supplement. Guava fruits are amazingly rich in antioxidants, vitamin C, potassium, and fiber'},
    {name: ' Tomato', image: require('../assets/images/vitaminC/tomato.jpg'), about:'Tomato, (Solanum lycopersicum), flowering plant of the nightshade family (Solanaceae), cultivated extensively for its edible fruits. ... Labelled as a vegetable for nutritional purposes, tomatoes are a good source of vitamin C and the phytochemical lycopene.'},
    {name: ' Orange', image: require('../assets/images/vitaminC/orange.jpg'),  about:'Oranges are a type of low calorie, highly nutritious citrus fruit. As part of a healthful and varied diet, oranges contribute to strong, clear skin and can help lower a person’s risk of many conditions.'},
    {name: ' Strawberries', image: require('../assets/images/vitaminC/strawberries.jpg')},
    {name: ' Papaya', image:  require('../assets/images/vitaminC/papaya.jpg'), about:'Papaya is the fruit of the Carica papaya plant. ... Papayas are shaped similar to pears and can be up to 20 inches (51 cm) long. The skin is green when unripe and orange when ripe, while the flesh is yellow, orange or red. The fruit also has many black seeds, which are edible but bitter.'},
    {name: ' Broccoli', image: require('../assets/images/vitaminC/broccoli.jpg'), about:'Broccoli is a green vegetable that vaguely resembles a miniature tree. It belongs to the plant species known as Brassica oleracea. It s closely related to cabbage, Brussels sprouts, kale and cauliflower — all edible plants collectively referred to as cruciferous vegetables.'},
  ],
  VITAMIN_D: [
     {name: ' Guava', image:  require('../assets/images/vitaminC/guava.jpg'), about:'Guavas are tropical trees originating in Central America. Their fruits are oval in shape with light green or yellow skin and contain edible seeds. What s more, guava leaves are used as an herbal tea and the leaf extract as a supplement. Guava fruits are amazingly rich in antioxidants, vitamin C, potassium, and fiber'},
    {name: ' Tomato', image: require('../assets/images/vitaminC/tomato.jpg'), about:'Tomato, (Solanum lycopersicum), flowering plant of the nightshade family (Solanaceae), cultivated extensively for its edible fruits. ... Labelled as a vegetable for nutritional purposes, tomatoes are a good source of vitamin C and the phytochemical lycopene.'},
    {name: ' Orange', image: require('../assets/images/vitaminC/orange.jpg'),  about:'Oranges are a type of low calorie, highly nutritious citrus fruit. As part of a healthful and varied diet, oranges contribute to strong, clear skin and can help lower a person’s risk of many conditions.'},
    {name: ' Strawberries', image: require('../assets/images/vitaminC/strawberries.jpg')},
    {name: ' Papaya', image:  require('../assets/images/vitaminC/papaya.jpg'), about:'Papaya is the fruit of the Carica papaya plant. ... Papayas are shaped similar to pears and can be up to 20 inches (51 cm) long. The skin is green when unripe and orange when ripe, while the flesh is yellow, orange or red. The fruit also has many black seeds, which are edible but bitter.'},
    {name: ' Broccoli', image: require('../assets/images/vitaminC/broccoli.jpg'), about:'Broccoli is a green vegetable that vaguely resembles a miniature tree. It belongs to the plant species known as Brassica oleracea. It s closely related to cabbage, Brussels sprouts, kale and cauliflower — all edible plants collectively referred to as cruciferous vegetables.'},
 
  ],
  VITAMIN_E: [
     {name: ' Guava', image:  require('../assets/images/vitaminC/guava.jpg'), about:'Guavas are tropical trees originating in Central America. Their fruits are oval in shape with light green or yellow skin and contain edible seeds. What s more, guava leaves are used as an herbal tea and the leaf extract as a supplement. Guava fruits are amazingly rich in antioxidants, vitamin C, potassium, and fiber'},
    {name: ' Tomato', image: require('../assets/images/vitaminC/tomato.jpg'), about:'Tomato, (Solanum lycopersicum), flowering plant of the nightshade family (Solanaceae), cultivated extensively for its edible fruits. ... Labelled as a vegetable for nutritional purposes, tomatoes are a good source of vitamin C and the phytochemical lycopene.'},
    {name: ' Orange', image: require('../assets/images/vitaminC/orange.jpg'),  about:'Oranges are a type of low calorie, highly nutritious citrus fruit. As part of a healthful and varied diet, oranges contribute to strong, clear skin and can help lower a person’s risk of many conditions.'},
    {name: ' Strawberries', image: require('../assets/images/vitaminC/strawberries.jpg')},
    {name: ' Papaya', image:  require('../assets/images/vitaminC/papaya.jpg'), about:'Papaya is the fruit of the Carica papaya plant. ... Papayas are shaped similar to pears and can be up to 20 inches (51 cm) long. The skin is green when unripe and orange when ripe, while the flesh is yellow, orange or red. The fruit also has many black seeds, which are edible but bitter.'},
    {name: ' Broccoli', image: require('../assets/images/vitaminC/broccoli.jpg'), about:'Broccoli is a green vegetable that vaguely resembles a miniature tree. It belongs to the plant species known as Brassica oleracea. It s closely related to cabbage, Brussels sprouts, kale and cauliflower — all edible plants collectively referred to as cruciferous vegetables.'},
 
  ],
  VITAMIN_K: [
     {name: ' Guava', image:  require('../assets/images/vitaminC/guava.jpg'), about:'Guavas are tropical trees originating in Central America. Their fruits are oval in shape with light green or yellow skin and contain edible seeds. What s more, guava leaves are used as an herbal tea and the leaf extract as a supplement. Guava fruits are amazingly rich in antioxidants, vitamin C, potassium, and fiber'},
    {name: ' Tomato', image: require('../assets/images/vitaminC/tomato.jpg'), about:'Tomato, (Solanum lycopersicum), flowering plant of the nightshade family (Solanaceae), cultivated extensively for its edible fruits. ... Labelled as a vegetable for nutritional purposes, tomatoes are a good source of vitamin C and the phytochemical lycopene.'},
    {name: ' Orange', image: require('../assets/images/vitaminC/orange.jpg'),  about:'Oranges are a type of low calorie, highly nutritious citrus fruit. As part of a healthful and varied diet, oranges contribute to strong, clear skin and can help lower a person’s risk of many conditions.'},
    {name: ' Strawberries', image: require('../assets/images/vitaminC/strawberries.jpg')},
    {name: ' Papaya', image:  require('../assets/images/vitaminC/papaya.jpg'), about:'Papaya is the fruit of the Carica papaya plant. ... Papayas are shaped similar to pears and can be up to 20 inches (51 cm) long. The skin is green when unripe and orange when ripe, while the flesh is yellow, orange or red. The fruit also has many black seeds, which are edible but bitter.'},
    {name: ' Broccoli', image: require('../assets/images/vitaminC/broccoli.jpg'), about:'Broccoli is a green vegetable that vaguely resembles a miniature tree. It belongs to the plant species known as Brassica oleracea. It s closely related to cabbage, Brussels sprouts, kale and cauliflower — all edible plants collectively referred to as cruciferous vegetables.'},
 
  ],
  VITAMIN_B1: [
    {name: ' Guava', image: ''},
    {name: ' Tomato', image: ''},
    {name: ' Orange', image: ''},
    {name: ' Strawberries', image: ''},
    {name: ' Papaya', image: ''},
    {name: ' Broccoli', image: ''},
  ],
  VITAMIN_B2: [
     {name: ' Guava', image:  require('../assets/images/vitaminC/guava.jpg'), about:'Guavas are tropical trees originating in Central America. Their fruits are oval in shape with light green or yellow skin and contain edible seeds. What s more, guava leaves are used as an herbal tea and the leaf extract as a supplement. Guava fruits are amazingly rich in antioxidants, vitamin C, potassium, and fiber'},
    {name: ' Tomato', image: require('../assets/images/vitaminC/tomato.jpg'), about:'Tomato, (Solanum lycopersicum), flowering plant of the nightshade family (Solanaceae), cultivated extensively for its edible fruits. ... Labelled as a vegetable for nutritional purposes, tomatoes are a good source of vitamin C and the phytochemical lycopene.'},
    {name: ' Orange', image: require('../assets/images/vitaminC/orange.jpg'),  about:'Oranges are a type of low calorie, highly nutritious citrus fruit. As part of a healthful and varied diet, oranges contribute to strong, clear skin and can help lower a person’s risk of many conditions.'},
    {name: ' Strawberries', image: require('../assets/images/vitaminC/strawberries.jpg')},
    {name: ' Papaya', image:  require('../assets/images/vitaminC/papaya.jpg'), about:'Papaya is the fruit of the Carica papaya plant. ... Papayas are shaped similar to pears and can be up to 20 inches (51 cm) long. The skin is green when unripe and orange when ripe, while the flesh is yellow, orange or red. The fruit also has many black seeds, which are edible but bitter.'},
    {name: ' Broccoli', image: require('../assets/images/vitaminC/broccoli.jpg'), about:'Broccoli is a green vegetable that vaguely resembles a miniature tree. It belongs to the plant species known as Brassica oleracea. It s closely related to cabbage, Brussels sprouts, kale and cauliflower — all edible plants collectively referred to as cruciferous vegetables.'},
 
  ],
  VITAMIN_B5: [
     {name: ' Guava', image:  require('../assets/images/vitaminC/guava.jpg'), about:'Guavas are tropical trees originating in Central America. Their fruits are oval in shape with light green or yellow skin and contain edible seeds. What s more, guava leaves are used as an herbal tea and the leaf extract as a supplement. Guava fruits are amazingly rich in antioxidants, vitamin C, potassium, and fiber'},
    {name: ' Tomato', image: require('../assets/images/vitaminC/tomato.jpg'), about:'Tomato, (Solanum lycopersicum), flowering plant of the nightshade family (Solanaceae), cultivated extensively for its edible fruits. ... Labelled as a vegetable for nutritional purposes, tomatoes are a good source of vitamin C and the phytochemical lycopene.'},
    {name: ' Orange', image: require('../assets/images/vitaminC/orange.jpg'),  about:'Oranges are a type of low calorie, highly nutritious citrus fruit. As part of a healthful and varied diet, oranges contribute to strong, clear skin and can help lower a person’s risk of many conditions.'},
    {name: ' Strawberries', image: require('../assets/images/vitaminC/strawberries.jpg')},
    {name: ' Papaya', image:  require('../assets/images/vitaminC/papaya.jpg'), about:'Papaya is the fruit of the Carica papaya plant. ... Papayas are shaped similar to pears and can be up to 20 inches (51 cm) long. The skin is green when unripe and orange when ripe, while the flesh is yellow, orange or red. The fruit also has many black seeds, which are edible but bitter.'},
    {name: ' Broccoli', image: require('../assets/images/vitaminC/broccoli.jpg'), about:'Broccoli is a green vegetable that vaguely resembles a miniature tree. It belongs to the plant species known as Brassica oleracea. It s closely related to cabbage, Brussels sprouts, kale and cauliflower — all edible plants collectively referred to as cruciferous vegetables.'},
 
  ],
};

export {vitaminItems}