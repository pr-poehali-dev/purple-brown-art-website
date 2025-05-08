
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

type UploadedImage = {
  id: number;
  file: File;
  preview: string;
  title: string;
  category: string;
  description: string;
};

const categories = ["Классика", "Пейзаж", "Портрет", "Натюрморт", "Роспись стен", "Абстракция", "Другое"];

const UploadAlbum = () => {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: ""
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages: UploadedImage[] = Array.from(e.target.files).map((file, index) => ({
        id: Date.now() + index,
        file,
        preview: URL.createObjectURL(file),
        title: file.name.split('.')[0],
        category: "",
        description: ""
      }));
      
      setUploadedImages([...uploadedImages, ...newImages]);
      setSelectedImageId(newImages[0].id);
      setFormData({
        title: newImages[0].title,
        category: "",
        description: ""
      });
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleImageClick = (id: number) => {
    setSelectedImageId(id);
    const selectedImage = uploadedImages.find(img => img.id === id);
    if (selectedImage) {
      setFormData({
        title: selectedImage.title,
        category: selectedImage.category,
        description: selectedImage.description
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSaveImage = () => {
    if (selectedImageId === null) return;
    
    setUploadedImages(prev => prev.map(img => 
      img.id === selectedImageId ? { ...img, ...formData } : img
    ));
    
    toast({
      title: "Информация сохранена",
      description: `Данные для картины "${formData.title}" успешно обновлены`,
    });
  };

  const handleRemoveImage = (id: number) => {
    setUploadedImages(prev => prev.filter(img => img.id !== id));
    if (selectedImageId === id) {
      const remainingImages = uploadedImages.filter(img => img.id !== id);
      if (remainingImages.length > 0) {
        setSelectedImageId(remainingImages[0].id);
        const nextImage = remainingImages[0];
        setFormData({
          title: nextImage.title,
          category: nextImage.category,
          description: nextImage.description
        });
      } else {
        setSelectedImageId(null);
        setFormData({ title: "", category: "", description: "" });
      }
    }
  };

  const handleUploadAll = () => {
    // Here you would typically implement your upload logic to a server
    // For this demo, we'll just show a success message
    toast({
      title: "Работы загружены",
      description: `${uploadedImages.length} картин успешно добавлены в ваш альбом.`,
    });
  };

  return (
    <section id="upload" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Добавить новые работы
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Загрузите свои недавние работы в альбом галереи. Добавьте описание и категорию для лучшей навигации.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Загруженные работы</CardTitle>
              </CardHeader>
              <CardContent>
                {uploadedImages.length === 0 ? (
                  <div className="text-center py-8">
                    <Icon name="ImageIcon" className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">Нет загруженных работ</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {uploadedImages.map(img => (
                      <div 
                        key={img.id} 
                        className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors ${selectedImageId === img.id ? 'bg-purple-100' : 'hover:bg-gray-100'}`}
                        onClick={() => handleImageClick(img.id)}
                      >
                        <img 
                          src={img.preview} 
                          alt={img.title} 
                          className="w-16 h-16 object-cover rounded-md border"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{img.title}</p>
                          <p className="text-sm text-gray-500 truncate">{img.category || "Без категории"}</p>
                        </div>
                        <button
                          className="text-gray-400 hover:text-red-500"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveImage(img.id);
                          }}
                        >
                          <Icon name="Trash2" className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                <Button 
                  variant="outline" 
                  className="mt-4 w-full border-dashed"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Icon name="Upload" className="mr-2 h-4 w-4" />
                  Загрузить работы
                </Button>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Информация о работе</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedImageId ? (
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img 
                          src={uploadedImages.find(img => img.id === selectedImageId)?.preview} 
                          alt="Preview" 
                          className="w-full h-64 object-contain border rounded-md bg-gray-50"
                        />
                      </div>
                      <div className="md:w-2/3 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="title">Название работы</Label>
                          <Input 
                            id="title" 
                            name="title" 
                            value={formData.title} 
                            onChange={handleInputChange} 
                            placeholder="Введите название работы"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="category">Категория</Label>
                          <Select value={formData.category} onValueChange={handleCategoryChange}>
                            <SelectTrigger id="category">
                              <SelectValue placeholder="Выберите категорию" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map(category => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="description">Описание</Label>
                          <Textarea 
                            id="description" 
                            name="description" 
                            value={formData.description} 
                            onChange={handleInputChange} 
                            placeholder="Опишите вашу работу"
                            className="min-h-[100px]"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-3">
                      <Button variant="outline" onClick={() => setFormData({ title: "", category: "", description: "" })}>
                        Сбросить
                      </Button>
                      <Button onClick={handleSaveImage}>
                        Сохранить информацию
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Icon name="FileImage" className="w-20 h-20 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">Нет выбранной работы</h3>
                    <p className="text-gray-500 mb-6">Загрузите или выберите работу из списка слева</p>
                    <Button onClick={() => fileInputRef.current?.click()}>
                      <Icon name="Upload" className="mr-2 h-4 w-4" />
                      Загрузить новые работы
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {uploadedImages.length > 0 && (
              <div className="mt-6 flex justify-end">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700" onClick={handleUploadAll}>
                  <Icon name="Check" className="mr-2 h-5 w-5" />
                  Опубликовать все работы
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadAlbum;
