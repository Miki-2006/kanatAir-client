import { useState } from "react";

const Scanner = () => {
    const [image, setImage] = useState(null)
    const [extractedData, setExtractedData] = useState('')

    const handleImageScan = async () => {
        const reader = new FileReader()
        reader.onload = async () => {
            const base64Image = reader.result.split(',')[1]

            try {
                const response = await fetch('https://kanat-air-server.vercel.app//scanner', {       
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({imageBase64: base64Image})
                })
                const data = await response.json()
                if (data.success){
                    console.log("Данные:", data.data);
                } else {
                    console.error('Ошибка:', data.error);
                }
            } catch (err) {
                console.error('Ошибка при получении:', err);
            }
        }
        reader.readAsDataURL(image)
        
    }

    return (
        <div>
            <input type="file" id="passport_image" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
            <button onClick={handleImageScan}>Scan</button>
            <span>Данные:</span>
            <pre>{extractedData}</pre>
        </div>
    )
}

export default Scanner