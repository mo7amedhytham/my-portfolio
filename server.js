require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/contact', async (req, res) => {
    const { name, email, rawMessage } = req.body;

    if (!name || !email || !rawMessage) {
        return res.status(400).json({ error: 'يرجى تعبئة جميع الحقول' });
    }

    try {
        // صياغة الرسالة بالذكاء الاصطناعي
        const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });
        const prompt = `
        أنت مساعد ذكي لرواد الأعمال. قام شخص بكتابة هذه الرسالة العفوية لمطور برمجيات (اسمه محمد هيثم).
        أرجوك أعد صياغتها لتكون رسالة بريد إلكتروني رسمية، احترافية، ومقنعة جداً باللغة العربية لعرض عمل أو تعاون.
        حافظ على المعنى الأصلي ولكن اجعلها بأسلوب راقي.
        الاسم: ${name}
        البريد: ${email}
        الرسالة الأصلية: "${rawMessage}"
        `;
        
        const result = await model.generateContent(prompt);
        const formalMessage = result.response.text();

        // هنا يمكنك طباعتها في السيرفر أو إرسالها بأي طريقة مريحة لك
        console.log("-----------------------------------------");
        console.log(`📩 رسالة جديدة من: ${name} (${email})`);
        console.log(formalMessage);
        console.log("-----------------------------------------");

        res.status(200).json({ 
            success: 'تمت صياغة رسالتك بنجاح!', 
            formalMessage: formalMessage 
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'حدث خطأ أثناء معالجة الرسالة بالذكاء الاصطناعي.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));