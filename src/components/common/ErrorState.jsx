import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function ErrorState({ message, onRetry }) {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-sky-100 py-10 px-4 text-slate-900">
            <div className="mx-auto max-w-3xl">
                <Card className=" border border-red-200 bg-red-50">
                    <CardContent className="p-6">
                        <h2 className="text-lg font-bold text-red-700">
                            Something went wrong
                        </h2>
                        <p className="mt-2 text-sm text-red-600">
                            {message}
                        </p>
                        <Button
                            onClick={onRetry}
                            className="mt-4 bg-red-600 hover:bg-red-700"
                        >
                            Try Again
                        </Button>

                    </CardContent>
                </Card>
            </div>
        </main>
    )
}