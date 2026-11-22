import { useState } from 'react';
import { OfferCard } from '@/components/offer-card';
import type { Offer } from '@/types';

type OfferListProps = {
  offers: Offer[];
  variant?: 'city' | 'favorite' | 'near';
  className?: string;
  onActiveOfferChange?: (offerId: string | null) => void;
};

export const OfferList = ({
  offers,
  variant = 'city',
  className,
  onActiveOfferChange,
}: OfferListProps) => {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className={className}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          variant={variant}
          onMouseEnter={() => {
            setActiveOfferId(offer.id);
            onActiveOfferChange?.(offer.id);
          }}
          onMouseLeave={() => {
            setActiveOfferId(null);
            onActiveOfferChange?.(null);
          }}
          isActive={activeOfferId === offer.id}
        />
      ))}
    </div>
  );
};
