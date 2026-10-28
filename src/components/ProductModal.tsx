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
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container: Bottom-sheet en mobile, centrado en desktop */}
            <div className="relative w-full max-w-2xl bg-white max-h-[85vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl z-10 border border-stone-200 rounded-t-2xl sm:rounded-none">
                {/* Barra superior de arrastre visual para mobile */}
                <div className="sm:hidden w-12 h-1.5 bg-stone-300 rounded-full mx-auto my-3" />

                <button
                    onClick={onClose}
                    aria-label="Cerrar modal"
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 flex items-center justify-center bg-stone-100 hover:bg-stone-200 rounded-full text-stone-700 text-sm cursor-pointer"
                >
                    ✕
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Imagen */}
                    <div className="aspect-[4/3] sm:aspect-[4/5] bg-stone-100">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Información */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between">
                        <div>
                            <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400">
                                {product.brand}
                            </span>
                            <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mt-1 leading-snug">
                                {product.name}
                            </h3>
                            <p className="text-xs text-stone-500 mt-1">{product.subtitle}</p>
                            <p className="text-xl font-bold text-stone-900 mt-3">
                                ${product.price.toLocaleString('es-AR')}
                            </p>

                            {/* FuXion */}
                            {product.fuxionDetails && (
                                <div className="mt-4 border-t border-stone-100 pt-3 text-xs space-y-2 text-stone-600">
                                    <p><strong className="text-stone-800">Beneficios:</strong> {product.fuxionDetails.benefit}</p>
                                    <p><strong className="text-stone-800">Modo de uso:</strong> {product.fuxionDetails.howToUse}</p>
                                    <p><strong className="text-stone-800">Ingredientes:</strong> {product.fuxionDetails.keyIngredients}</p>
                                </div>
                            )}

                            {/* Millanel */}
                            {product.fragranceDetails && (
                                <div className="mt-4 border-t border-stone-100 pt-3 text-xs space-y-2 text-stone-600">
                                    <p><strong className="text-stone-800">Notas de Salida:</strong> {product.fragranceDetails.topNotes}</p>
                                    <p><strong className="text-stone-800">Corazón:</strong> {product.fragranceDetails.heartNotes}</p>
                                    <p><strong className="text-stone-800">Fondo:</strong> {product.fragranceDetails.baseNotes}</p>
                                    <p><strong className="text-stone-800">Ocasión:</strong> {product.fragranceDetails.occasion} ({product.fragranceDetails.season})</p>
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
                            className="mt-6 w-full bg-stone-900 text-white py-3.5 text-xs uppercase tracking-wider font-semibold active:scale-98 transition-all cursor-pointer"
                        >
                            Agregar a la bolsa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};