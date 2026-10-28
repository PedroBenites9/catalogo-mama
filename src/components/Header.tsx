import React from 'react';

interface Props {
    totalItems: number;
    onOpenCart: () => void;
}

export const Header: React.FC<Props> = ({ totalItems, onOpenCart }) => {
    return (
        <>
            {/* Banner superior */}
            <aside className="bg-stone-900 text-stone-200 text-center py-2 px-3 text-[10px] sm:text-[11px] tracking-wider uppercase font-medium">
                Atención personalizada · Pedidos por WhatsApp
            </aside>

            {/* Header Sticky */}
            <header className="sticky top-0 z-30 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200/80 px-4 sm:px-6 py-3.5 transition-all">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-serif text-xl sm:text-2xl tracking-tight text-stone-900 font-normal leading-none">
                            AURA & ESENCIA
                        </h1>
                        <span className="text-[9px] tracking-widest uppercase text-stone-400 mt-1">
                            Bienestar & Fragancias
                        </span>
                    </div>

                    <button
                        onClick={onOpenCart}
                        aria-label="Abrir carrito"
                        className="flex items-center gap-2 border border-stone-300 active:bg-stone-100 bg-white px-3 py-1.5 transition-colors cursor-pointer"
                    >
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-800">
                            Bolsa
                        </span>
                        <span className="bg-stone-900 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
                            {totalItems}
                        </span>
                    </button>
                </div>
            </header>
        </>
    );
};