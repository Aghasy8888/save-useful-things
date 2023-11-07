import React from 'react';

type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

export default function List<T extends {}>({items, onClick}: ListProps<T>) {
  return (
    <div>
      {/* component logic */}
    </div>
  )
}
