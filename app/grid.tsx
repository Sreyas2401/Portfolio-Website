
interface GridProps {
    company_name: string;
    role?: string;
    dates: string;
    points: string[];
}

const Grid: React.FC<GridProps> = ({ company_name, role, dates, points }) => {

    return (
        <div className="experience-container">
            <div className="date-box">
                {dates}
            </div>
            <div className="details">
                <details>
                {role ? (
                        <summary>{role} at {company_name}</summary>
                    ) : (
                        <summary>{company_name}</summary>
                    )}
                <ul className="incremental">
                    {points.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </details>
        </div>
    </div>
    );
};

export default Grid;