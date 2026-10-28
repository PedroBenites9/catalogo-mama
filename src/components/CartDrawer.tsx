import React from 'react';
import type { CartItem } from '../hooks/useCart';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    cart: CartItem[];
    totalPrice: number;
    updateQuantity: (id: string, q: number) => void;
    removeFromCart: (id: string) => void;
    whatsappNumber: string;
}

export const CartDrawer: React.FC<Props> = ({
    isOpen,
    onClose,
    cart,
    totalPrice,
    updateQuantity,
    removeFromCart,
    whatsappNumber,
}) => {
    if (!isOpen) return null;

    const handleCheckout = () => {
        if (cart.length === 0) return;

        let text = `¡Hola! Me gustaría hacer el siguiente pedido:\n\n`;
        cart.forEach(({ product, quantity }) => {
            text += `• ${product.name} (x${quantity}) - $${(product.price * quantity).toLocaleString('es-AR')}\n`;
        });
        text += `\n*Total estimado: $${totalPrice.toLocaleString('es-AR')}*\n\n`;
        text += `¿Me indicás los datos de transferencia o link de pago para coordinar la entrega? ¡Muchas gracias!`;

        const cleanPhone = whatsappNumber.replace(/\D/g, '');
        const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <aside className="relative w-full sm:max-w-md bg-white h-full shadow-2xl flex flex-col z-10 border-l border-stone-200">
                <header className="p-4 sm:p-5 border-b border-stone-200 flex justify-between items-center">
                    <h2 className="font-serif text-lg sm:text-xl tracking-tight text-stone-900">
                        Tu Selección
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1.5 text-stone-500 hover:text-stone-900 text-lg cursor-pointer"
                    >
                        ✕
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
                    {cart.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-sm text-stone-400">Tu bolsa está vacía.</p>
                            <button
                                onClick={onClose}
                                className="mt-3 text-xs uppercase tracking-wider text-stone-800 underline underline-offset-4 cursor-pointer"
                            >
                                Ver productos
                            </button>
                        </div>
                    ) : (
                        cart.map(({ product, quantity }) => (
                            <div
                                key={product.id}
                                className="flex gap-3 border-b border-stone-100 pb-3 items-center"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-14 h-18 sm:w-16 sm:h-20 object-cover bg-stone-100"
                                />
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-xs font-semibold text-stone-800 truncate">
                                        {product.name}
                                    </h4>
                                    <p className="text-xs text-stone-500 mt-0.5">
                                        ${product.price.toLocaleString('es-AR')}
                                    </p>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center border border-stone-300">
                                            <button
                                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                                className="px-2.5 py-0.5 text-xs text-stone-600 hover:bg-stone-100 cursor-pointer"
                                            >
                                                -
                                            </button>
                                            <span className="px-2 text-xs font-medium">{quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                                className="px-2.5 py-0.5 text-xs text-stone-600 hover:bg-stone-100 cursor-pointer"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(product.id)}
                                            className="text-[11px] text-stone-400 hover:text-red-600 transition-colors cursor-pointer ml-2"
                                        >
                                            Quitar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <footer className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                                Total
                            </span>
                            <span className="text-lg sm:text-xl font-bold text-stone-900">
                                ${totalPrice.toLocaleString('es-AR')}
                            </span>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="w-full bg-[#25D366] text-white py-3.5 px-4 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1EBE5D] active:scale-98 transition-all shadow-xs cursor-pointer"
                        >
                            Pedir por WhatsApp
                        </button>
                        <p className="text-[10px] text-center text-stone-400 mt-2">
                            Se coordinará el pago y envío directamente con el vendedor.
                        </p>
                    </footer>
                )}
            </aside>
        </div>
    );
};