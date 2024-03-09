// MyComponent.js
import React from 'react';
import Image from 'next/image';

export function MyComponent() {
  return (
    <div>
      <a href="" target="_blank" rel="noopener noreferrer">
        <Image
          src="https://i.ibb.co/DWVH3Hf/example.gif"
          alt="Your image description"
          width={1500}
          height={900}
        />
      </a>
    </div>
  );
}
