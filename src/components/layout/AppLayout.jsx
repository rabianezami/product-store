export default function AppLayout({ title, children }) {
  return (
    <section className="min-h-screen">
        <div className="border-b px-6 py-4">
            <h1 className="text-lg font-semibold">
                {title}
            </h1>
        </div>

        <div className="p-6">
            {children}
        </div>
    </section>
  )
}