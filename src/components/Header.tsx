import React from 'react';

interface Props {
    totalItems: number;
    onOpenCart: () => void;
}

export const Header: React.FC<Props> = ({ totalItems, onOpenCart }) => {
    return (
        <>
            {/* Banner de confianza superior */}
            <aside className="bg-stone-900 text-stone-200 text-center py-2 px-4 text-[11px] tracking-widest uppercase">
                Atención personalizada · Envíos y medios de pago directos por WhatsApp
            </aside>

            {/* Barra de navegación */}
            <header className="sticky top-0 z-30 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-stone-200/70 px-6 py-4 transition-all">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div>
                        <h1 className="font-serif text-2xl tracking-tight text-stone-900 font-normal">
                            AURA & ESENCIA
                        </h1>
                        <p className="text-[10px] tracking-widest uppercase text-stone-400">
                            Salud · Nutrición · Fragancias
                        </p>
                    </div>

                    <button
                        onClick={onOpenCart}
                        aria-label="Abrir carrito de compras"
                        className="flex items-center gap-2 border border-stone-300 hover:border-stone-900 bg-white px-3.5 py-1.5 transition-colors cursor-pointer"
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