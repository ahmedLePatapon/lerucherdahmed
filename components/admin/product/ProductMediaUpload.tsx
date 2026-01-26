"use client";

import { useState } from "react";
import { ImagePlus, Trash2, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

interface ProductMediaUploadProps {
    images: string[];
    mainImageIndex: number;
    onImagesChange: (images: string[]) => void;
    onMainImageChange: (index: number) => void;
}

export function ProductMediaUpload({
    images,
    mainImageIndex,
    onImagesChange,
    onMainImageChange,
}: ProductMediaUploadProps) {
    const [newImageUrl, setNewImageUrl] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddImage = () => {
        if (newImageUrl.trim()) {
            onImagesChange([...images, newImageUrl.trim()]);
            setNewImageUrl("");
            setShowAddForm(false);
        }
    };

    const handleRemoveImage = (index: number) => {
        const newImages = images.filter((_, i) => i !== index);
        onImagesChange(newImages);
        if (index === mainImageIndex && newImages.length > 0) {
            onMainImageChange(0);
        } else if (index < mainImageIndex) {
            onMainImageChange(mainImageIndex - 1);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h4 className="text-sm font-semibold">Images</h4>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => setShowAddForm((s) => !s)} type="button">
                        <ImagePlus className="w-4 h-4 mr-2" /> Ajouter
                    </Button>
                </div>
            </div>

            {showAddForm && (
                <div className="flex gap-2 items-center">
                    <Input
                        placeholder="https://.../image.jpg"
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                    />
                    <Button onClick={handleAddImage} variant="primary" size="md">
                        Ajouter
                    </Button>
                    <Button onClick={() => setShowAddForm(false)} variant="ghost" size="md">
                        Annuler
                    </Button>
                </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((src, idx) => (
                    <div key={idx} className="relative rounded overflow-hidden border border-border-light">
                        <div className="w-full h-40 relative bg-gray-50">
                            {src ? (
                                <Image src={src} alt={`image-${idx}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                            ) : (
                                <div className="flex items-center justify-center h-full">Aucune image</div>
                            )}
                        </div>

                        <div className="absolute top-2 right-2 flex space-x-2">
                            <button
                                className="p-1 bg-white rounded shadow"
                                type="button"
                                onClick={() => onMainImageChange(idx)}
                                title="Définir comme principale"
                            >
                                <Star className={`w-4 h-4 ${idx === mainImageIndex ? 'text-yellow-400' : 'text-gray-400'}`} />
                            </button>
                            <button className="p-1 bg-white rounded shadow" type="button" onClick={() => handleRemoveImage(idx)} title="Supprimer">
                                <Trash2 className="w-4 h-4 text-red-500" />
                            </button>
                        </div>

                        <div className="p-2">
                            {idx === mainImageIndex && <Badge>Principale</Badge>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
