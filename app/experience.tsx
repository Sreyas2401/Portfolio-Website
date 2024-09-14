interface GridProps {
    company_name: string;
    role: string;
}

const points: Record<string, string[]>
= {
    'AOI': [
        'Implemented Protobuf-based APIs in C++ for ESP32 microchip for communication with Line Extenders and High Gain Dual',
        'Created a testing framework in Python for validating Bluetooth and HTTP API calls on the ESP32S3 microchip',
        'Engineered microservices-based architecture for cross-platform Flutter app, enabling Wi-Fi configuration and API exposure.',
        'Developed Docker containerized Bluetooth server for communication with Flutter app, handling Wi-Fi configuration and API exposure via BLE characteristics in Python.',
        'Optimized Gitlab CI/CD pipelines by integrating Kubernetes and streamlining build, test, and deploy workflows.'
    ],
    'UMass Amherst - Developable_Surfaces Project': [
        'Trained and Optimized 2D Signed Distance Function model with Hessian loss, improving surface developability by 15%',
        'Automated room extraction from floor plans using OpenCV and applied 2D Signed Distance Function model, enabling accurate 3D reconstruction',
        'Developed and applied Blender scripts to convert 2D floor plans into accurate 3D models.'
    ],
    'UMass Amherst - Facial Reconstruction project': [
        'Employed Bayesian Neural Networks to quantify uncertainty in facial landmark detection, incorporating dropout as Bayesian approximation, and optimized loss functions',
        'Collaborated with PhD candidates to integrate state-of-the-art 3D Morphable Face Models, resulting in 20% increase in reconstruction accuracy on benchmark datasets.',
        'Performed data processing and augmentation using Python and Pandas to improve model generalization.'
    ],
    'UMass Amherst - Enhancing MRI Scans with SRGAN Model project': [
        'Processed MRI dataset, performing image standardization and augmentation via OpenCV.',
        'Fine-tuned SRGAN Model with k-fold cross validation in PyTorch for resolution enhancement.',
        'Integrated edge detection layer to SRGAN architecture, improving image quality proven by decrease in FID score',
        'Presented research findings at University Computer Science Fair.'
    ]
};

const Grid: React.FC<GridProps> = ({ company_name, role }) => {

    const responsibilities = points[company_name] || ['No responsibilities added yet.'];
  
    return (
        <details>
          <summary>{role} at {company_name}</summary>
          <ul className="incremental">
            {responsibilities.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </details>
      );
  };
  
  const ExperienceTree = () => {
    return (
      <div>
        <h2 id="basic">Experience</h2>
        <Grid company_name="AOI" role="Software Engineer Intern" />
        <Grid company_name="UMass Amherst - Developable_Surfaces Project" role="Undergraduate Researcher" />
        <Grid company_name="UMass Amherst - Facial Reconstruction project" role="Undergraduate Researcher" />
        <Grid company_name="UMass Amherst - Enhancing MRI Scans with SRGAN Model project" role="Undergraduate Researcher" />
      </div>
    );
  };
  
  export default ExperienceTree;
  