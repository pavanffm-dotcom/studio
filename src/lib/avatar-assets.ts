
export interface AvatarAsset {
    name: string;
    image: string;
}

const generateAssets = (category: string, names: string[]): AvatarAsset[] => {
    return names.map((name, index) => ({
        name: name,
        image: `https://picsum.photos/seed/${category}-${name.toLowerCase().replace(' ', '')}-${index}/200/200`
    }));
};

const baseCharacterNames = ['Cat', 'Dog', 'Panda', 'Fox', 'Bunny'];
const hairstyleNames = ['Spiky', 'Curly', 'Straight', 'Short', 'Wavy'];
const shirtNames = ['Red Shirt', 'Blue Shirt', 'Green Shirt', 'Yellow Shirt', 'Purple Shirt'];
const pantNames = ['Blue Jeans', 'Black Pants', 'Khaki Shorts', 'Grey Trousers', 'White Pants'];

export const avatarAssets = {
    baseCharacters: generateAssets('animal', baseCharacterNames),
    hairstyles: generateAssets('hair', hairstyleNames),
    shirts: generateAssets('shirt', shirtNames),
    pants: generateAssets('pants', pantNames),
};
