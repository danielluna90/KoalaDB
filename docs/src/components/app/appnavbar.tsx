import {
  NavigationMenu,
  NavigationMenuContent,
  //NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  //NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

export function AppNavbar() {
    return (
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
            <NavigationMenuContent>
                <NavigationMenuLink>Getting Started</NavigationMenuLink>
            </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <Link href="https://github.com/danielluna90/koaladb" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Github
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
    );
}