import { useState } from 'react';
import { PRODUCTS, type Product } from './data/products';
import { useCart } from './hooks/useCart';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';

type CategoryFilter = 'all' | 'fuxion' | 'perfumes' | 'cosmetica';

export default function App() {
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Colocá acá el número de WhatsApp con código de país (ej: 54911xxxxxxxx)
  const [whatsappNumber] = useState('5491112345678');

  const {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();

  const filteredProducts = PRODUCTS.filter((item) =>
    category === 'all' ? true : item.category === category
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col justify-between selection:bg-stone-200">
      <div>
        {/* Barra superior y bolsa */}
        <Header totalItems={totalItems} onOpenCart={() => setIsCartOpen(true)} />

        {/* Hero */}
        <section className="px-4 sm:px-6 pt-8 sm:pt-14 pb-6 sm:pb-10 text-center max-w-3xl mx-auto">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400">
            Catálogo Online
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-4xl sm:leading-tight font-light text-stone-900">
            Bienestar diario y fragancias con personalidad.
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-stone-500 font-light max-w-md mx-auto">
            Nutrición celular FuXion y la colección de inspiraciones olfativas Millanel.
          </p>

          {/* Filtros Swipeables en mobile */}
          <div className="mt-6 sm:mt-8 flex items-center justify-start sm:justify-center gap-2 sm:gap-6 overflow-x-auto pb-2 scrollbar-none border-b border-stone-200">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'fuxion', label: 'FuXion Sticks' },
              { id: 'perfumes', label: 'Perfumería' },
              { id: 'cosmetica', label: 'Cosmética' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCategory(tab.id as CategoryFilter)}
                className={`whitespace-nowrap px-3 py-1.5 text-xs tracking-wider uppercase transition-all cursor-pointer ${category === tab.id
                    ? 'border-b-2 border-stone-900 font-semibold text-stone-900'
                    : 'text-stone-400 hover:text-stone-700'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Grid de Productos: 2 columnas en móvil, 3 en pantallas grandes */}
        <main className="max-w-6xl mx-auto px-3 sm:px-6 pb-20">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xs sm:text-sm text-stone-400">No hay productos en esta categoría.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenModal={(p) => setSelectedProduct(p)}
                  onAddToCart={(p) => {
                    addToCart(p);
                    setIsCartOpen(true);
                  }}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-8 px-4 bg-white text-center text-stone-400 space-y-1.5">
        <p className="tracking-widest uppercase text-[10px] text-stone-500 font-medium">
          AURA & ESENCIA
        </p>
        <p className="text-[11px]">Las fragancias son inspiraciones olfativas de referencia.</p>
      </footer>

      {/* Bottom Sheet / Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p) => {
          addToCart(p);
          setIsCartOpen(true);
        }}
      />

      {/* Carrito */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        totalPrice={totalPrice}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        whatsappNumber={whatsappNumber}
      />
    </div>
  );
}