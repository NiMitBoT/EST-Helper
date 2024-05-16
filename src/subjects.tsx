interface Subject {
    name: string;
    link: string;
    description: string;
}

function Subjects(data: Subject[]){
    return (
        <div className="MySubjects">
            <ul>
                {data.map((subject, index) => (
                    <li key={index}>
                        <b>{subject.name}: </b>
                        <a href={subject.link} target="_blank" rel="noopener noreferrer">{subject.description}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}