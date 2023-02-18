const Title = ({ title, subtitle }) => {
    console.log(title)

    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export default Title