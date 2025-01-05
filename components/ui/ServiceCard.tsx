// components/ServiceCard.tsx
import {ReactNode} from 'react';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const ServiceCard = ({icon, title, description}: ServiceCardProps) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default ServiceCard;