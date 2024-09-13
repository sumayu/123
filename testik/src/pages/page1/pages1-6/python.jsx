import { Card } from "../../../components/Card/Card";
import { Footer } from "../../../components/Footer/Footer";
import { Header } from "../../../components/Header/Header";
import { MyComponent } from "./click";


export function Python() {
    const setinfo = 2; // Устанавливаем значение setinfo

    return (
        <>
            <Header />
            <Card setinfo={setinfo} />
            <MyComponent     setinfo={setinfo} />
            <Footer />
        </>
    );
}
