import { useState } from 'react';
import { PRODUCTS, type Product } from './data/products';
import { useCart } from '../src/hooks/useCart';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';

type CategoryFilter = 'all' | 'fuxion' | 'perfumes' | 'cosmetica';

export default function App() {
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Configuración del número de WhatsApp (código de país + número, sin signos ni espacios)
  // Ej. para Argentina: 54911xxxxxxxx
  const [whatsappNumber] = useState('5491149723465');

  const {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    totalItems,
    totalPrice
  } = useCart();

  const filteredProducts = PRODUCTS.filter((item) =>
    category === 'all' ? true : item.category === category
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col justify-between">
      <div>
        {/* Barra de Navegación y Banner */}
        <Header
          totalItems={totalItems}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Sección Hero Editorial */}
        <section className="px-6 pt-16 pb-12 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-400">
            Catálogo Exclusivo
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-light text-stone-900 leading-tight">
            Bienestar diario y fragancias con personalidad.
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-stone-500 font-light leading-relaxed max-w-xl mx-auto">
            Nutrición celular avanzada en prácticos sticks solubles de FuXion y la colección de inspiraciones olfativas de alta duración de Millanel.
          </p>

          {/* Filtros por Categoría */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-6 border-b border-stone-200 pb-4">
            {[
              { id: 'all', label: 'Todos los productos' },
              { id: 'fuxion', label: 'Bebidas FuXion' },
              { id: 'perfumes', label: 'Perfumería Millanel' },
              { id: 'cosmetica', label: 'Cosmética' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCategory(tab.id as CategoryFilter)}
                className={`text-xs tracking-widest uppercase pb-2 transition-all cursor-pointer ${category === tab.id
                  ? 'border-b-2 border-stone-900 font-semibold text-stone-900'
                  : 'text-stone-400 hover:text-stone-700'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Catálogo de Productos (Grid Box Model) */}
        <main className="max-w-6xl mx-auto px-6 pb-20">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-sm text-stone-400">No hay productos en esta categoría por el momento.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Footer sobrio */}
      <footer className="border-t border-stone-200 py-10 px-6 bg-white text-center text-xs text-stone-400 space-y-2">
        <p className="tracking-widest uppercase text-[10px] text-stone-500">
          AURA & ESENCIA · BIENESTAR & PERFUMERÍA
        </p>
        <p>Las marcas registradas de fragancias se citan únicamente a modo de referencia olfativa.</p>
        <p className="text-[10px]">Coordinación de pedidos y envíos mediante atención directa.</p>
      </footer>

      {/* Modal de Detalle */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p) => {
          addToCart(p);
          setIsCartOpen(true);
        }}
      />

      {/* Carrito Desplegable */}
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