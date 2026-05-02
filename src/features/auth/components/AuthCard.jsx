export default function AuthCard({ title, children}) {
    return (
        <section className="min-h-screen flex items-start md:items-center justify-center bg-muted px-4 py-10">
          <div className="w-full max-w-md bg-card rounded-xl p-6 border shadow-sm">
            <h1 className="text-2xl font-semibold text-center mb-6">
              {title}
            </h1>
              {children}
          </div>
        </section>
    )
}