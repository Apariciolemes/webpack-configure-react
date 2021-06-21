interface RepositoryitemProps {
    repository: {
        name: string
        description: string
        html_url: string
    }
}


export function RepositoryItem(props: RepositoryitemProps) {
    return (
        <li>
            <strong> {props.repository?.name ?? 'Default'} </strong>
            <p> {props.repository?.description} </p>

            <a href={props.repository?.html_url}> Acessar Repo</a>
        </li>
    )

}