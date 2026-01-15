

const PrimaryButton = ({ onMyClick, img, text, className = "btn" }) => {
    return (
        <button onClick={onMyClick} className={className}>
            {img || text}
        </button>
    );
}

export default PrimaryButton;