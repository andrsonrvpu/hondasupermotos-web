"use client";

import { useState, useEffect } from "react";
import { X, Calculator, Send, Info } from "lucide-react";

interface QuoteModalProps {
  children: React.ReactNode;
  motorcycle: {
    name: string;
    price: number | null;
  };
}

export function QuoteModal({ children, motorcycle }: QuoteModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"contado" | "credito">("contado");
  const [downPayment, setDownPayment] = useState<string>("");
  const [months, setMonths] = useState<number>(36);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Calculations
  const rate = 0.0217; // 2.17% MV
  const motoPrice = motorcycle.price || 0;
  const downPaymentVal = parseInt(downPayment.replace(/\D/g, "")) || 0;
  
  let monthlyPayment = 0;
  let principal = 0;

  if (paymentMethod === "credito" && motoPrice > 0) {
    principal = Math.max(0, motoPrice - downPaymentVal);
    if (principal > 0) {
      // Formula: Cuota = (P * r * (1+r)^n) / ((1+r)^n - 1)
      const factor = Math.pow(1 + rate, months);
      monthlyPayment = (principal * rate * factor) / (factor - 1);
    }
  }

  const formatCurrency = (val: number) => {
    return "$" + Math.round(val).toLocaleString("es-CO");
  };

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Solo permitir números, formatear con puntos
    const rawValue = e.target.value.replace(/\D/g, "");
    if (!rawValue) {
      setDownPayment("");
      return;
    }
    const numericValue = parseInt(rawValue, 10);
    // Evitar que la cuota inicial sea mayor al precio de la moto
    if (motoPrice > 0 && numericValue > motoPrice) {
      setDownPayment(motoPrice.toLocaleString("es-CO"));
    } else {
      setDownPayment(numericValue.toLocaleString("es-CO"));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !idNumber.trim()) {
      alert("Por favor, completa tu nombre y cédula.");
      return;
    }

    let message = `Hola, me llamo *${name.trim()}* con cédula *${idNumber.trim()}*.\n\n`;
    message += `Estoy interesado en cotizar la moto *Honda ${motorcycle.name}*.\n\n`;
    
    if (paymentMethod === "contado") {
      message += `Me gustaría comprarla de *contado*.\n\n`;
    } else {
      message += `Me gustaría financiarla a través de *crédito* con las siguientes condiciones:\n`;
      message += `- Precio de la moto: ${formatCurrency(motoPrice)}\n`;
      message += `- Cuota inicial: ${formatCurrency(downPaymentVal)}\n`;
      message += `- Plazo deseado: ${months} meses\n`;
      message += `- *Cuota mensual estimada:* ${formatCurrency(monthlyPayment)}\n\n`;
      message += `_(Tasa estimada usada para el cálculo: 2.17% MV)_\n\n`;
    }

    message += `¿Me podrían ayudar con la cotización formal?`;

    const waLink = `https://wa.me/573173057943?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
    closeModal();
  };

  return (
    <>
      <div onClick={openModal} className="w-full sm:w-auto inline-block cursor-pointer">
        {children}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50">
              <div>
                <h3 className="font-black text-xl text-gray-900 uppercase tracking-tight">Solicitar Cotización</h3>
                <p className="text-sm text-gray-500 font-medium">Honda {motorcycle.name}</p>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area (Scrollable if needed) */}
            <div className="overflow-y-auto flex-1 p-6">
              <form id="quote-form" onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal Info */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Nombre Completo <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--honda-red)] focus:border-[var(--honda-red)] transition-all outline-none"
                      placeholder="Ej: Carlos Ramírez"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Cédula <span className="text-red-500">*</span></label>
                    <input 
                      type="number" 
                      required
                      value={idNumber}
                      onChange={(e) => setIdNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--honda-red)] focus:border-[var(--honda-red)] transition-all outline-none"
                      placeholder="Ingresa tu número de documento"
                    />
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Método de pago preferido</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("contado")}
                      className={`py-3 px-4 rounded-xl border-2 font-bold text-sm transition-all ${
                        paymentMethod === "contado" 
                        ? "border-gray-900 bg-gray-900 text-white" 
                        : "border-gray-200 text-gray-500 hover:border-gray-300"
                      }`}
                    >
                      De Contado
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("credito")}
                      className={`py-3 px-4 rounded-xl border-2 font-bold text-sm transition-all ${
                        paymentMethod === "credito" 
                        ? "border-[var(--honda-red)] bg-[var(--honda-red)] text-white" 
                        : "border-gray-200 text-gray-500 hover:border-gray-300"
                      }`}
                    >
                      A Crédito
                    </button>
                  </div>
                </div>

                {/* Calculator Area */}
                {paymentMethod === "credito" && motoPrice > 0 && (
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-5 animate-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-center gap-2 text-[var(--honda-red)] font-black uppercase text-sm mb-2">
                      <Calculator className="w-5 h-5" />
                      Calculadora de Financiamiento
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">
                        Cuota Inicial (Abono)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                        <input 
                          type="text" 
                          value={downPayment}
                          onChange={handleDownPaymentChange}
                          className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--honda-red)] focus:border-[var(--honda-red)] transition-all outline-none font-medium"
                          placeholder="0"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Precio total: {formatCurrency(motoPrice)}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Plazo (Meses)
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[12, 24, 36, 48, 60, 72].map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setMonths(m)}
                            className={`py-2 text-sm font-bold rounded-lg border transition-all ${
                              months === m 
                              ? "bg-gray-900 border-gray-900 text-white" 
                              : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-gray-600 font-bold text-sm">Cuota mensual estimada:</span>
                        <span className="text-2xl font-black text-[var(--honda-red)]">{formatCurrency(monthlyPayment)}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-400">
                        <Info className="w-4 h-4 shrink-0 mt-0.5" />
                        <p>Cálculo referencial con tasa de 2.17% MV (ProgreSER/Sufi). La tasa final varía según perfil crediticio y políticas de la entidad financiera.</p>
                      </div>
                    </div>

                  </div>
                )}

                {paymentMethod === "credito" && motoPrice === 0 && (
                  <div className="bg-yellow-50 text-yellow-800 p-4 rounded-xl text-sm font-medium border border-yellow-200 flex gap-3 items-start">
                    <Info className="w-5 h-5 shrink-0 text-yellow-600" />
                    <p>El precio de esta motocicleta no está disponible para cálculo automático. Envía la solicitud y un asesor te brindará las opciones de crédito.</p>
                  </div>
                )}

              </form>
            </div>

            {/* Footer / Submit */}
            <div className="p-5 border-t border-gray-100 bg-white">
              <button
                type="submit"
                form="quote-form"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold uppercase py-4 rounded-xl transition-all hover:bg-[#1DA851] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(37,211,102,0.4)] active:bg-[#1DA851] active:-translate-y-1 active:shadow-[0_8px_16px_rgba(37,211,102,0.4)]"
              >
                <Send className="w-5 h-5" />
                Enviar a WhatsApp
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
