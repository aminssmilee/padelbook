import { Facebook, Instagram, Twitter, Youtube, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">PadelBook</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Platform booking lapangan padel terpercaya di Indonesia. Nikmati pengalaman bermain padel terbaik dengan
              fasilitas lengkap.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Link Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Daftar Lapangan
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Cara Booking
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Promo & Diskon
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Testimoni
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Bantuan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Kebijakan Pembatalan
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Kontak</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">info@padelbook.com</span>
              </div>
              <div className="text-primary-foreground/80">
                <p>Jl. Sudirman No. 123</p>
                <p>Jakarta Pusat, 10220</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">© 2024 PadelBook. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
