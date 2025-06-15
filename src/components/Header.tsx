import Image from 'next/image';
import DarkModeButton from '@/components/DarkModeButton';

export default function Header () {
    return(
      <header className="fixed w-full top-0 flex justify-between items-center bg-neutral-200 dark:bg-neutral-800 h-25 px-8 border-b">
        <Image
          src="/logo.png"
          alt="Logo"
          width={65}
          height={65}
          priority
        />
        <DarkModeButton />
      </header>
    )
}