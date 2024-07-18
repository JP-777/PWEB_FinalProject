import React from 'react';
import { PeripheralComponent } from './PeripheralComponent';
import './PeripheralList.css'; // Asegúrate de que este archivo CSS exista

const peripherals = [
    {
        title: 'Deepcool GH-01 TARJETA DE VIDEO(Graphics Card Holder) #DP-GCH2-GH01',
        imageUrl: 'https://www.ryans.com/storage/products/main/deepcool-gh-01-graphics-card-holder-11717049957.webp',
        description: 'La tarjeta de video es un componente esencial para los ordenadores que procesa datos gráficos y los muestra en el monitor, es fundamental para juegos y aplicaciones gráficamente intensivas',
        price: '249.99',
        specifications: ['GPU: NVIDIA GeForce RTX 3080', 'Memoria: 10GB GDDR6X', 'Interfaz: PCIe 4.0 x16', 'Conectores: 3 x DisplayPort 1.4a, 2 x HDMI 2.1'],
        stats: ['Consumo de Energía: 320W', 'Boost Clock: 1710 MHz', 'Dimensiones: 2-slot, 285mm de longitud']
    },
    {
        title: 'A4tech FBK30 Fstyler Bluetooth (Dual Mode) White Keyboard',
            title: 'Teclado',
            imageUrl: 'https://www.ryans.com/storage/products/main/a4tech-fbk30-fstyler-bluetooth-dual-mode-white-11696684862.webp',
            description: 'Teclado mecánico con iluminación RGB para una experiencia de escritura y juego óptima.',
            price: '89.99',
            specifications: ['Tipo de tecla: Mecánica', 'Conectividad: USB'],
            stats: ['Durabilidad: 50 millones de pulsaciones', 'Peso: 1kg']
        },
        {
            title: 'Mouse',
            imageUrl: 'https://www.ryans.com/storage/products/main/marvo-m115-rgb-wired-black-gaming-11658997487.webp',
            description: 'Mouse ergonómico y preciso, ideal para juegos y uso diario.',
            price: '49.99',
            specifications: ['Sensor: Óptico', 'DPI: 16000'],
            stats: ['Botones programables: 7', 'Iluminación RGB']
        },
        {
            title: 'Impresora',
            imageUrl: 'https://digitalbox.com.ec/4562-thickbox_default/impresora-epson-l3250-con-sistema-de-tinta-continua.jpg',
            description: 'Impresora multifuncional con capacidad de impresión, escaneo y copiado.',
            price: '149.99',
            specifications: ['Tipo: Tinta', 'Conectividad: Wi-Fi'],
            stats: ['Velocidad de impresión: 20 ppm', 'Resolución de impresión: 4800 x 1200 dpi']
        },
        {
            title: 'Escáner',
            imageUrl: 'https://m.media-amazon.com/images/I/71huAW3Lg0L._AC_UF894,1000_QL80_.jpg',
            description: 'Escáner de alta resolución para digitalizar documentos y fotos.',
            price: '99.99',
            specifications: ['Resolución óptica: 1200 x 2400 dpi', 'Tamaño de escaneo: A4'],
            stats: ['Velocidad de escaneo: 10 segundos por página', 'Conectividad: USB']
        },
        {
            title: 'Altavoces',
            imageUrl: 'https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/3939/PMP20000152716/full_image-1.jpeg',
            description: 'Altavoces de alta fidelidad para una experiencia de sonido envolvente.',
            price: '79.99',
            specifications: ['Potencia: 50W', 'Conectividad: Bluetooth'],
            stats: ['Respuesta de frecuencia: 20Hz - 20kHz', 'Dimensiones: 20 x 15 x 10 cm']
        },  
        {
            title: 'Webcam',
            imageUrl: 'https://i.ebayimg.com/thumbs/images/g/FGkAAOSwewVhlqUn/s-l1200.jpg',
            description: 'Webcam de alta definición con micrófono integrado para videollamadas y streaming.',
            price: '59.99',
            specifications: ['Resolución: 1080p', 'Micrófono: Integrado'],
            stats: ['Campo de visión: 90 grados', 'Conectividad: USB']
        },  
        {
            title: 'Webcam',
            imageUrl: 'https://i.ebayimg.com/thumbs/images/g/FGkAAOSwewVhlqUn/s-l1200.jpg',
            description: 'Webcam de alta definición con micrófono integrado para videollamadas y streaming.',
            price: '59.99',
            specifications: ['Resolución: 1080p', 'Micrófono: Integrado'],
            stats: ['Campo de visión: 90 grados', 'Conectividad: USB']
        },  
        {
            title: 'Webcam',
            imageUrl: 'https://i.ebayimg.com/thumbs/images/g/FGkAAOSwewVhlqUn/s-l1200.jpg',
            description: 'Webcam de alta definición con micrófono integrado para videollamadas y streaming.',
            price: '59.99',
            specifications: ['Resolución: 1080p', 'Micrófono: Integrado'],
            stats: ['Campo de visión: 90 grados', 'Conectividad: USB']
        },  
        {
            title: 'Webcam',
            imageUrl: 'https://i.ebayimg.com/thumbs/images/g/FGkAAOSwewVhlqUn/s-l1200.jpg',
            description: 'Webcam de alta definición con micrófono integrado para videollamadas y streaming.',
            price: '59.99',
            specifications: ['Resolución: 1080p', 'Micrófono: Integrado'],
            stats: ['Campo de visión: 90 grados', 'Conectividad: USB']
        }
];

export function PeripheralList() {
    return (
        <div className="peripheralListContainer">
            {peripherals.map((peripheral, index) => (
                <PeripheralComponent
                    key={index}
                    title={peripheral.title}
                    imageUrl={peripheral.imageUrl}
                    description={peripheral.description}
                    price={peripheral.price}
                    specifications={peripheral.specifications}
                    stats={peripheral.stats}
                />
            ))}
        </div>
    );
}
