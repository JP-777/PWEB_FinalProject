import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { BannerSlider } from './BannerSlider';
import { CardVideoSlider } from './CardVideoSlider';
import { ComputerComponents } from './ComputerComponents';
import { FooterComponent } from './FooterComponent';
import { Header } from './Header';
import './index.css';
import { ListShowCards } from './ListShowCards';
import Management from './Management';
import { NewArrivalCard } from './NewArrivalCard';
import { PeripheralList } from './PeripheralList';
import { ProductList } from './ProductList';
import { Profile } from './Profile';
import { QualitySection } from './QualitySection';
import { Register } from './Register';
import { SearchResults } from './SearchResults';
import { ShoppingBag } from './ShoppingBag';
import { ShowSection } from './ShowSection';
import { SubHeader } from './SubHeader';
const peripheralsData = [
  {
    title: 'Deepcool GH-01 TARJETA DE VIDEO(Graphics Card Holder) #DP-GCH2-GH01',
    imageUrl: 'https://www.ryans.com/storage/products/main/deepcool-gh-01-graphics-card-holder-11717049957.webp',
    description: 'La tarjeta de video es un componente esencial para los ordenadores que procesa datos gráficos y los muestra en el monitor, es fundamental para juegos y aplicaciones gráficamente intensivas',
    price: '249.99',
    specifications: ['GPU: NVIDIA GeForce RTX 3080', 'Memoria: 10GB GDDR6X', 'Interfaz: PCIe 4.0 x16', 'Conectores: 3 x DisplayPort 1.4a, 2 x HDMI 2.1'],
    stats: ['Consumo de Energía: 320W', 'Boost Clock: 1710 MHz', 'Dimensiones: 2-slot, 285mm de longitud']
  },
  // Add more items as needed
];

const offers = [
  {
    imageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/laptop-Haier-H15C3-800x800.jpg.webp',
    hoverImageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/Haier-H15C3-1-1.jpg.webp',
    discount: '-20%',
    productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
    brand: 'Haier',
    sku: '000001',
    oldPrice: 'S/. 2500',
    newPrice: 'S/. 2000',
    stock: 3
  },
  {
    imageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/laptop-Haier-H15C3-800x800.jpg.webp',
    hoverImageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/Haier-H15C3-1-1.jpg.webp',
    discount: '-20%',
    productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
    brand: 'Haier',
    sku: '000001',
    oldPrice: 'S/. 2500',
    newPrice: 'S/. 2000',
    stock: 3
  },
  {
    imageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/laptop-Haier-H15C3-800x800.jpg.webp',
    hoverImageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/Haier-H15C3-1-1.jpg.webp',
    discount: '-20%',
    productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
    brand: 'Haier',
    sku: '000001',
    oldPrice: 'S/. 2500',
    newPrice: 'S/. 2000',
    stock: 3
  },
  {
    imageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/laptop-Haier-H15C3-800x800.jpg.webp',
    hoverImageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/Haier-H15C3-1-1.jpg.webp',
    discount: '-20%',
    productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
    brand: 'Haier',
    sku: '000001',
    oldPrice: 'S/. 2500',
    newPrice: 'S/. 2000',
    stock: 3
  },
  {
    imageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/laptop-Haier-H15C3-800x800.jpg.webp',
    hoverImageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/Haier-H15C3-1-1.jpg.webp',
    discount: '-20%',
    productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
    brand: 'Haier',
    sku: '000001',
    oldPrice: 'S/. 2500',
    newPrice: 'S/. 2000',
    stock: 3
  }
];  

const cpuData1 = {
  imageUrl: 'https://th.bing.com/th?id=OSK.HERO8dIIwTO5wxIKMOcLr5RJg75YgpmDxE7Bt4Yw44fvloU&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM',
  description: 'La CPU es el cerebro de una computadora, responsable de ejecutar instrucciones y procesar datos.',
  price: 299.99,
  specifications: [
      'Modelo: Intel Core i7-12700K',
      'Velocidad Base: 3.6 GHz',
      'Núcleos: 12',
      'Hilos: 24'
  ],
  stats: [
      'TDP: 125W',
      'Socket: LGA 1700',
      'Arquitectura: Alder Lake'
  ]
};

