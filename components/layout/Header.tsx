'use client';

import * as React from 'react';
import Link from 'next/link';
import { Leaf, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Define menu items
const menuItems = [
  { title: 'O Nas', href: '/o-nas' },
  { title: 'Co Oferujemy', href: '/co-oferujemy' },
  { title: 'Historie Sukcesu', href: '/historie-sukcesu' },
  { title: 'Nasze Podejście', href: '/nasze-podejscie' },
  { title: 'Dlaczego My?', href: '/dlaczego-my' },
  { title: 'Zasoby', href: '/zasoby' },
  { title: 'Kontakt', href: '/kontakt' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false); // State to track client mount

  // Effect to set isMounted to true only on the client
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2"
          onClick={() => setIsSheetOpen(false)}
        >
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block">Spark Leaf</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex flex-grow">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'font-medium',
                      pathname === item.href
                        ? 'bg-accent text-accent-foreground'
                        : ''
                    )}
                    active={pathname === item.href}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Trigger & Sheet - Reverted to Attempt 2 logic */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          {isMounted ? ( // Check if mounted before rendering Sheet
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className="mb-6">
                  <SheetTitle className="flex items-center space-x-2">
                    <Leaf className="h-6 w-6 text-primary" />
                    <span>Spark Leaf</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2">
                  {menuItems.map((item) => (
                    <SheetClose asChild key={item.title}>
                      <Link
                        href={item.href}
                        className={cn(
                          'block rounded-md px-3 py-2 text-base font-medium',
                          pathname === item.href
                            ? 'bg-accent text-accent-foreground'
                            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                        )}
                        onClick={() => setIsSheetOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            // Render a simple placeholder button while not mounted (Reverted logic)
            <Button variant="ghost" size="icon" disabled>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
