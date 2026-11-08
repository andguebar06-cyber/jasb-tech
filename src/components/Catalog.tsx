import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Star, SlidersHorizontal, Plus, Info, X, Check, Eye } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';

interface CatalogProps {
  onAddToCart: (product: Product) => void;
}

export default function Catalog({ onAddToCart }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => {
        const pA = a.promoPrice || a.price;
        const pB = b.promoPrice || b.price;
        return pA - pB;
      });
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => {
        const pA = a.promoPrice || a.price;
        const pB = b.promoPrice || b.price;
        return pB - pA;
      });
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'reviews') {
      result.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleAddToCartClick = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1500);
  };

  return (
    <section id="productos" className="relative py-24 bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-800" />
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">Catálogo Premium</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Descubre Nuestros Dispositivos
          </h2>
          <p className="text-slate-400 font-light max-w-xl mx-auto">
            Explora las últimas novedades de jasb Tech. Productos diseñados con tecnología avanzada de semiconductores, aleaciones ecológicas y ergonomía sobresaliente.
          </p>
        </div>

        {/* Filters and Controls Toolbar */}
        <div className="bg-slate-900 border border-slate-800 p-4 sm:p-6 rounded-3xl mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar móviles, laptops, periféricos..."
                className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-brand-500 hover:border-slate-700 text-slate-100 rounded-xl outline-none text-sm transition-all duration-150 placeholder-slate-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-3 self-end lg:self-auto w-full lg:w-auto">
              <SlidersHorizontal className="text-slate-400 w-4 h-4 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full lg:w-auto bg-slate-950 border border-slate-800 focus:border-brand-500 text-slate-300 rounded-xl px-4 py-3 text-sm outline-none cursor-pointer transition-colors"
              >
                <option value="recommended">Recomendados</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="rating">Mejor Calificación</option>
                <option value="reviews">Más Valorados</option>
              </select>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-brand-500 text-slate-950 font-semibold shadow-lg shadow-brand-500/10'
                    : 'bg-slate-950 hover:bg-slate-800 border border-slate-800/80 text-slate-300 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="product-grid">
          <AnimatePresence mode="popLayout">
            {filteredAndSortedProducts.map((prod) => {
              const hasPromo = prod.isPromo && prod.promoPrice;
              const displayPrice = hasPromo ? prod.promoPrice : prod.price;
              const isAdded = addedProductId === prod.id;

              return (
                <motion.div
                  layout
                  key={prod.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between group hover:border-slate-700 transition-all duration-200 shadow-md relative"
                >
                  {/* Absolute Badges */}
                  <div className="absolute top-6 left-6 z-10 flex flex-col gap-1.5">
                    {prod.isNew && (
                      <span className="bg-brand-500 text-slate-950 font-bold text-[9px] px-2 py-0.5 rounded-md uppercase tracking-wider">
                        Nuevo
                      </span>
                    )}
                    {hasPromo && (
                      <span className="bg-red-500 text-white font-bold text-[9px] px-2 py-0.5 rounded-md uppercase tracking-wider">
                        Oferta
                      </span>
                    )}
                  </div>

                  <div className="space-y-4">
                    {/* Image Area with hover info trigger */}
                    <div
                      className="h-48 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center relative cursor-pointer"
                      onClick={() => setSelectedProduct(prod)}
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      {/* Hover image visual overlay */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="flex items-center space-x-1.5 bg-slate-900/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-semibold text-white">
                          <Eye className="w-3.5 h-3.5 text-brand-400" />
                          <span>Especificaciones</span>
                        </span>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-mono">
                        {CATEGORIES.find(c => c.id === prod.category)?.name.replace('Todos los ', '') || prod.category}
                      </span>
                      <h3
                        className="font-display font-bold text-lg text-white group-hover:text-brand-400 transition-colors cursor-pointer"
                        onClick={() => setSelectedProduct(prod)}
                      >
                        {prod.name}
                      </h3>
                      
                      {/* Rating stars */}
                      <div className="flex items-center space-x-1">
                        <div className="flex text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(prod.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono">({prod.reviewsCount})</span>
                      </div>

                      <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2">
                        {prod.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions & Price Row */}
                  <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline space-x-1.5">
                        <span className="text-xl font-bold text-white">{displayPrice}€</span>
                        {hasPromo && (
                          <span className="text-xs text-slate-500 line-through">{prod.price}€</span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-500 block font-mono">
                        {prod.stock > 0 ? `Stock: ${prod.stock} uds` : 'Sin Stock'}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleAddToCartClick(e, prod)}
                      disabled={prod.stock === 0}
                      className={`p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-500 text-white'
                          : prod.stock === 0
                          ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                          : 'bg-brand-500 hover:bg-brand-600 text-slate-950 active:scale-95'
                      }`}
                      aria-label="Añadir al carrito"
                    >
                      {isAdded ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-20 bg-slate-900 border border-slate-800 rounded-3xl" id="empty-catalog-state">
            <Info className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-display font-medium text-white mb-2">No se encontraron productos</h3>
            <p className="text-slate-400 text-sm max-w-xs mx-auto">
              Intenta cambiar tu palabra de búsqueda o restablecer los filtros de categoría.
            </p>
          </div>
        )}

      </div>

      {/* Extended Specs Modal overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              {/* Modal close */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white bg-slate-950/80 hover:bg-slate-950 rounded-full border border-slate-800 cursor-pointer transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
                
                {/* Intro details with image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="object-cover w-full h-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] text-brand-400 font-mono tracking-widest uppercase block">
                        JASB_TECH // SPECS_SYSTEM
                      </span>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                        {selectedProduct.name}
                      </h3>
                      
                      <div className="flex items-center space-x-1">
                        <div className="flex text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(selectedProduct.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-slate-400 font-mono font-medium">
                          {selectedProduct.rating} / 5.0 ({selectedProduct.reviewsCount} opiniones)
                        </span>
                      </div>

                      <p className="text-sm text-slate-400 font-light leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Price Tag */}
                      <div className="flex items-baseline space-x-3 bg-slate-950 p-4 rounded-2xl border border-slate-850 w-fit">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase font-mono block">Precio del Dispositivo</span>
                          <span className="text-2xl sm:text-3xl font-bold text-white">
                            {selectedProduct.promoPrice || selectedProduct.price}€
                          </span>
                        </div>
                        {selectedProduct.isPromo && selectedProduct.promoPrice && (
                          <span className="text-sm text-slate-500 line-through">
                            {selectedProduct.price}€
                          </span>
                        )}
                      </div>

                      {/* Add Button */}
                      <button
                        onClick={(e) => {
                          handleAddToCartClick(e, selectedProduct);
                          setSelectedProduct(null);
                        }}
                        disabled={selectedProduct.stock === 0}
                        className="w-full py-4 px-6 bg-brand-500 hover:bg-brand-600 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-bold rounded-2xl transition-all duration-150 flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/10 cursor-pointer"
                      >
                        <Plus className="w-5 h-5 text-slate-950" />
                        <span>Añadir al Carrito de Compras</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Technical Specifications & Features Block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-800/60">
                  {/* Specifications Table */}
                  <div className="space-y-4">
                    <h4 className="font-display font-semibold text-white text-base uppercase tracking-wider border-b border-slate-800 pb-2">
                      Ficha Técnica
                    </h4>
                    <div className="space-y-2 font-mono text-xs text-slate-300">
                      {Object.entries(selectedProduct.specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between py-1.5 border-b border-slate-800/40 gap-4">
                          <span className="text-slate-500 text-left uppercase">{key}</span>
                          <span className="text-right text-slate-200 font-medium">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights/Features Bullets */}
                  <div className="space-y-4">
                    <h4 className="font-display font-semibold text-white text-base uppercase tracking-wider border-b border-slate-800 pb-2">
                      Características Clave
                    </h4>
                    <ul className="space-y-3">
                      {selectedProduct.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-slate-400">
                          <div className="mt-1 p-0.5 rounded-full bg-brand-500/10 text-brand-400 shrink-0 border border-brand-500/20">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
