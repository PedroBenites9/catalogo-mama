import React from 'react';
import type { Product } from '../data/Products';

interface Props {
    product: Product;
    onOpenModal: (p: Product) => void;
    onAddToCart: (p: Product) => void;
}

export const ProductCard: React.FC<Props> = ({ product, onOpenModal, onAddToCart }) => {
    return (
        <article className="group flex flex-col justify-between border border-stone-200 bg-white transition-all duration-300 hover:border-stone-400 hover:shadow-sm">
            {/* Imagen & Aspect Ratio Zara */}
            <div
                onClick={() => onOpenModal(product)}
                className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100 cursor-pointer"
            >
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                />
                {product.badges && product.badges.length > 0 && (
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                        {product.badges.map((b) => (
                            <span
                                key={b}
                                className="bg-white/95 backdrop-blur-sm px-2 py-0.5 text-[10px] tracking-widest uppercase font-medium text-stone-800 shadow-xs"
                            >
                                {b}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Contenido / Box Model */}
            <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400">
                        {product.brand}
                    </span>
                    <h2
                        onClick={() => onOpenModal(product)}
                        className="mt-1 font-serif text-lg tracking-tight text-stone-900 cursor-pointer hover:underline"
                    >
                        {product.name}
                    </h2>
                    <p className="mt-0.5 text-xs text-stone-500 line-clamp-1">
                        {product.subtitle}
                    </p>

                    {/* Información rápida para FuXion */}
                    {product.fuxionDetails && (
                        <div className="mt-3 border-t border-stone-100 pt-3 text-xs text-stone-600 space-y-1">
                            <p>
                                <strong className="text-stone-800">Beneficio:</strong>{' '}
                                {product.fuxionDetails.benefit}
                            </p>
                            <p className="text-[11px] text-stone-500">
                                <strong>Toma:</strong> {product.fuxionDetails.howToUse}
                            </p>
                        </div>
                    )}

                    {/* Información rápida para Perfumes Millanel */}
                    {product.fragranceDetails && (
                        <div className="mt-3 border-t border-stone-100 pt-3 text-[11px] text-stone-600 space-y-1">
                            <p>
                                <strong className="text-stone-800">Salida:</strong>{' '}
                                {product.fragranceDetails.topNotes}
                            </p>
                            <p className="italic text-stone-500">
                                Ocasión: {product.fragranceDetails.occasion}
                            </p>
                            {product.disclaimer && (
                                <p className="text-[9px] text-stone-400 mt-2 leading-tight">
                                    * {product.disclaimer}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Precio & Botón de agregar */}
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-base font-semibold text-stone-900">
                        ${product.price.toLocaleString('es-AR')}
                    </span>
                    <button
                        onClick={() => onAddToCart(product)}
                        className="bg-stone-900 text-stone-50 text-[11px] px-4 py-2 uppercase tracking-wider font-medium hover:bg-stone-700 active:scale-95 transition-all cursor-pointer"
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </article>
    );
};