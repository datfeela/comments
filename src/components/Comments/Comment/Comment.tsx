export const Comment = (props: any) => {
    let { name, avatar, message, date, rating } = props.data;

    return (
        <div>
            <div>
                {name} {avatar}
            </div>
            <div>{message}</div>
            <div>{date.year}</div>
            <div>{rating}</div>
        </div>
    );
};
