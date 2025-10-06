import { Phone, MessageCircle, FileText } from 'lucide-react';
import { instituteData } from '@/data/institute';

const FloatingDock = () => {
  const handleCall = () => {
    window.location.href = `tel:${instituteData.contact.phones[0]}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${instituteData.contact.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background border-t border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-3">
          <button
            onClick={handleCall}
            className="flex flex-col items-center gap-1 text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-xs font-medium">Call</span>
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex flex-col items-center gap-1 text-primary hover:text-primary/80 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-medium">WhatsApp</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 text-primary hover:text-primary/80 transition-colors"
          >
            <FileText className="w-5 h-5" />
            <span className="text-xs font-medium">Enquire</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingDock;
