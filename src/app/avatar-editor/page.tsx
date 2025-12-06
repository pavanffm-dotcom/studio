
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { avatarData } from '@/lib/avatar-assets-data';
import { cn } from '@/lib/utils';

type CharacterKey = keyof typeof avatarData.characters;

export default function AvatarEditorPage() {
    const characters = useMemo(() => Object.values(avatarData.characters), []);
    const characterKeys = useMemo(() => Object.keys(avatarData.characters) as CharacterKey[], []);

    const [selectedCharacterKey, setSelectedCharacterKey] = useState<CharacterKey>(characterKeys[0]);
    
    const selectedCharacter = useMemo(() => avatarData.characters[selectedCharacterKey], [selectedCharacterKey]);

    const [selectedHair, setSelectedHair] = useState(selectedCharacter.hair[0]);
    const [selectedShirt, setSelectedShirt] = useState(selectedCharacter.shirts[0]);
    const [selectedPants, setSelectedPants] = useState(selectedCharacter.pants[0]);

    // Reset accessories when character changes
    React.useEffect(() => {
        setSelectedHair(selectedCharacter.hair[0]);
        setSelectedShirt(selectedCharacter.shirts[0]);
        setSelectedPants(selectedCharacter.pants[0]);
    }, [selectedCharacter]);

    const layerOrder = avatarData.layerOrder;
    const layers = {
        base: selectedCharacter.base,
        hair: selectedHair.image,
        shirt: selectedShirt.image,
        pants: selectedPants.image,
    };

    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
            </div>
            <div className="relative z-10 w-full max-w-sm pt-6 px-4">
                <header className="flex items-center justify-between gap-4">
                    <Link href="/community/my-profile" passHref>
                        <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
                            <ArrowLeft />
                        </Button>
                    </Link>
                    <h1 className="text-2xl font-bold text-foreground">Avatar Editor</h1>
                    <Button size="icon" className="w-12 h-12 rounded-full glow-shadow">
                        <Save />
                    </Button>
                </header>
            </div>

            <main className="relative z-10 w-full max-w-sm flex-1 flex flex-col min-h-0 mt-6">
                <div className="w-full aspect-square bg-card/50 rounded-3xl soft-shadow flex items-center justify-center overflow-hidden">
                    <div className="relative w-48 h-48">
                        {layerOrder.map(layerName => {
                            const layerSrc = layers[layerName as keyof typeof layers];
                            if (!layerSrc) return null;
                            return <Image key={layerName} src={layerSrc} alt={layerName} layout="fill" objectFit="contain" className="absolute" />;
                        })}
                    </div>
                </div>

                <div className="flex-grow bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
                    <Tabs defaultValue="character" className="h-full flex flex-col">
                        <TabsList className="grid w-full grid-cols-4 mt-4">
                            <TabsTrigger value="character">Character</TabsTrigger>
                            <TabsTrigger value="hair">Hair</TabsTrigger>
                            <TabsTrigger value="shirt">Shirt</TabsTrigger>
                            <TabsTrigger value="pants">Pants</TabsTrigger>
                        </TabsList>
                        <div className="flex-grow overflow-hidden">
                            <TabsContent value="character" className="h-full overflow-y-auto no-scrollbar">
                                <div className="grid grid-cols-3 gap-4 p-4">
                                    {characterKeys.map(key => (
                                        <Card key={key} onClick={() => setSelectedCharacterKey(key)} className={cn("p-2 aspect-square soft-shadow transition-all", selectedCharacterKey === key && "ring-2 ring-primary")}>
                                            <Image src={avatarData.characters[key].base} alt={avatarData.characters[key].name} width={100} height={100} className="w-full h-full object-contain" />
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                             <TabsContent value="hair" className="h-full overflow-y-auto no-scrollbar">
                                <div className="grid grid-cols-3 gap-4 p-4">
                                    {selectedCharacter.hair.map(item => (
                                        <Card key={item.name} onClick={() => setSelectedHair(item)} className={cn("p-2 aspect-square soft-shadow transition-all", selectedHair.name === item.name && "ring-2 ring-primary")}>
                                             <Image src={item.image} alt={item.name} width={100} height={100} className="w-full h-full object-contain" />
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="shirt" className="h-full overflow-y-auto no-scrollbar">
                                <div className="grid grid-cols-3 gap-4 p-4">
                                    {selectedCharacter.shirts.map(item => (
                                        <Card key={item.name} onClick={() => setSelectedShirt(item)} className={cn("p-2 aspect-square soft-shadow transition-all", selectedShirt.name === item.name && "ring-2 ring-primary")}>
                                             <Image src={item.image} alt={item.name} width={100} height={100} className="w-full h-full object-contain" />
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="pants" className="h-full overflow-y-auto no-scrollbar">
                                <div className="grid grid-cols-3 gap-4 p-4">
                                    {selectedCharacter.pants.map(item => (
                                        <Card key={item.name} onClick={() => setSelectedPants(item)} className={cn("p-2 aspect-square soft-shadow transition-all", selectedPants.name === item.name && "ring-2 ring-primary")}>
                                             <Image src={item.image} alt={item.name} width={100} height={100} className="w-full h-full object-contain" />
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </main>
        </div>
    );
}
