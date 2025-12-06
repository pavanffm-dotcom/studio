// This file holds the structure for avatar assets, using Firebase Storage URL templates.
// Replace '<YOUR_BUCKET>' with your actual Firebase Storage bucket name.
const BUCKET_NAME = 'ai-planets-9-61203782-d4b23'; // Placeholder bucket name

const urlTemplate = (path: string) => `https://firebasestorage.googleapis.com/v0/b/${BUCKET_NAME}.appspot.com/o/${encodeURIComponent(path)}?alt=media`;

export const avatarData = {
  "layerOrder": ["base", "pants", "shirt", "hair"],
  "characters": {
    "cat": {
      "name": "Cat",
      "base": urlTemplate("avatars/cat/base.png"),
      "hair": [
        { "name": "Spiky", "image": urlTemplate("avatars/cat/hair_spiky.png") },
        { "name": "Curly", "image": urlTemplate("avatars/cat/hair_curly.png") },
        { "name": "Straight", "image": urlTemplate("avatars/cat/hair_straight.png") },
        { "name": "Short", "image": urlTemplate("avatars/cat/hair_short.png") },
        { "name": "Wavy", "image": urlTemplate("avatars/cat/hair_wavy.png") }
      ],
      "shirts": [
        { "name": "Shirt 1", "image": urlTemplate("avatars/cat/shirt_1.png") },
        { "name": "Shirt 2", "image": urlTemplate("avatars/cat/shirt_2.png") },
        { "name": "Shirt 3", "image": urlTemplate("avatars/cat/shirt_3.png") },
        { "name": "Shirt 4", "image": urlTemplate("avatars/cat/shirt_4.png") },
        { "name": "Shirt 5", "image": urlTemplate("avatars/cat/shirt_5.png") }
      ],
      "pants": [
        { "name": "Pants 1", "image": urlTemplate("avatars/cat/pants_1.png") },
        { "name": "Pants 2", "image": urlTemplate("avatars/cat/pants_2.png") },
        { "name": "Pants 3", "image": urlTemplate("avatars/cat/pants_3.png") },
        { "name": "Pants 4", "image": urlTemplate("avatars/cat/pants_4.png") },
        { "name": "Pants 5", "image": urlTemplate("avatars/cat/pants_5.png") }
      ]
    },
    "dog": {
        "name": "Dog",
      "base": urlTemplate("avatars/dog/base.png"),
      "hair": [
        { "name": "Spiky", "image": urlTemplate("avatars/dog/hair_spiky.png") },
        { "name": "Curly", "image": urlTemplate("avatars/dog/hair_curly.png") },
        { "name": "Straight", "image": urlTemplate("avatars/dog/hair_straight.png") },
        { "name": "Short", "image": urlTemplate("avatars/dog/hair_short.png") },
        { "name": "Wavy", "image": urlTemplate("avatars/dog/hair_wavy.png") }
      ],
      "shirts": [
        { "name": "Shirt 1", "image": urlTemplate("avatars/dog/shirt_1.png") },
        { "name": "Shirt 2", "image": urlTemplate("avatars/dog/shirt_2.png") },
        { "name": "Shirt 3", "image": urlTemplate("avatars/dog/shirt_3.png") },
        { "name": "Shirt 4", "image": urlTemplate("avatars/dog/shirt_4.png") },
        { "name": "Shirt 5", "image": urlTemplate("avatars/dog/shirt_5.png") }
      ],
      "pants": [
        { "name": "Pants 1", "image": urlTemplate("avatars/dog/pants_1.png") },
        { "name": "Pants 2", "image": urlTemplate("avatars/dog/pants_2.png") },
        { "name": "Pants 3", "image": urlTemplate("avatars/dog/pants_3.png") },
        { "name": "Pants 4", "image": urlTemplate("avatars/dog/pants_4.png") },
        { "name": "Pants 5", "image": urlTemplate("avatars/dog/pants_5.png") }
      ]
    },
    "panda": {
      "name": "Panda",
      "base": urlTemplate("avatars/panda/base.png"),
      "hair": [
        { "name": "Spiky", "image": urlTemplate("avatars/panda/hair_spiky.png") },
        { "name": "Curly", "image": urlTemplate("avatars/panda/hair_curly.png") },
        { "name": "Straight", "image": urlTemplate("avatars/panda/hair_straight.png") },
        { "name": "Short", "image": urlTemplate("avatars/panda/hair_short.png") },
        { "name": "Wavy", "image": urlTemplate("avatars/panda/hair_wavy.png") }
      ],
      "shirts": [
        { "name": "Shirt 1", "image": urlTemplate("avatars/panda/shirt_1.png") },
        { "name": "Shirt 2", "image": urlTemplate("avatars/panda/shirt_2.png") },
        { "name": "Shirt 3", "image": urlTemplate("avatars/panda/shirt_3.png") },
        { "name": "Shirt 4", "image": urlTemplate("avatars/panda/shirt_4.png") },
        { "name": "Shirt 5", "image": urlTemplate("avatars/panda/shirt_5.png") }
      ],
      "pants": [
        { "name": "Pants 1", "image": urlTemplate("avatars/panda/pants_1.png") },
        { "name": "Pants 2", "image": urlTemplate("avatars/panda/pants_2.png") },
        { "name": "Pants 3", "image": urlTemplate("avatars/panda/pants_3.png") },
        { "name": "Pants 4", "image": urlTemplate("avatars/panda/pants_4.png") },
        { "name": "Pants 5", "image": urlTemplate("avatars/panda/pants_5.png") }
      ]
    },
    "fox": {
      "name": "Fox",
      "base": urlTemplate("avatars/fox/base.png"),
      "hair": [
        { "name": "Spiky", "image": urlTemplate("avatars/fox/hair_spiky.png") },
        { "name": "Curly", "image": urlTemplate("avatars/fox/hair_curly.png") },
        { "name": "Straight", "image": urlTemplate("avatars/fox/hair_straight.png") },
        { "name": "Short", "image": urlTemplate("avatars/fox/hair_short.png") },
        { "name": "Wavy", "image": urlTemplate("avatars/fox/hair_wavy.png") }
      ],
      "shirts": [
        { "name": "Shirt 1", "image": urlTemplate("avatars/fox/shirt_1.png") },
        { "name": "Shirt 2", "image": urlTemplate("avatars/fox/shirt_2.png") },
        { "name": "Shirt 3", "image": urlTemplate("avatars/fox/shirt_3.png") },
        { "name": "Shirt 4", "image": urlTemplate("avatars/fox/shirt_4.png") },
        { "name": "Shirt 5", "image": urlTemplate("avatars/fox/shirt_5.png") }
      ],
      "pants": [
        { "name": "Pants 1", "image": urlTemplate("avatars/fox/pants_1.png") },
        { "name": "Pants 2", "image": urlTemplate("avatars/fox/pants_2.png") },
        { "name": "Pants 3", "image": urlTemplate("avatars/fox/pants_3.png") },
        { "name": "Pants 4", "image": urlTemplate("avatars/fox/pants_4.png") },
        { "name": "Pants 5", "image": urlTemplate("avatars/fox/pants_5.png") }
      ]
    },
    "bunny": {
      "name": "Bunny",
      "base": urlTemplate("avatars/bunny/base.png"),
      "hair": [
        { "name": "Spiky", "image": urlTemplate("avatars/bunny/hair_spiky.png") },
        { "name": "Curly", "image": urlTemplate("avatars/bunny/hair_curly.png") },
        { "name": "Straight", "image": urlTemplate("avatars/bunny/hair_straight.png") },
        { "name": "Short", "image": urlTemplate("avatars/bunny/hair_short.png") },
        { "name": "Wavy", "image": urlTemplate("avatars/bunny/hair_wavy.png") }
      ],
      "shirts": [
        { "name": "Shirt 1", "image": urlTemplate("avatars/bunny/shirt_1.png") },
        { "name": "Shirt 2", "image": urlTemplate("avatars/bunny/shirt_2.png") },
        { "name": "Shirt 3", "image": urlTemplate("avatars/bunny/shirt_3.png") },
        { "name": "Shirt 4", "image": urlTemplate("avatars/bunny/shirt_4.png") },
        { "name": "Shirt 5", "image": urlTemplate("avatars/bunny/shirt_5.png") }
      ],
      "pants": [
        { "name": "Pants 1", "image": urlTemplate("avatars/bunny/pants_1.png") },
        { "name": "Pants 2", "image": urlTemplate("avatars/bunny/pants_2.png") },
        { "name": "Pants 3", "image": urlTemplate("avatars/bunny/pants_3.png") },
        { "name": "Pants 4", "image": urlTemplate("avatars/bunny/pants_4.png") },
        { "name": "Pants 5", "image": urlTemplate("avatars/bunny/pants_5.png") }
      ]
    }
  }
};
