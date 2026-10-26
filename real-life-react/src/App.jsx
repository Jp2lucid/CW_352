import Navbar from './tasks/Navbar'
import ProductCard from './tasks/ProductCard'
import WeatherCard from './tasks/WeatherCard'
import OrderTracker from './tasks/OrderTracker'

function App() {
  return (
    <main>
      <h1>Conditional Rendering Workbook</h1>

      <h2>Task 1: Navbar</h2>
      <Navbar user={null} notifications={0} />
      <Navbar user={{ name: 'Maria', role: 'member' }} notifications={0} />
      <Navbar user={{ name: 'Jamal', role: 'member' }} notifications={3} />
      <Navbar user={{ name: 'Priya', role: 'admin' }} notifications={12} />

      <h2>Task 2: Product card</h2>
      <ProductCard name="Hoodie" price={45} stock={20} />
      <ProductCard name="Headphones" price={60} salePrice={30} stock={3} />
      <ProductCard name="Phone case" price={15} stock={0} />
      <ProductCard name="Sneakers" price={120} salePrice={89.99} stock={5} />

      <h2>Task 3: Weather card</h2>
      <WeatherCard city="Newark" tempF={28} condition="snow" windMph={10} />
      <WeatherCard city="Newark" tempF={45} condition="rain" windMph={30} />
      <WeatherCard city="Newark" tempF={68} condition="sunny" windMph={5} />
      <WeatherCard city="Newark" tempF={88} condition="cloudy" windMph={26} />
      <WeatherCard city="Newark" tempF={32} condition="rain" windMph={0} />

      <h2>Task 4: Order tracker</h2>
      {[
        ['placed', 35],
        ['preparing', 25],
        ['on_the_way', 12],
        ['delivered', 0],
        ['cancelled', 0],
      ].map(([status, eta]) => (
        <OrderTracker
          key={status}
          restaurant="Corner Pizza"
          driverName="Carlos"
          status={status}
          etaMinutes={eta}
        />
      ))}
    </main>
  )
}

export default App