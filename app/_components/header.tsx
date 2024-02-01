import { MenuIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row">
                <Image src="/wcinzaazulado.png" alt="Wall Barber" height={18} width={120} />
                <Button variant="outline" size="icon" className="h-6 w-6">
                    <MenuIcon />
                </Button>
            </CardContent>
        </Card>
    );
}

export default Header;