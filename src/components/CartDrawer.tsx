import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag, Tag, CreditCard, CheckCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // 0.1 for 10%
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.product.promoPrice || item.product.price;
    return acc + price * item.quantity;
  }, 0);

  const discountAmount = subtotal * appliedDiscount;
  const total = subtotal - discountAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');

    if (promoCode.trim().toUpperCase() === 'JASBNEW10') {
      setAppliedDiscount(0.1);
      setPromoSuccess('¡Cupón aplicado! 10% de descuento adicional.');
    } else if (promoCode.trim() === '') {
      setPromoError('Introduce un código.');
    } else {
      setPromoError('Cupón inválido o expirado.');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      setOrderId('JB-' + Math.floor(100000 + Math.random() * 900000));
    }, 1500);
  };

  const handleCloseAndReset = () => {
    onClose();
    // Wait for slide animation to finish before resetting local success state
    setTimeout(() => {
      if (checkoutComplete) {
        onClearCart();
        setCheckoutComplete(false);
        setAppliedDiscount(0);
        setPromoCode('');
        setPromoSuccess('');
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseAndReset}
            className="absolute inset-0 bg-black backdrop-blur-xs"
          />

          {/* Drawer container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between"
              id="cart-drawer-panel"
            >
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <ShoppingBag className="w-5 h-5 text-brand-400" />
                  <h3 className="font-display font-bold text-lg text-white">Carrito de Compras</h3>
                </div>
                <button
                  onClick={handleCloseAndReset}
                  className="p-2 text-slate-400 hover:text-white bg-slate-950 border border-slate-850 hover:border-slate-800 rounded-lg cursor-pointer"
                  aria-label="Cerrar carrito"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {checkoutComplete ? (
                  /* Success Checkout Message */
                  <div className="text-center py-10 space-y-6" id="checkout-success">
                    <div className="inline-flex p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-xl text-white">¡Compra Procesada con Éxito!</h4>
                      <p className="text-sm text-slate-300 font-light max-w-xs mx-auto leading-relaxed">
                        Tu pedido ha sido aprobado. El equipo logístico de <span className="font-medium text-brand-400">jasb Tech</span> está preparando tu paquete.
                      </p>
                      <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 font-mono text-xs text-slate-400 max-w-xs mx-auto mt-4">
                        <span>CÓDIGO DE PEDIDO:</span> <span className="text-white font-bold">{orderId}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 leading-normal max-w-xs mx-auto font-light">
                      Hemos enviado la factura en PDF y el enlace de seguimiento en tiempo real a tu correo electrónico. ¡Gracias por confiar en jasb Tech!
                    </p>

                    <button
                      onClick={handleCloseAndReset}
                      className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl text-sm cursor-pointer"
                    >
                      Seguir Navegando
                    </button>
                  </div>
                ) : cartItems.length === 0 ? (
                  /* Empty state */
                  <div className="text-center py-20 space-y-4" id="empty-cart">
                    <ShoppingBag className="w-12 h-12 text-slate-700 mx-auto" />
                    <h4 className="font-display font-medium text-white text-base">Tu carrito está vacío</h4>
                    <p className="text-sm text-slate-400 max-w-xs mx-auto font-light">
                      Agrega productos desde nuestro catálogo de tecnología premium para iniciar una orden de compra.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold cursor-pointer border border-slate-700"
                    >
                      Ir a Catálogo
                    </button>
                  </div>
                ) : (
                  /* Items list */
                  <div className="space-y-4" id="cart-items-list">
                    {cartItems.map((item) => {
                      const finalPrice = item.product.promoPrice || item.product.price;
                      return (
                        <div
                          key={item.product.id}
                          className="flex items-center space-x-4 bg-slate-950 p-3.5 rounded-2xl border border-slate-850/60"
                        >
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-800">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          <div className="flex-1 min-w-0 space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-white truncate">
                              {item.product.name}
                            </h4>
                            <div className="flex items-baseline space-x-1.5">
                              <span className="text-sm font-semibold text-brand-400">{finalPrice}€</span>
                              {item.product.isPromo && item.product.promoPrice && (
                                <span className="text-[10px] text-slate-500 line-through">{item.product.price}€</span>
                              )}
                            </div>

                            {/* Quantity buttons */}
                            <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 px-2 py-1 rounded-lg w-fit">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                className="p-1 hover:text-white text-slate-400 cursor-pointer"
                                aria-label="Disminuir cantidad"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-mono text-white font-medium px-1">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="p-1 hover:text-white text-slate-400 cursor-pointer"
                                aria-label="Aumentar cantidad"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          {/* Delete Item */}
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all cursor-pointer"
                            aria-label="Quitar producto"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Drawer Footer calculations */}
              {cartItems.length > 0 && !checkoutComplete && (
                <div className="border-t border-slate-800 bg-slate-950/80 p-6 space-y-5">
                  {/* Coupon Area */}
                  <form onSubmit={handleApplyPromo} className="space-y-2">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4" />
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Cupón (ej. JASBNEW10)"
                          className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 focus:border-brand-500 hover:border-slate-700 text-slate-200 rounded-xl outline-none text-xs transition-colors uppercase"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-xs transition-all cursor-pointer whitespace-nowrap border border-slate-750"
                      >
                        Aplicar
                      </button>
                    </div>
                    {promoError && <p className="text-[11px] text-red-400 font-mono">{promoError}</p>}
                    {promoSuccess && <p className="text-[11px] text-emerald-400 font-mono">{promoSuccess}</p>}
                  </form>

                  {/* Pricing Breakdown */}
                  <div className="space-y-2.5 font-mono text-xs text-slate-400">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-slate-200">{subtotal.toFixed(2)}€</span>
                    </div>
                    {appliedDiscount > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Descuento Especial (10%)</span>
                        <span>-{discountAmount.toFixed(2)}€</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Envío Asegurado</span>
                      <span className="text-emerald-400 font-medium">Gratis</span>
                    </div>
                    <div className="h-px bg-slate-800 my-2" />
                    <div className="flex justify-between text-sm font-semibold text-white">
                      <span>TOTAL DE LA ORDEN</span>
                      <span className="text-brand-400 text-base font-bold">{total.toFixed(2)}€</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full py-3.5 bg-brand-500 hover:bg-brand-600 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/10 cursor-pointer"
                  >
                    {isCheckingOut ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin h-4 w-4 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Procesando Pago Seguro...</span>
                      </span>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4 text-slate-950" />
                        <span>Finalizar Compra Segura</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
