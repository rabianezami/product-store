import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function ErrorState({ message, onRetry }) {
    return (
        <main className="min-h-screen bg-background py-10 px-4 text-foreground transition-colors">
            <div className="mx-auto max-w-3xl">
                <Card className=" border-destructive/20 bg-destructive/10 dark:bg-destructive/5">
                    <CardContent className="p-6">
                        <h2 className="text-lg font-bold text-destructive">
                            Something went wrong
                        </h2>
                        <p className="mt-2 text-sm text-red-600">
                            {message}
                        </p>
                        <Button
                            onClick={onRetry}
                            className="mt-4 bg-destructive/20 text-red-500 hover:bg-destructive/90"
                        >
                            Try Again
                        </Button>

                    </CardContent>
                </Card>
            </div>
        </main>
    )
}