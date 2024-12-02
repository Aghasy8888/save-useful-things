const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };
  
  const processImagesForLocalStorage = async (imageFiles: (File | null)[]) => {
    const nonNullFiles = imageFiles.filter(file => file !== null) as File[];
    const base64Images = await Promise.all(nonNullFiles.map((file) => convertToBase64(file)));
    
   return JSON.stringify(base64Images);
  };

  export default processImagesForLocalStorage;