async function handleUpload(selectedFile: any, mediaType: string) {
  if (!selectedFile || !mediaType) return;

  const formData = new FormData();
  formData.append("file", selectedFile);
  formData.append("upload_preset", "upload");

  try {
    const response = await fetch(
      mediaType !== "video"
        ? "https://api.cloudinary.com/v1_1/dowpdkc0y/image/upload"
        : "https://api.cloudinary.com/v1_1/dowpdkc0y/video/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    throw new Error("Error Occured uploading file");
  }
}

async function uploadMediaAndGetUrls(media: File[]) {
  try {
    const result = [];
    for (let i = 0; i < media.length; i++) {
      let mediaType = media[i]?.type.split("/")[0];
      const url = await handleUpload(media[i], mediaType);
      result.push({ url: url, type: mediaType });
    }
    return result;
  } catch (error) {
    throw new Error("Error Occured uploading file");
  }
}

export { handleUpload, uploadMediaAndGetUrls };
