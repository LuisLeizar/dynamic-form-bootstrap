import DynamicForm from "./components/DynamicForm";
import Introduction from "./components/Introduction";
import NavbarMenu from "./components/Navbar/NavbarMenu";
import Services from "./components/Services";

function App() {
    return (
        <>
            <NavbarMenu />
            <Introduction />
            <Services />
            <DynamicForm />
        </>
    );
}

export default App;
