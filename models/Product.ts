import mongoose, { Schema, model, Model } from "mongoose";
import { IProduct } from "../interfaces";

const productSchema = new Schema({

    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [{
        type: String,
        enum: {
            values: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            messages: '{VALUE} no es una talla válida'
        }
    }],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
        type: String,
        enum: {
            values: ['shirts', 'pants', 'hoodies', 'hats'],
            messages: '{VALUE} no es un tipo válido'
        }
    },
    gender: {
        type: String,
        enum: {
            values: ['men', 'women', 'kid', 'unisex'],
            messages: '{VALUE} no es un género válido'
        }
    },
}, {
    timestamps: true,
});

// Todo: Crear indice que me ayude a conectar dos campos check

productSchema.index({
    title: 'text',
    tags: 'text'
})

const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema);

export default Product;