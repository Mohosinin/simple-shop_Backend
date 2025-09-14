const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

// Fresh sample products data
const sampleProducts = [
    {
        name: "iPhone 15 Pro Max",
        price: 1199.99,
        description: "Latest iPhone with titanium design and A17 Pro chip",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        stock: 25
    },
    {
        name: "MacBook Air M3",
        price: 1299.99,
        description: "13-inch MacBook Air with M3 chip, perfect for work and creativity",
        category: "Electronics", 
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        stock: 15
    },
    {
        name: "AirPods Pro 2nd Gen",
        price: 249.99,
        description: "Active noise cancelling wireless earbuds with spatial audio",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        stock: 50
    },
    {
        name: "Apple Watch Series 9",
        price: 399.99,
        description: "Advanced health monitoring and fitness tracking smartwatch",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        stock: 30
    },
    {
        name: "iPad Pro 12.9",
        price: 1099.99,
        description: "M2-powered iPad Pro with Liquid Retina XDR display",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        stock: 20
    },
    {
        name: "Canon EOS R5",
        price: 3899.99,
        description: "Professional mirrorless camera with 45MP sensor and 8K video",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
        stock: 8
    },
    {
        name: "Sony WH-1000XM5",
        price: 399.99,
        description: "Industry-leading noise canceling wireless headphones",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        stock: 35
    },
    {
        name: "Nintendo Switch OLED",
        price: 349.99,
        description: "Gaming console with vibrant OLED screen for home and portable play",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
        stock: 40
    },
    {
        name: "Samsung 65 4K Smart TV",
        price: 899.99,
        description: "Crystal clear 4K display with smart TV features and HDR",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
        stock: 12
    },
    {
        name: "Kindle Paperwhite",
        price: 139.99,
        description: "Waterproof e-reader with high-resolution display and weeks of battery",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1481740184820-d7bbaa4ce98c?w=400&h=400&fit=crop",
        stock: 60
    }
];

async function seedDatabase() {
    try {
        // Connect to MongoDB
        console.log('🔗 Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Connected to MongoDB');

        // Clear existing data
        console.log('🗑️ Clearing existing data...');
        await Product.deleteMany({});
        console.log('✅ Existing products cleared');

        // Insert sample products
        console.log('📦 Inserting fresh sample products...');
        const products = await Product.insertMany(sampleProducts);

        console.log(`✅ Successfully added ${products.length} products:`);
        products.forEach(product => {
            console.log(`   - ${product.name} ($${product.price}) - Stock: ${product.stock}`);
        });

        console.log('\n🎉 Database seeded successfully!');
        console.log('💡 Your cart will be automatically cleaned on next page load.');
        console.log('🚀 You can now start your server and test the fixed application.');

    } catch (error) {
        console.error('❌ Error seeding database:', error);
    } finally {
        // Close database connection
        await mongoose.connection.close();
        console.log('🔐 Database connection closed');
    }
}

// Run the seed function
seedDatabase();