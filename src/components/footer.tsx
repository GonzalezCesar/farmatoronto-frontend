export default function Footer() {
  return (
    <footer className="w-full py-1.5" style={{ backgroundColor: "#04232F" }}>
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <p>&copy; {new Date().getFullYear()} - FarmaToronto</p>
        </div>
      </div>
    </footer>
  )
}