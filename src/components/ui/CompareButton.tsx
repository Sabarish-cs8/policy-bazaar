'use client';

import { Button } from '@/components/ui/button';

interface CompareButtonProps {
  onClick?: () => void;
}

export default function CompareButton({ onClick }: CompareButtonProps) {
  return (
    <Button
      onClick={onClick}
      className='compare-button w-auto h-auto'
    />
  );
}
