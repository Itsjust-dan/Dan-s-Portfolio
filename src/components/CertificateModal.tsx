import React from 'react';
import { X, ExternalLink, Download } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string | null;
  certificateTitle?: string;
  isDark: boolean;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificateUrl,
  certificateTitle = 'Certificate Document',
  isDark,
}) => {
  if (!isOpen || !certificateUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md bg-black/85 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-4xl h-[88vh] rounded-2xl border overflow-hidden shadow-2xl flex flex-col ${
          isDark ? 'bg-neutral-900 border-neutral-800 text-neutral-100' : 'bg-white border-neutral-200 text-neutral-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-neutral-800/80">
          <div className="text-xs font-['JetBrains_Mono'] text-cyan-400 font-semibold flex items-center gap-2">
            <span>{certificateTitle}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-['JetBrains_Mono'] rounded-full bg-cyan-500 text-neutral-950 font-bold hover:bg-cyan-400 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full h-full bg-neutral-950 relative">
          <iframe
            src={`${certificateUrl}#toolbar=0&navpanes=0&scrollbar=1`}
            title={certificateTitle}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
