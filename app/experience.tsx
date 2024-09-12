interface GridProps {
    company_name: string;
    role: string;
}

const Grid: React.FC<GridProps> = ({ company_name, role}) => {
    return (
        <details>
        <summary>
            {role} at {company_name}
        </summary>
        <p>
        Hidden gems.
        </p>
        </details>
    );
};



const ExperienceTree = () => {
    return (
        <div>
            <h2 id="basic">experience</h2>
            <Grid company_name={'AOI'} role={'Software Engineer Intern'}/>
            <Grid company_name={"University of Massachusetts Amherst"} role={"Undergraduate Researcher"}/>
            <Grid company_name={"University of Massachusetts Amherst"} role={"Undergraduate Researcher"}/>
            <Grid company_name={"University of Massachusetts Amherst"} role={"Undergraduate Researcher"}/>
        </div>
    );
};

export default ExperienceTree;
