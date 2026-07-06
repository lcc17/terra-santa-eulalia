"use client";

export default function ConfirmModal({ title, message, confirmLabel, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-earth-brown/40 p-6">
      <div className="bg-cream border border-sand-light max-w-md w-full p-8">
        <h3 className="font-serif text-xl text-earth-brown mb-3">{title}</h3>
        <p className="text-earth-brown/70 font-light leading-relaxed mb-8">{message}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 text-xs uppercase tracking-widest text-earth-brown/70 hover:text-earth-brown transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 text-xs uppercase tracking-widest bg-terracotta text-cream hover:bg-earth-brown transition-colors"
          >
            {confirmLabel || "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  );
}