const items = [
  {
      title: 'cpu',
      imageUrl: 'https://th.bing.com/th?id=OSK.HERO8dIIwTO5wxIKMOcLr5RJg75YgpmDxE7Bt4Yw44fvloU&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM',
      description: 'La CPU es el cerebro de una computadora, responsable de ejecutar instrucciones y procesar datos.',
      price: '299.99',
      specifications: ['Modelo: Intel Core i7-12700K', 'Velocidad Base: 3.6 GHz', 'Núcleos: 12', 'Hilos: 24'],
      stats: ['TDP: 125W', 'Socket: LGA 1700', 'Arquitectura: Alder Lake']
  },
  {
    title: 'Gigabyte H410M H V2 Intel Motherboard (Bundle with PC)',
      imageUrl: 'https://www.ryans.com/storage/products/main/bundle-with-pc-gigabyte-h410m-h-v2-intel-11618310483.webp',
      description: 'La placa madre es el componente principal de un ordenador que conecta todos los demás componentes y permite que funcionen juntos de manera coordinada.',
      price: '149.99',
      specifications: ['Formato: ATX', 'Chipset: Intel Z690', 'Slots de Memoria: 4 DDR4', 'Slots PCIe: 3 x PCIe 4.0 x16, 3 x PCIe 4.0 x1'],
      stats: ['Conexiones USB: 6 x USB 3.2 Gen 2, 4 x USB 2.0', 'Conectividad: Gigabit LAN, Wi-Fi 6E', 'Audio: Realtek ALC4080, 7.1 Channels']
  },
  {
    title: 'FSP Hydro K PRO 500W Non-FUENTE DE ALIMENTACION(Modular Power Supply) #PPA5008108',
      imageUrl: 'https://www.ryans.com/storage/products/main/value-top-vt-s200b-plus-real-200w-11644647099.webp',
      description: 'La fuente de alimentación proporciona energía eléctrica a todos los componentes de tu computadora.',
      price: '299.99',
      specifications: ['Potencia: 600W', 'Conectores: SATA, PCIe, ATX', 'Compatibilidad: Todos los sistemas', 'Efficiency: 80 Plus Bronze','Protecciones: OVP, UVP, SCP, OPP'],
      stats: ['TDP: 125W', 'Socket: LGA 1700', 'Arquitectura: Alder Lake']
  },
  {
    title: 'Asus Xonar SE 5.1 PCIe Gaming Tarjeta de sonido',
      imageUrl: 'https://www.ryans.com/storage/products/main/-11547538253.webp',
      description: 'La tarjeta de sonido mejora la calidad y la salida de audio de tu computadora.',
      price: '99.99',
      specifications: ['Modelo: Asus,Asus Xonar AE', 'PCIe Gaming Sound Card', 'Playback (bit)44.1K/48K/88.2K/96K/176.4K/192KHz - 16bit/24bit', 'Processor: C-Media USB2.0 6632AE High-Definition Sound Processor (Max. 192KHz/24bit)'],
      stats: ['Canal: 7.1', 'Conectividad: PCIe', 'Compatibilidad: Windows, macOS, Linux','Software de Control: Incluido','Entradas/Salidas: RCA, Óptico, Jack 3.5mm']
  },
  {
    title: 'MEMORIA RAM HIKVISION 4GB 2666MHZ CL19 HKED4041BAA1D0ZA1/4G',
      imageUrl: 'https://www.infotec.com.pe/61484-medium_default/memoria-ram-hikvision-4gb-2666mhz-cl19-hked4041baa1d0za14g.jpg',
      description: 'La memoria RAM es un tipo de almacenamiento temporal que permite a la CPU acceder rápidamente a los datos necesarios para ejecutar programas y procesos.',
      price: '149.99',
      specifications: ['Capacidad: 16 GB', 'Velocidad: 3200 MHz', 'Tipo: DDR4', 'Hilos: 24'],
      stats: ['Latencia: CL16', 'Voltaje: 1.35V', 'Garantía: 5 años']
  },
  {
    title: 'Deepcool GH-01 TARJETA DE VIDEO(Graphics Card Holder) #DP-GCH2-GH01',
      imageUrl: 'https://www.ryans.com/storage/products/main/deepcool-gh-01-graphics-card-holder-11717049957.webp',
      description: 'La tarjeta de video es un componente esencial para los ordenadores que procesa datos gráficos y los muestra en el monitor, es fundamental para juegos y aplicaciones gráficamente intensivas',
      price: '249.99',
      specifications: ['GPU: NVIDIA GeForce RTX 3080', 'Memoria: 10GB GDDR6X', 'Interfaz: PCIe 4.0 x16', 'Conectores: 3 x DisplayPort 1.4a, 2 x HDMI 2.1'],
      stats: ['Consumo de Energía: 320W', 'Boost Clock: 1710 MHz', 'Dimensiones: 2-slot, 285mm de longitud']
  },
  {
    title: 'Disco Duro (HDD) - Unidad de Estado Sólido (SSD)',
      imageUrl: 'https://m.media-amazon.com/images/I/61AwEi1DPIL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      description: 'El disco duro es un dispositivo de almacenamiento permanente que guarda y recupera datos en un ordenador. Los HDDs utilizan discos giratorios y los SSDs utilizan memoria flash.',
      price: '349.99',
      specifications: ['Capacidad: 1TB (HDD) - 512GB (SSD)', 'Velocidad de Transferencia: 150 MB/s (HDD) - 550 MB/s (SSD)', 'Interfaz: SATA 3.0 (HDD) - NVMe PCIe 3.0 x4 (SSD)', 'Conectores: 3 x DisplayPort 1.4a, 2 x HDMI 2.1'],
      stats: ['Consumo de Energía: 6W (HDD) - 2.5W (SSD)', 'MTBF (Tiempo Medio Entre Fallas): 1.2 millones horas (HDD) - 2 millones horas (SSD)', 'Temperatura de Operación: 0°C a 60°C']
  },
  {
    title: 'Safeway DeepForce MTG-1923 Mid Tower Black E-ATX RGB Gaming Desktop Casing(CAJA)',
      imageUrl: 'https://www.ryans.com/storage/products/main/safeway-deepforce-mtg-1923-mid-tower-black-11614075597.webp',
      description: 'El case o caja de computadora protege y alberga todos los componentes internos de tu PC.',
      price: '69.99',
      specifications: ['Tamaño: ATX Mid Tower', 'Material: Acero', 'Ventilación: Ventiladores incluidos', 'Compatibilidad: Placas base ATX, Micro-ATX, Mini-ITX'],
      stats: [' Safeway DeepForce MTG-1923 Mid Tower Black E-ATX RGB Gaming Desktop Casing has no built-in power supply.']
  }

];




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <SubHeader />
            <BannerSlider />
            <ProductList />
            <CardVideoSlider />
            <ShowSection 
                title="Ofertas" 
                description="Apresúrate que se acaban" 
                offers={offers} 
            />
            <div className="new-arrivals-section">
                <NewArrivalCard
                    backgroundImage="https://mir-s3-cdn-cf.behance.net/projects/404/a2aaf3151269387.Y3JvcCwxNTUyLDEyMTQsMCww.png"
                    title="Laptops de Oficina"
                    description="Descripción del producto 1"
                />
                <NewArrivalCard
                    backgroundImage="https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529369.jpg"
                    title="Productos Gamer"
                    description="Descripción del producto 2"
                />
            </div>
            <ShowSection 
                title="Nuevos Productos" 
                description="Descubre lo último en tecnología" 
                offers={offers} 
            />
            <QualitySection />
            <FooterComponent />
          </>
        } />
        <Route path="/banner" element={<BannerSlider />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/videos" element={<CardVideoSlider />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/shoppingbag" element={<ShoppingBag />} />
        <Route path="/search" element={<SearchResults />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path='/management' element={<Management />} />
        <Route path='/salesproducts' element={
          <>
          <ComputerComponents />
          <ProductList/>
          <ListShowCards items={items}/>

            </>
          } />
          <Route path='/salesproducts/hardware' 
          element={<PeripheralList/>}
          />
                </Routes>
    </Router>
  </React.StrictMode>
);
