import React from 'react';
import type { Product } from '../data/products';

interface Props {
    product: Product;
    onOpenModal: (p: Product) => void;
    onAddToCart: (p: Product) => void;
}

export const ProductCard: React.FC<Props> = ({ product, onOpenModal, onAddToCart }) => {
    return (
        <article className="group flex flex-col justify-between border border-stone-200/90 bg-white transition-all duration-300 hover:border-stone-400 hover:shadow-xs">
            {/* Imagen con Aspect Ratio vertical */}
            <div
                onClick={() => onOpenModal(product)}
                className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100 cursor-pointer"
            >
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out sm:group-hover:scale-105"
                    loading="lazy"
                />
                {product.badges && product.badges.length > 0 && (
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                        {product.badges.map((b: string) => (
                            <span
                                key={b}
                                className="bg-white/95 backdrop-blur-xs px-1.5 py-0.5 text-[8px] sm:text-[9px] tracking-widest uppercase font-semibold text-stone-800 shadow-2xs"
                            >
                                {b}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Datos y Box Model */}
            <div className="p-3 sm:p-5 flex flex-col flex-1 justify-between">
                <div>
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-stone-400">
                        {product.brand}
                    </span>
                    <h2
                        onClick={() => onOpenModal(product)}
                        className="mt-0.5 font-serif text-sm sm:text-lg tracking-tight text-stone-900 cursor-pointer line-clamp-2 hover:underline leading-snug"
                    >
                        {product.name}
                    </h2>
                    <p className="mt-1 text-[11px] sm:text-xs text-stone-500 line-clamp-1">
                        {product.subtitle}
                    </p>

                    {/* Ocultamos detalles largos en cards pequeñas de mobile para no saturar; se ven completos en el modal */}
                    {product.fuxionDetails && (
                        <div className="hidden sm:block mt-3 border-t border-stone-100 pt-3 text-xs text-stone-600 space-y-1">
                            <p><strong className="text-stone-800">Beneficio:</strong> {product.fuxionDetails.benefit}</p>
                        </div>
                    )}

                    {product.fragranceDetails && (
                        <div className="hidden sm:block mt-3 border-t border-stone-100 pt-3 text-[11px] text-stone-600 space-y-1">
                            <p><strong className="text-stone-800">Notas:</strong> {product.fragranceDetails.topNotes}</p>
                        </div>
                    )}
                </div>

                {/* Precio & Botón de agregar */}
                <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-sm sm:text-base font-bold text-stone-900">
                        ${product.price.toLocaleString('es-AR')}
                    </span>
                    <button
                        onClick={() => onAddToCart(product)}
                        className="w-full sm:w-auto bg-stone-900 text-stone-50 text-[10px] sm:text-[11px] py-2 px-3 sm:px-4 uppercase tracking-wider font-semibold active:scale-95 transition-all cursor-pointer text-center"
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </article>
    );
};