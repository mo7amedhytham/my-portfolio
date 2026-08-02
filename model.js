require('dotenv').config();

async function checkModels() {
    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.models) {
            console.log("✅ النماذج المتاحة لمفتاحك هي:");
            const modelNames = data.models
                .filter(m => m.supportedGenerationMethods.includes("generateContent"))
                .map(m => m.name.replace('models/', ''));
            console.log(modelNames);
        } else {
            console.log("❌ يوجد مشكلة في جلب النماذج:", data);
        }
    } catch (error) {
        console.error("حدث خطأ:", error);
    }
}

checkModels();