#!/bin/bash

# Genesis - Quick Start Script
# This script helps set up and run Genesis locally

echo "🎭 Genesis - Behavioural Food Intelligence System"
echo "=================================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it first."
    echo "📥 Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js detected: $(node --version)"
echo ""

# Navigate to genesis directory
if [ ! -f "package.json" ]; then
    echo "ℹ️  Please run this script from the genesis root directory"
    exit 1
fi

echo "📦 Installing dependencies..."
npm run install:all

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation complete!"
    echo ""
    echo "📝 Next Steps:"
    echo "=============="
    echo ""
    echo "1. Configure Backend API Key:"
    echo "   • Open: backend/.env.local"
    echo "   • Set GEMINI_API_KEY=your-key-here"
    echo ""
    echo "2. Start Backend (Terminal 1):"
    echo "   $ cd backend"
    echo "   $ npm run dev"
    echo ""
    echo "3. Start Frontend (Terminal 2):"
    echo "   $ cd frontend"
    echo "   $ npm run dev"
    echo ""
    echo "4. Open in Browser:"
    echo "   🌐 http://localhost:5173"
    echo ""
    echo "5. Try the Analyse Feature:"
    echo "   • Go to the Analyse tab"
    echo "   • Input: 'Pizza at 11 PM'"
    echo "   • Mood: 😴 Tired"
    echo "   • Watch the AI respond!"
    echo ""
else
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
