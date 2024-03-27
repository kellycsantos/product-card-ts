import './App.css';
import Container from './components/Container';
import Card from './components/ProductCard';
import imageMobile from './assets/image-product-mobile.jpg'
import imageDesktop from './assets/image-product-desktop.jpg'



function App() {

  const product =
  {
    img: imageMobile,
    imgLarge: imageDesktop,
    category: 'perfume',
    title: 'Gabrielle Essence Eau De Parfum',
    description: `A floral, solar and voluptuous interpretation composed by Olivier Polge, 
    Perfumer-Creator for the House of CHANEL.`,
    value: '$149.99',
    discount: '$169.99',
  }
  return (
    <div className="App">
      <Container>

        <Card 
        img={product.img} 
        imgDesktop={product.imgLarge} 
        category={product.category}
        title={product.title}
        description={product.description}
        value={product.value}
        discount={product.discount}
        
        />
      </Container>
    </div>
  );
}

export default App;
