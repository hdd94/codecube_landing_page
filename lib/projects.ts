export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    challenge?: string;
    solution?: string;
}

export const projects = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'Entwicklung einer skalierbaren E-Commerce Plattform mit NextJS und Stripe Integration',
        image: '/app-hand.png',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
        challenge: 'Die Hauptherausforderung war die Integration eines skalierbaren Zahlungssystems und die Optimierung der Performance bei hoher Nutzerlast.',
        solution: 'Implementierung einer microservice-basierten Architektur mit Next.js für das Frontend und Stripe für sichere Zahlungsabwicklung.'
    },
    {
        id: '2',
        title: 'Cloud Migration',
        description: 'Migration einer Legacy-Infrastruktur zu AWS mit Microservices-Architektur',
        image: '/app-hand.png',
        technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
        challenge: 'Migration einer monolithischen Anwendung in eine moderne Cloud-Infrastruktur ohne Serviceunterbrechung.',
        solution: 'Schrittweise Migration mit Docker-Containerisierung und Kubernetes für orchestrierte Deployments.'
    },
    {
        id: '3',
        title: 'Security Dashboard',
        description: 'Entwicklung eines Security Monitoring Dashboards für Enterprise-Kunden',
        image: '/app-hand.png',
        technologies: ['React', 'GraphQL', 'Node.js', 'ElasticSearch'],
        challenge: 'Echtzeitverarbeitung und Visualisierung großer Mengen von Sicherheitsdaten.',
        solution: 'Implementierung einer Event-basierten Architektur mit ElasticSearch für Datenaggregation.'
    }
]