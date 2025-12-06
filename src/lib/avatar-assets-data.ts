
// This file holds the structure for avatar assets.
// We are using picsum.photos for placeholders with specific seeds to ensure uniqueness.
// Once you have your assets in Firebase Storage, you can replace these URLs.

const urlTemplate = (seed: string) => `https://picsum.photos/seed/${seed}/200/200`;

export const avatarData = {
  "layerOrder": ["base", "pants", "shirt", "hair"],
  "characters": {
    "cat": {
      "name": "Cat",
      "base": urlTemplate("cat-base"),
      "hair": [
        { "name": "Spiky", "image": urlTemplate("cat-hair-spiky") },
        { "name": "Curly", "image": urlTemplate("cat-hair-curly") },
        { "name": "Straight", "image": urlTemplate("cat-hair-straight") },
        { "name": "Short", "image": urlTemplate("cat-hair-short") },
        { "name": "Wavy", "image": urlTemplate("cat-hair-wavy") }
      ],
      "shirts": [
        { "name": "Shirt 1", "image": urlTemplate("cat-shirt-1") },
        { "name": "Shirt 2", "image": urlTemplate("cat-shirt-2") },
        { "name": "Shirt 3", "image": urlTemplate("cat-shirt-3") },
        { "name": "Shirt 4", "image": urlTemplate("cat-shirt-4") },
        { "name": "Shirt 5", "image": urlTemplate("cat-shirt-5") }
      ],
      "pants": [
        { "name": "Pants 1", "image": urlTemplate("cat-pants-1") },
        { "name": "Pants 2", "image": urlTemplate("cat-pants-2") },
        { "name": "Pants 3", "image": urlTemplate("cat-pants-3") },
        { "name": "Pants 4", "image": urlTemplate("cat-pants-4") },
        { "name": "Pants 5", "image": urlTemplate("cat-pants-5") }
      ]
    },
    "dog": {
      "name": "Dog",
      "base": urlTemplate("dog-base"),
      "hair": [
        { "name": "Spiky", "image": urlTemplate("dog-hair-spiky") },
        { "name": "Curly", "image": urlTemplate("dog-hair-curly") },
        { "name": "Straight", "image": urlTemplate("dog-hair-straight") },
        { "name": "Short", "image": urlTemplate("dog-hair-short") },
        { "name": "Wavy", "image": urlTemplate("dog-hair-wavy") }
      ],
      "shirts": [
        { "name": "Shirt 1", "image": urlTemplate("dog-shirt-1") },
        { "name": "Shirt 2", "image": urlTemplate("dog-shirt-2") },
        { "name": "Shirt 3", "image": urlTemplate("dog-shirt-3") },
        { "name": "Shirt 4", "image": urlTemplate("dog-shirt-4") },
        { "name": "Shirt 5", "image": urlTemplate("dog-shirt-5") }
      ],
      "pants": [
        { "name": "Pants 1", "image": urlTemplate("dog-pants-1") },
        { "name": "Pants 2", "image": urlTemplate("dog-pants-2") },
        { "name": "Pants 3", "image": urlTemplate("dog-pants-3") },
        { "name": "Pants 4", "image": urlTemplate("dog-pants-4") },
        { "name": "Pants 5", "image": urlTemplate("dog-pants-5") }
      ]
    },
    "panda": {
      "name": "Panda",
      "base": urlTemplate("panda-base"),
      "hair": [
        { "name": "Spiky", "image": urlTemplate("panda-hair-spiky") },
        { "name": "Curly", "image": urlTemplate("panda-hair-curly") },
        { "name": "Straight", "image": urlTemplate("panda-hair-straight") },
        { "name": "Short", "image": urlTemplate("panda-hair-short") },
        { "name": "Wavy", "image": urlTemplate("panda-hair-wavy") }
      ],
      "shirts": [
        { "name": "Shirt 1", "image": urlTemplate("panda-shirt-1") },
        { "name": "Shirt 2", "image": urlTemplate("panda-shirt-2") },
        { "name": "Shirt 3", "image": urlTemplate("panda-shirt-3") },
        { "name": "Shirt 4", "image": urlTemplate("panda-shirt-4") },
        { "name": "Shirt 5", "image": urlTemplate("panda-shirt-5") }
      ],
      "pants": [
        { "name": "Pants 1", "image": urlTemplate("panda-pants-1") },
        { "name": "Pants 2", "image": urlTemplate("panda-pants-2") },
        { "name": "Pants 3", "image": urlTemplate("panda-pants-3") },
        { "name": "Pants 4", "image": urlTemplate("panda-pants-4") },
        { "name": "Pants 5", "image": urlTemplate("panda-pants-5") }
      ]
    },
    "fox": {
      "name": "Fox",
      "base": urlTemplate("fox-base"),
      "hair": [
        { "name": "Spiky", "image": urlTemplate("fox-hair-spiky") },
        { "name": "Curly", "image": urlTemplate("fox-hair-curly") },
        { "name": "Straight", "image": urlTemplate("fox-hair-straight") },
        { "name": "Short", "image": urlTemplate("fox-hair-short") },
        { "name": "Wavy", "image": urlTemplate("fox-hair-wavy") }
      ],
      "shirts": [
        { "name": "Shirt 1", "image": urlTemplate("fox-shirt-1") },
        { "name": "Shirt 2", "image": urlTemplate("fox-shirt-2") },
        { "name": "Shirt 3", "image": urlTemplate("fox-shirt-3") },
        { "name": "Shirt 4", "image": urlTemplate("fox-shirt-4") },
        { "name": "Shirt 5", "image": urlTemplate("fox-shirt-5") }
      ],
      "pants": [
        { "name": "Pants 1", "image": urlTemplate("fox-pants-1") },
        { "name": "Pants 2", "image": urlTemplate("fox-pants-2") },
        { "name": "Pants 3", "image": urlTemplate("fox-pants-3") },
        { "name": "Pants 4", "image": urlTemplate("fox-pants-4") },
        { "name": "Pants 5", "image": urlTemplate("fox-pants-5") }
      ]
    },
    "bunny": {
      "name": "Bunny",
      "base": urlTemplate("bunny-base"),
      "hair": [
        { "name": "Spiky", "image": urlTemplate("bunny-hair-spiky") },
        { "name": "Curly", "image": urlTemplate("bunny-hair-curly") },
        { "name": "Straight", "image": urlTemplate("bunny-hair-straight") },
        { "name": "Short", "image": urlTemplate("bunny-hair-short") },
        { "name": "Wavy", "image": urlTemplate("bunny-hair-wavy") }
      ],
      "shirts": [
        { "name": "Shirt 1", "image": urlTemplate("bunny-shirt-1") },
        { "name": "Shirt 2", "image": urlTemplate("bunny-shirt-2") },
        { "name": "Shirt 3", "image": urlTemplate("bunny-shirt-3") },
        { "name": "Shirt 4", "image": urlTemplate("bunny-shirt-4") },
        { "name": "Shirt 5", "image": urlTemplate("bunny-shirt-5") }
      ],
      "pants": [
        { "name": "Pants 1", "image": urlTemplate("bunny-pants-1") },
        { "name": "Pants 2", "image": urlTemplate("bunny-pants-2") },
        { "name": "Pants 3", "image": urlTemplate("bunny-pants-3") },
        { "name": "Pants 4", "image": urlTemplate("bunny-pants-4") },
        { "name": "Pants 5", "image": urlTemplate("bunny-pants-5") }
      ]
    }
  }
};
