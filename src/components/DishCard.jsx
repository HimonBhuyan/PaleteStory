import React from 'react';
import { Star, Plus, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const DishCard = ({ item }) => {
  const { addItem } = useCart();

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-neutral-800 flex flex-col group h-full">
      <div className="img-zoom-wrap h-56 w-full relative">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        
        {/* Dietary and Chef Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {item.type === 'veg' ? (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-600 text-white uppercase tracking-wider flex items-center gap-1 shadow">
              <span className="w-2 h-2 rounded-full bg-white"></span> Veg
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-600 text-white uppercase tracking-wider flex items-center gap-1 shadow">
              <span className="w-2 h-2 rounded-full bg-white"></span> Non-Veg
            </span>
          )}
          {item.isChefSpecial && (
            <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-amber-500 text-black uppercase tracking-wider shadow">
              Chef Special
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-xs font-bold text-amber-400 flex items-center gap-1">
          <Star className="w-3 h-3 fill-amber-400" /> {item.rating}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{item.cuisine}</span>
            <span className="text-xl font-bold text-amber-400 font-display">₹{item.price}</span>
          </div>

          <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
            {item.name}
          </h3>

          <p className="text-xs text-neutral-400 leading-relaxed mb-4">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.tags?.map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                #{t}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
          <span className="text-[11px] text-neutral-400 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-amber-500" /> {item.spiceLevel}
          </span>
          <button
            onClick={() => addItem(item)}
            className="btn-gold text-xs py-2 px-3.5 shadow-md flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" /> Add to Order
          </button>
        </div>

      </div>
    </div>
  );
};

