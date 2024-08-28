import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Página de Produtos",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}
