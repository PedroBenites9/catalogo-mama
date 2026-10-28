import React from 'react';
import type { Product } from '../data/products';

interface Props {
    product: Product | null;
    onClose: () => void;
    onAddToCart: (p: Product) => void;
}

export const ProductModal: React.FC<Props> = ({ product, onClose, onAddToCart }) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-stone-950/50 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            />

            {/* Ventana modal */}
            <div className="relative w-full max-w-2xl bg-white max-h-[90vh] overflow-y-auto shadow-2xl z-10 border border-stone-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-stone-100 text-stone-700 text-lg cursor-pointer"
                >
                    ✕
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Imagen */}
                    <div className="aspect-[4/5] bg-stone-100">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Información completa */}
                    <div className="p-6 flex flex-col justify-between">
                        <div>
                            <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400">
                                {product.brand}
                            </span>
                            <h3 className="font-serif text-2xl text-stone-900 mt-1">
                                {product.name}
                            </h3>
                            <p className="text-xs text-stone-500 mt-1">{product.subtitle}</p>
                            <p className="text-xl font-bold text-stone-900 mt-3">
                                ${product.price.toLocaleString('es-AR')}
                            </p>

                            {/* Detalle FuXion */}
                            {product.fuxionDetails && (
                                <div className="mt-4 border-t border-stone-100 pt-4 text-xs space-y-2 text-stone-600">
                                    <p>
                                        <strong className="text-stone-800">Beneficios:</strong>{' '}
                                        {product.fuxionDetails.benefit}
                                    </p>
                                    <p>
                                        <strong className="text-stone-800">Modo de uso:</strong>{' '}
                                        {product.fuxionDetails.howToUse}
                                    </p>
                                    <p>
                                        <strong className="text-stone-800">Ingredientes activos:</strong>{' '}
                                        {product.fuxionDetails.keyIngredients}
                                    </p>
                                </div>
                            )}

                            {/* Detalle Millanel */}
                            {product.fragranceDetails && (
                                <div className="mt-4 border-t border-stone-100 pt-4 text-xs space-y-2 text-stone-600">
                                    <p>
                                        <strong className="text-stone-800">Salida:</strong>{' '}
                                        {product.fragranceDetails.topNotes}
                                    </p>
                                    <p>
                                        <strong className="text-stone-800">Corazón:</strong>{' '}
                                        {product.fragranceDetails.heartNotes}
                                    </p>
                                    <p>
                                        <strong className="text-stone-800">Fondo:</strong>{' '}
                                        {product.fragranceDetails.baseNotes}
                                    </p>
                                    <p>
                                        <strong className="text-stone-800">Ocasión sugerida:</strong>{' '}
                                        {product.fragranceDetails.occasion} ({product.fragranceDetails.season})
                                    </p>
                                    {product.disclaimer && (
                                        <p className="text-[10px] text-stone-400 italic pt-2 border-t border-stone-100">
                                            * {product.disclaimer}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => {
                                onAddToCart(product);
                                onClose();
                            }}
                            className="mt-6 w-full bg-stone-900 text-white py-3 text-xs uppercase tracking-wider font-medium hover:bg-stone-700 active:scale-98 transition-all cursor-pointer"
                        >
                            Agregar a la bolsa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};