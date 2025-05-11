// components/SocialIcons.tsx
import Image from 'next/image';

// ... in your render method
{typeof item.icon === 'string' ? (
  <div className="relative h-5 w-5">
    <Image 
      src={item.icon}
      alt="Search icon"
      fill
      className="object-contain"
    />
  </div>
) : (
  <item.icon className="h-5 w-5" />
)}