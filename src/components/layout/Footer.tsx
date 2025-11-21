import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">JPA Tech</h3>
            <p className="text-gray-300 text-sm">
              Soluções tecnológicas acessíveis e eficientes para impulsionar o seu negócio. Inovação, automação e crescimento sustentável.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-secondary text-sm transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-secondary text-sm transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-secondary text-sm transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/orcamento" className="text-gray-300 hover:text-secondary text-sm transition-colors">
                  Solicitar Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone className="h-4 w-4 text-secondary" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail className="h-4 w-4 text-secondary" />
                <span>contato@jpatech.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} JPA Tech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
