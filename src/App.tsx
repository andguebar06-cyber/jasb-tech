import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Catalog from './components/Catalog';
import Promotions from './components/Promotions';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartItem, Product } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Sync active navigation link on scroll
  useEffect(() => {
    const sections = ['inicio', 'sobre-nosotros', 'productos', 'ofertas', 'testimonios', 'contacto'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // safe offset for sticky header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Smooth scroll helper
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const elPosition = elRect - bodyRect;
      const offsetPosition = elPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* INICIO (Hero Section) */}
        <Hero
          onExploreClick={() => handleScrollToSection('productos')}
          onOffersClick={() => handleScrollToSection('ofertas')}
        />

        {/* SOBRE NOSOTROS (About Section) */}
        <AboutUs />

        {/* PRODUCTOS (Catalog Section) */}
        <Catalog onAddToCart={handleAddToCart} />

        {/* PROMOCIONES / OFERTAS (Deals Section) */}
        <Promotions />

        {/* TESTIMONIOS (Customer Feedback Section) */}
        <Testimonials />

        {/* FORMULARIO DE CONTACTO (Contact Section) */}
        <ContactForm />
      </main>

      {/* FOOTER (Footer Section) */}
      <Footer />

      {/* SLIDE-OUT SHOPPING CART OVERLAY */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
