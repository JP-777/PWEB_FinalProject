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
        title: 'Deepcool GH-01 TARJETA DE VIDEO(Graphics Card Holder) #DP-GCH2-GH01',
        imageUrl: 'https://www.ryans.com/storage/products/main/deepcool-gh-01-graphics-card-holder-11717049957.webp',
        description: 'La tarjeta de video es un componente esencial para los ordenadores que procesa datos gráficos y los muestra en el monitor, es fundamental para juegos y aplicaciones gráficamente intensivas',
        price: '249.99',
        specifications: ['GPU: NVIDIA GeForce RTX 3080', 'Memoria: 10GB GDDR6X', 'Interfaz: PCIe 4.0 x16', 'Conectores: 3 x DisplayPort 1.4a, 2 x HDMI 2.1'],
        stats: ['Consumo de Energía: 320W', 'Boost Clock: 1710 MHz', 'Dimensiones: 2-slot, 285mm de longitud']
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
        title: 'Deepcool GH-01 TARJETA DE VIDEO(Graphics Card Holder) #DP-GCH2-GH01',
        imageUrl: 'https://www.ryans.com/storage/products/main/deepcool-gh-01-graphics-card-holder-11717049957.webp',
        description: 'La tarjeta de video es un componente esencial para los ordenadores que procesa datos gráficos y los muestra en el monitor, es fundamental para juegos y aplicaciones gráficamente intensivas',
        price: '249.99',
        specifications: ['GPU: NVIDIA GeForce RTX 3080', 'Memoria: 10GB GDDR6X', 'Interfaz: PCIe 4.0 x16', 'Conectores: 3 x DisplayPort 1.4a, 2 x HDMI 2.1'],
        stats: ['Consumo de Energía: 320W', 'Boost Clock: 1710 MHz', 'Dimensiones: 2-slot, 285mm de longitud']
    },
    {
        title: 'Deepcool GH-01 TARJETA DE VIDEO(Graphics Card Holder) #DP-GCH2-GH01',
        imageUrl: 'https://www.ryans.com/storage/products/main/deepcool-gh-01-graphics-card-holder-11717049957.webp',
        description: 'La tarjeta de video es un componente esencial para los ordenadores que procesa datos gráficos y los muestra en el monitor, es fundamental para juegos y aplicaciones gráficamente intensivas',
        price: '249.99',
        specifications: ['GPU: NVIDIA GeForce RTX 3080', 'Memoria: 10GB GDDR6X', 'Interfaz: PCIe 4.0 x16', 'Conectores: 3 x DisplayPort 1.4a, 2 x HDMI 2.1'],
        stats: ['Consumo de Energía: 320W', 'Boost Clock: 1710 MHz', 'Dimensiones: 2-slot, 285mm de longitud']
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
