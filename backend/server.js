const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Multer configuration for storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        // We can rename it to always be 'resume.pdf' or keep the original
        // Let's keep it 'resume.pdf' to match the frontend expectations
        cb(null, 'resume.pdf');
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /pdf|docx|doc/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error("Only PDF and DOC files are allowed!"));
    }
});

// Routes
app.get('/', (req, res) => {
    res.send('Portfolio Backend is running...');
});

// Upload Resume
app.post('/api/resume/upload', upload.single('resume'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    res.json({ 
        message: 'Resume uploaded successfully!',
        filename: req.file.filename
    });
});

// Download/Fetch Resume
app.get('/api/resume/download', (req, res) => {
    const filePath = path.join(uploadsDir, 'resume.pdf');
    if (fs.existsSync(filePath)) {
        res.download(filePath, 'Harsha_Resume.pdf');
    } else {
        res.status(404).json({ message: 'Resume not found' });
    }
});

// Error handling
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: err.message });
    } else if (err) {
        return res.status(400).json({ message: err.message });
    }
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
