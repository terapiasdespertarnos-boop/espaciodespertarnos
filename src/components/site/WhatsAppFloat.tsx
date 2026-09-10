import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con Rosa por WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs tracking-[0.12em] text-primary-foreground uppercase shadow-lg transition-opacity hover:opacity-90"
    >
      <MessageCircle className="size-4" />
      <span className="hidden sm:inline">Hablar con Rosa</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
