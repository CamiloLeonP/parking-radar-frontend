import { twMerge } from 'tailwind-merge';

const Footer = ({ className }) => (
  <footer
    className={twMerge(
      'w-screen bg-secondary-500 flex flex-col gap-2 items-center p-4 text-white shadow text-center',
      className,
    )}
  >
    <p className="mb-0">
      &copy; 2024 Smart Parking Radar. Todos los derechos reservados.
    </p>
    <div className="flex gap-2 items-center">
      <a href="#" className="text-gray-200">
        Política de Privacidad
      </a>
      <a href="#" className="text-gray-200">
        Términos de Servicio
      </a>
    </div>
  </footer>
);

export default Footer;
