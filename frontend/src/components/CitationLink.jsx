import React, { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ExternalLink, FileText } from 'lucide-react';

export const CitationLink = ({ id, callType = "quote", citations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const citation = citations[id];

  if (!citation) return null;

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      {callType === "quote" && (
        <sup className="inline">
          <button
            onClick={handleClick}
            className="text-blue-600 hover:text-blue-800 text-xs font-medium ml-0.5"
          >
            [{id}]
          </button>
        </sup>
      )}
      
      {callType === "recommend" && (
        <div className="flex items-start gap-2">
          <span className="text-blue-600 font-medium">[{id}]</span>
          <button
            onClick={handleClick}
            className="text-gray-700 hover:text-blue-600 text-sm flex-1 text-left"
          >
            {citation.title}
          </button>
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Citation Details
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">{citation.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {citation.siteName} • {citation.date}
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Abstract/Summary:</h4>
              <p className="text-sm text-gray-700">{citation.content}</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Source Content:</h4>
              <p className="text-sm text-gray-700 italic">{citation.sourceContent}</p>
            </div>
            
            {citation.url && citation.url !== "#" && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(citation.url, '_blank')}
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View Source
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};