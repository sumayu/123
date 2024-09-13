import { useNavigate } from 'react-router-dom';

export default function MyComponent({ setinfo }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (setinfo === 2) {
            navigate('/trueAnswer'); // Переход на trueAnswer
        } else {
            navigate('/falseAnswer'); // Переход на falseAnswer
        }
    };

    return (
        <button onClick={handleClick}>
            Выбрать этот язык программирования
        </button>
    );
}
