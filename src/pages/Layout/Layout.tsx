import Header from '../../components/common/header/Header';
import AppRoutes from '../../routes/Routes';
import Footer from '../../components/common/footer/Footer';

const Layout = () => {
    return (
        <div id='Wrapper'>
            <Header />
            <main>
                <AppRoutes/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;