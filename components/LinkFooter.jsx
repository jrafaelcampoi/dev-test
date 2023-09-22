export default function LinkFooter(props) {
    const content = props.content;

    return (
        <>
            <a className='cursor-pointer'>{content}</a>
        </>
    )
}