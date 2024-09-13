import { Card } from "../../../components/Card/Card";
import { Footer } from "../../../components/Footer/Footer";
import { Header } from "../../../components/Header/Header";
import MyComponent from "../../../components/MyComponent/MyComponent"; // Импортируем MyComponent

export function TrueAnswer() {
    const setinfo = 2; // Устанавливаем значение setinfo

    return (
        <>
            <Header />
            <Card setinfo={setinfo} />
            <MyComponent setinfo={setinfo} /> {/* Передаем setinfo в MyComponent */}
            <Footer />
        </>
    );
}
