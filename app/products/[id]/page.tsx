interface PropductProps {
    params: {
        id: string;
    };
    // searchParams: any --> permite obter as queries passadas para a URL
}

export default function Product({ params: { id } }: PropductProps) {
    return (
        <main className="min-h-screen">
            <div className="container flex flex-col justify-between p-10">
                <h1>Página do produto {id}</h1>
            </div>
        </main>
    );
}
